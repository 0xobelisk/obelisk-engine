System.register("q-bundled:///fs/pal/utils.js", ["../../virtual/internal%253Aconstants.js"], function (_export, _context) {
  "use strict";

  var EDITOR;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2022-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
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
  /**
   * This method clones methods in minigame environment, sub as `wx`, `swan` etc. to a module called minigame.
   * @param targetObject Usually it's specified as the minigame module.
   * @param originObj Original minigame environment such as `wx`, `swan` etc.
   */
  function cloneObject(targetObject, originObj) {
    Object.keys(originObj).forEach(function (key) {
      if (typeof originObj[key] === 'function') {
        targetObject[key] = originObj[key].bind(originObj);
        return;
      }
      targetObject[key] = originObj[key];
    });
  }
  /**
   * This method is to create a polyfill on minigame platform when the innerAudioContext callback doesn't work.
   * @param minigameEnv Specify the minigame enviroment such as `wx`, `swan` etc.
   * @param polyfillConfig Specify the field, if it's true, the polyfill callback will be applied.
   * @param isAsynchronous Specify whether the callback is called asynchronous.
   * @returns A polyfilled createInnerAudioContext method.
   */
  function createInnerAudioContextPolyfill(minigameEnv, polyfillConfig, isAsynchronous) {
    if (isAsynchronous === void 0) {
      isAsynchronous = false;
    }
    return function () {
      var audioContext = minigameEnv.createInnerAudioContext();

      // add polyfill if onPlay method doesn't work this platform
      if (polyfillConfig.onPlay) {
        var originalPlay = audioContext.play;
        var _onPlayCB = null;
        Object.defineProperty(audioContext, 'onPlay', {
          configurable: true,
          value: function value(cb) {
            _onPlayCB = cb;
          }
        });
        Object.defineProperty(audioContext, 'play', {
          configurable: true,
          value: function value() {
            originalPlay.call(audioContext);
            if (_onPlayCB) {
              if (isAsynchronous) {
                setTimeout(_onPlayCB, 0);
              } else {
                _onPlayCB();
              }
            }
          }
        });
      }

      // add polyfill if onPause method doesn't work this platform
      if (polyfillConfig.onPause) {
        var originalPause = audioContext.pause;
        var _onPauseCB = null;
        Object.defineProperty(audioContext, 'onPause', {
          configurable: true,
          value: function value(cb) {
            _onPauseCB = cb;
          }
        });
        Object.defineProperty(audioContext, 'pause', {
          configurable: true,
          value: function value() {
            originalPause.call(audioContext);
            if (_onPauseCB) {
              if (isAsynchronous) {
                setTimeout(_onPauseCB, 0);
              } else {
                _onPauseCB();
              }
            }
          }
        });
      }

      // add polyfill if onStop method doesn't work on this platform
      if (polyfillConfig.onStop) {
        var originalStop = audioContext.stop;
        var _onStopCB = null;
        Object.defineProperty(audioContext, 'onStop', {
          configurable: true,
          value: function value(cb) {
            _onStopCB = cb;
          }
        });
        Object.defineProperty(audioContext, 'stop', {
          configurable: true,
          value: function value() {
            originalStop.call(audioContext);
            if (_onStopCB) {
              if (isAsynchronous) {
                setTimeout(_onStopCB, 0);
              } else {
                _onStopCB();
              }
            }
          }
        });
      }

      // add polyfill if onSeeked method doesn't work on this platform
      if (polyfillConfig.onSeek) {
        var originalSeek = audioContext.seek;
        var _onSeekCB = null;
        Object.defineProperty(audioContext, 'onSeeked', {
          configurable: true,
          value: function value(cb) {
            _onSeekCB = cb;
          }
        });
        Object.defineProperty(audioContext, 'seek', {
          configurable: true,
          value: function value(time) {
            originalSeek.call(audioContext, time);
            if (_onSeekCB) {
              if (isAsynchronous) {
                setTimeout(_onSeekCB, 0);
              } else {
                _onSeekCB();
              }
            }
          }
        });
      }
      return audioContext;
    };
  }

  /**
   * Compare two version, version should in pattern like 3.0.0.
   * If versionA > versionB, return number larger than 0.
   * If versionA = versionB, return number euqal to 0.
   * If versionA < versionB, return number smaller than 0.
   * @param versionA
   * @param versionB
   */
  function versionCompare(versionA, versionB) {
    var versionRegExp = /\d+\.\d+\.\d+/;
    if (!(versionRegExp.test(versionA) && versionRegExp.test(versionB))) {
      console.warn('wrong format of version when compare version');
      return 0;
    }
    var versionNumbersA = versionA.split('.').map(function (num) {
      return Number.parseInt(num);
    });
    var versionNumbersB = versionB.split('.').map(function (num) {
      return Number.parseInt(num);
    });
    for (var i = 0; i < 3; ++i) {
      var numberA = versionNumbersA[i];
      var numberB = versionNumbersB[i];
      if (numberA !== numberB) {
        return numberA - numberB;
      }
    }
    return 0;
  }

  /**
   * A custom implementation of setTimeout that uses requestAnimationFrame.
   * @param callback The function to be executed after a delay.
   * @param delay The delay time in milliseconds.
   * @param args The arguments to be passed to the callback function.
   * @returns A unique identifier for the timer.
   */
  function setTimeoutRAF(callback, delay) {
    var _globalThis$__globalX;
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }
    var start = performance.now();
    var raf = requestAnimationFrame || window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
    if (EDITOR || raf === undefined || (_globalThis$__globalX = globalThis.__globalXR) !== null && _globalThis$__globalX !== void 0 && _globalThis$__globalX.isWebXR) {
      return setTimeout.apply(void 0, [callback, delay].concat(args));
    }
    var handleRAF = function handleRAF() {
      if (performance.now() - start < delay) {
        raf(handleRAF);
      } else {
        callback.apply(void 0, args);
      }
    };
    return raf(handleRAF);
  }

  /**
   * Cancels a timer that was created using the rafTimeout function.
   * @param id A numeric ID that represents the timer to be canceled.
   * @returns Nothing.
   */
  function clearTimeoutRAF(id) {
    var _globalThis$__globalX2;
    var caf = cancelAnimationFrame || window.cancelAnimationFrame || window.cancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.webkitCancelRequestAnimationFrame || window.msCancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.ocancelAnimationFrame;
    if (EDITOR || caf === undefined || (_globalThis$__globalX2 = globalThis.__globalXR) !== null && _globalThis$__globalX2 !== void 0 && _globalThis$__globalX2.isWebXR) {
      clearTimeout(id);
    } else {
      caf(id);
    }
  }
  _export({
    cloneObject: cloneObject,
    createInnerAudioContextPolyfill: createInnerAudioContextPolyfill,
    versionCompare: versionCompare,
    setTimeoutRAF: setTimeoutRAF,
    clearTimeoutRAF: clearTimeoutRAF
  });
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
    }],
    execute: function () {}
  };
});
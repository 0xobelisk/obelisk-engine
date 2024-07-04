System.register("q-bundled:///fs/pal/audio/audio-timer.js", ["../../cocos/core/math/utils.js"], function (_export, _context) {
  "use strict";

  var clamp, AudioTimer;
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
  _export("default", void 0);
  return {
    setters: [function (_cocosCoreMathUtilsJs) {
      clamp = _cocosCoreMathUtilsJs.clamp;
    }],
    execute: function () {
      /**
       * Tool class to calculate audio current time.
       * For some platforms where audio.currentTime doesn't work well or isn't implemented.
       */
      _export("default", AudioTimer = class AudioTimer {
        constructor(nativeAudio) {
          this._nativeAudio = void 0;
          this._startTime = 0;
          this._startOffset = 0;
          this._isPaused = true;
          this._nativeAudio = nativeAudio;
        }
        destroy() {
          // NOTE: 'undefined' is not assignable to type 'IDuration'
          this._nativeAudio = undefined;
        }
        get duration() {
          return this._nativeAudio.duration;
        }

        /**
         * Get the current time of audio timer.
         */
        get currentTime() {
          if (this._isPaused) {
            return this._startOffset;
          } else {
            return this._calculateCurrentTime();
          }
        }
        _now() {
          return performance.now() / 1000;
        }
        _calculateCurrentTime() {
          const timePassed = this._now() - this._startTime;
          const currentTime = this._startOffset + timePassed;
          if (currentTime >= this.duration) {
            // timer loop
            this._startTime = this._now();
            this._startOffset = 0;
          }
          return currentTime % this.duration;
        }

        /**
         * Start the audio timer.
         * Call this method when audio is played.
         */
        start() {
          this._isPaused = false;
          this._startTime = this._now();
        }

        /**
         * Pause the audio timer.
         * Call this method when audio is paused or interrupted.
         */
        pause() {
          if (this._isPaused) {
            return;
          }
          this._isPaused = true;
          this._startOffset = this._calculateCurrentTime();
        }

        /**
         * Stop the audio timer.
         * Call this method when audio playing ended or audio is stopped.
         */
        stop() {
          this._isPaused = true;
          this._startOffset = 0;
        }

        /**
         * Seek the audio timer.
         * Call this method when audio is seeked.
         */
        seek(time) {
          this._startTime = this._now();
          this._startOffset = clamp(time, 0, this.duration);
        }
      });
    }
  };
});
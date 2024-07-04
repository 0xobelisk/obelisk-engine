System.register("q-bundled:///fs/pal/audio/type.js", [], function (_export, _context) {
  "use strict";

  var AudioPCMDataView, AudioEvent, AudioType, AudioState;
  _export({
    AudioPCMDataView: void 0,
    AudioEvent: void 0,
    AudioType: void 0,
    AudioState: void 0
  });
  return {
    setters: [],
    execute: function () {
      (function (AudioEvent) {
        AudioEvent["PLAYED"] = "play";
        AudioEvent["PAUSED"] = "pause";
        AudioEvent["STOPPED"] = "stop";
        AudioEvent["SEEKED"] = "seeked";
        AudioEvent["ENDED"] = "ended";
        AudioEvent["INTERRUPTION_BEGIN"] = "interruptionBegin";
        AudioEvent["INTERRUPTION_END"] = "interruptionEnd";
        AudioEvent["USER_GESTURE"] = "on_gesture";
      })(AudioEvent || _export("AudioEvent", AudioEvent = {}));
      (function (AudioType) {
        AudioType[AudioType["DOM_AUDIO"] = 0] = "DOM_AUDIO";
        AudioType[AudioType["WEB_AUDIO"] = 1] = "WEB_AUDIO";
        AudioType[AudioType["MINIGAME_AUDIO"] = 2] = "MINIGAME_AUDIO";
        AudioType[AudioType["NATIVE_AUDIO"] = 3] = "NATIVE_AUDIO";
        AudioType[AudioType["UNKNOWN_AUDIO"] = 4] = "UNKNOWN_AUDIO";
      })(AudioType || _export("AudioType", AudioType = {}));
      (function (AudioState) {
        AudioState[AudioState["INIT"] = 0] = "INIT";
        AudioState[AudioState["PLAYING"] = 1] = "PLAYING";
        AudioState[AudioState["PAUSED"] = 2] = "PAUSED";
        AudioState[AudioState["STOPPED"] = 3] = "STOPPED";
        AudioState[AudioState["INTERRUPTED"] = 4] = "INTERRUPTED";
      })(AudioState || _export("AudioState", AudioState = {}));
      _export("AudioPCMDataView", AudioPCMDataView = class AudioPCMDataView {
        constructor(...args) {
          this._bufferView = void 0;
          this._normalizeFactor = 1;
          if (args.length === 2) {
            this._bufferView = args[0];
            this._normalizeFactor = args[1];
          } else {
            const arrayBuffer = args[0];
            const Ctor = args[1];
            const normalizeFactor = args[2];
            this._bufferView = new Ctor(arrayBuffer);
            this._normalizeFactor = normalizeFactor;
          }
        }
        get length() {
          return this._bufferView.length;
        }
        getData(offset) {
          return this._bufferView[offset] * this._normalizeFactor;
        }
      });
    }
  };
});
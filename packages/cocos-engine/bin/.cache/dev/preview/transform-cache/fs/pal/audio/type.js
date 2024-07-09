System.register("q-bundled:///fs/pal/audio/type.js", [], function (_export, _context) {
  "use strict";

  var AudioEvent, AudioType, AudioState, AudioPCMDataView;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  _export({
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
      _export("AudioPCMDataView", AudioPCMDataView = /*#__PURE__*/function () {
        function AudioPCMDataView() {
          this._bufferView = void 0;
          this._normalizeFactor = 1;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          if (args.length === 2) {
            this._bufferView = args[0];
            this._normalizeFactor = args[1];
          } else {
            var _arrayBuffer = args[0];
            var _Ctor = args[1];
            var _normalizeFactor = args[2];
            this._bufferView = new _Ctor(_arrayBuffer);
            this._normalizeFactor = _normalizeFactor;
          }
        }
        var _proto = AudioPCMDataView.prototype;
        _proto.getData = function getData(offset) {
          return this._bufferView[offset] * this._normalizeFactor;
        };
        _createClass(AudioPCMDataView, [{
          key: "length",
          get: function get() {
            return this._bufferView.length;
          }
        }]);
        return AudioPCMDataView;
      }());
    }
  };
});
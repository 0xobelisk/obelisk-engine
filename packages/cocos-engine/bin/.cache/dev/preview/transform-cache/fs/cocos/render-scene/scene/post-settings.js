System.register("q-bundled:///fs/cocos/render-scene/scene/post-settings.js", ["../../core/index.js"], function (_export, _context) {
  "use strict";

  var Enum, cclegacy, ToneMappingType, PostSettings;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  return {
    setters: [function (_coreIndexJs) {
      Enum = _coreIndexJs.Enum;
      cclegacy = _coreIndexJs.cclegacy;
    }],
    execute: function () {
      _export("ToneMappingType", ToneMappingType = Enum({
        DEFAULT: 0,
        LINEAR: 1
      }));
      _export("PostSettings", PostSettings = /*#__PURE__*/function () {
        function PostSettings() {
          this._toneMappingType = ToneMappingType.DEFAULT;
          this._activated = false;
        }
        var _proto = PostSettings.prototype;
        _proto.initialize = function initialize(postSettingsInfo) {
          this._toneMappingType = postSettingsInfo.toneMappingType;
        };
        _proto.activate = function activate() {
          this._updatePipeline();
          this._activated = true;
        };
        _proto._updatePipeline = function _updatePipeline() {
          var root = cclegacy.director.root;
          var pipeline = root.pipeline;
          pipeline.macros.CC_TONE_MAPPING_TYPE = this._toneMappingType;
          if (this._activated) {
            root.onGlobalPipelineStateChanged();
          }
        };
        _createClass(PostSettings, [{
          key: "toneMappingType",
          get: function get() {
            return this._toneMappingType;
          },
          set: function set(val) {
            this._toneMappingType = val;
            this._updatePipeline();
          }
        }]);
        return PostSettings;
      }());
    }
  };
});
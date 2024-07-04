System.register("q-bundled:///fs/cocos/rendering/post-process/passes/setting-pass.js", ["../components/post-process-setting.js", "../utils/pass-context.js", "./base-pass.js"], function (_export, _context) {
  "use strict";

  var PostProcessSetting, passContext, BasePass, SettingPass;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function getSetting(settingClass) {
    var cls = settingClass;
    var setting = passContext.postProcess && passContext.postProcess.getSetting(cls);
    return setting;
  }
  _export("getSetting", getSetting);
  return {
    setters: [function (_componentsPostProcessSettingJs) {
      PostProcessSetting = _componentsPostProcessSettingJs.PostProcessSetting;
    }, function (_utilsPassContextJs) {
      passContext = _utilsPassContextJs.passContext;
    }, function (_basePassJs) {
      BasePass = _basePassJs.BasePass;
    }],
    execute: function () {
      _export("SettingPass", SettingPass = /*#__PURE__*/function (_BasePass) {
        _inheritsLoose(SettingPass, _BasePass);
        function SettingPass() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BasePass.call.apply(_BasePass, [this].concat(args)) || this;
          _this.getSetting = getSetting;
          return _this;
        }
        var _proto = SettingPass.prototype;
        _proto.checkEnable = function checkEnable(camera) {
          var enable = _BasePass.prototype.checkEnable.call(this, camera);
          var setting = this.setting;
          return enable && !!setting && setting.enabledInHierarchy;
        };
        _createClass(SettingPass, [{
          key: "setting",
          get: function get() {
            return this.getSetting(PostProcessSetting);
          }
        }]);
        return SettingPass;
      }(BasePass));
    }
  };
});
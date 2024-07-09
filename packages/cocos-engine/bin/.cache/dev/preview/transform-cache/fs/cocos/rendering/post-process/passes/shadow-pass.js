System.register("q-bundled:///fs/cocos/rendering/post-process/passes/shadow-pass.js", ["../../custom/define.js", "../utils/pass-context.js", "./base-pass.js"], function (_export, _context) {
  "use strict";

  var buildShadowPasses, getCameraUniqueID, passContext, BasePass, ShadowPass;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  return {
    setters: [function (_customDefineJs) {
      buildShadowPasses = _customDefineJs.buildShadowPasses;
      getCameraUniqueID = _customDefineJs.getCameraUniqueID;
    }, function (_utilsPassContextJs) {
      passContext = _utilsPassContextJs.passContext;
    }, function (_basePassJs) {
      BasePass = _basePassJs.BasePass;
    }],
    execute: function () {
      _export("ShadowPass", ShadowPass = /*#__PURE__*/function (_BasePass) {
        _inheritsLoose(ShadowPass, _BasePass);
        function ShadowPass() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BasePass.call.apply(_BasePass, [this].concat(args)) || this;
          _this.name = 'ShadowPass';
          _this.mainLightShadows = [];
          _this.spotLightShadows = [];
          return _this;
        }
        var _proto = ShadowPass.prototype;
        _proto.render = function render(camera, ppl) {
          passContext.shadowPass = this;
          var cameraID = getCameraUniqueID(camera);
          var cameraName = "Camera" + cameraID;
          var shadowInfo = buildShadowPasses(cameraName, camera, ppl);
          this.mainLightShadows = shadowInfo.mainLightShadowNames;
          this.spotLightShadows = shadowInfo.spotLightShadowNames;
        };
        return ShadowPass;
      }(BasePass));
    }
  };
});
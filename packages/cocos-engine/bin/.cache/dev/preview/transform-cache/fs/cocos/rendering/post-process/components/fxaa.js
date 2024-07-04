System.register("q-bundled:///fs/cocos/rendering/post-process/components/fxaa.js", ["../../../core/data/decorators/index.js", "./post-process-setting.js"], function (_export, _context) {
  "use strict";

  var ccclass, disallowMultiple, executeInEditMode, help, menu, PostProcessSetting, _dec, _dec2, _dec3, _class, FXAA;
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      disallowMultiple = _coreDataDecoratorsIndexJs.disallowMultiple;
      executeInEditMode = _coreDataDecoratorsIndexJs.executeInEditMode;
      help = _coreDataDecoratorsIndexJs.help;
      menu = _coreDataDecoratorsIndexJs.menu;
    }, function (_postProcessSettingJs) {
      PostProcessSetting = _postProcessSettingJs.PostProcessSetting;
    }],
    execute: function () {
      _export("FXAA", FXAA = (_dec = ccclass('cc.FXAA'), _dec2 = help('cc.FXAA'), _dec3 = menu('PostProcess/FXAA'), _dec(_class = _dec2(_class = _dec3(_class = disallowMultiple(_class = executeInEditMode(_class = /*#__PURE__*/function (_PostProcessSetting) {
        _inheritsLoose(FXAA, _PostProcessSetting);
        function FXAA() {
          return _PostProcessSetting.apply(this, arguments) || this;
        }
        return FXAA;
      }(PostProcessSetting)) || _class) || _class) || _class) || _class) || _class));
    }
  };
});
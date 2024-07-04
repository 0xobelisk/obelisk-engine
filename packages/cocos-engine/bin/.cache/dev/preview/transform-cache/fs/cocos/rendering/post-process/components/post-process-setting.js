System.register("q-bundled:///fs/cocos/rendering/post-process/components/post-process-setting.js", ["../../../core/data/decorators/index.js", "../../../scene-graph/index.js", "./post-process.js"], function (_export, _context) {
  "use strict";

  var ccclass, executeInEditMode, requireComponent, Component, PostProcess, _dec, _dec2, _class, PostProcessSetting;
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      executeInEditMode = _coreDataDecoratorsIndexJs.executeInEditMode;
      requireComponent = _coreDataDecoratorsIndexJs.requireComponent;
    }, function (_sceneGraphIndexJs) {
      Component = _sceneGraphIndexJs.Component;
    }, function (_postProcessJs) {
      PostProcess = _postProcessJs.PostProcess;
    }],
    execute: function () {
      _export("PostProcessSetting", PostProcessSetting = (_dec = ccclass('cc.PostProcessSetting'), _dec2 = requireComponent(PostProcess), _dec(_class = _dec2(_class = executeInEditMode(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PostProcessSetting, _Component);
        function PostProcessSetting() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = PostProcessSetting.prototype;
        _proto.onEnable = function onEnable() {
          var pp = this.getComponent(PostProcess);
          pp === null || pp === void 0 ? void 0 : pp.addSetting(this);
        };
        _proto.onDisable = function onDisable() {
          var pp = this.getComponent(PostProcess);
          pp === null || pp === void 0 ? void 0 : pp.removeSetting(this);
        };
        return PostProcessSetting;
      }(Component)) || _class) || _class) || _class));
    }
  };
});
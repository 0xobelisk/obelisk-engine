System.register("q-bundled:///fs/cocos/ui/view-group.js", ["../core/data/decorators/index.js", "../scene-graph/component.js", "../core/global-exports.js"], function (_export, _context) {
  "use strict";

  var ccclass, executionOrder, Component, legacyCC, _dec, _dec2, _class, ViewGroup;
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      executionOrder = _coreDataDecoratorsIndexJs.executionOrder;
    }, function (_sceneGraphComponentJs) {
      Component = _sceneGraphComponentJs.Component;
    }, function (_coreGlobalExportsJs) {
      legacyCC = _coreGlobalExportsJs.legacyCC;
    }],
    execute: function () {
      _export("ViewGroup", ViewGroup = (_dec = ccclass('cc.ViewGroup'), _dec2 = executionOrder(110), _dec(_class = _dec2(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ViewGroup, _Component);
        function ViewGroup() {
          return _Component.apply(this, arguments) || this;
        }
        return ViewGroup;
      }(Component)) || _class) || _class));
      legacyCC.ViewGroup = ViewGroup;
    }
  };
});
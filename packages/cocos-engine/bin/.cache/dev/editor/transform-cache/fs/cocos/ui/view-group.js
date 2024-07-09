System.register("q-bundled:///fs/cocos/ui/view-group.js", ["../core/data/decorators/index.js", "../scene-graph/component.js", "../core/global-exports.js"], function (_export, _context) {
  "use strict";

  var ccclass, executionOrder, Component, legacyCC, _dec, _dec2, _class, ViewGroup;
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
      _export("ViewGroup", ViewGroup = (_dec = ccclass('cc.ViewGroup'), _dec2 = executionOrder(110), _dec(_class = _dec2(_class = class ViewGroup extends Component {}) || _class) || _class));
      legacyCC.ViewGroup = ViewGroup;
    }
  };
});
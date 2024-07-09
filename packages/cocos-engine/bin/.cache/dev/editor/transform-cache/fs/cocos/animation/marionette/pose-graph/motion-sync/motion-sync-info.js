System.register("q-bundled:///fs/cocos/animation/marionette/pose-graph/motion-sync/motion-sync-info.js", ["../../../../core/data/decorators/index.js", "../../../define.js"], function (_export, _context) {
  "use strict";

  var ccclass, editable, serializable, CLASS_NAME_PREFIX_ANIM, _dec, _class, _class2, _initializer, MotionSyncInfo;
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      editable = _coreDataDecoratorsIndexJs.editable;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_defineJs) {
      CLASS_NAME_PREFIX_ANIM = _defineJs.CLASS_NAME_PREFIX_ANIM;
    }],
    execute: function () {
      _export("MotionSyncInfo", MotionSyncInfo = (_dec = ccclass(`${CLASS_NAME_PREFIX_ANIM}MotionSyncInfo`), _dec(_class = (_class2 = class MotionSyncInfo {
        constructor() {
          this.group = _initializer && _initializer();
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "group", [editable, serializable], function () {
        return '';
      })), _class2)) || _class));
    }
  };
});
System.register("q-bundled:///fs/cocos/animation/marionette/state-machine/condition/binding/editor.js", ["../../../../../../../virtual/internal%253Aconstants.js", "../../../../../core/index.js", "./binding.js"], function (_export, _context) {
  "use strict";

  var EDITOR, assertIsTrue, js, TCBinding, tcnBindingTypeInfoMap, provide, TCBindingTransitionSourceFilter, support;
  // eslint-disable-next-line @typescript-eslint/ban-types
  function getOrCreateTCBindingTypeInfo(target) {
    assertIsTrue(js.isChildClassOf(target, TCBinding), `This method can only be applied to subclasses of TCBinding`);
    const constructor = target;
    let info = tcnBindingTypeInfoMap.get(constructor);
    if (!info) {
      info = {};
      tcnBindingTypeInfoMap.set(constructor, info);
    }
    return info;
  }
  /**
   * @zh 获取指定（过渡条件）绑定类的类型信息。
   * @zh Gets the type info of specified (transition condition)binding class.
   * @param constructor @zh 该绑定类的构造函数。@en The binding class's constructor.
   * @returns @zh 类型信息。@en Type info.
   */
  function getTCBindingTypeInfo(constructor) {
    return tcnBindingTypeInfoMap.get(constructor);
  }
  _export({
    getTCBindingTypeInfo: getTCBindingTypeInfo,
    TCBindingTransitionSourceFilter: void 0
  });
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
    }, function (_coreIndexJs) {
      assertIsTrue = _coreIndexJs.assertIsTrue;
      js = _coreIndexJs.js;
    }, function (_bindingJs) {
      TCBinding = _bindingJs.TCBinding;
    }],
    execute: function () {
      /**
       * @zh
       * 描述某个（过渡条件）绑定类的类型信息。
       * @en
       * Describes the type info of a (transition condition)binding class.
       */
      tcnBindingTypeInfoMap = new WeakMap();
      _export("provide", provide = (...valueTypes) => !EDITOR ? () => {} : target => {
        const info = getOrCreateTCBindingTypeInfo(target);
        info.provisions = valueTypes.slice();
      });
      (function (TCBindingTransitionSourceFilter) {
        TCBindingTransitionSourceFilter[TCBindingTransitionSourceFilter["MOTION"] = 1] = "MOTION";
        TCBindingTransitionSourceFilter[TCBindingTransitionSourceFilter["POSE"] = 2] = "POSE";
        TCBindingTransitionSourceFilter[TCBindingTransitionSourceFilter["EMPTY"] = 4] = "EMPTY";
        TCBindingTransitionSourceFilter[TCBindingTransitionSourceFilter["WEIGHTED"] = 7] = "WEIGHTED";
      })(TCBindingTransitionSourceFilter || _export("TCBindingTransitionSourceFilter", TCBindingTransitionSourceFilter = {}));
      _export("support", support = transitionSourceFilter => !EDITOR ? () => {} : target => {
        const info = getOrCreateTCBindingTypeInfo(target);
        info.transitionSourceFilter = transitionSourceFilter;
      });
    }
  };
});
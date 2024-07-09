System.register("q-bundled:///fs/cocos/core/internal-index.js", ["./utils/jsb-utils.js", "./data/decorators/editable.js", "./data/decorators/override.js", "./data/decorators/serializable.js", "./algorithm/binary-search.js", "./algorithm/move.js", "./data/garbage-collection.js", "./data/gc-object.js", "./data/utils/asserts.js", "./data/utils/compiler.js", "./data/utils/attribute-internal.js", "./data/class.js", "./data/object.js", "./curves/easing-method.js", "./event/callbacks-invoker.js", "./event/event-target-factory.js", "./platform/debug.js"], function (_export, _context) {
  "use strict";

  var jsbUtils;
  return {
    setters: [function (_utilsJsbUtilsJs) {
      jsbUtils = _utilsJsbUtilsJs;
    }, function (_dataDecoratorsEditableJs) {
      _export({
        editable: _dataDecoratorsEditableJs.editable,
        tooltip: _dataDecoratorsEditableJs.tooltip,
        visible: _dataDecoratorsEditableJs.visible,
        displayName: _dataDecoratorsEditableJs.displayName,
        displayOrder: _dataDecoratorsEditableJs.displayOrder,
        range: _dataDecoratorsEditableJs.range,
        rangeStep: _dataDecoratorsEditableJs.rangeStep,
        slide: _dataDecoratorsEditableJs.slide,
        disallowAnimation: _dataDecoratorsEditableJs.disallowAnimation
      });
    }, function (_dataDecoratorsOverrideJs) {
      _export("override", _dataDecoratorsOverrideJs.override);
    }, function (_dataDecoratorsSerializableJs) {
      _export({
        formerlySerializedAs: _dataDecoratorsSerializableJs.formerlySerializedAs,
        serializable: _dataDecoratorsSerializableJs.serializable
      });
    }, function (_algorithmBinarySearchJs) {
      var _exportObj = {};
      for (var _key in _algorithmBinarySearchJs) {
        if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _algorithmBinarySearchJs[_key];
      }
      _export(_exportObj);
    }, function (_algorithmMoveJs) {
      _export("shift", _algorithmMoveJs.shift);
    }, function (_dataGarbageCollectionJs) {
      _export("garbageCollectionManager", _dataGarbageCollectionJs.garbageCollectionManager);
    }, function (_dataGcObjectJs) {
      _export("GCObject", _dataGcObjectJs.GCObject);
    }, function (_dataUtilsAssertsJs) {
      var _exportObj2 = {};
      for (var _key2 in _dataUtilsAssertsJs) {
        if (_key2 !== "default" && _key2 !== "__esModule") _exportObj2[_key2] = _dataUtilsAssertsJs[_key2];
      }
      _export(_exportObj2);
    }, function (_dataUtilsCompilerJs) {
      var _exportObj3 = {};
      for (var _key3 in _dataUtilsCompilerJs) {
        if (_key3 !== "default" && _key3 !== "__esModule") _exportObj3[_key3] = _dataUtilsCompilerJs[_key3];
      }
      _export(_exportObj3);
    }, function (_dataUtilsAttributeInternalJs) {
      _export({
        setPropertyEnumType: _dataUtilsAttributeInternalJs.setPropertyEnumType,
        setPropertyEnumTypeOnAttrs: _dataUtilsAttributeInternalJs.setPropertyEnumTypeOnAttrs
      });
    }, function (_dataClassJs) {
      _export({
        ENUM_TAG: _dataClassJs.ENUM_TAG,
        BITMASK_TAG: _dataClassJs.BITMASK_TAG
      });
    }, function (_dataObjectJs) {
      _export({
        isCCObject: _dataObjectJs.isCCObject,
        isValid: _dataObjectJs.isValid
      });
    }, function (_curvesEasingMethodJs) {
      _export("EasingMethod", _curvesEasingMethodJs.EasingMethod);
    }, function (_eventCallbacksInvokerJs) {
      _export("CallbacksInvoker", _eventCallbacksInvokerJs.CallbacksInvoker);
    }, function (_eventEventTargetFactoryJs) {
      _export("applyMixins", _eventEventTargetFactoryJs.applyMixins);
    }, function (_platformDebugJs) {
      _export("_resetDebugSetting", _platformDebugJs._resetDebugSetting);
    }],
    execute: function () {
      /*
       Copyright (c) 2022-2023 Xiamen Yaji Software Co., Ltd.
      
       https://www.cocos.com/
      
       Permission is hereby granted, free of charge, to any person obtaining a copy
       of this software and associated documentation files (the "Software"), to deal
       in the Software without restriction, including without limitation the rights to
       use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
       of the Software, and to permit persons to whom the Software is furnished to do so,
       subject to the following conditions:
      
       The above copyright notice and this permission notice shall be included in
       all copies or substantial portions of the Software.
      
       THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       THE SOFTWARE.
      */
      // This file only exports functions/classes that are only visible to engine internal.
      /**
       * @engineInternal
       */
      _export("jsbUtils", jsbUtils);
    }
  };
});
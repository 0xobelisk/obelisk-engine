System.register("q-bundled:///fs/cocos/core/data/class.js", ["../../../../virtual/internal%253Aconstants.js", "../platform/debug.js", "../utils/js.js", "../value-types/index.js", "../value-types/enum.js", "./utils/attribute.js", "./utils/preprocess-class.js", "./utils/requiring-frame.js", "../global-exports.js", "./class-stash.js", "./utils/attribute-internal.js"], function (_export, _context) {
  "use strict";

  var DEV, EDITOR, SUPPORT_JIT, TEST, errorID, warnID, error, js, getSuper, BitMask, Enum, attributeUtils, preprocessAttrs, RF, legacyCC, PropertyStashInternalFlag, setPropertyEnumTypeOnAttrs, DELIMETER, CCCLASS_TAG, ENUM_TAG, BITMASK_TAG, IDENTIFIER_RE, PrimitiveTypes, onAfterProps_ET;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2013-2016 Chukong Technologies Inc.
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2017-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                             http://www.cocos.com
                                                                                                                                                                                                                                                                                                                                                                                            
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
  function pushUnique(array, item) {
    if (array.indexOf(item) < 0) {
      array.push(item);
    }
  }

  // both getter and prop must register the name into `__props__` array
  function appendProp(cls, name) {
    if (DEV) {
      // if (!IDENTIFIER_RE.test(name)) {
      //    error('The property name "' + name + '" is not compliant with JavaScript naming standards');
      //    return;
      // }
      if (name.indexOf('.') !== -1) {
        errorID(3634);
        return;
      }
    }
    pushUnique(cls.__props__, name);
  }
  function defineProp(cls, className, propName, val) {
    if (DEV) {
      // check base prototype to avoid name collision
      if (CCClass.getInheritanceChain(cls)
      // eslint-disable-next-line no-prototype-builtins
      .some(function (x) {
        return x.prototype.hasOwnProperty(propName);
      })) {
        errorID(3637, className, propName, className);
        return;
      }
    }
    appendProp(cls, propName);

    // apply attributes
    parseAttributes(cls, val, className, propName, false);
    if (EDITOR && !window.Build || TEST) {
      for (var i = 0; i < onAfterProps_ET.length; i++) {
        onAfterProps_ET[i](cls, propName);
      }
      onAfterProps_ET.length = 0;
    }
  }
  function defineGetSet(cls, name, propName, val) {
    var getter = val.get;
    var setter = val.set;
    if (getter) {
      parseAttributes(cls, val, name, propName, true);
      if (EDITOR && !window.Build || TEST) {
        onAfterProps_ET.length = 0;
      }
      attributeUtils.setClassAttr(cls, propName, 'serializable', false);
      if (DEV) {
        // 不论是否 visible 都要添加到 props，否则 asset watcher 不能正常工作
        appendProp(cls, propName);
      }
      if (EDITOR || DEV) {
        attributeUtils.setClassAttr(cls, propName, 'hasGetter', true); // 方便 editor 做判断
      }
    }

    if (setter) {
      if (EDITOR || DEV) {
        attributeUtils.setClassAttr(cls, propName, 'hasSetter', true); // 方便 editor 做判断
      }
    }
  }

  function getDefault(defaultVal) {
    if (typeof defaultVal === 'function') {
      if (EDITOR) {
        try {
          return defaultVal();
        } catch (e) {
          legacyCC._throw(e);
          return undefined;
        }
      } else {
        return defaultVal();
      }
    }
    return defaultVal;
  }
  function doDefine(className, baseClass, options) {
    var ctor = options.ctor;
    if (DEV) {
      // check ctor
      if (CCClass._isCCClass(ctor)) {
        errorID(3618, className);
      }
    }
    js.value(ctor, CCCLASS_TAG, true, true);
    var prototype = ctor.prototype;
    if (baseClass) {
      ctor.$super = baseClass;
    }
    js.setClassName(className, ctor);
    return ctor;
  }
  function define(className, baseClass, options) {
    var Component = legacyCC.Component;
    var frame = RF.peek();
    if (frame && js.isChildClassOf(baseClass, Component)) {
      // project component
      if (js.isChildClassOf(frame.cls, Component)) {
        errorID(3615);
        return null;
      }
      if (DEV && frame.uuid && className) {
        // warnID(3616, className);
      }
      className = className || frame.script;
    }
    var cls = doDefine(className, baseClass, options);
    if (EDITOR) {
      // for RenderPipeline, RenderFlow, RenderStage
      var isRenderPipeline = js.isChildClassOf(baseClass, legacyCC.RenderPipeline);
      var isRenderFlow = js.isChildClassOf(baseClass, legacyCC.RenderFlow);
      var isRenderStage = js.isChildClassOf(baseClass, legacyCC.RenderStage);
      var isRender = isRenderPipeline || isRenderFlow || isRenderStage;
      if (isRender) {
        var renderName = '';
        if (isRenderPipeline) {
          renderName = 'render_pipeline';
        } else if (isRenderFlow) {
          renderName = 'render_flow';
        } else if (isRenderStage) {
          renderName = 'render_stage';
        }
        // 增加了 hidden: 开头标识，使它最终不会显示在 Editor inspector 的添加组件列表里

        window.EditorExtends && window.EditorExtends.Component.addMenu(cls, "hidden:" + renderName + "/" + className, -1);
      }

      // Note: `options.ctor` should be the same as `cls` except if
      // cc-class is defined by `cc.Class({/* ... */})`.
      // In such case, `options.ctor` may be `undefined`.
      // So we can not use `options.ctor`. Instead, we should use `cls` which is the "real" registered cc-class.
      EditorExtends.emit('class-registered', cls, frame, className);
    }
    if (frame) {
      // 基础的 ts, js 脚本组件
      if (js.isChildClassOf(baseClass, Component)) {
        var uuid = frame.uuid;
        if (uuid) {
          js._setClassId(uuid, cls);
          if (EDITOR) {
            cls.prototype.__scriptUuid = EditorExtends.UuidUtils.decompressUuid(uuid);
          }
        }
        frame.cls = cls;
      } else if (!js.isChildClassOf(frame.cls, Component)) {
        frame.cls = cls;
      }
    }
    return cls;
  }
  function getNewValueTypeCodeJit(value) {
    var clsName = js.getClassName(value);
    var type = value.constructor;
    var res = "new " + clsName + "(";
    for (var i = 0; i < type.__props__.length; i++) {
      var prop = type.__props__[i];
      var propVal = value[prop];
      if (DEV && typeof propVal === 'object') {
        errorID(3641, clsName);
        return "new " + clsName + "()";
      }
      res += propVal;
      if (i < type.__props__.length - 1) {
        res += ',';
      }
    }
    return res + ")";
  }

  // TODO - move escapeForJS, IDENTIFIER_RE, getNewValueTypeCodeJit to misc.js or a new source file

  // convert a normal string including newlines, quotes and Unicode characters into a string literal
  // ready to use in JavaScript source
  function escapeForJS(s) {
    return JSON.stringify(s)
    // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
    .replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
  }

  // simple test variable name

  function declareProperties(cls, className, properties, baseClass) {
    cls.__props__ = [];
    if (baseClass && baseClass.__props__) {
      cls.__props__ = baseClass.__props__.slice();
    }
    if (properties) {
      // 预处理属性
      preprocessAttrs(properties, className, cls);
      for (var propName in properties) {
        var val = properties[propName];
        if (!val.get && !val.set) {
          defineProp(cls, className, propName, val);
        } else {
          defineGetSet(cls, className, propName, val);
        }
      }
    }
    var attrs = attributeUtils.getClassAttrs(cls);
    cls.__values__ = cls.__props__.filter(function (prop) {
      return attrs["" + prop + DELIMETER + "serializable"] !== false;
    });
  }
  function CCClass(options) {
    var name = options.name;
    var base = options["extends"] /* || CCObject */;

    // create constructor
    var cls = define(name, base, options);
    if (!name) {
      name = legacyCC.js.getClassName(cls);
    }
    cls._sealed = true;
    if (base) {
      base._sealed = false;
    }

    // define Properties
    var properties = options.properties;
    declareProperties(cls, name, properties, base);
    var editor = options.editor;
    if (editor) {
      if (js.isChildClassOf(base, legacyCC.Component)) {
        legacyCC.Component._registerEditorProps(cls, editor);
      } else if (DEV) {
        warnID(3623, name);
      }
    }
    return cls;
  }

  /**
   * @en
   * Checks whether the constructor is initialized by `@ccclass`.
   * @zh
   * 检查构造函数是否经由 `@ccclass` 初始化。
   * @method _isCCClass
   * @param {Function} constructor
   * @return {Boolean}
   * @private
   */

  /**
   * Returns if the class is a cc-class or is fast-defined.
   * @param constructor The constructor of the class.
   * @returns Judge result.
   * @engineInternal
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  function isCCClassOrFastDefined(constructor) {
    var _constructor$hasOwnPr2;
    // eslint-disable-next-line no-prototype-builtins, @typescript-eslint/no-unsafe-return
    return constructor === null || constructor === void 0 ? void 0 : (_constructor$hasOwnPr2 = constructor.hasOwnProperty) === null || _constructor$hasOwnPr2 === void 0 ? void 0 : _constructor$hasOwnPr2.call(constructor, '__values__');
  }
  /**
   * Return all super classes.
   * @param constructor The Constructor.
   */
  function getInheritanceChain(constructor) {
    var chain = [];
    for (;;) {
      constructor = getSuper(constructor);
      if (!constructor) {
        break;
      }
      if (constructor !== Object) {
        chain.push(constructor);
      }
    }
    return chain;
  }
  function parseAttributes(constructor, attributes, className, propertyName, usedInGetter) {
    var ERR_Type = DEV ? 'The %s of %s must be type %s' : '';
    var attrs = null;
    var propertyNamePrefix = '';
    function initAttrs() {
      propertyNamePrefix = propertyName + DELIMETER;
      return attrs = attributeUtils.getClassAttrs(constructor);
    }
    if (EDITOR && !window.Build || TEST) {
      onAfterProps_ET.length = 0;
    }
    if ('type' in attributes && typeof attributes.type === 'undefined') {
      warnID(3660, propertyName, className);
    }
    var warnOnNoDefault = true;
    var type = attributes.type;
    if (type) {
      var primitiveType = PrimitiveTypes[type];
      if (primitiveType) {
        (attrs || initAttrs())[propertyNamePrefix + "type"] = type;
        if ((EDITOR && !window.Build || TEST) && !attributes._short) {
          onAfterProps_ET.push(attributeUtils.getTypeChecker_ET(primitiveType, "cc." + type));
        }
      } else if (type === 'Object') {
        if (DEV) {
          errorID(3644, className, propertyName);
        }
      }
      // else if (type === Attr.ScriptUuid) {
      //     (attrs || initAttrs())[propertyNamePrefix + 'type'] = 'Script';
      //     attrs[propertyNamePrefix + 'ctor'] = cc.ScriptAsset;
      // }
      else if (typeof type === 'object') {
        if (Enum.isEnum(type)) {
          setPropertyEnumTypeOnAttrs(attrs || initAttrs(), propertyName, type);
        } else if (BitMask.isBitMask(type)) {
          (attrs || initAttrs())[propertyNamePrefix + "type"] = BITMASK_TAG;
          attrs[propertyNamePrefix + "bitmaskList"] = BitMask.getList(type);
        } else if (DEV) {
          errorID(3645, className, propertyName, type);
        }
      } else if (typeof type === 'function') {
        // Do not warn missing-default if the type is object
        warnOnNoDefault = false;
        (attrs || initAttrs())[propertyNamePrefix + "type"] = 'Object';
        attrs[propertyNamePrefix + "ctor"] = type;
        if ((EDITOR && !window.Build || TEST) && !attributes._short) {
          onAfterProps_ET.push(attributeUtils.getObjTypeChecker_ET(type));
        }
      } else if (DEV) {
        errorID(3646, className, propertyName, type);
      }
    }
    if ('default' in attributes) {
      (attrs || initAttrs())[propertyNamePrefix + "default"] = attributes["default"];
    } else if ((EDITOR && !window.Build || TEST) && warnOnNoDefault && !(attributes.get || attributes.set)) {
      // TODO: we close this warning for now:
      // issue: https://github.com/cocos/3d-tasks/issues/14887
      // warnID(3654, className, propertyName);
    }
    var parseSimpleAttribute = function parseSimpleAttribute(attributeName, expectType) {
      if (attributeName in attributes) {
        var val = attributes[attributeName];
        if (typeof val === expectType) {
          (attrs || initAttrs())[propertyNamePrefix + attributeName] = val;
        } else if (DEV) {
          error(ERR_Type, attributeName, className, propertyName, expectType);
        }
      }
    };
    if (attributes.editorOnly) {
      if (DEV && usedInGetter) {
        errorID(3613, 'editorOnly', className, propertyName);
      } else {
        (attrs || initAttrs())[propertyNamePrefix + "editorOnly"] = true;
      }
    }
    // parseSimpleAttr('preventDeferredLoad', 'boolean');
    if (DEV) {
      parseSimpleAttribute('displayName', 'string');
      parseSimpleAttribute('displayOrder', 'number');
      parseSimpleAttribute('multiline', 'boolean');
      parseSimpleAttribute('radian', 'boolean');
      if (attributes.readonly) {
        (attrs || initAttrs())[propertyNamePrefix + "readonly"] = attributes.readonly;
      }
      parseSimpleAttribute('tooltip', 'string');
      if (attributes.group) {
        (attrs || initAttrs())[propertyNamePrefix + "group"] = attributes.group;
      }
      parseSimpleAttribute('slide', 'boolean');
      parseSimpleAttribute('unit', 'string');
      parseSimpleAttribute('userData', 'object');
      parseSimpleAttribute('radioGroup', 'boolean');
    }
    var isStandaloneMode = attributes.__internalFlags & PropertyStashInternalFlag.STANDALONE;
    var normalizedSerializable;
    if (isStandaloneMode) {
      normalizedSerializable = attributes.serializable === true || (attributes.__internalFlags & PropertyStashInternalFlag.IMPLICIT_SERIALIZABLE) !== 0;
    } else if (attributes.serializable === false) {
      normalizedSerializable = false;
      if (DEV && usedInGetter) {
        errorID(3613, 'serializable', className, propertyName);
      }
    }
    if (typeof normalizedSerializable !== 'undefined') {
      (attrs || initAttrs())[propertyNamePrefix + "serializable"] = normalizedSerializable;
    }
    parseSimpleAttribute('formerlySerializedAs', 'string');
    if (DEV) {
      if ('animatable' in attributes) {
        (attrs || initAttrs())[propertyNamePrefix + "animatable"] = attributes.animatable;
      }
    }
    if (DEV) {
      var visible = attributes.visible;
      var normalizedVisible;
      switch (typeof visible) {
        case 'boolean':
        case 'function':
          normalizedVisible = visible;
          break;
        default:
          {
            if (isStandaloneMode) {
              normalizedVisible = (attributes.__internalFlags & PropertyStashInternalFlag.IMPLICIT_VISIBLE) !== 0;
            } else {
              var startsWithUS = propertyName.charCodeAt(0) === 95;
              if (startsWithUS) {
                normalizedVisible = false;
              }
            }
          }
      }
      if (typeof normalizedVisible !== 'undefined') {
        (attrs || initAttrs())[propertyNamePrefix + "visible"] = normalizedVisible;
      }
    }
    var range = attributes.range;
    if (range) {
      if (Array.isArray(range)) {
        if (range.length >= 2) {
          (attrs || initAttrs())[propertyNamePrefix + "min"] = range[0];
          attrs[propertyNamePrefix + "max"] = range[1];
          if (range.length > 2) {
            attrs[propertyNamePrefix + "step"] = range[2];
          }
        } else if (DEV) {
          errorID(3647);
        }
      } else if (DEV) {
        error(ERR_Type, 'range', className, propertyName, 'array');
      }
    }
    parseSimpleAttribute('min', 'number');
    parseSimpleAttribute('max', 'number');
    parseSimpleAttribute('step', 'number');
  }
  _export({
    CCClass: CCClass,
    isCCClassOrFastDefined: isCCClassOrFastDefined
  });
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      DEV = _virtualInternal253AconstantsJs.DEV;
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
      SUPPORT_JIT = _virtualInternal253AconstantsJs.SUPPORT_JIT;
      TEST = _virtualInternal253AconstantsJs.TEST;
    }, function (_platformDebugJs) {
      errorID = _platformDebugJs.errorID;
      warnID = _platformDebugJs.warnID;
      error = _platformDebugJs.error;
    }, function (_utilsJsJs) {
      js = _utilsJsJs;
      getSuper = _utilsJsJs.getSuper;
    }, function (_valueTypesIndexJs) {
      BitMask = _valueTypesIndexJs.BitMask;
    }, function (_valueTypesEnumJs) {
      Enum = _valueTypesEnumJs.Enum;
    }, function (_utilsAttributeJs) {
      attributeUtils = _utilsAttributeJs;
    }, function (_utilsPreprocessClassJs) {
      preprocessAttrs = _utilsPreprocessClassJs.preprocessAttrs;
    }, function (_utilsRequiringFrameJs) {
      RF = _utilsRequiringFrameJs;
    }, function (_globalExportsJs) {
      legacyCC = _globalExportsJs.legacyCC;
    }, function (_classStashJs) {
      PropertyStashInternalFlag = _classStashJs.PropertyStashInternalFlag;
    }, function (_utilsAttributeInternalJs) {
      setPropertyEnumTypeOnAttrs = _utilsAttributeInternalJs.setPropertyEnumTypeOnAttrs;
    }],
    execute: function () {
      DELIMETER = attributeUtils.DELIMETER;
      CCCLASS_TAG = '__ctors__'; // Still use this historical name to avoid unsynchronized version issue
      /**
       * @engineInternal
       */
      _export("ENUM_TAG", ENUM_TAG = 'Enum');
      /**
       * @engineInternal
       */
      _export("BITMASK_TAG", BITMASK_TAG = 'BitMask');
      IDENTIFIER_RE = /^[A-Za-z_$][0-9A-Za-z_$]*$/;
      CCClass._isCCClass = function isCCClass(constructor) {
        var _constructor$hasOwnPr;
        // Does not support fastDefined class (ValueType).
        // Use `instanceof ValueType` if necessary.
        // eslint-disable-next-line no-prototype-builtins, @typescript-eslint/no-unsafe-return
        return constructor === null || constructor === void 0 ? void 0 : (_constructor$hasOwnPr = constructor.hasOwnProperty) === null || _constructor$hasOwnPr === void 0 ? void 0 : _constructor$hasOwnPr.call(constructor, CCCLASS_TAG); // Remember, the static variable is not inheritable
      };

      //
      // Optimized define function only for internal classes
      //
      // @method fastDefine
      // @param {String} className
      // @param {Function} constructor
      // @param {Object} serializableFields
      // @private
      //
      CCClass.fastDefine = function (className, constructor, serializableFields) {
        js.setClassName(className, constructor);
        var props = constructor.__props__ = constructor.__values__ = Object.keys(serializableFields);
        var attrs = attributeUtils.getClassAttrs(constructor);
        for (var i = 0; i < props.length; i++) {
          var key = props[i];
          attrs[key + DELIMETER + "visible"] = false;
          attrs[key + DELIMETER + "default"] = serializableFields[key];
        }
      };
      CCClass.Attr = attributeUtils;
      CCClass.attr = attributeUtils.attr;
      CCClass.isCCClassOrFastDefined = isCCClassOrFastDefined;
      CCClass.getInheritanceChain = getInheritanceChain;
      PrimitiveTypes = {
        // Specify that the input value must be integer in Properties.
        // Also used to indicates that the type of elements in array or the type of value in dictionary is integer.
        Integer: 'Number',
        // Indicates that the type of elements in array or the type of value in dictionary is double.
        Float: 'Number',
        Boolean: 'Boolean',
        String: 'String'
      };
      onAfterProps_ET = [];
      CCClass.isArray = function (defaultVal) {
        defaultVal = getDefault(defaultVal);
        return Array.isArray(defaultVal);
      };
      CCClass.getDefault = getDefault;
      CCClass.escapeForJS = escapeForJS;
      CCClass.IDENTIFIER_RE = IDENTIFIER_RE;
      // NOTE: the type of getNewValueTypeCode can be ((value: any) => string) or boolean.
      CCClass.getNewValueTypeCode = SUPPORT_JIT && getNewValueTypeCodeJit;
      legacyCC.Class = CCClass;
    }
  };
});
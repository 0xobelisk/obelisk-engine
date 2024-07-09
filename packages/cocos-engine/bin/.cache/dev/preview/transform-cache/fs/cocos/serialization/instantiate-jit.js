System.register("q-bundled:///fs/cocos/serialization/instantiate-jit.js", ["../../../virtual/internal%253Aconstants.js", "../core/index.js"], function (_export, _context) {
  "use strict";

  var TEST, CCClass, isCCClassOrFastDefined, js, CCObject, isCCObject, cclegacy, flattenCodeArray, Destroyed, PersistentMask, DEFAULT, IDENTIFIER_RE, VAR, LOCAL_OBJ, LOCAL_TEMP_OBJ, LOCAL_ARRAY, LINE_INDEX_OF_NEW_OBJ, DEFAULT_MODULE_CACHE, escapeForJS, Declaration, Assignments, Parser;
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
                                                                                                                                                                                                                                                                                                                                                                                            */ // Some helper methods for compile instantiation code
  // ('a =', 'var b = x')
  // -> 'var b = a = x';
  // ('a =', 'x')
  // -> 'a = x';
  function mergeDeclaration(statement, expression) {
    if (expression instanceof Declaration) {
      return new Declaration(expression.varName, statement + expression.expression);
    } else {
      return statement + expression;
    }
  }

  // ('a', ['var b = x', 'b.foo = bar'])
  // -> 'var b = a = x;'
  // -> 'b.foo = bar;'
  // ('a', 'var b = x')
  // -> 'var b = a = x;'
  // ('a', 'x')
  // -> 'a = x;'
  function writeAssignment(codeArray, statement, expression) {
    if (Array.isArray(expression)) {
      expression[0] = mergeDeclaration(statement, expression[0]);
      codeArray.push(expression);
    } else {
      codeArray.push(mergeDeclaration(statement, expression) + ";");
    }
  }

  // ('foo', 'bar')
  // -> 'targetExpression.foo = bar'
  // ('foo1', 'bar1')
  // ('foo2', 'bar2')
  // -> 't = targetExpression;'
  // -> 't.foo1 = bar1;'
  // -> 't.foo2 = bar2;'

  // HELPER FUNCTIONS

  function getPropAccessor(key) {
    return IDENTIFIER_RE.test(key) ? "." + key : "[" + escapeForJS(key) + "]";
  }

  //

  /*
   * Variables:
   * {Object[]} O - objs list
   * {Function[]} F - constructor list
   * {Node} [R] - specify an instantiated prefabRoot that all references to prefabRoot in prefab will redirect to
   * {Object} o - current creating object
   */

  function equalsToDefault(def, value) {
    if (typeof def === 'function') {
      try {
        def = def();
      } catch (e) {
        return false;
      }
    }
    if (def === value) {
      return true;
    }
    if (def && value && typeof def === 'object' && typeof value === 'object' && def.constructor === value.constructor) {
      if (def instanceof cclegacy.ValueType) {
        if (def.equals(value)) {
          return true;
        }
      } else if (Array.isArray(def)) {
        return def.length === 0 && value.length === 0;
      } else if (def.constructor === Object) {
        return js.isEmptyObject(def) && js.isEmptyObject(value);
      }
    }
    return false;
  }
  function compile(node) {
    var root = node instanceof cclegacy.Node && node;
    var parser = new Parser(node, root);
    return parser.result;
  }
  _export({
    equalsToDefault: equalsToDefault,
    compile: compile
  });
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      TEST = _virtualInternal253AconstantsJs.TEST;
    }, function (_coreIndexJs) {
      CCClass = _coreIndexJs.CCClass;
      isCCClassOrFastDefined = _coreIndexJs.isCCClassOrFastDefined;
      js = _coreIndexJs.js;
      CCObject = _coreIndexJs.CCObject;
      isCCObject = _coreIndexJs.isCCObject;
      cclegacy = _coreIndexJs.cclegacy;
      flattenCodeArray = _coreIndexJs.flattenCodeArray;
    }],
    execute: function () {
      Destroyed = CCObject.Flags.Destroyed;
      PersistentMask = CCObject.Flags.PersistentMask;
      DEFAULT = CCClass.Attr.DELIMETER + "default";
      IDENTIFIER_RE = CCClass.IDENTIFIER_RE;
      VAR = 'var ';
      LOCAL_OBJ = 'o';
      LOCAL_TEMP_OBJ = 't';
      LOCAL_ARRAY = 'a';
      LINE_INDEX_OF_NEW_OBJ = 0;
      DEFAULT_MODULE_CACHE = {
        'cc.ClickEvent': false,
        'cc.PrefabInfo': false
      };
      escapeForJS = CCClass.escapeForJS; // HELPER CLASSES
      // ('foo', 'bar')
      // -> 'var foo = bar;'
      Declaration = /*#__PURE__*/function () {
        function Declaration(varName, expression) {
          this.varName = void 0;
          this.expression = void 0;
          this.varName = varName;
          this.expression = expression;
        }
        var _proto = Declaration.prototype;
        _proto.toString = function toString() {
          return VAR + this.varName + "=" + this.expression + ";";
        };
        return Declaration;
      }();
      Assignments = /*#__PURE__*/function () {
        function Assignments(targetExpression) {
          this._exps = void 0;
          this._targetExp = void 0;
          this._exps = [];
          this._targetExp = targetExpression;
        }
        var _proto2 = Assignments.prototype;
        _proto2.append = function append(key, expression) {
          this._exps.push([key, expression]);
        };
        _proto2.writeCode = function writeCode(codeArray) {
          var targetVar;
          if (this._exps.length > 1) {
            codeArray.push(LOCAL_TEMP_OBJ + "=" + this._targetExp + ";");
            targetVar = LOCAL_TEMP_OBJ;
          } else if (this._exps.length === 1) {
            targetVar = this._targetExp;
          } else {
            return;
          }
          for (var i = 0; i < this._exps.length; i++) {
            var pair = this._exps[i];
            writeAssignment(codeArray, targetVar + getPropAccessor(pair[0]) + "=", pair[1]);
          }
        };
        return Assignments;
      }();
      Assignments.pool = void 0;
      Assignments.pool = new js.Pool(function (obj) {
        obj._exps.length = 0;
        obj._targetExp = null;
      }, 1);
      // HACK: here we've changed the signature of get method
      Assignments.pool.get = function (targetExpression) {
        var cache = this._get() || new Assignments();
        cache._targetExp = targetExpression;
        return cache;
      };
      Parser = /*#__PURE__*/function () {
        /*
        * @method constructor
        * @param {Object} obj - the object to parse
        * @param {Node} [parent]
        */
        function Parser(obj, parent) {
          this.parent = void 0;
          this.objsToClear_iN$t = void 0;
          this.codeArray = void 0;
          this.objs = void 0;
          this.funcs = void 0;
          this.funcModuleCache = void 0;
          this.globalVariables = void 0;
          this.globalVariableId = void 0;
          this.localVariableId = void 0;
          this.result = void 0;
          this.parent = parent;
          this.objsToClear_iN$t = []; // used to reset _iN$t variable
          this.codeArray = [];

          // datas for generated code
          this.objs = [];
          this.funcs = [];
          this.funcModuleCache = js.createMap();
          js.mixin(this.funcModuleCache, DEFAULT_MODULE_CACHE);

          // {String[]} - variable names for circular references,
          //              not really global, just local variables shared between sub functions
          this.globalVariables = [];
          // incremental id for new global variables
          this.globalVariableId = 0;
          // incremental id for new local variables
          this.localVariableId = 0;

          // generate codeArray
          // if (Array.isArray(obj)) {
          //    this.codeArray.push(this.instantiateArray(obj));
          // }
          // else {
          this.codeArray.push(VAR + LOCAL_OBJ + "," + LOCAL_TEMP_OBJ + ";", 'if(R){', LOCAL_OBJ + "=R;", '}else{', LOCAL_OBJ + "=R=new " + this.getFuncModule(obj.constructor, true) + "();", '}');
          obj._iN$t = {
            globalVar: 'R'
          };
          this.objsToClear_iN$t.push(obj);
          this.enumerateObject(this.codeArray, obj);
          // }

          // generate code
          var globalVariablesDeclaration;
          if (this.globalVariables.length > 0) {
            globalVariablesDeclaration = VAR + this.globalVariables.join(',') + ";";
          }
          var code = flattenCodeArray(['return (function(R){', globalVariablesDeclaration || [], this.codeArray, 'return o;', '})']);

          // generate method and bind with objs
          this.result = Function('O', 'F', code)(this.objs, this.funcs);

          // if (TEST && !isPhantomJS) {
          //     console.log(code);
          // }

          // cleanup
          for (var i = 0, len = this.objsToClear_iN$t.length; i < len; ++i) {
            this.objsToClear_iN$t[i]._iN$t = null;
          }
          this.objsToClear_iN$t.length = 0;
        }
        var _proto3 = Parser.prototype;
        _proto3.getFuncModule = function getFuncModule(func, usedInNew) {
          var clsName = js.getClassName(func);
          if (clsName) {
            var cache = this.funcModuleCache[clsName];
            if (cache) {
              return cache;
            } else if (cache === undefined) {
              var clsNameIsModule = clsName.indexOf('.') !== -1;
              if (clsNameIsModule) {
                try {
                  // ensure is module
                  clsNameIsModule = func === Function("return " + clsName)();
                  if (clsNameIsModule) {
                    this.funcModuleCache[clsName] = clsName;
                    return clsName;
                  }
                } catch (e) {}
              }
            }
          }
          var index = this.funcs.indexOf(func);
          if (index < 0) {
            index = this.funcs.length;
            this.funcs.push(func);
          }
          var res = "F[" + index + "]";
          if (usedInNew) {
            res = "(" + res + ")";
          }
          this.funcModuleCache[clsName] = res;
          return res;
        };
        _proto3.getObjRef = function getObjRef(obj) {
          var index = this.objs.indexOf(obj);
          if (index < 0) {
            index = this.objs.length;
            this.objs.push(obj);
          }
          return "O[" + index + "]";
        };
        _proto3.setValueType = function setValueType(codeArray, defaultValue, srcValue, targetExpression) {
          // HACK: here we've changed the signature of get method.
          var assignments = Assignments.pool.get(targetExpression);
          var fastDefinedProps = defaultValue.constructor.__props__;
          if (!fastDefinedProps) {
            fastDefinedProps = Object.keys(defaultValue);
          }
          for (var i = 0; i < fastDefinedProps.length; i++) {
            var propName = fastDefinedProps[i];
            var prop = srcValue[propName];
            if (defaultValue[propName] === prop) {
              continue;
            }
            var expression = this.enumerateField(srcValue, propName, prop);
            assignments.append(propName, expression);
          }
          assignments.writeCode(codeArray);
          Assignments.pool.put(assignments);
        };
        _proto3.enumerateCCClass = function enumerateCCClass(codeArray, obj, klass) {
          var props = klass.__values__;
          var attrs = CCClass.Attr.getClassAttrs(klass);
          for (var p = 0; p < props.length; p++) {
            var key = props[p];
            var val = obj[key];
            var defaultValue = attrs[key + DEFAULT];
            if (equalsToDefault(defaultValue, val)) {
              continue;
            }
            if (typeof val === 'object' && val instanceof cclegacy.ValueType) {
              defaultValue = CCClass.getDefault(defaultValue);
              if (defaultValue && defaultValue.constructor === val.constructor) {
                // fast case
                var targetExpression = LOCAL_OBJ + getPropAccessor(key);
                this.setValueType(codeArray, defaultValue, val, targetExpression);
                continue;
              }
            }
            this.setObjProp(codeArray, obj, key, val);
          }
        };
        _proto3.instantiateArray = function instantiateArray(value) {
          if (value.length === 0) {
            return '[]';
          }
          var arrayVar = LOCAL_ARRAY + ++this.localVariableId;
          var declaration = new Declaration(arrayVar, "new Array(" + value.length + ")");
          var codeArray = [declaration];

          // assign a _iN$t flag to indicate that this object has been parsed.
          value._iN$t = {
            globalVar: '',
            // the name of declared global variable used to access this object
            source: codeArray // the source code array for this object
          };

          this.objsToClear_iN$t.push(value);
          for (var i = 0; i < value.length; ++i) {
            var statement = arrayVar + "[" + i + "]=";
            var expression = this.enumerateField(value, i, value[i]);
            writeAssignment(codeArray, statement, expression);
          }
          return codeArray;
        };
        _proto3.instantiateTypedArray = function instantiateTypedArray(value) {
          var type = value.constructor.name;
          if (value.length === 0) {
            return "new " + type;
          }
          var arrayVar = LOCAL_ARRAY + ++this.localVariableId;
          var declaration = new Declaration(arrayVar, "new " + type + "(" + value.length + ")");
          var codeArray = [declaration];

          // assign a _iN$t flag to indicate that this object has been parsed.
          value._iN$t = {
            globalVar: '',
            // the name of declared global variable used to access this object
            source: codeArray // the source code array for this object
          };

          this.objsToClear_iN$t.push(value);
          for (var i = 0; i < value.length; ++i) {
            if (value[i] !== 0) {
              var statement = arrayVar + "[" + i + "]=";
              writeAssignment(codeArray, statement, value[i]);
            }
          }
          return codeArray;
        };
        _proto3.enumerateField = function enumerateField(obj, key, value) {
          if (typeof value === 'object' && value) {
            var _iN$t = value._iN$t;
            if (_iN$t) {
              // parsed
              var globalVar = _iN$t.globalVar;
              if (!globalVar) {
                // declare a global var
                globalVar = _iN$t.globalVar = "v" + ++this.globalVariableId;
                this.globalVariables.push(globalVar);
                // insert assignment statement to assign to global var
                var line = _iN$t.source[LINE_INDEX_OF_NEW_OBJ];
                _iN$t.source[LINE_INDEX_OF_NEW_OBJ] = mergeDeclaration(globalVar + "=", line);
                // if (typeof line ==='string' && line.startsWith(VAR)) {
                //     // var o=xxx -> var o=global=xxx
                //     var LEN_OF_VAR_O = 5;
                //     _iN$t.source[LINE_INDEX_OF_NEW_OBJ] = line.slice(0, LEN_OF_VAR_O) + '=' + globalVar + line.slice(LEN_OF_VAR_O);
                // }
              }

              return globalVar;
            } else if (ArrayBuffer.isView(value)) {
              return this.instantiateTypedArray(value);
            } else if (Array.isArray(value)) {
              return this.instantiateArray(value);
            } else {
              return this.instantiateObj(value);
            }
          } else if (typeof value === 'function') {
            return this.getFuncModule(value);
          } else if (typeof value === 'string') {
            return escapeForJS(value);
          } else {
            if (key === '_objFlags' && isCCObject(obj)) {
              value &= PersistentMask;
            }
            return value;
          }
        };
        _proto3.setObjProp = function setObjProp(codeArray, obj, key, value) {
          var statement = LOCAL_OBJ + getPropAccessor(key) + "=";
          var expression = this.enumerateField(obj, key, value);
          writeAssignment(codeArray, statement, expression);
        }

        // codeArray - the source code array for this object
        ;
        _proto3.enumerateObject = function enumerateObject(codeArray, obj) {
          var klass = obj.constructor;
          if (isCCClassOrFastDefined(klass)) {
            this.enumerateCCClass(codeArray, obj, klass);
          } else {
            // primitive javascript object
            for (var key in obj) {
              if (!obj.hasOwnProperty(key) || key.charCodeAt(0) === 95 && key.charCodeAt(1) === 95 // starts with "__"
              && key !== '__type__') {
                continue;
              }
              var value = obj[key];
              if (typeof value === 'object' && value && value === obj._iN$t) {
                continue;
              }
              this.setObjProp(codeArray, obj, key, value);
            }
          }
        };
        _proto3.instantiateObj = function instantiateObj(obj) {
          if (obj instanceof cclegacy.ValueType) {
            return CCClass.getNewValueTypeCode(obj);
          }
          if (obj instanceof cclegacy.Asset) {
            // register to asset list and just return the reference.
            return this.getObjRef(obj);
          }
          if (obj._objFlags & Destroyed) {
            // the same as cc.isValid(obj)
            return null;
          }
          var createCode;
          var ctor = obj.constructor;
          if (isCCClassOrFastDefined(ctor)) {
            if (this.parent) {
              if (this.parent instanceof cclegacy.Component) {
                if (obj instanceof cclegacy.Node || obj instanceof cclegacy.Component) {
                  return this.getObjRef(obj);
                }
              } else if (this.parent instanceof cclegacy.Node) {
                if (obj instanceof cclegacy.Node) {
                  if (!obj.isChildOf(this.parent)) {
                    // should not clone other nodes if not descendant
                    return this.getObjRef(obj);
                  }
                } else if (obj instanceof cclegacy.Component) {
                  var _obj$node;
                  if (!((_obj$node = obj.node) !== null && _obj$node !== void 0 && _obj$node.isChildOf(this.parent))) {
                    // should not clone other component if not descendant
                    return this.getObjRef(obj);
                  }
                }
              }
            }
            createCode = new Declaration(LOCAL_OBJ, "new " + this.getFuncModule(ctor, true) + "()");
          } else if (ctor === Object) {
            createCode = new Declaration(LOCAL_OBJ, '{}');
          } else if (!ctor) {
            createCode = new Declaration(LOCAL_OBJ, 'Object.create(null)');
          } else {
            // do not clone unknown type
            return this.getObjRef(obj);
          }
          var codeArray = [createCode];

          // assign a _iN$t flag to indicate that this object has been parsed.
          obj._iN$t = {
            globalVar: '',
            // the name of declared global variable used to access this object
            source: codeArray // the source code array for this object
            // propName: '',     // the propName this object defined in its source code,
            //                  // if defined, use LOCAL_OBJ.propName to access the obj, else just use o
          };

          this.objsToClear_iN$t.push(obj);
          this.enumerateObject(codeArray, obj);
          return ['(function(){', codeArray, 'return o;})();'];
        };
        return Parser;
      }();
      if (TEST) {
        cclegacy._Test.IntantiateJit = {
          equalsToDefault: equalsToDefault,
          compile: compile
        };
      }
    }
  };
});
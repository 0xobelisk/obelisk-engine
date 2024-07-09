System.register("q-bundled:///fs/cocos/animation/marionette/variable/basic.js", [], function (_export, _context) {
  "use strict";

  var VarInstanceBase, VariableType, createInstanceTag;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  _export({
    VarInstanceBase: void 0,
    VariableType: void 0
  });
  return {
    setters: [],
    execute: function () {
      (function (VariableType) {
        VariableType[VariableType["FLOAT"] = 0] = "FLOAT";
        VariableType[VariableType["BOOLEAN"] = 1] = "BOOLEAN";
        VariableType[VariableType["TRIGGER"] = 2] = "TRIGGER";
        VariableType[VariableType["INTEGER"] = 3] = "INTEGER";
        VariableType[VariableType["VEC3_experimental"] = 4] = "VEC3_experimental";
        VariableType[VariableType["QUAT_experimental"] = 5] = "QUAT_experimental";
      })(VariableType || _export("VariableType", VariableType = {}));
      /**
       * @en
       * Represents variable's value.
       * @zh
       * 表示变量的值。
       */
      _export("createInstanceTag", createInstanceTag = Symbol('CreateInstance'));
      _export("VarInstanceBase", VarInstanceBase = class VarInstanceBase {
        constructor(type) {
          this._refs = [];
          this.type = type;
        }
        bind(fn, thisArg, ...args) {
          this._refs.push({
            fn: fn,
            thisArg,
            args
          });
          return this.getValue();
        }
        get value() {
          return this.getValue();
        }
        set value(value) {
          this.setValue(value);
          for (const {
            fn,
            thisArg,
            args
          } of this._refs) {
            fn.call(thisArg, value, ...args);
          }
        }
      });
    }
  };
});
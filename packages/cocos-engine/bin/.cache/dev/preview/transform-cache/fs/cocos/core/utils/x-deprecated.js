System.register("q-bundled:///fs/cocos/core/utils/x-deprecated.js", ["../../../../virtual/internal%253Aconstants.js", "../platform/debug.js"], function (_export, _context) {
  "use strict";

  var DEBUG, error, errorID, warn, warnID, defaultLogTimes, replaceProperty, removeProperty, markAsWarning, replacePropertyLog, markAsWarningLog, removePropertyLog, messageID, messageMap, topLevelDeprecateList, _cachedProxy;
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2020-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
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
                                                                                                                                                                                                                                                                                                                                                                                            */ /* eslint-disable @typescript-eslint/ban-types */ /* eslint-disable import/no-mutable-exports */ /* eslint-disable func-names */ /* eslint-disable @typescript-eslint/no-unsafe-return */ /* eslint-disable prefer-const */
  /**
   * @deprecated since v3.6.0, this is an engine private interface that will be removed in the future.
   */
  function setDefaultLogTimes(times) {
    if (times > 0) {
      defaultLogTimes = times;
    }
  }
  /**
   * This is an internal method to register the deprecate info of module exported binding name.
   * DO NOT USE THIS INTERFACE.
   *
   * @example
   * ```ts
   * deprecateModuleExportedName({
   *     ButtonComponent: {
   *         newName: 'Button',
   *         since: '1.2.0',
   *         removed: false,
   *     },
   * });
   * ```
   * @engineInternal
   */
  function deprecateModuleExportedName(deprecateList) {
    for (var deprecateName in deprecateList) {
      var deprecateInfo = deprecateList[deprecateName];
      topLevelDeprecateList[deprecateName] = deprecateInfo;
    }
  }
  function _checkObsoleteByName(checkName) {
    var deprecateInfo = topLevelDeprecateList[checkName];
    if (!deprecateInfo) {
      return;
    }
    var newName = deprecateInfo.newName,
      since = deprecateInfo.since,
      removed = deprecateInfo.removed;
    if (removed) {
      if (newName) {
        errorID(16003, checkName, since, newName);
      } else {
        errorID(16002, checkName, since);
      }
    } else if (newName) {
      warnID(16001, checkName, since, newName);
    } else {
      warnID(16000, checkName, since);
    }
  }

  /**
   * An internal method to check whether the top level interface is deprecated.
   * DO NOT USE THIS INTERFACE.
   *
   * @example
   * ```ts
   * // print deprecate info of ButtonComponent and ToggleComponent
   * import { ButtonComponent, ToggleComponent } from 'cc';
   * ```
   * @engineInternal
   */
  function __checkObsolete__(checkList) {
    for (var _iterator = _createForOfIteratorHelperLoose(checkList), _step; !(_step = _iterator()).done;) {
      var checkName = _step.value;
      _checkObsoleteByName(checkName);
    }
  }
  /**
   * An internal method to check whether the top level interface is deprecated in namespace.
   * DO NOT USE THIS INTERFACE.
   *
   * @example
   * ```ts
   * import * as cc from 'cc';
   * console.log(cc.ButtonComponent);  // print deprecate info of ButtonComponent
   * ```
   * @engineInternal
   */
  function __checkObsoleteInNamespace__(ccNamespace) {
    if (!_cachedProxy) {
      if (typeof Proxy === 'undefined') {
        _cachedProxy = {};
      } else {
        _cachedProxy = new Proxy(ccNamespace, {
          get: function get(target, name, receiver) {
            // NOTE: for now we use tsc version 4.3.5, which has not supported symbol as index.
            _checkObsoleteByName(name);
            return Reflect.get(target, name, receiver);
          }
        });
      }
    }
    return _cachedProxy;
  }
  _export({
    setDefaultLogTimes: setDefaultLogTimes,
    deprecateModuleExportedName: deprecateModuleExportedName,
    __checkObsolete__: __checkObsolete__,
    __checkObsoleteInNamespace__: __checkObsoleteInNamespace__,
    replaceProperty: void 0,
    removeProperty: void 0,
    markAsWarning: void 0
  });
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      DEBUG = _virtualInternal253AconstantsJs.DEBUG;
    }, function (_platformDebugJs) {
      error = _platformDebugJs.error;
      errorID = _platformDebugJs.errorID;
      warn = _platformDebugJs.warn;
      warnID = _platformDebugJs.warnID;
    }],
    execute: function () {
      defaultLogTimes = 10;
      messageID = 0;
      messageMap = new Map();
      replacePropertyLog = function replacePropertyLog(n, dp, n2, newp, f, id, s) {
        var item = messageMap.get(id);
        if (item && item.logTimes > item.count) {
          f("'%s' is deprecated, please use '%s' instead. " + s, n + "." + dp, n2 + "." + newp);
          item.count++;
        }
      };
      _export("replaceProperty", replaceProperty = function replaceProperty(owner, ownerName, properties) {
        if (owner == null) return;
        properties.forEach(function (item) {
          var id = messageID++;
          messageMap.set(id, {
            id: id,
            count: 0,
            logTimes: item.logTimes !== undefined ? item.logTimes : defaultLogTimes
          });
          var target = item.target != null ? item.target : owner;
          var newName = item.newName != null ? item.newName : item.name;
          var targetName = item.targetName != null ? item.targetName : ownerName;
          var sameTarget = target === owner;
          var suggest = item.suggest ? "(" + item.suggest + ")" : '';
          if (item.customFunction != null) {
            owner[item.name] = function () {
              var _ref;
              replacePropertyLog(ownerName, item.name, targetName, newName, warn, id, suggest);
              return (_ref = item.customFunction).call.apply(_ref, [this].concat(Array.prototype.slice.call(arguments)));
            };
          } else if (item.customSetter != null || item.customGetter != null) {
            var hasSetter = item.customSetter != null;
            var hasGetter = item.customGetter != null;
            if (hasSetter && hasGetter) {
              Object.defineProperty(owner, item.name, {
                get: function get() {
                  replacePropertyLog(ownerName, item.name, targetName, newName, warn, id, suggest);
                  return item.customGetter.call(this);
                },
                set: function set(v) {
                  replacePropertyLog(ownerName, item.name, targetName, newName, warn, id, suggest);
                  item.customSetter.call(this, v);
                },
                enumerable: false
              });
            } else if (hasSetter) {
              Object.defineProperty(owner, item.name, {
                set: function set(v) {
                  replacePropertyLog(ownerName, item.name, targetName, newName, warn, id, suggest);
                  item.customSetter.call(this, v);
                },
                enumerable: false
              });
            } else if (hasGetter) {
              Object.defineProperty(owner, item.name, {
                get: function get() {
                  replacePropertyLog(ownerName, item.name, targetName, newName, warn, id, suggest);
                  return item.customGetter.call(this);
                },
                enumerable: false
              });
            }
          } else {
            Object.defineProperty(owner, item.name, {
              get: function get() {
                replacePropertyLog(ownerName, item.name, targetName, newName, warn, id, suggest);
                return sameTarget ? this[newName] : target[newName];
              },
              set: function set(v) {
                replacePropertyLog(ownerName, item.name, targetName, newName, warn, id, suggest);
                if (sameTarget) {
                  this[newName] = v;
                } else {
                  target[newName] = v;
                }
              },
              enumerable: false
            });
          }
        });
      });
      removePropertyLog = function removePropertyLog(n, dp, f, id, s) {
        var item = messageMap.get(id);
        if (item && item.logTimes > item.count) {
          f("'%s' has been removed. " + s, n + "." + dp);
          item.count++;
        }
      };
      _export("removeProperty", removeProperty = function removeProperty(owner, ownerName, properties) {
        if (owner == null) return;
        properties.forEach(function (item) {
          var id = messageID++;
          messageMap.set(id, {
            id: id,
            count: 0,
            logTimes: item.logTimes !== undefined ? item.logTimes : defaultLogTimes
          });
          var suggest = item.suggest ? "(" + item.suggest + ")" : '';
          Object.defineProperty(owner, item.name, {
            get: function get() {
              return removePropertyLog(ownerName, item.name, error, id, suggest);
            },
            set: function set() {
              removePropertyLog(ownerName, item.name, error, id, suggest);
            },
            enumerable: false
          });
        });
      });
      markAsWarningLog = function markAsWarningLog(n, dp, f, id, s) {
        var item = messageMap.get(id);
        if (item && item.logTimes > item.count) {
          f("'%s' is deprecated. " + s, n + "." + dp);
          item.count++;
        }
      };
      _export("markAsWarning", markAsWarning = function markAsWarning(owner, ownerName, properties) {
        if (!DEBUG || owner == null) return;
        var _defaultGetSet = function _defaultGetSet(d, n, dp, f, id, s) {
          if (d.get) {
            var oldGet = d.get;
            d.get = function () {
              markAsWarningLog(n, dp, f, id, s);
              return oldGet.call(this);
            };
          }
          if (d.set) {
            var oldSet = d.set;
            d.set = function (v) {
              markAsWarningLog(n, dp, f, id, s);
              oldSet.call(this, v);
            };
          }
          Object.defineProperty(owner, dp, d);
        };
        properties.forEach(function (item) {
          var deprecatedProp = item.name;
          var descriptor = Object.getOwnPropertyDescriptor(owner, deprecatedProp);
          if (!descriptor || !descriptor.configurable) {
            return;
          }
          var id = messageID++;
          messageMap.set(id, {
            id: id,
            count: 0,
            logTimes: item.logTimes !== undefined ? item.logTimes : defaultLogTimes
          });
          var suggest = item.suggest ? "(" + item.suggest + ")" : '';
          if (typeof descriptor.value !== 'undefined') {
            if (typeof descriptor.value === 'function') {
              var oldValue = descriptor.value;
              owner[deprecatedProp] = function () {
                markAsWarningLog(ownerName, deprecatedProp, warn, id, suggest);
                return oldValue.call.apply(oldValue, [this].concat(Array.prototype.slice.call(arguments)));
              };
            } else {
              var _oldValue = descriptor.value;
              Object.defineProperty(owner, deprecatedProp, {
                configurable: true,
                get: function get() {
                  markAsWarningLog(ownerName, deprecatedProp, warn, id, suggest);
                  return _oldValue;
                }
              });
              if (descriptor.writable) {
                Object.defineProperty(owner, deprecatedProp, {
                  set: function set(value) {
                    markAsWarningLog(ownerName, deprecatedProp, warn, id, suggest);
                    _oldValue = value;
                  }
                });
              }
            }
          } else {
            _defaultGetSet(descriptor, ownerName, deprecatedProp, warn, id, suggest);
          }
          Object.defineProperty(owner, deprecatedProp, {
            enumerable: false
          });
        });
      });

      // } else {
      //     // for compatible

      //     replaceProperty = () => { };
      //     removeProperty = () => { };
      //     markAsWarning = () => { };

      //     replacePropertyLog = () => { };
      //     removePropertyLog = () => { };
      //     markAsWarningLog = () => { };
      // }

      /**
       * @engineInternal
       */
      /**
       * @engineInternal
       */
      topLevelDeprecateList = {};
    }
  };
});
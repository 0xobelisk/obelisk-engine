System.register("q-bundled:///fs/cocos/core/data/utils/extends-enum.js", ["../../../../../virtual/internal%253Aconstants.js", "../../platform/debug.js"], function (_export, _context) {
  "use strict";

  var DEV, errorID;
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; } /*
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
                                                                                                                                                                                      */
  /**
   * @zh
   * 组合任意多个枚举。
   * 此函数的行为等价于返回了一个新的枚举，其成员囊括了所有源枚举的成员。
   * 这些枚举的成员必须各不相同（包括成员名和值），否则行为是未定义的。
   * @en
   * Combine an arbitrary number of enumerations.
   * It behaves like an enumeration having members that are a combination of members of the source enumerations
   * is returned.
   * These enumerations shall have non-overlapped member names or member values.
   * If not, the behavior is undefined.
   * @example
   * ```ts
   * enum Apple { apple = 'apple', }
   * enum Pen { pen = 'pen' }
   * // As if `enum ApplePen { apple = 'apple'; pen = 'pen'; }`
   * const ApplePen = extendsEnum(Apple, Pen);
   * ```
   */
  function extendsEnum() {
    for (var _len = arguments.length, enums = new Array(_len), _key = 0; _key < _len; _key++) {
      enums[_key] = arguments[_key];
    }
    if (DEV) {
      var kvs = [];
      for (var _iterator = _createForOfIteratorHelperLoose(enums), _step; !(_step = _iterator()).done;) {
        var e = _step.value;
        for (var _i = 0, _Object$keys = Object.keys(e); _i < _Object$keys.length; _i++) {
          var kv = _Object$keys[_i];
          if (kvs.indexOf(kv) >= 0) {
            errorID(3659);
          } else {
            kvs.push(kv);
          }
        }
      }
    }
    return Object.assign.apply(Object, [{}].concat(enums));
  }
  _export("extendsEnum", extendsEnum);
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      DEV = _virtualInternal253AconstantsJs.DEV;
    }, function (_platformDebugJs) {
      errorID = _platformDebugJs.errorID;
    }],
    execute: function () {}
  };
});
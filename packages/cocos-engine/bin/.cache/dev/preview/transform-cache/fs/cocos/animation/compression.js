System.register("q-bundled:///fs/cocos/animation/compression.js", ["../core/index.js"], function (_export, _context) {
  "use strict";

  var approx;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
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
  /**
   * Removes keys which are linear interpolations of surrounding keys.
   * @param keys Input keys.
   * @param values Input values.
   * @param maxDiff Max error.
   * @returns The new keys `keys` and new values `values`.
   */
  function removeLinearKeys(keys, values, maxDiff) {
    if (maxDiff === void 0) {
      maxDiff = 1e-3;
    }
    var nKeys = keys.length;
    if (nKeys < 3) {
      return {
        keys: keys.slice(),
        values: values.slice()
      };
    }
    var removeFlags = new Array(nKeys).fill(false);
    // We may choose to use different key selection policy?
    // http://nfrechette.github.io/2016/12/07/anim_compression_key_reduction/
    var iLastKey = nKeys - 1;
    for (var iKey = 1; iKey < iLastKey; ++iKey) {
      // Should we select previous non-removed key?
      var iPrevious = iKey - 1;
      var iNext = iKey + 1;
      var previousKey = keys[iPrevious],
        currentKey = keys[iKey],
        nextKey = keys[iNext];
      var previousValue = values[iPrevious],
        currentValue = values[iKey],
        nextValue = values[iNext];
      var alpha = (currentKey - previousKey) / (nextKey - previousKey);
      var expectedValue = (nextValue - previousValue) * alpha + previousValue;
      if (approx(expectedValue, currentValue, maxDiff)) {
        removeFlags[iKey] = true;
      }
    }
    return filterFromRemoveFlags(keys, values, removeFlags);
  }

  /**
   * Removes trivial frames.
   * @param keys Input keys.
   * @param values Input values.
   * @param maxDiff Max error.
   * @returns The new keys `keys` and new values `values`.
   */
  function removeTrivialKeys(keys, values, maxDiff) {
    if (maxDiff === void 0) {
      maxDiff = 1e-3;
    }
    var nKeys = keys.length;
    if (nKeys < 2) {
      return {
        keys: keys.slice(),
        values: values.slice()
      };
    }
    var removeFlags = new Array(nKeys).fill(false);
    for (var iKey = 1; iKey < nKeys; ++iKey) {
      // Should we select previous non-removed key?
      var iPrevious = iKey - 1;
      var previousValue = values[iPrevious],
        currentValue = values[iKey];
      if (approx(previousValue, currentValue, maxDiff)) {
        removeFlags[iKey] = true;
      }
    }
    return filterFromRemoveFlags(keys, values, removeFlags);
  }
  function filterFromRemoveFlags(keys, values, removeFlags) {
    var nKeys = keys.length;
    var nRemovals = removeFlags.reduce(function (n, removeFlag) {
      return removeFlag ? n + 1 : n;
    }, 0);
    if (!nRemovals) {
      return {
        keys: keys.slice(),
        values: values.slice()
      };
    }
    var nNewKeyframes = nKeys - nRemovals;
    var newKeys = new Array(nNewKeyframes).fill(0.0);
    var newValues = new Array(nNewKeyframes).fill(0.0);
    for (var iNewKeys = 0, iKey = 0; iKey < nKeys; ++iKey) {
      if (!removeFlags[iKey]) {
        newKeys[iNewKeys] = keys[iKey];
        newValues[iNewKeys] = values[iKey];
        ++iNewKeys;
      }
    }
    return {
      keys: newKeys,
      values: newValues
    };
  }
  _export({
    removeLinearKeys: removeLinearKeys,
    removeTrivialKeys: removeTrivialKeys
  });
  return {
    setters: [function (_coreIndexJs) {
      approx = _coreIndexJs.approx;
    }],
    execute: function () {}
  };
});
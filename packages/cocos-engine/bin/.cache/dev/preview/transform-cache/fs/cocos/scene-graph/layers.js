System.register("q-bundled:///fs/cocos/scene-graph/layers.js", ["../core/value-types/index.js", "../core/global-exports.js", "../core/math/bits.js", "../core/index.js", "../core/data/utils/asserts.js", "../core/platform/debug.js", "../core/settings.js"], function (_export, _context) {
  "use strict";

  var BitMask, Enum, legacyCC, log2, js, assertIsTrue, getError, Settings, settings, layerList, Layers;
  function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; } /*
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
  return {
    setters: [function (_coreValueTypesIndexJs) {
      BitMask = _coreValueTypesIndexJs.BitMask;
      Enum = _coreValueTypesIndexJs.Enum;
    }, function (_coreGlobalExportsJs) {
      legacyCC = _coreGlobalExportsJs.legacyCC;
    }, function (_coreMathBitsJs) {
      log2 = _coreMathBitsJs.log2;
    }, function (_coreIndexJs) {
      js = _coreIndexJs.js;
    }, function (_coreDataUtilsAssertsJs) {
      assertIsTrue = _coreDataUtilsAssertsJs.assertIsTrue;
    }, function (_corePlatformDebugJs) {
      getError = _corePlatformDebugJs.getError;
    }, function (_coreSettingsJs) {
      Settings = _coreSettingsJs.Settings;
      settings = _coreSettingsJs.settings;
    }],
    execute: function () {
      // built-in layers, users can use 0~19 bits, 20~31 are system preserve bits.
      layerList = {
        NONE: 0,
        IGNORE_RAYCAST: 1 << 20,
        GIZMOS: 1 << 21,
        EDITOR: 1 << 22,
        UI_3D: 1 << 23,
        SCENE_GIZMO: 1 << 24,
        UI_2D: 1 << 25,
        PROFILER: 1 << 28,
        DEFAULT: 1 << 30,
        ALL: 0xffffffff
      };
      /**
       * @zh 节点层管理器，层数据是以掩码数据方式存储在 [[Node.layer]] 中，用于射线检测、物理碰撞和用户自定义脚本逻辑。
       * 每个节点可属于一个或多个层，可通过 “包含式” 或 “排除式” 两种检测器进行层检测。
       * @en Node's layer manager, it's stored as bit mask data in [[Node.layer]].
       * Layer information is widely used in raycast, physics and user logic.
       * Every node can be assigned to multiple layers with different bit masks, you can setup layer with inclusive or exclusive operation.
       */
      _export("Layers", Layers = /*#__PURE__*/function () {
        function Layers() {}
        /**
         * @internal
         */
        Layers.init = function init() {
          var userLayers = settings.querySettings(Settings.Category.ENGINE, 'customLayers');
          if (!userLayers) return;
          for (var i = 0; i < userLayers.length; i++) {
            var layer = userLayers[i];
            Layers.addLayer(layer.name, layer.bit);
          }
        }

        /**
         * @en
         * Make a layer mask accepting nothing but the listed layers
         * @zh
         * 创建一个包含式层检测器，只接受列表中的层
         * @param includes All accepted layers
         * @return A filter which can detect all accepted layers
         */;
        Layers.makeMaskInclude = function makeMaskInclude(includes) {
          var mask = 0;
          for (var _iterator = _createForOfIteratorHelperLoose(includes), _step; !(_step = _iterator()).done;) {
            var inc = _step.value;
            mask |= inc;
          }
          return mask;
        }

        /**
         * @en
         * Make a layer mask accepting everything but the listed layers
         * @zh
         * 创建一个排除式层检测器，只拒绝列表中的层
         * @param excludes All excluded layers
         * @return A filter which can detect for excluded layers
         */;
        Layers.makeMaskExclude = function makeMaskExclude(excludes) {
          return ~Layers.makeMaskInclude(excludes);
        }

        /**
         * @zh 添加一个新层，用户可编辑 0 - 19 位为用户自定义层
         * @en Add a new layer, user can use layers from bit position 0 to 19, other bits are reserved.
         * @param name Layer's name
         * @param bitNum Layer's bit position
         */;
        Layers.addLayer = function addLayer(name, bitNum) {
          if (bitNum === undefined) {
            console.warn('bitNum can\'t be undefined');
            return;
          }
          if (bitNum > 19 || bitNum < 0) {
            console.warn('maximum layers reached.');
            return;
          }
          var val = 1 << bitNum;
          assertIsTrue(!Layers.Enum[name], getError(2104, name));
          Layers.Enum[name] = val;
          js.value(Layers.Enum, String(val), name);
          Layers.BitMask[name] = val;
          js.value(Layers.BitMask, String(val), name);
          BitMask.update(Layers.BitMask);
          Enum.update(Layers.Enum);
        }

        /**
         * @en Remove a layer, user can remove layers from bit position 0 to 19, other bits are reserved.
         * @zh 移除一个层，用户可编辑 0 - 19 位为用户自定义层
         * @param bitNum Layer's bit position
         */;
        Layers.deleteLayer = function deleteLayer(bitNum) {
          if (bitNum > 19 || bitNum < 0) {
            console.warn('do not change buildin layers.');
            return;
          }
          var val = 1 << bitNum;
          delete Layers.Enum[Layers.Enum[val]];
          delete Layers.Enum[val];
          delete Layers.BitMask[Layers.BitMask[val]];
          delete Layers.BitMask[val];
          BitMask.update(Layers.BitMask);
          Enum.update(Layers.Enum);
        }

        /**
         * @en Given a layer name, returns the layer index as defined by either a Builtin or a User Layer in the Tags and Layers manager.
         * @zh 给定层名称，返回由标记和层管理器中的内置层或用户层定义的层索引。
         * @param name layer's name
         */;
        Layers.nameToLayer = function nameToLayer(name) {
          if (name === undefined) {
            console.warn('name can\'t be undefined');
            return -1;
          }
          return log2(Layers.Enum[name]);
        }

        /**
         * @en Given a layer number, returns the name of the layer as defined in either a Builtin or a User Layer in the Tags and Layers manager.
         * @zh 给定层数，返回在标记和层管理器中的内置层或用户层中定义的层名称。
         * @param bitNum layer's value
         */;
        Layers.layerToName = function layerToName(bitNum) {
          if (bitNum > 31 || bitNum < 0) {
            console.warn('Unable to access unknown layer.');
            return '';
          }
          return Layers.Enum[1 << bitNum];
        };
        return Layers;
      }());
      /**
       * @en All layers in an Enum
       * @zh 以 Enum 形式存在的所有层列表
       */
      Layers.Enum = Enum(layerList);
      /**
       * @en All layers in [[BitMask]] type
       * @zh 包含所有层的 [[BitMask]]
       */
      Layers.BitMask = BitMask(_extends({}, layerList));
      legacyCC.Layers = Layers;
    }
  };
});
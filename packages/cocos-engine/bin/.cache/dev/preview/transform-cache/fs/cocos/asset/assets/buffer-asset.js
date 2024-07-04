System.register("q-bundled:///fs/cocos/asset/assets/buffer-asset.js", ["../../core/data/decorators/index.js", "../../core/index.js", "./asset.js"], function (_export, _context) {
  "use strict";

  var ccclass, override, assertIsNonNullable, cclegacy, Asset, _dec, _class, _class2, BufferAsset;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      override = _coreDataDecoratorsIndexJs.override;
    }, function (_coreIndexJs) {
      assertIsNonNullable = _coreIndexJs.assertIsNonNullable;
      cclegacy = _coreIndexJs.cclegacy;
    }, function (_assetJs) {
      Asset = _assetJs.Asset;
    }],
    execute: function () {
      /**
       * @en
       * `BufferAsset` is a kind of assets whose internal data is a section of memory buffer
       * that you can access through the [[BufferAsset.buffer]] function.
       * @zh
       * `BufferAsset` 是一类资产，其内部数据是一段内存缓冲，你可以通过 [[BufferAsset.buffer]] 函数获取其内部数据。
       */
      _export("BufferAsset", BufferAsset = (_dec = ccclass('cc.BufferAsset'), _dec(_class = (_class2 = /*#__PURE__*/function (_Asset) {
        _inheritsLoose(BufferAsset, _Asset);
        function BufferAsset() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Asset.call.apply(_Asset, [this].concat(args)) || this;
          _this._buffer = null;
          return _this;
        }
        var _proto = BufferAsset.prototype;
        /**
         * @zh 获取此资源中的缓冲数据。
         * @en Get the ArrayBuffer data of this asset.
         * @returns @en The ArrayBuffer. @zh 缓冲数据。
         */
        _proto.buffer = function buffer() {
          assertIsNonNullable(this._buffer);
          return this._buffer;
        };
        _proto.validate = function validate() {
          return !!this._buffer;
        };
        _createClass(BufferAsset, [{
          key: "_nativeAsset",
          get:
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          function get() {
            return this._buffer;
          },
          set: function set(bin) {
            if (bin instanceof ArrayBuffer) {
              this._buffer = bin;
            } else {
              this._buffer = bin.buffer;
            }
          }
        }]);
        return BufferAsset;
      }(Asset), (_applyDecoratedDescriptor(_class2.prototype, "_nativeAsset", [override], Object.getOwnPropertyDescriptor(_class2.prototype, "_nativeAsset"), _class2.prototype)), _class2)) || _class));
      cclegacy.BufferAsset = BufferAsset;
    }
  };
});
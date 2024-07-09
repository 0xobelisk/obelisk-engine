System.register("q-bundled:///fs/cocos/asset/assets/buffer-asset.js", ["../../core/data/decorators/index.js", "../../core/index.js", "./asset.js"], function (_export, _context) {
  "use strict";

  var ccclass, override, assertIsNonNullable, cclegacy, Asset, _dec, _class, _class2, BufferAsset;
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
      _export("BufferAsset", BufferAsset = (_dec = ccclass('cc.BufferAsset'), _dec(_class = (_class2 = class BufferAsset extends Asset {
        constructor(...args) {
          super(...args);
          this._buffer = null;
        }
        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */
        get _nativeAsset() {
          return this._buffer;
        }
        set _nativeAsset(bin) {
          if (bin instanceof ArrayBuffer) {
            this._buffer = bin;
          } else {
            this._buffer = bin.buffer;
          }
        }

        /**
         * @zh 获取此资源中的缓冲数据。
         * @en Get the ArrayBuffer data of this asset.
         * @returns @en The ArrayBuffer. @zh 缓冲数据。
         */
        buffer() {
          assertIsNonNullable(this._buffer);
          return this._buffer;
        }
        validate() {
          return !!this._buffer;
        }
      }, (_applyDecoratedDescriptor(_class2.prototype, "_nativeAsset", [override], Object.getOwnPropertyDescriptor(_class2.prototype, "_nativeAsset"), _class2.prototype)), _class2)) || _class));
      cclegacy.BufferAsset = BufferAsset;
    }
  };
});
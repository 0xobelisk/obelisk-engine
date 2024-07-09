System.register("q-bundled:///fs/cocos/video/assets/video-clip.js", ["../../core/data/decorators/index.js", "../../asset/assets/index.js"], function (_export, _context) {
  "use strict";

  var ccclass, serializable, Asset, _dec, _class, _class2, _initializer, VideoClip;
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_assetAssetsIndexJs) {
      Asset = _assetAssetsIndexJs.Asset;
    }],
    execute: function () {
      /**
       * @en
       * The video clip asset.
       * @zh
       * 视频片段资源。
       */
      _export("VideoClip", VideoClip = (_dec = ccclass('cc.VideoClip'), _dec(_class = (_class2 = class VideoClip extends Asset {
        constructor() {
          super();
          this._duration = _initializer && _initializer();
          this._video = null;
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */
        set _nativeAsset(clip) {
          this._video = clip;
          if (clip) {
            this._duration = clip.duration;
          } else {
            this._duration = 0;
          }
        }
        get _nativeAsset() {
          return this._video;
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "_duration", [serializable], function () {
        return 0;
      })), _class2)) || _class));
    }
  };
});
System.register("q-bundled:///fs/cocos/video/assets/video-clip.js", ["../../core/data/decorators/index.js", "../../asset/assets/index.js"], function (_export, _context) {
  "use strict";

  var ccclass, serializable, Asset, _dec, _class, _class2, _initializer, VideoClip;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
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
      _export("VideoClip", VideoClip = (_dec = ccclass('cc.VideoClip'), _dec(_class = (_class2 = /*#__PURE__*/function (_Asset) {
        _inheritsLoose(VideoClip, _Asset);
        function VideoClip() {
          var _this;
          _this = _Asset.call(this) || this;
          _this._duration = _initializer && _initializer();
          _this._video = null;
          return _this;
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */
        _createClass(VideoClip, [{
          key: "_nativeAsset",
          get: function get() {
            return this._video;
          },
          set: function set(clip) {
            this._video = clip;
            if (clip) {
              this._duration = clip.duration;
            } else {
              this._duration = 0;
            }
          }
        }]);
        return VideoClip;
      }(Asset), (_initializer = _applyDecoratedInitializer(_class2.prototype, "_duration", [serializable], function () {
        return 0;
      })), _class2)) || _class));
    }
  };
});
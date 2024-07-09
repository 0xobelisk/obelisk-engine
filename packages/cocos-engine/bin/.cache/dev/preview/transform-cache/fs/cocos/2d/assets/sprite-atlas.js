System.register("q-bundled:///fs/cocos/2d/assets/sprite-atlas.js", ["../../../../virtual/internal%253Aconstants.js", "../../core/data/decorators/index.js", "../../asset/assets/index.js", "./sprite-frame.js", "../../core/index.js"], function (_export, _context) {
  "use strict";

  var EDITOR, TEST, ccclass, serializable, editable, Asset, SpriteFrame, cclegacy, js, _dec, _class, _class2, _initializer, SpriteAtlas;
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
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
      TEST = _virtualInternal253AconstantsJs.TEST;
    }, function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      editable = _coreDataDecoratorsIndexJs.editable;
    }, function (_assetAssetsIndexJs) {
      Asset = _assetAssetsIndexJs.Asset;
    }, function (_spriteFrameJs) {
      SpriteFrame = _spriteFrameJs.SpriteFrame;
    }, function (_coreIndexJs) {
      cclegacy = _coreIndexJs.cclegacy;
      js = _coreIndexJs.js;
    }],
    execute: function () {
      /**
       * @en
       * Class for sprite atlas handling.
       * @zh
       * 精灵图集资源类。
       */
      _export("SpriteAtlas", SpriteAtlas = (_dec = ccclass('cc.SpriteAtlas'), _dec(_class = (_class2 = /*#__PURE__*/function (_Asset) {
        _inheritsLoose(SpriteAtlas, _Asset);
        function SpriteAtlas() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Asset.call.apply(_Asset, [this].concat(args)) || this;
          /**
           * @en All sprite frames in the sprite atlas.
           * @zh 精灵图集中的所有精灵。
           */
          _this.spriteFrames = _initializer && _initializer();
          return _this;
        }
        var _proto = SpriteAtlas.prototype;
        /**
         * @en Get the [[Texture2D]] asset of the atlas.
         * @zh 获取精灵图集的贴图。
         * @returns @en The texture2d asset. @zh 二维贴图资源。
         */
        _proto.getTexture = function getTexture() {
          var keys = Object.keys(this.spriteFrames);
          if (keys.length > 0) {
            var spriteFrame = this.spriteFrames[keys[0]];
            return spriteFrame && spriteFrame.texture;
          } else {
            return null;
          }
        }

        /**
         * @en Gets the [[SpriteFrame]] correspond to the given key in sprite atlas.
         * @zh 根据键值获取精灵。
         *
         * @param key @en The SpriteFrame name. @zh 精灵名字。
         * @returns @en The SpriteFrame asset. @zh 精灵资源。
         */;
        _proto.getSpriteFrame = function getSpriteFrame(key) {
          var sf = this.spriteFrames[key];
          if (!sf) {
            return null;
          }
          if (!sf.name) {
            sf.name = key;
          }
          return sf;
        }

        /**
         * @en Returns all sprite frames in the sprite atlas.
         * @zh 获取精灵图集所有精灵。
         * @returns @en All sprite frames. @zh 所有的精灵资源。
         */;
        _proto.getSpriteFrames = function getSpriteFrames() {
          var frames = [];
          var spriteFrames = this.spriteFrames;
          for (var _i = 0, _Object$keys = Object.keys(spriteFrames); _i < _Object$keys.length; _i++) {
            var _key2 = _Object$keys[_i];
            frames.push(spriteFrames[_key2]);
          }
          return frames;
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto._serialize = function _serialize(ctxForExporting) {
          if (EDITOR || TEST) {
            var frames = [];
            for (var _i2 = 0, _Object$keys2 = Object.keys(this.spriteFrames); _i2 < _Object$keys2.length; _i2++) {
              var _key3 = _Object$keys2[_i2];
              var spriteFrame = this.spriteFrames[_key3];
              var id = spriteFrame ? spriteFrame._uuid : '';
              if (id && ctxForExporting && ctxForExporting._compressUuid) {
                id = EditorExtends.UuidUtils.compressUuid(id, true);
              }
              frames.push(_key3);
              frames.push(id);
            }
            return {
              name: this._name,
              spriteFrames: frames
            };
          }
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto._deserialize = function _deserialize(serializeData, handle) {
          var data = serializeData;
          this._name = data.name;
          var frames = data.spriteFrames;
          this.spriteFrames = js.createMap();
          for (var i = 0; i < frames.length; i += 2) {
            handle.result.push(this.spriteFrames, frames[i], frames[i + 1], js.getClassId(SpriteFrame));
          }
        };
        return SpriteAtlas;
      }(Asset), (_initializer = _applyDecoratedInitializer(_class2.prototype, "spriteFrames", [serializable, editable], function () {
        return js.createMap();
      })), _class2)) || _class));
      cclegacy.SpriteAtlas = SpriteAtlas;
    }
  };
});
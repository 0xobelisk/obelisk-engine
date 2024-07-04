System.register("q-bundled:///fs/cocos/2d/assets/sprite-atlas.js", ["../../../../virtual/internal%253Aconstants.js", "../../core/data/decorators/index.js", "../../asset/assets/index.js", "./sprite-frame.js", "../../core/index.js"], function (_export, _context) {
  "use strict";

  var EDITOR, TEST, ccclass, serializable, editable, Asset, SpriteFrame, cclegacy, js, _dec, _class, _class2, _initializer, SpriteAtlas;
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
      _export("SpriteAtlas", SpriteAtlas = (_dec = ccclass('cc.SpriteAtlas'), _dec(_class = (_class2 = class SpriteAtlas extends Asset {
        constructor(...args) {
          super(...args);
          /**
           * @en All sprite frames in the sprite atlas.
           * @zh 精灵图集中的所有精灵。
           */
          this.spriteFrames = _initializer && _initializer();
        }
        /**
         * @en Get the [[Texture2D]] asset of the atlas.
         * @zh 获取精灵图集的贴图。
         * @returns @en The texture2d asset. @zh 二维贴图资源。
         */
        getTexture() {
          const keys = Object.keys(this.spriteFrames);
          if (keys.length > 0) {
            const spriteFrame = this.spriteFrames[keys[0]];
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
         */
        getSpriteFrame(key) {
          const sf = this.spriteFrames[key];
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
         */
        getSpriteFrames() {
          const frames = [];
          const spriteFrames = this.spriteFrames;
          for (const key of Object.keys(spriteFrames)) {
            frames.push(spriteFrames[key]);
          }
          return frames;
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */
        _serialize(ctxForExporting) {
          if (EDITOR || TEST) {
            const frames = [];
            for (const key of Object.keys(this.spriteFrames)) {
              const spriteFrame = this.spriteFrames[key];
              let id = spriteFrame ? spriteFrame._uuid : '';
              if (id && ctxForExporting && ctxForExporting._compressUuid) {
                id = EditorExtends.UuidUtils.compressUuid(id, true);
              }
              frames.push(key);
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
         */
        _deserialize(serializeData, handle) {
          const data = serializeData;
          this._name = data.name;
          const frames = data.spriteFrames;
          this.spriteFrames = js.createMap();
          for (let i = 0; i < frames.length; i += 2) {
            handle.result.push(this.spriteFrames, frames[i], frames[i + 1], js.getClassId(SpriteFrame));
          }
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "spriteFrames", [serializable, editable], function () {
        return js.createMap();
      })), _class2)) || _class));
      cclegacy.SpriteAtlas = SpriteAtlas;
    }
  };
});
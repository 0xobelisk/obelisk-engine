System.register("q-bundled:///fs/cocos/dragon-bones/CCTextureData.js", ["@cocos/dragonbones-js", "../2d/index.js", "../core/index.js"], function (_export, _context) {
  "use strict";

  var BaseObject, TextureAtlasData, TextureData, SpriteFrame, Rect, _decorator, _dec, _class, _dec2, _class3, ccclass, CCTextureAtlasData, CCTextureData;
  return {
    setters: [function (_cocosDragonbonesJs) {
      BaseObject = _cocosDragonbonesJs.BaseObject;
      TextureAtlasData = _cocosDragonbonesJs.TextureAtlasData;
      TextureData = _cocosDragonbonesJs.TextureData;
    }, function (_dIndexJs) {
      SpriteFrame = _dIndexJs.SpriteFrame;
    }, function (_coreIndexJs) {
      Rect = _coreIndexJs.Rect;
      _decorator = _coreIndexJs._decorator;
    }],
    execute: function () {
      ({
        ccclass
      } = _decorator);
      /**
       * @en The texture atlas of dragonbones.
       * @zh 龙骨组件中的纹理图集资源。
       */
      _export("CCTextureAtlasData", CCTextureAtlasData = (_dec = ccclass('dragonBones.CCTextureAtlasData'), _dec(_class = class CCTextureAtlasData extends TextureAtlasData {
        constructor(...args) {
          super(...args);
          this._renderTexture = null;
        }
        /**
         * @en The texture used for rendering.
         * @zh 实际用于渲染显示的纹理对象。
         */
        get renderTexture() {
          return this._renderTexture;
        }
        set renderTexture(value) {
          this._renderTexture = value;
          if (value) {
            for (const k in this.textures) {
              const textureData = this.textures[k];
              if (!textureData.spriteFrame) {
                let rect = null;
                if (textureData.rotated) {
                  rect = new Rect(textureData.region.x, textureData.region.y, textureData.region.height, textureData.region.width);
                } else {
                  rect = new Rect(textureData.region.x, textureData.region.y, textureData.region.width, textureData.region.height);
                  // }
                  // const offset = new Vec2(0, 0);
                  // const size = new Size(rect.width, rect.height);
                  // setTexture(value, rect, false, offset, size);
                  textureData.spriteFrame = new SpriteFrame();
                  textureData.spriteFrame.texture = value;
                  textureData.spriteFrame.rect = rect;
                }
              }
            }
          } else {
            for (const k in this.textures) {
              const textureData = this.textures[k];
              textureData.spriteFrame = null;
            }
          }
        }
        /**
         * @engineInternal Since v3.7.2 this is an engine private function.
         */
        static toString() {
          return '[class dragonBones.CCTextureAtlasData]';
        }
        /**
         * @en Create texture data, get data from the object pool.
         * @zh 创建纹理数据，从对象池获取。
         */
        createTexture() {
          return BaseObject.borrowObject(CCTextureData);
        }
        /**
         * @en Clear associated texture resources.
         * @zh 清除关联的纹理。
         */
        _onClear() {
          super._onClear();
          this.renderTexture = null;
        }
      }) || _class));
      /**
       * @en Texture data used in dragonbones.
       * @zh 龙骨资源中的纹理数据。
       */
      _export("CCTextureData", CCTextureData = (_dec2 = ccclass('dragonBones.CCTextureData'), _dec2(_class3 = class CCTextureData extends TextureData {
        constructor(...args) {
          super(...args);
          /**
           * @en SpriteFrame assets.
           * @zh SpriteFrame 资源。
           */
          this.spriteFrame = null;
        }
        /**
         * @engineInternal Since v3.7.2 this is an engine private function.
         */
        static toString() {
          return '[class dragonBones.CCTextureData]';
        }
        /**
         * @en Clear SpriteFrame assets.
         * @zh 清除关联的SpriteFrame 资源。
         */
        _onClear() {
          super._onClear();
          this.spriteFrame = null;
        }
      }) || _class3));
    }
  };
});
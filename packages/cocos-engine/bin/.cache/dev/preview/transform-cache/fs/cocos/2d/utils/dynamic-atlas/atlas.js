System.register("q-bundled:///fs/cocos/2d/utils/dynamic-atlas/atlas.js", ["../../../asset/assets/asset-enum.js", "../../../asset/assets/texture-2d.js", "../../../gfx/index.js", "../../../core/index.js"], function (_export, _context) {
  "use strict";

  var PixelFormat, Texture2D, BufferTextureCopy, cclegacy, space, Atlas, DynamicAtlasTexture;
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
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
  return {
    setters: [function (_assetAssetsAssetEnumJs) {
      PixelFormat = _assetAssetsAssetEnumJs.PixelFormat;
    }, function (_assetAssetsTexture2dJs) {
      Texture2D = _assetAssetsTexture2dJs.Texture2D;
    }, function (_gfxIndexJs) {
      BufferTextureCopy = _gfxIndexJs.BufferTextureCopy;
    }, function (_coreIndexJs) {
      cclegacy = _coreIndexJs.cclegacy;
    }],
    execute: function () {
      space = 2;
      _export("Atlas", Atlas = /*#__PURE__*/function () {
        function Atlas(width, height) {
          this._texture = void 0;
          this._width = void 0;
          this._height = void 0;
          this._x = void 0;
          this._y = void 0;
          this._nexty = void 0;
          this._innerTextureInfos = {};
          this._innerSpriteFrames = void 0;
          this._count = void 0;
          var texture = new DynamicAtlasTexture();
          texture.initWithSize(width, height);
          this._texture = texture;
          this._width = width;
          this._height = height;
          this._x = space;
          this._y = space;
          this._nexty = space;
          this._innerTextureInfos = {};
          this._innerSpriteFrames = [];
          this._count = 0;
        }

        /**
         * @en
         * Append a sprite frame into the dynamic atlas.
         *
         * @zh
         * 添加碎图进入动态图集。
         *
         * @method insertSpriteFrame
         * @param spriteFrame  the sprite frame that will be inserted in the atlas.
         */
        var _proto = Atlas.prototype;
        _proto.insertSpriteFrame = function insertSpriteFrame(spriteFrame) {
          var rect = spriteFrame.rect;
          // Todo:No renderTexture
          var texture = spriteFrame.texture;
          var info = this._innerTextureInfos[texture.getId()];
          var sx = rect.x;
          var sy = rect.y;
          if (info) {
            sx += info.x;
            sy += info.y;
          } else {
            var width = texture.width;
            var height = texture.height;
            if (this._x + width + space > this._width) {
              this._x = space;
              this._y = this._nexty;
            }
            if (this._y + height + space > this._nexty) {
              this._nexty = this._y + height + space;
            }
            if (this._nexty > this._height) {
              return null;
            }
            if (cclegacy.internal.dynamicAtlasManager.textureBleeding) {
              // Smaller frame is more likely to be affected by linear filter
              if (width <= 8 || height <= 8) {
                this._texture.drawTextureAt(texture.image, this._x - 1, this._y - 1);
                this._texture.drawTextureAt(texture.image, this._x - 1, this._y + 1);
                this._texture.drawTextureAt(texture.image, this._x + 1, this._y - 1);
                this._texture.drawTextureAt(texture.image, this._x + 1, this._y + 1);
              }
              this._texture.drawTextureAt(texture.image, this._x - 1, this._y);
              this._texture.drawTextureAt(texture.image, this._x + 1, this._y);
              this._texture.drawTextureAt(texture.image, this._x, this._y - 1);
              this._texture.drawTextureAt(texture.image, this._x, this._y + 1);
            }
            this._texture.drawTextureAt(texture.image, this._x, this._y);
            this._innerTextureInfos[texture.getId()] = {
              x: this._x,
              y: this._y,
              texture: texture
            };
            this._count++;
            sx += this._x;
            sy += this._y;
            this._x += width + space;
          }
          var frame = {
            x: sx,
            y: sy,
            texture: this._texture
          };
          this._innerSpriteFrames.push(spriteFrame);
          return frame;
        }

        /**
         * @en
         * Delete a texture from the atlas.
         *
         * @zh
         * 从动态图集中删除某张纹理。
         *
         * @method deleteAtlasTexture
         * @param texture  the texture that will be removed from the atlas.
         */;
        _proto.deleteInnerTexture = function deleteInnerTexture(texture) {
          if (texture && this._innerTextureInfos[texture.getId()]) {
            delete this._innerTextureInfos[texture.getId()];
            this._count--;
          }
        }

        /**
         * @en
         * Whether the atlas is empty.
         *
         * @zh
         * 图集是否为空图集。
         *
         * @method isEmpty
         */;
        _proto.isEmpty = function isEmpty() {
          return this._count <= 0;
        }

        /**
         * @en
         * Reset the dynamic atlas.
         *
         * @zh
         * 重置该动态图集。
         *
         * @method reset
        */;
        _proto.reset = function reset() {
          this._x = space;
          this._y = space;
          this._nexty = space;
          var frames = this._innerSpriteFrames;
          for (var i = 0, l = frames.length; i < l; i++) {
            var frame = frames[i];
            if (!frame.isValid) {
              continue;
            }
            frame._resetDynamicAtlasFrame();
          }
          this._innerSpriteFrames.length = 0;
          this._innerTextureInfos = {};
        }

        /**
         * @en
         * Reset the dynamic atlas, and destroy the texture of the atlas.
         *
         * @zh
         * 重置该动态图集，并销毁该图集的纹理。
         *
         * @method destroy
        */;
        _proto.destroy = function destroy() {
          this.reset();
          this._texture.destroy();
        };
        return Atlas;
      }());
      _export("DynamicAtlasTexture", DynamicAtlasTexture = /*#__PURE__*/function (_Texture2D) {
        _inheritsLoose(DynamicAtlasTexture, _Texture2D);
        function DynamicAtlasTexture() {
          return _Texture2D.apply(this, arguments) || this;
        }
        var _proto2 = DynamicAtlasTexture.prototype;
        /**
         * @en
         * Initialize the render texture.
         *
         * @zh
         * 初始化 render texture。
         *
         * @method initWithSize
         */
        _proto2.initWithSize = function initWithSize(width, height, format) {
          if (format === void 0) {
            format = PixelFormat.RGBA8888;
          }
          this.reset({
            width: width,
            height: height,
            format: format
          });
        }

        /**
         * @en
         * Draw a texture to the specified position.
         *
         * @zh
         * 将指定的图片渲染到指定的位置上。
         *
         * @method drawTextureAt
         * @param {Texture2D} image
         * @param {Number} x
         * @param {Number} y
         */;
        _proto2.drawTextureAt = function drawTextureAt(image, x, y) {
          var gfxTexture = this.getGFXTexture();
          if (!image || !gfxTexture) {
            return;
          }
          var gfxDevice = this._getGFXDevice();
          if (!gfxDevice) {
            console.warn('Unable to get device');
            return;
          }
          var region = new BufferTextureCopy();
          region.texOffset.x = x;
          region.texOffset.y = y;
          region.texExtent.width = image.width;
          region.texExtent.height = image.height;
          gfxDevice.copyTexImagesToTexture([image.data], gfxTexture, [region]);
        };
        return DynamicAtlasTexture;
      }(Texture2D));
    }
  };
});
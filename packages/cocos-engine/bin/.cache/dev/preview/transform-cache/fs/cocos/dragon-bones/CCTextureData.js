System.register("q-bundled:///fs/cocos/dragon-bones/CCTextureData.js", ["@cocos/dragonbones-js", "../2d/index.js", "../core/index.js"], function (_export, _context) {
  "use strict";

  var BaseObject, TextureAtlasData, TextureData, SpriteFrame, Rect, _decorator, _dec, _class, _dec2, _class3, ccclass, CCTextureAtlasData, CCTextureData;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
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
      ccclass = _decorator.ccclass;
      /**
       * @en The texture atlas of dragonbones.
       * @zh 龙骨组件中的纹理图集资源。
       */
      _export("CCTextureAtlasData", CCTextureAtlasData = (_dec = ccclass('dragonBones.CCTextureAtlasData'), _dec(_class = /*#__PURE__*/function (_TextureAtlasData) {
        _inheritsLoose(CCTextureAtlasData, _TextureAtlasData);
        function CCTextureAtlasData() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _TextureAtlasData.call.apply(_TextureAtlasData, [this].concat(args)) || this;
          _this._renderTexture = null;
          return _this;
        }
        /**
         * @engineInternal Since v3.7.2 this is an engine private function.
         */
        CCTextureAtlasData.toString = function toString() {
          return '[class dragonBones.CCTextureAtlasData]';
        }
        /**
         * @en Create texture data, get data from the object pool.
         * @zh 创建纹理数据，从对象池获取。
         */;
        var _proto = CCTextureAtlasData.prototype;
        _proto.createTexture = function createTexture() {
          return BaseObject.borrowObject(CCTextureData);
        }
        /**
         * @en Clear associated texture resources.
         * @zh 清除关联的纹理。
         */;
        _proto._onClear = function _onClear() {
          _TextureAtlasData.prototype._onClear.call(this);
          this.renderTexture = null;
        };
        _createClass(CCTextureAtlasData, [{
          key: "renderTexture",
          get:
          /**
           * @en The texture used for rendering.
           * @zh 实际用于渲染显示的纹理对象。
           */
          function get() {
            return this._renderTexture;
          },
          set: function set(value) {
            this._renderTexture = value;
            if (value) {
              for (var k in this.textures) {
                var textureData = this.textures[k];
                if (!textureData.spriteFrame) {
                  var rect = null;
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
              for (var _k in this.textures) {
                var _textureData = this.textures[_k];
                _textureData.spriteFrame = null;
              }
            }
          }
        }]);
        return CCTextureAtlasData;
      }(TextureAtlasData)) || _class));
      /**
       * @en Texture data used in dragonbones.
       * @zh 龙骨资源中的纹理数据。
       */
      _export("CCTextureData", CCTextureData = (_dec2 = ccclass('dragonBones.CCTextureData'), _dec2(_class3 = /*#__PURE__*/function (_TextureData) {
        _inheritsLoose(CCTextureData, _TextureData);
        function CCTextureData() {
          var _this2;
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          _this2 = _TextureData.call.apply(_TextureData, [this].concat(args)) || this;
          /**
           * @en SpriteFrame assets.
           * @zh SpriteFrame 资源。
           */
          _this2.spriteFrame = null;
          return _this2;
        }
        /**
         * @engineInternal Since v3.7.2 this is an engine private function.
         */
        CCTextureData.toString = function toString() {
          return '[class dragonBones.CCTextureData]';
        }
        /**
         * @en Clear SpriteFrame assets.
         * @zh 清除关联的SpriteFrame 资源。
         */;
        var _proto2 = CCTextureData.prototype;
        _proto2._onClear = function _onClear() {
          _TextureData.prototype._onClear.call(this);
          this.spriteFrame = null;
        };
        return CCTextureData;
      }(TextureData)) || _class3));
    }
  };
});
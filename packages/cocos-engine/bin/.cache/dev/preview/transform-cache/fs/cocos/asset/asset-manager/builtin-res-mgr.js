System.register("q-bundled:///fs/cocos/asset/asset-manager/builtin-res-mgr.js", ["../../../../virtual/internal%253Aconstants.js", "../assets/image-asset.js", "../assets/texture-2d.js", "../assets/texture-cube.js", "./asset-manager.js", "./shared.js", "./bundle.js", "../../core/index.js", "./release-manager.js"], function (_export, _context) {
  "use strict";

  var EDITOR, EDITOR_NOT_IN_PREVIEW, TEST, ImageAsset, Texture2D, TextureCube, assetManager, BuiltinBundleName, Bundle, Settings, settings, cclegacy, releaseManager, BuiltinResMgr, builtinResMgr;
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
      EDITOR_NOT_IN_PREVIEW = _virtualInternal253AconstantsJs.EDITOR_NOT_IN_PREVIEW;
      TEST = _virtualInternal253AconstantsJs.TEST;
    }, function (_assetsImageAssetJs) {
      ImageAsset = _assetsImageAssetJs.ImageAsset;
    }, function (_assetsTexture2dJs) {
      Texture2D = _assetsTexture2dJs.Texture2D;
    }, function (_assetsTextureCubeJs) {
      TextureCube = _assetsTextureCubeJs.TextureCube;
    }, function (_assetManagerJs) {
      assetManager = _assetManagerJs.default;
    }, function (_sharedJs) {
      BuiltinBundleName = _sharedJs.BuiltinBundleName;
    }, function (_bundleJs) {
      Bundle = _bundleJs.default;
    }, function (_coreIndexJs) {
      Settings = _coreIndexJs.Settings;
      settings = _coreIndexJs.settings;
      cclegacy = _coreIndexJs.cclegacy;
    }, function (_releaseManagerJs) {
      releaseManager = _releaseManagerJs.releaseManager;
    }],
    execute: function () {
      /*
       Copyright (c) 2020-2023 Xiamen Yaji Software Co., Ltd.
      
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
      _export("BuiltinResMgr", BuiltinResMgr = /*#__PURE__*/function () {
        function BuiltinResMgr() {
          this._resources = {};
          this._materialsToBeCompiled = [];
        }
        var _proto = BuiltinResMgr.prototype;
        // this should be called after renderer initialized
        _proto.init = function init() {
          var resources = this._resources;
          var len = 2;
          var numChannels = 4;
          var blackValueView = new Uint8Array(len * len * numChannels);
          var emptyValueView = new Uint8Array(len * len * numChannels);
          var greyValueView = new Uint8Array(len * len * numChannels);
          var whiteValueView = new Uint8Array(len * len * numChannels);
          var normalValueView = new Uint8Array(len * len * numChannels);
          var offset = 0;
          for (var i = 0; i < len * len; i++) {
            blackValueView[offset] = 0;
            blackValueView[offset + 1] = 0;
            blackValueView[offset + 2] = 0;
            blackValueView[offset + 3] = 255;
            emptyValueView[offset] = 0;
            emptyValueView[offset + 1] = 0;
            emptyValueView[offset + 2] = 0;
            emptyValueView[offset + 3] = 0;
            greyValueView[offset] = 119;
            greyValueView[offset + 1] = 119;
            greyValueView[offset + 2] = 119;
            greyValueView[offset + 3] = 255;
            whiteValueView[offset] = 255;
            whiteValueView[offset + 1] = 255;
            whiteValueView[offset + 2] = 255;
            whiteValueView[offset + 3] = 255;
            normalValueView[offset] = 127;
            normalValueView[offset + 1] = 127;
            normalValueView[offset + 2] = 255;
            normalValueView[offset + 3] = 255;
            offset += numChannels;
          }
          var defaultSize = 16;
          var halfDefaultSize = defaultSize / 2;
          var defaultValueView = new Uint8Array(defaultSize * defaultSize * numChannels);
          offset = 0;
          for (var _i = 0; _i < defaultSize * defaultSize; _i++) {
            defaultValueView[offset] = 221;
            defaultValueView[offset + 1] = 221;
            defaultValueView[offset + 2] = 221;
            defaultValueView[offset + 3] = 255;
            offset += numChannels;
          }
          offset = 0;
          for (var _i2 = 0; _i2 < halfDefaultSize; _i2++) {
            for (var j = 0; j < halfDefaultSize; j++) {
              defaultValueView[offset] = 85;
              defaultValueView[offset + 1] = 85;
              defaultValueView[offset + 2] = 85;
              defaultValueView[offset + 3] = 255;
              offset += numChannels;
            }
            offset += halfDefaultSize * numChannels;
          }
          offset += halfDefaultSize * numChannels;
          for (var _i3 = 0; _i3 < halfDefaultSize; _i3++) {
            for (var _j = 0; _j < halfDefaultSize; _j++) {
              defaultValueView[offset] = 85;
              defaultValueView[offset + 1] = 85;
              defaultValueView[offset + 2] = 85;
              defaultValueView[offset + 3] = 255;
              offset += numChannels;
            }
            offset += halfDefaultSize * numChannels;
          }
          var blackMemImageSource = {
            width: len,
            height: len,
            _data: blackValueView,
            _compressed: false,
            format: Texture2D.PixelFormat.RGBA8888
          };
          var emptyMemImageSource = {
            width: len,
            height: len,
            _data: emptyValueView,
            _compressed: false,
            format: Texture2D.PixelFormat.RGBA8888
          };
          var greyMemImageSource = {
            width: len,
            height: len,
            _data: greyValueView,
            _compressed: false,
            format: Texture2D.PixelFormat.RGBA8888
          };
          var whiteMemImageSource = {
            width: len,
            height: len,
            _data: whiteValueView,
            _compressed: false,
            format: Texture2D.PixelFormat.RGBA8888
          };
          var normalMemImageSource = {
            width: len,
            height: len,
            _data: normalValueView,
            _compressed: false,
            format: Texture2D.PixelFormat.RGBA8888
          };
          var defaultMemImageSource = {
            width: defaultSize,
            height: defaultSize,
            _data: defaultValueView,
            _compressed: false,
            format: Texture2D.PixelFormat.RGBA8888
          };

          // ============================
          // builtin textures
          // type string postfix according to getStringFromType()
          // ============================

          // black texture
          var imgAsset = new ImageAsset(blackMemImageSource);
          var blackTexture = new Texture2D();
          blackTexture._uuid = 'black-texture';
          blackTexture.image = imgAsset;
          resources[blackTexture._uuid] = blackTexture;

          // empty texture
          var emptyImgAsset = new ImageAsset(emptyMemImageSource);
          var emptyTexture = new Texture2D();
          emptyTexture._uuid = 'empty-texture';
          emptyTexture.image = emptyImgAsset;
          resources[emptyTexture._uuid] = emptyTexture;

          // black cube texture
          var blackCubeTexture = new TextureCube();
          blackCubeTexture._uuid = 'black-cube-texture';
          blackCubeTexture.setMipFilter(TextureCube.Filter.NEAREST);
          blackCubeTexture.image = {
            front: new ImageAsset(blackMemImageSource),
            back: new ImageAsset(blackMemImageSource),
            left: new ImageAsset(blackMemImageSource),
            right: new ImageAsset(blackMemImageSource),
            top: new ImageAsset(blackMemImageSource),
            bottom: new ImageAsset(blackMemImageSource)
          };
          resources[blackCubeTexture._uuid] = blackCubeTexture;

          // grey texture
          var greyImgAsset = new ImageAsset(greyMemImageSource);
          var greyTexture = new Texture2D();
          greyTexture._uuid = 'grey-texture';
          greyTexture.image = greyImgAsset;
          resources[greyTexture._uuid] = greyTexture;

          // grey cube texture
          var greyCubeTexture = new TextureCube();
          greyCubeTexture._uuid = 'grey-cube-texture';
          greyCubeTexture.setMipFilter(TextureCube.Filter.NEAREST);
          greyCubeTexture.image = {
            front: new ImageAsset(greyMemImageSource),
            back: new ImageAsset(greyMemImageSource),
            left: new ImageAsset(greyMemImageSource),
            right: new ImageAsset(greyMemImageSource),
            top: new ImageAsset(greyMemImageSource),
            bottom: new ImageAsset(greyMemImageSource)
          };
          resources[greyCubeTexture._uuid] = greyCubeTexture;

          // white texture
          var whiteImgAsset = new ImageAsset(whiteMemImageSource);
          var whiteTexture = new Texture2D();
          whiteTexture._uuid = 'white-texture';
          whiteTexture.image = whiteImgAsset;
          resources[whiteTexture._uuid] = whiteTexture;

          // white cube texture
          var whiteCubeTexture = new TextureCube();
          whiteCubeTexture._uuid = 'white-cube-texture';
          whiteCubeTexture.setMipFilter(TextureCube.Filter.NEAREST);
          whiteCubeTexture.image = {
            front: new ImageAsset(whiteMemImageSource),
            back: new ImageAsset(whiteMemImageSource),
            left: new ImageAsset(whiteMemImageSource),
            right: new ImageAsset(whiteMemImageSource),
            top: new ImageAsset(whiteMemImageSource),
            bottom: new ImageAsset(whiteMemImageSource)
          };
          resources[whiteCubeTexture._uuid] = whiteCubeTexture;

          // normal texture
          var normalImgAsset = new ImageAsset(normalMemImageSource);
          var normalTexture = new Texture2D();
          normalTexture._uuid = 'normal-texture';
          normalTexture.image = normalImgAsset;
          resources[normalTexture._uuid] = normalTexture;

          // default texture
          var defaultImgAsset = new ImageAsset(defaultMemImageSource);
          var defaultTexture = new Texture2D();
          defaultTexture._uuid = 'default-texture';
          defaultTexture.image = defaultImgAsset;
          resources[defaultTexture._uuid] = defaultTexture;

          // default cube texture
          var defaultCubeTexture = new TextureCube();
          defaultCubeTexture.setMipFilter(TextureCube.Filter.NEAREST);
          defaultCubeTexture._uuid = 'default-cube-texture';
          defaultCubeTexture.image = {
            front: new ImageAsset(defaultMemImageSource),
            back: new ImageAsset(defaultMemImageSource),
            left: new ImageAsset(defaultMemImageSource),
            right: new ImageAsset(defaultMemImageSource),
            top: new ImageAsset(defaultMemImageSource),
            bottom: new ImageAsset(defaultMemImageSource)
          };
          resources[defaultCubeTexture._uuid] = defaultCubeTexture;
          if (cclegacy.SpriteFrame) {
            var spriteFrame = new cclegacy.SpriteFrame();
            var image = imgAsset;
            var texture = new Texture2D();
            texture.image = image;
            spriteFrame.texture = texture;
            spriteFrame._uuid = 'default-spriteframe';
            resources[spriteFrame._uuid] = spriteFrame;
          }
          if (EDITOR) {
            var builtinAssets = settings.querySettings(Settings.Category.ENGINE, 'builtinAssets');
            var builtinBundle = new Bundle();
            builtinBundle.init({
              name: BuiltinBundleName.INTERNAL,
              uuids: builtinAssets || [],
              deps: [],
              importBase: '',
              nativeBase: '',
              base: '',
              paths: {},
              scenes: {},
              packs: {},
              versions: {
                "import": [],
                "native": []
              },
              redirect: [],
              debug: false,
              types: [],
              extensionMap: {}
            });
          }
        };
        _proto.addAsset = function addAsset(key, asset) {
          this._resources[key] = asset;
        };
        _proto.get = function get(uuid) {
          return this._resources[uuid];
        }

        /**
         * @internal
         */;
        _proto.loadBuiltinAssets = function loadBuiltinAssets() {
          var _this = this;
          var builtinAssets = settings.querySettings(Settings.Category.ENGINE, 'builtinAssets');
          if (TEST || !builtinAssets) return Promise.resolve();
          var resources = this._resources;
          return new Promise(function (resolve, reject) {
            assetManager.loadBundle(BuiltinBundleName.INTERNAL, function (err, bundle) {
              if (err) {
                reject(err);
                return;
              }
              assetManager.loadAny(builtinAssets, function (err, assets) {
                if (err) {
                  reject(err);
                } else {
                  assets.forEach(function (asset) {
                    resources[asset.name] = asset;
                    // In Editor, no need to ignore asset destroy, we use auto gc to handle destroy
                    if (!EDITOR_NOT_IN_PREVIEW) {
                      releaseManager.addIgnoredAsset(asset);
                    }
                    if (asset instanceof cclegacy.Material) {
                      _this._materialsToBeCompiled.push(asset);
                    }
                  });
                  resolve();
                }
              });
            });
          });
        };
        _proto.compileBuiltinMaterial = function compileBuiltinMaterial() {
          // NOTE: Builtin material should be compiled again after the render pipeline setup
          for (var i = 0; i < this._materialsToBeCompiled.length; ++i) {
            var mat = this._materialsToBeCompiled[i];
            for (var j = 0; j < mat.passes.length; ++j) {
              mat.passes[j].tryCompile();
            }
          }
          this._materialsToBeCompiled.length = 0;
        };
        return BuiltinResMgr;
      }());
      _export("builtinResMgr", builtinResMgr = cclegacy.builtinResMgr = new BuiltinResMgr());
    }
  };
});
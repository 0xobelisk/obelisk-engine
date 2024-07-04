System.register(['./index-ce98320e.js', './node-event-18d96a1b.js', './builtin-res-mgr.jsb-c9e8e53a.js', './find-7a03d1cc.js', './director-dc238483.js', './device-90bc7390.js', './pipeline-sub-state.jsb-f3a5cc2c.js', './rendering-sub-mesh.jsb-25043997.js', './scene-asset.jsb-0d4c6201.js', './deprecated-f8df8d32.js', './murmurhash2_gc-2108d723.js', './deprecated-fcfb90f6.js', './renderer-3bf7a012.js', './camera-component-b329f870.js', './create-mesh.jsb-8af9d27e.js', './buffer-9511d9f4.js', './model-renderer-f8d2f66d.js'], (function (exports) {
    'use strict';
    var legacyCC, System, macro, fastRemove, Vec3, Mat4, ccclass, warnID, Rect, Vec4, Vec2, Size, errorID, ccwindow, getClassId, assertIsTrue, getError, sys, Pool, assertID, Color, assert, disallowMultiple, applyDecoratedInitializer, executionOrder, approx, EPSILON, visibleRect, AABB, serializable, ccenum, type, override, requireComponent, deprecateModuleExportedName, Orientation, Eventify, screen, settings, Settings, screenAdapter, Enum, removeProperty, replaceProperty, markAsWarning, setClassAlias, Asset, NodeEventType, Component, _applyDecoratedDescriptor, Texture2D, PixelFormat, Filter, ImageAsset, Material, builtinResMgr, Model, TransformBit, ModelLocalBindings, director, Director, uiRendererManager, BufferTextureCopy, PrimitiveMode, Attribute, AttributeName, Format, FormatInfos, BufferInfo, BufferUsageBit, MemoryUsageBit, InputAssemblerInfo, ComparisonFunc, StencilOp, BlendFactor, BlendOp, ColorMask, DepthStencilState, murmurhash2_32_gc, RecyclePool, Renderer, Camera, createMesh, ModelRenderer;
    return {
        setters: [function (module) {
            legacyCC = module.l;
            System = module.a$;
            macro = module.aM;
            fastRemove = module.bA;
            Vec3 = module.n;
            Mat4 = module.s;
            ccclass = module.by;
            warnID = module.d;
            Rect = module.R;
            Vec4 = module.p;
            Vec2 = module.V;
            Size = module.S;
            errorID = module.f;
            ccwindow = module.c6;
            getClassId = module.bO;
            assertIsTrue = module.bu;
            getError = module.aI;
            sys = module.aL;
            Pool = module.P;
            assertID = module.g;
            Color = module.C;
            assert = module.b;
            disallowMultiple = module.ck;
            applyDecoratedInitializer = module.bx;
            executionOrder = module.cs;
            approx = module.D;
            EPSILON = module.E;
            visibleRect = module.aN;
            AABB = module.bE;
            serializable = module.bf;
            ccenum = module.ab;
            type = module.bw;
            override = module.bd;
            requireComponent = module.cC;
            deprecateModuleExportedName = module.aj;
            Orientation = module.bX;
            Eventify = module.aE;
            screen = module.aK;
            settings = module.a_;
            Settings = module.aZ;
            screenAdapter = module.bW;
            Enum = module.aa;
            removeProperty = module.ah;
            replaceProperty = module.ag;
            markAsWarning = module.ai;
            setClassAlias = module.cj;
        }, function (module) {
            Asset = module.A;
            NodeEventType = module.N;
            Component = module.C;
            _applyDecoratedDescriptor = module.H;
        }, function (module) {
            Texture2D = module.am;
            PixelFormat = module.aS;
            Filter = module.aR;
            ImageAsset = module.al;
            Material = module.ap;
            builtinResMgr = module.at;
            Model = module.a;
            TransformBit = module.Z;
            ModelLocalBindings = module.aZ;
        }, function () {}, function (module) {
            director = module.n;
            Director = module.m;
            uiRendererManager = module.p;
        }, function (module) {
            BufferTextureCopy = module.a1;
            PrimitiveMode = module.u;
            Attribute = module.ao;
            AttributeName = module.aN;
            Format = module.b;
            FormatInfos = module.aO;
            BufferInfo = module.a7;
            BufferUsageBit = module.B;
            MemoryUsageBit = module.e;
            InputAssemblerInfo = module.aq;
            ComparisonFunc = module.C;
            StencilOp = module.m;
            BlendFactor = module.n;
            BlendOp = module.o;
            ColorMask = module.p;
        }, function (module) {
            DepthStencilState = module.D;
        }, function () {}, function () {}, function () {}, function (module) {
            murmurhash2_32_gc = module.m;
        }, function (module) {
            RecyclePool = module.R;
        }, function (module) {
            Renderer = module.R;
        }, function (module) {
            Camera = module.C;
        }, function (module) {
            createMesh = module.c;
        }, function () {}, function (module) {
            ModelRenderer = module.M;
        }],
        execute: (function () {

            exports({
                j: getAttributeStride,
                p: getComponentPerVertex
            });

            const space = 2;
            class Atlas {
              constructor(width, height) {
                this._texture = void 0;
                this._width = void 0;
                this._height = void 0;
                this._x = void 0;
                this._y = void 0;
                this._nexty = void 0;
                this._innerTextureInfos = {};
                this._innerSpriteFrames = void 0;
                this._count = void 0;
                const texture = new DynamicAtlasTexture();
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
              insertSpriteFrame(spriteFrame) {
                const rect = spriteFrame.rect;
                const texture = spriteFrame.texture;
                const info = this._innerTextureInfos[texture.getId()];
                let sx = rect.x;
                let sy = rect.y;
                if (info) {
                  sx += info.x;
                  sy += info.y;
                } else {
                  const width = texture.width;
                  const height = texture.height;
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
                  if (legacyCC.internal.dynamicAtlasManager.textureBleeding) {
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
                    texture
                  };
                  this._count++;
                  sx += this._x;
                  sy += this._y;
                  this._x += width + space;
                }
                const frame = {
                  x: sx,
                  y: sy,
                  texture: this._texture
                };
                this._innerSpriteFrames.push(spriteFrame);
                return frame;
              }
              deleteInnerTexture(texture) {
                if (texture && this._innerTextureInfos[texture.getId()]) {
                  delete this._innerTextureInfos[texture.getId()];
                  this._count--;
                }
              }
              isEmpty() {
                return this._count <= 0;
              }
              reset() {
                this._x = space;
                this._y = space;
                this._nexty = space;
                const frames = this._innerSpriteFrames;
                for (let i = 0, l = frames.length; i < l; i++) {
                  const frame = frames[i];
                  if (!frame.isValid) {
                    continue;
                  }
                  frame._resetDynamicAtlasFrame();
                }
                this._innerSpriteFrames.length = 0;
                this._innerTextureInfos = {};
              }
              destroy() {
                this.reset();
                this._texture.destroy();
              }
            }
            class DynamicAtlasTexture extends Texture2D {
              initWithSize(width, height, format = PixelFormat.RGBA8888) {
                this.reset({
                  width,
                  height,
                  format
                });
              }
              drawTextureAt(image, x, y) {
                const gfxTexture = this.getGFXTexture();
                if (!image || !gfxTexture) {
                  return;
                }
                const gfxDevice = this._getGFXDevice();
                if (!gfxDevice) {
                  console.warn('Unable to get device');
                  return;
                }
                const region = new BufferTextureCopy();
                region.texOffset.x = x;
                region.texOffset.y = y;
                region.texExtent.width = image.width;
                region.texExtent.height = image.height;
                gfxDevice.copyTexImagesToTexture([image.data], gfxTexture, [region]);
              }
            }

            class DynamicAtlasManager extends System {
              constructor(...args) {
                super(...args);
                this._atlases = [];
                this._atlasIndex = -1;
                this._maxAtlasCount = 5;
                this._textureSize = 2048;
                this._maxFrameSize = 512;
                this._textureBleeding = true;
                this._enabled = false;
              }
              get enabled() {
                return this._enabled;
              }
              set enabled(value) {
                if (this._enabled === value) return;
                if (value) {
                  this.reset();
                  legacyCC.director.on(legacyCC.Director.EVENT_BEFORE_SCENE_LAUNCH, this.beforeSceneLoad, this);
                } else {
                  this.reset();
                  legacyCC.director.off(legacyCC.Director.EVENT_BEFORE_SCENE_LAUNCH, this.beforeSceneLoad, this);
                }
                this._enabled = value;
              }
              get maxAtlasCount() {
                return this._maxAtlasCount;
              }
              set maxAtlasCount(value) {
                this._maxAtlasCount = value;
              }
              get atlasCount() {
                return this._atlases.length;
              }
              get textureBleeding() {
                return this._textureBleeding;
              }
              set textureBleeding(enable) {
                this._textureBleeding = enable;
              }
              get textureSize() {
                return this._textureSize;
              }
              set textureSize(value) {
                this._textureSize = value;
              }
              get maxFrameSize() {
                return this._maxFrameSize;
              }
              set maxFrameSize(value) {
                this._maxFrameSize = value;
              }
              newAtlas() {
                let atlas = this._atlases[++this._atlasIndex];
                if (!atlas) {
                  atlas = new Atlas(this._textureSize, this._textureSize);
                  this._atlases.push(atlas);
                }
                return atlas;
              }
              beforeSceneLoad() {
                this.reset();
              }
              init() {
                this.enabled = !macro.CLEANUP_IMAGE_CACHE;
              }
              insertSpriteFrame(spriteFrame) {
                if (!this._enabled || this._atlasIndex === this._maxAtlasCount || !spriteFrame || spriteFrame._original) return null;
                if (!spriteFrame.packable) return null;
                const sampler = spriteFrame.texture.getSamplerInfo();
                if (sampler.minFilter !== Filter.LINEAR || sampler.magFilter !== Filter.LINEAR || sampler.mipFilter !== Filter.NONE) {
                  return null;
                }
                let atlas = this._atlases[this._atlasIndex];
                if (!atlas) {
                  atlas = this.newAtlas();
                }
                const frame = atlas.insertSpriteFrame(spriteFrame);
                if (!frame && this._atlasIndex !== this._maxAtlasCount) {
                  atlas = this.newAtlas();
                  return atlas.insertSpriteFrame(spriteFrame);
                }
                return frame;
              }
              reset() {
                for (let i = 0, l = this._atlases.length; i < l; i++) {
                  this._atlases[i].destroy();
                }
                this._atlases.length = 0;
                this._atlasIndex = -1;
              }
              deleteAtlasSpriteFrame(spriteFrame) {
                if (!spriteFrame._original) return;
                let atlas;
                for (let i = this._atlases.length - 1; i >= 0; i--) {
                  atlas = this._atlases[i];
                  fastRemove(atlas._innerSpriteFrames, spriteFrame);
                }
                const texture = spriteFrame._original._texture;
                this.deleteAtlasTexture(texture);
              }
              deleteAtlasTexture(texture) {
                if (texture) {
                  for (let i = this._atlases.length - 1; i >= 0; i--) {
                    this._atlases[i].deleteInnerTexture(texture);
                    if (this._atlases[i].isEmpty()) {
                      this._atlases[i].destroy();
                      this._atlases.splice(i, 1);
                      this._atlasIndex--;
                    }
                  }
                }
              }
              packToDynamicAtlas(comp, frame) {
                if (!this._enabled) return;
                if (frame && !frame._original && frame.packable && frame.texture && frame.texture.width > 0 && frame.texture.height > 0) {
                  const packedFrame = this.insertSpriteFrame(frame);
                  if (packedFrame) {
                    frame._setDynamicAtlasFrame(packedFrame);
                  }
                }
              }
            } exports('D', DynamicAtlasManager);
            DynamicAtlasManager.instance = void 0;
            const dynamicAtlasManager = exports('g', DynamicAtlasManager.instance = new DynamicAtlasManager());
            director.registerSystem('dynamicAtlasManager', dynamicAtlasManager, 0);
            legacyCC.internal.dynamicAtlasManager = dynamicAtlasManager;

            var _dec$6, _class$6, _class2$4;
            const INSET_LEFT = 0;
            const INSET_TOP = 1;
            const INSET_RIGHT = 2;
            const INSET_BOTTOM = 3;
            const temp_vec3 = new Vec3();
            const temp_matrix = new Mat4();
            var MeshType;
            (function (MeshType) {
              MeshType[MeshType["RECT"] = 0] = "RECT";
              MeshType[MeshType["POLYGON"] = 1] = "POLYGON";
            })(MeshType || (MeshType = {}));
            const temp_uvs = [{
              u: 0,
              v: 0
            }, {
              u: 0,
              v: 0
            }, {
              u: 0,
              v: 0
            }, {
              u: 0,
              v: 0
            }];
            let SpriteFrame = exports('a', (_dec$6 = ccclass('cc.SpriteFrame'), _dec$6(_class$6 = (_class2$4 = class SpriteFrame extends Asset {
              static createWithImage(imageSourceOrImageAsset) {
                const img = imageSourceOrImageAsset instanceof ImageAsset ? imageSourceOrImageAsset : new ImageAsset(imageSourceOrImageAsset);
                const tex = new Texture2D();
                tex.image = img;
                const spf = new SpriteFrame();
                spf.texture = tex;
                return spf;
              }
              get insetTop() {
                return this._capInsets[INSET_TOP];
              }
              set insetTop(value) {
                if (this._capInsets[INSET_TOP] === value) {
                  return;
                }
                this._capInsets[INSET_TOP] = value;
                if (this._texture) {
                  this._calculateSlicedUV();
                }
              }
              get insetBottom() {
                return this._capInsets[INSET_BOTTOM];
              }
              set insetBottom(value) {
                if (this._capInsets[INSET_BOTTOM] === value) {
                  return;
                }
                this._capInsets[INSET_BOTTOM] = value;
                if (this._texture) {
                  this._calculateSlicedUV();
                }
              }
              get insetLeft() {
                return this._capInsets[INSET_LEFT];
              }
              set insetLeft(value) {
                if (this._capInsets[INSET_LEFT] === value) {
                  return;
                }
                this._capInsets[INSET_LEFT] = value;
                if (this._texture) {
                  this._calculateSlicedUV();
                }
              }
              get insetRight() {
                return this._capInsets[INSET_RIGHT];
              }
              set insetRight(value) {
                if (this._capInsets[INSET_RIGHT] === value) {
                  return;
                }
                this._capInsets[INSET_RIGHT] = value;
                if (this._texture) {
                  this._calculateSlicedUV();
                }
              }
              get rect() {
                return this._rect;
              }
              set rect(value) {
                if (this._rect.equals(value)) {
                  return;
                }
                this._rect.set(value);
                if (this._texture) {
                  this._calculateUV();
                }
                this._calcTrimmedBorder();
              }
              get originalSize() {
                return this._originalSize;
              }
              set originalSize(value) {
                if (this._originalSize.equals(value)) {
                  return;
                }
                this._originalSize.set(value);
                if (this._texture) {
                  this._calculateUV();
                }
                this._calcTrimmedBorder();
              }
              get offset() {
                return this._offset;
              }
              set offset(value) {
                this._offset.set(value);
                this._calcTrimmedBorder();
              }
              get rotated() {
                return this._rotated;
              }
              set rotated(rotated) {
                if (this._rotated === rotated) {
                  return;
                }
                this._rotated = rotated;
                if (this._texture) {
                  this._calculateUV();
                }
              }
              get texture() {
                return this._texture;
              }
              set texture(value) {
                if (!value) {
                  warnID(3122, this.name);
                  return;
                }
                if (value === this._texture) {
                  return;
                }
                this.reset({
                  texture: value
                }, true);
              }
              get atlasUuid() {
                return this._atlasUuid;
              }
              set atlasUuid(value) {
                this._atlasUuid = value;
              }
              get width() {
                return this._texture.width;
              }
              get height() {
                return this._texture.height;
              }
              set _textureSource(value) {
                if (globalThis.Build) {
                  this._texture = value;
                  return;
                }
                if (value) {
                  this._refreshTexture(value);
                  this._calculateUV();
                }
              }
              get flipUVX() {
                return this._isFlipUVX;
              }
              set flipUVX(value) {
                this._isFlipUVX = value;
                this._calculateUV();
              }
              get flipUVY() {
                return this._isFlipUVY;
              }
              set flipUVY(value) {
                this._isFlipUVY = value;
                this._calculateUV();
              }
              get packable() {
                return this._packable;
              }
              set packable(value) {
                this._packable = value;
              }
              get original() {
                return this._original;
              }
              get pixelsToUnit() {
                return this._pixelsToUnit;
              }
              get pivot() {
                return this._pivot;
              }
              get mesh() {
                return this._mesh;
              }
              get trimmedBorder() {
                return this._trimmedBorder;
              }
              constructor() {
                super();
                this.vertices = null;
                this.uv = [];
                this.unbiasUV = [];
                this.uvSliced = [];
                this._rect = new Rect();
                this._trimmedBorder = new Vec4();
                this._offset = new Vec2();
                this._originalSize = new Size();
                this._rotated = false;
                this._capInsets = [0, 0, 0, 0];
                this._atlasUuid = '';
                this._texture = void 0;
                this._isFlipUVY = false;
                this._isFlipUVX = false;
                this._original = null;
                this._packable = true;
                this._pixelsToUnit = 100;
                this._pivot = new Vec2(0.5, 0.5);
                this._meshType = MeshType.RECT;
                this._extrude = 0;
                this._customOutLine = [];
                this._minPos = new Vec3();
                this._maxPos = new Vec3();
              }
              textureLoaded() {
                return !!this.texture;
              }
              isRotated() {
                return this._rotated;
              }
              setRotated(rotated) {
                this.rotated = rotated;
              }
              getRect(out) {
                if (out) {
                  out.set(this._rect);
                  return out;
                }
                return this._rect.clone();
              }
              setRect(rect) {
                this.rect = rect;
              }
              getOriginalSize(out) {
                if (out) {
                  out.set(this._originalSize);
                  return out;
                }
                return this._originalSize.clone();
              }
              setOriginalSize(size) {
                this.originalSize = size;
              }
              getOffset(out) {
                if (out) {
                  out.set(this._offset);
                  return out;
                }
                return this._offset.clone();
              }
              setOffset(offset) {
                this.offset = offset;
              }
              getGFXTexture() {
                return this._texture.getGFXTexture();
              }
              getGFXSampler() {
                return this._texture.getGFXSampler();
              }
              getHash() {
                return this._texture.getHash();
              }
              getSamplerInfo() {
                return this._texture.getSamplerInfo();
              }
              reset(info, clearData = false) {
                let calUV = false;
                if (clearData) {
                  this._originalSize.set(0, 0);
                  this._rect.set(0, 0, 0, 0);
                  this._offset.set(0, 0);
                  this._capInsets = [0, 0, 0, 0];
                  this._rotated = false;
                  calUV = true;
                }
                if (info) {
                  if (info.texture) {
                    this._rect.x = this._rect.y = 0;
                    this._rect.width = info.texture.width;
                    this._rect.height = info.texture.height;
                    this._refreshTexture(info.texture);
                    this.checkRect(this._texture);
                  }
                  if (info.originalSize) {
                    this._originalSize.set(info.originalSize);
                  }
                  if (info.rect) {
                    this._rect.set(info.rect);
                  }
                  if (info.offset) {
                    this._offset.set(info.offset);
                  }
                  if (info.borderTop !== undefined) {
                    this._capInsets[INSET_TOP] = info.borderTop;
                  }
                  if (info.borderBottom !== undefined) {
                    this._capInsets[INSET_BOTTOM] = info.borderBottom;
                  }
                  if (info.borderLeft !== undefined) {
                    this._capInsets[INSET_LEFT] = info.borderLeft;
                  }
                  if (info.borderRight !== undefined) {
                    this._capInsets[INSET_RIGHT] = info.borderRight;
                  }
                  if (info.isRotate !== undefined) {
                    this._rotated = !!info.isRotate;
                  }
                  if (info.isFlipUv !== undefined) {
                    this._isFlipUVY = !!info.isFlipUv;
                  }
                  calUV = true;
                }
                if (calUV && this.texture) {
                  this._calculateUV();
                }
                this._calcTrimmedBorder();
              }
              checkRect(texture) {
                const rect = this._rect;
                let maxX = rect.x;
                let maxY = rect.y;
                if (this._rotated) {
                  maxX += rect.height;
                  maxY += rect.width;
                } else {
                  maxX += rect.width;
                  maxY += rect.height;
                }
                if (maxX > texture.width) {
                  errorID(3300, `${this.name}/${texture.name}`, maxX, texture.width);
                  return false;
                }
                if (maxY > texture.height) {
                  errorID(3301, `${this.name}/${texture.name}`, maxY, texture.height);
                  return false;
                }
                return true;
              }
              _calcTrimmedBorder() {
                const ow = this._originalSize.width;
                const oh = this._originalSize.height;
                const rw = this._rect.width;
                const rh = this._rect.height;
                const halfTrimmedWidth = (ow - rw) * 0.5;
                const halfTrimmedHeight = (oh - rh) * 0.5;
                this._trimmedBorder.x = this._offset.x + halfTrimmedWidth;
                this._trimmedBorder.y = this._offset.x - halfTrimmedWidth;
                this._trimmedBorder.z = this._offset.y + halfTrimmedHeight;
                this._trimmedBorder.w = this._offset.y - halfTrimmedHeight;
              }
              ensureMeshData() {
                if (this._mesh) return;
                this._initVertices();
                this._createMesh();
              }
              destroy() {
                if (this._packable && dynamicAtlasManager) {
                  dynamicAtlasManager.deleteAtlasSpriteFrame(this);
                }
                return super.destroy();
              }
              _calculateSlicedUV() {
                const rect = this._rect;
                const tex = this.texture;
                const atlasWidth = tex.width;
                const atlasHeight = tex.height;
                const leftWidth = this._capInsets[INSET_LEFT];
                const rightWidth = this._capInsets[INSET_RIGHT];
                const centerWidth = rect.width - leftWidth - rightWidth;
                const topHeight = this._capInsets[INSET_TOP];
                const bottomHeight = this._capInsets[INSET_BOTTOM];
                const centerHeight = rect.height - topHeight - bottomHeight;
                const uvSliced = this.uvSliced;
                uvSliced.length = 0;
                if (this._rotated) {
                  temp_uvs[0].u = rect.x / atlasWidth;
                  temp_uvs[1].u = (rect.x + bottomHeight) / atlasWidth;
                  temp_uvs[2].u = (rect.x + bottomHeight + centerHeight) / atlasWidth;
                  temp_uvs[3].u = (rect.x + rect.height) / atlasWidth;
                  temp_uvs[3].v = rect.y / atlasHeight;
                  temp_uvs[2].v = (rect.y + leftWidth) / atlasHeight;
                  temp_uvs[1].v = (rect.y + leftWidth + centerWidth) / atlasHeight;
                  temp_uvs[0].v = (rect.y + rect.width) / atlasHeight;
                  for (let row = 0; row < 4; ++row) {
                    const rowD = temp_uvs[row];
                    for (let col = 0; col < 4; ++col) {
                      const colD = temp_uvs[3 - col];
                      uvSliced.push({
                        u: rowD.u,
                        v: colD.v
                      });
                    }
                  }
                } else {
                  temp_uvs[0].u = rect.x / atlasWidth;
                  temp_uvs[1].u = (rect.x + leftWidth) / atlasWidth;
                  temp_uvs[2].u = (rect.x + leftWidth + centerWidth) / atlasWidth;
                  temp_uvs[3].u = (rect.x + rect.width) / atlasWidth;
                  temp_uvs[3].v = rect.y / atlasHeight;
                  temp_uvs[2].v = (rect.y + topHeight) / atlasHeight;
                  temp_uvs[1].v = (rect.y + topHeight + centerHeight) / atlasHeight;
                  temp_uvs[0].v = (rect.y + rect.height) / atlasHeight;
                  for (let row = 0; row < 4; ++row) {
                    const rowD = temp_uvs[row];
                    for (let col = 0; col < 4; ++col) {
                      const colD = temp_uvs[col];
                      uvSliced.push({
                        u: colD.u,
                        v: rowD.v
                      });
                    }
                  }
                }
                this.emit(SpriteFrame.EVENT_UV_UPDATED, this);
              }
              _calculateUV() {
                const rect = this._rect;
                const uv = this.uv;
                const unbiasUV = this.unbiasUV;
                const tex = this.texture;
                const texw = tex.width;
                const texh = tex.height;
                if (this._rotated) {
                  const l = texw === 0 ? 0 : rect.x / texw;
                  const r = texw === 0 ? 1 : (rect.x + rect.height) / texw;
                  const t = texh === 0 ? 0 : rect.y / texh;
                  const b = texh === 0 ? 1 : (rect.y + rect.width) / texh;
                  if (this._isFlipUVX && this._isFlipUVY) {
                    uv[0] = r;
                    uv[1] = b;
                    uv[2] = r;
                    uv[3] = t;
                    uv[4] = l;
                    uv[5] = b;
                    uv[6] = l;
                    uv[7] = t;
                  } else if (this._isFlipUVX) {
                    uv[0] = r;
                    uv[1] = t;
                    uv[2] = r;
                    uv[3] = b;
                    uv[4] = l;
                    uv[5] = t;
                    uv[6] = l;
                    uv[7] = b;
                  } else if (this._isFlipUVY) {
                    uv[0] = l;
                    uv[1] = b;
                    uv[2] = l;
                    uv[3] = t;
                    uv[4] = r;
                    uv[5] = b;
                    uv[6] = r;
                    uv[7] = t;
                  } else {
                    uv[0] = l;
                    uv[1] = t;
                    uv[2] = l;
                    uv[3] = b;
                    uv[4] = r;
                    uv[5] = t;
                    uv[6] = r;
                    uv[7] = b;
                  }
                  const ul = texw === 0 ? 0 : rect.x / texw;
                  const ur = texw === 0 ? 1 : (rect.x + rect.height) / texw;
                  const ut = texh === 0 ? 0 : rect.y / texh;
                  const ub = texh === 0 ? 1 : (rect.y + rect.width) / texh;
                  if (this._isFlipUVX && this._isFlipUVY) {
                    unbiasUV[0] = ur;
                    unbiasUV[1] = ub;
                    unbiasUV[2] = ur;
                    unbiasUV[3] = ut;
                    unbiasUV[4] = ul;
                    unbiasUV[5] = ub;
                    unbiasUV[6] = ul;
                    unbiasUV[7] = ut;
                  } else if (this._isFlipUVX) {
                    unbiasUV[0] = ur;
                    unbiasUV[1] = ut;
                    unbiasUV[2] = ur;
                    unbiasUV[3] = ub;
                    unbiasUV[4] = ul;
                    unbiasUV[5] = ut;
                    unbiasUV[6] = ul;
                    unbiasUV[7] = ub;
                  } else if (this._isFlipUVY) {
                    unbiasUV[0] = ul;
                    unbiasUV[1] = ub;
                    unbiasUV[2] = ul;
                    unbiasUV[3] = ut;
                    unbiasUV[4] = ur;
                    unbiasUV[5] = ub;
                    unbiasUV[6] = ur;
                    unbiasUV[7] = ut;
                  } else {
                    unbiasUV[0] = ul;
                    unbiasUV[1] = ut;
                    unbiasUV[2] = ul;
                    unbiasUV[3] = ub;
                    unbiasUV[4] = ur;
                    unbiasUV[5] = ut;
                    unbiasUV[6] = ur;
                    unbiasUV[7] = ub;
                  }
                } else {
                  const l = texw === 0 ? 0 : rect.x / texw;
                  const r = texw === 0 ? 1 : (rect.x + rect.width) / texw;
                  const b = texh === 0 ? 1 : (rect.y + rect.height) / texh;
                  const t = texh === 0 ? 0 : rect.y / texh;
                  if (this._isFlipUVX && this._isFlipUVY) {
                    uv[0] = r;
                    uv[1] = t;
                    uv[2] = l;
                    uv[3] = t;
                    uv[4] = r;
                    uv[5] = b;
                    uv[6] = l;
                    uv[7] = b;
                  } else if (this._isFlipUVX) {
                    uv[0] = r;
                    uv[1] = b;
                    uv[2] = l;
                    uv[3] = b;
                    uv[4] = r;
                    uv[5] = t;
                    uv[6] = l;
                    uv[7] = t;
                  } else if (this._isFlipUVY) {
                    uv[0] = l;
                    uv[1] = t;
                    uv[2] = r;
                    uv[3] = t;
                    uv[4] = l;
                    uv[5] = b;
                    uv[6] = r;
                    uv[7] = b;
                  } else {
                    uv[0] = l;
                    uv[1] = b;
                    uv[2] = r;
                    uv[3] = b;
                    uv[4] = l;
                    uv[5] = t;
                    uv[6] = r;
                    uv[7] = t;
                  }
                  const ul = texw === 0 ? 0 : rect.x / texw;
                  const ur = texw === 0 ? 1 : (rect.x + rect.width) / texw;
                  const ub = texh === 0 ? 1 : (rect.y + rect.height) / texh;
                  const ut = texh === 0 ? 0 : rect.y / texh;
                  if (this._isFlipUVX && this._isFlipUVY) {
                    unbiasUV[0] = ur;
                    unbiasUV[1] = ut;
                    unbiasUV[2] = ul;
                    unbiasUV[3] = ut;
                    unbiasUV[4] = ur;
                    unbiasUV[5] = ub;
                    unbiasUV[6] = ul;
                    unbiasUV[7] = ub;
                  } else if (this._isFlipUVX) {
                    unbiasUV[0] = ur;
                    unbiasUV[1] = ub;
                    unbiasUV[2] = ul;
                    unbiasUV[3] = ub;
                    unbiasUV[4] = ur;
                    unbiasUV[5] = ut;
                    unbiasUV[6] = ul;
                    unbiasUV[7] = ut;
                  } else if (this._isFlipUVY) {
                    unbiasUV[0] = ul;
                    unbiasUV[1] = ut;
                    unbiasUV[2] = ur;
                    unbiasUV[3] = ut;
                    unbiasUV[4] = ul;
                    unbiasUV[5] = ub;
                    unbiasUV[6] = ur;
                    unbiasUV[7] = ub;
                  } else {
                    unbiasUV[0] = ul;
                    unbiasUV[1] = ub;
                    unbiasUV[2] = ur;
                    unbiasUV[3] = ub;
                    unbiasUV[4] = ul;
                    unbiasUV[5] = ut;
                    unbiasUV[6] = ur;
                    unbiasUV[7] = ut;
                  }
                }
                this._calculateSlicedUV();
              }
              _setDynamicAtlasFrame(frame) {
                if (!frame) return;
                this._original = {
                  _texture: this._texture,
                  _x: this._rect.x,
                  _y: this._rect.y
                };
                this._texture = frame.texture;
                this._rect.x = frame.x;
                this._rect.y = frame.y;
                this._calculateUV();
              }
              _resetDynamicAtlasFrame() {
                if (!this._original) return;
                this._rect.x = this._original._x;
                this._rect.y = this._original._y;
                this._texture = this._original._texture;
                this._original = null;
                this._calculateUV();
              }
              _checkPackable() {
                const dynamicAtlas = dynamicAtlasManager;
                if (!dynamicAtlas) return;
                const texture = this._texture;
                if (!(texture instanceof Texture2D) || texture.isCompressed) {
                  this._packable = false;
                  return;
                }
                const w = this.width;
                const h = this.height;
                if (!texture.image || w > dynamicAtlas.maxFrameSize || h > dynamicAtlas.maxFrameSize) {
                  this._packable = false;
                  return;
                }
                const CanvasElement = ccwindow.HTMLCanvasElement;
                if (texture.image && texture.image instanceof CanvasElement) {
                  this._packable = true;
                }
              }
              _serialize(ctxForExporting) {
                return null;
              }
              _deserialize(serializeData, handle) {
                const data = serializeData;
                const rect = data.rect;
                if (rect) {
                  this._rect = new Rect(rect.x, rect.y, rect.width, rect.height);
                }
                const offset = data.offset;
                if (data.offset) {
                  this._offset = new Vec2(offset.x, offset.y);
                }
                const originalSize = data.originalSize;
                if (data.originalSize) {
                  this._originalSize = new Size(originalSize.width, originalSize.height);
                }
                this._rotated = !!data.rotated;
                this._name = data.name;
                this._packable = !!data.packable;
                this._pixelsToUnit = data.pixelsToUnit;
                const pivot = data.pivot;
                if (pivot) {
                  this._pivot = new Vec2(pivot.x, pivot.y);
                }
                this._meshType = data.meshType;
                const capInsets = data.capInsets;
                if (capInsets) {
                  this._capInsets[INSET_LEFT] = capInsets[INSET_LEFT];
                  this._capInsets[INSET_TOP] = capInsets[INSET_TOP];
                  this._capInsets[INSET_RIGHT] = capInsets[INSET_RIGHT];
                  this._capInsets[INSET_BOTTOM] = capInsets[INSET_BOTTOM];
                }
                {
                  if (data.texture) {
                    handle.result.push(this, '_textureSource', data.texture, getClassId(Texture2D));
                  }
                }
                const vertices = data.vertices;
                if (vertices) {
                  if (!this.vertices) {
                    this.vertices = {
                      rawPosition: [],
                      positions: [],
                      indexes: vertices.indexes,
                      uv: vertices.uv,
                      nuv: vertices.nuv,
                      minPos: new Vec3(vertices.minPos.x, vertices.minPos.y, vertices.minPos.z),
                      maxPos: new Vec3(vertices.maxPos.x, vertices.maxPos.y, vertices.maxPos.z)
                    };
                  }
                  this.vertices.rawPosition.length = 0;
                  const rawPosition = vertices.rawPosition;
                  for (let i = 0; i < rawPosition.length; i += 3) {
                    this.vertices.rawPosition.push(new Vec3(rawPosition[i], rawPosition[i + 1], rawPosition[i + 2]));
                  }
                  this._updateMeshVertices();
                }
              }
              clone() {
                const sp = new SpriteFrame();
                const v = this.vertices;
                sp.vertices = v ? {
                  rawPosition: v.rawPosition.slice(0),
                  positions: v.positions.slice(0),
                  indexes: v.indexes.slice(0),
                  uv: v.uv.slice(0),
                  nuv: v.nuv.slice(0),
                  minPos: v.minPos.clone(),
                  maxPos: v.maxPos.clone()
                } : null;
                sp.uv.splice(0, sp.uv.length, ...this.uv);
                sp.unbiasUV.splice(0, sp.unbiasUV.length, ...this.unbiasUV);
                sp.uvSliced.splice(0, sp.uvSliced.length, ...this.uvSliced);
                sp._rect.set(this._rect);
                sp._trimmedBorder.set(this._trimmedBorder);
                sp._offset.set(this._offset);
                sp._originalSize.set(this._originalSize);
                sp._rotated = this._rotated;
                sp._capInsets.splice(0, sp._capInsets.length, ...this._capInsets);
                sp._atlasUuid = this._atlasUuid;
                sp._texture = this._texture;
                sp._isFlipUVX = this._isFlipUVX;
                sp._isFlipUVY = this._isFlipUVY;
                if (this._original) {
                  sp._original = {
                    _texture: this._original._texture,
                    _x: this._original._x,
                    _y: this._original._y
                  };
                } else {
                  sp._original = null;
                }
                sp._packable = this._packable;
                sp._pixelsToUnit = this._pixelsToUnit;
                sp._pivot.set(this._pivot);
                sp._meshType = this._meshType;
                sp._extrude = this._extrude;
                sp._customOutLine.splice(0, sp._customOutLine.length, ...this._customOutLine);
                sp._minPos = this._minPos;
                sp._maxPos = this._maxPos;
                if (this._mesh) {
                  sp._createMesh();
                }
                return sp;
              }
              _refreshTexture(texture) {
                this._texture = texture;
                const tex = this._texture;
                const config = {};
                let isReset = false;
                if (this._rect.width === 0 || this._rect.height === 0 || !this.checkRect(tex)) {
                  config.rect = new Rect(0, 0, tex.width, tex.height);
                  isReset = true;
                }
                if (this._originalSize.width === 0 || this._originalSize.height === 0 || isReset) {
                  config.originalSize = new Size(tex.width, tex.height);
                  isReset = true;
                }
                if (isReset) {
                  this.reset(config);
                }
                this._checkPackable();
                if (this._mesh) {
                  this._updateMesh();
                }
              }
              onLoaded() {
                this._calcTrimmedBorder();
              }
              initDefault(uuid) {
                super.initDefault(uuid);
                const texture = new Texture2D();
                texture.initDefault();
                this._refreshTexture(texture);
                this._calculateUV();
              }
              validate() {
                return this._texture && this._rect && this._rect.width !== 0 && this._rect.height !== 0;
              }
              _initVertices() {
                if (!this.vertices) {
                  this.vertices = {
                    rawPosition: [],
                    positions: [],
                    indexes: [],
                    uv: [],
                    nuv: [],
                    minPos: new Vec3(),
                    maxPos: new Vec3()
                  };
                } else {
                  this.vertices.rawPosition.length = 0;
                  this.vertices.positions.length = 0;
                  this.vertices.indexes.length = 0;
                  this.vertices.uv.length = 0;
                  this.vertices.nuv.length = 0;
                  this.vertices.minPos.set(0, 0, 0);
                  this.vertices.maxPos.set(0, 0, 0);
                }
                if (this._meshType === MeshType.POLYGON) ; else {
                  const tex = this.texture;
                  const texw = tex.width;
                  const texh = tex.height;
                  const rect = this.rect;
                  const width = rect.width;
                  const height = rect.height;
                  const rectX = rect.x;
                  const rectY = texh - rect.y - height;
                  const halfWidth = width / 2;
                  const halfHeight = height / 2;
                  const l = texw === 0 ? 0 : rectX / texw;
                  const r = texw === 0 ? 1 : (rectX + width) / texw;
                  const t = texh === 0 ? 1 : (rectY + height) / texh;
                  const b = texh === 0 ? 0 : rect.y / texh;
                  temp_vec3.set(-halfWidth, -halfHeight, 0);
                  this.vertices.rawPosition.push(temp_vec3.clone());
                  this.vertices.uv.push(rectX);
                  this.vertices.uv.push(rectY + height);
                  this.vertices.nuv.push(l);
                  this.vertices.nuv.push(b);
                  this.vertices.minPos.set(temp_vec3);
                  temp_vec3.set(halfWidth, -halfHeight, 0);
                  this.vertices.rawPosition.push(temp_vec3.clone());
                  this.vertices.uv.push(rectX + width);
                  this.vertices.uv.push(rectY + height);
                  this.vertices.nuv.push(r);
                  this.vertices.nuv.push(b);
                  temp_vec3.set(-halfWidth, halfHeight, 0);
                  this.vertices.rawPosition.push(temp_vec3.clone());
                  this.vertices.uv.push(rectX);
                  this.vertices.uv.push(rectY);
                  this.vertices.nuv.push(l);
                  this.vertices.nuv.push(t);
                  temp_vec3.set(halfWidth, halfHeight, 0);
                  this.vertices.rawPosition.push(temp_vec3.clone());
                  this.vertices.uv.push(rectX + width);
                  this.vertices.uv.push(rectY);
                  this.vertices.nuv.push(r);
                  this.vertices.nuv.push(t);
                  this.vertices.maxPos.set(temp_vec3);
                  this.vertices.indexes.push(0);
                  this.vertices.indexes.push(1);
                  this.vertices.indexes.push(2);
                  this.vertices.indexes.push(2);
                  this.vertices.indexes.push(1);
                  this.vertices.indexes.push(3);
                }
                this._updateMeshVertices();
              }
              _updateMeshVertices() {
                temp_matrix.identity();
                const units = 1 / this._pixelsToUnit;
                const PosX = -(this._pivot.x - 0.5) * this.rect.width * units;
                const PosY = -(this._pivot.y - 0.5) * this.rect.height * units;
                const temp_vec3 = new Vec3(PosX, PosY, 0);
                temp_matrix.transform(temp_vec3);
                temp_vec3.set(units, units, 1);
                temp_matrix.scale(temp_vec3);
                const vertices = this.vertices;
                for (let i = 0; i < vertices.rawPosition.length; i++) {
                  const pos = vertices.rawPosition[i];
                  Vec3.transformMat4(temp_vec3, pos, temp_matrix);
                  Vec3.toArray(vertices.positions, temp_vec3, 3 * i);
                }
                Vec3.transformMat4(this._minPos, vertices.minPos, temp_matrix);
                Vec3.transformMat4(this._maxPos, vertices.maxPos, temp_matrix);
              }
              _createMesh() {
                this._mesh = createMesh({
                  primitiveMode: PrimitiveMode.TRIANGLE_LIST,
                  positions: this.vertices.positions,
                  uvs: this.vertices.nuv,
                  indices: this.vertices.indexes,
                  minPos: this._minPos,
                  maxPos: this._maxPos,
                  attributes: [new Attribute(AttributeName.ATTR_POSITION, Format.RGB32F), new Attribute(AttributeName.ATTR_TEX_COORD, Format.RG32F)]
                });
              }
              _updateMesh() {
                if (this._mesh) {
                  this._mesh.destroy();
                }
                this._initVertices();
                this._createMesh();
              }
            }, _class2$4.EVENT_UV_UPDATED = 'uv_updated', _class2$4.MeshType = MeshType, _class2$4)) || _class$6));
            legacyCC.SpriteFrame = SpriteFrame;

            const vfmt = exports('m', [new Attribute(AttributeName.ATTR_POSITION, Format.RGB32F)]);
            const vfmtPosColor = exports('o', [new Attribute(AttributeName.ATTR_POSITION, Format.RGB32F), new Attribute(AttributeName.ATTR_COLOR, Format.RGBA32F)]);
            const vfmtPosUvColor = exports('i', [new Attribute(AttributeName.ATTR_POSITION, Format.RGB32F), new Attribute(AttributeName.ATTR_TEX_COORD, Format.RG32F), new Attribute(AttributeName.ATTR_COLOR, Format.RGBA32F)]);
            const vfmtPosUvColor4B = exports('w', [new Attribute(AttributeName.ATTR_POSITION, Format.RGB32F), new Attribute(AttributeName.ATTR_TEX_COORD, Format.RG32F), new Attribute(AttributeName.ATTR_COLOR, Format.RGBA8, true)]);
            const vfmtPosUvTwoColor = [new Attribute(AttributeName.ATTR_POSITION, Format.RGB32F), new Attribute(AttributeName.ATTR_TEX_COORD, Format.RG32F), new Attribute(AttributeName.ATTR_COLOR, Format.RGBA32F), new Attribute(AttributeName.ATTR_COLOR2, Format.RGBA32F)];
            const vfmtPosUvTwoColor4B = exports('x', [new Attribute(AttributeName.ATTR_POSITION, Format.RGB32F), new Attribute(AttributeName.ATTR_TEX_COORD, Format.RG32F), new Attribute(AttributeName.ATTR_COLOR, Format.RGBA8, true), new Attribute(AttributeName.ATTR_COLOR2, Format.RGBA8, true)]);
            function getComponentPerVertex(attrs) {
              let count = 0;
              for (let i = 0; i < attrs.length; i++) {
                const attr = attrs[i];
                const info = FormatInfos[attr.format];
                count += info.count;
              }
              return count;
            }
            function getAttributeStride(attrs) {
              let count = 0;
              for (let i = 0; i < attrs.length; i++) {
                const attr = attrs[i];
                const info = FormatInfos[attr.format];
                count += info.size;
              }
              return count;
            }
            legacyCC.internal.vfmtPosUvColor = vfmtPosUvColor;
            legacyCC.internal.vfmtPosUvTwoColor = vfmtPosUvTwoColor;
            legacyCC.internal.vfmtPosUvColor4B = vfmtPosUvColor4B;
            legacyCC.internal.vfmtPosUvTwoColor4B = vfmtPosUvTwoColor4B;

            var vertexFormat = /*#__PURE__*/Object.freeze({
                __proto__: null,
                vfmt: vfmt,
                vfmtPosColor: vfmtPosColor,
                vfmtPosUvColor: vfmtPosUvColor,
                vfmtPosUvColor4B: vfmtPosUvColor4B,
                vfmtPosUvTwoColor: vfmtPosUvTwoColor,
                vfmtPosUvTwoColor4B: vfmtPosUvTwoColor4B,
                getComponentPerVertex: getComponentPerVertex,
                getAttributeStride: getAttributeStride
            });
            exports('v', vertexFormat);

            const NativeRenderDrawInfo = n2d.RenderDrawInfo;
            n2d.Batcher2d;
            const NativeUIMeshBuffer = n2d.UIMeshBuffer;
            const NativeRenderEntity = n2d.RenderEntity;
            const NativeUIModelProxy = exports('N', n2d.UIModelProxy);
            n2d.StencilManager;

            var MeshBufferSharedBufferView;
            (function (MeshBufferSharedBufferView) {
              MeshBufferSharedBufferView[MeshBufferSharedBufferView["byteOffset"] = 0] = "byteOffset";
              MeshBufferSharedBufferView[MeshBufferSharedBufferView["vertexOffset"] = 1] = "vertexOffset";
              MeshBufferSharedBufferView[MeshBufferSharedBufferView["indexOffset"] = 2] = "indexOffset";
              MeshBufferSharedBufferView[MeshBufferSharedBufferView["dirty"] = 3] = "dirty";
              MeshBufferSharedBufferView[MeshBufferSharedBufferView["count"] = 4] = "count";
            })(MeshBufferSharedBufferView || (MeshBufferSharedBufferView = {}));
            const IA_POOL_USED_SCALE = 1 / 2;
            class MeshBuffer {
              get attributes() {
                return this._attributes;
              }
              get vertexFormatBytes() {
                return this._vertexFormatBytes;
              }
              get byteOffset() {
                return this._byteOffset;
              }
              set byteOffset(val) {
                this._byteOffset = val;
                {
                  this._sharedBuffer[MeshBufferSharedBufferView.byteOffset] = val;
                }
              }
              get vertexOffset() {
                return this._vertexOffset;
              }
              set vertexOffset(val) {
                this._vertexOffset = val;
                {
                  this._sharedBuffer[MeshBufferSharedBufferView.vertexOffset] = val;
                }
              }
              get indexOffset() {
                return this._indexOffset;
              }
              set indexOffset(val) {
                this._indexOffset = val;
                {
                  this._sharedBuffer[MeshBufferSharedBufferView.indexOffset] = val;
                }
              }
              get dirty() {
                return this._dirty;
              }
              set dirty(val) {
                this._dirty = val;
                {
                  this._sharedBuffer[MeshBufferSharedBufferView.dirty] = val ? 1 : 0;
                }
              }
              get floatsPerVertex() {
                return this._floatsPerVertex;
              }
              set floatsPerVertex(val) {
                this._floatsPerVertex = val;
              }
              get vData() {
                return this._vData;
              }
              set vData(val) {
                this._vData = val;
                {
                  this._nativeObj.vData = val;
                }
              }
              get iData() {
                return this._iData;
              }
              set iData(val) {
                this._iData = val;
                {
                  this._nativeObj.iData = val;
                }
              }
              get nativeObj() {
                return this._nativeObj;
              }
              get sharedBuffer() {
                return this._sharedBuffer;
              }
              initSharedBuffer() {
                {
                  this._sharedBuffer = new Uint32Array(MeshBufferSharedBufferView.count);
                }
              }
              syncSharedBufferToNative() {
                {
                  this._nativeObj.syncSharedBufferToNative(this._sharedBuffer);
                }
              }
              constructor() {
                this._byteOffset = 0;
                this._vertexOffset = 0;
                this._indexOffset = 0;
                this._dirty = false;
                this._floatsPerVertex = 0;
                this._vData = null;
                this._iData = null;
                this._vertexFormatBytes = 0;
                this._initVDataCount = 0;
                this._initIDataCount = 0;
                this._attributes = null;
                this._iaPool = [];
                this._iaInfo = null;
                this._nextFreeIAHandle = 0;
                {
                  this._nativeObj = new NativeUIMeshBuffer();
                }
                this.initSharedBuffer();
                this.syncSharedBufferToNative();
              }
              initialize(device, attrs, vFloatCount, iCount) {
                this._initVDataCount = vFloatCount;
                this._initIDataCount = iCount;
                this._attributes = attrs;
                this.floatsPerVertex = getAttributeStride(attrs) >> 2;
                assertIsTrue(this._initVDataCount / this._floatsPerVertex < 65536, getError(9005));
                if (!this.vData || !this.iData) {
                  this.vData = new Float32Array(this._initVDataCount);
                  this.iData = new Uint16Array(this._initIDataCount);
                }
                this._iaPool.push(this.createNewIA(device));
                {
                  this._nativeObj.initialize(attrs);
                }
              }
              reset() {
                this._nextFreeIAHandle = 0;
                this.dirty = false;
              }
              destroy() {
                this.reset();
                this._attributes = null;
                this._iaInfo = null;
                this.vData = null;
                this.iData = null;
                for (let i = 0; i < this._iaPool.length; ++i) {
                  const iaRef = this._iaPool[i];
                  if (iaRef.vertexBuffers[0]) {
                    iaRef.vertexBuffers[0].destroy();
                  }
                  if (iaRef.indexBuffer) {
                    iaRef.indexBuffer.destroy();
                  }
                  iaRef.ia.destroy();
                }
                this._iaPool.length = 0;
              }
              setDirty() {
                this.dirty = true;
              }
              request(vertexCount, indexCount) {
                warnID(9002);
                return false;
              }
              requireFreeIA(device) {
                if (this._iaPool.length <= this._nextFreeIAHandle) {
                  this._iaPool.push(this.createNewIA(device));
                }
                const ia = this._iaPool[this._nextFreeIAHandle++].ia;
                return ia;
              }
              recycleIA(ia) {
                const pool = this._iaPool;
                for (let i = 0; i < this._nextFreeIAHandle; ++i) {
                  if (ia === pool[i].ia) {
                    const iaRef = pool[i];
                    pool[i] = pool[--this._nextFreeIAHandle];
                    pool[this._nextFreeIAHandle] = iaRef;
                    return;
                  }
                }
              }
              checkCapacity(vertexCount, indexCount) {
                const maxVertex = (this.vertexOffset + vertexCount) * this._floatsPerVertex;
                const maxIndex = this.indexOffset + indexCount;
                if (maxVertex > this._initVDataCount || maxIndex > this._initIDataCount) {
                  return false;
                }
                return true;
              }
              uploadBuffers() {
                if (this.byteOffset === 0 || !this._dirty) {
                  return;
                }
                const iOS14 = sys.__isWebIOS14OrIPadOS14Env;
                const submitCount = iOS14 ? this._nextFreeIAHandle : 1;
                if (iOS14 && submitCount / this._iaPool.length < IA_POOL_USED_SCALE) {
                  const count = submitCount / IA_POOL_USED_SCALE;
                  const length = this._iaPool.length;
                  for (let i = length - 1; i >= count; i--) {
                    const iaRef = this._iaPool[i];
                    if (iaRef.vertexBuffers[0]) {
                      iaRef.vertexBuffers[0].destroy();
                    }
                    if (iaRef.indexBuffer) {
                      iaRef.indexBuffer.destroy();
                    }
                    iaRef.ia.destroy();
                  }
                  this._iaPool.length = count;
                }
                const byteCount = this.byteOffset;
                const indexCount = this.indexOffset;
                for (let i = 0; i < submitCount; ++i) {
                  const iaRef = this._iaPool[i];
                  const verticesData = new Float32Array(this.vData.buffer, 0, byteCount >> 2);
                  const indicesData = new Uint16Array(this.iData.buffer, 0, indexCount);
                  const vertexBuffer = iaRef.vertexBuffers[0];
                  if (byteCount > vertexBuffer.size) {
                    vertexBuffer.resize(byteCount);
                  }
                  vertexBuffer.update(verticesData);
                  if (indexCount * 2 > iaRef.indexBuffer.size) {
                    iaRef.indexBuffer.resize(indexCount * 2);
                  }
                  iaRef.indexBuffer.update(indicesData);
                }
                this.dirty = false;
              }
              createNewIA(device) {
                let ia;
                let vertexBuffers;
                let indexBuffer;
                if (sys.__isWebIOS14OrIPadOS14Env || !this._iaPool[0]) {
                  const vbStride = this._vertexFormatBytes = this._floatsPerVertex * Float32Array.BYTES_PER_ELEMENT;
                  const ibStride = Uint16Array.BYTES_PER_ELEMENT;
                  const vertexBuffer = device.createBuffer(new BufferInfo(BufferUsageBit.VERTEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.HOST | MemoryUsageBit.DEVICE, vbStride, vbStride));
                  indexBuffer = device.createBuffer(new BufferInfo(BufferUsageBit.INDEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.HOST | MemoryUsageBit.DEVICE, ibStride, ibStride));
                  vertexBuffers = [vertexBuffer];
                  this._iaInfo = new InputAssemblerInfo(this._attributes, vertexBuffers, indexBuffer);
                  ia = device.createInputAssembler(this._iaInfo);
                } else {
                  ia = device.createInputAssembler(this._iaInfo);
                  vertexBuffers = this._iaInfo.vertexBuffers;
                  indexBuffer = this._iaInfo.indexBuffer;
                }
                return {
                  ia,
                  vertexBuffers,
                  indexBuffer
                };
              }
            } exports('M', MeshBuffer);

            class BufferAccessor {
              get attributes() {
                return this._attributes;
              }
              get vertexFormatBytes() {
                return this._vertexFormatBytes;
              }
              get floatsPerVertex() {
                return this._floatsPerVertex;
              }
              constructor(device, attributes) {
                this._device = null;
                this._attributes = null;
                this._vertexFormatBytes = void 0;
                this._floatsPerVertex = void 0;
                this._buffers = [];
                this._device = device;
                this._attributes = attributes;
                this._floatsPerVertex = getAttributeStride(attributes) >> 2;
                this._vertexFormatBytes = this._floatsPerVertex * Float32Array.BYTES_PER_ELEMENT;
              }
              initialize() {}
              reset() {}
              request(vertexCount = 4, indexCount = 6) {}
              appendBuffers(vertices, indices) {}
              uploadBuffers() {}
              destroy() {
                this._attributes.length = 0;
              }
            }

            const _entryPool = new Pool(() => ({
              offset: 0,
              length: 0
            }), 32);
            class StaticVBChunk {
              get ib() {
                return this._ib;
              }
              constructor(vertexAccessor, bufferId, meshBuffer, vertexOffset, vb, indexCount) {
                this._ib = void 0;
                this.vertexAccessor = vertexAccessor;
                this.bufferId = bufferId;
                this.meshBuffer = meshBuffer;
                this.vertexOffset = vertexOffset;
                this.vb = vb;
                this.indexCount = indexCount;
                this._ib = new Uint16Array(indexCount);
                assertIsTrue(meshBuffer === vertexAccessor.getMeshBuffer(bufferId));
              }
              setIndexBuffer(indices) {
                {
                  assertIsTrue(indices.length === this.ib.length);
                  for (let i = 0; i < indices.length; ++i) {
                    const vid = indices[i];
                    this._ib[i] = this.vertexOffset + vid;
                  }
                }
              }
            }
            class StaticVBAccessor extends BufferAccessor {
              get id() {
                return this._id;
              }
              constructor(device, attributes, vCount, iCount) {
                super(device, attributes);
                this._freeLists = [];
                this._vCount = 0;
                this._iCount = 0;
                this._id = 0;
                this._vCount = vCount || Math.floor(macro.BATCHER2D_MEM_INCREMENT * 1024 / this._vertexFormatBytes);
                this._iCount = iCount || this._vCount * StaticVBAccessor.IB_SCALE;
                this._id = StaticVBAccessor.generateID();
                this._allocateBuffer();
              }
              destroy() {
                for (let i = 0; i < this._buffers.length; ++i) {
                  this._buffers[i].destroy();
                  const freeList = this._freeLists[i];
                  for (let j = 0; j < freeList.length; ++j) {
                    _entryPool.free(freeList[j]);
                  }
                }
                this._buffers.length = 0;
                this._freeLists.length = 0;
                super.destroy();
              }
              reset() {
                for (let i = 0; i < this._buffers.length; ++i) {
                  const buffer = this._buffers[i];
                  buffer.indexOffset = 0;
                  buffer.reset();
                }
              }
              getVertexBuffer(bid) {
                return this._buffers[bid].vData;
              }
              getIndexBuffer(bid) {
                return this._buffers[bid].iData;
              }
              getMeshBuffer(bid) {
                return this._buffers[bid];
              }
              uploadBuffers() {
                for (let i = 0; i < this._buffers.length; ++i) {
                  const firstEntry = this._freeLists[i][0];
                  const buffer = this._buffers[i];
                  if (!firstEntry || firstEntry.length < buffer.vData.byteLength) {
                    buffer.uploadBuffers();
                  }
                }
              }
              appendIndices(bufferId, indices) {
                const buf = this._buffers[bufferId];
                const iCount = indices.length;
                if (iCount) {
                  const needLength = buf.indexOffset + indices.length;
                  if (buf.iData.length < needLength) {
                    const expansionLength = Math.floor(1.25 * needLength);
                    const newIData = new Uint16Array(expansionLength);
                    newIData.set(buf.iData);
                    buf.iData = newIData;
                  }
                  buf.iData.set(indices, buf.indexOffset);
                  buf.indexOffset += indices.length;
                }
              }
              allocateChunk(vertexCount, indexCount) {
                const byteLength = vertexCount * this.vertexFormatBytes;
                if (vertexCount > this._vCount || indexCount > this._iCount) {
                  errorID(9004, byteLength);
                  return null;
                }
                let buf = null;
                let freeList;
                let bid = 0;
                let eid = -1;
                let entry = null;
                for (let i = 0; i < this._buffers.length; ++i) {
                  buf = this._buffers[i];
                  freeList = this._freeLists[i];
                  for (let e = 0; e < freeList.length; ++e) {
                    if (freeList[e].length >= byteLength) {
                      entry = freeList[e];
                      bid = i;
                      eid = e;
                      break;
                    }
                  }
                  if (entry) break;
                }
                if (!entry) {
                  bid = this._allocateBuffer();
                  buf = this._buffers[bid];
                  if (buf) {
                    eid = 0;
                    entry = this._freeLists[bid][eid];
                  }
                }
                if (entry) {
                  const vertexOffset = entry.offset / this.vertexFormatBytes;
                  assertIsTrue(Number.isInteger(vertexOffset));
                  const vb = new Float32Array(buf.vData.buffer, entry.offset, byteLength >> 2).fill(0);
                  this._allocateChunkFromEntry(bid, eid, entry, byteLength);
                  return new StaticVBChunk(this, bid, buf, vertexOffset, vb, indexCount);
                } else {
                  return null;
                }
              }
              recycleChunk(chunk) {
                const freeList = this._freeLists[chunk.bufferId];
                const buf = this._buffers[chunk.bufferId];
                let offset = chunk.vertexOffset * this.vertexFormatBytes;
                let bytes = chunk.vb.byteLength;
                if (bytes === 0) return;
                let recycled = false;
                let i = 0;
                let prevEntry = null;
                let nextEntry = freeList[i];
                while (nextEntry && nextEntry.offset < offset) {
                  prevEntry = nextEntry;
                  nextEntry = freeList[++i];
                }
                if (prevEntry) {
                  const distance = offset - (prevEntry.offset + prevEntry.length);
                  assertIsTrue(distance >= 0);
                  if (distance === 0) {
                    prevEntry.length += bytes;
                    offset = prevEntry.offset;
                    bytes = prevEntry.length;
                    if (nextEntry && nextEntry.offset - (offset + bytes) === 0) {
                      prevEntry.length += nextEntry.length;
                      freeList.splice(i, 1);
                      _entryPool.free(nextEntry);
                      nextEntry = null;
                    }
                    recycled = true;
                  }
                }
                if (!recycled && nextEntry) {
                  const distance = nextEntry.offset - (offset + bytes);
                  assertIsTrue(distance >= 0);
                  if (distance === 0) {
                    nextEntry.offset = offset;
                    nextEntry.length += bytes;
                  } else {
                    const newEntry = _entryPool.alloc();
                    newEntry.offset = offset;
                    newEntry.length = bytes;
                    freeList.splice(i, 0, newEntry);
                  }
                  recycled = true;
                }
                if (recycled) {
                  if (offset + bytes === buf.byteOffset) {
                    buf.byteOffset = offset;
                  }
                } else {
                  const newEntry = _entryPool.alloc();
                  newEntry.offset = offset;
                  newEntry.length = bytes;
                  freeList.push(newEntry);
                }
              }
              _allocateChunkFromEntry(bid, eid, entry, bytes) {
                const remaining = entry.length - bytes;
                const offset = entry.offset + bytes;
                const buf = this._buffers[bid];
                if (buf.byteOffset < offset) {
                  buf.byteOffset = offset;
                }
                assertID(remaining >= 0, 9004, bid, entry.offset, entry.length);
                if (remaining === 0) {
                  this._freeLists[bid].splice(eid, 1);
                  _entryPool.free(entry);
                } else {
                  entry.offset += bytes;
                  entry.length = remaining;
                }
              }
              _allocateBuffer() {
                assertID(this._buffers.length === this._freeLists.length, 9003);
                const buffer = new MeshBuffer();
                const vFloatCount = this._vCount * this._floatsPerVertex;
                buffer.initialize(this._device, this._attributes, vFloatCount, this._iCount);
                this._buffers.push(buffer);
                const entry = _entryPool.alloc();
                entry.offset = 0;
                entry.length = buffer.vData.byteLength;
                const freeList = [entry];
                this._freeLists.push(freeList);
                const batcher = director.root.batcher2D;
                batcher.syncMeshBuffersToNative(this.id, this._buffers);
                return this._buffers.length - 1;
              }
              static generateID() {
                return StaticVBAccessor.ID_COUNT++;
              }
            } exports('k', StaticVBAccessor);
            StaticVBAccessor.IB_SCALE = 4;
            StaticVBAccessor.ID_COUNT = 0;

            let AttrUInt8ArrayView;
            (function (AttrUInt8ArrayView) {
              AttrUInt8ArrayView[AttrUInt8ArrayView["DrawInfoType"] = 0] = "DrawInfoType";
              AttrUInt8ArrayView[AttrUInt8ArrayView["VertDirty"] = 1] = "VertDirty";
              AttrUInt8ArrayView[AttrUInt8ArrayView["IsMeshBuffer"] = 2] = "IsMeshBuffer";
              AttrUInt8ArrayView[AttrUInt8ArrayView["Stride"] = 3] = "Stride";
              AttrUInt8ArrayView[AttrUInt8ArrayView["Count"] = 4] = "Count";
            })(AttrUInt8ArrayView || (AttrUInt8ArrayView = {}));
            let AttrUInt16ArrayView;
            (function (AttrUInt16ArrayView) {
              AttrUInt16ArrayView[AttrUInt16ArrayView["BufferID"] = 0] = "BufferID";
              AttrUInt16ArrayView[AttrUInt16ArrayView["AccessorID"] = 1] = "AccessorID";
              AttrUInt16ArrayView[AttrUInt16ArrayView["Count"] = 2] = "Count";
            })(AttrUInt16ArrayView || (AttrUInt16ArrayView = {}));
            let AttrUInt32ArrayView;
            (function (AttrUInt32ArrayView) {
              AttrUInt32ArrayView[AttrUInt32ArrayView["VertexOffset"] = 0] = "VertexOffset";
              AttrUInt32ArrayView[AttrUInt32ArrayView["IndexOffset"] = 1] = "IndexOffset";
              AttrUInt32ArrayView[AttrUInt32ArrayView["VBCount"] = 2] = "VBCount";
              AttrUInt32ArrayView[AttrUInt32ArrayView["IBCount"] = 3] = "IBCount";
              AttrUInt32ArrayView[AttrUInt32ArrayView["DataHash"] = 4] = "DataHash";
              AttrUInt32ArrayView[AttrUInt32ArrayView["Count"] = 5] = "Count";
            })(AttrUInt32ArrayView || (AttrUInt32ArrayView = {}));
            let RenderDrawInfoType; exports('n', RenderDrawInfoType);
            (function (RenderDrawInfoType) {
              RenderDrawInfoType[RenderDrawInfoType["COMP"] = 0] = "COMP";
              RenderDrawInfoType[RenderDrawInfoType["MODEL"] = 1] = "MODEL";
              RenderDrawInfoType[RenderDrawInfoType["MIDDLEWARE"] = 2] = "MIDDLEWARE";
              RenderDrawInfoType[RenderDrawInfoType["SUB_NODE"] = 3] = "SUB_NODE";
            })(RenderDrawInfoType || (exports('n', RenderDrawInfoType = {})));
            class RenderDrawInfo {
              constructor(nativeDrawInfo) {
                this._accId = -1;
                this._bufferId = -1;
                this._vertexOffset = 0;
                this._indexOffset = 0;
                this._vb = null;
                this._ib = null;
                this._vData = null;
                this._iData = null;
                this._vertDirty = false;
                this._vbCount = 0;
                this._ibCount = 0;
                this._dataHash = 0;
                this._isMeshBuffer = false;
                this._material = null;
                this._texture = null;
                this._sampler = null;
                this._stride = 0;
                this._useLocal = false;
                this._model = null;
                this._drawInfoType = RenderDrawInfoType.COMP;
                this._subNode = null;
                this._uint8SharedBuffer = void 0;
                this._uint16SharedBuffer = void 0;
                this._uint32SharedBuffer = void 0;
                this.init(nativeDrawInfo);
                const attrSharedBuffer = this._nativeObj.getAttrSharedBufferForJS();
                let offset = 0;
                this._uint8SharedBuffer = new Uint8Array(attrSharedBuffer, offset, AttrUInt8ArrayView.Count);
                offset += AttrUInt8ArrayView.Count * Uint8Array.BYTES_PER_ELEMENT;
                this._uint16SharedBuffer = new Uint16Array(attrSharedBuffer, offset, AttrUInt16ArrayView.Count);
                offset += AttrUInt16ArrayView.Count * Uint16Array.BYTES_PER_ELEMENT;
                this._uint32SharedBuffer = new Uint32Array(attrSharedBuffer, offset, AttrUInt32ArrayView.Count);
              }
              get nativeObj() {
                return this._nativeObj;
              }
              get render2dBuffer() {
                return this._render2dBuffer;
              }
              init(nativeDrawInfo) {
                {
                  if (nativeDrawInfo) {
                    this._nativeObj = nativeDrawInfo;
                  }
                  if (!this._nativeObj) {
                    this._nativeObj = new NativeRenderDrawInfo();
                  }
                }
              }
              clear() {
                this._bufferId = 0;
                this._vertexOffset = 0;
                this._indexOffset = 0;
                this._vertDirty = false;
              }
              setAccId(accId) {
                {
                  if (this._accId !== accId) {
                    this._uint16SharedBuffer[AttrUInt16ArrayView.AccessorID] = accId;
                  }
                }
                this._accId = accId;
              }
              setBufferId(bufferId) {
                {
                  if (this._bufferId !== bufferId) {
                    this._uint16SharedBuffer[AttrUInt16ArrayView.BufferID] = bufferId;
                    this._nativeObj.changeMeshBuffer();
                  }
                }
                this._bufferId = bufferId;
              }
              setAccAndBuffer(accId, bufferId) {
                {
                  if (this._accId !== accId || this._bufferId !== bufferId) {
                    this._uint16SharedBuffer[AttrUInt16ArrayView.AccessorID] = accId;
                    this._uint16SharedBuffer[AttrUInt16ArrayView.BufferID] = bufferId;
                    this._nativeObj.changeMeshBuffer();
                  }
                }
                this._bufferId = bufferId;
                this._accId = accId;
              }
              setVertexOffset(vertexOffset) {
                this._vertexOffset = vertexOffset;
                {
                  this._uint32SharedBuffer[AttrUInt32ArrayView.VertexOffset] = vertexOffset;
                }
              }
              setIndexOffset(indexOffset) {
                this._indexOffset = indexOffset;
                {
                  this._uint32SharedBuffer[AttrUInt32ArrayView.IndexOffset] = indexOffset;
                }
              }
              setVB(vbBuffer) {
                {
                  this._nativeObj.vbBuffer = vbBuffer;
                }
              }
              setIB(ibBuffer) {
                {
                  this._nativeObj.ibBuffer = ibBuffer;
                }
              }
              setVData(vDataBuffer) {
                {
                  this._nativeObj.vDataBuffer = vDataBuffer;
                }
              }
              setIData(iDataBuffer) {
                {
                  this._nativeObj.iDataBuffer = iDataBuffer;
                }
              }
              setVBCount(vbCount) {
                {
                  this._uint32SharedBuffer[AttrUInt32ArrayView.VBCount] = vbCount;
                }
                this._vbCount = vbCount;
              }
              setIBCount(ibCount) {
                {
                  this._uint32SharedBuffer[AttrUInt32ArrayView.IBCount] = ibCount;
                }
              }
              setVertDirty(val) {
                {
                  this._uint8SharedBuffer[AttrUInt8ArrayView.VertDirty] = val ? 1 : 0;
                }
                this._vertDirty = val;
              }
              setDataHash(dataHash) {
                {
                  this._uint32SharedBuffer[AttrUInt32ArrayView.DataHash] = dataHash;
                }
                this._dataHash = dataHash;
              }
              setIsMeshBuffer(isMeshBuffer) {
                {
                  this._uint8SharedBuffer[AttrUInt8ArrayView.IsMeshBuffer] = isMeshBuffer ? 1 : 0;
                }
                this._isMeshBuffer = isMeshBuffer;
              }
              setMaterial(material) {
                {
                  if (this._material !== material) {
                    this._nativeObj.material = material;
                  }
                }
                this._material = material;
              }
              setTexture(texture) {
                {
                  if (this._texture !== texture) {
                    this._nativeObj.texture = texture;
                  }
                }
                this._texture = texture;
              }
              setSampler(sampler) {
                {
                  if (this._sampler !== sampler) {
                    this._nativeObj.sampler = sampler;
                  }
                }
                this._sampler = sampler;
              }
              setModel(model) {
                {
                  if (this._model !== model) {
                    this._nativeObj.model = model;
                  }
                }
              }
              setDrawInfoType(drawInfoType) {
                {
                  if (this._drawInfoType !== drawInfoType) {
                    this._uint8SharedBuffer[AttrUInt8ArrayView.DrawInfoType] = drawInfoType;
                  }
                }
                this._drawInfoType = drawInfoType;
              }
              setSubNode(node) {
                {
                  if (this._subNode !== node) {
                    this._nativeObj.subNode = node;
                  }
                }
                this._subNode = node;
              }
              setStride(stride) {
                {
                  this._uint8SharedBuffer[AttrUInt8ArrayView.Stride] = stride;
                }
                this._stride = stride;
              }
              initRender2dBuffer() {
                {
                  this._render2dBuffer = new Float32Array(this._vbCount * this._stride);
                  this._nativeObj.setRender2dBufferToNative(this._render2dBuffer);
                }
              }
              fillRender2dBuffer(vertexDataArr) {
                {
                  const fillLength = Math.min(this._vbCount, vertexDataArr.length);
                  let bufferOffset = 0;
                  for (let i = 0; i < fillLength; i++) {
                    const temp = vertexDataArr[i];
                    this._render2dBuffer[bufferOffset] = temp.x;
                    this._render2dBuffer[bufferOffset + 1] = temp.y;
                    this._render2dBuffer[bufferOffset + 2] = temp.z;
                    bufferOffset += this._stride;
                  }
                }
              }
            } exports('u', RenderDrawInfo);

            let Stage; exports('l', Stage);
            (function (Stage) {
              Stage[Stage["DISABLED"] = 0] = "DISABLED";
              Stage[Stage["CLEAR"] = 1] = "CLEAR";
              Stage[Stage["ENTER_LEVEL"] = 2] = "ENTER_LEVEL";
              Stage[Stage["ENABLED"] = 3] = "ENABLED";
              Stage[Stage["EXIT_LEVEL"] = 4] = "EXIT_LEVEL";
              Stage[Stage["CLEAR_INVERTED"] = 5] = "CLEAR_INVERTED";
              Stage[Stage["ENTER_LEVEL_INVERTED"] = 6] = "ENTER_LEVEL_INVERTED";
            })(Stage || (exports('l', Stage = {})));
            let StencilSharedBufferView;
            (function (StencilSharedBufferView) {
              StencilSharedBufferView[StencilSharedBufferView["stencilTest"] = 0] = "stencilTest";
              StencilSharedBufferView[StencilSharedBufferView["func"] = 1] = "func";
              StencilSharedBufferView[StencilSharedBufferView["stencilMask"] = 2] = "stencilMask";
              StencilSharedBufferView[StencilSharedBufferView["writeMask"] = 3] = "writeMask";
              StencilSharedBufferView[StencilSharedBufferView["failOp"] = 4] = "failOp";
              StencilSharedBufferView[StencilSharedBufferView["zFailOp"] = 5] = "zFailOp";
              StencilSharedBufferView[StencilSharedBufferView["passOp"] = 6] = "passOp";
              StencilSharedBufferView[StencilSharedBufferView["ref"] = 7] = "ref";
              StencilSharedBufferView[StencilSharedBufferView["count"] = 8] = "count";
            })(StencilSharedBufferView || (StencilSharedBufferView = {}));
            class StencilManager {
              constructor() {
                this._maskStack = [];
                this._stencilPattern = {
                  stencilTest: true,
                  func: ComparisonFunc.ALWAYS,
                  stencilMask: 0xffff,
                  writeMask: 0xffff,
                  failOp: StencilOp.KEEP,
                  zFailOp: StencilOp.KEEP,
                  passOp: StencilOp.KEEP,
                  ref: 1
                };
                this._stage = Stage.DISABLED;
                this.stencilStateMap = new Map();
                this.stencilStateMapWithDepth = new Map();
              }
              get stage() {
                return this._stage;
              }
              set stage(val) {
                this._stage = val;
              }
              get pattern() {
                return this._stencilPattern;
              }
              pushMask(mask) {
                this._maskStack.push(mask);
              }
              clear(comp) {
                const isInverted = comp.stencilStage !== Stage.ENTER_LEVEL;
                return isInverted ? Stage.CLEAR_INVERTED : Stage.CLEAR;
              }
              enableMask() {
                this.stage = Stage.ENABLED;
              }
              exitMask() {
                if (this._maskStack.length === 0) {
                  return;
                }
                this._maskStack.pop();
                if (this._maskStack.length === 0) {
                  this.stage = Stage.DISABLED;
                } else {
                  this.stage = Stage.ENABLED;
                }
              }
              getWriteMask() {
                return 1 << this._maskStack.length - 1;
              }
              getExitWriteMask() {
                return 1 << this._maskStack.length;
              }
              getStencilRef() {
                let result = 0;
                for (let i = 0; i < this._maskStack.length; ++i) {
                  result += 0x00000001 << i;
                }
                return result;
              }
              getMaskStackSize() {
                return this._maskStack.length;
              }
              reset() {
                this._maskStack.length = 0;
                this.stage = Stage.DISABLED;
              }
              destroy() {
                this.stencilStateMap.forEach((value, key) => {
                  value.destroy();
                });
                this.stencilStateMap.clear();
              }
              getStencilStage(stage, mat) {
                let key = 0;
                let depthTest = false;
                let depthWrite = false;
                let depthFunc = ComparisonFunc.LESS;
                let cacheMap = this.stencilStateMap;
                if (mat && mat.passes[0]) {
                  const pass = mat.passes[0];
                  const dss = pass.depthStencilState;
                  let depthTestValue = 0;
                  let depthWriteValue = 0;
                  if (dss.depthTest) depthTestValue = 1;
                  if (dss.depthWrite) depthWriteValue = 1;
                  key = depthTestValue | depthWriteValue << 1 | dss.depthFunc << 2 | stage << 6 | this._maskStack.length << 9;
                  depthTest = dss.depthTest;
                  depthWrite = dss.depthWrite;
                  depthFunc = dss.depthFunc;
                  cacheMap = this.stencilStateMapWithDepth;
                } else {
                  key = stage << 16 | this._maskStack.length;
                }
                if (cacheMap && cacheMap.has(key)) {
                  return cacheMap.get(key);
                }
                this.setStateFromStage(stage);
                const depthStencilState = new DepthStencilState(depthTest, depthWrite, depthFunc, this._stencilPattern.stencilTest, this._stencilPattern.func, this._stencilPattern.stencilMask, this._stencilPattern.writeMask, this._stencilPattern.failOp, this._stencilPattern.zFailOp, this._stencilPattern.passOp, this._stencilPattern.ref, this._stencilPattern.stencilTest, this._stencilPattern.func, this._stencilPattern.stencilMask, this._stencilPattern.writeMask, this._stencilPattern.failOp, this._stencilPattern.zFailOp, this._stencilPattern.passOp, this._stencilPattern.ref);
                cacheMap.set(key, depthStencilState);
                return depthStencilState;
              }
              getStencilHash(stage) {
                return stage << 8 | this._maskStack.length;
              }
              setStateFromStage(stage) {
                const pattern = this._stencilPattern;
                if (stage === Stage.DISABLED) {
                  pattern.stencilTest = false;
                  pattern.func = ComparisonFunc.ALWAYS;
                  pattern.failOp = StencilOp.KEEP;
                  pattern.stencilMask = pattern.writeMask = 0xffff;
                  pattern.ref = 1;
                } else {
                  pattern.stencilTest = true;
                  if (stage === Stage.ENABLED) {
                    pattern.func = ComparisonFunc.EQUAL;
                    pattern.failOp = StencilOp.KEEP;
                    pattern.stencilMask = pattern.ref = this.getStencilRef();
                    pattern.writeMask = this.getWriteMask();
                  } else if (stage === Stage.CLEAR) {
                    pattern.func = ComparisonFunc.NEVER;
                    pattern.failOp = StencilOp.ZERO;
                    pattern.writeMask = pattern.stencilMask = pattern.ref = this.getWriteMask();
                  } else if (stage === Stage.CLEAR_INVERTED) {
                    pattern.func = ComparisonFunc.NEVER;
                    pattern.failOp = StencilOp.REPLACE;
                    pattern.writeMask = pattern.stencilMask = pattern.ref = this.getWriteMask();
                  } else if (stage === Stage.ENTER_LEVEL) {
                    pattern.func = ComparisonFunc.NEVER;
                    pattern.failOp = StencilOp.REPLACE;
                    pattern.writeMask = pattern.stencilMask = pattern.ref = this.getWriteMask();
                  } else if (stage === Stage.ENTER_LEVEL_INVERTED) {
                    pattern.func = ComparisonFunc.NEVER;
                    pattern.failOp = StencilOp.ZERO;
                    pattern.writeMask = pattern.stencilMask = pattern.ref = this.getWriteMask();
                  }
                }
              }
            } exports('S', StencilManager);
            StencilManager.sharedManager = null;
            StencilManager.sharedManager = new StencilManager();

            let RenderEntityType; exports('r', RenderEntityType);
            (function (RenderEntityType) {
              RenderEntityType[RenderEntityType["STATIC"] = 0] = "STATIC";
              RenderEntityType[RenderEntityType["DYNAMIC"] = 1] = "DYNAMIC";
              RenderEntityType[RenderEntityType["CROSSED"] = 2] = "CROSSED";
            })(RenderEntityType || (exports('r', RenderEntityType = {})));
            let RenderEntityFloatSharedBufferView;
            (function (RenderEntityFloatSharedBufferView) {
              RenderEntityFloatSharedBufferView[RenderEntityFloatSharedBufferView["localOpacity"] = 0] = "localOpacity";
              RenderEntityFloatSharedBufferView[RenderEntityFloatSharedBufferView["count"] = 1] = "count";
            })(RenderEntityFloatSharedBufferView || (RenderEntityFloatSharedBufferView = {}));
            let RenderEntityUInt8SharedBufferView;
            (function (RenderEntityUInt8SharedBufferView) {
              RenderEntityUInt8SharedBufferView[RenderEntityUInt8SharedBufferView["colorR"] = 0] = "colorR";
              RenderEntityUInt8SharedBufferView[RenderEntityUInt8SharedBufferView["colorG"] = 1] = "colorG";
              RenderEntityUInt8SharedBufferView[RenderEntityUInt8SharedBufferView["colorB"] = 2] = "colorB";
              RenderEntityUInt8SharedBufferView[RenderEntityUInt8SharedBufferView["colorA"] = 3] = "colorA";
              RenderEntityUInt8SharedBufferView[RenderEntityUInt8SharedBufferView["maskMode"] = 4] = "maskMode";
              RenderEntityUInt8SharedBufferView[RenderEntityUInt8SharedBufferView["count"] = 5] = "count";
            })(RenderEntityUInt8SharedBufferView || (RenderEntityUInt8SharedBufferView = {}));
            let RenderEntityBoolSharedBufferView;
            (function (RenderEntityBoolSharedBufferView) {
              RenderEntityBoolSharedBufferView[RenderEntityBoolSharedBufferView["colorDirty"] = 0] = "colorDirty";
              RenderEntityBoolSharedBufferView[RenderEntityBoolSharedBufferView["enabled"] = 1] = "enabled";
              RenderEntityBoolSharedBufferView[RenderEntityBoolSharedBufferView["useLocal"] = 2] = "useLocal";
              RenderEntityBoolSharedBufferView[RenderEntityBoolSharedBufferView["count"] = 3] = "count";
            })(RenderEntityBoolSharedBufferView || (RenderEntityBoolSharedBufferView = {}));
            let MaskMode; exports('s', MaskMode);
            (function (MaskMode) {
              MaskMode[MaskMode["NONE"] = 0] = "NONE";
              MaskMode[MaskMode["MASK"] = 1] = "MASK";
              MaskMode[MaskMode["MASK_INVERTED"] = 2] = "MASK_INVERTED";
              MaskMode[MaskMode["MASK_NODE"] = 3] = "MASK_NODE";
              MaskMode[MaskMode["MASK_NODE_INVERTED"] = 4] = "MASK_NODE_INVERTED";
            })(MaskMode || (exports('s', MaskMode = {})));
            class RenderEntity {
              get nativeObj() {
                return this._nativeObj;
              }
              get renderDrawInfoArr() {
                return this._dynamicDrawInfoArr;
              }
              get renderEntityType() {
                return this._renderEntityType;
              }
              get color() {
                return this._color;
              }
              set color(val) {
                this._color = val;
                {
                  this._uint8SharedBuffer[RenderEntityUInt8SharedBufferView.colorR] = val.r;
                  this._uint8SharedBuffer[RenderEntityUInt8SharedBufferView.colorG] = val.g;
                  this._uint8SharedBuffer[RenderEntityUInt8SharedBufferView.colorB] = val.b;
                  this._uint8SharedBuffer[RenderEntityUInt8SharedBufferView.colorA] = val.a;
                }
              }
              get localOpacity() {
                return this._localOpacity;
              }
              set localOpacity(val) {
                this._localOpacity = val;
                {
                  this._floatSharedBuffer[RenderEntityFloatSharedBufferView.localOpacity] = val;
                }
              }
              get colorDirty() {
                {
                  this._colorDirty = !!this._boolSharedBuffer[RenderEntityBoolSharedBufferView.colorDirty];
                }
                return this._colorDirty;
              }
              set colorDirty(val) {
                this._colorDirty = val;
                {
                  this._boolSharedBuffer[RenderEntityBoolSharedBufferView.colorDirty] = val ? 1 : 0;
                }
              }
              get enabled() {
                return this._enabled;
              }
              set enabled(val) {
                this._enabled = val;
                {
                  this._boolSharedBuffer[RenderEntityBoolSharedBufferView.enabled] = val ? 1 : 0;
                }
              }
              constructor(entityType) {
                this._renderEntityType = RenderEntityType.STATIC;
                this._dynamicDrawInfoArr = [];
                this._node = null;
                this._renderTransform = null;
                this._stencilStage = Stage.DISABLED;
                this._useLocal = false;
                this._maskMode = MaskMode.NONE;
                this._color = Color.WHITE;
                this._localOpacity = 255;
                this._colorDirty = true;
                this._enabled = false;
                {
                  if (!this._nativeObj) {
                    this._nativeObj = new NativeRenderEntity(entityType);
                  }
                  this._renderEntityType = entityType;
                  this.initSharedBuffer();
                }
              }
              addDynamicRenderDrawInfo(renderDrawInfo) {
                {
                  if (renderDrawInfo) {
                    this._dynamicDrawInfoArr.push(renderDrawInfo);
                    this._nativeObj.addDynamicRenderDrawInfo(renderDrawInfo.nativeObj);
                  }
                }
              }
              removeDynamicRenderDrawInfo() {
                {
                  this._dynamicDrawInfoArr.pop();
                  this._nativeObj.removeDynamicRenderDrawInfo();
                }
              }
              clearDynamicRenderDrawInfos() {
                {
                  this._dynamicDrawInfoArr.length = 0;
                  this._nativeObj.clearDynamicRenderDrawInfos();
                }
              }
              clearStaticRenderDrawInfos() {
                {
                  this._nativeObj.clearStaticRenderDrawInfos();
                }
              }
              setDynamicRenderDrawInfo(renderDrawInfo, index) {
                {
                  if (renderDrawInfo) {
                    if (this._dynamicDrawInfoArr.length < index + 1) {
                      this._dynamicDrawInfoArr.push(renderDrawInfo);
                      this._nativeObj.addDynamicRenderDrawInfo(renderDrawInfo.nativeObj);
                    } else {
                      this._dynamicDrawInfoArr[index] = renderDrawInfo;
                      this._nativeObj.setDynamicRenderDrawInfo(renderDrawInfo.nativeObj, index);
                    }
                  }
                }
              }
              setMaskMode(mode) {
                {
                  this._uint8SharedBuffer[RenderEntityUInt8SharedBufferView.maskMode] = mode;
                }
                this._maskMode = mode;
              }
              getStaticRenderDrawInfo() {
                {
                  const nativeDrawInfo = this._nativeObj.getStaticRenderDrawInfo(this._nativeObj.staticDrawInfoSize++);
                  const drawInfo = new RenderDrawInfo(nativeDrawInfo);
                  return drawInfo;
                }
              }
              setNode(node) {
                {
                  if (this._node !== node) {
                    this._nativeObj.node = node;
                  }
                }
                this._node = node;
              }
              setRenderTransform(renderTransform) {
                {
                  if (this._renderTransform !== renderTransform) {
                    this._nativeObj.renderTransform = renderTransform;
                  }
                }
                this._renderTransform = renderTransform;
              }
              setStencilStage(stage) {
                {
                  if (this._stencilStage !== stage) {
                    this._nativeObj.stencilStage = stage;
                  }
                }
                this._stencilStage = stage;
              }
              setUseLocal(useLocal) {
                {
                  this._boolSharedBuffer[RenderEntityBoolSharedBufferView.useLocal] = useLocal ? 1 : 0;
                }
                this._useLocal = useLocal;
              }
              initSharedBuffer() {
                {
                  const buffer = this._nativeObj.getEntitySharedBufferForJS();
                  let offset = 0;
                  this._floatSharedBuffer = new Float32Array(buffer, offset, RenderEntityFloatSharedBufferView.count);
                  offset += RenderEntityFloatSharedBufferView.count * 4;
                  this._uint8SharedBuffer = new Uint8Array(buffer, offset, RenderEntityUInt8SharedBufferView.count);
                  offset += RenderEntityUInt8SharedBufferView.count * 1;
                  this._boolSharedBuffer = new Uint8Array(buffer, offset, RenderEntityBoolSharedBufferView.count);
                }
              }
            } exports('q', RenderEntity);

            const DEFAULT_STRIDE = getAttributeStride(vfmtPosUvColor) >> 2;
            class BaseRenderData {
              get vertexCount() {
                return this._vc;
              }
              get indexCount() {
                return this._ic;
              }
              get stride() {
                return this._floatStride << 2;
              }
              get floatStride() {
                return this._floatStride;
              }
              get vertexFormat() {
                return this._vertexFormat;
              }
              get drawInfoType() {
                return this._drawInfoType;
              }
              set drawInfoType(type) {
                this._drawInfoType = type;
                if (this._renderDrawInfo) {
                  this._renderDrawInfo.setDrawInfoType(type);
                }
              }
              get renderDrawInfo() {
                return this._renderDrawInfo;
              }
              get material() {
                return this._material;
              }
              set material(val) {
                this._material = val;
                if (this._renderDrawInfo) {
                  this._renderDrawInfo.setMaterial(val);
                }
              }
              get dataHash() {
                return this._dataHash;
              }
              set dataHash(val) {
                this._dataHash = val;
                if (this._renderDrawInfo) {
                  this._renderDrawInfo.setDataHash(val);
                }
              }
              get multiOwner() {
                return this._multiOwner;
              }
              set multiOwner(val) {
                this._multiOwner = val;
              }
              get batcher() {
                if (!this._batcher) {
                  this._batcher = director.root.batcher2D;
                }
                return this._batcher;
              }
              constructor(vertexFormat = vfmtPosUvColor) {
                this.chunk = null;
                this._renderDrawInfo = null;
                this._material = null;
                this._dataHash = 0;
                this._isMeshBuffer = false;
                this._vc = 0;
                this._ic = 0;
                this._floatStride = 0;
                this._vertexFormat = vfmtPosUvColor;
                this._drawInfoType = RenderDrawInfoType.COMP;
                this._multiOwner = false;
                this._batcher = null;
                this._floatStride = vertexFormat === vfmtPosUvColor ? DEFAULT_STRIDE : getAttributeStride(vertexFormat) >> 2;
                this._vertexFormat = vertexFormat;
              }
              isValid() {
                return this._ic > 0 && this.chunk.vertexAccessor;
              }
              initRenderDrawInfo(comp, drawInfoType = RenderDrawInfoType.COMP) {
                {
                  const renderEntity = comp.renderEntity;
                  if (renderEntity.renderEntityType === RenderEntityType.STATIC) {
                    if (!this._renderDrawInfo) {
                      const drawInfo = renderEntity.getStaticRenderDrawInfo();
                      if (drawInfo) {
                        this._renderDrawInfo = drawInfo;
                      }
                    }
                  } else if (this.multiOwner === false) {
                    if (!this._renderDrawInfo) {
                      this._renderDrawInfo = new RenderDrawInfo();
                      renderEntity.addDynamicRenderDrawInfo(this._renderDrawInfo);
                    }
                  }
                  this.drawInfoType = drawInfoType;
                  this.setRenderDrawInfoAttributes();
                }
              }
              removeRenderDrawInfo(comp) {
                {
                  const renderEntity = comp.renderEntity;
                  if (renderEntity.renderEntityType === RenderEntityType.DYNAMIC) {
                    renderEntity.removeDynamicRenderDrawInfo();
                  } else if (renderEntity.renderEntityType === RenderEntityType.STATIC) {
                    renderEntity.clearStaticRenderDrawInfos();
                  }
                }
              }
              setRenderDrawInfoAttributes() {
                {
                  if (!this._renderDrawInfo) {
                    return;
                  }
                  if (this.chunk) {
                    this._renderDrawInfo.setBufferId(this.chunk.bufferId);
                    this._renderDrawInfo.setVertexOffset(this.chunk.vertexOffset);
                    this._renderDrawInfo.setVB(this.chunk.vb);
                    this._renderDrawInfo.setIB(this.chunk.ib);
                    if (this.chunk.meshBuffer) {
                      this._renderDrawInfo.setIndexOffset(this.chunk.meshBuffer.indexOffset);
                      this._renderDrawInfo.setVData(this.chunk.meshBuffer.vData.buffer);
                      this._renderDrawInfo.setIData(this.chunk.meshBuffer.iData.buffer);
                    }
                  }
                  this._renderDrawInfo.setVBCount(this._vc);
                  this._renderDrawInfo.setIBCount(this._ic);
                  this._renderDrawInfo.setDataHash(this.dataHash);
                  this._renderDrawInfo.setIsMeshBuffer(this._isMeshBuffer);
                  this._renderDrawInfo.setMaterial(this.material);
                  this._renderDrawInfo.setDrawInfoType(this._drawInfoType);
                }
              }
            } exports('B', BaseRenderData);
            class RenderData extends BaseRenderData {
              static add(vertexFormat = vfmtPosUvColor, accessor) {
                const rd = new RenderData(vertexFormat, accessor);
                if (!accessor) {
                  const batcher = director.root.batcher2D;
                  accessor = batcher.switchBufferAccessor(rd._vertexFormat);
                }
                rd._accessor = accessor;
                return rd;
              }
              static remove(data) {
                data.clear();
                data._accessor = null;
              }
              get dataLength() {
                return this._data.length;
              }
              set dataLength(length) {
                const data = this._data;
                if (data.length !== length) {
                  for (let i = data.length; i < length; i++) {
                    data.push({
                      x: 0,
                      y: 0,
                      z: 0,
                      u: 0,
                      v: 0,
                      color: Color.WHITE.clone()
                    });
                  }
                  data.length = length;
                }
                this.syncRender2dBuffer();
              }
              get data() {
                return this._data;
              }
              get vertDirty() {
                return this._vertDirty;
              }
              set vertDirty(val) {
                this._vertDirty = val;
                if (this._renderDrawInfo && val) {
                  this._renderDrawInfo.setVertDirty(val);
                }
              }
              get textureHash() {
                return this._textureHash;
              }
              set textureHash(val) {
                this._textureHash = val;
              }
              set frame(val) {
                this._frame = val;
                if (this._renderDrawInfo) {
                  if (this._frame) {
                    this._renderDrawInfo.setTexture(this._frame.getGFXTexture());
                    this._renderDrawInfo.setSampler(this._frame.getGFXSampler());
                  } else {
                    this._renderDrawInfo.setTexture(null);
                    this._renderDrawInfo.setSampler(null);
                  }
                }
              }
              get frame() {
                return this._frame;
              }
              get accessor() {
                return this._accessor;
              }
              constructor(vertexFormat = vfmtPosUvColor, accessor) {
                super(vertexFormat);
                this._vertDirty = true;
                this._textureHash = 0;
                this.indices = null;
                this.layer = 0;
                this.nodeDirty = true;
                this.passDirty = true;
                this.textureDirty = true;
                this.hashDirty = true;
                this._data = [];
                this._frame = null;
                this._accessor = null;
                this.vertexRow = 1;
                this.vertexCol = 1;
                if (!accessor) {
                  accessor = this.batcher.switchBufferAccessor(this._vertexFormat);
                }
                this._accessor = accessor;
              }
              resize(vertexCount, indexCount) {
                if (vertexCount === this._vc && indexCount === this._ic && this.chunk) return;
                this._vc = vertexCount;
                this._ic = indexCount;
                if (this.chunk) {
                  this._accessor.recycleChunk(this.chunk);
                  this.chunk = null;
                }
                this.chunk = this._accessor.allocateChunk(vertexCount, indexCount);
                this.updateHash();
                if (this.multiOwner === false && this._renderDrawInfo) {
                  this._renderDrawInfo.setDrawInfoType(this._drawInfoType);
                  this._renderDrawInfo.setBufferId(this.chunk.bufferId);
                  this._renderDrawInfo.setVertexOffset(this.chunk.vertexOffset);
                  this._renderDrawInfo.setIndexOffset(this.chunk.meshBuffer.indexOffset);
                  this._renderDrawInfo.setVB(this.chunk.vb);
                  this._renderDrawInfo.setIB(this.chunk.ib);
                  this._renderDrawInfo.setVData(this.chunk.meshBuffer.vData.buffer);
                  this._renderDrawInfo.setIData(this.chunk.meshBuffer.iData.buffer);
                  this._renderDrawInfo.setVBCount(this._vc);
                  this._renderDrawInfo.setIBCount(this._ic);
                }
              }
              setRenderDrawInfoAttributes() {
                {
                  if (!this._renderDrawInfo) {
                    return;
                  }
                  this._renderDrawInfo.setAccId(this._accessor.id);
                  super.setRenderDrawInfoAttributes();
                  this._renderDrawInfo.setTexture(this.frame ? this.frame.getGFXTexture() : null);
                  this._renderDrawInfo.setSampler(this.frame ? this.frame.getGFXSampler() : null);
                }
              }
              fillDrawInfoAttributes(drawInfo) {
                {
                  if (!drawInfo) {
                    return;
                  }
                  drawInfo.setDrawInfoType(this._drawInfoType);
                  drawInfo.setAccAndBuffer(this._accessor.id, this.chunk.bufferId);
                  drawInfo.setVertexOffset(this.chunk.vertexOffset);
                  drawInfo.setIndexOffset(this.chunk.meshBuffer.indexOffset);
                  drawInfo.setVB(this.chunk.vb);
                  drawInfo.setIB(this.chunk.ib);
                  drawInfo.setVData(this.chunk.meshBuffer.vData.buffer);
                  drawInfo.setIData(this.chunk.meshBuffer.iData.buffer);
                  drawInfo.setVBCount(this._vc);
                  drawInfo.setIBCount(this._ic);
                  drawInfo.setDataHash(this.dataHash);
                  drawInfo.setIsMeshBuffer(this._isMeshBuffer);
                }
              }
              syncRender2dBuffer() {
                if (this.multiOwner === false) {
                  if (!this._renderDrawInfo) {
                    return;
                  }
                  this.renderDrawInfo.setStride(this.floatStride);
                  this.renderDrawInfo.setVBCount(this.dataLength);
                  this.renderDrawInfo.initRender2dBuffer();
                }
              }
              resizeAndCopy(vertexCount, indexCount) {
                if (vertexCount === this._vc && indexCount === this._ic && this.chunk) return;
                this._vc = vertexCount;
                this._ic = indexCount;
                const oldChunk = this.chunk;
                this.chunk = this._accessor.allocateChunk(vertexCount, indexCount);
                if (oldChunk) {
                  this.chunk.vb.set(oldChunk.vb);
                  this._accessor.recycleChunk(oldChunk);
                }
                this.updateHash();
              }
              getMeshBuffer() {
                if (this.chunk && this._accessor) {
                  return this._accessor.getMeshBuffer(this.chunk.bufferId);
                } else {
                  return null;
                }
              }
              updateNode(comp) {
                this.layer = comp.node.layer;
                this.nodeDirty = false;
                this.hashDirty = true;
              }
              updatePass(comp) {
                this.material = comp.getRenderMaterial(0);
                this.passDirty = false;
                this.hashDirty = true;
              }
              updateTexture(frame) {
                this.frame = frame;
                this.textureHash = frame.getHash();
                this.textureDirty = false;
                this.hashDirty = true;
              }
              updateHash() {
                const bid = this.chunk ? this.chunk.bufferId : -1;
                const hashString = `${bid}${this.layer} ${this.textureHash}`;
                this.dataHash = murmurhash2_32_gc(hashString, 666);
                this.hashDirty = false;
              }
              updateRenderData(comp, frame) {
                if (this.passDirty) {
                  this.material = comp.getRenderMaterial(0);
                  this.passDirty = false;
                  this.hashDirty = true;
                  if (this._renderDrawInfo) {
                    this._renderDrawInfo.setMaterial(this.material);
                  }
                }
                if (this.nodeDirty) {
                  const renderScene = comp.node.scene ? comp._getRenderScene() : null;
                  this.layer = comp.node.layer;
                  if (renderScene !== null) {
                    this.nodeDirty = false;
                  }
                  this.hashDirty = true;
                }
                if (this.textureDirty) {
                  this.frame = frame;
                  this.textureHash = frame.getHash();
                  this.textureDirty = false;
                  this.hashDirty = true;
                  if (this._renderDrawInfo) {
                    this._renderDrawInfo.setTexture(this.frame ? this.frame.getGFXTexture() : null);
                    this._renderDrawInfo.setSampler(this.frame ? this.frame.getGFXSampler() : null);
                  }
                }
                if (this.hashDirty) {
                  this.updateHash();
                  if (this._renderDrawInfo) {
                    this._renderDrawInfo.setDataHash(this.dataHash);
                  }
                }
                if (this.multiOwner === false) {
                  {
                    assert(this._renderDrawInfo.render2dBuffer.length === this._floatStride * this._data.length, 'Vertex count doesn\'t match.');
                  }
                  this._renderDrawInfo.fillRender2dBuffer(this._data);
                }
              }
              clear() {
                this.resize(0, 0);
                this._data.length = 0;
                this.indices = null;
                this.vertDirty = true;
                this.material = null;
                this.nodeDirty = true;
                this.passDirty = true;
                this.textureDirty = true;
                this.hashDirty = true;
                this.layer = 0;
                this.frame = null;
                this.textureHash = 0;
                this.dataHash = 0;
                if (this._renderDrawInfo) {
                  this._renderDrawInfo.clear();
                }
              }
              static createStaticVBAccessor(attributes, vCount, iCount) {
                const device = director.root.device;
                const accessor = new StaticVBAccessor(device, attributes, vCount, iCount);
                return accessor;
              }
            } exports('e', RenderData);
            class MeshRenderData extends BaseRenderData {
              static add(vertexFormat = vfmtPosUvColor) {
                const rd = new MeshRenderData();
                rd._floatStride = vertexFormat === vfmtPosUvColor ? DEFAULT_STRIDE : getAttributeStride(vertexFormat) >> 2;
                rd._vertexFormat = vertexFormat;
                return rd;
              }
              static remove(data) {
                data.clear();
              }
              set formatByte(value) {}
              get formatByte() {
                return this.stride;
              }
              get floatStride() {
                return this._floatStride;
              }
              get vDataOffset() {
                return this._byteLength >>> 2;
              }
              constructor(vertexFormat = vfmtPosUvColor) {
                super(vertexFormat);
                this._isMeshBuffer = true;
                this.vData = void 0;
                this.iData = void 0;
                this.vertexStart = 0;
                this.vertexRange = 0;
                this.indexStart = 0;
                this.indexRange = 0;
                this.lastFilledIndex = 0;
                this.lastFilledVertex = 0;
                this.frame = void 0;
                this._byteLength = 0;
                this._vertexBuffers = [];
                this._indexBuffer = null;
                this._iaPool = null;
                this._iaInfo = null;
                this.vData = new Float32Array(256 * this.stride);
                this.iData = new Uint16Array(256 * 6);
              }
              request(vertexCount, indexCount) {
                const byteOffset = this._byteLength + vertexCount * this.stride;
                const succeed = this.reserve(vertexCount, indexCount);
                if (!succeed) return false;
                this._vc += vertexCount;
                this._ic += indexCount;
                this._byteLength = byteOffset;
                this.vertexRange = this._vc;
                this.indexRange = this._ic;
                return true;
              }
              reserve(vertexCount, indexCount) {
                const newVBytes = this._byteLength + vertexCount * this.stride;
                const newICount = this.indexCount + indexCount;
                if (vertexCount + this.vertexCount > 65535) {
                  return false;
                }
                let byteLength = this.vData.byteLength;
                let indicesLength = this.iData.length;
                let vCount = this.vData.length;
                let iCount = this.iData.length;
                if (newVBytes > byteLength || newICount > indicesLength) {
                  while (byteLength < newVBytes || indicesLength < newICount) {
                    vCount *= 2;
                    iCount *= 2;
                    byteLength = vCount * 4;
                    indicesLength = iCount;
                  }
                  this._reallocBuffer(vCount, iCount);
                }
                return true;
              }
              resize(vertexCount, indexCount) {
                const byteLength = vertexCount * this.stride;
                assertIsTrue(vertexCount >= 0 && indexCount >= 0 && byteLength <= this.vData.byteLength && indexCount <= this.iData.length);
                this._vc = vertexCount;
                this._ic = indexCount;
                this._byteLength = byteLength;
                this.updateRange(0, vertexCount, 0, indexCount);
              }
              updateRange(vertOffset, vertexCount, indexOffset, indexCount) {
                assertIsTrue(vertexCount >= 0 && indexCount >= 0 && vertexCount <= this._vc && indexCount <= this._ic);
                this.vertexStart = vertOffset;
                this.indexStart = indexOffset;
                this.vertexRange = vertexCount;
                this.indexRange = indexCount;
              }
              requestIA(device) {
                this._initIAInfo(device);
                const ia = this._iaPool.add();
                ia.firstIndex = this.indexStart;
                ia.indexCount = this.indexRange;
                return ia;
              }
              uploadBuffers() {
                if (this._byteLength === 0 || !this._vertexBuffers[0] || !this._indexBuffer) {
                  return;
                }
                const indexCount = this._ic;
                const verticesData = new Float32Array(this.vData.buffer, 0, this._byteLength >> 2);
                const indicesData = new Uint16Array(this.iData.buffer, 0, indexCount);
                const vertexBuffer = this._vertexBuffers[0];
                if (this._byteLength > vertexBuffer.size) {
                  vertexBuffer.resize(this._byteLength);
                }
                vertexBuffer.update(verticesData);
                const indexBytes = indexCount << 1;
                if (indexBytes > this._indexBuffer.size) {
                  this._indexBuffer.resize(indexBytes);
                }
                this._indexBuffer.update(indicesData);
              }
              freeIAPool() {
                if (this._iaPool) {
                  this._iaPool.reset();
                }
              }
              reset() {
                this._vc = 0;
                this._ic = 0;
                this._byteLength = 0;
                this.vertexStart = 0;
                this.vertexRange = 0;
                this.indexStart = 0;
                this.indexRange = 0;
                this.lastFilledIndex = 0;
                this.lastFilledVertex = 0;
                this.material = null;
                this.freeIAPool();
              }
              clear() {
                this.reset();
                if (this._iaPool) {
                  this._iaPool.destroy();
                }
                if (this._vertexBuffers[0]) {
                  this._vertexBuffers[0].destroy();
                  this._vertexBuffers = [];
                }
                this._iaInfo = null;
                this.vData = new Float32Array(256 * this.stride);
                this.iData = new Uint16Array(256 * 6);
              }
              _initIAInfo(device) {
                if (!this._iaInfo) {
                  const vbStride = this.stride;
                  const vbs = this._vertexBuffers;
                  if (!vbs.length) {
                    vbs.push(device.createBuffer(new BufferInfo(BufferUsageBit.VERTEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.DEVICE, vbStride, vbStride)));
                  }
                  const ibStride = Uint16Array.BYTES_PER_ELEMENT;
                  if (!this._indexBuffer) {
                    this._indexBuffer = device.createBuffer(new BufferInfo(BufferUsageBit.INDEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.DEVICE, ibStride, ibStride));
                  }
                  this._iaInfo = new InputAssemblerInfo(this._vertexFormat, vbs, this._indexBuffer);
                  this._iaPool = new RecyclePool(() => device.createInputAssembler(this._iaInfo), 1, ia => {
                    ia.destroy();
                  });
                }
              }
              _reallocBuffer(vCount, iCount) {
                const oldVData = this.vData;
                this.vData = new Float32Array(vCount);
                if (oldVData) {
                  this.vData.set(oldVData, 0);
                }
                const oldIData = this.iData;
                this.iData = new Uint16Array(iCount);
                if (oldIData) {
                  this.iData.set(oldIData, 0);
                }
              }
              setRenderDrawInfoAttributes() {
                {
                  var _this$frame, _this$frame2;
                  if (!this._renderDrawInfo) {
                    return;
                  }
                  this._renderDrawInfo.setVData(this.vData.buffer);
                  this._renderDrawInfo.setIData(this.iData.buffer);
                  this._renderDrawInfo.setVBCount(this._vc);
                  this._renderDrawInfo.setIBCount(this._ic);
                  this._renderDrawInfo.setVertexOffset(this.vertexStart);
                  this._renderDrawInfo.setIndexOffset(this.indexStart);
                  this._renderDrawInfo.setIsMeshBuffer(this._isMeshBuffer);
                  this._renderDrawInfo.setMaterial(this.material);
                  this._renderDrawInfo.setTexture((_this$frame = this.frame) === null || _this$frame === void 0 ? void 0 : _this$frame.getGFXTexture());
                  this._renderDrawInfo.setSampler((_this$frame2 = this.frame) === null || _this$frame2 === void 0 ? void 0 : _this$frame2.getGFXSampler());
                }
              }
              particleInitRenderDrawInfo(entity) {
                {
                  if (entity.renderEntityType === RenderEntityType.STATIC) {
                    if (!this._renderDrawInfo) {
                      const drawInfo = entity.getStaticRenderDrawInfo();
                      if (drawInfo) {
                        this._renderDrawInfo = drawInfo;
                      }
                    }
                  }
                }
              }
            } exports('f', MeshRenderData);

            var _dec$5, _dec2$5, _class$5, _class2$3, _initializer$3, _initializer2$3, _class3$1;
            const _vec2a = new Vec2();
            const _vec2b = new Vec2();
            const _vec3a = new Vec3();
            const _mat4_temp = new Mat4();
            const _matrix = new Mat4();
            const _worldMatrix = new Mat4();
            const _zeroMatrix = new Mat4(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            const _rect = new Rect();
            let UITransform = exports('c', (_dec$5 = ccclass('cc.UITransform'), _dec2$5 = executionOrder(110), _dec$5(_class$5 = _dec2$5(_class$5 = disallowMultiple(_class$5 = (_class2$3 = (_class3$1 = class UITransform extends Component {
              constructor(...args) {
                super(...args);
                this._priority = 0;
                this._contentSize = _initializer$3 && _initializer$3();
                this._anchorPoint = _initializer2$3 && _initializer2$3();
              }
              get contentSize() {
                return this._contentSize;
              }
              set contentSize(value) {
                if (this._contentSize.equals(value)) {
                  return;
                }
                {
                  this._contentSize.set(value);
                  this.node.emit(NodeEventType.SIZE_CHANGED);
                }
                this._markRenderDataDirty();
              }
              get width() {
                return this._contentSize.width;
              }
              set width(value) {
                if (this._contentSize.width === value) {
                  return;
                }
                {
                  this._contentSize.width = value;
                  this.node.emit(NodeEventType.SIZE_CHANGED);
                }
                this._markRenderDataDirty();
              }
              get height() {
                return this._contentSize.height;
              }
              set height(value) {
                if (this.contentSize.height === value) {
                  return;
                }
                {
                  this._contentSize.height = value;
                  this.node.emit(NodeEventType.SIZE_CHANGED);
                }
                this._markRenderDataDirty();
              }
              get anchorPoint() {
                return this._anchorPoint;
              }
              set anchorPoint(value) {
                if (this._anchorPoint.equals(value)) {
                  return;
                }
                this._anchorPoint.set(value);
                this.node.emit(NodeEventType.ANCHOR_CHANGED, this._anchorPoint);
                this._markRenderDataDirty();
              }
              get anchorX() {
                return this._anchorPoint.x;
              }
              set anchorX(value) {
                if (this._anchorPoint.x === value) {
                  return;
                }
                this._anchorPoint.x = value;
                this.node.emit(NodeEventType.ANCHOR_CHANGED, this._anchorPoint);
                this._markRenderDataDirty();
              }
              get anchorY() {
                return this._anchorPoint.y;
              }
              set anchorY(value) {
                if (this._anchorPoint.y === value) {
                  return;
                }
                this._anchorPoint.y = value;
                this.node.emit(NodeEventType.ANCHOR_CHANGED, this._anchorPoint);
                this._markRenderDataDirty();
              }
              get priority() {
                return this._priority;
              }
              set priority(value) {
                if (this._priority === value) {
                  return;
                }
                if (this.node.getComponent('cc.RenderRoot2D')) {
                  warnID(6706);
                  return;
                }
                this._priority = value;
                if (this.node.parent) {
                  UITransform.insertChangeMap(this.node.parent);
                }
              }
              get visibility() {
                const camera = director.root.batcher2D.getFirstRenderCamera(this.node);
                return camera ? camera.visibility : 0;
              }
              get cameraPriority() {
                const camera = director.root.batcher2D.getFirstRenderCamera(this.node);
                return camera ? camera.priority : 0;
              }
              __preload() {
                this.node._uiProps.uiTransformComp = this;
              }
              onLoad() {
                if (this.node.parent) {
                  UITransform.insertChangeMap(this.node.parent);
                }
              }
              onEnable() {
                this.node.on(NodeEventType.PARENT_CHANGED, this._parentChanged, this);
                this._markRenderDataDirty();
              }
              onDisable() {
                this.node.off(NodeEventType.PARENT_CHANGED, this._parentChanged, this);
              }
              onDestroy() {
                this.node._uiProps.uiTransformComp = null;
              }
              setContentSize(size, height) {
                const locContentSize = this._contentSize;
                let locWidth;
                let locHeight;
                if (height === undefined) {
                  size = size;
                  if (approx(size.width, locContentSize.width, EPSILON) && approx(size.height, locContentSize.height, EPSILON)) {
                    return;
                  }
                  locWidth = size.width;
                  locHeight = size.height;
                } else {
                  size = size;
                  if (approx(size, locContentSize.width, EPSILON) && approx(height, locContentSize.height, EPSILON)) {
                    return;
                  }
                  locWidth = size;
                  locHeight = height;
                }
                {
                  locContentSize.width = locWidth;
                  locContentSize.height = locHeight;
                  this.node.emit(NodeEventType.SIZE_CHANGED);
                }
                this._markRenderDataDirty();
              }
              setAnchorPoint(point, y) {
                const locAnchorPoint = this._anchorPoint;
                if (y === undefined) {
                  point = point;
                  if (point.x === locAnchorPoint.x && point.y === locAnchorPoint.y) {
                    return;
                  }
                  locAnchorPoint.x = point.x;
                  locAnchorPoint.y = point.y;
                } else {
                  if (point === locAnchorPoint.x && y === locAnchorPoint.y) {
                    return;
                  }
                  locAnchorPoint.x = point;
                  locAnchorPoint.y = y;
                }
                this.node.emit(NodeEventType.ANCHOR_CHANGED, this._anchorPoint);
                this._markRenderDataDirty();
              }
              isHit(uiPoint) {
                const w = this._contentSize.width;
                const h = this._contentSize.height;
                const v2WorldPt = _vec2a;
                const testPt = _vec2b;
                const cameras = this._getRenderScene().cameras;
                for (let i = 0; i < cameras.length; i++) {
                  const camera = cameras[i];
                  if (!(camera.visibility & this.node.layer)) continue;
                  camera.node.getWorldRT(_mat4_temp);
                  const m12 = _mat4_temp.m12;
                  const m13 = _mat4_temp.m13;
                  const center = visibleRect.center;
                  _mat4_temp.m12 = center.x - (_mat4_temp.m00 * m12 + _mat4_temp.m04 * m13);
                  _mat4_temp.m13 = center.y - (_mat4_temp.m01 * m12 + _mat4_temp.m05 * m13);
                  Mat4.invert(_mat4_temp, _mat4_temp);
                  Vec2.transformMat4(v2WorldPt, uiPoint, _mat4_temp);
                  this.node.getWorldMatrix(_worldMatrix);
                  Mat4.invert(_mat4_temp, _worldMatrix);
                  if (Mat4.strictEquals(_mat4_temp, _zeroMatrix)) {
                    continue;
                  }
                  Vec2.transformMat4(testPt, v2WorldPt, _mat4_temp);
                  testPt.x += this._anchorPoint.x * w;
                  testPt.y += this._anchorPoint.y * h;
                  let hit = false;
                  if (testPt.x >= 0 && testPt.y >= 0 && testPt.x <= w && testPt.y <= h) {
                    hit = this._maskTest(v2WorldPt);
                  }
                  if (hit) {
                    return true;
                  }
                }
                return false;
              }
              hitTest(screenPoint, windowId = 0) {
                const w = this._contentSize.width;
                const h = this._contentSize.height;
                const v3WorldPt = _vec3a;
                const v2WorldPt = _vec2a;
                const testPt = _vec2b;
                const cameras = this._getRenderScene().cameras;
                for (let i = 0; i < cameras.length; i++) {
                  const camera = cameras[i];
                  if (!(camera.visibility & this.node.layer) || camera.window && !camera.window.swapchain) {
                    continue;
                  }
                  if (camera.systemWindowId !== windowId) {
                    continue;
                  }
                  Vec3.set(v3WorldPt, screenPoint.x, screenPoint.y, 0);
                  camera.screenToWorld(v3WorldPt, v3WorldPt);
                  Vec2.set(v2WorldPt, v3WorldPt.x, v3WorldPt.y);
                  this.node.getWorldMatrix(_worldMatrix);
                  Mat4.invert(_mat4_temp, _worldMatrix);
                  if (Mat4.strictEquals(_mat4_temp, _zeroMatrix)) {
                    continue;
                  }
                  Vec2.transformMat4(testPt, v2WorldPt, _mat4_temp);
                  testPt.x += this._anchorPoint.x * w;
                  testPt.y += this._anchorPoint.y * h;
                  let hit = false;
                  if (testPt.x >= 0 && testPt.y >= 0 && testPt.x <= w && testPt.y <= h) {
                    hit = this._maskTest(v2WorldPt);
                  }
                  if (hit) {
                    return true;
                  }
                }
                return false;
              }
              _maskTest(pointInWorldSpace) {
                var _this$node, _this$node$eventProce;
                const maskList = (_this$node = this.node) === null || _this$node === void 0 ? void 0 : (_this$node$eventProce = _this$node.eventProcessor) === null || _this$node$eventProce === void 0 ? void 0 : _this$node$eventProce.maskList;
                if (maskList) {
                  let parent = this.node;
                  const length = maskList.length;
                  for (let i = 0, j = 0; parent && j < length; ++i, parent = parent.parent) {
                    const temp = maskList[j];
                    if (i === temp.index) {
                      if (parent === temp.comp.node) {
                        const comp = temp.comp;
                        if (comp && comp._enabled && !comp.isHit(pointInWorldSpace)) {
                          return false;
                        }
                        j++;
                      } else {
                        maskList.length = j;
                        break;
                      }
                    } else if (i > temp.index) {
                      maskList.length = j;
                      break;
                    }
                  }
                }
                return true;
              }
              convertToNodeSpaceAR(worldPoint, out) {
                this.node.getWorldMatrix(_worldMatrix);
                Mat4.invert(_mat4_temp, _worldMatrix);
                if (!out) {
                  out = new Vec3();
                }
                return Vec3.transformMat4(out, worldPoint, _mat4_temp);
              }
              convertToWorldSpaceAR(nodePoint, out) {
                this.node.getWorldMatrix(_worldMatrix);
                if (!out) {
                  out = new Vec3();
                }
                return Vec3.transformMat4(out, nodePoint, _worldMatrix);
              }
              getBoundingBox() {
                const rect = new Rect();
                this._selfBoundingBox(rect);
                Mat4.fromSRT(_matrix, this.node.rotation, this.node.position, this.node.scale);
                rect.transformMat4(_matrix);
                return rect;
              }
              getBoundingBoxToWorld() {
                const rect = new Rect();
                const locChildren = this.node.children;
                for (let i = 0; i < locChildren.length; ++i) {
                  const child = locChildren[i];
                  if (child && child.active) {
                    const uiTransform = child.getComponent(UITransform);
                    if (uiTransform && uiTransform.contentSize.width && uiTransform.contentSize.height) {
                      uiTransform._selfBoundingBox(_rect);
                      _rect.transformMat4(child.worldMatrix);
                      if (rect.width === 0) {
                        rect.set(_rect);
                      } else {
                        Rect.union(rect, rect, _rect);
                      }
                    }
                  }
                }
                if (this._contentSize.width && this._contentSize.height) {
                  this._selfBoundingBox(_rect);
                  _rect.transformMat4(this.node.worldMatrix);
                  if (rect.width === 0) {
                    rect.set(_rect);
                  } else {
                    Rect.union(rect, rect, _rect);
                  }
                }
                return rect;
              }
              getBoundingBoxTo(targetMat) {
                const rect = new Rect();
                const locChildren = this.node.children;
                Mat4.invert(_mat4_temp, targetMat);
                for (let i = 0; i < locChildren.length; ++i) {
                  const child = locChildren[i];
                  if (child && child.active) {
                    const uiTransform = child.getComponent(UITransform);
                    if (uiTransform && uiTransform.contentSize.width && uiTransform.contentSize.height) {
                      uiTransform._selfBoundingBox(_rect);
                      Mat4.multiply(_matrix, child.worldMatrix, _mat4_temp);
                      _rect.transformMat4(_matrix);
                      if (rect.width === 0) {
                        rect.set(_rect);
                      } else {
                        Rect.union(rect, rect, _rect);
                      }
                    }
                  }
                }
                if (this._contentSize.width && this._contentSize.height) {
                  this._selfBoundingBox(_rect);
                  Mat4.multiply(_matrix, this.node.worldMatrix, _mat4_temp);
                  _rect.transformMat4(_matrix);
                  if (rect.width === 0) {
                    rect.set(_rect);
                  } else {
                    Rect.union(rect, rect, _rect);
                  }
                }
                return rect;
              }
              getComputeAABB(out) {
                const width = this._contentSize.width;
                const height = this._contentSize.height;
                _rect.set(-this._anchorPoint.x * width, -this._anchorPoint.y * height, width, height);
                _rect.transformMat4(this.node.worldMatrix);
                const px = _rect.x + _rect.width * 0.5;
                const py = _rect.y + _rect.height * 0.5;
                const pz = this.node.worldPosition.z;
                const w = _rect.width / 2;
                const h = _rect.height / 2;
                const l = 0.001;
                if (out != null) {
                  AABB.set(out, px, py, pz, w, h, l);
                  return out;
                } else {
                  return new AABB(px, py, pz, w, h, l);
                }
              }
              _selfBoundingBox(out) {
                const width = this._contentSize.width;
                const height = this._contentSize.height;
                out.set(-this._anchorPoint.x * width, -this._anchorPoint.y * height, width, height);
                return out;
              }
              _parentChanged(node) {
                if (this.node.getComponent('cc.RenderRoot2D')) {
                  return;
                }
                if (this.node.parent) {
                  UITransform.insertChangeMap(this.node.parent);
                }
              }
              _markRenderDataDirty() {
                const uiComp = this.node._uiProps.uiComp;
                if (uiComp) {
                  uiComp.markForUpdateRenderData();
                }
              }
              static insertChangeMap(node) {
                const key = node.uuid;
                if (!UITransform.priorityChangeNodeMap.has(key)) {
                  UITransform.priorityChangeNodeMap.set(key, node);
                }
              }
              static _sortChildrenSibling(node) {
                const siblings = node.children;
                if (siblings) {
                  siblings.sort((a, b) => {
                    const aComp = a._uiProps.uiTransformComp;
                    const bComp = b._uiProps.uiTransformComp;
                    const ca = aComp ? aComp._priority : 0;
                    const cb = bComp ? bComp._priority : 0;
                    const diff = ca - cb;
                    if (diff === 0) return a.getSiblingIndex() - b.getSiblingIndex();
                    return diff;
                  });
                }
              }
              static _sortSiblings() {
                UITransform.priorityChangeNodeMap.forEach((node, ID) => {
                  UITransform._sortChildrenSibling(node);
                  node._updateSiblingIndex();
                  node.emit('childrenSiblingOrderChanged');
                });
                UITransform.priorityChangeNodeMap.clear();
              }
              static _cleanChangeMap() {
                UITransform.priorityChangeNodeMap.clear();
              }
            }, _class3$1.EventType = NodeEventType, _class3$1.priorityChangeNodeMap = new Map(), _class3$1), (_initializer$3 = applyDecoratedInitializer(_class2$3.prototype, "_contentSize", [serializable], function () {
              return new Size(100, 100);
            }), _initializer2$3 = applyDecoratedInitializer(_class2$3.prototype, "_anchorPoint", [serializable], function () {
              return new Vec2(0.5, 0.5);
            })), _class2$3)) || _class$5) || _class$5) || _class$5));
            director.on(Director.EVENT_AFTER_UPDATE, UITransform._sortSiblings);
            director.on(Director.EVENT_BEFORE_SCENE_LAUNCH, UITransform._cleanChangeMap);

            var _dec$4, _dec2$4, _dec3$4, _dec4$1, _class$4, _class2$2, _initializer$2, _initializer2$2, _initializer3$1, _initializer4$1, _initializer5$1, _class3;
            ccenum(BlendFactor);
            ccenum(BlendOp);
            ccenum(ColorMask);
            let InstanceMaterialType; exports('I', InstanceMaterialType);
            (function (InstanceMaterialType) {
              InstanceMaterialType[InstanceMaterialType["ADD_COLOR"] = 0] = "ADD_COLOR";
              InstanceMaterialType[InstanceMaterialType["ADD_COLOR_AND_TEXTURE"] = 1] = "ADD_COLOR_AND_TEXTURE";
              InstanceMaterialType[InstanceMaterialType["GRAYSCALE"] = 2] = "GRAYSCALE";
              InstanceMaterialType[InstanceMaterialType["USE_ALPHA_SEPARATED"] = 3] = "USE_ALPHA_SEPARATED";
              InstanceMaterialType[InstanceMaterialType["USE_ALPHA_SEPARATED_AND_GRAY"] = 4] = "USE_ALPHA_SEPARATED_AND_GRAY";
            })(InstanceMaterialType || (exports('I', InstanceMaterialType = {})));
            let UIRenderer = exports('b', (_dec$4 = ccclass('cc.UIRenderer'), _dec2$4 = requireComponent(UITransform), _dec3$4 = type(Material), _dec4$1 = type(Material), _dec$4(_class$4 = _dec2$4(_class$4 = (_class2$2 = (_class3 = class UIRenderer extends Renderer {
              constructor() {
                super();
                this._renderData = null;
                this._materials = _initializer$2 && _initializer$2();
                this._customMaterial = _initializer2$2 && _initializer2$2();
                this._srcBlendFactor = _initializer3$1 && _initializer3$1();
                this._dstBlendFactor = _initializer4$1 && _initializer4$1();
                this._color = _initializer5$1 && _initializer5$1();
                this._stencilStage = Stage.DISABLED;
                this._assembler = null;
                this._postAssembler = null;
                this._renderDataFlag = true;
                this._renderFlag = true;
                this._renderEntity = void 0;
                this._instanceMaterialType = -1;
                this._srcBlendFactorCache = BlendFactor.SRC_ALPHA;
                this._dstBlendFactorCache = BlendFactor.ONE_MINUS_SRC_ALPHA;
                this._dirtyVersion = -1;
                this._internalId = -1;
                this._flagChangedVersion = -1;
                this._useVertexOpacity = false;
                this._lastParent = null;
                this._renderEntity = this.createRenderEntity();
              }
              get sharedMaterials() {
                return this._materials;
              }
              set sharedMaterials(val) {
                for (let i = 0; i < val.length; i++) {
                  if (val[i] !== this._materials[i]) {
                    this.setSharedMaterial(val[i], i);
                  }
                }
                if (val.length < this._materials.length) {
                  for (let i = val.length; i < this._materials.length; i++) {
                    this.setSharedMaterial(null, i);
                  }
                  this._materials.splice(val.length);
                }
              }
              get customMaterial() {
                return this._customMaterial;
              }
              set customMaterial(val) {
                this._customMaterial = val;
                this.updateMaterial();
              }
              get color() {
                return this._color;
              }
              set color(value) {
                if (this._color.equals(value)) {
                  return;
                }
                this._color.set(value);
                this._updateColor();
              }
              get renderData() {
                return this._renderData;
              }
              setRenderData(renderData) {
                this._renderData = renderData;
              }
              get useVertexOpacity() {
                return this._useVertexOpacity;
              }
              get stencilStage() {
                return this._stencilStage;
              }
              set stencilStage(val) {
                this._stencilStage = val;
                this._renderEntity.setStencilStage(val);
              }
              get srcBlendFactor() {
                return this._srcBlendFactor;
              }
              set srcBlendFactor(srcBlendFactor) {
                this._srcBlendFactor = srcBlendFactor;
              }
              get batcher() {
                return director.root.batcher2D;
              }
              get renderEntity() {
                {
                  assert(Boolean(this._renderEntity), 'this._renderEntity should not be invalid');
                }
                return this._renderEntity;
              }
              onLoad() {
                this._renderEntity.setNode(this.node);
              }
              __preload() {
                this.node._uiProps.uiComp = this;
                if (this._flushAssembler) {
                  this._flushAssembler();
                }
              }
              onEnable() {
                this.node.on(NodeEventType.ANCHOR_CHANGED, this._nodeStateChange, this);
                this.node.on(NodeEventType.SIZE_CHANGED, this._nodeStateChange, this);
                this.node.on(NodeEventType.PARENT_CHANGED, this._colorDirty, this);
                this.updateMaterial();
                this._colorDirty();
                uiRendererManager.addRenderer(this);
                this.markForUpdateRenderData();
              }
              onRestore() {
                this.updateMaterial();
                this.markForUpdateRenderData();
              }
              onDisable() {
                this.node.off(NodeEventType.ANCHOR_CHANGED, this._nodeStateChange, this);
                this.node.off(NodeEventType.SIZE_CHANGED, this._nodeStateChange, this);
                this.node.off(NodeEventType.PARENT_CHANGED, this._colorDirty, this);
                uiRendererManager.removeRenderer(this);
                this._renderFlag = false;
                this._renderEntity.enabled = false;
              }
              onDestroy() {
                this._renderEntity.setNode(null);
                if (this.node._uiProps.uiComp === this) {
                  this.node._uiProps.uiComp = null;
                }
                this.destroyRenderData();
                if (this._materialInstances) {
                  for (let i = 0; i < this._materialInstances.length; i++) {
                    const instance = this._materialInstances[i];
                    if (instance) {
                      instance.destroy();
                    }
                  }
                }
              }
              markForUpdateRenderData(enable = true) {
                if (enable) {
                  const renderData = this._renderData;
                  if (renderData) {
                    renderData.vertDirty = true;
                  }
                  uiRendererManager.markDirtyRenderer(this);
                }
              }
              requestRenderData(drawInfoType = RenderDrawInfoType.COMP) {
                const data = RenderData.add();
                data.initRenderDrawInfo(this, drawInfoType);
                this._renderData = data;
                return data;
              }
              destroyRenderData() {
                if (!this._renderData) {
                  return;
                }
                this._renderData.removeRenderDrawInfo(this);
                RenderData.remove(this._renderData);
                this._renderData = null;
              }
              updateRenderer() {
                if (this._assembler) {
                  this._assembler.updateRenderData(this);
                }
                this._renderFlag = this._canRender();
                this._renderEntity.enabled = this._renderFlag;
              }
              fillBuffers(render) {
                if (this._renderFlag) {
                  this._render(render);
                }
              }
              postUpdateAssembler(render) {
                if (this._postAssembler && this._renderFlag) {
                  this._postRender(render);
                }
              }
              _render(render) {}
              _postRender(render) {}
              _canRender() {
                {
                  assert(this.isValid, 'this component should not be invalid!');
                }
                return this.getSharedMaterial(0) !== null && this._enabled && this._color.a > 0;
              }
              _postCanRender() {}
              updateMaterial() {
                if (this._customMaterial) {
                  if (this.getSharedMaterial(0) !== this._customMaterial) {
                    this.setSharedMaterial(this._customMaterial, 0);
                  }
                  return;
                }
                const mat = this._updateBuiltinMaterial();
                this.setSharedMaterial(mat, 0);
                if (this.stencilStage === Stage.ENTER_LEVEL || this.stencilStage === Stage.ENTER_LEVEL_INVERTED) {
                  this.getMaterialInstance(0).recompileShaders({
                    USE_ALPHA_TEST: true
                  });
                }
                this._updateBlendFunc();
              }
              _updateColor() {
                this.node._uiProps.colorDirty = true;
                this.setEntityColorDirty(true);
                this.setEntityColor(this._color);
                this.setEntityOpacity(this.node._uiProps.localOpacity);
                if (this._assembler) {
                  this._assembler.updateColor(this);
                  const renderFlag = this._renderFlag;
                  this._renderFlag = this._canRender();
                  this.setEntityEnabled(this._renderFlag);
                  if (renderFlag !== this._renderFlag) {
                    const renderData = this.renderData;
                    if (renderData) {
                      renderData.vertDirty = true;
                    }
                  }
                }
              }
              static setEntityColorDirtyRecursively(node, dirty) {
                const render = node._uiProps.uiComp;
                if (render && render.color) {
                  render._renderEntity.colorDirty = dirty;
                }
                for (let i = 0; i < node.children.length; i++) {
                  UIRenderer.setEntityColorDirtyRecursively(node.children[i], dirty);
                }
              }
              setEntityColorDirty(dirty) {
                {
                  UIRenderer.setEntityColorDirtyRecursively(this.node, dirty);
                }
              }
              setEntityColor(color) {
                {
                  this._renderEntity.color = color;
                }
              }
              setEntityOpacity(opacity) {
                {
                  this._renderEntity.localOpacity = opacity;
                }
              }
              setEntityEnabled(enabled) {
                {
                  this._renderEntity.enabled = enabled;
                }
              }
              _updateBlendFunc() {
                let target = this.getRenderMaterial(0).passes[0].blendState.targets[0];
                this._dstBlendFactorCache = target.blendDst;
                this._srcBlendFactorCache = target.blendSrc;
                if (this._dstBlendFactorCache !== this._dstBlendFactor || this._srcBlendFactorCache !== this._srcBlendFactor) {
                  target = this.getMaterialInstance(0).passes[0].blendState.targets[0];
                  target.blend = true;
                  target.blendDstAlpha = BlendFactor.ONE_MINUS_SRC_ALPHA;
                  target.blendDst = this._dstBlendFactor;
                  target.blendSrc = this._srcBlendFactor;
                  const targetPass = this.getMaterialInstance(0).passes[0];
                  targetPass.blendState.setTarget(0, target);
                  targetPass._updatePassHash();
                  this._dstBlendFactorCache = this._dstBlendFactor;
                  this._srcBlendFactorCache = this._srcBlendFactor;
                }
              }
              _nodeStateChange(transformType) {
                if (this._renderData) {
                  this.markForUpdateRenderData();
                }
                for (let i = 0; i < this.node.children.length; ++i) {
                  const child = this.node.children[i];
                  const renderComp = child.getComponent(UIRenderer);
                  if (renderComp) {
                    renderComp.markForUpdateRenderData();
                  }
                }
              }
              _colorDirty() {
                this.node._uiProps.colorDirty = true;
                this.setEntityColorDirty(true);
              }
              _onMaterialModified(idx, material) {
                if (this._renderData) {
                  this.markForUpdateRenderData();
                  this._renderData.passDirty = true;
                }
                super._onMaterialModified(idx, material);
              }
              _updateBuiltinMaterial() {
                let mat;
                switch (this._instanceMaterialType) {
                  case InstanceMaterialType.ADD_COLOR:
                    mat = builtinResMgr.get(`ui-base-material`);
                    break;
                  case InstanceMaterialType.GRAYSCALE:
                    mat = builtinResMgr.get(`ui-sprite-gray-material`);
                    break;
                  case InstanceMaterialType.USE_ALPHA_SEPARATED:
                    mat = builtinResMgr.get(`ui-sprite-alpha-sep-material`);
                    break;
                  case InstanceMaterialType.USE_ALPHA_SEPARATED_AND_GRAY:
                    mat = builtinResMgr.get(`ui-sprite-gray-alpha-sep-material`);
                    break;
                  default:
                    mat = builtinResMgr.get(`ui-sprite-material`);
                    break;
                }
                return mat;
              }
              setNodeDirty() {
                if (this._renderData) {
                  this._renderData.nodeDirty = true;
                }
              }
              setTextureDirty() {
                if (this._renderData) {
                  this._renderData.textureDirty = true;
                }
              }
              createRenderEntity() {
                return new RenderEntity(RenderEntityType.STATIC);
              }
            }, _class3.BlendState = BlendFactor, _class3.Assembler = null, _class3.PostAssembler = null, _class3), (_applyDecoratedDescriptor(_class2$2.prototype, "sharedMaterials", [override], Object.getOwnPropertyDescriptor(_class2$2.prototype, "sharedMaterials"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "customMaterial", [_dec3$4], Object.getOwnPropertyDescriptor(_class2$2.prototype, "customMaterial"), _class2$2.prototype), _initializer$2 = applyDecoratedInitializer(_class2$2.prototype, "_materials", [override], function () {
              return [];
            }), _initializer2$2 = applyDecoratedInitializer(_class2$2.prototype, "_customMaterial", [_dec4$1], function () {
              return null;
            }), _initializer3$1 = applyDecoratedInitializer(_class2$2.prototype, "_srcBlendFactor", [serializable], function () {
              return BlendFactor.SRC_ALPHA;
            }), _initializer4$1 = applyDecoratedInitializer(_class2$2.prototype, "_dstBlendFactor", [serializable], function () {
              return BlendFactor.ONE_MINUS_SRC_ALPHA;
            }), _initializer5$1 = applyDecoratedInitializer(_class2$2.prototype, "_color", [serializable], function () {
              return Color.WHITE.clone();
            })), _class2$2)) || _class$4) || _class$4));
            legacyCC.internal.UIRenderer = UIRenderer;

            deprecateModuleExportedName({
              RenderComponent: {
                newName: 'UIRenderer',
                since: '1.2.0',
                removed: true
              },
              UITransformComponent: {
                newName: 'UITransform',
                since: '1.2.0',
                removed: false
              },
              CanvasComponent: {
                newName: 'Canvas',
                since: '1.2.0',
                removed: false
              }
            });

            deprecateModuleExportedName({
              UIRenderable: {
                newName: 'UIRenderer',
                since: '3.0.0',
                removed: true
              }
            });

            deprecateModuleExportedName({
              Renderable2D: {
                newName: 'UIRenderer',
                since: '3.6.0',
                removed: false
              }
            });

            const localWinSize = new Size();
            const orientationMap = {
              [macro.ORIENTATION_AUTO]: Orientation.AUTO,
              [macro.ORIENTATION_LANDSCAPE]: Orientation.LANDSCAPE,
              [macro.ORIENTATION_PORTRAIT]: Orientation.PORTRAIT
            };
            class View extends Eventify(System) {
              constructor() {
                super();
                this._designResolutionSize = void 0;
                this._scaleX = void 0;
                this._scaleY = void 0;
                this._viewportRect = void 0;
                this._visibleRect = void 0;
                this._autoFullScreen = void 0;
                this._retinaEnabled = void 0;
                this._resizeCallback = void 0;
                this._resolutionPolicy = void 0;
                this._rpExactFit = void 0;
                this._rpShowAll = void 0;
                this._rpNoBorder = void 0;
                this._rpFixedHeight = void 0;
                this._rpFixedWidth = void 0;
                const _strategyer = ContainerStrategy;
                const _strategy = ContentStrategy;
                this._designResolutionSize = new Size(0, 0);
                this._scaleX = 1;
                this._scaleY = 1;
                this._viewportRect = new Rect(0, 0, 0, 0);
                this._visibleRect = new Rect(0, 0, 0, 0);
                this._autoFullScreen = false;
                this._retinaEnabled = false;
                this._resizeCallback = null;
                this._rpExactFit = new ResolutionPolicy(_strategyer.EQUAL_TO_FRAME, _strategy.EXACT_FIT);
                this._rpShowAll = new ResolutionPolicy(_strategyer.EQUAL_TO_FRAME, _strategy.SHOW_ALL);
                this._rpNoBorder = new ResolutionPolicy(_strategyer.EQUAL_TO_FRAME, _strategy.NO_BORDER);
                this._rpFixedHeight = new ResolutionPolicy(_strategyer.EQUAL_TO_FRAME, _strategy.FIXED_HEIGHT);
                this._rpFixedWidth = new ResolutionPolicy(_strategyer.EQUAL_TO_FRAME, _strategy.FIXED_WIDTH);
                this._resolutionPolicy = this._rpShowAll;
              }
              init() {
                const windowSize = screen.windowSize;
                const w = windowSize.width;
                const h = windowSize.height;
                this._designResolutionSize.width = w;
                this._designResolutionSize.height = h;
                this._viewportRect.width = w;
                this._viewportRect.height = h;
                this._visibleRect.width = w;
                this._visibleRect.height = h;
                localWinSize.width = this._visibleRect.width;
                localWinSize.height = this._visibleRect.height;
                if (visibleRect) {
                  visibleRect.init(this._visibleRect);
                }
                {
                  this.resizeWithBrowserSize(true);
                  const designResolution = settings.querySettings(Settings.Category.SCREEN, 'designResolution');
                  if (designResolution) {
                    this.setDesignResolutionSize(Number(designResolution.width), Number(designResolution.height), designResolution.policy || ResolutionPolicy.FIXED_HEIGHT);
                  }
                }
                screen.on('window-resize', this._updateAdaptResult, this);
                screen.on('fullscreen-change', this._updateAdaptResult, this);
              }
              resizeWithBrowserSize(enabled) {
                screenAdapter.handleResizeEvent = enabled;
              }
              setResizeCallback(callback) {
                if (typeof callback === 'function' || callback == null) {
                  this._resizeCallback = callback;
                }
              }
              setOrientation(orientation) {
                screenAdapter.orientation = orientationMap[orientation];
              }
              adjustViewportMeta(enabled) {}
              enableRetina(enabled) {
                this._retinaEnabled = !!enabled;
              }
              isRetinaEnabled() {
                return this._retinaEnabled;
              }
              enableAutoFullScreen(enabled) {
                if (enabled === this._autoFullScreen) {
                  return;
                }
                this._autoFullScreen = enabled;
                if (enabled) {
                  screen.requestFullScreen().catch(e => {});
                }
              }
              isAutoFullScreenEnabled() {
                return this._autoFullScreen;
              }
              setCanvasSize(width, height) {
                screenAdapter.resolutionScale = 1;
                const dpr = screenAdapter.devicePixelRatio;
                const windowSize = new Size(width * dpr, height * dpr);
                screen.windowSize = windowSize;
              }
              getCanvasSize() {
                return screen.windowSize;
              }
              getFrameSize() {
                const dpr = screenAdapter.devicePixelRatio;
                const sizeInCssPixels = screen.windowSize;
                sizeInCssPixels.width /= dpr;
                sizeInCssPixels.height /= dpr;
                return sizeInCssPixels;
              }
              setFrameSize(width, height) {
                const dpr = screenAdapter.devicePixelRatio;
                screen.windowSize = new Size(width * dpr, height * dpr);
              }
              getVisibleSize() {
                return new Size(this._visibleRect.width, this._visibleRect.height);
              }
              getVisibleSizeInPixel() {
                return new Size(this._visibleRect.width * this._scaleX, this._visibleRect.height * this._scaleY);
              }
              getVisibleOrigin() {
                return new Vec2(this._visibleRect.x, this._visibleRect.y);
              }
              getVisibleOriginInPixel() {
                return new Vec2(this._visibleRect.x * this._scaleX, this._visibleRect.y * this._scaleY);
              }
              getResolutionPolicy() {
                return this._resolutionPolicy;
              }
              _updateResolutionPolicy(resolutionPolicy) {
                if (resolutionPolicy instanceof ResolutionPolicy) {
                  this._resolutionPolicy = resolutionPolicy;
                } else {
                  const _locPolicy = ResolutionPolicy;
                  if (resolutionPolicy === _locPolicy.EXACT_FIT) {
                    this._resolutionPolicy = this._rpExactFit;
                  }
                  if (resolutionPolicy === _locPolicy.SHOW_ALL) {
                    this._resolutionPolicy = this._rpShowAll;
                  }
                  if (resolutionPolicy === _locPolicy.NO_BORDER) {
                    this._resolutionPolicy = this._rpNoBorder;
                  }
                  if (resolutionPolicy === _locPolicy.FIXED_HEIGHT) {
                    this._resolutionPolicy = this._rpFixedHeight;
                  }
                  if (resolutionPolicy === _locPolicy.FIXED_WIDTH) {
                    this._resolutionPolicy = this._rpFixedWidth;
                  }
                }
              }
              setResolutionPolicy(resolutionPolicy) {
                this._updateResolutionPolicy(resolutionPolicy);
                const designedResolution = view.getDesignResolutionSize();
                view.setDesignResolutionSize(designedResolution.width, designedResolution.height, resolutionPolicy);
              }
              setDesignResolutionSize(width, height, resolutionPolicy) {
                if (!(width > 0 && height > 0)) {
                  errorID(2200);
                  return;
                }
                this._updateResolutionPolicy(resolutionPolicy);
                const policy = this._resolutionPolicy;
                if (policy) {
                  policy.preApply(this);
                }
                this._designResolutionSize.width = width;
                this._designResolutionSize.height = height;
                const result = policy.apply(this, this._designResolutionSize);
                if (result.scale && result.scale.length === 2) {
                  this._scaleX = result.scale[0];
                  this._scaleY = result.scale[1];
                }
                if (result.viewport) {
                  const vp = this._viewportRect;
                  const vb = this._visibleRect;
                  const rv = result.viewport;
                  vp.x = rv.x;
                  vp.y = rv.y;
                  vp.width = rv.width;
                  vp.height = rv.height;
                  vb.x = 0;
                  vb.y = 0;
                  vb.width = rv.width / this._scaleX;
                  vb.height = rv.height / this._scaleY;
                }
                policy.postApply(this);
                localWinSize.width = this._visibleRect.width;
                localWinSize.height = this._visibleRect.height;
                if (visibleRect) {
                  visibleRect.init(this._visibleRect);
                }
                this.emit('design-resolution-changed');
              }
              getDesignResolutionSize() {
                return new Size(this._designResolutionSize.width, this._designResolutionSize.height);
              }
              setRealPixelResolution(width, height, resolutionPolicy) {
                this.setDesignResolutionSize(width, height, resolutionPolicy);
              }
              getViewportRect() {
                return this._viewportRect;
              }
              getScaleX() {
                return this._scaleX;
              }
              getScaleY() {
                return this._scaleY;
              }
              getDevicePixelRatio() {
                return screenAdapter.devicePixelRatio;
              }
              convertToLocationInView(tx, ty, relatedPos, out = new Vec2()) {
                const x = screenAdapter.devicePixelRatio * (tx - relatedPos.left);
                const y = screenAdapter.devicePixelRatio * (relatedPos.top + relatedPos.height - ty);
                if (screenAdapter.isFrameRotated) {
                  out.x = screen.windowSize.width - y;
                  out.y = x;
                } else {
                  out.x = x;
                  out.y = y;
                }
                return out;
              }
              _convertToUISpace(point) {
                const viewport = this._viewportRect;
                point.x = (point.x - viewport.x) / this._scaleX;
                point.y = (point.y - viewport.y) / this._scaleY;
              }
              _updateAdaptResult(width, height, windowId) {
                var _this$_resizeCallback;
                legacyCC.director.root.resize(width, height, windowId === undefined || windowId === 0 ? 1 : windowId);
                const w = this._designResolutionSize.width;
                const h = this._designResolutionSize.height;
                if (width > 0 && height > 0) {
                  this.setDesignResolutionSize(w, h, this._resolutionPolicy);
                } else {
                  assert(false, '_updateAdaptResult Invalid size.');
                }
                this.emit('canvas-resize');
                (_this$_resizeCallback = this._resizeCallback) === null || _this$_resizeCallback === void 0 ? void 0 : _this$_resizeCallback.call(this);
              }
            } exports('V', View);
            View.instance = void 0;
            class ContainerStrategy {
              constructor() {
                this.name = 'ContainerStrategy';
              }
              preApply(_view) {}
              apply(_view, designedResolution) {}
              postApply(_view) {}
              _setupCanvas() {
                const locCanvas = legacyCC.game.canvas;
                if (locCanvas) {
                  const windowSize = screen.windowSize;
                  if (locCanvas.width !== windowSize.width) {
                    locCanvas.width = windowSize.width;
                  }
                  if (locCanvas.height !== windowSize.height) {
                    locCanvas.height = windowSize.height;
                  }
                }
              }
            }
            ContainerStrategy.EQUAL_TO_FRAME = void 0;
            ContainerStrategy.PROPORTION_TO_FRAME = void 0;
            class ContentStrategy {
              constructor() {
                this.name = 'ContentStrategy';
                this._result = void 0;
                this._result = {
                  scale: [1, 1],
                  viewport: null
                };
              }
              preApply(_view) {}
              apply(_view, designedResolution) {
                return {
                  scale: [1, 1]
                };
              }
              postApply(_view) {}
              _buildResult(containerW, containerH, contentW, contentH, scaleX, scaleY) {
                if (Math.abs(containerW - contentW) < 2) {
                  contentW = containerW;
                }
                if (Math.abs(containerH - contentH) < 2) {
                  contentH = containerH;
                }
                const viewport = new Rect(Math.round((containerW - contentW) / 2), Math.round((containerH - contentH) / 2), contentW, contentH);
                this._result.scale = [scaleX, scaleY];
                this._result.viewport = viewport;
                return this._result;
              }
            }
            ContentStrategy.EXACT_FIT = void 0;
            ContentStrategy.SHOW_ALL = void 0;
            ContentStrategy.NO_BORDER = void 0;
            ContentStrategy.FIXED_HEIGHT = void 0;
            ContentStrategy.FIXED_WIDTH = void 0;
            (() => {
              class EqualToFrame extends ContainerStrategy {
                constructor(...args) {
                  super(...args);
                  this.name = 'EqualToFrame';
                }
                apply(_view, designedResolution) {
                  screenAdapter.isProportionalToFrame = false;
                  this._setupCanvas();
                }
              }
              class ProportionalToFrame extends ContainerStrategy {
                constructor(...args) {
                  super(...args);
                  this.name = 'ProportionalToFrame';
                }
                apply(_view, designedResolution) {
                  screenAdapter.isProportionalToFrame = true;
                  this._setupCanvas();
                }
              }
              ContainerStrategy.EQUAL_TO_FRAME = new EqualToFrame();
              ContainerStrategy.PROPORTION_TO_FRAME = new ProportionalToFrame();
              class ExactFit extends ContentStrategy {
                constructor(...args) {
                  super(...args);
                  this.name = 'ExactFit';
                }
                apply(_view, designedResolution) {
                  const windowSize = screen.windowSize;
                  const containerW = windowSize.width;
                  const containerH = windowSize.height;
                  const scaleX = containerW / designedResolution.width;
                  const scaleY = containerH / designedResolution.height;
                  return this._buildResult(containerW, containerH, containerW, containerH, scaleX, scaleY);
                }
              }
              class ShowAll extends ContentStrategy {
                constructor(...args) {
                  super(...args);
                  this.name = 'ShowAll';
                }
                apply(_view, designedResolution) {
                  const windowSize = screen.windowSize;
                  const containerW = windowSize.width;
                  const containerH = windowSize.height;
                  const designW = designedResolution.width;
                  const designH = designedResolution.height;
                  const scaleX = containerW / designW;
                  const scaleY = containerH / designH;
                  let scale = 0;
                  let contentW;
                  let contentH;
                  if (scaleX < scaleY) {
                    scale = scaleX;
                    contentW = containerW;
                    contentH = designH * scale;
                  } else {
                    scale = scaleY;
                    contentW = designW * scale;
                    contentH = containerH;
                  }
                  return this._buildResult(containerW, containerH, contentW, contentH, scale, scale);
                }
              }
              class NoBorder extends ContentStrategy {
                constructor(...args) {
                  super(...args);
                  this.name = 'NoBorder';
                }
                apply(_view, designedResolution) {
                  const windowSize = screen.windowSize;
                  const containerW = windowSize.width;
                  const containerH = windowSize.height;
                  const designW = designedResolution.width;
                  const designH = designedResolution.height;
                  const scaleX = containerW / designW;
                  const scaleY = containerH / designH;
                  let scale;
                  let contentW;
                  let contentH;
                  if (scaleX < scaleY) {
                    scale = scaleY;
                    contentW = designW * scale;
                    contentH = containerH;
                  } else {
                    scale = scaleX;
                    contentW = containerW;
                    contentH = designH * scale;
                  }
                  return this._buildResult(containerW, containerH, contentW, contentH, scale, scale);
                }
              }
              class FixedHeight extends ContentStrategy {
                constructor(...args) {
                  super(...args);
                  this.name = 'FixedHeight';
                }
                apply(_view, designedResolution) {
                  const windowSize = screen.windowSize;
                  const containerW = windowSize.width;
                  const containerH = windowSize.height;
                  const designH = designedResolution.height;
                  const scale = containerH / designH;
                  const contentW = containerW;
                  const contentH = containerH;
                  return this._buildResult(containerW, containerH, contentW, contentH, scale, scale);
                }
              }
              class FixedWidth extends ContentStrategy {
                constructor(...args) {
                  super(...args);
                  this.name = 'FixedWidth';
                }
                apply(_view, designedResolution) {
                  const windowSize = screen.windowSize;
                  const containerW = windowSize.width;
                  const containerH = windowSize.height;
                  const designW = designedResolution.width;
                  const scale = containerW / designW;
                  const contentW = containerW;
                  const contentH = containerH;
                  return this._buildResult(containerW, containerH, contentW, contentH, scale, scale);
                }
              }
              ContentStrategy.EXACT_FIT = new ExactFit();
              ContentStrategy.SHOW_ALL = new ShowAll();
              ContentStrategy.NO_BORDER = new NoBorder();
              ContentStrategy.FIXED_HEIGHT = new FixedHeight();
              ContentStrategy.FIXED_WIDTH = new FixedWidth();
            })();
            class ResolutionPolicy {
              constructor(containerStg, contentStg) {
                this.name = 'ResolutionPolicy';
                this._containerStrategy = void 0;
                this._contentStrategy = void 0;
                this._containerStrategy = null;
                this._contentStrategy = null;
                this.setContainerStrategy(containerStg);
                this.setContentStrategy(contentStg);
              }
              get canvasSize() {
                return screen.windowSize;
              }
              preApply(_view) {
                this._contentStrategy.preApply(_view);
              }
              apply(_view, designedResolution) {
                this._containerStrategy.apply(_view, designedResolution);
                return this._contentStrategy.apply(_view, designedResolution);
              }
              postApply(_view) {
                this._contentStrategy.postApply(_view);
              }
              setContainerStrategy(containerStg) {
                if (containerStg instanceof ContainerStrategy) {
                  this._containerStrategy = containerStg;
                }
              }
              setContentStrategy(contentStg) {
                if (contentStg instanceof ContentStrategy) {
                  this._contentStrategy = contentStg;
                }
              }
            } exports('t', ResolutionPolicy);
            ResolutionPolicy.EXACT_FIT = 0;
            ResolutionPolicy.NO_BORDER = 1;
            ResolutionPolicy.SHOW_ALL = 2;
            ResolutionPolicy.FIXED_HEIGHT = 3;
            ResolutionPolicy.FIXED_WIDTH = 4;
            ResolutionPolicy.UNKNOWN = 5;
            ResolutionPolicy.ContainerStrategy = ContainerStrategy;
            ResolutionPolicy.ContentStrategy = ContentStrategy;
            legacyCC.ResolutionPolicy = ResolutionPolicy;
            const view = exports('h', View.instance = legacyCC.view = new View());
            director.registerSystem('view', view, 0);
            legacyCC.winSize = localWinSize;

            var _dec$3, _dec2$3, _dec3$3, _class$3;
            let RenderRoot2D = exports('R', (_dec$3 = ccclass('cc.RenderRoot2D'), _dec2$3 = executionOrder(100), _dec3$3 = requireComponent(UITransform), _dec$3(_class$3 = _dec2$3(_class$3 = _dec3$3(_class$3 = disallowMultiple(_class$3 = class RenderRoot2D extends Component {
              onEnable() {
                legacyCC.director.root.batcher2D.addScreen(this);
              }
              onDisable() {
                legacyCC.director.root.batcher2D.removeScreen(this);
              }
              onDestroy() {
                legacyCC.director.root.batcher2D.removeScreen(this);
              }
            }) || _class$3) || _class$3) || _class$3) || _class$3));

            var _dec$2, _dec2$2, _dec3$2, _dec4, _class$2, _class2$1, _initializer$1, _initializer2$1;
            const _worldPos = new Vec3();
            const RenderMode = Enum({
              OVERLAY: 0,
              INTERSPERSE: 1
            });
            let Canvas = exports('C', (_dec$2 = ccclass('cc.Canvas'), _dec2$2 = executionOrder(100), _dec3$2 = type(Camera), _dec4 = type(Camera), _dec$2(_class$2 = _dec2$2(_class$2 = disallowMultiple(_class$2 = (_class2$1 = class Canvas extends RenderRoot2D {
              get renderMode() {
                return this._renderMode;
              }
              set renderMode(val) {
                this._renderMode = val;
                if (this._cameraComponent) {
                  this._cameraComponent.priority = this._getViewPriority();
                }
              }
              get cameraComponent() {
                return this._cameraComponent;
              }
              set cameraComponent(value) {
                if (this._cameraComponent === value) {
                  return;
                }
                this._cameraComponent = value;
                this._onResizeCamera();
              }
              get alignCanvasWithScreen() {
                return this._alignCanvasWithScreen;
              }
              set alignCanvasWithScreen(value) {
                this._alignCanvasWithScreen = value;
                this._onResizeCamera();
              }
              constructor() {
                super();
                this._cameraComponent = _initializer$1 && _initializer$1();
                this._alignCanvasWithScreen = _initializer2$1 && _initializer2$1();
                this._thisOnCameraResized = void 0;
                this.fitDesignResolution_EDITOR = void 0;
                this._pos = new Vec3();
                this._renderMode = RenderMode.OVERLAY;
                this._thisOnCameraResized = this._onResizeCamera.bind(this);
              }
              __preload() {
                const widget = this.getComponent('cc.Widget');
                if (widget) {
                  widget.updateAlignment();
                }
                {
                  if (this._cameraComponent) {
                    this._cameraComponent._createCamera();
                    this._cameraComponent.node.on(Camera.TARGET_TEXTURE_CHANGE, this._thisOnCameraResized);
                  }
                }
                this._onResizeCamera();
                {
                  this.node.on(NodeEventType.TRANSFORM_CHANGED, this._thisOnCameraResized);
                }
              }
              onEnable() {
                super.onEnable();
                if (this._cameraComponent) {
                  this._cameraComponent.node.on(Camera.TARGET_TEXTURE_CHANGE, this._thisOnCameraResized);
                }
              }
              onDisable() {
                super.onDisable();
                if (this._cameraComponent) {
                  this._cameraComponent.node.off(Camera.TARGET_TEXTURE_CHANGE, this._thisOnCameraResized);
                }
              }
              onDestroy() {
                super.onDestroy();
                this.node.off(NodeEventType.TRANSFORM_CHANGED, this._thisOnCameraResized);
              }
              _onResizeCamera() {
                if (this._cameraComponent && this._alignCanvasWithScreen) {
                  if (this._cameraComponent.targetTexture) {
                    this._cameraComponent.orthoHeight = visibleRect.height / 2;
                  } else {
                    const size = screen.windowSize;
                    this._cameraComponent.orthoHeight = size.height / view.getScaleY() / 2;
                  }
                  this.node.getWorldPosition(_worldPos);
                  this._cameraComponent.node.setWorldPosition(_worldPos.x, _worldPos.y, 1000);
                }
              }
              _getViewPriority() {
                if (this._cameraComponent) {
                  var _this$cameraComponent;
                  let priority = (_this$cameraComponent = this.cameraComponent) === null || _this$cameraComponent === void 0 ? void 0 : _this$cameraComponent.priority;
                  priority = this._renderMode === RenderMode.OVERLAY ? priority | 1 << 30 : priority & ~(1 << 30);
                  return priority;
                }
                return 0;
              }
            }, (_applyDecoratedDescriptor(_class2$1.prototype, "cameraComponent", [_dec3$2], Object.getOwnPropertyDescriptor(_class2$1.prototype, "cameraComponent"), _class2$1.prototype), _initializer$1 = applyDecoratedInitializer(_class2$1.prototype, "_cameraComponent", [_dec4], function () {
              return null;
            }), _initializer2$1 = applyDecoratedInitializer(_class2$1.prototype, "_alignCanvasWithScreen", [serializable], function () {
              return true;
            })), _class2$1)) || _class$2) || _class$2) || _class$2));
            legacyCC.Canvas = Canvas;

            var _dec$1, _dec2$1, _dec3$1, _class$1;
            let UIComponent = exports('U', (_dec$1 = ccclass('cc.UIComponent'), _dec2$1 = requireComponent(UITransform), _dec3$1 = executionOrder(110), _dec$1(_class$1 = _dec2$1(_class$1 = _dec3$1(_class$1 = disallowMultiple(_class$1 = class UIComponent extends Component {
              constructor(...args) {
                super(...args);
                this._lastParent = null;
                this.stencilStage = Stage.DISABLED;
              }
              __preload() {
                this.node._uiProps.uiComp = this;
              }
              onEnable() {}
              onDisable() {}
              onDestroy() {
                if (this.node._uiProps.uiComp === this) {
                  this.node._uiProps.uiComp = null;
                }
              }
              postUpdateAssembler(render) {}
              markForUpdateRenderData(enable = true) {}
              setNodeDirty() {}
              setTextureDirty() {}
            }) || _class$1) || _class$1) || _class$1) || _class$1));

            removeProperty(UIComponent.prototype, 'UIComponent', [{
              name: '_visibility'
            }, {
              name: 'setVisibility'
            }]);
            replaceProperty(Canvas.prototype, 'Canvas.prototype', [{
              name: 'camera',
              newName: 'cameraComponent.camera',
              customGetter() {
                var _this$_cameraComponen;
                return (_this$_cameraComponen = this._cameraComponent) === null || _this$_cameraComponen === void 0 ? void 0 : _this$_cameraComponen.camera;
              }
            }, {
              name: 'clearFlag',
              newName: 'cameraComponent.clearFlags',
              customGetter() {
                return this._cameraComponent ? this._cameraComponent.clearFlags : 0;
              },
              customSetter(val) {
                if (this._cameraComponent) this._cameraComponent.clearFlags = val;
              }
            }, {
              name: 'color',
              newName: 'cameraComponent.clearColor',
              customGetter() {
                return this._cameraComponent ? this._cameraComponent.clearColor : Color.BLACK;
              },
              customSetter(val) {
                if (this._cameraComponent) this._cameraComponent.clearColor = val;
              }
            }, {
              name: 'priority',
              newName: 'cameraComponent.priority',
              customGetter() {
                return this._cameraComponent ? this._cameraComponent.priority : 0;
              },
              customSetter(val) {
                if (this._cameraComponent) this._cameraComponent.priority = val;
              }
            }, {
              name: 'targetTexture',
              newName: 'cameraComponent.targetTexture',
              customGetter() {
                return this._cameraComponent ? this._cameraComponent.targetTexture : null;
              },
              customSetter(value) {
                if (this._cameraComponent) this._cameraComponent.targetTexture = value;
              }
            }, {
              name: 'visibility',
              newName: 'cameraComponent.visibility',
              customGetter() {
                return this._cameraComponent ? this._cameraComponent.visibility : 0;
              }
            }]);
            markAsWarning(UITransform.prototype, 'UITransform.prototype', [{
              name: 'priority',
              suggest: `Please use setSiblingIndex to change index of the current node in its parent's children array.`
            }]);
            legacyCC.UITransformComponent = UITransform;
            setClassAlias(UITransform, 'cc.UITransformComponent');
            setClassAlias(UIRenderer, 'cc.RenderComponent');
            legacyCC.CanvasComponent = Canvas;
            setClassAlias(Canvas, 'cc.CanvasComponent');
            legacyCC.internal.Renderable2D = UIRenderer;
            setClassAlias(UIRenderer, 'cc.Renderable2D');

            var _dec, _dec2, _dec3, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6;
            var SpriteMode;
            (function (SpriteMode) {
              SpriteMode[SpriteMode["SIMPLE"] = 0] = "SIMPLE";
              SpriteMode[SpriteMode["SLICED"] = 1] = "SLICED";
              SpriteMode[SpriteMode["TILED"] = 2] = "TILED";
            })(SpriteMode || (SpriteMode = {}));
            let SpriteRenderer = exports('d', (_dec = ccclass('cc.SpriteRenderer'), _dec2 = executionOrder(100), _dec3 = type(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = class SpriteRenderer extends ModelRenderer {
              constructor(...args) {
                super(...args);
                this._spriteFrame = _initializer && _initializer();
                this._mode = _initializer2 && _initializer2();
                this._color = _initializer3 && _initializer3();
                this._flipX = _initializer4 && _initializer4();
                this._flipY = _initializer5 && _initializer5();
                this._size = _initializer6 && _initializer6();
                this._model = null;
              }
              get spriteFrame() {
                return this._spriteFrame;
              }
              set spriteFrame(value) {
                if (this._spriteFrame === value) {
                  return;
                }
                this._spriteFrame;
                this._spriteFrame = value;
                if (this._spriteFrame) {
                  this._spriteFrame.ensureMeshData();
                  const mesh = this._spriteFrame.mesh;
                  mesh.initialize();
                }
                this._updateModels();
                if (this.enabledInHierarchy) {
                  this._attachToScene();
                }
              }
              get model() {
                return this._model;
              }
              onLoad() {
                if (this._spriteFrame) {
                  if (!this._spriteFrame.mesh) {
                    this._spriteFrame.ensureMeshData();
                  }
                  this._spriteFrame.mesh.initialize();
                }
                this._updateModels();
              }
              onRestore() {
                this._updateModels();
                if (this.enabledInHierarchy) {
                  this._attachToScene();
                }
              }
              onEnable() {
                super.onEnable();
                if (!this._model) {
                  this._updateModels();
                }
                this._attachToScene();
              }
              onDisable() {
                if (this._model) {
                  this._detachFromScene();
                }
              }
              onDestroy() {
                if (this._model) {
                  legacyCC.director.root.destroyModel(this._model);
                  this._model = null;
                  this._models.length = 0;
                }
              }
              _updateModels() {
                if (!this._spriteFrame) {
                  return;
                }
                const model = this._model;
                if (model) {
                  model.destroy();
                  model.initialize();
                  model.node = model.transform = this.node;
                } else {
                  this._createModel();
                }
                if (this._model) {
                  const mesh = this._spriteFrame.mesh;
                  this._model.createBoundingShape(mesh.struct.minPosition, mesh.struct.maxPosition);
                  this._updateModelParams();
                  this._onUpdateLocalDescriptorSet();
                }
              }
              _createModel() {
                const model = this._model = legacyCC.director.root.createModel(Model);
                model.visFlags = this.visibility;
                model.node = model.transform = this.node;
                this._models.length = 0;
                this._models.push(this._model);
              }
              _updateModelParams() {
                if (!this._spriteFrame || !this._model) {
                  return;
                }
                this._spriteFrame.ensureMeshData();
                const mesh = this._spriteFrame.mesh;
                this.node.hasChangedFlags |= TransformBit.POSITION;
                this._model.transform.hasChangedFlags |= TransformBit.POSITION;
                const renderingMesh = mesh ? mesh.renderingSubMeshes : null;
                if (renderingMesh) {
                  const meshCount = renderingMesh.length;
                  for (let i = 0; i < meshCount; ++i) {
                    let material = this.getRenderMaterial(i);
                    if (material && !material.isValid) {
                      material = null;
                    }
                    const subMeshData = renderingMesh[i];
                    if (subMeshData) {
                      this._model.initSubModel(i, subMeshData, material || this._getBuiltinMaterial());
                    }
                  }
                }
                this._model.enabled = true;
              }
              _getBuiltinMaterial() {
                return builtinResMgr.get('missing-material');
              }
              _onMaterialModified(idx, material) {
                super._onMaterialModified(idx, material);
                if (!this._spriteFrame || !this._model || !this._model.inited) {
                  return;
                }
                this._onRebuildPSO(idx, material || this._getBuiltinMaterial());
              }
              _onRebuildPSO(idx, material) {
                if (!this._model || !this._model.inited) {
                  return;
                }
                this._model.setSubModelMaterial(idx, material);
                this._onUpdateLocalDescriptorSet();
              }
              _onUpdateLocalDescriptorSet() {
                if (!this._spriteFrame || !this._model || !this._model.inited) {
                  return;
                }
                const texture = this._spriteFrame.getGFXTexture();
                const sampler = this._spriteFrame.getGFXSampler();
                const subModels = this._model.subModels;
                const binding = ModelLocalBindings.SAMPLER_SPRITE;
                for (let i = 0; i < subModels.length; i++) {
                  const {
                    descriptorSet
                  } = subModels[i];
                  descriptorSet.bindTexture(binding, texture);
                  descriptorSet.bindSampler(binding, sampler);
                  descriptorSet.update();
                }
              }
              _attachToScene() {
                if (!this.node.scene || !this._model) {
                  return;
                }
                const renderScene = this._getRenderScene();
                if (this._model.scene !== null) {
                  this._detachFromScene();
                }
                renderScene.addModel(this._model);
              }
              _detachFromScene() {
                if (this._model && this._model.scene) {
                  this._model.scene.removeModel(this._model);
                }
              }
            }, (_applyDecoratedDescriptor(_class2.prototype, "spriteFrame", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "spriteFrame"), _class2.prototype), _initializer = applyDecoratedInitializer(_class2.prototype, "_spriteFrame", [serializable], function () {
              return null;
            }), _initializer2 = applyDecoratedInitializer(_class2.prototype, "_mode", [serializable], function () {
              return SpriteMode.SIMPLE;
            }), _initializer3 = applyDecoratedInitializer(_class2.prototype, "_color", [serializable], function () {
              return Color.WHITE.clone();
            }), _initializer4 = applyDecoratedInitializer(_class2.prototype, "_flipX", [serializable], function () {
              return false;
            }), _initializer5 = applyDecoratedInitializer(_class2.prototype, "_flipY", [serializable], function () {
              return false;
            }), _initializer6 = applyDecoratedInitializer(_class2.prototype, "_size", [serializable], function () {
              return new Vec2();
            })), _class2)) || _class) || _class));

        })
    };
}));

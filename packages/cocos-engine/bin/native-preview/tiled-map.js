System.register(['./node-event-18d96a1b.js', './index-ce98320e.js', './sprite-renderer-9a6a919d.js', './sprite-5c924512.js', './ZipUtils-79879a2c.js', './builtin-res-mgr.jsb-c9e8e53a.js', './find-7a03d1cc.js', './deprecated-f8df8d32.js', './director-dc238483.js', './device-90bc7390.js', './rendering-sub-mesh.jsb-25043997.js', './scene-asset.jsb-0d4c6201.js', './decorators-b63b63a2.js', './pipeline-sub-state.jsb-f3a5cc2c.js', './murmurhash2_gc-2108d723.js', './deprecated-fcfb90f6.js', './camera-component-b329f870.js', './model-renderer-f8d2f66d.js', './renderer-3bf7a012.js', './create-mesh.jsb-8af9d27e.js', './buffer-9511d9f4.js', './touch-af62e326.js'], (function (exports) {
    'use strict';
    var _applyDecoratedDescriptor, Component, NodeEventType, Asset, ccenum, Color, Vec2, Size, Rect, logID, errorID, ccclass, type, applyDecoratedInitializer, requireComponent, CCInteger, warn, Mat4, Vec3, CCBoolean, CCObject, CCString, serializable, EDITOR, sys, UITransform, UIRenderer, RenderDrawInfo, RenderDrawInfoType, RenderData, RenderEntity, RenderEntityType, SpriteFrame, StaticVBAccessor, vfmtPosUvColor, Label, Sprite, codec, _p, SAXParser, Node, TextAsset, director, Director, BlendFactor;
    return {
        setters: [function (module) {
            _applyDecoratedDescriptor = module.H;
            Component = module.C;
            NodeEventType = module.N;
            Asset = module.A;
        }, function (module) {
            ccenum = module.ab;
            Color = module.C;
            Vec2 = module.V;
            Size = module.S;
            Rect = module.R;
            logID = module.c;
            errorID = module.f;
            ccclass = module.by;
            type = module.bw;
            applyDecoratedInitializer = module.bx;
            requireComponent = module.cC;
            CCInteger = module.at;
            warn = module.w;
            Mat4 = module.s;
            Vec3 = module.n;
            CCBoolean = module.av;
            CCObject = module.as;
            CCString = module.aw;
            serializable = module.bf;
            EDITOR = module.bB;
            sys = module.aL;
        }, function (module) {
            UITransform = module.c;
            UIRenderer = module.b;
            RenderDrawInfo = module.u;
            RenderDrawInfoType = module.n;
            RenderData = module.e;
            RenderEntity = module.q;
            RenderEntityType = module.r;
            SpriteFrame = module.a;
            StaticVBAccessor = module.k;
            vfmtPosUvColor = module.i;
        }, function (module) {
            Label = module.b;
            Sprite = module.a;
        }, function (module) {
            codec = module.c;
            _p = module._;
        }, function (module) {
            SAXParser = module.b0;
            Node = module.Q;
            TextAsset = module.aj;
        }, function () {}, function () {}, function (module) {
            director = module.n;
            Director = module.m;
        }, function (module) {
            BlendFactor = module.n;
        }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
        execute: (function () {

            let Orientation;
            (function (Orientation) {
              Orientation[Orientation["ORTHO"] = 0] = "ORTHO";
              Orientation[Orientation["HEX"] = 1] = "HEX";
              Orientation[Orientation["ISO"] = 2] = "ISO";
            })(Orientation || (Orientation = {}));
            ccenum(Orientation);
            let Property;
            (function (Property) {
              Property[Property["NONE"] = 0] = "NONE";
              Property[Property["MAP"] = 1] = "MAP";
              Property[Property["LAYER"] = 2] = "LAYER";
              Property[Property["OBJECTGROUP"] = 3] = "OBJECTGROUP";
              Property[Property["OBJECT"] = 4] = "OBJECT";
              Property[Property["TILE"] = 5] = "TILE";
            })(Property || (Property = {}));
            ccenum(Property);
            let TileFlag;
            (function (TileFlag) {
              TileFlag[TileFlag["HORIZONTAL"] = 2147483648] = "HORIZONTAL";
              TileFlag[TileFlag["VERTICAL"] = 1073741824] = "VERTICAL";
              TileFlag[TileFlag["DIAGONAL"] = 536870912] = "DIAGONAL";
              TileFlag[TileFlag["FLIPPED_ALL"] = 4026531840] = "FLIPPED_ALL";
              TileFlag[TileFlag["FLIPPED_MASK"] = 268435455] = "FLIPPED_MASK";
            })(TileFlag || (TileFlag = {}));
            ccenum(TileFlag);
            let StaggerAxis;
            (function (StaggerAxis) {
              StaggerAxis[StaggerAxis["STAGGERAXIS_X"] = 0] = "STAGGERAXIS_X";
              StaggerAxis[StaggerAxis["STAGGERAXIS_Y"] = 1] = "STAGGERAXIS_Y";
            })(StaggerAxis || (StaggerAxis = {}));
            ccenum(StaggerAxis);
            let StaggerIndex;
            (function (StaggerIndex) {
              StaggerIndex[StaggerIndex["STAGGERINDEX_ODD"] = 0] = "STAGGERINDEX_ODD";
              StaggerIndex[StaggerIndex["STAGGERINDEX_EVEN"] = 1] = "STAGGERINDEX_EVEN";
            })(StaggerIndex || (StaggerIndex = {}));
            ccenum(StaggerIndex);
            let RenderOrder;
            (function (RenderOrder) {
              RenderOrder[RenderOrder["RightDown"] = 0] = "RightDown";
              RenderOrder[RenderOrder["RightUp"] = 1] = "RightUp";
              RenderOrder[RenderOrder["LeftDown"] = 2] = "LeftDown";
              RenderOrder[RenderOrder["LeftUp"] = 3] = "LeftUp";
            })(RenderOrder || (RenderOrder = {}));
            ccenum(RenderOrder);
            let TMXObjectType;
            (function (TMXObjectType) {
              TMXObjectType[TMXObjectType["RECT"] = 0] = "RECT";
              TMXObjectType[TMXObjectType["ELLIPSE"] = 1] = "ELLIPSE";
              TMXObjectType[TMXObjectType["POLYGON"] = 2] = "POLYGON";
              TMXObjectType[TMXObjectType["POLYLINE"] = 3] = "POLYLINE";
              TMXObjectType[TMXObjectType["IMAGE"] = 4] = "IMAGE";
              TMXObjectType[TMXObjectType["TEXT"] = 5] = "TEXT";
            })(TMXObjectType || (TMXObjectType = {}));
            ccenum(TMXObjectType);
            class TMXTilesetInfo {
              constructor() {
                this.name = '';
                this.firstGid = 0;
                this.spacing = 0;
                this.margin = 0;
                this.sourceImage = void 0;
                this.imageName = null;
                this.imageOffset = null;
                this.imageSize = new Size(0, 0);
                this.tileOffset = new Vec2(0, 0);
                this._tileSize = new Size(0, 0);
                this.collection = false;
              }
              rectForGID(gid_, result) {
                const rect = result || new Rect(0, 0, 0, 0);
                rect.width = this._tileSize.width;
                rect.height = this._tileSize.height;
                let gid = gid_;
                gid &= TileFlag.FLIPPED_MASK;
                gid -= this.firstGid;
                if (this.imageOffset) {
                  rect.x = this.imageOffset.x;
                  rect.y = this.imageOffset.y;
                } else {
                  const max_x = Math.floor((this.imageSize.width - this.margin * 2 + this.spacing) / (this._tileSize.width + this.spacing));
                  rect.x = Math.round(gid % max_x * (this._tileSize.width + this.spacing) + this.margin);
                  rect.y = Math.round(Math.floor(gid / max_x) * (this._tileSize.height + this.spacing) + this.margin);
                }
                return rect;
              }
            }
            class TMXObjectGroupInfo {
              constructor() {
                this.properties = {};
                this.name = '';
                this.objects = [];
                this.visible = true;
                this.opacity = 0;
                this.color = new Color(255, 255, 255, 255);
                this.offset = new Vec2(0, 0);
                this.draworder = 'topdown';
                this.tintColor = null;
              }
              getProperties() {
                return this.properties;
              }
              setProperties(value) {
                this.properties = value;
              }
            }
            class TMXLayerInfo {
              constructor() {
                this.properties = {};
                this.name = '';
                this.layerSize = null;
                this.tiles = [];
                this.visible = true;
                this.opacity = 0;
                this.ownTiles = true;
                this.minGID = 100000;
                this.maxGID = 0;
                this.offset = new Vec2(0, 0);
                this.tintColor = null;
              }
              getProperties() {
                return this.properties;
              }
              setProperties(value) {
                this.properties = value;
              }
            }
            TMXLayerInfo.ATTRIB_NONE = 1 << 0;
            TMXLayerInfo.ATTRIB_BASE64 = 1 << 1;
            TMXLayerInfo.ATTRIB_GZIP = 1 << 2;
            TMXLayerInfo.ATTRIB_ZLIB = 1 << 3;
            class TMXImageLayerInfo {
              constructor() {
                this.name = '';
                this.visible = true;
                this.width = 0;
                this.height = 0;
                this.offset = new Vec2(0, 0);
                this.opacity = 0;
                this.trans = new Color(255, 255, 255, 255);
                this.sourceImage = void 0;
                this.tintColor = null;
              }
            }

            function uint8ArrayToUint32Array(uint8Arr) {
              if (uint8Arr.length % 4 !== 0) return null;
              const arrLen = uint8Arr.length / 4;
              const retArr = window.Uint32Array ? new Uint32Array(arrLen) : [];
              for (let i = 0; i < arrLen; i++) {
                const offset = i * 4;
                retArr[i] = uint8Arr[offset] + uint8Arr[offset + 1] * (1 << 8) + uint8Arr[offset + 2] * (1 << 16) + uint8Arr[offset + 3] * (1 << 24);
              }
              return retArr;
            }
            function strToHAlign(value) {
              const hAlign = Label.HorizontalAlign;
              switch (value) {
                case 'center':
                  return hAlign.CENTER;
                case 'right':
                  return hAlign.RIGHT;
                default:
                  return hAlign.LEFT;
              }
            }
            function strToVAlign(value) {
              const vAlign = Label.VerticalAlign;
              switch (value) {
                case 'center':
                  return vAlign.CENTER;
                case 'bottom':
                  return vAlign.BOTTOM;
                default:
                  return vAlign.TOP;
              }
            }
            function strToColor(value) {
              if (!value) {
                return new Color(0, 0, 0, 255);
              }
              value = value.indexOf('#') !== -1 ? value.substring(1) : value;
              if (value.length === 8) {
                const a = parseInt(value.substr(0, 2), 16) || 255;
                const r = parseInt(value.substr(2, 2), 16) || 0;
                const g = parseInt(value.substr(4, 2), 16) || 0;
                const b = parseInt(value.substr(6, 2), 16) || 0;
                return new Color(r, g, b, a);
              } else {
                const r = parseInt(value.substr(0, 2), 16) || 0;
                const g = parseInt(value.substr(2, 2), 16) || 0;
                const b = parseInt(value.substr(4, 2), 16) || 0;
                return new Color(r, g, b, 255);
              }
            }
            function getPropertyList(node, map) {
              const res = [];
              const properties = node.getElementsByTagName('properties');
              for (let i = 0; i < properties.length; ++i) {
                const property = properties[i].getElementsByTagName('property');
                for (let j = 0; j < property.length; ++j) {
                  res.push(property[j]);
                }
              }
              map = map || {};
              for (let i = 0; i < res.length; i++) {
                const element = res[i];
                const name = element.getAttribute('name');
                const type = element.getAttribute('type') || 'string';
                let value = element.getAttribute('value');
                if (type === 'int') {
                  value = parseInt(value);
                } else if (type === 'float') {
                  value = parseFloat(value);
                } else if (type === 'bool') {
                  value = value === 'true';
                } else if (type === 'color') {
                  value = strToColor(value);
                }
                map[name] = value;
              }
              return map;
            }
            class TMXMapInfo {
              get mapSize() {
                return this._mapSize;
              }
              get tileSize() {
                return this._tileSize;
              }
              constructor(tmxFile, tsxContentMap, spfTexturesMap, textureSizes, imageLayerTextures) {
                this.properties = {};
                this.orientation = null;
                this.parentElement = null;
                this.parentGID = 0;
                this.layerAttrs = 0;
                this.storingCharacters = false;
                this.currentString = null;
                this.renderOrder = RenderOrder.RightDown;
                this._supportVersion = [1, 4, 0];
                this._objectGroups = [];
                this._allChildren = [];
                this._mapSize = new Size(0, 0);
                this._tileSize = new Size(0, 0);
                this._layers = [];
                this._tilesets = [];
                this._imageLayers = [];
                this._tileProperties = new Map();
                this._tileAnimations = {};
                this._tsxContentMap = null;
                this._spriteFrameMap = null;
                this._spfSizeMap = {};
                this._staggerAxis = null;
                this._staggerIndex = null;
                this._hexSideLength = 0;
                this._imageLayerSPF = null;
                this.initWithXML(tmxFile, tsxContentMap, spfTexturesMap, textureSizes, imageLayerTextures);
              }
              getOrientation() {
                return this.orientation;
              }
              setOrientation(value) {
                this.orientation = value;
              }
              getStaggerAxis() {
                return this._staggerAxis;
              }
              setStaggerAxis(value) {
                this._staggerAxis = value;
              }
              getStaggerIndex() {
                return this._staggerIndex;
              }
              setStaggerIndex(value) {
                this._staggerIndex = value;
              }
              getHexSideLength() {
                return this._hexSideLength;
              }
              setHexSideLength(value) {
                this._hexSideLength = value;
              }
              getMapSize() {
                return new Size(this._mapSize.width, this._mapSize.height);
              }
              setMapSize(value) {
                this._mapSize.width = value.width;
                this._mapSize.height = value.height;
              }
              get mapWidth() {
                return this._mapSize.width;
              }
              set mapWidth(width) {
                this._mapSize.width = width;
              }
              get mapHeight() {
                return this._mapSize.height;
              }
              set mapHeight(height) {
                this._mapSize.height = height;
              }
              getTileSize() {
                return new Size(this._tileSize.width, this._tileSize.height);
              }
              setTileSize(value) {
                this._tileSize.width = value.width;
                this._tileSize.height = value.height;
              }
              get tileWidth() {
                return this._tileSize.width;
              }
              set tileWidth(width) {
                this._tileSize.width = width;
              }
              get tileHeight() {
                return this._tileSize.height;
              }
              set tileHeight(height) {
                this._tileSize.height = height;
              }
              getLayers() {
                return this._layers;
              }
              setLayers(value) {
                this._allChildren.push(value);
                this._layers.push(value);
              }
              getImageLayers() {
                return this._imageLayers;
              }
              setImageLayers(value) {
                this._allChildren.push(value);
                this._imageLayers.push(value);
              }
              getTilesets() {
                return this._tilesets;
              }
              setTilesets(value) {
                this._tilesets.push(value);
              }
              getObjectGroups() {
                return this._objectGroups;
              }
              setObjectGroups(value) {
                this._allChildren.push(value);
                this._objectGroups.push(value);
              }
              getAllChildren() {
                return this._allChildren;
              }
              getParentElement() {
                return this.parentElement;
              }
              setParentElement(value) {
                this.parentElement = value;
              }
              getParentGID() {
                return this.parentGID;
              }
              setParentGID(value) {
                this.parentGID = value;
              }
              getLayerAttribs() {
                return this.layerAttrs;
              }
              setLayerAttribs(value) {
                this.layerAttrs = value;
              }
              getStoringCharacters() {
                return this.storingCharacters;
              }
              setStoringCharacters(value) {
                this.storingCharacters = value;
              }
              getProperties() {
                return this.properties;
              }
              setProperties(value) {
                this.properties = value;
              }
              initWithXML(tmxString, tsxMap, spfTextureMap, textureSizes, imageLayerTextures) {
                this._tilesets.length = 0;
                this._layers.length = 0;
                this._imageLayers.length = 0;
                this._tsxContentMap = tsxMap;
                this._spriteFrameMap = spfTextureMap;
                this._imageLayerSPF = imageLayerTextures;
                this._spfSizeMap = textureSizes;
                this._objectGroups.length = 0;
                this._allChildren.length = 0;
                this.properties = {};
                this._tileProperties = new Map();
                this._tileAnimations = new Map();
                this.currentString = '';
                this.storingCharacters = false;
                this.layerAttrs = TMXLayerInfo.ATTRIB_NONE;
                this.parentElement = null;
                return this.parseXMLString(tmxString);
              }
              parseXMLString(xmlStr, tilesetFirstGid) {
                const parser = new SAXParser();
                const mapXML = parser.parse(xmlStr);
                let i;
                const map = mapXML.documentElement;
                const orientationStr = map.getAttribute('orientation');
                const staggerAxisStr = map.getAttribute('staggeraxis');
                const staggerIndexStr = map.getAttribute('staggerindex');
                const hexSideLengthStr = map.getAttribute('hexsidelength');
                const renderorderStr = map.getAttribute('renderorder');
                const version = map.getAttribute('version') || '1.0.0';
                if (map.nodeName === 'map') {
                  const versionArr = version.split('.');
                  const supportVersion = this._supportVersion;
                  for (i = 0; i < supportVersion.length; i++) {
                    const v = parseInt(versionArr[i]) || 0;
                    const sv = supportVersion[i];
                    if (sv < v) {
                      logID(7216, version);
                      break;
                    }
                  }
                  if (orientationStr === 'orthogonal') this.orientation = Orientation.ORTHO;else if (orientationStr === 'isometric') this.orientation = Orientation.ISO;else if (orientationStr === 'hexagonal') this.orientation = Orientation.HEX;else if (orientationStr !== null) logID(7217, orientationStr);
                  if (renderorderStr === 'right-up') {
                    this.renderOrder = RenderOrder.RightUp;
                  } else if (renderorderStr === 'left-up') {
                    this.renderOrder = RenderOrder.LeftUp;
                  } else if (renderorderStr === 'left-down') {
                    this.renderOrder = RenderOrder.LeftDown;
                  } else {
                    this.renderOrder = RenderOrder.RightDown;
                  }
                  if (staggerAxisStr === 'x') {
                    this.setStaggerAxis(StaggerAxis.STAGGERAXIS_X);
                  } else if (staggerAxisStr === 'y') {
                    this.setStaggerAxis(StaggerAxis.STAGGERAXIS_Y);
                  }
                  if (staggerIndexStr === 'odd') {
                    this.setStaggerIndex(StaggerIndex.STAGGERINDEX_ODD);
                  } else if (staggerIndexStr === 'even') {
                    this.setStaggerIndex(StaggerIndex.STAGGERINDEX_EVEN);
                  }
                  if (hexSideLengthStr) {
                    this.setHexSideLength(parseFloat(hexSideLengthStr));
                  }
                  let mapSize = new Size(0, 0);
                  mapSize.width = parseFloat(map.getAttribute('width'));
                  mapSize.height = parseFloat(map.getAttribute('height'));
                  this.setMapSize(mapSize);
                  mapSize = new Size(0, 0);
                  mapSize.width = parseFloat(map.getAttribute('tilewidth'));
                  mapSize.height = parseFloat(map.getAttribute('tileheight'));
                  this.setTileSize(mapSize);
                  this.properties = getPropertyList(map);
                }
                let tilesets = map.getElementsByTagName('tileset');
                if (map.nodeName !== 'map') {
                  tilesets = [];
                  tilesets.push(map);
                }
                for (i = 0; i < tilesets.length; i++) {
                  const curTileset = tilesets[i];
                  const tsxName = curTileset.getAttribute('source');
                  if (tsxName) {
                    const currentFirstGID = parseInt(curTileset.getAttribute('firstgid'));
                    const tsxXmlString = this._tsxContentMap[tsxName];
                    if (tsxXmlString) {
                      this.parseXMLString(tsxXmlString, currentFirstGID);
                    }
                  } else {
                    const images = curTileset.getElementsByTagName('image');
                    const collection = images.length > 1;
                    const firstImage = images[0];
                    let firstImageName = firstImage.getAttribute('source');
                    firstImageName = firstImageName.replace(/\\/g, '/');
                    const tiles = curTileset.getElementsByTagName('tile');
                    const tileCount = tiles && tiles.length || 1;
                    let tile = null;
                    const tilesetName = curTileset.getAttribute('name') || '';
                    const tilesetSpacing = parseInt(curTileset.getAttribute('spacing')) || 0;
                    const tilesetMargin = parseInt(curTileset.getAttribute('margin')) || 0;
                    const fgid = tilesetFirstGid || parseInt(curTileset.getAttribute('firstgid')) || 0;
                    const tilesetSize = new Size(0, 0);
                    tilesetSize.width = parseFloat(curTileset.getAttribute('tilewidth'));
                    tilesetSize.height = parseFloat(curTileset.getAttribute('tileheight'));
                    const curTileOffset = curTileset.getElementsByTagName('tileoffset')[0];
                    let tileOffsetX = 0;
                    let tileOffsetY = 0;
                    if (curTileOffset) {
                      tileOffsetX = parseFloat(curTileOffset.getAttribute('x')) || 0;
                      tileOffsetY = parseFloat(curTileOffset.getAttribute('y')) || 0;
                    }
                    let tileset = null;
                    for (let tileIdx = 0; tileIdx < tileCount; tileIdx++) {
                      const curImage = images[tileIdx] ? images[tileIdx] : firstImage;
                      if (!curImage) continue;
                      let curImageName = curImage.getAttribute('source');
                      curImageName = curImageName.replace(/\\/g, '/');
                      if (!tileset || collection) {
                        tileset = new TMXTilesetInfo();
                        tileset.name = tilesetName;
                        tileset.firstGid = fgid & TileFlag.FLIPPED_MASK;
                        tileset.tileOffset.x = tileOffsetX;
                        tileset.tileOffset.y = tileOffsetY;
                        tileset.collection = collection;
                        if (!collection) {
                          tileset.imageName = curImageName;
                          tileset.imageSize.width = parseFloat(curImage.getAttribute('width')) || 0;
                          tileset.imageSize.height = parseFloat(curImage.getAttribute('height')) || 0;
                          tileset.sourceImage = this._spriteFrameMap[curImageName];
                          if (!tileset.sourceImage) {
                            const nameWithPostfix = TMXMapInfo.getNameWithPostfix(curImageName);
                            tileset.imageName = nameWithPostfix;
                            tileset.sourceImage = this._spriteFrameMap[nameWithPostfix];
                            if (!tileset.sourceImage) {
                              const shortName = TMXMapInfo.getShortName(curImageName);
                              tileset.imageName = shortName;
                              tileset.sourceImage = this._spriteFrameMap[shortName];
                              if (!tileset.sourceImage) {
                                console.error(`[error]: ${shortName} not find in [${Object.keys(this._spriteFrameMap).join(', ')}]`);
                                errorID(7221, curImageName);
                                console.warn(`Please try asset type of ${curImageName} to 'sprite-frame'`);
                              }
                            }
                          }
                        }
                        tileset.spacing = tilesetSpacing;
                        tileset.margin = tilesetMargin;
                        tileset._tileSize.width = tilesetSize.width;
                        tileset._tileSize.height = tilesetSize.height;
                        this.setTilesets(tileset);
                      }
                      tile = tiles && tiles[tileIdx];
                      if (!tile) {
                        continue;
                      }
                      this.parentGID = fgid + (parseInt(tile.getAttribute('id')) || 0);
                      const tileImages = tile.getElementsByTagName('image');
                      if (tile.hasAttribute('x') && tile.hasAttribute('y')) {
                        tileset.imageOffset = new Vec2(parseFloat(tile.getAttribute('x')) || 0, parseFloat(tile.getAttribute('y')) || 0);
                      }
                      const hastilesize = tile.hasAttribute('width') && tile.hasAttribute('height');
                      if (hastilesize) {
                        tileset._tileSize.width = parseFloat(tile.getAttribute('width')) || 0;
                        tileset._tileSize.height = parseFloat(tile.getAttribute('height')) || 0;
                      }
                      if (tileImages && tileImages.length > 0) {
                        const image = tileImages[0];
                        let imageName = image.getAttribute('source');
                        imageName = imageName.replace(/\\/g, '/');
                        tileset.imageName = imageName;
                        tileset.imageSize.width = parseFloat(image.getAttribute('width')) || 0;
                        tileset.imageSize.height = parseFloat(image.getAttribute('height')) || 0;
                        if (!hastilesize) {
                          tileset._tileSize.width = tileset.imageSize.width;
                          tileset._tileSize.height = tileset.imageSize.height;
                        }
                        tileset.sourceImage = this._spriteFrameMap[imageName];
                        if (!tileset.sourceImage) {
                          const nameWithPostfix = TMXMapInfo.getNameWithPostfix(imageName);
                          tileset.imageName = nameWithPostfix;
                          tileset.sourceImage = this._spriteFrameMap[nameWithPostfix];
                          if (!tileset.sourceImage) {
                            const shortName = TMXMapInfo.getShortName(imageName);
                            tileset.imageName = shortName;
                            tileset.sourceImage = this._spriteFrameMap[shortName];
                            if (!tileset.sourceImage) {
                              errorID(7221, imageName);
                              console.warn(`Please try asset type of ${imageName} to 'sprite-frame'`);
                            }
                          }
                        }
                        tileset.firstGid = this.parentGID & TileFlag.FLIPPED_MASK;
                      }
                      const pid = (TileFlag.FLIPPED_MASK & this.parentGID) >>> 0;
                      this._tileProperties.set(pid, getPropertyList(tile));
                      const animations = tile.getElementsByTagName('animation');
                      if (animations && animations.length > 0) {
                        const animation = animations[0];
                        const framesData = animation.getElementsByTagName('frame');
                        const animationProp = {
                          frames: [],
                          dt: 0,
                          frameIdx: 0
                        };
                        this._tileAnimations.set(pid, animationProp);
                        const frames = animationProp.frames;
                        for (let frameIdx = 0; frameIdx < framesData.length; frameIdx++) {
                          const frame = framesData[frameIdx];
                          const tileid = fgid + (parseInt(frame.getAttribute('tileid')) || 0);
                          const duration = parseFloat(frame.getAttribute('duration')) || 0;
                          frames.push({
                            tileid: tileid,
                            duration: duration / 1000,
                            grid: null
                          });
                        }
                      }
                    }
                  }
                }
                const childNodes = map.childNodes;
                for (i = 0; i < childNodes.length; i++) {
                  const childNode = childNodes[i];
                  if (this._shouldIgnoreNode(childNode)) {
                    continue;
                  }
                  if (childNode.nodeName === 'imagelayer') {
                    const imageLayer = this._parseImageLayer(childNode);
                    if (imageLayer) {
                      this.setImageLayers(imageLayer);
                    }
                  }
                  if (childNode.nodeName === 'layer') {
                    const layer = this._parseLayer(childNode);
                    this.setLayers(layer);
                  }
                  if (childNode.nodeName === 'objectgroup') {
                    const objectGroup = this._parseObjectGroup(childNode);
                    this.setObjectGroups(objectGroup);
                  }
                }
                return map;
              }
              _shouldIgnoreNode(node) {
                return node.nodeType === 3 || node.nodeType === 8 || node.nodeType === 4;
              }
              _parseImageLayer(selLayer) {
                const datas = selLayer.getElementsByTagName('image');
                if (!datas || datas.length === 0) return null;
                const imageLayer = new TMXImageLayerInfo();
                imageLayer.name = selLayer.getAttribute('name');
                imageLayer.offset.x = parseFloat(selLayer.getAttribute('offsetx')) || 0;
                imageLayer.offset.y = parseFloat(selLayer.getAttribute('offsety')) || 0;
                const visible = selLayer.getAttribute('visible');
                imageLayer.visible = !(visible === '0');
                const opacity = selLayer.getAttribute('opacity');
                imageLayer.opacity = opacity ? Math.round(255 * parseFloat(opacity)) : 255;
                const tintColor = selLayer.getAttribute('tintcolor');
                imageLayer.tintColor = tintColor ? strToColor(tintColor) : null;
                const data = datas[0];
                const source = data.getAttribute('source');
                imageLayer.sourceImage = this._imageLayerSPF[source];
                imageLayer.width = parseInt(data.getAttribute('width')) || 0;
                imageLayer.height = parseInt(data.getAttribute('height')) || 0;
                imageLayer.trans = strToColor(data.getAttribute('trans'));
                if (!imageLayer.sourceImage) {
                  errorID(7221, source);
                  console.warn(`Please try asset type of ${source} to 'sprite-frame'`);
                  return null;
                }
                return imageLayer;
              }
              _parseLayer(selLayer) {
                const data = selLayer.getElementsByTagName('data')[0];
                const layer = new TMXLayerInfo();
                layer.name = selLayer.getAttribute('name');
                const layerSize = new Size(0, 0);
                layerSize.width = parseFloat(selLayer.getAttribute('width'));
                layerSize.height = parseFloat(selLayer.getAttribute('height'));
                layer.layerSize = layerSize;
                const visible = selLayer.getAttribute('visible');
                layer.visible = !(visible === '0');
                const opacity = selLayer.getAttribute('opacity');
                if (opacity) layer.opacity = Math.round(255 * parseFloat(opacity));else layer.opacity = 255;
                layer.offset = new Vec2(parseFloat(selLayer.getAttribute('offsetx')) || 0, parseFloat(selLayer.getAttribute('offsety')) || 0);
                const tintColor = selLayer.getAttribute('tintcolor');
                layer.tintColor = tintColor ? strToColor(tintColor) : null;
                let nodeValue = '';
                for (let j = 0; j < data.childNodes.length; j++) {
                  nodeValue += data.childNodes[j].nodeValue;
                }
                nodeValue = nodeValue.trim();
                const compression = data.getAttribute('compression');
                const encoding = data.getAttribute('encoding');
                if (compression && compression !== 'gzip' && compression !== 'zlib') {
                  logID(7218);
                  return null;
                }
                let tiles;
                switch (compression) {
                  case 'gzip':
                    tiles = codec.unzipBase64AsArray(nodeValue, 4);
                    break;
                  case 'zlib':
                    {
                      const inflator = new _p.Inflate(codec.Base64.decodeAsArray(nodeValue, 1));
                      tiles = uint8ArrayToUint32Array(inflator.decompress());
                      break;
                    }
                  case null:
                  case '':
                    if (encoding === 'base64') tiles = codec.Base64.decodeAsArray(nodeValue, 4);else if (encoding === 'csv') {
                      tiles = [];
                      const csvTiles = nodeValue.split(',');
                      for (let csvIdx = 0; csvIdx < csvTiles.length; csvIdx++) tiles.push(parseInt(csvTiles[csvIdx]));
                    } else {
                      const selDataTiles = data.getElementsByTagName('tile');
                      tiles = [];
                      for (let xmlIdx = 0; xmlIdx < selDataTiles.length; xmlIdx++) tiles.push(parseInt(selDataTiles[xmlIdx].getAttribute('gid')));
                    }
                    break;
                  default:
                    if (this.layerAttrs === TMXLayerInfo.ATTRIB_NONE) logID(7219);
                    break;
                }
                if (tiles) {
                  layer.tiles = new Uint32Array(tiles);
                }
                layer.properties = getPropertyList(selLayer);
                return layer;
              }
              _parseObjectGroup(selGroup) {
                const objectGroup = new TMXObjectGroupInfo();
                objectGroup.name = selGroup.getAttribute('name') || '';
                objectGroup.offset = new Vec2(parseFloat(selGroup.getAttribute('offsetx')), parseFloat(selGroup.getAttribute('offsety')));
                const opacity = selGroup.getAttribute('opacity');
                if (opacity) objectGroup.opacity = Math.round(255 * parseFloat(opacity));else objectGroup.opacity = 255;
                const tintColor = selGroup.getAttribute('tintcolor');
                objectGroup.tintColor = tintColor ? strToColor(tintColor) : null;
                const visible = selGroup.getAttribute('visible');
                if (visible && parseInt(visible) === 0) objectGroup.visible = false;
                const color = selGroup.getAttribute('color');
                if (color) objectGroup.color.fromHEX(color);
                const draworder = selGroup.getAttribute('draworder');
                if (draworder) objectGroup.draworder = draworder;
                objectGroup.setProperties(getPropertyList(selGroup));
                const objects = selGroup.getElementsByTagName('object');
                if (objects) {
                  for (let j = 0; j < objects.length; j++) {
                    const selObj = objects[j];
                    const objectProp = {};
                    objectProp.id = selObj.getAttribute('id') || j;
                    objectProp.name = selObj.getAttribute('name') || '';
                    objectProp.width = parseFloat(selObj.getAttribute('width')) || 0;
                    objectProp.height = parseFloat(selObj.getAttribute('height')) || 0;
                    objectProp.x = parseFloat(selObj.getAttribute('x')) || 0;
                    objectProp.y = parseFloat(selObj.getAttribute('y')) || 0;
                    objectProp.rotation = parseFloat(selObj.getAttribute('rotation')) || 0;
                    getPropertyList(selObj, objectProp);
                    const visibleAttr = selObj.getAttribute('visible');
                    objectProp.visible = !(visibleAttr && parseInt(visibleAttr) === 0);
                    const texts = selObj.getElementsByTagName('text');
                    if (texts && texts.length > 0) {
                      const text = texts[0];
                      objectProp.type = TMXObjectType.TEXT;
                      objectProp.wrap = text.getAttribute('wrap') === '1';
                      objectProp.color = strToColor(text.getAttribute('color'));
                      objectProp.halign = strToHAlign(text.getAttribute('halign'));
                      objectProp.valign = strToVAlign(text.getAttribute('valign'));
                      objectProp.pixelsize = parseInt(text.getAttribute('pixelsize')) || 16;
                      objectProp.text = text.childNodes[0].nodeValue;
                    }
                    const gid = selObj.getAttribute('gid');
                    if (gid) {
                      objectProp.gid = parseInt(gid);
                      objectProp.type = TMXObjectType.IMAGE;
                    }
                    const ellipse = selObj.getElementsByTagName('ellipse');
                    if (ellipse && ellipse.length > 0) {
                      objectProp.type = TMXObjectType.ELLIPSE;
                    }
                    const polygonProps = selObj.getElementsByTagName('polygon');
                    if (polygonProps && polygonProps.length > 0) {
                      objectProp.type = TMXObjectType.POLYGON;
                      const selPgPointStr = polygonProps[0].getAttribute('points');
                      if (selPgPointStr) objectProp.points = this._parsePointsString(selPgPointStr);
                    }
                    const polylineProps = selObj.getElementsByTagName('polyline');
                    if (polylineProps && polylineProps.length > 0) {
                      objectProp.type = TMXObjectType.POLYLINE;
                      const selPlPointStr = polylineProps[0].getAttribute('points');
                      if (selPlPointStr) objectProp.polylinePoints = this._parsePointsString(selPlPointStr);
                    }
                    if (!objectProp.type) {
                      objectProp.type = TMXObjectType.RECT;
                    }
                    objectGroup.objects.push(objectProp);
                  }
                  if (draworder !== 'index') {
                    objectGroup.objects.sort((a, b) => a.y - b.y);
                  }
                }
                return objectGroup;
              }
              _parsePointsString(pointsString) {
                if (!pointsString) return null;
                const points = [];
                const pointsStr = pointsString.split(' ');
                for (let i = 0; i < pointsStr.length; i++) {
                  const selPointStr = pointsStr[i].split(',');
                  points.push({
                    x: parseFloat(selPointStr[0]),
                    y: parseFloat(selPointStr[1])
                  });
                }
                return points;
              }
              setTileAnimations(animations) {
                this._tileAnimations = animations;
              }
              getTileAnimations() {
                return this._tileAnimations;
              }
              getTileProperties() {
                return this._tileProperties;
              }
              setTileProperties(tileProperties) {
                this._tileProperties = tileProperties;
              }
              getCurrentString() {
                return this.currentString;
              }
              setCurrentString(currentString) {
                this.currentString = currentString;
              }
              static getNameWithPostfix(name) {
                name = name.replace(/\\/g, '/');
                const slashIndex = name.lastIndexOf('/') + 1;
                const strLen = name.length;
                return name.substring(slashIndex, strLen);
              }
              static getShortName(name) {
                name = name.replace(/\\/g, '/');
                const slashIndex = name.lastIndexOf('/') + 1;
                let dotIndex = name.lastIndexOf('.');
                dotIndex = dotIndex < 0 ? name.length : dotIndex;
                return name.substring(slashIndex, dotIndex);
              }
            }

            var _dec$4, _dec2$4, _dec3$3, _dec4$1, _dec5$1, _dec6$1, _dec7$1, _class$4, _class2$3, _initializer$2, _initializer2$2;
            let TiledTile = exports('TiledTile', (_dec$4 = ccclass('cc.TiledTile'), _dec2$4 = requireComponent(UITransform), _dec3$3 = type(CCInteger), _dec4$1 = type(CCInteger), _dec5$1 = type(CCInteger), _dec6$1 = type(CCInteger), _dec7$1 = type(CCInteger), _dec$4(_class$4 = _dec2$4(_class$4 = (_class2$3 = class TiledTile extends Component {
              constructor() {
                super();
                this._layer = null;
                this._x = _initializer$2 && _initializer$2();
                this._y = _initializer2$2 && _initializer2$2();
              }
              get x() {
                return this._x;
              }
              set x(value) {
                if (value === this._x) return;
                if (this._layer && this._layer.isInvalidPosition(value, this._y)) {
                  warn(`Invalid x, the valid value is between [%s] ~ [%s]`, 0, this._layer.layerSize.width);
                  return;
                }
                this._resetTile();
                this._x = value;
                this.updateInfo();
              }
              get y() {
                return this._y;
              }
              set y(value) {
                if (value === this._y) return;
                if (this._layer && this._layer.isInvalidPosition(this._x, value)) {
                  warn(`Invalid y, the valid value is between [%s] ~ [%s]`, 0, this._layer.layerSize.height);
                  return;
                }
                this._resetTile();
                this._y = value;
                this.updateInfo();
              }
              get grid() {
                if (this._layer) {
                  return this._layer.getTileGIDAt(this._x, this._y);
                }
                return 0;
              }
              set grid(value) {
                if (this._layer) {
                  this._layer.setTileGIDAt(value, this._x, this._y);
                }
              }
              onEnable() {
                const parent = this.node.parent;
                this._layer = parent.getComponent('cc.TiledLayer');
                this.node.on(NodeEventType.TRANSFORM_CHANGED, this._updatePosition, this);
                this.node.on(NodeEventType.SIZE_CHANGED, this._updatePosition, this);
                this._resetTile();
                this.updateInfo();
              }
              onDisable() {
                this._resetTile();
                this.node.off(NodeEventType.TRANSFORM_CHANGED, this._updatePosition, this);
                this.node.off(NodeEventType.SIZE_CHANGED, this._updatePosition, this);
              }
              _resetTile() {
                if (this._layer && this._layer.getTiledTileAt(this._x, this._y) === this) {
                  this._layer.setTiledTileAt(this._x, this._y, null);
                }
              }
              updateInfo() {
                if (!this._layer) return;
                const x = this._x;
                const y = this._y;
                if (this._layer.getTiledTileAt(x, y)) {
                  warn('There is already a TiledTile at [%s, %s]', x, y);
                  return;
                }
                const p = this._layer.getPositionAt(x, y);
                this.node.setPosition(p.x, p.y);
                this._layer.setTiledTileAt(x, y, this);
                this._layer.markForUpdateRenderData();
              }
              _updatePosition() {
                this._layer.markForUpdateRenderData();
              }
            }, (_initializer$2 = applyDecoratedInitializer(_class2$3.prototype, "_x", [_dec3$3], function () {
              return 0;
            }), _initializer2$2 = applyDecoratedInitializer(_class2$3.prototype, "_y", [_dec4$1], function () {
              return 0;
            }), _applyDecoratedDescriptor(_class2$3.prototype, "x", [_dec5$1], Object.getOwnPropertyDescriptor(_class2$3.prototype, "x"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "y", [_dec6$1], Object.getOwnPropertyDescriptor(_class2$3.prototype, "y"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "grid", [_dec7$1], Object.getOwnPropertyDescriptor(_class2$3.prototype, "grid"), _class2$3.prototype)), _class2$3)) || _class$4) || _class$4));

            function fillTextureGrids(tileset, texGrids, spFrame) {
              const spf = spFrame || tileset.sourceImage;
              const tex = spf.texture;
              const collection = tileset.collection;
              if (!tileset.imageSize.width || !tileset.imageSize.height) {
                const sourceImage = tileset.sourceImage;
                tileset.imageSize.width = sourceImage.width;
                tileset.imageSize.height = sourceImage.height;
              }
              const imageWidth = tileset.imageSize.width;
              const imageHeight = tileset.imageSize.height;
              const tw = tileset._tileSize.width;
              const th = tileset._tileSize.height;
              const texWidth = spf.width;
              const texHeight = spf.height;
              const spacing = tileset.spacing;
              const margin = tileset.margin;
              let count = 1;
              if (!collection) {
                const cols = Math.floor((imageWidth - margin * 2 + spacing) / (tw + spacing));
                const rows = Math.floor((imageHeight - margin * 2 + spacing) / (th + spacing));
                count = Math.max(1, rows * cols);
              }
              const firstGid = tileset.firstGid;
              let grid = null;
              let override = !!texGrids.get(firstGid);
              const maxGid = tileset.firstGid + count;
              let gid = firstGid;
              for (; gid < maxGid; ++gid) {
                if (override && !texGrids.get(gid)) {
                  override = false;
                }
                if (!override && texGrids.get(gid)) {
                  break;
                }
                grid = {
                  tileset,
                  x: 0,
                  y: 0,
                  width: tw,
                  height: th,
                  t: 0,
                  l: 0,
                  r: 0,
                  b: 0,
                  cx: 0,
                  cy: 0,
                  offsetX: 0,
                  offsetY: 0,
                  rotated: false,
                  gid: gid,
                  spriteFrame: spf,
                  texture: tex
                };
                tileset.rectForGID(gid, grid);
                if (!spFrame || count > 1 || tileset.imageOffset) {
                  if (spFrame) {
                    grid._name = spFrame.name;
                    const lm = spFrame.unbiasUV[0];
                    const bm = spFrame.rotated ? spFrame.unbiasUV[1] : spFrame.unbiasUV[5];
                    grid.l = lm + (grid.x + 0.5) / texWidth;
                    grid.t = bm + (grid.y + 0.5) / texHeight;
                    grid.r = lm + (grid.x + grid.width - 0.5) / texWidth;
                    grid.b = bm + (grid.y + grid.height - 0.5) / texHeight;
                    grid._rect = new Rect(grid.x, grid.y, grid.width, grid.height);
                  } else {
                    grid.l = grid.x / texWidth;
                    grid.t = grid.y / texHeight;
                    grid.r = (grid.x + grid.width) / texWidth;
                    grid.b = (grid.y + grid.height) / texHeight;
                    grid._rect = new Rect(grid.x, grid.y, grid.width, grid.height);
                  }
                } else if (spFrame.rotated) {
                  grid._rotated = true;
                  grid._name = spFrame.name;
                  grid._rect = spFrame.getRect();
                  grid.l = spFrame.unbiasUV[0];
                  grid.t = spFrame.unbiasUV[1];
                  grid.r = spFrame.unbiasUV[4];
                  grid.b = spFrame.unbiasUV[3];
                } else {
                  grid._name = spFrame.name;
                  grid._rect = spFrame.getRect();
                  grid.l = spFrame.unbiasUV[0];
                  grid.t = spFrame.unbiasUV[5];
                  grid.r = spFrame.unbiasUV[2];
                  grid.b = spFrame.unbiasUV[1];
                }
                grid.cx = (grid.l + grid.r) / 2;
                grid.cy = (grid.t + grid.b) / 2;
                texGrids.set(gid, grid);
              }
            }

            var _dec$3, _class$3, _dec2$3, _class3$1;
            const _mat4_temp$1 = new Mat4();
            const _vec2_temp = new Vec2();
            const _vec3_temp = new Vec3();
            const _vec3_temp2 = new Vec3();
            const _tempRowCol = {
              row: 0,
              col: 0
            };
            let TiledUserNodeData = exports('TiledUserNodeData', (_dec$3 = ccclass('cc.TiledUserNodeData'), _dec$3(_class$3 = class TiledUserNodeData extends Component {
              constructor() {
                super();
                this._index = -1;
                this._row = -1;
                this._col = -1;
                this._tiledLayer = null;
              }
            }) || _class$3));
            let TiledLayer = exports('TiledLayer', (_dec2$3 = ccclass('cc.TiledLayer'), _dec2$3(_class3$1 = class TiledLayer extends UIRenderer {
              get cullingRect() {
                return this._cullingRect;
              }
              get rightTop() {
                return this._rightTop;
              }
              get layerSize() {
                return this._layerSize;
              }
              get tiledDataArray() {
                return this._tiledDataArray;
              }
              get leftDownToCenterX() {
                return this._leftDownToCenterX;
              }
              get leftDownToCenterY() {
                return this._leftDownToCenterY;
              }
              requestDrawInfo(idx) {
                if (!this._drawInfoList[idx]) {
                  this._drawInfoList[idx] = new RenderDrawInfo();
                  this._drawInfoList[idx].setDrawInfoType(RenderDrawInfoType.MIDDLEWARE);
                }
                return this._drawInfoList[idx];
              }
              constructor() {
                super();
                this._userNodeGrid = {};
                this._userNodeMap = {};
                this._userNodeDirty = false;
                this.tiledTiles = [];
                this._viewPort = {
                  x: -1,
                  y: -1,
                  width: -1,
                  height: -1
                };
                this._cullingRect = {
                  leftDown: {
                    row: -1,
                    col: -1
                  },
                  rightTop: {
                    row: -1,
                    col: -1
                  }
                };
                this._cullingDirty = true;
                this._rightTop = {
                  row: -1,
                  col: -1
                };
                this._layerInfo = null;
                this._mapInfo = null;
                this._topOffset = 0;
                this._downOffset = 0;
                this._leftOffset = 0;
                this._rightOffset = 0;
                this.tiles = [];
                this.vertices = [];
                this._verticesDirty = true;
                this._layerName = '';
                this._layerSize = void 0;
                this._minGID = void 0;
                this._maxGID = void 0;
                this._layerOrientation = null;
                this._opacity = void 0;
                this._tintColor = void 0;
                this.texGrids = null;
                this._textures = [];
                this._tilesets = [];
                this._leftDownToCenterX = 0;
                this._leftDownToCenterY = 0;
                this._hasTiledNodeGrid = false;
                this._hasAniGrid = false;
                this._animations = null;
                this._enableCulling = void 0;
                this.colorChanged = false;
                this._properties = void 0;
                this.renderOrder = void 0;
                this._staggerAxis = void 0;
                this._staggerIndex = void 0;
                this._hexSideLength = void 0;
                this._mapTileSize = void 0;
                this._odd_even = void 0;
                this._diffX1 = void 0;
                this._diffY1 = void 0;
                this._useAutomaticVertexZ = void 0;
                this._vertexZvalue = void 0;
                this._offset = void 0;
                this._tiledDataArray = [];
                this._cameraNode = void 0;
                this._drawInfoList = [];
                this._tiledDataArrayIdx = 0;
              }
              hasTiledNode() {
                return this._hasTiledNodeGrid;
              }
              hasAnimation() {
                return this._hasAniGrid;
              }
              set enableCulling(value) {
                if (this._enableCulling !== value) {
                  this._enableCulling = value;
                  this._cullingDirty = true;
                  this.markForUpdateRenderData();
                }
              }
              get enableCulling() {
                return this._enableCulling;
              }
              addUserNode(node) {
                let dataComp = node.getComponent(TiledUserNodeData);
                if (dataComp) {
                  warn('CCTiledLayer:addUserNode node has been added');
                  return false;
                }
                dataComp = node.addComponent(TiledUserNodeData);
                node.parent = this.node;
                this._userNodeMap[node.uuid] = dataComp;
                dataComp._row = -1;
                dataComp._col = -1;
                dataComp._tiledLayer = this;
                this._nodeLocalPosToLayerPos(node.getPosition(), _vec2_temp);
                this._positionToRowCol(_vec2_temp.x, _vec2_temp.y, _tempRowCol);
                this._addUserNodeToGrid(dataComp, _tempRowCol);
                this._updateCullingOffsetByUserNode(node);
                node.on(NodeEventType.TRANSFORM_CHANGED, this._userNodePosChange, dataComp);
                node.on(NodeEventType.SIZE_CHANGED, this._userNodeSizeChange, dataComp);
                return true;
              }
              removeUserNode(node) {
                const dataComp = node.getComponent(TiledUserNodeData);
                if (!dataComp) {
                  warn('CCTiledLayer:removeUserNode node is not exist');
                  return false;
                }
                node.off(NodeEventType.TRANSFORM_CHANGED, this._userNodePosChange, dataComp);
                node.off(NodeEventType.SIZE_CHANGED, this._userNodeSizeChange, dataComp);
                this._removeUserNodeFromGrid(dataComp);
                delete this._userNodeMap[node.uuid];
                node._removeComponent(dataComp);
                dataComp.destroy();
                node.removeFromParent();
                return true;
              }
              destroyUserNode(node) {
                this.removeUserNode(node);
                node.destroy();
              }
              _nodeLocalPosToLayerPos(nodePos, out) {
                out.x = nodePos.x + this._leftDownToCenterX;
                out.y = nodePos.y + this._leftDownToCenterY;
              }
              getNodesByRowCol(row, col) {
                const rowData = this._userNodeGrid[row];
                if (!rowData) return null;
                return rowData[col];
              }
              getNodesCountByRow(row) {
                const rowData = this._userNodeGrid[row];
                if (!rowData) return 0;
                return rowData.count;
              }
              _updateAllUserNode() {
                this._userNodeGrid = {};
                for (const dataId in this._userNodeMap) {
                  const dataComp = this._userNodeMap[dataId];
                  this._nodeLocalPosToLayerPos(dataComp.node.getPosition(), _vec2_temp);
                  this._positionToRowCol(_vec2_temp.x, _vec2_temp.y, _tempRowCol);
                  this._addUserNodeToGrid(dataComp, _tempRowCol);
                  this._updateCullingOffsetByUserNode(dataComp.node);
                }
              }
              _updateCullingOffsetByUserNode(node_) {
                const node = node_._uiProps.uiTransformComp.contentSize;
                if (this._topOffset < node.height) {
                  this._topOffset = node.height;
                }
                if (this._downOffset < node.height) {
                  this._downOffset = node.height;
                }
                if (this._leftOffset < node.width) {
                  this._leftOffset = node.width;
                }
                if (this._rightOffset < node.width) {
                  this._rightOffset = node.width;
                }
              }
              _userNodeSizeChange() {
                const dataComp = this;
                const node = dataComp.node;
                const self = dataComp._tiledLayer;
                self._updateCullingOffsetByUserNode(node);
                self._userNodeDirty = true;
                self.markForUpdateRenderData();
              }
              _userNodePosChange() {
                const dataComp = this;
                const node = dataComp.node;
                const self = dataComp._tiledLayer;
                self._nodeLocalPosToLayerPos(node.getPosition(), _vec2_temp);
                self._positionToRowCol(_vec2_temp.x, _vec2_temp.y, _tempRowCol);
                self._limitInLayer(_tempRowCol);
                if (_tempRowCol.row === dataComp._row && _tempRowCol.col === dataComp._col) return;
                self._removeUserNodeFromGrid(dataComp);
                self._addUserNodeToGrid(dataComp, _tempRowCol);
              }
              _removeUserNodeFromGrid(dataComp) {
                const row = dataComp._row;
                const col = dataComp._col;
                const index = dataComp._index;
                const rowData = this._userNodeGrid[row];
                const colData = rowData && rowData[col];
                if (colData) {
                  rowData.count--;
                  colData.count--;
                  colData.list[index] = null;
                  if (colData.count <= 0) {
                    colData.list.length = 0;
                    colData.count = 0;
                  }
                }
                dataComp._row = -1;
                dataComp._col = -1;
                dataComp._index = -1;
                this._userNodeDirty = true;
                this.markForUpdateRenderData();
              }
              _limitInLayer(rowCol) {
                const row = rowCol.row;
                const col = rowCol.col;
                if (row < 0) rowCol.row = 0;
                if (row > this._rightTop.row) rowCol.row = this._rightTop.row;
                if (col < 0) rowCol.col = 0;
                if (col > this._rightTop.col) rowCol.col = this._rightTop.col;
              }
              _addUserNodeToGrid(dataComp, tempRowCol) {
                const row = tempRowCol.row;
                const col = tempRowCol.col;
                const rowData = this._userNodeGrid[row] = this._userNodeGrid[row] || {
                  count: 0
                };
                const colData = rowData[col] = rowData[col] || {
                  count: 0,
                  list: []
                };
                dataComp._row = row;
                dataComp._col = col;
                dataComp._index = colData.list.length;
                rowData.count++;
                colData.count++;
                colData.list.push(dataComp);
                this._userNodeDirty = true;
              }
              isUserNodeDirty() {
                return this._userNodeDirty;
              }
              setUserNodeDirty(value) {
                this._userNodeDirty = value;
              }
              _reinstallCamera() {
                const camera = director.root.batcher2D.getFirstRenderCamera(this.node);
                const cameraNode = camera === null || camera === void 0 ? void 0 : camera.node;
                if (this._cameraNode !== cameraNode) {
                  this._uninstallCamera();
                  if (cameraNode) {
                    cameraNode.on(NodeEventType.TRANSFORM_CHANGED, this.updateCulling, this);
                    cameraNode.on(NodeEventType.SIZE_CHANGED, this.updateCulling, this);
                    this._cameraNode = cameraNode;
                  }
                }
                return camera;
              }
              _uninstallCamera() {
                if (this._cameraNode) {
                  this._cameraNode.off(NodeEventType.TRANSFORM_CHANGED, this.updateCulling, this);
                  this._cameraNode.off(NodeEventType.SIZE_CHANGED, this.updateCulling, this);
                  delete this._cameraNode;
                }
              }
              onEnable() {
                super.onEnable();
                this.node.on(NodeEventType.ANCHOR_CHANGED, this._syncAnchorPoint, this);
                this.node.on(NodeEventType.TRANSFORM_CHANGED, this.updateCulling, this);
                this.node.on(NodeEventType.SIZE_CHANGED, this.updateCulling, this);
                this.node.parent.on(NodeEventType.TRANSFORM_CHANGED, this.updateCulling, this);
                this.node.parent.on(NodeEventType.SIZE_CHANGED, this.updateCulling, this);
                this.markForUpdateRenderData();
                this.scheduleOnce(this.updateCulling.bind(this));
              }
              onDisable() {
                var _this$node$parent, _this$node$parent2;
                super.onDisable();
                (_this$node$parent = this.node.parent) === null || _this$node$parent === void 0 ? void 0 : _this$node$parent.off(NodeEventType.SIZE_CHANGED, this.updateCulling, this);
                (_this$node$parent2 = this.node.parent) === null || _this$node$parent2 === void 0 ? void 0 : _this$node$parent2.off(NodeEventType.TRANSFORM_CHANGED, this.updateCulling, this);
                this.node.off(NodeEventType.SIZE_CHANGED, this.updateCulling, this);
                this.node.off(NodeEventType.TRANSFORM_CHANGED, this.updateCulling, this);
                this.node.off(NodeEventType.ANCHOR_CHANGED, this._syncAnchorPoint, this);
                this._uninstallCamera();
              }
              _syncAnchorPoint() {
                const node = this.node;
                const trans = node._uiProps.uiTransformComp;
                const scale = node.getScale();
                this._leftDownToCenterX = trans.width * trans.anchorX * scale.x;
                this._leftDownToCenterY = trans.height * trans.anchorY * scale.y;
                this._cullingDirty = true;
                this.markForUpdateRenderData();
              }
              getLayerName() {
                return this._layerName;
              }
              setLayerName(layerName) {
                this._layerName = layerName;
              }
              getProperty(propertyName) {
                return this._properties[propertyName];
              }
              getPositionAt(pos, y) {
                let x;
                if (y !== undefined) {
                  x = Math.floor(pos);
                  y = Math.floor(y);
                } else {
                  x = Math.floor(pos.x);
                  y = Math.floor(pos.y);
                }
                switch (this._layerOrientation) {
                  case Orientation.ORTHO:
                    return this._positionForOrthoAt(x, y);
                  case Orientation.ISO:
                    return this._positionForIsoAt(x, y);
                  case Orientation.HEX:
                    return this._positionForHexAt(x, y);
                }
                return null;
              }
              isInvalidPosition(x, y) {
                return x >= this._layerSize.width || y >= this._layerSize.height || x < 0 || y < 0;
              }
              _positionForIsoAt(x, y) {
                let offsetX = 0;
                let offsetY = 0;
                const index = Math.floor(x) + Math.floor(y) * this._layerSize.width;
                const gidAndFlags = this.tiles[index];
                if (gidAndFlags) {
                  const gid = (gidAndFlags & TileFlag.FLIPPED_MASK) >>> 0;
                  const tileset = this.texGrids.get(gid).tileset;
                  const offset = tileset.tileOffset;
                  offsetX = offset.x;
                  offsetY = offset.y;
                }
                return new Vec2(this._mapTileSize.width * 0.5 * (this._layerSize.height + x - y - 1) + offsetX, this._mapTileSize.height * 0.5 * (this._layerSize.width - x + this._layerSize.height - y - 2) - offsetY);
              }
              _positionForOrthoAt(x, y) {
                let offsetX = 0;
                let offsetY = 0;
                const index = Math.floor(x) + Math.floor(y) * this._layerSize.width;
                const gidAndFlags = this.tiles[index];
                if (gidAndFlags) {
                  const gid = (gidAndFlags & TileFlag.FLIPPED_MASK) >>> 0;
                  const tileset = this.texGrids.get(gid).tileset;
                  const offset = tileset.tileOffset;
                  offsetX = offset.x;
                  offsetY = offset.y;
                }
                return new Vec2(x * this._mapTileSize.width + offsetX, (this._layerSize.height - y - 1) * this._mapTileSize.height - offsetY);
              }
              _positionForHexAt(col, row) {
                const tileWidth = this._mapTileSize.width;
                const tileHeight = this._mapTileSize.height;
                const rows = this._layerSize.height;
                const index = Math.floor(col) + Math.floor(row) * this._layerSize.width;
                const gid = (this.tiles[index] & TileFlag.FLIPPED_MASK) >>> 0;
                let offset;
                if (this.texGrids.get(gid)) {
                  offset = this.texGrids.get(gid).tileset.tileOffset;
                } else {
                  offset = {
                    x: 0,
                    y: 0
                  };
                }
                const odd_even = this._staggerIndex === StaggerIndex.STAGGERINDEX_ODD ? 1 : -1;
                let x = 0;
                let y = 0;
                let diffX = 0;
                let diffY = 0;
                switch (this._staggerAxis) {
                  case StaggerAxis.STAGGERAXIS_Y:
                    diffX = 0;
                    if (row % 2 === 1) {
                      diffX = tileWidth / 2 * odd_even;
                    }
                    x = col * tileWidth + diffX + offset.x;
                    y = (rows - row - 1) * (tileHeight - (tileHeight - this._hexSideLength) / 2) - offset.y;
                    break;
                  case StaggerAxis.STAGGERAXIS_X:
                    diffY = 0;
                    if (col % 2 === 1) {
                      diffY = tileHeight / 2 * -odd_even;
                    }
                    x = col * (tileWidth - (tileWidth - this._hexSideLength) / 2) + offset.x;
                    y = (rows - row - 1) * tileHeight + diffY - offset.y;
                    break;
                }
                return new Vec2(x, y);
              }
              setTilesGIDAt(gids, beginCol, beginRow, totalCols) {
                if (!gids || gids.length === 0 || totalCols <= 0) return;
                if (beginRow < 0) beginRow = 0;
                if (beginCol < 0) beginCol = 0;
                let gidsIdx = 0;
                const endCol = beginCol + totalCols;
                for (let row = beginRow;; row++) {
                  for (let col = beginCol; col < endCol; col++) {
                    if (gidsIdx >= gids.length) return;
                    this._updateTileForGID(gids[gidsIdx], col, row);
                    gidsIdx++;
                  }
                }
              }
              setTileGIDAt(gid, x, y, flags) {
                const ugid = (gid & TileFlag.FLIPPED_MASK) >>> 0;
                x = Math.floor(x);
                y = Math.floor(y);
                if (this.isInvalidPosition(x, y)) {
                  throw new Error('cc.TiledLayer.setTileGIDAt(): invalid position');
                }
                if (!this.tiles || !this._tilesets || this._tilesets.length === 0) {
                  logID(7238);
                  return;
                }
                if (ugid !== 0 && ugid < this._tilesets[0].firstGid) {
                  logID(7239, gid);
                  return;
                }
                flags = flags || 0;
                this._updateTileForGID((ugid | flags) >>> 0, x, y);
              }
              _updateTileForGID(gidAndFlags, x, y) {
                const idx = 0 | x + y * this._layerSize.width;
                if (idx >= this.tiles.length) return;
                const oldGIDAndFlags = this.tiles[idx];
                if (gidAndFlags === oldGIDAndFlags) return;
                const gid = (gidAndFlags & TileFlag.FLIPPED_MASK) >>> 0;
                const grid = this.texGrids.get(gid);
                if (grid) {
                  this.tiles[idx] = gidAndFlags;
                  this._updateVertex(x, y);
                } else {
                  this.tiles[idx] = 0;
                }
                this._cullingDirty = true;
              }
              getTileGIDAt(x, y) {
                if (this.isInvalidPosition(x, y)) {
                  throw new Error('cc.TiledLayer.getTileGIDAt(): invalid position');
                }
                if (!this.tiles) {
                  logID(7237);
                  return null;
                }
                const index = Math.floor(x) + Math.floor(y) * this._layerSize.width;
                const tile = this.tiles[index];
                return (tile & TileFlag.FLIPPED_MASK) >>> 0;
              }
              getTileFlagsAt(x, y) {
                if (this.isInvalidPosition(x, y)) {
                  throw new Error('TiledLayer.getTileFlagsAt: invalid position');
                }
                if (!this.tiles) {
                  logID(7240);
                  return null;
                }
                const idx = Math.floor(x) + Math.floor(y) * this._layerSize.width;
                const tile = this.tiles[idx];
                return (tile & TileFlag.FLIPPED_ALL) >>> 0;
              }
              setCullingDirty(value) {
                this._cullingDirty = value;
              }
              isCullingDirty() {
                return this._cullingDirty;
              }
              updateViewPort(x, y, width, height) {
                if (this._viewPort.width === width && this._viewPort.height === height && this._viewPort.x === x && this._viewPort.y === y) {
                  return;
                }
                this._viewPort.x = x;
                this._viewPort.y = y;
                this._viewPort.width = width;
                this._viewPort.height = height;
                let reserveLine = 1;
                if (this._layerOrientation === Orientation.ISO) {
                  reserveLine = 2;
                }
                const vpx = this._viewPort.x - this._offset.x + this._leftDownToCenterX;
                const vpy = this._viewPort.y - this._offset.y + this._leftDownToCenterY;
                let leftDownX = vpx - this._leftOffset;
                let leftDownY = vpy - this._downOffset;
                const rightTopX = vpx + width + this._rightOffset;
                const rightTopY = vpy + height + this._topOffset;
                const leftDown = this._cullingRect.leftDown;
                const rightTop = this._cullingRect.rightTop;
                if (leftDownX < 0) leftDownX = 0;
                if (leftDownY < 0) leftDownY = 0;
                this._positionToRowCol(leftDownX, leftDownY, _tempRowCol);
                _tempRowCol.row -= reserveLine;
                _tempRowCol.col -= reserveLine;
                _tempRowCol.row = _tempRowCol.row > 0 ? _tempRowCol.row : 0;
                _tempRowCol.col = _tempRowCol.col > 0 ? _tempRowCol.col : 0;
                if (_tempRowCol.row !== leftDown.row || _tempRowCol.col !== leftDown.col) {
                  leftDown.row = _tempRowCol.row;
                  leftDown.col = _tempRowCol.col;
                  this._cullingDirty = true;
                }
                if (rightTopX < 0 || rightTopY < 0) {
                  _tempRowCol.row = -1;
                  _tempRowCol.col = -1;
                } else {
                  this._positionToRowCol(rightTopX, rightTopY, _tempRowCol);
                  _tempRowCol.row++;
                  _tempRowCol.col++;
                }
                if (_tempRowCol.row !== rightTop.row || _tempRowCol.col !== rightTop.col) {
                  rightTop.row = _tempRowCol.row;
                  rightTop.col = _tempRowCol.col;
                  this._cullingDirty = true;
                }
                if (this._cullingDirty) this.markForUpdateRenderData();
              }
              _positionToRowCol(x, y, result) {
                const maptw = this._mapTileSize.width;
                const mapth = this._mapTileSize.height;
                const maptw2 = maptw * 0.5;
                const mapth2 = mapth * 0.5;
                let row = 0;
                let col = 0;
                let diffX2 = 0;
                let diffY2 = 0;
                const axis = this._staggerAxis;
                switch (this._layerOrientation) {
                  case Orientation.ORTHO:
                    col = Math.floor(x / maptw);
                    row = Math.floor(y / mapth);
                    break;
                  case Orientation.ISO:
                    col = Math.floor(x / maptw2);
                    row = Math.floor(y / mapth2);
                    break;
                  case Orientation.HEX:
                    if (axis === StaggerAxis.STAGGERAXIS_Y) {
                      row = Math.floor(y / (mapth - this._diffY1));
                      diffX2 = row % 2 === 1 ? maptw2 * this._odd_even : 0;
                      col = Math.floor((x - diffX2) / maptw);
                    } else {
                      col = Math.floor(x / (maptw - this._diffX1));
                      diffY2 = col % 2 === 1 ? mapth2 * -this._odd_even : 0;
                      row = Math.floor((y - diffY2) / mapth);
                    }
                    break;
                }
                result.row = row;
                result.col = col;
                return result;
              }
              updateCulling() {
                if (this._enableCulling) {
                  this.node.updateWorldTransform();
                  Mat4.invert(_mat4_temp$1, this.node.getWorldMatrix());
                  const camera = this._reinstallCamera();
                  if (camera) {
                    _vec3_temp.x = 0;
                    _vec3_temp.y = 0;
                    _vec3_temp.z = 0;
                    _vec3_temp2.x = camera.width;
                    _vec3_temp2.y = camera.height;
                    _vec3_temp2.z = 0;
                    camera.screenToWorld(_vec3_temp, _vec3_temp);
                    camera.screenToWorld(_vec3_temp2, _vec3_temp2);
                    Vec3.transformMat4(_vec3_temp, _vec3_temp, _mat4_temp$1);
                    Vec3.transformMat4(_vec3_temp2, _vec3_temp2, _mat4_temp$1);
                    this.updateViewPort(_vec3_temp.x, _vec3_temp.y, _vec3_temp2.x - _vec3_temp.x, _vec3_temp2.y - _vec3_temp.y);
                  }
                }
              }
              getLayerOrientation() {
                return this._layerOrientation;
              }
              getProperties() {
                return this._properties;
              }
              _updateVertex(col, row) {
                const FLIPPED_MASK = TileFlag.FLIPPED_MASK;
                const vertices = this.vertices;
                const layerOrientation = this._layerOrientation;
                const tiles = this.tiles;
                if (!tiles) {
                  return;
                }
                const rightTop = this._rightTop;
                const maptw = this._mapTileSize.width;
                const mapth = this._mapTileSize.height;
                const maptw2 = maptw * 0.5;
                const mapth2 = mapth * 0.5;
                const rows = this._layerSize.height;
                const cols = this._layerSize.width;
                const grids = this.texGrids;
                let left = 0;
                let bottom = 0;
                let axis;
                let diffX1;
                let diffY1;
                let odd_even;
                let diffX2;
                let diffY2;
                if (layerOrientation === Orientation.HEX) {
                  axis = this._staggerAxis;
                  diffX1 = this._diffX1;
                  diffY1 = this._diffY1;
                  odd_even = this._odd_even;
                }
                let cullingCol = 0;
                let cullingRow = 0;
                let gridGID = 0;
                let topBorder = 0;
                let downBorder = 0;
                let leftBorder = 0;
                let rightBorder = 0;
                const index = row * cols + col;
                const gid = tiles[index];
                gridGID = (gid & FLIPPED_MASK) >>> 0;
                const grid = grids.get(gridGID);
                if (!grid) {
                  return;
                }
                if (this._animations.get(gridGID)) {
                  this._hasAniGrid = this._hasAniGrid || true;
                }
                switch (layerOrientation) {
                  case Orientation.ORTHO:
                    cullingCol = col;
                    cullingRow = rows - row - 1;
                    left = cullingCol * maptw;
                    bottom = cullingRow * mapth;
                    break;
                  case Orientation.ISO:
                    cullingCol = rows + col - row - 1;
                    cullingRow = rows + cols - col - row - 2;
                    left = maptw2 * cullingCol;
                    bottom = mapth2 * cullingRow;
                    break;
                  case Orientation.HEX:
                    diffX2 = axis === StaggerAxis.STAGGERAXIS_Y && row % 2 === 1 ? maptw2 * odd_even : 0;
                    diffY2 = axis === StaggerAxis.STAGGERAXIS_X && col % 2 === 1 ? mapth2 * -odd_even : 0;
                    left = col * (maptw - diffX1) + diffX2;
                    bottom = (rows - row - 1) * (mapth - diffY1) + diffY2;
                    cullingCol = col;
                    cullingRow = rows - row - 1;
                    break;
                }
                const rowData = vertices[cullingRow] = vertices[cullingRow] || {
                  minCol: 0,
                  maxCol: 0
                };
                const colData = rowData[cullingCol] = rowData[cullingCol] || {
                  left: 0,
                  bottom: 0,
                  index: 0
                };
                if (rowData.minCol > cullingCol) {
                  rowData.minCol = cullingCol;
                }
                if (rowData.maxCol < cullingCol) {
                  rowData.maxCol = cullingCol;
                }
                if (rightTop.row < cullingRow) {
                  rightTop.row = cullingRow;
                  if (layerOrientation === Orientation.ISO) {
                    rightTop.row += 1;
                  }
                }
                if (rightTop.col < cullingCol) {
                  rightTop.col = cullingCol;
                  if (layerOrientation === Orientation.ISO) {
                    rightTop.col += 1;
                  }
                }
                const tileOffset = grid.tileset.tileOffset;
                left += this._offset.x + tileOffset.x + grid.offsetX;
                bottom += this._offset.y - tileOffset.y - grid.offsetY;
                topBorder = -tileOffset.y + grid.tileset._tileSize.height - mapth;
                topBorder = topBorder < 0 ? 0 : topBorder;
                downBorder = tileOffset.y < 0 ? 0 : tileOffset.y;
                leftBorder = -tileOffset.x < 0 ? 0 : -tileOffset.x;
                rightBorder = tileOffset.x + grid.tileset._tileSize.width - maptw;
                rightBorder = rightBorder < 0 ? 0 : rightBorder;
                if (this._rightOffset < leftBorder) {
                  this._rightOffset = leftBorder;
                }
                if (this._leftOffset < rightBorder) {
                  this._leftOffset = rightBorder;
                }
                if (this._topOffset < downBorder) {
                  this._topOffset = downBorder;
                }
                if (this._downOffset < topBorder) {
                  this._downOffset = topBorder;
                }
                colData.left = left;
                colData.bottom = bottom;
                colData.index = index;
                this._cullingDirty = true;
              }
              _updateVertices() {
                const vertices = this.vertices;
                vertices.length = 0;
                const tiles = this.tiles;
                if (!tiles) {
                  return;
                }
                const rightTop = this._rightTop;
                rightTop.row = -1;
                rightTop.col = -1;
                const rows = this._layerSize.height;
                const cols = this._layerSize.width;
                this._topOffset = 0;
                this._downOffset = 0;
                this._leftOffset = 0;
                this._rightOffset = 0;
                this._hasAniGrid = false;
                for (let row = 0; row < rows; ++row) {
                  for (let col = 0; col < cols; ++col) {
                    this._updateVertex(col, row);
                  }
                }
                this._verticesDirty = false;
              }
              getTiledTileAt(x, y, forceCreate) {
                if (this.isInvalidPosition(x, y)) {
                  throw new Error('TiledLayer.getTiledTileAt: invalid position');
                }
                if (!this.tiles) {
                  logID(7236);
                  return null;
                }
                const index = Math.floor(x) + Math.floor(y) * this._layerSize.width;
                let tile = this.tiledTiles[index];
                if (!tile && forceCreate) {
                  const node = new Node();
                  tile = node.addComponent(TiledTile);
                  tile._x = x;
                  tile._y = y;
                  tile._layer = this;
                  tile.updateInfo();
                  node.parent = this.node;
                  return tile;
                }
                return tile;
              }
              setTiledTileAt(x, y, tiledTile) {
                if (this.isInvalidPosition(x, y)) {
                  throw new Error('TiledLayer.setTiledTileAt: invalid position');
                }
                if (!this.tiles) {
                  logID(7236);
                  return null;
                }
                const index = Math.floor(x) + Math.floor(y) * this._layerSize.width;
                this.tiledTiles[index] = tiledTile;
                this._cullingDirty = true;
                if (tiledTile) {
                  this._hasTiledNodeGrid = true;
                } else {
                  this._hasTiledNodeGrid = this.tiledTiles.some(tiledNode => !!tiledNode);
                }
                return tiledTile;
              }
              getTexture(index) {
                index = index || 0;
                if (this._textures && index >= 0 && this._textures.length > index) {
                  return this._textures[index];
                }
                return null;
              }
              getTextures() {
                return this._textures;
              }
              setTexture(texture) {
                this.setTextures([texture]);
              }
              setTextures(textures) {
                this._textures = textures;
                this.markForUpdateRenderData();
              }
              getLayerSize() {
                return this._layerSize;
              }
              getMapTileSize() {
                return this._mapTileSize;
              }
              getTileSet(index) {
                index = index || 0;
                if (this._tilesets && index >= 0 && this._tilesets.length > index) {
                  return this._tilesets[index];
                }
                return null;
              }
              getTileSets() {
                return this._tilesets;
              }
              setTileSet(tileset) {
                this.setTileSets([tileset]);
              }
              setTileSets(tilesets) {
                this._tilesets = tilesets;
                const textures = this._textures = [];
                const texGrids = this.texGrids;
                texGrids.clear();
                for (let i = 0; i < tilesets.length; i++) {
                  const tileset = tilesets[i];
                  if (tileset) {
                    textures[i] = tileset.sourceImage;
                  }
                }
                for (let i = 0, l = tilesets.length; i < l; ++i) {
                  const tilesetInfo = tilesets[i];
                  if (!tilesetInfo) continue;
                  fillTextureGrids(tilesetInfo, texGrids, tilesetInfo.sourceImage);
                }
                this._prepareToRender();
              }
              init(layerInfo, mapInfo, tilesets, textures, texGrids) {
                this._cullingDirty = true;
                this._layerInfo = layerInfo;
                this._mapInfo = mapInfo;
                const size = layerInfo.layerSize;
                this._layerName = layerInfo.name;
                this.tiles = layerInfo.tiles;
                this._properties = layerInfo.properties;
                this._layerSize = size;
                this._minGID = layerInfo.minGID;
                this._maxGID = layerInfo.maxGID;
                this._opacity = layerInfo.opacity;
                if (layerInfo.tintColor) {
                  this._tintColor = layerInfo.tintColor;
                }
                this.renderOrder = mapInfo.renderOrder;
                this._staggerAxis = mapInfo.getStaggerAxis();
                this._staggerIndex = mapInfo.getStaggerIndex();
                this._hexSideLength = mapInfo.getHexSideLength();
                this._animations = mapInfo.getTileAnimations();
                this._tilesets = tilesets;
                this._textures = textures;
                this.texGrids = texGrids;
                this._layerOrientation = mapInfo.orientation;
                this._mapTileSize = mapInfo.getTileSize();
                const maptw = this._mapTileSize.width;
                const mapth = this._mapTileSize.height;
                const layerW = this._layerSize.width;
                const layerH = this._layerSize.height;
                if (this._layerOrientation === Orientation.HEX) {
                  let width = 0;
                  let height = 0;
                  const tileWidth = maptw & ~1;
                  const tileHeight = mapth & ~1;
                  this._odd_even = this._staggerIndex === StaggerIndex.STAGGERINDEX_ODD ? 1 : -1;
                  if (this._staggerAxis === StaggerAxis.STAGGERAXIS_X) {
                    this._diffX1 = (tileWidth - this._hexSideLength) / 2;
                    this._diffY1 = 0;
                    width = (this._diffX1 + this._hexSideLength) * layerW + this._diffX1;
                    height = tileHeight * layerH + tileHeight / 2;
                  } else {
                    this._diffX1 = 0;
                    this._diffY1 = (tileHeight - this._hexSideLength) / 2;
                    width = tileWidth * layerW + tileWidth / 2;
                    height = (this._diffY1 + this._hexSideLength) * layerH + this._diffY1;
                  }
                  this.node._uiProps.uiTransformComp.setContentSize(width, height);
                } else if (this._layerOrientation === Orientation.ISO) {
                  const wh = layerW + layerH;
                  this.node._uiProps.uiTransformComp.setContentSize(maptw * 0.5 * wh, mapth * 0.5 * wh);
                } else {
                  this.node._uiProps.uiTransformComp.setContentSize(layerW * maptw, layerH * mapth);
                }
                this._offset = new Vec2(layerInfo.offset.x, -layerInfo.offset.y);
                this._useAutomaticVertexZ = false;
                this._vertexZvalue = 0;
                this._syncAnchorPoint();
                this._prepareToRender();
              }
              _prepareToRender() {
                this._updateVertices();
                this._updateAllUserNode();
              }
              requestTiledRenderData() {
                const arr = this._tiledDataArray;
                while (arr.length > 0 && arr[arr.length - 1].subNodes && arr[arr.length - 1].subNodes.length === 0) {
                  arr.pop();
                }
                if (arr.length > 0) {
                  const last = arr[arr.length - 1];
                  if (last.renderData && last.renderData.vertexCount === 0) {
                    return last;
                  }
                }
                const comb = {
                  renderData: null,
                  texture: null
                };
                this._tiledDataArray.push(comb);
                return comb;
              }
              requestSubNodesData() {
                const arr = this._tiledDataArray;
                if (arr.length > 0) {
                  if (arr[arr.length - 1].subNodes && arr[arr.length - 1].subNodes.length === 0) {
                    return arr[arr.length - 1];
                  }
                }
                const renderData = [];
                const comb = {
                  subNodes: renderData
                };
                this._tiledDataArray.push(comb);
                return comb;
              }
              destroyRenderData() {
                this._tiledDataArray.forEach(rd => {
                  const renderData = rd.renderData;
                  if (renderData) RenderData.remove(renderData);
                });
                this._tiledDataArray.length = 0;
                super.destroyRenderData();
              }
              _flushAssembler() {
                const assembler = TiledLayer.Assembler.getAssembler(this);
                if (this._assembler !== assembler) {
                  this._assembler = assembler;
                  this._assembler.createData(this);
                }
                if (this._tiledDataArray.length === 0) {
                  this.markForUpdateRenderData();
                  this._updateColor();
                }
              }
              _render(ui) {
                for (let i = 0; i < this._tiledDataArray.length; i++) {
                  this._tiledDataArrayIdx = i;
                  const m = this._tiledDataArray[i];
                  if (m.subNodes) {
                    m.subNodes.forEach(c => {
                      if (c) ui.walk(c.node);
                    });
                  } else {
                    const td = m;
                    if (td.texture) {
                      ui.commitComp(this, td.renderData, td.texture, this._assembler, null);
                    }
                  }
                }
                this.node._static = true;
              }
              createRenderEntity() {
                return new RenderEntity(RenderEntityType.CROSSED);
              }
              fillIndicesBuffer(renderData, drawInfo) {
                const iBuf = renderData.chunk.meshBuffer.iData;
                let indexOffset = renderData.chunk.meshBuffer.indexOffset;
                drawInfo.setIndexOffset(indexOffset);
                let vertexId = renderData.chunk.vertexOffset;
                const quadCount = renderData.vertexCount / 4;
                for (let i = 0; i < quadCount; i += 1) {
                  iBuf[indexOffset] = vertexId;
                  iBuf[indexOffset + 1] = vertexId + 1;
                  iBuf[indexOffset + 2] = vertexId + 2;
                  iBuf[indexOffset + 3] = vertexId + 2;
                  iBuf[indexOffset + 4] = vertexId + 1;
                  iBuf[indexOffset + 5] = vertexId + 3;
                  indexOffset += 6;
                  vertexId += 4;
                }
                renderData.chunk.meshBuffer.indexOffset = indexOffset;
                drawInfo.setIBCount(quadCount * 6);
              }
              prepareDrawData() {
                this._drawInfoList.length = 0;
                const entity = this.renderEntity;
                entity.clearDynamicRenderDrawInfos();
                const tiledDataArray = this._tiledDataArray;
                let idx = 0;
                tiledDataArray.forEach(m => {
                  if (m.subNodes) {
                    m.subNodes.forEach(c => {
                      if (c) {
                        if (!this._drawInfoList[idx]) {
                          this._drawInfoList[idx] = new RenderDrawInfo();
                        }
                        const drawInfo = this._drawInfoList[idx];
                        drawInfo.setDrawInfoType(RenderDrawInfoType.SUB_NODE);
                        drawInfo.setSubNode(c.node);
                        entity.setDynamicRenderDrawInfo(drawInfo, idx);
                        idx++;
                      }
                    });
                  } else {
                    const td = m;
                    if (td.texture) {
                      if (!this._drawInfoList[idx]) {
                        this._drawInfoList[idx] = new RenderDrawInfo();
                      }
                      const drawInfo = this._drawInfoList[idx];
                      td.renderData.fillDrawInfoAttributes(drawInfo);
                      drawInfo.setTexture(td.texture.getGFXTexture());
                      drawInfo.setSampler(td.texture.getGFXSampler());
                      drawInfo.setMaterial(this.getRenderMaterial(0));
                      this.fillIndicesBuffer(td.renderData, drawInfo);
                      entity.setDynamicRenderDrawInfo(drawInfo, idx);
                      idx++;
                    }
                  }
                });
              }
            }) || _class3$1));

            var _dec$2, _dec2$2, _dec3$2, _class$2, _class2$2;
            let TiledObjectGroup = exports('TiledObjectGroup', (_dec$2 = ccclass('cc.TiledObjectGroup'), _dec2$2 = requireComponent(UITransform), _dec3$2 = type(CCBoolean), _dec$2(_class$2 = _dec2$2(_class$2 = (_class2$2 = class TiledObjectGroup extends Component {
              constructor(...args) {
                super(...args);
                this._premultiplyAlpha = false;
                this._groupName = void 0;
                this._positionOffset = void 0;
                this._mapInfo = void 0;
                this._properties = void 0;
                this._offset = void 0;
                this._opacity = void 0;
                this._tintColor = null;
                this._animations = void 0;
                this._hasAniObj = void 0;
                this._texGrids = void 0;
                this.aniObjects = void 0;
                this._objects = [];
              }
              get premultiplyAlpha() {
                return this._premultiplyAlpha;
              }
              set premultiplyAlpha(value) {
                this._premultiplyAlpha = value;
              }
              getPositionOffset() {
                return this._positionOffset;
              }
              getProperties() {
                return this._properties;
              }
              getGroupName() {
                return this._groupName;
              }
              getProperty(propertyName) {
                return this._properties[propertyName.toString()];
              }
              getObject(objectName) {
                for (let i = 0, len = this._objects.length; i < len; i++) {
                  const obj = this._objects[i];
                  if (obj && obj.name === objectName) {
                    return obj;
                  }
                }
                return null;
              }
              getObjects() {
                return this._objects;
              }
              get offset() {
                return this._offset;
              }
              _init(groupInfo, mapInfo, texGrids) {
                const FLIPPED_MASK = TileFlag.FLIPPED_MASK;
                const FLAG_HORIZONTAL = TileFlag.HORIZONTAL;
                const FLAG_VERTICAL = TileFlag.VERTICAL;
                this._groupName = groupInfo.name;
                this._positionOffset = groupInfo.offset;
                this._mapInfo = mapInfo;
                this._properties = groupInfo.getProperties();
                this._offset = new Vec2(groupInfo.offset.x, -groupInfo.offset.y);
                this._opacity = groupInfo.opacity;
                if (groupInfo.tintColor) {
                  this._tintColor = groupInfo.tintColor;
                }
                this._texGrids = texGrids;
                this._animations = mapInfo.getTileAnimations();
                this.aniObjects = [];
                this._hasAniObj = false;
                const mapSize = mapInfo.mapSize;
                const tileSize = mapInfo.tileSize;
                let width = 0;
                let height = 0;
                const colorVal = new Color();
                const iso = Orientation.ISO === mapInfo.orientation;
                if (mapInfo.orientation === Orientation.HEX) {
                  if (mapInfo.getStaggerAxis() === StaggerAxis.STAGGERAXIS_X) {
                    height = tileSize.height * (mapSize.height + 0.5);
                    width = (tileSize.width + mapInfo.getHexSideLength()) * Math.floor(mapSize.width / 2) + tileSize.width * (mapSize.width % 2);
                  } else {
                    width = tileSize.width * (mapSize.width + 0.5);
                    height = (tileSize.height + mapInfo.getHexSideLength()) * Math.floor(mapSize.height / 2) + tileSize.height * (mapSize.height % 2);
                  }
                } else if (iso) {
                  const wh = mapSize.width + mapSize.height;
                  width = tileSize.width * 0.5 * wh;
                  height = tileSize.height * 0.5 * wh;
                } else {
                  width = mapSize.width * tileSize.width;
                  height = mapSize.height * tileSize.height;
                }
                const transComp = this.node._uiProps.uiTransformComp;
                transComp.setContentSize(width, height);
                const leftTopX = width * transComp.anchorX;
                const leftTopY = height * (1 - transComp.anchorY);
                const objects = groupInfo.objects;
                const aliveNodes = {};
                for (let i = 0, l = objects.length; i < l; i++) {
                  const object = objects[i];
                  const objType = object.type;
                  object.offset = new Vec2(object.x, object.y);
                  const points = object.points || object.polylinePoints;
                  if (points) {
                    for (let pi = 0; pi < points.length; pi++) {
                      points[pi].y *= -1;
                    }
                  }
                  if (iso) {
                    const posIdxX = object.x / tileSize.height;
                    const posIdxY = object.y / tileSize.height;
                    object.x = tileSize.width * 0.5 * (mapSize.height + posIdxX - posIdxY);
                    object.y = tileSize.height * 0.5 * (mapSize.width + mapSize.height - posIdxX - posIdxY);
                  } else {
                    object.y = height - object.y;
                  }
                  if (objType === TMXObjectType.TEXT) {
                    const textName = `text${object.id}`;
                    aliveNodes[textName] = true;
                    let textNode = this.node.getChildByName(textName);
                    if (!textNode) {
                      textNode = new Node();
                    }
                    textNode.setRotationFromEuler(0, 0, -object.rotation);
                    textNode.setPosition(object.x - leftTopX, object.y - leftTopY);
                    textNode.name = textName;
                    textNode.parent = this.node;
                    textNode.setSiblingIndex(i);
                    textNode.layer = this.node.layer;
                    let label = textNode.getComponent(Label);
                    if (!label) {
                      label = textNode.addComponent(Label);
                    }
                    const textTransComp = textNode._uiProps.uiTransformComp;
                    textNode.active = object.visible;
                    textTransComp.anchorX = 0;
                    textTransComp.anchorY = 1;
                    if (this._tintColor) {
                      colorVal.set(this._tintColor);
                      colorVal.a *= this._opacity / 255;
                      label.color.set(colorVal);
                    } else {
                      const c = label.color;
                      c.a *= this._opacity / 255;
                    }
                    label.overflow = Label.Overflow.SHRINK;
                    label.lineHeight = object.height;
                    label.string = object.text;
                    label.horizontalAlign = object.halign;
                    label.verticalAlign = object.valign;
                    label.fontSize = object.pixelsize;
                    textTransComp.setContentSize(object.width, object.height);
                  } else if (objType === TMXObjectType.IMAGE) {
                    const gid = object.gid;
                    const gridGID = (gid & FLIPPED_MASK) >>> 0;
                    const grid = texGrids.get(gridGID);
                    if (!grid) continue;
                    const tileset = grid.tileset;
                    const imgName = `img${object.id}`;
                    aliveNodes[imgName] = true;
                    let imgNode = this.node.getChildByName(imgName);
                    object.width = object.width || grid.width;
                    object.height = object.height || grid.height;
                    if (imgNode && imgNode._objFlags & CCObject.Flags.HideInHierarchy) {
                      imgNode.removeFromParent();
                      imgNode.hideFlags |= CCObject.Flags.DontSave;
                      imgNode.destroy();
                      imgNode = null;
                    }
                    if (!imgNode) {
                      imgNode = new Node();
                    }
                    if (this._animations.get(gridGID)) {
                      this.aniObjects.push({
                        object,
                        imgNode,
                        gridGID
                      });
                      this._hasAniObj = true;
                    }
                    const tileOffsetX = tileset.tileOffset.x;
                    const tileOffsetY = tileset.tileOffset.y;
                    imgNode.active = object.visible;
                    imgNode.setRotationFromEuler(0, 0, -object.rotation);
                    imgNode.setPosition(object.x - leftTopX, object.y - leftTopY);
                    imgNode.name = imgName;
                    imgNode.parent = this.node;
                    imgNode.setSiblingIndex(i);
                    imgNode.layer = this.node.layer;
                    let sprite = imgNode.getComponent(Sprite);
                    if (!sprite) {
                      sprite = imgNode.addComponent(Sprite);
                    }
                    const imgTrans = imgNode._uiProps.uiTransformComp;
                    if (iso) {
                      imgTrans.anchorX = 0.5 + tileOffsetX / object.width;
                      imgTrans.anchorY = tileOffsetY / object.height;
                    } else {
                      imgTrans.anchorX = tileOffsetX / object.width;
                      imgTrans.anchorY = tileOffsetY / object.height;
                    }
                    if (this._tintColor) {
                      colorVal.set(this._tintColor);
                      colorVal.a *= this._opacity / 255;
                      sprite.color.set(colorVal);
                    } else {
                      const c = sprite.color;
                      c.a *= this._opacity / 255;
                    }
                    sprite.sizeMode = Sprite.SizeMode.CUSTOM;
                    const srcBlendFactor = this._premultiplyAlpha ? BlendFactor.ONE : BlendFactor.SRC_ALPHA;
                    if (sprite.srcBlendFactor !== srcBlendFactor) {
                      sprite.srcBlendFactor = srcBlendFactor;
                      if (sprite.material) {
                        sprite._updateBlendFunc();
                      }
                    }
                    let spf = grid.spriteFrame;
                    if (!spf) {
                      spf = new SpriteFrame();
                    } else {
                      spf = spf.clone();
                    }
                    if ((gid & FLAG_HORIZONTAL) >>> 0) {
                      spf.flipUVX = !spf.flipUVX;
                    }
                    if ((gid & FLAG_VERTICAL) >>> 0) {
                      spf.flipUVY = !spf.flipUVY;
                    }
                    spf.rotated = grid._rotated;
                    spf.rect = grid._rect;
                    sprite.spriteFrame = spf;
                    imgTrans.setContentSize(object.width, object.height);
                    sprite.markForUpdateRenderData();
                  }
                }
                this._objects = objects;
                const children = this.node.children;
                const uselessExp = /^(?:img|text)\d+$/;
                for (let i = 0, n = children.length; i < n; i++) {
                  const c = children[i];
                  const cName = c.name;
                  const isUseless = uselessExp.test(cName);
                  if (isUseless && !aliveNodes[cName]) c.destroy();
                }
              }
              update(dt) {
                if (!this._hasAniObj) {
                  return;
                }
                const aniObjects = this.aniObjects;
                const _texGrids = this._texGrids;
                const iso = Orientation.ISO === this._mapInfo.orientation;
                for (let i = 0, len = aniObjects.length; i < len; i++) {
                  const aniObj = aniObjects[i];
                  const gridGID = aniObj.gridGID;
                  const grid = _texGrids.get(gridGID);
                  if (!grid) {
                    continue;
                  }
                  const tileset = grid.tileset;
                  const object = aniObj.object;
                  const imgNode = aniObj.imgNode;
                  const tileOffsetX = tileset.tileOffset.x;
                  const tileOffsetY = tileset.tileOffset.y;
                  const imgTrans = imgNode._uiProps.uiTransformComp;
                  if (iso) {
                    imgTrans.anchorX = 0.5 + tileOffsetX / object.width;
                    imgTrans.anchorY = tileOffsetY / object.height;
                  } else {
                    imgTrans.anchorX = tileOffsetX / object.width;
                    imgTrans.anchorY = tileOffsetY / object.height;
                  }
                  const sp = imgNode.getComponent(Sprite);
                  const spf = sp.spriteFrame;
                  spf.rotated = grid._rotated;
                  spf.rect = grid._rect;
                  sp.spriteFrame = spf;
                  sp.markForUpdateRenderData();
                }
              }
            }, (_applyDecoratedDescriptor(_class2$2.prototype, "premultiplyAlpha", [_dec3$2], Object.getOwnPropertyDescriptor(_class2$2.prototype, "premultiplyAlpha"), _class2$2.prototype)), _class2$2)) || _class$2) || _class$2));

            var _dec$1, _dec2$1, _dec3$1, _dec4, _dec5, _dec6, _dec7, _dec8, _class$1, _class2$1, _initializer$1, _initializer2$1, _initializer3$1, _initializer4, _initializer5, _initializer6, _initializer7, _initializer8;
            let TiledMapAsset = exports('TiledMapAsset', (_dec$1 = ccclass('cc.TiledMapAsset'), _dec2$1 = type([TextAsset]), _dec3$1 = type([CCString]), _dec4 = type([SpriteFrame]), _dec5 = type([SpriteFrame]), _dec6 = type([CCString]), _dec7 = type([CCString]), _dec8 = type([Size]), _dec$1(_class$1 = (_class2$1 = class TiledMapAsset extends Asset {
              constructor(...args) {
                super(...args);
                this.tmxXmlStr = _initializer$1 && _initializer$1();
                this.tsxFiles = _initializer2$1 && _initializer2$1();
                this.tsxFileNames = _initializer3$1 && _initializer3$1();
                this.spriteFrames = _initializer4 && _initializer4();
                this.imageLayerSpriteFrame = _initializer5 && _initializer5();
                this.imageLayerSpriteFrameNames = _initializer6 && _initializer6();
                this.spriteFrameNames = _initializer7 && _initializer7();
                this.spriteFrameSizes = _initializer8 && _initializer8();
              }
            }, (_initializer$1 = applyDecoratedInitializer(_class2$1.prototype, "tmxXmlStr", [serializable], function () {
              return '';
            }), _initializer2$1 = applyDecoratedInitializer(_class2$1.prototype, "tsxFiles", [serializable, _dec2$1], function () {
              return [];
            }), _initializer3$1 = applyDecoratedInitializer(_class2$1.prototype, "tsxFileNames", [serializable, _dec3$1], function () {
              return [];
            }), _initializer4 = applyDecoratedInitializer(_class2$1.prototype, "spriteFrames", [serializable, _dec4], function () {
              return [];
            }), _initializer5 = applyDecoratedInitializer(_class2$1.prototype, "imageLayerSpriteFrame", [serializable, _dec5], function () {
              return [];
            }), _initializer6 = applyDecoratedInitializer(_class2$1.prototype, "imageLayerSpriteFrameNames", [serializable, _dec6], function () {
              return [];
            }), _initializer7 = applyDecoratedInitializer(_class2$1.prototype, "spriteFrameNames", [serializable, _dec7], function () {
              return [];
            }), _initializer8 = applyDecoratedInitializer(_class2$1.prototype, "spriteFrameSizes", [serializable, _dec8], function () {
              return [];
            })), _class2$1)) || _class$1));

            var _dec, _dec2, _dec3, _class, _class2, _initializer, _initializer2, _initializer3, _class3;
            let TiledMap = exports('TiledMap', (_dec = ccclass('cc.TiledMap'), _dec2 = requireComponent(UITransform), _dec3 = type(TiledMapAsset), _dec(_class = _dec2(_class = (_class2 = (_class3 = class TiledMap extends Component {
              constructor(...args) {
                super(...args);
                this._texGrids = new Map();
                this._textures = [];
                this._tilesets = [];
                this._animations = new Map();
                this._imageLayers = [];
                this._layers = [];
                this._groups = [];
                this._images = [];
                this._properties = {};
                this._tileProperties = new Map();
                this._mapInfo = null;
                this._mapSize = new Size(0, 0);
                this._tileSize = new Size(0, 0);
                this._mapOrientation = Orientation.ORTHO;
                this._isApplied = false;
                this._tmxFile = _initializer && _initializer();
                this._enableCulling = _initializer2 && _initializer2();
                this.cleanupImageCache = _initializer3 && _initializer3();
              }
              get tmxAsset() {
                return this._tmxFile;
              }
              set tmxAsset(value) {
                if (this._tmxFile !== value || EDITOR) {
                  this._tmxFile = value;
                  this._applyFile();
                  this._isApplied = true;
                }
              }
              get enableCulling() {
                return this._enableCulling;
              }
              set enableCulling(value) {
                this._enableCulling = value;
                const layers = this._layers;
                for (let i = 0; i < layers.length; ++i) {
                  layers[i].enableCulling = value;
                }
              }
              getMapSize() {
                return this._mapSize;
              }
              getTileSize() {
                return this._tileSize;
              }
              getMapOrientation() {
                return this._mapOrientation;
              }
              getObjectGroups() {
                return this._groups;
              }
              getObjectGroup(groupName) {
                const groups = this._groups;
                for (let i = 0, l = groups.length; i < l; i++) {
                  const group = groups[i];
                  if (group && group.getGroupName() === groupName) {
                    return group;
                  }
                }
                return null;
              }
              getProperties() {
                return this._properties;
              }
              getLayers() {
                return this._layers;
              }
              getLayer(layerName) {
                const layers = this._layers;
                for (let i = 0, l = layers.length; i < l; i++) {
                  const layer = layers[i];
                  if (layer && layer.getLayerName() === layerName) {
                    return layer;
                  }
                }
                return null;
              }
              _changeLayer(layerName, replaceLayer) {
                const layers = this._layers;
                for (let i = 0, l = layers.length; i < l; i++) {
                  const layer = layers[i];
                  if (layer && layer.getLayerName() === layerName) {
                    layers[i] = replaceLayer;
                    return;
                  }
                }
              }
              getProperty(propertyName) {
                return this._properties[propertyName.toString()];
              }
              getPropertiesForGID(gid) {
                return this._tileProperties.get(gid);
              }
              __preload() {
                if (!this._tmxFile) {
                  return;
                }
                if (this._isApplied === false) {
                  this._applyFile();
                  this._isApplied = true;
                }
              }
              onEnable() {
                this.node.on(NodeEventType.ANCHOR_CHANGED, this._syncAnchorPoint, this);
              }
              onDisable() {
                this.node.off(NodeEventType.ANCHOR_CHANGED, this._syncAnchorPoint, this);
              }
              _applyFile() {
                const spriteFrames = [];
                const spriteFramesCache = {};
                const file = this._tmxFile;
                if (file) {
                  let spfNames = file.spriteFrameNames;
                  const spfSizes = file.spriteFrameSizes;
                  const fSpriteFrames = file.spriteFrames;
                  const spfTexturesMap = {};
                  const spfTextureSizeMap = {};
                  for (let i = 0; i < spfNames.length; ++i) {
                    const texName = spfNames[i];
                    spfTextureSizeMap[texName] = spfSizes[i];
                    spriteFrames[i] = fSpriteFrames[i];
                    const frame = spriteFrames[i];
                    if (frame) {
                      spriteFramesCache[frame.name] = frame;
                      spfTexturesMap[texName] = frame;
                    }
                  }
                  const imageLayerTextures = {};
                  const texValues = file.imageLayerSpriteFrame;
                  spfNames = file.imageLayerSpriteFrameNames;
                  for (let i = 0; i < texValues.length; ++i) {
                    imageLayerTextures[spfNames[i]] = texValues[i];
                  }
                  const tsxFileNames = file.tsxFileNames;
                  const tsxFiles = file.tsxFiles;
                  const tsxContentMap = {};
                  for (let i = 0; i < tsxFileNames.length; ++i) {
                    if (tsxFileNames[i].length > 0) {
                      tsxContentMap[tsxFileNames[i]] = tsxFiles[i].text;
                    }
                  }
                  const mapInfo = new TMXMapInfo(file.tmxXmlStr, tsxContentMap, spfTexturesMap, spfTextureSizeMap, imageLayerTextures);
                  const tilesets = mapInfo.getTilesets();
                  if (!tilesets || tilesets.length === 0) {
                    logID(7241);
                  }
                  this._buildWithMapInfo(mapInfo);
                } else {
                  this._releaseMapInfo();
                }
              }
              _releaseMapInfo() {
                const layers = this._layers;
                for (let i = 0, l = layers.length; i < l; i++) {
                  var _layers$i$node$parent, _layers$i$node$parent2;
                  (_layers$i$node$parent = layers[i].node.parent) === null || _layers$i$node$parent === void 0 ? void 0 : _layers$i$node$parent.off(NodeEventType.SIZE_CHANGED, layers[i].updateCulling, layers[i]);
                  (_layers$i$node$parent2 = layers[i].node.parent) === null || _layers$i$node$parent2 === void 0 ? void 0 : _layers$i$node$parent2.off(NodeEventType.TRANSFORM_CHANGED, layers[i].updateCulling, layers[i]);
                  layers[i].node.removeFromParent();
                  layers[i].node.destroy();
                }
                layers.length = 0;
                const groups = this._groups;
                for (let i = 0, l = groups.length; i < l; i++) {
                  groups[i].node.removeFromParent();
                  groups[i].node.destroy();
                }
                groups.length = 0;
                const images = this._images;
                for (let i = 0, l = images.length; i < l; i++) {
                  images[i].removeFromParent();
                  images[i].destroy();
                }
                images.length = 0;
              }
              _syncAnchorPoint() {
                const anchor = this.node._uiProps.uiTransformComp.anchorPoint;
                const leftTopX = this.node._uiProps.uiTransformComp.width * anchor.x;
                const leftTopY = this.node._uiProps.uiTransformComp.height * (1 - anchor.y);
                let i;
                let l;
                for (i = 0, l = this._layers.length; i < l; i++) {
                  const layerInfo = this._layers[i];
                  const layerNode = layerInfo.node;
                  layerNode._uiProps.uiTransformComp.setAnchorPoint(anchor);
                }
                for (i = 0, l = this._groups.length; i < l; i++) {
                  const groupInfo = this._groups[i];
                  const groupNode = groupInfo.node._uiProps.uiTransformComp;
                  groupNode.anchorX = 0.5;
                  groupNode.anchorY = 0.5;
                  const x = groupInfo.offset.x - leftTopX + groupNode.width * groupNode.anchorX;
                  const y = groupInfo.offset.y + leftTopY - groupNode.height * groupNode.anchorY;
                  groupInfo.node.setPosition(x, y);
                }
                for (i = 0, l = this._images.length; i < l; i++) {
                  const image = this._images[i]._uiProps.uiTransformComp;
                  image.anchorX = 0.5;
                  image.anchorY = 0.5;
                  const x = this._images[i]._offset.x - leftTopX + image.width * image.anchorX;
                  const y = this._images[i]._offset.y + leftTopY - image.height * image.anchorY;
                  this._images[i].setPosition(x, y);
                }
              }
              _fillAniGrids(texGrids, animations) {
                for (const i of animations.keys()) {
                  const animation = animations.get(i);
                  if (!animation) continue;
                  const frames = animation.frames;
                  for (let j = 0; j < frames.length; j++) {
                    const frame = frames[j];
                    frame.grid = texGrids.get(frame.tileid);
                  }
                }
              }
              _buildLayerAndGroup() {
                const tilesets = this._tilesets;
                const texGrids = this._texGrids;
                const animations = this._animations;
                texGrids.clear();
                for (let i = 0, l = tilesets.length; i < l; ++i) {
                  const tilesetInfo = tilesets[i];
                  if (!tilesetInfo) continue;
                  if (!tilesetInfo.sourceImage) {
                    console.warn(`Can't find the spriteFrame of tilesets ${i}`);
                    continue;
                  }
                  fillTextureGrids(tilesetInfo, texGrids, tilesetInfo.sourceImage);
                }
                this._fillAniGrids(texGrids, animations);
                let layers = this._layers;
                let groups = this._groups;
                let images = this._images;
                const oldNodeNames = {};
                for (let i = 0, n = layers.length; i < n; i++) {
                  oldNodeNames[layers[i].node.name] = true;
                }
                for (let i = 0, n = groups.length; i < n; i++) {
                  oldNodeNames[groups[i].node.name] = true;
                }
                for (let i = 0, n = images.length; i < n; i++) {
                  oldNodeNames[images[i].name] = true;
                }
                layers = this._layers = [];
                groups = this._groups = [];
                images = this._images = [];
                const mapInfo = this._mapInfo;
                const node = this.node;
                const layerInfos = mapInfo.getAllChildren();
                const textures = this._textures;
                let maxWidth = 0;
                let maxHeight = 0;
                if (layerInfos && layerInfos.length > 0) {
                  for (let i = 0, len = layerInfos.length; i < len; i++) {
                    const layerInfo = layerInfos[i];
                    const name = layerInfo.name;
                    let child = this.node.getChildByName(name);
                    oldNodeNames[name] = false;
                    if (!child) {
                      child = new Node();
                      child.name = name;
                      child.layer = node.layer;
                      node.addChild(child);
                    }
                    child.setSiblingIndex(i);
                    child.active = layerInfo.visible;
                    if (layerInfo instanceof TMXLayerInfo) {
                      let layer = child.getComponent(TiledLayer);
                      if (!layer) {
                        layer = child.addComponent(TiledLayer);
                      }
                      layer.init(layerInfo, mapInfo, tilesets, textures, texGrids);
                      layer.enableCulling = this._enableCulling;
                      layerInfo.ownTiles = false;
                      layers.push(layer);
                    } else if (layerInfo instanceof TMXObjectGroupInfo) {
                      let group = child.getComponent(TiledObjectGroup);
                      if (!group) {
                        group = child.addComponent(TiledObjectGroup);
                      }
                      group._init(layerInfo, mapInfo, texGrids);
                      groups.push(group);
                    } else if (layerInfo instanceof TMXImageLayerInfo) {
                      const spriteFrame = layerInfo.sourceImage;
                      child.layerInfo = layerInfo;
                      child._offset = new Vec2(layerInfo.offset.x, -layerInfo.offset.y);
                      let image = child.getComponent(Sprite);
                      if (!image) {
                        image = child.addComponent(Sprite);
                      }
                      const color = image.color;
                      color.a *= layerInfo.opacity;
                      image.spriteFrame = spriteFrame;
                      let width = spriteFrame.width;
                      let height = spriteFrame.height;
                      if (spriteFrame.original) {
                        width = spriteFrame.originalSize.width;
                        height = spriteFrame.originalSize.height;
                      }
                      child._uiProps.uiTransformComp.setContentSize(width, height);
                      images.push(child);
                    }
                    maxWidth = Math.max(maxWidth, child._uiProps.uiTransformComp.width);
                    maxHeight = Math.max(maxHeight, child._uiProps.uiTransformComp.height);
                  }
                }
                const children = node.children;
                for (let i = 0, n = children.length; i < n; i++) {
                  const c = children[i];
                  if (oldNodeNames[c.name]) {
                    c.destroy();
                  }
                }
                this.node._uiProps.uiTransformComp.setContentSize(maxWidth, maxHeight);
                this._syncAnchorPoint();
              }
              _buildWithMapInfo(mapInfo) {
                this._mapInfo = mapInfo;
                this._mapSize = mapInfo.getMapSize();
                this._tileSize = mapInfo.getTileSize();
                this._mapOrientation = mapInfo.orientation;
                this._properties = mapInfo.properties;
                this._tileProperties = mapInfo.getTileProperties();
                this._imageLayers = mapInfo.getImageLayers();
                this._animations = mapInfo.getTileAnimations();
                this._tilesets = mapInfo.getTilesets();
                const tilesets = this._tilesets;
                this._textures.length = 0;
                const totalTextures = [];
                for (let i = 0, l = tilesets.length; i < l; ++i) {
                  const tilesetInfo = tilesets[i];
                  if (!tilesetInfo || !tilesetInfo.sourceImage) continue;
                  this._textures[i] = tilesetInfo.sourceImage;
                  totalTextures.push(tilesetInfo.sourceImage);
                }
                for (let i = 0; i < this._imageLayers.length; i++) {
                  const imageLayer = this._imageLayers[i];
                  if (!imageLayer || !imageLayer.sourceImage) continue;
                  totalTextures.push(imageLayer.sourceImage);
                }
                this._buildLayerAndGroup();
                if (this.cleanupImageCache) {
                  this._textures.forEach(tex => {
                    this.doCleanupImageCache(tex);
                  });
                }
              }
              doCleanupImageCache(texture) {
                if (texture._image instanceof HTMLImageElement) {
                  texture._image.src = '';
                  texture._image.destroy();
                } else if (sys.hasFeature(sys.Feature.IMAGE_BITMAP) && texture._image instanceof ImageBitmap) {
                  if (texture._image.close) texture._image.close();
                }
                texture._image = null;
              }
              lateUpdate(dt) {
                const animations = this._animations;
                const texGrids = this._texGrids;
                for (const aniGID of animations.keys()) {
                  const animation = animations.get(aniGID);
                  const frames = animation.frames;
                  let frame = frames[animation.frameIdx];
                  animation.dt += dt;
                  if (frame.duration < animation.dt) {
                    animation.dt = 0;
                    animation.frameIdx++;
                    if (animation.frameIdx >= frames.length) {
                      animation.frameIdx = 0;
                    }
                    frame = frames[animation.frameIdx];
                  }
                  texGrids.set(aniGID, frame.grid);
                }
                const layers = this.getLayers();
                for (let i = 0, l = layers.length; i < l; i++) {
                  const layer = layers[i];
                  if (layer.hasAnimation() || layer.node.hasChangedFlags) {
                    layer.markForUpdateRenderData();
                  }
                }
              }
            }, _class3.Orientation = Orientation, _class3.Property = Property, _class3.TileFlag = TileFlag, _class3.StaggerAxis = StaggerAxis, _class3.StaggerIndex = StaggerIndex, _class3.TMXObjectType = TMXObjectType, _class3.RenderOrder = RenderOrder, _class3), (_initializer = applyDecoratedInitializer(_class2.prototype, "_tmxFile", [serializable], function () {
              return null;
            }), _applyDecoratedDescriptor(_class2.prototype, "tmxAsset", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "tmxAsset"), _class2.prototype), _initializer2 = applyDecoratedInitializer(_class2.prototype, "_enableCulling", [serializable], function () {
              return true;
            }), _initializer3 = applyDecoratedInitializer(_class2.prototype, "cleanupImageCache", [serializable], function () {
              return true;
            })), _class2)) || _class) || _class));

            const MaxGridsLimit = Math.ceil(65535 / 6);
            const vec3_temps = [];
            for (let i = 0; i < 4; i++) {
              vec3_temps.push(new Vec3());
            }
            const _mat4_temp = new Mat4();
            const _vec3u_temp = new Vec3();
            const _leftDown = {
              row: 0,
              col: 0
            };
            let _uva = {
              x: 0,
              y: 0
            };
            let _uvb = {
              x: 0,
              y: 0
            };
            let _uvc = {
              x: 0,
              y: 0
            };
            let _uvd = {
              x: 0,
              y: 0
            };
            let _vfOffset = 0;
            let _moveX = 0;
            let _moveY = 0;
            let _fillCount = 0;
            let _curTexture = null;
            let _tempBuffers;
            let _curLayer;
            let flipTexture;
            let _accessor = null;
            const simple = {
              ensureAccessor() {
                if (!_accessor) {
                  const device = director.root.device;
                  director.root.batcher2D;
                  _accessor = new StaticVBAccessor(device, vfmtPosUvColor, this.vCount);
                  director.on(Director.EVENT_BEFORE_DRAW, () => {
                    _accessor.reset();
                  });
                }
              },
              createData(layer) {
                {
                  this.ensureAccessor();
                }
              },
              fillBuffers(layer, renderer) {
                if (!layer || layer.tiledDataArray.length === 0) return;
                const dataArray = layer.tiledDataArray;
                const data = dataArray[layer._tiledDataArrayIdx];
                const renderData = data.renderData;
                const iBuf = renderData.chunk.meshBuffer.iData;
                let indexOffset = renderData.chunk.meshBuffer.indexOffset;
                let vertexId = renderData.chunk.vertexOffset;
                const quadCount = renderData.vertexCount / 4;
                for (let i = 0; i < quadCount; i += 1) {
                  iBuf[indexOffset] = vertexId;
                  iBuf[indexOffset + 1] = vertexId + 1;
                  iBuf[indexOffset + 2] = vertexId + 2;
                  iBuf[indexOffset + 3] = vertexId + 2;
                  iBuf[indexOffset + 4] = vertexId + 1;
                  iBuf[indexOffset + 5] = vertexId + 3;
                  indexOffset += 6;
                  vertexId += 4;
                }
                renderData.chunk.meshBuffer.indexOffset = indexOffset;
              },
              updateRenderData(comp) {
                comp.updateCulling();
                _moveX = comp.leftDownToCenterX;
                _moveY = comp.leftDownToCenterY;
                if (comp.colorChanged || comp.isCullingDirty() || comp.isUserNodeDirty() || comp.hasAnimation() || comp.hasTiledNode() || comp.node.hasChangedFlags) {
                  comp.colorChanged = false;
                  comp.destroyRenderData();
                  let leftDown;
                  let rightTop;
                  if (comp.enableCulling) {
                    const cullingRect = comp.cullingRect;
                    leftDown = cullingRect.leftDown;
                    rightTop = cullingRect.rightTop;
                  } else {
                    leftDown = _leftDown;
                    rightTop = comp.rightTop;
                  }
                  switch (comp.renderOrder) {
                    case RenderOrder.RightDown:
                      traverseGrids(leftDown, rightTop, -1, 1, comp);
                      break;
                    case RenderOrder.LeftDown:
                      traverseGrids(leftDown, rightTop, -1, -1, comp);
                      break;
                    case RenderOrder.RightUp:
                      traverseGrids(leftDown, rightTop, 1, 1, comp);
                      break;
                    case RenderOrder.LeftUp:
                    default:
                      traverseGrids(leftDown, rightTop, 1, -1, comp);
                      break;
                  }
                  comp.setCullingDirty(false);
                  comp.setUserNodeDirty(false);
                }
                {
                  comp.prepareDrawData();
                }
              },
              updateColor(tiled) {
                const color = tiled.color;
                const colorV = new Float32Array(4);
                colorV[0] = color.r / 255;
                colorV[1] = color.g / 255;
                colorV[2] = color.b / 255;
                colorV[3] = color.a / 255;
                const rs = tiled.tiledDataArray;
                for (const r of rs) {
                  if (!r.renderData) continue;
                  const renderData = r.renderData;
                  const vs = renderData.vData;
                  for (let i = renderData.vertexStart, l = renderData.vertexCount; i < l; i++) {
                    vs.set(colorV, i * 9 + 5);
                  }
                }
              }
            };
            function _flipTexture(inGrid, gid) {
              if (inGrid._rotated) {
                _uva.x = inGrid.r;
                _uva.y = inGrid.t;
                _uvb.x = inGrid.l;
                _uvb.y = inGrid.t;
                _uvc.x = inGrid.r;
                _uvc.y = inGrid.b;
                _uvd.x = inGrid.l;
                _uvd.y = inGrid.b;
              } else {
                _uva.x = inGrid.l;
                _uva.y = inGrid.t;
                _uvb.x = inGrid.l;
                _uvb.y = inGrid.b;
                _uvc.x = inGrid.r;
                _uvc.y = inGrid.t;
                _uvd.x = inGrid.r;
                _uvd.y = inGrid.b;
              }
              let tempVal;
              if ((gid & TileFlag.DIAGONAL) >>> 0) {
                tempVal = _uvb;
                _uvb = _uvc;
                _uvc = tempVal;
              }
              if ((gid & TileFlag.HORIZONTAL) >>> 0) {
                tempVal = _uva;
                _uva = _uvc;
                _uvc = tempVal;
                tempVal = _uvb;
                _uvb = _uvd;
                _uvd = tempVal;
              }
              if ((gid & TileFlag.VERTICAL) >>> 0) {
                tempVal = _uva;
                _uva = _uvb;
                _uvb = tempVal;
                tempVal = _uvc;
                _uvc = _uvd;
                _uvd = tempVal;
              }
            }
            function packRenderData() {
              if (_fillCount < 1 || !_curTexture) return;
              const vbCount = 4 * _fillCount;
              const ibCount = 6 * _fillCount;
              const tiledData = _curLayer.requestTiledRenderData();
              {
                tiledData.renderData = RenderData.add(vfmtPosUvColor, _accessor);
                tiledData.renderData.drawInfoType = RenderDrawInfoType.MIDDLEWARE;
              }
              tiledData.texture = _curTexture;
              const rd = tiledData.renderData;
              rd.resize(vbCount, ibCount);
              const vb = rd.chunk.vb;
              vb.set(_tempBuffers.subarray(0, vbCount * 9), 0);
              _fillCount = 0;
              _curTexture = null;
            }
            function traverseGrids(leftDown, rightTop, rowMoveDir, colMoveDir, comp) {
              if (rightTop.row < 0 || rightTop.col < 0) return;
              _curLayer = comp;
              const matrix = comp.node.worldMatrix;
              _vfOffset = 0;
              const tiledTiles = comp.tiledTiles;
              const texGrids = comp.texGrids;
              const tiles = comp.tiles;
              const vertStep = 9;
              const vertStep2 = vertStep * 2;
              const vertStep3 = vertStep * 3;
              const vertices = comp.vertices;
              let rowData;
              let col;
              let cols;
              let row;
              let rows;
              let colData;
              let tileSize;
              let grid;
              let gid = 0;
              let left = 0;
              let bottom = 0;
              let right = 0;
              let top = 0;
              let tiledNode;
              let colNodesCount = 0;
              let isCheckColRange = true;
              const diamondTile = false;
              flipTexture = _flipTexture;
              const color = new Float32Array(4);
              color[0] = comp.color.r / 255;
              color[1] = comp.color.g / 255;
              color[2] = comp.color.b / 255;
              color[3] = comp.color.a / 255;
              if (rowMoveDir === -1) {
                row = rightTop.row;
                rows = leftDown.row;
              } else {
                row = leftDown.row;
                rows = rightTop.row;
              }
              const _tempRows = Math.abs(leftDown.row - rightTop.row) + 1;
              const _tempClos = Math.abs(rightTop.col - leftDown.col) + 1;
              _tempBuffers = new Float32Array(_tempRows * _tempClos * 9 * 4);
              _fillCount = 0;
              const vertexBuf = _tempBuffers;
              for (; (rows - row) * rowMoveDir >= 0; row += rowMoveDir) {
                rowData = vertices[row];
                colNodesCount = comp.getNodesCountByRow(row);
                isCheckColRange = rowData && colNodesCount === 0;
                if (colMoveDir === 1) {
                  col = isCheckColRange && leftDown.col < rowData.minCol ? rowData.minCol : leftDown.col;
                  cols = isCheckColRange && rightTop.col > rowData.maxCol ? rowData.maxCol : rightTop.col;
                } else {
                  col = isCheckColRange && rightTop.col > rowData.maxCol ? rowData.maxCol : rightTop.col;
                  cols = isCheckColRange && leftDown.col < rowData.minCol ? rowData.minCol : leftDown.col;
                }
                for (; (cols - col) * colMoveDir >= 0; col += colMoveDir) {
                  colData = rowData && rowData[col];
                  if (colNodesCount > 0) {
                    packRenderData();
                    const nodes = comp.requestSubNodesData();
                    const celData = comp.getNodesByRowCol(row, col);
                    if (celData && celData.count > 0) {
                      nodes.subNodes = celData.list;
                    }
                  }
                  if (!colData) {
                    continue;
                  }
                  gid = tiles[colData.index];
                  grid = texGrids.get((gid & TileFlag.FLIPPED_MASK) >>> 0);
                  if (!grid) continue;
                  if (_curTexture !== grid.texture) {
                    packRenderData();
                    _curTexture = grid.texture;
                  }
                  tileSize = grid.tileset._tileSize;
                  left = colData.left - _moveX;
                  bottom = colData.bottom - _moveY;
                  right = left + tileSize.width;
                  top = bottom + tileSize.height;
                  tiledNode = tiledTiles[colData.index];
                  _vfOffset = _fillCount * 4 * 9;
                  if (!tiledNode) {
                    {
                      vec3_temps[0].x = left;
                      vec3_temps[0].y = top;
                      vec3_temps[1].x = left;
                      vec3_temps[1].y = bottom;
                      vec3_temps[2].x = right;
                      vec3_temps[2].y = top;
                      vec3_temps[3].x = right;
                      vec3_temps[3].y = bottom;
                    }
                    vec3_temps[0].transformMat4(matrix);
                    vertexBuf[_vfOffset] = vec3_temps[0].x;
                    vertexBuf[_vfOffset + 1] = vec3_temps[0].y;
                    vertexBuf[_vfOffset + 2] = vec3_temps[0].z;
                    vec3_temps[1].transformMat4(matrix);
                    vertexBuf[_vfOffset + vertStep] = vec3_temps[1].x;
                    vertexBuf[_vfOffset + vertStep + 1] = vec3_temps[1].y;
                    vertexBuf[_vfOffset + vertStep + 2] = vec3_temps[1].z;
                    vec3_temps[2].transformMat4(matrix);
                    vertexBuf[_vfOffset + vertStep2] = vec3_temps[2].x;
                    vertexBuf[_vfOffset + vertStep2 + 1] = vec3_temps[2].y;
                    vertexBuf[_vfOffset + vertStep2 + 2] = vec3_temps[2].z;
                    vec3_temps[3].transformMat4(matrix);
                    vertexBuf[_vfOffset + vertStep3] = vec3_temps[3].x;
                    vertexBuf[_vfOffset + vertStep3 + 1] = vec3_temps[3].y;
                    vertexBuf[_vfOffset + vertStep3 + 2] = vec3_temps[3].z;
                    vertexBuf.set(color, _vfOffset + 5);
                    vertexBuf.set(color, _vfOffset + vertStep + 5);
                    vertexBuf.set(color, _vfOffset + vertStep2 + 5);
                    vertexBuf.set(color, _vfOffset + vertStep3 + 5);
                  } else if (tiledNode.node.active) {
                    fillByTiledNode(tiledNode.node, color, vertexBuf, left, right, top, bottom, diamondTile);
                  }
                  flipTexture(grid, gid);
                  vertexBuf[_vfOffset + 3] = _uva.x;
                  vertexBuf[_vfOffset + 4] = _uva.y;
                  vertexBuf[_vfOffset + vertStep + 3] = _uvb.x;
                  vertexBuf[_vfOffset + vertStep + 4] = _uvb.y;
                  vertexBuf[_vfOffset + vertStep2 + 3] = _uvc.x;
                  vertexBuf[_vfOffset + vertStep2 + 4] = _uvc.y;
                  vertexBuf[_vfOffset + vertStep3 + 3] = _uvd.x;
                  vertexBuf[_vfOffset + vertStep3 + 4] = _uvd.y;
                  _fillCount++;
                  if (_fillCount >= MaxGridsLimit) {
                    packRenderData();
                  }
                }
              }
              packRenderData();
            }
            function fillByTiledNode(tiledNode, color, vbuf, left, right, top, bottom, diamondTile) {
              const vertStep = 9;
              const vertStep2 = vertStep * 2;
              const vertStep3 = vertStep * 3;
              tiledNode.updateWorldTransform();
              Mat4.fromRTS(_mat4_temp, tiledNode.rotation, tiledNode.position, tiledNode.scale);
              Vec3.set(_vec3u_temp, -(left + _moveX), -(bottom + _moveY), 0);
              Mat4.transform(_mat4_temp, _mat4_temp, _vec3u_temp);
              Mat4.multiply(_mat4_temp, tiledNode.parent.worldMatrix, _mat4_temp);
              const m = _mat4_temp;
              const tx = m.m12;
              const ty = m.m13;
              const a = m.m00;
              const b = m.m01;
              const c = m.m04;
              const d = m.m05;
              const justTranslate = a === 1 && b === 0 && c === 0 && d === 1;
              if (diamondTile) {
                const centerX = (left + right) / 2;
                const centerY = (top + bottom) / 2;
                if (justTranslate) {
                  vbuf[_vfOffset] = centerX + tx;
                  vbuf[_vfOffset + 1] = top + ty;
                  vbuf[_vfOffset + vertStep] = left + tx;
                  vbuf[_vfOffset + vertStep + 1] = centerY + ty;
                  vbuf[_vfOffset + vertStep2] = right + tx;
                  vbuf[_vfOffset + vertStep2 + 1] = centerY + ty;
                  vbuf[_vfOffset + vertStep3] = centerX + tx;
                  vbuf[_vfOffset + vertStep3 + 1] = bottom + ty;
                } else {
                  vbuf[_vfOffset] = centerX * a + top * c + tx;
                  vbuf[_vfOffset + 1] = centerX * b + top * d + ty;
                  vbuf[_vfOffset + vertStep] = left * a + centerY * c + tx;
                  vbuf[_vfOffset + vertStep + 1] = left * b + centerY * d + ty;
                  vbuf[_vfOffset + vertStep2] = right * a + centerY * c + tx;
                  vbuf[_vfOffset + vertStep2 + 1] = right * b + centerY * d + ty;
                  vbuf[_vfOffset + vertStep3] = centerX * a + bottom * c + tx;
                  vbuf[_vfOffset + vertStep3 + 1] = centerX * b + bottom * d + ty;
                }
              } else if (justTranslate) {
                vbuf[_vfOffset] = left + tx;
                vbuf[_vfOffset + 1] = top + ty;
                vbuf[_vfOffset + vertStep] = left + tx;
                vbuf[_vfOffset + vertStep + 1] = bottom + ty;
                vbuf[_vfOffset + vertStep2] = right + tx;
                vbuf[_vfOffset + vertStep2 + 1] = top + ty;
                vbuf[_vfOffset + vertStep3] = right + tx;
                vbuf[_vfOffset + vertStep3 + 1] = bottom + ty;
              } else {
                vbuf[_vfOffset] = left * a + top * c + tx;
                vbuf[_vfOffset + 1] = left * b + top * d + ty;
                vbuf[_vfOffset + vertStep] = left * a + bottom * c + tx;
                vbuf[_vfOffset + vertStep + 1] = left * b + bottom * d + ty;
                vbuf[_vfOffset + vertStep2] = right * a + top * c + tx;
                vbuf[_vfOffset + vertStep2 + 1] = right * b + top * d + ty;
                vbuf[_vfOffset + vertStep3] = right * a + bottom * c + tx;
                vbuf[_vfOffset + vertStep3 + 1] = right * b + bottom * d + ty;
              }
              vbuf.set(color, _vfOffset + 5);
              vbuf.set(color, _vfOffset + vertStep + 5);
              vbuf.set(color, _vfOffset + vertStep2 + 5);
              vbuf.set(color, _vfOffset + vertStep3 + 5);
            }

            const tiledLayerAssembler = exports('tiledLayerAssembler', {
              getAssembler() {
                return simple;
              }
            });
            TiledLayer.Assembler = tiledLayerAssembler;

        })
    };
}));

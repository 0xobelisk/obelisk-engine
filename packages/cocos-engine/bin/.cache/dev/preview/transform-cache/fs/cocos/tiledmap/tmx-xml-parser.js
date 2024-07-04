System.register("q-bundled:///fs/cocos/tiledmap/tmx-xml-parser.js", ["../2d/components/label.js", "../../external/compression/ZipUtils.js", "../../external/compression/zlib.min.js", "../asset/asset-manager/plist-parser.js", "./tiled-types.js", "../core/index.js"], function (_export, _context) {
  "use strict";

  var Label, codec, zlib, SAXParser, Orientation, RenderOrder, StaggerAxis, StaggerIndex, TileFlag, TMXImageLayerInfo, TMXLayerInfo, TMXObjectGroupInfo, TMXObjectType, TMXTilesetInfo, Color, errorID, logID, Size, Vec2, TMXMapInfo;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
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
  function uint8ArrayToUint32Array(uint8Arr) {
    if (uint8Arr.length % 4 !== 0) return null;
    var arrLen = uint8Arr.length / 4;
    var retArr = window.Uint32Array ? new Uint32Array(arrLen) : [];
    for (var i = 0; i < arrLen; i++) {
      var offset = i * 4;
      retArr[i] = uint8Arr[offset] + uint8Arr[offset + 1] * (1 << 8) + uint8Arr[offset + 2] * (1 << 16) + uint8Arr[offset + 3] * (1 << 24);
    }
    return retArr;
  }
  function strToHAlign(value) {
    var hAlign = Label.HorizontalAlign;
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
    var vAlign = Label.VerticalAlign;
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
      var a = parseInt(value.substr(0, 2), 16) || 255;
      var r = parseInt(value.substr(2, 2), 16) || 0;
      var g = parseInt(value.substr(4, 2), 16) || 0;
      var b = parseInt(value.substr(6, 2), 16) || 0;
      return new Color(r, g, b, a);
    } else {
      var _r = parseInt(value.substr(0, 2), 16) || 0;
      var _g = parseInt(value.substr(2, 2), 16) || 0;
      var _b = parseInt(value.substr(4, 2), 16) || 0;
      return new Color(_r, _g, _b, 255);
    }
  }
  function getPropertyList(node, map) {
    var res = [];
    var properties = node.getElementsByTagName('properties');
    for (var i = 0; i < properties.length; ++i) {
      var property = properties[i].getElementsByTagName('property');
      for (var j = 0; j < property.length; ++j) {
        res.push(property[j]);
      }
    }
    map = map || {};
    for (var _i = 0; _i < res.length; _i++) {
      var element = res[_i];
      var name = element.getAttribute('name');
      var type = element.getAttribute('type') || 'string';
      var value = element.getAttribute('value');
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

  /**
   * <p>cc.TMXMapInfo contains the information about the map like: <br/>
   * - Map orientation (hexagonal, isometric or orthogonal)<br/>
   * - Tile size<br/>
   * - Map size</p>
   *
   * <p>And it also contains: <br/>
   * - Layers (an array of TMXLayerInfo objects)<br/>
   * - Tilesets (an array of TMXTilesetInfo objects) <br/>
   * - ObjectGroups (an array of TMXObjectGroupInfo objects) </p>
   *
   * <p>This information is obtained from the TMX file. </p>
   * @class TMXMapInfo
   */
  return {
    setters: [function (_dComponentsLabelJs) {
      Label = _dComponentsLabelJs.Label;
    }, function (_externalCompressionZipUtilsJs) {
      codec = _externalCompressionZipUtilsJs.default;
    }, function (_externalCompressionZlibMinJs) {
      zlib = _externalCompressionZlibMinJs.default;
    }, function (_assetAssetManagerPlistParserJs) {
      SAXParser = _assetAssetManagerPlistParserJs.SAXParser;
    }, function (_tiledTypesJs) {
      Orientation = _tiledTypesJs.Orientation;
      RenderOrder = _tiledTypesJs.RenderOrder;
      StaggerAxis = _tiledTypesJs.StaggerAxis;
      StaggerIndex = _tiledTypesJs.StaggerIndex;
      TileFlag = _tiledTypesJs.TileFlag;
      TMXImageLayerInfo = _tiledTypesJs.TMXImageLayerInfo;
      TMXLayerInfo = _tiledTypesJs.TMXLayerInfo;
      TMXObjectGroupInfo = _tiledTypesJs.TMXObjectGroupInfo;
      TMXObjectType = _tiledTypesJs.TMXObjectType;
      TMXTilesetInfo = _tiledTypesJs.TMXTilesetInfo;
    }, function (_coreIndexJs) {
      Color = _coreIndexJs.Color;
      errorID = _coreIndexJs.errorID;
      logID = _coreIndexJs.logID;
      Size = _coreIndexJs.Size;
      Vec2 = _coreIndexJs.Vec2;
    }],
    execute: function () {
      _export("TMXMapInfo", TMXMapInfo = /*#__PURE__*/function () {
        function TMXMapInfo(tmxFile, tsxContentMap, spfTexturesMap, textureSizes, imageLayerTextures) {
          /**
           * Properties of the map info.
           * @property {Array}    properties
           */
          this.properties = {};
          /**
           * Map orientation.
           * @property {Number}   orientation
           */
          this.orientation = null;
          /**
           * Parent element.
           * @property {Object}   parentElement
           */
          this.parentElement = null;
          /**
           * Parent GID.
           * @property {Number}   parentGID
           */
          this.parentGID = 0;
          /**
           * Layer attributes.
           * @property {Object}   layerAttrs
           */
          this.layerAttrs = 0;
          /**
           * Is reading storing characters stream.
           * @property {Boolean}  storingCharacters
           */
          this.storingCharacters = false;
          /**
           * Current string stored from characters stream.
           * @property {String}   currentString
           */
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
          // map of textures indexed by name
          this._spriteFrameMap = null;
          this._spfSizeMap = {};
          // hex map values
          this._staggerAxis = null;
          this._staggerIndex = null;
          this._hexSideLength = 0;
          this._imageLayerSPF = null;
          this.initWithXML(tmxFile, tsxContentMap, spfTexturesMap, textureSizes, imageLayerTextures);
        }

        /* Gets Map orientation.
         * @return {Number}
         */
        var _proto = TMXMapInfo.prototype;
        _proto.getOrientation = function getOrientation() {
          return this.orientation;
        }

        /**
         * Set the Map orientation.
         * @param {Number} value
         */;
        _proto.setOrientation = function setOrientation(value) {
          this.orientation = value;
        }
        /**
         * Gets the staggerAxis of map.
         * @return {TiledMap.StaggerAxis}
         */;
        _proto.getStaggerAxis = function getStaggerAxis() {
          return this._staggerAxis;
        }

        /**
         * Set the staggerAxis of map.
         * @param {TiledMap.StaggerAxis} value
         */;
        _proto.setStaggerAxis = function setStaggerAxis(value) {
          this._staggerAxis = value;
        }

        /**
         * Gets stagger index
         * @return {TiledMap.StaggerIndex}
         */;
        _proto.getStaggerIndex = function getStaggerIndex() {
          return this._staggerIndex;
        }

        /**
         * Set the stagger index.
         * @param {TiledMap.StaggerIndex} value
         */;
        _proto.setStaggerIndex = function setStaggerIndex(value) {
          this._staggerIndex = value;
        }

        /**
         * Gets Hex side length.
         * @return {Number}
         */;
        _proto.getHexSideLength = function getHexSideLength() {
          return this._hexSideLength;
        }

        /**
         * Set the Hex side length.
         * @param {Number} value
         */;
        _proto.setHexSideLength = function setHexSideLength(value) {
          this._hexSideLength = value;
        }

        /**
         * Map width & height
         * @return {Size}
         */;
        _proto.getMapSize = function getMapSize() {
          return new Size(this._mapSize.width, this._mapSize.height);
        }

        /**
         * Map width & height
         * @param {Size} value
         */;
        _proto.setMapSize = function setMapSize(value) {
          this._mapSize.width = value.width;
          this._mapSize.height = value.height;
        };
        /**
         * Tiles width & height
         * @return {Size}
         */
        _proto.getTileSize = function getTileSize() {
          return new Size(this._tileSize.width, this._tileSize.height);
        }

        /**
         * Tiles width & height
         * @param {Size} value
         */;
        _proto.setTileSize = function setTileSize(value) {
          this._tileSize.width = value.width;
          this._tileSize.height = value.height;
        };
        /**
         * Layers
         * @return {Array}
         */
        _proto.getLayers = function getLayers() {
          return this._layers;
        }

        /**
         * Layers
         * @param {cc.TMXLayerInfo} value
         */;
        _proto.setLayers = function setLayers(value) {
          this._allChildren.push(value);
          this._layers.push(value);
        }

        /**
         * ImageLayers
         * @return {Array}
         */;
        _proto.getImageLayers = function getImageLayers() {
          return this._imageLayers;
        }

        /**
         * ImageLayers
         * @param {cc.TMXImageLayerInfo} value
         */;
        _proto.setImageLayers = function setImageLayers(value) {
          this._allChildren.push(value);
          this._imageLayers.push(value);
        }

        /**
         * tilesets
         * @return {Array}
         */;
        _proto.getTilesets = function getTilesets() {
          return this._tilesets;
        }

        /**
         * tilesets
         * @param {cc.TMXTilesetInfo} value
         */;
        _proto.setTilesets = function setTilesets(value) {
          this._tilesets.push(value);
        }

        /**
         * ObjectGroups
         * @return {Array}
         */;
        _proto.getObjectGroups = function getObjectGroups() {
          return this._objectGroups;
        }

        /**
         * ObjectGroups
         * @param {cc.TMXObjectGroup} value
         */;
        _proto.setObjectGroups = function setObjectGroups(value) {
          this._allChildren.push(value);
          this._objectGroups.push(value);
        };
        _proto.getAllChildren = function getAllChildren() {
          return this._allChildren;
        }

        /**
         * parent element
         * @return {Object}
         */;
        _proto.getParentElement = function getParentElement() {
          return this.parentElement;
        }

        /**
         * parent element
         * @param {Object} value
         */;
        _proto.setParentElement = function setParentElement(value) {
          this.parentElement = value;
        }

        /**
         * parent GID
         * @return {Number}
         */;
        _proto.getParentGID = function getParentGID() {
          return this.parentGID;
        }

        /**
         * parent GID
         * @param {Number} value
         */;
        _proto.setParentGID = function setParentGID(value) {
          this.parentGID = value;
        }

        /**
         * Layer attribute
         * @return {Object}
         */;
        _proto.getLayerAttribs = function getLayerAttribs() {
          return this.layerAttrs;
        }

        /**
         * Layer attribute
         * @param {Object} value
         */;
        _proto.setLayerAttribs = function setLayerAttribs(value) {
          this.layerAttrs = value;
        }

        /**
         * Is reading storing characters stream
         * @return {Boolean}
         */;
        _proto.getStoringCharacters = function getStoringCharacters() {
          return this.storingCharacters;
        }

        /**
         * Is reading storing characters stream
         * @param {Boolean} value
         */;
        _proto.setStoringCharacters = function setStoringCharacters(value) {
          this.storingCharacters = value;
        }

        /**
         * Properties
         * @return {Array}
         */;
        _proto.getProperties = function getProperties() {
          return this.properties;
        }

        /**
         * Properties
         * @param {object} value
         */;
        _proto.setProperties = function setProperties(value) {
          this.properties = value;
        }

        /**
         * initializes a TMX format with an XML string and a TMX resource path
         * @param {String} tmxString
         * @param {Object} tsxMap
         * @param {Object} spfTextureMap
         * @return {Boolean}
         */;
        _proto.initWithXML = function initWithXML(tmxString, tsxMap, spfTextureMap, textureSizes, imageLayerTextures) {
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

          // tmp vars
          this.currentString = '';
          this.storingCharacters = false;
          this.layerAttrs = TMXLayerInfo.ATTRIB_NONE;
          this.parentElement = null;
          return this.parseXMLString(tmxString);
        }

        /**
         * Initializes parsing of an XML string, either a tmx (Map) string or tsx (Tileset) string
         * @param {String} xmlString
         * @param {Number} tilesetFirstGid
         * @return {Element}
         */;
        _proto.parseXMLString = function parseXMLString(xmlStr, tilesetFirstGid) {
          var parser = new SAXParser();
          var mapXML = parser.parse(xmlStr);
          var i;

          // PARSE <map>
          var map = mapXML.documentElement;
          var orientationStr = map.getAttribute('orientation');
          var staggerAxisStr = map.getAttribute('staggeraxis');
          var staggerIndexStr = map.getAttribute('staggerindex');
          var hexSideLengthStr = map.getAttribute('hexsidelength');
          var renderorderStr = map.getAttribute('renderorder');
          var version = map.getAttribute('version') || '1.0.0';
          if (map.nodeName === 'map') {
            var versionArr = version.split('.');
            var supportVersion = this._supportVersion;
            for (i = 0; i < supportVersion.length; i++) {
              var v = parseInt(versionArr[i]) || 0;
              var sv = supportVersion[i];
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
            var mapSize = new Size(0, 0);
            mapSize.width = parseFloat(map.getAttribute('width'));
            mapSize.height = parseFloat(map.getAttribute('height'));
            this.setMapSize(mapSize);
            mapSize = new Size(0, 0);
            mapSize.width = parseFloat(map.getAttribute('tilewidth'));
            mapSize.height = parseFloat(map.getAttribute('tileheight'));
            this.setTileSize(mapSize);

            // The parent element is the map
            this.properties = getPropertyList(map);
          }

          // PARSE <tileset>
          var tilesets = map.getElementsByTagName('tileset');
          if (map.nodeName !== 'map') {
            tilesets = [];
            tilesets.push(map);
          }
          for (i = 0; i < tilesets.length; i++) {
            var curTileset = tilesets[i];
            // If this is an external tileset then start parsing that
            var tsxName = curTileset.getAttribute('source');
            if (tsxName) {
              var currentFirstGID = parseInt(curTileset.getAttribute('firstgid'));
              var tsxXmlString = this._tsxContentMap[tsxName];
              if (tsxXmlString) {
                this.parseXMLString(tsxXmlString, currentFirstGID);
              }
            } else {
              var images = curTileset.getElementsByTagName('image');
              var collection = images.length > 1;
              var firstImage = images[0];
              var firstImageName = firstImage.getAttribute('source');
              firstImageName = firstImageName.replace(/\\/g, '/');
              var tiles = curTileset.getElementsByTagName('tile');
              var tileCount = tiles && tiles.length || 1;
              var tile = null;
              var tilesetName = curTileset.getAttribute('name') || '';
              var tilesetSpacing = parseInt(curTileset.getAttribute('spacing')) || 0;
              var tilesetMargin = parseInt(curTileset.getAttribute('margin')) || 0;
              var fgid = tilesetFirstGid || parseInt(curTileset.getAttribute('firstgid')) || 0;
              var tilesetSize = new Size(0, 0);
              tilesetSize.width = parseFloat(curTileset.getAttribute('tilewidth'));
              tilesetSize.height = parseFloat(curTileset.getAttribute('tileheight'));

              // parse tile offset
              var curTileOffset = curTileset.getElementsByTagName('tileoffset')[0];
              var tileOffsetX = 0;
              var tileOffsetY = 0;
              if (curTileOffset) {
                tileOffsetX = parseFloat(curTileOffset.getAttribute('x')) || 0;
                tileOffsetY = parseFloat(curTileOffset.getAttribute('y')) || 0;
              }
              var tileset = null;
              for (var tileIdx = 0; tileIdx < tileCount; tileIdx++) {
                var curImage = images[tileIdx] ? images[tileIdx] : firstImage;
                if (!curImage) continue;
                var curImageName = curImage.getAttribute('source');
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
                      var nameWithPostfix = TMXMapInfo.getNameWithPostfix(curImageName);
                      tileset.imageName = nameWithPostfix;
                      tileset.sourceImage = this._spriteFrameMap[nameWithPostfix];
                      if (!tileset.sourceImage) {
                        var shortName = TMXMapInfo.getShortName(curImageName);
                        tileset.imageName = shortName;
                        tileset.sourceImage = this._spriteFrameMap[shortName];
                        if (!tileset.sourceImage) {
                          console.error("[error]: " + shortName + " not find in [" + Object.keys(this._spriteFrameMap).join(', ') + "]");
                          errorID(7221, curImageName);
                          console.warn("Please try asset type of " + curImageName + " to 'sprite-frame'");
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

                // parse tiles by tileIdx
                tile = tiles && tiles[tileIdx];
                if (!tile) {
                  continue;
                }
                this.parentGID = fgid + (parseInt(tile.getAttribute('id')) || 0);
                var tileImages = tile.getElementsByTagName('image');
                if (tile.hasAttribute('x') && tile.hasAttribute('y')) {
                  tileset.imageOffset = new Vec2(parseFloat(tile.getAttribute('x')) || 0, parseFloat(tile.getAttribute('y')) || 0);
                }
                var hastilesize = tile.hasAttribute('width') && tile.hasAttribute('height');
                if (hastilesize) {
                  tileset._tileSize.width = parseFloat(tile.getAttribute('width')) || 0;
                  tileset._tileSize.height = parseFloat(tile.getAttribute('height')) || 0;
                }
                if (tileImages && tileImages.length > 0) {
                  var image = tileImages[0];
                  var imageName = image.getAttribute('source');
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
                    var _nameWithPostfix = TMXMapInfo.getNameWithPostfix(imageName);
                    tileset.imageName = _nameWithPostfix;
                    tileset.sourceImage = this._spriteFrameMap[_nameWithPostfix];
                    if (!tileset.sourceImage) {
                      var _shortName = TMXMapInfo.getShortName(imageName);
                      tileset.imageName = _shortName;
                      tileset.sourceImage = this._spriteFrameMap[_shortName];
                      if (!tileset.sourceImage) {
                        errorID(7221, imageName);
                        console.warn("Please try asset type of " + imageName + " to 'sprite-frame'");
                      }
                    }
                  }
                  tileset.firstGid = this.parentGID & TileFlag.FLIPPED_MASK;
                }
                var pid = (TileFlag.FLIPPED_MASK & this.parentGID) >>> 0;
                this._tileProperties.set(pid, getPropertyList(tile));
                var animations = tile.getElementsByTagName('animation');
                if (animations && animations.length > 0) {
                  var animation = animations[0];
                  var framesData = animation.getElementsByTagName('frame');
                  var animationProp = {
                    frames: [],
                    dt: 0,
                    frameIdx: 0
                  };
                  this._tileAnimations.set(pid, animationProp);
                  var frames = animationProp.frames;
                  for (var frameIdx = 0; frameIdx < framesData.length; frameIdx++) {
                    var frame = framesData[frameIdx];
                    var tileid = fgid + (parseInt(frame.getAttribute('tileid')) || 0);
                    var duration = parseFloat(frame.getAttribute('duration')) || 0;
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

          // PARSE <layer> & <objectgroup> in order
          var childNodes = map.childNodes;
          for (i = 0; i < childNodes.length; i++) {
            var childNode = childNodes[i];
            if (this._shouldIgnoreNode(childNode)) {
              continue;
            }
            if (childNode.nodeName === 'imagelayer') {
              var imageLayer = this._parseImageLayer(childNode);
              if (imageLayer) {
                this.setImageLayers(imageLayer);
              }
            }
            if (childNode.nodeName === 'layer') {
              var layer = this._parseLayer(childNode);
              this.setLayers(layer);
            }
            if (childNode.nodeName === 'objectgroup') {
              var objectGroup = this._parseObjectGroup(childNode);
              this.setObjectGroups(objectGroup);
            }
          }
          return map;
        };
        _proto._shouldIgnoreNode = function _shouldIgnoreNode(node) {
          return node.nodeType === 3 // text
          || node.nodeType === 8 // comment
          || node.nodeType === 4; // cdata
        };
        _proto._parseImageLayer = function _parseImageLayer(selLayer) {
          var datas = selLayer.getElementsByTagName('image');
          if (!datas || datas.length === 0) return null;
          var imageLayer = new TMXImageLayerInfo();
          imageLayer.name = selLayer.getAttribute('name');
          imageLayer.offset.x = parseFloat(selLayer.getAttribute('offsetx')) || 0;
          imageLayer.offset.y = parseFloat(selLayer.getAttribute('offsety')) || 0;
          var visible = selLayer.getAttribute('visible');
          imageLayer.visible = !(visible === '0');
          var opacity = selLayer.getAttribute('opacity');
          imageLayer.opacity = opacity ? Math.round(255 * parseFloat(opacity)) : 255;
          var tintColor = selLayer.getAttribute('tintcolor');
          imageLayer.tintColor = tintColor ? strToColor(tintColor) : null;
          var data = datas[0];
          var source = data.getAttribute('source');
          imageLayer.sourceImage = this._imageLayerSPF[source];
          imageLayer.width = parseInt(data.getAttribute('width')) || 0;
          imageLayer.height = parseInt(data.getAttribute('height')) || 0;
          imageLayer.trans = strToColor(data.getAttribute('trans'));
          if (!imageLayer.sourceImage) {
            errorID(7221, source);
            console.warn("Please try asset type of " + source + " to 'sprite-frame'");
            return null;
          }
          return imageLayer;
        };
        _proto._parseLayer = function _parseLayer(selLayer) {
          var data = selLayer.getElementsByTagName('data')[0];
          var layer = new TMXLayerInfo();
          layer.name = selLayer.getAttribute('name');
          var layerSize = new Size(0, 0);
          layerSize.width = parseFloat(selLayer.getAttribute('width'));
          layerSize.height = parseFloat(selLayer.getAttribute('height'));
          layer.layerSize = layerSize;
          var visible = selLayer.getAttribute('visible');
          layer.visible = !(visible === '0');
          var opacity = selLayer.getAttribute('opacity');
          if (opacity) layer.opacity = Math.round(255 * parseFloat(opacity));else layer.opacity = 255;
          layer.offset = new Vec2(parseFloat(selLayer.getAttribute('offsetx')) || 0, parseFloat(selLayer.getAttribute('offsety')) || 0);
          var tintColor = selLayer.getAttribute('tintcolor');
          layer.tintColor = tintColor ? strToColor(tintColor) : null;
          var nodeValue = '';
          for (var j = 0; j < data.childNodes.length; j++) {
            nodeValue += data.childNodes[j].nodeValue;
          }
          nodeValue = nodeValue.trim();

          // Unpack the tilemap data
          var compression = data.getAttribute('compression');
          var encoding = data.getAttribute('encoding');
          if (compression && compression !== 'gzip' && compression !== 'zlib') {
            logID(7218);
            return null;
          }
          var tiles;
          switch (compression) {
            case 'gzip':
              tiles = codec.unzipBase64AsArray(nodeValue, 4);
              break;
            case 'zlib':
              {
                var inflator = new zlib.Inflate(codec.Base64.decodeAsArray(nodeValue, 1));
                tiles = uint8ArrayToUint32Array(inflator.decompress());
                break;
              }
            case null:
            case '':
              // Uncompressed
              if (encoding === 'base64') tiles = codec.Base64.decodeAsArray(nodeValue, 4);else if (encoding === 'csv') {
                tiles = [];
                var csvTiles = nodeValue.split(',');
                for (var csvIdx = 0; csvIdx < csvTiles.length; csvIdx++) tiles.push(parseInt(csvTiles[csvIdx]));
              } else {
                // XML format
                var selDataTiles = data.getElementsByTagName('tile');
                tiles = [];
                for (var xmlIdx = 0; xmlIdx < selDataTiles.length; xmlIdx++) tiles.push(parseInt(selDataTiles[xmlIdx].getAttribute('gid')));
              }
              break;
            default:
              if (this.layerAttrs === TMXLayerInfo.ATTRIB_NONE) logID(7219);
              break;
          }
          if (tiles) {
            layer.tiles = new Uint32Array(tiles);
          }

          // The parent element is the last layer
          layer.properties = getPropertyList(selLayer);
          return layer;
        };
        _proto._parseObjectGroup = function _parseObjectGroup(selGroup) {
          var objectGroup = new TMXObjectGroupInfo();
          objectGroup.name = selGroup.getAttribute('name') || '';
          objectGroup.offset = new Vec2(parseFloat(selGroup.getAttribute('offsetx')), parseFloat(selGroup.getAttribute('offsety')));
          var opacity = selGroup.getAttribute('opacity');
          if (opacity) objectGroup.opacity = Math.round(255 * parseFloat(opacity));else objectGroup.opacity = 255;
          var tintColor = selGroup.getAttribute('tintcolor');
          objectGroup.tintColor = tintColor ? strToColor(tintColor) : null;
          var visible = selGroup.getAttribute('visible');
          if (visible && parseInt(visible) === 0) objectGroup.visible = false;
          var color = selGroup.getAttribute('color');
          if (color) objectGroup.color.fromHEX(color);
          var draworder = selGroup.getAttribute('draworder');
          if (draworder) objectGroup.draworder = draworder;

          // set the properties to the group
          objectGroup.setProperties(getPropertyList(selGroup));
          var objects = selGroup.getElementsByTagName('object');
          if (objects) {
            for (var j = 0; j < objects.length; j++) {
              var selObj = objects[j];
              // The value for "type" was blank or not a valid class name
              // Create an instance of TMXObjectInfo to store the object and its properties
              var objectProp = {};

              // Set the id of the object
              objectProp.id = selObj.getAttribute('id') || j;

              // Set the name of the object to the value for "name"
              objectProp.name = selObj.getAttribute('name') || '';

              // Assign all the attributes as key/name pairs in the properties dictionary
              objectProp.width = parseFloat(selObj.getAttribute('width')) || 0;
              objectProp.height = parseFloat(selObj.getAttribute('height')) || 0;
              objectProp.x = parseFloat(selObj.getAttribute('x')) || 0;
              objectProp.y = parseFloat(selObj.getAttribute('y')) || 0;
              objectProp.rotation = parseFloat(selObj.getAttribute('rotation')) || 0;
              getPropertyList(selObj, objectProp);

              // visible
              var visibleAttr = selObj.getAttribute('visible');
              objectProp.visible = !(visibleAttr && parseInt(visibleAttr) === 0);

              // text
              var texts = selObj.getElementsByTagName('text');
              if (texts && texts.length > 0) {
                var text = texts[0];
                objectProp.type = TMXObjectType.TEXT;
                objectProp.wrap = text.getAttribute('wrap') === '1';
                objectProp.color = strToColor(text.getAttribute('color'));
                objectProp.halign = strToHAlign(text.getAttribute('halign'));
                objectProp.valign = strToVAlign(text.getAttribute('valign'));
                objectProp.pixelsize = parseInt(text.getAttribute('pixelsize')) || 16;
                objectProp.text = text.childNodes[0].nodeValue;
              }

              // image
              var gid = selObj.getAttribute('gid');
              if (gid) {
                objectProp.gid = parseInt(gid);
                objectProp.type = TMXObjectType.IMAGE;
              }

              // ellipse
              var ellipse = selObj.getElementsByTagName('ellipse');
              if (ellipse && ellipse.length > 0) {
                objectProp.type = TMXObjectType.ELLIPSE;
              }

              // polygon
              var polygonProps = selObj.getElementsByTagName('polygon');
              if (polygonProps && polygonProps.length > 0) {
                objectProp.type = TMXObjectType.POLYGON;
                var selPgPointStr = polygonProps[0].getAttribute('points');
                if (selPgPointStr) objectProp.points = this._parsePointsString(selPgPointStr);
              }

              // polyline
              var polylineProps = selObj.getElementsByTagName('polyline');
              if (polylineProps && polylineProps.length > 0) {
                objectProp.type = TMXObjectType.POLYLINE;
                var selPlPointStr = polylineProps[0].getAttribute('points');
                if (selPlPointStr) objectProp.polylinePoints = this._parsePointsString(selPlPointStr);
              }
              if (!objectProp.type) {
                objectProp.type = TMXObjectType.RECT;
              }

              // Add the object to the objectGroup
              objectGroup.objects.push(objectProp);
            }
            if (draworder !== 'index') {
              objectGroup.objects.sort(function (a, b) {
                return a.y - b.y;
              });
            }
          }
          return objectGroup;
        };
        _proto._parsePointsString = function _parsePointsString(pointsString) {
          if (!pointsString) return null;
          var points = [];
          var pointsStr = pointsString.split(' ');
          for (var i = 0; i < pointsStr.length; i++) {
            var selPointStr = pointsStr[i].split(',');
            points.push({
              x: parseFloat(selPointStr[0]),
              y: parseFloat(selPointStr[1])
            });
          }
          return points;
        }

        /**
         * Sets the tile animations.
         * @return {Object}
         */;
        _proto.setTileAnimations = function setTileAnimations(animations) {
          this._tileAnimations = animations;
        }

        /**
         * Gets the tile animations.
         * @return {Object}
         */;
        _proto.getTileAnimations = function getTileAnimations() {
          return this._tileAnimations;
        }

        /**
         * Gets the tile properties.
         * @return {Object}
         */;
        _proto.getTileProperties = function getTileProperties() {
          return this._tileProperties;
        }

        /**
         * Set the tile properties.
         * @param {Object} tileProperties
         */;
        _proto.setTileProperties = function setTileProperties(tileProperties) {
          this._tileProperties = tileProperties;
        }

        /**
         * Gets the currentString
         * @return {String}
         */;
        _proto.getCurrentString = function getCurrentString() {
          return this.currentString;
        }

        /**
         * Set the currentString
         * @param {String} currentString
         */;
        _proto.setCurrentString = function setCurrentString(currentString) {
          this.currentString = currentString;
        };
        TMXMapInfo.getNameWithPostfix = function getNameWithPostfix(name) {
          name = name.replace(/\\/g, '/');
          var slashIndex = name.lastIndexOf('/') + 1;
          var strLen = name.length;
          return name.substring(slashIndex, strLen);
        };
        TMXMapInfo.getShortName = function getShortName(name) {
          name = name.replace(/\\/g, '/');
          var slashIndex = name.lastIndexOf('/') + 1;
          var dotIndex = name.lastIndexOf('.');
          dotIndex = dotIndex < 0 ? name.length : dotIndex;
          return name.substring(slashIndex, dotIndex);
        };
        _createClass(TMXMapInfo, [{
          key: "mapSize",
          get: function get() {
            return this._mapSize;
          }
        }, {
          key: "tileSize",
          get: function get() {
            return this._tileSize;
          }
        }, {
          key: "mapWidth",
          get: function get() {
            return this._mapSize.width;
          },
          set: function set(width) {
            this._mapSize.width = width;
          }
        }, {
          key: "mapHeight",
          get: function get() {
            return this._mapSize.height;
          },
          set: function set(height) {
            this._mapSize.height = height;
          }
        }, {
          key: "tileWidth",
          get: function get() {
            return this._tileSize.width;
          },
          set: function set(width) {
            this._tileSize.width = width;
          }

          /**
           * Height of a tile
           */
        }, {
          key: "tileHeight",
          get: function get() {
            return this._tileSize.height;
          },
          set: function set(height) {
            this._tileSize.height = height;
          }
        }]);
        return TMXMapInfo;
      }());
    }
  };
});
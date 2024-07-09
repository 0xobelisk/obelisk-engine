System.register("q-bundled:///fs/cocos/tiledmap/tiled-types.js", ["../core/index.js", "../core/value-types/enum.js"], function (_export, _context) {
  "use strict";

  var Color, Rect, Size, Vec2, ccenum, TMXTilesetInfo, TMXObjectGroupInfo, TMXLayerInfo, TMXImageLayerInfo, Orientation, Property, TileFlag, StaggerAxis, StaggerIndex, RenderOrder, TMXObjectType;
  _export({
    TMXTilesetInfo: void 0,
    TMXObjectGroupInfo: void 0,
    TMXLayerInfo: void 0,
    TMXImageLayerInfo: void 0,
    Orientation: void 0,
    Property: void 0,
    TileFlag: void 0,
    StaggerAxis: void 0,
    StaggerIndex: void 0,
    RenderOrder: void 0,
    TMXObjectType: void 0
  });
  return {
    setters: [function (_coreIndexJs) {
      Color = _coreIndexJs.Color;
      Rect = _coreIndexJs.Rect;
      Size = _coreIndexJs.Size;
      Vec2 = _coreIndexJs.Vec2;
    }, function (_coreValueTypesEnumJs) {
      ccenum = _coreValueTypesEnumJs.ccenum;
    }],
    execute: function () {
      (function (Orientation) {
        Orientation[Orientation["ORTHO"] = 0] = "ORTHO";
        Orientation[Orientation["HEX"] = 1] = "HEX";
        Orientation[Orientation["ISO"] = 2] = "ISO";
      })(Orientation || _export("Orientation", Orientation = {}));
      ccenum(Orientation);

      /**
       * The property type of tiled map.
       * @enum TiledMap.Property
       * @static
       */
      (function (Property) {
        Property[Property["NONE"] = 0] = "NONE";
        Property[Property["MAP"] = 1] = "MAP";
        Property[Property["LAYER"] = 2] = "LAYER";
        Property[Property["OBJECTGROUP"] = 3] = "OBJECTGROUP";
        Property[Property["OBJECT"] = 4] = "OBJECT";
        Property[Property["TILE"] = 5] = "TILE";
      })(Property || _export("Property", Property = {}));
      ccenum(Property);

      /**
       * The tile flags of tiled map.
       * @enum TiledMap.TileFlag
       * @static
       */
      (function (TileFlag) {
        TileFlag[TileFlag["HORIZONTAL"] = 2147483648] = "HORIZONTAL";
        TileFlag[TileFlag["VERTICAL"] = 1073741824] = "VERTICAL";
        TileFlag[TileFlag["DIAGONAL"] = 536870912] = "DIAGONAL";
        TileFlag[TileFlag["FLIPPED_ALL"] = 4026531840] = "FLIPPED_ALL";
        TileFlag[TileFlag["FLIPPED_MASK"] = 268435455] = "FLIPPED_MASK";
      })(TileFlag || _export("TileFlag", TileFlag = {}));
      ccenum(TileFlag);

      /**
       * @en The stagger axis of Hex tiled map.
       * @zh 六边形地图的 stagger axis 值
       * @enum TiledMap.StaggerAxis
       * @static
       */
      (function (StaggerAxis) {
        StaggerAxis[StaggerAxis["STAGGERAXIS_X"] = 0] = "STAGGERAXIS_X";
        StaggerAxis[StaggerAxis["STAGGERAXIS_Y"] = 1] = "STAGGERAXIS_Y";
      })(StaggerAxis || _export("StaggerAxis", StaggerAxis = {}));
      ccenum(StaggerAxis);

      /**
       * @en The stagger index of Hex tiled map.
       * @zh 六边形地图的 stagger index 值
       * @enum TiledMap.RenderOrder
       * @static
       */
      (function (StaggerIndex) {
        StaggerIndex[StaggerIndex["STAGGERINDEX_ODD"] = 0] = "STAGGERINDEX_ODD";
        StaggerIndex[StaggerIndex["STAGGERINDEX_EVEN"] = 1] = "STAGGERINDEX_EVEN";
      })(StaggerIndex || _export("StaggerIndex", StaggerIndex = {}));
      ccenum(StaggerIndex);

      /**
       * @en The render order of tiled map.
       * @zh 地图的渲染顺序
       * @enum TiledMap.RenderOrder
       * @static
       */
      (function (RenderOrder) {
        RenderOrder[RenderOrder["RightDown"] = 0] = "RightDown";
        RenderOrder[RenderOrder["RightUp"] = 1] = "RightUp";
        RenderOrder[RenderOrder["LeftDown"] = 2] = "LeftDown";
        RenderOrder[RenderOrder["LeftUp"] = 3] = "LeftUp";
      })(RenderOrder || _export("RenderOrder", RenderOrder = {}));
      ccenum(RenderOrder);

      /**
       * @en TiledMap Object Type
       * @zh 地图物体类型
       * @enum TiledMap.TMXObjectType
       * @static
       */
      (function (TMXObjectType) {
        TMXObjectType[TMXObjectType["RECT"] = 0] = "RECT";
        TMXObjectType[TMXObjectType["ELLIPSE"] = 1] = "ELLIPSE";
        TMXObjectType[TMXObjectType["POLYGON"] = 2] = "POLYGON";
        TMXObjectType[TMXObjectType["POLYLINE"] = 3] = "POLYLINE";
        TMXObjectType[TMXObjectType["IMAGE"] = 4] = "IMAGE";
        TMXObjectType[TMXObjectType["TEXT"] = 5] = "TEXT";
      })(TMXObjectType || _export("TMXObjectType", TMXObjectType = {}));
      ccenum(TMXObjectType);

      // --- DEBUG types
      // export interface MixedGID extends Number {
      //     _mixed: string
      // }
      // export interface GID extends Number {
      //     _gid: string;
      // }
      // export interface GIDFlags extends Number {
      //     _flags: number;
      // }
      /**
       * Size in pixels of the image
       * @property {cc.Size} imageSize
       */
      /**
       * <p>cc.TMXTilesetInfo contains the information about the tilesets like: <br />
       * - Tileset name<br />
       * - Tileset spacing<br />
       * - Tileset margin<br />
       * - size of the tiles<br />
       * - Image used for the tiles<br />
       * - Image size<br />
       *
       * This information is obtained from the TMX file. </p>
       * @class TMXTilesetInfo
       */
      _export("TMXTilesetInfo", TMXTilesetInfo = class TMXTilesetInfo {
        constructor() {
          /**
           * Tileset name
           * @property {string} name
           */
          this.name = '';
          /**
           * First grid
           * @property {number} firstGid
           */
          this.firstGid = 0;
          /**
           * Spacing
           * @property {number} spacing
           */
          this.spacing = 0;
          /**
           * Margin
           * @property {number} margin
           */
          this.margin = 0;
          /**
           * Texture containing the tiles (should be sprite sheet / texture atlas)
           * @property {cc.SpriteFrame} sourceImage
           */
          this.sourceImage = void 0;
          // Size in pixels of the image
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
      });
      /**
       * <p>cc.TMXObjectGroupInfo contains the information about the object group like:
       * - group name
       * - group size
       * - group opacity at creation time (it can be modified at runtime)
       * - Whether the group is visible
       *
       * This information is obtained from the TMX file.</p>
       * @class TMXObjectGroupInfo
       */
      _export("TMXObjectGroupInfo", TMXObjectGroupInfo = class TMXObjectGroupInfo {
        constructor() {
          /**
           * Properties of the ObjectGroup info.
           * @property {Array} properties
           */
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
        /**
         * Gets the Properties.
         * @return {Array}
         */
        getProperties() {
          return this.properties;
        }

        /**
         * Set the Properties.
         * @param {object} value
         */
        setProperties(value) {
          this.properties = value;
        }
      });
      /**
       * cc.TMXLayerInfo contains the information about the layers like:
       * - Layer name
       * - Layer size
       * - Layer opacity at creation time (it can be modified at runtime)
       * - Whether the layer is visible (if it's not visible, then the CocosNode won't be created)
       * This information is obtained from the TMX file.
       * @class TMXLayerInfo
       */
      _export("TMXLayerInfo", TMXLayerInfo = class TMXLayerInfo {
        constructor() {
          /**
           * Properties of the layer info.
           * @property {Object} properties
           */
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
        /**
         * Gets the Properties.
         * @return {Object}
         */
        getProperties() {
          return this.properties;
        }

        /**
         * Set the Properties.
         * @param {object} value
         */
        setProperties(value) {
          this.properties = value;
        }

        /**
         * @property ATTRIB_NONE
         * @constant
         * @static
         * @type {Number}
         * @default 1
         */
      });
      /**
       * cc.TMXImageLayerInfo contains the information about the image layers.
       * This information is obtained from the TMX file.
       * @class TMXImageLayerInfo
       */
      TMXLayerInfo.ATTRIB_NONE = 1 << 0;
      /**
       * @property ATTRIB_BASE64
       * @constant
       * @static
       * @type {Number}
       * @default 2
       */
      TMXLayerInfo.ATTRIB_BASE64 = 1 << 1;
      /**
       * @property ATTRIB_GZIP
       * @constant
       * @static
       * @type {Number}
       * @default 4
       */
      TMXLayerInfo.ATTRIB_GZIP = 1 << 2;
      /**
       * @property ATTRIB_ZLIB
       * @constant
       * @static
       * @type {Number}
       * @default 8
       */
      TMXLayerInfo.ATTRIB_ZLIB = 1 << 3;
      _export("TMXImageLayerInfo", TMXImageLayerInfo = class TMXImageLayerInfo {
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
      });
    }
  };
});
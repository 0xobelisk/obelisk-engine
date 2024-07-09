System.register("q-bundled:///fs/cocos/tiledmap/tiled-map.js", ["../core/data/decorators/index.js", "../../../virtual/internal%253Aconstants.js", "../scene-graph/component.js", "../2d/framework/index.js", "./tiled-types.js", "./tmx-xml-parser.js", "./tiled-layer.js", "./tiled-object-group.js", "./tiled-map-asset.js", "../2d/components/sprite.js", "./tiled-utils.js", "../core/index.js", "../scene-graph/node-event.js", "../scene-graph/index.js"], function (_export, _context) {
  "use strict";

  var ccclass, displayOrder, executeInEditMode, help, menu, requireComponent, type, serializable, editable, EDITOR, JSB, Component, UITransform, Orientation, Property, RenderOrder, StaggerAxis, StaggerIndex, TileFlag, TMXImageLayerInfo, TMXLayerInfo, TMXObjectGroupInfo, TMXObjectType, TMXMapInfo, TiledLayer, TiledObjectGroup, TiledMapAsset, Sprite, fillTextureGrids, Size, Vec2, logID, sys, NodeEventType, Node, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _initializer, _initializer2, _initializer3, _class3, TiledMap;
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      displayOrder = _coreDataDecoratorsIndexJs.displayOrder;
      executeInEditMode = _coreDataDecoratorsIndexJs.executeInEditMode;
      help = _coreDataDecoratorsIndexJs.help;
      menu = _coreDataDecoratorsIndexJs.menu;
      requireComponent = _coreDataDecoratorsIndexJs.requireComponent;
      type = _coreDataDecoratorsIndexJs.type;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      editable = _coreDataDecoratorsIndexJs.editable;
    }, function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
      JSB = _virtualInternal253AconstantsJs.JSB;
    }, function (_sceneGraphComponentJs) {
      Component = _sceneGraphComponentJs.Component;
    }, function (_dFrameworkIndexJs) {
      UITransform = _dFrameworkIndexJs.UITransform;
    }, function (_tiledTypesJs) {
      Orientation = _tiledTypesJs.Orientation;
      Property = _tiledTypesJs.Property;
      RenderOrder = _tiledTypesJs.RenderOrder;
      StaggerAxis = _tiledTypesJs.StaggerAxis;
      StaggerIndex = _tiledTypesJs.StaggerIndex;
      TileFlag = _tiledTypesJs.TileFlag;
      TMXImageLayerInfo = _tiledTypesJs.TMXImageLayerInfo;
      TMXLayerInfo = _tiledTypesJs.TMXLayerInfo;
      TMXObjectGroupInfo = _tiledTypesJs.TMXObjectGroupInfo;
      TMXObjectType = _tiledTypesJs.TMXObjectType;
    }, function (_tmxXmlParserJs) {
      TMXMapInfo = _tmxXmlParserJs.TMXMapInfo;
    }, function (_tiledLayerJs) {
      TiledLayer = _tiledLayerJs.TiledLayer;
    }, function (_tiledObjectGroupJs) {
      TiledObjectGroup = _tiledObjectGroupJs.TiledObjectGroup;
    }, function (_tiledMapAssetJs) {
      TiledMapAsset = _tiledMapAssetJs.TiledMapAsset;
    }, function (_dComponentsSpriteJs) {
      Sprite = _dComponentsSpriteJs.Sprite;
    }, function (_tiledUtilsJs) {
      fillTextureGrids = _tiledUtilsJs.fillTextureGrids;
    }, function (_coreIndexJs) {
      Size = _coreIndexJs.Size;
      Vec2 = _coreIndexJs.Vec2;
      logID = _coreIndexJs.logID;
      sys = _coreIndexJs.sys;
    }, function (_sceneGraphNodeEventJs) {
      NodeEventType = _sceneGraphNodeEventJs.NodeEventType;
    }, function (_sceneGraphIndexJs) {
      Node = _sceneGraphIndexJs.Node;
    }],
    execute: function () {
      /**
       * @en Renders a TMX Tile Map in the scene.
       * @zh 在场景中渲染一个 tmx 格式的 Tile Map。
       * @class TiledMap
       * @extends Component
       */
      _export("TiledMap", TiledMap = (_dec = ccclass('cc.TiledMap'), _dec2 = help('i18n:cc.TiledMap'), _dec3 = menu('TiledMap/TiledMap'), _dec4 = requireComponent(UITransform), _dec5 = type(TiledMapAsset), _dec6 = displayOrder(7), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = executeInEditMode(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TiledMap, _Component);
        function TiledMap() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          // store all layer gid corresponding texture info, index is gid, format likes '[gid0]=tex-info,[gid1]=tex-info, ...'
          _this._texGrids = new Map();
          // store all tileset texture, index is tileset index, format likes '[0]=texture0, [1]=texture1, ...'
          _this._textures = [];
          _this._tilesets = [];
          _this._animations = new Map();
          _this._imageLayers = [];
          _this._layers = [];
          _this._groups = [];
          _this._images = [];
          _this._properties = {};
          _this._tileProperties = new Map();
          _this._mapInfo = null;
          _this._mapSize = new Size(0, 0);
          _this._tileSize = new Size(0, 0);
          _this._mapOrientation = Orientation.ORTHO;
          _this._isApplied = false;
          _this._tmxFile = _initializer && _initializer();
          /**
           * @en
           * Whether or not enabled tiled map auto culling. If you set the TiledMap skew or rotation, then need to manually
           *  disable this, otherwise, the rendering will be wrong.
           * @zh
           * 是否开启瓦片地图的自动裁减功能。瓦片地图如果设置了 skew, rotation 或者采用了摄像机的话，需要手动关闭，否则渲染会出错。
           */
          _this._enableCulling = _initializer2 && _initializer2();
          _this.cleanupImageCache = _initializer3 && _initializer3();
          return _this;
        }
        var _proto = TiledMap.prototype;
        /**
         * @en Gets the map size.
         * @zh 获取地图大小。
         * @method getMapSize
         * @return {Size}
         * @example
         * let mapSize = tiledMap.getMapSize();
         * cc.log("Map Size: " + mapSize);
         */
        _proto.getMapSize = function getMapSize() {
          return this._mapSize;
        }

        /**
         * @en Gets the tile size.
         * @zh 获取地图背景中 tile 元素的大小。
         * @method getTileSize
         * @return {Size}
         * @example
         * let tileSize = tiledMap.getTileSize();
         * cc.log("Tile Size: " + tileSize);
         */;
        _proto.getTileSize = function getTileSize() {
          return this._tileSize;
        }

        /**
         * @en map orientation.
         * @zh 获取地图方向。
         * @method getMapOrientation
         * @return {Number}
         * @example
         * let mapOrientation = tiledMap.getMapOrientation();
         * cc.log("Map Orientation: " + mapOrientation);
         */;
        _proto.getMapOrientation = function getMapOrientation() {
          return this._mapOrientation;
        }

        /**
         * @en object groups.
         * @zh 获取所有的对象层。
         * @method getObjectGroups
         * @return {TiledObjectGroup[]}
         * @example
         * let objGroups = titledMap.getObjectGroups();
         * for (let i = 0; i < objGroups.length; ++i) {
         *     cc.log("obj: " + objGroups[i]);
         * }
         */;
        _proto.getObjectGroups = function getObjectGroups() {
          return this._groups;
        }

        /**
         * @en Return the TMXObjectGroup for the specific group.
         * @zh 获取指定的 TMXObjectGroup。
         * @method getObjectGroup
         * @param {String} groupName
         * @return {TiledObjectGroup}
         * @example
         * let group = titledMap.getObjectGroup("Players");
         * cc.log("ObjectGroup: " + group);
         */;
        _proto.getObjectGroup = function getObjectGroup(groupName) {
          var groups = this._groups;
          for (var i = 0, l = groups.length; i < l; i++) {
            var group = groups[i];
            if (group && group.getGroupName() === groupName) {
              return group;
            }
          }
          return null;
        }

        /**
         * @en Gets the map properties.
         * @zh 获取地图的属性。
         * @method getProperties
         * @return {Object[]}
         * @example
         * let properties = titledMap.getProperties();
         * for (let i = 0; i < properties.length; ++i) {
         *     cc.log("Properties: " + properties[i]);
         * }
         */;
        _proto.getProperties = function getProperties() {
          return this._properties;
        }

        /**
         * @en Return All layers array.
         * @zh 返回包含所有 layer 的数组。
         * @method getLayers
         * @returns {TiledLayer[]}
         * @example
         * let layers = titledMap.getLayers();
         * for (let i = 0; i < layers.length; ++i) {
         *     cc.log("Layers: " + layers[i]);
         * }
         */;
        _proto.getLayers = function getLayers() {
          return this._layers;
        }

        /**
         * @en return the cc.TiledLayer for the specific layer.
         * @zh 获取指定名称的 layer。
         * @method getLayer
         * @param {String} layerName
         * @return {TiledLayer}
         * @example
         * let layer = titledMap.getLayer("Player");
         * cc.log(layer);
         */;
        _proto.getLayer = function getLayer(layerName) {
          var layers = this._layers;
          for (var i = 0, l = layers.length; i < l; i++) {
            var layer = layers[i];
            if (layer && layer.getLayerName() === layerName) {
              return layer;
            }
          }
          return null;
        };
        _proto._changeLayer = function _changeLayer(layerName, replaceLayer) {
          var layers = this._layers;
          for (var i = 0, l = layers.length; i < l; i++) {
            var layer = layers[i];
            if (layer && layer.getLayerName() === layerName) {
              layers[i] = replaceLayer;
              return;
            }
          }
        }

        /**
         * @en Return the value for the specific property name.
         * @zh 通过属性名称，获取指定的属性。
         * @method getProperty
         * @param {String} propertyName
         * @return {String}
         * @example
         * let property = titledMap.getProperty("info");
         * cc.log("Property: " + property);
         */;
        _proto.getProperty = function getProperty(propertyName) {
          return this._properties[propertyName.toString()];
        }

        /**
         * @en Return properties dictionary for tile GID.
         * @zh 通过 GID ，获取指定的属性。
         * @method getPropertiesForGID
         * @param {Number} GID
         * @return {Object}
         * @example
         * let properties = titledMap.getPropertiesForGID(GID);
         * cc.log("Properties: " + properties);
         */;
        _proto.getPropertiesForGID = function getPropertiesForGID(gid) {
          return this._tileProperties.get(gid);
        };
        _proto.__preload = function __preload() {
          if (!this._tmxFile) {
            return;
          }
          if (this._isApplied === false) {
            this._applyFile();
            this._isApplied = true;
          }
        };
        _proto.onEnable = function onEnable() {
          this.node.on(NodeEventType.ANCHOR_CHANGED, this._syncAnchorPoint, this);
        };
        _proto.onDisable = function onDisable() {
          this.node.off(NodeEventType.ANCHOR_CHANGED, this._syncAnchorPoint, this);
        };
        _proto._applyFile = function _applyFile() {
          var spriteFrames = [];
          var spriteFramesCache = {};
          var file = this._tmxFile;
          if (file) {
            // let texValues = file.textures;
            var spfNames = file.spriteFrameNames;
            var spfSizes = file.spriteFrameSizes;
            var fSpriteFrames = file.spriteFrames;
            var spfTexturesMap = {};
            var spfTextureSizeMap = {};
            for (var i = 0; i < spfNames.length; ++i) {
              var texName = spfNames[i];
              // textures[texName] = texValues[i];
              spfTextureSizeMap[texName] = spfSizes[i];
              spriteFrames[i] = fSpriteFrames[i];
              var frame = spriteFrames[i];
              if (frame) {
                spriteFramesCache[frame.name] = frame;
                spfTexturesMap[texName] = frame;
              }
            }
            var imageLayerTextures = {};
            var texValues = file.imageLayerSpriteFrame;
            spfNames = file.imageLayerSpriteFrameNames;
            for (var _i = 0; _i < texValues.length; ++_i) {
              imageLayerTextures[spfNames[_i]] = texValues[_i];
            }
            var tsxFileNames = file.tsxFileNames;
            var tsxFiles = file.tsxFiles;
            var tsxContentMap = {};
            for (var _i2 = 0; _i2 < tsxFileNames.length; ++_i2) {
              if (tsxFileNames[_i2].length > 0) {
                tsxContentMap[tsxFileNames[_i2]] = tsxFiles[_i2].text;
              }
            }
            var mapInfo = new TMXMapInfo(file.tmxXmlStr, tsxContentMap, spfTexturesMap, spfTextureSizeMap, imageLayerTextures);
            var tilesets = mapInfo.getTilesets();
            if (!tilesets || tilesets.length === 0) {
              logID(7241);
            }
            this._buildWithMapInfo(mapInfo);
          } else {
            this._releaseMapInfo();
          }
        };
        _proto._releaseMapInfo = function _releaseMapInfo() {
          // remove the layers & object groups added before
          var layers = this._layers;
          for (var i = 0, l = layers.length; i < l; i++) {
            var _layers$i$node$parent, _layers$i$node$parent2;
            (_layers$i$node$parent = layers[i].node.parent) === null || _layers$i$node$parent === void 0 ? void 0 : _layers$i$node$parent.off(NodeEventType.SIZE_CHANGED, layers[i].updateCulling, layers[i]);
            (_layers$i$node$parent2 = layers[i].node.parent) === null || _layers$i$node$parent2 === void 0 ? void 0 : _layers$i$node$parent2.off(NodeEventType.TRANSFORM_CHANGED, layers[i].updateCulling, layers[i]);
            layers[i].node.removeFromParent();
            layers[i].node.destroy();
          }
          layers.length = 0;
          var groups = this._groups;
          for (var _i3 = 0, _l = groups.length; _i3 < _l; _i3++) {
            groups[_i3].node.removeFromParent();
            groups[_i3].node.destroy();
          }
          groups.length = 0;
          var images = this._images;
          for (var _i4 = 0, _l2 = images.length; _i4 < _l2; _i4++) {
            images[_i4].removeFromParent();
            images[_i4].destroy();
          }
          images.length = 0;
        };
        _proto._syncAnchorPoint = function _syncAnchorPoint() {
          var anchor = this.node._uiProps.uiTransformComp.anchorPoint;
          var leftTopX = this.node._uiProps.uiTransformComp.width * anchor.x;
          var leftTopY = this.node._uiProps.uiTransformComp.height * (1 - anchor.y);
          var i;
          var l;
          for (i = 0, l = this._layers.length; i < l; i++) {
            var layerInfo = this._layers[i];
            var layerNode = layerInfo.node;
            // Tiled layer sync anchor to map because it's old behavior,
            // do not change the behavior avoid influence user's existed logic.
            layerNode._uiProps.uiTransformComp.setAnchorPoint(anchor);
          }
          for (i = 0, l = this._groups.length; i < l; i++) {
            var groupInfo = this._groups[i];
            var groupNode = groupInfo.node._uiProps.uiTransformComp;
            // Group layer not sync anchor to map because it's old behavior,
            // do not change the behavior avoid influence user's existing logic.
            groupNode.anchorX = 0.5;
            groupNode.anchorY = 0.5;
            var x = groupInfo.offset.x - leftTopX + groupNode.width * groupNode.anchorX;
            var y = groupInfo.offset.y + leftTopY - groupNode.height * groupNode.anchorY;
            groupInfo.node.setPosition(x, y);
          }
          for (i = 0, l = this._images.length; i < l; i++) {
            var image = this._images[i]._uiProps.uiTransformComp;
            image.anchorX = 0.5;
            image.anchorY = 0.5;
            var _x = this._images[i]._offset.x - leftTopX + image.width * image.anchorX;
            var _y = this._images[i]._offset.y + leftTopY - image.height * image.anchorY;
            this._images[i].setPosition(_x, _y);
          }
        };
        _proto._fillAniGrids = function _fillAniGrids(texGrids, animations) {
          for (var _iterator = _createForOfIteratorHelperLoose(animations.keys()), _step; !(_step = _iterator()).done;) {
            var i = _step.value;
            var animation = animations.get(i);
            if (!animation) continue;
            var frames = animation.frames;
            for (var j = 0; j < frames.length; j++) {
              var frame = frames[j];
              frame.grid = texGrids.get(frame.tileid);
            }
          }
        };
        _proto._buildLayerAndGroup = function _buildLayerAndGroup() {
          var tilesets = this._tilesets;
          var texGrids = this._texGrids;
          var animations = this._animations;
          texGrids.clear();
          for (var i = 0, l = tilesets.length; i < l; ++i) {
            var tilesetInfo = tilesets[i];
            if (!tilesetInfo) continue;
            if (!tilesetInfo.sourceImage) {
              console.warn("Can't find the spriteFrame of tilesets " + i);
              continue;
            }
            fillTextureGrids(tilesetInfo, texGrids, tilesetInfo.sourceImage);
          }
          this._fillAniGrids(texGrids, animations);
          var layers = this._layers;
          var groups = this._groups;
          var images = this._images;
          var oldNodeNames = {};
          for (var _i5 = 0, n = layers.length; _i5 < n; _i5++) {
            oldNodeNames[layers[_i5].node.name] = true;
          }
          for (var _i6 = 0, _n = groups.length; _i6 < _n; _i6++) {
            oldNodeNames[groups[_i6].node.name] = true;
          }
          for (var _i7 = 0, _n2 = images.length; _i7 < _n2; _i7++) {
            oldNodeNames[images[_i7].name] = true;
          }
          layers = this._layers = [];
          groups = this._groups = [];
          images = this._images = [];
          var mapInfo = this._mapInfo;
          var node = this.node;
          var layerInfos = mapInfo.getAllChildren();
          var textures = this._textures;
          var maxWidth = 0;
          var maxHeight = 0;
          if (layerInfos && layerInfos.length > 0) {
            for (var _i8 = 0, len = layerInfos.length; _i8 < len; _i8++) {
              var layerInfo = layerInfos[_i8];
              var name = layerInfo.name;
              var child = this.node.getChildByName(name);
              oldNodeNames[name] = false;
              if (!child) {
                child = new Node();
                child.name = name;
                child.layer = node.layer;
                node.addChild(child);
              }
              child.setSiblingIndex(_i8);
              child.active = layerInfo.visible;
              if (layerInfo instanceof TMXLayerInfo) {
                var layer = child.getComponent(TiledLayer);
                if (!layer) {
                  layer = child.addComponent(TiledLayer);
                }
                layer.init(layerInfo, mapInfo, tilesets, textures, texGrids);
                layer.enableCulling = this._enableCulling;

                // tell the layerinfo to release the ownership of the tiles map.
                layerInfo.ownTiles = false;
                layers.push(layer);
              } else if (layerInfo instanceof TMXObjectGroupInfo) {
                var group = child.getComponent(TiledObjectGroup);
                if (!group) {
                  group = child.addComponent(TiledObjectGroup);
                }
                group._init(layerInfo, mapInfo, texGrids);
                groups.push(group);
              } else if (layerInfo instanceof TMXImageLayerInfo) {
                var spriteFrame = layerInfo.sourceImage;
                child.layerInfo = layerInfo;
                child._offset = new Vec2(layerInfo.offset.x, -layerInfo.offset.y);
                var image = child.getComponent(Sprite);
                if (!image) {
                  image = child.addComponent(Sprite);
                }
                var color = image.color;
                color.a *= layerInfo.opacity;
                image.spriteFrame = spriteFrame;
                var width = spriteFrame.width;
                var height = spriteFrame.height;
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
          var children = node.children;
          for (var _i9 = 0, _n3 = children.length; _i9 < _n3; _i9++) {
            var c = children[_i9];
            if (oldNodeNames[c.name]) {
              c.destroy();
            }
          }
          this.node._uiProps.uiTransformComp.setContentSize(maxWidth, maxHeight);
          this._syncAnchorPoint();
        };
        _proto._buildWithMapInfo = function _buildWithMapInfo(mapInfo) {
          var _this2 = this;
          this._mapInfo = mapInfo;
          this._mapSize = mapInfo.getMapSize();
          this._tileSize = mapInfo.getTileSize();
          this._mapOrientation = mapInfo.orientation;
          this._properties = mapInfo.properties;
          this._tileProperties = mapInfo.getTileProperties();
          this._imageLayers = mapInfo.getImageLayers();
          this._animations = mapInfo.getTileAnimations();
          this._tilesets = mapInfo.getTilesets();
          var tilesets = this._tilesets;
          this._textures.length = 0;
          var totalTextures = [];
          for (var i = 0, l = tilesets.length; i < l; ++i) {
            var tilesetInfo = tilesets[i];
            if (!tilesetInfo || !tilesetInfo.sourceImage) continue;
            this._textures[i] = tilesetInfo.sourceImage;
            totalTextures.push(tilesetInfo.sourceImage);
          }
          for (var _i10 = 0; _i10 < this._imageLayers.length; _i10++) {
            var imageLayer = this._imageLayers[_i10];
            if (!imageLayer || !imageLayer.sourceImage) continue;
            totalTextures.push(imageLayer.sourceImage);
          }
          this._buildLayerAndGroup();
          if (this.cleanupImageCache) {
            this._textures.forEach(function (tex) {
              _this2.doCleanupImageCache(tex);
            });
          }
        };
        _proto.doCleanupImageCache = function doCleanupImageCache(texture) {
          if (texture._image instanceof HTMLImageElement) {
            texture._image.src = '';
            if (JSB) texture._image.destroy();
          } else if (sys.hasFeature(sys.Feature.IMAGE_BITMAP) && texture._image instanceof ImageBitmap) {
            if (texture._image.close) texture._image.close();
          }
          texture._image = null;
        };
        _proto.lateUpdate = function lateUpdate(dt) {
          var animations = this._animations;
          var texGrids = this._texGrids;
          for (var _iterator2 = _createForOfIteratorHelperLoose(animations.keys()), _step2; !(_step2 = _iterator2()).done;) {
            var aniGID = _step2.value;
            var animation = animations.get(aniGID);
            var frames = animation.frames;
            var frame = frames[animation.frameIdx];
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
          var layers = this.getLayers();
          for (var i = 0, l = layers.length; i < l; i++) {
            var layer = layers[i];
            if (layer.hasAnimation() || layer.node.hasChangedFlags) {
              layer.markForUpdateRenderData();
            }
          }
        };
        _createClass(TiledMap, [{
          key: "tmxAsset",
          get:
          /**
           * @en The TiledMap Asset.
           * @zh TiledMap 资源。
           * @property {TiledMapAsset} tmxAsset
           * @default ""
           */

          function get() {
            return this._tmxFile;
          },
          set: function set(value) {
            if (this._tmxFile !== value || EDITOR) {
              this._tmxFile = value;
              this._applyFile();
              this._isApplied = true;
            }
          }
        }, {
          key: "enableCulling",
          get: function get() {
            return this._enableCulling;
          },
          set: function set(value) {
            this._enableCulling = value;
            var layers = this._layers;
            for (var i = 0; i < layers.length; ++i) {
              layers[i].enableCulling = value;
            }
          }
        }]);
        return TiledMap;
      }(Component), _class3.Orientation = Orientation, _class3.Property = Property, _class3.TileFlag = TileFlag, _class3.StaggerAxis = StaggerAxis, _class3.StaggerIndex = StaggerIndex, _class3.TMXObjectType = TMXObjectType, _class3.RenderOrder = RenderOrder, _class3), (_initializer = _applyDecoratedInitializer(_class2.prototype, "_tmxFile", [serializable], function () {
        return null;
      }), _applyDecoratedDescriptor(_class2.prototype, "tmxAsset", [_dec5, _dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "tmxAsset"), _class2.prototype), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_enableCulling", [serializable], function () {
        return true;
      }), _applyDecoratedDescriptor(_class2.prototype, "enableCulling", [editable], Object.getOwnPropertyDescriptor(_class2.prototype, "enableCulling"), _class2.prototype), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "cleanupImageCache", [serializable], function () {
        return true;
      })), _class2)) || _class) || _class) || _class) || _class) || _class));
    }
  };
});
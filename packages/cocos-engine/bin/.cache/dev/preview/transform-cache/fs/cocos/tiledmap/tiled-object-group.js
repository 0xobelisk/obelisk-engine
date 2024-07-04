System.register("q-bundled:///fs/cocos/tiledmap/tiled-object-group.js", ["../core/data/decorators/index.js", "../scene-graph/component.js", "../2d/components/sprite.js", "../2d/components/label.js", "../gfx/index.js", "./tiled-types.js", "../2d/framework/ui-transform.js", "../core/index.js", "../2d/assets/index.js", "../scene-graph/node.js"], function (_export, _context) {
  "use strict";

  var ccclass, help, type, requireComponent, Component, Sprite, Label, BlendFactor, TileFlag, Orientation, StaggerAxis, TMXObjectType, UITransform, CCBoolean, Vec2, Color, CCObject, SpriteFrame, Node, _dec, _dec2, _dec3, _dec4, _class, _class2, TiledObjectGroup;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      help = _coreDataDecoratorsIndexJs.help;
      type = _coreDataDecoratorsIndexJs.type;
      requireComponent = _coreDataDecoratorsIndexJs.requireComponent;
    }, function (_sceneGraphComponentJs) {
      Component = _sceneGraphComponentJs.Component;
    }, function (_dComponentsSpriteJs) {
      Sprite = _dComponentsSpriteJs.Sprite;
    }, function (_dComponentsLabelJs) {
      Label = _dComponentsLabelJs.Label;
    }, function (_gfxIndexJs) {
      BlendFactor = _gfxIndexJs.BlendFactor;
    }, function (_tiledTypesJs) {
      TileFlag = _tiledTypesJs.TileFlag;
      Orientation = _tiledTypesJs.Orientation;
      StaggerAxis = _tiledTypesJs.StaggerAxis;
      TMXObjectType = _tiledTypesJs.TMXObjectType;
    }, function (_dFrameworkUiTransformJs) {
      UITransform = _dFrameworkUiTransformJs.UITransform;
    }, function (_coreIndexJs) {
      CCBoolean = _coreIndexJs.CCBoolean;
      Vec2 = _coreIndexJs.Vec2;
      Color = _coreIndexJs.Color;
      CCObject = _coreIndexJs.CCObject;
    }, function (_dAssetsIndexJs) {
      SpriteFrame = _dAssetsIndexJs.SpriteFrame;
    }, function (_sceneGraphNodeJs) {
      Node = _sceneGraphNodeJs.Node;
    }],
    execute: function () {
      /**
       * @en Renders the TMX object group.
       * @zh 渲染 tmx object group。
       * @class TiledObjectGroup
       * @extends Component
       */
      _export("TiledObjectGroup", TiledObjectGroup = (_dec = ccclass('cc.TiledObjectGroup'), _dec2 = help('i18n:cc.TiledObjectGroup'), _dec3 = requireComponent(UITransform), _dec4 = type(CCBoolean), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TiledObjectGroup, _Component);
        function TiledObjectGroup() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._premultiplyAlpha = false;
          _this._groupName = void 0;
          _this._positionOffset = void 0;
          _this._mapInfo = void 0;
          _this._properties = void 0;
          _this._offset = void 0;
          _this._opacity = void 0;
          _this._tintColor = null;
          _this._animations = void 0;
          _this._hasAniObj = void 0;
          _this._texGrids = void 0;
          _this.aniObjects = void 0;
          _this._objects = [];
          return _this;
        }
        var _proto = TiledObjectGroup.prototype;
        /**
         * @en Offset position of child objects.
         * @zh 获取子对象的偏移位置。
         * @method getPositionOffset
         * @return {Vec2}
         * @example
         * let offset = tMXObjectGroup.getPositionOffset();
         */
        _proto.getPositionOffset = function getPositionOffset() {
          return this._positionOffset;
        }

        /**
         * @en List of properties stored in a dictionary.
         * @zh 以映射的形式获取属性列表。
         * @method getProperties
         * @return {Object}
         * @example
         * let offset = tMXObjectGroup.getProperties();
         */;
        _proto.getProperties = function getProperties() {
          return this._properties;
        }

        /**
         * @en Gets the Group name.
         * @zh 获取组名称。
         * @method getGroupName
         * @return {String}
         * @example
         * let groupName = tMXObjectGroup.getGroupName;
         */;
        _proto.getGroupName = function getGroupName() {
          return this._groupName;
        }

        /**
         * Return the value for the specific property name
         * @param {String} propertyName
         * @return {Object}
         */;
        _proto.getProperty = function getProperty(propertyName) {
          return this._properties[propertyName.toString()];
        }

        /**
         * @en
         * Return the object for the specific object name. <br />
         * It will return the 1st object found on the array for the given name.
         * @zh 获取指定的对象。
         * @method getObject
         * @param {String} objectName
         * @return {Object|Null}
         * @example
         * let object = tMXObjectGroup.getObject("Group");
         */;
        _proto.getObject = function getObject(objectName) {
          for (var i = 0, len = this._objects.length; i < len; i++) {
            var obj = this._objects[i];
            if (obj && obj.name === objectName) {
              return obj;
            }
          }
          // object not found
          return null;
        }

        /**
         * @en Gets the objects.
         * @zh 获取对象数组。
         * @method getObjects
         * @return {Array}
         * @example
         * let objects = tMXObjectGroup.getObjects();
         */;
        _proto.getObjects = function getObjects() {
          return this._objects;
        };
        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */
        _proto._init = function _init(groupInfo, mapInfo, texGrids) {
          var FLIPPED_MASK = TileFlag.FLIPPED_MASK;
          var FLAG_HORIZONTAL = TileFlag.HORIZONTAL;
          var FLAG_VERTICAL = TileFlag.VERTICAL;
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
          var mapSize = mapInfo.mapSize;
          var tileSize = mapInfo.tileSize;
          var width = 0;
          var height = 0;
          var colorVal = new Color();
          var iso = Orientation.ISO === mapInfo.orientation;
          if (mapInfo.orientation === Orientation.HEX) {
            if (mapInfo.getStaggerAxis() === StaggerAxis.STAGGERAXIS_X) {
              height = tileSize.height * (mapSize.height + 0.5);
              width = (tileSize.width + mapInfo.getHexSideLength()) * Math.floor(mapSize.width / 2) + tileSize.width * (mapSize.width % 2);
            } else {
              width = tileSize.width * (mapSize.width + 0.5);
              height = (tileSize.height + mapInfo.getHexSideLength()) * Math.floor(mapSize.height / 2) + tileSize.height * (mapSize.height % 2);
            }
          } else if (iso) {
            var wh = mapSize.width + mapSize.height;
            width = tileSize.width * 0.5 * wh;
            height = tileSize.height * 0.5 * wh;
          } else {
            width = mapSize.width * tileSize.width;
            height = mapSize.height * tileSize.height;
          }
          var transComp = this.node._uiProps.uiTransformComp;
          transComp.setContentSize(width, height);
          var leftTopX = width * transComp.anchorX;
          var leftTopY = height * (1 - transComp.anchorY);
          var objects = groupInfo.objects;
          var aliveNodes = {};
          for (var i = 0, l = objects.length; i < l; i++) {
            var object = objects[i];
            var objType = object.type;
            object.offset = new Vec2(object.x, object.y);
            var points = object.points || object.polylinePoints;
            if (points) {
              for (var pi = 0; pi < points.length; pi++) {
                points[pi].y *= -1;
              }
            }
            if (iso) {
              var posIdxX = object.x / tileSize.height;
              var posIdxY = object.y / tileSize.height;
              object.x = tileSize.width * 0.5 * (mapSize.height + posIdxX - posIdxY);
              object.y = tileSize.height * 0.5 * (mapSize.width + mapSize.height - posIdxX - posIdxY);
            } else {
              object.y = height - object.y;
            }
            if (objType === TMXObjectType.TEXT) {
              var textName = "text" + object.id;
              aliveNodes[textName] = true;
              var textNode = this.node.getChildByName(textName);
              if (!textNode) {
                textNode = new Node();
              }
              textNode.setRotationFromEuler(0, 0, -object.rotation);
              textNode.setPosition(object.x - leftTopX, object.y - leftTopY);
              textNode.name = textName;
              textNode.parent = this.node;
              textNode.setSiblingIndex(i);
              textNode.layer = this.node.layer;
              var label = textNode.getComponent(Label);
              if (!label) {
                label = textNode.addComponent(Label);
              }
              var textTransComp = textNode._uiProps.uiTransformComp;
              textNode.active = object.visible;
              textTransComp.anchorX = 0;
              textTransComp.anchorY = 1;
              if (this._tintColor) {
                colorVal.set(this._tintColor);
                colorVal.a *= this._opacity / 255;
                label.color.set(colorVal);
              } else {
                var c = label.color;
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
              var gid = object.gid;
              var gridGID = (gid & FLIPPED_MASK) >>> 0;
              var grid = texGrids.get(gridGID);
              if (!grid) continue;
              var tileset = grid.tileset;
              var imgName = "img" + object.id;
              aliveNodes[imgName] = true;
              var imgNode = this.node.getChildByName(imgName);
              object.width = object.width || grid.width;
              object.height = object.height || grid.height;

              // Delete image nodes implemented as private nodes
              // Use cc.Node to implement node-level requirements
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
                  object: object,
                  imgNode: imgNode,
                  gridGID: gridGID
                });
                this._hasAniObj = true;
              }
              var tileOffsetX = tileset.tileOffset.x;
              var tileOffsetY = tileset.tileOffset.y;
              imgNode.active = object.visible;
              imgNode.setRotationFromEuler(0, 0, -object.rotation);
              imgNode.setPosition(object.x - leftTopX, object.y - leftTopY);
              imgNode.name = imgName;
              imgNode.parent = this.node;
              imgNode.setSiblingIndex(i);
              imgNode.layer = this.node.layer;
              var sprite = imgNode.getComponent(Sprite);
              if (!sprite) {
                sprite = imgNode.addComponent(Sprite);
              }
              var imgTrans = imgNode._uiProps.uiTransformComp;
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
                var _c = sprite.color;
                _c.a *= this._opacity / 255;
              }
              sprite.sizeMode = Sprite.SizeMode.CUSTOM;

              // HACK: we should support _premultiplyAlpha when group had material
              var srcBlendFactor = this._premultiplyAlpha ? BlendFactor.ONE : BlendFactor.SRC_ALPHA;
              if (sprite.srcBlendFactor !== srcBlendFactor) {
                sprite.srcBlendFactor = srcBlendFactor;
                if (sprite.material) {
                  sprite._updateBlendFunc();
                }
              }
              var spf = grid.spriteFrame;
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

          // destroy useless node
          var children = this.node.children;
          var uselessExp = /^(?:img|text)\d+$/;
          for (var _i = 0, n = children.length; _i < n; _i++) {
            var _c2 = children[_i];
            var cName = _c2.name;
            var isUseless = uselessExp.test(cName);
            if (isUseless && !aliveNodes[cName]) _c2.destroy();
          }
        };
        _proto.update = function update(dt) {
          if (!this._hasAniObj) {
            return;
          }
          var aniObjects = this.aniObjects;
          var _texGrids = this._texGrids;
          var iso = Orientation.ISO === this._mapInfo.orientation;
          for (var i = 0, len = aniObjects.length; i < len; i++) {
            var aniObj = aniObjects[i];
            var gridGID = aniObj.gridGID;
            var grid = _texGrids.get(gridGID);
            if (!grid) {
              continue;
            }
            var tileset = grid.tileset;
            var object = aniObj.object;
            var imgNode = aniObj.imgNode;
            var tileOffsetX = tileset.tileOffset.x;
            var tileOffsetY = tileset.tileOffset.y;
            var imgTrans = imgNode._uiProps.uiTransformComp;
            if (iso) {
              imgTrans.anchorX = 0.5 + tileOffsetX / object.width;
              imgTrans.anchorY = tileOffsetY / object.height;
            } else {
              imgTrans.anchorX = tileOffsetX / object.width;
              imgTrans.anchorY = tileOffsetY / object.height;
            }
            var sp = imgNode.getComponent(Sprite);
            var spf = sp.spriteFrame;
            spf.rotated = grid._rotated;
            spf.rect = grid._rect;
            sp.spriteFrame = spf;
            sp.markForUpdateRenderData();
          }
        };
        _createClass(TiledObjectGroup, [{
          key: "premultiplyAlpha",
          get: function get() {
            return this._premultiplyAlpha;
          },
          set: function set(value) {
            this._premultiplyAlpha = value;
          }
        }, {
          key: "offset",
          get: function get() {
            return this._offset;
          }
        }]);
        return TiledObjectGroup;
      }(Component), (_applyDecoratedDescriptor(_class2.prototype, "premultiplyAlpha", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "premultiplyAlpha"), _class2.prototype)), _class2)) || _class) || _class) || _class));
    }
  };
});
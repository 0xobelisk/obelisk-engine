System.register("q-bundled:///fs/cocos/2d/components/mask.js", ["../../core/data/decorators/index.js", "../../../../virtual/internal%253Aconstants.js", "../../core/index.js", "./graphics.js", "../renderer/stencil-manager.js", "../../scene-graph/node-event-processor.js", "../renderer/render-entity.js", "./sprite.js", "../../scene-graph/index.js"], function (_export, _context) {
  "use strict";

  var ccclass, help, executionOrder, menu, tooltip, displayOrder, type, visible, serializable, range, slide, executeInEditMode, JSB, clamp, Color, Mat4, Vec2, Vec3, warnID, cclegacy, ccenum, error, Graphics, Stage, NodeEventProcessor, MaskMode, Sprite, NodeEventType, Component, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _class3, _worldMatrix, _vec2_temp, _mat4_temp, _circlePoints, MaskType, SEGMENTS_MIN, SEGMENTS_MAX, Mask;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _calculateCircle(center, radius, segments) {
    _circlePoints.length = 0;
    const anglePerStep = Math.PI * 2 / segments;
    for (let step = 0; step < segments; ++step) {
      _circlePoints.push(new Vec3(radius.x * Math.cos(anglePerStep * step) + center.x, radius.y * Math.sin(anglePerStep * step) + center.y, 0));
    }
    return _circlePoints;
  }
  /**
   * @en The type for mask.
   *
   * @zh 遮罩组件类型。
   */
  _export("MaskType", void 0);
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      help = _coreDataDecoratorsIndexJs.help;
      executionOrder = _coreDataDecoratorsIndexJs.executionOrder;
      menu = _coreDataDecoratorsIndexJs.menu;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
      displayOrder = _coreDataDecoratorsIndexJs.displayOrder;
      type = _coreDataDecoratorsIndexJs.type;
      visible = _coreDataDecoratorsIndexJs.visible;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      range = _coreDataDecoratorsIndexJs.range;
      slide = _coreDataDecoratorsIndexJs.slide;
      executeInEditMode = _coreDataDecoratorsIndexJs.executeInEditMode;
    }, function (_virtualInternal253AconstantsJs) {
      JSB = _virtualInternal253AconstantsJs.JSB;
    }, function (_coreIndexJs) {
      clamp = _coreIndexJs.clamp;
      Color = _coreIndexJs.Color;
      Mat4 = _coreIndexJs.Mat4;
      Vec2 = _coreIndexJs.Vec2;
      Vec3 = _coreIndexJs.Vec3;
      warnID = _coreIndexJs.warnID;
      cclegacy = _coreIndexJs.cclegacy;
      ccenum = _coreIndexJs.ccenum;
      error = _coreIndexJs.error;
    }, function (_graphicsJs) {
      Graphics = _graphicsJs.Graphics;
    }, function (_rendererStencilManagerJs) {
      Stage = _rendererStencilManagerJs.Stage;
    }, function (_sceneGraphNodeEventProcessorJs) {
      NodeEventProcessor = _sceneGraphNodeEventProcessorJs.NodeEventProcessor;
    }, function (_rendererRenderEntityJs) {
      MaskMode = _rendererRenderEntityJs.MaskMode;
    }, function (_spriteJs) {
      Sprite = _spriteJs.Sprite;
    }, function (_sceneGraphIndexJs) {
      NodeEventType = _sceneGraphIndexJs.NodeEventType;
      Component = _sceneGraphIndexJs.Component;
    }],
    execute: function () {
      _worldMatrix = new Mat4();
      _vec2_temp = new Vec2();
      _mat4_temp = new Mat4();
      _circlePoints = [];
      (function (MaskType) {
        MaskType[MaskType["GRAPHICS_RECT"] = 0] = "GRAPHICS_RECT";
        MaskType[MaskType["GRAPHICS_ELLIPSE"] = 1] = "GRAPHICS_ELLIPSE";
        MaskType[MaskType["GRAPHICS_STENCIL"] = 2] = "GRAPHICS_STENCIL";
        MaskType[MaskType["SPRITE_STENCIL"] = 3] = "SPRITE_STENCIL";
      })(MaskType || _export("MaskType", MaskType = {}));
      ccenum(MaskType);
      SEGMENTS_MIN = 3;
      SEGMENTS_MAX = 10000;
      /**
       * @en
       * The Mask Component.
       *
       * @zh
       * 遮罩组件。
       */
      _export("Mask", Mask = (_dec = ccclass('cc.Mask'), _dec2 = help('i18n:cc.Mask'), _dec3 = executionOrder(110), _dec4 = menu('2D/Mask'), _dec5 = type(MaskType), _dec6 = tooltip('i18n:mask.type'), _dec7 = displayOrder(14), _dec8 = tooltip('i18n:mask.inverted'), _dec9 = visible(function () {
        return this.type === MaskType.GRAPHICS_ELLIPSE;
      }), _dec10 = visible(function () {
        return this.type === MaskType.SPRITE_STENCIL;
      }), _dec11 = range([0, 1, 0.1]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = executeInEditMode(_class = (_class2 = (_class3 = class Mask extends Component {
        constructor(...args) {
          super(...args);
          this._type = _initializer && _initializer();
          this._inverted = _initializer2 && _initializer2();
          this._segments = _initializer3 && _initializer3();
          this._alphaThreshold = _initializer4 && _initializer4();
          this._sprite = null;
          this._graphics = null;
          this._stencilStage = Stage.DISABLED;
        }
        /**
         * @en
         * The mask type.
         *
         * @zh
         * 遮罩类型。
         */
        get type() {
          return this._type;
        }
        set type(value) {
          if (this._type === value) {
            return;
          }
          this._type = value;
          if (this._type !== MaskType.SPRITE_STENCIL) {
            if (this._sprite) {
              this.node.removeComponent(Sprite);
              this._sprite._destroyImmediate();
              this._sprite = null;
            }
            this._changeRenderType();
            this._updateGraphics();
            if (JSB) {
              this.subComp.renderEntity.setMaskMode(this._inverted ? MaskMode.MASK_INVERTED : MaskMode.MASK);
            }
          } else {
            if (this._graphics) {
              this._graphics.clear();
              this.node.removeComponent(Graphics);
              this._graphics._destroyImmediate();
              this._graphics = null;
            }
            this._changeRenderType();
            if (JSB) {
              this.subComp.renderEntity.setMaskMode(this._inverted ? MaskMode.MASK_INVERTED : MaskMode.MASK);
            }
          }
        }

        /**
         * @en
         * Reverse mask.
         * @zh
         * 反向遮罩。
         */
        get inverted() {
          return this._inverted;
        }
        set inverted(value) {
          this._inverted = value;
          this.subComp.stencilStage = this.inverted ? Stage.ENTER_LEVEL_INVERTED : Stage.ENTER_LEVEL;
          if (JSB) {
            this.subComp.renderEntity.setMaskMode(this._inverted ? MaskMode.MASK_INVERTED : MaskMode.MASK);
          }
        }

        /**
         * @en
         * The segments for ellipse mask.
         *
         * TODO: remove segments, not supported by graphics
         * @zh
         * 椭圆遮罩的曲线细分数。
         */
        get segments() {
          return this._segments;
        }
        set segments(value) {
          if (this._segments === value) {
            return;
          }
          this._segments = clamp(value, SEGMENTS_MIN, SEGMENTS_MAX);
          this._updateGraphics();
        }

        /**
         * @en
         * The mask image.
         *
         * @zh
         * 遮罩所需要的贴图。
         * @deprecated since v3.6.1
         */
        get spriteFrame() {
          if (this._sprite) {
            return this._sprite.spriteFrame;
          }
          return null;
        }
        set spriteFrame(value) {
          if (this._sprite) {
            this._sprite.spriteFrame = value;
          } else {
            error('please change type to sprite_stencil first');
          }
        }

        /**
         * @en
         * The alpha threshold.(Not supported Canvas Mode) <br/>
         * The content is drawn only where the stencil have pixel with alpha greater than the alphaThreshold. <br/>
         * Should be a float between 0 and 1. <br/>
         * This default to 0.1.
         * When it's set to 1, the stencil will discard all pixels, nothing will be shown.
         * @zh
         * Alpha 阈值（不支持 Canvas 模式）<br/>
         * 只有当模板的像素的 alpha 大于等于 alphaThreshold 时，才会绘制内容。<br/>
         * 该数值 0 ~ 1 之间的浮点数，默认值为 0.1
         * 当被设置为 1 时，会丢弃所有蒙版像素，所以不会显示任何内容
         */
        get alphaThreshold() {
          return this._alphaThreshold;
        }
        set alphaThreshold(value) {
          if (this._alphaThreshold === value) {
            return;
          }
          this._alphaThreshold = value;
          if (this.type === MaskType.SPRITE_STENCIL && this._sprite) {
            const mat = this._sprite.getMaterialInstance(0);
            mat.setProperty('alphaThreshold', this._alphaThreshold);
          }
        }

        /**
         * @en Rendering component for providing stencil buffer information.
         * @zh 用于提供 stencil buffer 信息的渲染组件。
         */
        get subComp() {
          return this._graphics || this._sprite;
        }
        onLoad() {
          this._changeRenderType();
          if (JSB) {
            if (this.subComp) {
              this.subComp.renderEntity.setMaskMode(this._inverted ? MaskMode.MASK_INVERTED : MaskMode.MASK);
            }
          }
        }
        onEnable() {
          this._changeRenderType(); // Maybe useless,a protect,may effect custom setting
          this._updateGraphics();
          this._enableRender();
          this.node.on(NodeEventType.ANCHOR_CHANGED, this._nodeStateChange, this);
          this.node.on(NodeEventType.SIZE_CHANGED, this._nodeStateChange, this);
        }
        onRestore() {
          this._changeRenderType();
          this._updateGraphics();
        }
        onDisable() {
          this._disableRender();
          this.node.off(NodeEventType.ANCHOR_CHANGED, this._nodeStateChange, this);
          this.node.off(NodeEventType.SIZE_CHANGED, this._nodeStateChange, this);
        }
        onDestroy() {
          this._removeMaskNode();
        }

        /**
         * @en Hit test with point in World Space.
         * @zh 世界空间中的点击测试。
         * @param worldPt @en point in World Space. @zh 世界空间中的点击点。
         */
        isHit(worldPt) {
          const uiTrans = this.node._uiProps.uiTransformComp;
          const size = uiTrans.contentSize;
          const w = size.width;
          const h = size.height;
          const testPt = _vec2_temp;
          this.node.getWorldMatrix(_worldMatrix);
          Mat4.invert(_mat4_temp, _worldMatrix);
          Vec2.transformMat4(testPt, worldPt, _mat4_temp);
          const ap = uiTrans.anchorPoint;
          testPt.x += ap.x * w;
          testPt.y += ap.y * h;
          let result = false;
          if (this.type === MaskType.GRAPHICS_RECT || this.type === MaskType.GRAPHICS_STENCIL || this.type === MaskType.SPRITE_STENCIL) {
            result = testPt.x >= 0 && testPt.y >= 0 && testPt.x <= w && testPt.y <= h;
          } else if (this.type === MaskType.GRAPHICS_ELLIPSE) {
            const rx = w / 2;
            const ry = h / 2;
            const px = testPt.x - 0.5 * w;
            const py = testPt.y - 0.5 * h;
            result = px * px / (rx * rx) + py * py / (ry * ry) < 1;
          }
          if (this._inverted) {
            result = !result;
          }
          return result;
        }
        _nodeStateChange(type) {
          this._updateGraphics();
        }
        _changeRenderType() {
          const isGraphics = this._type !== MaskType.SPRITE_STENCIL;
          if (isGraphics) {
            this._createGraphics();
          } else {
            this._createSprite();
          }
        }
        _createSprite() {
          if (!this._sprite) {
            let sprite = this._sprite = this.node.getComponent(Sprite);
            if (!sprite) {
              const node = this.node;
              sprite = this._sprite = node.addComponent(Sprite);
            }
          }
          this._sprite.stencilStage = this.inverted ? Stage.ENTER_LEVEL_INVERTED : Stage.ENTER_LEVEL;
          this._sprite.updateMaterial();
        }
        _createGraphics() {
          if (!this._graphics) {
            let graphics = this._graphics = this.node.getComponent(Graphics);
            if (!graphics) {
              const node = this.node;
              graphics = this._graphics = node.addComponent(Graphics);
            }
            graphics.lineWidth = 1;
            const color = Color.WHITE.clone();
            color.a = 0;
            graphics.fillColor = color;
          }
          this._graphics.stencilStage = this.inverted ? Stage.ENTER_LEVEL_INVERTED : Stage.ENTER_LEVEL;
        }
        _updateGraphics() {
          if (!this._graphics || this._type !== MaskType.GRAPHICS_RECT && this._type !== MaskType.GRAPHICS_ELLIPSE) {
            return;
          }
          const uiTrans = this.node._uiProps.uiTransformComp;
          const graphics = this._graphics;
          // Share render data with graphics content
          graphics.clear();
          const size = uiTrans.contentSize;
          const width = size.width;
          const height = size.height;
          const ap = uiTrans.anchorPoint;
          const x = -width * ap.x;
          const y = -height * ap.y;
          if (this._type === MaskType.GRAPHICS_RECT) {
            graphics.rect(x, y, width, height);
          } else if (this._type === MaskType.GRAPHICS_ELLIPSE) {
            const center = new Vec3(x + width / 2, y + height / 2, 0);
            const radius = new Vec3(width / 2, height / 2, 0);
            const points = _calculateCircle(center, radius, this._segments);
            for (let i = 0; i < points.length; ++i) {
              const point = points[i];
              if (i === 0) {
                graphics.moveTo(point.x, point.y);
              } else {
                graphics.lineTo(point.x, point.y);
              }
            }
            graphics.close();
          }
          graphics.fill();
        }
        _enableRender() {
          if (this.subComp) {
            this.subComp.enabled = true;
          }
        }
        _disableRender() {
          if (this.subComp) {
            this.subComp.stencilStage = Stage.DISABLED;
            this.subComp.updateMaterial();
            if (this.node.activeInHierarchy) {
              this.subComp.enabled = false;
            }
          }
        }
        _removeMaskNode() {
          if (this._sprite) {
            this._sprite = null;
          }
          if (this._graphics) {
            this._graphics = null;
          }
        }

        // deprecated interface
        /**
         * @deprecated Since v3.6, Because mask changes the inheritance relationship,
         * you can directly manipulate the rendering components under the same node to complete the operation
         */
        get customMaterial() {
          warnID(9007);
          if (this.subComp) {
            return this.subComp.customMaterial;
          }
          return null;
        }
        set customMaterial(val) {
          warnID(9007);
          if (this.subComp) {
            this.subComp.customMaterial = val;
          }
        }
        /**
         * @deprecated Since v3.6, Because mask changes the inheritance relationship,
         * you can directly manipulate the rendering components under the same node to complete the operation
         */
        get color() {
          warnID(9007);
          if (this.subComp) {
            return this.subComp.color;
          }
          return null;
        }
        set color(value) {
          warnID(9007);
          if (this.subComp && value) {
            this.subComp.color = value;
          }
        }
        /**
         * @deprecated Since v3.6, Because mask changes the inheritance relationship,
         * you can directly manipulate the rendering components under the same node to complete the operation
         */
        markForUpdateRenderData(enable = true) {
          warnID(9007);
          if (this.subComp) {
            this.subComp.markForUpdateRenderData(enable);
          }
        }
        /**
         * @deprecated Since v3.6, Because mask changes the inheritance relationship,
         * you can directly manipulate the rendering components under the same node to complete the operation
         */
        requestRenderData(any) {
          warnID(9007);
        }
        /**
         * @deprecated Since v3.6, Because mask changes the inheritance relationship,
         * you can directly manipulate the rendering components under the same node to complete the operation
         */
        destroyRenderData() {
          warnID(9007);
        }

        /**
         * @deprecated Since v3.6, Because mask changes the inheritance relationship,
         * you can directly manipulate the rendering components under the same node to complete the operation
         */
        updateRenderer() {
          warnID(9007);
          if (this.subComp) {
            this.subComp.updateRenderer();
          }
        }

        /**
         * @deprecated Since v3.6, Because mask changes the inheritance relationship,
         * you can directly manipulate the rendering components under the same node to complete the operation
         */
        fillBuffers(render) {
          warnID(9007);
        }
        /**
         * @deprecated Since v3.6, Because mask changes the inheritance relationship,
         * you can directly manipulate the rendering components under the same node to complete the operation
         */
        postUpdateAssembler(render) {
          warnID(9007);
        }
        /**
         * @deprecated Since v3.6, Because mask changes the inheritance relationship,
         * you can directly manipulate the rendering components under the same node to complete the operation
         */
        setNodeDirty() {
          warnID(9007);
          if (this.subComp) {
            this.subComp.setNodeDirty();
          }
        }
        /**
         * @deprecated Since v3.6, Because mask changes the inheritance relationship,
         * you can directly manipulate the rendering components under the same node to complete the operation
         */
        setTextureDirty() {
          warnID(9007);
          if (this.subComp) {
            this.subComp.setTextureDirty();
          }
        }
        /**
         * @deprecated Since v3.6, Because mask changes the inheritance relationship,
         * you can directly manipulate the rendering components under the same node to complete the operation
         */
        get sharedMaterial() {
          warnID(9007);
          if (this.subComp) {
            return this.subComp.sharedMaterial;
          }
          return null;
        }
        /**
         * @deprecated Since v3.6, Because mask changes the inheritance relationship,
         * you can directly manipulate the rendering components under the same node to complete the operation
         */
        get sharedMaterials() {
          warnID(9007);
          if (this.subComp) {
            return this.subComp.sharedMaterials;
          }
          return null;
        }
        set sharedMaterials(val) {
          warnID(9007);
          if (this.subComp && val) {
            this.subComp.sharedMaterials = val;
          }
        }
        /**
         * @deprecated Since v3.6, Because mask changes the inheritance relationship,
         * you can directly manipulate the rendering components under the same node to complete the operation
         */
        get material() {
          warnID(9007);
          if (this.subComp) {
            return this.subComp.material;
          }
          return null;
        }
        set material(val) {
          warnID(9007);
          if (this.subComp) {
            this.subComp.material = val;
          }
        }
        /**
         * @deprecated Since v3.6, Because mask changes the inheritance relationship,
         * you can directly manipulate the rendering components under the same node to complete the operation
         */
        get materials() {
          warnID(9007);
          if (this.subComp) {
            return this.subComp.materials;
          }
          return [null];
        }
        set materials(val) {
          warnID(9007);
          if (this.subComp) {
            this.subComp.materials = val;
          }
        }
        /**
         * @deprecated Since v3.6, Because mask changes the inheritance relationship,
         * you can directly manipulate the rendering components under the same node to complete the operation
         */
        getMaterial(idx) {
          warnID(9007);
          if (this.subComp) {
            return this.subComp.getSharedMaterial(idx);
          }
          return null;
        }
        /**
         * @deprecated Since v3.6, Because mask changes the inheritance relationship,
         * you can directly manipulate the rendering components under the same node to complete the operation
         */
        setMaterial(material, index) {
          warnID(9007);
          if (this.subComp) {
            this.subComp.setMaterial(material, index);
          }
        }
        /**
         * @deprecated Since v3.6, Because mask changes the inheritance relationship,
         * you can directly manipulate the rendering components under the same node to complete the operation
         */
        getMaterialInstance(idx) {
          warnID(9007);
          if (this.subComp) {
            return this.subComp.getMaterialInstance(idx);
          }
          return null;
        }
        /**
         * @deprecated Since v3.6, Because mask changes the inheritance relationship,
         * you can directly manipulate the rendering components under the same node to complete the operation
         */
        setMaterialInstance(matInst, index) {
          warnID(9007);
          if (this.subComp) {
            this.subComp.setMaterialInstance(matInst, index);
          }
        }
        /**
         * @deprecated Since v3.6, Because mask changes the inheritance relationship,
         * you can directly manipulate the rendering components under the same node to complete the operation
         */
        getRenderMaterial(index) {
          warnID(9007);
          if (this.subComp) {
            return this.subComp.getRenderMaterial(index);
          }
          return null;
        }
      }, _class3.Type = MaskType, _class3), (_applyDecoratedDescriptor(_class2.prototype, "type", [_dec5, _dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "type"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "inverted", [_dec7, _dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "inverted"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "segments", [_dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "segments"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "alphaThreshold", [_dec10, _dec11, slide], Object.getOwnPropertyDescriptor(_class2.prototype, "alphaThreshold"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "_type", [serializable], function () {
        return MaskType.GRAPHICS_RECT;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_inverted", [serializable], function () {
        return false;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "_segments", [serializable], function () {
        return 64;
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "_alphaThreshold", [serializable], function () {
        return 0.1;
      })), _class2)) || _class) || _class) || _class) || _class) || _class));
      NodeEventProcessor._maskComp = Mask;
      cclegacy.Mask = Mask;
    }
  };
});
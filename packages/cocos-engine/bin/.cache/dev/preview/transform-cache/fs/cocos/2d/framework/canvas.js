System.register("q-bundled:///fs/cocos/2d/framework/canvas.js", ["../../core/data/decorators/index.js", "../../../../virtual/internal%253Aconstants.js", "../../misc/camera-component.js", "../../core/index.js", "../../ui/view.js", "./render-root-2d.js", "../../scene-graph/node-event.js"], function (_export, _context) {
  "use strict";

  var ccclass, help, disallowMultiple, executeInEditMode, executionOrder, menu, tooltip, type, serializable, EDITOR, Camera, Vec3, screen, Enum, cclegacy, visibleRect, view, RenderRoot2D, NodeEventType, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _initializer, _initializer2, _worldPos, RenderMode, Canvas;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      help = _coreDataDecoratorsIndexJs.help;
      disallowMultiple = _coreDataDecoratorsIndexJs.disallowMultiple;
      executeInEditMode = _coreDataDecoratorsIndexJs.executeInEditMode;
      executionOrder = _coreDataDecoratorsIndexJs.executionOrder;
      menu = _coreDataDecoratorsIndexJs.menu;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
      type = _coreDataDecoratorsIndexJs.type;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
    }, function (_miscCameraComponentJs) {
      Camera = _miscCameraComponentJs.Camera;
    }, function (_coreIndexJs) {
      Vec3 = _coreIndexJs.Vec3;
      screen = _coreIndexJs.screen;
      Enum = _coreIndexJs.Enum;
      cclegacy = _coreIndexJs.cclegacy;
      visibleRect = _coreIndexJs.visibleRect;
    }, function (_uiViewJs) {
      view = _uiViewJs.view;
    }, function (_renderRoot2dJs) {
      RenderRoot2D = _renderRoot2dJs.RenderRoot2D;
    }, function (_sceneGraphNodeEventJs) {
      NodeEventType = _sceneGraphNodeEventJs.NodeEventType;
    }],
    execute: function () {
      _worldPos = new Vec3();
      RenderMode = Enum({
        OVERLAY: 0,
        INTERSPERSE: 1
      });
      /**
       * @en
       * The root node of UI.
       * Provide an aligned window for all child nodes, also provides ease of setting screen adaptation policy interfaces from the editor.
       * Line-of-sight range is -999 to 1000.
       *
       * @zh
       * 作为 UI 根节点，为所有子节点提供对齐视窗，另外提供屏幕适配策略接口，方便从编辑器设置。
       * 注：由于本节点的尺寸会跟随屏幕拉伸，所以 anchorPoint 只支持 (0.5, 0.5)，否则适配不同屏幕时坐标会有偏差。
       * UI 的视距范围是 -999 ～ 1000.
       */
      _export("Canvas", Canvas = (_dec = ccclass('cc.Canvas'), _dec2 = help('i18n:cc.Canvas'), _dec3 = executionOrder(100), _dec4 = menu('UI/Canvas'), _dec5 = type(Camera), _dec6 = tooltip('i18n:canvas.camera'), _dec7 = tooltip('i18n:canvas.align'), _dec8 = type(Camera), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = executeInEditMode(_class = disallowMultiple(_class = (_class2 = /*#__PURE__*/function (_RenderRoot2D) {
        _inheritsLoose(Canvas, _RenderRoot2D);
        function Canvas() {
          var _this;
          _this = _RenderRoot2D.call(this) || this;
          _this._cameraComponent = _initializer && _initializer();
          _this._alignCanvasWithScreen = _initializer2 && _initializer2();
          _this._thisOnCameraResized = void 0;
          // fit canvas node to design resolution
          _this.fitDesignResolution_EDITOR = void 0;
          _this._pos = new Vec3();
          _this._renderMode = RenderMode.OVERLAY;
          _this._thisOnCameraResized = _this._onResizeCamera.bind(_assertThisInitialized(_this));
          if (EDITOR) {
            _this.fitDesignResolution_EDITOR = function () {
              // TODO: support paddings of locked widget
              _this.node.getPosition(_this._pos);
              var nodeSize = view.getDesignResolutionSize();
              var trans = _this.node._uiProps.uiTransformComp;
              var scaleX = _this.node.scale.x;
              var anchorX = trans.anchorX;
              if (scaleX < 0) {
                anchorX = 1.0 - anchorX;
                scaleX = -scaleX;
              }
              nodeSize.width = scaleX === 0 ? nodeSize.width : nodeSize.width / scaleX;
              var scaleY = _this.node.scale.y;
              var anchorY = trans.anchorY;
              if (scaleY < 0) {
                anchorY = 1.0 - anchorY;
                scaleY = -scaleY;
              }
              nodeSize.height = scaleY === 0 ? nodeSize.height : nodeSize.height / scaleY;
              Vec3.set(_worldPos, nodeSize.width * anchorX, nodeSize.height * anchorY, 0);
              if (!_this._pos.equals(_worldPos)) {
                _this.node.setPosition(_worldPos);
              }
              if (trans.width !== nodeSize.width) {
                trans.width = nodeSize.width;
              }
              if (trans.height !== nodeSize.height) {
                trans.height = nodeSize.height;
              }
            };
          }
          return _this;
        }
        var _proto = Canvas.prototype;
        _proto.__preload = function __preload() {
          // Stretch to matched size during the scene initialization
          var widget = this.getComponent('cc.Widget');
          if (widget) {
            widget.updateAlignment();
          } else if (EDITOR) {
            this.fitDesignResolution_EDITOR();
          }
          if (!EDITOR) {
            if (this._cameraComponent) {
              this._cameraComponent._createCamera();
              this._cameraComponent.node.on(Camera.TARGET_TEXTURE_CHANGE, this._thisOnCameraResized);
            }
          }
          this._onResizeCamera();
          if (EDITOR) {
            // In Editor can not edit these attrs.
            // (Position in Node, contentSize in uiTransform)
            // (anchor in uiTransform, but it can edit, this is different from cocos creator)
            this._objFlags |= cclegacy.Object.Flags.IsPositionLocked | cclegacy.Object.Flags.IsSizeLocked | cclegacy.Object.Flags.IsAnchorLocked;
          } else {
            // In Editor dont need resized camera when scene window resize
            this.node.on(NodeEventType.TRANSFORM_CHANGED, this._thisOnCameraResized);
          }
        };
        _proto.onEnable = function onEnable() {
          _RenderRoot2D.prototype.onEnable.call(this);
          if (!EDITOR && this._cameraComponent) {
            this._cameraComponent.node.on(Camera.TARGET_TEXTURE_CHANGE, this._thisOnCameraResized);
          }
        };
        _proto.onDisable = function onDisable() {
          _RenderRoot2D.prototype.onDisable.call(this);
          if (this._cameraComponent) {
            this._cameraComponent.node.off(Camera.TARGET_TEXTURE_CHANGE, this._thisOnCameraResized);
          }
        };
        _proto.onDestroy = function onDestroy() {
          _RenderRoot2D.prototype.onDestroy.call(this);
          this.node.off(NodeEventType.TRANSFORM_CHANGED, this._thisOnCameraResized);
        };
        _proto._onResizeCamera = function _onResizeCamera() {
          if (this._cameraComponent && this._alignCanvasWithScreen) {
            if (this._cameraComponent.targetTexture) {
              this._cameraComponent.orthoHeight = visibleRect.height / 2;
            } else {
              var size = screen.windowSize;
              this._cameraComponent.orthoHeight = size.height / view.getScaleY() / 2;
            }
            this.node.getWorldPosition(_worldPos);
            this._cameraComponent.node.setWorldPosition(_worldPos.x, _worldPos.y, 1000);
          }
        };
        _proto._getViewPriority = function _getViewPriority() {
          if (this._cameraComponent) {
            var _this$cameraComponent;
            var priority = (_this$cameraComponent = this.cameraComponent) === null || _this$cameraComponent === void 0 ? void 0 : _this$cameraComponent.priority;
            priority = this._renderMode === RenderMode.OVERLAY ? priority | 1 << 30 : priority & ~(1 << 30);
            return priority;
          }
          return 0;
        };
        _createClass(Canvas, [{
          key: "renderMode",
          get:
          /**
           * @en
           * The render mode of Canvas.
           * When you choose the mode of INTERSPERSE, You can specify the rendering order of the Canvas with the camera in the scene.
           * When you choose the mode of OVERLAY, the builtin camera of Canvas will render after all scene cameras are rendered.
           * NOTE: The cameras in the scene (including the Canvas built-in camera) must have a ClearFlag selection of SOLID_COLOR,
           * otherwise a splash screen may appear on the mobile device.
           *
           * @zh
           * Canvas 渲染模式。
           * intersperse 下可以指定 Canvas 与场景中的相机的渲染顺序，overlay 下 Canvas 会在所有场景相机渲染完成后渲染。
           * 注意：场景里的相机（包括 Canvas 内置的相机）必须有一个的 ClearFlag 选择 SOLID_COLOR，否则在移动端可能会出现闪屏。
           *
           * @deprecated since v3.0, please use [[Camera.priority]] to control overlapping between cameras.
           */
          function get() {
            return this._renderMode;
          },
          set: function set(val) {
            this._renderMode = val;
            if (this._cameraComponent) {
              this._cameraComponent.priority = this._getViewPriority();
            }
          }

          /**
           * @en The camera component that will be aligned with this canvas
           * @zh 将与此 canvas 对齐的相机组件
           */
        }, {
          key: "cameraComponent",
          get: function get() {
            return this._cameraComponent;
          },
          set: function set(value) {
            if (this._cameraComponent === value) {
              return;
            }
            this._cameraComponent = value;
            this._onResizeCamera();
          }

          /**
           * @en Align canvas with screen
           * @zh 是否使用屏幕对齐画布
           */
        }, {
          key: "alignCanvasWithScreen",
          get: function get() {
            return this._alignCanvasWithScreen;
          },
          set: function set(value) {
            this._alignCanvasWithScreen = value;
            this._onResizeCamera();
          }
        }]);
        return Canvas;
      }(RenderRoot2D), (_applyDecoratedDescriptor(_class2.prototype, "cameraComponent", [_dec5, _dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "cameraComponent"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "alignCanvasWithScreen", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "alignCanvasWithScreen"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "_cameraComponent", [_dec8], function () {
        return null;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_alignCanvasWithScreen", [serializable], function () {
        return true;
      })), _class2)) || _class) || _class) || _class) || _class) || _class) || _class));
      cclegacy.Canvas = Canvas;
    }
  };
});
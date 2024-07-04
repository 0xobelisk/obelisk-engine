System.register("q-bundled:///fs/cocos/ui/ui-coordinate-tracker.js", ["../core/data/decorators/index.js", "../scene-graph/component.js", "../scene-graph/component-event-handler.js", "../scene-graph/node.js", "../misc/camera-component.js", "../core/math/index.js"], function (_export, _context) {
  "use strict";

  var ccclass, help, menu, executionOrder, tooltip, type, serializable, Component, EventHandler, Node, Camera, Vec3, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, UICoordinateTracker;
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
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      help = _coreDataDecoratorsIndexJs.help;
      menu = _coreDataDecoratorsIndexJs.menu;
      executionOrder = _coreDataDecoratorsIndexJs.executionOrder;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
      type = _coreDataDecoratorsIndexJs.type;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_sceneGraphComponentJs) {
      Component = _sceneGraphComponentJs.Component;
    }, function (_sceneGraphComponentEventHandlerJs) {
      EventHandler = _sceneGraphComponentEventHandlerJs.EventHandler;
    }, function (_sceneGraphNodeJs) {
      Node = _sceneGraphNodeJs.Node;
    }, function (_miscCameraComponentJs) {
      Camera = _miscCameraComponentJs.Camera;
    }, function (_coreMathIndexJs) {
      Vec3 = _coreMathIndexJs.Vec3;
    }],
    execute: function () {
      /**
       * @en The component that converts 3D node coordinates to UI node coordinates.
       * It mainly provides the converted world coordinates after mapping and the perspective ratio of the simulated perspective camera.
       * @zh 3D 节点坐标转换到 UI 节点坐标组件
       * 主要提供映射后的转换世界坐标以及模拟透视相机远近比。
       */
      _export("UICoordinateTracker", UICoordinateTracker = (_dec = ccclass('cc.UICoordinateTracker'), _dec2 = help('i18n:cc.UICoordinateTracker'), _dec3 = menu('UI/UICoordinateTracker'), _dec4 = executionOrder(110), _dec5 = type(Node), _dec6 = tooltip('i18n:UICoordinateTracker.target'), _dec7 = type(Camera), _dec8 = tooltip('i18n:UICoordinateTracker.camera'), _dec9 = tooltip('i18n:UICoordinateTracker.use_scale'), _dec10 = tooltip('i18n:UICoordinateTracker.distance'), _dec11 = type([EventHandler]), _dec12 = tooltip('i18n:UICoordinateTracker.sync_events'), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = (_class2 = class UICoordinateTracker extends Component {
        constructor(...args) {
          super(...args);
          /**
           * @en
           * Event callback after coordinates synchronization.
           * The first parameter of the callback is the mapped local coordinate in UI camera.
           * The second parameter is the distance scale of the 3d node from the 3d camera viewport.
           *
           * @zh
           * 映射数据事件。回调的第一个参数是映射后的本地坐标，第二个是距相机距离比。
           */
          this.syncEvents = _initializer && _initializer();
          this._target = _initializer2 && _initializer2();
          this._camera = _initializer3 && _initializer3();
          this._useScale = _initializer4 && _initializer4();
          this._distance = _initializer5 && _initializer5();
          this._transformPos = new Vec3();
          this._viewPos = new Vec3();
          this._canMove = true;
          this._lastWPos = new Vec3();
          this._lastCameraPos = new Vec3();
        }
        /**
         * @en
         * Target node.
         *
         * @zh
         * 目标对象。
         */
        get target() {
          return this._target;
        }
        set target(value) {
          if (this._target === value) {
            return;
          }
          this._target = value;
          this._checkCanMove();
        }

        /**
         * @en
         * The 3D camera representing the original coordinate system.
         *
         * @zh
         * 照射相机。
         */
        get camera() {
          return this._camera;
        }
        set camera(value) {
          if (this._camera === value) {
            return;
          }
          this._camera = value;
          this._checkCanMove();
        }

        /**
         * @en
         * Whether to scale the converted 2d node's size according to the distance between the camera and the 3d node.
         *
         * @zh
         * 是否是缩放映射。
         */
        get useScale() {
          return this._useScale;
        }
        set useScale(value) {
          if (this._useScale === value) {
            return;
          }
          this._useScale = value;
        }

        /**
         * @en
         * The distance from the camera for displaying the 2d node in normal size.
         *
         * @zh
         * 距相机多少距离为正常显示计算大小。
         */
        get distance() {
          return this._distance;
        }
        set distance(value) {
          if (this._distance === value) {
            return;
          }
          this._distance = value;
        }
        onEnable() {
          this._checkCanMove();
        }
        update() {
          const wPos = this.node.worldPosition;
          const camera = this._camera;
          if (!this._canMove || !camera || !camera.camera || this._lastWPos.equals(wPos) && this._lastCameraPos.equals(camera.node.worldPosition)) {
            return;
          }
          this._lastWPos.set(wPos);
          this._lastCameraPos.set(camera.node.worldPosition);
          // [HACK]
          camera.camera.update();
          camera.convertToUINode(wPos, this._target, this._transformPos);
          if (this._useScale) {
            Vec3.transformMat4(this._viewPos, this.node.worldPosition, camera.camera.matView);
          }
          if (this.syncEvents.length > 0) {
            const data = this._distance / Math.abs(this._viewPos.z);
            EventHandler.emitEvents(this.syncEvents, this._transformPos, data);
          }
        }
        _checkCanMove() {
          this._canMove = !!(this._camera && this._target);
        }
      }, (_applyDecoratedDescriptor(_class2.prototype, "target", [_dec5, _dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "target"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec7, _dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "camera"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "useScale", [_dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "useScale"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "distance", [_dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "distance"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "syncEvents", [_dec11, serializable, _dec12], function () {
        return [];
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_target", [serializable], function () {
        return null;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "_camera", [serializable], function () {
        return null;
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "_useScale", [serializable], function () {
        return true;
      }), _initializer5 = _applyDecoratedInitializer(_class2.prototype, "_distance", [serializable], function () {
        return 1;
      })), _class2)) || _class) || _class) || _class) || _class));
    }
  };
});
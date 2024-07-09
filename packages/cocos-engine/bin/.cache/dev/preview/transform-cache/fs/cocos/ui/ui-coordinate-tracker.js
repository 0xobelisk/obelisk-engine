System.register("q-bundled:///fs/cocos/ui/ui-coordinate-tracker.js", ["../core/data/decorators/index.js", "../scene-graph/component.js", "../scene-graph/component-event-handler.js", "../scene-graph/node.js", "../misc/camera-component.js", "../core/math/index.js"], function (_export, _context) {
  "use strict";

  var ccclass, help, menu, executionOrder, tooltip, type, serializable, Component, EventHandler, Node, Camera, Vec3, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, UICoordinateTracker;
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
      _export("UICoordinateTracker", UICoordinateTracker = (_dec = ccclass('cc.UICoordinateTracker'), _dec2 = help('i18n:cc.UICoordinateTracker'), _dec3 = menu('UI/UICoordinateTracker'), _dec4 = executionOrder(110), _dec5 = type(Node), _dec6 = tooltip('i18n:UICoordinateTracker.target'), _dec7 = type(Camera), _dec8 = tooltip('i18n:UICoordinateTracker.camera'), _dec9 = tooltip('i18n:UICoordinateTracker.use_scale'), _dec10 = tooltip('i18n:UICoordinateTracker.distance'), _dec11 = type([EventHandler]), _dec12 = tooltip('i18n:UICoordinateTracker.sync_events'), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UICoordinateTracker, _Component);
        function UICoordinateTracker() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /**
           * @en
           * Event callback after coordinates synchronization.
           * The first parameter of the callback is the mapped local coordinate in UI camera.
           * The second parameter is the distance scale of the 3d node from the 3d camera viewport.
           *
           * @zh
           * 映射数据事件。回调的第一个参数是映射后的本地坐标，第二个是距相机距离比。
           */
          _this.syncEvents = _initializer && _initializer();
          _this._target = _initializer2 && _initializer2();
          _this._camera = _initializer3 && _initializer3();
          _this._useScale = _initializer4 && _initializer4();
          _this._distance = _initializer5 && _initializer5();
          _this._transformPos = new Vec3();
          _this._viewPos = new Vec3();
          _this._canMove = true;
          _this._lastWPos = new Vec3();
          _this._lastCameraPos = new Vec3();
          return _this;
        }
        var _proto = UICoordinateTracker.prototype;
        _proto.onEnable = function onEnable() {
          this._checkCanMove();
        };
        _proto.update = function update() {
          var wPos = this.node.worldPosition;
          var camera = this._camera;
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
            var data = this._distance / Math.abs(this._viewPos.z);
            EventHandler.emitEvents(this.syncEvents, this._transformPos, data);
          }
        };
        _proto._checkCanMove = function _checkCanMove() {
          this._canMove = !!(this._camera && this._target);
        };
        _createClass(UICoordinateTracker, [{
          key: "target",
          get:
          /**
           * @en
           * Target node.
           *
           * @zh
           * 目标对象。
           */
          function get() {
            return this._target;
          },
          set: function set(value) {
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
        }, {
          key: "camera",
          get: function get() {
            return this._camera;
          },
          set: function set(value) {
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
        }, {
          key: "useScale",
          get: function get() {
            return this._useScale;
          },
          set: function set(value) {
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
        }, {
          key: "distance",
          get: function get() {
            return this._distance;
          },
          set: function set(value) {
            if (this._distance === value) {
              return;
            }
            this._distance = value;
          }
        }]);
        return UICoordinateTracker;
      }(Component), (_applyDecoratedDescriptor(_class2.prototype, "target", [_dec5, _dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "target"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec7, _dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "camera"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "useScale", [_dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "useScale"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "distance", [_dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "distance"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "syncEvents", [_dec11, serializable, _dec12], function () {
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
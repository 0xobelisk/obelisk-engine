System.register("q-bundled:///fs/cocos/dragon-bones/CCArmatureDisplay.js", ["@cocos/dragonbones-js", "../core/index.js"], function (_export, _context) {
  "use strict";

  var DisplayData, Vec3, EventTarget, _decorator, _dec, _class, ccclass, CCArmatureDisplay;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  return {
    setters: [function (_cocosDragonbonesJs) {
      DisplayData = _cocosDragonbonesJs.DisplayData;
    }, function (_coreIndexJs) {
      Vec3 = _coreIndexJs.Vec3;
      EventTarget = _coreIndexJs.EventTarget;
      _decorator = _coreIndexJs._decorator;
    }],
    execute: function () {
      // eslint-disable-next-line import/named
      ccclass = _decorator.ccclass;
      /**
       * @en CCArmatureDisplay contains function about data showing and sending events.
       * @zh CCArmatureDisplay 封装了数据显示和事件派发的功能。
       */
      _export("CCArmatureDisplay", CCArmatureDisplay = (_dec = ccclass('dragonBones.CCArmatureDisplay'), _dec(_class = /*#__PURE__*/function (_DisplayData) {
        _inheritsLoose(CCArmatureDisplay, _DisplayData);
        function CCArmatureDisplay() {
          var _this;
          _this = _DisplayData.call(this) || this;
          /**
           * @deprecated This variable will be removed in the future.
           */
          _this.shouldAdvanced = false;
          /**
           * @en The node contains ArmatureDisplay component.
           * @zh ArmatureDisplay 组件所在的 node。
           */
          _this._ccNode = null;
          /**
           * @en ArmatureDisplay component.
           * @zh ArmatureDisplay 组件。
           */
          _this._ccComponent = null;
          /**
           * @en EventTarget is an object to which an event is dispatched when something has occurred.
           * @zh 事件目标是具有注册监听器、派发事件能力的对象。
           */
          _this._eventTarget = void 0;
          /**
           * @en The core Armature object.
           * @zh 核心骨架对象。
           */
          _this._armature = null;
          _this._eventTarget = new EventTarget();
          return _this;
        }
        /**
         * @en The funciton is empty and always return false.
         * @zh 方法未实现总返回 false。
         */
        var _proto = CCArmatureDisplay.prototype;
        _proto.hasEvent = function hasEvent(type) {
          console.warn('Method not implemented.');
          return false;
        }
        /**
         * @en The funciton has no realization.
         * @zh 方法未实现。
         */;
        _proto.addEvent = function addEvent(type, listener, thisObject) {
          console.warn('Method not implemented.');
        }
        /**
         * @en The funciton has no realization.
         * @zh 方法未实现。
         */;
        _proto.removeEvent = function removeEvent(type, listener, thisObject) {
          console.warn('Method not implemented.');
        }
        /**
         * @en Sets EventTarget object.
         * @zh 设置事件目标。
         */;
        _proto.setEventTarget = function setEventTarget(eventTarget) {
          this._eventTarget = eventTarget;
        }
        /**
         * @en Gets the root display object.
         * @zh 获取顶层的显示容器实例。
         */;
        _proto.getRootDisplay = function getRootDisplay() {
          var parentSlot = this._armature._parent;
          if (!parentSlot) {
            return this;
          }
          var slot;
          while (parentSlot) {
            slot = parentSlot;
            parentSlot = parentSlot._armature._parent;
          }
          return slot._armature.display;
        }
        /**
         * @en Convert pos to parent slot coordination.
         * @zh 将坐标转换到父插槽的坐标系下。
         */;
        _proto.convertToRootSpace = function convertToRootSpace(pos) {
          var slot = this._armature._parent;
          if (!slot) {
            return pos;
          }
          slot.updateWorldMatrix();
          var worldMatrix = slot._worldMatrix;
          var newPos = new Vec3(0, 0);
          newPos.x = pos.x * worldMatrix.m00 + pos.y * worldMatrix.m04 + worldMatrix.m12;
          newPos.y = pos.x * worldMatrix.m01 + pos.y * worldMatrix.m05 + worldMatrix.m13;
          return newPos;
        }
        /**
         * @en Convert pos to world coordination.
         * @zh 将坐标转换到世界坐标系下。
         */;
        _proto.convertToWorldSpace = function convertToWorldSpace(point) {
          var _ccNode$_uiProps$uiTr;
          var newPos = this.convertToRootSpace(point);
          var ccNode = this.getRootNode();
          return ccNode === null || ccNode === void 0 ? void 0 : (_ccNode$_uiProps$uiTr = ccNode._uiProps.uiTransformComp) === null || _ccNode$_uiProps$uiTr === void 0 ? void 0 : _ccNode$_uiProps$uiTr.convertToWorldSpaceAR(newPos);
        }
        /**
         * @en Get the node of root ArmatureDisplay component in.
         * @zh 获取顶层 ArmatureDisplay 组件所在的 node。
         */;
        _proto.getRootNode = function getRootNode() {
          var rootDisplay = this.getRootDisplay();
          return rootDisplay && rootDisplay._ccNode;
        }

        /**
         * @en Initialize _armature at start.
         * @zh 初始时设置骨架。
         */
        // dragonbones api
        ;
        _proto.dbInit = function dbInit(armature) {
          this._armature = armature;
        }
        /**
         * @en Clears Armature object.
         * @zh 清除骨架对象。
         */;
        _proto.dbClear = function dbClear() {
          this._armature = null;
        }
        /**
         * @en Trigger ArmatureDisplay component to update render data.
         * @zh 触发 ArmatureDisplay 组件更新渲染数据。
         */;
        _proto.dbUpdate = function dbUpdate() {
          if (this._ccComponent) {
            this._ccComponent.markForUpdateRenderData();
          }
        }
        /**
         * @engineInternal Since v3.7.2.
         * @deprecated This variable will be removed in the future.
         */;
        _proto.advanceTimeBySelf = function advanceTimeBySelf(on) {
          this.shouldAdvanced = !!on;
        };
        _proto.hasDBEventListener = function hasDBEventListener(type) {
          return this._eventTarget.hasEventListener(type);
        };
        _proto.addDBEventListener = function addDBEventListener(type, listener, target) {
          this._eventTarget.on(type, listener, target);
        };
        _proto.removeDBEventListener = function removeDBEventListener(type, listener, target) {
          this._eventTarget.off(type, listener, target);
        };
        _proto.dispatchDBEvent = function dispatchDBEvent(type, eventObject) {
          this._eventTarget.emit(type, eventObject);
        };
        _createClass(CCArmatureDisplay, [{
          key: "node",
          get:
          /**
           * @en Return this.
           * @zh 返回自身。
           */
          function get() {
            return this;
          }
        }]);
        return CCArmatureDisplay;
      }(DisplayData)) || _class));
    }
  };
});
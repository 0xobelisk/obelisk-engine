System.register("q-bundled:///fs/cocos/gi/light-probe/light-probe-group.js", ["../../core/data/decorators/index.js", "../../../../virtual/internal%253Aconstants.js", "../../scene-graph/node-event.js", "../../scene-graph/component.js", "../../core/index.js", "./auto-placement.js"], function (_export, _context) {
  "use strict";

  var ccclass, disallowMultiple, displayName, editable, executeInEditMode, help, menu, range, serializable, tooltip, type, visible, EDITOR, NodeEventType, Component, Vec3, CCInteger, AutoPlacement, PlaceMethod, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6, _initializer7, LightProbeGroup;
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
      disallowMultiple = _coreDataDecoratorsIndexJs.disallowMultiple;
      displayName = _coreDataDecoratorsIndexJs.displayName;
      editable = _coreDataDecoratorsIndexJs.editable;
      executeInEditMode = _coreDataDecoratorsIndexJs.executeInEditMode;
      help = _coreDataDecoratorsIndexJs.help;
      menu = _coreDataDecoratorsIndexJs.menu;
      range = _coreDataDecoratorsIndexJs.range;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
      type = _coreDataDecoratorsIndexJs.type;
      visible = _coreDataDecoratorsIndexJs.visible;
    }, function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
    }, function (_sceneGraphNodeEventJs) {
      NodeEventType = _sceneGraphNodeEventJs.NodeEventType;
    }, function (_sceneGraphComponentJs) {
      Component = _sceneGraphComponentJs.Component;
    }, function (_coreIndexJs) {
      Vec3 = _coreIndexJs.Vec3;
      CCInteger = _coreIndexJs.CCInteger;
    }, function (_autoPlacementJs) {
      AutoPlacement = _autoPlacementJs.AutoPlacement;
      PlaceMethod = _autoPlacementJs.PlaceMethod;
    }],
    execute: function () {
      /**
       * @en The light probe group component.
       * @zh 光照探针组组件。
       */
      _export("LightProbeGroup", LightProbeGroup = (_dec = ccclass('cc.LightProbeGroup'), _dec2 = help('i18n:cc.LightProbeGroup'), _dec3 = menu('Rendering/LightProbeGroup'), _dec4 = type([Vec3]), _dec5 = visible(false), _dec6 = type(PlaceMethod), _dec7 = tooltip('i18n:light_probe_group.method'), _dec8 = displayName('Generating Method'), _dec9 = tooltip('i18n:light_probe_group.minPos'), _dec10 = displayName('Generating Min Pos'), _dec11 = tooltip('i18n:light_probe_group.maxPos'), _dec12 = displayName('Generating Max Pos'), _dec13 = range([2, 65535, 1]), _dec14 = type(CCInteger), _dec15 = tooltip('i18n:light_probe_group.nProbesX'), _dec16 = displayName('Number Of Probes X'), _dec17 = range([2, 65535, 1]), _dec18 = type(CCInteger), _dec19 = tooltip('i18n:light_probe_group.nProbesY'), _dec20 = displayName('Number Of Probes Y'), _dec21 = range([2, 65535, 1]), _dec22 = type(CCInteger), _dec23 = tooltip('i18n:light_probe_group.nProbesZ'), _dec24 = displayName('Number Of Probes Z'), _dec(_class = _dec2(_class = _dec3(_class = disallowMultiple(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LightProbeGroup, _Component);
        function LightProbeGroup() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._probes = _initializer && _initializer();
          _this._method = _initializer2 && _initializer2();
          _this._minPos = _initializer3 && _initializer3();
          _this._maxPos = _initializer4 && _initializer4();
          _this._nProbesX = _initializer5 && _initializer5();
          _this._nProbesY = _initializer6 && _initializer6();
          _this._nProbesZ = _initializer7 && _initializer7();
          return _this;
        }
        var _proto = LightProbeGroup.prototype;
        _proto.onLoad = function onLoad() {
          if (!EDITOR) {
            return;
          }
          if (!this.node) {
            return;
          }
          var changed = this.node.scene.globals.lightProbeInfo.addNode(this.node);
          if (changed) {
            this.node.scene.globals.lightProbeInfo.syncData(this.node, this.probes);
            this.node.scene.globals.lightProbeInfo.update(true);
          }
        };
        _proto.onEnable = function onEnable() {
          if (!EDITOR) {
            return;
          }
          if (!this.node) {
            return;
          }
          var changed = this.node.scene.globals.lightProbeInfo.addNode(this.node);
          if (changed) {
            this.onProbeChanged();
          }
        };
        _proto.onDisable = function onDisable() {
          if (!EDITOR) {
            return;
          }
          if (!this.node) {
            return;
          }
          var changed = this.node.scene.globals.lightProbeInfo.removeNode(this.node);
          if (changed) {
            this.onProbeChanged();
          }
        };
        _proto.generateLightProbes = function generateLightProbes() {
          if (!this.node) {
            return;
          }
          this._probes = AutoPlacement.generate({
            method: this._method,
            nProbesX: this._nProbesX,
            nProbesY: this._nProbesY,
            nProbesZ: this._nProbesZ,
            minPos: this._minPos,
            maxPos: this._maxPos
          });
          this.onProbeChanged();
        };
        _proto.onProbeChanged = function onProbeChanged(updateTet, emitEvent) {
          if (updateTet === void 0) {
            updateTet = true;
          }
          if (emitEvent === void 0) {
            emitEvent = true;
          }
          this.node.scene.globals.lightProbeInfo.syncData(this.node, this.probes);
          this.node.scene.globals.lightProbeInfo.update(updateTet);
          if (emitEvent) {
            this.node.emit(NodeEventType.LIGHT_PROBE_CHANGED);
          }
        };
        _createClass(LightProbeGroup, [{
          key: "probes",
          get: function get() {
            return this._probes;
          },
          set: function set(val) {
            this._probes = val;
          }
        }, {
          key: "method",
          get: function get() {
            return this._method;
          }
          // Support this feature later.
          // set method (val) {
          //     this._method = val;
          // }

          /**
           * @en Minimum position of the light probe group
           * @zh 光照探针组包围盒最小值
           */
        }, {
          key: "minPos",
          get: function get() {
            return this._minPos;
          },
          set: function set(val) {
            this._minPos = val;
          }

          /**
           * @en Maximum position of the light probe group
           * @zh 光照探针组包围盒最大值
           */
        }, {
          key: "maxPos",
          get: function get() {
            return this._maxPos;
          },
          set: function set(val) {
            this._maxPos = val;
          }
        }, {
          key: "nProbesX",
          get: function get() {
            return this._nProbesX;
          },
          set: function set(val) {
            this._nProbesX = val;
          }
        }, {
          key: "nProbesY",
          get: function get() {
            return this._nProbesY;
          },
          set: function set(val) {
            this._nProbesY = val;
          }
        }, {
          key: "nProbesZ",
          get: function get() {
            return this._nProbesZ;
          },
          set: function set(val) {
            this._nProbesZ = val;
          }
        }]);
        return LightProbeGroup;
      }(Component), (_initializer = _applyDecoratedInitializer(_class2.prototype, "_probes", [serializable], function () {
        return [];
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_method", [serializable], function () {
        return PlaceMethod.UNIFORM;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "_minPos", [serializable], function () {
        return new Vec3(-5, -5, -5);
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "_maxPos", [serializable], function () {
        return new Vec3(5, 5, 5);
      }), _initializer5 = _applyDecoratedInitializer(_class2.prototype, "_nProbesX", [serializable], function () {
        return 3;
      }), _initializer6 = _applyDecoratedInitializer(_class2.prototype, "_nProbesY", [serializable], function () {
        return 3;
      }), _initializer7 = _applyDecoratedInitializer(_class2.prototype, "_nProbesZ", [serializable], function () {
        return 3;
      }), _applyDecoratedDescriptor(_class2.prototype, "probes", [editable, _dec4, _dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "probes"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "method", [editable, _dec6, _dec7, _dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "method"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "minPos", [editable, _dec9, _dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "minPos"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "maxPos", [editable, _dec11, _dec12], Object.getOwnPropertyDescriptor(_class2.prototype, "maxPos"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "nProbesX", [editable, _dec13, _dec14, _dec15, _dec16], Object.getOwnPropertyDescriptor(_class2.prototype, "nProbesX"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "nProbesY", [editable, _dec17, _dec18, _dec19, _dec20], Object.getOwnPropertyDescriptor(_class2.prototype, "nProbesY"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "nProbesZ", [editable, _dec21, _dec22, _dec23, _dec24], Object.getOwnPropertyDescriptor(_class2.prototype, "nProbesZ"), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class) || _class));
    }
  };
});
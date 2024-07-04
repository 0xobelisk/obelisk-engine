System.register("q-bundled:///fs/cocos/gi/light-probe/light-probe-group.js", ["../../core/data/decorators/index.js", "../../../../virtual/internal%253Aconstants.js", "../../scene-graph/node-event.js", "../../scene-graph/component.js", "../../core/index.js", "./auto-placement.js"], function (_export, _context) {
  "use strict";

  var ccclass, disallowMultiple, displayName, editable, executeInEditMode, help, menu, range, serializable, tooltip, type, visible, EDITOR, NodeEventType, Component, Vec3, CCInteger, AutoPlacement, PlaceMethod, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6, _initializer7, LightProbeGroup;
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
      _export("LightProbeGroup", LightProbeGroup = (_dec = ccclass('cc.LightProbeGroup'), _dec2 = help('i18n:cc.LightProbeGroup'), _dec3 = menu('Rendering/LightProbeGroup'), _dec4 = type([Vec3]), _dec5 = visible(false), _dec6 = type(PlaceMethod), _dec7 = tooltip('i18n:light_probe_group.method'), _dec8 = displayName('Generating Method'), _dec9 = tooltip('i18n:light_probe_group.minPos'), _dec10 = displayName('Generating Min Pos'), _dec11 = tooltip('i18n:light_probe_group.maxPos'), _dec12 = displayName('Generating Max Pos'), _dec13 = range([2, 65535, 1]), _dec14 = type(CCInteger), _dec15 = tooltip('i18n:light_probe_group.nProbesX'), _dec16 = displayName('Number Of Probes X'), _dec17 = range([2, 65535, 1]), _dec18 = type(CCInteger), _dec19 = tooltip('i18n:light_probe_group.nProbesY'), _dec20 = displayName('Number Of Probes Y'), _dec21 = range([2, 65535, 1]), _dec22 = type(CCInteger), _dec23 = tooltip('i18n:light_probe_group.nProbesZ'), _dec24 = displayName('Number Of Probes Z'), _dec(_class = _dec2(_class = _dec3(_class = disallowMultiple(_class = executeInEditMode(_class = (_class2 = class LightProbeGroup extends Component {
        constructor(...args) {
          super(...args);
          this._probes = _initializer && _initializer();
          this._method = _initializer2 && _initializer2();
          this._minPos = _initializer3 && _initializer3();
          this._maxPos = _initializer4 && _initializer4();
          this._nProbesX = _initializer5 && _initializer5();
          this._nProbesY = _initializer6 && _initializer6();
          this._nProbesZ = _initializer7 && _initializer7();
        }
        get probes() {
          return this._probes;
        }
        set probes(val) {
          this._probes = val;
        }
        get method() {
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
        get minPos() {
          return this._minPos;
        }
        set minPos(val) {
          this._minPos = val;
        }

        /**
         * @en Maximum position of the light probe group
         * @zh 光照探针组包围盒最大值
         */
        get maxPos() {
          return this._maxPos;
        }
        set maxPos(val) {
          this._maxPos = val;
        }
        get nProbesX() {
          return this._nProbesX;
        }
        set nProbesX(val) {
          this._nProbesX = val;
        }
        get nProbesY() {
          return this._nProbesY;
        }
        set nProbesY(val) {
          this._nProbesY = val;
        }
        get nProbesZ() {
          return this._nProbesZ;
        }
        set nProbesZ(val) {
          this._nProbesZ = val;
        }
        onLoad() {
          if (!EDITOR) {
            return;
          }
          if (!this.node) {
            return;
          }
          const changed = this.node.scene.globals.lightProbeInfo.addNode(this.node);
          if (changed) {
            this.node.scene.globals.lightProbeInfo.syncData(this.node, this.probes);
            this.node.scene.globals.lightProbeInfo.update(true);
          }
        }
        onEnable() {
          if (!EDITOR) {
            return;
          }
          if (!this.node) {
            return;
          }
          const changed = this.node.scene.globals.lightProbeInfo.addNode(this.node);
          if (changed) {
            this.onProbeChanged();
          }
        }
        onDisable() {
          if (!EDITOR) {
            return;
          }
          if (!this.node) {
            return;
          }
          const changed = this.node.scene.globals.lightProbeInfo.removeNode(this.node);
          if (changed) {
            this.onProbeChanged();
          }
        }
        generateLightProbes() {
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
        }
        onProbeChanged(updateTet = true, emitEvent = true) {
          this.node.scene.globals.lightProbeInfo.syncData(this.node, this.probes);
          this.node.scene.globals.lightProbeInfo.update(updateTet);
          if (emitEvent) {
            this.node.emit(NodeEventType.LIGHT_PROBE_CHANGED);
          }
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "_probes", [serializable], function () {
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
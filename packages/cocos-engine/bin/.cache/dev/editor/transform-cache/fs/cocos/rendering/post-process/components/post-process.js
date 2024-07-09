System.register("q-bundled:///fs/cocos/rendering/post-process/components/post-process.js", ["../../../../../virtual/internal%253Aconstants.js", "../../../core/data/class-decorator.js", "../../../core/data/decorators/index.js", "../../../scene-graph/index.js"], function (_export, _context) {
  "use strict";

  var EDITOR, property, serializable, ccclass, disallowMultiple, executeInEditMode, help, range, slide, tooltip, Component, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _initializer, _initializer2, _initializer3, _class3, PostProcess;
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
    }, function (_coreDataClassDecoratorJs) {
      property = _coreDataClassDecoratorJs.property;
      serializable = _coreDataClassDecoratorJs.serializable;
    }, function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      disallowMultiple = _coreDataDecoratorsIndexJs.disallowMultiple;
      executeInEditMode = _coreDataDecoratorsIndexJs.executeInEditMode;
      help = _coreDataDecoratorsIndexJs.help;
      range = _coreDataDecoratorsIndexJs.range;
      slide = _coreDataDecoratorsIndexJs.slide;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
    }, function (_sceneGraphIndexJs) {
      Component = _sceneGraphIndexJs.Component;
    }],
    execute: function () {
      _export("PostProcess", PostProcess = (_dec = ccclass('cc.PostProcess'), _dec2 = help('cc.PostProcess'), _dec3 = tooltip('i18n:postprocess.global'), _dec4 = tooltip('i18n:postprocess.shadingScale'), _dec5 = range([0.01, 4, 0.01]), _dec6 = tooltip('i18n:postprocess.enableShadingScaleInEditor'), _dec(_class = _dec2(_class = disallowMultiple(_class = executeInEditMode(_class = (_class2 = (_class3 = class PostProcess extends Component {
        constructor(...args) {
          super(...args);
          this.global = _initializer && _initializer();
          this._shadingScale = _initializer2 && _initializer2();
          this.enableShadingScaleInEditor = _initializer3 && _initializer3();
          this.settings = new Map();
        }
        get shadingScale() {
          return this._shadingScale;
        }
        set shadingScale(v) {
          this._shadingScale = v;
          if (EDITOR) {
            setTimeout(() => {
              globalThis.cce.Engine.repaintInEditMode();
            }, 50);
          }
        }
        addSetting(setting) {
          this.settings.set(setting.constructor, setting);
        }
        removeSetting(setting) {
          this.settings.delete(setting.constructor);
        }
        getSetting(ctor) {
          return this.settings.get(ctor);
        }
        onEnable() {
          PostProcess.all.push(this);
        }
        onDisable() {
          const idx = PostProcess.all.indexOf(this);
          if (idx !== -1) {
            PostProcess.all.splice(idx, 1);
          }
        }
      }, _class3.all = [], _class3), (_initializer = _applyDecoratedInitializer(_class2.prototype, "global", [_dec3, property, serializable], function () {
        return true;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_shadingScale", [serializable], function () {
        return 1;
      }), _applyDecoratedDescriptor(_class2.prototype, "shadingScale", [_dec4, slide, _dec5, property], Object.getOwnPropertyDescriptor(_class2.prototype, "shadingScale"), _class2.prototype), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "enableShadingScaleInEditor", [_dec6, property, serializable], function () {
        return false;
      })), _class2)) || _class) || _class) || _class) || _class));
    }
  };
});
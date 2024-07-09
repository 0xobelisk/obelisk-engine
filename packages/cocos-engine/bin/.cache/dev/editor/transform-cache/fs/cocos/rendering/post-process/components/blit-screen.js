System.register("q-bundled:///fs/cocos/rendering/post-process/components/blit-screen.js", ["../../../../../virtual/internal%253Aconstants.js", "../../../asset/assets/index.js", "../../../core/data/class-decorator.js", "../../../core/data/decorators/index.js", "./post-process-setting.js"], function (_export, _context) {
  "use strict";

  var EDITOR, Material, property, serializable, ccclass, disallowMultiple, executeInEditMode, help, menu, PostProcessSetting, _dec, _dec2, _dec3, _dec4, _class, _class2, _initializer, _initializer2, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class4, _class5, _initializer3, _initializer4, BlitScreenMaterial, BlitScreen;
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
    }, function (_assetAssetsIndexJs) {
      Material = _assetAssetsIndexJs.Material;
    }, function (_coreDataClassDecoratorJs) {
      property = _coreDataClassDecoratorJs.property;
      serializable = _coreDataClassDecoratorJs.serializable;
    }, function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      disallowMultiple = _coreDataDecoratorsIndexJs.disallowMultiple;
      executeInEditMode = _coreDataDecoratorsIndexJs.executeInEditMode;
      help = _coreDataDecoratorsIndexJs.help;
      menu = _coreDataDecoratorsIndexJs.menu;
    }, function (_postProcessSettingJs) {
      PostProcessSetting = _postProcessSettingJs.PostProcessSetting;
    }],
    execute: function () {
      BlitScreenMaterial = (_dec = ccclass('cc.BlitScreenMaterial'), _dec2 = property(Material), _dec3 = property(Material), _dec4 = property({
        serializable: true
      }), _dec(_class = (_class2 = class BlitScreenMaterial {
        constructor() {
          this._material = _initializer && _initializer();
          this.enable = _initializer2 && _initializer2();
        }
        get material() {
          return this._material;
        }
        set material(v) {
          this._material = v;
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "_material", [_dec2, serializable], null), _applyDecoratedDescriptor(_class2.prototype, "material", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "material"), _class2.prototype), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "enable", [_dec4], function () {
        return true;
      })), _class2)) || _class);
      _export("BlitScreen", BlitScreen = (_dec5 = ccclass('cc.BlitScreen'), _dec6 = help('cc.BlitScreen'), _dec7 = menu('PostProcess/BlitScreen'), _dec8 = property(Material), _dec9 = property({
        type: Material,
        visible: false
      }), _dec10 = property(BlitScreenMaterial), _dec11 = property(BlitScreenMaterial), _dec5(_class4 = _dec6(_class4 = _dec7(_class4 = disallowMultiple(_class4 = executeInEditMode(_class4 = (_class5 = class BlitScreen extends PostProcessSetting {
        constructor(...args) {
          super(...args);
          this._activeMaterials = _initializer3 && _initializer3();
          this._materials = _initializer4 && _initializer4();
        }
        get activeMaterials() {
          return this._activeMaterials;
        }
        set activeMaterials(v) {
          this._activeMaterials = v;
          for (let i = 0; i < this._materials.length; i++) {
            for (let j = 0; j < v.length; j++) {
              if (this._materials[i] && v[j]) {
                var _this$_materials$i$ma;
                if (((_this$_materials$i$ma = this._materials[i].material) === null || _this$_materials$i$ma === void 0 ? void 0 : _this$_materials$i$ma.uuid) === v[j].uuid) {
                  this._materials[i].material = v[j];
                }
              }
            }
          }
        }
        get materials() {
          return this._materials;
        }
        set materials(v) {
          this._materials = v;
          if (EDITOR) {
            setTimeout(() => {
              globalThis.cce.Engine.repaintInEditMode();
            }, 50);
          }
          this.updateActiveMaterials();
        }
        updateActiveMaterials() {
          const materials = this._materials;
          this._activeMaterials.length = 0;
          for (let i = 0; i < materials.length; i++) {
            const m = materials[i];
            if (m.enable && m.material) {
              this._activeMaterials.push(m.material);
            }
          }
        }
        onLoad() {
          this.updateActiveMaterials();
        }
      }, (_initializer3 = _applyDecoratedInitializer(_class5.prototype, "_activeMaterials", [_dec8, serializable], function () {
        return [];
      }), _applyDecoratedDescriptor(_class5.prototype, "activeMaterials", [_dec9], Object.getOwnPropertyDescriptor(_class5.prototype, "activeMaterials"), _class5.prototype), _initializer4 = _applyDecoratedInitializer(_class5.prototype, "_materials", [_dec10, serializable], function () {
        return [];
      }), _applyDecoratedDescriptor(_class5.prototype, "materials", [_dec11], Object.getOwnPropertyDescriptor(_class5.prototype, "materials"), _class5.prototype)), _class5)) || _class4) || _class4) || _class4) || _class4) || _class4));
    }
  };
});
System.register("q-bundled:///fs/cocos/rendering/post-process/components/blit-screen.js", ["../../../../../virtual/internal%253Aconstants.js", "../../../asset/assets/index.js", "../../../core/data/class-decorator.js", "../../../core/data/decorators/index.js", "./post-process-setting.js"], function (_export, _context) {
  "use strict";

  var EDITOR, Material, property, serializable, ccclass, disallowMultiple, executeInEditMode, help, menu, PostProcessSetting, _dec, _dec2, _dec3, _dec4, _class, _class2, _initializer, _initializer2, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class4, _class5, _initializer3, _initializer4, BlitScreenMaterial, BlitScreen;
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
      }), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function BlitScreenMaterial() {
          this._material = _initializer && _initializer();
          this.enable = _initializer2 && _initializer2();
        }
        _createClass(BlitScreenMaterial, [{
          key: "material",
          get: function get() {
            return this._material;
          },
          set: function set(v) {
            this._material = v;
          }
        }]);
        return BlitScreenMaterial;
      }(), (_initializer = _applyDecoratedInitializer(_class2.prototype, "_material", [_dec2, serializable], null), _applyDecoratedDescriptor(_class2.prototype, "material", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "material"), _class2.prototype), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "enable", [_dec4], function () {
        return true;
      })), _class2)) || _class);
      _export("BlitScreen", BlitScreen = (_dec5 = ccclass('cc.BlitScreen'), _dec6 = help('cc.BlitScreen'), _dec7 = menu('PostProcess/BlitScreen'), _dec8 = property(Material), _dec9 = property({
        type: Material,
        visible: false
      }), _dec10 = property(BlitScreenMaterial), _dec11 = property(BlitScreenMaterial), _dec5(_class4 = _dec6(_class4 = _dec7(_class4 = disallowMultiple(_class4 = executeInEditMode(_class4 = (_class5 = /*#__PURE__*/function (_PostProcessSetting) {
        _inheritsLoose(BlitScreen, _PostProcessSetting);
        function BlitScreen() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _PostProcessSetting.call.apply(_PostProcessSetting, [this].concat(args)) || this;
          _this._activeMaterials = _initializer3 && _initializer3();
          _this._materials = _initializer4 && _initializer4();
          return _this;
        }
        var _proto = BlitScreen.prototype;
        _proto.updateActiveMaterials = function updateActiveMaterials() {
          var materials = this._materials;
          this._activeMaterials.length = 0;
          for (var i = 0; i < materials.length; i++) {
            var m = materials[i];
            if (m.enable && m.material) {
              this._activeMaterials.push(m.material);
            }
          }
        };
        _proto.onLoad = function onLoad() {
          this.updateActiveMaterials();
        };
        _createClass(BlitScreen, [{
          key: "activeMaterials",
          get: function get() {
            return this._activeMaterials;
          },
          set: function set(v) {
            this._activeMaterials = v;
            for (var i = 0; i < this._materials.length; i++) {
              for (var j = 0; j < v.length; j++) {
                if (this._materials[i] && v[j]) {
                  var _this$_materials$i$ma;
                  if (((_this$_materials$i$ma = this._materials[i].material) === null || _this$_materials$i$ma === void 0 ? void 0 : _this$_materials$i$ma.uuid) === v[j].uuid) {
                    this._materials[i].material = v[j];
                  }
                }
              }
            }
          }
        }, {
          key: "materials",
          get: function get() {
            return this._materials;
          },
          set: function set(v) {
            this._materials = v;
            if (EDITOR) {
              setTimeout(function () {
                globalThis.cce.Engine.repaintInEditMode();
              }, 50);
            }
            this.updateActiveMaterials();
          }
        }]);
        return BlitScreen;
      }(PostProcessSetting), (_initializer3 = _applyDecoratedInitializer(_class5.prototype, "_activeMaterials", [_dec8, serializable], function () {
        return [];
      }), _applyDecoratedDescriptor(_class5.prototype, "activeMaterials", [_dec9], Object.getOwnPropertyDescriptor(_class5.prototype, "activeMaterials"), _class5.prototype), _initializer4 = _applyDecoratedInitializer(_class5.prototype, "_materials", [_dec10, serializable], function () {
        return [];
      }), _applyDecoratedDescriptor(_class5.prototype, "materials", [_dec11], Object.getOwnPropertyDescriptor(_class5.prototype, "materials"), _class5.prototype)), _class5)) || _class4) || _class4) || _class4) || _class4) || _class4));
    }
  };
});
System.register("q-bundled:///fs/cocos/misc/renderer.js", ["../../../virtual/internal%253Aconstants.js", "../asset/assets/material.js", "../scene-graph/index.js", "../render-scene/core/material-instance.js", "../core/index.js"], function (_export, _context) {
  "use strict";

  var EDITOR, Material, Component, MaterialInstance, warnID, _decorator, errorID, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _initializer, _matInsInfo, ccclass, serializable, disallowMultiple, type, displayOrder, displayName, Renderer;
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
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
    }, function (_assetAssetsMaterialJs) {
      Material = _assetAssetsMaterialJs.Material;
    }, function (_sceneGraphIndexJs) {
      Component = _sceneGraphIndexJs.Component;
    }, function (_renderSceneCoreMaterialInstanceJs) {
      MaterialInstance = _renderSceneCoreMaterialInstanceJs.MaterialInstance;
    }, function (_coreIndexJs) {
      warnID = _coreIndexJs.warnID;
      _decorator = _coreIndexJs._decorator;
      errorID = _coreIndexJs.errorID;
    }],
    execute: function () {
      _matInsInfo = {
        parent: null,
        owner: null,
        subModelIdx: 0
      };
      ccclass = _decorator.ccclass;
      serializable = _decorator.serializable;
      disallowMultiple = _decorator.disallowMultiple;
      type = _decorator.type;
      displayOrder = _decorator.displayOrder;
      displayName = _decorator.displayName;
      /**
       * @en Base class for all components which can submit contents for the rendering process.
       * It manages a series of [[renderer.Model]]s and the visibility, the materials and the material instances of the models.
       * There are several different material properties that must be distinguished clearly and used with caution:
       * - [[sharedMaterials]] are shared for all component instances that are using the same material asset, modification will be applied universally.
       * - [[materials]] are instances created independently for the component instance, modification will only be applied for the component instance.
       * - Render Materials retrieved by [[getRenderMaterial]] are materials used for the actual rendering process, material instances are used if exist.
       * By default, shared materials are used for rendering.
       * Material instances are created only when user try to retrieve a material instance with [[material]], [[materials]] and [[getMaterialInstance]].
       * @zh 所有可以提交内容到渲染流程的可渲染类的基类，它管理着一组 [[renderer.Model]]，以及它们的可见性、材质和材质实例。
       * 下面是这个组件所管理的各种材质属性的解释，需要正确区分并小心使用：
       * - [[sharedMaterials]] 是共享材质，所有使用此材质资源的组件实例都默认使用材质的共享实例对象，所有修改都会影响所有使用它的组件实例。
       * - [[materials]] 是专为组件对象创建的独立材质实例，所有修改仅会影响当前组件对象。
       * - 使用 [[getRenderMaterial]] 获取的渲染材质是用于实际渲染流程的材质对象，当存在材质实例的时候，永远使用材质实例。
       * 默认情况下，渲染组件使用共享材质进行渲染，材质实例也不会被创建出来。仅在用户通过 [[material]]，[[materials]] 和 [[getMaterialInstance]] 接口获取材质时才会创建材质实例。
       */
      _export("Renderer", Renderer = (_dec = ccclass('cc.Renderer'), _dec2 = type(Material), _dec3 = displayOrder(0), _dec4 = displayName('Materials'), _dec5 = type([Material]), _dec(_class = disallowMultiple(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Renderer, _Component);
        function Renderer() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          // _materials should be defined after sharedMaterials for Editor reset component reason
          _this._materials = _initializer && _initializer();
          _this._materialInstances = [];
          return _this;
        }
        var _proto = Renderer.prototype;
        /**
         * @deprecated Since v3.7.3, please use [[getSharedMaterial]] instead.
         */
        _proto.getMaterial = function getMaterial(idx) {
          return this.getSharedMaterial(idx);
        }

        /**
         * @deprecated Since v3.8.1, please use [[setSharedMaterial]] instead.
         */;
        _proto.setMaterial = function setMaterial(material, index) {
          this.setSharedMaterial(material, index);
        }

        /**
         * @en Get the shared material asset of the specified sub-model.
         * @zh 获取指定子模型的共享材质资源。
         */;
        _proto.getSharedMaterial = function getSharedMaterial(idx) {
          if (idx < 0 || idx >= this._materials.length) {
            return null;
          }
          return this._materials[idx];
        }

        /**
         * @en Set the shared material asset of the specified sub-model,
         * new material instance will be created automatically if the sub-model is already using one.
         * @zh 设置指定子模型的 sharedMaterial，如果对应位置有材质实例则会创建一个对应的材质实例。
         */;
        _proto.setSharedMaterial = function setSharedMaterial(material, index) {
          if (material && material instanceof MaterialInstance) {
            errorID(12012);
          }
          this._materials[index] = material;
          var inst = this._materialInstances[index];
          if (inst) {
            inst.destroy();
            this._materialInstances[index] = null;
          }
          this._onMaterialModified(index, this._materials[index]);
        }

        /**
         * @en Get the material instance of the specified sub-model.
         * It will create a new instance from the corresponding shared material if not created yet.
         * @zh 获取指定子模型的材质实例。如果还没有创建，将会根据对应的共享材质创建一个新的材质实例
         */;
        _proto.getMaterialInstance = function getMaterialInstance(idx) {
          var mat = this._materials[idx];
          if (!mat) {
            return null;
          }
          if (!this._materialInstances[idx]) {
            _matInsInfo.parent = this._materials[idx];
            _matInsInfo.owner = this;
            _matInsInfo.subModelIdx = idx;
            var instantiated = new MaterialInstance(_matInsInfo);
            _matInsInfo.parent = null;
            _matInsInfo.owner = null;
            _matInsInfo.subModelIdx = 0;
            this.setMaterialInstance(instantiated, idx);
          }
          return this._materialInstances[idx];
        }

        /**
         * @en Set the material instance of the specified sub-model.
         * @zh 获取指定子模型的材质实例。
         */;
        _proto.setMaterialInstance = function setMaterialInstance(matInst, index) {
          if (typeof matInst === 'number') {
            warnID(12007);
            var temp = matInst;
            matInst = index;
            index = temp;
          }
          var curInst = this._materialInstances[index];

          // If the new material is an MaterialInstance
          if (matInst && matInst.parent) {
            if (matInst !== curInst) {
              this._materialInstances[index] = matInst;
              this._onMaterialModified(index, matInst);
            }
            return;
          }

          // Skip identity check if it's a Material property
          // Or if there is a MaterialInstance already
          if (matInst !== this._materials[index] || curInst) {
            this.setSharedMaterial(matInst, index);
          }
        }

        /**
         * @en Get the actual rendering material of the specified sub-model.
         * (material instance if there is one, or the shared material asset)
         * @zh 获取指定位置可供渲染的材质，如果有材质实例则使用材质实例，如果没有则使用材质资源
         */;
        _proto.getRenderMaterial = function getRenderMaterial(index) {
          return this._materialInstances[index] || this._materials[index];
        };
        _proto._onMaterialModified = function _onMaterialModified(index, material) {}

        /**
         * @engineInternal
         */;
        _proto._onRebuildPSO = function _onRebuildPSO(index, material) {};
        _proto._clearMaterials = function _clearMaterials() {};
        _createClass(Renderer, [{
          key: "sharedMaterial",
          get:
          /**
           * @en Get the default shared material
           * @zh 获取默认的共享材质
           */
          function get() {
            return this.getSharedMaterial(0);
          }

          /**
           * @en All shared materials of model
           * @zh 模型的所有共享材质
           */
        }, {
          key: "sharedMaterials",
          get: function get() {
            // if we don't create an array copy, the editor will modify the original array directly.
            return EDITOR && this._materials.slice() || this._materials;
          },
          set: function set(val) {
            for (var i = 0; i < val.length; i++) {
              if (val[i] !== this._materials[i]) {
                this.setSharedMaterial(val[i], i);
              }
            }
            if (val.length < this._materials.length) {
              for (var _i = val.length; _i < this._materials.length; _i++) {
                this.setSharedMaterial(null, _i);
              }
              this._materials.splice(val.length);
            }
          }

          /**
           * @en The default material instance, it will create a new instance from the default shared material if not created yet.
           * @zh 获取默认的材质实例，如果还没有创建，将会根据默认共享材质创建一个新的材质实例
           */
        }, {
          key: "material",
          get: function get() {
            return this.getMaterialInstance(0);
          },
          set: function set(val) {
            if (this._materials.length === 1 && !this._materialInstances[0] && this._materials[0] === val) {
              return;
            }
            this.setMaterialInstance(val, 0);
          }

          /**
           * @en The materials of the model.
           * @zh 所有模型材质。
           */
        }, {
          key: "materials",
          get: function get() {
            for (var i = 0; i < this._materials.length; i++) {
              this._materialInstances[i] = this.getMaterialInstance(i);
            }
            return this._materialInstances;
          },
          set: function set(val) {
            var newLength = val.length;
            var oldLength = this._materials.length;
            for (var i = newLength; i < oldLength; i++) {
              this.setMaterialInstance(null, i);
            }
            this._materials.length = newLength;
            this._materialInstances.length = newLength;
            for (var _i2 = 0; _i2 < newLength; _i2++) {
              // they could be either undefined or null
              // eslint-disable-next-line eqeqeq
              if (this._materialInstances[_i2] != val[_i2]) {
                this.setMaterialInstance(val[_i2], _i2);
              }
            }
          }
        }]);
        return Renderer;
      }(Component), (_applyDecoratedDescriptor(_class2.prototype, "sharedMaterials", [_dec2, _dec3, _dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "sharedMaterials"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "_materials", [_dec5], function () {
        return [];
      })), _class2)) || _class) || _class));
    }
  };
});
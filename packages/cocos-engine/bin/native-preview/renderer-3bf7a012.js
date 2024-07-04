System.register(['./index-ce98320e.js', './node-event-18d96a1b.js', './builtin-res-mgr.jsb-c9e8e53a.js', './find-7a03d1cc.js'], (function (exports) {
    'use strict';
    var applyDecoratedInitializer, _decorator, errorID, warnID, _applyDecoratedDescriptor, Component, Material;
    return {
        setters: [function (module) {
            applyDecoratedInitializer = module.bx;
            _decorator = module.ap;
            errorID = module.f;
            warnID = module.d;
        }, function (module) {
            _applyDecoratedDescriptor = module.H;
            Component = module.C;
        }, function (module) {
            Material = module.ap;
        }, function () {}],
        execute: (function () {

            const MaterialInstance = exports('M', jsb.MaterialInstance);
            const materialInstanceProto = jsb.MaterialInstance.prototype;
            Object.defineProperty(materialInstanceProto, 'parent', {
              configurable: true,
              enumerable: true,
              get() {
                return this._parent;
              }
            });
            Object.defineProperty(materialInstanceProto, 'owner', {
              configurable: true,
              enumerable: true,
              get() {
                return this._owner;
              }
            });
            materialInstanceProto._ctor = function (info) {
              jsb.Material.prototype._ctor.apply(this, arguments);
              this._registerListeners();
              this._parent = info.parent;
              this._owner = info.owner || null;
              this._subModelIdx = info.subModelIdx || 0;
              this._passes = this.getPasses();
            };
            materialInstanceProto._onRebuildPSO = function () {
              if (this._owner) {
                this._owner._onRebuildPSO(this._subModelIdx, this);
              }
            };

            var _dec, _dec2, _dec3, _class, _class2, _initializer;
            const _matInsInfo = {
              parent: null,
              owner: null,
              subModelIdx: 0
            };
            const {
              ccclass,
              serializable,
              disallowMultiple,
              type,
              displayOrder,
              displayName
            } = _decorator;
            let Renderer = exports('R', (_dec = ccclass('cc.Renderer'), _dec2 = type(Material), _dec3 = type([Material]), _dec(_class = disallowMultiple(_class = (_class2 = class Renderer extends Component {
              constructor(...args) {
                super(...args);
                this._materials = _initializer && _initializer();
                this._materialInstances = [];
              }
              get sharedMaterial() {
                return this.getSharedMaterial(0);
              }
              get sharedMaterials() {
                return this._materials;
              }
              set sharedMaterials(val) {
                for (let i = 0; i < val.length; i++) {
                  if (val[i] !== this._materials[i]) {
                    this.setSharedMaterial(val[i], i);
                  }
                }
                if (val.length < this._materials.length) {
                  for (let i = val.length; i < this._materials.length; i++) {
                    this.setSharedMaterial(null, i);
                  }
                  this._materials.splice(val.length);
                }
              }
              get material() {
                return this.getMaterialInstance(0);
              }
              set material(val) {
                if (this._materials.length === 1 && !this._materialInstances[0] && this._materials[0] === val) {
                  return;
                }
                this.setMaterialInstance(val, 0);
              }
              get materials() {
                for (let i = 0; i < this._materials.length; i++) {
                  this._materialInstances[i] = this.getMaterialInstance(i);
                }
                return this._materialInstances;
              }
              set materials(val) {
                const newLength = val.length;
                const oldLength = this._materials.length;
                for (let i = newLength; i < oldLength; i++) {
                  this.setMaterialInstance(null, i);
                }
                this._materials.length = newLength;
                this._materialInstances.length = newLength;
                for (let i = 0; i < newLength; i++) {
                  if (this._materialInstances[i] != val[i]) {
                    this.setMaterialInstance(val[i], i);
                  }
                }
              }
              getMaterial(idx) {
                return this.getSharedMaterial(idx);
              }
              setMaterial(material, index) {
                this.setSharedMaterial(material, index);
              }
              getSharedMaterial(idx) {
                if (idx < 0 || idx >= this._materials.length) {
                  return null;
                }
                return this._materials[idx];
              }
              setSharedMaterial(material, index) {
                if (material && material instanceof MaterialInstance) {
                  errorID(12012);
                }
                this._materials[index] = material;
                const inst = this._materialInstances[index];
                if (inst) {
                  inst.destroy();
                  this._materialInstances[index] = null;
                }
                this._onMaterialModified(index, this._materials[index]);
              }
              getMaterialInstance(idx) {
                const mat = this._materials[idx];
                if (!mat) {
                  return null;
                }
                if (!this._materialInstances[idx]) {
                  _matInsInfo.parent = this._materials[idx];
                  _matInsInfo.owner = this;
                  _matInsInfo.subModelIdx = idx;
                  const instantiated = new MaterialInstance(_matInsInfo);
                  _matInsInfo.parent = null;
                  _matInsInfo.owner = null;
                  _matInsInfo.subModelIdx = 0;
                  this.setMaterialInstance(instantiated, idx);
                }
                return this._materialInstances[idx];
              }
              setMaterialInstance(matInst, index) {
                if (typeof matInst === 'number') {
                  warnID(12007);
                  const temp = matInst;
                  matInst = index;
                  index = temp;
                }
                const curInst = this._materialInstances[index];
                if (matInst && matInst.parent) {
                  if (matInst !== curInst) {
                    this._materialInstances[index] = matInst;
                    this._onMaterialModified(index, matInst);
                  }
                  return;
                }
                if (matInst !== this._materials[index] || curInst) {
                  this.setSharedMaterial(matInst, index);
                }
              }
              getRenderMaterial(index) {
                return this._materialInstances[index] || this._materials[index];
              }
              _onMaterialModified(index, material) {}
              _onRebuildPSO(index, material) {}
              _clearMaterials() {}
            }, (_applyDecoratedDescriptor(_class2.prototype, "sharedMaterials", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "sharedMaterials"), _class2.prototype), _initializer = applyDecoratedInitializer(_class2.prototype, "_materials", [_dec3], function () {
              return [];
            })), _class2)) || _class) || _class));

        })
    };
}));

System.register("q-bundled:///fs/cocos/3d/models/morph-model.js", ["../../render-scene/scene/model.js"], function (_export, _context) {
  "use strict";

  var Model, MorphModel;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /*
                                                                                                                                                                                                            Copyright (c) 2020-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                           
                                                                                                                                                                                                            https://www.cocos.com/
                                                                                                                                                                                                           
                                                                                                                                                                                                            Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                                                                            of this software and associated documentation files (the "Software"), to deal
                                                                                                                                                                                                            in the Software without restriction, including without limitation the rights to
                                                                                                                                                                                                            use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
                                                                                                                                                                                                            of the Software, and to permit persons to whom the Software is furnished to do so,
                                                                                                                                                                                                            subject to the following conditions:
                                                                                                                                                                                                           
                                                                                                                                                                                                            The above copyright notice and this permission notice shall be included in
                                                                                                                                                                                                            all copies or substantial portions of the Software.
                                                                                                                                                                                                           
                                                                                                                                                                                                            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                                                                            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                                                                            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                                                                            AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                                                                            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                                                                                                                                                                                            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                                                                                                                                                                                                            THE SOFTWARE.
                                                                                                                                                                                                           */
  return {
    setters: [function (_renderSceneSceneModelJs) {
      Model = _renderSceneSceneModelJs.Model;
    }],
    execute: function () {
      /**
       * @en
       * The model that support morph target rendering.
       * @zh
       * 支持渲染蒙皮形变的模型。
       */
      _export("MorphModel", MorphModel = /*#__PURE__*/function (_Model) {
        _inheritsLoose(MorphModel, _Model);
        function MorphModel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Model.call.apply(_Model, [this].concat(args)) || this;
          _this._morphRenderingInstance = null;
          _this._usedMaterials = new Set();
          return _this;
        }
        var _proto = MorphModel.prototype;
        /**
         * @en Acquire the material's macro patches for the given sub model.
         * @zh 获取指定子模型的材质宏组合。
         * @param subModelIndex @en The index for the requested sub model. @zh 子模型的序号。
         * @returns @en The macro patches. @zh 材质宏组合
         */
        _proto.getMacroPatches = function getMacroPatches(subModelIndex) {
          var superMacroPatches = _Model.prototype.getMacroPatches.call(this, subModelIndex);
          if (this._morphRenderingInstance) {
            var morphInstanceMacroPatches = this._morphRenderingInstance.requiredPatches(subModelIndex);
            if (morphInstanceMacroPatches) {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-return
              return morphInstanceMacroPatches.concat(superMacroPatches !== null && superMacroPatches !== void 0 ? superMacroPatches : []);
            }
          }
          return superMacroPatches;
        }

        /**
         * @en Initialize a sub model with the sub mesh data and the material.
         * @zh 用子网格数据和材质初始化一个子模型。
         * @param idx @en The index of the sub model @zh 子模型的序号
         * @param subMeshData @en The sub mesh data to be set @zh 需要设置的子网格
         * @param mat sub material
         */;
        _proto.initSubModel = function initSubModel(subModelIndex, subMeshData, material) {
          return _Model.prototype.initSubModel.call(this, subModelIndex, subMeshData, this._launderMaterial(material));
        };
        _proto.destroy = function destroy() {
          _Model.prototype.destroy.call(this);
          this._morphRenderingInstance = null;
        }

        /**
         * @en Sets the material for a given sub model.
         * @zh 给指定的子模型设置材质。
         * @param subModelIndex @en The index of the sub model @zh 子模型的序号
         * @param material @en The material to be set @zh 需要设置的材质
         * @returns void
         */;
        _proto.setSubModelMaterial = function setSubModelMaterial(subModelIndex, material) {
          return _Model.prototype.setSubModelMaterial.call(this, subModelIndex, this._launderMaterial(material));
        }

        /**
         * Sets morph rendering instance for the model, it's managed by the MeshRenderer
         * @internal
         */;
        _proto.setMorphRendering = function setMorphRendering(morphRendering) {
          this._morphRenderingInstance = morphRendering;
        };
        _proto._updateLocalDescriptors = function _updateLocalDescriptors(submodelIdx, descriptorSet) {
          _Model.prototype._updateLocalDescriptors.call(this, submodelIdx, descriptorSet);
          if (this._morphRenderingInstance) {
            this._morphRenderingInstance.adaptPipelineState(submodelIdx, descriptorSet);
          }
        };
        _proto._launderMaterial = function _launderMaterial(material) {
          return material;
          // if (this._usedMaterials.has(material)) {
          //     return new MaterialInstance({
          //         parent: material,
          //     });
          // } else {
          //     this._usedMaterials.add(material);
          //     return material;
          // }
        };
        return MorphModel;
      }(Model));
    }
  };
});
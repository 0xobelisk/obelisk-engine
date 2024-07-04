System.register("q-bundled:///fs/cocos/primitive/primitive.js", ["../core/data/decorators/index.js", "../3d/misc/index.js", "../3d/assets/mesh.js", "./index.js", "../core/index.js"], function (_export, _context) {
  "use strict";

  var ccclass, type, serializable, editable, createMesh, Mesh, primitives, ccenum, cclegacy, _dec, _dec2, _class, _class2, _initializer, _initializer2, _class3, PrimitiveType, Primitive;
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      type = _coreDataDecoratorsIndexJs.type;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      editable = _coreDataDecoratorsIndexJs.editable;
    }, function (_dMiscIndexJs) {
      createMesh = _dMiscIndexJs.createMesh;
    }, function (_dAssetsMeshJs) {
      Mesh = _dAssetsMeshJs.Mesh;
    }, function (_indexJs) {
      primitives = _indexJs;
    }, function (_coreIndexJs) {
      ccenum = _coreIndexJs.ccenum;
      cclegacy = _coreIndexJs.cclegacy;
    }],
    execute: function () {
      (function (PrimitiveType) {
        PrimitiveType[PrimitiveType["BOX"] = 0] = "BOX";
        PrimitiveType[PrimitiveType["SPHERE"] = 1] = "SPHERE";
        PrimitiveType[PrimitiveType["CYLINDER"] = 2] = "CYLINDER";
        PrimitiveType[PrimitiveType["CONE"] = 3] = "CONE";
        PrimitiveType[PrimitiveType["CAPSULE"] = 4] = "CAPSULE";
        PrimitiveType[PrimitiveType["TORUS"] = 5] = "TORUS";
        PrimitiveType[PrimitiveType["PLANE"] = 6] = "PLANE";
        PrimitiveType[PrimitiveType["QUAD"] = 7] = "QUAD";
      })(PrimitiveType || (PrimitiveType = {}));
      ccenum(PrimitiveType);

      /**
       * @en
       * Basic primitive mesh, this can be generate some primitive mesh at runtime.
       * @zh
       * 基础图形网格，可以在运行时构建一些基础的网格。
       */
      _export("Primitive", Primitive = (_dec = ccclass('cc.Primitive'), _dec2 = type(PrimitiveType), _dec(_class = (_class2 = (_class3 = class Primitive extends Mesh {
        constructor(type = PrimitiveType.BOX) {
          super();
          /**
           * @en
           * The type of the primitive mesh, set it before you call onLoaded.
           * @zh
           * 此基础图形网格的类型，请在 onLoaded 调用之前设置。
           */
          this.type = _initializer && _initializer();
          /**
           * @en
           * The option for build the primitive mesh, set it before you call onLoaded.
           * @zh
           * 创建此基础图形网格的可选参数，请在 onLoaded 调用之前设置。
           */
          this.info = _initializer2 && _initializer2();
          this.type = type;
        }

        /**
         * @en
         * Construct the primitive mesh with `type` and `info`.
         * @zh
         * 根据`type`和`info`构建相应的网格。
         */
        onLoaded() {
          createMesh(primitives[PrimitiveType[this.type].toLowerCase()](this.info), this);
        }
      }, _class3.PrimitiveType = PrimitiveType, _class3), (_initializer = _applyDecoratedInitializer(_class2.prototype, "type", [_dec2], function () {
        return PrimitiveType.BOX;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "info", [serializable, editable], function () {
        return {};
      })), _class2)) || _class));
      cclegacy.Primitive = Primitive;
    }
  };
});
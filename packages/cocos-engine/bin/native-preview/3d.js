System.register(['./index-cec07db1.js', './mesh-renderer-ea94cc01.js', './mesh.jsb-cea8fe4b.js', './index-ce98320e.js', './skeleton.jsb-04631524.js', './deprecated-15f68f3e.js', './find-7a03d1cc.js', './device-90bc7390.js', './pipeline-sub-state.jsb-f3a5cc2c.js', './create-mesh.jsb-8af9d27e.js', './buffer-9511d9f4.js', './util-9da0b4a2.js', './capsule-3c7095c4.js', './murmurhash2_gc-2108d723.js', './node-event-18d96a1b.js', './decorators-b63b63a2.js', './builtin-res-mgr.jsb-c9e8e53a.js', './touch-af62e326.js', './deprecated-80961f27.js', './renderer-3bf7a012.js', './rendering-sub-mesh.jsb-25043997.js', './scene-asset.jsb-0d4c6201.js', './camera-component-b329f870.js', './model-renderer-f8d2f66d.js'], (function (exports) {
    'use strict';
    var MeshRenderer, Mesh, Mat4;
    return {
        setters: [function (module) {
            exports({ DirectionalLight: module.D, DirectionalLightComponent: module.D, LOD: module.b, LODGroup: module.c, Light: module.L, LightComponent: module.L, PointLight: module.P, RangedDirectionalLight: module.R, ReflectionProbe: module.d, ReflectionProbeManager: module.e, SphereLight: module.S, SphereLightComponent: module.S, SpotLight: module.a, SpotLightComponent: module.a, utils: module.u });
        }, function (module) {
            MeshRenderer = module.M;
            exports({ MeshRenderer: module.M, ModelComponent: module.M, ReflectionProbeType: module.R });
        }, function (module) {
            Mesh = module.M;
            exports('Mesh', module.M);
        }, function (module) {
            Mat4 = module.s;
        }, function (module) {
            exports('Skeleton', module.S);
        }, function (module) {
            exports({ BatchedSkinningModelComponent: module.a, SkinnedMeshBatchRenderer: module.a, SkinnedMeshRenderer: module.S, SkinnedMeshUnit: module.b, SkinningModelComponent: module.S, SkinningModelUnit: module.b });
        }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
        execute: (function () {

            function checkMaterialisSame(comp1, comp2) {
              const matNum = comp1.sharedMaterials.length;
              if (matNum !== comp2.sharedMaterials.length) {
                return false;
              }
              for (let i = 0; i < matNum; i++) {
                if (comp1.getRenderMaterial(i) !== comp2.getRenderMaterial(i)) {
                  return false;
                }
              }
              return true;
            }
            class BatchingUtility {
              static batchStaticModel(staticModelRoot, batchedRoot) {
                const models = staticModelRoot.getComponentsInChildren(MeshRenderer);
                if (models.length < 2) {
                  console.error('the number of static models to batch is less than 2,it needn\'t batch.');
                  return false;
                }
                for (let i = 1; i < models.length; i++) {
                  if (!models[0].mesh.validateMergingMesh(models[i].mesh)) {
                    console.error(`the meshes of ${models[0].node.name} and ${models[i].node.name} can't be merged`);
                    return false;
                  }
                  if (!checkMaterialisSame(models[0], models[i])) {
                    console.error(`the materials of ${models[0].node.name} and ${models[i].node.name} can't be merged`);
                    return false;
                  }
                }
                const batchedMesh = new Mesh();
                const worldMat = new Mat4();
                const rootWorldMatInv = new Mat4();
                staticModelRoot.getWorldMatrix(rootWorldMatInv);
                Mat4.invert(rootWorldMatInv, rootWorldMatInv);
                for (let i = 0; i < models.length; i++) {
                  const comp = models[i];
                  comp.node.getWorldMatrix(worldMat);
                  Mat4.multiply(worldMat, rootWorldMatInv, worldMat);
                  batchedMesh.merge(models[i].mesh, worldMat);
                  comp.enabled = false;
                }
                const batchedModel = batchedRoot.addComponent(MeshRenderer);
                batchedModel.mesh = batchedMesh;
                batchedModel.sharedMaterials = models[0].sharedMaterials;
                return true;
              }
              static unbatchStaticModel(staticModelRoot, batchedRoot) {
                const models = staticModelRoot.getComponentsInChildren(MeshRenderer);
                for (let i = 0; i < models.length; i++) {
                  const comp = models[i];
                  comp.enabled = true;
                }
                const batchedModel = batchedRoot.getComponent(MeshRenderer);
                if (batchedModel) {
                  if (batchedModel.mesh) {
                    batchedModel.mesh.destroyRenderingMesh();
                  }
                  batchedModel.destroy();
                }
                return true;
              }
            } exports('BatchingUtility', BatchingUtility);

        })
    };
}));

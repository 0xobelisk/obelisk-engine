System.register(['./wasm-native-08118220.js', './index-ce98320e.js', './deprecated-f8df8d32.js', './director-dc238483.js'], (function (exports, module) {
    'use strict';
    var ensureWasmModuleReady, instantiateWasm, log, error, game;
    return {
        setters: [function (module) {
            ensureWasmModuleReady = module.e;
            instantiateWasm = module.i;
        }, function (module) {
            log = module.a;
            error = module.e;
        }, function (module) {
            game = module.g;
        }, function () {}],
        execute: (function () {

            exports('w', waitForAmmoInstantiation);

            let EBulletType; exports('E', EBulletType);
            (function (EBulletType) {
              EBulletType[EBulletType["EBulletTypeVec3"] = 0] = "EBulletTypeVec3";
              EBulletType[EBulletType["EBulletTypeQuat"] = 1] = "EBulletTypeQuat";
              EBulletType[EBulletType["EBulletTypeTransform"] = 2] = "EBulletTypeTransform";
              EBulletType[EBulletType["EBulletTypeMotionState"] = 3] = "EBulletTypeMotionState";
              EBulletType[EBulletType["EBulletTypeCollisionObject"] = 4] = "EBulletTypeCollisionObject";
              EBulletType[EBulletType["EBulletTypeCollisionShape"] = 5] = "EBulletTypeCollisionShape";
              EBulletType[EBulletType["EBulletTypeCharacterController"] = 6] = "EBulletTypeCharacterController";
              EBulletType[EBulletType["EBulletTypeStridingMeshInterface"] = 7] = "EBulletTypeStridingMeshInterface";
              EBulletType[EBulletType["EBulletTypeTriangleMesh"] = 8] = "EBulletTypeTriangleMesh";
              EBulletType[EBulletType["EBulletTypeCollisionDispatcher"] = 9] = "EBulletTypeCollisionDispatcher";
              EBulletType[EBulletType["EBulletTypeDbvtBroadPhase"] = 10] = "EBulletTypeDbvtBroadPhase";
              EBulletType[EBulletType["EBulletTypeSequentialImpulseConstraintSolver"] = 11] = "EBulletTypeSequentialImpulseConstraintSolver";
              EBulletType[EBulletType["EBulletTypeCollisionWorld"] = 12] = "EBulletTypeCollisionWorld";
              EBulletType[EBulletType["EBulletTypeTypedConstraint"] = 13] = "EBulletTypeTypedConstraint";
              EBulletType[EBulletType["EBulletTypeDebugDraw"] = 14] = "EBulletTypeDebugDraw";
            })(EBulletType || (exports('E', EBulletType = {})));
            let EBulletTriangleRaycastFlag; exports('d', EBulletTriangleRaycastFlag);
            (function (EBulletTriangleRaycastFlag) {
              EBulletTriangleRaycastFlag[EBulletTriangleRaycastFlag["NONE"] = 0] = "NONE";
              EBulletTriangleRaycastFlag[EBulletTriangleRaycastFlag["FilterBackfaces"] = 1] = "FilterBackfaces";
              EBulletTriangleRaycastFlag[EBulletTriangleRaycastFlag["KeepUnflippedNormal"] = 2] = "KeepUnflippedNormal";
              EBulletTriangleRaycastFlag[EBulletTriangleRaycastFlag["UseSubSimplexConvexCastRaytest"] = 4] = "UseSubSimplexConvexCastRaytest";
              EBulletTriangleRaycastFlag[EBulletTriangleRaycastFlag["UseGjkConvexCastRaytest"] = 8] = "UseGjkConvexCastRaytest";
            })(EBulletTriangleRaycastFlag || (exports('d', EBulletTriangleRaycastFlag = {})));
            let EBulletDebugDrawModes; exports('c', EBulletDebugDrawModes);
            (function (EBulletDebugDrawModes) {
              EBulletDebugDrawModes[EBulletDebugDrawModes["DBG_NoDebug"] = 0] = "DBG_NoDebug";
              EBulletDebugDrawModes[EBulletDebugDrawModes["DBG_DrawWireframe"] = 1] = "DBG_DrawWireframe";
              EBulletDebugDrawModes[EBulletDebugDrawModes["DBG_DrawAabb"] = 2] = "DBG_DrawAabb";
              EBulletDebugDrawModes[EBulletDebugDrawModes["DBG_DrawFeaturesText"] = 4] = "DBG_DrawFeaturesText";
              EBulletDebugDrawModes[EBulletDebugDrawModes["DBG_DrawContactPoints"] = 8] = "DBG_DrawContactPoints";
              EBulletDebugDrawModes[EBulletDebugDrawModes["DBG_NoDeactivation"] = 16] = "DBG_NoDeactivation";
              EBulletDebugDrawModes[EBulletDebugDrawModes["DBG_NoHelpText"] = 32] = "DBG_NoHelpText";
              EBulletDebugDrawModes[EBulletDebugDrawModes["DBG_DrawText"] = 64] = "DBG_DrawText";
              EBulletDebugDrawModes[EBulletDebugDrawModes["DBG_ProfileTimings"] = 128] = "DBG_ProfileTimings";
              EBulletDebugDrawModes[EBulletDebugDrawModes["DBG_EnableSatComparison"] = 256] = "DBG_EnableSatComparison";
              EBulletDebugDrawModes[EBulletDebugDrawModes["DBG_DisableBulletLCP"] = 512] = "DBG_DisableBulletLCP";
              EBulletDebugDrawModes[EBulletDebugDrawModes["DBG_EnableCCD"] = 1024] = "DBG_EnableCCD";
              EBulletDebugDrawModes[EBulletDebugDrawModes["DBG_DrawConstraints"] = 2048] = "DBG_DrawConstraints";
              EBulletDebugDrawModes[EBulletDebugDrawModes["DBG_DrawConstraintLimits"] = 4096] = "DBG_DrawConstraintLimits";
              EBulletDebugDrawModes[EBulletDebugDrawModes["DBG_FastWireframe"] = 8192] = "DBG_FastWireframe";
              EBulletDebugDrawModes[EBulletDebugDrawModes["DBG_DrawNormals"] = 16384] = "DBG_DrawNormals";
              EBulletDebugDrawModes[EBulletDebugDrawModes["DBG_DrawFrames"] = 32768] = "DBG_DrawFrames";
              EBulletDebugDrawModes[EBulletDebugDrawModes["DBG_MAX_DEBUG_DRAW_MODE"] = 32769] = "DBG_MAX_DEBUG_DRAW_MODE";
            })(EBulletDebugDrawModes || (exports('c', EBulletDebugDrawModes = {})));
            let bt = exports('b', {});
            const btCache = exports('a', {});
            btCache.BODY_CACHE_NAME = 'body';
            btCache.CCT_CACHE_NAME = 'cct';
            function initWASM(wasmFactory, wasmUrl) {
              return new Promise((resolve, reject) => {
                const errorMessage = err => `[bullet]: bullet wasm lib load failed: ${err}`;
                wasmFactory({
                  instantiateWasm(importObject, receiveInstance) {
                    instantiateWasm(wasmUrl, importObject).then(result => {
                      receiveInstance(result.instance, result.module);
                    }).catch(err => reject(errorMessage(err)));
                  }
                }).then(instance => {
                  log('[bullet]:bullet wasm lib loaded.');
                  exports('b', bt = instance);
                }).then(resolve).catch(err => reject(errorMessage(err)));
              });
            }
            function initASM(asmFactory) {
              if (asmFactory != null) {
                return asmFactory().then(instance => {
                  log('[bullet]:bullet asm lib loaded.');
                  exports('b', bt = instance);
                });
              } else {
                return new Promise((resolve, reject) => {
                  resolve();
                });
              }
            }
            function shouldUseWasmModule() {
              {
                return false;
              }
            }
            function waitForAmmoInstantiation() {
              const errorReport = msg => {
                error(msg);
              };
              return ensureWasmModuleReady().then(() => {
                if (shouldUseWasmModule()) {
                  return Promise.all([module.import('./bullet.release.wasm-c766b0f9.js'), module.import('./bullet.release.wasm-db0c6f94.js')]).then(([{
                    default: bulletWasmFactory
                  }, {
                    default: bulletWasmUrl
                  }]) => initWASM(bulletWasmFactory, bulletWasmUrl));
                } else {
                  return module.import('./bullet.release.asm-b4a35818.js').then(({
                    default: bulletAsmFactory
                  }) => initASM(bulletAsmFactory));
                }
              }).catch(errorReport);
            }
            game.onPostInfrastructureInitDelegate.add(waitForAmmoInstantiation);

        })
    };
}));

System.register("q-bundled:///fs/cocos/physics/physx/physx-adapter.js", ["../../misc/webassembly-support.js", "pal/wasm", "../../../../virtual/internal%253Aconstants.js", "../../core/index.js", "../utils/util.js", "../framework/index.js", "./physx-instance.js", "./physx-enum.js", "../../game/index.js"], function (_export, _context) {
  "use strict";

  var NativeCodeBundleMode, ensureWasmModuleReady, instantiateWasm, BYTEDANCE, EDITOR, TEST, NATIVE_CODE_BUNDLE_MODE, Quat, Vec3, cclegacy, geometry, Settings, settings, sys, error, shrinkPositions, PhysicsSystem, PhysXInstance, PxHitFlag, PxPairFlag, PxQueryFlag, EFilterDataWord3, Director, director, game, PX, globalThis, USE_BYTEDANCE, USE_EXTERNAL_PHYSX, _v3, _v4, _trans, _pxtrans;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
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
                                                                                                                                                                                                                                                                                                                                                                                            */ /* eslint-disable import/no-mutable-exports */ /* eslint-disable no-console */ /* eslint-disable @typescript-eslint/restrict-template-expressions */ /* eslint-disable consistent-return */ /* eslint-disable @typescript-eslint/no-unsafe-return */ /* eslint-disable no-lonely-if */ /* eslint-disable import/order */
  function InitPhysXLibs() {
    if (USE_BYTEDANCE) {
      return new Promise((resolve, reject) => {
        if (!EDITOR && !TEST) console.debug('[PHYSICS]:', `Use PhysX Libs in BYTEDANCE.`);
        Object.assign(PX, globalThis.nativePhysX);
        Object.assign(_pxtrans, new PX.Transform(_v3, _v4));
        _pxtrans.setPosition = PX.Transform.prototype.setPosition.bind(_pxtrans);
        _pxtrans.setQuaternion = PX.Transform.prototype.setQuaternion.bind(_pxtrans);
        initConfigAndCacheObject(PX);
        resolve();
      });
    } else {
      const errorReport = msg => {
        error(msg);
      };
      return ensureWasmModuleReady().then(() => {
        if (shouldUseWasmModule()) {
          return Promise.all([_context.import('external:emscripten/physx/physx.release.wasm.js'), _context.import("../../../../virtual/external%253Aemscripten%252Fphysx%252Fphysx.release.wasm.wasm.js")]).then(([{
            default: physxWasmFactory
          }, {
            default: physxWasmUrl
          }]) => initWASM(physxWasmFactory, physxWasmUrl));
        } else {
          return _context.import('external:emscripten/physx/physx.release.asm.js').then(({
            default: physxAsmFactory
          }) => initASM(physxAsmFactory));
        }
      }).catch(errorReport);
    }
  }
  function initASM(physxAsmFactory) {
    globalThis.PhysX = globalThis.PHYSX ? globalThis.PHYSX : physxAsmFactory;
    if (globalThis.PhysX != null) {
      return globalThis.PhysX().then(Instance => {
        if (!EDITOR && !TEST) console.debug('[PHYSICS]:', `${USE_EXTERNAL_PHYSX ? 'External' : 'Internal'} PhysX asm libs loaded.`);
        initAdaptWrapper(Instance);
        initConfigAndCacheObject(Instance);
        Object.assign(PX, Instance);
      }, reason => {
        console.error('[PHYSICS]:', `PhysX asm load failed: ${reason}`);
      });
    } else {
      if (!EDITOR && !TEST) console.error('[PHYSICS]:', 'Failed to load PhysX js libs, package may be not found.');
      return new Promise((resolve, reject) => {
        resolve();
      });
    }
  }
  function initWASM(physxWasmFactory, physxWasmUrl) {
    globalThis.PhysX = globalThis.PHYSX ? globalThis.PHYSX : physxWasmFactory;
    if (globalThis.PhysX != null) {
      return globalThis.PhysX({
        instantiateWasm(importObject, receiveInstance) {
          return instantiateWasm(physxWasmUrl, importObject).then(result => {
            receiveInstance(result.instance, result.module);
          });
        }
      }).then(Instance => {
        if (!EDITOR && !TEST) console.debug('[PHYSICS]:', `${USE_EXTERNAL_PHYSX ? 'External' : 'Internal'} PhysX wasm libs loaded.`);
        initAdaptWrapper(Instance);
        initConfigAndCacheObject(Instance);
        _export("PX", PX = Instance);
      }, reason => {
        console.error('[PHYSICS]:', `PhysX wasm load failed: ${reason}`);
      });
    } else {
      if (!EDITOR && !TEST) console.error('[PHYSICS]:', 'Failed to load PhysX wasm libs, package may be not found.');
      return new Promise((resolve, reject) => {
        resolve();
      });
    }
  }
  function shouldUseWasmModule() {
    if (NATIVE_CODE_BUNDLE_MODE === NativeCodeBundleMode.BOTH) {
      return sys.hasFeature(sys.Feature.WASM);
    } else if (NATIVE_CODE_BUNDLE_MODE === NativeCodeBundleMode.WASM) {
      return true;
    } else {
      return false;
    }
  }
  function initConfigAndCacheObject(PX) {
    globalThis.PhysX = PX;
    PX.EPSILON = 1e-3;
    PX.MULTI_THREAD = false;
    PX.SUB_THREAD_COUNT = 1;
    PX.CACHE_MAT = {};
    PX.IMPL_PTR = {};
    PX.MESH_CONVEX = {};
    PX.MESH_STATIC = {};
    PX.TERRAIN_STATIC = {};
  }
  function initAdaptWrapper(obj) {
    obj.VECTOR_MAT = new obj.PxMaterialVector();
    obj.MeshScale = obj.PxMeshScale;
    obj.ShapeFlag = obj.PxShapeFlag;
    obj.ActorFlag = obj.PxActorFlag;
    obj.ForceMode = obj.PxForceMode;
    obj.CombineMode = obj.PxCombineMode;
    obj.BoxGeometry = obj.PxBoxGeometry;
    obj.QueryHitType = obj.PxQueryHitType;
    obj.RigidBodyFlag = obj.PxRigidBodyFlag;
    obj.PlaneGeometry = obj.PxPlaneGeometry;
    obj.SphereGeometry = obj.PxSphereGeometry;
    obj.CapsuleGeometry = obj.PxCapsuleGeometry;
    obj.ConvexMeshGeometry = obj.PxConvexMeshGeometry;
    obj.D6Motion = obj.PxD6Motion;
    obj.D6Axis = obj.PxD6Axis;
    obj.D6Drive = obj.PxD6Drive;
    obj.D6JointDrive = obj.PxD6JointDrive;
    obj.LinearLimitPair = obj.PxJointLinearLimitPair;
    obj.AngularLimitPair = obj.PxJointAngularLimitPair;
    obj.TriangleMeshGeometry = obj.PxTriangleMeshGeometry;
    obj.RigidDynamicLockFlag = obj.PxRigidDynamicLockFlag;
    obj.TolerancesScale = obj.PxTolerancesScale;
    obj.RevoluteJointFlags = {
      eLIMIT_ENABLED: 1 << 0,
      eDRIVE_ENABLED: 1 << 1,
      eDRIVE_FREESPIN: 1 << 2
    };
    obj.JointAngularLimitPair = obj.PxJointAngularLimitPair;
    obj.createRevoluteJoint = (a, b, c, d) => obj.PxRevoluteJointCreate(PX.physics, a, b, c, d);
    obj.createFixedConstraint = (a, b, c, d) => obj.PxFixedJointCreate(PX.physics, a, b, c, d);
    obj.createSphericalJoint = (a, b, c, d) => obj.PxSphericalJointCreate(PX.physics, a, b, c, d);
    obj.createD6Joint = (a, b, c, d) => obj.PxD6JointCreate(PX.physics, a, b, c, d);
  }
  function getColorPXColor(color, rgba) {
    color.b = rgba >> 16 & 0xff;
    color.g = rgba >> 8 & 0xff;
    color.r = rgba & 0xff;
    color.a = 255;
  }
  function addReference(shape, impl) {
    if (!impl) return;
    if (USE_BYTEDANCE) {
      PX.IMPL_PTR[shape.id] = shape;
      impl.setUserData(shape.id);
    } else {
      if (impl.$$) {
        PX.IMPL_PTR[impl.$$.ptr] = shape;
      }
    }
  }
  function removeReference(shape, impl) {
    if (!impl) return;
    if (USE_BYTEDANCE) {
      PX.IMPL_PTR[shape.id] = null;
      delete PX.IMPL_PTR[shape.id];
    } else {
      if (impl.$$) {
        PX.IMPL_PTR[impl.$$.ptr] = null;
        delete PX.IMPL_PTR[impl.$$.ptr];
      }
    }
  }
  function getWrapShape(pxShape) {
    if (USE_BYTEDANCE) {
      return PX.IMPL_PTR[pxShape];
    } else {
      return PX.IMPL_PTR[pxShape.$$.ptr];
    }
  }
  function getTempTransform(pos, quat) {
    if (USE_BYTEDANCE) {
      _pxtrans.setPosition(pos);
      _pxtrans.setQuaternion(quat);
    } else {
      Vec3.copy(_pxtrans.translation, pos);
      Quat.copy(_pxtrans.rotation, quat);
    }
    return _pxtrans;
  }
  function getJsTransform(pos, quat) {
    Vec3.copy(_trans.p, pos);
    Quat.copy(_trans.q, quat);
    return _trans;
  }
  function addActorToScene(scene, actor) {
    if (USE_BYTEDANCE) {
      scene.addActor(actor);
    } else {
      scene.addActor(actor, null);
    }
  }
  function setJointActors(joint, actor0, actor1) {
    if (USE_BYTEDANCE) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      actor1 ? joint.setActors(actor0, actor1) : joint.setActors(actor0);
    } else {
      joint.setActors(actor0, actor1);
    }
  }
  function setMassAndUpdateInertia(impl, mass) {
    if (USE_BYTEDANCE) {
      PX.RigidBodyExt.setMassAndUpdateInertia(impl, mass);
    } else {
      impl.setMassAndUpdateInertia(mass);
    }
  }
  function copyPhysXTransform(node, transform) {
    const wp = node.worldPosition;
    const wr = node.worldRotation;
    const dontUpdate = physXEqualsCocosVec3(transform, wp) && physXEqualsCocosQuat(transform, wr);
    if (dontUpdate) return;
    if (USE_BYTEDANCE) {
      node.setWorldPosition(transform.p);
      node.setWorldRotation(transform.q);
    } else {
      node.setWorldPosition(transform.translation);
      node.setWorldRotation(transform.rotation);
    }
  }
  function physXEqualsCocosVec3(trans, v3) {
    const pos = USE_BYTEDANCE ? trans.p : trans.translation;
    return Vec3.equals(pos, v3, PX.EPSILON);
  }
  function physXEqualsCocosQuat(trans, q) {
    const rot = USE_BYTEDANCE ? trans.q : trans.rotation;
    return Quat.equals(rot, q, PX.EPSILON);
  }
  function applyImpulse(isGlobal, impl, vec, rp) {
    if (isGlobal) {
      if (USE_BYTEDANCE) {
        PX.RigidBodyExt.applyImpulse(impl, vec, rp);
      } else {
        impl.applyImpulse(vec, rp);
      }
    } else if (USE_BYTEDANCE) {
      PX.RigidBodyExt.applyLocalImpulse(impl, vec, rp);
    } else {
      impl.applyLocalImpulse(vec, rp);
    }
  }
  function applyForce(isGlobal, impl, vec, rp) {
    if (isGlobal) {
      if (USE_BYTEDANCE) {
        PX.RigidBodyExt.applyForce(impl, vec, rp);
      } else {
        impl.applyForce(vec, rp);
      }
    } else if (USE_BYTEDANCE) {
      PX.RigidBodyExt.applyLocalForce(impl, vec, rp);
    } else {
      impl.applyLocalForce(vec, rp);
    }
  }
  function applyTorqueForce(impl, vec) {
    if (USE_BYTEDANCE) {
      impl.addTorque(vec, PX.ForceMode.eFORCE, true);
    } else {
      impl.addTorque(vec);
    }
  }
  function getShapeFlags(isTrigger) {
    if (USE_BYTEDANCE) {
      const flag = (isTrigger ? PX.ShapeFlag.eTRIGGER_SHAPE : PX.ShapeFlag.eSIMULATION_SHAPE) | PX.ShapeFlag.eSCENE_QUERY_SHAPE | PX.ShapeFlag.eVISUALIZATION;
      return flag;
    }
    const flag = (isTrigger ? PX.PxShapeFlag.eTRIGGER_SHAPE.value : PX.PxShapeFlag.eSIMULATION_SHAPE.value) | PX.PxShapeFlag.eSCENE_QUERY_SHAPE.value | PX.PxShapeFlag.eVISUALIZATION.value;
    return new PX.PxShapeFlags(flag);
  }

  // eslint-disable-next-line default-param-last
  function getShapeWorldBounds(shape, actor, i = 1.01, out) {
    if (USE_BYTEDANCE) {
      const b3 = PX.RigidActorExt.getWorldBounds(shape, actor, i);
      geometry.AABB.fromPoints(out, b3.minimum, b3.maximum);
    } else {
      const b3 = shape.getWorldBounds(actor, i);
      geometry.AABB.fromPoints(out, b3.minimum, b3.maximum);
    }
  }
  function getShapeMaterials(pxMtl) {
    if (USE_BYTEDANCE) {
      return [pxMtl];
    }
    if (PX.VECTOR_MAT.size() > 0) {
      PX.VECTOR_MAT.set(0, pxMtl);
    } else {
      PX.VECTOR_MAT.push_back(pxMtl);
    }
    return PX.VECTOR_MAT;
  }
  function setupCommonCookingParam(params, skipMeshClean = false, skipEdgedata = false) {
    if (!USE_BYTEDANCE) return;
    params.setSuppressTriangleMeshRemapTable(true);
    if (!skipMeshClean) {
      params.setMeshPreprocessParams(params.getMeshPreprocessParams() & ~PX.MeshPreprocessingFlag.eDISABLE_CLEAN_MESH);
    } else {
      params.setMeshPreprocessParams(params.getMeshPreprocessParams() | PX.MeshPreprocessingFlag.eDISABLE_CLEAN_MESH);
    }
    if (skipEdgedata) {
      params.setMeshPreprocessParams(params.getMeshPreprocessParams() & ~PX.MeshPreprocessingFlag.eDISABLE_ACTIVE_EDGES_PRECOMPUTE);
    } else {
      params.setMeshPreprocessParams(params.getMeshPreprocessParams() | PX.MeshPreprocessingFlag.eDISABLE_ACTIVE_EDGES_PRECOMPUTE);
    }
  }
  function createConvexMesh(_buffer, cooking, physics) {
    const vertices = shrinkPositions(_buffer);
    if (USE_BYTEDANCE) {
      const cdesc = new PX.ConvexMeshDesc();
      const verticesF32 = new Float32Array(vertices);
      cdesc.setPointsData(verticesF32);
      cdesc.setPointsCount(verticesF32.length / 3);
      cdesc.setPointsStride(3 * Float32Array.BYTES_PER_ELEMENT);
      cdesc.setConvexFlags(PX.ConvexFlag.eCOMPUTE_CONVEX);
      return cooking.createConvexMesh(cdesc);
    } else {
      const l = vertices.length;
      const vArr = new PX.PxVec3Vector();
      for (let i = 0; i < l; i += 3) {
        vArr.push_back({
          x: vertices[i],
          y: vertices[i + 1],
          z: vertices[i + 2]
        });
      }
      const r = cooking.createConvexMesh(vArr, physics);
      vArr.delete();
      return r;
    }
  }

  // eTIGHT_BOUNDS = (1<<0) convex
  // eDOUBLE_SIDED = (1<<1) trimesh
  function createMeshGeometryFlags(flags, isConvex) {
    if (USE_BYTEDANCE) {
      return flags;
    }
    return isConvex ? new PX.PxConvexMeshGeometryFlags(flags) : new PX.PxMeshGeometryFlags(flags);
  }
  function createTriangleMesh(vertices, indices, cooking, physics) {
    if (USE_BYTEDANCE) {
      const meshDesc = new PX.TriangleMeshDesc();
      meshDesc.setPointsData(vertices);
      // meshDesc.setPointsCount(vertices.length / 3);
      // meshDesc.setPointsStride(Float32Array.BYTES_PER_ELEMENT * 3);
      const indicesUI32 = new Uint32Array(indices);
      meshDesc.setTrianglesData(indicesUI32);
      // meshDesc.setTrianglesCount(indicesUI32.length / 3);
      // meshDesc.setTrianglesStride(Uint32Array.BYTES_PER_ELEMENT * 3);
      return cooking.createTriangleMesh(meshDesc);
    } else {
      const l = vertices.length;
      const l2 = indices.length;
      const vArr = new PX.PxVec3Vector();
      for (let i = 0; i < l; i += 3) {
        vArr.push_back({
          x: vertices[i],
          y: vertices[i + 1],
          z: vertices[i + 2]
        });
      }
      const iArr = new PX.PxU16Vector();
      for (let i = 0; i < l2; i += 3) {
        iArr.push_back(indices[i]);
        iArr.push_back(indices[i + 1]);
        iArr.push_back(indices[i + 2]);
      }
      const r = cooking.createTriMeshExt(vArr, iArr, physics);
      vArr.delete();
      iArr.delete();
      return r;
    }
  }
  function createBV33TriangleMesh(vertices, indices, cooking, physics, skipMeshCleanUp = false, skipEdgeData = false, cookingPerformance = false, meshSizePerfTradeoff = true, inserted = true) {
    if (!USE_BYTEDANCE) return;
    const meshDesc = new PX.TriangleMeshDesc();
    meshDesc.setPointsData(vertices);
    meshDesc.setTrianglesData(indices);
    const params = cooking.getParams();
    setupCommonCookingParam(params, skipMeshCleanUp, skipEdgeData);
    const midDesc = new PX.BVH33MidphaseDesc();
    if (cookingPerformance) midDesc.setMeshCookingHint(PX.MeshCookingHint.eCOOKING_PERFORMANCE);else midDesc.setMeshCookingHint(PX.MeshCookingHint.eSIM_PERFORMANCE);
    if (meshSizePerfTradeoff) midDesc.setMeshSizePerformanceTradeOff(0.0);else midDesc.setMeshSizePerformanceTradeOff(0.55);
    params.setMidphaseDesc(midDesc);
    cooking.setParams(params);
    console.info(`[PHYSICS]: cook bvh33 status:${cooking.validateTriangleMesh(meshDesc)}`);
    return cooking.createTriangleMesh(meshDesc);
  }
  function createBV34TriangleMesh(vertices, indices, cooking, physics, skipMeshCleanUp = false, skipEdgeData = false, numTrisPerLeaf = true, inserted = true) {
    if (!USE_BYTEDANCE) return;
    const meshDesc = new PX.TriangleMeshDesc();
    meshDesc.setPointsData(vertices);
    meshDesc.setTrianglesData(indices);
    const params = cooking.getParams();
    setupCommonCookingParam(params, skipMeshCleanUp, skipEdgeData);
    const midDesc = new PX.BVH34MidphaseDesc();
    midDesc.setNumPrimsLeaf(numTrisPerLeaf);
    params.setMidphaseDesc(midDesc);
    cooking.setParams(params);
    console.info(`[PHYSICS]: cook bvh34 status:${cooking.validateTriangleMesh(meshDesc)}`);
    return cooking.createTriangleMesh(meshDesc);
  }
  function createHeightField(terrain, heightScale, cooking, physics) {
    const sizeI = terrain.getVertexCountI();
    const sizeJ = terrain.getVertexCountJ();
    if (USE_BYTEDANCE) {
      const samples = new PX.HeightFieldSamples(sizeI * sizeJ);
      for (let i = 0; i < sizeI; i++) {
        for (let j = 0; j < sizeJ; j++) {
          const s = terrain.getHeight(i, j) / heightScale;
          const index = j + i * sizeJ;
          samples.setHeightAtIndex(index, s);
          // samples.setMaterialIndex0AtIndex(index, 0);
          // samples.setMaterialIndex1AtIndex(index, 0);
        }
      }

      const hfdesc = new PX.HeightFieldDesc();
      hfdesc.setNbRows(sizeJ);
      hfdesc.setNbColumns(sizeI);
      hfdesc.setSamples(samples);
      return cooking.createHeightField(hfdesc);
    }
    const samples = new PX.PxHeightFieldSampleVector();
    for (let i = 0; i < sizeI; i++) {
      for (let j = 0; j < sizeJ; j++) {
        const s = new PX.PxHeightFieldSample();
        s.height = terrain.getHeight(i, j) / heightScale;
        samples.push_back(s);
      }
    }
    return cooking.createHeightFieldExt(sizeI, sizeJ, samples, physics);
  }
  function createHeightFieldGeometry(hf, flags, hs, xs, zs) {
    if (USE_BYTEDANCE) {
      return new PX.HeightFieldGeometry(hf, hs, xs, zs);
    }
    return new PX.PxHeightFieldGeometry(hf, new PX.PxMeshGeometryFlags(flags), hs, xs, zs);
  }
  function simulateScene(scene, deltaTime) {
    if (USE_BYTEDANCE) {
      scene.simulate(deltaTime);
    } else {
      scene.simulate(deltaTime, true);
    }
  }
  function raycastAll(world, worldRay, options, pool, results) {
    const maxDistance = options.maxDistance;
    const flags = PxHitFlag.ePOSITION | PxHitFlag.eNORMAL;
    const word3 = EFilterDataWord3.QUERY_FILTER | (options.queryTrigger ? 0 : EFilterDataWord3.QUERY_CHECK_TRIGGER);
    const queryFlags = PxQueryFlag.eSTATIC | PxQueryFlag.eDYNAMIC | PxQueryFlag.ePREFILTER | PxQueryFlag.eNO_BLOCK;
    const queryfilterData = PhysXInstance.queryfilterData;
    const queryFilterCB = PhysXInstance.queryFilterCB;
    const mutipleResults = PhysXInstance.mutipleResults;
    const mutipleResultSize = PhysXInstance.mutipleResultSize;
    if (USE_BYTEDANCE) {
      queryfilterData.data.word3 = word3;
      queryfilterData.data.word0 = options.mask >>> 0;
      queryfilterData.flags = queryFlags;
      const r = PX.SceneQueryExt.raycastMultiple(world.scene, worldRay.o, worldRay.d, maxDistance, flags, mutipleResultSize, queryfilterData, queryFilterCB);
      if (r) {
        for (let i = 0; i < r.length; i++) {
          const block = r[i];
          const collider = getWrapShape(block.shapeData).collider;
          const result = pool.add();
          result._assign(block.position, block.distance, collider, block.normal);
          results.push(result);
        }
        return true;
      }
    } else {
      queryfilterData.setWords(options.mask >>> 0, 0);
      queryfilterData.setWords(word3, 3);
      queryfilterData.setFlags(queryFlags);
      const blocks = mutipleResults;
      const r = world.scene.raycastMultiple(worldRay.o, worldRay.d, maxDistance, flags, blocks, blocks.size(), queryfilterData, queryFilterCB, null);
      if (r > 0) {
        for (let i = 0; i < r; i++) {
          const block = blocks.get(i);
          const collider = getWrapShape(block.getShape()).collider;
          const result = pool.add();
          result._assign(block.position, block.distance, collider, block.normal);
          results.push(result);
        }
        return true;
      }
      if (r === -1) {
        // eslint-disable-next-line no-console
        console.error('not enough memory.');
      }
    }
    return false;
  }
  function raycastClosest(world, worldRay, options, result) {
    const maxDistance = options.maxDistance;
    const flags = PxHitFlag.ePOSITION | PxHitFlag.eNORMAL;
    const word3 = EFilterDataWord3.QUERY_FILTER | (options.queryTrigger ? 0 : EFilterDataWord3.QUERY_CHECK_TRIGGER) | EFilterDataWord3.QUERY_SINGLE_HIT;
    const queryFlags = PxQueryFlag.eSTATIC | PxQueryFlag.eDYNAMIC | PxQueryFlag.ePREFILTER;
    const queryfilterData = PhysXInstance.queryfilterData;
    const queryFilterCB = PhysXInstance.queryFilterCB;
    if (USE_BYTEDANCE) {
      queryfilterData.data.word3 = word3;
      queryfilterData.data.word0 = options.mask >>> 0;
      queryfilterData.flags = queryFlags;
      const block = PX.SceneQueryExt.raycastSingle(world.scene, worldRay.o, worldRay.d, maxDistance, flags, queryfilterData, queryFilterCB);
      if (block) {
        const collider = getWrapShape(block.shapeData).collider;
        result._assign(block.position, block.distance, collider, block.normal);
        return true;
      }
    } else {
      queryfilterData.setWords(options.mask >>> 0, 0);
      queryfilterData.setWords(word3, 3);
      queryfilterData.setFlags(queryFlags);
      const block = PhysXInstance.singleResult;
      const r = world.scene.raycastSingle(worldRay.o, worldRay.d, options.maxDistance, flags, block, queryfilterData, queryFilterCB, null);
      if (r) {
        const collider = getWrapShape(block.getShape()).collider;
        result._assign(block.position, block.distance, collider, block.normal);
        return true;
      }
    }
    return false;
  }
  function sweepAll(world, worldRay, geometry, geometryRotation, options, pool, results) {
    const maxDistance = options.maxDistance;
    const flags = PxHitFlag.ePOSITION | PxHitFlag.eNORMAL;
    const word3 = EFilterDataWord3.QUERY_FILTER | (options.queryTrigger ? 0 : EFilterDataWord3.QUERY_CHECK_TRIGGER);
    const queryFlags = PxQueryFlag.eSTATIC | PxQueryFlag.eDYNAMIC | PxQueryFlag.ePREFILTER | PxQueryFlag.eNO_BLOCK;
    const queryfilterData = PhysXInstance.queryfilterData;
    const queryFilterCB = PhysXInstance.queryFilterCB; //?
    const mutipleResults = PhysXInstance.mutipleSweepResults;
    const mutipleResultSize = PhysXInstance.mutipleResultSize;
    queryfilterData.setWords(options.mask >>> 0, 0);
    queryfilterData.setWords(word3, 3);
    queryfilterData.setFlags(queryFlags);
    const blocks = mutipleResults;
    const r = world.scene.sweepMultiple(geometry, getTempTransform(worldRay.o, geometryRotation), worldRay.d, maxDistance, flags, blocks, blocks.size(), queryfilterData, queryFilterCB, null, 0);
    if (r > 0) {
      for (let i = 0; i < r; i++) {
        const block = blocks.get(i);
        const collider = getWrapShape(block.getShape()).collider;
        const result = pool.add();
        result._assign(block.position, block.distance, collider, block.normal);
        results.push(result);
      }
      return true;
    }
    if (r === -1) {
      // eslint-disable-next-line no-console
      console.error('not enough memory.');
    }
    return false;
  }
  function sweepClosest(world, worldRay, geometry, geometryRotation, options, result) {
    const maxDistance = options.maxDistance;
    const flags = PxHitFlag.ePOSITION | PxHitFlag.eNORMAL;
    const word3 = EFilterDataWord3.QUERY_FILTER | (options.queryTrigger ? 0 : EFilterDataWord3.QUERY_CHECK_TRIGGER) | EFilterDataWord3.QUERY_SINGLE_HIT;
    const queryFlags = PxQueryFlag.eSTATIC | PxQueryFlag.eDYNAMIC | PxQueryFlag.ePREFILTER;
    const queryfilterData = PhysXInstance.queryfilterData;
    queryfilterData.setWords(options.mask >>> 0, 0);
    queryfilterData.setWords(word3, 3);
    queryfilterData.setFlags(queryFlags);
    const queryFilterCB = PhysXInstance.queryFilterCB;
    const block = PhysXInstance.singleSweepResult;
    const r = world.scene.sweepSingle(geometry, getTempTransform(worldRay.o, geometryRotation), worldRay.d, maxDistance, flags, block, queryfilterData, queryFilterCB, null, 0);
    if (r) {
      const collider = getWrapShape(block.getShape()).collider;
      result._assign(block.position, block.distance, collider, block.normal);
      return true;
    }
    return false;
  }
  function initializeWorld(world) {
    if (USE_BYTEDANCE) {
      // construct PhysX instance object only once
      if (!PhysXInstance.physics) {
        // const physics = PX.createPhysics();
        PhysXInstance.physics = PX.physics; // Bytedance have internal physics instance
        PhysXInstance.cooking = PX.createCooking(new PX.CookingParams());
        PhysXInstance.queryFilterCB = new PX.QueryFilterCallback();
        PhysXInstance.queryFilterCB.setPreFilter(world.callback.queryCallback.preFilterForByteDance);
        PhysXInstance.queryfilterData = {
          data: {
            word0: 0,
            word1: 0,
            word2: 0,
            word3: 1
          },
          flags: 0
        };
      }
      initConfigForByteDance();
      hackForMultiThread();
      const sceneDesc = PhysXInstance.physics.createSceneDesc();
      if (PX.MULTI_THREAD) {
        const mstc = sceneDesc.getMaxSubThreadCount();
        const count = PX.SUB_THREAD_COUNT > mstc ? mstc : PX.SUB_THREAD_COUNT;
        sceneDesc.setSubThreadCount(count);
        console.info('[PHYSICS][PhysX]:', `use muti-thread mode, sub thread count: ${count}, max count: ${mstc}`);
      } else {
        console.info('[PHYSICS][PhysX]:', 'use single-thread mode');
      }
      sceneDesc.setFlag(PX.SceneFlag.eENABLE_PCM, true);
      sceneDesc.setFlag(PX.SceneFlag.eENABLE_CCD, true);
      const scene = PhysXInstance.physics.createScene(sceneDesc);
      scene.setNeedOnContact(true);
      scene.setNeedOnTrigger(true);
      world.scene = scene;
    } else {
      // construct PhysX instance object only once
      if (!PhysXInstance.foundation) {
        const version = PX.PX_PHYSICS_VERSION;
        const allocator = new PX.PxDefaultAllocator();
        const defaultErrorCallback = new PX.PxDefaultErrorCallback();
        const foundation = PhysXInstance.foundation = PX.PxCreateFoundation(version, allocator, defaultErrorCallback);
        PhysXInstance.pvd = null;
        const scale = new PX.PxTolerancesScale();
        PhysXInstance.physics = PX.physics = PX.PxCreatePhysics(version, foundation, scale, false, PhysXInstance.pvd);
        PhysXInstance.cooking = PX.PxCreateCooking(version, foundation, new PX.PxCookingParams(scale));
        PX.PxInitExtensions(PhysXInstance.physics, PhysXInstance.pvd);
        PhysXInstance.singleResult = new PX.PxRaycastHit();
        PhysXInstance.mutipleResults = new PX.PxRaycastHitVector();
        PhysXInstance.mutipleResults.resize(PhysXInstance.mutipleResultSize, PhysXInstance.singleResult);
        PhysXInstance.queryfilterData = new PX.PxQueryFilterData();
        PhysXInstance.simulationCB = PX.PxSimulationEventCallback.implement(world.callback.eventCallback);
        PhysXInstance.queryFilterCB = PX.PxQueryFilterCallback.implement(world.callback.queryCallback);
        PhysXInstance.singleSweepResult = new PX.PxSweepHit();
        PhysXInstance.mutipleSweepResults = new PX.PxSweepHitVector();
        PhysXInstance.mutipleSweepResults.resize(PhysXInstance.mutipleResultSize, PhysXInstance.singleSweepResult);
      }
      const sceneDesc = PX.getDefaultSceneDesc(PhysXInstance.physics.getTolerancesScale(), 0, PhysXInstance.simulationCB);
      world.scene = PhysXInstance.physics.createScene(sceneDesc);
      world.scene.setVisualizationParameter(PX.PxVisualizationParameter.eSCALE, 1);
      world.controllerManager = PX.PxCreateControllerManager(world.scene, false);
    }
  }

  /**
   * f32 x3 position.x,position.y,position.z,
   * f32 x3 normal.x,normal.y,normal.z,
   * f32 x3 impulse.x,impulse.y,impulse.z,
   * f32 separation,
   * totoal = 40
   * ui32 internalFaceIndex0,
   * ui32 internalFaceIndex1,
   * totoal = 48
   */
  function getContactPosition(pxContactOrOffset, out, buf) {
    if (USE_BYTEDANCE) {
      Vec3.fromArray(out, new Float32Array(buf, pxContactOrOffset, 3));
    } else {
      Vec3.copy(out, pxContactOrOffset.position);
    }
  }
  function getContactNormal(pxContactOrOffset, out, buf) {
    if (USE_BYTEDANCE) {
      Vec3.fromArray(out, new Float32Array(buf, pxContactOrOffset + 12, 3));
    } else {
      Vec3.copy(out, pxContactOrOffset.normal);
    }
  }
  function getContactDataOrByteOffset(index, offset) {
    if (USE_BYTEDANCE) {
      return index * 40 + offset;
    } else {
      const gc = PX.getGContacts();
      const data = gc.get(index + offset);
      gc.delete();
      return data;
    }
  }
  function gatherEvents(world) {
    if (USE_BYTEDANCE) {
      // contact
      const contactBuf = world.scene.getContactData();
      if (contactBuf && contactBuf.byteLength > 0) {
        const uint32view = new Uint32Array(contactBuf);
        const pairCount = uint32view[0];
        /**
         * struct ContactPair{
         *      u32 shapeUserData0;
         *      u32 shapeUserData1;
         *      u32 events;
         *      u32 contactCount;
         * };
         * Total byte length = 16
         */
        const contactPointBufferBegin = pairCount * 16 + 4;
        let contactPointByteOffset = contactPointBufferBegin;
        for (let i = 0; i < pairCount; i++) {
          const offset = i * 4 + 1;
          const shape0 = PX.IMPL_PTR[uint32view[offset]];
          const shape1 = PX.IMPL_PTR[uint32view[offset + 1]];
          const events = uint32view[offset + 2];
          const contactCount = uint32view[offset + 3];
          if (events & PxPairFlag.eNOTIFY_TOUCH_PERSISTS) {
            world.callback.onCollision('onCollisionStay', shape0, shape1, contactCount, contactBuf, contactPointByteOffset);
          } else if (events & PxPairFlag.eNOTIFY_TOUCH_FOUND) {
            world.callback.onCollision('onCollisionEnter', shape0, shape1, contactCount, contactBuf, contactPointByteOffset);
          } else if (events & PxPairFlag.eNOTIFY_TOUCH_LOST) {
            world.callback.onCollision('onCollisionExit', shape0, shape1, contactCount, contactBuf, contactPointByteOffset);
          }
          /**
           * struct ContactPairPoint{
           *      PxVec3 position;
           *      PxVec3 normal;
           *      PxVec3 impulse;
           *      float separation;
           * };
           * Total byte length = 40
           */
          contactPointByteOffset += 40 * contactCount;
        }
      }

      // trigger
      const triggerBuf = world.scene.getTriggerData();
      if (triggerBuf && triggerBuf.byteLength > 0) {
        /**
         * struct TriggerPair {
         *      u32 shapeUserData0;
         *      u32 shapeUserData1;
         *      u32 status;
         * };
         * Total byte length = 12
         */
        const uint32view = new Uint32Array(triggerBuf);
        const pairCount = uint32view.length / 3;
        for (let i = 0; i < pairCount; i++) {
          const begin = i * 3;
          const shape0 = PX.IMPL_PTR[uint32view[begin]];
          const shape1 = PX.IMPL_PTR[uint32view[begin + 1]];
          const events = uint32view[begin + 2];
          if (events & PxPairFlag.eNOTIFY_TOUCH_FOUND) {
            world.callback.onTrigger('onTriggerEnter', shape0, shape1, true);
          } else if (events & PxPairFlag.eNOTIFY_TOUCH_LOST) {
            world.callback.onTrigger('onTriggerExit', shape0, shape1, false);
          }
        }
      }
    }
  }
  function syncNoneStaticToSceneIfWaking(actor, node) {
    if (USE_BYTEDANCE) {
      const transform = actor.getGlobalPoseIfWaking();
      if (!transform) return;
      copyPhysXTransform(node, transform);
    } else {
      if (actor.isSleeping()) return;
      copyPhysXTransform(node, actor.getGlobalPose());
    }
  }

  /**
   * Extension config for bytedance
   */

  function initConfigForByteDance() {
    const physX = settings.querySettings(Settings.Category.PHYSICS, 'physX');
    if (physX) {
      const {
        epsilon,
        multiThread,
        subThreadCount
      } = physX;
      PX.EPSILON = epsilon;
      PX.MULTI_THREAD = multiThread;
      PX.SUB_THREAD_COUNT = subThreadCount;
    }
  }

  // hack for multi thread mode, should be refactor in future
  function hackForMultiThread() {
    if (USE_BYTEDANCE && PX.MULTI_THREAD) {
      PhysicsSystem.prototype.postUpdate = function postUpdate(deltaTime) {
        const sys = this;
        if (!sys._enable) {
          sys.physicsWorld.syncSceneToPhysics();
          return;
        }
        if (sys._autoSimulation) {
          director.emit(Director.EVENT_BEFORE_PHYSICS);
          sys._accumulator += deltaTime;
          sys._subStepCount = 1;
          sys.physicsWorld.syncSceneToPhysics();
          sys.physicsWorld.step(sys._fixedTimeStep);
          sys._accumulator -= sys._fixedTimeStep;
          sys._mutiThreadYield = performance.now();
        }
      };

      // eslint-disable-next-line no-inner-declarations
      function lastUpdate(sys) {
        if (!sys._enable) return;
        if (sys._autoSimulation) {
          const yieldTime = performance.now() - sys._mutiThreadYield;
          sys.physicsWorld.syncPhysicsToScene();
          sys.physicsWorld.emitEvents();
          if (cclegacy.profiler && cclegacy.profiler._stats) {
            cclegacy.profiler._stats.physics.counter._time += yieldTime;
          }
          director.emit(Director.EVENT_AFTER_PHYSICS);
        }
      }
      director.on(Director.EVENT_END_FRAME, () => {
        if (!director.isPaused()) {
          lastUpdate(PhysicsSystem.instance);
        }
      });
    }
  }
  _export({
    InitPhysXLibs: InitPhysXLibs,
    getColorPXColor: getColorPXColor,
    addReference: addReference,
    removeReference: removeReference,
    getWrapShape: getWrapShape,
    getTempTransform: getTempTransform,
    getJsTransform: getJsTransform,
    addActorToScene: addActorToScene,
    setJointActors: setJointActors,
    setMassAndUpdateInertia: setMassAndUpdateInertia,
    copyPhysXTransform: copyPhysXTransform,
    physXEqualsCocosVec3: physXEqualsCocosVec3,
    physXEqualsCocosQuat: physXEqualsCocosQuat,
    applyImpulse: applyImpulse,
    applyForce: applyForce,
    applyTorqueForce: applyTorqueForce,
    getShapeFlags: getShapeFlags,
    getShapeWorldBounds: getShapeWorldBounds,
    getShapeMaterials: getShapeMaterials,
    setupCommonCookingParam: setupCommonCookingParam,
    createConvexMesh: createConvexMesh,
    createMeshGeometryFlags: createMeshGeometryFlags,
    createTriangleMesh: createTriangleMesh,
    createBV33TriangleMesh: createBV33TriangleMesh,
    createBV34TriangleMesh: createBV34TriangleMesh,
    createHeightField: createHeightField,
    createHeightFieldGeometry: createHeightFieldGeometry,
    simulateScene: simulateScene,
    raycastAll: raycastAll,
    raycastClosest: raycastClosest,
    sweepAll: sweepAll,
    sweepClosest: sweepClosest,
    initializeWorld: initializeWorld,
    getContactPosition: getContactPosition,
    getContactNormal: getContactNormal,
    getContactDataOrByteOffset: getContactDataOrByteOffset,
    gatherEvents: gatherEvents,
    syncNoneStaticToSceneIfWaking: syncNoneStaticToSceneIfWaking
  });
  return {
    setters: [function (_miscWebassemblySupportJs) {
      NativeCodeBundleMode = _miscWebassemblySupportJs.NativeCodeBundleMode;
    }, function (_palWasm) {
      ensureWasmModuleReady = _palWasm.ensureWasmModuleReady;
      instantiateWasm = _palWasm.instantiateWasm;
    }, function (_virtualInternal253AconstantsJs) {
      BYTEDANCE = _virtualInternal253AconstantsJs.BYTEDANCE;
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
      TEST = _virtualInternal253AconstantsJs.TEST;
      NATIVE_CODE_BUNDLE_MODE = _virtualInternal253AconstantsJs.NATIVE_CODE_BUNDLE_MODE;
    }, function (_coreIndexJs) {
      Quat = _coreIndexJs.Quat;
      Vec3 = _coreIndexJs.Vec3;
      cclegacy = _coreIndexJs.cclegacy;
      geometry = _coreIndexJs.geometry;
      Settings = _coreIndexJs.Settings;
      settings = _coreIndexJs.settings;
      sys = _coreIndexJs.sys;
      error = _coreIndexJs.error;
    }, function (_utilsUtilJs) {
      shrinkPositions = _utilsUtilJs.shrinkPositions;
    }, function (_frameworkIndexJs) {
      PhysicsSystem = _frameworkIndexJs.PhysicsSystem;
    }, function (_physxInstanceJs) {
      PhysXInstance = _physxInstanceJs.PhysXInstance;
    }, function (_physxEnumJs) {
      PxHitFlag = _physxEnumJs.PxHitFlag;
      PxPairFlag = _physxEnumJs.PxPairFlag;
      PxQueryFlag = _physxEnumJs.PxQueryFlag;
      EFilterDataWord3 = _physxEnumJs.EFilterDataWord3;
    }, function (_gameIndexJs) {
      Director = _gameIndexJs.Director;
      director = _gameIndexJs.director;
      game = _gameIndexJs.game;
    }],
    execute: function () {
      _export("PX", PX = {});
      globalThis = cclegacy._global; // Use bytedance native or js physics if nativePhysX is not null.
      USE_BYTEDANCE = BYTEDANCE && globalThis.nativePhysX;
      USE_EXTERNAL_PHYSX = !!globalThis.PHYSX; // Init physx libs when engine init.
      game.onPostInfrastructureInitDelegate.add(InitPhysXLibs);
      _v3 = {
        x: 0,
        y: 0,
        z: 0
      };
      _v4 = {
        x: 0,
        y: 0,
        z: 0,
        w: 1
      };
      _export("_trans", _trans = {
        translation: _v3,
        rotation: _v4,
        p: _v3,
        q: _v4
      });
      _export("_pxtrans", _pxtrans = _trans);
    }
  };
});
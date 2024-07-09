System.register("q-bundled:///fs/cocos/rendering/custom/scene-culling.js", ["../../core/index.js", "../../core/geometry/index.js", "../../gfx/index.js", "../../render-scene/index.js", "../../render-scene/scene/index.js", "../../scene-graph/index.js", "./define.js", "./render-graph.js", "./types.js", "./web-pipeline-types.js", "./utils.js", "./layout-graph-utils.js"], function (_export, _context) {
  "use strict";

  var Vec3, assert, RecyclePool, intersect, AABB, BufferInfo, BufferViewInfo, MemoryUsageBit, BufferUsageBit, BatchingSchemes, CSMLevel, LightType, ProbeType, SKYBOX_FLAG, ShadowType, Layers, hashCombineStr, getSubpassOrPassID, bool, AlignUp, SetLightUBO, CullingFlags, RenderGraphValue, SceneFlags, RenderQueue, RenderQueueDesc, instancePool, ObjectPool, getUniformBlockSize, CullingPools, FrustumCullingKey, LightBoundsCullingKey, LightBoundsCulling, LightBoundsCullingResult, FrustumCulling, SceneCulling, LightResource, vec3Pool, REFLECTION_PROBE_DEFAULT_MASK, pSceneData, transWorldBounds, rangedDirLightBoundingBox, lightAABB;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function computeCullingKey(sceneData, castShadows, refId = -1) {
    let hashCode = 0;
    const camera = sceneData.camera;
    const light = sceneData.light.light;
    const lightLevel = sceneData.light.level;
    const culledByLight = sceneData.light.culledByLight;
    const reflectProbe = sceneData.light.probe;
    const shadeLight = sceneData.shadingLight;
    if (camera) {
      // camera
      hashCode = hashCombineStr(`u${camera.node.uuid}`, hashCode);
      hashCode = hashCombineStr(`p${camera.priority}`, hashCode);
      hashCode = hashCombineStr(`v${camera.visibility}`, hashCode);
      hashCode = hashCombineStr(`f${camera.clearFlag}`, hashCode);
      hashCode = hashCombineStr(`cx${camera.clearColor.x}cy${camera.clearColor.y}cz${camera.clearColor.z}cw${camera.clearColor.w}`, hashCode);
      hashCode = hashCombineStr(`cd${camera.clearDepth}cs${camera.clearStencil}`, hashCode);
      hashCode = hashCombineStr(`pj${camera.projectionType}`, hashCode);
      hashCode = hashCombineStr(`fa${camera.fovAxis}`, hashCode);
      hashCode = hashCombineStr(`fov${camera.fov}`, hashCode);
      hashCode = hashCombineStr(`n${camera.nearClip}`, hashCode);
      hashCode = hashCombineStr(`far${camera.farClip}`, hashCode);
      hashCode = hashCombineStr(`apt${camera.aperture}`, hashCode);
      hashCode = hashCombineStr(`sht${camera.shutter}`, hashCode);
      hashCode = hashCombineStr(`iso${camera.iso}`, hashCode);
      hashCode = hashCombineStr(`rx${camera.viewport.x}ry${camera.viewport.y}rw${camera.viewport.width}rh${camera.viewport.height}`, hashCode);
      hashCode = hashCombineStr(`upp${camera.usePostProcess}`, hashCode);
    }
    // light
    if (light) {
      hashCode = hashCombineStr(`u${light.node.uuid}`, hashCode);
      // hashCode = hashCombineStr(`cx${light.finalColor.x}cy${light.finalColor.y}cz${light.finalColor.z}`, hashCode);
      // hashCode = hashCombineStr(`ct${light.useColorTemperature}`, hashCode);
      // hashCode = hashCombineStr(`ctv${light.colorTemperature}`, hashCode);
      // hashCode = hashCombineStr(`vis${light.visibility}`, hashCode);
      // hashCode = hashCombineStr(`tp${light.type}`, hashCode);
      // switch (light.type) {
      // case LightType.DIRECTIONAL:
      //     hashCode = hashCombineStr(`${(light as DirectionalLight).illuminance}`, hashCode);
      //     break;
      // default:
      // }
    }

    if (shadeLight) {
      hashCode = hashCombineStr(`shadeLight${shadeLight.node.uuid}`, hashCode);
    }
    hashCode = hashCombineStr(`culledByLight${culledByLight}`, hashCode);
    hashCode = hashCombineStr(`cast${castShadows}`, hashCode);
    hashCode = hashCombineStr(`level${lightLevel}`, hashCode);
    if (reflectProbe) {
      hashCode = hashCombineStr(`probe${reflectProbe.getProbeId()}`, hashCode);
    }
    hashCode = hashCombineStr(`refId${refId}`, hashCode);
    return hashCode;
  }
  function isNodeVisible(node, visibility) {
    return node && (visibility & node.layer) === node.layer;
  }
  function isModelVisible(model, visibility) {
    return !!(visibility & model.visFlags);
  }
  function isReflectProbeMask(model) {
    return bool((model.node.layer & REFLECTION_PROBE_DEFAULT_MASK) === model.node.layer || REFLECTION_PROBE_DEFAULT_MASK & model.visFlags);
  }
  function isFrustumVisible(model, frustum, castShadow) {
    const modelWorldBounds = model.worldBounds;
    if (!modelWorldBounds) {
      return false;
    }
    transWorldBounds.copy(modelWorldBounds);
    const shadows = pSceneData.shadows;
    if (shadows.type === ShadowType.Planar && castShadow) {
      AABB.transform(transWorldBounds, modelWorldBounds, shadows.matLight);
    }
    return !intersect.aabbFrustum(transWorldBounds, frustum);
  }
  function isIntersectAABB(lAABB, rAABB) {
    return !intersect.aabbWithAABB(lAABB, rAABB);
  }
  function sceneCulling(scene, camera, camOrLightFrustum, castShadow, probe, models) {
    const skybox = pSceneData.skybox;
    const skyboxModel = skybox.model;
    const visibility = camera.visibility;
    const camSkyboxFlag = camera.clearFlag & SKYBOX_FLAG;
    if (!castShadow && skybox && skybox.enabled && skyboxModel && camSkyboxFlag) {
      models.push(skyboxModel);
    }
    for (const model of scene.models) {
      assert(!!model);
      if (!model.enabled || !model.node || castShadow && !model.castShadow) {
        continue;
      }
      if (scene && scene.isCulledByLod(camera, model)) {
        continue;
      }
      if (!probe || probe && probe.probeType === ProbeType.CUBE) {
        if (isNodeVisible(model.node, visibility) || isModelVisible(model, visibility)) {
          const wBounds = model.worldBounds;
          // frustum culling
          if (wBounds && (!probe && isFrustumVisible(model, camOrLightFrustum, castShadow) || probe && isIntersectAABB(wBounds, probe.boundingBox))) {
            continue;
          }
          models.push(model);
        }
      } else if (isReflectProbeMask(model)) {
        models.push(model);
      }
    }
  }
  function isBlend(pass) {
    let bBlend = false;
    for (const target of pass.blendState.targets) {
      if (target.blend) {
        bBlend = true;
      }
    }
    return bBlend;
  }
  function computeSortingDepth(camera, model) {
    let depth = 0;
    if (model.node) {
      const node = model.transform;
      const tempVec3 = vec3Pool.acquire();
      const position = Vec3.subtract(tempVec3, node.worldPosition, camera.position);
      depth = position.dot(camera.forward);
      vec3Pool.release(tempVec3);
    }
    return depth;
  }
  function addRenderObject(phaseLayoutId, isDrawOpaqueOrMask, isDrawBlend, isDrawProbe, camera, model, queue) {
    const probeQueue = queue.probeQueue;
    if (isDrawProbe) {
      probeQueue.applyMacro(model, phaseLayoutId);
    }
    const subModels = model.subModels;
    const subModelCount = subModels.length;
    const skyboxModel = pSceneData.skybox.model;
    for (let subModelIdx = 0; subModelIdx < subModelCount; ++subModelIdx) {
      const subModel = subModels[subModelIdx];
      const passes = subModel.passes;
      const passCount = passes.length;
      const probePhase = probeQueue.probeMap.includes(subModel);
      if (probePhase) phaseLayoutId = probeQueue.defaultId;
      for (let passIdx = 0; passIdx < passCount; ++passIdx) {
        if (model === skyboxModel && !subModelIdx && !passIdx && isDrawOpaqueOrMask) {
          queue.opaqueQueue.add(model, computeSortingDepth(camera, model), subModelIdx, passIdx);
          continue;
        }
        const pass = passes[passIdx];
        // check phase
        const phaseAllowed = phaseLayoutId === pass.phaseID;
        if (!phaseAllowed) {
          continue;
        }
        // check scene flags
        const is_blend = isBlend(pass);
        const isOpaqueOrMask = !is_blend;
        if (!isDrawBlend && is_blend) {
          // skip transparent object
          continue;
        }
        if (!isDrawOpaqueOrMask && isOpaqueOrMask) {
          // skip opaque object
          continue;
        }

        // add object to queue
        if (pass.batchingScheme === BatchingSchemes.INSTANCING) {
          if (is_blend) {
            queue.transparentInstancingQueue.add(pass, subModel, passIdx);
          } else {
            queue.opaqueInstancingQueue.add(pass, subModel, passIdx);
          }
        } else {
          const depth = computeSortingDepth(camera, model);
          if (is_blend) {
            queue.transparentQueue.add(model, depth, subModelIdx, passIdx);
          } else {
            queue.opaqueQueue.add(model, depth, subModelIdx, passIdx);
          }
        }
      }
    }
  }
  _export({
    SceneCulling: void 0,
    LightResource: void 0
  });
  return {
    setters: [function (_coreIndexJs) {
      Vec3 = _coreIndexJs.Vec3;
      assert = _coreIndexJs.assert;
      RecyclePool = _coreIndexJs.RecyclePool;
    }, function (_coreGeometryIndexJs) {
      intersect = _coreGeometryIndexJs.intersect;
      AABB = _coreGeometryIndexJs.AABB;
    }, function (_gfxIndexJs) {
      BufferInfo = _gfxIndexJs.BufferInfo;
      BufferViewInfo = _gfxIndexJs.BufferViewInfo;
      MemoryUsageBit = _gfxIndexJs.MemoryUsageBit;
      BufferUsageBit = _gfxIndexJs.BufferUsageBit;
    }, function (_renderSceneIndexJs) {
      BatchingSchemes = _renderSceneIndexJs.BatchingSchemes;
    }, function (_renderSceneSceneIndexJs) {
      CSMLevel = _renderSceneSceneIndexJs.CSMLevel;
      LightType = _renderSceneSceneIndexJs.LightType;
      ProbeType = _renderSceneSceneIndexJs.ProbeType;
      SKYBOX_FLAG = _renderSceneSceneIndexJs.SKYBOX_FLAG;
      ShadowType = _renderSceneSceneIndexJs.ShadowType;
    }, function (_sceneGraphIndexJs) {
      Layers = _sceneGraphIndexJs.Layers;
    }, function (_defineJs) {
      hashCombineStr = _defineJs.hashCombineStr;
      getSubpassOrPassID = _defineJs.getSubpassOrPassID;
      bool = _defineJs.bool;
      AlignUp = _defineJs.AlignUp;
      SetLightUBO = _defineJs.SetLightUBO;
    }, function (_renderGraphJs) {
      CullingFlags = _renderGraphJs.CullingFlags;
      RenderGraphValue = _renderGraphJs.RenderGraphValue;
    }, function (_typesJs) {
      SceneFlags = _typesJs.SceneFlags;
    }, function (_webPipelineTypesJs) {
      RenderQueue = _webPipelineTypesJs.RenderQueue;
      RenderQueueDesc = _webPipelineTypesJs.RenderQueueDesc;
      instancePool = _webPipelineTypesJs.instancePool;
    }, function (_utilsJs) {
      ObjectPool = _utilsJs.ObjectPool;
    }, function (_layoutGraphUtilsJs) {
      getUniformBlockSize = _layoutGraphUtilsJs.getUniformBlockSize;
    }],
    execute: function () {
      vec3Pool = new ObjectPool(() => new Vec3());
      CullingPools = class CullingPools {
        constructor() {
          this.frustumCullingKeyRecycle = new RecyclePool(() => new FrustumCullingKey(), 8);
          this.frustumCullingsRecycle = new RecyclePool(() => new FrustumCulling(), 8);
          this.lightBoundsCullingRecycle = new RecyclePool(() => new LightBoundsCulling(), 8);
          this.lightBoundsCullingResultRecycle = new RecyclePool(() => new LightBoundsCullingResult(), 8);
          this.lightBoundsCullingKeyRecycle = new RecyclePool(() => new LightBoundsCullingKey(), 8);
          this.renderQueueRecycle = new RecyclePool(() => new RenderQueue(), 8);
          this.renderQueueDescRecycle = new RecyclePool(() => new RenderQueueDesc(), 8);
        }
      };
      REFLECTION_PROBE_DEFAULT_MASK = Layers.makeMaskExclude([Layers.BitMask.UI_2D, Layers.BitMask.UI_3D, Layers.BitMask.GIZMOS, Layers.BitMask.EDITOR, Layers.BitMask.SCENE_GIZMO, Layers.BitMask.PROFILER]);
      FrustumCullingKey = class FrustumCullingKey {
        constructor(sceneData = null, castShadows = false) {
          this.sceneData = null;
          this.castShadows = false;
          this.sceneData = sceneData;
          this.castShadows = castShadows;
        }
        update(sceneData, castShadows) {
          this.sceneData = sceneData;
          this.castShadows = castShadows;
        }
      };
      LightBoundsCullingKey = class LightBoundsCullingKey {
        constructor(sceneData = null, frustumCullingID = -1) {
          this.sceneData = null;
          this.frustumCullingID = -1;
          this.sceneData = sceneData;
          this.frustumCullingID = frustumCullingID;
        }
        update(sceneData = null, frustumCullingID = -1) {
          this.sceneData = sceneData;
          this.frustumCullingID = frustumCullingID;
        }
      };
      LightBoundsCulling = class LightBoundsCulling {
        constructor() {
          this.resultKeyIndex = new Map();
          this.resultIndex = new Map();
        }
        update() {
          this.resultIndex.clear();
          this.resultKeyIndex.clear();
        }
      };
      LightBoundsCullingResult = class LightBoundsCullingResult {
        constructor() {
          this.instances = new Array();
          this.lightByteOffset = 0xFFFFFFFF;
        }
        update() {
          this.instances.length = 0;
          this.lightByteOffset = 0xFFFFFFFF;
          return this;
        }
      };
      FrustumCulling = class FrustumCulling {
        constructor() {
          // key: hash val
          this.resultIndex = new Map();
          this.resultKeyIndex = new Map();
        }
        update() {
          this.resultIndex.clear();
          this.resultKeyIndex.clear();
        }
      };
      transWorldBounds = new AABB();
      rangedDirLightBoundingBox = new AABB(0, 0, 0, 0.5, 0.5, 0.5);
      lightAABB = new AABB();
      _export("SceneCulling", SceneCulling = class SceneCulling {
        constructor() {
          this.frustumCullings = new Map();
          this.frustumCullingResults = new Array();
          this.lightBoundsCullings = new Map();
          this.lightBoundsCullingResults = new Array();
          this.renderQueues = new Array();
          this.renderQueueIndex = new Map();
          this.cullingPools = new CullingPools();
          // source id
          this.numFrustumCulling = 0;
          this.numLightBoundsCulling = 0;
          // target id
          this.numRenderQueues = 0;
          this.layoutGraph = void 0;
          this.renderGraph = void 0;
          this.enableLightCulling = true;
        }
        resetPool() {
          const cullingPools = this.cullingPools;
          cullingPools.frustumCullingKeyRecycle.reset();
          cullingPools.frustumCullingsRecycle.reset();
          cullingPools.lightBoundsCullingRecycle.reset();
          cullingPools.lightBoundsCullingResultRecycle.reset();
          cullingPools.lightBoundsCullingKeyRecycle.reset();
          cullingPools.renderQueueRecycle.reset();
          cullingPools.renderQueueDescRecycle.reset();
          instancePool.reset();
        }
        clear() {
          this.resetPool();
          this.frustumCullings.clear();
          this.frustumCullingResults.length = 0;
          this.lightBoundsCullings.clear();
          this.lightBoundsCullingResults.length = 0;
          this.renderQueues.length = 0;
          this.renderQueueIndex.clear();
          this.numLightBoundsCulling = 0;
          this.numFrustumCulling = 0;
          this.numRenderQueues = 0;
        }
        buildRenderQueues(rg, lg, pplSceneData) {
          this.layoutGraph = lg;
          this.renderGraph = rg;
          pSceneData = pplSceneData;
          this.collectCullingQueries(rg, lg);
          this.batchFrustumCulling(pplSceneData);
          this.batchLightBoundsCulling();
          this.fillRenderQueues(rg, pplSceneData);
        }
        getOrCreateLightBoundsCulling(sceneData, frustumCullingID) {
          var _sceneData$shadingLig;
          if (!(sceneData.cullingFlags & CullingFlags.LIGHT_BOUNDS)) {
            return 0xFFFFFFFF; // Return an empty ID.
          }

          if (((_sceneData$shadingLig = sceneData.shadingLight) === null || _sceneData$shadingLig === void 0 ? void 0 : _sceneData$shadingLig.type) === LightType.DIRECTIONAL) {
            return 0xFFFFFFFF;
          }
          if (!this.enableLightCulling) {
            return 0xFFFFFFFF; // Return an empty ID.
          }

          assert(!!sceneData.shadingLight, 'shadingLight is expected but not found.');
          const scene = sceneData.scene;
          assert(!!scene, 'scene is expected but not found.');
          let queries = this.lightBoundsCullings.get(scene);
          if (!queries) {
            const cullingQuery = this.cullingPools.lightBoundsCullingRecycle.add();
            cullingQuery.update();
            this.lightBoundsCullings.set(scene, cullingQuery);
            queries = this.lightBoundsCullings.get(scene);
          }
          const key = computeCullingKey(sceneData, false, frustumCullingID);
          const cullNum = queries.resultIndex.get(key);
          if (cullNum !== undefined) {
            return cullNum;
          }
          const lightBoundsCullingID = this.numLightBoundsCulling++;
          if (this.numLightBoundsCulling > this.lightBoundsCullingResults.length) {
            assert(this.numLightBoundsCulling === this.lightBoundsCullingResults.length + 1);
            this.lightBoundsCullingResults.push(this.cullingPools.lightBoundsCullingResultRecycle.add().update());
          }
          queries.resultIndex.set(key, lightBoundsCullingID);
          const cullingKey = this.cullingPools.lightBoundsCullingKeyRecycle.add();
          cullingKey.update(sceneData, frustumCullingID);
          queries.resultKeyIndex.set(key, cullingKey);
          return lightBoundsCullingID;
        }
        getOrCreateFrustumCulling(sceneId) {
          const sceneData = this.renderGraph.getScene(sceneId);
          const scene = sceneData.scene;
          let queries = this.frustumCullings.get(scene);
          if (!queries) {
            const cullingQuery = this.cullingPools.frustumCullingsRecycle.add();
            cullingQuery.update();
            this.frustumCullings.set(scene, cullingQuery);
            queries = this.frustumCullings.get(scene);
          }
          const castShadow = bool(sceneData.flags & SceneFlags.SHADOW_CASTER);
          const key = computeCullingKey(sceneData, castShadow);
          const cullNum = queries.resultIndex.get(key);
          if (cullNum !== undefined) {
            return cullNum;
          }
          const frustumCulledResultID = this.numFrustumCulling++;
          if (this.numFrustumCulling > this.frustumCullingResults.length) {
            assert(this.numFrustumCulling === this.frustumCullingResults.length + 1);
            this.frustumCullingResults.push([]);
          }
          queries.resultIndex.set(key, frustumCulledResultID);
          const cullingKey = this.cullingPools.frustumCullingKeyRecycle.add();
          cullingKey.update(sceneData, castShadow);
          queries.resultKeyIndex.set(key, cullingKey);
          return frustumCulledResultID;
        }
        createRenderQueue(sceneFlags, subpassOrPassLayoutID) {
          const targetID = this.numRenderQueues++;
          if (this.numRenderQueues > this.renderQueues.length) {
            assert(this.numRenderQueues === this.renderQueues.length + 1);
            const renderQueue = this.cullingPools.renderQueueRecycle.add();
            renderQueue.update();
            this.renderQueues.push(renderQueue);
          }
          assert(targetID < this.renderQueues.length);
          const rq = this.renderQueues[targetID];
          assert(rq.empty());
          assert(rq.sceneFlags === SceneFlags.NONE);
          assert(rq.subpassOrPassLayoutID === 0xFFFFFFFF);
          rq.sceneFlags = sceneFlags;
          rq.subpassOrPassLayoutID = subpassOrPassLayoutID;
          return targetID;
        }
        collectCullingQueries(rg, lg) {
          for (const v of rg.vertices()) {
            if (!rg.holds(RenderGraphValue.Scene, v) || !rg.getValid(v)) {
              continue;
            }
            const sceneData = rg.getScene(v);
            if (!sceneData.scene) {
              assert(!!sceneData.scene);
              continue;
            }
            const frustumCulledResultID = this.getOrCreateFrustumCulling(v);
            const lightBoundsCullingID = this.getOrCreateLightBoundsCulling(sceneData, frustumCulledResultID);
            const layoutID = getSubpassOrPassID(v, rg, lg);
            const targetID = this.createRenderQueue(sceneData.flags, layoutID);
            const lightType = sceneData.light.light ? sceneData.light.light.type : LightType.UNKNOWN;
            const renderQueueDesc = this.cullingPools.renderQueueDescRecycle.add();
            renderQueueDesc.update(frustumCulledResultID, lightBoundsCullingID, targetID, lightType);
            // add render queue to query source
            this.renderQueueIndex.set(v, renderQueueDesc);
          }
        }
        uploadInstancing(cmdBuffer) {
          for (let queueID = 0; queueID !== this.numRenderQueues; ++queueID) {
            assert(this.numRenderQueues <= this.renderQueues.length);
            const queue = this.renderQueues[queueID];
            queue.opaqueInstancingQueue.uploadBuffers(cmdBuffer);
            queue.transparentInstancingQueue.uploadBuffers(cmdBuffer);
          }
        }
        _getPhaseIdFromScene(scene) {
          const rg = this.renderGraph;
          const renderQueueId = rg.getParent(scene);
          assert(rg.holds(RenderGraphValue.Queue, renderQueueId));
          const graphRenderQueue = rg.getQueue(renderQueueId);
          return graphRenderQueue.phaseID;
        }
        getBuiltinShadowFrustum(pplSceneData, camera, mainLight, level) {
          const csmLayers = pplSceneData.csmLayers;
          const csmLevel = mainLight.csmLevel;
          let frustum;
          const shadows = pplSceneData.shadows;
          if (shadows.type === ShadowType.Planar) {
            return camera.frustum;
          }
          if (shadows.enabled && shadows.type === ShadowType.ShadowMap && mainLight && mainLight.node) {
            // pplSceneData.updateShadowUBORange(UBOShadow.SHADOW_COLOR_OFFSET, shadows.shadowColor);
            csmLayers.update(pplSceneData, camera);
          }
          if (mainLight.shadowFixedArea || csmLevel === CSMLevel.LEVEL_1) {
            return csmLayers.specialLayer.validFrustum;
          }
          return csmLayers.layers[level].validFrustum;
        }
        batchFrustumCulling(pplSceneData) {
          for (const [scene, queries] of this.frustumCullings) {
            assert(!!scene);
            for (const [key, frustomCulledResultID] of queries.resultIndex) {
              const cullingKey = queries.resultKeyIndex.get(key);
              const sceneData = cullingKey.sceneData;
              assert(!!sceneData.camera);
              assert(sceneData.camera.scene === scene);
              const light = sceneData.light.light;
              const level = sceneData.light.level;
              const castShadow = cullingKey.castShadows;
              const probe = sceneData.light.probe;
              const camera = probe ? probe.camera : sceneData.camera;
              assert(frustomCulledResultID < this.frustumCullingResults.length);
              const models = this.frustumCullingResults[frustomCulledResultID];
              if (probe) {
                sceneCulling(scene, camera, camera.frustum, castShadow, probe, models);
                continue;
              }
              if (light) {
                switch (light.type) {
                  case LightType.SPOT:
                    sceneCulling(scene, camera, light.frustum, castShadow, null, models);
                    break;
                  case LightType.DIRECTIONAL:
                    {
                      const frustum = this.getBuiltinShadowFrustum(pplSceneData, camera, light, level);
                      sceneCulling(scene, camera, frustum, castShadow, null, models);
                    }
                    break;
                  default:
                }
              } else {
                sceneCulling(scene, camera, camera.frustum, castShadow, null, models);
              }
            }
          }
        }
        executeSphereLightCulling(light, frustumCullingResult, lightBoundsCullingResult) {
          const lightAABB = light.aabb;
          for (const model of frustumCullingResult) {
            assert(!!model);
            const modelBounds = model.worldBounds;
            if (!modelBounds || intersect.aabbWithAABB(modelBounds, lightAABB)) {
              lightBoundsCullingResult.push(model);
            }
          }
        }
        executeSpotLightCulling(light, frustumCullingResult, lightBoundsCullingResult) {
          const lightAABB = light.aabb;
          const lightFrustum = light.frustum;
          for (const model of frustumCullingResult) {
            assert(!!model);
            const modelBounds = model.worldBounds;
            if (!modelBounds || intersect.aabbWithAABB(lightAABB, modelBounds) && intersect.aabbFrustum(modelBounds, lightFrustum)) {
              lightBoundsCullingResult.push(model);
            }
          }
        }
        executePointLightCulling(light, frustumCullingResult, lightBoundsCullingResult) {
          const lightAABB = light.aabb;
          for (const model of frustumCullingResult) {
            assert(!!model);
            const modelBounds = model.worldBounds;
            if (!modelBounds || intersect.aabbWithAABB(lightAABB, modelBounds)) {
              lightBoundsCullingResult.push(model);
            }
          }
        }
        executeRangedDirectionalLightCulling(light, frustumCullingResult, lightBoundsCullingResult) {
          rangedDirLightBoundingBox.transform(light.node.worldMatrix, null, null, null, lightAABB);
          for (const model of frustumCullingResult) {
            assert(!!model);
            const modelBounds = model.worldBounds;
            if (!modelBounds || intersect.aabbWithAABB(lightAABB, modelBounds)) {
              lightBoundsCullingResult.push(model);
            }
          }
        }
        batchLightBoundsCulling() {
          for (const [scene, queries] of this.lightBoundsCullings) {
            assert(!!scene);
            for (const [key, cullingID] of queries.resultIndex) {
              const cullingKey = queries.resultKeyIndex.get(key);
              const sceneData = cullingKey.sceneData;
              const frustumCullingID = cullingKey.frustumCullingID;
              const frustumCullingResult = this.frustumCullingResults[frustumCullingID];
              assert(!!sceneData.camera);
              assert(!!sceneData.shadingLight);
              assert(sceneData.camera.scene === scene);
              assert(cullingID < this.frustumCullingResults.length);
              const lightBoundsCullingResult = this.lightBoundsCullingResults[cullingID];
              assert(lightBoundsCullingResult.instances.length === 0);
              switch (sceneData.shadingLight.type) {
                case LightType.SPHERE:
                  {
                    const light = sceneData.shadingLight;
                    this.executeSphereLightCulling(light, frustumCullingResult, lightBoundsCullingResult.instances);
                  }
                  break;
                case LightType.SPOT:
                  {
                    const light = sceneData.shadingLight;
                    this.executeSpotLightCulling(light, frustumCullingResult, lightBoundsCullingResult.instances);
                  }
                  break;
                case LightType.POINT:
                  {
                    const light = sceneData.shadingLight;
                    this.executePointLightCulling(light, frustumCullingResult, lightBoundsCullingResult.instances);
                  }
                  break;
                case LightType.RANGED_DIRECTIONAL:
                  {
                    const light = sceneData.shadingLight;
                    this.executeRangedDirectionalLightCulling(light, frustumCullingResult, lightBoundsCullingResult.instances);
                  }
                  break;
                case LightType.DIRECTIONAL:
                case LightType.UNKNOWN:
                default:
              }
            }
          }
        }
        fillRenderQueues(rg, pplSceneData) {
          for (const [sceneId, desc] of this.renderQueueIndex) {
            assert(rg.holds(RenderGraphValue.Scene, sceneId));
            const frustomCulledResultID = desc.frustumCulledResultID;
            const lightBoundsCullingID = desc.lightBoundsCulledResultID;
            const targetId = desc.renderQueueTarget;
            const sceneData = rg.getScene(sceneId);
            const isDrawBlend = bool(sceneData.flags & SceneFlags.TRANSPARENT_OBJECT);
            const isDrawOpaqueOrMask = bool(sceneData.flags & (SceneFlags.OPAQUE_OBJECT | SceneFlags.CUTOUT_OBJECT));
            const isDrawShadowCaster = bool(sceneData.flags & SceneFlags.SHADOW_CASTER);
            const isDrawProbe = bool(sceneData.flags & SceneFlags.REFLECTION_PROBE);
            if (!isDrawShadowCaster && !isDrawBlend && !isDrawOpaqueOrMask && !isDrawProbe) {
              continue;
            }
            // render queue info
            const renderQueueId = rg.getParent(sceneId);
            assert(rg.holds(RenderGraphValue.Queue, renderQueueId));
            const graphRenderQueue = rg.getQueue(renderQueueId);
            const phaseLayoutId = graphRenderQueue.phaseID;
            assert(phaseLayoutId !== this.layoutGraph.nullVertex());

            // culling source
            assert(frustomCulledResultID < this.frustumCullingResults.length);
            const sourceModels = (() => {
              // is culled by light bounds
              if (lightBoundsCullingID !== 0xFFFFFFFF) {
                if (lightBoundsCullingID < this.lightBoundsCullingResults.length) {
                  return this.lightBoundsCullingResults[lightBoundsCullingID].instances;
                } else {
                  return [];
                }
              }
              // not culled by light bounds
              if (frustomCulledResultID < this.frustumCullingResults.length) {
                return this.frustumCullingResults[frustomCulledResultID];
              } else {
                return [];
              }
            })();

            // queue target
            assert(targetId < this.renderQueues.length);
            const renderQueue = this.renderQueues[targetId];
            assert(renderQueue.empty());

            // skybox
            const camera = sceneData.camera;
            assert(!!camera);
            // fill render queue
            for (const model of sourceModels) {
              addRenderObject(phaseLayoutId, isDrawOpaqueOrMask, isDrawBlend, isDrawProbe, camera, model, renderQueue);
            }
            // post-processing
            renderQueue.sort();
          }
        }
      });
      _export("LightResource", LightResource = class LightResource {
        constructor() {
          this.cpuBuffer = void 0;
          this.programLibrary = void 0;
          this.device = null;
          this.elementSize = 0;
          this.maxNumLights = 16;
          this.binding = 0xFFFFFFFF;
          this.resized = false;
          this.lightBuffer = void 0;
          this.firstLightBufferView = null;
          this.lights = [];
          this.lightIndex = new Map();
        }
        init(programLib, deviceIn, maxNumLights) {
          assert(!this.device);
          this.device = deviceIn;
          this.programLibrary = programLib;
          const instanceLayout = this.programLibrary.localLayoutData;
          const attrID = programLib.layoutGraph.attributeIndex.get('CCForwardLight');
          const uniformBlock = instanceLayout.uniformBlocks.get(attrID);
          this.elementSize = AlignUp(getUniformBlockSize(uniformBlock.members), this.device.capabilities.uboOffsetAlignment);
          this.maxNumLights = maxNumLights;
          this.binding = programLib.localLayoutData.bindingMap.get(attrID);
          const bufferSize = this.elementSize * this.maxNumLights;
          this.lightBuffer = this.device.createBuffer(new BufferInfo(BufferUsageBit.UNIFORM | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.HOST | MemoryUsageBit.DEVICE, bufferSize, this.elementSize));
          this.firstLightBufferView = this.device.createBuffer(new BufferViewInfo(this.lightBuffer, 0, this.elementSize));
          this.cpuBuffer = new Float32Array(bufferSize / Float32Array.BYTES_PER_ELEMENT);
          assert(!!(this.elementSize && this.maxNumLights));
          this.resized = true;
        }
        buildLights(sceneCulling, bHDR, shadowInfo) {
          // Build light buffer
          for (const [scene, lightBoundsCullings] of sceneCulling.lightBoundsCullings) {
            for (const [key, lightBoundsCullingID] of lightBoundsCullings.resultIndex) {
              const lightBoundsCulling = lightBoundsCullings.resultKeyIndex.get(key);
              const sceneData = lightBoundsCulling.sceneData;
              let exposure = 1.0;
              if (sceneData.camera) {
                exposure = sceneData.camera.exposure;
              } else if (sceneData.light.probe && sceneData.light.probe.camera) {
                exposure = sceneData.light.probe.camera.exposure;
              } else {
                throw new Error('Unexpected situation: No camera or probe found.');
              }
              const lightByteOffset = this.addLight(sceneData.shadingLight, bHDR, exposure, shadowInfo);

              // Save light byte offset for each light bounds culling
              const result = sceneCulling.lightBoundsCullingResults[lightBoundsCullingID];
              result.lightByteOffset = lightByteOffset;
            }
          }

          // Assign light byte offset to each queue
          for (const [sceneID, desc] of sceneCulling.renderQueueIndex) {
            if (desc.lightBoundsCulledResultID === 0xFFFFFFFF) {
              continue;
            }
            const lightByteOffset = sceneCulling.lightBoundsCullingResults[desc.lightBoundsCulledResultID].lightByteOffset;
            sceneCulling.renderQueues[desc.renderQueueTarget].lightByteOffset = lightByteOffset;
          }
        }
        tryUpdateRenderSceneLocalDescriptorSet(sceneCulling) {
          if (!sceneCulling.lightBoundsCullings.size) {
            return;
          }
          for (const [scene, culling] of sceneCulling.frustumCullings) {
            for (const model of scene.models) {
              if (!model) {
                throw new Error('Unexpected null model.');
              }
              for (const submodel of model.subModels) {
                const set = submodel.descriptorSet;
                const prev = set.getBuffer(this.binding);
                if (this.resized || prev !== this.firstLightBufferView) {
                  set.bindBuffer(this.binding, this.firstLightBufferView);
                  set.update();
                }
              }
            }
          }
          this.resized = false;
        }
        clear() {
          this.cpuBuffer.fill(0);
          this.lights.length = 0;
          this.lightIndex.clear();
        }
        addLight(light, bHDR, exposure, shadowInfo) {
          // Already added
          const existingLightID = this.lightIndex.get(light);
          if (existingLightID !== undefined) {
            return existingLightID;
          }

          // Resize buffer if needed
          if (this.lights.length === this.maxNumLights) {
            this.resized = true;
            this.maxNumLights *= 2;
            const bufferSize = this.elementSize * this.maxNumLights;
            this.lightBuffer.resize(bufferSize);
            this.firstLightBufferView = this.device.createBuffer(new BufferViewInfo(this.lightBuffer, 0, this.elementSize));
            const prevCpuBuffer = this.cpuBuffer;
            this.cpuBuffer = new Float32Array(bufferSize / Float32Array.BYTES_PER_ELEMENT);
            this.cpuBuffer.set(prevCpuBuffer);
          }
          assert(this.lights.length < this.maxNumLights);

          // Add light
          const lightID = this.lights.length;
          this.lights[lightID] = light;
          this.lightIndex.set(light, lightID);

          // Update buffer
          const offset = this.elementSize / Float32Array.BYTES_PER_ELEMENT * lightID;
          SetLightUBO(light, bHDR, exposure, shadowInfo, this.cpuBuffer, offset, this.elementSize);
          return lightID * this.elementSize;
        }
        buildLightBuffer(cmdBuffer) {
          cmdBuffer.updateBuffer(this.lightBuffer, this.cpuBuffer, this.lights.length * this.elementSize / Float32Array.BYTES_PER_ELEMENT);
        }
      });
    }
  };
});
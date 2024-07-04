System.register("q-bundled:///fs/cocos/rendering/custom/scene-culling.js", ["../../core/index.js", "../../core/geometry/index.js", "../../gfx/index.js", "../../render-scene/index.js", "../../render-scene/scene/index.js", "../../scene-graph/index.js", "./define.js", "./render-graph.js", "./types.js", "./web-pipeline-types.js", "./utils.js", "./layout-graph-utils.js"], function (_export, _context) {
  "use strict";

  var Vec3, assert, RecyclePool, intersect, AABB, BufferInfo, BufferViewInfo, MemoryUsageBit, BufferUsageBit, BatchingSchemes, CSMLevel, LightType, ProbeType, SKYBOX_FLAG, ShadowType, Layers, hashCombineStr, getSubpassOrPassID, bool, AlignUp, SetLightUBO, CullingFlags, RenderGraphValue, SceneFlags, RenderQueue, RenderQueueDesc, instancePool, ObjectPool, getUniformBlockSize, vec3Pool, CullingPools, REFLECTION_PROBE_DEFAULT_MASK, FrustumCullingKey, LightBoundsCullingKey, LightBoundsCulling, LightBoundsCullingResult, pSceneData, FrustumCulling, transWorldBounds, rangedDirLightBoundingBox, lightAABB, SceneCulling, LightResource;
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function computeCullingKey(sceneData, castShadows, refId) {
    if (refId === void 0) {
      refId = -1;
    }
    var hashCode = 0;
    var camera = sceneData.camera;
    var light = sceneData.light.light;
    var lightLevel = sceneData.light.level;
    var culledByLight = sceneData.light.culledByLight;
    var reflectProbe = sceneData.light.probe;
    var shadeLight = sceneData.shadingLight;
    if (camera) {
      // camera
      hashCode = hashCombineStr("u" + camera.node.uuid, hashCode);
      hashCode = hashCombineStr("p" + camera.priority, hashCode);
      hashCode = hashCombineStr("v" + camera.visibility, hashCode);
      hashCode = hashCombineStr("f" + camera.clearFlag, hashCode);
      hashCode = hashCombineStr("cx" + camera.clearColor.x + "cy" + camera.clearColor.y + "cz" + camera.clearColor.z + "cw" + camera.clearColor.w, hashCode);
      hashCode = hashCombineStr("cd" + camera.clearDepth + "cs" + camera.clearStencil, hashCode);
      hashCode = hashCombineStr("pj" + camera.projectionType, hashCode);
      hashCode = hashCombineStr("fa" + camera.fovAxis, hashCode);
      hashCode = hashCombineStr("fov" + camera.fov, hashCode);
      hashCode = hashCombineStr("n" + camera.nearClip, hashCode);
      hashCode = hashCombineStr("far" + camera.farClip, hashCode);
      hashCode = hashCombineStr("apt" + camera.aperture, hashCode);
      hashCode = hashCombineStr("sht" + camera.shutter, hashCode);
      hashCode = hashCombineStr("iso" + camera.iso, hashCode);
      hashCode = hashCombineStr("rx" + camera.viewport.x + "ry" + camera.viewport.y + "rw" + camera.viewport.width + "rh" + camera.viewport.height, hashCode);
      hashCode = hashCombineStr("upp" + camera.usePostProcess, hashCode);
    }
    // light
    if (light) {
      hashCode = hashCombineStr("u" + light.node.uuid, hashCode);
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
      hashCode = hashCombineStr("shadeLight" + shadeLight.node.uuid, hashCode);
    }
    hashCode = hashCombineStr("culledByLight" + culledByLight, hashCode);
    hashCode = hashCombineStr("cast" + castShadows, hashCode);
    hashCode = hashCombineStr("level" + lightLevel, hashCode);
    if (reflectProbe) {
      hashCode = hashCombineStr("probe" + reflectProbe.getProbeId(), hashCode);
    }
    hashCode = hashCombineStr("refId" + refId, hashCode);
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
    var modelWorldBounds = model.worldBounds;
    if (!modelWorldBounds) {
      return false;
    }
    transWorldBounds.copy(modelWorldBounds);
    var shadows = pSceneData.shadows;
    if (shadows.type === ShadowType.Planar && castShadow) {
      AABB.transform(transWorldBounds, modelWorldBounds, shadows.matLight);
    }
    return !intersect.aabbFrustum(transWorldBounds, frustum);
  }
  function isIntersectAABB(lAABB, rAABB) {
    return !intersect.aabbWithAABB(lAABB, rAABB);
  }
  function sceneCulling(scene, camera, camOrLightFrustum, castShadow, probe, models) {
    var skybox = pSceneData.skybox;
    var skyboxModel = skybox.model;
    var visibility = camera.visibility;
    var camSkyboxFlag = camera.clearFlag & SKYBOX_FLAG;
    if (!castShadow && skybox && skybox.enabled && skyboxModel && camSkyboxFlag) {
      models.push(skyboxModel);
    }
    for (var _iterator = _createForOfIteratorHelperLoose(scene.models), _step; !(_step = _iterator()).done;) {
      var model = _step.value;
      assert(!!model);
      if (!model.enabled || !model.node || castShadow && !model.castShadow) {
        continue;
      }
      if (scene && scene.isCulledByLod(camera, model)) {
        continue;
      }
      if (!probe || probe && probe.probeType === ProbeType.CUBE) {
        if (isNodeVisible(model.node, visibility) || isModelVisible(model, visibility)) {
          var wBounds = model.worldBounds;
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
    var bBlend = false;
    for (var _iterator2 = _createForOfIteratorHelperLoose(pass.blendState.targets), _step2; !(_step2 = _iterator2()).done;) {
      var target = _step2.value;
      if (target.blend) {
        bBlend = true;
      }
    }
    return bBlend;
  }
  function computeSortingDepth(camera, model) {
    var depth = 0;
    if (model.node) {
      var node = model.transform;
      var tempVec3 = vec3Pool.acquire();
      var position = Vec3.subtract(tempVec3, node.worldPosition, camera.position);
      depth = position.dot(camera.forward);
      vec3Pool.release(tempVec3);
    }
    return depth;
  }
  function addRenderObject(phaseLayoutId, isDrawOpaqueOrMask, isDrawBlend, isDrawProbe, camera, model, queue) {
    var probeQueue = queue.probeQueue;
    if (isDrawProbe) {
      probeQueue.applyMacro(model, phaseLayoutId);
    }
    var subModels = model.subModels;
    var subModelCount = subModels.length;
    var skyboxModel = pSceneData.skybox.model;
    for (var subModelIdx = 0; subModelIdx < subModelCount; ++subModelIdx) {
      var subModel = subModels[subModelIdx];
      var passes = subModel.passes;
      var passCount = passes.length;
      var probePhase = probeQueue.probeMap.includes(subModel);
      if (probePhase) phaseLayoutId = probeQueue.defaultId;
      for (var passIdx = 0; passIdx < passCount; ++passIdx) {
        if (model === skyboxModel && !subModelIdx && !passIdx && isDrawOpaqueOrMask) {
          queue.opaqueQueue.add(model, computeSortingDepth(camera, model), subModelIdx, passIdx);
          continue;
        }
        var pass = passes[passIdx];
        // check phase
        var phaseAllowed = phaseLayoutId === pass.phaseID;
        if (!phaseAllowed) {
          continue;
        }
        // check scene flags
        var is_blend = isBlend(pass);
        var isOpaqueOrMask = !is_blend;
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
          var depth = computeSortingDepth(camera, model);
          if (is_blend) {
            queue.transparentQueue.add(model, depth, subModelIdx, passIdx);
          } else {
            queue.opaqueQueue.add(model, depth, subModelIdx, passIdx);
          }
        }
      }
    }
  }
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
      vec3Pool = new ObjectPool(function () {
        return new Vec3();
      });
      CullingPools = function CullingPools() {
        this.frustumCullingKeyRecycle = new RecyclePool(function () {
          return new FrustumCullingKey();
        }, 8);
        this.frustumCullingsRecycle = new RecyclePool(function () {
          return new FrustumCulling();
        }, 8);
        this.lightBoundsCullingRecycle = new RecyclePool(function () {
          return new LightBoundsCulling();
        }, 8);
        this.lightBoundsCullingResultRecycle = new RecyclePool(function () {
          return new LightBoundsCullingResult();
        }, 8);
        this.lightBoundsCullingKeyRecycle = new RecyclePool(function () {
          return new LightBoundsCullingKey();
        }, 8);
        this.renderQueueRecycle = new RecyclePool(function () {
          return new RenderQueue();
        }, 8);
        this.renderQueueDescRecycle = new RecyclePool(function () {
          return new RenderQueueDesc();
        }, 8);
      };
      REFLECTION_PROBE_DEFAULT_MASK = Layers.makeMaskExclude([Layers.BitMask.UI_2D, Layers.BitMask.UI_3D, Layers.BitMask.GIZMOS, Layers.BitMask.EDITOR, Layers.BitMask.SCENE_GIZMO, Layers.BitMask.PROFILER]);
      FrustumCullingKey = /*#__PURE__*/function () {
        function FrustumCullingKey(sceneData, castShadows) {
          if (sceneData === void 0) {
            sceneData = null;
          }
          if (castShadows === void 0) {
            castShadows = false;
          }
          this.sceneData = null;
          this.castShadows = false;
          this.sceneData = sceneData;
          this.castShadows = castShadows;
        }
        var _proto = FrustumCullingKey.prototype;
        _proto.update = function update(sceneData, castShadows) {
          this.sceneData = sceneData;
          this.castShadows = castShadows;
        };
        return FrustumCullingKey;
      }();
      LightBoundsCullingKey = /*#__PURE__*/function () {
        function LightBoundsCullingKey(sceneData, frustumCullingID) {
          if (sceneData === void 0) {
            sceneData = null;
          }
          if (frustumCullingID === void 0) {
            frustumCullingID = -1;
          }
          this.sceneData = null;
          this.frustumCullingID = -1;
          this.sceneData = sceneData;
          this.frustumCullingID = frustumCullingID;
        }
        var _proto2 = LightBoundsCullingKey.prototype;
        _proto2.update = function update(sceneData, frustumCullingID) {
          if (sceneData === void 0) {
            sceneData = null;
          }
          if (frustumCullingID === void 0) {
            frustumCullingID = -1;
          }
          this.sceneData = sceneData;
          this.frustumCullingID = frustumCullingID;
        };
        return LightBoundsCullingKey;
      }();
      LightBoundsCulling = /*#__PURE__*/function () {
        function LightBoundsCulling() {
          this.resultKeyIndex = new Map();
          this.resultIndex = new Map();
        }
        var _proto3 = LightBoundsCulling.prototype;
        _proto3.update = function update() {
          this.resultIndex.clear();
          this.resultKeyIndex.clear();
        };
        return LightBoundsCulling;
      }();
      LightBoundsCullingResult = /*#__PURE__*/function () {
        function LightBoundsCullingResult() {
          this.instances = new Array();
          this.lightByteOffset = 0xFFFFFFFF;
        }
        var _proto4 = LightBoundsCullingResult.prototype;
        _proto4.update = function update() {
          this.instances.length = 0;
          this.lightByteOffset = 0xFFFFFFFF;
          return this;
        };
        return LightBoundsCullingResult;
      }();
      FrustumCulling = /*#__PURE__*/function () {
        function FrustumCulling() {
          // key: hash val
          this.resultIndex = new Map();
          this.resultKeyIndex = new Map();
        }
        var _proto5 = FrustumCulling.prototype;
        _proto5.update = function update() {
          this.resultIndex.clear();
          this.resultKeyIndex.clear();
        };
        return FrustumCulling;
      }();
      transWorldBounds = new AABB();
      rangedDirLightBoundingBox = new AABB(0, 0, 0, 0.5, 0.5, 0.5);
      lightAABB = new AABB();
      _export("SceneCulling", SceneCulling = /*#__PURE__*/function () {
        function SceneCulling() {
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
        var _proto6 = SceneCulling.prototype;
        _proto6.resetPool = function resetPool() {
          var cullingPools = this.cullingPools;
          cullingPools.frustumCullingKeyRecycle.reset();
          cullingPools.frustumCullingsRecycle.reset();
          cullingPools.lightBoundsCullingRecycle.reset();
          cullingPools.lightBoundsCullingResultRecycle.reset();
          cullingPools.lightBoundsCullingKeyRecycle.reset();
          cullingPools.renderQueueRecycle.reset();
          cullingPools.renderQueueDescRecycle.reset();
          instancePool.reset();
        };
        _proto6.clear = function clear() {
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
        };
        _proto6.buildRenderQueues = function buildRenderQueues(rg, lg, pplSceneData) {
          this.layoutGraph = lg;
          this.renderGraph = rg;
          pSceneData = pplSceneData;
          this.collectCullingQueries(rg, lg);
          this.batchFrustumCulling(pplSceneData);
          this.batchLightBoundsCulling();
          this.fillRenderQueues(rg, pplSceneData);
        };
        _proto6.getOrCreateLightBoundsCulling = function getOrCreateLightBoundsCulling(sceneData, frustumCullingID) {
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
          var scene = sceneData.scene;
          assert(!!scene, 'scene is expected but not found.');
          var queries = this.lightBoundsCullings.get(scene);
          if (!queries) {
            var cullingQuery = this.cullingPools.lightBoundsCullingRecycle.add();
            cullingQuery.update();
            this.lightBoundsCullings.set(scene, cullingQuery);
            queries = this.lightBoundsCullings.get(scene);
          }
          var key = computeCullingKey(sceneData, false, frustumCullingID);
          var cullNum = queries.resultIndex.get(key);
          if (cullNum !== undefined) {
            return cullNum;
          }
          var lightBoundsCullingID = this.numLightBoundsCulling++;
          if (this.numLightBoundsCulling > this.lightBoundsCullingResults.length) {
            assert(this.numLightBoundsCulling === this.lightBoundsCullingResults.length + 1);
            this.lightBoundsCullingResults.push(this.cullingPools.lightBoundsCullingResultRecycle.add().update());
          }
          queries.resultIndex.set(key, lightBoundsCullingID);
          var cullingKey = this.cullingPools.lightBoundsCullingKeyRecycle.add();
          cullingKey.update(sceneData, frustumCullingID);
          queries.resultKeyIndex.set(key, cullingKey);
          return lightBoundsCullingID;
        };
        _proto6.getOrCreateFrustumCulling = function getOrCreateFrustumCulling(sceneId) {
          var sceneData = this.renderGraph.getScene(sceneId);
          var scene = sceneData.scene;
          var queries = this.frustumCullings.get(scene);
          if (!queries) {
            var cullingQuery = this.cullingPools.frustumCullingsRecycle.add();
            cullingQuery.update();
            this.frustumCullings.set(scene, cullingQuery);
            queries = this.frustumCullings.get(scene);
          }
          var castShadow = bool(sceneData.flags & SceneFlags.SHADOW_CASTER);
          var key = computeCullingKey(sceneData, castShadow);
          var cullNum = queries.resultIndex.get(key);
          if (cullNum !== undefined) {
            return cullNum;
          }
          var frustumCulledResultID = this.numFrustumCulling++;
          if (this.numFrustumCulling > this.frustumCullingResults.length) {
            assert(this.numFrustumCulling === this.frustumCullingResults.length + 1);
            this.frustumCullingResults.push([]);
          }
          queries.resultIndex.set(key, frustumCulledResultID);
          var cullingKey = this.cullingPools.frustumCullingKeyRecycle.add();
          cullingKey.update(sceneData, castShadow);
          queries.resultKeyIndex.set(key, cullingKey);
          return frustumCulledResultID;
        };
        _proto6.createRenderQueue = function createRenderQueue(sceneFlags, subpassOrPassLayoutID) {
          var targetID = this.numRenderQueues++;
          if (this.numRenderQueues > this.renderQueues.length) {
            assert(this.numRenderQueues === this.renderQueues.length + 1);
            var renderQueue = this.cullingPools.renderQueueRecycle.add();
            renderQueue.update();
            this.renderQueues.push(renderQueue);
          }
          assert(targetID < this.renderQueues.length);
          var rq = this.renderQueues[targetID];
          assert(rq.empty());
          assert(rq.sceneFlags === SceneFlags.NONE);
          assert(rq.subpassOrPassLayoutID === 0xFFFFFFFF);
          rq.sceneFlags = sceneFlags;
          rq.subpassOrPassLayoutID = subpassOrPassLayoutID;
          return targetID;
        };
        _proto6.collectCullingQueries = function collectCullingQueries(rg, lg) {
          for (var _iterator3 = _createForOfIteratorHelperLoose(rg.vertices()), _step3; !(_step3 = _iterator3()).done;) {
            var v = _step3.value;
            if (!rg.holds(RenderGraphValue.Scene, v) || !rg.getValid(v)) {
              continue;
            }
            var sceneData = rg.getScene(v);
            if (!sceneData.scene) {
              assert(!!sceneData.scene);
              continue;
            }
            var frustumCulledResultID = this.getOrCreateFrustumCulling(v);
            var lightBoundsCullingID = this.getOrCreateLightBoundsCulling(sceneData, frustumCulledResultID);
            var layoutID = getSubpassOrPassID(v, rg, lg);
            var targetID = this.createRenderQueue(sceneData.flags, layoutID);
            var lightType = sceneData.light.light ? sceneData.light.light.type : LightType.UNKNOWN;
            var renderQueueDesc = this.cullingPools.renderQueueDescRecycle.add();
            renderQueueDesc.update(frustumCulledResultID, lightBoundsCullingID, targetID, lightType);
            // add render queue to query source
            this.renderQueueIndex.set(v, renderQueueDesc);
          }
        };
        _proto6.uploadInstancing = function uploadInstancing(cmdBuffer) {
          for (var queueID = 0; queueID !== this.numRenderQueues; ++queueID) {
            assert(this.numRenderQueues <= this.renderQueues.length);
            var queue = this.renderQueues[queueID];
            queue.opaqueInstancingQueue.uploadBuffers(cmdBuffer);
            queue.transparentInstancingQueue.uploadBuffers(cmdBuffer);
          }
        };
        _proto6._getPhaseIdFromScene = function _getPhaseIdFromScene(scene) {
          var rg = this.renderGraph;
          var renderQueueId = rg.getParent(scene);
          assert(rg.holds(RenderGraphValue.Queue, renderQueueId));
          var graphRenderQueue = rg.getQueue(renderQueueId);
          return graphRenderQueue.phaseID;
        };
        _proto6.getBuiltinShadowFrustum = function getBuiltinShadowFrustum(pplSceneData, camera, mainLight, level) {
          var csmLayers = pplSceneData.csmLayers;
          var csmLevel = mainLight.csmLevel;
          var frustum;
          var shadows = pplSceneData.shadows;
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
        };
        _proto6.batchFrustumCulling = function batchFrustumCulling(pplSceneData) {
          for (var _iterator4 = _createForOfIteratorHelperLoose(this.frustumCullings), _step4; !(_step4 = _iterator4()).done;) {
            var _step4$value = _step4.value,
              scene = _step4$value[0],
              queries = _step4$value[1];
            assert(!!scene);
            for (var _iterator5 = _createForOfIteratorHelperLoose(queries.resultIndex), _step5; !(_step5 = _iterator5()).done;) {
              var _step5$value = _step5.value,
                key = _step5$value[0],
                frustomCulledResultID = _step5$value[1];
              var cullingKey = queries.resultKeyIndex.get(key);
              var sceneData = cullingKey.sceneData;
              assert(!!sceneData.camera);
              assert(sceneData.camera.scene === scene);
              var light = sceneData.light.light;
              var level = sceneData.light.level;
              var castShadow = cullingKey.castShadows;
              var probe = sceneData.light.probe;
              var camera = probe ? probe.camera : sceneData.camera;
              assert(frustomCulledResultID < this.frustumCullingResults.length);
              var models = this.frustumCullingResults[frustomCulledResultID];
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
                      var frustum = this.getBuiltinShadowFrustum(pplSceneData, camera, light, level);
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
        };
        _proto6.executeSphereLightCulling = function executeSphereLightCulling(light, frustumCullingResult, lightBoundsCullingResult) {
          var lightAABB = light.aabb;
          for (var _iterator6 = _createForOfIteratorHelperLoose(frustumCullingResult), _step6; !(_step6 = _iterator6()).done;) {
            var model = _step6.value;
            assert(!!model);
            var modelBounds = model.worldBounds;
            if (!modelBounds || intersect.aabbWithAABB(modelBounds, lightAABB)) {
              lightBoundsCullingResult.push(model);
            }
          }
        };
        _proto6.executeSpotLightCulling = function executeSpotLightCulling(light, frustumCullingResult, lightBoundsCullingResult) {
          var lightAABB = light.aabb;
          var lightFrustum = light.frustum;
          for (var _iterator7 = _createForOfIteratorHelperLoose(frustumCullingResult), _step7; !(_step7 = _iterator7()).done;) {
            var model = _step7.value;
            assert(!!model);
            var modelBounds = model.worldBounds;
            if (!modelBounds || intersect.aabbWithAABB(lightAABB, modelBounds) && intersect.aabbFrustum(modelBounds, lightFrustum)) {
              lightBoundsCullingResult.push(model);
            }
          }
        };
        _proto6.executePointLightCulling = function executePointLightCulling(light, frustumCullingResult, lightBoundsCullingResult) {
          var lightAABB = light.aabb;
          for (var _iterator8 = _createForOfIteratorHelperLoose(frustumCullingResult), _step8; !(_step8 = _iterator8()).done;) {
            var model = _step8.value;
            assert(!!model);
            var modelBounds = model.worldBounds;
            if (!modelBounds || intersect.aabbWithAABB(lightAABB, modelBounds)) {
              lightBoundsCullingResult.push(model);
            }
          }
        };
        _proto6.executeRangedDirectionalLightCulling = function executeRangedDirectionalLightCulling(light, frustumCullingResult, lightBoundsCullingResult) {
          rangedDirLightBoundingBox.transform(light.node.worldMatrix, null, null, null, lightAABB);
          for (var _iterator9 = _createForOfIteratorHelperLoose(frustumCullingResult), _step9; !(_step9 = _iterator9()).done;) {
            var model = _step9.value;
            assert(!!model);
            var modelBounds = model.worldBounds;
            if (!modelBounds || intersect.aabbWithAABB(lightAABB, modelBounds)) {
              lightBoundsCullingResult.push(model);
            }
          }
        };
        _proto6.batchLightBoundsCulling = function batchLightBoundsCulling() {
          for (var _iterator10 = _createForOfIteratorHelperLoose(this.lightBoundsCullings), _step10; !(_step10 = _iterator10()).done;) {
            var _step10$value = _step10.value,
              scene = _step10$value[0],
              queries = _step10$value[1];
            assert(!!scene);
            for (var _iterator11 = _createForOfIteratorHelperLoose(queries.resultIndex), _step11; !(_step11 = _iterator11()).done;) {
              var _step11$value = _step11.value,
                key = _step11$value[0],
                cullingID = _step11$value[1];
              var cullingKey = queries.resultKeyIndex.get(key);
              var sceneData = cullingKey.sceneData;
              var frustumCullingID = cullingKey.frustumCullingID;
              var frustumCullingResult = this.frustumCullingResults[frustumCullingID];
              assert(!!sceneData.camera);
              assert(!!sceneData.shadingLight);
              assert(sceneData.camera.scene === scene);
              assert(cullingID < this.frustumCullingResults.length);
              var lightBoundsCullingResult = this.lightBoundsCullingResults[cullingID];
              assert(lightBoundsCullingResult.instances.length === 0);
              switch (sceneData.shadingLight.type) {
                case LightType.SPHERE:
                  {
                    var light = sceneData.shadingLight;
                    this.executeSphereLightCulling(light, frustumCullingResult, lightBoundsCullingResult.instances);
                  }
                  break;
                case LightType.SPOT:
                  {
                    var _light = sceneData.shadingLight;
                    this.executeSpotLightCulling(_light, frustumCullingResult, lightBoundsCullingResult.instances);
                  }
                  break;
                case LightType.POINT:
                  {
                    var _light2 = sceneData.shadingLight;
                    this.executePointLightCulling(_light2, frustumCullingResult, lightBoundsCullingResult.instances);
                  }
                  break;
                case LightType.RANGED_DIRECTIONAL:
                  {
                    var _light3 = sceneData.shadingLight;
                    this.executeRangedDirectionalLightCulling(_light3, frustumCullingResult, lightBoundsCullingResult.instances);
                  }
                  break;
                case LightType.DIRECTIONAL:
                case LightType.UNKNOWN:
                default:
              }
            }
          }
        };
        _proto6.fillRenderQueues = function fillRenderQueues(rg, pplSceneData) {
          var _this = this;
          var _loop = function _loop() {
            var _step12$value = _step12.value,
              sceneId = _step12$value[0],
              desc = _step12$value[1];
            assert(rg.holds(RenderGraphValue.Scene, sceneId));
            var frustomCulledResultID = desc.frustumCulledResultID;
            var lightBoundsCullingID = desc.lightBoundsCulledResultID;
            var targetId = desc.renderQueueTarget;
            var sceneData = rg.getScene(sceneId);
            var isDrawBlend = bool(sceneData.flags & SceneFlags.TRANSPARENT_OBJECT);
            var isDrawOpaqueOrMask = bool(sceneData.flags & (SceneFlags.OPAQUE_OBJECT | SceneFlags.CUTOUT_OBJECT));
            var isDrawShadowCaster = bool(sceneData.flags & SceneFlags.SHADOW_CASTER);
            var isDrawProbe = bool(sceneData.flags & SceneFlags.REFLECTION_PROBE);
            if (!isDrawShadowCaster && !isDrawBlend && !isDrawOpaqueOrMask && !isDrawProbe) {
              return 1; // continue
            }
            // render queue info
            var renderQueueId = rg.getParent(sceneId);
            assert(rg.holds(RenderGraphValue.Queue, renderQueueId));
            var graphRenderQueue = rg.getQueue(renderQueueId);
            var phaseLayoutId = graphRenderQueue.phaseID;
            assert(phaseLayoutId !== _this.layoutGraph.nullVertex());

            // culling source
            assert(frustomCulledResultID < _this.frustumCullingResults.length);
            var sourceModels = function () {
              // is culled by light bounds
              if (lightBoundsCullingID !== 0xFFFFFFFF) {
                if (lightBoundsCullingID < _this.lightBoundsCullingResults.length) {
                  return _this.lightBoundsCullingResults[lightBoundsCullingID].instances;
                } else {
                  return [];
                }
              }
              // not culled by light bounds
              if (frustomCulledResultID < _this.frustumCullingResults.length) {
                return _this.frustumCullingResults[frustomCulledResultID];
              } else {
                return [];
              }
            }();

            // queue target
            assert(targetId < _this.renderQueues.length);
            var renderQueue = _this.renderQueues[targetId];
            assert(renderQueue.empty());

            // skybox
            var camera = sceneData.camera;
            assert(!!camera);
            // fill render queue
            for (var _iterator13 = _createForOfIteratorHelperLoose(sourceModels), _step13; !(_step13 = _iterator13()).done;) {
              var model = _step13.value;
              addRenderObject(phaseLayoutId, isDrawOpaqueOrMask, isDrawBlend, isDrawProbe, camera, model, renderQueue);
            }
            // post-processing
            renderQueue.sort();
          };
          for (var _iterator12 = _createForOfIteratorHelperLoose(this.renderQueueIndex), _step12; !(_step12 = _iterator12()).done;) {
            if (_loop()) continue;
          }
        };
        return SceneCulling;
      }());
      _export("LightResource", LightResource = /*#__PURE__*/function () {
        function LightResource() {
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
        var _proto7 = LightResource.prototype;
        _proto7.init = function init(programLib, deviceIn, maxNumLights) {
          assert(!this.device);
          this.device = deviceIn;
          this.programLibrary = programLib;
          var instanceLayout = this.programLibrary.localLayoutData;
          var attrID = programLib.layoutGraph.attributeIndex.get('CCForwardLight');
          var uniformBlock = instanceLayout.uniformBlocks.get(attrID);
          this.elementSize = AlignUp(getUniformBlockSize(uniformBlock.members), this.device.capabilities.uboOffsetAlignment);
          this.maxNumLights = maxNumLights;
          this.binding = programLib.localLayoutData.bindingMap.get(attrID);
          var bufferSize = this.elementSize * this.maxNumLights;
          this.lightBuffer = this.device.createBuffer(new BufferInfo(BufferUsageBit.UNIFORM | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.HOST | MemoryUsageBit.DEVICE, bufferSize, this.elementSize));
          this.firstLightBufferView = this.device.createBuffer(new BufferViewInfo(this.lightBuffer, 0, this.elementSize));
          this.cpuBuffer = new Float32Array(bufferSize / Float32Array.BYTES_PER_ELEMENT);
          assert(!!(this.elementSize && this.maxNumLights));
          this.resized = true;
        };
        _proto7.buildLights = function buildLights(sceneCulling, bHDR, shadowInfo) {
          // Build light buffer
          for (var _iterator14 = _createForOfIteratorHelperLoose(sceneCulling.lightBoundsCullings), _step14; !(_step14 = _iterator14()).done;) {
            var _step14$value = _step14.value,
              scene = _step14$value[0],
              lightBoundsCullings = _step14$value[1];
            for (var _iterator16 = _createForOfIteratorHelperLoose(lightBoundsCullings.resultIndex), _step16; !(_step16 = _iterator16()).done;) {
              var _step16$value = _step16.value,
                key = _step16$value[0],
                lightBoundsCullingID = _step16$value[1];
              var lightBoundsCulling = lightBoundsCullings.resultKeyIndex.get(key);
              var sceneData = lightBoundsCulling.sceneData;
              var exposure = 1.0;
              if (sceneData.camera) {
                exposure = sceneData.camera.exposure;
              } else if (sceneData.light.probe && sceneData.light.probe.camera) {
                exposure = sceneData.light.probe.camera.exposure;
              } else {
                throw new Error('Unexpected situation: No camera or probe found.');
              }
              var lightByteOffset = this.addLight(sceneData.shadingLight, bHDR, exposure, shadowInfo);

              // Save light byte offset for each light bounds culling
              var result = sceneCulling.lightBoundsCullingResults[lightBoundsCullingID];
              result.lightByteOffset = lightByteOffset;
            }
          }

          // Assign light byte offset to each queue
          for (var _iterator15 = _createForOfIteratorHelperLoose(sceneCulling.renderQueueIndex), _step15; !(_step15 = _iterator15()).done;) {
            var _step15$value = _step15.value,
              sceneID = _step15$value[0],
              desc = _step15$value[1];
            if (desc.lightBoundsCulledResultID === 0xFFFFFFFF) {
              continue;
            }
            var _lightByteOffset = sceneCulling.lightBoundsCullingResults[desc.lightBoundsCulledResultID].lightByteOffset;
            sceneCulling.renderQueues[desc.renderQueueTarget].lightByteOffset = _lightByteOffset;
          }
        };
        _proto7.tryUpdateRenderSceneLocalDescriptorSet = function tryUpdateRenderSceneLocalDescriptorSet(sceneCulling) {
          if (!sceneCulling.lightBoundsCullings.size) {
            return;
          }
          for (var _iterator17 = _createForOfIteratorHelperLoose(sceneCulling.frustumCullings), _step17; !(_step17 = _iterator17()).done;) {
            var _step17$value = _step17.value,
              scene = _step17$value[0],
              culling = _step17$value[1];
            for (var _iterator18 = _createForOfIteratorHelperLoose(scene.models), _step18; !(_step18 = _iterator18()).done;) {
              var model = _step18.value;
              if (!model) {
                throw new Error('Unexpected null model.');
              }
              for (var _iterator19 = _createForOfIteratorHelperLoose(model.subModels), _step19; !(_step19 = _iterator19()).done;) {
                var submodel = _step19.value;
                var set = submodel.descriptorSet;
                var prev = set.getBuffer(this.binding);
                if (this.resized || prev !== this.firstLightBufferView) {
                  set.bindBuffer(this.binding, this.firstLightBufferView);
                  set.update();
                }
              }
            }
          }
          this.resized = false;
        };
        _proto7.clear = function clear() {
          this.cpuBuffer.fill(0);
          this.lights.length = 0;
          this.lightIndex.clear();
        };
        _proto7.addLight = function addLight(light, bHDR, exposure, shadowInfo) {
          // Already added
          var existingLightID = this.lightIndex.get(light);
          if (existingLightID !== undefined) {
            return existingLightID;
          }

          // Resize buffer if needed
          if (this.lights.length === this.maxNumLights) {
            this.resized = true;
            this.maxNumLights *= 2;
            var bufferSize = this.elementSize * this.maxNumLights;
            this.lightBuffer.resize(bufferSize);
            this.firstLightBufferView = this.device.createBuffer(new BufferViewInfo(this.lightBuffer, 0, this.elementSize));
            var prevCpuBuffer = this.cpuBuffer;
            this.cpuBuffer = new Float32Array(bufferSize / Float32Array.BYTES_PER_ELEMENT);
            this.cpuBuffer.set(prevCpuBuffer);
          }
          assert(this.lights.length < this.maxNumLights);

          // Add light
          var lightID = this.lights.length;
          this.lights[lightID] = light;
          this.lightIndex.set(light, lightID);

          // Update buffer
          var offset = this.elementSize / Float32Array.BYTES_PER_ELEMENT * lightID;
          SetLightUBO(light, bHDR, exposure, shadowInfo, this.cpuBuffer, offset, this.elementSize);
          return lightID * this.elementSize;
        };
        _proto7.buildLightBuffer = function buildLightBuffer(cmdBuffer) {
          cmdBuffer.updateBuffer(this.lightBuffer, this.cpuBuffer, this.lights.length * this.elementSize / Float32Array.BYTES_PER_ELEMENT);
        };
        return LightResource;
      }());
    }
  };
});
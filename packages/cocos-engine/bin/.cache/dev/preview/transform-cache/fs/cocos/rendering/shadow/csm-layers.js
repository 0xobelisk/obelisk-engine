System.register("q-bundled:///fs/cocos/rendering/shadow/csm-layers.js", ["../../render-scene/scene/shadows.js", "../../core/math/index.js", "../../core/geometry/index.js", "../../core/memop/cached-array.js", "../../core/index.js"], function (_export, _context) {
  "use strict";

  var CSMLevel, CSMOptimizationMode, Mat4, Vec3, Vec2, Vec4, Frustum, AABB, CachedArray, cclegacy, _mat4Trans, _matShadowTrans, _matShadowView, _matShadowProj, _matShadowViewProj, _matShadowViewProjArbitaryPos, _matShadowViewProjArbitaryPosInv, _focus, _projPos, _texelSize, _projSnap, _snap, _maxVec3, _minVec3, _shadowPos, _maxLayerPosz, _maxLayerFarPlane, ShadowLayerVolume, CSMShadowLayer, CSMLayers;
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2022-2023 Xiamen Yaji Software Co., Ltd.
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
    setters: [function (_renderSceneSceneShadowsJs) {
      CSMLevel = _renderSceneSceneShadowsJs.CSMLevel;
      CSMOptimizationMode = _renderSceneSceneShadowsJs.CSMOptimizationMode;
    }, function (_coreMathIndexJs) {
      Mat4 = _coreMathIndexJs.Mat4;
      Vec3 = _coreMathIndexJs.Vec3;
      Vec2 = _coreMathIndexJs.Vec2;
      Vec4 = _coreMathIndexJs.Vec4;
    }, function (_coreGeometryIndexJs) {
      Frustum = _coreGeometryIndexJs.Frustum;
      AABB = _coreGeometryIndexJs.AABB;
    }, function (_coreMemopCachedArrayJs) {
      CachedArray = _coreMemopCachedArrayJs.CachedArray;
    }, function (_coreIndexJs) {
      cclegacy = _coreIndexJs.cclegacy;
    }],
    execute: function () {
      _mat4Trans = new Mat4();
      _matShadowTrans = new Mat4();
      _matShadowView = new Mat4();
      _matShadowProj = new Mat4();
      _matShadowViewProj = new Mat4();
      _matShadowViewProjArbitaryPos = new Mat4();
      _matShadowViewProjArbitaryPosInv = new Mat4();
      _focus = new Vec3(0, 0, 0);
      _projPos = new Vec3();
      _texelSize = new Vec2();
      _projSnap = new Vec3();
      _snap = new Vec3();
      _maxVec3 = new Vec3(10000000, 10000000, 10000000);
      _minVec3 = new Vec3(-10000000, -10000000, -10000000);
      _shadowPos = new Vec3();
      _maxLayerPosz = 0.0;
      _maxLayerFarPlane = 0.0;
      _export("ShadowLayerVolume", ShadowLayerVolume = /*#__PURE__*/function () {
        function ShadowLayerVolume(level) {
          this._shadowObjects = [];
          this._shadowCameraFar = 0;
          // Level is a vector, Indicates the location.range: [0 ~ 3]
          this._level = void 0;
          this._matShadowView = new Mat4();
          this._matShadowProj = new Mat4();
          this._matShadowViewProj = new Mat4();
          this._validFrustum = new Frustum();
          // geometry renderer value
          this._splitFrustum = new Frustum();
          this._lightViewFrustum = new Frustum();
          this._castLightViewBoundingBox = new AABB();
          this._level = level;
          this._validFrustum.accurate = true;
          this._splitFrustum.accurate = true;
          this._lightViewFrustum.accurate = true;
        }
        var _proto = ShadowLayerVolume.prototype;
        _proto.copyToValidFrustum = function copyToValidFrustum(validFrustum) {
          Frustum.copy(this._validFrustum, validFrustum);
        };
        _proto.calculateValidFrustumOrtho = function calculateValidFrustumOrtho(width, height, near, far, transform) {
          Frustum.createOrtho(this._validFrustum, width, height, near, far, transform);
        };
        _proto.calculateSplitFrustum = function calculateSplitFrustum(camera, m, start, end) {
          this._splitFrustum.split(start, end, camera.aspect, camera.fov, m);
        };
        _proto.destroy = function destroy() {
          this._shadowObjects.length = 0;
        };
        _proto.createMatrix = function createMatrix(dirLight, shadowMapWidth, onlyForCulling) {
          var device = cclegacy.director.root.device;
          var invisibleOcclusionRange = dirLight.shadowInvisibleOcclusionRange;
          Frustum.copy(this._lightViewFrustum, this._splitFrustum);

          // view matrix with range back
          Mat4.fromRT(_matShadowTrans, dirLight.node.rotation, _focus);
          Mat4.invert(_matShadowView, _matShadowTrans);
          var shadowViewArbitaryPos = _matShadowView.clone();
          this._lightViewFrustum.transform(_matShadowView);

          // bounding box in light space
          AABB.fromPoints(this._castLightViewBoundingBox, _maxVec3, _minVec3);
          this._castLightViewBoundingBox.mergeFrustum(this._lightViewFrustum);
          var orthoSizeWidth;
          var orthoSizeHeight;
          if (dirLight.csmOptimizationMode === CSMOptimizationMode.DisableRotationFix) {
            orthoSizeWidth = this._castLightViewBoundingBox.halfExtents.x * 2.0;
            orthoSizeHeight = this._castLightViewBoundingBox.halfExtents.y * 2.0;
          } else {
            orthoSizeWidth = orthoSizeHeight = Vec3.distance(this._lightViewFrustum.vertices[0], this._lightViewFrustum.vertices[6]);
          }
          var csmLevel = cclegacy.director.root.pipeline.pipelineSceneData.csmSupported ? dirLight.csmLevel : 1;
          if (csmLevel > 1 && dirLight.csmOptimizationMode === CSMOptimizationMode.RemoveDuplicates) {
            if (this._level >= csmLevel - 1) {
              _maxLayerFarPlane = this._castLightViewBoundingBox.halfExtents.z;
              _maxLayerPosz = this._castLightViewBoundingBox.center.z;
            } else {
              var alignFarPlaneDist = Math.abs(this._castLightViewBoundingBox.center.z - _maxLayerPosz) + _maxLayerFarPlane;
              this._castLightViewBoundingBox.halfExtents.z = Math.max(this._castLightViewBoundingBox.center.z, alignFarPlaneDist);
            }
          }
          var r = this._castLightViewBoundingBox.halfExtents.z;
          this._shadowCameraFar = r * 2 + invisibleOcclusionRange;
          var center = this._castLightViewBoundingBox.center;
          _shadowPos.set(center.x, center.y, center.z + r + invisibleOcclusionRange);
          Vec3.transformMat4(_shadowPos, _shadowPos, _matShadowTrans);
          Mat4.fromRT(_matShadowTrans, dirLight.node.rotation, _shadowPos);
          Mat4.invert(_matShadowView, _matShadowTrans);
          if (!onlyForCulling) {
            // snap to whole texels
            var halfOrthoSizeWidth = orthoSizeWidth * 0.5;
            var halfOrthoSizeHeight = orthoSizeHeight * 0.5;
            Mat4.ortho(_matShadowProj, -halfOrthoSizeWidth, halfOrthoSizeWidth, -halfOrthoSizeHeight, halfOrthoSizeHeight, 0.1, this._shadowCameraFar, device.capabilities.clipSpaceMinZ, device.capabilities.clipSpaceSignY);
            Mat4.multiply(_matShadowViewProjArbitaryPos, _matShadowProj, shadowViewArbitaryPos);
            Vec3.transformMat4(_projPos, _shadowPos, _matShadowViewProjArbitaryPos);
            var invActualSize = 2.0 / shadowMapWidth;
            _texelSize.set(invActualSize, invActualSize);
            var modX = _projPos.x % _texelSize.x;
            var modY = _projPos.y % _texelSize.y;
            _projSnap.set(_projPos.x - modX, _projPos.y - modY, _projPos.z);
            Mat4.invert(_matShadowViewProjArbitaryPosInv, _matShadowViewProjArbitaryPos);
            Vec3.transformMat4(_snap, _projSnap, _matShadowViewProjArbitaryPosInv);
            Mat4.fromRT(_matShadowTrans, dirLight.node.rotation, _snap);
            Mat4.invert(_matShadowView, _matShadowTrans);

            // fill data
            Mat4.multiply(_matShadowViewProj, _matShadowProj, _matShadowView);
            Mat4.copy(this._matShadowView, _matShadowView);
            Mat4.copy(this._matShadowProj, _matShadowProj);
            Mat4.copy(this._matShadowViewProj, _matShadowViewProj);
          }
          Frustum.createOrtho(this._validFrustum, orthoSizeWidth, orthoSizeHeight, 0.1, this._shadowCameraFar, _matShadowTrans);
        };
        _createClass(ShadowLayerVolume, [{
          key: "level",
          get: function get() {
            return this._level;
          }
        }, {
          key: "shadowObjects",
          get: function get() {
            return this._shadowObjects;
          }
        }, {
          key: "shadowCameraFar",
          get: function get() {
            return this._shadowCameraFar;
          },
          set: function set(val) {
            this._shadowCameraFar = val;
          }
        }, {
          key: "matShadowView",
          get: function get() {
            return this._matShadowView;
          },
          set: function set(val) {
            this._matShadowView = val;
          }
        }, {
          key: "matShadowProj",
          get: function get() {
            return this._matShadowProj;
          },
          set: function set(val) {
            this._matShadowProj = val;
          }
        }, {
          key: "matShadowViewProj",
          get: function get() {
            return this._matShadowViewProj;
          },
          set: function set(val) {
            this._matShadowViewProj = val;
          }
        }, {
          key: "validFrustum",
          get: function get() {
            return this._validFrustum;
          }
        }, {
          key: "splitFrustum",
          get: function get() {
            return this._splitFrustum;
          }
        }, {
          key: "lightViewFrustum",
          get: function get() {
            return this._lightViewFrustum;
          }
        }, {
          key: "castLightViewBoundingBox",
          get: function get() {
            return this._castLightViewBoundingBox;
          }
        }]);
        return ShadowLayerVolume;
      }());
      _export("CSMShadowLayer", CSMShadowLayer = /*#__PURE__*/function (_ShadowLayerVolume) {
        _inheritsLoose(CSMShadowLayer, _ShadowLayerVolume);
        function CSMShadowLayer(level) {
          var _this;
          _this = _ShadowLayerVolume.call(this, level) || this;
          _this._splitCameraNear = 0;
          _this._splitCameraFar = 0;
          _this._csmAtlas = new Vec4();
          _this._calculateAtlas(level);
          return _this;
        }
        var _proto2 = CSMShadowLayer.prototype;
        _proto2.destroy = function destroy() {
          _ShadowLayerVolume.prototype.destroy.call(this);
        };
        _proto2._calculateAtlas = function _calculateAtlas(level) {
          var clipSpaceSignY = cclegacy.director.root.device.capabilities.clipSpaceSignY;
          var x = level % 2 - 0.5;
          var y = (0.5 - Math.floor(level / 2)) * clipSpaceSignY;
          this._csmAtlas.set(0.5, 0.5, x, y);
        };
        _createClass(CSMShadowLayer, [{
          key: "splitCameraNear",
          get: function get() {
            return this._splitCameraNear;
          },
          set: function set(val) {
            this._splitCameraNear = val;
          }
        }, {
          key: "splitCameraFar",
          get: function get() {
            return this._splitCameraFar;
          },
          set: function set(val) {
            this._splitCameraFar = val;
          }
        }, {
          key: "csmAtlas",
          get: function get() {
            return this._csmAtlas;
          },
          set: function set(val) {
            this._csmAtlas = val;
          }
        }]);
        return CSMShadowLayer;
      }(ShadowLayerVolume));
      /**
       * @en Shadow CSM layer manager
       * @zh CSM阴影图层管理
       */
      _export("CSMLayers", CSMLayers = /*#__PURE__*/function () {
        function CSMLayers() {
          this._castShadowObjects = [];
          this._layerObjects = new CachedArray(64);
          this._layers = [];
          // LevelCount is a scalar, Indicates the number.
          this._levelCount = 0;
          // The ShadowTransformInfo object for 'fixed area shadow' || 'maximum clipping info' || 'CSM layers = 1'.
          this._specialLayer = new ShadowLayerVolume(1);
          this._shadowDistance = 0;
          for (var i = 0; i < CSMLevel.LEVEL_4; i++) {
            this._layers[i] = new CSMShadowLayer(i);
          }
        }
        var _proto3 = CSMLayers.prototype;
        _proto3.update = function update(sceneData, camera) {
          var scene = camera.scene;
          var dirLight = scene.mainLight;
          if (dirLight === null) {
            return;
          }
          var shadowInfo = sceneData.shadows;
          var levelCount = cclegacy.director.root.pipeline.pipelineSceneData.csmSupported ? dirLight.csmLevel : 1;
          var shadowDistance = dirLight.shadowDistance;
          if (!shadowInfo.enabled || !dirLight.shadowEnabled) {
            return;
          }
          if (dirLight.shadowFixedArea) {
            this._updateFixedArea(dirLight);
          } else {
            if (dirLight.csmNeedUpdate || this._levelCount !== levelCount || this._shadowDistance !== shadowDistance) {
              this._splitFrustumLevels(dirLight);
              this._levelCount = levelCount;
              this._shadowDistance = shadowDistance;
            }
            this._calculateCSM(camera, dirLight, shadowInfo);
          }
        };
        _proto3.destroy = function destroy() {
          this._castShadowObjects.length = 0;
          for (var i = 0; i < this._layers.length; i++) {
            this._layers[i].destroy();
          }
          this._layers.length = 0;
        };
        _proto3._updateFixedArea = function _updateFixedArea(dirLight) {
          var device = cclegacy.director.root.device;
          var x = dirLight.shadowOrthoSize;
          var y = dirLight.shadowOrthoSize;
          var near = dirLight.shadowNear;
          var far = dirLight.shadowFar;
          Mat4.fromRT(_matShadowTrans, dirLight.node.getWorldRotation(), dirLight.node.getWorldPosition());
          Mat4.invert(_matShadowView, _matShadowTrans);
          Mat4.ortho(_matShadowProj, -x, x, -y, y, near, far, device.capabilities.clipSpaceMinZ, device.capabilities.clipSpaceSignY);
          Mat4.multiply(_matShadowViewProj, _matShadowProj, _matShadowView);
          this._specialLayer.matShadowView = _matShadowView;
          this._specialLayer.matShadowProj = _matShadowProj;
          this._specialLayer.matShadowViewProj = _matShadowViewProj;
          this._specialLayer.calculateValidFrustumOrtho(x * 2.0, y * 2.0, near, far, _matShadowTrans);
        };
        _proto3._splitFrustumLevels = function _splitFrustumLevels(dirLight) {
          var nd = 0.1;
          var fd = dirLight.shadowDistance;
          var ratio = fd / nd;
          var level = cclegacy.director.root.pipeline.pipelineSceneData.csmSupported ? dirLight.csmLevel : 1;
          var lambda = dirLight.csmLayerLambda;
          this._layers[0].splitCameraNear = nd;
          for (var i = 1; i < level; i++) {
            // i ÷ numbers of level
            var si = i / level;
            // eslint-disable-next-line no-restricted-properties
            var preNear = lambda * (nd * Math.pow(ratio, si)) + (1 - lambda) * (nd + (fd - nd) * si);
            // Slightly increase the overlap to avoid fracture
            var nextFar = preNear * 1.005;
            this._layers[i].splitCameraNear = preNear;
            this._layers[i - 1].splitCameraFar = nextFar;
          }
          // numbers of level - 1
          this._layers[level - 1].splitCameraFar = fd;
          dirLight.csmNeedUpdate = false;
        };
        _proto3._calculateCSM = function _calculateCSM(camera, dirLight, shadowInfo) {
          var level = cclegacy.director.root.pipeline.pipelineSceneData.csmSupported ? dirLight.csmLevel : 1;
          var shadowMapWidth = level > 1 ? shadowInfo.size.x * 0.5 : shadowInfo.size.x;
          if (shadowMapWidth < 0.0) {
            return;
          }
          this._getCameraWorldMatrix(_mat4Trans, camera);
          for (var i = level - 1; i >= 0; i--) {
            var csmLayer = this._layers[i];
            var near = csmLayer.splitCameraNear;
            var far = csmLayer.splitCameraFar;
            csmLayer.calculateSplitFrustum(camera, _mat4Trans, near, far);
            csmLayer.createMatrix(dirLight, shadowMapWidth, false);
          }
          if (level === CSMLevel.LEVEL_1) {
            this._specialLayer.shadowCameraFar = this._layers[0].shadowCameraFar;
            Mat4.copy(this._specialLayer.matShadowView, this._layers[0].matShadowView);
            Mat4.copy(this._specialLayer.matShadowProj, this._layers[0].matShadowProj);
            Mat4.copy(this._specialLayer.matShadowViewProj, this._layers[0].matShadowViewProj);
            this._specialLayer.copyToValidFrustum(this._layers[0].validFrustum);
          } else {
            this._specialLayer.calculateSplitFrustum(camera, _mat4Trans, 0.1, dirLight.shadowDistance);
            this._specialLayer.createMatrix(dirLight, shadowMapWidth, true);
          }
        };
        _proto3._getCameraWorldMatrix = function _getCameraWorldMatrix(out, camera) {
          if (!camera.node) {
            return;
          }
          var cameraNode = camera.node;
          var position = cameraNode.getWorldPosition();
          var rotation = cameraNode.getWorldRotation();
          Mat4.fromRT(out, rotation, position);
        };
        _createClass(CSMLayers, [{
          key: "castShadowObjects",
          get: function get() {
            return this._castShadowObjects;
          }
        }, {
          key: "layerObjects",
          get: function get() {
            return this._layerObjects;
          }
        }, {
          key: "layers",
          get: function get() {
            return this._layers;
          }
        }, {
          key: "specialLayer",
          get: function get() {
            return this._specialLayer;
          }
        }]);
        return CSMLayers;
      }());
    }
  };
});
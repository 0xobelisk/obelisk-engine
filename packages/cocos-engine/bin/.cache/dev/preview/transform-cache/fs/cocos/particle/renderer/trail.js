System.register("q-bundled:///fs/cocos/particle/renderer/trail.js", ["../../core/data/decorators/index.js", "../../asset/assets/rendering-sub-mesh.js", "../../game/director.js", "../../gfx/index.js", "../../core/index.js", "../../render-scene/index.js", "../animator/curve-range.js", "../animator/gradient-range.js", "../enum.js", "../../scene-graph/node-enum.js"], function (_export, _context) {
  "use strict";

  var ccclass, tooltip, displayOrder, type, serializable, range, RenderingSubMesh, director, AttributeName, BufferUsageBit, Format, FormatInfos, MemoryUsageBit, PrimitiveMode, Attribute, BufferInfo, Color, Mat4, Quat, toRadian, Vec3, Pool, warnID, cclegacy, scene, CurveRange, GradientRange, Space, TextureMode, TrailMode, TransformBit, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _class2, _class3, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6, _initializer7, _initializer8, _initializer9, _initializer10, _initializer11, _initializer12, _initializer13, PRE_TRIANGLE_INDEX, NEXT_TRIANGLE_INDEX, DIRECTION_THRESHOLD, _temp_trailEle, _temp_quat, _temp_vec3, _temp_vec3_1, _temp_color, TrailSegment, TrailModule;
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
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
                                                                                                                                                                                                                                                                                                                                                                                            */
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
      displayOrder = _coreDataDecoratorsIndexJs.displayOrder;
      type = _coreDataDecoratorsIndexJs.type;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      range = _coreDataDecoratorsIndexJs.range;
    }, function (_assetAssetsRenderingSubMeshJs) {
      RenderingSubMesh = _assetAssetsRenderingSubMeshJs.RenderingSubMesh;
    }, function (_gameDirectorJs) {
      director = _gameDirectorJs.director;
    }, function (_gfxIndexJs) {
      AttributeName = _gfxIndexJs.AttributeName;
      BufferUsageBit = _gfxIndexJs.BufferUsageBit;
      Format = _gfxIndexJs.Format;
      FormatInfos = _gfxIndexJs.FormatInfos;
      MemoryUsageBit = _gfxIndexJs.MemoryUsageBit;
      PrimitiveMode = _gfxIndexJs.PrimitiveMode;
      Attribute = _gfxIndexJs.Attribute;
      BufferInfo = _gfxIndexJs.BufferInfo;
    }, function (_coreIndexJs) {
      Color = _coreIndexJs.Color;
      Mat4 = _coreIndexJs.Mat4;
      Quat = _coreIndexJs.Quat;
      toRadian = _coreIndexJs.toRadian;
      Vec3 = _coreIndexJs.Vec3;
      Pool = _coreIndexJs.Pool;
      warnID = _coreIndexJs.warnID;
      cclegacy = _coreIndexJs.cclegacy;
    }, function (_renderSceneIndexJs) {
      scene = _renderSceneIndexJs.scene;
    }, function (_animatorCurveRangeJs) {
      CurveRange = _animatorCurveRangeJs.default;
    }, function (_animatorGradientRangeJs) {
      GradientRange = _animatorGradientRangeJs.default;
    }, function (_enumJs) {
      Space = _enumJs.Space;
      TextureMode = _enumJs.TextureMode;
      TrailMode = _enumJs.TrailMode;
    }, function (_sceneGraphNodeEnumJs) {
      TransformBit = _sceneGraphNodeEnumJs.TransformBit;
    }],
    execute: function () {
      PRE_TRIANGLE_INDEX = 1;
      NEXT_TRIANGLE_INDEX = 1 << 2;
      DIRECTION_THRESHOLD = Math.cos(toRadian(100));
      _temp_trailEle = {
        position: new Vec3(),
        velocity: new Vec3()
      };
      _temp_quat = new Quat();
      _temp_vec3 = new Vec3();
      _temp_vec3_1 = new Vec3();
      _temp_color = new Color(); // const barycentric = [1, 0, 0, 0, 1, 0, 0, 0, 1]; // <wireframe debug>
      // let _bcIdx = 0; // <wireframe debug>
      // the valid element is in [start,end) range.if start equals -1,it represents the array is empty.
      TrailSegment = /*#__PURE__*/function () {
        function TrailSegment(maxTrailElementNum) {
          this.start = void 0;
          this.end = void 0;
          this.trailElements = void 0;
          this.start = -1;
          this.end = -1;
          this.trailElements = [];
          while (maxTrailElementNum--) {
            this.trailElements.push({
              position: new Vec3(),
              lifetime: 0,
              width: 0,
              velocity: new Vec3(),
              direction: 0,
              color: new Color()
            });
          }
        }
        var _proto = TrailSegment.prototype;
        _proto.getElement = function getElement(idx) {
          if (this.start === -1) {
            return null;
          }
          if (idx < 0) {
            idx = (idx + this.trailElements.length) % this.trailElements.length;
          }
          if (idx >= this.trailElements.length) {
            idx %= this.trailElements.length;
          }
          return this.trailElements[idx];
        };
        _proto.addElement = function addElement() {
          if (this.trailElements.length === 0) {
            return null;
          }
          if (this.start === -1) {
            this.start = 0;
            this.end = 1;
            return this.trailElements[0];
          }
          if (this.start === this.end) {
            this.trailElements.splice(this.end, 0, {
              position: new Vec3(),
              lifetime: 0,
              width: 0,
              velocity: new Vec3(),
              direction: 0,
              color: new Color()
            });
            this.start++;
            this.start %= this.trailElements.length;
          }
          var newEleLoc = this.end++;
          this.end %= this.trailElements.length;
          return this.trailElements[newEleLoc];
        }

        // eslint-disable-next-line max-len
        ;
        _proto.iterateElement = function iterateElement(target, f, p, dt) {
          var end = this.start >= this.end ? this.end + this.trailElements.length : this.end;
          for (var i = this.start; i < end; i++) {
            if (f(target, this.trailElements[i % this.trailElements.length], p, dt)) {
              this.start++;
              this.start %= this.trailElements.length;
            }
          }
          if (this.start === end) {
            this.start = -1;
            this.end = -1;
          }
        };
        _proto.count = function count() {
          if (this.start < this.end) {
            return this.end - this.start;
          } else {
            return this.trailElements.length + this.end - this.start;
          }
        };
        _proto.clear = function clear() {
          this.start = -1;
          this.end = -1;
        }

        // <debug>
        // public _print () {
        //     let msg = String();
        //     this.iterateElement(this, (target: object, e: ITrailElement, p: Particle, dt: number) => {
        //         msg += 'pos:' + e.position.toString() + ' lifetime:' + e.lifetime + ' dir:' + e.direction +
        //                ' velocity:' + e.velocity.toString() + '\n';
        //         return false;
        //     }, null, 0);
        //     console.log(msg);
        // }
        ;
        return TrailSegment;
      }();
      _export("default", TrailModule = (_dec = ccclass('cc.TrailModule'), _dec2 = displayOrder(0), _dec3 = type(TrailMode), _dec4 = displayOrder(1), _dec5 = tooltip('i18n:trailSegment.mode'), _dec6 = type(CurveRange), _dec7 = range([0, Number.POSITIVE_INFINITY]), _dec8 = displayOrder(3), _dec9 = tooltip('i18n:trailSegment.lifeTime'), _dec10 = displayOrder(5), _dec11 = tooltip('i18n:trailSegment.minParticleDistance'), _dec12 = type(Space), _dec13 = displayOrder(6), _dec14 = tooltip('i18n:trailSegment.space'), _dec15 = type(TextureMode), _dec16 = displayOrder(8), _dec17 = tooltip('i18n:trailSegment.textureMode'), _dec18 = displayOrder(9), _dec19 = tooltip('i18n:trailSegment.widthFromParticle'), _dec20 = type(CurveRange), _dec21 = range([0, Number.POSITIVE_INFINITY]), _dec22 = displayOrder(10), _dec23 = tooltip('i18n:trailSegment.widthRatio'), _dec24 = displayOrder(11), _dec25 = tooltip('i18n:trailSegment.colorFromParticle'), _dec26 = type(GradientRange), _dec27 = displayOrder(12), _dec28 = tooltip('i18n:trailSegment.colorOverTrail'), _dec29 = type(GradientRange), _dec30 = displayOrder(13), _dec31 = tooltip('i18n:trailSegment.colorOvertime'), _dec32 = type(Space), _dec(_class2 = (_class3 = /*#__PURE__*/function () {
        var _proto2 = TrailModule.prototype;
        /**
         * @en Get trail model
         * @zh 获取拖尾模型
         * @return Model of this trail and type is scene.Model
         */
        _proto2.getModel = function getModel() {
          return this._trailModel;
        }

        /**
         * 轨迹设定时的坐标系。
         */;

        function TrailModule() {
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          this._enable = _initializer && _initializer();
          /**
           * 设定粒子生成轨迹的方式。
           */
          this.mode = _initializer2 && _initializer2();
          /**
           * 轨迹存在的生命周期。
           */
          this.lifeTime = _initializer3 && _initializer3();
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          this._minParticleDistance = _initializer4 && _initializer4();
          /**
           * 粒子本身是否存在。
           */
          this.existWithParticles = _initializer5 && _initializer5();
          /**
           * 设定纹理填充方式。
           */
          this.textureMode = _initializer6 && _initializer6();
          this.widthFromParticle = _initializer7 && _initializer7();
          /**
           * 控制轨迹长度的曲线。
           */
          this.widthRatio = _initializer8 && _initializer8();
          this.colorFromParticle = _initializer9 && _initializer9();
          this.colorOverTrail = _initializer10 && _initializer10();
          this.colorOvertime = _initializer11 && _initializer11();
          this._space = _initializer12 && _initializer12();
          this._particleSystem = _initializer13 && _initializer13();
          this._minSquaredDistance = 0;
          this._vertSize = void 0;
          this._trailNum = 0;
          this._trailLifetime = 0;
          this.vbOffset = 0;
          this.ibOffset = 0;
          this._trailSegments = null;
          this._particleTrail = void 0;
          this._trailModel = null;
          this._subMeshData = null;
          this._vertAttrs = void 0;
          this._vbF32 = null;
          this._vbUint32 = null;
          this._iBuffer = null;
          this._needTransform = false;
          this._material = null;
          this._psTransform = new Mat4();
          this._iaVertCount = 0;
          this._iaIndexCount = 0;
          this._inited = void 0;
          this._vertAttrs = [new Attribute(AttributeName.ATTR_POSITION, Format.RGB32F),
          // xyz:position
          new Attribute(AttributeName.ATTR_TEX_COORD, Format.RGBA32F),
          // x:index y:size zw:texcoord
          // new Attribute(AttributeName.ATTR_TEX_COORD2, Format.RGB32F), // <wireframe debug>
          new Attribute(AttributeName.ATTR_TEX_COORD1, Format.RGB32F),
          // xyz:velocity
          new Attribute(AttributeName.ATTR_COLOR, Format.RGBA8, true)];
          this._vertSize = 0;
          for (var _iterator = _createForOfIteratorHelperLoose(this._vertAttrs), _step; !(_step = _iterator()).done;) {
            var a = _step.value;
            this._vertSize += FormatInfos[a.format].size;
          }
          this._particleTrail = new Map();
          this._inited = false;
        }
        _proto2.onInit = function onInit(ps) {
          this._particleSystem = ps;
          this.minParticleDistance = this._minParticleDistance;
          var burstCount = 0;
          var psTime = ps.startLifetime.getMax();
          var psRate = ps.rateOverTime.getMax();
          var duration = ps.duration;
          for (var i = 0, len = ps.bursts.length; i < len; i++) {
            var b = ps.bursts[i];
            burstCount += b.getMaxCount(ps) * Math.ceil(psTime / duration);
          }
          if (this.lifeTime.getMax() < 1.0) {
            warnID(6036);
          }
          this._trailNum = Math.ceil(psTime * Math.ceil(this.lifeTime.getMax()) * 60 * (psRate * duration + burstCount));
          this._trailSegments = new Pool(function () {
            return new TrailSegment(10);
          }, Math.ceil(psRate * duration), function (obj) {
            return obj.trailElements.length = 0;
          });
          if (this._enable) {
            this.enable = this._enable;
          }
          this._inited = true;
        };
        _proto2.onEnable = function onEnable() {
          this._attachToScene();
        };
        _proto2.onDisable = function onDisable() {
          this._particleTrail.clear();
          this._detachFromScene();
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto2._attachToScene = function _attachToScene() {
          if (this._trailModel) {
            if (this._trailModel.scene) {
              this._detachFromScene();
            }
            this._particleSystem._getRenderScene().addModel(this._trailModel);
          }
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto2._detachFromScene = function _detachFromScene() {
          if (this._trailModel && this._trailModel.scene) {
            this._trailModel.scene.removeModel(this._trailModel);
          }
        };
        _proto2.destroy = function destroy() {
          this.destroySubMeshData();
          if (this._trailModel) {
            director.root.destroyModel(this._trailModel);
            this._trailModel = null;
          }
          if (this._trailSegments) {
            this._trailSegments.destroy();
            this._trailSegments = null;
          }
        };
        _proto2.play = function play() {
          if (this._trailModel && this._enable) {
            this._trailModel.enabled = true;
          }
        };
        _proto2.clear = function clear() {
          if (this.enable) {
            var trailIter = this._particleTrail.values();
            var trail = trailIter.next();
            while (!trail.done) {
              trail.value.clear();
              trail = trailIter.next();
            }
            this._particleTrail.clear();
            this.updateRenderData();
            if (this._trailModel) this._trailModel.enabled = false;
          }
        };
        _proto2.updateMaterial = function updateMaterial() {
          if (this._particleSystem) {
            this._material = this._particleSystem.getMaterialInstance(1) || this._particleSystem.processor._defaultTrailMat;
            if (this._trailModel) {
              this._trailModel.setSubModelMaterial(0, this._material);
            }
          }
        };
        _proto2.update = function update() {
          this._trailLifetime = this.lifeTime.evaluate(this._particleSystem._time, 1);
          if (this.space === Space.World && this._particleSystem._simulationSpace === Space.Local) {
            this._needTransform = true;
            this._particleSystem.node.getWorldMatrix(this._psTransform);
            this._particleSystem.node.getWorldRotation(_temp_quat);
          } else {
            this._needTransform = false;
          }
        };
        _proto2.animate = function animate(p, scaledDt) {
          if (!this._trailSegments) {
            return;
          }
          if (p.loopCount > p.lastLoop) {
            if (p.trailDelay > 1) {
              p.lastLoop = p.loopCount;
              p.trailDelay = 0;
            } else {
              p.trailDelay++;
            }
            return;
          }
          var trail = this._particleTrail.get(p);
          if (!trail) {
            trail = this._trailSegments.alloc();
            this._particleTrail.set(p, trail);
            // Avoid position and trail are one frame apart at the end of the particle animation.
            return;
          }
          var lastSeg = trail.getElement(trail.end - 1);
          if (this._needTransform) {
            Vec3.transformMat4(_temp_vec3, p.position, this._psTransform);
          } else {
            Vec3.copy(_temp_vec3, p.position);
          }
          if (lastSeg) {
            trail.iterateElement(this, this._updateTrailElement, p, scaledDt);
            if (Vec3.squaredDistance(lastSeg.position, _temp_vec3) < this._minSquaredDistance) {
              return;
            }
          }
          lastSeg = trail.addElement();
          if (!lastSeg) {
            return;
          }
          Vec3.copy(lastSeg.position, _temp_vec3);
          lastSeg.lifetime = 0;
          if (this.widthFromParticle) {
            lastSeg.width = p.size.x * this.widthRatio.evaluate(0, 1);
          } else {
            lastSeg.width = this.widthRatio.evaluate(0, 1);
          }
          var trailNum = trail.count();
          if (trailNum === 2) {
            var lastSecondTrail = trail.getElement(trail.end - 2);
            Vec3.subtract(lastSecondTrail.velocity, lastSeg.position, lastSecondTrail.position);
          } else if (trailNum > 2) {
            var _lastSecondTrail = trail.getElement(trail.end - 2);
            var lastThirdTrail = trail.getElement(trail.end - 3);
            Vec3.subtract(_temp_vec3, lastThirdTrail.position, _lastSecondTrail.position);
            Vec3.subtract(_temp_vec3_1, lastSeg.position, _lastSecondTrail.position);
            Vec3.subtract(_lastSecondTrail.velocity, _temp_vec3_1, _temp_vec3);
            if (Vec3.equals(Vec3.ZERO, _lastSecondTrail.velocity)) {
              Vec3.copy(_lastSecondTrail.velocity, _temp_vec3);
            }
            Vec3.normalize(_lastSecondTrail.velocity, _lastSecondTrail.velocity);
            this._checkDirectionReverse(_lastSecondTrail, lastThirdTrail);
          }
          if (this.colorFromParticle) {
            lastSeg.color.set(p.color);
          } else {
            lastSeg.color.set(this.colorOvertime.evaluate(0, 1));
          }
        };
        _proto2.removeParticle = function removeParticle(p) {
          var trail = this._particleTrail.get(p);
          if (trail && this._trailSegments) {
            trail.clear();
            this._trailSegments.free(trail);
            this._particleTrail["delete"](p);
          }
        };
        _proto2.updateRenderData = function updateRenderData() {
          this.vbOffset = 0;
          this.ibOffset = 0;
          for (var _iterator2 = _createForOfIteratorHelperLoose(this._particleTrail.keys()), _step2; !(_step2 = _iterator2()).done;) {
            var p = _step2.value;
            var trailSeg = this._particleTrail.get(p);
            if (trailSeg.start === -1) {
              continue;
            }
            var indexOffset = this.vbOffset * 4 / this._vertSize;
            var end = trailSeg.start >= trailSeg.end ? trailSeg.end + trailSeg.trailElements.length : trailSeg.end;
            var trailNum = end - trailSeg.start;
            // const lastSegRatio = vec3.distance(trailSeg.getTailElement()!.position, p.position) / this._minParticleDistance;
            var textCoordSeg = 1 / trailNum /* - 1 + lastSegRatio */;
            var startSegEle = trailSeg.trailElements[trailSeg.start];
            this._fillVertexBuffer(startSegEle, this.colorOverTrail.evaluate(1, 1), indexOffset, 1, 0, NEXT_TRIANGLE_INDEX);
            for (var i = trailSeg.start + 1; i < end; i++) {
              var segEle = trailSeg.trailElements[i % trailSeg.trailElements.length];
              var j = i - trailSeg.start;
              this._fillVertexBuffer(segEle, this.colorOverTrail.evaluate(1 - j / trailNum, 1), indexOffset, 1 - j * textCoordSeg, j, PRE_TRIANGLE_INDEX | NEXT_TRIANGLE_INDEX);
            }
            if (this._needTransform) {
              Vec3.transformMat4(_temp_trailEle.position, p.position, this._psTransform);
            } else {
              Vec3.copy(_temp_trailEle.position, p.position);
            }

            // refresh particle node position to update emit position
            var trailModel = this._trailModel;
            if (trailModel) {
              trailModel.node.invalidateChildren(TransformBit.POSITION);
            }
            if (trailNum === 1 || trailNum === 2) {
              var lastSecondTrail = trailSeg.getElement(trailSeg.end - 1);
              Vec3.subtract(lastSecondTrail.velocity, _temp_trailEle.position, lastSecondTrail.position);
              this._vbF32[this.vbOffset - this._vertSize / 4 - 4] = lastSecondTrail.velocity.x;
              this._vbF32[this.vbOffset - this._vertSize / 4 - 3] = lastSecondTrail.velocity.y;
              this._vbF32[this.vbOffset - this._vertSize / 4 - 2] = lastSecondTrail.velocity.z;
              this._vbF32[this.vbOffset - 4] = lastSecondTrail.velocity.x;
              this._vbF32[this.vbOffset - 3] = lastSecondTrail.velocity.y;
              this._vbF32[this.vbOffset - 2] = lastSecondTrail.velocity.z;
              Vec3.subtract(_temp_trailEle.velocity, _temp_trailEle.position, lastSecondTrail.position);
              this._checkDirectionReverse(_temp_trailEle, lastSecondTrail);
            } else if (trailNum > 2) {
              var _lastSecondTrail2 = trailSeg.getElement(trailSeg.end - 1);
              var lastThirdTrail = trailSeg.getElement(trailSeg.end - 2);
              Vec3.subtract(_temp_vec3, lastThirdTrail.position, _lastSecondTrail2.position);
              Vec3.subtract(_temp_vec3_1, _temp_trailEle.position, _lastSecondTrail2.position);
              Vec3.normalize(_temp_vec3, _temp_vec3);
              Vec3.normalize(_temp_vec3_1, _temp_vec3_1);
              Vec3.subtract(_lastSecondTrail2.velocity, _temp_vec3_1, _temp_vec3);
              Vec3.normalize(_lastSecondTrail2.velocity, _lastSecondTrail2.velocity);
              this._checkDirectionReverse(_lastSecondTrail2, lastThirdTrail);
              // refresh last trail segment data
              this.vbOffset -= this._vertSize / 4 * 2;
              this.ibOffset -= 6;
              // _bcIdx = (_bcIdx - 6 + 9) % 9;  // <wireframe debug>
              this._fillVertexBuffer(_lastSecondTrail2, this.colorOverTrail.evaluate(textCoordSeg, 1), indexOffset, textCoordSeg, trailNum - 1, PRE_TRIANGLE_INDEX | NEXT_TRIANGLE_INDEX);
              Vec3.subtract(_temp_trailEle.velocity, _temp_trailEle.position, _lastSecondTrail2.position);
              Vec3.normalize(_temp_trailEle.velocity, _temp_trailEle.velocity);
              this._checkDirectionReverse(_temp_trailEle, _lastSecondTrail2);
            }
            if (this.widthFromParticle) {
              _temp_trailEle.width = p.size.x * this.widthRatio.evaluate(0, 1);
            } else {
              _temp_trailEle.width = this.widthRatio.evaluate(0, 1);
            }
            _temp_trailEle.color = p.color;
            if (Vec3.equals(_temp_trailEle.velocity, Vec3.ZERO)) {
              this.ibOffset -= 3;
            } else {
              this._fillVertexBuffer(_temp_trailEle, this.colorOverTrail.evaluate(0, 1), indexOffset, 0, trailNum, PRE_TRIANGLE_INDEX);
            }
          }
          if (this._trailModel) {
            this._trailModel.enabled = this.ibOffset > 0;
          }
        };
        _proto2.updateIA = function updateIA(count) {
          var subModels = this._trailModel && this._trailModel.subModels;
          if (subModels && subModels.length > 0) {
            var subModel = subModels[0];
            subModel.inputAssembler.vertexBuffers[0].update(this._vbF32);
            subModel.inputAssembler.indexBuffer.update(this._iBuffer);
            subModel.inputAssembler.firstIndex = 0;
            subModel.inputAssembler.indexCount = count;
            subModel.inputAssembler.vertexCount = this._iaVertCount;
          }
        };
        _proto2.beforeRender = function beforeRender() {
          this.updateIA(this.ibOffset);
        };
        _proto2._createModel = function _createModel() {
          if (this._trailModel) {
            return;
          }
          this._trailModel = cclegacy.director.root.createModel(scene.Model);
        };
        _proto2.rebuild = function rebuild() {
          var device = director.root.device;
          var vertexBuffer = device.createBuffer(new BufferInfo(BufferUsageBit.VERTEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.HOST | MemoryUsageBit.DEVICE, this._vertSize * (this._trailNum + 1) * 2, this._vertSize));
          var vBuffer = new ArrayBuffer(this._vertSize * (this._trailNum + 1) * 2);
          this._vbF32 = new Float32Array(vBuffer);
          this._vbUint32 = new Uint32Array(vBuffer);
          vertexBuffer.update(vBuffer);
          var indexBuffer = device.createBuffer(new BufferInfo(BufferUsageBit.INDEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.HOST | MemoryUsageBit.DEVICE, Math.max(1, this._trailNum) * 6 * Uint16Array.BYTES_PER_ELEMENT, Uint16Array.BYTES_PER_ELEMENT));
          this._iBuffer = new Uint16Array(Math.max(1, this._trailNum) * 6);
          indexBuffer.update(this._iBuffer);
          this._iaVertCount = (this._trailNum + 1) * 2;
          this._iaIndexCount = this._trailNum * 6;
          this._subMeshData = new RenderingSubMesh([vertexBuffer], this._vertAttrs, PrimitiveMode.TRIANGLE_LIST, indexBuffer);
          var trailModel = this._trailModel;
          if (trailModel && this._material) {
            trailModel.node = trailModel.transform = this._particleSystem.node;
            trailModel.visFlags = this._particleSystem.visibility;
            trailModel.initSubModel(0, this._subMeshData, this._material);
            trailModel.enabled = true;
          }
        };
        _proto2._updateTrailElement = function _updateTrailElement(module, trailEle, p, dt) {
          trailEle.lifetime += dt;
          if (module.colorFromParticle) {
            trailEle.color.set(p.color);
            trailEle.color.multiply(module.colorOvertime.evaluate(1.0 - p.remainingLifetime / p.startLifetime, 1));
          } else {
            trailEle.color.set(module.colorOvertime.evaluate(1.0 - p.remainingLifetime / p.startLifetime, 1));
          }
          if (module.widthFromParticle) {
            trailEle.width = p.size.x * module.widthRatio.evaluate(trailEle.lifetime / module._trailLifetime, 1);
          } else {
            trailEle.width = module.widthRatio.evaluate(trailEle.lifetime / module._trailLifetime, 1);
          }
          return trailEle.lifetime > module._trailLifetime;
        };
        _proto2._fillVertexBuffer = function _fillVertexBuffer(trailSeg, colorModifer, indexOffset, xTexCoord, trailEleIdx, indexSet) {
          this._vbF32[this.vbOffset++] = trailSeg.position.x;
          this._vbF32[this.vbOffset++] = trailSeg.position.y;
          this._vbF32[this.vbOffset++] = trailSeg.position.z;
          this._vbF32[this.vbOffset++] = trailSeg.direction;
          this._vbF32[this.vbOffset++] = trailSeg.width;
          this._vbF32[this.vbOffset++] = xTexCoord;
          this._vbF32[this.vbOffset++] = 0;
          // this._vbF32![this.vbOffset++] = barycentric[_bcIdx++];  // <wireframe debug>
          // this._vbF32![this.vbOffset++] = barycentric[_bcIdx++];
          // this._vbF32![this.vbOffset++] = barycentric[_bcIdx++];
          // _bcIdx %= 9;
          this._vbF32[this.vbOffset++] = trailSeg.velocity.x;
          this._vbF32[this.vbOffset++] = trailSeg.velocity.y;
          this._vbF32[this.vbOffset++] = trailSeg.velocity.z;
          _temp_color.set(trailSeg.color);
          _temp_color.multiply(colorModifer);
          this._vbUint32[this.vbOffset++] = _temp_color._val;
          this._vbF32[this.vbOffset++] = trailSeg.position.x;
          this._vbF32[this.vbOffset++] = trailSeg.position.y;
          this._vbF32[this.vbOffset++] = trailSeg.position.z;
          this._vbF32[this.vbOffset++] = 1 - trailSeg.direction;
          this._vbF32[this.vbOffset++] = trailSeg.width;
          this._vbF32[this.vbOffset++] = xTexCoord;
          this._vbF32[this.vbOffset++] = 1;
          // this._vbF32![this.vbOffset++] = barycentric[_bcIdx++];  // <wireframe debug>
          // this._vbF32![this.vbOffset++] = barycentric[_bcIdx++];
          // this._vbF32![this.vbOffset++] = barycentric[_bcIdx++];
          // _bcIdx %= 9;
          this._vbF32[this.vbOffset++] = trailSeg.velocity.x;
          this._vbF32[this.vbOffset++] = trailSeg.velocity.y;
          this._vbF32[this.vbOffset++] = trailSeg.velocity.z;
          this._vbUint32[this.vbOffset++] = _temp_color._val;
          if (indexSet & PRE_TRIANGLE_INDEX) {
            this._iBuffer[this.ibOffset++] = indexOffset + 2 * trailEleIdx;
            this._iBuffer[this.ibOffset++] = indexOffset + 2 * trailEleIdx - 1;
            this._iBuffer[this.ibOffset++] = indexOffset + 2 * trailEleIdx + 1;
          }
          if (indexSet & NEXT_TRIANGLE_INDEX) {
            this._iBuffer[this.ibOffset++] = indexOffset + 2 * trailEleIdx;
            this._iBuffer[this.ibOffset++] = indexOffset + 2 * trailEleIdx + 1;
            this._iBuffer[this.ibOffset++] = indexOffset + 2 * trailEleIdx + 2;
          }
        };
        _proto2._checkDirectionReverse = function _checkDirectionReverse(currElement, prevElement) {
          if (Vec3.dot(currElement.velocity, prevElement.velocity) < DIRECTION_THRESHOLD) {
            currElement.direction = 1 - prevElement.direction;
          } else {
            currElement.direction = prevElement.direction;
          }
        };
        _proto2.destroySubMeshData = function destroySubMeshData() {
          if (this._subMeshData) {
            this._subMeshData.destroy();
            this._subMeshData = null;
          }
        }

        // <debug use>
        // private _printVB() {
        //     let log = new String();
        //     for (let i = 0; i < this.vbOffset; i++) {
        //         log += 'pos:' + this._vbF32![i++].toFixed(2) + ',' + this._vbF32![i++].toFixed(2) + ',' +
        //                this._vbF32![i++].toFixed(2) + ' dir:' + this._vbF32![i++].toFixed(0) + ' ';
        //         i += 6;
        //         log += 'vel:' + this._vbF32![i++].toFixed(2) + ',' + this._vbF32![i++].toFixed(2) + ',' + this._vbF32![i++].toFixed(2) + '\n';
        //     }
        //     if (log.length > 0) {
        //         console.log(log);
        //     }
        // }
        ;
        _createClass(TrailModule, [{
          key: "enable",
          get:
          /**
           * 是否启用。
           */
          function get() {
            return this._enable;
          },
          set: function set(val) {
            if (val === this._enable && this._trailModel) {
              return;
            }
            if (val && !this._enable) {
              this._enable = val;
              if (this._particleSystem.processor) this._particleSystem.processor.updateTrailMaterial();
            }
            if (val && !this._trailModel) {
              this._createModel();
              this.rebuild();
            }
            this._enable = val;
            if (this._trailModel) {
              this._trailModel.enabled = val;
            }
            if (val) this.onEnable();else this.onDisable();
          }
        }, {
          key: "minParticleDistance",
          get:
          /**
           * 每个轨迹粒子之间的最小间距。
           */
          function get() {
            return this._minParticleDistance;
          },
          set: function set(val) {
            this._minParticleDistance = val;
            this._minSquaredDistance = val * val;
          }
        }, {
          key: "space",
          get: function get() {
            return this._space;
          },
          set: function set(val) {
            this._space = val;
            var ps = this._particleSystem;
            if (ps && ps.processor) {
              ps.processor.updateTrailMaterial();
            }
          }
        }, {
          key: "inited",
          get:
          /**
           * @engineInternal
           */
          function get() {
            return this._inited;
          }
        }]);
        return TrailModule;
      }(), (_applyDecoratedDescriptor(_class3.prototype, "enable", [_dec2], Object.getOwnPropertyDescriptor(_class3.prototype, "enable"), _class3.prototype), _initializer = _applyDecoratedInitializer(_class3.prototype, "_enable", [serializable], function () {
        return false;
      }), _initializer2 = _applyDecoratedInitializer(_class3.prototype, "mode", [_dec3, serializable, _dec4, _dec5], function () {
        return TrailMode.Particles;
      }), _initializer3 = _applyDecoratedInitializer(_class3.prototype, "lifeTime", [_dec6, serializable, _dec7, _dec8, _dec9], function () {
        return new CurveRange();
      }), _initializer4 = _applyDecoratedInitializer(_class3.prototype, "_minParticleDistance", [serializable], function () {
        return 0.1;
      }), _applyDecoratedDescriptor(_class3.prototype, "minParticleDistance", [_dec10, _dec11], Object.getOwnPropertyDescriptor(_class3.prototype, "minParticleDistance"), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, "space", [_dec12, _dec13, _dec14], Object.getOwnPropertyDescriptor(_class3.prototype, "space"), _class3.prototype), _initializer5 = _applyDecoratedInitializer(_class3.prototype, "existWithParticles", [serializable], function () {
        return true;
      }), _initializer6 = _applyDecoratedInitializer(_class3.prototype, "textureMode", [_dec15, serializable, _dec16, _dec17], function () {
        return TextureMode.Stretch;
      }), _initializer7 = _applyDecoratedInitializer(_class3.prototype, "widthFromParticle", [serializable, _dec18, _dec19], function () {
        return true;
      }), _initializer8 = _applyDecoratedInitializer(_class3.prototype, "widthRatio", [_dec20, serializable, _dec21, _dec22, _dec23], function () {
        return new CurveRange();
      }), _initializer9 = _applyDecoratedInitializer(_class3.prototype, "colorFromParticle", [serializable, _dec24, _dec25], function () {
        return false;
      }), _initializer10 = _applyDecoratedInitializer(_class3.prototype, "colorOverTrail", [_dec26, serializable, _dec27, _dec28], function () {
        return new GradientRange();
      }), _initializer11 = _applyDecoratedInitializer(_class3.prototype, "colorOvertime", [_dec29, serializable, _dec30, _dec31], function () {
        return new GradientRange();
      }), _initializer12 = _applyDecoratedInitializer(_class3.prototype, "_space", [_dec32], function () {
        return Space.World;
      }), _initializer13 = _applyDecoratedInitializer(_class3.prototype, "_particleSystem", [serializable], function () {
        return null;
      })), _class3)) || _class2));
    }
  };
});
System.register("q-bundled:///fs/cocos/particle/particle-culler.js", ["./particle.js", "../scene-graph/node-enum.js", "./enum.js", "../core/index.js", "./particle-general-function.js", "./animator/curve-range.js"], function (_export, _context) {
  "use strict";

  var Particle, PARTICLE_MODULE_ORDER, TransformBit, RenderMode, Space, approx, EPSILON, Mat4, pseudoRandom, Quat, randomRangeInt, Vec3, Vec4, geometry, bits, isCurveTwoValues, particleEmitZAxis, Mode, _node_mat, _node_parent_inv, _node_rol, _node_scale, _anim_module, ParticleCuller;
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
    setters: [function (_particleJs) {
      Particle = _particleJs.Particle;
      PARTICLE_MODULE_ORDER = _particleJs.PARTICLE_MODULE_ORDER;
    }, function (_sceneGraphNodeEnumJs) {
      TransformBit = _sceneGraphNodeEnumJs.TransformBit;
    }, function (_enumJs) {
      RenderMode = _enumJs.RenderMode;
      Space = _enumJs.Space;
    }, function (_coreIndexJs) {
      approx = _coreIndexJs.approx;
      EPSILON = _coreIndexJs.EPSILON;
      Mat4 = _coreIndexJs.Mat4;
      pseudoRandom = _coreIndexJs.pseudoRandom;
      Quat = _coreIndexJs.Quat;
      randomRangeInt = _coreIndexJs.randomRangeInt;
      Vec3 = _coreIndexJs.Vec3;
      Vec4 = _coreIndexJs.Vec4;
      geometry = _coreIndexJs.geometry;
      bits = _coreIndexJs.bits;
    }, function (_particleGeneralFunctionJs) {
      isCurveTwoValues = _particleGeneralFunctionJs.isCurveTwoValues;
      particleEmitZAxis = _particleGeneralFunctionJs.particleEmitZAxis;
    }, function (_animatorCurveRangeJs) {
      Mode = _animatorCurveRangeJs.Mode;
    }],
    execute: function () {
      _node_mat = new Mat4();
      _node_parent_inv = new Mat4();
      _node_rol = new Quat();
      _node_scale = new Vec3();
      _anim_module = ['_colorOverLifetimeModule', '_sizeOvertimeModule', '_velocityOvertimeModule', '_forceOvertimeModule', '_limitVelocityOvertimeModule', '_rotationOvertimeModule', '_textureAnimationModule'];
      _export("ParticleCuller", ParticleCuller = /*#__PURE__*/function () {
        function ParticleCuller(ps) {
          this._particleSystem = void 0;
          this._processor = void 0;
          this._node = void 0;
          this._particlesAll = void 0;
          this._updateList = new Map();
          this._animateList = new Map();
          this._runAnimateList = new Array();
          this._localMat = new Mat4();
          this._gravity = new Vec4();
          this.minPos = new Vec3();
          this.maxPos = new Vec3();
          this._nodePos = new Vec3();
          this._nodeSize = new Vec3();
          this._particleSystem = ps;
          this._processor = this._particleSystem.processor;
          this._node = ps.node;
          this._particlesAll = [];
          this._initModuleList();
        }
        var _proto = ParticleCuller.prototype;
        _proto._updateBoundingNode = function _updateBoundingNode() {
          this._nodeSize.set(this.maxPos.x - this.minPos.x, this.maxPos.y - this.minPos.y, this.maxPos.z - this.minPos.z);
          this._nodePos.set(this.minPos.x + this._nodeSize.x * 0.5, this.minPos.y + this._nodeSize.y * 0.5, this.minPos.z + this._nodeSize.z * 0.5);
        };
        _proto.setBoundingBoxSize = function setBoundingBoxSize(halfExt) {
          this.maxPos.x = this._nodePos.x + halfExt.x;
          this.maxPos.y = this._nodePos.y + halfExt.y;
          this.maxPos.z = this._nodePos.z + halfExt.z;
          this.minPos.x = this._nodePos.x - halfExt.x;
          this.minPos.y = this._nodePos.y - halfExt.y;
          this.minPos.z = this._nodePos.z - halfExt.z;
          this._updateBoundingNode();
        };
        _proto.setBoundingBoxCenter = function setBoundingBoxCenter(px, py, pz) {
          this.maxPos.x = px + this._nodeSize.x * 0.5;
          this.maxPos.y = py + this._nodeSize.y * 0.5;
          this.maxPos.z = pz + this._nodeSize.z * 0.5;
          this.minPos.x = px - this._nodeSize.x * 0.5;
          this.minPos.y = py - this._nodeSize.y * 0.5;
          this.minPos.z = pz - this._nodeSize.z * 0.5;
          this._updateBoundingNode();
        };
        _proto._initModuleList = function _initModuleList() {
          var _this = this;
          _anim_module.forEach(function (val) {
            var pm = _this._particleSystem[val];
            if (pm && pm.enable) {
              if (pm.needUpdate) {
                _this._updateList[pm.name] = pm;
              }
              if (pm.needAnimate) {
                _this._animateList[pm.name] = pm;
              }
            }
          });

          // reorder
          this._runAnimateList.length = 0;
          for (var i = 0, len = PARTICLE_MODULE_ORDER.length; i < len; i++) {
            var p = this._animateList[PARTICLE_MODULE_ORDER[i]];
            if (p) {
              this._runAnimateList.push(p);
            }
          }
        };
        _proto._emit = function _emit(count, dt, particleLst) {
          var ps = this._particleSystem;
          var node = this._node;
          var loopDelta = ps.time % ps.duration / ps.duration; // loop delta value

          node.invalidateChildren(TransformBit.POSITION);
          if (ps.simulationSpace === Space.World) {
            node.getWorldMatrix(_node_mat);
            node.getWorldRotation(_node_rol);
          }
          for (var i = 0; i < count; ++i) {
            var particle = new Particle(ps);
            particle.particleSystem = ps;
            particle.reset();
            var rand = pseudoRandom(randomRangeInt(0, bits.INT_MAX));
            if (ps._shapeModule && ps._shapeModule.enable) {
              ps._shapeModule.emit(particle);
            } else {
              Vec3.set(particle.position, 0, 0, 0);
              Vec3.copy(particle.velocity, particleEmitZAxis);
            }
            if (ps._textureAnimationModule && ps._textureAnimationModule.enable) {
              ps._textureAnimationModule.init(particle);
            }
            var curveStartSpeed = ps.startSpeed.evaluate(loopDelta, rand);
            Vec3.multiplyScalar(particle.velocity, particle.velocity, curveStartSpeed);
            if (ps.simulationSpace === Space.World) {
              Vec3.transformMat4(particle.position, particle.position, _node_mat);
              Vec3.transformQuat(particle.velocity, particle.velocity, _node_rol);
            }
            Vec3.copy(particle.ultimateVelocity, particle.velocity);

            // apply startRotation.
            Vec3.set(particle.rotation, 0, 0, 0);

            // apply startSize.
            if (ps.startSize3D) {
              Vec3.set(particle.startSize, ps.startSizeX.evaluate(loopDelta, rand), ps.startSizeY.evaluate(loopDelta, rand), ps.startSizeZ.evaluate(loopDelta, rand));
            } else {
              Vec3.set(particle.startSize, ps.startSizeX.evaluate(loopDelta, rand), 1, 1);
              particle.startSize.y = particle.startSize.x;
            }
            Vec3.copy(particle.size, particle.startSize);

            // apply startLifetime.
            particle.startLifetime = ps.startLifetime.evaluate(loopDelta, rand) + dt;
            particle.remainingLifetime = particle.startLifetime;
            particleLst.push(particle);
          }
        };
        _proto._updateParticles = function _updateParticles(dt, particleLst) {
          var _this2 = this;
          var ps = this._particleSystem;
          ps.node.getWorldMatrix(_node_mat);
          switch (ps.scaleSpace) {
            case Space.Local:
              ps.node.getScale(_node_scale);
              break;
            case Space.World:
              ps.node.getWorldScale(_node_scale);
              break;
            default:
              break;
          }
          this._updateList.forEach(function (value, key) {
            value.update(ps.simulationSpace, _node_mat);
          });
          if (ps.simulationSpace === Space.Local) {
            var r = ps.node.getRotation();
            Mat4.fromQuat(this._localMat, r);
            this._localMat.transpose(); // just consider rotation, use transpose as invert
          }

          if (ps.node.parent) {
            ps.node.parent.getWorldMatrix(_node_parent_inv);
            _node_parent_inv.invert();
          }
          var _loop = function _loop() {
            var p = particleLst[i];
            p.remainingLifetime -= dt;
            Vec3.set(p.animatedVelocity, 0, 0, 0);

            // apply gravity when both the mode is not Constant and the value is not 0.
            var useGravity = ps.gravityModifier.mode !== Mode.Constant || ps.gravityModifier.constant !== 0;
            if (useGravity) {
              var rand = isCurveTwoValues(ps.gravityModifier) ? pseudoRandom(p.randomSeed) : 0;
              if (ps.simulationSpace === Space.Local) {
                var gravityFactor = -ps.gravityModifier.evaluate(1 - p.remainingLifetime / p.startLifetime, rand) * 9.8 * dt;
                _this2._gravity.x = 0.0;
                _this2._gravity.y = gravityFactor;
                _this2._gravity.z = 0.0;
                _this2._gravity.w = 1.0;
                if (!approx(gravityFactor, 0.0, EPSILON)) {
                  if (ps.node.parent) {
                    _this2._gravity = _this2._gravity.transformMat4(_node_parent_inv);
                  }
                  _this2._gravity = _this2._gravity.transformMat4(_this2._localMat);
                  p.velocity.x += _this2._gravity.x;
                  p.velocity.y += _this2._gravity.y;
                  p.velocity.z += _this2._gravity.z;
                }
              } else {
                // apply gravity.
                p.velocity.y -= ps.gravityModifier.evaluate(1 - p.remainingLifetime / p.startLifetime, rand) * 9.8 * dt;
              }
            }
            Vec3.copy(p.ultimateVelocity, p.velocity);
            _this2._runAnimateList.forEach(function (value) {
              value.animate(p, dt);
            });
            Vec3.scaleAndAdd(p.position, p.position, p.ultimateVelocity, dt); // apply velocity.
          };
          for (var i = 0; i < particleLst.length; ++i) {
            _loop();
          }
        };
        _proto._calculateBounding = function _calculateBounding(isInit) {
          var size = new Vec3();
          var position = new Vec3();
          var subPos = new Vec3();
          var addPos = new Vec3();
          var meshSize = new Vec3(1.0, 1.0, 1.0);
          if (this._processor.getInfo().renderMode === RenderMode.Mesh) {
            var mesh = this._processor.getInfo().mesh;
            if (mesh && mesh.struct.minPosition && mesh.struct.maxPosition) {
              var meshAABB = new geometry.AABB();
              geometry.AABB.fromPoints(meshAABB, mesh.struct.minPosition, mesh.struct.maxPosition);
              var meshMax = Math.max(meshAABB.halfExtents.x, meshAABB.halfExtents.y, meshAABB.halfExtents.z);
              meshSize.set(meshMax, meshMax, meshMax);
            }
          }
          var worldMat = this._particleSystem.node.worldMatrix;
          for (var i = 0; i < this._particlesAll.length; ++i) {
            var p = this._particlesAll[i];
            Vec3.multiply(size, _node_scale, p.size);
            Vec3.multiply(size, size, meshSize);
            position.set(p.position);
            if (this._particleSystem.simulationSpace !== Space.World) {
              Vec3.transformMat4(position, position, worldMat);
            }
            if (isInit && i === 0) {
              Vec3.subtract(this.minPos, position, size);
              Vec3.add(this.maxPos, position, size);
            } else {
              Vec3.subtract(subPos, position, size);
              Vec3.add(addPos, position, size);
              Vec3.min(this.minPos, this.minPos, subPos);
              Vec3.max(this.maxPos, this.maxPos, addPos);
            }
          }
        };
        _proto.calculatePositions = function calculatePositions() {
          this._emit(this._particleSystem.capacity, 0, this._particlesAll);
          var rand = isCurveTwoValues(this._particleSystem.startLifetime) ? pseudoRandom(randomRangeInt(0, bits.INT_MAX)) : 0;
          this._updateParticles(0, this._particlesAll);
          this._calculateBounding(true);
          this._updateParticles(this._particleSystem.startLifetime.evaluate(0, rand), this._particlesAll);
          this._calculateBounding(false);
          this._updateBoundingNode();
        };
        _proto.clear = function clear() {
          this._particlesAll.length = 0;
        };
        _proto.destroy = function destroy() {};
        return ParticleCuller;
      }());
    }
  };
});
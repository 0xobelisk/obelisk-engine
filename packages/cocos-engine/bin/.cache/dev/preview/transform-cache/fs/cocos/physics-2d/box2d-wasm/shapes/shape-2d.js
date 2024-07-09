System.register("q-bundled:///fs/cocos/physics-2d/box2d-wasm/shapes/shape-2d.js", ["../instantiated.js", "../../../../exports/physics-2d-framework.js", "../../../core/index.js", "../../../physics/framework/physics-enum.js"], function (_export, _context) {
  "use strict";

  var B2, getImplPtr, addImplPtrReference, addImplPtrReferenceWASM, removeImplPtrReference, removeImplPtrReferenceWASM, B2ObjectType, PhysicsSystem2D, RigidBody2D, PHYSICS_2D_PTM_RATIO, Rect, Vec3, PhysicsGroup, tempFilter, lowerBound, upperBound, B2Shape2D;
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
  function getFilter(shape) {
    var comp = shape.collider;
    if (comp.body) {
      tempFilter.categoryBits = comp.group === PhysicsGroup.DEFAULT ? comp.body.group : comp.group;
    } else {
      tempFilter.categoryBits = comp.group;
    }
    tempFilter.maskBits = PhysicsSystem2D.instance.collisionMatrix[tempFilter.categoryBits];
    return tempFilter;
  }
  return {
    setters: [function (_instantiatedJs) {
      B2 = _instantiatedJs.B2;
      getImplPtr = _instantiatedJs.getImplPtr;
      addImplPtrReference = _instantiatedJs.addImplPtrReference;
      addImplPtrReferenceWASM = _instantiatedJs.addImplPtrReferenceWASM;
      removeImplPtrReference = _instantiatedJs.removeImplPtrReference;
      removeImplPtrReferenceWASM = _instantiatedJs.removeImplPtrReferenceWASM;
      B2ObjectType = _instantiatedJs.B2ObjectType;
    }, function (_exportsPhysics2dFrameworkJs) {
      PhysicsSystem2D = _exportsPhysics2dFrameworkJs.PhysicsSystem2D;
      RigidBody2D = _exportsPhysics2dFrameworkJs.RigidBody2D;
      PHYSICS_2D_PTM_RATIO = _exportsPhysics2dFrameworkJs.PHYSICS_2D_PTM_RATIO;
    }, function (_coreIndexJs) {
      Rect = _coreIndexJs.Rect;
      Vec3 = _coreIndexJs.Vec3;
    }, function (_physicsFrameworkPhysicsEnumJs) {
      PhysicsGroup = _physicsFrameworkPhysicsEnumJs.PhysicsGroup;
    }],
    execute: function () {
      tempFilter = {
        categoryBits: 0,
        maskBits: 0,
        groupIndex: 0
      }; // new B2.Filter();
      lowerBound = {
        x: 0,
        y: 0
      };
      upperBound = {
        x: 0,
        y: 0
      };
      _export("B2Shape2D", B2Shape2D = /*#__PURE__*/function () {
        function B2Shape2D() {
          this._shapes = [];
          this._fixtures = [];
          //B2.Fixture ptr
          this._collider = null;
          this._body = null;
          this._inited = false;
          this._rect = new Rect();
        }
        var _proto = B2Shape2D.prototype;
        _proto.initialize = function initialize(comp) {
          this._collider = comp;
        };
        _proto.onLoad = function onLoad() {
          //empty
        };
        _proto.onEnable = function onEnable() {
          PhysicsSystem2D.instance._callAfterStep(this, this._init);
        };
        _proto.onDisable = function onDisable() {
          PhysicsSystem2D.instance._callAfterStep(this, this.destroy);
        };
        _proto.start = function start() {
          //empty
        };
        _proto.onGroupChanged = function onGroupChanged() {
          var filter = getFilter(this);
          this._fixtures.forEach(function (f) {
            B2.FixtureSetFilterData(f, filter);
          });
        };
        _proto.apply = function apply() {
          this.destroy();
          if (this.collider.enabledInHierarchy) {
            this._init();
          }
        };
        _proto.getFixtureIndex = function getFixtureIndex(fixture) {
          //B2.Fixture ptr
          return this._fixtures.indexOf(fixture);
        }

        //relativePositionX/Y : relative Position from shape to rigid body
        ;
        _proto._createShapes = function _createShapes(scaleX, scaleY, relativePositionX, relativePositionY) {
          return [];
        };
        _proto._init = function _init() {
          if (this._inited) return;
          var comp = this.collider;
          var scale = comp.node.worldScale;
          // relative Position from shape to rigid body
          var relativePosition = Vec3.ZERO;
          var body = comp.getComponent(RigidBody2D);

          //if rigid body is not attached to the same node of collider, this b2.shape is attached
          // to the groundRigidBody(pos zero, rot zero)
          if (body && body.impl && body.impl.impl) {
            this._body = body.impl.impl;
          } else {
            this._body = PhysicsSystem2D.instance.physicsWorld.groundBodyImpl;
            relativePosition = comp.node.worldPosition;
          }
          var shapes = scale.x === 0 && scale.y === 0 ? [] : this._createShapes(scale.x, scale.y, relativePosition.x, relativePosition.y);
          var filter = getFilter(this);
          for (var i = 0; i < shapes.length; i++) {
            var shape = shapes[i];
            var fixDef = PhysicsSystem2D.instance.physicsWorld.tempB2FixtureDefPtr;
            B2.FixtureDefSetAll(fixDef, shape, 0, comp.friction, comp.restitution, comp.density, comp.sensor, filter.categoryBits, filter.maskBits, filter.groupIndex);
            var fixture = B2.BodyCreateFixture(getImplPtr(this._body), fixDef);
            addImplPtrReference(B2ObjectType.Fixture, this, fixture);
            addImplPtrReferenceWASM(B2ObjectType.Fixture, fixture, fixture);
            if (body !== null && body !== void 0 && body.enabledContactListener) {
              PhysicsSystem2D.instance.physicsWorld.registerContactFixture(fixture);
            }
            this._shapes.push(shape);
            this._fixtures.push(fixture);
          }
          this._inited = true;
        };
        _proto.destroy = function destroy() {
          if (!this._inited) return;
          var fixtures = this._fixtures;
          var body = this._body;
          for (var i = fixtures.length - 1; i >= 0; i--) {
            var fixture = fixtures[i];
            //fixture.m_userData = null;
            removeImplPtrReference(B2ObjectType.Fixture, fixture);
            removeImplPtrReferenceWASM(B2ObjectType.Fixture, fixture);
            PhysicsSystem2D.instance.physicsWorld.unregisterContactFixture(fixture);
            if (body) {
              B2.BodyDestroyFixture(getImplPtr(body), fixture);
            }
          }
          this._body = null;
          this._fixtures.length = 0;
          this._shapes.length = 0;
          this._inited = false;
        };
        _createClass(B2Shape2D, [{
          key: "impl",
          get: function get() {
            return this._shapes;
          }
        }, {
          key: "collider",
          get: function get() {
            return this._collider;
          }
        }, {
          key: "worldAABB",
          get: function get() {
            var MAX = 10e6;
            var minX = MAX;
            var minY = MAX;
            var maxX = -MAX;
            var maxY = -MAX;
            var fixtures = this._fixtures;
            for (var i = 0; i < fixtures.length; i++) {
              var fixture = fixtures[i];
              var shape = B2.FixtureGetShape(fixture);
              var count = B2.ShapeGetChildCount(shape);
              for (var j = 0; j < count; j++) {
                var aabb = B2.FixtureGetAABB(fixture, j);
                lowerBound.x = aabb.lowerBound.x;
                lowerBound.y = aabb.lowerBound.y;
                upperBound.x = aabb.upperBound.x;
                upperBound.y = aabb.upperBound.y;
                if (B2.ShapeGetType(shape) === 2) {
                  //b2ShapeType.e_polygonShape
                  var skinWidth = B2.ShapeGetRadius(shape);
                  lowerBound.x += skinWidth;
                  lowerBound.y += skinWidth;
                  upperBound.x += skinWidth;
                  upperBound.y += skinWidth;
                }
                if (lowerBound.x < minX) minX = lowerBound.x;
                if (lowerBound.y < minY) minY = lowerBound.y;
                if (upperBound.x > maxX) maxX = upperBound.x;
                if (upperBound.y > maxY) maxY = upperBound.y;
              }
            }
            minX *= PHYSICS_2D_PTM_RATIO;
            minY *= PHYSICS_2D_PTM_RATIO;
            maxX *= PHYSICS_2D_PTM_RATIO;
            maxY *= PHYSICS_2D_PTM_RATIO;
            var r = this._rect;
            r.x = minX;
            r.y = minY;
            r.width = maxX - minX;
            r.height = maxY - minY;
            return r;
          }
        }]);
        return B2Shape2D;
      }());
    }
  };
});
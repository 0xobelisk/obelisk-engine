System.register("q-bundled:///fs/cocos/physics-2d/box2d-wasm/physics-contact.js", ["./instantiated.js", "../../core/index.js", "../framework/physics-types.js", "../framework/index.js"], function (_export, _context) {
  "use strict";

  var B2, B2ObjectType, addImplPtrReference, getTSObjectFromWASMObjectPtr, removeImplPtrReference, Vec2, PHYSICS_2D_PTM_RATIO, Contact2DType, PhysicsSystem2D, pools, pointCache, worldmanifold, ManifoldPoint, manifoldPointCache, manifold, impulse, PhysicsContact;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2017-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
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
    setters: [function (_instantiatedJs) {
      B2 = _instantiatedJs.B2;
      B2ObjectType = _instantiatedJs.B2ObjectType;
      addImplPtrReference = _instantiatedJs.addImplPtrReference;
      getTSObjectFromWASMObjectPtr = _instantiatedJs.getTSObjectFromWASMObjectPtr;
      removeImplPtrReference = _instantiatedJs.removeImplPtrReference;
    }, function (_coreIndexJs) {
      Vec2 = _coreIndexJs.Vec2;
    }, function (_frameworkPhysicsTypesJs) {
      PHYSICS_2D_PTM_RATIO = _frameworkPhysicsTypesJs.PHYSICS_2D_PTM_RATIO;
    }, function (_frameworkIndexJs) {
      Contact2DType = _frameworkIndexJs.Contact2DType;
      PhysicsSystem2D = _frameworkIndexJs.PhysicsSystem2D;
    }],
    execute: function () {
      pools = []; // temp world manifold
      pointCache = [new Vec2(), new Vec2()];
      worldmanifold = {
        points: [],
        separations: [],
        normal: new Vec2()
      };
      ManifoldPoint = function ManifoldPoint() {
        this.localPoint = new Vec2();
        this.normalImpulse = 0;
        this.tangentImpulse = 0;
      };
      manifoldPointCache = [new ManifoldPoint(), new ManifoldPoint()];
      manifold = {
        type: 0,
        localPoint: new Vec2(),
        localNormal: new Vec2(),
        points: []
      };
      impulse = {
        normalImpulses: [],
        tangentImpulses: []
      };
      _export("PhysicsContact", PhysicsContact = /*#__PURE__*/function () {
        function PhysicsContact() {
          this.colliderA = null;
          this.colliderB = null;
          this.disabled = false;
          this.disabledOnce = false;
          this._impulsePtr = 0;
          this._inverted = false;
          this._implPtr = 0;
          //wasm object pointer
          this._b2WorldmanifoldPtr = 0;
        }
        PhysicsContact.get = function get(b2contact) {
          var c = pools.pop();
          if (!c) {
            c = new PhysicsContact();
          }
          c.init(b2contact);
          return c;
        };
        PhysicsContact.put = function put(b2contact) {
          var c = getTSObjectFromWASMObjectPtr(B2ObjectType.Contact, b2contact);
          if (!c) return;
          pools.push(c);
          c.reset();
        };
        var _proto = PhysicsContact.prototype;
        //wasm object pointer
        _proto._setImpulse = function _setImpulse(impulse) {
          this._impulsePtr = impulse;
        };
        _proto.init = function init(b2contact) {
          var ab = B2.ContactGetFixture(b2contact);
          this.colliderA = getTSObjectFromWASMObjectPtr(B2ObjectType.Fixture, ab.x).collider;
          this.colliderB = getTSObjectFromWASMObjectPtr(B2ObjectType.Fixture, ab.y).collider;
          this.disabled = false;
          this.disabledOnce = false;
          this._impulsePtr = 0;
          this._inverted = false;
          this._implPtr = b2contact;
          addImplPtrReference(B2ObjectType.Contact, this, this._implPtr);
          this._b2WorldmanifoldPtr = B2.WorldManifoldNew();
        };
        _proto.reset = function reset() {
          this.setTangentSpeed(0);
          this.resetFriction();
          this.resetRestitution();
          this.colliderA = null;
          this.colliderB = null;
          this.disabled = false;
          this._impulsePtr = 0;
          removeImplPtrReference(B2ObjectType.Contact, this._implPtr);
          this._implPtr = 0;
          B2.WorldManifoldDelete(this._b2WorldmanifoldPtr);
          this._b2WorldmanifoldPtr = 0;
        };
        _proto.getWorldManifold = function getWorldManifold() {
          var points = worldmanifold.points;
          var separations = worldmanifold.separations;
          var normal = worldmanifold.normal;
          B2.ContactGetWorldManifold(this._implPtr, this._b2WorldmanifoldPtr);
          var b2Manifold = B2.ContactGetManifold(this._implPtr);
          var count = B2.ManifoldGetPointCount(b2Manifold);
          points.length = separations.length = count;
          for (var i = 0; i < count; i++) {
            var p = pointCache[i];
            p.x = B2.WorldManifoldGetPointValueX(this._b2WorldmanifoldPtr, i) * PHYSICS_2D_PTM_RATIO;
            p.y = B2.WorldManifoldGetPointValueY(this._b2WorldmanifoldPtr, i) * PHYSICS_2D_PTM_RATIO;
            points[i] = p;
            separations[i] = B2.WorldManifoldGetSeparationValue(this._b2WorldmanifoldPtr, i) * PHYSICS_2D_PTM_RATIO;
          }
          normal.x = B2.WorldManifoldGetNormalValueX(this._b2WorldmanifoldPtr);
          normal.y = B2.WorldManifoldGetNormalValueY(this._b2WorldmanifoldPtr);
          if (this._inverted) {
            normal.x *= -1;
            normal.y *= -1;
          }
          return worldmanifold;
        };
        _proto.getManifold = function getManifold() {
          var points = manifold.points;
          var localNormal = manifold.localNormal;
          var localPoint = manifold.localPoint;
          var b2Manifold = B2.ContactGetManifold(this._implPtr);
          var count = points.length = B2.ManifoldGetPointCount(b2Manifold);
          for (var i = 0; i < count; i++) {
            var p = manifoldPointCache[i];
            var b2p = B2.ManifoldGetManifoldPointPtr(b2Manifold, i); //B2.ManifoldPoint
            p.localPoint.x = B2.ManifoldPointGetLocalPointX(b2p) * PHYSICS_2D_PTM_RATIO;
            p.localPoint.y = B2.ManifoldPointGetLocalPointY(b2p) * PHYSICS_2D_PTM_RATIO;
            p.normalImpulse = B2.ManifoldPointGetNormalImpulse(b2p) * PHYSICS_2D_PTM_RATIO;
            p.tangentImpulse = B2.ManifoldPointGetTangentImpulse(b2p); //* PHYSICS_2D_PTM_RATIO;?
            points[i] = p;
          }
          localPoint.x = B2.ManifoldGetLocalPointValueX(b2Manifold) * PHYSICS_2D_PTM_RATIO;
          localPoint.y = B2.ManifoldGetLocalPointValueY(b2Manifold) * PHYSICS_2D_PTM_RATIO;
          localNormal.x = B2.ManifoldGetLocalNormalValueX(b2Manifold);
          localNormal.y = B2.ManifoldGetLocalNormalValueY(b2Manifold);
          manifold.type = B2.ManifoldGetType(b2Manifold);
          if (this._inverted) {
            localNormal.x *= -1;
            localNormal.y *= -1;
          }
          return manifold;
        };
        _proto.getImpulse = function getImpulse() {
          var b2impulse = this._impulsePtr;
          if (!b2impulse) return null;
          var normalImpulses = impulse.normalImpulses;
          var tangentImpulses = impulse.tangentImpulses;
          var count = B2.ContactImpulseGetCount(b2impulse);
          for (var i = 0; i < count; i++) {
            normalImpulses[i] = B2.ContactImpulseGetNormalImpulse(b2impulse, i) * PHYSICS_2D_PTM_RATIO;
            tangentImpulses[i] = B2.ContactImpulseGetTangentImpulse(b2impulse, i);
          }
          tangentImpulses.length = normalImpulses.length = count;
          return impulse;
        };
        _proto.emit = function emit(contactType) {
          var func = '';
          switch (contactType) {
            case Contact2DType.BEGIN_CONTACT:
              func = 'onBeginContact';
              break;
            case Contact2DType.END_CONTACT:
              func = 'onEndContact';
              break;
            case Contact2DType.PRE_SOLVE:
              func = 'onPreSolve';
              break;
            case Contact2DType.POST_SOLVE:
              func = 'onPostSolve';
              break;
            default:
              break;
          }
          var colliderA = this.colliderA;
          var colliderB = this.colliderB;
          var bodyA = colliderA.body;
          var bodyB = colliderB.body;
          if (bodyA.enabledContactListener) {
            colliderA === null || colliderA === void 0 ? void 0 : colliderA.emit(contactType, colliderA, colliderB, this);
          }
          if (bodyB.enabledContactListener) {
            colliderB === null || colliderB === void 0 ? void 0 : colliderB.emit(contactType, colliderB, colliderA, this);
          }
          if (bodyA.enabledContactListener || bodyB.enabledContactListener) {
            PhysicsSystem2D.instance.emit(contactType, colliderA, colliderB, this);
          }
          if (this.disabled || this.disabledOnce) {
            this.setEnabled(false);
            this.disabledOnce = false;
          }
        };
        _proto.setEnabled = function setEnabled(value) {
          B2.ContactSetEnabled(this._implPtr, value);
        };
        _proto.isTouching = function isTouching() {
          return B2.ContactIsTouching(this._implPtr);
        };
        _proto.setTangentSpeed = function setTangentSpeed(value) {
          B2.ContactSetTangentSpeed(this._implPtr, value);
        };
        _proto.getTangentSpeed = function getTangentSpeed() {
          return B2.ContactGetTangentSpeed(this._implPtr);
        };
        _proto.setFriction = function setFriction(value) {
          B2.ContactSetFriction(this._implPtr, value);
        };
        _proto.getFriction = function getFriction() {
          return B2.ContactGetFriction(this._implPtr);
        };
        _proto.resetFriction = function resetFriction() {
          B2.ContactResetFriction(this._implPtr);
        };
        _proto.setRestitution = function setRestitution(value) {
          B2.ContactSetRestitution(this._implPtr, value);
        };
        _proto.getRestitution = function getRestitution() {
          return B2.ContactGetRestitution(this._implPtr);
        };
        _proto.resetRestitution = function resetRestitution() {
          B2.ContactResetRestitution(this._implPtr);
        };
        return PhysicsContact;
      }());
    }
  };
});
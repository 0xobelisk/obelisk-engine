System.register("q-bundled:///fs/cocos/physics/cocos/builtin-shared-body.js", ["../../core/index.js", "./object/builtin-object.js", "../framework/index.js", "../framework/physics-enum.js"], function (_export, _context) {
  "use strict";

  var Mat4, Quat, Vec3, js, geometry, BuiltinObject, PhysicsSystem, PhysicsGroup, _class, m4_0, v3_0, v3_1, quat_0, BuiltinSharedBody;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  return {
    setters: [function (_coreIndexJs) {
      Mat4 = _coreIndexJs.Mat4;
      Quat = _coreIndexJs.Quat;
      Vec3 = _coreIndexJs.Vec3;
      js = _coreIndexJs.js;
      geometry = _coreIndexJs.geometry;
    }, function (_objectBuiltinObjectJs) {
      BuiltinObject = _objectBuiltinObjectJs.BuiltinObject;
    }, function (_frameworkIndexJs) {
      PhysicsSystem = _frameworkIndexJs.PhysicsSystem;
    }, function (_frameworkPhysicsEnumJs) {
      PhysicsGroup = _frameworkPhysicsEnumJs.PhysicsGroup;
    }],
    execute: function () {
      m4_0 = new Mat4();
      v3_0 = new Vec3();
      v3_1 = new Vec3();
      quat_0 = new Quat();
      /**
       * Built-in static collider, no physical forces involved
       */
      _export("BuiltinSharedBody", BuiltinSharedBody = /*#__PURE__*/function (_BuiltinObject) {
        _inheritsLoose(BuiltinSharedBody, _BuiltinObject);
        BuiltinSharedBody.getSharedBody = function getSharedBody(node, wrappedWorld, wrappedBody) {
          var key = node.uuid;
          var newSB;
          if (BuiltinSharedBody.sharedBodesMap.has(key)) {
            newSB = BuiltinSharedBody.sharedBodesMap.get(key);
          } else {
            newSB = new BuiltinSharedBody(node, wrappedWorld);
            var g = PhysicsGroup.DEFAULT;
            var m = PhysicsSystem.instance.collisionMatrix[g];
            newSB.collisionFilterGroup = g;
            newSB.collisionFilterMask = m;
            BuiltinSharedBody.sharedBodesMap.set(node.uuid, newSB);
          }
          if (wrappedBody) {
            newSB.wrappedBody = wrappedBody;
            var _g = wrappedBody.rigidBody.group;
            var _m = PhysicsSystem.instance.collisionMatrix[_g];
            newSB.collisionFilterGroup = _g;
            newSB.collisionFilterMask = _m;
          }
          return newSB;
        };
        function BuiltinSharedBody(node, world) {
          var _this;
          _this = _BuiltinObject.call(this) || this;
          _this._id = void 0;
          _this.index = -1;
          _this.ref = 0;
          _this.node = void 0;
          _this.world = void 0;
          _this.shapes = [];
          _this.wrappedBody = null;
          _this._id = BuiltinSharedBody.idCounter++;
          _this.node = node;
          _this.world = world;
          return _this;
        }
        var _proto = BuiltinSharedBody.prototype;
        _proto.intersects = function intersects(body) {
          for (var i = 0; i < this.shapes.length; i++) {
            var shapeA = this.shapes[i];
            for (var j = 0; j < body.shapes.length; j++) {
              var shapeB = body.shapes[j];
              if (shapeA.collider.needTriggerEvent || shapeB.collider.needTriggerEvent) {
                if (geometry.intersect.resolve(shapeA.worldShape, shapeB.worldShape)) {
                  this.world.shapeArr.push(shapeA);
                  this.world.shapeArr.push(shapeB);
                }
              }
            }
          }
        };
        _proto.addShape = function addShape(shape) {
          var i = this.shapes.indexOf(shape);
          if (i < 0) {
            this.shapes.push(shape);
          }
        };
        _proto.removeShape = function removeShape(shape) {
          var i = this.shapes.indexOf(shape);
          if (i >= 0) {
            js.array.fastRemoveAt(this.shapes, i);
          }
        };
        _proto.syncSceneToPhysics = function syncSceneToPhysics() {
          if (this.node.hasChangedFlags) {
            this.node.getWorldMatrix(m4_0);
            v3_0.set(this.node.worldPosition);
            quat_0.set(this.node.worldRotation);
            v3_1.set(this.node.worldScale);
            for (var i = 0; i < this.shapes.length; i++) {
              this.shapes[i].transform(m4_0, v3_0, quat_0, v3_1);
            }
          }
        };
        _proto.syncInitial = function syncInitial() {
          this.node.getWorldMatrix(m4_0);
          v3_0.set(this.node.worldPosition);
          quat_0.set(this.node.worldRotation);
          v3_1.set(this.node.worldScale);
          for (var i = 0; i < this.shapes.length; i++) {
            this.shapes[i].transform(m4_0, v3_0, quat_0, v3_1);
          }
        };
        _proto.destroy = function destroy() {
          BuiltinSharedBody.sharedBodesMap["delete"](this.node.uuid);
          this.node = null;
          this.world = null;
          this.shapes = null;
        };
        _createClass(BuiltinSharedBody, [{
          key: "id",
          get: function get() {
            return this._id;
          }

          /**
           * add or remove from world \
           * add, if enable \
           * remove, if disable & shapes.length == 0 & wrappedBody disable
           */
        }, {
          key: "enabled",
          set: function set(v) {
            if (v) {
              if (this.index < 0) {
                this.index = this.world.bodies.length;
                this.world.addSharedBody(this);
                this.syncInitial();
              }
            } else if (this.index >= 0) {
              var isRemove = this.shapes.length === 0;
              if (isRemove) {
                this.index = -1;
                this.world.removeSharedBody(this);
              }
            }
          }
        }, {
          key: "reference",
          set: function set(v) {
            // eslint-disable-next-line no-unused-expressions
            v ? this.ref++ : this.ref--;
            if (this.ref === 0) {
              this.destroy();
            }
          }

          /** id generator */
        }]);
        return BuiltinSharedBody;
      }(BuiltinObject));
      _class = BuiltinSharedBody;
      BuiltinSharedBody.sharedBodesMap = new Map();
      BuiltinSharedBody.idCounter = 0;
    }
  };
});
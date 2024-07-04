System.register("q-bundled:///fs/cocos/physics-2d/framework/physics-types.js", ["../../core/index.js"], function (_export, _context) {
  "use strict";

  var Enum, ERigidBody2DType, ECollider2DType, EJoint2DType, PhysicsGroup, ERaycast2DType, Contact2DType, EPhysics2DDrawFlags, PHYSICS_2D_PTM_RATIO;
  _export({
    ERigidBody2DType: void 0,
    ECollider2DType: void 0,
    EJoint2DType: void 0,
    PhysicsGroup: void 0,
    ERaycast2DType: void 0,
    EPhysics2DDrawFlags: void 0
  });
  return {
    setters: [function (_coreIndexJs) {
      Enum = _coreIndexJs.Enum;
    }],
    execute: function () {
      (function (ERigidBody2DType) {
        ERigidBody2DType[ERigidBody2DType["Static"] = 0] = "Static";
        ERigidBody2DType[ERigidBody2DType["Kinematic"] = 1] = "Kinematic";
        ERigidBody2DType[ERigidBody2DType["Dynamic"] = 2] = "Dynamic";
        ERigidBody2DType[ERigidBody2DType["Animated"] = 3] = "Animated";
      })(ERigidBody2DType || _export("ERigidBody2DType", ERigidBody2DType = {}));
      Enum(ERigidBody2DType);
      (function (ECollider2DType) {
        ECollider2DType[ECollider2DType["None"] = 0] = "None";
        ECollider2DType[ECollider2DType["BOX"] = 1] = "BOX";
        ECollider2DType[ECollider2DType["CIRCLE"] = 2] = "CIRCLE";
        ECollider2DType[ECollider2DType["POLYGON"] = 3] = "POLYGON";
      })(ECollider2DType || _export("ECollider2DType", ECollider2DType = {}));
      Enum(ECollider2DType);
      (function (EJoint2DType) {
        EJoint2DType[EJoint2DType["None"] = 0] = "None";
        EJoint2DType[EJoint2DType["DISTANCE"] = 1] = "DISTANCE";
        EJoint2DType[EJoint2DType["SPRING"] = 2] = "SPRING";
        EJoint2DType[EJoint2DType["WHEEL"] = 3] = "WHEEL";
        EJoint2DType[EJoint2DType["MOUSE"] = 4] = "MOUSE";
        EJoint2DType[EJoint2DType["FIXED"] = 5] = "FIXED";
        EJoint2DType[EJoint2DType["SLIDER"] = 6] = "SLIDER";
        EJoint2DType[EJoint2DType["RELATIVE"] = 7] = "RELATIVE";
        EJoint2DType[EJoint2DType["HINGE"] = 8] = "HINGE";
      })(EJoint2DType || _export("EJoint2DType", EJoint2DType = {}));
      Enum(EJoint2DType);
      (function (PhysicsGroup) {
        PhysicsGroup[PhysicsGroup["DEFAULT"] = 1] = "DEFAULT";
      })(PhysicsGroup || _export("PhysicsGroup", PhysicsGroup = {}));
      Enum(PhysicsGroup);

      /**
       * @en Enum for ERaycast2DType.
       * @zh 射线检测类型。
       * @enum ERaycast2DType.
       */
      (function (ERaycast2DType) {
        ERaycast2DType[ERaycast2DType["Closest"] = 0] = "Closest";
        ERaycast2DType[ERaycast2DType["Any"] = 1] = "Any";
        ERaycast2DType[ERaycast2DType["AllClosest"] = 2] = "AllClosest";
        ERaycast2DType[ERaycast2DType["All"] = 3] = "All";
      })(ERaycast2DType || _export("ERaycast2DType", ERaycast2DType = {}));
      _export("Contact2DType", Contact2DType = {
        None: 'none-contact',
        BEGIN_CONTACT: 'begin-contact',
        END_CONTACT: 'end-contact',
        PRE_SOLVE: 'pre-solve',
        POST_SOLVE: 'post-solve'
      });
      (function (EPhysics2DDrawFlags) {
        EPhysics2DDrawFlags[EPhysics2DDrawFlags["None"] = 0] = "None";
        EPhysics2DDrawFlags[EPhysics2DDrawFlags["Shape"] = 1] = "Shape";
        EPhysics2DDrawFlags[EPhysics2DDrawFlags["Joint"] = 2] = "Joint";
        EPhysics2DDrawFlags[EPhysics2DDrawFlags["Aabb"] = 4] = "Aabb";
        EPhysics2DDrawFlags[EPhysics2DDrawFlags["Pair"] = 8] = "Pair";
        EPhysics2DDrawFlags[EPhysics2DDrawFlags["CenterOfMass"] = 16] = "CenterOfMass";
        EPhysics2DDrawFlags[EPhysics2DDrawFlags["Particle"] = 32] = "Particle";
        EPhysics2DDrawFlags[EPhysics2DDrawFlags["Controller"] = 64] = "Controller";
        EPhysics2DDrawFlags[EPhysics2DDrawFlags["All"] = 63] = "All";
      })(EPhysics2DDrawFlags || _export("EPhysics2DDrawFlags", EPhysics2DDrawFlags = {}));
      _export("PHYSICS_2D_PTM_RATIO", PHYSICS_2D_PTM_RATIO = 32);
    }
  };
});
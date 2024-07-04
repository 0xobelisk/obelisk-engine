System.register("q-bundled:///fs/cocos/physics/framework/physics-enum.js", ["../../core/index.js"], function (_export, _context) {
  "use strict";

  var Enum, ERigidBodyType, EAxisDirection, ED6Axis, ESimplexType, EColliderType, EConstraintType, EConstraintMode, EDriverMode, ECharacterControllerType, PhysicsGroup, EPhysicsDrawFlags;
  _export({
    ERigidBodyType: void 0,
    EAxisDirection: void 0,
    ED6Axis: void 0,
    ESimplexType: void 0,
    EColliderType: void 0,
    EConstraintType: void 0,
    EConstraintMode: void 0,
    EDriverMode: void 0,
    ECharacterControllerType: void 0,
    PhysicsGroup: void 0,
    EPhysicsDrawFlags: void 0
  });
  return {
    setters: [function (_coreIndexJs) {
      Enum = _coreIndexJs.Enum;
    }],
    execute: function () {
      (function (ERigidBodyType) {
        ERigidBodyType[ERigidBodyType["DYNAMIC"] = 1] = "DYNAMIC";
        ERigidBodyType[ERigidBodyType["STATIC"] = 2] = "STATIC";
        ERigidBodyType[ERigidBodyType["KINEMATIC"] = 4] = "KINEMATIC";
      })(ERigidBodyType || _export("ERigidBodyType", ERigidBodyType = {}));
      Enum(ERigidBodyType);

      /**
       * @en
       * Axis Direction.
       * @zh
       * 轴方向。
       */
      (function (EAxisDirection) {
        EAxisDirection[EAxisDirection["X_AXIS"] = 0] = "X_AXIS";
        EAxisDirection[EAxisDirection["Y_AXIS"] = 1] = "Y_AXIS";
        EAxisDirection[EAxisDirection["Z_AXIS"] = 2] = "Z_AXIS";
      })(EAxisDirection || _export("EAxisDirection", EAxisDirection = {}));
      Enum(EAxisDirection);

      /**
       * @en
       * Degree of freedom.
       * @zh
       * 自由度。
       */
      (function (ED6Axis) {
        ED6Axis[ED6Axis["X"] = 0] = "X";
        ED6Axis[ED6Axis["Y"] = 1] = "Y";
        ED6Axis[ED6Axis["Z"] = 2] = "Z";
        ED6Axis[ED6Axis["SWING1"] = 3] = "SWING1";
        ED6Axis[ED6Axis["SWING2"] = 4] = "SWING2";
        ED6Axis[ED6Axis["TWIST"] = 5] = "TWIST";
      })(ED6Axis || _export("ED6Axis", ED6Axis = {}));
      Enum(ED6Axis);

      /**
       * @en
       * Simplex Type.
       * @zh
       * 单形体类型。
       */
      (function (ESimplexType) {
        ESimplexType[ESimplexType["VERTEX"] = 1] = "VERTEX";
        ESimplexType[ESimplexType["LINE"] = 2] = "LINE";
        ESimplexType[ESimplexType["TRIANGLE"] = 3] = "TRIANGLE";
        ESimplexType[ESimplexType["TETRAHEDRON"] = 4] = "TETRAHEDRON";
      })(ESimplexType || _export("ESimplexType", ESimplexType = {}));
      Enum(ESimplexType);

      /**
       * @en
       * Collider Type.
       * @zh
       * 碰撞体类型。
       */
      (function (EColliderType) {
        EColliderType[EColliderType["BOX"] = 0] = "BOX";
        EColliderType[EColliderType["SPHERE"] = 1] = "SPHERE";
        EColliderType[EColliderType["CAPSULE"] = 2] = "CAPSULE";
        EColliderType[EColliderType["CYLINDER"] = 3] = "CYLINDER";
        EColliderType[EColliderType["CONE"] = 4] = "CONE";
        EColliderType[EColliderType["MESH"] = 5] = "MESH";
        EColliderType[EColliderType["PLANE"] = 6] = "PLANE";
        EColliderType[EColliderType["SIMPLEX"] = 7] = "SIMPLEX";
        EColliderType[EColliderType["TERRAIN"] = 8] = "TERRAIN";
      })(EColliderType || _export("EColliderType", EColliderType = {}));
      Enum(EColliderType);

      /**
       * @en
       * Constraint Type.
       * @zh
       * 约束类型。
       */
      (function (EConstraintType) {
        EConstraintType[EConstraintType["POINT_TO_POINT"] = 0] = "POINT_TO_POINT";
        EConstraintType[EConstraintType["HINGE"] = 1] = "HINGE";
        EConstraintType[EConstraintType["FIXED"] = 2] = "FIXED";
        EConstraintType[EConstraintType["CONFIGURABLE"] = 3] = "CONFIGURABLE";
      })(EConstraintType || _export("EConstraintType", EConstraintType = {}));
      Enum(EConstraintType);

      /**
       * @en
       * Constraint Mode for degrees of freedom.
       * @zh
       * 自由度约束模式。
       */
      (function (EConstraintMode) {
        EConstraintMode[EConstraintMode["FREE"] = 0] = "FREE";
        EConstraintMode[EConstraintMode["LIMITED"] = 1] = "LIMITED";
        EConstraintMode[EConstraintMode["LOCKED"] = 2] = "LOCKED";
      })(EConstraintMode || _export("EConstraintMode", EConstraintMode = {}));
      Enum(EConstraintMode);

      /**
       * @en
       * Driver Type.
       * @zh
       * 驱动类型。
       */
      (function (EDriverMode) {
        EDriverMode[EDriverMode["DISABLED"] = 0] = "DISABLED";
        EDriverMode[EDriverMode["SERVO"] = 1] = "SERVO";
        EDriverMode[EDriverMode["INDUCTION"] = 2] = "INDUCTION";
      })(EDriverMode || _export("EDriverMode", EDriverMode = {}));
      Enum(EDriverMode);

      /**
       * @en
       * Character Controller Type.
       * @zh
       * 角色控制器类型。
       */
      (function (ECharacterControllerType) {
        ECharacterControllerType[ECharacterControllerType["BOX"] = 0] = "BOX";
        ECharacterControllerType[ECharacterControllerType["CAPSULE"] = 1] = "CAPSULE";
      })(ECharacterControllerType || _export("ECharacterControllerType", ECharacterControllerType = {}));
      Enum(ECharacterControllerType);

      /**
       * @en
       * Physics Group.
       * @zh
       * 物理分组。
       */
      (function (PhysicsGroup) {
        PhysicsGroup[PhysicsGroup["DEFAULT"] = 1] = "DEFAULT";
      })(PhysicsGroup || _export("PhysicsGroup", PhysicsGroup = {}));
      Enum(PhysicsGroup);
      (function (EPhysicsDrawFlags) {
        EPhysicsDrawFlags[EPhysicsDrawFlags["NONE"] = 0] = "NONE";
        EPhysicsDrawFlags[EPhysicsDrawFlags["WIRE_FRAME"] = 1] = "WIRE_FRAME";
        EPhysicsDrawFlags[EPhysicsDrawFlags["CONSTRAINT"] = 2] = "CONSTRAINT";
        EPhysicsDrawFlags[EPhysicsDrawFlags["AABB"] = 4] = "AABB";
      })(EPhysicsDrawFlags || _export("EPhysicsDrawFlags", EPhysicsDrawFlags = {}));
      Enum(EPhysicsDrawFlags);
    }
  };
});
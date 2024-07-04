System.register(['./index-ce98320e.js'], (function (exports) {
    'use strict';
    var Enum;
    return {
        setters: [function (module) {
            Enum = module.aa;
        }],
        execute: (function () {

            let ERigidBodyType; exports('E', ERigidBodyType);
            (function (ERigidBodyType) {
              ERigidBodyType[ERigidBodyType["DYNAMIC"] = 1] = "DYNAMIC";
              ERigidBodyType[ERigidBodyType["STATIC"] = 2] = "STATIC";
              ERigidBodyType[ERigidBodyType["KINEMATIC"] = 4] = "KINEMATIC";
            })(ERigidBodyType || (exports('E', ERigidBodyType = {})));
            Enum(ERigidBodyType);
            let EAxisDirection; exports('b', EAxisDirection);
            (function (EAxisDirection) {
              EAxisDirection[EAxisDirection["X_AXIS"] = 0] = "X_AXIS";
              EAxisDirection[EAxisDirection["Y_AXIS"] = 1] = "Y_AXIS";
              EAxisDirection[EAxisDirection["Z_AXIS"] = 2] = "Z_AXIS";
            })(EAxisDirection || (exports('b', EAxisDirection = {})));
            Enum(EAxisDirection);
            let ED6Axis; exports('h', ED6Axis);
            (function (ED6Axis) {
              ED6Axis[ED6Axis["X"] = 0] = "X";
              ED6Axis[ED6Axis["Y"] = 1] = "Y";
              ED6Axis[ED6Axis["Z"] = 2] = "Z";
              ED6Axis[ED6Axis["SWING1"] = 3] = "SWING1";
              ED6Axis[ED6Axis["SWING2"] = 4] = "SWING2";
              ED6Axis[ED6Axis["TWIST"] = 5] = "TWIST";
            })(ED6Axis || (exports('h', ED6Axis = {})));
            Enum(ED6Axis);
            let ESimplexType; exports('c', ESimplexType);
            (function (ESimplexType) {
              ESimplexType[ESimplexType["VERTEX"] = 1] = "VERTEX";
              ESimplexType[ESimplexType["LINE"] = 2] = "LINE";
              ESimplexType[ESimplexType["TRIANGLE"] = 3] = "TRIANGLE";
              ESimplexType[ESimplexType["TETRAHEDRON"] = 4] = "TETRAHEDRON";
            })(ESimplexType || (exports('c', ESimplexType = {})));
            Enum(ESimplexType);
            let EColliderType; exports('a', EColliderType);
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
            })(EColliderType || (exports('a', EColliderType = {})));
            Enum(EColliderType);
            let EConstraintType; exports('d', EConstraintType);
            (function (EConstraintType) {
              EConstraintType[EConstraintType["POINT_TO_POINT"] = 0] = "POINT_TO_POINT";
              EConstraintType[EConstraintType["HINGE"] = 1] = "HINGE";
              EConstraintType[EConstraintType["FIXED"] = 2] = "FIXED";
              EConstraintType[EConstraintType["CONFIGURABLE"] = 3] = "CONFIGURABLE";
            })(EConstraintType || (exports('d', EConstraintType = {})));
            Enum(EConstraintType);
            let EConstraintMode; exports('e', EConstraintMode);
            (function (EConstraintMode) {
              EConstraintMode[EConstraintMode["FREE"] = 0] = "FREE";
              EConstraintMode[EConstraintMode["LIMITED"] = 1] = "LIMITED";
              EConstraintMode[EConstraintMode["LOCKED"] = 2] = "LOCKED";
            })(EConstraintMode || (exports('e', EConstraintMode = {})));
            Enum(EConstraintMode);
            let EDriverMode; exports('f', EDriverMode);
            (function (EDriverMode) {
              EDriverMode[EDriverMode["DISABLED"] = 0] = "DISABLED";
              EDriverMode[EDriverMode["SERVO"] = 1] = "SERVO";
              EDriverMode[EDriverMode["INDUCTION"] = 2] = "INDUCTION";
            })(EDriverMode || (exports('f', EDriverMode = {})));
            Enum(EDriverMode);
            let ECharacterControllerType; exports('g', ECharacterControllerType);
            (function (ECharacterControllerType) {
              ECharacterControllerType[ECharacterControllerType["BOX"] = 0] = "BOX";
              ECharacterControllerType[ECharacterControllerType["CAPSULE"] = 1] = "CAPSULE";
            })(ECharacterControllerType || (exports('g', ECharacterControllerType = {})));
            Enum(ECharacterControllerType);
            let PhysicsGroup; exports('P', PhysicsGroup);
            (function (PhysicsGroup) {
              PhysicsGroup[PhysicsGroup["DEFAULT"] = 1] = "DEFAULT";
            })(PhysicsGroup || (exports('P', PhysicsGroup = {})));
            Enum(PhysicsGroup);
            let EPhysicsDrawFlags; exports('i', EPhysicsDrawFlags);
            (function (EPhysicsDrawFlags) {
              EPhysicsDrawFlags[EPhysicsDrawFlags["NONE"] = 0] = "NONE";
              EPhysicsDrawFlags[EPhysicsDrawFlags["WIRE_FRAME"] = 1] = "WIRE_FRAME";
              EPhysicsDrawFlags[EPhysicsDrawFlags["CONSTRAINT"] = 2] = "CONSTRAINT";
              EPhysicsDrawFlags[EPhysicsDrawFlags["AABB"] = 4] = "AABB";
            })(EPhysicsDrawFlags || (exports('i', EPhysicsDrawFlags = {})));
            Enum(EPhysicsDrawFlags);

        })
    };
}));

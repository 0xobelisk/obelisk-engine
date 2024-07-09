System.register("q-bundled:///fs/cocos/physics/bullet/bullet-enum.js", [], function (_export, _context) {
  "use strict";

  var EBtSharedBodyDirty, btCollisionFlags, btCollisionObjectTypes, btCollisionObjectStates, btRigidBodyFlags;
  _export({
    EBtSharedBodyDirty: void 0,
    btCollisionFlags: void 0,
    btCollisionObjectTypes: void 0,
    btCollisionObjectStates: void 0,
    btRigidBodyFlags: void 0
  });
  return {
    setters: [],
    execute: function () {
      (function (EBtSharedBodyDirty) {
        EBtSharedBodyDirty[EBtSharedBodyDirty["BODY_RE_ADD"] = 1] = "BODY_RE_ADD";
        EBtSharedBodyDirty[EBtSharedBodyDirty["GHOST_RE_ADD"] = 2] = "GHOST_RE_ADD";
      })(EBtSharedBodyDirty || _export("EBtSharedBodyDirty", EBtSharedBodyDirty = {}));
      (function (btCollisionFlags) {
        btCollisionFlags[btCollisionFlags["CF_STATIC_OBJECT"] = 1] = "CF_STATIC_OBJECT";
        btCollisionFlags[btCollisionFlags["CF_KINEMATIC_OBJECT"] = 2] = "CF_KINEMATIC_OBJECT";
        btCollisionFlags[btCollisionFlags["CF_NO_CONTACT_RESPONSE"] = 4] = "CF_NO_CONTACT_RESPONSE";
        btCollisionFlags[btCollisionFlags["CF_CUSTOM_MATERIAL_CALLBACK"] = 8] = "CF_CUSTOM_MATERIAL_CALLBACK";
        btCollisionFlags[btCollisionFlags["CF_CHARACTER_OBJECT"] = 16] = "CF_CHARACTER_OBJECT";
        btCollisionFlags[btCollisionFlags["CF_DISABLE_VISUALIZE_OBJECT"] = 32] = "CF_DISABLE_VISUALIZE_OBJECT";
        btCollisionFlags[btCollisionFlags["CF_DISABLE_SPU_COLLISION_PROCESSING"] = 64] = "CF_DISABLE_SPU_COLLISION_PROCESSING";
      })(btCollisionFlags || _export("btCollisionFlags", btCollisionFlags = {}));
      (function (btCollisionObjectTypes) {
        btCollisionObjectTypes[btCollisionObjectTypes["CO_COLLISION_OBJECT"] = 1] = "CO_COLLISION_OBJECT";
        btCollisionObjectTypes[btCollisionObjectTypes["CO_RIGID_BODY"] = 2] = "CO_RIGID_BODY";
        btCollisionObjectTypes[btCollisionObjectTypes["CO_GHOST_OBJECT"] = 4] = "CO_GHOST_OBJECT";
        btCollisionObjectTypes[btCollisionObjectTypes["CO_SOFT_BODY"] = 8] = "CO_SOFT_BODY";
        btCollisionObjectTypes[btCollisionObjectTypes["CO_HF_FLUID"] = 16] = "CO_HF_FLUID";
        btCollisionObjectTypes[btCollisionObjectTypes["CO_USER_TYPE"] = 32] = "CO_USER_TYPE";
        btCollisionObjectTypes[btCollisionObjectTypes["CO_FEATHERSTONE_LINK"] = 64] = "CO_FEATHERSTONE_LINK";
      })(btCollisionObjectTypes || _export("btCollisionObjectTypes", btCollisionObjectTypes = {}));
      (function (btCollisionObjectStates) {
        btCollisionObjectStates[btCollisionObjectStates["ACTIVE_TAG"] = 1] = "ACTIVE_TAG";
        btCollisionObjectStates[btCollisionObjectStates["ISLAND_SLEEPING"] = 2] = "ISLAND_SLEEPING";
        btCollisionObjectStates[btCollisionObjectStates["WANTS_DEACTIVATION"] = 3] = "WANTS_DEACTIVATION";
        btCollisionObjectStates[btCollisionObjectStates["DISABLE_DEACTIVATION"] = 4] = "DISABLE_DEACTIVATION";
        btCollisionObjectStates[btCollisionObjectStates["DISABLE_SIMULATION"] = 5] = "DISABLE_SIMULATION";
      })(btCollisionObjectStates || _export("btCollisionObjectStates", btCollisionObjectStates = {}));
      (function (btRigidBodyFlags) {
        btRigidBodyFlags[btRigidBodyFlags["BT_DISABLE_WORLD_GRAVITY"] = 1] = "BT_DISABLE_WORLD_GRAVITY";
        btRigidBodyFlags[btRigidBodyFlags["BT_ENABLE_GYROPSCOPIC_FORCE"] = 2] = "BT_ENABLE_GYROPSCOPIC_FORCE";
      })(btRigidBodyFlags || _export("btRigidBodyFlags", btRigidBodyFlags = {}));
    }
  };
});
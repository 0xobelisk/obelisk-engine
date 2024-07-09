System.register("q-bundled:///fs/cocos/physics/physx/physx-enum.js", [], function (_export, _context) {
  "use strict";

  var EFilterDataWord3, PxHitFlag, PxQueryFlag, PxPairFlag, PxContactPairFlag, PxTriggerPairFlag;
  _export({
    EFilterDataWord3: void 0,
    PxHitFlag: void 0,
    PxQueryFlag: void 0,
    PxPairFlag: void 0,
    PxContactPairFlag: void 0,
    PxTriggerPairFlag: void 0
  });
  return {
    setters: [],
    execute: function () {
      (function (EFilterDataWord3) {
        EFilterDataWord3[EFilterDataWord3["QUERY_FILTER"] = 1] = "QUERY_FILTER";
        EFilterDataWord3[EFilterDataWord3["QUERY_CHECK_TRIGGER"] = 2] = "QUERY_CHECK_TRIGGER";
        EFilterDataWord3[EFilterDataWord3["QUERY_SINGLE_HIT"] = 4] = "QUERY_SINGLE_HIT";
        EFilterDataWord3[EFilterDataWord3["DETECT_TRIGGER_EVENT"] = 8] = "DETECT_TRIGGER_EVENT";
        EFilterDataWord3[EFilterDataWord3["DETECT_CONTACT_EVENT"] = 16] = "DETECT_CONTACT_EVENT";
        EFilterDataWord3[EFilterDataWord3["DETECT_CONTACT_POINT"] = 32] = "DETECT_CONTACT_POINT";
        EFilterDataWord3[EFilterDataWord3["DETECT_CONTACT_CCD"] = 64] = "DETECT_CONTACT_CCD";
      })(EFilterDataWord3 || _export("EFilterDataWord3", EFilterDataWord3 = {}));
      (function (PxHitFlag) {
        PxHitFlag[PxHitFlag["ePOSITION"] = 1] = "ePOSITION";
        PxHitFlag[PxHitFlag["eNORMAL"] = 2] = "eNORMAL";
        PxHitFlag[PxHitFlag["eUV"] = 8] = "eUV";
        PxHitFlag[PxHitFlag["eASSUME_NO_INITIAL_OVERLAP"] = 16] = "eASSUME_NO_INITIAL_OVERLAP";
        PxHitFlag[PxHitFlag["eMESH_MULTIPLE"] = 32] = "eMESH_MULTIPLE";
        PxHitFlag[PxHitFlag["eMESH_ANY"] = 64] = "eMESH_ANY";
        PxHitFlag[PxHitFlag["eMESH_BOTH_SIDES"] = 128] = "eMESH_BOTH_SIDES";
        PxHitFlag[PxHitFlag["ePRECISE_SWEEP"] = 256] = "ePRECISE_SWEEP";
        PxHitFlag[PxHitFlag["eMTD"] = 512] = "eMTD";
        PxHitFlag[PxHitFlag["eFACE_INDEX"] = 1024] = "eFACE_INDEX";
        PxHitFlag[PxHitFlag["eDEFAULT"] = PxHitFlag.ePOSITION | PxHitFlag.eNORMAL | PxHitFlag.eFACE_INDEX] = "eDEFAULT";
        PxHitFlag[PxHitFlag["eMODIFIABLE_FLAGS"] = PxHitFlag.eMESH_MULTIPLE | PxHitFlag.eMESH_BOTH_SIDES | PxHitFlag.eASSUME_NO_INITIAL_OVERLAP | PxHitFlag.ePRECISE_SWEEP] = "eMODIFIABLE_FLAGS";
      })(PxHitFlag || _export("PxHitFlag", PxHitFlag = {}));
      (function (PxQueryFlag) {
        PxQueryFlag[PxQueryFlag["eSTATIC"] = 1] = "eSTATIC";
        PxQueryFlag[PxQueryFlag["eDYNAMIC"] = 2] = "eDYNAMIC";
        PxQueryFlag[PxQueryFlag["ePREFILTER"] = 4] = "ePREFILTER";
        PxQueryFlag[PxQueryFlag["ePOSTFILTER"] = 8] = "ePOSTFILTER";
        PxQueryFlag[PxQueryFlag["eANY_HIT"] = 16] = "eANY_HIT";
        PxQueryFlag[PxQueryFlag["eNO_BLOCK"] = 32] = "eNO_BLOCK";
        PxQueryFlag[PxQueryFlag["eRESERVED"] = 32768] = "eRESERVED";
      })(PxQueryFlag || _export("PxQueryFlag", PxQueryFlag = {}));
      (function (PxPairFlag) {
        PxPairFlag[PxPairFlag["eSOLVE_CONTACT"] = 1] = "eSOLVE_CONTACT";
        PxPairFlag[PxPairFlag["eMODIFY_CONTACTS"] = 2] = "eMODIFY_CONTACTS";
        PxPairFlag[PxPairFlag["eNOTIFY_TOUCH_FOUND"] = 4] = "eNOTIFY_TOUCH_FOUND";
        PxPairFlag[PxPairFlag["eNOTIFY_TOUCH_PERSISTS"] = 8] = "eNOTIFY_TOUCH_PERSISTS";
        PxPairFlag[PxPairFlag["eNOTIFY_TOUCH_LOST"] = 16] = "eNOTIFY_TOUCH_LOST";
        PxPairFlag[PxPairFlag["eNOTIFY_TOUCH_CCD"] = 32] = "eNOTIFY_TOUCH_CCD";
        PxPairFlag[PxPairFlag["eNOTIFY_THRESHOLD_FORCE_FOUND"] = 64] = "eNOTIFY_THRESHOLD_FORCE_FOUND";
        PxPairFlag[PxPairFlag["eNOTIFY_THRESHOLD_FORCE_PERSISTS"] = 128] = "eNOTIFY_THRESHOLD_FORCE_PERSISTS";
        PxPairFlag[PxPairFlag["eNOTIFY_THRESHOLD_FORCE_LOST"] = 256] = "eNOTIFY_THRESHOLD_FORCE_LOST";
        PxPairFlag[PxPairFlag["eNOTIFY_CONTACT_POINTS"] = 512] = "eNOTIFY_CONTACT_POINTS";
        PxPairFlag[PxPairFlag["eDETECT_DISCRETE_CONTACT"] = 1024] = "eDETECT_DISCRETE_CONTACT";
        PxPairFlag[PxPairFlag["eDETECT_CCD_CONTACT"] = 2048] = "eDETECT_CCD_CONTACT";
        PxPairFlag[PxPairFlag["ePRE_SOLVER_VELOCITY"] = 4096] = "ePRE_SOLVER_VELOCITY";
        PxPairFlag[PxPairFlag["ePOST_SOLVER_VELOCITY"] = 8192] = "ePOST_SOLVER_VELOCITY";
        PxPairFlag[PxPairFlag["eCONTACT_EVENT_POSE"] = 16384] = "eCONTACT_EVENT_POSE";
        PxPairFlag[PxPairFlag["eNEXT_FREE"] = 32768] = "eNEXT_FREE";
        PxPairFlag[PxPairFlag["eCONTACT_DEFAULT"] = 1025] = "eCONTACT_DEFAULT";
        PxPairFlag[PxPairFlag["eTRIGGER_DEFAULT"] = 1044] = "eTRIGGER_DEFAULT";
      })(PxPairFlag || _export("PxPairFlag", PxPairFlag = {}));
      (function (PxContactPairFlag) {
        PxContactPairFlag[PxContactPairFlag["eREMOVED_SHAPE_0"] = 1] = "eREMOVED_SHAPE_0";
        PxContactPairFlag[PxContactPairFlag["eREMOVED_SHAPE_1"] = 2] = "eREMOVED_SHAPE_1";
        PxContactPairFlag[PxContactPairFlag["eACTOR_PAIR_HAS_FIRST_TOUCH"] = 4] = "eACTOR_PAIR_HAS_FIRST_TOUCH";
        PxContactPairFlag[PxContactPairFlag["eACTOR_PAIR_LOST_TOUCH"] = 8] = "eACTOR_PAIR_LOST_TOUCH";
        PxContactPairFlag[PxContactPairFlag["eINTERNAL_HAS_IMPULSES"] = 16] = "eINTERNAL_HAS_IMPULSES";
        PxContactPairFlag[PxContactPairFlag["eINTERNAL_CONTACTS_ARE_FLIPPED"] = 32] = "eINTERNAL_CONTACTS_ARE_FLIPPED";
      })(PxContactPairFlag || _export("PxContactPairFlag", PxContactPairFlag = {}));
      (function (PxTriggerPairFlag) {
        PxTriggerPairFlag[PxTriggerPairFlag["eREMOVED_SHAPE_TRIGGER"] = 1] = "eREMOVED_SHAPE_TRIGGER";
        PxTriggerPairFlag[PxTriggerPairFlag["eREMOVED_SHAPE_OTHER"] = 2] = "eREMOVED_SHAPE_OTHER";
        PxTriggerPairFlag[PxTriggerPairFlag["eNEXT_FREE"] = 4] = "eNEXT_FREE";
      })(PxTriggerPairFlag || _export("PxTriggerPairFlag", PxTriggerPairFlag = {}));
    }
  };
});
System.register("q-bundled:///fs/cocos/dragon-bones/index.js", ["./CCFactory.js", "./CCSlot.js", "./CCTextureData.js", "./CCArmatureDisplay.js", "./ArmatureCache.js", "./DragonBonesAsset.js", "./DragonBonesAtlasAsset.js", "./ArmatureDisplay.js", "./AttachUtil.js", "./assembler/index.js", "@cocos/dragonbones-js"], function (_export, _context) {
  "use strict";

  var ExtensionType, EventType, AnimationFadeOutMode;
  _export({
    ExtensionType: void 0,
    EventType: void 0,
    AnimationFadeOutMode: void 0
  });
  return {
    setters: [function (_CCFactoryJs) {
      var _exportObj = {};
      for (var _key in _CCFactoryJs) {
        if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _CCFactoryJs[_key];
      }
      _export(_exportObj);
    }, function (_CCSlotJs) {
      var _exportObj2 = {};
      for (var _key2 in _CCSlotJs) {
        if (_key2 !== "default" && _key2 !== "__esModule") _exportObj2[_key2] = _CCSlotJs[_key2];
      }
      _export(_exportObj2);
    }, function (_CCTextureDataJs) {
      var _exportObj3 = {};
      for (var _key3 in _CCTextureDataJs) {
        if (_key3 !== "default" && _key3 !== "__esModule") _exportObj3[_key3] = _CCTextureDataJs[_key3];
      }
      _export(_exportObj3);
    }, function (_CCArmatureDisplayJs) {
      var _exportObj4 = {};
      for (var _key4 in _CCArmatureDisplayJs) {
        if (_key4 !== "default" && _key4 !== "__esModule") _exportObj4[_key4] = _CCArmatureDisplayJs[_key4];
      }
      _export(_exportObj4);
    }, function (_ArmatureCacheJs) {
      var _exportObj5 = {};
      for (var _key5 in _ArmatureCacheJs) {
        if (_key5 !== "default" && _key5 !== "__esModule") _exportObj5[_key5] = _ArmatureCacheJs[_key5];
      }
      _export(_exportObj5);
    }, function (_DragonBonesAssetJs) {
      var _exportObj6 = {};
      for (var _key6 in _DragonBonesAssetJs) {
        if (_key6 !== "default" && _key6 !== "__esModule") _exportObj6[_key6] = _DragonBonesAssetJs[_key6];
      }
      _export(_exportObj6);
    }, function (_DragonBonesAtlasAssetJs) {
      var _exportObj7 = {};
      for (var _key7 in _DragonBonesAtlasAssetJs) {
        if (_key7 !== "default" && _key7 !== "__esModule") _exportObj7[_key7] = _DragonBonesAtlasAssetJs[_key7];
      }
      _export(_exportObj7);
    }, function (_ArmatureDisplayJs) {
      var _exportObj8 = {};
      for (var _key8 in _ArmatureDisplayJs) {
        if (_key8 !== "default" && _key8 !== "__esModule") _exportObj8[_key8] = _ArmatureDisplayJs[_key8];
      }
      _export(_exportObj8);
    }, function (_AttachUtilJs) {
      var _exportObj9 = {};
      for (var _key9 in _AttachUtilJs) {
        if (_key9 !== "default" && _key9 !== "__esModule") _exportObj9[_key9] = _AttachUtilJs[_key9];
      }
      _export(_exportObj9);
    }, function (_assemblerIndexJs) {
      var _exportObj10 = {};
      for (var _key10 in _assemblerIndexJs) {
        if (_key10 !== "default" && _key10 !== "__esModule") _exportObj10[_key10] = _assemblerIndexJs[_key10];
      }
      _export(_exportObj10);
    }, function (_cocosDragonbonesJs) {
      var _exportObj11 = {};
      for (var _key11 in _cocosDragonbonesJs) {
        if (_key11 !== "default" && _key11 !== "__esModule") _exportObj11[_key11] = _cocosDragonbonesJs[_key11];
      }
      _export(_exportObj11);
    }],
    execute: function () {
      (function (ExtensionType) {
        ExtensionType[ExtensionType["FFD"] = 0] = "FFD";
        ExtensionType[ExtensionType["AdjustColor"] = 10] = "AdjustColor";
        ExtensionType[ExtensionType["BevelFilter"] = 11] = "BevelFilter";
        ExtensionType[ExtensionType["BlurFilter"] = 12] = "BlurFilter";
        ExtensionType[ExtensionType["DropShadowFilter"] = 13] = "DropShadowFilter";
        ExtensionType[ExtensionType["GlowFilter"] = 14] = "GlowFilter";
        ExtensionType[ExtensionType["GradientBevelFilter"] = 15] = "GradientBevelFilter";
        ExtensionType[ExtensionType["GradientGlowFilter"] = 16] = "GradientGlowFilter";
      })(ExtensionType || _export("ExtensionType", ExtensionType = {}));
      (function (EventType) {
        EventType[EventType["Frame"] = 0] = "Frame";
        EventType[EventType["Sound"] = 1] = "Sound";
      })(EventType || _export("EventType", EventType = {}));
      (function (AnimationFadeOutMode) {
        AnimationFadeOutMode[AnimationFadeOutMode["None"] = 0] = "None";
        AnimationFadeOutMode[AnimationFadeOutMode["SameLayer"] = 1] = "SameLayer";
        AnimationFadeOutMode[AnimationFadeOutMode["SameGroup"] = 2] = "SameGroup";
        AnimationFadeOutMode[AnimationFadeOutMode["SameLayerAndGroup"] = 3] = "SameLayerAndGroup";
        AnimationFadeOutMode[AnimationFadeOutMode["All"] = 4] = "All";
      })(AnimationFadeOutMode || _export("AnimationFadeOutMode", AnimationFadeOutMode = {}));
    }
  };
});
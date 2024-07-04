System.register([], (function (exports, module) {
    'use strict';
    return {
        execute: (function () {

            exports({
                $: repeat,
                B: equals,
                D: approx,
                F: clamp,
                G: clamp01,
                I: lerp,
                J: toRadian,
                K: toDegree,
                L: random,
                N: setRandGenerator,
                O: randomRange,
                U: randomRangeInt,
                W: pseudoRandom,
                X: pseudoRandomRange,
                Y: pseudoRandomRangeInt,
                Z: nextPow2,
                _: _throw,
                a: log,
                a0: pingPong,
                a1: inverseLerp,
                a2: absMaxComponent,
                a3: absMax,
                a4: enumerableProps,
                a5: floatToHalf,
                a6: halfToFloat,
                a9: BitMask,
                aB: getSerializationMetadata,
                aE: Eventify,
                aF: debug,
                aG: isDisplayStats,
                aH: setDisplayStats,
                aI: getError,
                aa: Enum,
                ab: ccenum,
                af: setDefaultLogTimes,
                aj: deprecateModuleExportedName,
                ak: __checkObsolete__,
                al: __checkObsoleteInNamespace__,
                am: WorldNode3DToLocalNodeUI,
                an: WorldNode3DToWorldNodeUI,
                aq: CCClass,
                ar: isCCClassOrFastDefined,
                b: assert,
                b$: updateChildrenForDeserialize,
                b1: bezier,
                b2: bezierByTime,
                bA: fastRemove,
                bI: log2,
                bJ: getClassById,
                bL: getClassName,
                bM: isChildClassOf,
                bO: getClassId,
                bQ: getSuper,
                bT: mixin,
                bU: getClassByName,
                bV: syncNodeValues,
                be: formerlySerializedAs,
                bh: setPropertyEnumType,
                bi: setPropertyEnumTypeOnAttrs,
                bl: isCCObject,
                bm: isValid,
                bp: _resetDebugSetting,
                bq: binarySearch,
                br: binarySearchEpsilon,
                bs: binarySearchBy,
                bt: assertIsNonNullable,
                bu: assertIsTrue,
                bv: assertsArrayIndex,
                bw: type,
                bx: applyDecoratedInitializer,
                bz: fastRemoveAt$1,
                c: logID,
                c1: removeAt,
                c2: createMap,
                c3: isEmptyObject,
                c4: obsolete,
                c5: callInNextTick,
                c9: addon,
                cA: contains$1,
                cD: clampf,
                cE: contains,
                cI: constructLegacyCurveAndConvert,
                cK: sign,
                cM: degreesToRadians,
                cN: radiansToDegrees,
                cd: ExtraEventMethods,
                cj: setClassAlias,
                cl: property,
                cm: cubicOut,
                cn: isDomNode,
                cu: remove,
                cv: getOrCreatePropertyStash,
                cx: removeIf,
                d: warnID,
                e: error,
                f: errorID,
                g: assertID,
                o: v3,
                q: v4,
                r: quat,
                t: mat4,
                u: size,
                v: v2$1,
                w: warn,
                x: rect,
                y: color
            });

            function tryDefineGlobal (name, value) {
                const _global = typeof window === 'undefined' ? global : window;
                if (typeof _global[name] === 'undefined') {
                    return (_global[name] = value);
                } else {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
                    return _global[name];
                }
            }

            const NATIVE = exports('bC', true);

            const OPEN_HARMONY = false;
            tryDefineGlobal('CC_WECHAT', false);

            const WECHAT_MINI_PROGRAM = exports('cr', false);
            tryDefineGlobal('CC_BAIDU', false);

            const XIAOMI = exports('c7', false);
            tryDefineGlobal('CC_XIAOMI', false);
            tryDefineGlobal('CC_ALIPAY', false);
            tryDefineGlobal('CC_BYTEDANCE', false);
            tryDefineGlobal('CC_OPPO', false);
            tryDefineGlobal('CC_VIVO', false);
            tryDefineGlobal('CC_HUAWEI', false);
            tryDefineGlobal('CC_COCOSPLAY', false);
            tryDefineGlobal('CC_QTT', false);
            tryDefineGlobal('CC_LINKSURE', false);

            const EDITOR = exports('bB', false);
            tryDefineGlobal('CC_EDITOR', false);

            const EDITOR_NOT_IN_PREVIEW = exports('c8', false);

            const PREVIEW = exports('ca', true);
            tryDefineGlobal('CC_PREVIEW', true);
            tryDefineGlobal('CC_BUILD', false);
            tryDefineGlobal('CC_TEST', false);
            tryDefineGlobal('CC_DEBUG', true);

            const DEV = true;
            tryDefineGlobal('CC_DEV', true);

            const MINIGAME = exports('cF', false);
            tryDefineGlobal('CC_MINIGAME', false);

            const RUNTIME_BASED = exports('cH', false);
            tryDefineGlobal('CC_RUNTIME_BASED', false);
            tryDefineGlobal('CC_SUPPORT_JIT', true);

            const JSB = exports('cG', true);
            tryDefineGlobal('CC_JSB', true);

            const _global = typeof window === 'undefined' ? global : window;
            const legacyCC = exports('l', {
              _global
            });
            legacyCC.internal = {};
            {
              legacyCC._Test = {};
            }
            const engineVersion = exports('j', '3.8.3');
            _global.CocosEngine = legacyCC.ENGINE_VERSION = engineVersion;
            _global.cc = legacyCC;
            const ccwindow = exports('c6', typeof globalThis.jsb !== 'undefined' ? typeof jsb.window !== 'undefined' ? jsb.window : globalThis : globalThis);
            _global.ccwindow = ccwindow;

            var debugInfos = {
            	"1006": "[Action step]. override me",
            	"1007": "[Action update]. override me",
            	"1008": "[Action reverse]. override me",
            	"1100": "Expected 'data' dict, but not found. Config file: %s",
            	"1101": "Please load the resource first : %s",
            	"1102": "Effect settings not found, effects will not be imported.",
            	"1103": "Success to load scene: %s",
            	"1200": "cocos2d: Director: Error in gettimeofday",
            	"1204": "Running scene should not be null",
            	"1205": "The scene should not be null",
            	"1206": "loadScene: The scene index to load (%s) is out of range.",
            	"1207": "loadScene: Unknown name type to load: '%s'",
            	"1208": "loadScene: Failed to load scene '%s' because '%s' is already being loaded.",
            	"1209": "loadScene: Can not load the scene '%s' because it was not in the build settings before playing.",
            	"1210": "Failed to preload '%s', %s",
            	"1211": "loadScene: The scene index to load (%s) is out of range.",
            	"1212": "loadScene: Unknown name type to load: '%s'",
            	"1213": "loadScene: Failed to load scene '%s' because '%s' is already loading",
            	"1214": "loadScene: Can not load the scene '%s' because it was not in the build settings before playing.",
            	"1215": "Failed to preload '%s', %s",
            	"1216": "Director.runSceneImmediate: scene is not valid",
            	"1217": "Director._initOnEngineInitialized: renderer root initialization failed",
            	"1218": "Forward render pipeline initialized.",
            	"1219": "Deferred render pipeline initialized. Note that non-transparent materials with no lighting will not be rendered, such as builtin-unlit.",
            	"1220": "Failed to set shading scale, pipelineSceneData is invalid.",
            	"1221": "Setting orientation is not supported yet.",
            	"1300": "%s is not in the model pool and cannot be destroyed by destroyModel.",
            	"1400": "'%s' is deprecated, please use '%s' instead.",
            	"1404": "cc.spriteFrameCache is removed, please use cc.loader to load and cache sprite frames of atlas format.",
            	"1406": "'%s.%s' is removed",
            	"1408": "'%s' is removed",
            	"1409": "element type is wrong!",
            	"1502": "cc.scheduler.scheduleCallbackForTarget(): target should be non-null.",
            	"1503": "cc.Scheduler.pauseTarget():target should be non-null",
            	"1504": "cc.Scheduler.resumeTarget():target should be non-null",
            	"1505": "cc.Scheduler.isTargetPaused():target should be non-null",
            	"1506": "warning: you CANNOT change update priority in scheduled function",
            	"1507": "scheduler#scheduleSelector. Selector already scheduled. Updating interval from: %.4f to %.4f",
            	"1508": "Argument callback must not be empty",
            	"1509": "Argument target must be non-nullptr",
            	"1510": "cc.Scheduler: Illegal target which doesn't have id, you should do Scheduler.enableForTarget(target) before all scheduler API usage on target",
            	"1511": "cc.Scheduler: pause state of the scheduled task doesn't match the element pause state in Scheduler, the given paused state will be ignored.",
            	"1513": "cc.Scheduler: scheduler stopped using `__instanceId` as id since v2.0, you should do Scheduler.enableForTarget(target) before all scheduler API usage on target",
            	"1514": "since v3.8.0, `Scheduler.schedule(target, callback, interval)` is deprecated, please use `Scheduler.schedule(callback, target, interval)` instead.",
            	"1607": "removeFromParentAndCleanup is deprecated. Use removeFromParent instead",
            	"1619": "callback function must be non-null",
            	"1620": "interval must be positive",
            	"1623": "Set '%s' to normal node (not persist root node).",
            	"1624": "Replacing with the same sgNode",
            	"1625": "The replacement sgNode should not contain any child.",
            	"1626": "Should not set alpha via 'color', set 'opacity' please.",
            	"1627": "Not support for asynchronous creating node in SG",
            	"1632": "Node name can not include '/'.",
            	"1633": "Internal error, should not remove unknown node from parent.",
            	"1635": "reorderChild: this child is not in children list.",
            	"1636": "Node's zIndex value can't be greater than cc.macro.MAX_ZINDEX, setting to the maximum value",
            	"1637": "Node's zIndex value can't be smaller than cc.macro.MIN_ZINDEX, setting to the minimum value",
            	"1638": "Private node's zIndex can't be set, it will keep cc.macro.MIN_ZINDEX as its value",
            	"1800": "cc._EventListenerKeyboard.checkAvailable(): Invalid EventListenerKeyboard!",
            	"1801": "cc._EventListenerTouchOneByOne.checkAvailable(): Invalid EventListenerTouchOneByOne!",
            	"1802": "cc._EventListenerTouchAllAtOnce.checkAvailable(): Invalid EventListenerTouchAllAtOnce!",
            	"1803": "cc._EventListenerAcceleration.checkAvailable():_onAccelerationEvent must be non-nil",
            	"1900": "Invalid parameter.",
            	"2104": "Layer collision. The name of layer (%s) is collided with the name or value of some layer",
            	"2200": "Design resolution not valid",
            	"2201": "should set resolutionPolicy",
            	"2300": "The touches is more than MAX_TOUCHES, nUnusedIndex = %s",
            	"2402": "Forward pipeline startup failed!",
            	"3103": "cc.Texture.addImage(): path should be non-null",
            	"3119": "Lazy init texture with image element failed due to image loading failure: %s",
            	"3120": "Loading texture with unsupported type: '%s'. Add '%s' into 'cc.macro.SUPPORT_TEXTURE_FORMATS' please.",
            	"3121": "Can't find a texture format supported by the current platform! Please add a fallback format in the editor.",
            	"3122": "Error Texture in %s.",
            	"3123": "Set same texture %s.",
            	"3124": "Texture: setMipRange failed because base level is larger than max level",
            	"3300": "Rect width exceeds maximum margin: %s",
            	"3301": "Rect height exceeds maximum margin: %s",
            	"3500": "0 priority is forbidden for fixed priority since it's used for scene graph based priority.",
            	"3501": "Invalid listener type!",
            	"3502": "Can't set fixed priority with scene graph based listener.",
            	"3503": "Invalid parameters.",
            	"3504": "listener must be a cc.EventListener object when adding a fixed priority listener",
            	"3505": "The listener has been registered, please don't register it again.",
            	"3506": "Unsupported listener target.",
            	"3507": "Invalid scene graph priority!",
            	"3508": "If program goes here, there should be event in dispatch.",
            	"3509": "_inDispatch should be 1 here.",
            	"3510": "%s's scene graph node not contains in the parent's children",
            	"3511": "event is undefined",
            	"3512": "Event manager only support scene graph priority for ui nodes which contain UIComponent",
            	"3520": "Device Motion Event request permission: %s",
            	"3521": "Device Motion Event request permission failed: %s",
            	"3601": "The editor property 'playOnFocus' should be used with 'executeInEditMode' in class '%s'",
            	"3602": "Unknown editor property '%s' in class '%s'.",
            	"3603": "Use 'cc.Float' or 'cc.Integer' instead of 'cc.Number' please.",
            	"3604": "Can only indicate one type attribute for %s.",
            	"3605": "The default value of %s is not instance of %s.",
            	"3606": "No needs to indicate the '%s' attribute for %s, which its default value is type of %s.",
            	"3607": "The default value of %s must be an empty string.",
            	"3608": "The type of %s must be CCString, not String.",
            	"3609": "The type of %s must be CCBoolean, not Boolean.",
            	"3610": "The type of %s must be CCFloat or CCInteger, not Number.",
            	"3611": "Can not indicate the '%s' attribute for %s, which its default value is type of %s.",
            	"3612": "%s Just set the default value to 'new %s()' and it will be handled properly.",
            	"3613": "'No need to use 'serializable: false' or 'editorOnly: true' for the getter of '%s.%s', every getter is actually non-serialized.",
            	"3614": "Should not define constructor for cc.Component %s.",
            	"3615": "Each script can have at most one Component.",
            	"3616": "Should not specify class name %s for Component which defines in project.",
            	"3618": "ctor of '%s' can not be another CCClass",
            	"3623": "Can not use 'editor' attribute, '%s' not inherits from Components.",
            	"3625": "[isChildClassOf] superclass should be function type, not",
            	"3626": "Can't remove '%s' because '%s' depends on it.",
            	"3627": "Should not add renderer component (%s) to a Canvas node.",
            	"3628": "Should not add %s to a node which size is already used by its other component.",
            	"3633": "Properties function of '%s' should return an object!",
            	"3634": "Disallow to use '.' in property name",
            	"3637": "Can not declare %s.%s, it is already defined in the prototype of %s",
            	"3639": "Can not apply the specified attribute to the getter of '%s.%s', attribute index: %s",
            	"3640": "'%s': the setter of '%s' is already defined!",
            	"3641": "Can not construct %s because it contains object property.",
            	"3644": "Please define 'type' parameter of %s.%s as the actual constructor.",
            	"3645": "Please define 'type' parameter of %s.%s as the constructor of %s.",
            	"3646": "Unknown 'type' parameter of %s.%s：%s",
            	"3647": "The length of range array must be equal or greater than 2",
            	"3648": "Can not declare %s.%s method, it is already defined in the properties of %s.",
            	"3652": "Failed to `new %s()` under the hood, %s\nIt is used for getting default values declared in TypeScript in the first place.\nPlease ensure the constructor can be called during the script's initialization.",
            	"3653": "Please do not specify \"default\" attribute in decorator of \"%s\" property in \"%s\" class.\nDefault value must be initialized at their declaration:\n\n \n// Before:\n@property({\n  type: cc.SpriteFrame\n  default: null  // <--\n})\nmyProp;\n// After:\n@property({\n  type: cc.SpriteFrame\n})\nmyProp = null;   // <--",
            	"3654": "Please specify a default value for \"%s.%s\" property at its declaration:\n\n \n// Before:\n@property(...)\nmyProp;\n// After:\n@property(...)\nmyProp = 0;",
            	"3655": "Can not specify \"get\" or \"set\"  attribute in decorator for \"%s\" property in \"%s\" class.\nPlease use:\n\n \n@property(...)\nget %s () {\n    ...\n}\n@property\nset %s (value) {\n    ...\n}",
            	"3659": "Violation error: extending enumerations shall have non-overlaped member names or member values",
            	"3660": "You are explicitly specifying `undefined` type to cc property \"%s\" of cc class \"%s\".\nIs this intended? If not, this may indicate a circular reference.\nFor example:\n\n \n// foo.ts\nimport { _decorator } from 'cc';\nimport { Bar } from './bar';  // Given that './bar' also reference 'foo.ts'.\n                              // When importing './bar', execution of './bar' is hung on to wait execution of 'foo.ts',\n                              // the `Bar` imported here is `undefined` until './bar' finish its execution.\n                              // It leads to that\n@_decorator.ccclass           //  ↓\nexport class Foo {            //  ↓\n    @_decorator.type(Bar)     //  → is equivalent to `@_decorator.type(undefined)`\n    public bar: Bar;          // To eliminate this error, either:\n                              // - Refactor your module structure(recommended), or\n                              // - specify the type as cc class name: `@_decorator.type('Bar'/* or any name you specified for `Bar` */)`\n}",
            	"3700": "internal error: _prefab is undefined",
            	"3701": "Failed to load prefab asset for node '%s'",
            	"3800": "The target can not be made persist because it's not a cc.Node or it doesn't have _id property.",
            	"3801": "The node can not be made persist because it's not under root node.",
            	"3802": "The node can not be made persist because it's not in current scene.",
            	"3803": "The target can not be made persist because it's not a cc.Node or it doesn't have _id property.",
            	"3804": "getComponent: Type must be non-nil",
            	"3805": "Can't add component '%s' because %s already contains the same component.",
            	"3806": "Can't add component '%s' to %s because it conflicts with the existing '%s' derived component.",
            	"3807": "addComponent: Failed to get class '%s'",
            	"3808": "addComponent: Should not add component ('%s') when the scripts are still loading.",
            	"3809": "addComponent: The component to add must be a constructor",
            	"3810": "addComponent: The component to add must be child class of cc.Component",
            	"3811": "_addComponentAt: The component to add must be a constructor",
            	"3812": "_addComponentAt: Index out of range",
            	"3813": "removeComponent: Component must be non-nil",
            	"3814": "Argument must be non-nil",
            	"3815": "Component not owned by this entity",
            	"3816": "Node '%s' is already activating",
            	"3817": "Sorry, the component of '%s' which with an index of %s is corrupted! It has been removed.",
            	"3818": "Failed to read or parse project.json",
            	"3819": "Warning: target element is not a DIV or CANVAS",
            	"3820": "The renderer doesn't support the renderMode %s",
            	"3821": "Cannot change hierarchy while activating or deactivating the parent.",
            	"3822": "addComponent: Cannot add any component to the scene.",
            	"3823": "The enabled component (id: %s, name: %s) doesn't have a valid node",
            	"3900": "Invalid clip to add",
            	"3901": "Invalid clip to remove",
            	"3902": "clip is defaultClip, set force to true to force remove clip and animation state",
            	"3903": "animation state is playing, set force to true to force stop and remove clip and animation state",
            	"3904": "motion path of target [%s] in prop [%s] frame [%s] is not valid",
            	"3905": "sprite frames must be an Array.",
            	"3906": "Can't find easing type [%s]",
            	"3907": "Animation state is not playing or already removed",
            	"3912": "already-playing",
            	"3920": "Current context does not allow root motion.",
            	"3921": "You provided a ill-formed track path. The last component of track path should be property key, or the setter should not be empty.",
            	"3923": "Root motion is ignored since root bone could not be located in animation.",
            	"3924": "Root motion is ignored since the root bone could not be located in scene.",
            	"3925": "Target of hierarchy path should be of type Node.",
            	"3926": "Node \"%s\" has no path \"%s\".",
            	"3927": "Target of component path should be of type Node.",
            	"3928": "Node \"%s\" has no component \"%s\".",
            	"3929": "Target object has no property \"%s\".",
            	"3930": "Can not decide type for untyped track: runtime binding does not provide a getter.",
            	"3931": "Can not decide type for untyped track: got a unsupported value from runtime binding.",
            	"3932": "Common targets should only target Vectors/`Size`/`Color`.",
            	"3933": "Each curve that has common target should be numeric curve and targets string property.",
            	"3934": "Misconfigured legacy curve: the first keyframe value is number but others aren't.",
            	"3935": "We don't currently support conversion of \\`CubicSplineQuatValue\\`.",
            	"3936": "Instancing/Batching enabled for non-baked skinning model '%s', this may result in unexpected rendering artifacts. Consider turning it off in the material if you do not intend to do this.",
            	"3937": "Previous error occurred when instantiating animation clip %s on node %s.",
            	"3938": "'%s' is not found from '%s'. It's specified as the root node to play animation clip '%s'.",
            	"3940": "Error when animation attempted to bind material uniform target: target %s is not a material.",
            	"3941": "Error when animation attempted to bind material uniform target: material %s has no recorded pass %s.",
            	"3942": "Error when animation attempted to bind material uniform target: material %s at pass %s has no recorded uniform %s.",
            	"3943": "Error when animation attempted to bind material uniform target: material %s at pass %s's uniform %s has no recorded channel %s.",
            	"4003": "Label font size can't be shirnked less than 0!",
            	"4004": "force notify all fonts loaded!",
            	"4011": "Property spriteFrame of Font '%s' is invalid. Using system font instead.",
            	"4012": "The texture of Font '%s' must be already loaded on JSB. Using system font instead.",
            	"4013": "Sorry, lineHeight of system font not supported on JSB.",
            	"4200": "MaskType: IMAGE_STENCIL only support WebGL mode.",
            	"4201": "The alphaThreshold invalid in Canvas Mode.",
            	"4202": "The inverted invalid in Canvas Mode.",
            	"4300": "Can not found the %s page.",
            	"4301": "Can not add a page without UITransform.",
            	"4302": "Can not set the scroll view content when it hasn't UITransform or its parent hasn't UITransform.",
            	"4303": "The %s scrollBar on the '%s' node is not available, please check it.",
            	"4400": "Invalid RichText img tag! The sprite frame name can't be found in the ImageAtlas!",
            	"4500": "Graphics: There is no model in %s.",
            	"4600": "Script attached to '%s' is missing or invalid.",
            	"4601": "Failed to load wasm module, WebAssembly is not supported on this platform, but as a fallback Asm.js module is culled by mistake.",
            	"4700": "The dom control is not created!",
            	"4800": "unknown asset type",
            	"4901": "loadRes: should not specify the extname in %s %s",
            	"4902": "No need to release non-cached asset.",
            	"4914": "Resources url '%s' does not exist.",
            	"4915": "Pack indices and data do not match in size",
            	"4916": "Failed to download package for %s",
            	"4921": "Invalid pipe or invalid index provided!",
            	"4922": "The pipe to be inserted is already in the pipeline!",
            	"4923": "Uuid Loader: Parse asset [ %s ] failed : %s",
            	"4924": "JSON Loader: Input item doesn't contain string content",
            	"4925": "Uuid Loader: Deserialize asset [ %s ] failed : %s",
            	"4926": "Audio Downloader: no web audio context.",
            	"4927": "Audio Downloader: audio not supported on this browser!",
            	"4928": "Load %s failed!",
            	"4929": "Load Webp ( %s ) failed",
            	"4930": "Load image ( %s ) failed",
            	"4932": "Since v1.10, for any atlas (\"%s\") in the \"resources\" directory, it is not possible to find the contained SpriteFrames via `loadRes`, `getRes` or `releaseRes`. Load the SpriteAtlas first and then use `spriteAtlas.getSpriteFrame(name)` instead please.",
            	"4933": "Download Font [ %s ] failed, using Arial or system default font instead",
            	"4934": "Please assure that the full path of sub asset is correct!",
            	"4935": "Failed to skip prefab asset while deserializing PrefabInfo",
            	"5000": "You are trying to destroy a object twice or more.",
            	"5001": "object not yet destroyed",
            	"5100": "Not a plist file!",
            	"5200": "Warning: localStorage isn't enabled. Please confirm browser cookie or privacy option",
            	"5201": "browser don't support web audio",
            	"5202": "This feature supports WebGL render mode only.",
            	"5300": "Type of target to deserialize not matched with data: target is %s, data is %s",
            	"5301": "Can not find script '%s'",
            	"5302": "Can not find class '%s'",
            	"5303": "Failed to deserialize %s, missing _deserialize function.",
            	"5304": "Unable to deserialize version %s data.",
            	"5402": "cc.js.addon called on non-object:",
            	"5403": "cc.js.mixin: arguments must be type object:",
            	"5404": "The base class to extend from must be non-nil",
            	"5405": "The class to extend must be non-nil",
            	"5406": "Class should be extended before assigning any prototype members.",
            	"5500": "'notify' can not be used in 'get/set' !",
            	"5501": "'notify' must be used with 'default' !",
            	"5507": "The 'default' attribute of '%s.%s' must be an array",
            	"5508": "Invalid type of %s.%s",
            	"5510": "The 'type' attribute of '%s.%s' can not be 'Number', use cc.Float or cc.Integer instead please.",
            	"5511": "The 'type' attribute of '%s.%s' is undefined when loading script",
            	"5512": "Can not serialize '%s.%s' because the specified type is anonymous, please provide a class name or set the 'serializable' attribute of '%s.%s' to 'false'.",
            	"5513": "The 'default' value of '%s.%s' should not be used with a 'get' function.",
            	"5514": "The 'default' value of '%s.%s' should not be used with a 'set' function.",
            	"5515": "The 'default' value of '%s.%s' can not be an constructor. Set default to null please.",
            	"5517": "'%s.%s' hides inherited property '%s.%s'. To make the current property override that implementation, add the `override: true` attribute please.",
            	"5601": "Can not get current scene.",
            	"5602": "Scene is destroyed",
            	"5603": "reference node is destroyed",
            	"5700": "no %s or %s on %s",
            	"5800": "%s.lerp not yet implemented.",
            	"5801": "%s.clone not yet implemented.",
            	"5802": "%s.equals not yet implemented.",
            	"5900": "MotionStreak only support WebGL mode.",
            	"5901": "cc.MotionStreak.getOpacity has not been supported.",
            	"5902": "cc.MotionStreak.setOpacity has not been supported.",
            	"6000": "Custom should not be false if file is not specified.",
            	"6001": "The new %s must not be NaN",
            	"6017": "Incomplete or corrupt PNG file",
            	"6018": "Invalid filter algorithm: %s",
            	"6019": "Invalid byte order value.",
            	"6020": "You forgot your towel!",
            	"6021": "Unknown Field Tag: %s",
            	"6022": "Too many bits requested",
            	"6023": "No bits requested",
            	"6024": "Cannot recover from missing StripByteCounts",
            	"6025": "Cannot handle sub-byte bits per sample",
            	"6026": "Cannot handle sub-byte bits per pixel",
            	"6027": "Palette image missing color map",
            	"6028": "Unknown Photometric Interpretation: %s",
            	"6029": "Unkown error",
            	"6030": "cc.ParticleSystem: error decoding or ungzipping textureImageData",
            	"6031": "cc.ParticleSystem: unknown image format with Data",
            	"6032": "cc.ParticleSystem.initWithDictionary() : error loading the texture",
            	"6033": "cc.ParticleSystem: not allowing create to be invoked twice with different particle system",
            	"6034": "cc.ParticleSystem: shouldn't be initialized repetitively, otherwise there will be potential leak",
            	"6035": "cc.ParticleSystem: change material failed, please use proper particle material",
            	"6036": "cc.ParticleSystem: life time should bigger than 1 or buffer will be insufficient",
            	"6400": "asset.url is not usable in core process",
            	"6402": "AssetLibrary has already been initialized!",
            	"6500": "Widget target must be one of the parent nodes of it",
            	"6600": "collider not added or already removed",
            	"6601": "Can't find testFunc for (%s, $s).",
            	"6700": "Can't init canvas '%s' because it conflicts with the existing '%s', the scene should only have one active canvas at the same time.",
            	"6705": "Argument must be non-nil",
            	"6706": "Priority can't be set in RenderRoot2D node",
            	"6800": "Callback of event must be non-nil",
            	"6801": "The message must be provided",
            	"6900": "The thing you want to instantiate must be an object",
            	"6901": "The thing you want to instantiate is nil",
            	"6902": "The thing you want to instantiate is destroyed",
            	"6903": "The instantiate method for given asset do not implemented",
            	"6904": "Can not instantiate array",
            	"6905": "Can not instantiate DOM element",
            	"7100": "%s already defined in Enum.",
            	"7101": "Sorry, 'cc.Enum' not available on this platform, please report this error here: <https://github.com/cocos-creator/engine/issues/new>",
            	"7200": "Method 'initWithTMXFile' is no effect now, please set property 'tmxAsset' instead.",
            	"7201": "Method 'initWithXML' is no effect now, please set property 'tmxAsset' instead.",
            	"7202": "Add component TiledLayer into node failed.",
            	"7203": "Property 'mapLoaded' is unused now. Please write the logic to the callback 'start'.",
            	"7210": "TMX Hexa zOrder not supported",
            	"7211": "TMX invalid value",
            	"7215": "cocos2d: Warning: TMX Layer %s has no tiles",
            	"7216": "cocos2d: TMXFormat: Unsupported TMX version: %s",
            	"7217": "cocos2d: TMXFomat: Unsupported orientation: %s",
            	"7218": "cc.TMXMapInfo.parseXMLFile(): unsupported compression method",
            	"7219": "cc.TMXMapInfo.parseXMLFile(): Only base64 and/or gzip/zlib maps are supported",
            	"7221": "cc.TMXMapInfo.parseXMLFile(): Texture '%s' not found.",
            	"7222": "Parse %s failed.",
            	"7236": "cc.TMXLayer.getTileAt(): TMXLayer: the tiles map has been released",
            	"7237": "cc.TMXLayer.getTileGIDAt(): TMXLayer: the tiles map has been released",
            	"7238": "cc.TMXLayer.setTileGID(): TMXLayer: the tiles map has been released",
            	"7239": "cc.TMXLayer.setTileGID(): invalid gid: %s",
            	"7240": "cc.TMXLayer.getTileFlagsAt(): TMXLayer: the tiles map has been released",
            	"7241": "cc.TiledMap.initWithXML(): Map not found. Please check the filename.",
            	"7401": "Failed to set _defaultArmatureIndex for '%s' because the index is out of range.",
            	"7402": "Failed to set _animationIndex for '%s' because the index is out of range.",
            	"7501": "Failed to set _defaultSkinIndex for '%s' because the index is out of range.",
            	"7502": "Failed to set _animationIndex for '%s' because its skeletonData is invalid.",
            	"7503": "Failed to set _animationIndex for '%s' because the index is out of range.",
            	"7504": "Can not render dynamic created SkeletonData",
            	"7506": "Failed to load spine atlas '$s'",
            	"7507": "Please re-import '%s' because its textures is not initialized! (This workflow will be improved in the future.)",
            	"7508": "The atlas asset of '%s' is not exists!",
            	"7509": "Spine: Animation not found: %s",
            	"7510": "Spine: Animation not found: %s",
            	"7511": "Spine: Invalid input!",
            	"7600": "The context of RenderTexture is invalid.",
            	"7601": "cc.RenderTexture._initWithWidthAndHeightForWebGL() : only RGB and RGBA formats are valid for a render texture;",
            	"7602": "Could not attach texture to the framebuffer",
            	"7603": "clearDepth isn't supported on Cocos2d-Html5",
            	"7604": "saveToFile isn't supported on Cocos2d-Html5",
            	"7605": "newCCImage isn't supported on Cocos2d-Html5",
            	"7606": "GFXTexture is null",
            	"7607": "readPixels buffer size smaller than %d",
            	"7700": "On the web is always keep the aspect ratio",
            	"7701": "Can't know status",
            	"7702": "Video player's duration is not ready to get now!",
            	"7703": "Video Downloader: video not supported on this browser!",
            	"7800": "Web does not support loading",
            	"7801": "Web does not support query history",
            	"7802": "Web does not support query history",
            	"7803": "The current browser does not support the GoBack",
            	"7804": "The current browser does not support the GoForward",
            	"7805": "Web does not support zoom",
            	"7900": "cc.math.Matrix3.assign(): current matrix equals matIn",
            	"7901": "cc.math.mat4Assign(): pOut equals pIn",
            	"7902": "cc.mat.Matrix4.assignFrom(): mat4 equals current matrix",
            	"7903": "cc.math.Matrix4 equal: pMat1 and pMat2 are same object.",
            	"7904": "cc.math.Matrix4.extractPlane: Invalid plane index",
            	"7905": "cc.math.mat4Assign(): pOut equals pIn",
            	"7906": "cc.mat.Matrix4.assignFrom(): mat4 equals current matrix",
            	"7907": "cc.math.Matrix4 equals: pMat1 and pMat2 are same object.",
            	"7908": "Invalid matrix mode specified",
            	"7909": "current quaternion is an invalid value",
            	"8000": "Can't handle this field type or size",
            	"8001": "No bytes requested",
            	"8002": "Too many bytes requested",
            	"8003": "Missing StripByteCounts!",
            	"8100": "cocos2d: ERROR: Failed to compile shader:\n %s",
            	"8101": "cocos2d: ERROR: Failed to compile vertex shader",
            	"8102": "cocos2d: ERROR: Failed to compile fragment shader",
            	"8103": "cc.GLProgram.link(): Cannot link invalid program",
            	"8104": "cocos2d: ERROR: Failed to link program: %s",
            	"8105": "cocos2d: cc.shaderCache._loadDefaultShader, error shader type",
            	"8106": "Please load the resource firset : %s",
            	"8107": "cc.GLProgram.getUniformLocationForName(): uniform name should be non-null",
            	"8108": "cc.GLProgram.getUniformLocationForName(): Invalid operation. Cannot get uniform location when program is not initialized",
            	"8109": "modelView matrix is undefined.",
            	"8200": "Please set node's active instead of rigidbody's enabled.",
            	"8300": "Should only one camera exists, please check your project.",
            	"8301": "Camera does not support Canvas Mode.",
            	"8302": "Camera.viewport is deprecated, please use setViewportInOrientedSpace instead.",
            	"8400": "Wrong type arguments, 'filePath' must be a String.",
            	"9000": "Stencil manager does not support level bigger than %d in this device.",
            	"9001": "Stencil manager is already empty, cannot pop any mask",
            	"9002": "Failed to request any buffer from a mesh buffer without accessor",
            	"9003": "The internal state of LinearBufferAccessor have severe issue and irreversible, please check the reason",
            	"9004": "Failed to allocate chunk in StaticVBAccessor, the requested buffer might be too large: %d bytes",
            	"9005": "BATCHER2D_MEM_INCREMENT is too large, the Max value for BATCHER2D_MEM_INCREMENT is 2303KB (smaller than 65536 *9* 4 / 1024 = 2304KB)",
            	"9006": "QuadRenderData is removed, please use MeshRenderData instead.",
            	"9007": "Since v3.6, Because mask changes the inheritance relationship, you can directly manipulate the rendering components under the same node to complete the operation.",
            	"9100": "texture size exceeds current device limits %d/%d",
            	"9101": "The length of the TypedArrayBuffer must be an integer.",
            	"9201": "Cannot access game frame or container.",
            	"9202": "Setting window size is not supported.",
            	"9300": "The current buffer beyond the limit in ui static component, please reduce the amount",
            	"9301": "The UI has not been initialized",
            	"9302": "Can't getGFXSampler with out device",
            	"9600": "[Physics]: please check to see if physics modules are included",
            	"9610": "[Physics]: cannon.js physics system doesn't support capsule collider",
            	"9611": "[Physics]: builtin physics system doesn't support mesh collider",
            	"9612": "[Physics]: builtin physics system doesn't support cylinder collider",
            	"9613": "[Physics]: cannon.js physics system doesn't support hinge drive and angular limit",
            	"9620": "[Physics][Ammo]: changing the mesh is not supported after the initialization is completed",
            	"9630": "[Physics]: A dynamic rigid body can not have the following collider shapes: Terrain, Plane and Non-convex Mesh. Node name: %s",
            	"9640": "[Physics][builtin]: sweep functions are not supported in builtin",
            	"9641": "[Physics][cannon.js]: sweep functions are not supported in cannon.js",
            	"10001": "The sub-mesh contains %d vertices, which beyonds the capability (%d vertices most) of renderer of your platform.",
            	"10002": "Sub-mesh may include at most %d morph targets, but you specified %d.",
            	"11000": "WebGL context lost.",
            	"12001": "BlendFactors are disabled when using custom material, please modify the blend state in the material instead.",
            	"12002": "Can't add renderable component to this node because it already have one.",
            	"12004": "SubModel can only support %d passes.",
            	"12005": "Material already initialized, request aborted.",
            	"12006": "Pass already destroyed.",
            	"12007": "This is old usage, please swap the parameters.",
            	"12008": "GeometryRenderer: too many lines.",
            	"12009": "GeometryRenderer: too many triangles.",
            	"12010": "PassUtils: illegal uniform handle, accessing uniform at offset %d",
            	"12011": "Pass: setUniform is invoked with incompatible uniform data type for binding %d, expected type is %s",
            	"12012": "Can't set a material instance to a sharedMaterial slot",
            	"12100": "The font size is too big to be fitted into texture atlas. Please switch to other label cache modes or choose a smaller font size.",
            	"12101": "The asset %s has been destroyed!",
            	"12102": "Base pass cannot override states, please use pass instance instead.",
            	"12103": "Custom pipeline create shader %s failed. Please restart editor.",
            	"12104": "Create shader %s failed.",
            	"12105": "Pass resources incomplete.",
            	"12106": "Cannot patch non-builtin macros.",
            	"12107": "Custom pipeline invalid render pass, program: %s. Please restart editor.",
            	"12108": "Custom pipeline invalid render phase, program: %s. Please restart editor.",
            	"13100": "Incorrect CCON magic.",
            	"13101": "Unknown CCON version number: %d.",
            	"13102": "CCON Format error.",
            	"13103": "Can not encode CCON binary: lack of text encoder.",
            	"13104": "Can not decode CCON binary: lack of text decoder.",
            	"14000": "State machine matched too many transitions(greater than %s) during this frame: %s.",
            	"14100": "Pool.destroy no longer take a function as parameter, Please specify destruct function in the construction of Pool instead",
            	"14200": "Can not update a static mesh.",
            	"14201": "The primitiveIndex is out of range.",
            	"14202": "meshopt asm decoder initialized",
            	"14203": "meshopt wasm decoder initialized",
            	"14204": "meshopt decoder error: %d",
            	"14300": "Can not keep world transform due to the zero scaling of parent node",
            	"14400": "Spline error: less than 2 knots.",
            	"14401": "Spline error: less than 4 knots or not a multiple of 4.\n\n<!-- Rendering algorithm reserved: 15000 - 16000 -->",
            	"15000": "Can not find corresponding diffuse map for environment lighting, use hemisphere diffuse instead, change environment lighting type to regenerate diffuse map",
            	"15001": "Can not find environment map, disable IBL lighting",
            	"15002": "Diffuse map resource is missing, please change environment lighting type to regenerate resource",
            	"15003": "The shadow visible distance is so small that CSM stratification is not effective, Please change the value of shadowDistance so that it is 10 times greater than 0.1",
            	"15004": "The native folder may be generated from older versions, please refer https://docs.cocos.com/creator/manual/en/release-notes/ to upgrade.",
            	"15100": "Camera '%s' clear flag is skybox, but skybox is disabled,  may cause strange background effect, please set camera clear flag to solid color.",
            	"16000": "'%s' is deprecated since v%s.",
            	"16001": "'%s' is deprecated since v%s, please use '%s' instead.",
            	"16002": "'%s' is removed since v%s.",
            	"16003": "'%s' is removed since v%s, please use '%s' instead.",
            	"16101": "The effect('%s') you are looking for does not exist, please confirm the effect name in the editor. NOTE: Since 3.6, the name of the built-in effect has been changed to its name in the editor, please check it out. More information please refer to https://docs.cocos.com/creator/manual/en/shader/effect-inspector.html",
            	"16201": "The asset replacing failed, can not found override asset('%s') for '%s'",
            	"16301": "node '%s' doesn't have any ModelRenderer component, this component will not work. please add ModelRenderer component first",
            	"16302": "There is no reflection probe in the scene or no probe is near the current object. No reflection probe will take effect on this object. Please create a new reflection probe or move existing ones closer.",
            	"16303": "Skin material needs floating-point render target, please check ENABLE_FLOAT_OUTPUT define in Project Settings--Macro",
            	"16304": "Skin material may need more accurate calculations, please select a head model of standard size, check the isGlobalStandardSkinObject option in the MeshRender component.",
            	"0100": "%s not yet implemented.",
            	"0200": "You should specify a valid DOM canvas element."
            };

            const ccdocument = ccwindow.document;
            let logList = null;
            let ccLog = console.log.bind(console);
            let ccWarn = ccLog;
            let ccError = ccLog;
            let ccAssert = (condition, message, ...optionalParams) => {
              if (!condition) {
                console.log(`ASSERT: ${formatString(message, ...optionalParams)}`);
              }
            };
            let ccDebug = ccLog;
            function formatString(...data) {
              return legacyCC.js.formatStr.apply(null, data);
            }
            function log(...data) {
              return ccLog(...data);
            }
            function warn(...data) {
              return ccWarn(...data);
            }
            function error(...data) {
              return ccError(...data);
            }
            function assert(condition, message, ...optionalParams) {
              return ccAssert(condition, message, ...optionalParams);
            }
            function debug(...data) {
              return ccDebug(...data);
            }
            function _resetDebugSetting(mode) {
              ccLog = ccWarn = ccError = ccAssert = ccDebug = () => {};
              if (mode === DebugMode.NONE) {
                return;
              }
              if (mode > DebugMode.ERROR) {
                const logToWebPage = msg => {
                  if (!legacyCC.game.canvas) {
                    return;
                  }
                  if (!logList) {
                    const logDiv = ccdocument.createElement('Div');
                    logDiv.setAttribute('id', 'logInfoDiv');
                    logDiv.setAttribute('width', '200');
                    logDiv.setAttribute('height', legacyCC.game.canvas.height);
                    const logDivStyle = logDiv.style;
                    logDivStyle.zIndex = '99999';
                    logDivStyle.position = 'absolute';
                    logDivStyle.top = logDivStyle.left = '0';
                    logList = ccdocument.createElement('textarea');
                    logList.setAttribute('rows', '20');
                    logList.setAttribute('cols', '30');
                    logList.setAttribute('disabled', 'true');
                    const logListStyle = logList.style;
                    logListStyle.backgroundColor = 'transparent';
                    logListStyle.borderBottom = '1px solid #cccccc';
                    logListStyle.borderTopWidth = logListStyle.borderLeftWidth = logListStyle.borderRightWidth = '0px';
                    logListStyle.borderTopStyle = logListStyle.borderLeftStyle = logListStyle.borderRightStyle = 'none';
                    logListStyle.padding = '0px';
                    logListStyle.margin = '0px';
                    logDiv.appendChild(logList);
                    legacyCC.game.canvas.parentNode.appendChild(logDiv);
                  }
                  logList.value = `${logList.value + msg}\r\n`;
                  logList.scrollTop = logList.scrollHeight;
                };
                ccError = (...data) => {
                  logToWebPage(`ERROR :  ${formatString(...data)}`);
                };
                ccAssert = (condition, message, ...optionalParams) => {
                  if (!condition) {
                    logToWebPage(`ASSERT: ${formatString(message, ...optionalParams)}`);
                  }
                };
                if (mode !== DebugMode.ERROR_FOR_WEB_PAGE) {
                  ccWarn = (...data) => {
                    logToWebPage(`WARN :  ${formatString(...data)}`);
                  };
                }
                if (mode === DebugMode.INFO_FOR_WEB_PAGE) {
                  ccLog = (...data) => {
                    logToWebPage(formatString(...data));
                  };
                }
              } else if (console) {
                if (!console.error) {
                  console.error = console.log;
                }
                if (!console.warn) {
                  console.warn = console.log;
                }
                if (console.error.bind) {
                  ccError = console.error.bind(console);
                } else {
                  ccError = console.error ;
                }
                ccAssert = (condition, message, ...optionalParams) => {
                  if (!condition) {
                    formatString(message, ...optionalParams);
                    {
                      debugger;
                    }
                  }
                };
              }
              if (mode !== DebugMode.ERROR) {
                if (console.warn.bind) {
                  ccWarn = console.warn.bind(console);
                } else {
                  ccWarn = console.warn ;
                }
              }
              if (mode <= DebugMode.INFO) {
                {
                  ccLog = console.log;
                }
              }
              if (mode <= DebugMode.VERBOSE) {
                if (typeof console.debug === 'function') {
                  const vendorDebug = console.debug.bind(console);
                  ccDebug = (...data) => vendorDebug(...data);
                }
              }
            }
            function _throw(error_) {
              {
                const stack = error_.stack;
                if (stack) {
                  error(`${error_}\n${stack}` );
                } else {
                  error(error_);
                }
                return undefined;
              }
            }
            function getTypedFormatter(type) {
              return (id, ...args) => {
                const msg = debugInfos[id] || 'unknown id' ;
                if (args.length === 0) {
                  return msg;
                }
                return formatString(msg, ...args) ;
              };
            }
            const logFormatter = getTypedFormatter();
            function logID(id, ...optionalParams) {
              log(logFormatter(id, ...optionalParams));
            }
            const warnFormatter = getTypedFormatter();
            function warnID(id, ...optionalParams) {
              warn(warnFormatter(id, ...optionalParams));
            }
            const errorFormatter = getTypedFormatter();
            function errorID(id, ...optionalParams) {
              error(errorFormatter(id, ...optionalParams));
            }
            const assertFormatter = getTypedFormatter();
            function assertID(condition, id, ...optionalParams) {
              if (condition) {
                return;
              }
              assert(false, assertFormatter(id, ...optionalParams));
            }
            let DebugMode; exports('aJ', DebugMode);
            (function (DebugMode) {
              DebugMode[DebugMode["NONE"] = 0] = "NONE";
              DebugMode[DebugMode["VERBOSE"] = 1] = "VERBOSE";
              DebugMode[DebugMode["INFO"] = 2] = "INFO";
              DebugMode[DebugMode["WARN"] = 3] = "WARN";
              DebugMode[DebugMode["ERROR"] = 4] = "ERROR";
              DebugMode[DebugMode["INFO_FOR_WEB_PAGE"] = 5] = "INFO_FOR_WEB_PAGE";
              DebugMode[DebugMode["WARN_FOR_WEB_PAGE"] = 6] = "WARN_FOR_WEB_PAGE";
              DebugMode[DebugMode["ERROR_FOR_WEB_PAGE"] = 7] = "ERROR_FOR_WEB_PAGE";
            })(DebugMode || (exports('aJ', DebugMode = {})));
            function getError(errorId, ...param) {
              return errorFormatter(errorId, ...param);
            }
            function isDisplayStats() {
              return legacyCC.profiler ? legacyCC.profiler.isShowingStats() : false;
            }
            function setDisplayStats(displayStats) {
              if (legacyCC.profiler) {
                displayStats ? legacyCC.profiler.showStats() : legacyCC.profiler.hideStats();
              }
            }

            var debug$1 = /*#__PURE__*/Object.freeze({
                __proto__: null,
                log: log,
                warn: warn,
                error: error,
                assert: assert,
                debug: debug,
                _resetDebugSetting: _resetDebugSetting,
                _throw: _throw,
                logID: logID,
                warnID: warnID,
                errorID: errorID,
                assertID: assertID,
                get DebugMode () { return DebugMode; },
                getError: getError,
                isDisplayStats: isDisplayStats,
                setDisplayStats: setDisplayStats
            });
            exports('h', debug$1);

            class MutableForwardIterator {
              constructor(array) {
                this.i = 0;
                this.array = array;
              }
              get length() {
                return this.array.length;
              }
              set length(value) {
                this.array.length = value;
                if (this.i >= value) {
                  this.i = value - 1;
                }
              }
              remove(value) {
                const index = this.array.indexOf(value);
                if (index >= 0) {
                  this.removeAt(index);
                }
              }
              removeAt(i) {
                this.array.splice(i, 1);
                if (i <= this.i) {
                  --this.i;
                }
              }
              fastRemove(value) {
                const index = this.array.indexOf(value);
                if (index >= 0) {
                  this.fastRemoveAt(index);
                }
              }
              fastRemoveAt(i) {
                const array = this.array;
                array[i] = array[array.length - 1];
                --array.length;
                if (i <= this.i) {
                  --this.i;
                }
              }
              push(item) {
                this.array.push(item);
              }
            } exports('c0', MutableForwardIterator);

            function removeAt(array, index) {
              array.splice(index, 1);
            }
            function fastRemoveAt$1(array, index) {
              const length = array.length;
              if (index < 0 || index >= length) {
                return;
              }
              array[index] = array[length - 1];
              array.length = length - 1;
            }
            function remove(array, value) {
              const index = array.indexOf(value);
              if (index >= 0) {
                removeAt(array, index);
                return true;
              } else {
                return false;
              }
            }
            function fastRemove(array, value) {
              const index = array.indexOf(value);
              if (index >= 0) {
                array[index] = array[array.length - 1];
                --array.length;
              }
            }
            function removeIf(array, predicate) {
              const index = array.findIndex(predicate);
              if (index >= 0) {
                const value = array[index];
                removeAt(array, index);
                return value;
              }
            }
            function verifyType(array, type) {
              if (array && array.length > 0) {
                for (const item of array) {
                  if (!(item instanceof type)) {
                    logID(1300);
                    return false;
                  }
                }
              }
              return true;
            }
            function removeArray(array, removals) {
              for (let i = 0, l = removals.length; i < l; i++) {
                remove(array, removals[i]);
              }
            }
            function appendObjectsAt(array, objects, index) {
              array.splice.apply(array, [index, 0, ...objects]);
              return array;
            }
            function contains$1(array, value) {
              return array.indexOf(value) >= 0;
            }
            function copy(array) {
              const len = array.length;
              const cloned = new Array(len);
              for (let i = 0; i < len; i += 1) {
                cloned[i] = array[i];
              }
              return cloned;
            }

            var array = /*#__PURE__*/Object.freeze({
                __proto__: null,
                removeAt: removeAt,
                fastRemoveAt: fastRemoveAt$1,
                remove: remove,
                fastRemove: fastRemove,
                removeIf: removeIf,
                verifyType: verifyType,
                removeArray: removeArray,
                appendObjectsAt: appendObjectsAt,
                contains: contains$1,
                copy: copy,
                MutableForwardIterator: MutableForwardIterator
            });

            class ScalableContainer {
              constructor() {
                this._poolHandle = -1;
                scalableContainerManager.addContainer(this);
              }
              destroy() {
                scalableContainerManager.removeContainer(this);
              }
            } exports('cf', ScalableContainer);
            class ScalableContainerManager {
              constructor() {
                this._pools = [];
                this._lastShrinkPassed = 0;
                this.shrinkTimeSpan = 5;
              }
              addContainer(pool) {
                if (pool._poolHandle !== -1) return;
                pool._poolHandle = this._pools.length;
                this._pools.push(pool);
              }
              removeContainer(pool) {
                if (pool._poolHandle === -1) return;
                this._pools[this._pools.length - 1]._poolHandle = pool._poolHandle;
                fastRemoveAt$1(this._pools, pool._poolHandle);
                pool._poolHandle = -1;
              }
              tryShrink() {
                for (let i = 0; i < this._pools.length; i++) {
                  this._pools[i].tryShrink();
                }
              }
              update(dt) {
                this._lastShrinkPassed += dt;
                if (this._lastShrinkPassed > this.shrinkTimeSpan) {
                  this.tryShrink();
                  this._lastShrinkPassed -= this.shrinkTimeSpan;
                }
              }
            }
            const scalableContainerManager = exports('bD', new ScalableContainerManager());

            class Pool$1 extends ScalableContainer {
              constructor(ctor, elementsPerBatch, dtor) {
                super();
                this._ctor = void 0;
                this._elementsPerBatch = void 0;
                this._nextAvail = void 0;
                this._freePool = [];
                this._dtor = void 0;
                this._ctor = ctor;
                this._dtor = dtor || null;
                this._elementsPerBatch = Math.max(elementsPerBatch, 1);
                this._nextAvail = this._elementsPerBatch - 1;
                for (let i = 0; i < this._elementsPerBatch; ++i) {
                  this._freePool.push(ctor());
                }
              }
              alloc() {
                if (this._nextAvail < 0) {
                  this._freePool.length = this._elementsPerBatch;
                  for (let i = 0; i < this._elementsPerBatch; i++) {
                    this._freePool[i] = this._ctor();
                  }
                  this._nextAvail = this._elementsPerBatch - 1;
                }
                return this._freePool[this._nextAvail--];
              }
              free(obj) {
                this._freePool[++this._nextAvail] = obj;
              }
              freeArray(objs) {
                this._freePool.length = this._nextAvail + 1;
                Array.prototype.push.apply(this._freePool, objs);
                this._nextAvail += objs.length;
              }
              tryShrink() {
                if (this._nextAvail >> 1 > this._elementsPerBatch) {
                  if (this._dtor) {
                    for (let i = this._nextAvail >> 1; i <= this._nextAvail; i++) {
                      this._dtor(this._freePool[i]);
                    }
                  }
                  this._freePool.length = this._nextAvail >> 1;
                  this._nextAvail = this._freePool.length - 1;
                }
              }
              destroy() {
                const dtor = arguments.length > 0 ? arguments[0] : null;
                if (dtor) {
                  warnID(14100);
                }
                const readDtor = dtor || this._dtor;
                if (readDtor) {
                  for (let i = 0; i <= this._nextAvail; i++) {
                    readDtor(this._freePool[i]);
                  }
                }
                this._freePool.length = 0;
                this._nextAvail = -1;
                super.destroy();
              }
            } exports('P', Pool$1);

            var _class$b;
            const NonUuidMark = '.';
            class IDGenerator {
              constructor(category) {
                this.id = void 0;
                this.prefix = void 0;
                this.id = 0 | Math.random() * 998;
                this.prefix = category ? category + NonUuidMark : '';
              }
              getNewId() {
                return this.prefix + (++this.id).toString();
              }
            } exports('ce', IDGenerator);
            _class$b = IDGenerator;
            IDGenerator.global = new _class$b('global');

            const tempCIDGenerator = new IDGenerator('TmpCId.');
            const aliasesTag = typeof Symbol === 'undefined' ? '__aliases__' : Symbol('[[Aliases]]');
            const classNameTag = '__classname__';
            const classIdTag = '__cid__';
            function isNumber(object) {
              return typeof object === 'number' || object instanceof Number;
            }
            function isString(object) {
              return typeof object === 'string' || object instanceof String;
            }
            function isEmptyObject(obj) {
              for (const key in obj) {
                return false;
              }
              return true;
            }
            const value = exports('bH', (() => {
              const descriptor = {
                value: undefined,
                enumerable: false,
                writable: false,
                configurable: true
              };
              return (object, propertyName, value_, writable, enumerable) => {
                descriptor.value = value_;
                descriptor.writable = writable;
                descriptor.enumerable = enumerable;
                Object.defineProperty(object, propertyName, descriptor);
                descriptor.value = undefined;
              };
            })());
            const getset = (() => {
              const descriptor = {
                get: undefined,
                set: undefined,
                enumerable: false
              };
              return (object, propertyName, getter, setter, enumerable = false, configurable = false) => {
                if (typeof setter === 'boolean') {
                  console.log('Set `setter` to boolean is deprecated. Please don not use like this again.');
                  enumerable = setter;
                  setter = undefined;
                }
                descriptor.get = getter;
                descriptor.set = setter;
                descriptor.enumerable = enumerable;
                descriptor.configurable = configurable;
                Object.defineProperty(object, propertyName, descriptor);
                descriptor.get = undefined;
                descriptor.set = undefined;
              };
            })();
            const get = exports('bS', (() => {
              const descriptor = {
                get: undefined,
                enumerable: false,
                configurable: false
              };
              return (object, propertyName, getter, enumerable, configurable) => {
                descriptor.get = getter;
                descriptor.enumerable = enumerable;
                descriptor.configurable = configurable;
                Object.defineProperty(object, propertyName, descriptor);
                descriptor.get = undefined;
              };
            })());
            const set = (() => {
              const descriptor = {
                set: undefined,
                enumerable: false,
                configurable: false
              };
              return (object, propertyName, setter, enumerable, configurable) => {
                descriptor.set = setter;
                descriptor.enumerable = enumerable;
                descriptor.configurable = configurable;
                Object.defineProperty(object, propertyName, descriptor);
                descriptor.set = undefined;
              };
            })();
            function createMap(forceDictMode) {
              const map = Object.create(null);
              if (forceDictMode) {
                const INVALID_IDENTIFIER_1 = '.';
                const INVALID_IDENTIFIER_2 = '/';
                map[INVALID_IDENTIFIER_1] = 1;
                map[INVALID_IDENTIFIER_2] = 1;
                delete map[INVALID_IDENTIFIER_1];
                delete map[INVALID_IDENTIFIER_2];
              }
              return map;
            }
            function getClassName(objOrCtor) {
              if (typeof objOrCtor === 'function') {
                const prototype = objOrCtor.prototype;
                if (prototype && prototype.hasOwnProperty(classNameTag) && prototype[classNameTag]) {
                  return prototype[classNameTag];
                }
                let ret = '';
                if (objOrCtor.name) {
                  ret = objOrCtor.name;
                }
                if (objOrCtor.toString) {
                  let arr;
                  const str = objOrCtor.toString();
                  if (str.charAt(0) === '[') {
                    arr = /\[\w+\s*(\w+)\]/.exec(str);
                  } else {
                    arr = /function\s*(\w+)/.exec(str);
                  }
                  if (arr && arr.length === 2) {
                    ret = arr[1];
                  }
                }
                return ret !== 'Object' ? ret : '';
              } else if (objOrCtor && objOrCtor.constructor) {
                return getClassName(objOrCtor.constructor);
              }
              return '';
            }
            function obsolete(object, obsoleted, newExpr, writable) {
              const extractPropName = /([^.]+)$/;
              const oldProp = extractPropName.exec(obsoleted)[0];
              const newProp = extractPropName.exec(newExpr)[0];
              function getter() {
                {
                  warnID(5400, obsoleted, newExpr);
                }
                return this[newProp];
              }
              function setter(value_) {
                {
                  warnID(5401, obsoleted, newExpr);
                }
                this[newProp] = value_;
              }
              if (writable) {
                getset(object, oldProp, getter, setter);
              } else {
                get(object, oldProp, getter);
              }
            }
            function obsoletes(obj, objName, props, writable) {
              for (const obsoleted in props) {
                const newName = props[obsoleted];
                obsolete(obj, `${objName}.${obsoleted}`, newName, writable);
              }
            }
            const REGEXP_NUM_OR_STR = /(%d)|(%s)/;
            const REGEXP_STR = /%s/;
            function formatStr(msg, ...subst) {
              if (arguments.length === 0) {
                return '';
              }
              if (subst.length === 0) {
                return `${msg}`;
              }
              const hasSubstitution = typeof msg === 'string' && REGEXP_NUM_OR_STR.test(msg);
              if (hasSubstitution) {
                for (const arg of subst) {
                  const regExpToTest = typeof arg === 'number' ? REGEXP_NUM_OR_STR : REGEXP_STR;
                  if (regExpToTest.test(msg)) {
                    const notReplaceFunction = `${arg}`;
                    msg = msg.replace(regExpToTest, notReplaceFunction);
                  } else {
                    msg += ` ${arg}`;
                  }
                }
              } else {
                for (const arg of subst) {
                  msg += ` ${arg}`;
                }
              }
              return msg;
            }
            function shiftArguments() {
              const len = arguments.length - 1;
              const args = new Array(len);
              for (let i = 0; i < len; ++i) {
                args[i] = arguments[i + 1];
              }
              return args;
            }
            function getPropertyDescriptor(object, propertyName) {
              while (object) {
                const pd = Object.getOwnPropertyDescriptor(object, propertyName);
                if (pd) {
                  return pd;
                }
                object = Object.getPrototypeOf(object);
              }
              return null;
            }
            function _copyProp(name, source, target) {
              const pd = getPropertyDescriptor(source, name);
              if (pd) {
                Object.defineProperty(target, name, pd);
              }
            }
            function copyAllProperties(source, target, excepts) {
              const propertyNames = Object.getOwnPropertyNames(source);
              for (let i = 0, len = propertyNames.length; i < len; ++i) {
                const propertyName = propertyNames[i];
                if (excepts.indexOf(propertyName) !== -1) {
                  continue;
                }
                _copyProp(propertyName, source, target);
              }
            }
            function addon(object, ...sources) {
              object = object || {};
              for (const source of sources) {
                if (source) {
                  if (typeof source !== 'object') {
                    errorID(5402, source);
                    continue;
                  }
                  for (const name in source) {
                    if (!(name in object)) {
                      _copyProp(name, source, object);
                    }
                  }
                }
              }
              return object;
            }
            function mixin(object, ...sources) {
              object = object || {};
              for (const source of sources) {
                if (source) {
                  if (typeof source !== 'object') {
                    errorID(5403, source);
                    continue;
                  }
                  for (const name in source) {
                    _copyProp(name, source, object);
                  }
                }
              }
              return object;
            }
            function extend(cls, base) {
              {
                if (!base) {
                  errorID(5404);
                  return;
                }
                if (!cls) {
                  errorID(5405);
                  return;
                }
                if (Object.keys(cls.prototype).length > 0) {
                  errorID(5406);
                }
              }
              for (const p in base) {
                if (base.hasOwnProperty(p)) {
                  cls[p] = base[p];
                }
              }
              cls.prototype = Object.create(base.prototype, {
                constructor: {
                  value: cls,
                  writable: true,
                  configurable: true
                }
              });
              return cls;
            }
            function getSuper(constructor) {
              const proto = constructor.prototype;
              const dunderProto = proto && Object.getPrototypeOf(proto);
              return dunderProto && dunderProto.constructor;
            }
            function isChildClassOf(subclass, superclass) {
              if (subclass && superclass) {
                if (typeof subclass !== 'function') {
                  return false;
                }
                if (typeof superclass !== 'function') {
                  {
                    warnID(3625, superclass);
                  }
                  return false;
                }
                if (subclass === superclass) {
                  return true;
                }
                for (;;) {
                  subclass = getSuper(subclass);
                  if (!subclass) {
                    return false;
                  }
                  if (subclass === superclass) {
                    return true;
                  }
                }
              }
              return false;
            }
            function clear(object) {
              for (const key of Object.keys(object)) {
                delete object[key];
              }
            }
            function isTempClassId(id) {
              return typeof id !== 'string' || id.startsWith(tempCIDGenerator.prefix);
            }
            const _idToClass = createMap(true);
            const _nameToClass = createMap(true);
            function setup(tag, table, allowExist) {
              return function (id, constructor) {
                if (constructor.prototype.hasOwnProperty(tag)) {
                  delete table[constructor.prototype[tag]];
                }
                value(constructor.prototype, tag, id);
                if (id) {
                  const registered = table[id];
                  if (!allowExist && registered && registered !== constructor) {
                    let err = `A Class already exists with the same ${tag} : "${id}".`;
                    error(err);
                  } else {
                    table[id] = constructor;
                  }
                }
              };
            }
            const _setClassId = setup('__cid__', _idToClass, false);
            const doSetClassName = setup('__classname__', _nameToClass, true);
            function setClassName(className, constructor) {
              doSetClassName(className, constructor);
              if (!constructor.prototype.hasOwnProperty(classIdTag)) {
                const id = className || tempCIDGenerator.getNewId();
                if (id) {
                  _setClassId(id, constructor);
                }
              }
            }
            function setClassAlias(target, alias) {
              const nameRegistry = _nameToClass[alias];
              const idRegistry = _idToClass[alias];
              let ok = true;
              if (nameRegistry && nameRegistry !== target) {
                error(`"${alias}" has already been set as name or alias of another class.`);
                ok = false;
              }
              if (idRegistry && idRegistry !== target) {
                error(`"${alias}" has already been set as id or alias of another class.`);
                ok = false;
              }
              if (ok) {
                let classAliases = target[aliasesTag];
                if (!classAliases) {
                  classAliases = [];
                  target[aliasesTag] = classAliases;
                }
                classAliases.push(alias);
                _nameToClass[alias] = target;
                _idToClass[alias] = target;
              }
            }
            function unregisterClass(...constructors) {
              for (const constructor of constructors) {
                const p = constructor.prototype;
                const classId = p[classIdTag];
                if (classId) {
                  delete _idToClass[classId];
                }
                const classname = p[classNameTag];
                if (classname) {
                  delete _nameToClass[classname];
                }
                const aliases = p[aliasesTag];
                if (aliases) {
                  for (let iAlias = 0; iAlias < aliases.length; ++iAlias) {
                    const alias = aliases[iAlias];
                    delete _nameToClass[alias];
                    delete _idToClass[alias];
                  }
                }
              }
            }
            function _getClassById(classId) {
              return getClassById(classId);
            }
            function getClassById(classId) {
              return _idToClass[classId];
            }
            function getClassByName(classname) {
              return _nameToClass[classname];
            }
            function _getClassId(obj, allowTempId) {
              return getClassId(obj, allowTempId);
            }
            function getClassId(obj, allowTempId) {
              allowTempId = typeof allowTempId !== 'undefined' ? allowTempId : true;
              let res;
              if (typeof obj === 'function' && obj.prototype.hasOwnProperty(classIdTag)) {
                res = obj.prototype[classIdTag];
                if (!allowTempId && (DEV ) && isTempClassId(res)) {
                  return '';
                }
                return res;
              }
              if (obj && obj.constructor) {
                const prototype = obj.constructor.prototype;
                if (prototype && prototype.hasOwnProperty(classIdTag)) {
                  res = obj[classIdTag];
                  if (!allowTempId && (DEV ) && isTempClassId(res)) {
                    return '';
                  }
                  return res;
                }
              }
              return '';
            }

            class Pool {
              get() {
                return this._get();
              }
              constructor(_0, _1) {
                this.count = void 0;
                this._pool = void 0;
                this._cleanup = void 0;
                const size = _1 === undefined ? _0 : _1;
                const cleanupFunc = _1 === undefined ? null : _0;
                this.count = 0;
                this._pool = new Array(size);
                this._cleanup = cleanupFunc;
              }
              _get() {
                if (this.count > 0) {
                  --this.count;
                  const cache = this._pool[this.count];
                  this._pool[this.count] = null;
                  return cache;
                }
                return null;
              }
              put(obj) {
                const pool = this._pool;
                if (this.count < pool.length) {
                  if (this._cleanup && this._cleanup(obj) === false) {
                    return;
                  }
                  pool[this.count] = obj;
                  ++this.count;
                }
              }
              resize(length) {
                if (length >= 0) {
                  this._pool.length = length;
                  if (this.count > length) {
                    this.count = length;
                  }
                }
              }
            } exports('bP', Pool);

            const js = {
              IDGenerator,
              Pool,
              array,
              isNumber,
              isString,
              isEmptyObject,
              getPropertyDescriptor,
              addon,
              mixin,
              extend,
              getSuper,
              isChildClassOf,
              clear,
              value,
              getset,
              get,
              set,
              unregisterClass,
              getClassName,
              setClassName,
              setClassAlias,
              getClassByName,
              getClassById,
              get _registeredClassNames() {
                return {
                  ..._nameToClass
                };
              },
              set _registeredClassNames(value) {
                clear(_nameToClass);
                Object.assign(_nameToClass, value);
              },
              get _registeredClassIds() {
                return {
                  ..._idToClass
                };
              },
              set _registeredClassIds(value) {
                clear(_idToClass);
                Object.assign(_idToClass, value);
              },
              _getClassId,
              getClassId,
              _setClassId,
              _getClassById,
              obsolete,
              obsoletes,
              formatStr,
              shiftArguments,
              createMap
            };
            legacyCC.js = js;

            var js$1 = /*#__PURE__*/Object.freeze({
                __proto__: null,
                array: array,
                js: js,
                IDGenerator: IDGenerator,
                Pool: Pool,
                isNumber: isNumber,
                isString: isString,
                isEmptyObject: isEmptyObject,
                value: value,
                getset: getset,
                get: get,
                set: set,
                createMap: createMap,
                getClassName: getClassName,
                obsolete: obsolete,
                obsoletes: obsoletes,
                formatStr: formatStr,
                shiftArguments: shiftArguments,
                getPropertyDescriptor: getPropertyDescriptor,
                copyAllProperties: copyAllProperties,
                addon: addon,
                mixin: mixin,
                extend: extend,
                getSuper: getSuper,
                isChildClassOf: isChildClassOf,
                clear: clear,
                _idToClass: _idToClass,
                _nameToClass: _nameToClass,
                _setClassId: _setClassId,
                setClassName: setClassName,
                setClassAlias: setClassAlias,
                unregisterClass: unregisterClass,
                _getClassById: _getClassById,
                getClassById: getClassById,
                getClassByName: getClassByName,
                _getClassId: _getClassId,
                getClassId: getClassId
            });
            exports('ad', js$1);

            function BitMask(obj) {
              if ('__bitmask__' in obj) {
                return obj;
              }
              value(obj, '__bitmask__', null, true);
              let lastIndex = -1;
              const keys = Object.keys(obj);
              for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                let val = obj[key];
                if (val === -1) {
                  val = ++lastIndex;
                  obj[key] = val;
                } else if (typeof val === 'number') {
                  lastIndex = val;
                } else if (typeof val === 'string' && Number.isInteger(parseFloat(key))) {
                  continue;
                }
                const reverseKey = `${val}`;
                if (key !== reverseKey) {
                  value(obj, reverseKey, key);
                }
              }
              return obj;
            }
            BitMask.isBitMask = BitMaskType => BitMaskType && BitMaskType.hasOwnProperty('__bitmask__');
            BitMask.getList = BitMaskDef => {
              if (BitMaskDef.__bitmask__) {
                return BitMaskDef.__bitmask__;
              }
              return BitMask.update(BitMaskDef);
            };
            BitMask.update = BitMaskDef => {
              if (!Array.isArray(BitMaskDef.__bitmask__)) {
                BitMaskDef.__bitmask__ = [];
              }
              const bitList = BitMaskDef.__bitmask__;
              bitList.length = 0;
              for (const name in BitMaskDef) {
                const v = BitMaskDef[name];
                if (Number.isInteger(v)) {
                  bitList.push({
                    name,
                    value: v
                  });
                }
              }
              bitList.sort((a, b) => a.value - b.value);
              return bitList;
            };
            legacyCC.BitMask = BitMask;

            function assertIsNonNullable(expr, message) {
              assertIsTrue(!(expr === null || expr === undefined), message);
            }
            function assertIsTrue(expr, message) {
              if (!expr) {
                throw new Error(`Assertion failed: ${message !== null && message !== void 0 ? message : '<no-message>'}`);
              }
            }
            function assertsArrayIndex(array, index) {
              assertIsTrue(index >= 0 && index < array.length, `Array index ${index} out of bounds: [0, ${array.length})`);
            }

            function Enum(obj) {
              if ('__enums__' in obj) {
                return obj;
              }
              value(obj, '__enums__', null, true);
              return Enum.update(obj);
            }
            Enum.update = obj => {
              let lastIndex = -1;
              const keys = Object.keys(obj);
              for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                let val = obj[key];
                if (val === -1) {
                  val = ++lastIndex;
                  obj[key] = val;
                } else if (typeof val === 'number') {
                  lastIndex = val;
                } else if (typeof val === 'string' && Number.isInteger(parseFloat(key))) {
                  continue;
                }
                const reverseKey = `${val}`;
                if (key !== reverseKey) {
                  value(obj, reverseKey, key);
                }
              }
              if (Array.isArray(obj.__enums__)) {
                updateList(obj);
              }
              return obj;
            };
            (function (_Enum) {})(Enum || (exports('aa', Enum = {})));
            Enum.isEnum = enumType => enumType && enumType.hasOwnProperty('__enums__');
            function assertIsEnum(enumType) {
              assertIsTrue(enumType.hasOwnProperty('__enums__'));
            }
            Enum.getList = enumType => {
              assertIsEnum(enumType);
              if (enumType.__enums__) {
                return enumType.__enums__;
              }
              return updateList(enumType);
            };
            function updateList(enumType) {
              assertIsEnum(enumType);
              const enums = enumType.__enums__ || [];
              enums.length = 0;
              for (const name in enumType) {
                const v = enumType[name];
                if (Number.isInteger(v)) {
                  enums.push({
                    name,
                    value: v
                  });
                }
              }
              enums.sort((a, b) => a.value - b.value);
              enumType.__enums__ = enums;
              return enums;
            }
            Enum.sortList = (enumType, compareFn) => {
              assertIsEnum(enumType);
              if (!Array.isArray(enumType.__enums__)) {
                return;
              }
              enumType.__enums__.sort(compareFn);
            };
            {
              const _TestEnum = Enum({
                ZERO: -1,
                ONE: -1,
                TWO: -1,
                THREE: -1
              });
              if (_TestEnum.ZERO !== 0 || _TestEnum.ONE !== 1 || _TestEnum.THREE !== 3) {
                errorID(7101);
              }
            }
            function ccenum(enumType) {
              if (!('__enums__' in enumType)) {
                value(enumType, '__enums__', null, true);
              }
            }
            legacyCC.Enum = Enum;

            class ValueType {
              clone() {
                errorID(100, `${getClassName(this)}.clone`);
                return this;
              }
              equals(other) {
                return false;
              }
              set(other) {
                errorID(100, `${getClassName(this)}.set`);
              }
              toString() {
                return `${''}`;
              }
            } exports('ac', ValueType);
            setClassName('cc.ValueType', ValueType);
            legacyCC.ValueType = ValueType;

            var Category;
            (function (Category) {
              Category["PATH"] = "path";
              Category["ENGINE"] = "engine";
              Category["ASSETS"] = "assets";
              Category["SCRIPTING"] = "scripting";
              Category["PHYSICS"] = "physics";
              Category["RENDERING"] = "rendering";
              Category["LAUNCH"] = "launch";
              Category["SCREEN"] = "screen";
              Category["SPLASH_SCREEN"] = "splashScreen";
              Category["ANIMATION"] = "animation";
              Category["PROFILING"] = "profiling";
              Category["PLUGINS"] = "plugins";
              Category["XR"] = "xr";
            })(Category || (Category = {}));
            class Settings {
              constructor() {
                this._settings = {};
                this._override = {};
              }
              init(path = '', overrides = {}) {
                for (const categoryName in overrides) {
                  const category = overrides[categoryName];
                  if (category) {
                    for (const name in category) {
                      this.overrideSettings(categoryName, name, category[name]);
                    }
                  }
                }
                if (!path) return Promise.resolve();
                {
                  if (window.oh && window.scriptEngineType === 'napi') {
                    return new Promise((resolve, reject) => {
                      const settingsModule = '../settings.js';
                      module.import(settingsModule).then(res => {
                        this._settings = res.default;
                        resolve();
                      }).catch(e => reject(e));
                    });
                  }
                }
                return new Promise((resolve, reject) => {
                  if (!path.startsWith('http')) {
                    {
                      const result = fsUtils.readJsonSync(path);
                      if (result instanceof Error) {
                        reject(result);
                      } else {
                        this._settings = result;
                        resolve();
                      }
                    }
                  } else {
                    const xhr = new XMLHttpRequest();
                    xhr.open('GET', path);
                    xhr.responseType = 'text';
                    xhr.onload = () => {
                      this._settings = JSON.parse(xhr.response);
                      resolve();
                    };
                    xhr.onerror = () => {
                      reject(new Error('request settings failed!'));
                    };
                    xhr.send(null);
                  }
                });
              }
              overrideSettings(category, name, value) {
                if (!(category in this._override)) {
                  this._override[category] = {};
                }
                this._override[category][name] = value;
              }
              querySettings(category, name) {
                if (category in this._override) {
                  const categorySettings = this._override[category];
                  if (categorySettings && name in categorySettings) {
                    return categorySettings[name];
                  }
                }
                if (category in this._settings) {
                  const categorySettings = this._settings[category];
                  if (categorySettings && name in categorySettings) {
                    return categorySettings[name];
                  }
                }
                return null;
              }
            } exports('aZ', Settings);
            Settings.Category = Category;
            const settings = exports('a_', new Settings());
            legacyCC.settings = settings;

            const _PORTRAIT = 1;
            const _PORTRAIT_UPSIDE_DOWN = _PORTRAIT << 1;
            const _LEFT = _PORTRAIT << 2;
            const _RIGHT = _PORTRAIT << 3;
            const _LANDSCAPE = _LEFT | _RIGHT;
            const _AUTO = _PORTRAIT | _LANDSCAPE;
            let Orientation; exports('bX', Orientation);
            (function (Orientation) {
              Orientation[Orientation["PORTRAIT"] = _PORTRAIT] = "PORTRAIT";
              Orientation[Orientation["PORTRAIT_UPSIDE_DOWN"] = _PORTRAIT_UPSIDE_DOWN] = "PORTRAIT_UPSIDE_DOWN";
              Orientation[Orientation["LANDSCAPE_LEFT"] = _LEFT] = "LANDSCAPE_LEFT";
              Orientation[Orientation["LANDSCAPE_RIGHT"] = _RIGHT] = "LANDSCAPE_RIGHT";
              Orientation[Orientation["LANDSCAPE"] = _LANDSCAPE] = "LANDSCAPE";
              Orientation[Orientation["AUTO"] = _AUTO] = "AUTO";
            })(Orientation || (exports('bX', Orientation = {})));

            const SUPPORT_TEXTURE_FORMATS = ['.astc', '.pkm', '.pvr', '.webp', '.jpg', '.jpeg', '.bmp', '.png'];
            const KEY = {
              none: 0,
              back: 6,
              menu: 18,
              backspace: 8,
              tab: 9,
              enter: 13,
              shift: 16,
              ctrl: 17,
              alt: 18,
              pause: 19,
              capslock: 20,
              escape: 27,
              space: 32,
              pageup: 33,
              pagedown: 34,
              end: 35,
              home: 36,
              left: 37,
              up: 38,
              right: 39,
              down: 40,
              select: 41,
              insert: 45,
              Delete: 46,
              0: 48,
              1: 49,
              2: 50,
              3: 51,
              4: 52,
              5: 53,
              6: 54,
              7: 55,
              8: 56,
              9: 57,
              a: 65,
              b: 66,
              c: 67,
              d: 68,
              e: 69,
              f: 70,
              g: 71,
              h: 72,
              i: 73,
              j: 74,
              k: 75,
              l: 76,
              m: 77,
              n: 78,
              o: 79,
              p: 80,
              q: 81,
              r: 82,
              s: 83,
              t: 84,
              u: 85,
              v: 86,
              w: 87,
              x: 88,
              y: 89,
              z: 90,
              num0: 96,
              num1: 97,
              num2: 98,
              num3: 99,
              num4: 100,
              num5: 101,
              num6: 102,
              num7: 103,
              num8: 104,
              num9: 105,
              '*': 106,
              '+': 107,
              '-': 109,
              numdel: 110,
              '/': 111,
              f1: 112,
              f2: 113,
              f3: 114,
              f4: 115,
              f5: 116,
              f6: 117,
              f7: 118,
              f8: 119,
              f9: 120,
              f10: 121,
              f11: 122,
              f12: 123,
              numlock: 144,
              scrolllock: 145,
              ';': 186,
              semicolon: 186,
              equal: 187,
              '=': 187,
              ',': 188,
              comma: 188,
              dash: 189,
              '.': 190,
              period: 190,
              forwardslash: 191,
              grave: 192,
              '[': 219,
              openbracket: 219,
              backslash: 220,
              ']': 221,
              closebracket: 221,
              quote: 222,
              dpadLeft: 1000,
              dpadRight: 1001,
              dpadUp: 1003,
              dpadDown: 1004,
              dpadCenter: 1005
            };
            const macro = exports('aM', {
              SUPPORT_TEXTURE_FORMATS,
              KEY,
              RAD: Math.PI / 180,
              DEG: 180 / Math.PI,
              REPEAT_FOREVER: Number.MAX_VALUE - 1,
              FLT_EPSILON: 0.0000001192092896,
              ORIENTATION_PORTRAIT: Orientation.PORTRAIT,
              ORIENTATION_PORTRAIT_UPSIDE_DOWN: Orientation.PORTRAIT_UPSIDE_DOWN,
              ORIENTATION_LANDSCAPE: Orientation.LANDSCAPE,
              ORIENTATION_LANDSCAPE_LEFT: Orientation.LANDSCAPE_LEFT,
              ORIENTATION_LANDSCAPE_RIGHT: Orientation.LANDSCAPE_RIGHT,
              ORIENTATION_AUTO: Orientation.AUTO,
              ENABLE_TILEDMAP_CULLING: true,
              TOUCH_TIMEOUT: 5000,
              ENABLE_TRANSPARENT_CANVAS: false,
              ENABLE_WEBGL_ANTIALIAS: true,
              ENABLE_FLOAT_OUTPUT: false,
              CLEANUP_IMAGE_CACHE: false,
              ENABLE_MULTI_TOUCH: true,
              MAX_LABEL_CANVAS_POOL_SIZE: 20,
              ENABLE_WEBGL_HIGHP_STRUCT_VALUES: false,
              BATCHER2D_MEM_INCREMENT: 144,
              CUSTOM_PIPELINE_NAME: '',
              init() {
                {
                  this.CLEANUP_IMAGE_CACHE = true;
                }
                const defaultValues = settings.querySettings(Settings.Category.ENGINE, 'macros');
                if (defaultValues) {
                  for (const key in defaultValues) {
                    macro[key] = defaultValues[key];
                  }
                }
                {
                  this.ENABLE_WEBGL_ANTIALIAS = true;
                }
              }
            });
            legacyCC.macro = macro;

            function setTimeoutRAF(callback, delay, ...args) {
              var _globalThis$__globalX;
              const start = performance.now();
              const raf = requestAnimationFrame || window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
              if (raf === undefined || (_globalThis$__globalX = globalThis.__globalXR) !== null && _globalThis$__globalX !== void 0 && _globalThis$__globalX.isWebXR) {
                return setTimeout(callback, delay, ...args);
              }
              const handleRAF = () => {
                if (performance.now() - start < delay) {
                  raf(handleRAF);
                } else {
                  callback(...args);
                }
              };
              return raf(handleRAF);
            }

            const BUILTIN_CLASSID_RE = exports('bN', /^(?:cc|dragonBones|sp|ccsg)\..+/);
            const BASE64_KEYS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            const values = new Array(123);
            for (let i = 0; i < 123; ++i) {
              values[i] = 64;
            }
            for (let i = 0; i < 64; ++i) {
              values[BASE64_KEYS.charCodeAt(i)] = i;
            }
            const BASE64_VALUES = exports('cc', values);
            function propertyDefine(ctor, sameNameGetSets, diffNameGetSets) {
              function define(np, propName, getter, setter) {
                const pd = Object.getOwnPropertyDescriptor(np, propName);
                if (pd) {
                  if (pd.get) {
                    np[getter] = pd.get;
                  }
                  if (pd.set && setter) {
                    np[setter] = pd.set;
                  }
                } else {
                  const getterFunc = np[getter];
                  if (!getterFunc) {
                    const clsName = legacyCC.Class._isCCClass(ctor) && getClassName(ctor) || ctor.name || '(anonymous class)';
                    warnID(5700, propName, getter, clsName);
                  } else {
                    getset(np, propName, getterFunc, np[setter]);
                  }
                }
              }
              let propName;
              const np = ctor.prototype;
              for (let i = 0; i < sameNameGetSets.length; i++) {
                propName = sameNameGetSets[i];
                const suffix = propName[0].toUpperCase() + propName.slice(1);
                define(np, propName, `get${suffix}`, `set${suffix}`);
              }
              for (propName in diffNameGetSets) {
                const gs = diffNameGetSets[propName];
                define(np, propName, gs[0], gs[1]);
              }
            }
            function pushToMap(map, key, value, pushFront) {
              const exists = map[key];
              if (exists) {
                if (Array.isArray(exists)) {
                  if (pushFront) {
                    exists.push(exists[0]);
                    exists[0] = value;
                  } else {
                    exists.push(value);
                  }
                } else {
                  map[key] = pushFront ? [value, exists] : [exists, value];
                }
              } else {
                map[key] = value;
              }
            }
            function contains(refNode, otherNode) {
              if (typeof refNode.contains === 'function') {
                return refNode.contains(otherNode);
              } else if (typeof refNode.compareDocumentPosition === 'function') {
                return !!(refNode.compareDocumentPosition(otherNode) & 16);
              } else {
                let node = otherNode.parentNode;
                if (node) {
                  do {
                    if (node === refNode) {
                      return true;
                    } else {
                      node = node.parentNode;
                    }
                  } while (node !== null);
                }
                return false;
              }
            }
            function isDomNode(node) {
              if (typeof window === 'object' && typeof Node === 'function') {
                return node instanceof Node;
              } else {
                return !!node && typeof node === 'object' && typeof node.nodeType === 'number' && typeof node.nodeName === 'string';
              }
            }
            function callInNextTick(callback, p1, p2) {
              if (callback) {
                setTimeoutRAF(() => {
                  callback(p1, p2);
                }, 0);
              }
            }
            function tryCatchFunctor_EDITOR(funcName) {
              return Function('target', `${'try {\n' + '  target.'}${funcName}();\n` + `}\n` + `catch (e) {\n` + `  cc._throw(e);\n` + `}`);
            }
            function isPlainEmptyObj_DEV(obj) {
              if (!obj || obj.constructor !== Object) {
                return false;
              }
              return isEmptyObject(obj);
            }
            function clampf(value, min_inclusive, max_inclusive) {
              if (min_inclusive > max_inclusive) {
                const temp = min_inclusive;
                min_inclusive = max_inclusive;
                max_inclusive = temp;
              }
              return value < min_inclusive ? min_inclusive : value < max_inclusive ? value : max_inclusive;
            }
            function degreesToRadians(angle) {
              return angle * macro.RAD;
            }
            function radiansToDegrees(angle) {
              return angle * macro.DEG;
            }
            legacyCC.misc = {
              BUILTIN_CLASSID_RE,
              BASE64_VALUES,
              propertyDefine,
              pushToMap,
              contains,
              isDomNode,
              callInNextTick,
              isPlainEmptyObj_DEV,
              clampf,
              degreesToRadians,
              radiansToDegrees
            };

            var misc = /*#__PURE__*/Object.freeze({
                __proto__: null,
                BUILTIN_CLASSID_RE: BUILTIN_CLASSID_RE,
                BASE64_VALUES: BASE64_VALUES,
                propertyDefine: propertyDefine,
                pushToMap: pushToMap,
                contains: contains,
                isDomNode: isDomNode,
                callInNextTick: callInNextTick,
                tryCatchFunctor_EDITOR: tryCatchFunctor_EDITOR,
                isPlainEmptyObj_DEV: isPlainEmptyObj_DEV,
                clampf: clampf,
                degreesToRadians: degreesToRadians,
                radiansToDegrees: radiansToDegrees
            });
            exports('ae', misc);

            const DELIMETER$1 = '$_$';
            function createAttrsSingle(owner, superAttrs) {
              const attrs = superAttrs ? Object.create(superAttrs) : {};
              value(owner, '__attrs__', attrs);
              return attrs;
            }
            function createAttrs(subclass) {
              if (typeof subclass !== 'function') {
                const instance = subclass;
                return createAttrsSingle(instance, getClassAttrs(instance.constructor));
              }
              let superClass;
              const chains = legacyCC.Class.getInheritanceChain(subclass);
              for (let i = chains.length - 1; i >= 0; i--) {
                const cls = chains[i];
                const attrs = cls.hasOwnProperty('__attrs__') && cls.__attrs__;
                if (!attrs) {
                  superClass = chains[i + 1];
                  createAttrsSingle(cls, superClass && superClass.__attrs__);
                }
              }
              superClass = chains[0];
              createAttrsSingle(subclass, superClass && superClass.__attrs__);
              return subclass.__attrs__;
            }
            function attr(constructor, propertyName) {
              const attrs = getClassAttrs(constructor);
              const prefix = propertyName + DELIMETER$1;
              const ret = {};
              for (const key in attrs) {
                if (key.startsWith(prefix)) {
                  ret[key.slice(prefix.length)] = attrs[key];
                }
              }
              return ret;
            }
            function getClassAttrs(constructor) {
              return constructor.hasOwnProperty('__attrs__') && constructor.__attrs__ || createAttrs(constructor);
            }
            function setClassAttr(ctor, propName, key, value) {
              getClassAttrs(ctor)[propName + DELIMETER$1 + key] = value;
            }
            class PrimitiveType {
              constructor(name, defaultValue) {
                this.name = void 0;
                this.default = void 0;
                this.name = name;
                this.default = defaultValue;
              }
              toString() {
                return this.name;
              }
            }
            const CCInteger = exports('at', new PrimitiveType('Integer', 0));
            legacyCC.Integer = CCInteger;
            legacyCC.CCInteger = CCInteger;
            const CCFloat = exports('au', new PrimitiveType('Float', 0.0));
            legacyCC.Float = CCFloat;
            legacyCC.CCFloat = CCFloat;
            const CCBoolean = exports('av', new PrimitiveType('Boolean', false));
            legacyCC.Boolean = CCBoolean;
            legacyCC.CCBoolean = CCBoolean;
            const CCString = exports('aw', new PrimitiveType('String', ''));
            legacyCC.String = CCString;
            legacyCC.CCString = CCString;
            function getTypeChecker_ET(type, attributeName) {
              return function (constructor, mainPropertyName) {
                const propInfo = `"${getClassName(constructor)}.${mainPropertyName}"`;
                const mainPropAttrs = attr(constructor, mainPropertyName);
                let mainPropAttrsType = mainPropAttrs.type;
                if (mainPropAttrsType === CCInteger || mainPropAttrsType === CCFloat) {
                  mainPropAttrsType = 'Number';
                } else if (mainPropAttrsType === CCString || mainPropAttrsType === CCBoolean) {
                  mainPropAttrsType = `${mainPropAttrsType}`;
                }
                if (mainPropAttrsType !== type) {
                  warnID(3604, propInfo);
                  return;
                }
                if (!mainPropAttrs.hasOwnProperty('default')) {
                  return;
                }
                const defaultVal = mainPropAttrs.default;
                if (typeof defaultVal === 'undefined') {
                  return;
                }
                const isContainer = Array.isArray(defaultVal) || isPlainEmptyObj_DEV(defaultVal);
                if (isContainer) {
                  return;
                }
                const defaultType = typeof defaultVal;
                const type_lowerCase = type.toLowerCase();
                if (defaultType === type_lowerCase) {
                  if (type_lowerCase === 'object') {
                    if (defaultVal && !(defaultVal instanceof mainPropAttrs.ctor)) {
                      warnID(3605, propInfo, getClassName(mainPropAttrs.ctor));
                    } else {
                      return;
                    }
                  } else if (type !== 'Number') {
                    warnID(3606, attributeName, propInfo, type);
                  }
                } else if (defaultType !== 'function') {
                  if (type === CCString.default && defaultVal == null) {
                    warnID(3607, propInfo);
                  } else {
                    warnID(3611, attributeName, propInfo, defaultType);
                  }
                } else {
                  return;
                }
                delete mainPropAttrs.type;
              };
            }
            function getObjTypeChecker_ET(typeCtor) {
              return function (classCtor, mainPropName) {
                getTypeChecker_ET('Object', 'type')(classCtor, mainPropName);
                const defaultDef = getClassAttrs(classCtor)[`${mainPropName + DELIMETER$1}default`];
                const defaultVal = legacyCC.Class.getDefault(defaultDef);
                if (!Array.isArray(defaultVal) && isChildClassOf(typeCtor, legacyCC.ValueType)) {
                  const typename = getClassName(typeCtor);
                  const info = formatStr('No need to specify the "type" of "%s.%s" because %s is a child class of ValueType.', getClassName(classCtor), mainPropName, typename);
                  if (defaultDef) {
                    log(info);
                  } else {
                    warnID(3612, info, typename, getClassName(classCtor), mainPropName, typename);
                  }
                }
              };
            }

            var attributeUtils = /*#__PURE__*/Object.freeze({
                __proto__: null,
                DELIMETER: DELIMETER$1,
                createAttrsSingle: createAttrsSingle,
                createAttrs: createAttrs,
                attr: attr,
                getClassAttrs: getClassAttrs,
                setClassAttr: setClassAttr,
                PrimitiveType: PrimitiveType,
                CCInteger: CCInteger,
                CCFloat: CCFloat,
                CCBoolean: CCBoolean,
                CCString: CCString,
                getTypeChecker_ET: getTypeChecker_ET,
                getObjTypeChecker_ET: getObjTypeChecker_ET
            });

            function parseType(val, type, className, propName) {
              if (Array.isArray(type)) {
                if (type.length > 0) {
                  val.type = type = type[0];
                } else {
                  return errorID(5508, className, propName);
                }
              }
              if (typeof type === 'function') {
                if (type === String) {
                  val.type = legacyCC.String;
                } else if (type === Boolean) {
                  val.type = legacyCC.Boolean;
                } else if (type === Number) {
                  val.type = legacyCC.Float;
                }
              }
            }
            function getBaseClassWherePropertyDefined_DEV(propName, cls) {
              {
                let res;
                for (; cls && cls.__props__ && cls.__props__.indexOf(propName) !== -1; cls = cls.$super) {
                  res = cls;
                }
                if (!res) {
                  error('unknown error');
                }
                return res;
              }
            }
            function _wrapOptions(isGetset, _default, type) {
              const res = isGetset || typeof _default === 'undefined' ? {
                _short: true
              } : {
                _short: true,
                default: _default
              };
              if (type) {
                res.type = type;
              }
              return res;
            }
            function getFullFormOfProperty(options, isGetset) {
              const isLiteral = options && options.constructor === Object;
              if (!isLiteral) {
                if (Array.isArray(options) && options.length > 0) {
                  return _wrapOptions(isGetset, [], options);
                } else if (typeof options === 'function') {
                  const type = options;
                  return _wrapOptions(isGetset, isChildClassOf(type, legacyCC.ValueType) ? new type() : null, type);
                } else if (options instanceof PrimitiveType) {
                  return _wrapOptions(isGetset, undefined, options);
                } else {
                  return _wrapOptions(isGetset, options);
                }
              }
              return null;
            }
            function preprocessAttrs(properties, className, cls) {
              for (const propName in properties) {
                let val = properties[propName];
                const fullForm = getFullFormOfProperty(val, false);
                if (fullForm) {
                  val = properties[propName] = fullForm;
                }
                if (val) {
                  if (!val.override && cls.__props__.indexOf(propName) !== -1) {
                    const baseClass = getClassName(getBaseClassWherePropertyDefined_DEV(propName, cls));
                    warnID(5517, className, propName, baseClass, propName);
                  }
                  const notify = val.notify;
                  if (notify) {
                    {
                      error('not yet support notify attributes.');
                    }
                  }
                  if ('type' in val) {
                    parseType(val, val.type, className, propName);
                  }
                }
              }
            }
            const CALL_SUPER_DESTROY_REG_DEV = /\b\._super\b|destroy.*\.call\s*\(\s*\w+\s*[,|)]/;
            function doValidateMethodWithProps_DEV(func, funcName, className, cls, base) {
              if (cls.__props__ && cls.__props__.indexOf(funcName) >= 0) {
                const baseClassName = getClassName(getBaseClassWherePropertyDefined_DEV(funcName, cls));
                errorID(3648, className, funcName, baseClassName);
                return false;
              }
              if (funcName === 'destroy' && isChildClassOf(base, legacyCC.Component) && !CALL_SUPER_DESTROY_REG_DEV.test(func)) {
                error(`Overwriting '${funcName}' function in '${className}' class without calling super is not allowed. Call the super function in '${funcName}' please.`);
              }
            }

            let requiringFrames = [];
            function push(module, uuid, script, importMeta) {
              if (script === undefined) {
                script = uuid;
                uuid = '';
              }
              requiringFrames.push({
                uuid,
                script,
                module,
                exports: module.exports,
                beh: null,
                importMeta
              });
            }
            function pop() {
              const frameInfo = requiringFrames.pop();
              const module = frameInfo.module;
              let exports = module.exports;
              if (exports === frameInfo.exports) {
                for (const anykey in exports) {
                  return;
                }
                module.exports = exports = frameInfo.cls;
              }
            }
            function peek() {
              return requiringFrames[requiringFrames.length - 1];
            }
            legacyCC._RF = {
              push,
              pop,
              peek
            };

            let PropertyStashInternalFlag; exports('cw', PropertyStashInternalFlag);
            (function (PropertyStashInternalFlag) {
              PropertyStashInternalFlag[PropertyStashInternalFlag["STANDALONE"] = 1] = "STANDALONE";
              PropertyStashInternalFlag[PropertyStashInternalFlag["IMPLICIT_VISIBLE"] = 2] = "IMPLICIT_VISIBLE";
              PropertyStashInternalFlag[PropertyStashInternalFlag["IMPLICIT_SERIALIZABLE"] = 4] = "IMPLICIT_SERIALIZABLE";
            })(PropertyStashInternalFlag || (exports('cw', PropertyStashInternalFlag = {})));

            function setPropertyEnumType(objectOrConstructor, propertyName, enumType) {
              setPropertyEnumTypeOnAttrs(getClassAttrs(objectOrConstructor), propertyName, enumType);
            }
            function setPropertyEnumTypeOnAttrs(attrs, propertyName, enumType) {
              attrs[`${propertyName}${DELIMETER$1}type`] = 'Enum';
              attrs[`${propertyName}${DELIMETER$1}enumList`] = Enum.getList(enumType);
            }

            const DELIMETER = DELIMETER$1;
            const CCCLASS_TAG = '__ctors__';
            const ENUM_TAG = exports('bj', 'Enum');
            const BITMASK_TAG = exports('bk', 'BitMask');
            function pushUnique(array, item) {
              if (array.indexOf(item) < 0) {
                array.push(item);
              }
            }
            function appendProp(cls, name) {
              {
                if (name.indexOf('.') !== -1) {
                  errorID(3634);
                  return;
                }
              }
              pushUnique(cls.__props__, name);
            }
            function defineProp(cls, className, propName, val) {
              {
                if (CCClass.getInheritanceChain(cls).some(x => x.prototype.hasOwnProperty(propName))) {
                  errorID(3637, className, propName, className);
                  return;
                }
              }
              appendProp(cls, propName);
              parseAttributes(cls, val, className, propName, false);
            }
            function defineGetSet(cls, name, propName, val) {
              const getter = val.get;
              const setter = val.set;
              if (getter) {
                parseAttributes(cls, val, name, propName, true);
                setClassAttr(cls, propName, 'serializable', false);
                {
                  appendProp(cls, propName);
                }
                {
                  setClassAttr(cls, propName, 'hasGetter', true);
                }
              }
              if (setter) {
                {
                  setClassAttr(cls, propName, 'hasSetter', true);
                }
              }
            }
            function getDefault(defaultVal) {
              if (typeof defaultVal === 'function') {
                {
                  return defaultVal();
                }
              }
              return defaultVal;
            }
            function doDefine(className, baseClass, options) {
              const ctor = options.ctor;
              {
                if (CCClass._isCCClass(ctor)) {
                  errorID(3618, className);
                }
              }
              value(ctor, CCCLASS_TAG, true, true);
              ctor.prototype;
              if (baseClass) {
                ctor.$super = baseClass;
              }
              setClassName(className, ctor);
              return ctor;
            }
            function define(className, baseClass, options) {
              const Component = legacyCC.Component;
              const frame = peek();
              if (frame && isChildClassOf(baseClass, Component)) {
                if (isChildClassOf(frame.cls, Component)) {
                  errorID(3615);
                  return null;
                }
                if (frame.uuid && className) ;
                className = className || frame.script;
              }
              const cls = doDefine(className, baseClass, options);
              if (frame) {
                if (isChildClassOf(baseClass, Component)) {
                  const uuid = frame.uuid;
                  if (uuid) {
                    _setClassId(uuid, cls);
                  }
                  frame.cls = cls;
                } else if (!isChildClassOf(frame.cls, Component)) {
                  frame.cls = cls;
                }
              }
              return cls;
            }
            function getNewValueTypeCodeJit(value) {
              const clsName = getClassName(value);
              const type = value.constructor;
              let res = `new ${clsName}(`;
              for (let i = 0; i < type.__props__.length; i++) {
                const prop = type.__props__[i];
                const propVal = value[prop];
                if (typeof propVal === 'object') {
                  errorID(3641, clsName);
                  return `new ${clsName}()`;
                }
                res += propVal;
                if (i < type.__props__.length - 1) {
                  res += ',';
                }
              }
              return `${res})`;
            }
            function escapeForJS(s) {
              return JSON.stringify(s).replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
            }
            const IDENTIFIER_RE = /^[A-Za-z_$][0-9A-Za-z_$]*$/;
            function declareProperties(cls, className, properties, baseClass) {
              cls.__props__ = [];
              if (baseClass && baseClass.__props__) {
                cls.__props__ = baseClass.__props__.slice();
              }
              if (properties) {
                preprocessAttrs(properties, className, cls);
                for (const propName in properties) {
                  const val = properties[propName];
                  if (!val.get && !val.set) {
                    defineProp(cls, className, propName, val);
                  } else {
                    defineGetSet(cls, className, propName, val);
                  }
                }
              }
              const attrs = getClassAttrs(cls);
              cls.__values__ = cls.__props__.filter(prop => attrs[`${prop}${DELIMETER}serializable`] !== false);
            }
            function CCClass(options) {
              let name = options.name;
              const base = options.extends;
              const cls = define(name, base, options);
              if (!name) {
                name = legacyCC.js.getClassName(cls);
              }
              cls._sealed = true;
              if (base) {
                base._sealed = false;
              }
              const properties = options.properties;
              declareProperties(cls, name, properties, base);
              const editor = options.editor;
              if (editor) {
                if (isChildClassOf(base, legacyCC.Component)) {
                  legacyCC.Component._registerEditorProps(cls, editor);
                } else {
                  warnID(3623, name);
                }
              }
              return cls;
            }
            CCClass._isCCClass = function isCCClass(constructor) {
              var _constructor$hasOwnPr;
              return constructor === null || constructor === void 0 ? void 0 : (_constructor$hasOwnPr = constructor.hasOwnProperty) === null || _constructor$hasOwnPr === void 0 ? void 0 : _constructor$hasOwnPr.call(constructor, CCCLASS_TAG);
            };
            CCClass.fastDefine = function (className, constructor, serializableFields) {
              setClassName(className, constructor);
              const props = constructor.__props__ = constructor.__values__ = Object.keys(serializableFields);
              const attrs = getClassAttrs(constructor);
              for (let i = 0; i < props.length; i++) {
                const key = props[i];
                attrs[`${key + DELIMETER}visible`] = false;
                attrs[`${key + DELIMETER}default`] = serializableFields[key];
              }
            };
            CCClass.Attr = attributeUtils;
            CCClass.attr = attr;
            function isCCClassOrFastDefined(constructor) {
              var _constructor$hasOwnPr2;
              return constructor === null || constructor === void 0 ? void 0 : (_constructor$hasOwnPr2 = constructor.hasOwnProperty) === null || _constructor$hasOwnPr2 === void 0 ? void 0 : _constructor$hasOwnPr2.call(constructor, '__values__');
            }
            CCClass.isCCClassOrFastDefined = isCCClassOrFastDefined;
            function getInheritanceChain(constructor) {
              const chain = [];
              for (;;) {
                constructor = getSuper(constructor);
                if (!constructor) {
                  break;
                }
                if (constructor !== Object) {
                  chain.push(constructor);
                }
              }
              return chain;
            }
            CCClass.getInheritanceChain = getInheritanceChain;
            const PrimitiveTypes = {
              Integer: 'Number',
              Float: 'Number',
              Boolean: 'Boolean',
              String: 'String'
            };
            function parseAttributes(constructor, attributes, className, propertyName, usedInGetter) {
              const ERR_Type = 'The %s of %s must be type %s' ;
              let attrs = null;
              let propertyNamePrefix = '';
              function initAttrs() {
                propertyNamePrefix = propertyName + DELIMETER;
                return attrs = getClassAttrs(constructor);
              }
              if ('type' in attributes && typeof attributes.type === 'undefined') {
                warnID(3660, propertyName, className);
              }
              const type = attributes.type;
              if (type) {
                const primitiveType = PrimitiveTypes[type];
                if (primitiveType) {
                  (attrs || initAttrs())[`${propertyNamePrefix}type`] = type;
                } else if (type === 'Object') {
                  {
                    errorID(3644, className, propertyName);
                  }
                } else if (typeof type === 'object') {
                  if (Enum.isEnum(type)) {
                    setPropertyEnumTypeOnAttrs(attrs || initAttrs(), propertyName, type);
                  } else if (BitMask.isBitMask(type)) {
                    (attrs || initAttrs())[`${propertyNamePrefix}type`] = BITMASK_TAG;
                    attrs[`${propertyNamePrefix}bitmaskList`] = BitMask.getList(type);
                  } else {
                    errorID(3645, className, propertyName, type);
                  }
                } else if (typeof type === 'function') {
                  (attrs || initAttrs())[`${propertyNamePrefix}type`] = 'Object';
                  attrs[`${propertyNamePrefix}ctor`] = type;
                } else {
                  errorID(3646, className, propertyName, type);
                }
              }
              if ('default' in attributes) {
                (attrs || initAttrs())[`${propertyNamePrefix}default`] = attributes.default;
              }
              const parseSimpleAttribute = (attributeName, expectType) => {
                if (attributeName in attributes) {
                  const val = attributes[attributeName];
                  if (typeof val === expectType) {
                    (attrs || initAttrs())[propertyNamePrefix + attributeName] = val;
                  } else {
                    error(ERR_Type, attributeName, className, propertyName, expectType);
                  }
                }
              };
              if (attributes.editorOnly) {
                if (usedInGetter) {
                  errorID(3613, 'editorOnly', className, propertyName);
                } else {
                  (attrs || initAttrs())[`${propertyNamePrefix}editorOnly`] = true;
                }
              }
              {
                parseSimpleAttribute('displayName', 'string');
                parseSimpleAttribute('displayOrder', 'number');
                parseSimpleAttribute('multiline', 'boolean');
                parseSimpleAttribute('radian', 'boolean');
                if (attributes.readonly) {
                  (attrs || initAttrs())[`${propertyNamePrefix}readonly`] = attributes.readonly;
                }
                parseSimpleAttribute('tooltip', 'string');
                if (attributes.group) {
                  (attrs || initAttrs())[`${propertyNamePrefix}group`] = attributes.group;
                }
                parseSimpleAttribute('slide', 'boolean');
                parseSimpleAttribute('unit', 'string');
                parseSimpleAttribute('userData', 'object');
                parseSimpleAttribute('radioGroup', 'boolean');
              }
              const isStandaloneMode = attributes.__internalFlags & PropertyStashInternalFlag.STANDALONE;
              let normalizedSerializable;
              if (isStandaloneMode) {
                normalizedSerializable = attributes.serializable === true || (attributes.__internalFlags & PropertyStashInternalFlag.IMPLICIT_SERIALIZABLE) !== 0;
              } else if (attributes.serializable === false) {
                normalizedSerializable = false;
                if (usedInGetter) {
                  errorID(3613, 'serializable', className, propertyName);
                }
              }
              if (typeof normalizedSerializable !== 'undefined') {
                (attrs || initAttrs())[`${propertyNamePrefix}serializable`] = normalizedSerializable;
              }
              parseSimpleAttribute('formerlySerializedAs', 'string');
              {
                if ('animatable' in attributes) {
                  (attrs || initAttrs())[`${propertyNamePrefix}animatable`] = attributes.animatable;
                }
              }
              {
                const visible = attributes.visible;
                let normalizedVisible;
                switch (typeof visible) {
                  case 'boolean':
                  case 'function':
                    normalizedVisible = visible;
                    break;
                  default:
                    {
                      if (isStandaloneMode) {
                        normalizedVisible = (attributes.__internalFlags & PropertyStashInternalFlag.IMPLICIT_VISIBLE) !== 0;
                      } else {
                        const startsWithUS = propertyName.charCodeAt(0) === 95;
                        if (startsWithUS) {
                          normalizedVisible = false;
                        }
                      }
                    }
                }
                if (typeof normalizedVisible !== 'undefined') {
                  (attrs || initAttrs())[`${propertyNamePrefix}visible`] = normalizedVisible;
                }
              }
              const range = attributes.range;
              if (range) {
                if (Array.isArray(range)) {
                  if (range.length >= 2) {
                    (attrs || initAttrs())[`${propertyNamePrefix}min`] = range[0];
                    attrs[`${propertyNamePrefix}max`] = range[1];
                    if (range.length > 2) {
                      attrs[`${propertyNamePrefix}step`] = range[2];
                    }
                  } else {
                    errorID(3647);
                  }
                } else {
                  error(ERR_Type, 'range', className, propertyName, 'array');
                }
              }
              parseSimpleAttribute('min', 'number');
              parseSimpleAttribute('max', 'number');
              parseSimpleAttribute('step', 'number');
            }
            CCClass.isArray = function (defaultVal) {
              defaultVal = getDefault(defaultVal);
              return Array.isArray(defaultVal);
            };
            CCClass.getDefault = getDefault;
            CCClass.escapeForJS = escapeForJS;
            CCClass.IDENTIFIER_RE = IDENTIFIER_RE;
            CCClass.getNewValueTypeCode = getNewValueTypeCodeJit;
            legacyCC.Class = CCClass;

            const editorExtrasTag = exports('ay', '__editorExtras__');

            const Destroyed = 1 << 0;
            const ToDestroy = 1 << 2;
            const DontSave = 1 << 3;
            const EditorOnly = 1 << 4;
            const Dirty = 1 << 5;
            const DontDestroy = 1 << 6;
            const Destroying = 1 << 7;
            const Deactivating = 1 << 8;
            const LockedInEditor = 1 << 9;
            const HideInHierarchy = 1 << 10;
            const IsOnEnableCalled = 1 << 11;
            const IsEditorOnEnableCalled = 1 << 12;
            const IsPreloadStarted = 1 << 13;
            const IsOnLoadCalled = 1 << 14;
            const IsOnLoadStarted = 1 << 15;
            const IsStartCalled = 1 << 16;
            const IsRotationLocked = 1 << 17;
            const IsScaleLocked = 1 << 18;
            const IsAnchorLocked = 1 << 19;
            const IsSizeLocked = 1 << 20;
            const IsPositionLocked = 1 << 21;
            const PersistentMask = ~(ToDestroy | Dirty | Destroying | DontDestroy | Deactivating | IsPreloadStarted | IsOnLoadStarted | IsOnLoadCalled | IsStartCalled | IsOnEnableCalled | IsEditorOnEnableCalled | IsRotationLocked | IsScaleLocked | IsAnchorLocked | IsSizeLocked | IsPositionLocked);
            const AllHideMasks = DontSave | EditorOnly | LockedInEditor | HideInHierarchy;
            const objectsToDestroy = [];
            function compileDestruct(obj, ctor) {
              const shouldSkipId = obj instanceof legacyCC.Node || obj instanceof legacyCC.Component;
              const idToSkip = shouldSkipId ? '_id' : null;
              let key;
              const propsToReset = {};
              for (key in obj) {
                if (obj.hasOwnProperty(key)) {
                  if (key === idToSkip) {
                    continue;
                  }
                  switch (typeof obj[key]) {
                    case 'string':
                      propsToReset[key] = '';
                      break;
                    case 'object':
                    case 'function':
                      propsToReset[key] = null;
                      break;
                  }
                }
              }
              if (CCClass._isCCClass(ctor)) {
                const attrs = legacyCC.Class.Attr.getClassAttrs(ctor);
                const propList = ctor.__props__;
                for (let i = 0; i < propList.length; i++) {
                  key = propList[i];
                  const attrKey = `${key}`;
                  if (attrKey in attrs) {
                    if (shouldSkipId && key === '_id') {
                      continue;
                    }
                    switch (typeof attrs[attrKey]) {
                      case 'string':
                        propsToReset[key] = '';
                        break;
                      case 'object':
                      case 'function':
                        propsToReset[key] = null;
                        break;
                      case 'undefined':
                        propsToReset[key] = undefined;
                        break;
                    }
                  }
                }
              }
              {
                let func = '';
                for (key in propsToReset) {
                  let statement;
                  if (CCClass.IDENTIFIER_RE.test(key)) {
                    statement = `o.${key}=`;
                  } else {
                    statement = `o[${CCClass.escapeForJS(key)}]=`;
                  }
                  let val = propsToReset[key];
                  if (val === '') {
                    val = '""';
                  }
                  func += `${statement + val};\n`;
                }
                return Function('o', func);
              }
            }
            class CCObject {
              static _deferredDestroy() {
                const deleteCount = objectsToDestroy.length;
                for (let i = 0; i < deleteCount; ++i) {
                  const obj = objectsToDestroy[i];
                  if (!(obj._objFlags & Destroyed)) {
                    obj._destroyImmediate();
                  }
                }
                if (deleteCount === objectsToDestroy.length) {
                  objectsToDestroy.length = 0;
                } else {
                  objectsToDestroy.splice(0, deleteCount);
                }
              }
              constructor(name = '') {
                this._objFlags = void 0;
                this._name = void 0;
                this._name = name;
                this._objFlags = 0;
              }
              get name() {
                return this._name;
              }
              set name(value) {
                this._name = value;
              }
              set hideFlags(hideFlags) {
                const flags = hideFlags & CCObject.Flags.AllHideMasks;
                this._objFlags = this._objFlags & ~CCObject.Flags.AllHideMasks | flags;
              }
              get hideFlags() {
                return this._objFlags & CCObject.Flags.AllHideMasks;
              }
              get isValid() {
                return !(this._objFlags & Destroyed);
              }
              destroy() {
                if (this._objFlags & Destroyed) {
                  warnID(5000);
                  return false;
                }
                if (this._objFlags & ToDestroy) {
                  return false;
                }
                this._objFlags |= ToDestroy;
                objectsToDestroy.push(this);
                {
                  this._destroy();
                }
                return true;
              }
              _destruct() {
                const ctor = this.constructor;
                let destruct;
                if (Object.prototype.hasOwnProperty.call(ctor, '__destruct__')) {
                  destruct = ctor.__destruct__;
                } else {
                  destruct = compileDestruct(this, ctor);
                  value(ctor, '__destruct__', destruct, true);
                }
                destruct(this);
              }
              _destroyImmediate() {
                var _onPreDestroy, _ref;
                if (this._objFlags & Destroyed) {
                  errorID(5000);
                  return;
                }
                (_onPreDestroy = (_ref = this)._onPreDestroy) === null || _onPreDestroy === void 0 ? void 0 : _onPreDestroy.call(_ref);
                {
                  if (this.destruct) {
                    this.destruct();
                  }
                  this._destruct();
                }
                this._objFlags |= Destroyed;
              }
            } exports('as', CCObject);
            const prototype = CCObject.prototype;
            prototype._deserialize = null;
            {
              CCClass.fastDefine('cc.Object', CCObject, {
                _name: '',
                _objFlags: 0
              });
            }
            value(CCObject, 'Flags', {
              Destroyed,
              DontSave,
              EditorOnly,
              Dirty,
              DontDestroy,
              PersistentMask,
              Destroying,
              Deactivating,
              LockedInEditor,
              HideInHierarchy,
              AllHideMasks,
              IsPreloadStarted,
              IsOnLoadStarted,
              IsOnLoadCalled,
              IsOnEnableCalled,
              IsStartCalled,
              IsEditorOnEnableCalled,
              IsPositionLocked,
              IsRotationLocked,
              IsScaleLocked,
              IsAnchorLocked,
              IsSizeLocked
            });
            function isCCObject(object) {
              return object instanceof CCObject;
            }
            function isValid(value, strictMode) {
              if (typeof value === 'object') {
                return !!value && !(value._objFlags & (strictMode ? Destroyed | ToDestroy : Destroyed));
              } else {
                return typeof value !== 'undefined';
              }
            }
            legacyCC.isValid = isValid;
            {
              copyAllProperties(CCObject, jsb.CCObject, ['prototype', 'length', 'name']);
              copyAllProperties(CCObject.prototype, jsb.CCObject.prototype, ['constructor', 'name', 'hideFlags', 'isValid']);
              exports('as', CCObject = jsb.CCObject);
            }
            legacyCC.Object = CCObject;

            const fastRemoveAt = fastRemoveAt$1;
            function empty() {}
            class CallbackInfo {
              constructor() {
                this.callback = empty;
                this.target = undefined;
                this.once = false;
              }
              set(callback, target, once) {
                this.callback = callback || empty;
                this.target = target;
                this.once = !!once;
              }
              reset() {
                this.target = undefined;
                this.callback = empty;
                this.once = false;
              }
              check() {
                if (isCCObject(this.target) && !isValid(this.target, true)) {
                  return false;
                } else {
                  return true;
                }
              }
            }
            const callbackInfoPool = new Pool$1(() => new CallbackInfo(), 32);
            class CallbackList {
              constructor() {
                this.callbackInfos = [];
                this.isInvoking = false;
                this.containCanceled = false;
              }
              removeByCallback(cb) {
                for (let i = 0; i < this.callbackInfos.length; ++i) {
                  const info = this.callbackInfos[i];
                  if (info && info.callback === cb) {
                    info.reset();
                    callbackInfoPool.free(info);
                    fastRemoveAt(this.callbackInfos, i);
                    --i;
                  }
                }
              }
              removeByTarget(target) {
                for (let i = 0; i < this.callbackInfos.length; ++i) {
                  const info = this.callbackInfos[i];
                  if (info && info.target === target) {
                    info.reset();
                    callbackInfoPool.free(info);
                    fastRemoveAt(this.callbackInfos, i);
                    --i;
                  }
                }
              }
              cancel(index) {
                const info = this.callbackInfos[index];
                if (info) {
                  info.reset();
                  if (this.isInvoking) {
                    this.callbackInfos[index] = null;
                  } else {
                    fastRemoveAt(this.callbackInfos, index);
                  }
                  callbackInfoPool.free(info);
                }
                this.containCanceled = true;
              }
              cancelAll() {
                for (let i = 0; i < this.callbackInfos.length; i++) {
                  const info = this.callbackInfos[i];
                  if (info) {
                    info.reset();
                    callbackInfoPool.free(info);
                    this.callbackInfos[i] = null;
                  }
                }
                this.containCanceled = true;
              }
              purgeCanceled() {
                for (let i = this.callbackInfos.length - 1; i >= 0; --i) {
                  const info = this.callbackInfos[i];
                  if (!info) {
                    fastRemoveAt(this.callbackInfos, i);
                  }
                }
                this.containCanceled = false;
              }
              clear() {
                this.cancelAll();
                this.callbackInfos.length = 0;
                this.isInvoking = false;
                this.containCanceled = false;
              }
            }
            const MAX_SIZE = 16;
            const callbackListPool = new Pool$1(() => new CallbackList(), MAX_SIZE);
            class CallbacksInvoker {
              constructor() {
                this._callbackTable = createMap(true);
                this._offCallback = void 0;
              }
              on(key, callback, target, once) {
                if (!this.hasEventListener(key, callback, target)) {
                  let list = this._callbackTable[key];
                  if (!list) {
                    list = this._callbackTable[key] = callbackListPool.alloc();
                  }
                  const info = callbackInfoPool.alloc();
                  info.set(callback, target, once);
                  list.callbackInfos.push(info);
                }
                return callback;
              }
              hasEventListener(key, callback, target) {
                const list = this._callbackTable && this._callbackTable[key];
                if (!list) {
                  return false;
                }
                const infos = list.callbackInfos;
                if (!callback) {
                  if (list.isInvoking) {
                    for (let i = 0; i < infos.length; ++i) {
                      if (infos[i]) {
                        return true;
                      }
                    }
                    return false;
                  } else {
                    return infos.length > 0;
                  }
                }
                for (let i = 0; i < infos.length; ++i) {
                  const info = infos[i];
                  if (info && info.check() && info.callback === callback && info.target === target) {
                    return true;
                  }
                }
                return false;
              }
              removeAll(keyOrTarget) {
                const type = typeof keyOrTarget;
                if (type === 'string' || type === 'number') {
                  const list = this._callbackTable && this._callbackTable[keyOrTarget];
                  if (list) {
                    if (list.isInvoking) {
                      list.cancelAll();
                    } else {
                      list.clear();
                      callbackListPool.free(list);
                      delete this._callbackTable[keyOrTarget];
                    }
                  }
                } else if (keyOrTarget) {
                  for (const key in this._callbackTable) {
                    const list = this._callbackTable[key];
                    if (list.isInvoking) {
                      const infos = list.callbackInfos;
                      for (let i = 0; i < infos.length; ++i) {
                        const info = infos[i];
                        if (info && info.target === keyOrTarget) {
                          list.cancel(i);
                        }
                      }
                    } else {
                      list.removeByTarget(keyOrTarget);
                    }
                  }
                }
              }
              off(key, callback, target) {
                var _this$_offCallback;
                const list = this._callbackTable && this._callbackTable[key];
                if (list) {
                  const infos = list.callbackInfos;
                  if (callback) {
                    for (let i = 0; i < infos.length; ++i) {
                      const info = infos[i];
                      if (info && info.callback === callback && info.target === target) {
                        list.cancel(i);
                        break;
                      }
                    }
                  } else {
                    this.removeAll(key);
                  }
                }
                (_this$_offCallback = this._offCallback) === null || _this$_offCallback === void 0 ? void 0 : _this$_offCallback.call(this);
              }
              emit(key, arg0, arg1, arg2, arg3, arg4) {
                const list = this._callbackTable && this._callbackTable[key];
                if (list) {
                  const rootInvoker = !list.isInvoking;
                  list.isInvoking = true;
                  const infos = list.callbackInfos;
                  for (let i = 0, len = infos.length; i < len; ++i) {
                    const info = infos[i];
                    if (info) {
                      const callback = info.callback;
                      const target = info.target;
                      if (info.once) {
                        this.off(key, callback, target);
                      }
                      if (!info.check()) {
                        this.off(key, callback, target);
                      } else if (target) {
                        callback.call(target, arg0, arg1, arg2, arg3, arg4);
                      } else {
                        callback(arg0, arg1, arg2, arg3, arg4);
                      }
                    }
                  }
                  if (rootInvoker) {
                    list.isInvoking = false;
                    if (list.containCanceled) {
                      list.purgeCanceled();
                    }
                  }
                }
              }
              clear() {
                for (const key in this._callbackTable) {
                  const list = this._callbackTable[key];
                  if (list) {
                    list.clear();
                    callbackListPool.free(list);
                    delete this._callbackTable[key];
                  }
                }
              }
              _registerOffCallback(cb) {
                this._offCallback = cb;
              }
            } exports('bo', CallbacksInvoker);

            function Eventify(base) {
              class Eventified extends base {
                constructor(...args) {
                  super(...args);
                  this._callbackTable = createMap(true);
                }
                once(type, callback, target) {
                  return this.on(type, callback, target, true);
                }
                targetOff(typeOrTarget) {
                  this.removeAll(typeOrTarget);
                }
              }
              const callbacksInvokerPrototype = CallbacksInvoker.prototype;
              const propertyKeys = Object.getOwnPropertyNames(callbacksInvokerPrototype).concat(Object.getOwnPropertySymbols(callbacksInvokerPrototype));
              for (let iPropertyKey = 0; iPropertyKey < propertyKeys.length; ++iPropertyKey) {
                const propertyKey = propertyKeys[iPropertyKey];
                if (!(propertyKey in Eventified.prototype)) {
                  const propertyDescriptor = Object.getOwnPropertyDescriptor(callbacksInvokerPrototype, propertyKey);
                  if (propertyDescriptor) {
                    Object.defineProperty(Eventified.prototype, propertyKey, propertyDescriptor);
                  }
                }
              }
              return Eventified;
            }

            class Empty$1 {}
            const EventTarget = exports('aD', Eventify(Empty$1));
            legacyCC.EventTarget = EventTarget;

            let BrowserType; exports('cb', BrowserType);
            (function (BrowserType) {
              BrowserType["UNKNOWN"] = "unknown";
              BrowserType["WECHAT"] = "wechat";
              BrowserType["ANDROID"] = "androidbrowser";
              BrowserType["IE"] = "ie";
              BrowserType["EDGE"] = "edge";
              BrowserType["QQ"] = "qqbrowser";
              BrowserType["MOBILE_QQ"] = "mqqbrowser";
              BrowserType["UC"] = "ucbrowser";
              BrowserType["UCBS"] = "ucbs";
              BrowserType["BROWSER_360"] = "360browser";
              BrowserType["BAIDU_APP"] = "baiduboxapp";
              BrowserType["BAIDU"] = "baidubrowser";
              BrowserType["MAXTHON"] = "maxthon";
              BrowserType["OPERA"] = "opera";
              BrowserType["OUPENG"] = "oupeng";
              BrowserType["MIUI"] = "miuibrowser";
              BrowserType["FIREFOX"] = "firefox";
              BrowserType["SAFARI"] = "safari";
              BrowserType["CHROME"] = "chrome";
              BrowserType["LIEBAO"] = "liebao";
              BrowserType["QZONE"] = "qzone";
              BrowserType["SOUGOU"] = "sogou";
              BrowserType["HUAWEI"] = "huawei";
            })(BrowserType || (exports('cb', BrowserType = {})));

            let Language;
            (function (Language) {
              Language["UNKNOWN"] = "unknown";
              Language["ENGLISH"] = "en";
              Language["CHINESE"] = "zh";
              Language["FRENCH"] = "fr";
              Language["ITALIAN"] = "it";
              Language["GERMAN"] = "de";
              Language["SPANISH"] = "es";
              Language["DUTCH"] = "du";
              Language["RUSSIAN"] = "ru";
              Language["KOREAN"] = "ko";
              Language["JAPANESE"] = "ja";
              Language["HUNGARIAN"] = "hu";
              Language["PORTUGUESE"] = "pt";
              Language["ARABIC"] = "ar";
              Language["NORWEGIAN"] = "no";
              Language["POLISH"] = "pl";
              Language["TURKISH"] = "tr";
              Language["UKRAINIAN"] = "uk";
              Language["ROMANIAN"] = "ro";
              Language["BULGARIAN"] = "bg";
              Language["HINDI"] = "hi";
            })(Language || (Language = {}));

            let NetworkType;
            (function (NetworkType) {
              NetworkType[NetworkType["NONE"] = 0] = "NONE";
              NetworkType[NetworkType["LAN"] = 1] = "LAN";
              NetworkType[NetworkType["WWAN"] = 2] = "WWAN";
            })(NetworkType || (NetworkType = {}));

            let OS; exports('bZ', OS);
            (function (OS) {
              OS["UNKNOWN"] = "Unknown";
              OS["IOS"] = "iOS";
              OS["ANDROID"] = "Android";
              OS["WINDOWS"] = "Windows";
              OS["LINUX"] = "Linux";
              OS["OSX"] = "OS X";
              OS["OHOS"] = "OHOS";
              OS["OPENHARMONY"] = "OpenHarmony";
            })(OS || (exports('bZ', OS = {})));

            let Platform; exports('bR', Platform);
            (function (Platform) {
              Platform["UNKNOWN"] = "UNKNOWN";
              Platform["EDITOR_PAGE"] = "EDITOR_PAGE";
              Platform["EDITOR_CORE"] = "EDITOR_CORE";
              Platform["MOBILE_BROWSER"] = "MOBILE_BROWSER";
              Platform["DESKTOP_BROWSER"] = "DESKTOP_BROWSER";
              Platform["WIN32"] = "WIN32";
              Platform["ANDROID"] = "ANDROID";
              Platform["IOS"] = "IOS";
              Platform["MACOS"] = "MACOS";
              Platform["OHOS"] = "OHOS";
              Platform["OPENHARMONY"] = "OPENHARMONY";
              Platform["WECHAT_GAME"] = "WECHAT_GAME";
              Platform["WECHAT_MINI_PROGRAM"] = "WECHAT_MINI_PROGRAM";
              Platform["BAIDU_MINI_GAME"] = "BAIDU_MINI_GAME";
              Platform["XIAOMI_QUICK_GAME"] = "XIAOMI_QUICK_GAME";
              Platform["ALIPAY_MINI_GAME"] = "ALIPAY_MINI_GAME";
              Platform["TAOBAO_CREATIVE_APP"] = "TAOBAO_CREATIVE_APP";
              Platform["TAOBAO_MINI_GAME"] = "TAOBAO_MINI_GAME";
              Platform["BYTEDANCE_MINI_GAME"] = "BYTEDANCE_MINI_GAME";
              Platform["OPPO_MINI_GAME"] = "OPPO_MINI_GAME";
              Platform["VIVO_MINI_GAME"] = "VIVO_MINI_GAME";
              Platform["HUAWEI_QUICK_GAME"] = "HUAWEI_QUICK_GAME";
              Platform["COCOSPLAY"] = "COCOSPLAY";
              Platform["LINKSURE_MINI_GAME"] = "LINKSURE_MINI_GAME";
              Platform["QTT_MINI_GAME"] = "QTT_MINI_GAME";
            })(Platform || (exports('bR', Platform = {})));

            let Feature; exports('b_', Feature);
            (function (Feature) {
              Feature["WEBP"] = "WEBP";
              Feature["IMAGE_BITMAP"] = "IMAGE_BITMAP";
              Feature["WEB_VIEW"] = "WEB_VIEW";
              Feature["VIDEO_PLAYER"] = "VIDEO_PLAYER";
              Feature["SAFE_AREA"] = "SAFE_AREA";
              Feature["HPE"] = "HPE";
              Feature["INPUT_TOUCH"] = "INPUT_TOUCH";
              Feature["EVENT_KEYBOARD"] = "EVENT_KEYBOARD";
              Feature["EVENT_MOUSE"] = "EVENT_MOUSE";
              Feature["EVENT_TOUCH"] = "EVENT_TOUCH";
              Feature["EVENT_ACCELEROMETER"] = "EVENT_ACCELEROMETER";
              Feature["EVENT_GAMEPAD"] = "EVENT_GAMEPAD";
              Feature["EVENT_HANDLE"] = "EVENT_HANDLE";
              Feature["EVENT_HMD"] = "EVENT_HMD";
              Feature["EVENT_HANDHELD"] = "EVENT_HANDHELD";
              Feature["WASM"] = "WASM";
            })(Feature || (exports('b_', Feature = {})));

            const networkTypeMap = {
              0: NetworkType.NONE,
              1: NetworkType.LAN,
              2: NetworkType.WWAN
            };
            const platformMap = {
              0: Platform.WIN32,
              2: Platform.MACOS,
              3: Platform.ANDROID,
              4: Platform.IOS,
              5: Platform.IOS,
              6: Platform.OHOS,
              7: Platform.OPENHARMONY
            };
            class SystemInfo extends EventTarget {
              get networkType() {
                return networkTypeMap[jsb.device.getNetworkType()];
              }
              constructor() {
                super();
                this.isNative = void 0;
                this.isBrowser = void 0;
                this.isMobile = void 0;
                this.isLittleEndian = void 0;
                this.platform = void 0;
                this.language = void 0;
                this.nativeLanguage = void 0;
                this.os = void 0;
                this.osVersion = void 0;
                this.osMainVersion = void 0;
                this.browserType = void 0;
                this.browserVersion = void 0;
                this.isXR = void 0;
                this._featureMap = void 0;
                this._initPromise = void 0;
                this.isNative = true;
                this.isBrowser = false;
                this.platform = platformMap[__getPlatform()];
                this.isMobile = this.platform === Platform.ANDROID || this.platform === Platform.IOS || this.platform === Platform.OHOS || this.platform === Platform.OPENHARMONY;
                this.isLittleEndian = (() => {
                  const buffer = new ArrayBuffer(2);
                  new DataView(buffer).setInt16(0, 256, true);
                  return new Int16Array(buffer)[0] === 256;
                })();
                const currLanguage = __getCurrentLanguageCode();
                this.nativeLanguage = currLanguage ? currLanguage.toLowerCase() : Language.UNKNOWN;
                this.language = __getCurrentLanguage();
                this.os = __getOS();
                this.osVersion = __getOSVersion();
                this.osMainVersion = parseInt(this.osVersion);
                this.browserType = BrowserType.UNKNOWN;
                this.browserVersion = '';
                this.isXR = typeof xr !== 'undefined' && typeof xr.XrEntry !== 'undefined';
                const isHPE = typeof __supportHPE === 'function' ? __supportHPE() : false;
                this._featureMap = {
                  [Feature.WEBP]: true,
                  [Feature.IMAGE_BITMAP]: false,
                  [Feature.WEB_VIEW]: this.isMobile,
                  [Feature.VIDEO_PLAYER]: this.isMobile,
                  [Feature.SAFE_AREA]: this.isMobile,
                  [Feature.HPE]: isHPE,
                  [Feature.INPUT_TOUCH]: this.isMobile,
                  [Feature.EVENT_KEYBOARD]: true,
                  [Feature.EVENT_MOUSE]: isHPE || !this.isMobile,
                  [Feature.EVENT_TOUCH]: true,
                  [Feature.EVENT_ACCELEROMETER]: this.isMobile,
                  [Feature.EVENT_GAMEPAD]: true,
                  [Feature.EVENT_HANDLE]: this.isXR,
                  [Feature.EVENT_HMD]: this.isXR,
                  [Feature.EVENT_HANDHELD]: typeof xr !== 'undefined' && typeof xr.ARModule !== 'undefined',
                  [Feature.WASM]: !OPEN_HARMONY
                };
                this._initPromise = [];
                this._registerEvent();
              }
              _registerEvent() {
                jsb.onPause = () => {
                  this.emit('hide');
                };
                jsb.onResume = () => {
                  this.emit('show');
                };
                jsb.onClose = () => {
                  this.emit('close');
                };
              }
              _setFeature(feature, value) {
                return this._featureMap[feature] = value;
              }
              init() {
                return Promise.all(this._initPromise);
              }
              hasFeature(feature) {
                return this._featureMap[feature];
              }
              getBatteryLevel() {
                return jsb.device.getBatteryLevel();
              }
              triggerGC() {
                jsb.garbageCollect();
              }
              openURL(url) {
                jsb.openURL(url);
              }
              now() {
                if (Date.now) {
                  return Date.now();
                }
                return +new Date();
              }
              restartJSVM() {
                __restartVM();
              }
              close() {
                __close();
              }
              exit() {
                __exit();
              }
            }
            const systemInfo = exports('bY', new SystemInfo());

            const INT_BITS = 32;
            const INT_MAX = exports('cL', 0x7fffffff);
            const INT_MIN = -1 << INT_BITS - 1;
            function sign(v) {
              return (v > 0) - (v < 0);
            }
            function abs(v) {
              const mask = v >> INT_BITS - 1;
              return (v ^ mask) - mask;
            }
            function min$1(x, y) {
              return y ^ (x ^ y) & -(x < y);
            }
            function max$2(x, y) {
              return x ^ (x ^ y) & -(x < y);
            }
            function isPow2(v) {
              return !(v & v - 1) && !!v;
            }
            function log2(v) {
              let r;
              let shift;
              r = (v > 0xFFFF) << 4;
              v >>>= r;
              shift = (v > 0xFF) << 3;
              v >>>= shift;
              r |= shift;
              shift = (v > 0xF) << 2;
              v >>>= shift;
              r |= shift;
              shift = (v > 0x3) << 1;
              v >>>= shift;
              r |= shift;
              return r | v >> 1;
            }
            function log10(v) {
              return v >= 1000000000 ? 9 : v >= 100000000 ? 8 : v >= 10000000 ? 7 : v >= 1000000 ? 6 : v >= 100000 ? 5 : v >= 10000 ? 4 : v >= 1000 ? 3 : v >= 100 ? 2 : v >= 10 ? 1 : 0;
            }
            function popCount(v) {
              v -= v >>> 1 & 0x55555555;
              v = (v & 0x33333333) + (v >>> 2 & 0x33333333);
              return (v + (v >>> 4) & 0xF0F0F0F) * 0x1010101 >>> 24;
            }
            function countTrailingZeros(v) {
              let c = 32;
              v &= -v;
              if (v) {
                c--;
              }
              if (v & 0x0000FFFF) {
                c -= 16;
              }
              if (v & 0x00FF00FF) {
                c -= 8;
              }
              if (v & 0x0F0F0F0F) {
                c -= 4;
              }
              if (v & 0x33333333) {
                c -= 2;
              }
              if (v & 0x55555555) {
                c -= 1;
              }
              return c;
            }
            function nextPow2$1(v) {
              --v;
              v |= v >>> 1;
              v |= v >>> 2;
              v |= v >>> 4;
              v |= v >>> 8;
              v |= v >>> 16;
              return v + 1;
            }
            function prevPow2(v) {
              v |= v >>> 1;
              v |= v >>> 2;
              v |= v >>> 4;
              v |= v >>> 8;
              v |= v >>> 16;
              return v - (v >>> 1);
            }
            function parity(v) {
              v ^= v >>> 16;
              v ^= v >>> 8;
              v ^= v >>> 4;
              v &= 0xf;
              return 0x6996 >>> v & 1;
            }
            const REVERSE_TABLE = new Array(256);
            (tab => {
              for (let i = 0; i < 256; ++i) {
                let v = i;
                let r = i;
                let s = 7;
                for (v >>>= 1; v; v >>>= 1) {
                  r <<= 1;
                  r |= v & 1;
                  --s;
                }
                tab[i] = r << s & 0xff;
              }
            })(REVERSE_TABLE);
            function reverse(v) {
              return REVERSE_TABLE[v & 0xff] << 24 | REVERSE_TABLE[v >>> 8 & 0xff] << 16 | REVERSE_TABLE[v >>> 16 & 0xff] << 8 | REVERSE_TABLE[v >>> 24 & 0xff];
            }
            function interleave2(x, y) {
              x &= 0xFFFF;
              x = (x | x << 8) & 0x00FF00FF;
              x = (x | x << 4) & 0x0F0F0F0F;
              x = (x | x << 2) & 0x33333333;
              x = (x | x << 1) & 0x55555555;
              y &= 0xFFFF;
              y = (y | y << 8) & 0x00FF00FF;
              y = (y | y << 4) & 0x0F0F0F0F;
              y = (y | y << 2) & 0x33333333;
              y = (y | y << 1) & 0x55555555;
              return x | y << 1;
            }
            function deinterleave2(v, n) {
              v = v >>> n & 0x55555555;
              v = (v | v >>> 1) & 0x33333333;
              v = (v | v >>> 2) & 0x0F0F0F0F;
              v = (v | v >>> 4) & 0x00FF00FF;
              v = (v | v >>> 16) & 0x000FFFF;
              return v << 16 >> 16;
            }
            function interleave3(x, y, z) {
              x &= 0x3FF;
              x = (x | x << 16) & 4278190335;
              x = (x | x << 8) & 251719695;
              x = (x | x << 4) & 3272356035;
              x = (x | x << 2) & 1227133513;
              y &= 0x3FF;
              y = (y | y << 16) & 4278190335;
              y = (y | y << 8) & 251719695;
              y = (y | y << 4) & 3272356035;
              y = (y | y << 2) & 1227133513;
              x |= y << 1;
              z &= 0x3FF;
              z = (z | z << 16) & 4278190335;
              z = (z | z << 8) & 251719695;
              z = (z | z << 4) & 3272356035;
              z = (z | z << 2) & 1227133513;
              return x | z << 2;
            }
            function deinterleave3(v, n) {
              v = v >>> n & 1227133513;
              v = (v | v >>> 2) & 3272356035;
              v = (v | v >>> 4) & 251719695;
              v = (v | v >>> 8) & 4278190335;
              v = (v | v >>> 16) & 0x3FF;
              return v << 22 >> 22;
            }
            function nextCombination(v) {
              const t = v | v - 1;
              return t + 1 | (~t & -~t) - 1 >>> countTrailingZeros(v) + 1;
            }

            var bits = /*#__PURE__*/Object.freeze({
                __proto__: null,
                INT_BITS: INT_BITS,
                INT_MAX: INT_MAX,
                INT_MIN: INT_MIN,
                sign: sign,
                abs: abs,
                min: min$1,
                max: max$2,
                isPow2: isPow2,
                log2: log2,
                log10: log10,
                popCount: popCount,
                countTrailingZeros: countTrailingZeros,
                nextPow2: nextPow2$1,
                prevPow2: prevPow2,
                parity: parity,
                reverse: reverse,
                interleave2: interleave2,
                deinterleave2: deinterleave2,
                interleave3: interleave3,
                deinterleave3: deinterleave3,
                nextCombination: nextCombination
            });
            exports('k', bits);

            let defaultLogTimes = 10;
            function setDefaultLogTimes(times) {
              if (times > 0) {
                defaultLogTimes = times;
              }
            }
            let replaceProperty; exports('ag', replaceProperty);
            let removeProperty; exports('ah', removeProperty);
            let markAsWarning; exports('ai', markAsWarning);
            let replacePropertyLog;
            let markAsWarningLog;
            let removePropertyLog;
            let messageID = 0;
            const messageMap = new Map();
            replacePropertyLog = (n, dp, n2, newp, f, id, s) => {
              const item = messageMap.get(id);
              if (item && item.logTimes > item.count) {
                f(`'%s' is deprecated, please use '%s' instead. ${s}`, `${n}.${dp}`, `${n2}.${newp}`);
                item.count++;
              }
            };
            exports('ag', replaceProperty = (owner, ownerName, properties) => {
              if (owner == null) return;
              properties.forEach(item => {
                const id = messageID++;
                messageMap.set(id, {
                  id,
                  count: 0,
                  logTimes: item.logTimes !== undefined ? item.logTimes : defaultLogTimes
                });
                const target = item.target != null ? item.target : owner;
                const newName = item.newName != null ? item.newName : item.name;
                const targetName = item.targetName != null ? item.targetName : ownerName;
                const sameTarget = target === owner;
                const suggest = item.suggest ? `(${item.suggest})` : '';
                if (item.customFunction != null) {
                  owner[item.name] = function () {
                    replacePropertyLog(ownerName, item.name, targetName, newName, warn, id, suggest);
                    return item.customFunction.call(this, ...arguments);
                  };
                } else if (item.customSetter != null || item.customGetter != null) {
                  const hasSetter = item.customSetter != null;
                  const hasGetter = item.customGetter != null;
                  if (hasSetter && hasGetter) {
                    Object.defineProperty(owner, item.name, {
                      get() {
                        replacePropertyLog(ownerName, item.name, targetName, newName, warn, id, suggest);
                        return item.customGetter.call(this);
                      },
                      set(v) {
                        replacePropertyLog(ownerName, item.name, targetName, newName, warn, id, suggest);
                        item.customSetter.call(this, v);
                      },
                      enumerable: false
                    });
                  } else if (hasSetter) {
                    Object.defineProperty(owner, item.name, {
                      set(v) {
                        replacePropertyLog(ownerName, item.name, targetName, newName, warn, id, suggest);
                        item.customSetter.call(this, v);
                      },
                      enumerable: false
                    });
                  } else if (hasGetter) {
                    Object.defineProperty(owner, item.name, {
                      get() {
                        replacePropertyLog(ownerName, item.name, targetName, newName, warn, id, suggest);
                        return item.customGetter.call(this);
                      },
                      enumerable: false
                    });
                  }
                } else {
                  Object.defineProperty(owner, item.name, {
                    get() {
                      replacePropertyLog(ownerName, item.name, targetName, newName, warn, id, suggest);
                      return sameTarget ? this[newName] : target[newName];
                    },
                    set(v) {
                      replacePropertyLog(ownerName, item.name, targetName, newName, warn, id, suggest);
                      if (sameTarget) {
                        this[newName] = v;
                      } else {
                        target[newName] = v;
                      }
                    },
                    enumerable: false
                  });
                }
              });
            });
            removePropertyLog = (n, dp, f, id, s) => {
              const item = messageMap.get(id);
              if (item && item.logTimes > item.count) {
                f(`'%s' has been removed. ${s}`, `${n}.${dp}`);
                item.count++;
              }
            };
            exports('ah', removeProperty = (owner, ownerName, properties) => {
              if (owner == null) return;
              properties.forEach(item => {
                const id = messageID++;
                messageMap.set(id, {
                  id,
                  count: 0,
                  logTimes: item.logTimes !== undefined ? item.logTimes : defaultLogTimes
                });
                const suggest = item.suggest ? `(${item.suggest})` : '';
                Object.defineProperty(owner, item.name, {
                  get() {
                    return removePropertyLog(ownerName, item.name, error, id, suggest);
                  },
                  set() {
                    removePropertyLog(ownerName, item.name, error, id, suggest);
                  },
                  enumerable: false
                });
              });
            });
            markAsWarningLog = (n, dp, f, id, s) => {
              const item = messageMap.get(id);
              if (item && item.logTimes > item.count) {
                f(`'%s' is deprecated. ${s}`, `${n}.${dp}`);
                item.count++;
              }
            };
            exports('ai', markAsWarning = (owner, ownerName, properties) => {
              if (owner == null) return;
              const _defaultGetSet = (d, n, dp, f, id, s) => {
                if (d.get) {
                  const oldGet = d.get;
                  d.get = function () {
                    markAsWarningLog(n, dp, f, id, s);
                    return oldGet.call(this);
                  };
                }
                if (d.set) {
                  const oldSet = d.set;
                  d.set = function (v) {
                    markAsWarningLog(n, dp, f, id, s);
                    oldSet.call(this, v);
                  };
                }
                Object.defineProperty(owner, dp, d);
              };
              properties.forEach(item => {
                const deprecatedProp = item.name;
                const descriptor = Object.getOwnPropertyDescriptor(owner, deprecatedProp);
                if (!descriptor || !descriptor.configurable) {
                  return;
                }
                const id = messageID++;
                messageMap.set(id, {
                  id,
                  count: 0,
                  logTimes: item.logTimes !== undefined ? item.logTimes : defaultLogTimes
                });
                const suggest = item.suggest ? `(${item.suggest})` : '';
                if (typeof descriptor.value !== 'undefined') {
                  if (typeof descriptor.value === 'function') {
                    const oldValue = descriptor.value;
                    owner[deprecatedProp] = function () {
                      markAsWarningLog(ownerName, deprecatedProp, warn, id, suggest);
                      return oldValue.call(this, ...arguments);
                    };
                  } else {
                    let oldValue = descriptor.value;
                    Object.defineProperty(owner, deprecatedProp, {
                      configurable: true,
                      get() {
                        markAsWarningLog(ownerName, deprecatedProp, warn, id, suggest);
                        return oldValue;
                      }
                    });
                    if (descriptor.writable) {
                      Object.defineProperty(owner, deprecatedProp, {
                        set(value) {
                          markAsWarningLog(ownerName, deprecatedProp, warn, id, suggest);
                          oldValue = value;
                        }
                      });
                    }
                  }
                } else {
                  _defaultGetSet(descriptor, ownerName, deprecatedProp, warn, id, suggest);
                }
                Object.defineProperty(owner, deprecatedProp, {
                  enumerable: false
                });
              });
            });
            const topLevelDeprecateList = {};
            function deprecateModuleExportedName(deprecateList) {
              for (let deprecateName in deprecateList) {
                const deprecateInfo = deprecateList[deprecateName];
                topLevelDeprecateList[deprecateName] = deprecateInfo;
              }
            }
            function _checkObsoleteByName(checkName) {
              const deprecateInfo = topLevelDeprecateList[checkName];
              if (!deprecateInfo) {
                return;
              }
              const {
                newName,
                since,
                removed
              } = deprecateInfo;
              if (removed) {
                if (newName) {
                  errorID(16003, checkName, since, newName);
                } else {
                  errorID(16002, checkName, since);
                }
              } else if (newName) {
                warnID(16001, checkName, since, newName);
              } else {
                warnID(16000, checkName, since);
              }
            }
            function __checkObsolete__(checkList) {
              for (let checkName of checkList) {
                _checkObsoleteByName(checkName);
              }
            }
            let _cachedProxy;
            function __checkObsoleteInNamespace__(ccNamespace) {
              if (!_cachedProxy) {
                if (typeof Proxy === 'undefined') {
                  _cachedProxy = {};
                } else {
                  _cachedProxy = new Proxy(ccNamespace, {
                    get(target, name, receiver) {
                      _checkObsoleteByName(name);
                      return Reflect.get(target, name, receiver);
                    }
                  });
                }
              }
              return _cachedProxy;
            }

            const _d2r = Math.PI / 180.0;
            const _r2d = 180.0 / Math.PI;
            let _random = Math.random;
            const HALF_PI = exports('H', Math.PI * 0.5);
            const TWO_PI = exports('T', Math.PI * 2.0);
            const EPSILON = exports('E', 0.000001);
            function equals(a, b) {
              return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
            }
            function approx(a, b, maxDiff) {
              maxDiff = maxDiff || EPSILON;
              return Math.abs(a - b) <= maxDiff;
            }
            function clamp(val, min, max) {
              if (min > max) {
                const temp = min;
                min = max;
                max = temp;
              }
              return val < min ? min : val > max ? max : val;
            }
            function clamp01(val) {
              return val < 0 ? 0 : val > 1 ? 1 : val;
            }
            function lerp(from, to, ratio) {
              return from + (to - from) * ratio;
            }
            function toRadian(a) {
              return a * _d2r;
            }
            function toDegree(a) {
              return a * _r2d;
            }
            function random() {
              return _random();
            }
            function setRandGenerator(func) {
              _random = func;
            }
            function randomRange(min, max) {
              return random() * (max - min) + min;
            }
            function randomRangeInt(min, max) {
              return Math.floor(randomRange(min, max));
            }
            function pseudoRandom(seed) {
              seed = (seed * 9301 + 49297) % 233280;
              return seed / 233280.0;
            }
            function pseudoRandomRange(seed, min, max) {
              return pseudoRandom(seed) * (max - min) + min;
            }
            function pseudoRandomRangeInt(seed, min, max) {
              return Math.floor(pseudoRandomRange(seed, min, max));
            }
            function nextPow2(val) {
              return nextPow2$1(val);
            }
            function repeat(t, length) {
              return t - Math.floor(t / length) * length;
            }
            function pingPong(t, length) {
              t = repeat(t, length * 2);
              t = length - Math.abs(t - length);
              return t;
            }
            function inverseLerp(from, to, value) {
              return (value - from) / (to - from);
            }
            function absMaxComponent(v) {
              if (Math.abs(v.x) > Math.abs(v.y)) {
                if (Math.abs(v.x) > Math.abs(v.z)) {
                  return v.x;
                } else {
                  return v.z;
                }
              } else if (Math.abs(v.y) > Math.abs(v.z)) {
                return v.y;
              } else {
                return v.z;
              }
            }
            function absMax(a, b) {
              if (Math.abs(a) > Math.abs(b)) {
                return a;
              } else {
                return b;
              }
            }
            function enumerableProps(prototype, attrs) {
              attrs.forEach(key => {
                Object.defineProperty(prototype, key, {
                  enumerable: true
                });
              });
            }
            const toHalf = function () {
              const floatView = new Float32Array(1);
              const int32View = new Int32Array(floatView.buffer);
              return function toHalf(fval) {
                floatView[0] = fval;
                const fbits = int32View[0];
                const s = fbits >> 16 & 0x8000;
                const em = fbits & 0x7fffffff;
                let h = em - (112 << 23) + (1 << 12) >> 13;
                h = em < 113 << 23 ? 0 : h;
                h = em >= 143 << 23 ? 0x7c00 : h;
                h = em > 255 << 23 ? 0x7e00 : h;
                int32View[0] = s | h;
                return int32View[0];
              };
            }();
            const fromHalf = function () {
              const floatView = new Float32Array(1);
              const int32View = new Int32Array(floatView.buffer);
              return function fromHalf(hval) {
                const s = hval >> 15 & 0x00000001;
                const em = hval & 0x00007fff;
                let h = em << 13;
                let fbits = 0;
                if (h !== 0x7c00) {
                  h += 112 << 23;
                  if (em === 0) {
                    h = (h & 0xfffff) >> 1;
                  } else if (em === 0x7fff) {
                    h = 0x7fffffff;
                  }
                } else {
                  h = 0x7f800000;
                }
                fbits = s << 31 | h;
                int32View[0] = fbits;
                return floatView[0];
              };
            }();
            function floatToHalf(val) {
              return toHalf(val);
            }
            function halfToFloat(val) {
              return fromHalf(val);
            }

            var _class$a;
            class Vec4 extends ValueType {
              static clone(a) {
                return new Vec4(a.x, a.y, a.z, a.w);
              }
              static copy(out, a) {
                out.x = a.x;
                out.y = a.y;
                out.z = a.z;
                out.w = a.w;
                return out;
              }
              static set(out, x, y, z, w) {
                out.x = x;
                out.y = y;
                out.z = z;
                out.w = w;
                return out;
              }
              static fromColor(out, color) {
                out.x = color.r;
                out.y = color.g;
                out.z = color.b;
                out.w = color.a;
                return out;
              }
              static angle(a, b) {
                const dx = a.y * b.z - a.z * b.y;
                const dy = a.z * b.x - a.x * b.z;
                const dz = a.x * b.y - a.y * b.x;
                const dotVal = a.x * b.x + a.y * b.y + a.z * b.z;
                return Math.atan2(Math.sqrt(dx * dx + dy * dy + dz * dz), dotVal);
              }
              static add(out, a, b) {
                out.x = a.x + b.x;
                out.y = a.y + b.y;
                out.z = a.z + b.z;
                out.w = a.w + b.w;
                return out;
              }
              static subtract(out, a, b) {
                out.x = a.x - b.x;
                out.y = a.y - b.y;
                out.z = a.z - b.z;
                out.w = a.w - b.w;
                return out;
              }
              static multiply(out, a, b) {
                out.x = a.x * b.x;
                out.y = a.y * b.y;
                out.z = a.z * b.z;
                out.w = a.w * b.w;
                return out;
              }
              static divide(out, a, b) {
                out.x = a.x / b.x;
                out.y = a.y / b.y;
                out.z = a.z / b.z;
                out.w = a.w / b.w;
                return out;
              }
              static ceil(out, a) {
                out.x = Math.ceil(a.x);
                out.y = Math.ceil(a.y);
                out.z = Math.ceil(a.z);
                out.w = Math.ceil(a.w);
                return out;
              }
              static floor(out, a) {
                out.x = Math.floor(a.x);
                out.y = Math.floor(a.y);
                out.z = Math.floor(a.z);
                out.w = Math.floor(a.w);
                return out;
              }
              static min(out, a, b) {
                out.x = Math.min(a.x, b.x);
                out.y = Math.min(a.y, b.y);
                out.z = Math.min(a.z, b.z);
                out.w = Math.min(a.w, b.w);
                return out;
              }
              static max(out, a, b) {
                out.x = Math.max(a.x, b.x);
                out.y = Math.max(a.y, b.y);
                out.z = Math.max(a.z, b.z);
                out.w = Math.max(a.w, b.w);
                return out;
              }
              static round(out, a) {
                out.x = Math.round(a.x);
                out.y = Math.round(a.y);
                out.z = Math.round(a.z);
                out.w = Math.round(a.w);
                return out;
              }
              static multiplyScalar(out, a, b) {
                out.x = a.x * b;
                out.y = a.y * b;
                out.z = a.z * b;
                out.w = a.w * b;
                return out;
              }
              static scaleAndAdd(out, a, b, scale) {
                out.x = a.x + b.x * scale;
                out.y = a.y + b.y * scale;
                out.z = a.z + b.z * scale;
                out.w = a.w + b.w * scale;
                return out;
              }
              static distance(a, b) {
                const x = b.x - a.x;
                const y = b.y - a.y;
                const z = b.z - a.z;
                const w = b.w - a.w;
                return Math.sqrt(x * x + y * y + z * z + w * w);
              }
              static squaredDistance(a, b) {
                const x = b.x - a.x;
                const y = b.y - a.y;
                const z = b.z - a.z;
                const w = b.w - a.w;
                return x * x + y * y + z * z + w * w;
              }
              static len(a) {
                const x = a.x;
                const y = a.y;
                const z = a.z;
                const w = a.w;
                return Math.sqrt(x * x + y * y + z * z + w * w);
              }
              static lengthSqr(a) {
                const x = a.x;
                const y = a.y;
                const z = a.z;
                const w = a.w;
                return x * x + y * y + z * z + w * w;
              }
              static negate(out, a) {
                out.x = -a.x;
                out.y = -a.y;
                out.z = -a.z;
                out.w = -a.w;
                return out;
              }
              static inverse(out, a) {
                out.x = 1.0 / a.x;
                out.y = 1.0 / a.y;
                out.z = 1.0 / a.z;
                out.w = 1.0 / a.w;
                return out;
              }
              static inverseSafe(out, a) {
                const x = a.x;
                const y = a.y;
                const z = a.z;
                const w = a.w;
                if (Math.abs(x) < EPSILON) {
                  out.x = 0;
                } else {
                  out.x = 1.0 / x;
                }
                if (Math.abs(y) < EPSILON) {
                  out.y = 0;
                } else {
                  out.y = 1.0 / y;
                }
                if (Math.abs(z) < EPSILON) {
                  out.z = 0;
                } else {
                  out.z = 1.0 / z;
                }
                if (Math.abs(w) < EPSILON) {
                  out.w = 0;
                } else {
                  out.w = 1.0 / w;
                }
                return out;
              }
              static normalize(out, a) {
                const x = a.x;
                const y = a.y;
                const z = a.z;
                const w = a.w;
                let len = x * x + y * y + z * z + w * w;
                if (len > 0) {
                  len = 1 / Math.sqrt(len);
                  out.x = x * len;
                  out.y = y * len;
                  out.z = z * len;
                  out.w = w * len;
                } else {
                  out.x = 0;
                  out.y = 0;
                  out.z = 0;
                  out.w = 0;
                }
                return out;
              }
              static dot(a, b) {
                return a.x * b.x + a.y * b.y + a.z * b.z + a.w * b.w;
              }
              static lerp(out, a, b, t) {
                out.x = a.x + t * (b.x - a.x);
                out.y = a.y + t * (b.y - a.y);
                out.z = a.z + t * (b.z - a.z);
                out.w = a.w + t * (b.w - a.w);
                return out;
              }
              static scale(out, a, b) {
                out.x = a.x * b;
                out.y = a.y * b;
                out.z = a.z * b;
                out.w = a.w * b;
                return out;
              }
              static random(out, scale) {
                scale = scale || 1.0;
                const phi = random() * 2.0 * Math.PI;
                const cosTheta = random() * 2 - 1;
                const sinTheta = Math.sqrt(1 - cosTheta * cosTheta);
                out.x = sinTheta * Math.cos(phi) * scale;
                out.y = sinTheta * Math.sin(phi) * scale;
                out.z = cosTheta * scale;
                out.w = 0;
                return out;
              }
              static transformMat4(out, a, m) {
                const x = a.x;
                const y = a.y;
                const z = a.z;
                const w = a.w;
                out.x = m.m00 * x + m.m04 * y + m.m08 * z + m.m12 * w;
                out.y = m.m01 * x + m.m05 * y + m.m09 * z + m.m13 * w;
                out.z = m.m02 * x + m.m06 * y + m.m10 * z + m.m14 * w;
                out.w = m.m03 * x + m.m07 * y + m.m11 * z + m.m15 * w;
                return out;
              }
              static transformAffine(out, v, m) {
                const x = v.x;
                const y = v.y;
                const z = v.z;
                const w = v.w;
                out.x = m.m00 * x + m.m04 * y + m.m08 * z + m.m12 * w;
                out.y = m.m01 * x + m.m05 * y + m.m09 * z + m.m13 * w;
                out.z = m.m02 * x + m.m06 * y + m.m10 * z + m.m14 * w;
                out.w = v.w;
                return out;
              }
              static transformQuat(out, a, q) {
                const {
                  x,
                  y,
                  z
                } = a;
                const _x = q.x;
                const _y = q.y;
                const _z = q.z;
                const _w = q.w;
                const ix = _w * x + _y * z - _z * y;
                const iy = _w * y + _z * x - _x * z;
                const iz = _w * z + _x * y - _y * x;
                const iw = -_x * x - _y * y - _z * z;
                out.x = ix * _w + iw * -_x + iy * -_z - iz * -_y;
                out.y = iy * _w + iw * -_y + iz * -_x - ix * -_z;
                out.z = iz * _w + iw * -_z + ix * -_y - iy * -_x;
                out.w = a.w;
                return out;
              }
              static toArray(out, v, ofs = 0) {
                out[ofs + 0] = v.x;
                out[ofs + 1] = v.y;
                out[ofs + 2] = v.z;
                out[ofs + 3] = v.w;
                return out;
              }
              static fromArray(out, arr, ofs = 0) {
                out.x = arr[ofs + 0];
                out.y = arr[ofs + 1];
                out.z = arr[ofs + 2];
                out.w = arr[ofs + 3];
                return out;
              }
              static strictEquals(a, b) {
                return a.x === b.x && a.y === b.y && a.z === b.z && a.w === b.w;
              }
              static equals(a, b, epsilon = EPSILON) {
                const hasInf = Math.abs(a.x) === Infinity || Math.abs(a.y) === Infinity || Math.abs(a.z) === Infinity || Math.abs(a.w) === Infinity || Math.abs(b.x) === Infinity || Math.abs(b.y) === Infinity || Math.abs(b.z) === Infinity || Math.abs(b.w) === Infinity;
                return !hasInf && Math.abs(a.x - b.x) <= epsilon * Math.max(1.0, Math.abs(a.x), Math.abs(b.x)) && Math.abs(a.y - b.y) <= epsilon * Math.max(1.0, Math.abs(a.y), Math.abs(b.y)) && Math.abs(a.z - b.z) <= epsilon * Math.max(1.0, Math.abs(a.z), Math.abs(b.z)) && Math.abs(a.w - b.w) <= epsilon * Math.max(1.0, Math.abs(a.w), Math.abs(b.w));
              }
              constructor(x, y, z, w) {
                super();
                if (typeof x === 'object') {
                  this.x = x.x;
                  this.y = x.y;
                  this.z = x.z;
                  this.w = x.w;
                } else {
                  this.x = x || 0;
                  this.y = y || 0;
                  this.z = z || 0;
                  this.w = w || 0;
                }
              }
              clone() {
                return new Vec4(this.x, this.y, this.z, this.w);
              }
              set(x, y, z, w) {
                if (typeof x === 'object') {
                  this.x = x.x;
                  this.y = x.y;
                  this.z = x.z;
                  this.w = x.w;
                } else {
                  this.x = x || 0;
                  this.y = y || 0;
                  this.z = z || 0;
                  this.w = w || 0;
                }
                return this;
              }
              equals(other, epsilon = EPSILON) {
                return Math.abs(this.x - other.x) <= epsilon * Math.max(1.0, Math.abs(this.x), Math.abs(other.x)) && Math.abs(this.y - other.y) <= epsilon * Math.max(1.0, Math.abs(this.y), Math.abs(other.y)) && Math.abs(this.z - other.z) <= epsilon * Math.max(1.0, Math.abs(this.z), Math.abs(other.z)) && Math.abs(this.w - other.w) <= epsilon * Math.max(1.0, Math.abs(this.w), Math.abs(other.w));
              }
              equals4f(x, y, z, w, epsilon = EPSILON) {
                return Math.abs(this.x - x) <= epsilon * Math.max(1.0, Math.abs(this.x), Math.abs(x)) && Math.abs(this.y - y) <= epsilon * Math.max(1.0, Math.abs(this.y), Math.abs(y)) && Math.abs(this.z - z) <= epsilon * Math.max(1.0, Math.abs(this.z), Math.abs(z)) && Math.abs(this.w - w) <= epsilon * Math.max(1.0, Math.abs(this.w), Math.abs(w));
              }
              strictEquals(other) {
                return this.x === other.x && this.y === other.y && this.z === other.z && this.w === other.w;
              }
              strictEquals4f(x, y, z, w) {
                return this.x === x && this.y === y && this.z === z && this.w === w;
              }
              lerp(to, ratio) {
                const x = this.x;
                const y = this.y;
                const z = this.z;
                const w = this.w;
                this.x = x + ratio * (to.x - x);
                this.y = y + ratio * (to.y - y);
                this.z = z + ratio * (to.z - z);
                this.w = w + ratio * (to.w - w);
                return this;
              }
              toString() {
                return `(${this.x.toFixed(2)}, ${this.y.toFixed(2)}, ${this.z.toFixed(2)}, ${this.w.toFixed(2)})`;
              }
              clampf(minInclusive, maxInclusive) {
                this.x = clamp(this.x, minInclusive.x, maxInclusive.x);
                this.y = clamp(this.y, minInclusive.y, maxInclusive.y);
                this.z = clamp(this.z, minInclusive.z, maxInclusive.z);
                this.w = clamp(this.w, minInclusive.w, maxInclusive.w);
                return this;
              }
              add(other) {
                this.x += other.x;
                this.y += other.y;
                this.z += other.z;
                this.w += other.w;
                return this;
              }
              add4f(x, y, z, w) {
                this.x += x;
                this.y += y;
                this.z += z;
                this.w += w;
                return this;
              }
              subtract(other) {
                this.x -= other.x;
                this.y -= other.y;
                this.z -= other.z;
                this.w -= other.w;
                return this;
              }
              subtract4f(x, y, z, w) {
                this.x -= x;
                this.y -= y;
                this.z -= z;
                this.w -= w;
                return this;
              }
              multiplyScalar(scalar) {
                if (typeof scalar === 'object') {
                  console.warn('should use Vec4.multiply for vector * vector operation');
                }
                this.x *= scalar;
                this.y *= scalar;
                this.z *= scalar;
                this.w *= scalar;
                return this;
              }
              multiply(other) {
                if (typeof other !== 'object') {
                  console.warn('should use Vec4.scale for vector * scalar operation');
                }
                this.x *= other.x;
                this.y *= other.y;
                this.z *= other.z;
                this.w *= other.w;
                return this;
              }
              multiply4f(x, y, z, w) {
                this.x *= x;
                this.y *= y;
                this.z *= z;
                this.w *= w;
                return this;
              }
              divide(other) {
                this.x /= other.x;
                this.y /= other.y;
                this.z /= other.z;
                this.w /= other.w;
                return this;
              }
              divide4f(x, y, z, w) {
                this.x /= x;
                this.y /= y;
                this.z /= z;
                this.w /= w;
                return this;
              }
              negative() {
                this.x = -this.x;
                this.y = -this.y;
                this.z = -this.z;
                this.w = -this.w;
                return this;
              }
              dot(vector) {
                return this.x * vector.x + this.y * vector.y + this.z * vector.z + this.w * vector.w;
              }
              cross(vector) {
                const {
                  x: ax,
                  y: ay,
                  z: az
                } = this;
                const {
                  x: bx,
                  y: by,
                  z: bz
                } = vector;
                this.x = ay * bz - az * by;
                this.y = az * bx - ax * bz;
                this.z = ax * by - ay * bx;
                return this;
              }
              length() {
                const x = this.x;
                const y = this.y;
                const z = this.z;
                const w = this.w;
                return Math.sqrt(x * x + y * y + z * z + w * w);
              }
              lengthSqr() {
                const x = this.x;
                const y = this.y;
                const z = this.z;
                const w = this.w;
                return x * x + y * y + z * z + w * w;
              }
              normalize() {
                const x = this.x;
                const y = this.y;
                const z = this.z;
                const w = this.w;
                let len = x * x + y * y + z * z + w * w;
                if (len > 0) {
                  len = 1 / Math.sqrt(len);
                  this.x = x * len;
                  this.y = y * len;
                  this.z = z * len;
                  this.w = w * len;
                }
                return this;
              }
              scale(scalar) {
                this.x *= scalar;
                this.y *= scalar;
                this.z *= scalar;
                this.w *= scalar;
                return this;
              }
              transformMat4(matrix) {
                const x = this.x;
                const y = this.y;
                const z = this.z;
                const w = this.w;
                this.x = matrix.m00 * x + matrix.m04 * y + matrix.m08 * z + matrix.m12 * w;
                this.y = matrix.m01 * x + matrix.m05 * y + matrix.m09 * z + matrix.m13 * w;
                this.z = matrix.m02 * x + matrix.m06 * y + matrix.m10 * z + matrix.m14 * w;
                this.w = matrix.m03 * x + matrix.m07 * y + matrix.m11 * z + matrix.m15 * w;
                return this;
              }
            } exports('p', Vec4);
            _class$a = Vec4;
            Vec4.ZERO = Object.freeze(new _class$a(0, 0, 0, 0));
            Vec4.ONE = Object.freeze(new _class$a(1, 1, 1, 1));
            Vec4.NEG_ONE = Object.freeze(new _class$a(-1, -1, -1, -1));
            Vec4.UNIT_X = Object.freeze(new _class$a(1, 0, 0, 0));
            Vec4.UNIT_Y = Object.freeze(new _class$a(0, 1, 0, 0));
            Vec4.UNIT_Z = Object.freeze(new _class$a(0, 0, 1, 0));
            Vec4.UNIT_W = Object.freeze(new _class$a(0, 0, 0, 1));
            CCClass.fastDefine('cc.Vec4', Vec4, {
              x: 0,
              y: 0,
              z: 0,
              w: 0
            });
            legacyCC.Vec4 = Vec4;
            function v4(x, y, z, w) {
              return new Vec4(x, y, z, w);
            }
            legacyCC.v4 = v4;

            var _class$9;
            class Vec3 extends ValueType {
              static zero(out) {
                out.x = 0;
                out.y = 0;
                out.z = 0;
                return out;
              }
              static clone(a) {
                return new Vec3(a.x, a.y, a.z);
              }
              static copy(out, a) {
                out.x = a.x;
                out.y = a.y;
                out.z = a.z;
                return out;
              }
              static set(out, x, y, z) {
                out.x = x;
                out.y = y;
                out.z = z;
                return out;
              }
              static add(out, a, b) {
                out.x = a.x + b.x;
                out.y = a.y + b.y;
                out.z = a.z + b.z;
                return out;
              }
              static subtract(out, a, b) {
                out.x = a.x - b.x;
                out.y = a.y - b.y;
                out.z = a.z - b.z;
                return out;
              }
              static multiply(out, a, b) {
                out.x = a.x * b.x;
                out.y = a.y * b.y;
                out.z = a.z * b.z;
                return out;
              }
              static divide(out, a, b) {
                out.x = a.x / b.x;
                out.y = a.y / b.y;
                out.z = a.z / b.z;
                return out;
              }
              static ceil(out, a) {
                out.x = Math.ceil(a.x);
                out.y = Math.ceil(a.y);
                out.z = Math.ceil(a.z);
                return out;
              }
              static floor(out, a) {
                out.x = Math.floor(a.x);
                out.y = Math.floor(a.y);
                out.z = Math.floor(a.z);
                return out;
              }
              static min(out, a, b) {
                out.x = Math.min(a.x, b.x);
                out.y = Math.min(a.y, b.y);
                out.z = Math.min(a.z, b.z);
                return out;
              }
              static max(out, a, b) {
                out.x = Math.max(a.x, b.x);
                out.y = Math.max(a.y, b.y);
                out.z = Math.max(a.z, b.z);
                return out;
              }
              static round(out, a) {
                out.x = Math.round(a.x);
                out.y = Math.round(a.y);
                out.z = Math.round(a.z);
                return out;
              }
              static multiplyScalar(out, a, b) {
                out.x = a.x * b;
                out.y = a.y * b;
                out.z = a.z * b;
                return out;
              }
              static scaleAndAdd(out, a, b, scale) {
                out.x = a.x + b.x * scale;
                out.y = a.y + b.y * scale;
                out.z = a.z + b.z * scale;
                return out;
              }
              static distance(a, b) {
                const x = b.x - a.x;
                const y = b.y - a.y;
                const z = b.z - a.z;
                return Math.sqrt(x * x + y * y + z * z);
              }
              static squaredDistance(a, b) {
                const x = b.x - a.x;
                const y = b.y - a.y;
                const z = b.z - a.z;
                return x * x + y * y + z * z;
              }
              static len(a) {
                const x = a.x;
                const y = a.y;
                const z = a.z;
                return Math.sqrt(x * x + y * y + z * z);
              }
              static lengthSqr(a) {
                const x = a.x;
                const y = a.y;
                const z = a.z;
                return x * x + y * y + z * z;
              }
              static negate(out, a) {
                out.x = -a.x;
                out.y = -a.y;
                out.z = -a.z;
                return out;
              }
              static invert(out, a) {
                out.x = 1.0 / a.x;
                out.y = 1.0 / a.y;
                out.z = 1.0 / a.z;
                return out;
              }
              static invertSafe(out, a) {
                const x = a.x;
                const y = a.y;
                const z = a.z;
                if (Math.abs(x) < EPSILON) {
                  out.x = 0;
                } else {
                  out.x = 1.0 / x;
                }
                if (Math.abs(y) < EPSILON) {
                  out.y = 0;
                } else {
                  out.y = 1.0 / y;
                }
                if (Math.abs(z) < EPSILON) {
                  out.z = 0;
                } else {
                  out.z = 1.0 / z;
                }
                return out;
              }
              static normalize(out, a) {
                const x = a.x;
                const y = a.y;
                const z = a.z;
                let len = x * x + y * y + z * z;
                if (len > 0) {
                  len = 1 / Math.sqrt(len);
                  out.x = x * len;
                  out.y = y * len;
                  out.z = z * len;
                } else {
                  out.x = 0;
                  out.y = 0;
                  out.z = 0;
                }
                return out;
              }
              static dot(a, b) {
                return a.x * b.x + a.y * b.y + a.z * b.z;
              }
              static cross(out, a, b) {
                const {
                  x: ax,
                  y: ay,
                  z: az
                } = a;
                const {
                  x: bx,
                  y: by,
                  z: bz
                } = b;
                out.x = ay * bz - az * by;
                out.y = az * bx - ax * bz;
                out.z = ax * by - ay * bx;
                return out;
              }
              static lerp(out, a, b, t) {
                out.x = a.x + t * (b.x - a.x);
                out.y = a.y + t * (b.y - a.y);
                out.z = a.z + t * (b.z - a.z);
                return out;
              }
              static random(out, scale) {
                scale = scale || 1.0;
                const phi = random() * 2.0 * Math.PI;
                const cosTheta = random() * 2 - 1;
                const sinTheta = Math.sqrt(1 - cosTheta * cosTheta);
                out.x = sinTheta * Math.cos(phi) * scale;
                out.y = sinTheta * Math.sin(phi) * scale;
                out.z = cosTheta * scale;
                return out;
              }
              static transformMat4(out, a, m) {
                const x = a.x;
                const y = a.y;
                const z = a.z;
                let rhw = m.m03 * x + m.m07 * y + m.m11 * z + m.m15;
                rhw = rhw ? 1 / rhw : 1;
                out.x = (m.m00 * x + m.m04 * y + m.m08 * z + m.m12) * rhw;
                out.y = (m.m01 * x + m.m05 * y + m.m09 * z + m.m13) * rhw;
                out.z = (m.m02 * x + m.m06 * y + m.m10 * z + m.m14) * rhw;
                return out;
              }
              static transformMat4Normal(out, a, m) {
                const x = a.x;
                const y = a.y;
                const z = a.z;
                let rhw = m.m03 * x + m.m07 * y + m.m11 * z;
                rhw = rhw ? 1 / rhw : 1;
                out.x = (m.m00 * x + m.m04 * y + m.m08 * z) * rhw;
                out.y = (m.m01 * x + m.m05 * y + m.m09 * z) * rhw;
                out.z = (m.m02 * x + m.m06 * y + m.m10 * z) * rhw;
                return out;
              }
              static transformMat3(out, a, m) {
                const x = a.x;
                const y = a.y;
                const z = a.z;
                out.x = x * m.m00 + y * m.m03 + z * m.m06;
                out.y = x * m.m01 + y * m.m04 + z * m.m07;
                out.z = x * m.m02 + y * m.m05 + z * m.m08;
                return out;
              }
              static transformAffine(out, v, m) {
                const x = v.x;
                const y = v.y;
                const z = v.z;
                out.x = m.m00 * x + m.m04 * y + m.m08 * z + m.m12;
                out.y = m.m01 * x + m.m05 * y + m.m09 * z + m.m13;
                out.z = m.m02 * x + m.m06 * y + m.m10 * z + m.m14;
                return out;
              }
              static transformQuat(out, a, q) {
                const ix = q.w * a.x + q.y * a.z - q.z * a.y;
                const iy = q.w * a.y + q.z * a.x - q.x * a.z;
                const iz = q.w * a.z + q.x * a.y - q.y * a.x;
                const iw = -q.x * a.x - q.y * a.y - q.z * a.z;
                out.x = ix * q.w + iw * -q.x + iy * -q.z - iz * -q.y;
                out.y = iy * q.w + iw * -q.y + iz * -q.x - ix * -q.z;
                out.z = iz * q.w + iw * -q.z + ix * -q.y - iy * -q.x;
                return out;
              }
              static transformRTS(out, a, r, t, s) {
                const x = a.x * s.x;
                const y = a.y * s.y;
                const z = a.z * s.z;
                const ix = r.w * x + r.y * z - r.z * y;
                const iy = r.w * y + r.z * x - r.x * z;
                const iz = r.w * z + r.x * y - r.y * x;
                const iw = -r.x * x - r.y * y - r.z * z;
                out.x = ix * r.w + iw * -r.x + iy * -r.z - iz * -r.y + t.x;
                out.y = iy * r.w + iw * -r.y + iz * -r.x - ix * -r.z + t.y;
                out.z = iz * r.w + iw * -r.z + ix * -r.y - iy * -r.x + t.z;
                return out;
              }
              static transformInverseRTS(out, a, r, t, s) {
                const x = a.x - t.x;
                const y = a.y - t.y;
                const z = a.z - t.z;
                const ix = r.w * x - r.y * z + r.z * y;
                const iy = r.w * y - r.z * x + r.x * z;
                const iz = r.w * z - r.x * y + r.y * x;
                const iw = r.x * x + r.y * y + r.z * z;
                out.x = (ix * r.w + iw * r.x + iy * r.z - iz * r.y) / s.x;
                out.y = (iy * r.w + iw * r.y + iz * r.x - ix * r.z) / s.y;
                out.z = (iz * r.w + iw * r.z + ix * r.y - iy * r.x) / s.z;
                return out;
              }
              static rotateX(out, v, o, a) {
                const x = v.x - o.x;
                const y = v.y - o.y;
                const z = v.z - o.z;
                const cos = Math.cos(a);
                const sin = Math.sin(a);
                const rx = x;
                const ry = y * cos - z * sin;
                const rz = y * sin + z * cos;
                out.x = rx + o.x;
                out.y = ry + o.y;
                out.z = rz + o.z;
                return out;
              }
              static rotateY(out, v, o, a) {
                const x = v.x - o.x;
                const y = v.y - o.y;
                const z = v.z - o.z;
                const cos = Math.cos(a);
                const sin = Math.sin(a);
                const rx = z * sin + x * cos;
                const ry = y;
                const rz = z * cos - x * sin;
                out.x = rx + o.x;
                out.y = ry + o.y;
                out.z = rz + o.z;
                return out;
              }
              static rotateZ(out, v, o, a) {
                const x = v.x - o.x;
                const y = v.y - o.y;
                const z = v.z - o.z;
                const cos = Math.cos(a);
                const sin = Math.sin(a);
                const rx = x * cos - y * sin;
                const ry = x * sin + y * cos;
                const rz = z;
                out.x = rx + o.x;
                out.y = ry + o.y;
                out.z = rz + o.z;
                return out;
              }
              static rotateN(out, v, o, n, a) {
                const x = v.x - o.x;
                const y = v.y - o.y;
                const z = v.z - o.z;
                const nx = n.x;
                const ny = n.y;
                const nz = n.z;
                const cos = Math.cos(a);
                const sin = Math.sin(a);
                const rx = x * (nx * nx * (1.0 - cos) + cos) + y * (nx * ny * (1.0 - cos) - nz * sin) + z * (nx * nz * (1.0 - cos) + ny * sin);
                const ry = x * (nx * ny * (1.0 - cos) + nz * sin) + y * (ny * ny * (1.0 - cos) + cos) + z * (ny * nz * (1.0 - cos) - nx * sin);
                const rz = x * (nx * nz * (1.0 - cos) - ny * sin) + y * (ny * nz * (1.0 - cos) + nx * sin) + z * (nz * nz * (1.0 - cos) + cos);
                out.x = rx + o.x;
                out.y = ry + o.y;
                out.z = rz + o.z;
                return out;
              }
              static toArray(out, v, ofs = 0) {
                out[ofs + 0] = v.x;
                out[ofs + 1] = v.y;
                out[ofs + 2] = v.z;
                return out;
              }
              static fromArray(out, arr, ofs = 0) {
                out.x = arr[ofs + 0];
                out.y = arr[ofs + 1];
                out.z = arr[ofs + 2];
                return out;
              }
              static strictEquals(a, b) {
                return a.x === b.x && a.y === b.y && a.z === b.z;
              }
              static equals(a, b, epsilon = EPSILON) {
                const {
                  x: a0,
                  y: a1,
                  z: a2
                } = a;
                const {
                  x: b0,
                  y: b1,
                  z: b2
                } = b;
                return Math.abs(a0 - b0) <= epsilon * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= epsilon * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= epsilon * Math.max(1.0, Math.abs(a2), Math.abs(b2));
              }
              static angle(a, b) {
                const magSqr1 = a.x * a.x + a.y * a.y + a.z * a.z;
                const magSqr2 = b.x * b.x + b.y * b.y + b.z * b.z;
                if (magSqr1 === 0 || magSqr2 === 0) {
                  return 0.0;
                }
                const dot = a.x * b.x + a.y * b.y + a.z * b.z;
                let cosine = dot / Math.sqrt(magSqr1 * magSqr2);
                cosine = clamp(cosine, -1.0, 1.0);
                return Math.acos(cosine);
              }
              static projectOnPlane(out, a, n) {
                return Vec3.subtract(out, a, Vec3.project(out, a, n));
              }
              static project(out, a, b) {
                const sqrLen = Vec3.lengthSqr(b);
                if (sqrLen < 0.000001) {
                  return Vec3.set(out, 0, 0, 0);
                } else {
                  return Vec3.multiplyScalar(out, b, Vec3.dot(a, b) / sqrLen);
                }
              }
              static moveTowards(out, current, target, maxStep) {
                const deltaX = target.x - current.x;
                const deltaY = target.y - current.y;
                const deltaZ = target.z - current.z;
                const distanceSqr = deltaX * deltaX + deltaY * deltaY + deltaZ * deltaZ;
                if (distanceSqr === 0 || maxStep >= 0 && distanceSqr < maxStep * maxStep) {
                  out.x = target.x;
                  out.y = target.y;
                  out.z = target.z;
                  return out;
                }
                const distance = Math.sqrt(distanceSqr);
                const scale = maxStep / distance;
                out.x = current.x + deltaX * scale;
                out.y = current.y + deltaY * scale;
                out.z = current.z + deltaZ * scale;
                return out;
              }
              static generateOrthogonal(out, n) {
                const {
                  x,
                  y,
                  z
                } = n;
                const absX = Math.abs(x);
                const absY = Math.abs(y);
                const absZ = Math.abs(z);
                if (absX < absY && absX < absZ) {
                  Vec3.set(out, 0.0, z, -y);
                } else if (absY < absZ) {
                  Vec3.set(out, z, 0.0, -x);
                } else {
                  Vec3.set(out, y, -x, 0.0);
                }
                return Vec3.normalize(out, out);
              }
              constructor(x, y, z) {
                super();
                if (typeof x === 'object') {
                  this.x = x.x;
                  this.y = x.y;
                  this.z = x.z;
                } else {
                  this.x = x || 0;
                  this.y = y || 0;
                  this.z = z || 0;
                }
              }
              clone() {
                return new Vec3(this.x, this.y, this.z);
              }
              set(x, y, z) {
                if (typeof x === 'object') {
                  this.x = x.x;
                  this.y = x.y;
                  this.z = x.z;
                } else {
                  this.x = x || 0;
                  this.y = y || 0;
                  this.z = z || 0;
                }
                return this;
              }
              equals(other, epsilon = EPSILON) {
                return Math.abs(this.x - other.x) <= epsilon && Math.abs(this.y - other.y) <= epsilon && Math.abs(this.z - other.z) <= epsilon;
              }
              equals3f(x, y, z, epsilon = EPSILON) {
                return Math.abs(this.x - x) <= epsilon && Math.abs(this.y - y) <= epsilon && Math.abs(this.z - z) <= epsilon;
              }
              strictEquals(other) {
                return this.x === other.x && this.y === other.y && this.z === other.z;
              }
              strictEquals3f(x, y, z) {
                return this.x === x && this.y === y && this.z === z;
              }
              toString() {
                return `(${this.x.toFixed(2)}, ${this.y.toFixed(2)}, ${this.z.toFixed(2)})`;
              }
              lerp(to, ratio) {
                this.x += ratio * (to.x - this.x);
                this.y += ratio * (to.y - this.y);
                this.z += ratio * (to.z - this.z);
                return this;
              }
              add(other) {
                this.x += other.x;
                this.y += other.y;
                this.z += other.z;
                return this;
              }
              add3f(x, y, z) {
                this.x += x;
                this.y += y;
                this.z += z;
                return this;
              }
              subtract(other) {
                this.x -= other.x;
                this.y -= other.y;
                this.z -= other.z;
                return this;
              }
              subtract3f(x, y, z) {
                this.x -= x;
                this.y -= y;
                this.z -= z;
                return this;
              }
              multiplyScalar(scalar) {
                if (typeof scalar === 'object') {
                  console.warn('should use Vec3.multiply for vector * vector operation');
                }
                this.x *= scalar;
                this.y *= scalar;
                this.z *= scalar;
                return this;
              }
              multiply(other) {
                if (typeof other !== 'object') {
                  console.warn('should use Vec3.scale for vector * scalar operation');
                }
                this.x *= other.x;
                this.y *= other.y;
                this.z *= other.z;
                return this;
              }
              multiply3f(x, y, z) {
                this.x *= x;
                this.y *= y;
                this.z *= z;
                return this;
              }
              divide(other) {
                this.x /= other.x;
                this.y /= other.y;
                this.z /= other.z;
                return this;
              }
              divide3f(x, y, z) {
                this.x /= x;
                this.y /= y;
                this.z /= z;
                return this;
              }
              negative() {
                this.x = -this.x;
                this.y = -this.y;
                this.z = -this.z;
                return this;
              }
              clampf(minInclusive, maxInclusive) {
                this.x = clamp(this.x, minInclusive.x, maxInclusive.x);
                this.y = clamp(this.y, minInclusive.y, maxInclusive.y);
                this.z = clamp(this.z, minInclusive.z, maxInclusive.z);
                return this;
              }
              dot(other) {
                return this.x * other.x + this.y * other.y + this.z * other.z;
              }
              cross(other) {
                const {
                  x: ax,
                  y: ay,
                  z: az
                } = this;
                const {
                  x: bx,
                  y: by,
                  z: bz
                } = other;
                this.x = ay * bz - az * by;
                this.y = az * bx - ax * bz;
                this.z = ax * by - ay * bx;
                return this;
              }
              length() {
                return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
              }
              lengthSqr() {
                return this.x * this.x + this.y * this.y + this.z * this.z;
              }
              normalize() {
                const x = this.x;
                const y = this.y;
                const z = this.z;
                let len = x * x + y * y + z * z;
                if (len > 0) {
                  len = 1 / Math.sqrt(len);
                  this.x = x * len;
                  this.y = y * len;
                  this.z = z * len;
                }
                return this;
              }
              transformMat4(matrix) {
                const x = this.x;
                const y = this.y;
                const z = this.z;
                let rhw = matrix.m03 * x + matrix.m07 * y + matrix.m11 * z + matrix.m15;
                rhw = rhw ? 1 / rhw : 1;
                this.x = (matrix.m00 * x + matrix.m04 * y + matrix.m08 * z + matrix.m12) * rhw;
                this.y = (matrix.m01 * x + matrix.m05 * y + matrix.m09 * z + matrix.m13) * rhw;
                this.z = (matrix.m02 * x + matrix.m06 * y + matrix.m10 * z + matrix.m14) * rhw;
                return this;
              }
            } exports('n', Vec3);
            _class$9 = Vec3;
            Vec3.UNIT_X = Object.freeze(new _class$9(1, 0, 0));
            Vec3.UNIT_Y = Object.freeze(new _class$9(0, 1, 0));
            Vec3.UNIT_Z = Object.freeze(new _class$9(0, 0, 1));
            Vec3.RIGHT = Object.freeze(new _class$9(1, 0, 0));
            Vec3.UP = Object.freeze(new _class$9(0, 1, 0));
            Vec3.FORWARD = Object.freeze(new _class$9(0, 0, -1));
            Vec3.ZERO = Object.freeze(new _class$9(0, 0, 0));
            Vec3.ONE = Object.freeze(new _class$9(1, 1, 1));
            Vec3.NEG_ONE = Object.freeze(new _class$9(-1, -1, -1));
            Vec3.slerp = (() => {
              const cacheV1 = new _class$9();
              const cacheV2 = new _class$9();
              const cacheV3 = new _class$9();
              return (out, from, to, t) => {
                const EPSILON = 1e-5;
                const lenFrom = _class$9.len(from);
                const lenTo = _class$9.len(to);
                if (lenFrom < EPSILON || lenTo < EPSILON) {
                  return _class$9.lerp(out, from, to, t);
                }
                const lenLerped = lerp(lenFrom, lenTo, t);
                const dot = _class$9.dot(from, to) / (lenFrom * lenTo);
                if (dot > 1.0 - EPSILON) {
                  return _class$9.lerp(out, from, to, t);
                } else if (dot < -1.0 + EPSILON) {
                  const fromNormalized = _class$9.multiplyScalar(cacheV1, from, 1.0 / lenFrom);
                  const axis = _class$9.generateOrthogonal(cacheV2, fromNormalized);
                  const angle = Math.PI * t;
                  rotateAxisAngle(cacheV3, fromNormalized, axis, angle);
                  _class$9.multiplyScalar(out, cacheV3, lenLerped);
                  return out;
                } else {
                  const dotClamped = dot;
                  const theta = Math.acos(dotClamped) * t;
                  const fromNormalized = _class$9.multiplyScalar(cacheV1, from, 1.0 / lenFrom);
                  const toNormalized = _class$9.multiplyScalar(cacheV2, to, 1.0 / lenTo);
                  _class$9.scaleAndAdd(cacheV3, toNormalized, fromNormalized, -dotClamped);
                  _class$9.normalize(cacheV3, cacheV3);
                  _class$9.multiplyScalar(cacheV3, cacheV3, Math.sin(theta));
                  _class$9.scaleAndAdd(cacheV3, cacheV3, fromNormalized, Math.cos(theta));
                  _class$9.multiplyScalar(out, cacheV3, lenLerped);
                  return out;
                }
              };
            })();
            Vec3.signedAngle = (() => {
              const cacheCross = new _class$9();
              return (a, b, normal) => {
                const angle = _class$9.angle(a, b);
                const cross = _class$9.cross(cacheCross, a, b);
                const dot = _class$9.dot(cross, normal);
                return dot < 0 ? -angle : angle;
              };
            })();
            CCClass.fastDefine('cc.Vec3', Vec3, {
              x: 0,
              y: 0,
              z: 0
            });
            legacyCC.Vec3 = Vec3;
            function v3(x, y, z) {
              return new Vec3(x, y, z);
            }
            const rotateAxisAngle = (() => {
              const cacheQ = {
                x: 0.0,
                y: 0.0,
                z: 0.0,
                w: 0.0
              };
              return (out, input, axis, angle) => {
                const rad = angle * 0.5;
                const s = Math.sin(rad);
                cacheQ.x = s * axis.x;
                cacheQ.y = s * axis.y;
                cacheQ.z = s * axis.z;
                cacheQ.w = Math.cos(rad);
                Vec3.transformQuat(out, input, cacheQ);
                return out;
              };
            })();
            legacyCC.v3 = v3;

            var _class$8;
            const toFloat = 1 / 255;
            class Color extends ValueType {
              static clone(a) {
                const out = new Color();
                if (a._val) {
                  out._val = a._val;
                } else {
                  out._val = (a.a << 24 >>> 0) + (a.b << 16) + (a.g << 8) + a.r;
                }
                return out;
              }
              static copy(out, a) {
                out.r = a.r;
                out.g = a.g;
                out.b = a.b;
                out.a = a.a;
                return out;
              }
              static set(out, r, g, b, a) {
                out.r = r;
                out.g = g;
                out.b = b;
                out.a = a;
                return out;
              }
              static toVec4(color, out) {
                out = out !== undefined ? out : new Vec4();
                out.x = color.r * toFloat;
                out.y = color.g * toFloat;
                out.z = color.b * toFloat;
                out.w = color.a * toFloat;
                return out;
              }
              static fromVec4(value, out) {
                out = out === undefined ? new Color() : out;
                out.r = Math.floor(value.x / toFloat);
                out.g = Math.floor(value.y / toFloat);
                out.b = Math.floor(value.z / toFloat);
                out.a = Math.floor(value.w / toFloat);
                return out;
              }
              static fromHEX(out, hex) {
                let hexNumber;
                if (typeof hex === 'string') {
                  hex = hex[0] === '#' ? hex.substring(1) : hex;
                  if (hex.length === 6) {
                    hex += 'FF';
                  } else if (hex.length === 3) {
                    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + 'FF';
                  } else if (hex.length === 4) {
                    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
                  }
                  hexNumber = Number('0x' + hex);
                } else {
                  if (hex < 0x1000000) {
                    hex = (hex << 8) + 0xff;
                  }
                  hexNumber = hex;
                }
                out.r = hexNumber >>> 24;
                out.g = (hexNumber & 0x00ff0000) >>> 16;
                out.b = (hexNumber & 0x0000ff00) >>> 8;
                out.a = hexNumber & 0x000000ff;
                out._val = (out.a << 24 >>> 0) + (out.b << 16) + (out.g << 8) + out.r;
                return out;
              }
              static add(out, a, b) {
                out.r = a.r + b.r;
                out.g = a.g + b.g;
                out.b = a.b + b.b;
                out.a = a.a + b.a;
                return out;
              }
              static subtract(out, a, b) {
                out.r = a.r - b.r;
                out.g = a.g - b.g;
                out.b = a.b - b.b;
                out.a = a.a - b.a;
                return out;
              }
              static multiply(out, a, b) {
                out.r = a.r * b.r;
                out.g = a.g * b.g;
                out.b = a.b * b.b;
                out.a = a.a * b.a;
                return out;
              }
              static divide(out, a, b) {
                out.r = a.r / b.r;
                out.g = a.g / b.g;
                out.b = a.b / b.b;
                out.a = a.a / b.a;
                return out;
              }
              static scale(out, a, b) {
                out.r = a.r * b;
                out.g = a.g * b;
                out.b = a.b * b;
                out.a = a.a * b;
                return out;
              }
              static lerp(out, from, to, ratio) {
                let r = from.r;
                let g = from.g;
                let b = from.b;
                let a = from.a;
                r += (to.r - r) * ratio;
                g += (to.g - g) * ratio;
                b += (to.b - b) * ratio;
                a += (to.a - a) * ratio;
                out._val = Math.floor((a << 24 >>> 0) + (b << 16) + (g << 8) + r);
                return out;
              }
              static toArray(out, a, ofs = 0) {
                const scale = a instanceof Color || a.a > 1 ? 1 / 255 : 1;
                out[ofs + 0] = a.r * scale;
                out[ofs + 1] = a.g * scale;
                out[ofs + 2] = a.b * scale;
                out[ofs + 3] = a.a * scale;
                return out;
              }
              static fromArray(arr, out, ofs = 0) {
                out.r = arr[ofs + 0] * 255;
                out.g = arr[ofs + 1] * 255;
                out.b = arr[ofs + 2] * 255;
                out.a = arr[ofs + 3] * 255;
                return out;
              }
              static fromUint32(out, uint32) {
                out._val = uint32;
                return out;
              }
              static toUint32(color) {
                return color._val;
              }
              static strictEquals(a, b) {
                return a.r === b.r && a.g === b.g && a.b === b.b && a.a === b.a;
              }
              static equals(a, b, epsilon = EPSILON) {
                const hasInf = Math.abs(a.r) === Infinity || Math.abs(a.g) === Infinity || Math.abs(a.b) === Infinity || Math.abs(a.a) === Infinity;
                return !hasInf && Math.abs(a.r - b.r) <= epsilon * Math.max(1.0, Math.abs(a.r), Math.abs(b.r)) && Math.abs(a.g - b.g) <= epsilon * Math.max(1.0, Math.abs(a.g), Math.abs(b.g)) && Math.abs(a.b - b.b) <= epsilon * Math.max(1.0, Math.abs(a.b), Math.abs(b.b)) && Math.abs(a.a - b.a) <= epsilon * Math.max(1.0, Math.abs(a.a), Math.abs(b.a));
              }
              static hex(a) {
                return (a.r * 255 << 24 | a.g * 255 << 16 | a.b * 255 << 8 | a.a * 255) >>> 0;
              }
              get r() {
                return this._val & 0x000000ff;
              }
              set r(red) {
                red = ~~clamp(red, 0, 255);
                this._val = (this._val & 0xffffff00 | red) >>> 0;
              }
              get g() {
                return (this._val & 0x0000ff00) >> 8;
              }
              set g(green) {
                green = ~~clamp(green, 0, 255);
                this._val = (this._val & 0xffff00ff | green << 8) >>> 0;
              }
              get b() {
                return (this._val & 0x00ff0000) >> 16;
              }
              set b(blue) {
                blue = ~~clamp(blue, 0, 255);
                this._val = (this._val & 0xff00ffff | blue << 16) >>> 0;
              }
              get a() {
                return (this._val & 0xff000000) >>> 24;
              }
              set a(alpha) {
                alpha = ~~clamp(alpha, 0, 255);
                this._val = (this._val & 0x00ffffff | alpha << 24) >>> 0;
              }
              get x() {
                return this.r * toFloat;
              }
              set x(value) {
                this.r = value * 255;
              }
              get y() {
                return this.g * toFloat;
              }
              set y(value) {
                this.g = value * 255;
              }
              get z() {
                return this.b * toFloat;
              }
              set z(value) {
                this.b = value * 255;
              }
              get w() {
                return this.a * toFloat;
              }
              set w(value) {
                this.a = value * 255;
              }
              constructor(r, g, b, a) {
                super();
                this._val = 0;
                if (typeof r === 'string') {
                  this.fromHEX(r);
                } else if (g !== undefined) {
                  this.set(r, g, b, a);
                } else {
                  this.set(r);
                }
              }
              clone() {
                const ret = new Color();
                ret._val = this._val;
                return ret;
              }
              equals(other) {
                return other && this._val === other._val;
              }
              lerp(to, ratio) {
                let r = this.r;
                let g = this.g;
                let b = this.b;
                let a = this.a;
                r += (to.r - r) * ratio;
                g += (to.g - g) * ratio;
                b += (to.b - b) * ratio;
                a += (to.a - a) * ratio;
                this._val = Math.floor((a << 24 >>> 0) + (b << 16) + (g << 8) + r);
                return this;
              }
              toString() {
                return `rgba(${this.r.toFixed()}, ${this.g.toFixed()}, ${this.b.toFixed()}, ${this.a.toFixed()})`;
              }
              toCSS(opt = 'rgba') {
                if (opt === 'rgba') {
                  return `rgba(${this.r},${this.g},${this.b},${(this.a * toFloat).toFixed(2)})`;
                } else if (opt === 'rgb') {
                  return `rgb(${this.r},${this.g},${this.b})`;
                } else {
                  return `#${this.toHEX(opt)}`;
                }
              }
              fromHEX(hex) {
                let hexNumber;
                if (typeof hex === 'string') {
                  hex = hex[0] === '#' ? hex.substring(1) : hex;
                  if (hex.length === 6) {
                    hex += 'FF';
                  } else if (hex.length === 3) {
                    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + 'FF';
                  } else if (hex.length === 4) {
                    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
                  }
                  hexNumber = Number('0x' + hex);
                } else {
                  if (hex < 0x1000000) {
                    hex = (hex << 8) + 0xff;
                  }
                  hexNumber = hex;
                }
                const r = hexNumber >>> 24;
                const g = (hexNumber & 0x00ff0000) >>> 16;
                const b = (hexNumber & 0x0000ff00) >>> 8;
                const a = hexNumber & 0x000000ff;
                this._val = (a << 24 >>> 0) + (b << 16) + (g << 8) + r;
                return this;
              }
              toHEX(fmt = '#rrggbb') {
                const prefix = '0';
                const hex = [(this.r < 16 ? prefix : '') + this.r.toString(16), (this.g < 16 ? prefix : '') + this.g.toString(16), (this.b < 16 ? prefix : '') + this.b.toString(16)];
                if (fmt === '#rgb') {
                  hex[0] = hex[0][0];
                  hex[1] = hex[1][0];
                  hex[2] = hex[2][0];
                } else if (fmt === '#rrggbbaa') {
                  hex.push((this.a < 16 ? prefix : '') + this.a.toString(16));
                }
                return hex.join('');
              }
              toRGBValue() {
                return this._val & 0x00ffffff;
              }
              fromHSV(h, s, v) {
                let r = 0;
                let g = 0;
                let b = 0;
                if (s === 0) {
                  r = g = b = v;
                } else if (v === 0) {
                  r = g = b = 0;
                } else {
                  if (h === 1) {
                    h = 0;
                  }
                  h *= 6;
                  const i = Math.floor(h);
                  const f = h - i;
                  const p = v * (1 - s);
                  const q = v * (1 - s * f);
                  const t = v * (1 - s * (1 - f));
                  switch (i) {
                    default:
                      assertIsTrue(false);
                    case 0:
                      r = v;
                      g = t;
                      b = p;
                      break;
                    case 1:
                      r = q;
                      g = v;
                      b = p;
                      break;
                    case 2:
                      r = p;
                      g = v;
                      b = t;
                      break;
                    case 3:
                      r = p;
                      g = q;
                      b = v;
                      break;
                    case 4:
                      r = t;
                      g = p;
                      b = v;
                      break;
                    case 5:
                      r = v;
                      g = p;
                      b = q;
                      break;
                  }
                }
                r *= 255;
                g *= 255;
                b *= 255;
                this._val = (this.a << 24 >>> 0) + (b << 16) + (g << 8) + (r | 0);
                return this;
              }
              toHSV() {
                const r = this.r * toFloat;
                const g = this.g * toFloat;
                const b = this.b * toFloat;
                const hsv = {
                  h: 0,
                  s: 0,
                  v: 0
                };
                const max = Math.max(r, g, b);
                const min = Math.min(r, g, b);
                let delta = 0;
                hsv.v = max;
                hsv.s = max ? (max - min) / max : 0;
                if (!hsv.s) {
                  hsv.h = 0;
                } else {
                  delta = max - min;
                  if (r === max) {
                    hsv.h = (g - b) / delta;
                  } else if (g === max) {
                    hsv.h = 2 + (b - r) / delta;
                  } else {
                    hsv.h = 4 + (r - g) / delta;
                  }
                  hsv.h /= 6;
                  if (hsv.h < 0) {
                    hsv.h += 1.0;
                  }
                }
                return hsv;
              }
              set(r, g, b, a) {
                if (typeof r === 'object') {
                  if (r._val != null) {
                    this._val = r._val;
                  } else {
                    g = r.g || 0;
                    b = r.b || 0;
                    a = typeof r.a === 'number' ? r.a : 255;
                    r = r.r || 0;
                    this._val = (a << 24 >>> 0) + (b << 16) + (g << 8) + (r | 0);
                  }
                } else {
                  r = r || 0;
                  g = g || 0;
                  b = b || 0;
                  a = typeof a === 'number' ? a : 255;
                  this._val = (a << 24 >>> 0) + (b << 16) + (g << 8) + (r | 0);
                }
                return this;
              }
              multiply(other) {
                const r = (this._val & 0x000000ff) * other.r >> 8;
                const g = (this._val & 0x0000ff00) * other.g >> 8;
                const b = (this._val & 0x00ff0000) * other.b >> 8;
                const a = ((this._val & 0xff000000) >>> 8) * other.a;
                this._val = a & 0xff000000 | b & 0x00ff0000 | g & 0x0000ff00 | r & 0x000000ff;
                return this;
              }
              _set_r_unsafe(red) {
                this._val = (this._val & 0xffffff00 | red) >>> 0;
                return this;
              }
              _set_g_unsafe(green) {
                this._val = (this._val & 0xffff00ff | green << 8) >>> 0;
                return this;
              }
              _set_b_unsafe(blue) {
                this._val = (this._val & 0xff00ffff | blue << 16) >>> 0;
                return this;
              }
              _set_a_unsafe(alpha) {
                this._val = (this._val & 0x00ffffff | alpha << 24) >>> 0;
                return this;
              }
            } exports('C', Color);
            _class$8 = Color;
            Color.WHITE = Object.freeze(new _class$8(255, 255, 255, 255));
            Color.GRAY = Object.freeze(new _class$8(127, 127, 127, 255));
            Color.BLACK = Object.freeze(new _class$8(0, 0, 0, 255));
            Color.TRANSPARENT = Object.freeze(new _class$8(0, 0, 0, 0));
            Color.RED = Object.freeze(new _class$8(255, 0, 0, 255));
            Color.GREEN = Object.freeze(new _class$8(0, 255, 0, 255));
            Color.BLUE = Object.freeze(new _class$8(0, 0, 255, 255));
            Color.CYAN = Object.freeze(new _class$8(0, 255, 255, 255));
            Color.MAGENTA = Object.freeze(new _class$8(255, 0, 255, 255));
            Color.YELLOW = Object.freeze(new _class$8(255, 255, 0, 255));
            CCClass.fastDefine('cc.Color', Color, {
              r: 0,
              g: 0,
              b: 0,
              a: 255
            });
            legacyCC.Color = Color;
            function color(r, g, b, a) {
              return new Color(r, g, b, a);
            }
            legacyCC.color = color;

            var _class$7;
            class Mat3 extends ValueType {
              static clone(a) {
                return new Mat3(a.m00, a.m01, a.m02, a.m03, a.m04, a.m05, a.m06, a.m07, a.m08);
              }
              static copy(out, a) {
                out.m00 = a.m00;
                out.m01 = a.m01;
                out.m02 = a.m02;
                out.m03 = a.m03;
                out.m04 = a.m04;
                out.m05 = a.m05;
                out.m06 = a.m06;
                out.m07 = a.m07;
                out.m08 = a.m08;
                return out;
              }
              static set(out, m00, m01, m02, m03, m04, m05, m06, m07, m08) {
                out.m00 = m00;
                out.m01 = m01;
                out.m02 = m02;
                out.m03 = m03;
                out.m04 = m04;
                out.m05 = m05;
                out.m06 = m06;
                out.m07 = m07;
                out.m08 = m08;
                return out;
              }
              static identity(out) {
                out.m00 = 1;
                out.m01 = 0;
                out.m02 = 0;
                out.m03 = 0;
                out.m04 = 1;
                out.m05 = 0;
                out.m06 = 0;
                out.m07 = 0;
                out.m08 = 1;
                return out;
              }
              static transpose(out, a) {
                if (out === a) {
                  const a01 = a.m01;
                  const a02 = a.m02;
                  const a12 = a.m05;
                  out.m01 = a.m03;
                  out.m02 = a.m06;
                  out.m03 = a01;
                  out.m05 = a.m07;
                  out.m06 = a02;
                  out.m07 = a12;
                } else {
                  out.m00 = a.m00;
                  out.m01 = a.m03;
                  out.m02 = a.m06;
                  out.m03 = a.m01;
                  out.m04 = a.m04;
                  out.m05 = a.m07;
                  out.m06 = a.m02;
                  out.m07 = a.m05;
                  out.m08 = a.m08;
                }
                return out;
              }
              static invert(out, a) {
                const a00 = a.m00;
                const a01 = a.m01;
                const a02 = a.m02;
                const a10 = a.m03;
                const a11 = a.m04;
                const a12 = a.m05;
                const a20 = a.m06;
                const a21 = a.m07;
                const a22 = a.m08;
                const b01 = a22 * a11 - a12 * a21;
                const b11 = -a22 * a10 + a12 * a20;
                const b21 = a21 * a10 - a11 * a20;
                let det = a00 * b01 + a01 * b11 + a02 * b21;
                if (det === 0) {
                  out.m00 = 0;
                  out.m01 = 0;
                  out.m02 = 0;
                  out.m03 = 0;
                  out.m04 = 0;
                  out.m05 = 0;
                  out.m06 = 0;
                  out.m07 = 0;
                  out.m08 = 0;
                  return out;
                }
                det = 1.0 / det;
                out.m00 = b01 * det;
                out.m01 = (-a22 * a01 + a02 * a21) * det;
                out.m02 = (a12 * a01 - a02 * a11) * det;
                out.m03 = b11 * det;
                out.m04 = (a22 * a00 - a02 * a20) * det;
                out.m05 = (-a12 * a00 + a02 * a10) * det;
                out.m06 = b21 * det;
                out.m07 = (-a21 * a00 + a01 * a20) * det;
                out.m08 = (a11 * a00 - a01 * a10) * det;
                return out;
              }
              static determinant(a) {
                const a00 = a.m00;
                const a01 = a.m01;
                const a02 = a.m02;
                const a10 = a.m03;
                const a11 = a.m04;
                const a12 = a.m05;
                const a20 = a.m06;
                const a21 = a.m07;
                const a22 = a.m08;
                return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
              }
              static multiply(out, a, b) {
                const a00 = a.m00;
                const a01 = a.m01;
                const a02 = a.m02;
                const a10 = a.m03;
                const a11 = a.m04;
                const a12 = a.m05;
                const a20 = a.m06;
                const a21 = a.m07;
                const a22 = a.m08;
                const b00 = b.m00;
                const b01 = b.m01;
                const b02 = b.m02;
                const b10 = b.m03;
                const b11 = b.m04;
                const b12 = b.m05;
                const b20 = b.m06;
                const b21 = b.m07;
                const b22 = b.m08;
                out.m00 = b00 * a00 + b01 * a10 + b02 * a20;
                out.m01 = b00 * a01 + b01 * a11 + b02 * a21;
                out.m02 = b00 * a02 + b01 * a12 + b02 * a22;
                out.m03 = b10 * a00 + b11 * a10 + b12 * a20;
                out.m04 = b10 * a01 + b11 * a11 + b12 * a21;
                out.m05 = b10 * a02 + b11 * a12 + b12 * a22;
                out.m06 = b20 * a00 + b21 * a10 + b22 * a20;
                out.m07 = b20 * a01 + b21 * a11 + b22 * a21;
                out.m08 = b20 * a02 + b21 * a12 + b22 * a22;
                return out;
              }
              static multiplyMat4(out, a, b) {
                const a00 = a.m00;
                const a01 = a.m01;
                const a02 = a.m02;
                const a10 = a.m03;
                const a11 = a.m04;
                const a12 = a.m05;
                const a20 = a.m06;
                const a21 = a.m07;
                const a22 = a.m08;
                const b00 = b.m00;
                const b01 = b.m01;
                const b02 = b.m02;
                const b10 = b.m04;
                const b11 = b.m05;
                const b12 = b.m06;
                const b20 = b.m08;
                const b21 = b.m09;
                const b22 = b.m10;
                out.m00 = b00 * a00 + b01 * a10 + b02 * a20;
                out.m01 = b00 * a01 + b01 * a11 + b02 * a21;
                out.m02 = b00 * a02 + b01 * a12 + b02 * a22;
                out.m03 = b10 * a00 + b11 * a10 + b12 * a20;
                out.m04 = b10 * a01 + b11 * a11 + b12 * a21;
                out.m05 = b10 * a02 + b11 * a12 + b12 * a22;
                out.m06 = b20 * a00 + b21 * a10 + b22 * a20;
                out.m07 = b20 * a01 + b21 * a11 + b22 * a21;
                out.m08 = b20 * a02 + b21 * a12 + b22 * a22;
                return out;
              }
              static transform(out, a, v) {
                this.translate(out, a, v);
              }
              static translate(out, a, v) {
                const a00 = a.m00;
                const a01 = a.m01;
                const a02 = a.m02;
                const a10 = a.m03;
                const a11 = a.m04;
                const a12 = a.m05;
                const a20 = a.m06;
                const a21 = a.m07;
                const a22 = a.m08;
                const x = v.x;
                const y = v.y;
                out.m00 = a00;
                out.m01 = a01;
                out.m02 = a02;
                out.m03 = a10;
                out.m04 = a11;
                out.m05 = a12;
                out.m06 = x * a00 + y * a10 + a20;
                out.m07 = x * a01 + y * a11 + a21;
                out.m08 = x * a02 + y * a12 + a22;
                return out;
              }
              static scale(out, a, v) {
                const x = v.x;
                const y = v.y;
                out.m00 = x * a.m00;
                out.m01 = x * a.m01;
                out.m02 = x * a.m02;
                out.m03 = y * a.m03;
                out.m04 = y * a.m04;
                out.m05 = y * a.m05;
                out.m06 = a.m06;
                out.m07 = a.m07;
                out.m08 = a.m08;
                return out;
              }
              static rotate(out, a, rad) {
                const a00 = a.m00;
                const a01 = a.m01;
                const a02 = a.m02;
                const a10 = a.m03;
                const a11 = a.m04;
                const a12 = a.m05;
                const a20 = a.m06;
                const a21 = a.m07;
                const a22 = a.m08;
                const s = Math.sin(rad);
                const c = Math.cos(rad);
                out.m00 = c * a00 + s * a10;
                out.m01 = c * a01 + s * a11;
                out.m02 = c * a02 + s * a12;
                out.m03 = c * a10 - s * a00;
                out.m04 = c * a11 - s * a01;
                out.m05 = c * a12 - s * a02;
                out.m06 = a20;
                out.m07 = a21;
                out.m08 = a22;
                return out;
              }
              static fromMat4(out, a) {
                out.m00 = a.m00;
                out.m01 = a.m01;
                out.m02 = a.m02;
                out.m03 = a.m04;
                out.m04 = a.m05;
                out.m05 = a.m06;
                out.m06 = a.m08;
                out.m07 = a.m09;
                out.m08 = a.m10;
                return out;
              }
              static fromViewUp(out, view, up) {
                if (Vec3.lengthSqr(view) < EPSILON * EPSILON) {
                  Mat3.identity(out);
                  return out;
                }
                up = up || Vec3.UNIT_Y;
                Vec3.normalize(v3_1$2, Vec3.cross(v3_1$2, up, view));
                if (Vec3.lengthSqr(v3_1$2) < EPSILON * EPSILON) {
                  Mat3.identity(out);
                  return out;
                }
                Vec3.cross(v3_2, view, v3_1$2);
                Mat3.set(out, v3_1$2.x, v3_1$2.y, v3_1$2.z, v3_2.x, v3_2.y, v3_2.z, view.x, view.y, view.z);
                return out;
              }
              static fromTranslation(out, v) {
                out.m00 = 1;
                out.m01 = 0;
                out.m02 = 0;
                out.m03 = 0;
                out.m04 = 1;
                out.m05 = 0;
                out.m06 = v.x;
                out.m07 = v.y;
                out.m08 = 1;
                return out;
              }
              static fromScaling(out, v) {
                out.m00 = v.x;
                out.m01 = 0;
                out.m02 = 0;
                out.m03 = 0;
                out.m04 = v.y;
                out.m05 = 0;
                out.m06 = 0;
                out.m07 = 0;
                out.m08 = 1;
                return out;
              }
              static fromRotation(out, rad) {
                const s = Math.sin(rad);
                const c = Math.cos(rad);
                out.m00 = c;
                out.m01 = s;
                out.m02 = 0;
                out.m03 = -s;
                out.m04 = c;
                out.m05 = 0;
                out.m06 = 0;
                out.m07 = 0;
                out.m08 = 1;
                return out;
              }
              static fromQuat(out, q) {
                const x = q.x;
                const y = q.y;
                const z = q.z;
                const w = q.w;
                const x2 = x + x;
                const y2 = y + y;
                const z2 = z + z;
                const xx = x * x2;
                const yx = y * x2;
                const yy = y * y2;
                const zx = z * x2;
                const zy = z * y2;
                const zz = z * z2;
                const wx = w * x2;
                const wy = w * y2;
                const wz = w * z2;
                out.m00 = 1 - yy - zz;
                out.m03 = yx - wz;
                out.m06 = zx + wy;
                out.m01 = yx + wz;
                out.m04 = 1 - xx - zz;
                out.m07 = zy - wx;
                out.m02 = zx - wy;
                out.m05 = zy + wx;
                out.m08 = 1 - xx - yy;
                return out;
              }
              static inverseTransposeMat4(out, a) {
                const a00 = a.m00;
                const a01 = a.m01;
                const a02 = a.m02;
                const a03 = a.m03;
                const a10 = a.m04;
                const a11 = a.m05;
                const a12 = a.m06;
                const a13 = a.m07;
                const a20 = a.m08;
                const a21 = a.m09;
                const a22 = a.m10;
                const a23 = a.m11;
                const a30 = a.m12;
                const a31 = a.m13;
                const a32 = a.m14;
                const a33 = a.m15;
                const b00 = a00 * a11 - a01 * a10;
                const b01 = a00 * a12 - a02 * a10;
                const b02 = a00 * a13 - a03 * a10;
                const b03 = a01 * a12 - a02 * a11;
                const b04 = a01 * a13 - a03 * a11;
                const b05 = a02 * a13 - a03 * a12;
                const b06 = a20 * a31 - a21 * a30;
                const b07 = a20 * a32 - a22 * a30;
                const b08 = a20 * a33 - a23 * a30;
                const b09 = a21 * a32 - a22 * a31;
                const b10 = a21 * a33 - a23 * a31;
                const b11 = a22 * a33 - a23 * a32;
                let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
                if (!det) {
                  return null;
                }
                det = 1.0 / det;
                out.m00 = (a11 * b11 - a12 * b10 + a13 * b09) * det;
                out.m01 = (a12 * b08 - a10 * b11 - a13 * b07) * det;
                out.m02 = (a10 * b10 - a11 * b08 + a13 * b06) * det;
                out.m03 = (a02 * b10 - a01 * b11 - a03 * b09) * det;
                out.m04 = (a00 * b11 - a02 * b08 + a03 * b07) * det;
                out.m05 = (a01 * b08 - a00 * b10 - a03 * b06) * det;
                out.m06 = (a31 * b05 - a32 * b04 + a33 * b03) * det;
                out.m07 = (a32 * b02 - a30 * b05 - a33 * b01) * det;
                out.m08 = (a30 * b04 - a31 * b02 + a33 * b00) * det;
                return out;
              }
              static toArray(out, m, ofs = 0) {
                out[ofs + 0] = m.m00;
                out[ofs + 1] = m.m01;
                out[ofs + 2] = m.m02;
                out[ofs + 3] = m.m03;
                out[ofs + 4] = m.m04;
                out[ofs + 5] = m.m05;
                out[ofs + 6] = m.m06;
                out[ofs + 7] = m.m07;
                out[ofs + 8] = m.m08;
                return out;
              }
              static fromArray(out, arr, ofs = 0) {
                out.m00 = arr[ofs + 0];
                out.m01 = arr[ofs + 1];
                out.m02 = arr[ofs + 2];
                out.m03 = arr[ofs + 3];
                out.m04 = arr[ofs + 4];
                out.m05 = arr[ofs + 5];
                out.m06 = arr[ofs + 6];
                out.m07 = arr[ofs + 7];
                out.m08 = arr[ofs + 8];
                return out;
              }
              static add(out, a, b) {
                out.m00 = a.m00 + b.m00;
                out.m01 = a.m01 + b.m01;
                out.m02 = a.m02 + b.m02;
                out.m03 = a.m03 + b.m03;
                out.m04 = a.m04 + b.m04;
                out.m05 = a.m05 + b.m05;
                out.m06 = a.m06 + b.m06;
                out.m07 = a.m07 + b.m07;
                out.m08 = a.m08 + b.m08;
                return out;
              }
              static subtract(out, a, b) {
                out.m00 = a.m00 - b.m00;
                out.m01 = a.m01 - b.m01;
                out.m02 = a.m02 - b.m02;
                out.m03 = a.m03 - b.m03;
                out.m04 = a.m04 - b.m04;
                out.m05 = a.m05 - b.m05;
                out.m06 = a.m06 - b.m06;
                out.m07 = a.m07 - b.m07;
                out.m08 = a.m08 - b.m08;
                return out;
              }
              static multiplyScalar(out, a, b) {
                out.m00 = a.m00 * b;
                out.m01 = a.m01 * b;
                out.m02 = a.m02 * b;
                out.m03 = a.m03 * b;
                out.m04 = a.m04 * b;
                out.m05 = a.m05 * b;
                out.m06 = a.m06 * b;
                out.m07 = a.m07 * b;
                out.m08 = a.m08 * b;
                return out;
              }
              static multiplyScalarAndAdd(out, a, b, scale) {
                out.m00 = b.m00 * scale + a.m00;
                out.m01 = b.m01 * scale + a.m01;
                out.m02 = b.m02 * scale + a.m02;
                out.m03 = b.m03 * scale + a.m03;
                out.m04 = b.m04 * scale + a.m04;
                out.m05 = b.m05 * scale + a.m05;
                out.m06 = b.m06 * scale + a.m06;
                out.m07 = b.m07 * scale + a.m07;
                out.m08 = b.m08 * scale + a.m08;
                return out;
              }
              static strictEquals(a, b) {
                return a.m00 === b.m00 && a.m01 === b.m01 && a.m02 === b.m02 && a.m03 === b.m03 && a.m04 === b.m04 && a.m05 === b.m05 && a.m06 === b.m06 && a.m07 === b.m07 && a.m08 === b.m08;
              }
              static equals(a, b, epsilon = EPSILON) {
                return Math.abs(a.m00 - b.m00) <= epsilon * Math.max(1.0, Math.abs(a.m00), Math.abs(b.m00)) && Math.abs(a.m01 - b.m01) <= epsilon * Math.max(1.0, Math.abs(a.m01), Math.abs(b.m01)) && Math.abs(a.m02 - b.m02) <= epsilon * Math.max(1.0, Math.abs(a.m02), Math.abs(b.m02)) && Math.abs(a.m03 - b.m03) <= epsilon * Math.max(1.0, Math.abs(a.m03), Math.abs(b.m03)) && Math.abs(a.m04 - b.m04) <= epsilon * Math.max(1.0, Math.abs(a.m04), Math.abs(b.m04)) && Math.abs(a.m05 - b.m05) <= epsilon * Math.max(1.0, Math.abs(a.m05), Math.abs(b.m05)) && Math.abs(a.m06 - b.m06) <= epsilon * Math.max(1.0, Math.abs(a.m06), Math.abs(b.m06)) && Math.abs(a.m07 - b.m07) <= epsilon * Math.max(1.0, Math.abs(a.m07), Math.abs(b.m07)) && Math.abs(a.m08 - b.m08) <= epsilon * Math.max(1.0, Math.abs(a.m08), Math.abs(b.m08));
              }
              static toEuler(matrix, v) {
                const a00 = matrix.m00;
                const a01 = matrix.m01;
                matrix.m02;
                const a10 = matrix.m03;
                const a11 = matrix.m04;
                matrix.m05;
                const a20 = matrix.m06;
                const a21 = matrix.m07;
                const a22 = matrix.m08;
                if (a21 < 0.999) {
                  if (a21 > -0.999) {
                    v.x = Math.asin(-a21);
                    v.y = Math.atan2(a20, a22);
                    v.z = Math.atan2(a01, a11);
                    return true;
                  } else {
                    v.x = HALF_PI;
                    v.y = Math.atan2(a10, a00);
                    v.z = 0.0;
                    return false;
                  }
                } else {
                  v.x = -HALF_PI;
                  v.y = Math.atan2(-a10, a00);
                  v.z = 0.0;
                  return false;
                }
              }
              constructor(m00 = 1, m01 = 0, m02 = 0, m03 = 0, m04 = 1, m05 = 0, m06 = 0, m07 = 0, m08 = 1) {
                super();
                if (typeof m00 === 'object') {
                  this.m00 = m00.m00;
                  this.m01 = m00.m01;
                  this.m02 = m00.m02;
                  this.m03 = m00.m03;
                  this.m04 = m00.m04;
                  this.m05 = m00.m05;
                  this.m06 = m00.m06;
                  this.m07 = m00.m07;
                  this.m08 = m00.m08;
                } else {
                  this.m00 = m00;
                  this.m01 = m01;
                  this.m02 = m02;
                  this.m03 = m03;
                  this.m04 = m04;
                  this.m05 = m05;
                  this.m06 = m06;
                  this.m07 = m07;
                  this.m08 = m08;
                }
              }
              clone() {
                const t = this;
                return new Mat3(t.m00, t.m01, t.m02, t.m03, t.m04, t.m05, t.m06, t.m07, t.m08);
              }
              set(m00 = 1, m01 = 0, m02 = 0, m03 = 0, m04 = 1, m05 = 0, m06 = 0, m07 = 0, m08 = 1) {
                if (typeof m00 === 'object') {
                  this.m00 = m00.m00;
                  this.m01 = m00.m01;
                  this.m02 = m00.m02;
                  this.m03 = m00.m03;
                  this.m04 = m00.m04;
                  this.m05 = m00.m05;
                  this.m06 = m00.m06;
                  this.m07 = m00.m07;
                  this.m08 = m00.m08;
                } else {
                  this.m00 = m00;
                  this.m01 = m01;
                  this.m02 = m02;
                  this.m03 = m03;
                  this.m04 = m04;
                  this.m05 = m05;
                  this.m06 = m06;
                  this.m07 = m07;
                  this.m08 = m08;
                }
                return this;
              }
              equals(other, epsilon = EPSILON) {
                return Math.abs(this.m00 - other.m00) <= epsilon * Math.max(1.0, Math.abs(this.m00), Math.abs(other.m00)) && Math.abs(this.m01 - other.m01) <= epsilon * Math.max(1.0, Math.abs(this.m01), Math.abs(other.m01)) && Math.abs(this.m02 - other.m02) <= epsilon * Math.max(1.0, Math.abs(this.m02), Math.abs(other.m02)) && Math.abs(this.m03 - other.m03) <= epsilon * Math.max(1.0, Math.abs(this.m03), Math.abs(other.m03)) && Math.abs(this.m04 - other.m04) <= epsilon * Math.max(1.0, Math.abs(this.m04), Math.abs(other.m04)) && Math.abs(this.m05 - other.m05) <= epsilon * Math.max(1.0, Math.abs(this.m05), Math.abs(other.m05)) && Math.abs(this.m06 - other.m06) <= epsilon * Math.max(1.0, Math.abs(this.m06), Math.abs(other.m06)) && Math.abs(this.m07 - other.m07) <= epsilon * Math.max(1.0, Math.abs(this.m07), Math.abs(other.m07)) && Math.abs(this.m08 - other.m08) <= epsilon * Math.max(1.0, Math.abs(this.m08), Math.abs(other.m08));
              }
              strictEquals(other) {
                return this.m00 === other.m00 && this.m01 === other.m01 && this.m02 === other.m02 && this.m03 === other.m03 && this.m04 === other.m04 && this.m05 === other.m05 && this.m06 === other.m06 && this.m07 === other.m07 && this.m08 === other.m08;
              }
              toString() {
                const t = this;
                return `[\n${t.m00}, ${t.m01}, ${t.m02},\n${t.m03},\n${t.m04}, ${t.m05},\n${t.m06}, ${t.m07},\n${t.m08}\n` + `]`;
              }
              identity() {
                this.m00 = 1;
                this.m01 = 0;
                this.m02 = 0;
                this.m03 = 0;
                this.m04 = 1;
                this.m05 = 0;
                this.m06 = 0;
                this.m07 = 0;
                this.m08 = 1;
                return this;
              }
              transpose() {
                const a01 = this.m01;
                const a02 = this.m02;
                const a12 = this.m05;
                this.m01 = this.m03;
                this.m02 = this.m06;
                this.m03 = a01;
                this.m05 = this.m07;
                this.m06 = a02;
                this.m07 = a12;
                return this;
              }
              invert() {
                const a00 = this.m00;
                const a01 = this.m01;
                const a02 = this.m02;
                const a10 = this.m03;
                const a11 = this.m04;
                const a12 = this.m05;
                const a20 = this.m06;
                const a21 = this.m07;
                const a22 = this.m08;
                const b01 = a22 * a11 - a12 * a21;
                const b11 = -a22 * a10 + a12 * a20;
                const b21 = a21 * a10 - a11 * a20;
                let det = a00 * b01 + a01 * b11 + a02 * b21;
                if (det === 0) {
                  this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
                  return this;
                }
                det = 1.0 / det;
                this.m00 = b01 * det;
                this.m01 = (-a22 * a01 + a02 * a21) * det;
                this.m02 = (a12 * a01 - a02 * a11) * det;
                this.m03 = b11 * det;
                this.m04 = (a22 * a00 - a02 * a20) * det;
                this.m05 = (-a12 * a00 + a02 * a10) * det;
                this.m06 = b21 * det;
                this.m07 = (-a21 * a00 + a01 * a20) * det;
                this.m08 = (a11 * a00 - a01 * a10) * det;
                return this;
              }
              determinant() {
                const a00 = this.m00;
                const a01 = this.m01;
                const a02 = this.m02;
                const a10 = this.m03;
                const a11 = this.m04;
                const a12 = this.m05;
                const a20 = this.m06;
                const a21 = this.m07;
                const a22 = this.m08;
                return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
              }
              add(mat) {
                this.m00 += mat.m00;
                this.m01 += mat.m01;
                this.m02 += mat.m02;
                this.m03 += mat.m03;
                this.m04 += mat.m04;
                this.m05 += mat.m05;
                this.m06 += mat.m06;
                this.m07 += mat.m07;
                this.m08 += mat.m08;
                return this;
              }
              subtract(mat) {
                this.m00 -= mat.m00;
                this.m01 -= mat.m01;
                this.m02 -= mat.m02;
                this.m03 -= mat.m03;
                this.m04 -= mat.m04;
                this.m05 -= mat.m05;
                this.m06 -= mat.m06;
                this.m07 -= mat.m07;
                this.m08 -= mat.m08;
                return this;
              }
              multiply(mat) {
                const a00 = this.m00;
                const a01 = this.m01;
                const a02 = this.m02;
                const a10 = this.m03;
                const a11 = this.m04;
                const a12 = this.m05;
                const a20 = this.m06;
                const a21 = this.m07;
                const a22 = this.m08;
                const b00 = mat.m00;
                const b01 = mat.m01;
                const b02 = mat.m02;
                const b10 = mat.m03;
                const b11 = mat.m04;
                const b12 = mat.m05;
                const b20 = mat.m06;
                const b21 = mat.m07;
                const b22 = mat.m08;
                this.m00 = b00 * a00 + b01 * a10 + b02 * a20;
                this.m01 = b00 * a01 + b01 * a11 + b02 * a21;
                this.m02 = b00 * a02 + b01 * a12 + b02 * a22;
                this.m03 = b10 * a00 + b11 * a10 + b12 * a20;
                this.m04 = b10 * a01 + b11 * a11 + b12 * a21;
                this.m05 = b10 * a02 + b11 * a12 + b12 * a22;
                this.m06 = b20 * a00 + b21 * a10 + b22 * a20;
                this.m07 = b20 * a01 + b21 * a11 + b22 * a21;
                this.m08 = b20 * a02 + b21 * a12 + b22 * a22;
                return this;
              }
              multiplyScalar(scalar) {
                this.m00 *= scalar;
                this.m01 *= scalar;
                this.m02 *= scalar;
                this.m03 *= scalar;
                this.m04 *= scalar;
                this.m05 *= scalar;
                this.m06 *= scalar;
                this.m07 *= scalar;
                this.m08 *= scalar;
                return this;
              }
              scale(vec) {
                const x = vec.x;
                const y = vec.y;
                this.m00 = x * this.m00;
                this.m01 = x * this.m01;
                this.m02 = x * this.m02;
                this.m03 = y * this.m03;
                this.m04 = y * this.m04;
                this.m05 = y * this.m05;
                this.m06 = this.m06;
                this.m07 = this.m07;
                this.m08 = this.m08;
                return this;
              }
              rotate(rad) {
                const a00 = this.m00;
                const a01 = this.m01;
                const a02 = this.m02;
                const a10 = this.m03;
                const a11 = this.m04;
                const a12 = this.m05;
                const a20 = this.m06;
                const a21 = this.m07;
                const a22 = this.m08;
                const s = Math.sin(rad);
                const c = Math.cos(rad);
                this.m00 = c * a00 + s * a10;
                this.m01 = c * a01 + s * a11;
                this.m02 = c * a02 + s * a12;
                this.m03 = c * a10 - s * a00;
                this.m04 = c * a11 - s * a01;
                this.m05 = c * a12 - s * a02;
                this.m06 = a20;
                this.m07 = a21;
                this.m08 = a22;
                return this;
              }
              fromQuat(q) {
                const x = q.x;
                const y = q.y;
                const z = q.z;
                const w = q.w;
                const x2 = x + x;
                const y2 = y + y;
                const z2 = z + z;
                const xx = x * x2;
                const yx = y * x2;
                const yy = y * y2;
                const zx = z * x2;
                const zy = z * y2;
                const zz = z * z2;
                const wx = w * x2;
                const wy = w * y2;
                const wz = w * z2;
                this.m00 = 1 - yy - zz;
                this.m03 = yx - wz;
                this.m06 = zx + wy;
                this.m01 = yx + wz;
                this.m04 = 1 - xx - zz;
                this.m07 = zy - wx;
                this.m02 = zx - wy;
                this.m05 = zy + wx;
                this.m08 = 1 - xx - yy;
                return this;
              }
            } exports('M', Mat3);
            _class$7 = Mat3;
            Mat3.IDENTITY = Object.freeze(new _class$7());
            const v3_1$2 = new Vec3();
            const v3_2 = new Vec3();
            CCClass.fastDefine('cc.Mat3', Mat3, {
              m00: 1,
              m01: 0,
              m02: 0,
              m03: 0,
              m04: 1,
              m05: 0,
              m06: 0,
              m07: 0,
              m08: 1
            });
            legacyCC.Mat3 = Mat3;

            var _class$6;
            class Quat extends ValueType {
              static clone(a) {
                return new Quat(a.x, a.y, a.z, a.w);
              }
              static copy(out, a) {
                out.x = a.x;
                out.y = a.y;
                out.z = a.z;
                out.w = a.w;
                return out;
              }
              static set(out, x, y, z, w) {
                out.x = x;
                out.y = y;
                out.z = z;
                out.w = w;
                return out;
              }
              static identity(out) {
                out.x = 0;
                out.y = 0;
                out.z = 0;
                out.w = 1;
                return out;
              }
              static rotationTo(out, a, b) {
                const dot = Vec3.dot(a, b);
                if (dot < -0.999999) {
                  Vec3.cross(v3_1$1, Vec3.UNIT_X, a);
                  if (v3_1$1.length() < 0.000001) {
                    Vec3.cross(v3_1$1, Vec3.UNIT_Y, a);
                  }
                  Vec3.normalize(v3_1$1, v3_1$1);
                  Quat.fromAxisAngle(out, v3_1$1, Math.PI);
                  return out;
                } else if (dot > 0.999999) {
                  out.x = 0;
                  out.y = 0;
                  out.z = 0;
                  out.w = 1;
                  return out;
                } else {
                  Vec3.cross(v3_1$1, a, b);
                  out.x = v3_1$1.x;
                  out.y = v3_1$1.y;
                  out.z = v3_1$1.z;
                  out.w = 1 + dot;
                  return Quat.normalize(out, out);
                }
              }
              static getAxisAngle(outAxis, q) {
                const rad = Math.acos(q.w) * 2.0;
                const s = Math.sin(rad / 2.0);
                if (s !== 0.0) {
                  outAxis.x = q.x / s;
                  outAxis.y = q.y / s;
                  outAxis.z = q.z / s;
                } else {
                  outAxis.x = 1;
                  outAxis.y = 0;
                  outAxis.z = 0;
                }
                return rad;
              }
              static multiply(out, a, b) {
                const x = a.x * b.w + a.w * b.x + a.y * b.z - a.z * b.y;
                const y = a.y * b.w + a.w * b.y + a.z * b.x - a.x * b.z;
                const z = a.z * b.w + a.w * b.z + a.x * b.y - a.y * b.x;
                const w = a.w * b.w - a.x * b.x - a.y * b.y - a.z * b.z;
                out.x = x;
                out.y = y;
                out.z = z;
                out.w = w;
                return out;
              }
              static multiplyScalar(out, a, b) {
                out.x = a.x * b;
                out.y = a.y * b;
                out.z = a.z * b;
                out.w = a.w * b;
                return out;
              }
              static scaleAndAdd(out, a, b, scale) {
                out.x = a.x + b.x * scale;
                out.y = a.y + b.y * scale;
                out.z = a.z + b.z * scale;
                out.w = a.w + b.w * scale;
                return out;
              }
              static rotateX(out, a, rad) {
                rad *= 0.5;
                const bx = Math.sin(rad);
                const bw = Math.cos(rad);
                const {
                  x,
                  y,
                  z,
                  w
                } = a;
                out.x = x * bw + w * bx;
                out.y = y * bw + z * bx;
                out.z = z * bw - y * bx;
                out.w = w * bw - x * bx;
                return out;
              }
              static rotateY(out, a, rad) {
                rad *= 0.5;
                const by = Math.sin(rad);
                const bw = Math.cos(rad);
                const {
                  x,
                  y,
                  z,
                  w
                } = a;
                out.x = x * bw - z * by;
                out.y = y * bw + w * by;
                out.z = z * bw + x * by;
                out.w = w * bw - y * by;
                return out;
              }
              static rotateZ(out, a, rad) {
                rad *= 0.5;
                const bz = Math.sin(rad);
                const bw = Math.cos(rad);
                const {
                  x,
                  y,
                  z,
                  w
                } = a;
                out.x = x * bw + y * bz;
                out.y = y * bw - x * bz;
                out.z = z * bw + w * bz;
                out.w = w * bw - z * bz;
                return out;
              }
              static rotateAround(out, rot, axis, rad) {
                Quat.invert(qt_1, rot);
                Vec3.transformQuat(v3_1$1, axis, qt_1);
                Quat.fromAxisAngle(qt_1, v3_1$1, rad);
                Quat.multiply(out, rot, qt_1);
                return out;
              }
              static rotateAroundLocal(out, rot, axis, rad) {
                Quat.fromAxisAngle(qt_1, axis, rad);
                Quat.multiply(out, rot, qt_1);
                return out;
              }
              static calculateW(out, a) {
                out.x = a.x;
                out.y = a.y;
                out.z = a.z;
                out.w = Math.sqrt(Math.abs(1.0 - a.x * a.x - a.y * a.y - a.z * a.z));
                return out;
              }
              static dot(a, b) {
                return a.x * b.x + a.y * b.y + a.z * b.z + a.w * b.w;
              }
              static lerp(out, a, b, t) {
                out.x = a.x + t * (b.x - a.x);
                out.y = a.y + t * (b.y - a.y);
                out.z = a.z + t * (b.z - a.z);
                out.w = a.w + t * (b.w - a.w);
                return out;
              }
              static slerp(out, a, b, t) {
                let scale0 = 0;
                let scale1 = 0;
                let bx = b.x;
                let by = b.y;
                let bz = b.z;
                let bw = b.w;
                let cosom = a.x * b.x + a.y * b.y + a.z * b.z + a.w * b.w;
                if (cosom < 0.0) {
                  cosom = -cosom;
                  bx = -bx;
                  by = -by;
                  bz = -bz;
                  bw = -bw;
                }
                if (1.0 - cosom > 0.000001) {
                  const omega = Math.acos(cosom);
                  const sinom = Math.sin(omega);
                  scale0 = Math.sin((1.0 - t) * omega) / sinom;
                  scale1 = Math.sin(t * omega) / sinom;
                } else {
                  scale0 = 1.0 - t;
                  scale1 = t;
                }
                out.x = scale0 * a.x + scale1 * bx;
                out.y = scale0 * a.y + scale1 * by;
                out.z = scale0 * a.z + scale1 * bz;
                out.w = scale0 * a.w + scale1 * bw;
                return out;
              }
              static sqlerp(out, a, b, c, d, t) {
                Quat.slerp(qt_1, a, d, t);
                Quat.slerp(qt_2, b, c, t);
                Quat.slerp(out, qt_1, qt_2, 2 * t * (1 - t));
                return out;
              }
              static invert(out, a) {
                const dot = a.x * a.x + a.y * a.y + a.z * a.z + a.w * a.w;
                const invDot = dot ? 1.0 / dot : 0;
                out.x = -a.x * invDot;
                out.y = -a.y * invDot;
                out.z = -a.z * invDot;
                out.w = a.w * invDot;
                return out;
              }
              static conjugate(out, a) {
                out.x = -a.x;
                out.y = -a.y;
                out.z = -a.z;
                out.w = a.w;
                return out;
              }
              static len(a) {
                return Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z + a.w * a.w);
              }
              static lengthSqr(a) {
                return a.x * a.x + a.y * a.y + a.z * a.z + a.w * a.w;
              }
              static normalize(out, a) {
                let len = a.x * a.x + a.y * a.y + a.z * a.z + a.w * a.w;
                if (len > 0) {
                  len = 1 / Math.sqrt(len);
                  out.x = a.x * len;
                  out.y = a.y * len;
                  out.z = a.z * len;
                  out.w = a.w * len;
                } else {
                  out.x = 0;
                  out.y = 0;
                  out.z = 0;
                  out.w = 0;
                }
                return out;
              }
              static fromAxes(out, xAxis, yAxis, zAxis) {
                Mat3.set(m3_1$1, xAxis.x, xAxis.y, xAxis.z, yAxis.x, yAxis.y, yAxis.z, zAxis.x, zAxis.y, zAxis.z);
                return Quat.normalize(out, Quat.fromMat3(out, m3_1$1));
              }
              static fromViewUp(out, view, up) {
                Mat3.fromViewUp(m3_1$1, view, up);
                return Quat.normalize(out, Quat.fromMat3(out, m3_1$1));
              }
              static fromAxisAngle(out, axis, rad) {
                rad *= 0.5;
                const s = Math.sin(rad);
                out.x = s * axis.x;
                out.y = s * axis.y;
                out.z = s * axis.z;
                out.w = Math.cos(rad);
                return out;
              }
              static fromMat3(out, m) {
                const {
                  m00,
                  m01,
                  m02,
                  m03: m10,
                  m04: m11,
                  m05: m12,
                  m06: m20,
                  m07: m21,
                  m08: m22
                } = m;
                const fourXSquaredMinus1 = m00 - m11 - m22;
                const fourYSquaredMinus1 = m11 - m00 - m22;
                const fourZSquaredMinus1 = m22 - m00 - m11;
                const fourWSquaredMinus1 = m00 + m11 + m22;
                let biggestIndex = 0;
                let fourBiggestSquaredMinus1 = fourWSquaredMinus1;
                if (fourXSquaredMinus1 > fourBiggestSquaredMinus1) {
                  fourBiggestSquaredMinus1 = fourXSquaredMinus1;
                  biggestIndex = 1;
                }
                if (fourYSquaredMinus1 > fourBiggestSquaredMinus1) {
                  fourBiggestSquaredMinus1 = fourYSquaredMinus1;
                  biggestIndex = 2;
                }
                if (fourZSquaredMinus1 > fourBiggestSquaredMinus1) {
                  fourBiggestSquaredMinus1 = fourZSquaredMinus1;
                  biggestIndex = 3;
                }
                const biggestVal = Math.sqrt(fourBiggestSquaredMinus1 + 1) * 0.5;
                const mult = 0.25 / biggestVal;
                switch (biggestIndex) {
                  case 0:
                    out.w = biggestVal;
                    out.x = (m12 - m21) * mult;
                    out.y = (m20 - m02) * mult;
                    out.z = (m01 - m10) * mult;
                    break;
                  case 1:
                    out.w = (m12 - m21) * mult;
                    out.x = biggestVal;
                    out.y = (m01 + m10) * mult;
                    out.z = (m20 + m02) * mult;
                    break;
                  case 2:
                    out.w = (m20 - m02) * mult;
                    out.x = (m01 + m10) * mult;
                    out.y = biggestVal;
                    out.z = (m12 + m21) * mult;
                    break;
                  case 3:
                    out.w = (m01 - m10) * mult;
                    out.x = (m20 + m02) * mult;
                    out.y = (m12 + m21) * mult;
                    out.z = biggestVal;
                    break;
                  default:
                    out.w = 1;
                    out.x = 0;
                    out.y = 0;
                    out.z = 0;
                    break;
                }
                return out;
              }
              static fromEuler(out, x, y, z) {
                x *= halfToRad;
                y *= halfToRad;
                z *= halfToRad;
                const sx = Math.sin(x);
                const cx = Math.cos(x);
                const sy = Math.sin(y);
                const cy = Math.cos(y);
                const sz = Math.sin(z);
                const cz = Math.cos(z);
                out.x = sx * cy * cz + cx * sy * sz;
                out.y = cx * sy * cz + sx * cy * sz;
                out.z = cx * cy * sz - sx * sy * cz;
                out.w = cx * cy * cz - sx * sy * sz;
                return out;
              }
              static fromAngleZ(out, z) {
                z *= halfToRad;
                out.x = out.y = 0;
                out.z = Math.sin(z);
                out.w = Math.cos(z);
                return out;
              }
              static toAxisX(out, q) {
                const fy = 2.0 * q.y;
                const fz = 2.0 * q.z;
                out.x = 1.0 - fy * q.y - fz * q.z;
                out.y = fy * q.x + fz * q.w;
                out.z = fz * q.x - fy * q.w;
                return out;
              }
              static toAxisY(out, q) {
                const fx = 2.0 * q.x;
                const fy = 2.0 * q.y;
                const fz = 2.0 * q.z;
                out.x = fy * q.x - fz * q.w;
                out.y = 1.0 - fx * q.x - fz * q.z;
                out.z = fz * q.y + fx * q.w;
                return out;
              }
              static toAxisZ(out, q) {
                const fx = 2.0 * q.x;
                const fy = 2.0 * q.y;
                const fz = 2.0 * q.z;
                out.x = fz * q.x + fy * q.w;
                out.y = fz * q.y - fx * q.w;
                out.z = 1.0 - fx * q.x - fy * q.y;
                return out;
              }
              static toEuler(out, q, outerZ) {
                const {
                  x,
                  y,
                  z,
                  w
                } = q;
                let bank = 0;
                let heading = 0;
                let attitude = 0;
                const test = x * y + z * w;
                if (test > 0.499999) {
                  bank = 0;
                  heading = toDegree(2 * Math.atan2(x, w));
                  attitude = 90;
                } else if (test < -0.499999) {
                  bank = 0;
                  heading = -toDegree(2 * Math.atan2(x, w));
                  attitude = -90;
                } else {
                  const sqx = x * x;
                  const sqy = y * y;
                  const sqz = z * z;
                  bank = toDegree(Math.atan2(2 * x * w - 2 * y * z, 1 - 2 * sqx - 2 * sqz));
                  heading = toDegree(Math.atan2(2 * y * w - 2 * x * z, 1 - 2 * sqy - 2 * sqz));
                  attitude = toDegree(Math.asin(2 * test));
                  if (outerZ) {
                    bank = -180 * Math.sign(bank + 1e-6) + bank;
                    heading = -180 * Math.sign(heading + 1e-6) + heading;
                    attitude = 180 * Math.sign(attitude + 1e-6) - attitude;
                  }
                }
                out.x = bank;
                out.y = heading;
                out.z = attitude;
                return out;
              }
              static toEulerInYXZOrder(out, q) {
                Mat3.fromQuat(m3_1$1, q);
                Mat3.toEuler(m3_1$1, out);
                out.x = toDegree(out.x);
                out.y = toDegree(out.y);
                out.z = toDegree(out.z);
              }
              static toArray(out, q, ofs = 0) {
                out[ofs + 0] = q.x;
                out[ofs + 1] = q.y;
                out[ofs + 2] = q.z;
                out[ofs + 3] = q.w;
                return out;
              }
              static fromArray(out, arr, ofs = 0) {
                out.x = arr[ofs + 0];
                out.y = arr[ofs + 1];
                out.z = arr[ofs + 2];
                out.w = arr[ofs + 3];
                return out;
              }
              static strictEquals(a, b) {
                return a.x === b.x && a.y === b.y && a.z === b.z && a.w === b.w;
              }
              static equals(a, b, epsilon = EPSILON) {
                return Math.abs(a.x - b.x) <= epsilon * Math.max(1.0, Math.abs(a.x), Math.abs(b.x)) && Math.abs(a.y - b.y) <= epsilon * Math.max(1.0, Math.abs(a.y), Math.abs(b.y)) && Math.abs(a.z - b.z) <= epsilon * Math.max(1.0, Math.abs(a.z), Math.abs(b.z)) && Math.abs(a.w - b.w) <= epsilon * Math.max(1.0, Math.abs(a.w), Math.abs(b.w));
              }
              static angle(a, b) {
                const dot = Math.min(Math.abs(Quat.dot(a, b)), 1.0);
                return Math.acos(dot) * 2.0;
              }
              static rotateTowards(out, from, to, maxStep) {
                const angle = Quat.angle(from, to);
                if (angle === 0) {
                  out.x = to.x;
                  out.y = to.y;
                  out.z = to.z;
                  out.w = to.w;
                  return out;
                }
                const t = Math.min(maxStep / toDegree(angle), 1.0);
                return Quat.slerp(out, from, to, t);
              }
              constructor(x, y, z, w) {
                super();
                if (typeof x === 'object') {
                  this.x = x.x;
                  this.y = x.y;
                  this.z = x.z;
                  this.w = x.w;
                } else {
                  this.x = x || 0;
                  this.y = y || 0;
                  this.z = z || 0;
                  this.w = w !== null && w !== void 0 ? w : 1;
                }
              }
              clone() {
                return new Quat(this.x, this.y, this.z, this.w);
              }
              set(x, y, z, w) {
                if (typeof x === 'object') {
                  this.x = x.x;
                  this.y = x.y;
                  this.z = x.z;
                  this.w = x.w;
                } else {
                  this.x = x || 0;
                  this.y = y || 0;
                  this.z = z || 0;
                  this.w = w !== null && w !== void 0 ? w : 1;
                }
                return this;
              }
              equals(other, epsilon = EPSILON) {
                return Math.abs(this.x - other.x) <= epsilon * Math.max(1.0, Math.abs(this.x), Math.abs(other.x)) && Math.abs(this.y - other.y) <= epsilon * Math.max(1.0, Math.abs(this.y), Math.abs(other.y)) && Math.abs(this.z - other.z) <= epsilon * Math.max(1.0, Math.abs(this.z), Math.abs(other.z)) && Math.abs(this.w - other.w) <= epsilon * Math.max(1.0, Math.abs(this.w), Math.abs(other.w));
              }
              strictEquals(other) {
                return other && this.x === other.x && this.y === other.y && this.z === other.z && this.w === other.w;
              }
              getEulerAngles(out) {
                return Quat.toEuler(out, this);
              }
              lerp(to, ratio) {
                this.x += ratio * (to.x - this.x);
                this.y += ratio * (to.y - this.y);
                this.z += ratio * (to.z - this.z);
                this.w += ratio * (to.w - this.w);
                return this;
              }
              slerp(to, ratio) {
                return Quat.slerp(this, this, to, ratio);
              }
              length() {
                return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
              }
              lengthSqr() {
                return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
              }
            } exports('Q', Quat);
            _class$6 = Quat;
            Quat.IDENTITY = Object.freeze(new _class$6());
            const qt_1 = new Quat();
            const qt_2 = new Quat();
            const v3_1$1 = new Vec3();
            const m3_1$1 = new Mat3();
            const halfToRad = 0.5 * Math.PI / 180.0;
            CCClass.fastDefine('cc.Quat', Quat, {
              x: 0,
              y: 0,
              z: 0,
              w: 1
            });
            legacyCC.Quat = Quat;
            function quat(x = 0, y = 0, z = 0, w = 1) {
              return new Quat(x, y, z, w);
            }
            legacyCC.quat = quat;

            var _class$5;
            const preTransforms = exports('z', Object.freeze([Object.freeze([1, 0, 0, 1]), Object.freeze([0, 1, -1, 0]), Object.freeze([-1, 0, 0, -1]), Object.freeze([0, -1, 1, 0])]));
            class Mat4 extends ValueType {
              static clone(a) {
                return new Mat4(a.m00, a.m01, a.m02, a.m03, a.m04, a.m05, a.m06, a.m07, a.m08, a.m09, a.m10, a.m11, a.m12, a.m13, a.m14, a.m15);
              }
              static copy(out, a) {
                out.m00 = a.m00;
                out.m01 = a.m01;
                out.m02 = a.m02;
                out.m03 = a.m03;
                out.m04 = a.m04;
                out.m05 = a.m05;
                out.m06 = a.m06;
                out.m07 = a.m07;
                out.m08 = a.m08;
                out.m09 = a.m09;
                out.m10 = a.m10;
                out.m11 = a.m11;
                out.m12 = a.m12;
                out.m13 = a.m13;
                out.m14 = a.m14;
                out.m15 = a.m15;
                return out;
              }
              static set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
                out.m00 = m00;
                out.m01 = m01;
                out.m02 = m02;
                out.m03 = m03;
                out.m04 = m10;
                out.m05 = m11;
                out.m06 = m12;
                out.m07 = m13;
                out.m08 = m20;
                out.m09 = m21;
                out.m10 = m22;
                out.m11 = m23;
                out.m12 = m30;
                out.m13 = m31;
                out.m14 = m32;
                out.m15 = m33;
                return out;
              }
              static identity(out) {
                out.m00 = 1;
                out.m01 = 0;
                out.m02 = 0;
                out.m03 = 0;
                out.m04 = 0;
                out.m05 = 1;
                out.m06 = 0;
                out.m07 = 0;
                out.m08 = 0;
                out.m09 = 0;
                out.m10 = 1;
                out.m11 = 0;
                out.m12 = 0;
                out.m13 = 0;
                out.m14 = 0;
                out.m15 = 1;
                return out;
              }
              static transpose(out, a) {
                if (out === a) {
                  const a01 = a.m01;
                  const a02 = a.m02;
                  const a03 = a.m03;
                  const a12 = a.m06;
                  const a13 = a.m07;
                  const a23 = a.m11;
                  out.m01 = a.m04;
                  out.m02 = a.m08;
                  out.m03 = a.m12;
                  out.m04 = a01;
                  out.m06 = a.m09;
                  out.m07 = a.m13;
                  out.m08 = a02;
                  out.m09 = a12;
                  out.m11 = a.m14;
                  out.m12 = a03;
                  out.m13 = a13;
                  out.m14 = a23;
                } else {
                  out.m00 = a.m00;
                  out.m01 = a.m04;
                  out.m02 = a.m08;
                  out.m03 = a.m12;
                  out.m04 = a.m01;
                  out.m05 = a.m05;
                  out.m06 = a.m09;
                  out.m07 = a.m13;
                  out.m08 = a.m02;
                  out.m09 = a.m06;
                  out.m10 = a.m10;
                  out.m11 = a.m14;
                  out.m12 = a.m03;
                  out.m13 = a.m07;
                  out.m14 = a.m11;
                  out.m15 = a.m15;
                }
                return out;
              }
              static invert(out, a) {
                const a00 = a.m00;
                const a01 = a.m01;
                const a02 = a.m02;
                const a03 = a.m03;
                const a10 = a.m04;
                const a11 = a.m05;
                const a12 = a.m06;
                const a13 = a.m07;
                const a20 = a.m08;
                const a21 = a.m09;
                const a22 = a.m10;
                const a23 = a.m11;
                const a30 = a.m12;
                const a31 = a.m13;
                const a32 = a.m14;
                const a33 = a.m15;
                const b00 = a00 * a11 - a01 * a10;
                const b01 = a00 * a12 - a02 * a10;
                const b02 = a00 * a13 - a03 * a10;
                const b03 = a01 * a12 - a02 * a11;
                const b04 = a01 * a13 - a03 * a11;
                const b05 = a02 * a13 - a03 * a12;
                const b06 = a20 * a31 - a21 * a30;
                const b07 = a20 * a32 - a22 * a30;
                const b08 = a20 * a33 - a23 * a30;
                const b09 = a21 * a32 - a22 * a31;
                const b10 = a21 * a33 - a23 * a31;
                const b11 = a22 * a33 - a23 * a32;
                let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
                if (det === 0) {
                  out.m00 = 0;
                  out.m01 = 0;
                  out.m02 = 0;
                  out.m03 = 0;
                  out.m04 = 0;
                  out.m05 = 0;
                  out.m06 = 0;
                  out.m07 = 0;
                  out.m08 = 0;
                  out.m09 = 0;
                  out.m10 = 0;
                  out.m11 = 0;
                  out.m12 = 0;
                  out.m13 = 0;
                  out.m14 = 0;
                  out.m15 = 0;
                  return out;
                }
                det = 1.0 / det;
                out.m00 = (a11 * b11 - a12 * b10 + a13 * b09) * det;
                out.m01 = (a02 * b10 - a01 * b11 - a03 * b09) * det;
                out.m02 = (a31 * b05 - a32 * b04 + a33 * b03) * det;
                out.m03 = (a22 * b04 - a21 * b05 - a23 * b03) * det;
                out.m04 = (a12 * b08 - a10 * b11 - a13 * b07) * det;
                out.m05 = (a00 * b11 - a02 * b08 + a03 * b07) * det;
                out.m06 = (a32 * b02 - a30 * b05 - a33 * b01) * det;
                out.m07 = (a20 * b05 - a22 * b02 + a23 * b01) * det;
                out.m08 = (a10 * b10 - a11 * b08 + a13 * b06) * det;
                out.m09 = (a01 * b08 - a00 * b10 - a03 * b06) * det;
                out.m10 = (a30 * b04 - a31 * b02 + a33 * b00) * det;
                out.m11 = (a21 * b02 - a20 * b04 - a23 * b00) * det;
                out.m12 = (a11 * b07 - a10 * b09 - a12 * b06) * det;
                out.m13 = (a00 * b09 - a01 * b07 + a02 * b06) * det;
                out.m14 = (a31 * b01 - a30 * b03 - a32 * b00) * det;
                out.m15 = (a20 * b03 - a21 * b01 + a22 * b00) * det;
                return out;
              }
              static determinant(a) {
                const a00 = a.m00;
                const a01 = a.m01;
                const a02 = a.m02;
                const a03 = a.m03;
                const a10 = a.m04;
                const a11 = a.m05;
                const a12 = a.m06;
                const a13 = a.m07;
                const a20 = a.m08;
                const a21 = a.m09;
                const a22 = a.m10;
                const a23 = a.m11;
                const a30 = a.m12;
                const a31 = a.m13;
                const a32 = a.m14;
                const a33 = a.m15;
                const b00 = a00 * a11 - a01 * a10;
                const b01 = a00 * a12 - a02 * a10;
                const b02 = a00 * a13 - a03 * a10;
                const b03 = a01 * a12 - a02 * a11;
                const b04 = a01 * a13 - a03 * a11;
                const b05 = a02 * a13 - a03 * a12;
                const b06 = a20 * a31 - a21 * a30;
                const b07 = a20 * a32 - a22 * a30;
                const b08 = a20 * a33 - a23 * a30;
                const b09 = a21 * a32 - a22 * a31;
                const b10 = a21 * a33 - a23 * a31;
                const b11 = a22 * a33 - a23 * a32;
                return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
              }
              static multiply(out, a, b) {
                const a00 = a.m00;
                const a01 = a.m01;
                const a02 = a.m02;
                const a03 = a.m03;
                const a10 = a.m04;
                const a11 = a.m05;
                const a12 = a.m06;
                const a13 = a.m07;
                const a20 = a.m08;
                const a21 = a.m09;
                const a22 = a.m10;
                const a23 = a.m11;
                const a30 = a.m12;
                const a31 = a.m13;
                const a32 = a.m14;
                const a33 = a.m15;
                let b0 = b.m00;
                let b1 = b.m01;
                let b2 = b.m02;
                let b3 = b.m03;
                out.m00 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
                out.m01 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
                out.m02 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
                out.m03 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
                b0 = b.m04;
                b1 = b.m05;
                b2 = b.m06;
                b3 = b.m07;
                out.m04 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
                out.m05 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
                out.m06 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
                out.m07 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
                b0 = b.m08;
                b1 = b.m09;
                b2 = b.m10;
                b3 = b.m11;
                out.m08 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
                out.m09 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
                out.m10 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
                out.m11 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
                b0 = b.m12;
                b1 = b.m13;
                b2 = b.m14;
                b3 = b.m15;
                out.m12 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
                out.m13 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
                out.m14 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
                out.m15 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
                return out;
              }
              static transform(out, a, v) {
                const x = v.x;
                const y = v.y;
                const z = v.z;
                if (a === out) {
                  out.m12 = a.m00 * x + a.m04 * y + a.m08 * z + a.m12;
                  out.m13 = a.m01 * x + a.m05 * y + a.m09 * z + a.m13;
                  out.m14 = a.m02 * x + a.m06 * y + a.m10 * z + a.m14;
                  out.m15 = a.m03 * x + a.m07 * y + a.m11 * z + a.m15;
                } else {
                  const a00 = a.m00;
                  const a01 = a.m01;
                  const a02 = a.m02;
                  const a03 = a.m03;
                  const a10 = a.m04;
                  const a11 = a.m05;
                  const a12 = a.m06;
                  const a13 = a.m07;
                  const a20 = a.m08;
                  const a21 = a.m09;
                  const a22 = a.m10;
                  const a23 = a.m11;
                  out.m00 = a00;
                  out.m01 = a01;
                  out.m02 = a02;
                  out.m03 = a03;
                  out.m04 = a10;
                  out.m05 = a11;
                  out.m06 = a12;
                  out.m07 = a13;
                  out.m08 = a20;
                  out.m09 = a21;
                  out.m10 = a22;
                  out.m11 = a23;
                  out.m12 = a00 * x + a10 * y + a20 * z + a.m12;
                  out.m13 = a01 * x + a11 * y + a21 * z + a.m13;
                  out.m14 = a02 * x + a12 * y + a22 * z + a.m14;
                  out.m15 = a03 * x + a13 * y + a23 * z + a.m15;
                }
                return out;
              }
              static translate(out, a, v) {
                if (a === out) {
                  out.m12 += v.x;
                  out.m13 += v.y;
                  out.m14 += v.z;
                } else {
                  out.m00 = a.m00;
                  out.m01 = a.m01;
                  out.m02 = a.m02;
                  out.m03 = a.m03;
                  out.m04 = a.m04;
                  out.m05 = a.m05;
                  out.m06 = a.m06;
                  out.m07 = a.m07;
                  out.m08 = a.m08;
                  out.m09 = a.m09;
                  out.m10 = a.m10;
                  out.m11 = a.m11;
                  out.m12 = a.m12 + v.x;
                  out.m13 = a.m13 + v.y;
                  out.m14 = a.m14 + v.z;
                  out.m15 = a.m15;
                }
                return out;
              }
              static scale(out, a, v) {
                const x = v.x;
                const y = v.y;
                const z = v.z;
                out.m00 = a.m00 * x;
                out.m01 = a.m01 * x;
                out.m02 = a.m02 * x;
                out.m03 = a.m03 * x;
                out.m04 = a.m04 * y;
                out.m05 = a.m05 * y;
                out.m06 = a.m06 * y;
                out.m07 = a.m07 * y;
                out.m08 = a.m08 * z;
                out.m09 = a.m09 * z;
                out.m10 = a.m10 * z;
                out.m11 = a.m11 * z;
                out.m12 = a.m12;
                out.m13 = a.m13;
                out.m14 = a.m14;
                out.m15 = a.m15;
                return out;
              }
              static rotate(out, a, rad, axis) {
                let x = axis.x;
                let y = axis.y;
                let z = axis.z;
                let len = Math.sqrt(x * x + y * y + z * z);
                if (Math.abs(len) < EPSILON) {
                  return null;
                }
                len = 1 / len;
                x *= len;
                y *= len;
                z *= len;
                const s = Math.sin(rad);
                const c = Math.cos(rad);
                const t = 1 - c;
                const a00 = a.m00;
                const a01 = a.m01;
                const a02 = a.m02;
                const a03 = a.m03;
                const a10 = a.m04;
                const a11 = a.m05;
                const a12 = a.m06;
                const a13 = a.m07;
                const a20 = a.m08;
                const a21 = a.m09;
                const a22 = a.m10;
                const a23 = a.m11;
                const b00 = x * x * t + c;
                const b01 = y * x * t + z * s;
                const b02 = z * x * t - y * s;
                const b10 = x * y * t - z * s;
                const b11 = y * y * t + c;
                const b12 = z * y * t + x * s;
                const b20 = x * z * t + y * s;
                const b21 = y * z * t - x * s;
                const b22 = z * z * t + c;
                out.m00 = a00 * b00 + a10 * b01 + a20 * b02;
                out.m01 = a01 * b00 + a11 * b01 + a21 * b02;
                out.m02 = a02 * b00 + a12 * b01 + a22 * b02;
                out.m03 = a03 * b00 + a13 * b01 + a23 * b02;
                out.m04 = a00 * b10 + a10 * b11 + a20 * b12;
                out.m05 = a01 * b10 + a11 * b11 + a21 * b12;
                out.m06 = a02 * b10 + a12 * b11 + a22 * b12;
                out.m07 = a03 * b10 + a13 * b11 + a23 * b12;
                out.m08 = a00 * b20 + a10 * b21 + a20 * b22;
                out.m09 = a01 * b20 + a11 * b21 + a21 * b22;
                out.m10 = a02 * b20 + a12 * b21 + a22 * b22;
                out.m11 = a03 * b20 + a13 * b21 + a23 * b22;
                if (a !== out) {
                  out.m12 = a.m12;
                  out.m13 = a.m13;
                  out.m14 = a.m14;
                  out.m15 = a.m15;
                }
                return out;
              }
              static rotateX(out, a, rad) {
                const s = Math.sin(rad);
                const c = Math.cos(rad);
                const a10 = a.m04;
                const a11 = a.m05;
                const a12 = a.m06;
                const a13 = a.m07;
                const a20 = a.m08;
                const a21 = a.m09;
                const a22 = a.m10;
                const a23 = a.m11;
                if (a !== out) {
                  out.m00 = a.m00;
                  out.m01 = a.m01;
                  out.m02 = a.m02;
                  out.m03 = a.m03;
                  out.m12 = a.m12;
                  out.m13 = a.m13;
                  out.m14 = a.m14;
                  out.m15 = a.m15;
                }
                out.m04 = a10 * c + a20 * s;
                out.m05 = a11 * c + a21 * s;
                out.m06 = a12 * c + a22 * s;
                out.m07 = a13 * c + a23 * s;
                out.m08 = a20 * c - a10 * s;
                out.m09 = a21 * c - a11 * s;
                out.m10 = a22 * c - a12 * s;
                out.m11 = a23 * c - a13 * s;
                return out;
              }
              static rotateY(out, a, rad) {
                const s = Math.sin(rad);
                const c = Math.cos(rad);
                const a00 = a.m00;
                const a01 = a.m01;
                const a02 = a.m02;
                const a03 = a.m03;
                const a20 = a.m08;
                const a21 = a.m09;
                const a22 = a.m10;
                const a23 = a.m11;
                if (a !== out) {
                  out.m04 = a.m04;
                  out.m05 = a.m05;
                  out.m06 = a.m06;
                  out.m07 = a.m07;
                  out.m12 = a.m12;
                  out.m13 = a.m13;
                  out.m14 = a.m14;
                  out.m15 = a.m15;
                }
                out.m00 = a00 * c - a20 * s;
                out.m01 = a01 * c - a21 * s;
                out.m02 = a02 * c - a22 * s;
                out.m03 = a03 * c - a23 * s;
                out.m08 = a00 * s + a20 * c;
                out.m09 = a01 * s + a21 * c;
                out.m10 = a02 * s + a22 * c;
                out.m11 = a03 * s + a23 * c;
                return out;
              }
              static rotateZ(out, a, rad) {
                const s = Math.sin(rad);
                const c = Math.cos(rad);
                const a00 = a.m00;
                const a01 = a.m01;
                const a02 = a.m02;
                const a03 = a.m03;
                const a10 = a.m04;
                const a11 = a.m05;
                const a12 = a.m06;
                const a13 = a.m07;
                if (a !== out) {
                  out.m08 = a.m08;
                  out.m09 = a.m09;
                  out.m10 = a.m10;
                  out.m11 = a.m11;
                  out.m12 = a.m12;
                  out.m13 = a.m13;
                  out.m14 = a.m14;
                  out.m15 = a.m15;
                }
                out.m00 = a00 * c + a10 * s;
                out.m01 = a01 * c + a11 * s;
                out.m02 = a02 * c + a12 * s;
                out.m03 = a03 * c + a13 * s;
                out.m04 = a10 * c - a00 * s;
                out.m05 = a11 * c - a01 * s;
                out.m06 = a12 * c - a02 * s;
                out.m07 = a13 * c - a03 * s;
                return out;
              }
              static fromTranslation(out, v) {
                out.m00 = 1;
                out.m01 = 0;
                out.m02 = 0;
                out.m03 = 0;
                out.m04 = 0;
                out.m05 = 1;
                out.m06 = 0;
                out.m07 = 0;
                out.m08 = 0;
                out.m09 = 0;
                out.m10 = 1;
                out.m11 = 0;
                out.m12 = v.x;
                out.m13 = v.y;
                out.m14 = v.z;
                out.m15 = 1;
                return out;
              }
              static fromScaling(out, v) {
                out.m00 = v.x;
                out.m01 = 0;
                out.m02 = 0;
                out.m03 = 0;
                out.m04 = 0;
                out.m05 = v.y;
                out.m06 = 0;
                out.m07 = 0;
                out.m08 = 0;
                out.m09 = 0;
                out.m10 = v.z;
                out.m11 = 0;
                out.m12 = 0;
                out.m13 = 0;
                out.m14 = 0;
                out.m15 = 1;
                return out;
              }
              static fromRotation(out, rad, axis) {
                let x = axis.x;
                let y = axis.y;
                let z = axis.z;
                let len = Math.sqrt(x * x + y * y + z * z);
                if (Math.abs(len) < EPSILON) {
                  return null;
                }
                len = 1 / len;
                x *= len;
                y *= len;
                z *= len;
                const s = Math.sin(rad);
                const c = Math.cos(rad);
                const t = 1 - c;
                out.m00 = x * x * t + c;
                out.m01 = y * x * t + z * s;
                out.m02 = z * x * t - y * s;
                out.m03 = 0;
                out.m04 = x * y * t - z * s;
                out.m05 = y * y * t + c;
                out.m06 = z * y * t + x * s;
                out.m07 = 0;
                out.m08 = x * z * t + y * s;
                out.m09 = y * z * t - x * s;
                out.m10 = z * z * t + c;
                out.m11 = 0;
                out.m12 = 0;
                out.m13 = 0;
                out.m14 = 0;
                out.m15 = 1;
                return out;
              }
              static fromXRotation(out, rad) {
                const s = Math.sin(rad);
                const c = Math.cos(rad);
                out.m00 = 1;
                out.m01 = 0;
                out.m02 = 0;
                out.m03 = 0;
                out.m04 = 0;
                out.m05 = c;
                out.m06 = s;
                out.m07 = 0;
                out.m08 = 0;
                out.m09 = -s;
                out.m10 = c;
                out.m11 = 0;
                out.m12 = 0;
                out.m13 = 0;
                out.m14 = 0;
                out.m15 = 1;
                return out;
              }
              static fromYRotation(out, rad) {
                const s = Math.sin(rad);
                const c = Math.cos(rad);
                out.m00 = c;
                out.m01 = 0;
                out.m02 = -s;
                out.m03 = 0;
                out.m04 = 0;
                out.m05 = 1;
                out.m06 = 0;
                out.m07 = 0;
                out.m08 = s;
                out.m09 = 0;
                out.m10 = c;
                out.m11 = 0;
                out.m12 = 0;
                out.m13 = 0;
                out.m14 = 0;
                out.m15 = 1;
                return out;
              }
              static fromZRotation(out, rad) {
                const s = Math.sin(rad);
                const c = Math.cos(rad);
                out.m00 = c;
                out.m01 = s;
                out.m02 = 0;
                out.m03 = 0;
                out.m04 = -s;
                out.m05 = c;
                out.m06 = 0;
                out.m07 = 0;
                out.m08 = 0;
                out.m09 = 0;
                out.m10 = 1;
                out.m11 = 0;
                out.m12 = 0;
                out.m13 = 0;
                out.m14 = 0;
                out.m15 = 1;
                return out;
              }
              static fromRT(out, q, v) {
                const x = q.x;
                const y = q.y;
                const z = q.z;
                const w = q.w;
                const x2 = x + x;
                const y2 = y + y;
                const z2 = z + z;
                const xx = x * x2;
                const xy = x * y2;
                const xz = x * z2;
                const yy = y * y2;
                const yz = y * z2;
                const zz = z * z2;
                const wx = w * x2;
                const wy = w * y2;
                const wz = w * z2;
                out.m00 = 1 - (yy + zz);
                out.m01 = xy + wz;
                out.m02 = xz - wy;
                out.m03 = 0;
                out.m04 = xy - wz;
                out.m05 = 1 - (xx + zz);
                out.m06 = yz + wx;
                out.m07 = 0;
                out.m08 = xz + wy;
                out.m09 = yz - wx;
                out.m10 = 1 - (xx + yy);
                out.m11 = 0;
                out.m12 = v.x;
                out.m13 = v.y;
                out.m14 = v.z;
                out.m15 = 1;
                return out;
              }
              static getTranslation(out, mat) {
                out.x = mat.m12;
                out.y = mat.m13;
                out.z = mat.m14;
                return out;
              }
              static getScaling(out, mat) {
                const m00 = m3_1.m00 = mat.m00;
                const m01 = m3_1.m01 = mat.m01;
                const m02 = m3_1.m02 = mat.m02;
                const m04 = m3_1.m03 = mat.m04;
                const m05 = m3_1.m04 = mat.m05;
                const m06 = m3_1.m05 = mat.m06;
                const m08 = m3_1.m06 = mat.m08;
                const m09 = m3_1.m07 = mat.m09;
                const m10 = m3_1.m08 = mat.m10;
                out.x = Math.sqrt(m00 * m00 + m01 * m01 + m02 * m02);
                out.y = Math.sqrt(m04 * m04 + m05 * m05 + m06 * m06);
                out.z = Math.sqrt(m08 * m08 + m09 * m09 + m10 * m10);
                if (Mat3.determinant(m3_1) < 0) {
                  out.x *= -1;
                }
                return out;
              }
              static getRotation(out, mat) {
                const trace = mat.m00 + mat.m05 + mat.m10;
                let S = 0;
                if (trace > 0) {
                  S = Math.sqrt(trace + 1.0) * 2;
                  out.w = 0.25 * S;
                  out.x = (mat.m06 - mat.m09) / S;
                  out.y = (mat.m08 - mat.m02) / S;
                  out.z = (mat.m01 - mat.m04) / S;
                } else if (mat.m00 > mat.m05 && mat.m00 > mat.m10) {
                  S = Math.sqrt(1.0 + mat.m00 - mat.m05 - mat.m10) * 2;
                  out.w = (mat.m06 - mat.m09) / S;
                  out.x = 0.25 * S;
                  out.y = (mat.m01 + mat.m04) / S;
                  out.z = (mat.m08 + mat.m02) / S;
                } else if (mat.m05 > mat.m10) {
                  S = Math.sqrt(1.0 + mat.m05 - mat.m00 - mat.m10) * 2;
                  out.w = (mat.m08 - mat.m02) / S;
                  out.x = (mat.m01 + mat.m04) / S;
                  out.y = 0.25 * S;
                  out.z = (mat.m06 + mat.m09) / S;
                } else {
                  S = Math.sqrt(1.0 + mat.m10 - mat.m00 - mat.m05) * 2;
                  out.w = (mat.m01 - mat.m04) / S;
                  out.x = (mat.m08 + mat.m02) / S;
                  out.y = (mat.m06 + mat.m09) / S;
                  out.z = 0.25 * S;
                }
                return out;
              }
              static toRTS(m, q, v, s) {
                const sx = Vec3.set(v3_1, m.m00, m.m01, m.m02).length();
                const sy = Vec3.set(v3_1, m.m04, m.m05, m.m06).length();
                const sz = Vec3.set(v3_1, m.m08, m.m09, m.m10).length();
                m3_1.m00 = m.m00 / sx;
                m3_1.m01 = m.m01 / sx;
                m3_1.m02 = m.m02 / sx;
                m3_1.m03 = m.m04 / sy;
                m3_1.m04 = m.m05 / sy;
                m3_1.m05 = m.m06 / sy;
                m3_1.m06 = m.m08 / sz;
                m3_1.m07 = m.m09 / sz;
                m3_1.m08 = m.m10 / sz;
                const det = Mat3.determinant(m3_1);
                if (s) {
                  Vec3.set(s, sx, sy, sz);
                  if (det < 0) {
                    s.x *= -1;
                  }
                }
                if (v) {
                  Vec3.set(v, m.m12, m.m13, m.m14);
                }
                if (q) {
                  if (det < 0) {
                    m3_1.m00 *= -1;
                    m3_1.m01 *= -1;
                    m3_1.m02 *= -1;
                  }
                  Quat.fromMat3(q, m3_1);
                }
              }
              static toSRT(m, q, v, s) {
                const sx = Vec3.set(v3_1, m.m00, m.m01, m.m02).length();
                const sy = Vec3.set(v3_1, m.m04, m.m05, m.m06).length();
                const sz = Vec3.set(v3_1, m.m08, m.m09, m.m10).length();
                if (s) {
                  s.x = sx;
                  s.y = sy;
                  s.z = sz;
                }
                if (v) {
                  Vec3.set(v, m.m12, m.m13, m.m14);
                }
                if (q) {
                  m3_1.m00 = m.m00 / sx;
                  m3_1.m01 = m.m01 / sx;
                  m3_1.m02 = m.m02 / sx;
                  m3_1.m03 = m.m04 / sy;
                  m3_1.m04 = m.m05 / sy;
                  m3_1.m05 = m.m06 / sy;
                  m3_1.m06 = m.m08 / sz;
                  m3_1.m07 = m.m09 / sz;
                  m3_1.m08 = m.m10 / sz;
                  const det = Mat3.determinant(m3_1);
                  if (det < 0) {
                    if (s) s.x *= -1;
                    m3_1.m00 *= -1;
                    m3_1.m01 *= -1;
                    m3_1.m02 *= -1;
                  }
                  Quat.fromMat3(q, m3_1);
                }
              }
              static toEuler(m, v) {
                Mat3.set(m3_1, m.m00, m.m01, m.m02, m.m04, m.m05, m.m06, m.m08, m.m09, m.m10);
                return Mat3.toEuler(m3_1, v);
              }
              static fromRTS(out, q, v, s) {
                const x = q.x;
                const y = q.y;
                const z = q.z;
                const w = q.w;
                const x2 = x + x;
                const y2 = y + y;
                const z2 = z + z;
                const xx = x * x2;
                const xy = x * y2;
                const xz = x * z2;
                const yy = y * y2;
                const yz = y * z2;
                const zz = z * z2;
                const wx = w * x2;
                const wy = w * y2;
                const wz = w * z2;
                const sx = s.x;
                const sy = s.y;
                const sz = s.z;
                out.m00 = (1 - (yy + zz)) * sx;
                out.m01 = (xy + wz) * sx;
                out.m02 = (xz - wy) * sx;
                out.m03 = 0;
                out.m04 = (xy - wz) * sy;
                out.m05 = (1 - (xx + zz)) * sy;
                out.m06 = (yz + wx) * sy;
                out.m07 = 0;
                out.m08 = (xz + wy) * sz;
                out.m09 = (yz - wx) * sz;
                out.m10 = (1 - (xx + yy)) * sz;
                out.m11 = 0;
                out.m12 = v.x;
                out.m13 = v.y;
                out.m14 = v.z;
                out.m15 = 1;
                return out;
              }
              static fromSRT(out, q, v, s) {
                const x = q.x;
                const y = q.y;
                const z = q.z;
                const w = q.w;
                const x2 = x + x;
                const y2 = y + y;
                const z2 = z + z;
                const xx = x * x2;
                const xy = x * y2;
                const xz = x * z2;
                const yy = y * y2;
                const yz = y * z2;
                const zz = z * z2;
                const wx = w * x2;
                const wy = w * y2;
                const wz = w * z2;
                const sx = s.x;
                const sy = s.y;
                const sz = s.z;
                out.m00 = (1 - (yy + zz)) * sx;
                out.m01 = (xy + wz) * sx;
                out.m02 = (xz - wy) * sx;
                out.m03 = 0;
                out.m04 = (xy - wz) * sy;
                out.m05 = (1 - (xx + zz)) * sy;
                out.m06 = (yz + wx) * sy;
                out.m07 = 0;
                out.m08 = (xz + wy) * sz;
                out.m09 = (yz - wx) * sz;
                out.m10 = (1 - (xx + yy)) * sz;
                out.m11 = 0;
                out.m12 = v.x;
                out.m13 = v.y;
                out.m14 = v.z;
                out.m15 = 1;
                return out;
              }
              static fromRTSOrigin(out, q, v, s, o) {
                const x = q.x;
                const y = q.y;
                const z = q.z;
                const w = q.w;
                const x2 = x + x;
                const y2 = y + y;
                const z2 = z + z;
                const xx = x * x2;
                const xy = x * y2;
                const xz = x * z2;
                const yy = y * y2;
                const yz = y * z2;
                const zz = z * z2;
                const wx = w * x2;
                const wy = w * y2;
                const wz = w * z2;
                const sx = s.x;
                const sy = s.y;
                const sz = s.z;
                const ox = o.x;
                const oy = o.y;
                const oz = o.z;
                out.m00 = (1 - (yy + zz)) * sx;
                out.m01 = (xy + wz) * sx;
                out.m02 = (xz - wy) * sx;
                out.m03 = 0;
                out.m04 = (xy - wz) * sy;
                out.m05 = (1 - (xx + zz)) * sy;
                out.m06 = (yz + wx) * sy;
                out.m07 = 0;
                out.m08 = (xz + wy) * sz;
                out.m09 = (yz - wx) * sz;
                out.m10 = (1 - (xx + yy)) * sz;
                out.m11 = 0;
                out.m12 = v.x + ox - (out.m00 * ox + out.m04 * oy + out.m08 * oz);
                out.m13 = v.y + oy - (out.m01 * ox + out.m05 * oy + out.m09 * oz);
                out.m14 = v.z + oz - (out.m02 * ox + out.m06 * oy + out.m10 * oz);
                out.m15 = 1;
                return out;
              }
              static fromSRTOrigin(out, q, v, s, o) {
                const x = q.x;
                const y = q.y;
                const z = q.z;
                const w = q.w;
                const x2 = x + x;
                const y2 = y + y;
                const z2 = z + z;
                const xx = x * x2;
                const xy = x * y2;
                const xz = x * z2;
                const yy = y * y2;
                const yz = y * z2;
                const zz = z * z2;
                const wx = w * x2;
                const wy = w * y2;
                const wz = w * z2;
                const sx = s.x;
                const sy = s.y;
                const sz = s.z;
                const ox = o.x;
                const oy = o.y;
                const oz = o.z;
                out.m00 = (1 - (yy + zz)) * sx;
                out.m01 = (xy + wz) * sx;
                out.m02 = (xz - wy) * sx;
                out.m03 = 0;
                out.m04 = (xy - wz) * sy;
                out.m05 = (1 - (xx + zz)) * sy;
                out.m06 = (yz + wx) * sy;
                out.m07 = 0;
                out.m08 = (xz + wy) * sz;
                out.m09 = (yz - wx) * sz;
                out.m10 = (1 - (xx + yy)) * sz;
                out.m11 = 0;
                out.m12 = v.x + ox - (out.m00 * ox + out.m04 * oy + out.m08 * oz);
                out.m13 = v.y + oy - (out.m01 * ox + out.m05 * oy + out.m09 * oz);
                out.m14 = v.z + oz - (out.m02 * ox + out.m06 * oy + out.m10 * oz);
                out.m15 = 1;
                return out;
              }
              static fromQuat(out, q) {
                const x = q.x;
                const y = q.y;
                const z = q.z;
                const w = q.w;
                const x2 = x + x;
                const y2 = y + y;
                const z2 = z + z;
                const xx = x * x2;
                const yx = y * x2;
                const yy = y * y2;
                const zx = z * x2;
                const zy = z * y2;
                const zz = z * z2;
                const wx = w * x2;
                const wy = w * y2;
                const wz = w * z2;
                out.m00 = 1 - yy - zz;
                out.m01 = yx + wz;
                out.m02 = zx - wy;
                out.m03 = 0;
                out.m04 = yx - wz;
                out.m05 = 1 - xx - zz;
                out.m06 = zy + wx;
                out.m07 = 0;
                out.m08 = zx + wy;
                out.m09 = zy - wx;
                out.m10 = 1 - xx - yy;
                out.m11 = 0;
                out.m12 = 0;
                out.m13 = 0;
                out.m14 = 0;
                out.m15 = 1;
                return out;
              }
              static frustum(out, left, right, bottom, top, near, far) {
                const rl = 1 / (right - left);
                const tb = 1 / (top - bottom);
                const nf = 1 / (near - far);
                out.m00 = near * 2 * rl;
                out.m01 = 0;
                out.m02 = 0;
                out.m03 = 0;
                out.m04 = 0;
                out.m05 = near * 2 * tb;
                out.m06 = 0;
                out.m07 = 0;
                out.m08 = (right + left) * rl;
                out.m09 = (top + bottom) * tb;
                out.m10 = (far + near) * nf;
                out.m11 = -1;
                out.m12 = 0;
                out.m13 = 0;
                out.m14 = far * near * 2 * nf;
                out.m15 = 0;
                return out;
              }
              static perspective(out, fov, aspect, near, far, isFOVY = true, minClipZ = -1, projectionSignY = 1, orientation = 0) {
                const f = 1.0 / Math.tan(fov / 2);
                const nf = 1 / (near - far);
                const x = isFOVY ? f / aspect : f;
                const y = (isFOVY ? f : f * aspect) * projectionSignY;
                const preTransform = preTransforms[orientation];
                out.m00 = x * preTransform[0];
                out.m01 = x * preTransform[1];
                out.m02 = 0;
                out.m03 = 0;
                out.m04 = y * preTransform[2];
                out.m05 = y * preTransform[3];
                out.m06 = 0;
                out.m07 = 0;
                out.m08 = 0;
                out.m09 = 0;
                out.m10 = (far - minClipZ * near) * nf;
                out.m11 = -1;
                out.m12 = 0;
                out.m13 = 0;
                out.m14 = far * near * nf * (1 - minClipZ);
                out.m15 = 0;
                return out;
              }
              static ortho(out, left, right, bottom, top, near, far, minClipZ = -1, projectionSignY = 1, orientation = 0) {
                const lr = 1 / (left - right);
                const bt = 1 / (bottom - top) * projectionSignY;
                const nf = 1 / (near - far);
                const x = -2 * lr;
                const y = -2 * bt;
                const dx = (left + right) * lr;
                const dy = (top + bottom) * bt;
                const preTransform = preTransforms[orientation];
                out.m00 = x * preTransform[0];
                out.m01 = x * preTransform[1];
                out.m02 = 0;
                out.m03 = 0;
                out.m04 = y * preTransform[2];
                out.m05 = y * preTransform[3];
                out.m06 = 0;
                out.m07 = 0;
                out.m08 = 0;
                out.m09 = 0;
                out.m10 = nf * (1 - minClipZ);
                out.m11 = 0;
                out.m12 = dx * preTransform[0] + dy * preTransform[2];
                out.m13 = dx * preTransform[1] + dy * preTransform[3];
                out.m14 = (near - minClipZ * far) * nf;
                out.m15 = 1;
                return out;
              }
              static lookAt(out, eye, center, up) {
                const eyex = eye.x;
                const eyey = eye.y;
                const eyez = eye.z;
                const upx = up.x;
                const upy = up.y;
                const upz = up.z;
                const centerx = center.x;
                const centery = center.y;
                const centerz = center.z;
                let z0 = eyex - centerx;
                let z1 = eyey - centery;
                let z2 = eyez - centerz;
                let len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
                z0 *= len;
                z1 *= len;
                z2 *= len;
                let x0 = upy * z2 - upz * z1;
                let x1 = upz * z0 - upx * z2;
                let x2 = upx * z1 - upy * z0;
                len = 1 / Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
                x0 *= len;
                x1 *= len;
                x2 *= len;
                const y0 = z1 * x2 - z2 * x1;
                const y1 = z2 * x0 - z0 * x2;
                const y2 = z0 * x1 - z1 * x0;
                out.m00 = x0;
                out.m01 = y0;
                out.m02 = z0;
                out.m03 = 0;
                out.m04 = x1;
                out.m05 = y1;
                out.m06 = z1;
                out.m07 = 0;
                out.m08 = x2;
                out.m09 = y2;
                out.m10 = z2;
                out.m11 = 0;
                out.m12 = -(x0 * eyex + x1 * eyey + x2 * eyez);
                out.m13 = -(y0 * eyex + y1 * eyey + y2 * eyez);
                out.m14 = -(z0 * eyex + z1 * eyey + z2 * eyez);
                out.m15 = 1;
                return out;
              }
              static inverseTranspose(out, a) {
                const a00 = a.m00;
                const a01 = a.m01;
                const a02 = a.m02;
                const a03 = a.m03;
                const a10 = a.m04;
                const a11 = a.m05;
                const a12 = a.m06;
                const a13 = a.m07;
                const a20 = a.m08;
                const a21 = a.m09;
                const a22 = a.m10;
                const a23 = a.m11;
                const a30 = a.m12;
                const a31 = a.m13;
                const a32 = a.m14;
                const a33 = a.m15;
                const b00 = a00 * a11 - a01 * a10;
                const b01 = a00 * a12 - a02 * a10;
                const b02 = a00 * a13 - a03 * a10;
                const b03 = a01 * a12 - a02 * a11;
                const b04 = a01 * a13 - a03 * a11;
                const b05 = a02 * a13 - a03 * a12;
                const b06 = a20 * a31 - a21 * a30;
                const b07 = a20 * a32 - a22 * a30;
                const b08 = a20 * a33 - a23 * a30;
                const b09 = a21 * a32 - a22 * a31;
                const b10 = a21 * a33 - a23 * a31;
                const b11 = a22 * a33 - a23 * a32;
                let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
                if (!det) {
                  return null;
                }
                det = 1.0 / det;
                out.m00 = (a11 * b11 - a12 * b10 + a13 * b09) * det;
                out.m01 = (a12 * b08 - a10 * b11 - a13 * b07) * det;
                out.m02 = (a10 * b10 - a11 * b08 + a13 * b06) * det;
                out.m03 = 0;
                out.m04 = (a02 * b10 - a01 * b11 - a03 * b09) * det;
                out.m05 = (a00 * b11 - a02 * b08 + a03 * b07) * det;
                out.m06 = (a01 * b08 - a00 * b10 - a03 * b06) * det;
                out.m07 = 0;
                out.m08 = (a31 * b05 - a32 * b04 + a33 * b03) * det;
                out.m09 = (a32 * b02 - a30 * b05 - a33 * b01) * det;
                out.m10 = (a30 * b04 - a31 * b02 + a33 * b00) * det;
                out.m11 = 0;
                out.m12 = 0;
                out.m13 = 0;
                out.m14 = 0;
                out.m15 = 1;
                return out;
              }
              static toArray(out, m, ofs = 0) {
                out[ofs + 0] = m.m00;
                out[ofs + 1] = m.m01;
                out[ofs + 2] = m.m02;
                out[ofs + 3] = m.m03;
                out[ofs + 4] = m.m04;
                out[ofs + 5] = m.m05;
                out[ofs + 6] = m.m06;
                out[ofs + 7] = m.m07;
                out[ofs + 8] = m.m08;
                out[ofs + 9] = m.m09;
                out[ofs + 10] = m.m10;
                out[ofs + 11] = m.m11;
                out[ofs + 12] = m.m12;
                out[ofs + 13] = m.m13;
                out[ofs + 14] = m.m14;
                out[ofs + 15] = m.m15;
                return out;
              }
              static fromArray(out, arr, ofs = 0) {
                out.m00 = arr[ofs + 0];
                out.m01 = arr[ofs + 1];
                out.m02 = arr[ofs + 2];
                out.m03 = arr[ofs + 3];
                out.m04 = arr[ofs + 4];
                out.m05 = arr[ofs + 5];
                out.m06 = arr[ofs + 6];
                out.m07 = arr[ofs + 7];
                out.m08 = arr[ofs + 8];
                out.m09 = arr[ofs + 9];
                out.m10 = arr[ofs + 10];
                out.m11 = arr[ofs + 11];
                out.m12 = arr[ofs + 12];
                out.m13 = arr[ofs + 13];
                out.m14 = arr[ofs + 14];
                out.m15 = arr[ofs + 15];
                return out;
              }
              static add(out, a, b) {
                out.m00 = a.m00 + b.m00;
                out.m01 = a.m01 + b.m01;
                out.m02 = a.m02 + b.m02;
                out.m03 = a.m03 + b.m03;
                out.m04 = a.m04 + b.m04;
                out.m05 = a.m05 + b.m05;
                out.m06 = a.m06 + b.m06;
                out.m07 = a.m07 + b.m07;
                out.m08 = a.m08 + b.m08;
                out.m09 = a.m09 + b.m09;
                out.m10 = a.m10 + b.m10;
                out.m11 = a.m11 + b.m11;
                out.m12 = a.m12 + b.m12;
                out.m13 = a.m13 + b.m13;
                out.m14 = a.m14 + b.m14;
                out.m15 = a.m15 + b.m15;
                return out;
              }
              static subtract(out, a, b) {
                out.m00 = a.m00 - b.m00;
                out.m01 = a.m01 - b.m01;
                out.m02 = a.m02 - b.m02;
                out.m03 = a.m03 - b.m03;
                out.m04 = a.m04 - b.m04;
                out.m05 = a.m05 - b.m05;
                out.m06 = a.m06 - b.m06;
                out.m07 = a.m07 - b.m07;
                out.m08 = a.m08 - b.m08;
                out.m09 = a.m09 - b.m09;
                out.m10 = a.m10 - b.m10;
                out.m11 = a.m11 - b.m11;
                out.m12 = a.m12 - b.m12;
                out.m13 = a.m13 - b.m13;
                out.m14 = a.m14 - b.m14;
                out.m15 = a.m15 - b.m15;
                return out;
              }
              static multiplyScalar(out, a, b) {
                out.m00 = a.m00 * b;
                out.m01 = a.m01 * b;
                out.m02 = a.m02 * b;
                out.m03 = a.m03 * b;
                out.m04 = a.m04 * b;
                out.m05 = a.m05 * b;
                out.m06 = a.m06 * b;
                out.m07 = a.m07 * b;
                out.m08 = a.m08 * b;
                out.m09 = a.m09 * b;
                out.m10 = a.m10 * b;
                out.m11 = a.m11 * b;
                out.m12 = a.m12 * b;
                out.m13 = a.m13 * b;
                out.m14 = a.m14 * b;
                out.m15 = a.m15 * b;
                return out;
              }
              static multiplyScalarAndAdd(out, a, b, scale) {
                out.m00 = a.m00 + b.m00 * scale;
                out.m01 = a.m01 + b.m01 * scale;
                out.m02 = a.m02 + b.m02 * scale;
                out.m03 = a.m03 + b.m03 * scale;
                out.m04 = a.m04 + b.m04 * scale;
                out.m05 = a.m05 + b.m05 * scale;
                out.m06 = a.m06 + b.m06 * scale;
                out.m07 = a.m07 + b.m07 * scale;
                out.m08 = a.m08 + b.m08 * scale;
                out.m09 = a.m09 + b.m09 * scale;
                out.m10 = a.m10 + b.m10 * scale;
                out.m11 = a.m11 + b.m11 * scale;
                out.m12 = a.m12 + b.m12 * scale;
                out.m13 = a.m13 + b.m13 * scale;
                out.m14 = a.m14 + b.m14 * scale;
                out.m15 = a.m15 + b.m15 * scale;
                return out;
              }
              static strictEquals(a, b) {
                return a.m00 === b.m00 && a.m01 === b.m01 && a.m02 === b.m02 && a.m03 === b.m03 && a.m04 === b.m04 && a.m05 === b.m05 && a.m06 === b.m06 && a.m07 === b.m07 && a.m08 === b.m08 && a.m09 === b.m09 && a.m10 === b.m10 && a.m11 === b.m11 && a.m12 === b.m12 && a.m13 === b.m13 && a.m14 === b.m14 && a.m15 === b.m15;
              }
              static equals(a, b, epsilon = EPSILON) {
                return Math.abs(a.m00 - b.m00) <= epsilon * Math.max(1.0, Math.abs(a.m00), Math.abs(b.m00)) && Math.abs(a.m01 - b.m01) <= epsilon * Math.max(1.0, Math.abs(a.m01), Math.abs(b.m01)) && Math.abs(a.m02 - b.m02) <= epsilon * Math.max(1.0, Math.abs(a.m02), Math.abs(b.m02)) && Math.abs(a.m03 - b.m03) <= epsilon * Math.max(1.0, Math.abs(a.m03), Math.abs(b.m03)) && Math.abs(a.m04 - b.m04) <= epsilon * Math.max(1.0, Math.abs(a.m04), Math.abs(b.m04)) && Math.abs(a.m05 - b.m05) <= epsilon * Math.max(1.0, Math.abs(a.m05), Math.abs(b.m05)) && Math.abs(a.m06 - b.m06) <= epsilon * Math.max(1.0, Math.abs(a.m06), Math.abs(b.m06)) && Math.abs(a.m07 - b.m07) <= epsilon * Math.max(1.0, Math.abs(a.m07), Math.abs(b.m07)) && Math.abs(a.m08 - b.m08) <= epsilon * Math.max(1.0, Math.abs(a.m08), Math.abs(b.m08)) && Math.abs(a.m09 - b.m09) <= epsilon * Math.max(1.0, Math.abs(a.m09), Math.abs(b.m09)) && Math.abs(a.m10 - b.m10) <= epsilon * Math.max(1.0, Math.abs(a.m10), Math.abs(b.m10)) && Math.abs(a.m11 - b.m11) <= epsilon * Math.max(1.0, Math.abs(a.m11), Math.abs(b.m11)) && Math.abs(a.m12 - b.m12) <= epsilon * Math.max(1.0, Math.abs(a.m12), Math.abs(b.m12)) && Math.abs(a.m13 - b.m13) <= epsilon * Math.max(1.0, Math.abs(a.m13), Math.abs(b.m13)) && Math.abs(a.m14 - b.m14) <= epsilon * Math.max(1.0, Math.abs(a.m14), Math.abs(b.m14)) && Math.abs(a.m15 - b.m15) <= epsilon * Math.max(1.0, Math.abs(a.m15), Math.abs(b.m15));
              }
              constructor(m00 = 1, m01 = 0, m02 = 0, m03 = 0, m04 = 0, m05 = 1, m06 = 0, m07 = 0, m08 = 0, m09 = 0, m10 = 1, m11 = 0, m12 = 0, m13 = 0, m14 = 0, m15 = 1) {
                super();
                if (typeof m00 === 'object') {
                  this.m00 = m00.m00;
                  this.m01 = m00.m01;
                  this.m02 = m00.m02;
                  this.m03 = m00.m03;
                  this.m04 = m00.m04;
                  this.m05 = m00.m05;
                  this.m06 = m00.m06;
                  this.m07 = m00.m07;
                  this.m08 = m00.m08;
                  this.m09 = m00.m09;
                  this.m10 = m00.m10;
                  this.m11 = m00.m11;
                  this.m12 = m00.m12;
                  this.m13 = m00.m13;
                  this.m14 = m00.m14;
                  this.m15 = m00.m15;
                } else {
                  this.m00 = m00;
                  this.m01 = m01;
                  this.m02 = m02;
                  this.m03 = m03;
                  this.m04 = m04;
                  this.m05 = m05;
                  this.m06 = m06;
                  this.m07 = m07;
                  this.m08 = m08;
                  this.m09 = m09;
                  this.m10 = m10;
                  this.m11 = m11;
                  this.m12 = m12;
                  this.m13 = m13;
                  this.m14 = m14;
                  this.m15 = m15;
                }
              }
              clone() {
                return new Mat4(this.m00, this.m01, this.m02, this.m03, this.m04, this.m05, this.m06, this.m07, this.m08, this.m09, this.m10, this.m11, this.m12, this.m13, this.m14, this.m15);
              }
              set(m00 = 1, m01 = 0, m02 = 0, m03 = 0, m04 = 0, m05 = 1, m06 = 0, m07 = 0, m08 = 0, m09 = 0, m10 = 1, m11 = 0, m12 = 0, m13 = 0, m14 = 0, m15 = 1) {
                if (typeof m00 === 'object') {
                  this.m01 = m00.m01;
                  this.m02 = m00.m02;
                  this.m03 = m00.m03;
                  this.m04 = m00.m04;
                  this.m05 = m00.m05;
                  this.m06 = m00.m06;
                  this.m07 = m00.m07;
                  this.m08 = m00.m08;
                  this.m09 = m00.m09;
                  this.m10 = m00.m10;
                  this.m11 = m00.m11;
                  this.m12 = m00.m12;
                  this.m13 = m00.m13;
                  this.m14 = m00.m14;
                  this.m15 = m00.m15;
                  this.m00 = m00.m00;
                } else {
                  this.m01 = m01;
                  this.m02 = m02;
                  this.m03 = m03;
                  this.m04 = m04;
                  this.m05 = m05;
                  this.m06 = m06;
                  this.m07 = m07;
                  this.m08 = m08;
                  this.m09 = m09;
                  this.m10 = m10;
                  this.m11 = m11;
                  this.m12 = m12;
                  this.m13 = m13;
                  this.m14 = m14;
                  this.m15 = m15;
                  this.m00 = m00;
                }
                return this;
              }
              equals(other, epsilon = EPSILON) {
                const hasInf = Math.abs(this.m00) === Infinity || Math.abs(this.m01) === Infinity || Math.abs(this.m02) === Infinity || Math.abs(this.m03) === Infinity || Math.abs(this.m04) === Infinity || Math.abs(this.m05) === Infinity || Math.abs(this.m06) === Infinity || Math.abs(this.m07) === Infinity || Math.abs(this.m08) === Infinity || Math.abs(this.m09) === Infinity || Math.abs(this.m10) === Infinity || Math.abs(this.m11) === Infinity || Math.abs(this.m12) === Infinity || Math.abs(this.m13) === Infinity || Math.abs(this.m14) === Infinity || Math.abs(this.m15) === Infinity;
                return !hasInf && Math.abs(this.m00 - other.m00) <= epsilon * Math.max(1.0, Math.abs(this.m00), Math.abs(other.m00)) && Math.abs(this.m01 - other.m01) <= epsilon * Math.max(1.0, Math.abs(this.m01), Math.abs(other.m01)) && Math.abs(this.m02 - other.m02) <= epsilon * Math.max(1.0, Math.abs(this.m02), Math.abs(other.m02)) && Math.abs(this.m03 - other.m03) <= epsilon * Math.max(1.0, Math.abs(this.m03), Math.abs(other.m03)) && Math.abs(this.m04 - other.m04) <= epsilon * Math.max(1.0, Math.abs(this.m04), Math.abs(other.m04)) && Math.abs(this.m05 - other.m05) <= epsilon * Math.max(1.0, Math.abs(this.m05), Math.abs(other.m05)) && Math.abs(this.m06 - other.m06) <= epsilon * Math.max(1.0, Math.abs(this.m06), Math.abs(other.m06)) && Math.abs(this.m07 - other.m07) <= epsilon * Math.max(1.0, Math.abs(this.m07), Math.abs(other.m07)) && Math.abs(this.m08 - other.m08) <= epsilon * Math.max(1.0, Math.abs(this.m08), Math.abs(other.m08)) && Math.abs(this.m09 - other.m09) <= epsilon * Math.max(1.0, Math.abs(this.m09), Math.abs(other.m09)) && Math.abs(this.m10 - other.m10) <= epsilon * Math.max(1.0, Math.abs(this.m10), Math.abs(other.m10)) && Math.abs(this.m11 - other.m11) <= epsilon * Math.max(1.0, Math.abs(this.m11), Math.abs(other.m11)) && Math.abs(this.m12 - other.m12) <= epsilon * Math.max(1.0, Math.abs(this.m12), Math.abs(other.m12)) && Math.abs(this.m13 - other.m13) <= epsilon * Math.max(1.0, Math.abs(this.m13), Math.abs(other.m13)) && Math.abs(this.m14 - other.m14) <= epsilon * Math.max(1.0, Math.abs(this.m14), Math.abs(other.m14)) && Math.abs(this.m15 - other.m15) <= epsilon * Math.max(1.0, Math.abs(this.m15), Math.abs(other.m15));
              }
              strictEquals(other) {
                return this.m00 === other.m00 && this.m01 === other.m01 && this.m02 === other.m02 && this.m03 === other.m03 && this.m04 === other.m04 && this.m05 === other.m05 && this.m06 === other.m06 && this.m07 === other.m07 && this.m08 === other.m08 && this.m09 === other.m09 && this.m10 === other.m10 && this.m11 === other.m11 && this.m12 === other.m12 && this.m13 === other.m13 && this.m14 === other.m14 && this.m15 === other.m15;
              }
              toString() {
                return `[\n${this.m00}, ${this.m01}, ${this.m02}, ${this.m03},\n${this.m04}, ${this.m05}, ${this.m06}, ${this.m07},\n${this.m08}, ${this.m09}, ${this.m10}, ${this.m11},\n${this.m12}, ${this.m13}, ${this.m14}, ${this.m15}\n` + ']';
              }
              identity() {
                this.m00 = 1;
                this.m01 = 0;
                this.m02 = 0;
                this.m03 = 0;
                this.m04 = 0;
                this.m05 = 1;
                this.m06 = 0;
                this.m07 = 0;
                this.m08 = 0;
                this.m09 = 0;
                this.m10 = 1;
                this.m11 = 0;
                this.m12 = 0;
                this.m13 = 0;
                this.m14 = 0;
                this.m15 = 1;
                return this;
              }
              zero() {
                this.m00 = 0;
                this.m01 = 0;
                this.m02 = 0;
                this.m03 = 0;
                this.m04 = 0;
                this.m05 = 0;
                this.m06 = 0;
                this.m07 = 0;
                this.m08 = 0;
                this.m09 = 0;
                this.m10 = 0;
                this.m11 = 0;
                this.m12 = 0;
                this.m13 = 0;
                this.m14 = 0;
                this.m15 = 0;
                return this;
              }
              transpose() {
                const a01 = this.m01;
                const a02 = this.m02;
                const a03 = this.m03;
                const a12 = this.m06;
                const a13 = this.m07;
                const a23 = this.m11;
                this.m01 = this.m04;
                this.m02 = this.m08;
                this.m03 = this.m12;
                this.m04 = a01;
                this.m06 = this.m09;
                this.m07 = this.m13;
                this.m08 = a02;
                this.m09 = a12;
                this.m11 = this.m14;
                this.m12 = a03;
                this.m13 = a13;
                this.m14 = a23;
                return this;
              }
              invert() {
                const a00 = this.m00;
                const a01 = this.m01;
                const a02 = this.m02;
                const a03 = this.m03;
                const a10 = this.m04;
                const a11 = this.m05;
                const a12 = this.m06;
                const a13 = this.m07;
                const a20 = this.m08;
                const a21 = this.m09;
                const a22 = this.m10;
                const a23 = this.m11;
                const a30 = this.m12;
                const a31 = this.m13;
                const a32 = this.m14;
                const a33 = this.m15;
                const b00 = a00 * a11 - a01 * a10;
                const b01 = a00 * a12 - a02 * a10;
                const b02 = a00 * a13 - a03 * a10;
                const b03 = a01 * a12 - a02 * a11;
                const b04 = a01 * a13 - a03 * a11;
                const b05 = a02 * a13 - a03 * a12;
                const b06 = a20 * a31 - a21 * a30;
                const b07 = a20 * a32 - a22 * a30;
                const b08 = a20 * a33 - a23 * a30;
                const b09 = a21 * a32 - a22 * a31;
                const b10 = a21 * a33 - a23 * a31;
                const b11 = a22 * a33 - a23 * a32;
                let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
                if (det === 0) {
                  this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                  return this;
                }
                det = 1.0 / det;
                this.m00 = (a11 * b11 - a12 * b10 + a13 * b09) * det;
                this.m01 = (a02 * b10 - a01 * b11 - a03 * b09) * det;
                this.m02 = (a31 * b05 - a32 * b04 + a33 * b03) * det;
                this.m03 = (a22 * b04 - a21 * b05 - a23 * b03) * det;
                this.m04 = (a12 * b08 - a10 * b11 - a13 * b07) * det;
                this.m05 = (a00 * b11 - a02 * b08 + a03 * b07) * det;
                this.m06 = (a32 * b02 - a30 * b05 - a33 * b01) * det;
                this.m07 = (a20 * b05 - a22 * b02 + a23 * b01) * det;
                this.m08 = (a10 * b10 - a11 * b08 + a13 * b06) * det;
                this.m09 = (a01 * b08 - a00 * b10 - a03 * b06) * det;
                this.m10 = (a30 * b04 - a31 * b02 + a33 * b00) * det;
                this.m11 = (a21 * b02 - a20 * b04 - a23 * b00) * det;
                this.m12 = (a11 * b07 - a10 * b09 - a12 * b06) * det;
                this.m13 = (a00 * b09 - a01 * b07 + a02 * b06) * det;
                this.m14 = (a31 * b01 - a30 * b03 - a32 * b00) * det;
                this.m15 = (a20 * b03 - a21 * b01 + a22 * b00) * det;
                return this;
              }
              determinant() {
                const a00 = this.m00;
                const a01 = this.m01;
                const a02 = this.m02;
                const a03 = this.m03;
                const a10 = this.m04;
                const a11 = this.m05;
                const a12 = this.m06;
                const a13 = this.m07;
                const a20 = this.m08;
                const a21 = this.m09;
                const a22 = this.m10;
                const a23 = this.m11;
                const a30 = this.m12;
                const a31 = this.m13;
                const a32 = this.m14;
                const a33 = this.m15;
                const b00 = a00 * a11 - a01 * a10;
                const b01 = a00 * a12 - a02 * a10;
                const b02 = a00 * a13 - a03 * a10;
                const b03 = a01 * a12 - a02 * a11;
                const b04 = a01 * a13 - a03 * a11;
                const b05 = a02 * a13 - a03 * a12;
                const b06 = a20 * a31 - a21 * a30;
                const b07 = a20 * a32 - a22 * a30;
                const b08 = a20 * a33 - a23 * a30;
                const b09 = a21 * a32 - a22 * a31;
                const b10 = a21 * a33 - a23 * a31;
                const b11 = a22 * a33 - a23 * a32;
                return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
              }
              add(mat) {
                this.m00 += mat.m00;
                this.m01 += mat.m01;
                this.m02 += mat.m02;
                this.m03 += mat.m03;
                this.m04 += mat.m04;
                this.m05 += mat.m05;
                this.m06 += mat.m06;
                this.m07 += mat.m07;
                this.m08 += mat.m08;
                this.m09 += mat.m09;
                this.m10 += mat.m10;
                this.m11 += mat.m11;
                this.m12 += mat.m12;
                this.m13 += mat.m13;
                this.m14 += mat.m14;
                this.m15 += mat.m15;
                return this;
              }
              subtract(mat) {
                this.m00 -= mat.m00;
                this.m01 -= mat.m01;
                this.m02 -= mat.m02;
                this.m03 -= mat.m03;
                this.m04 -= mat.m04;
                this.m05 -= mat.m05;
                this.m06 -= mat.m06;
                this.m07 -= mat.m07;
                this.m08 -= mat.m08;
                this.m09 -= mat.m09;
                this.m10 -= mat.m10;
                this.m11 -= mat.m11;
                this.m12 -= mat.m12;
                this.m13 -= mat.m13;
                this.m14 -= mat.m14;
                this.m15 -= mat.m15;
                return this;
              }
              multiply(mat) {
                const a00 = this.m00;
                const a01 = this.m01;
                const a02 = this.m02;
                const a03 = this.m03;
                const a10 = this.m04;
                const a11 = this.m05;
                const a12 = this.m06;
                const a13 = this.m07;
                const a20 = this.m08;
                const a21 = this.m09;
                const a22 = this.m10;
                const a23 = this.m11;
                const a30 = this.m12;
                const a31 = this.m13;
                const a32 = this.m14;
                const a33 = this.m15;
                let b0 = mat.m00;
                let b1 = mat.m01;
                let b2 = mat.m02;
                let b3 = mat.m03;
                this.m00 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
                this.m01 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
                this.m02 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
                this.m03 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
                b0 = mat.m04;
                b1 = mat.m05;
                b2 = mat.m06;
                b3 = mat.m07;
                this.m04 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
                this.m05 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
                this.m06 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
                this.m07 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
                b0 = mat.m08;
                b1 = mat.m09;
                b2 = mat.m10;
                b3 = mat.m11;
                this.m08 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
                this.m09 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
                this.m10 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
                this.m11 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
                b0 = mat.m12;
                b1 = mat.m13;
                b2 = mat.m14;
                b3 = mat.m15;
                this.m12 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
                this.m13 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
                this.m14 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
                this.m15 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
                return this;
              }
              multiplyScalar(scalar) {
                this.m00 *= scalar;
                this.m01 *= scalar;
                this.m02 *= scalar;
                this.m03 *= scalar;
                this.m04 *= scalar;
                this.m05 *= scalar;
                this.m06 *= scalar;
                this.m07 *= scalar;
                this.m08 *= scalar;
                this.m09 *= scalar;
                this.m10 *= scalar;
                this.m11 *= scalar;
                this.m12 *= scalar;
                this.m13 *= scalar;
                this.m14 *= scalar;
                this.m15 *= scalar;
                return this;
              }
              translate(vec) {
                this.m12 += vec.x;
                this.m13 += vec.y;
                this.m14 += vec.z;
                return this;
              }
              transform(vec) {
                const {
                  x,
                  y,
                  z
                } = vec;
                const a00 = this.m00;
                const a01 = this.m01;
                const a02 = this.m02;
                const a03 = this.m03;
                const a10 = this.m04;
                const a11 = this.m05;
                const a12 = this.m06;
                const a13 = this.m07;
                const a20 = this.m08;
                const a21 = this.m09;
                const a22 = this.m10;
                const a23 = this.m11;
                this.m12 = a00 * x + a10 * y + a20 * z + this.m12;
                this.m13 = a01 * x + a11 * y + a21 * z + this.m13;
                this.m14 = a02 * x + a12 * y + a22 * z + this.m14;
                this.m15 = a03 * x + a13 * y + a23 * z + this.m15;
                return this;
              }
              scale(vec) {
                const x = vec.x;
                const y = vec.y;
                const z = vec.z;
                this.m00 *= x;
                this.m01 *= x;
                this.m02 *= x;
                this.m03 *= x;
                this.m04 *= y;
                this.m05 *= y;
                this.m06 *= y;
                this.m07 *= y;
                this.m08 *= z;
                this.m09 *= z;
                this.m10 *= z;
                this.m11 *= z;
                return this;
              }
              rotate(rad, axis) {
                let x = axis.x;
                let y = axis.y;
                let z = axis.z;
                let len = Math.sqrt(x * x + y * y + z * z);
                if (Math.abs(len) < EPSILON) {
                  return null;
                }
                len = 1 / len;
                x *= len;
                y *= len;
                z *= len;
                const s = Math.sin(rad);
                const c = Math.cos(rad);
                const t = 1 - c;
                const a00 = this.m00;
                const a01 = this.m01;
                const a02 = this.m02;
                const a03 = this.m03;
                const a10 = this.m04;
                const a11 = this.m05;
                const a12 = this.m06;
                const a13 = this.m07;
                const a20 = this.m08;
                const a21 = this.m09;
                const a22 = this.m10;
                const a23 = this.m11;
                const b00 = x * x * t + c;
                const b01 = y * x * t + z * s;
                const b02 = z * x * t - y * s;
                const b10 = x * y * t - z * s;
                const b11 = y * y * t + c;
                const b12 = z * y * t + x * s;
                const b20 = x * z * t + y * s;
                const b21 = y * z * t - x * s;
                const b22 = z * z * t + c;
                this.m00 = a00 * b00 + a10 * b01 + a20 * b02;
                this.m01 = a01 * b00 + a11 * b01 + a21 * b02;
                this.m02 = a02 * b00 + a12 * b01 + a22 * b02;
                this.m03 = a03 * b00 + a13 * b01 + a23 * b02;
                this.m04 = a00 * b10 + a10 * b11 + a20 * b12;
                this.m05 = a01 * b10 + a11 * b11 + a21 * b12;
                this.m06 = a02 * b10 + a12 * b11 + a22 * b12;
                this.m07 = a03 * b10 + a13 * b11 + a23 * b12;
                this.m08 = a00 * b20 + a10 * b21 + a20 * b22;
                this.m09 = a01 * b20 + a11 * b21 + a21 * b22;
                this.m10 = a02 * b20 + a12 * b21 + a22 * b22;
                this.m11 = a03 * b20 + a13 * b21 + a23 * b22;
                return this;
              }
              getTranslation(out) {
                out.x = this.m12;
                out.y = this.m13;
                out.z = this.m14;
                return out;
              }
              getScale(out) {
                const m00 = m3_1.m00 = this.m00;
                const m01 = m3_1.m01 = this.m01;
                const m02 = m3_1.m02 = this.m02;
                const m04 = m3_1.m03 = this.m04;
                const m05 = m3_1.m04 = this.m05;
                const m06 = m3_1.m05 = this.m06;
                const m08 = m3_1.m06 = this.m08;
                const m09 = m3_1.m07 = this.m09;
                const m10 = m3_1.m08 = this.m10;
                out.x = Math.sqrt(m00 * m00 + m01 * m01 + m02 * m02);
                out.y = Math.sqrt(m04 * m04 + m05 * m05 + m06 * m06);
                out.z = Math.sqrt(m08 * m08 + m09 * m09 + m10 * m10);
                if (Mat3.determinant(m3_1) < 0) {
                  out.x *= -1;
                }
                return out;
              }
              getRotation(out) {
                const sx = Vec3.set(v3_1, this.m00, this.m01, this.m02).length();
                const sy = Vec3.set(v3_1, this.m04, this.m05, this.m06).length();
                const sz = Vec3.set(v3_1, this.m08, this.m09, this.m10).length();
                m3_1.m00 = this.m00 / sx;
                m3_1.m01 = this.m01 / sx;
                m3_1.m02 = this.m02 / sx;
                m3_1.m03 = this.m04 / sy;
                m3_1.m04 = this.m05 / sy;
                m3_1.m05 = this.m06 / sy;
                m3_1.m06 = this.m08 / sz;
                m3_1.m07 = this.m09 / sz;
                m3_1.m08 = this.m10 / sz;
                const det = Mat3.determinant(m3_1);
                if (det < 0) {
                  m3_1.m00 *= -1;
                  m3_1.m01 *= -1;
                  m3_1.m02 *= -1;
                }
                return Quat.fromMat3(out, m3_1);
              }
              fromRTS(q, v, s) {
                const x = q.x;
                const y = q.y;
                const z = q.z;
                const w = q.w;
                const x2 = x + x;
                const y2 = y + y;
                const z2 = z + z;
                const xx = x * x2;
                const xy = x * y2;
                const xz = x * z2;
                const yy = y * y2;
                const yz = y * z2;
                const zz = z * z2;
                const wx = w * x2;
                const wy = w * y2;
                const wz = w * z2;
                const sx = s.x;
                const sy = s.y;
                const sz = s.z;
                this.m00 = (1 - (yy + zz)) * sx;
                this.m01 = (xy + wz) * sx;
                this.m02 = (xz - wy) * sx;
                this.m03 = 0;
                this.m04 = (xy - wz) * sy;
                this.m05 = (1 - (xx + zz)) * sy;
                this.m06 = (yz + wx) * sy;
                this.m07 = 0;
                this.m08 = (xz + wy) * sz;
                this.m09 = (yz - wx) * sz;
                this.m10 = (1 - (xx + yy)) * sz;
                this.m11 = 0;
                this.m12 = v.x;
                this.m13 = v.y;
                this.m14 = v.z;
                this.m15 = 1;
                return this;
              }
              fromSRT(q, v, s) {
                const x = q.x;
                const y = q.y;
                const z = q.z;
                const w = q.w;
                const x2 = x + x;
                const y2 = y + y;
                const z2 = z + z;
                const xx = x * x2;
                const xy = x * y2;
                const xz = x * z2;
                const yy = y * y2;
                const yz = y * z2;
                const zz = z * z2;
                const wx = w * x2;
                const wy = w * y2;
                const wz = w * z2;
                const sx = s.x;
                const sy = s.y;
                const sz = s.z;
                this.m00 = (1 - (yy + zz)) * sx;
                this.m01 = (xy + wz) * sx;
                this.m02 = (xz - wy) * sx;
                this.m03 = 0;
                this.m04 = (xy - wz) * sy;
                this.m05 = (1 - (xx + zz)) * sy;
                this.m06 = (yz + wx) * sy;
                this.m07 = 0;
                this.m08 = (xz + wy) * sz;
                this.m09 = (yz - wx) * sz;
                this.m10 = (1 - (xx + yy)) * sz;
                this.m11 = 0;
                this.m12 = v.x;
                this.m13 = v.y;
                this.m14 = v.z;
                this.m15 = 1;
                return this;
              }
              fromQuat(q) {
                const x = q.x;
                const y = q.y;
                const z = q.z;
                const w = q.w;
                const x2 = x + x;
                const y2 = y + y;
                const z2 = z + z;
                const xx = x * x2;
                const yx = y * x2;
                const yy = y * y2;
                const zx = z * x2;
                const zy = z * y2;
                const zz = z * z2;
                const wx = w * x2;
                const wy = w * y2;
                const wz = w * z2;
                this.m00 = 1 - yy - zz;
                this.m01 = yx + wz;
                this.m02 = zx - wy;
                this.m03 = 0;
                this.m04 = yx - wz;
                this.m05 = 1 - xx - zz;
                this.m06 = zy + wx;
                this.m07 = 0;
                this.m08 = zx + wy;
                this.m09 = zy - wx;
                this.m10 = 1 - xx - yy;
                this.m11 = 0;
                this.m12 = 0;
                this.m13 = 0;
                this.m14 = 0;
                this.m15 = 1;
                return this;
              }
            } exports('s', Mat4);
            _class$5 = Mat4;
            Mat4.IDENTITY = Object.freeze(new _class$5());
            const v3_1 = new Vec3();
            const m3_1 = new Mat3();
            CCClass.fastDefine('cc.Mat4', Mat4, {
              m00: 1,
              m01: 0,
              m02: 0,
              m03: 0,
              m04: 0,
              m05: 1,
              m06: 0,
              m07: 0,
              m08: 0,
              m09: 0,
              m10: 1,
              m11: 0,
              m12: 0,
              m13: 0,
              m14: 0,
              m15: 1
            });
            legacyCC.Mat4 = Mat4;
            function mat4(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
              return new Mat4(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
            }
            legacyCC.mat4 = mat4;

            var _class$4;
            class Vec2 extends ValueType {
              static clone(a) {
                return new Vec2(a.x, a.y);
              }
              static copy(out, a) {
                out.x = a.x;
                out.y = a.y;
                return out;
              }
              static set(out, x, y) {
                out.x = x;
                out.y = y;
                return out;
              }
              static add(out, a, b) {
                out.x = a.x + b.x;
                out.y = a.y + b.y;
                return out;
              }
              static subtract(out, a, b) {
                out.x = a.x - b.x;
                out.y = a.y - b.y;
                return out;
              }
              static multiply(out, a, b) {
                out.x = a.x * b.x;
                out.y = a.y * b.y;
                return out;
              }
              static divide(out, a, b) {
                out.x = a.x / b.x;
                out.y = a.y / b.y;
                return out;
              }
              static ceil(out, a) {
                out.x = Math.ceil(a.x);
                out.y = Math.ceil(a.y);
                return out;
              }
              static floor(out, a) {
                out.x = Math.floor(a.x);
                out.y = Math.floor(a.y);
                return out;
              }
              static min(out, a, b) {
                out.x = Math.min(a.x, b.x);
                out.y = Math.min(a.y, b.y);
                return out;
              }
              static max(out, a, b) {
                out.x = Math.max(a.x, b.x);
                out.y = Math.max(a.y, b.y);
                return out;
              }
              static round(out, a) {
                out.x = Math.round(a.x);
                out.y = Math.round(a.y);
                return out;
              }
              static multiplyScalar(out, a, b) {
                out.x = a.x * b;
                out.y = a.y * b;
                return out;
              }
              static scaleAndAdd(out, a, b, scale) {
                out.x = a.x + b.x * scale;
                out.y = a.y + b.y * scale;
                return out;
              }
              static distance(a, b) {
                const x = b.x - a.x;
                const y = b.y - a.y;
                return Math.sqrt(x * x + y * y);
              }
              static squaredDistance(a, b) {
                const x = b.x - a.x;
                const y = b.y - a.y;
                return x * x + y * y;
              }
              static len(a) {
                const x = a.x;
                const y = a.y;
                return Math.sqrt(x * x + y * y);
              }
              static lengthSqr(a) {
                const x = a.x;
                const y = a.y;
                return x * x + y * y;
              }
              static negate(out, a) {
                out.x = -a.x;
                out.y = -a.y;
                return out;
              }
              static inverse(out, a) {
                out.x = 1.0 / a.x;
                out.y = 1.0 / a.y;
                return out;
              }
              static inverseSafe(out, a) {
                const x = a.x;
                const y = a.y;
                if (Math.abs(x) < EPSILON) {
                  out.x = 0;
                } else {
                  out.x = 1.0 / x;
                }
                if (Math.abs(y) < EPSILON) {
                  out.y = 0;
                } else {
                  out.y = 1.0 / y;
                }
                return out;
              }
              static normalize(out, a) {
                const x = a.x;
                const y = a.y;
                let len = x * x + y * y;
                if (len > 0) {
                  len = 1 / Math.sqrt(len);
                  out.x = x * len;
                  out.y = y * len;
                } else {
                  out.x = 0;
                  out.y = 0;
                }
                return out;
              }
              static dot(a, b) {
                return a.x * b.x + a.y * b.y;
              }
              static cross(out, a, b) {
                if (out instanceof Vec3) {
                  out.x = out.y = 0;
                  out.z = a.x * b.y - a.y * b.x;
                  return out;
                } else {
                  return out.x * a.y - out.y * a.x;
                }
              }
              static lerp(out, a, b, t) {
                const x = a.x;
                const y = a.y;
                out.x = x + t * (b.x - x);
                out.y = y + t * (b.y - y);
                return out;
              }
              static random(out, scale) {
                scale = scale || 1.0;
                const r = random() * 2.0 * Math.PI;
                out.x = Math.cos(r) * scale;
                out.y = Math.sin(r) * scale;
                return out;
              }
              static transformMat3(out, a, m) {
                const x = a.x;
                const y = a.y;
                out.x = m.m00 * x + m.m03 * y + m.m06;
                out.y = m.m01 * x + m.m04 * y + m.m07;
                return out;
              }
              static transformMat4(out, a, m) {
                const x = a.x;
                const y = a.y;
                out.x = m.m00 * x + m.m04 * y + m.m12;
                out.y = m.m01 * x + m.m05 * y + m.m13;
                return out;
              }
              static str(a) {
                return `Vec2(${a.x}, ${a.y})`;
              }
              static toArray(out, v, ofs = 0) {
                out[ofs + 0] = v.x;
                out[ofs + 1] = v.y;
                return out;
              }
              static fromArray(out, arr, ofs = 0) {
                out.x = arr[ofs + 0];
                out.y = arr[ofs + 1];
                return out;
              }
              static strictEquals(a, b) {
                return a.x === b.x && a.y === b.y;
              }
              static equals(a, b, epsilon = EPSILON) {
                return Math.abs(a.x - b.x) <= epsilon * Math.max(1.0, Math.abs(a.x), Math.abs(b.x)) && Math.abs(a.y - b.y) <= epsilon * Math.max(1.0, Math.abs(a.y), Math.abs(b.y));
              }
              static angle(a, b) {
                const magSqr1 = a.x * a.x + a.y * a.y;
                const magSqr2 = b.x * b.x + b.y * b.y;
                if (magSqr1 === 0 || magSqr2 === 0) {
                  return 0.0;
                }
                const dot = a.x * b.x + a.y * b.y;
                let cosine = dot / Math.sqrt(magSqr1 * magSqr2);
                cosine = clamp(cosine, -1.0, 1.0);
                return Math.acos(cosine);
              }
              constructor(x, y) {
                super();
                if (typeof x === 'object') {
                  this.x = x.x;
                  this.y = x.y;
                } else {
                  this.x = x || 0;
                  this.y = y || 0;
                }
              }
              clone() {
                return new Vec2(this.x, this.y);
              }
              set(x, y) {
                if (typeof x === 'object') {
                  this.x = x.x;
                  this.y = x.y;
                } else {
                  this.x = x || 0;
                  this.y = y || 0;
                }
                return this;
              }
              equals(other, epsilon = EPSILON) {
                return Math.abs(this.x - other.x) <= epsilon * Math.max(1.0, Math.abs(this.x), Math.abs(other.x)) && Math.abs(this.y - other.y) <= epsilon * Math.max(1.0, Math.abs(this.y), Math.abs(other.y));
              }
              equals2f(x, y, epsilon = EPSILON) {
                return Math.abs(this.x - x) <= epsilon * Math.max(1.0, Math.abs(this.x), Math.abs(x)) && Math.abs(this.y - y) <= epsilon * Math.max(1.0, Math.abs(this.y), Math.abs(y));
              }
              strictEquals(other) {
                return other && this.x === other.x && this.y === other.y;
              }
              strictEquals2f(x, y) {
                return this.x === x && this.y === y;
              }
              toString() {
                return `(${this.x.toFixed(2)}, ${this.y.toFixed(2)})`;
              }
              lerp(to, ratio) {
                const x = this.x;
                const y = this.y;
                this.x = x + ratio * (to.x - x);
                this.y = y + ratio * (to.y - y);
                return this;
              }
              clampf(minInclusive, maxInclusive) {
                this.x = clamp(this.x, minInclusive.x, maxInclusive.x);
                this.y = clamp(this.y, minInclusive.y, maxInclusive.y);
                return this;
              }
              add(other) {
                this.x += other.x;
                this.y += other.y;
                return this;
              }
              add2f(x, y) {
                this.x += x;
                this.y += y;
                return this;
              }
              subtract(other) {
                this.x -= other.x;
                this.y -= other.y;
                return this;
              }
              subtract2f(x, y) {
                this.x -= x;
                this.y -= y;
                return this;
              }
              multiplyScalar(scalar) {
                if (typeof scalar === 'object') {
                  console.warn('should use Vec2.multiply for vector * vector operation');
                }
                this.x *= scalar;
                this.y *= scalar;
                return this;
              }
              multiply(other) {
                if (typeof other !== 'object') {
                  console.warn('should use Vec2.scale for vector * scalar operation');
                }
                this.x *= other.x;
                this.y *= other.y;
                return this;
              }
              multiply2f(x, y) {
                this.x *= x;
                this.y *= y;
                return this;
              }
              divide(other) {
                this.x /= other.x;
                this.y /= other.y;
                return this;
              }
              divide2f(x, y) {
                this.x /= x;
                this.y /= y;
                return this;
              }
              negative() {
                this.x = -this.x;
                this.y = -this.y;
                return this;
              }
              dot(other) {
                return this.x * other.x + this.y * other.y;
              }
              cross(other) {
                return this.x * other.y - this.y * other.x;
              }
              length() {
                return Math.sqrt(this.x * this.x + this.y * this.y);
              }
              lengthSqr() {
                return this.x * this.x + this.y * this.y;
              }
              normalize() {
                const x = this.x;
                const y = this.y;
                let len = x * x + y * y;
                if (len > 0) {
                  len = 1 / Math.sqrt(len);
                  this.x *= len;
                  this.y *= len;
                }
                return this;
              }
              angle(other) {
                const magSqr1 = this.lengthSqr();
                const magSqr2 = other.lengthSqr();
                if (magSqr1 === 0 || magSqr2 === 0) {
                  return 0.0;
                }
                const dot = this.dot(other);
                let cosine = dot / Math.sqrt(magSqr1 * magSqr2);
                cosine = clamp(cosine, -1.0, 1.0);
                return Math.acos(cosine);
              }
              signAngle(other) {
                const cross = this.cross(other);
                const dot = this.dot(other);
                return Math.atan2(cross, dot);
              }
              rotate(radians) {
                const x = this.x;
                const y = this.y;
                const sin = Math.sin(radians);
                const cos = Math.cos(radians);
                this.x = cos * x - sin * y;
                this.y = sin * x + cos * y;
                return this;
              }
              project(other) {
                const scalar = this.dot(other) / other.dot(other);
                this.x = other.x * scalar;
                this.y = other.y * scalar;
                return this;
              }
              transformMat4(matrix) {
                const x = this.x;
                const y = this.y;
                this.x = matrix.m00 * x + matrix.m04 * y + matrix.m12;
                this.y = matrix.m01 * x + matrix.m05 * y + matrix.m13;
                return this;
              }
            } exports('V', Vec2);
            _class$4 = Vec2;
            Vec2.ZERO = Object.freeze(new _class$4(0, 0));
            Vec2.ONE = Object.freeze(new _class$4(1, 1));
            Vec2.NEG_ONE = Object.freeze(new _class$4(-1, -1));
            Vec2.UNIT_X = Object.freeze(new _class$4(1, 0));
            Vec2.UNIT_Y = Object.freeze(new _class$4(0, 1));
            CCClass.fastDefine('cc.Vec2', Vec2, {
              x: 0,
              y: 0
            });
            legacyCC.Vec2 = Vec2;
            function v2$1(x, y) {
              return new Vec2(x, y);
            }
            legacyCC.v2 = v2$1;

            replaceProperty(Vec2, 'Vec2', [{
              name: 'sub',
              newName: 'subtract',
              target: Vec2,
              targetName: 'Vec2'
            }, {
              name: 'mul',
              newName: 'multiply',
              target: Vec2,
              targetName: 'Vec2'
            }, {
              name: 'div',
              newName: 'divide',
              target: Vec2,
              targetName: 'Vec2'
            }, {
              name: 'dist',
              newName: 'distance',
              target: Vec2,
              targetName: 'Vec2'
            }, {
              name: 'sqrDist',
              newName: 'squaredDistance',
              target: Vec2,
              targetName: 'Vec2'
            }, {
              name: 'mag',
              newName: 'len',
              target: Vec2,
              targetName: 'Vec2'
            }, {
              name: 'sqrMag',
              newName: 'lengthSqr',
              target: Vec2,
              targetName: 'Vec2'
            }, {
              name: 'scale',
              newName: 'multiplyScalar',
              target: Vec2,
              targetName: 'Vec2'
            }, {
              name: 'exactEquals',
              newName: 'strictEquals',
              target: Vec2,
              targetName: 'Vec2'
            }]);
            replaceProperty(Vec2.prototype, 'Vec2', [{
              name: 'mag',
              newName: 'length',
              target: Vec2.prototype,
              targetName: 'Vec2'
            }, {
              name: 'magSqr',
              newName: 'lengthSqr',
              target: Vec2.prototype,
              targetName: 'Vec2'
            }, {
              name: 'scale',
              newName: 'multiplyScalar',
              target: Vec2.prototype,
              targetName: 'Vec2'
            }, {
              name: 'exactEquals',
              newName: 'strictEquals',
              target: Vec2.prototype,
              targetName: 'Vec2'
            }]);
            replaceProperty(Vec3, 'Vec3', [{
              name: 'sub',
              newName: 'subtract',
              target: Vec3,
              targetName: 'Vec3'
            }, {
              name: 'mul',
              newName: 'multiply',
              target: Vec3,
              targetName: 'Vec3'
            }, {
              name: 'div',
              newName: 'divide',
              target: Vec3,
              targetName: 'Vec3'
            }, {
              name: 'dist',
              newName: 'distance',
              target: Vec3,
              targetName: 'Vec3'
            }, {
              name: 'sqrDist',
              newName: 'squaredDistance',
              target: Vec3,
              targetName: 'Vec3'
            }, {
              name: 'mag',
              newName: 'len',
              target: Vec3,
              targetName: 'Vec3'
            }, {
              name: 'sqrMag',
              newName: 'lengthSqr',
              target: Vec3,
              targetName: 'Vec3'
            }, {
              name: 'scale',
              newName: 'multiplyScalar',
              target: Vec3,
              targetName: 'Vec3'
            }, {
              name: 'exactEquals',
              newName: 'strictEquals',
              target: Vec3,
              targetName: 'Vec3'
            }]);
            replaceProperty(Vec3.prototype, 'Vec3', [{
              name: 'mag',
              newName: 'length',
              target: Vec3.prototype,
              targetName: 'Vec3'
            }, {
              name: 'magSqr',
              newName: 'lengthSqr',
              target: Vec3.prototype,
              targetName: 'Vec3'
            }, {
              name: 'scale',
              newName: 'multiplyScalar',
              target: Vec3.prototype,
              targetName: 'Vec3'
            }, {
              name: 'exactEquals',
              newName: 'strictEquals',
              target: Vec3.prototype,
              targetName: 'Vec3'
            }]);
            replaceProperty(Vec4, 'Vec4', [{
              name: 'sub',
              newName: 'subtract',
              target: Vec4,
              targetName: 'Vec4'
            }, {
              name: 'mul',
              newName: 'multiply',
              target: Vec4,
              targetName: 'Vec4'
            }, {
              name: 'div',
              newName: 'divide',
              target: Vec4,
              targetName: 'Vec4'
            }, {
              name: 'dist',
              newName: 'distance',
              target: Vec4,
              targetName: 'Vec4'
            }, {
              name: 'sqrDist',
              newName: 'squaredDistance',
              target: Vec4,
              targetName: 'Vec4'
            }, {
              name: 'mag',
              newName: 'len',
              target: Vec4,
              targetName: 'Vec4'
            }, {
              name: 'sqrMag',
              newName: 'lengthSqr',
              target: Vec4,
              targetName: 'Vec4'
            }, {
              name: 'scale',
              newName: 'multiplyScalar',
              target: Vec4,
              targetName: 'Vec4'
            }, {
              name: 'exactEquals',
              newName: 'strictEquals',
              target: Vec4,
              targetName: 'Vec4'
            }]);
            replaceProperty(Vec4.prototype, 'Vec4', [{
              name: 'mag',
              newName: 'length',
              target: Vec4.prototype,
              targetName: 'Vec4'
            }, {
              name: 'magSqr',
              newName: 'lengthSqr',
              target: Vec4.prototype,
              targetName: 'Vec4'
            }, {
              name: 'scale',
              newName: 'multiplyScalar',
              target: Vec4.prototype,
              targetName: 'Vec4'
            }, {
              name: 'exactEquals',
              newName: 'strictEquals',
              target: Vec4.prototype,
              targetName: 'Vec4'
            }]);
            replaceProperty(Quat, 'Quat', [{
              name: 'mag',
              newName: 'len',
              target: Quat,
              targetName: 'Quat'
            }, {
              name: 'mul',
              newName: 'multiply',
              target: Quat,
              targetName: 'Quat'
            }, {
              name: 'sqrMag',
              newName: 'lengthSqr',
              target: Quat,
              targetName: 'Quat'
            }, {
              name: 'scale',
              newName: 'multiplyScalar',
              target: Quat,
              targetName: 'Quat'
            }, {
              name: 'exactEquals',
              newName: 'strictEquals',
              target: Quat,
              targetName: 'Quat'
            }]);
            replaceProperty(Quat.prototype, 'Quat', [{
              name: 'scale',
              newName: 'multiplyScalar',
              target: Quat.prototype,
              targetName: 'Quat'
            }, {
              name: 'exactEquals',
              newName: 'strictEquals',
              target: Quat.prototype,
              targetName: 'Quat'
            }]);
            replaceProperty(Color, 'Color', [{
              name: 'sub',
              newName: 'subtract',
              target: Color,
              targetName: 'Color'
            }, {
              name: 'mul',
              newName: 'multiply',
              target: Color,
              targetName: 'Color'
            }, {
              name: 'div',
              newName: 'divide',
              target: Color,
              targetName: 'Color'
            }, {
              name: 'exactEquals',
              newName: 'strictEquals',
              target: Color,
              targetName: 'Color'
            }, {
              name: 'fromHex',
              newName: 'fromHEX',
              customFunction(...args) {
                const arg1 = args[1].toString(16);
                return legacyCC.Color.fromHEX(args[0], arg1);
              }
            }]);
            replaceProperty(Mat3, 'Mat3', [{
              name: 'sub',
              newName: 'subtract',
              target: Mat3,
              targetName: 'Mat3'
            }, {
              name: 'mul',
              newName: 'multiply',
              target: Mat3,
              targetName: 'Mat3'
            }, {
              name: 'exactEquals',
              newName: 'strictEquals',
              target: Mat3,
              targetName: 'Mat3'
            }, {
              name: 'transfrom',
              newName: 'transform',
              target: Mat3,
              targetName: 'Mat3'
            }]);
            replaceProperty(Mat3.prototype, 'Mat3', [{
              name: 'sub',
              newName: 'subtract',
              target: Mat3.prototype,
              targetName: 'Mat3'
            }, {
              name: 'mul',
              newName: 'multiply',
              target: Mat3.prototype,
              targetName: 'Mat3'
            }, {
              name: 'mulScalar',
              newName: 'multiplyScalar',
              target: Mat3.prototype,
              targetName: 'Mat3'
            }, {
              name: 'exactEquals',
              newName: 'strictEquals',
              target: Mat3.prototype,
              targetName: 'Mat3'
            }]);
            replaceProperty(Mat4, 'Mat4', [{
              name: 'sub',
              newName: 'subtract',
              target: Mat4,
              targetName: 'Mat4'
            }, {
              name: 'mul',
              newName: 'multiply',
              target: Mat4,
              targetName: 'Mat4'
            }, {
              name: 'exactEquals',
              newName: 'strictEquals',
              target: Mat4,
              targetName: 'Mat4'
            }]);
            replaceProperty(Mat4.prototype, 'Mat4', [{
              name: 'sub',
              newName: 'subtract',
              target: Mat4.prototype,
              targetName: 'Mat4'
            }, {
              name: 'mul',
              newName: 'multiply',
              target: Mat4.prototype,
              targetName: 'Mat4'
            }, {
              name: 'mulScalar',
              newName: 'multiplyScalar',
              target: Mat4.prototype,
              targetName: 'Mat4'
            }, {
              name: 'exactEquals',
              newName: 'strictEquals',
              target: Mat4.prototype,
              targetName: 'Mat4'
            }]);

            const defineAttr = (proto, name, offset) => {
              Object.defineProperty(proto, name, {
                configurable: true,
                enumerable: true,
                get() {
                  return this._data()[offset];
                },
                set(v) {
                  this._data()[offset] = v;
                }
              });
            };
            let MathType; exports('co', MathType);
            (function (MathType) {
              MathType[MathType["VEC2"] = 0] = "VEC2";
              MathType[MathType["VEC3"] = 1] = "VEC3";
              MathType[MathType["VEC4"] = 2] = "VEC4";
              MathType[MathType["QUATERNION"] = 3] = "QUATERNION";
              MathType[MathType["MAT3"] = 4] = "MAT3";
              MathType[MathType["MAT4"] = 5] = "MAT4";
              MathType[MathType["SIZE"] = 6] = "SIZE";
              MathType[MathType["RECT"] = 7] = "RECT";
              MathType[MathType["COLOR"] = 8] = "COLOR";
            })(MathType || (exports('co', MathType = {})));
            function extendType(proto, parentProto, typ) {
              proto._data = function () {
                if (!this.__data) {
                  this.__data = new Float32Array(this.underlyingData());
                }
                return this.__data;
              };
              Object.setPrototypeOf(proto, parentProto);
              Object.defineProperty(proto, 'type', {
                configurable: true,
                enumerable: true,
                writable: false,
                value: typ
              });
            }
            function inheritCCClass(ctor, parentCtor) {
              for (const attrName of ['__cid__', '__classname__']) {
                Object.defineProperty(ctor.prototype, attrName, {
                  value: parentCtor.prototype[attrName],
                  writable: false,
                  enumerable: false,
                  configurable: true
                });
              }
              for (const staticKey of ['__attrs__', '__props__', '__values__']) {
                ctor[staticKey] = parentCtor[staticKey];
              }
            }
            {
              extendType(jsb.Mat4.prototype, Mat4.prototype, MathType.MAT4);
              for (let i = 0; i < 16; i++) {
                const numb = `0${i}`;
                defineAttr(jsb.Mat4.prototype, `m${numb.substring(numb.length - 2)}`, i);
              }
              for (let i = 0; i < 9; i++) {
                const numb = `0${i}`;
                defineAttr(jsb.Mat3.prototype, `m${numb.substring(numb.length - 2)}`, i);
              }
              extendType(jsb.Mat3.prototype, Mat3.prototype, MathType.MAT3);
              defineAttr(jsb.Vec2.prototype, 'x', 0);
              defineAttr(jsb.Vec2.prototype, 'y', 1);
              extendType(jsb.Vec2.prototype, Vec2.prototype, MathType.VEC2);
              defineAttr(jsb.Vec3.prototype, 'x', 0);
              defineAttr(jsb.Vec3.prototype, 'y', 1);
              defineAttr(jsb.Vec3.prototype, 'z', 2);
              extendType(jsb.Vec3.prototype, Vec3.prototype, MathType.VEC3);
              defineAttr(jsb.Vec4.prototype, 'x', 0);
              defineAttr(jsb.Vec4.prototype, 'y', 1);
              defineAttr(jsb.Vec4.prototype, 'z', 2);
              defineAttr(jsb.Vec4.prototype, 'w', 3);
              extendType(jsb.Vec4.prototype, Vec4.prototype, MathType.VEC4);
              defineAttr(jsb.Quat.prototype, 'x', 0);
              defineAttr(jsb.Quat.prototype, 'y', 1);
              defineAttr(jsb.Quat.prototype, 'z', 2);
              defineAttr(jsb.Quat.prototype, 'w', 3);
              extendType(jsb.Quat.prototype, Quat.prototype, MathType.QUATERNION);
              Object.setPrototypeOf(jsb.Color.prototype, Color.prototype);
              Object.defineProperty(jsb.Color.prototype, 'type', {
                configurable: true,
                enumerable: true,
                writable: false,
                value: MathType.COLOR
              });
              inheritCCClass(jsb.Vec4, Vec4);
              inheritCCClass(jsb.Vec3, Vec3);
              inheritCCClass(jsb.Vec2, Vec2);
              inheritCCClass(jsb.Mat4, Mat4);
              inheritCCClass(jsb.Mat3, Mat3);
              inheritCCClass(jsb.Color, Color);
              inheritCCClass(jsb.Quat, Quat);
            }

            class AffineTransform {
              static identity() {
                return new AffineTransform();
              }
              static clone(affineTransform) {
                return new AffineTransform(affineTransform.a, affineTransform.b, affineTransform.c, affineTransform.d, affineTransform.tx, affineTransform.ty);
              }
              static concat(out, t1, t2) {
                const a = t1.a;
                const b = t1.b;
                const c = t1.c;
                const d = t1.d;
                const tx = t1.tx;
                const ty = t1.ty;
                out.a = a * t2.a + b * t2.c;
                out.b = a * t2.b + b * t2.d;
                out.c = c * t2.a + d * t2.c;
                out.d = c * t2.b + d * t2.d;
                out.tx = tx * t2.a + ty * t2.c + t2.tx;
                out.ty = tx * t2.b + ty * t2.d + t2.ty;
              }
              static invert(out, t) {
                const determinant = 1 / (t.a * t.d - t.b * t.c);
                out.a = determinant * t.d;
                out.b = -determinant * t.b;
                out.c = -determinant * t.c;
                out.d = determinant * t.a;
                out.tx = determinant * (t.c * t.ty - t.d * t.tx);
                out.ty = determinant * (t.b * t.tx - t.a * t.ty);
              }
              static fromMat4(out, mat) {
                out.a = mat.m00;
                out.b = mat.m01;
                out.c = mat.m04;
                out.d = mat.m05;
                out.tx = mat.m12;
                out.ty = mat.m13;
              }
              static transformVec2(out, point, transOrY, t) {
                let x;
                let y;
                if (!t) {
                  t = transOrY;
                  x = point.x;
                  y = point.y;
                } else {
                  x = point;
                  y = transOrY;
                }
                out.x = t.a * x + t.c * y + t.tx;
                out.y = t.b * x + t.d * y + t.ty;
              }
              static transformSize(out, size, t) {
                out.width = t.a * size.width + t.c * size.height;
                out.height = t.b * size.width + t.d * size.height;
              }
              static transformRect(out, rect, t) {
                const or = rect.x + rect.width;
                const ot = rect.y + rect.height;
                const lbx = t.a * rect.x + t.c * rect.y + t.tx;
                const lby = t.b * rect.x + t.d * rect.y + t.ty;
                const rbx = t.a * or + t.c * rect.y + t.tx;
                const rby = t.b * or + t.d * rect.y + t.ty;
                const ltx = t.a * rect.x + t.c * ot + t.tx;
                const lty = t.b * rect.x + t.d * ot + t.ty;
                const rtx = t.a * or + t.c * ot + t.tx;
                const rty = t.b * or + t.d * ot + t.ty;
                const minX = Math.min(lbx, rbx, ltx, rtx);
                const maxX = Math.max(lbx, rbx, ltx, rtx);
                const minY = Math.min(lby, rby, lty, rty);
                const maxY = Math.max(lby, rby, lty, rty);
                out.x = minX;
                out.y = minY;
                out.width = maxX - minX;
                out.height = maxY - minY;
              }
              static transformObb(out_bl, out_tl, out_tr, out_br, rect, anAffineTransform, flipY = true) {
                const tx = anAffineTransform.a * rect.x + anAffineTransform.c * rect.y + anAffineTransform.tx;
                const ty = anAffineTransform.b * rect.x + anAffineTransform.d * rect.y + anAffineTransform.ty;
                const xa = anAffineTransform.a * rect.width;
                const xb = anAffineTransform.b * rect.width;
                const yc = anAffineTransform.c * rect.height;
                const yd = anAffineTransform.d * rect.height;
                if (flipY) {
                  out_tl.x = tx;
                  out_tl.y = ty;
                  out_tr.x = xa + tx;
                  out_tr.y = xb + ty;
                  out_bl.x = yc + tx;
                  out_bl.y = yd + ty;
                  out_br.x = xa + yc + tx;
                  out_br.y = xb + yd + ty;
                } else {
                  out_bl.x = tx;
                  out_bl.y = ty;
                  out_br.x = xa + tx;
                  out_br.y = xb + ty;
                  out_tl.x = yc + tx;
                  out_tl.y = yd + ty;
                  out_tr.x = xa + yc + tx;
                  out_tr.y = xb + yd + ty;
                }
              }
              constructor(a = 1, b = 0, c = 0, d = 1, tx = 0, ty = 0) {
                this.a = a;
                this.b = b;
                this.c = c;
                this.d = d;
                this.tx = tx;
                this.ty = ty;
              }
            } exports('A', AffineTransform);
            legacyCC.AffineTransform = AffineTransform;

            var _class$3;
            class Size extends ValueType {
              static lerp(out, from, to, ratio) {
                out.width = from.width + (to.width - from.width) * ratio;
                out.height = from.height + (to.height - from.height) * ratio;
                return out;
              }
              static equals(a, b) {
                return a.width === b.width && a.height === b.height;
              }
              set x(val) {
                this.width = val;
              }
              get x() {
                return this.width;
              }
              set y(val) {
                this.height = val;
              }
              get y() {
                return this.height;
              }
              constructor(width, height) {
                super();
                if (typeof width === 'object') {
                  this.width = width.width;
                  this.height = width.height;
                } else {
                  this.width = width || 0;
                  this.height = height || 0;
                }
              }
              clone() {
                return new Size(this.width, this.height);
              }
              set(width, height) {
                if (typeof width === 'object') {
                  this.height = width.height;
                  this.width = width.width;
                } else {
                  this.width = width || 0;
                  this.height = height || 0;
                }
                return this;
              }
              equals(other) {
                return this.width === other.width && this.height === other.height;
              }
              lerp(to, ratio) {
                this.width += (to.width - this.width) * ratio;
                this.height += (to.height - this.height) * ratio;
                return this;
              }
              toString() {
                return `(${this.width.toFixed(2)}, ${this.height.toFixed(2)})`;
              }
            } exports('S', Size);
            _class$3 = Size;
            Size.ZERO = Object.freeze(new _class$3(0, 0));
            Size.ONE = Object.freeze(new _class$3(1, 1));
            CCClass.fastDefine('cc.Size', Size, {
              width: 0,
              height: 0
            });
            function size(width = 0, height = 0) {
              return new Size(width, height);
            }
            legacyCC.size = size;
            legacyCC.Size = Size;

            class Rect extends ValueType {
              static fromMinMax(out, v1, v2) {
                const minX = Math.min(v1.x, v2.x);
                const minY = Math.min(v1.y, v2.y);
                const maxX = Math.max(v1.x, v2.x);
                const maxY = Math.max(v1.y, v2.y);
                out.x = minX;
                out.y = minY;
                out.width = maxX - minX;
                out.height = maxY - minY;
                return out;
              }
              static lerp(out, from, to, ratio) {
                const x = from.x;
                const y = from.y;
                const w = from.width;
                const h = from.height;
                out.x = x + (to.x - x) * ratio;
                out.y = y + (to.y - y) * ratio;
                out.width = w + (to.width - w) * ratio;
                out.height = h + (to.height - h) * ratio;
                return out;
              }
              static intersection(out, one, other) {
                const axMin = one.x;
                const ayMin = one.y;
                const axMax = one.x + one.width;
                const ayMax = one.y + one.height;
                const bxMin = other.x;
                const byMin = other.y;
                const bxMax = other.x + other.width;
                const byMax = other.y + other.height;
                out.x = Math.max(axMin, bxMin);
                out.y = Math.max(ayMin, byMin);
                out.width = Math.min(axMax, bxMax) - out.x;
                out.height = Math.min(ayMax, byMax) - out.y;
                return out;
              }
              static union(out, one, other) {
                const x = one.x;
                const y = one.y;
                const w = one.width;
                const h = one.height;
                const bx = other.x;
                const by = other.y;
                const bw = other.width;
                const bh = other.height;
                out.x = Math.min(x, bx);
                out.y = Math.min(y, by);
                out.width = Math.max(x + w, bx + bw) - out.x;
                out.height = Math.max(y + h, by + bh) - out.y;
                return out;
              }
              static equals(a, b) {
                return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
              }
              get xMin() {
                return this.x;
              }
              set xMin(value) {
                this.width += this.x - value;
                this.x = value;
              }
              get yMin() {
                return this.y;
              }
              set yMin(value) {
                this.height += this.y - value;
                this.y = value;
              }
              get xMax() {
                return this.x + this.width;
              }
              set xMax(value) {
                this.width = value - this.x;
              }
              get yMax() {
                return this.y + this.height;
              }
              set yMax(value) {
                this.height = value - this.y;
              }
              get center() {
                return new Vec2(this.x + this.width * 0.5, this.y + this.height * 0.5);
              }
              set center(value) {
                this.x = value.x - this.width * 0.5;
                this.y = value.y - this.height * 0.5;
              }
              get origin() {
                return new Vec2(this.x, this.y);
              }
              set origin(value) {
                this.x = value.x;
                this.y = value.y;
              }
              get size() {
                return new Size(this.width, this.height);
              }
              set size(value) {
                this.width = value.width;
                this.height = value.height;
              }
              set z(val) {
                this.width = val;
              }
              get z() {
                return this.width;
              }
              set w(val) {
                this.height = val;
              }
              get w() {
                return this.height;
              }
              constructor(x, y, width, height) {
                super();
                if (typeof x === 'object') {
                  this.x = x.x;
                  this.y = x.y;
                  this.width = x.width;
                  this.height = x.height;
                } else {
                  this.x = x || 0;
                  this.y = y || 0;
                  this.width = width || 0;
                  this.height = height || 0;
                }
              }
              clone() {
                return new Rect(this.x, this.y, this.width, this.height);
              }
              set(x, y, width, height) {
                if (typeof x === 'object') {
                  this.x = x.x;
                  this.y = x.y;
                  this.width = x.width;
                  this.height = x.height;
                } else {
                  this.x = x || 0;
                  this.y = y || 0;
                  this.width = width || 0;
                  this.height = height || 0;
                }
                return this;
              }
              equals(other) {
                return this.x === other.x && this.y === other.y && this.width === other.width && this.height === other.height;
              }
              lerp(to, ratio) {
                const x = this.x;
                const y = this.y;
                const w = this.width;
                const h = this.height;
                this.x = x + (to.x - x) * ratio;
                this.y = y + (to.y - y) * ratio;
                this.width = w + (to.width - w) * ratio;
                this.height = h + (to.height - h) * ratio;
                return this;
              }
              toString() {
                return `(${this.x.toFixed(2)}, ${this.y.toFixed(2)}, ${this.width.toFixed(2)}, ${this.height.toFixed(2)})`;
              }
              intersects(other) {
                const maxax = this.x + this.width;
                const maxay = this.y + this.height;
                const maxbx = other.x + other.width;
                const maxby = other.y + other.height;
                return !(maxax < other.x || maxbx < this.x || maxay < other.y || maxby < this.y);
              }
              contains(point) {
                return this.x <= point.x && this.x + this.width >= point.x && this.y <= point.y && this.y + this.height >= point.y;
              }
              containsRect(other) {
                return this.x <= other.x && this.x + this.width >= other.x + other.width && this.y <= other.y && this.y + this.height >= other.y + other.height;
              }
              transformMat4(mat) {
                const ol = this.x;
                const ob = this.y;
                const or = ol + this.width;
                const ot = ob + this.height;
                const lbx = mat.m00 * ol + mat.m04 * ob + mat.m12;
                const lby = mat.m01 * ol + mat.m05 * ob + mat.m13;
                const rbx = mat.m00 * or + mat.m04 * ob + mat.m12;
                const rby = mat.m01 * or + mat.m05 * ob + mat.m13;
                const ltx = mat.m00 * ol + mat.m04 * ot + mat.m12;
                const lty = mat.m01 * ol + mat.m05 * ot + mat.m13;
                const rtx = mat.m00 * or + mat.m04 * ot + mat.m12;
                const rty = mat.m01 * or + mat.m05 * ot + mat.m13;
                const minX = Math.min(lbx, rbx, ltx, rtx);
                const maxX = Math.max(lbx, rbx, ltx, rtx);
                const minY = Math.min(lby, rby, lty, rty);
                const maxY = Math.max(lby, rby, lty, rty);
                this.x = minX;
                this.y = minY;
                this.width = maxX - minX;
                this.height = maxY - minY;
                return this;
              }
              transformMat4ToPoints(mat, out_lb, out_lt, out_rt, out_rb) {
                const ol = this.x;
                const ob = this.y;
                const or = ol + this.width;
                const ot = ob + this.height;
                out_lb.x = mat.m00 * ol + mat.m04 * ob + mat.m12;
                out_lb.y = mat.m01 * ol + mat.m05 * ob + mat.m13;
                out_rb.x = mat.m00 * or + mat.m04 * ob + mat.m12;
                out_rb.y = mat.m01 * or + mat.m05 * ob + mat.m13;
                out_lt.x = mat.m00 * ol + mat.m04 * ot + mat.m12;
                out_lt.y = mat.m01 * ol + mat.m05 * ot + mat.m13;
                out_rt.x = mat.m00 * or + mat.m04 * ot + mat.m12;
                out_rt.y = mat.m01 * or + mat.m05 * ot + mat.m13;
              }
            } exports('R', Rect);
            CCClass.fastDefine('cc.Rect', Rect, {
              x: 0,
              y: 0,
              width: 0,
              height: 0
            });
            legacyCC.Rect = Rect;
            function rect(x = 0, y = 0, width = 0, height = 0) {
              return new Rect(x, y, width, height);
            }
            legacyCC.rect = rect;

            const MATH_FLOAT_ARRAY = exports('a7', Float32Array );
            class MathBase extends ValueType {
              static createFloatArray(size) {
                return new MATH_FLOAT_ARRAY(size);
              }
              get array() {
                return this._array;
              }
            } exports('a8', MathBase);

            var math = /*#__PURE__*/Object.freeze({
                __proto__: null,
                bits: bits,
                Vec2: Vec2,
                v2: v2$1,
                Vec3: Vec3,
                v3: v3,
                Vec4: Vec4,
                v4: v4,
                Quat: Quat,
                quat: quat,
                Mat3: Mat3,
                Mat4: Mat4,
                mat4: mat4,
                AffineTransform: AffineTransform,
                Size: Size,
                size: size,
                Rect: Rect,
                rect: rect,
                Color: Color,
                color: color,
                preTransforms: preTransforms,
                HALF_PI: HALF_PI,
                TWO_PI: TWO_PI,
                EPSILON: EPSILON,
                equals: equals,
                approx: approx,
                clamp: clamp,
                clamp01: clamp01,
                lerp: lerp,
                toRadian: toRadian,
                toDegree: toDegree,
                random: random,
                setRandGenerator: setRandGenerator,
                randomRange: randomRange,
                randomRangeInt: randomRangeInt,
                pseudoRandom: pseudoRandom,
                pseudoRandomRange: pseudoRandomRange,
                pseudoRandomRangeInt: pseudoRandomRangeInt,
                nextPow2: nextPow2,
                repeat: repeat,
                pingPong: pingPong,
                inverseLerp: inverseLerp,
                absMaxComponent: absMaxComponent,
                absMax: absMax,
                enumerableProps: enumerableProps,
                floatToHalf: floatToHalf,
                halfToFloat: halfToFloat,
                MATH_FLOAT_ARRAY: MATH_FLOAT_ARRAY,
                MathBase: MathBase
            });
            exports('m', math);

            const X = new Vec3();
            const Y = new Vec3();
            const Z = new Vec3();
            const d = new Vec3();
            const min = new Vec3();
            const max$1 = new Vec3();
            const u = new Array(3);
            const e = new Array(3);
            function point_plane(point, plane_) {
              return Vec3.dot(plane_.n, point) - plane_.d;
            }
            function pt_point_plane(out, point, plane_) {
              const t = point_plane(point, plane_);
              return Vec3.subtract(out, point, Vec3.multiplyScalar(out, plane_.n, t));
            }
            function pt_point_aabb(out, point, aabb_) {
              Vec3.copy(out, point);
              Vec3.subtract(min, aabb_.center, aabb_.halfExtents);
              Vec3.add(max$1, aabb_.center, aabb_.halfExtents);
              out.x = out.x < min.x ? min.x : out.x;
              out.y = out.y < min.y ? min.y : out.y;
              out.z = out.z < min.z ? min.z : out.z;
              out.x = out.x > max$1.x ? max$1.x : out.x;
              out.y = out.y > max$1.y ? max$1.y : out.y;
              out.z = out.z > max$1.z ? max$1.z : out.z;
              return out;
            }
            function pt_point_obb(out, point, obb_) {
              Vec3.set(X, obb_.orientation.m00, obb_.orientation.m01, obb_.orientation.m02);
              Vec3.set(Y, obb_.orientation.m03, obb_.orientation.m04, obb_.orientation.m05);
              Vec3.set(Z, obb_.orientation.m06, obb_.orientation.m07, obb_.orientation.m08);
              u[0] = X;
              u[1] = Y;
              u[2] = Z;
              e[0] = obb_.halfExtents.x;
              e[1] = obb_.halfExtents.y;
              e[2] = obb_.halfExtents.z;
              Vec3.subtract(d, point, obb_.center);
              Vec3.set(out, obb_.center.x, obb_.center.y, obb_.center.z);
              for (let i = 0; i < 3; i++) {
                let dist = Vec3.dot(d, u[i]);
                if (dist > e[i]) {
                  dist = e[i];
                }
                if (dist < -e[i]) {
                  dist = -e[i];
                }
                out.x += dist * u[i].x;
                out.y += dist * u[i].y;
                out.z += dist * u[i].z;
              }
              return out;
            }
            function pt_point_line(out, point, linePointA, linePointB) {
              Vec3.subtract(X, linePointA, linePointB);
              const dir = X.clone();
              const dirSquaredLength = Vec3.lengthSqr(dir);
              if (dirSquaredLength === 0) {
                Vec3.copy(out, linePointA);
              } else {
                Vec3.subtract(X, point, linePointA);
                const t = Vec3.dot(X, dir) / dirSquaredLength;
                if (t < 0) {
                  Vec3.copy(out, linePointA);
                } else if (t > 1) {
                  Vec3.copy(out, linePointB);
                } else {
                  Vec3.scaleAndAdd(out, linePointA, dir, t);
                }
              }
            }

            var distance = /*#__PURE__*/Object.freeze({
                __proto__: null,
                point_plane: point_plane,
                pt_point_plane: pt_point_plane,
                pt_point_aabb: pt_point_aabb,
                pt_point_obb: pt_point_obb,
                pt_point_line: pt_point_line
            });

            var enums = {
              SHAPE_RAY: 1 << 0,
              SHAPE_LINE: 1 << 1,
              SHAPE_SPHERE: 1 << 2,
              SHAPE_AABB: 1 << 3,
              SHAPE_OBB: 1 << 4,
              SHAPE_PLANE: 1 << 5,
              SHAPE_TRIANGLE: 1 << 6,
              SHAPE_FRUSTUM: 1 << 7,
              SHAPE_FRUSTUM_ACCURATE: 1 << 8,
              SHAPE_CAPSULE: 1 << 9,
              SHAPE_SPLINE: 1 << 10
            };

            class Line {
              static create(sx, sy, sz, ex, ey, ez) {
                return new Line(sx, sy, sz, ex, ey, ez);
              }
              static clone(a) {
                return new Line(a.s.x, a.s.y, a.s.z, a.e.x, a.e.y, a.e.z);
              }
              static copy(out, a) {
                Vec3.copy(out.s, a.s);
                Vec3.copy(out.e, a.e);
                return out;
              }
              static fromPoints(out, start, end) {
                Vec3.copy(out.s, start);
                Vec3.copy(out.e, end);
                return out;
              }
              static set(out, sx, sy, sz, ex, ey, ez) {
                out.s.x = sx;
                out.s.y = sy;
                out.s.z = sz;
                out.e.x = ex;
                out.e.y = ey;
                out.e.z = ez;
                return out;
              }
              static len(a) {
                return Vec3.distance(a.s, a.e);
              }
              get type() {
                return this._type;
              }
              constructor(sx = 0, sy = 0, sz = 0, ex = 0, ey = 0, ez = -1) {
                this.s = void 0;
                this.e = void 0;
                this._type = void 0;
                this._type = enums.SHAPE_LINE;
                this.s = new Vec3(sx, sy, sz);
                this.e = new Vec3(ex, ey, ez);
              }
              length() {
                return Vec3.distance(this.s, this.e);
              }
            }

            class Ray {
              static create(ox = 0, oy = 0, oz = 0, dx = 0, dy = 0, dz = 1) {
                return new Ray(ox, oy, oz, dx, dy, dz);
              }
              static clone(a) {
                return new Ray(a.o.x, a.o.y, a.o.z, a.d.x, a.d.y, a.d.z);
              }
              static copy(out, a) {
                Vec3.copy(out.o, a.o);
                Vec3.copy(out.d, a.d);
                return out;
              }
              static fromPoints(out, origin, target) {
                Vec3.copy(out.o, origin);
                Vec3.normalize(out.d, Vec3.subtract(out.d, target, origin));
                return out;
              }
              static set(out, ox, oy, oz, dx, dy, dz) {
                out.o.x = ox;
                out.o.y = oy;
                out.o.z = oz;
                out.d.x = dx;
                out.d.y = dy;
                out.d.z = dz;
                return out;
              }
              get type() {
                return this._type;
              }
              constructor(ox = 0, oy = 0, oz = 0, dx = 0, dy = 0, dz = -1) {
                this.o = void 0;
                this.d = void 0;
                this._type = void 0;
                this._type = enums.SHAPE_RAY;
                this.o = new Vec3(ox, oy, oz);
                this.d = new Vec3(dx, dy, dz);
              }
              computeHit(out, distance) {
                Vec3.normalize(out, this.d);
                Vec3.scaleAndAdd(out, this.o, out, distance);
              }
            } exports('ci', Ray);

            const _v3_tmp$2 = new Vec3();
            const _offset = new Vec3();
            const _min = new Vec3();
            const _max = new Vec3();
            function maxComponent(v) {
              return Math.max(Math.max(v.x, v.y), v.z);
            }
            class Sphere {
              static create(cx, cy, cz, r) {
                return new Sphere(cx, cy, cz, r);
              }
              static clone(p) {
                return new Sphere(p.center.x, p.center.y, p.center.z, p.radius);
              }
              static copy(out, p) {
                Vec3.copy(out.center, p.center);
                out.radius = p.radius;
                return out;
              }
              static fromPoints(out, minPos, maxPos) {
                Vec3.multiplyScalar(out.center, Vec3.add(_v3_tmp$2, minPos, maxPos), 0.5);
                out.radius = Vec3.subtract(_v3_tmp$2, maxPos, minPos).length() * 0.5;
                return out;
              }
              static set(out, cx, cy, cz, r) {
                out.center.x = cx;
                out.center.y = cy;
                out.center.z = cz;
                out.radius = r;
                return out;
              }
              get center() {
                return this._center;
              }
              set center(val) {
                this._center = val;
              }
              get radius() {
                return this._radius;
              }
              set radius(val) {
                this._radius = val;
              }
              get type() {
                return this._type;
              }
              constructor(cx = 0, cy = 0, cz = 0, r = 1) {
                this._center = new Vec3(0, 0, 0);
                this._radius = 0;
                this._type = void 0;
                this._type = enums.SHAPE_SPHERE;
                this._center = new Vec3(cx, cy, cz);
                this._radius = r;
              }
              destroy() {}
              clone() {
                return Sphere.clone(this);
              }
              copy(a) {
                return Sphere.copy(this, a);
              }
              getBoundary(minPos, maxPos) {
                Vec3.set(minPos, this.center.x - this.radius, this.center.y - this.radius, this.center.z - this.radius);
                Vec3.set(maxPos, this.center.x + this.radius, this.center.y + this.radius, this.center.z + this.radius);
              }
              transform(m, pos, rot, scale, out) {
                Vec3.transformMat4(out.center, this.center, m);
                out.radius = this.radius * maxComponent(scale);
              }
              translateAndRotate(m, rot, out) {
                Vec3.transformMat4(out.center, this.center, m);
              }
              setScale(scale, out) {
                out.radius = this.radius * maxComponent(scale);
              }
              mergePoint(point) {
                if (this.radius < 0.0) {
                  this.center.set(point);
                  this.radius = 0.0;
                }
                Vec3.subtract(_offset, point, this.center);
                const dist = _offset.length();
                if (dist > this.radius) {
                  const half = (dist - this.radius) * 0.5;
                  this.radius += half;
                  Vec3.multiplyScalar(_offset, _offset, half / dist);
                  Vec3.add(this.center, this.center, _offset);
                }
              }
              mergePoints(points) {
                const length = points.length;
                if (length < 1) return;
                this.radius = -1.0;
                for (let i = 0; i < length; i++) {
                  this.mergePoint(points[i]);
                }
              }
              mergeAABB(a) {
                a.getBoundary(_min, _max);
                this.mergePoint(_min);
                this.mergePoint(_max);
              }
            } exports('bF', Sphere);

            const rayPlane = function () {
              return function (ray, plane) {
                const denom = Vec3.dot(ray.d, plane.n);
                if (Math.abs(denom) < Number.EPSILON) {
                  return 0;
                }
                const d = point_plane(ray.o, plane);
                const t = -d / denom;
                if (t < 0) {
                  return 0;
                }
                return t;
              };
            }();
            const rayTriangle = function () {
              const ab = new Vec3(0, 0, 0);
              const ac = new Vec3(0, 0, 0);
              const pvec = new Vec3(0, 0, 0);
              const tvec = new Vec3(0, 0, 0);
              const qvec = new Vec3(0, 0, 0);
              return function (ray, triangle, doubleSided) {
                Vec3.subtract(ab, triangle.b, triangle.a);
                Vec3.subtract(ac, triangle.c, triangle.a);
                Vec3.cross(pvec, ray.d, ac);
                const det = Vec3.dot(ab, pvec);
                if (det < Number.EPSILON && (!doubleSided || det > -Number.EPSILON)) {
                  return 0;
                }
                const inv_det = 1 / det;
                Vec3.subtract(tvec, ray.o, triangle.a);
                const u = Vec3.dot(tvec, pvec) * inv_det;
                if (u < 0 || u > 1) {
                  return 0;
                }
                Vec3.cross(qvec, tvec, ab);
                const v = Vec3.dot(ray.d, qvec) * inv_det;
                if (v < 0 || u + v > 1) {
                  return 0;
                }
                const t = Vec3.dot(ac, qvec) * inv_det;
                return t < 0 ? 0 : t;
              };
            }();
            const raySphere = function () {
              const e = new Vec3(0, 0, 0);
              return function (ray, sphere) {
                const r = sphere.radius;
                const c = sphere.center;
                const o = ray.o;
                const d = ray.d;
                const rSq = r * r;
                Vec3.subtract(e, c, o);
                const eSq = e.lengthSqr();
                const aLength = Vec3.dot(e, d);
                const fSq = rSq - (eSq - aLength * aLength);
                if (fSq < 0) {
                  return 0;
                }
                const f = Math.sqrt(fSq);
                const t = eSq < rSq ? aLength + f : aLength - f;
                if (t < 0) {
                  return 0;
                }
                return t;
              };
            }();
            const rayAABB = function () {
              const min = new Vec3();
              const max = new Vec3();
              return function (ray, aabb) {
                Vec3.subtract(min, aabb.center, aabb.halfExtents);
                Vec3.add(max, aabb.center, aabb.halfExtents);
                return rayAABB2(ray, min, max);
              };
            }();
            function rayAABB2(ray, min, max) {
              const o = ray.o;
              const d = ray.d;
              const ix = 1 / d.x;
              const iy = 1 / d.y;
              const iz = 1 / d.z;
              const t1 = (min.x - o.x) * ix;
              const t2 = (max.x - o.x) * ix;
              const t3 = (min.y - o.y) * iy;
              const t4 = (max.y - o.y) * iy;
              const t5 = (min.z - o.z) * iz;
              const t6 = (max.z - o.z) * iz;
              const tmin = Math.max(Math.max(Math.min(t1, t2), Math.min(t3, t4)), Math.min(t5, t6));
              const tmax = Math.min(Math.min(Math.max(t1, t2), Math.max(t3, t4)), Math.max(t5, t6));
              if (tmax < 0 || tmin > tmax) {
                return 0;
              }
              return tmin > 0 ? tmin : tmax;
            }
            const rayOBB = function () {
              let center = new Vec3();
              let o = new Vec3();
              let d = new Vec3();
              const X = new Vec3();
              const Y = new Vec3();
              const Z = new Vec3();
              const p = new Vec3();
              const size = new Array(3);
              const f = new Array(3);
              const e = new Array(3);
              const t = new Array(6);
              return function (ray, obb) {
                size[0] = obb.halfExtents.x;
                size[1] = obb.halfExtents.y;
                size[2] = obb.halfExtents.z;
                center = obb.center;
                o = ray.o;
                d = ray.d;
                Vec3.set(X, obb.orientation.m00, obb.orientation.m01, obb.orientation.m02);
                Vec3.set(Y, obb.orientation.m03, obb.orientation.m04, obb.orientation.m05);
                Vec3.set(Z, obb.orientation.m06, obb.orientation.m07, obb.orientation.m08);
                Vec3.subtract(p, center, o);
                f[0] = Vec3.dot(X, d);
                f[1] = Vec3.dot(Y, d);
                f[2] = Vec3.dot(Z, d);
                e[0] = Vec3.dot(X, p);
                e[1] = Vec3.dot(Y, p);
                e[2] = Vec3.dot(Z, p);
                for (let i = 0; i < 3; ++i) {
                  if (f[i] === 0) {
                    if (-e[i] - size[i] > 0 || -e[i] + size[i] < 0) {
                      return 0;
                    }
                    f[i] = 0.0000001;
                  }
                  t[i * 2 + 0] = (e[i] + size[i]) / f[i];
                  t[i * 2 + 1] = (e[i] - size[i]) / f[i];
                }
                const tmin = Math.max(Math.max(Math.min(t[0], t[1]), Math.min(t[2], t[3])), Math.min(t[4], t[5]));
                const tmax = Math.min(Math.min(Math.max(t[0], t[1]), Math.max(t[2], t[3])), Math.max(t[4], t[5]));
                if (tmax < 0 || tmin > tmax) {
                  return 0;
                }
                return tmin > 0 ? tmin : tmax;
              };
            }();
            const rayCapsule = function () {
              const v3_0 = new Vec3();
              const v3_1 = new Vec3();
              const v3_2 = new Vec3();
              const v3_3 = new Vec3();
              const v3_4 = new Vec3();
              const v3_5 = new Vec3();
              const v3_6 = new Vec3();
              const sphere_0 = new Sphere();
              return function (ray, capsule) {
                const A = capsule.ellipseCenter0;
                const B = capsule.ellipseCenter1;
                const BA = Vec3.subtract(v3_1, B, A);
                if (BA.length() < EPSILON) {
                  sphere_0.radius = capsule.radius;
                  sphere_0.center.set(capsule.ellipseCenter0);
                  return intersect.raySphere(ray, sphere_0);
                }
                const O = ray.o;
                const OA = Vec3.subtract(v3_2, O, A);
                const vRayNorm = Vec3.normalize(v3_0, ray.d);
                const VxBA = Vec3.cross(v3_3, vRayNorm, BA);
                const a = VxBA.lengthSqr();
                if (a === 0) {
                  sphere_0.radius = capsule.radius;
                  const BO = Vec3.subtract(v3_4, B, O);
                  if (OA.lengthSqr() < BO.lengthSqr()) {
                    sphere_0.center.set(A);
                  } else {
                    sphere_0.center.set(B);
                  }
                  return intersect.raySphere(ray, sphere_0);
                }
                const OAxBA = Vec3.cross(v3_4, OA, BA);
                const ab2 = BA.lengthSqr();
                const b = 2 * Vec3.dot(VxBA, OAxBA);
                const radiusSqr = capsule.radius * capsule.radius;
                const c = OAxBA.lengthSqr() - radiusSqr * ab2;
                const d = b * b - 4 * a * c;
                if (d < 0) {
                  return 0;
                }
                const t = (-b - Math.sqrt(d)) / (2 * a);
                if (t < 0) {
                  sphere_0.radius = capsule.radius;
                  const BO = Vec3.subtract(v3_5, B, O);
                  if (OA.lengthSqr() < BO.lengthSqr()) {
                    sphere_0.center.set(capsule.ellipseCenter0);
                  } else {
                    sphere_0.center.set(capsule.ellipseCenter1);
                  }
                  return intersect.raySphere(ray, sphere_0);
                } else {
                  const iPos = Vec3.scaleAndAdd(v3_5, ray.o, vRayNorm, t);
                  const iPosLen = Vec3.subtract(v3_6, iPos, A);
                  const tLimit = Vec3.dot(iPosLen, BA) / ab2;
                  if (tLimit >= 0 && tLimit <= 1) {
                    return t;
                  } else if (tLimit < 0) {
                    sphere_0.radius = capsule.radius;
                    sphere_0.center.set(capsule.ellipseCenter0);
                    return intersect.raySphere(ray, sphere_0);
                  } else if (tLimit > 1) {
                    sphere_0.radius = capsule.radius;
                    sphere_0.center.set(capsule.ellipseCenter1);
                    return intersect.raySphere(ray, sphere_0);
                  } else {
                    return 0;
                  }
                }
              };
            }();
            const linePlane = function () {
              const ab = new Vec3(0, 0, 0);
              return function (line, plane) {
                Vec3.subtract(ab, line.e, line.s);
                const t = -point_plane(line.s, plane) / Vec3.dot(ab, plane.n);
                if (t < 0 || t > 1) {
                  return 0;
                }
                return t;
              };
            }();
            const lineTriangle = function () {
              const ab = new Vec3(0, 0, 0);
              const ac = new Vec3(0, 0, 0);
              const qp = new Vec3(0, 0, 0);
              const ap = new Vec3(0, 0, 0);
              const n = new Vec3(0, 0, 0);
              const e = new Vec3(0, 0, 0);
              return function (line, triangle, outPt) {
                Vec3.subtract(ab, triangle.b, triangle.a);
                Vec3.subtract(ac, triangle.c, triangle.a);
                Vec3.subtract(qp, line.s, line.e);
                Vec3.cross(n, ab, ac);
                const det = Vec3.dot(qp, n);
                if (det <= 0.0) {
                  return 0;
                }
                Vec3.subtract(ap, line.s, triangle.a);
                const t = Vec3.dot(ap, n);
                if (t < 0 || t > det) {
                  return 0;
                }
                Vec3.cross(e, qp, ap);
                let v = Vec3.dot(ac, e);
                if (v < 0 || v > det) {
                  return 0;
                }
                let w = -Vec3.dot(ab, e);
                if (w < 0.0 || v + w > det) {
                  return 0;
                }
                if (outPt) {
                  const invDet = 1.0 / det;
                  v *= invDet;
                  w *= invDet;
                  const u = 1.0 - v - w;
                  Vec3.set(outPt, triangle.a.x * u + triangle.b.x * v + triangle.c.x * w, triangle.a.y * u + triangle.b.y * v + triangle.c.y * w, triangle.a.z * u + triangle.b.z * v + triangle.c.z * w);
                }
                return 1;
              };
            }();
            const r_t = new Ray();
            function lineAABB(line, aabb) {
              r_t.o.set(line.s);
              Vec3.subtract(r_t.d, line.e, line.s);
              r_t.d.normalize();
              const min = rayAABB(r_t, aabb);
              const len = line.length();
              if (min <= len) {
                return min;
              } else {
                return 0;
              }
            }
            function lineOBB(line, obb) {
              r_t.o.set(line.s);
              Vec3.subtract(r_t.d, line.e, line.s);
              r_t.d.normalize();
              const min = rayOBB(r_t, obb);
              const len = line.length();
              if (min <= len) {
                return min;
              } else {
                return 0;
              }
            }
            function lineSphere(line, sphere) {
              r_t.o.set(line.s);
              Vec3.subtract(r_t.d, line.e, line.s);
              r_t.d.normalize();
              const min = raySphere(r_t, sphere);
              const len = line.length();
              if (min <= len) {
                return min;
              } else {
                return 0;
              }
            }
            const aabbWithAABB = function () {
              const aMin = new Vec3();
              const aMax = new Vec3();
              const bMin = new Vec3();
              const bMax = new Vec3();
              return function (aabb1, aabb2) {
                Vec3.subtract(aMin, aabb1.center, aabb1.halfExtents);
                Vec3.add(aMax, aabb1.center, aabb1.halfExtents);
                Vec3.subtract(bMin, aabb2.center, aabb2.halfExtents);
                Vec3.add(bMax, aabb2.center, aabb2.halfExtents);
                return aMin.x <= bMax.x && aMax.x >= bMin.x && aMin.y <= bMax.y && aMax.y >= bMin.y && aMin.z <= bMax.z && aMax.z >= bMin.z;
              };
            }();
            function getAABBVertices(min, max, out) {
              Vec3.set(out[0], min.x, max.y, max.z);
              Vec3.set(out[1], min.x, max.y, min.z);
              Vec3.set(out[2], min.x, min.y, max.z);
              Vec3.set(out[3], min.x, min.y, min.z);
              Vec3.set(out[4], max.x, max.y, max.z);
              Vec3.set(out[5], max.x, max.y, min.z);
              Vec3.set(out[6], max.x, min.y, max.z);
              Vec3.set(out[7], max.x, min.y, min.z);
            }
            function getOBBVertices(c, e, a1, a2, a3, out) {
              Vec3.set(out[0], c.x + a1.x * e.x + a2.x * e.y + a3.x * e.z, c.y + a1.y * e.x + a2.y * e.y + a3.y * e.z, c.z + a1.z * e.x + a2.z * e.y + a3.z * e.z);
              Vec3.set(out[1], c.x - a1.x * e.x + a2.x * e.y + a3.x * e.z, c.y - a1.y * e.x + a2.y * e.y + a3.y * e.z, c.z - a1.z * e.x + a2.z * e.y + a3.z * e.z);
              Vec3.set(out[2], c.x + a1.x * e.x - a2.x * e.y + a3.x * e.z, c.y + a1.y * e.x - a2.y * e.y + a3.y * e.z, c.z + a1.z * e.x - a2.z * e.y + a3.z * e.z);
              Vec3.set(out[3], c.x + a1.x * e.x + a2.x * e.y - a3.x * e.z, c.y + a1.y * e.x + a2.y * e.y - a3.y * e.z, c.z + a1.z * e.x + a2.z * e.y - a3.z * e.z);
              Vec3.set(out[4], c.x - a1.x * e.x - a2.x * e.y - a3.x * e.z, c.y - a1.y * e.x - a2.y * e.y - a3.y * e.z, c.z - a1.z * e.x - a2.z * e.y - a3.z * e.z);
              Vec3.set(out[5], c.x + a1.x * e.x - a2.x * e.y - a3.x * e.z, c.y + a1.y * e.x - a2.y * e.y - a3.y * e.z, c.z + a1.z * e.x - a2.z * e.y - a3.z * e.z);
              Vec3.set(out[6], c.x - a1.x * e.x + a2.x * e.y - a3.x * e.z, c.y - a1.y * e.x + a2.y * e.y - a3.y * e.z, c.z - a1.z * e.x + a2.z * e.y - a3.z * e.z);
              Vec3.set(out[7], c.x - a1.x * e.x - a2.x * e.y + a3.x * e.z, c.y - a1.y * e.x - a2.y * e.y + a3.y * e.z, c.z - a1.z * e.x - a2.z * e.y + a3.z * e.z);
            }
            function getInterval(vertices, axis) {
              let min = Vec3.dot(axis, vertices[0]);
              let max = min;
              for (let i = 1; i < 8; ++i) {
                const projection = Vec3.dot(axis, vertices[i]);
                min = projection < min ? projection : min;
                max = projection > max ? projection : max;
              }
              return [min, max];
            }
            const aabbWithOBB = function () {
              const test = new Array(15);
              for (let i = 0; i < 15; i++) {
                test[i] = new Vec3(0, 0, 0);
              }
              const vertices = new Array(8);
              const vertices2 = new Array(8);
              for (let i = 0; i < 8; i++) {
                vertices[i] = new Vec3(0, 0, 0);
                vertices2[i] = new Vec3(0, 0, 0);
              }
              const min = new Vec3();
              const max = new Vec3();
              return function (aabb, obb) {
                Vec3.set(test[0], 1, 0, 0);
                Vec3.set(test[1], 0, 1, 0);
                Vec3.set(test[2], 0, 0, 1);
                Vec3.set(test[3], obb.orientation.m00, obb.orientation.m01, obb.orientation.m02);
                Vec3.set(test[4], obb.orientation.m03, obb.orientation.m04, obb.orientation.m05);
                Vec3.set(test[5], obb.orientation.m06, obb.orientation.m07, obb.orientation.m08);
                for (let i = 0; i < 3; ++i) {
                  Vec3.cross(test[6 + i * 3 + 0], test[i], test[3]);
                  Vec3.cross(test[6 + i * 3 + 1], test[i], test[4]);
                  Vec3.cross(test[6 + i * 3 + 1], test[i], test[5]);
                }
                Vec3.subtract(min, aabb.center, aabb.halfExtents);
                Vec3.add(max, aabb.center, aabb.halfExtents);
                getAABBVertices(min, max, vertices);
                getOBBVertices(obb.center, obb.halfExtents, test[3], test[4], test[5], vertices2);
                for (let j = 0; j < 15; ++j) {
                  const a = getInterval(vertices, test[j]);
                  const b = getInterval(vertices2, test[j]);
                  if (b[0] > a[1] || a[0] > b[1]) {
                    return 0;
                  }
                }
                return 1;
              };
            }();
            const aabbPlane = function (aabb, plane) {
              const r = aabb.halfExtents.x * Math.abs(plane.n.x) + aabb.halfExtents.y * Math.abs(plane.n.y) + aabb.halfExtents.z * Math.abs(plane.n.z);
              const dot = Vec3.dot(plane.n, aabb.center);
              if (dot + r < plane.d) {
                return -1;
              } else if (dot - r > plane.d) {
                return 0;
              }
              return 1;
            };
            const aabbFrustum = function (aabb, frustum) {
              for (let i = 0; i < frustum.planes.length; i++) {
                if (aabbPlane(aabb, frustum.planes[i]) === -1) {
                  return 0;
                }
              }
              return 1;
            };
            const aabbFrustumCompletelyInside = function (aabb, frustum) {
              for (let i = 0; i < frustum.planes.length; i++) {
                if (aabbPlane(aabb, frustum.planes[i]) !== 0) {
                  return 0;
                }
              }
              return 1;
            };
            const aabbFrustumAccurate = function () {
              const tmp = new Array(8);
              let out1 = 0;
              let out2 = 0;
              for (let i = 0; i < tmp.length; i++) {
                tmp[i] = new Vec3(0, 0, 0);
              }
              return function (aabb, frustum) {
                let result = 0;
                let intersects = false;
                for (let i = 0; i < frustum.planes.length; i++) {
                  result = aabbPlane(aabb, frustum.planes[i]);
                  if (result === -1) return 0;else if (result === 1) {
                    intersects = true;
                  }
                }
                if (!intersects) {
                  return 1;
                }
                for (let i = 0; i < frustum.vertices.length; i++) {
                  Vec3.subtract(tmp[i], frustum.vertices[i], aabb.center);
                }
                out1 = 0, out2 = 0;
                for (let i = 0; i < frustum.vertices.length; i++) {
                  if (tmp[i].x > aabb.halfExtents.x) {
                    out1++;
                  } else if (tmp[i].x < -aabb.halfExtents.x) {
                    out2++;
                  }
                }
                if (out1 === frustum.vertices.length || out2 === frustum.vertices.length) {
                  return 0;
                }
                out1 = 0;
                out2 = 0;
                for (let i = 0; i < frustum.vertices.length; i++) {
                  if (tmp[i].y > aabb.halfExtents.y) {
                    out1++;
                  } else if (tmp[i].y < -aabb.halfExtents.y) {
                    out2++;
                  }
                }
                if (out1 === frustum.vertices.length || out2 === frustum.vertices.length) {
                  return 0;
                }
                out1 = 0;
                out2 = 0;
                for (let i = 0; i < frustum.vertices.length; i++) {
                  if (tmp[i].z > aabb.halfExtents.z) {
                    out1++;
                  } else if (tmp[i].z < -aabb.halfExtents.z) {
                    out2++;
                  }
                }
                if (out1 === frustum.vertices.length || out2 === frustum.vertices.length) {
                  return 0;
                }
                return 1;
              };
            }();
            const obbPoint = function () {
              const tmp = new Vec3(0, 0, 0);
              const m3 = new Mat3();
              const lessThan = function (a, b) {
                return Math.abs(a.x) < b.x && Math.abs(a.y) < b.y && Math.abs(a.z) < b.z;
              };
              return function (obb, point) {
                Vec3.subtract(tmp, point, obb.center);
                Vec3.transformMat3(tmp, tmp, Mat3.transpose(m3, obb.orientation));
                return lessThan(tmp, obb.halfExtents);
              };
            }();
            const obbPlane = function () {
              const absDot = function (n, x, y, z) {
                return Math.abs(n.x * x + n.y * y + n.z * z);
              };
              return function (obb, plane) {
                const r = obb.halfExtents.x * absDot(plane.n, obb.orientation.m00, obb.orientation.m01, obb.orientation.m02) + obb.halfExtents.y * absDot(plane.n, obb.orientation.m03, obb.orientation.m04, obb.orientation.m05) + obb.halfExtents.z * absDot(plane.n, obb.orientation.m06, obb.orientation.m07, obb.orientation.m08);
                const dot = Vec3.dot(plane.n, obb.center);
                if (dot + r < plane.d) {
                  return -1;
                } else if (dot - r > plane.d) {
                  return 0;
                }
                return 1;
              };
            }();
            const obbFrustum = function (obb, frustum) {
              for (let i = 0; i < frustum.planes.length; i++) {
                if (obbPlane(obb, frustum.planes[i]) === -1) {
                  return 0;
                }
              }
              return 1;
            };
            const obbFrustumAccurate = function () {
              const tmp = new Array(8);
              let dist = 0;
              let out1 = 0;
              let out2 = 0;
              for (let i = 0; i < tmp.length; i++) {
                tmp[i] = new Vec3(0, 0, 0);
              }
              const dot = function (n, x, y, z) {
                return n.x * x + n.y * y + n.z * z;
              };
              return function (obb, frustum) {
                let result = 0;
                let intersects = false;
                for (let i = 0; i < frustum.planes.length; i++) {
                  result = obbPlane(obb, frustum.planes[i]);
                  if (result === -1) return 0;else if (result === 1) {
                    intersects = true;
                  }
                }
                if (!intersects) {
                  return 1;
                }
                for (let i = 0; i < frustum.vertices.length; i++) {
                  Vec3.subtract(tmp[i], frustum.vertices[i], obb.center);
                }
                out1 = 0, out2 = 0;
                for (let i = 0; i < frustum.vertices.length; i++) {
                  dist = dot(tmp[i], obb.orientation.m00, obb.orientation.m01, obb.orientation.m02);
                  if (dist > obb.halfExtents.x) {
                    out1++;
                  } else if (dist < -obb.halfExtents.x) {
                    out2++;
                  }
                }
                if (out1 === frustum.vertices.length || out2 === frustum.vertices.length) {
                  return 0;
                }
                out1 = 0;
                out2 = 0;
                for (let i = 0; i < frustum.vertices.length; i++) {
                  dist = dot(tmp[i], obb.orientation.m03, obb.orientation.m04, obb.orientation.m05);
                  if (dist > obb.halfExtents.y) {
                    out1++;
                  } else if (dist < -obb.halfExtents.y) {
                    out2++;
                  }
                }
                if (out1 === frustum.vertices.length || out2 === frustum.vertices.length) {
                  return 0;
                }
                out1 = 0;
                out2 = 0;
                for (let i = 0; i < frustum.vertices.length; i++) {
                  dist = dot(tmp[i], obb.orientation.m06, obb.orientation.m07, obb.orientation.m08);
                  if (dist > obb.halfExtents.z) {
                    out1++;
                  } else if (dist < -obb.halfExtents.z) {
                    out2++;
                  }
                }
                if (out1 === frustum.vertices.length || out2 === frustum.vertices.length) {
                  return 0;
                }
                return 1;
              };
            }();
            const obbWithOBB = function () {
              const test = new Array(15);
              for (let i = 0; i < 15; i++) {
                test[i] = new Vec3(0, 0, 0);
              }
              const vertices = new Array(8);
              const vertices2 = new Array(8);
              for (let i = 0; i < 8; i++) {
                vertices[i] = new Vec3(0, 0, 0);
                vertices2[i] = new Vec3(0, 0, 0);
              }
              return function (obb1, obb2) {
                Vec3.set(test[0], obb1.orientation.m00, obb1.orientation.m01, obb1.orientation.m02);
                Vec3.set(test[1], obb1.orientation.m03, obb1.orientation.m04, obb1.orientation.m05);
                Vec3.set(test[2], obb1.orientation.m06, obb1.orientation.m07, obb1.orientation.m08);
                Vec3.set(test[3], obb2.orientation.m00, obb2.orientation.m01, obb2.orientation.m02);
                Vec3.set(test[4], obb2.orientation.m03, obb2.orientation.m04, obb2.orientation.m05);
                Vec3.set(test[5], obb2.orientation.m06, obb2.orientation.m07, obb2.orientation.m08);
                for (let i = 0; i < 3; ++i) {
                  Vec3.cross(test[6 + i * 3 + 0], test[i], test[3]);
                  Vec3.cross(test[6 + i * 3 + 1], test[i], test[4]);
                  Vec3.cross(test[6 + i * 3 + 2], test[i], test[5]);
                }
                getOBBVertices(obb1.center, obb1.halfExtents, test[0], test[1], test[2], vertices);
                getOBBVertices(obb2.center, obb2.halfExtents, test[3], test[4], test[5], vertices2);
                for (let i = 0; i < 15; ++i) {
                  const a = getInterval(vertices, test[i]);
                  const b = getInterval(vertices2, test[i]);
                  if (b[0] > a[1] || a[0] > b[1]) {
                    return 0;
                  }
                }
                return 1;
              };
            }();
            const obbCapsule = function () {
              const sphere_0 = new Sphere();
              const v3_0 = new Vec3();
              const v3_1 = new Vec3();
              const v3_2 = new Vec3();
              const v3_verts8 = new Array(8);
              for (let i = 0; i < 8; i++) {
                v3_verts8[i] = new Vec3();
              }
              const v3_axis8 = new Array(8);
              for (let i = 0; i < 8; i++) {
                v3_axis8[i] = new Vec3();
              }
              return function (obb, capsule) {
                const h = Vec3.squaredDistance(capsule.ellipseCenter0, capsule.ellipseCenter1);
                if (h === 0) {
                  sphere_0.radius = capsule.radius;
                  sphere_0.center.set(capsule.ellipseCenter0);
                  return intersect.sphereOBB(sphere_0, obb);
                } else {
                  v3_0.x = obb.orientation.m00;
                  v3_0.y = obb.orientation.m01;
                  v3_0.z = obb.orientation.m02;
                  v3_1.x = obb.orientation.m03;
                  v3_1.y = obb.orientation.m04;
                  v3_1.z = obb.orientation.m05;
                  v3_2.x = obb.orientation.m06;
                  v3_2.y = obb.orientation.m07;
                  v3_2.z = obb.orientation.m08;
                  getOBBVertices(obb.center, obb.halfExtents, v3_0, v3_1, v3_2, v3_verts8);
                  const axes = v3_axis8;
                  const a0 = Vec3.copy(axes[0], v3_0);
                  const a1 = Vec3.copy(axes[1], v3_1);
                  const a2 = Vec3.copy(axes[2], v3_2);
                  const C = Vec3.subtract(axes[3], capsule.center, obb.center);
                  C.normalize();
                  const B = Vec3.subtract(axes[4], capsule.ellipseCenter0, capsule.ellipseCenter1);
                  B.normalize();
                  Vec3.cross(axes[5], a0, B);
                  Vec3.cross(axes[6], a1, B);
                  Vec3.cross(axes[7], a2, B);
                  for (let i = 0; i < 8; ++i) {
                    const a = getInterval(v3_verts8, axes[i]);
                    const d0 = Vec3.dot(axes[i], capsule.ellipseCenter0);
                    const d1 = Vec3.dot(axes[i], capsule.ellipseCenter1);
                    const max_d = Math.max(d0, d1);
                    const min_d = Math.min(d0, d1);
                    const d_min = min_d - capsule.radius;
                    const d_max = max_d + capsule.radius;
                    if (d_min > a[1] || a[0] > d_max) {
                      return 0;
                    }
                  }
                  return 1;
                }
              };
            }();
            const spherePlane = function (sphere, plane) {
              const dot = Vec3.dot(plane.n, sphere.center);
              const r = sphere.radius * plane.n.length();
              if (dot + r < plane.d) {
                return -1;
              } else if (dot - r > plane.d) {
                return 0;
              }
              return 1;
            };
            const sphereFrustum = function (sphere, frustum) {
              for (let i = 0; i < frustum.planes.length; i++) {
                if (spherePlane(sphere, frustum.planes[i]) === -1) {
                  return 0;
                }
              }
              return 1;
            };
            const sphereFrustumAccurate = function () {
              const pt = new Vec3(0, 0, 0);
              const map = [1, -1, 1, -1, 1, -1];
              return function (sphere, frustum) {
                for (let i = 0; i < 6; i++) {
                  const plane = frustum.planes[i];
                  const r = sphere.radius;
                  const c = sphere.center;
                  const n = plane.n;
                  const d = plane.d;
                  const dot = Vec3.dot(n, c);
                  if (dot + r < d) return 0;else if (dot - r > d) {
                    continue;
                  }
                  Vec3.add(pt, c, Vec3.multiplyScalar(pt, n, r));
                  for (let j = 0; j < 6; j++) {
                    if (j === i || j === i + map[i]) {
                      continue;
                    }
                    const test = frustum.planes[j];
                    if (Vec3.dot(test.n, pt) < test.d) {
                      return 0;
                    }
                  }
                }
                return 1;
              };
            }();
            const sphereWithSphere = function (sphere0, sphere1) {
              const r = sphere0.radius + sphere1.radius;
              return Vec3.squaredDistance(sphere0.center, sphere1.center) < r * r;
            };
            const sphereAABB = function () {
              const pt = new Vec3();
              return function (sphere, aabb) {
                pt_point_aabb(pt, sphere.center, aabb);
                return Vec3.squaredDistance(sphere.center, pt) < sphere.radius * sphere.radius;
              };
            }();
            const sphereOBB = function () {
              const pt = new Vec3();
              return function (sphere, obb) {
                pt_point_obb(pt, sphere.center, obb);
                return Vec3.squaredDistance(sphere.center, pt) < sphere.radius * sphere.radius;
              };
            }();
            const sphereCapsule = function () {
              const v3_0 = new Vec3();
              const v3_1 = new Vec3();
              return function (sphere, capsule) {
                const r = sphere.radius + capsule.radius;
                const squaredR = r * r;
                const h = Vec3.squaredDistance(capsule.ellipseCenter0, capsule.ellipseCenter1);
                if (h === 0) {
                  return Vec3.squaredDistance(sphere.center, capsule.center) < squaredR;
                } else {
                  Vec3.subtract(v3_0, sphere.center, capsule.ellipseCenter0);
                  Vec3.subtract(v3_1, capsule.ellipseCenter1, capsule.ellipseCenter0);
                  const t = Vec3.dot(v3_0, v3_1) / h;
                  if (t < 0) {
                    return Vec3.squaredDistance(sphere.center, capsule.ellipseCenter0) < squaredR;
                  } else if (t > 1) {
                    return Vec3.squaredDistance(sphere.center, capsule.ellipseCenter1) < squaredR;
                  } else {
                    Vec3.scaleAndAdd(v3_0, capsule.ellipseCenter0, v3_1, t);
                    return Vec3.squaredDistance(sphere.center, v3_0) < squaredR;
                  }
                }
              };
            }();
            const capsuleWithCapsule = function () {
              const v3_0 = new Vec3();
              const v3_1 = new Vec3();
              const v3_2 = new Vec3();
              const v3_3 = new Vec3();
              const v3_4 = new Vec3();
              const v3_5 = new Vec3();
              return function capsuleWithCapsule(capsuleA, capsuleB) {
                const u = Vec3.subtract(v3_0, capsuleA.ellipseCenter1, capsuleA.ellipseCenter0);
                const v = Vec3.subtract(v3_1, capsuleB.ellipseCenter1, capsuleB.ellipseCenter0);
                const w = Vec3.subtract(v3_2, capsuleA.ellipseCenter0, capsuleB.ellipseCenter0);
                const a = Vec3.dot(u, u);
                const b = Vec3.dot(u, v);
                const c = Vec3.dot(v, v);
                const d = Vec3.dot(u, w);
                const e = Vec3.dot(v, w);
                const D = a * c - b * b;
                let sN;
                let sD = D;
                let tN;
                let tD = D;
                if (D < EPSILON) {
                  sN = 0.0;
                  sD = 1.0;
                  tN = e;
                  tD = c;
                } else {
                  sN = b * e - c * d;
                  tN = a * e - b * d;
                  if (sN < 0.0) {
                    sN = 0.0;
                    tN = e;
                    tD = c;
                  } else if (sN > sD) {
                    sN = sD;
                    tN = e + b;
                    tD = c;
                  }
                }
                if (tN < 0.0) {
                  tN = 0.0;
                  if (-d < 0.0) {
                    sN = 0.0;
                  } else if (-d > a) {
                    sN = sD;
                  } else {
                    sN = -d;
                    sD = a;
                  }
                } else if (tN > tD) {
                  tN = tD;
                  if (-d + b < 0.0) {
                    sN = 0;
                  } else if (-d + b > a) {
                    sN = sD;
                  } else {
                    sN = -d + b;
                    sD = a;
                  }
                }
                const sc = Math.abs(sN) < EPSILON ? 0.0 : sN / sD;
                const tc = Math.abs(tN) < EPSILON ? 0.0 : tN / tD;
                const dP = v3_3;
                dP.set(w);
                dP.add(Vec3.multiplyScalar(v3_4, u, sc));
                dP.subtract(Vec3.multiplyScalar(v3_5, v, tc));
                const radius = capsuleA.radius + capsuleB.radius;
                return dP.lengthSqr() < radius * radius;
              };
            }();
            const intersect = exports('bG', {
              raySphere,
              rayAABB,
              rayOBB,
              rayPlane,
              rayTriangle,
              rayCapsule,
              raySubMesh: null,
              rayMesh: null,
              rayModel: null,
              lineSphere,
              lineAABB,
              lineOBB,
              linePlane,
              lineTriangle,
              sphereWithSphere,
              sphereAABB,
              sphereOBB,
              spherePlane,
              sphereFrustum,
              sphereFrustumAccurate,
              sphereCapsule,
              aabbWithAABB,
              aabbWithOBB,
              aabbPlane,
              aabbFrustum,
              aabbFrustumAccurate,
              obbWithOBB,
              obbPlane,
              obbFrustum,
              obbFrustumAccurate,
              obbPoint,
              obbCapsule,
              aabbFrustumCompletelyInside,
              capsuleWithCapsule,
              resolve(g1, g2, outPt = null) {
                const type1 = g1._type;
                const type2 = g2._type;
                const resolver = this[type1 | type2];
                return type1 < type2 ? resolver(g1, g2, outPt) : resolver(g2, g1, outPt);
              }
            });
            intersect[enums.SHAPE_RAY | enums.SHAPE_SPHERE] = raySphere;
            intersect[enums.SHAPE_RAY | enums.SHAPE_AABB] = rayAABB;
            intersect[enums.SHAPE_RAY | enums.SHAPE_OBB] = rayOBB;
            intersect[enums.SHAPE_RAY | enums.SHAPE_PLANE] = rayPlane;
            intersect[enums.SHAPE_RAY | enums.SHAPE_TRIANGLE] = rayTriangle;
            intersect[enums.SHAPE_RAY | enums.SHAPE_CAPSULE] = rayCapsule;
            intersect[enums.SHAPE_LINE | enums.SHAPE_SPHERE] = lineSphere;
            intersect[enums.SHAPE_LINE | enums.SHAPE_AABB] = lineAABB;
            intersect[enums.SHAPE_LINE | enums.SHAPE_OBB] = lineOBB;
            intersect[enums.SHAPE_LINE | enums.SHAPE_PLANE] = linePlane;
            intersect[enums.SHAPE_LINE | enums.SHAPE_TRIANGLE] = lineTriangle;
            intersect[enums.SHAPE_SPHERE] = sphereWithSphere;
            intersect[enums.SHAPE_SPHERE | enums.SHAPE_AABB] = sphereAABB;
            intersect[enums.SHAPE_SPHERE | enums.SHAPE_OBB] = sphereOBB;
            intersect[enums.SHAPE_SPHERE | enums.SHAPE_PLANE] = spherePlane;
            intersect[enums.SHAPE_SPHERE | enums.SHAPE_FRUSTUM] = sphereFrustum;
            intersect[enums.SHAPE_SPHERE | enums.SHAPE_FRUSTUM_ACCURATE] = sphereFrustumAccurate;
            intersect[enums.SHAPE_SPHERE | enums.SHAPE_CAPSULE] = sphereCapsule;
            intersect[enums.SHAPE_AABB] = aabbWithAABB;
            intersect[enums.SHAPE_AABB | enums.SHAPE_OBB] = aabbWithOBB;
            intersect[enums.SHAPE_AABB | enums.SHAPE_PLANE] = aabbPlane;
            intersect[enums.SHAPE_AABB | enums.SHAPE_FRUSTUM] = aabbFrustum;
            intersect[enums.SHAPE_AABB | enums.SHAPE_FRUSTUM_ACCURATE] = aabbFrustumAccurate;
            intersect[enums.SHAPE_OBB] = obbWithOBB;
            intersect[enums.SHAPE_OBB | enums.SHAPE_PLANE] = obbPlane;
            intersect[enums.SHAPE_OBB | enums.SHAPE_FRUSTUM] = obbFrustum;
            intersect[enums.SHAPE_OBB | enums.SHAPE_FRUSTUM_ACCURATE] = obbFrustumAccurate;
            intersect[enums.SHAPE_OBB | enums.SHAPE_CAPSULE] = obbCapsule;
            intersect[enums.SHAPE_CAPSULE] = capsuleWithCapsule;

            replaceProperty(Line.prototype, 'line', [{
              name: 'mag',
              newName: 'len'
            }, {
              name: 'magnitude',
              newName: 'len'
            }]);
            removeProperty(intersect, 'intersect', [{
              name: 'line_quad'
            }]);

            const v1 = new Vec3(0, 0, 0);
            const v2 = new Vec3(0, 0, 0);
            const temp_mat = legacyCC.mat4();
            const temp_vec4 = legacyCC.v4();
            class Plane {
              static create(nx, ny, nz, d) {
                return new Plane(nx, ny, nz, d);
              }
              static clone(p) {
                return new Plane(p.n.x, p.n.y, p.n.z, p.d);
              }
              static copy(out, p) {
                Vec3.copy(out.n, p.n);
                out.d = p.d;
                return out;
              }
              static fromPoints(out, a, b, c) {
                Vec3.subtract(v1, b, a);
                Vec3.subtract(v2, c, a);
                Vec3.normalize(out.n, Vec3.cross(out.n, v1, v2));
                out.d = Vec3.dot(out.n, a);
                return out;
              }
              static set(out, nx, ny, nz, d) {
                out.n.x = nx;
                out.n.y = ny;
                out.n.z = nz;
                out.d = d;
                return out;
              }
              static fromNormalAndPoint(out, normal, point) {
                Vec3.copy(out.n, normal);
                out.d = Vec3.dot(normal, point);
                return out;
              }
              static normalize(out, a) {
                const len = a.n.length();
                Vec3.normalize(out.n, a.n);
                if (len > 0) {
                  out.d = a.d / len;
                }
                return out;
              }
              get type() {
                return this._type;
              }
              set x(val) {
                this.n.x = val;
              }
              get x() {
                return this.n.x;
              }
              set y(val) {
                this.n.y = val;
              }
              get y() {
                return this.n.y;
              }
              set z(val) {
                this.n.z = val;
              }
              get z() {
                return this.n.z;
              }
              set w(val) {
                this.d = val;
              }
              get w() {
                return this.d;
              }
              constructor(nx = 0, ny = 1, nz = 0, d = 0) {
                this.n = void 0;
                this._type = enums.SHAPE_PLANE;
                this.n = new Vec3(nx, ny, nz);
                this.d = d;
              }
              transform(mat) {
                Mat4.invert(temp_mat, mat);
                Mat4.transpose(temp_mat, temp_mat);
                Vec4.set(temp_vec4, this.n.x, this.n.y, this.n.z, -this.d);
                Vec4.transformMat4(temp_vec4, temp_vec4, temp_mat);
                Vec3.set(this.n, temp_vec4.x, temp_vec4.y, temp_vec4.z);
                this.d = -temp_vec4.w;
              }
            }

            class Triangle {
              static create(ax = 1, ay = 0, az = 0, bx = 0, by = 0, bz = 0, cx = 0, cy = 0, cz = 1) {
                return new Triangle(ax, ay, az, bx, by, bz, cx, cy, cz);
              }
              static clone(t) {
                return new Triangle(t.a.x, t.a.y, t.a.z, t.b.x, t.b.y, t.b.z, t.c.x, t.c.y, t.c.z);
              }
              static copy(out, t) {
                Vec3.copy(out.a, t.a);
                Vec3.copy(out.b, t.b);
                Vec3.copy(out.c, t.c);
                return out;
              }
              static fromPoints(out, a, b, c) {
                Vec3.copy(out.a, a);
                Vec3.copy(out.b, b);
                Vec3.copy(out.c, c);
                return out;
              }
              static set(out, ax, ay, az, bx, by, bz, cx, cy, cz) {
                out.a.x = ax;
                out.a.y = ay;
                out.a.z = az;
                out.b.x = bx;
                out.b.y = by;
                out.b.z = bz;
                out.c.x = cx;
                out.c.y = cy;
                out.c.z = cz;
                return out;
              }
              get type() {
                return this._type;
              }
              constructor(ax = 0, ay = 0, az = 0, bx = 1, by = 0, bz = 0, cx = 0, cy = 1, cz = 0) {
                this.a = void 0;
                this.b = void 0;
                this.c = void 0;
                this._type = void 0;
                this._type = enums.SHAPE_TRIANGLE;
                this.a = new Vec3(ax, ay, az);
                this.b = new Vec3(bx, by, bz);
                this.c = new Vec3(cx, cy, cz);
              }
            } exports('cg', Triangle);

            const _v3_tmp$1 = new Vec3();
            const _v3_tmp2$1 = new Vec3();
            const _v3_tmp3 = new Vec3();
            const _v3_tmp4 = new Vec3();
            const _m3_tmp$1 = new Mat3();
            const transform_extent_m4 = (out, extent, m4) => {
              _m3_tmp$1.m00 = Math.abs(m4.m00);
              _m3_tmp$1.m01 = Math.abs(m4.m01);
              _m3_tmp$1.m02 = Math.abs(m4.m02);
              _m3_tmp$1.m03 = Math.abs(m4.m04);
              _m3_tmp$1.m04 = Math.abs(m4.m05);
              _m3_tmp$1.m05 = Math.abs(m4.m06);
              _m3_tmp$1.m06 = Math.abs(m4.m08);
              _m3_tmp$1.m07 = Math.abs(m4.m09);
              _m3_tmp$1.m08 = Math.abs(m4.m10);
              Vec3.transformMat3(out, extent, _m3_tmp$1);
            };
            class AABB {
              static create(px, py, pz, hw, hh, hl) {
                return new AABB(px, py, pz, hw, hh, hl);
              }
              static clone(a) {
                return new AABB(a.center.x, a.center.y, a.center.z, a.halfExtents.x, a.halfExtents.y, a.halfExtents.z);
              }
              static copy(out, a) {
                Vec3.copy(out.center, a.center);
                Vec3.copy(out.halfExtents, a.halfExtents);
                return out;
              }
              static fromPoints(out, minPos, maxPos) {
                Vec3.add(_v3_tmp$1, maxPos, minPos);
                Vec3.subtract(_v3_tmp2$1, maxPos, minPos);
                Vec3.multiplyScalar(out.center, _v3_tmp$1, 0.5);
                Vec3.multiplyScalar(out.halfExtents, _v3_tmp2$1, 0.5);
                return out;
              }
              static set(out, px, py, pz, hw, hh, hl) {
                out.center.set(px, py, pz);
                out.halfExtents.set(hw, hh, hl);
                return out;
              }
              static merge(out, a, b) {
                Vec3.subtract(_v3_tmp$1, a.center, a.halfExtents);
                Vec3.subtract(_v3_tmp2$1, b.center, b.halfExtents);
                Vec3.add(_v3_tmp3, a.center, a.halfExtents);
                Vec3.add(_v3_tmp4, b.center, b.halfExtents);
                Vec3.max(_v3_tmp4, _v3_tmp3, _v3_tmp4);
                Vec3.min(_v3_tmp3, _v3_tmp$1, _v3_tmp2$1);
                return AABB.fromPoints(out, _v3_tmp3, _v3_tmp4);
              }
              static toBoundingSphere(out, a) {
                out.center.set(a.center);
                out.radius = a.halfExtents.length();
                return out;
              }
              static transform(out, a, matrix) {
                Vec3.transformMat4(out.center, a.center, matrix);
                transform_extent_m4(out.halfExtents, a.halfExtents, matrix);
                return out;
              }
              get type() {
                return this._type;
              }
              constructor(px = 0, py = 0, pz = 0, hw = 1, hh = 1, hl = 1) {
                this.center = void 0;
                this.halfExtents = void 0;
                this._type = void 0;
                this._type = enums.SHAPE_AABB;
                this.center = new Vec3(px, py, pz);
                this.halfExtents = new Vec3(hw, hh, hl);
              }
              getBoundary(minPos, maxPos) {
                Vec3.subtract(minPos, this.center, this.halfExtents);
                Vec3.add(maxPos, this.center, this.halfExtents);
              }
              transform(m, pos, rot, scale, out) {
                Vec3.transformMat4(out.center, this.center, m);
                transform_extent_m4(out.halfExtents, this.halfExtents, m);
              }
              clone() {
                return AABB.clone(this);
              }
              copy(a) {
                return AABB.copy(this, a);
              }
              mergePoint(point) {
                this.getBoundary(_v3_tmp$1, _v3_tmp2$1);
                if (point.x < _v3_tmp$1.x) {
                  _v3_tmp$1.x = point.x;
                }
                if (point.y < _v3_tmp$1.y) {
                  _v3_tmp$1.y = point.y;
                }
                if (point.z < _v3_tmp$1.z) {
                  _v3_tmp$1.z = point.z;
                }
                if (point.x > _v3_tmp2$1.x) {
                  _v3_tmp2$1.x = point.x;
                }
                if (point.y > _v3_tmp2$1.y) {
                  _v3_tmp2$1.y = point.y;
                }
                if (point.z > _v3_tmp2$1.z) {
                  _v3_tmp2$1.z = point.z;
                }
                Vec3.add(_v3_tmp3, _v3_tmp$1, _v3_tmp2$1);
                this.center.set(Vec3.multiplyScalar(_v3_tmp3, _v3_tmp3, 0.5));
                this.halfExtents.set(_v3_tmp2$1.x - _v3_tmp3.x, _v3_tmp2$1.y - _v3_tmp3.y, _v3_tmp2$1.z - _v3_tmp3.z);
              }
              mergePoints(points) {
                if (points.length < 1) {
                  return;
                }
                for (let i = 0; i < points.length; i++) {
                  this.mergePoint(points[i]);
                }
              }
              mergeFrustum(frustum) {
                this.mergePoints(frustum.vertices);
              }
            } exports('bE', AABB);

            class Capsule {
              get type() {
                return this._type;
              }
              constructor(radius = 0.5, halfHeight = 0.5, axis = 1) {
                this._type = void 0;
                this.radius = void 0;
                this.halfHeight = void 0;
                this.axis = void 0;
                this.center = void 0;
                this.rotation = void 0;
                this.ellipseCenter0 = void 0;
                this.ellipseCenter1 = void 0;
                this._type = enums.SHAPE_CAPSULE;
                this.radius = radius;
                this.halfHeight = halfHeight;
                this.axis = axis;
                this.center = new Vec3();
                this.rotation = new Quat();
                this.ellipseCenter0 = new Vec3(0, halfHeight, 0);
                this.ellipseCenter1 = new Vec3(0, -halfHeight, 0);
                this.updateCache();
              }
              transform(m, pos, rot, scale, out) {
                const ws = scale;
                const s = absMaxComponent(ws);
                out.radius = this.radius * Math.abs(s);
                const halfTotalWorldHeight = (this.halfHeight + this.radius) * Math.abs(ws.y);
                let halfWorldHeight = halfTotalWorldHeight - out.radius;
                if (halfWorldHeight < 0) halfWorldHeight = 0;
                out.halfHeight = halfWorldHeight;
                Vec3.transformMat4(out.center, this.center, m);
                Quat.multiply(out.rotation, this.rotation, rot);
                out.updateCache();
              }
              updateCache() {
                this.updateLocalCenter();
                Vec3.transformQuat(this.ellipseCenter0, this.ellipseCenter0, this.rotation);
                Vec3.transformQuat(this.ellipseCenter1, this.ellipseCenter1, this.rotation);
                this.ellipseCenter0.add(this.center);
                this.ellipseCenter1.add(this.center);
              }
              updateLocalCenter() {
                const halfHeight = this.halfHeight;
                const axis = this.axis;
                switch (axis) {
                  case 0:
                    this.ellipseCenter0.set(halfHeight, 0, 0);
                    this.ellipseCenter1.set(-halfHeight, 0, 0);
                    break;
                  case 1:
                    this.ellipseCenter0.set(0, halfHeight, 0);
                    this.ellipseCenter1.set(0, -halfHeight, 0);
                    break;
                  case 2:
                    this.ellipseCenter0.set(0, 0, halfHeight);
                    this.ellipseCenter1.set(0, 0, -halfHeight);
                    break;
                }
              }
            } exports('cP', Capsule);

            const _v = new Array(8);
            _v[0] = new Vec3(1, 1, 1);
            _v[1] = new Vec3(-1, 1, 1);
            _v[2] = new Vec3(-1, -1, 1);
            _v[3] = new Vec3(1, -1, 1);
            _v[4] = new Vec3(1, 1, -1);
            _v[5] = new Vec3(-1, 1, -1);
            _v[6] = new Vec3(-1, -1, -1);
            _v[7] = new Vec3(1, -1, -1);
            const _nearTemp = new Vec3();
            const _farTemp = new Vec3();
            const _temp_v3 = new Vec3();
            class Frustum {
              static createOrthographic(out, width, height, near, far, transform) {
                const halfWidth = width / 2;
                const halfHeight = height / 2;
                Vec3.set(_temp_v3, halfWidth, halfHeight, -near);
                Vec3.transformMat4(out.vertices[0], _temp_v3, transform);
                Vec3.set(_temp_v3, -halfWidth, halfHeight, -near);
                Vec3.transformMat4(out.vertices[1], _temp_v3, transform);
                Vec3.set(_temp_v3, -halfWidth, -halfHeight, -near);
                Vec3.transformMat4(out.vertices[2], _temp_v3, transform);
                Vec3.set(_temp_v3, halfWidth, -halfHeight, -near);
                Vec3.transformMat4(out.vertices[3], _temp_v3, transform);
                Vec3.set(_temp_v3, halfWidth, halfHeight, -far);
                Vec3.transformMat4(out.vertices[4], _temp_v3, transform);
                Vec3.set(_temp_v3, -halfWidth, halfHeight, -far);
                Vec3.transformMat4(out.vertices[5], _temp_v3, transform);
                Vec3.set(_temp_v3, -halfWidth, -halfHeight, -far);
                Vec3.transformMat4(out.vertices[6], _temp_v3, transform);
                Vec3.set(_temp_v3, halfWidth, -halfHeight, -far);
                Vec3.transformMat4(out.vertices[7], _temp_v3, transform);
                out.updatePlanes();
              }
              static createOrtho(out, width, height, near, far, transform) {
                return Frustum.createOrthographic(out, width, height, near, far, transform);
              }
              static createPerspective(out, aspect, fov, near, far, transform) {
                const h = Math.tan(fov * 0.5);
                const w = h * aspect;
                _nearTemp.set(near * w, near * h, near);
                _farTemp.set(far * w, far * h, far);
                const vertexes = out.vertices;
                _temp_v3.set(_nearTemp.x, _nearTemp.y, -_nearTemp.z);
                Vec3.transformMat4(vertexes[0], _temp_v3, transform);
                _temp_v3.set(-_nearTemp.x, _nearTemp.y, -_nearTemp.z);
                Vec3.transformMat4(vertexes[1], _temp_v3, transform);
                _temp_v3.set(-_nearTemp.x, -_nearTemp.y, -_nearTemp.z);
                Vec3.transformMat4(vertexes[2], _temp_v3, transform);
                _temp_v3.set(_nearTemp.x, -_nearTemp.y, -_nearTemp.z);
                Vec3.transformMat4(vertexes[3], _temp_v3, transform);
                _temp_v3.set(_farTemp.x, _farTemp.y, -_farTemp.z);
                Vec3.transformMat4(vertexes[4], _temp_v3, transform);
                _temp_v3.set(-_farTemp.x, _farTemp.y, -_farTemp.z);
                Vec3.transformMat4(vertexes[5], _temp_v3, transform);
                _temp_v3.set(-_farTemp.x, -_farTemp.y, -_farTemp.z);
                Vec3.transformMat4(vertexes[6], _temp_v3, transform);
                _temp_v3.set(_farTemp.x, -_farTemp.y, -_farTemp.z);
                Vec3.transformMat4(vertexes[7], _temp_v3, transform);
                out.updatePlanes();
              }
              static createFromAABB(out, aabb) {
                const vec3_min = new Vec3();
                const vec3_max = new Vec3();
                Vec3.subtract(vec3_min, aabb.center, aabb.halfExtents);
                Vec3.add(vec3_max, aabb.center, aabb.halfExtents);
                out.vertices[0].set(vec3_max.x, vec3_max.y, -vec3_min.z);
                out.vertices[1].set(vec3_min.x, vec3_max.y, -vec3_min.z);
                out.vertices[2].set(vec3_min.x, vec3_min.y, -vec3_min.z);
                out.vertices[3].set(vec3_max.x, vec3_min.y, -vec3_min.z);
                out.vertices[4].set(vec3_max.x, vec3_max.y, -vec3_max.z);
                out.vertices[5].set(vec3_min.x, vec3_max.y, -vec3_max.z);
                out.vertices[6].set(vec3_min.x, vec3_min.y, -vec3_max.z);
                out.vertices[7].set(vec3_max.x, vec3_min.y, -vec3_max.z);
                out.updatePlanes();
                return out;
              }
              split(start, end, aspect, fov, m) {
                return Frustum.createPerspective(this, aspect, fov, start, end, m);
              }
              static create() {
                return new Frustum();
              }
              static clone(f) {
                return Frustum.copy(new Frustum(), f);
              }
              static copy(out, f) {
                out._type = f.type;
                for (let i = 0; i < 6; ++i) {
                  Plane.copy(out.planes[i], f.planes[i]);
                }
                for (let i = 0; i < 8; ++i) {
                  Vec3.copy(out.vertices[i], f.vertices[i]);
                }
                return out;
              }
              set accurate(b) {
                this._type = b ? enums.SHAPE_FRUSTUM_ACCURATE : enums.SHAPE_FRUSTUM;
              }
              get type() {
                return this._type;
              }
              constructor() {
                this.planes = void 0;
                this.vertices = void 0;
                this._type = void 0;
                this._type = enums.SHAPE_FRUSTUM;
                this.planes = new Array(6);
                for (let i = 0; i < 6; ++i) {
                  this.planes[i] = Plane.create(0, 0, 0, 0);
                }
                this.vertices = new Array(8);
                for (let i = 0; i < 8; ++i) {
                  this.vertices[i] = new Vec3();
                }
              }
              update(m, inv) {
                Vec3.set(this.planes[0].n, m.m03 + m.m00, m.m07 + m.m04, m.m11 + m.m08);
                this.planes[0].d = -(m.m15 + m.m12);
                Vec3.set(this.planes[1].n, m.m03 - m.m00, m.m07 - m.m04, m.m11 - m.m08);
                this.planes[1].d = -(m.m15 - m.m12);
                Vec3.set(this.planes[2].n, m.m03 + m.m01, m.m07 + m.m05, m.m11 + m.m09);
                this.planes[2].d = -(m.m15 + m.m13);
                Vec3.set(this.planes[3].n, m.m03 - m.m01, m.m07 - m.m05, m.m11 - m.m09);
                this.planes[3].d = -(m.m15 - m.m13);
                Vec3.set(this.planes[4].n, m.m03 + m.m02, m.m07 + m.m06, m.m11 + m.m10);
                this.planes[4].d = -(m.m15 + m.m14);
                Vec3.set(this.planes[5].n, m.m03 - m.m02, m.m07 - m.m06, m.m11 - m.m10);
                this.planes[5].d = -(m.m15 - m.m14);
                for (let i = 0; i < 6; i++) {
                  const pl = this.planes[i];
                  const invDist = 1 / pl.n.length();
                  Vec3.multiplyScalar(pl.n, pl.n, invDist);
                  pl.d *= invDist;
                }
                for (let i = 0; i < 8; i++) {
                  Vec3.transformMat4(this.vertices[i], _v[i], inv);
                }
              }
              transform(mat) {
                for (let i = 0; i < 8; i++) {
                  Vec3.transformMat4(this.vertices[i], this.vertices[i], mat);
                }
                this.updatePlanes();
              }
              zero() {
                for (let i = 0; i < 8; i++) {
                  this.vertices[i].set(0.0, 0.0, 0.0);
                }
                for (let i = 0; i < 6; i++) {
                  Plane.set(this.planes[i], 0, 0, 0, 0);
                }
              }
              updatePlanes() {
                Plane.fromPoints(this.planes[0], this.vertices[1], this.vertices[6], this.vertices[5]);
                Plane.fromPoints(this.planes[1], this.vertices[3], this.vertices[4], this.vertices[7]);
                Plane.fromPoints(this.planes[2], this.vertices[6], this.vertices[3], this.vertices[7]);
                Plane.fromPoints(this.planes[3], this.vertices[0], this.vertices[5], this.vertices[4]);
                Plane.fromPoints(this.planes[4], this.vertices[2], this.vertices[0], this.vertices[3]);
                Plane.fromPoints(this.planes[5], this.vertices[7], this.vertices[5], this.vertices[6]);
              }
            }

            function cacheProperty(ctor, property) {
              const propDesc = Object.getOwnPropertyDescriptor(ctor.prototype, property);
              const propCacheKey = `_$cache_${property}`;
              const propRealKey = `_$_${property}`;
              Object.defineProperty(ctor.prototype, propRealKey, propDesc);
              Object.defineProperty(ctor.prototype, property, {
                get() {
                  if (this[propCacheKey] === undefined) {
                    this[propCacheKey] = this[propRealKey];
                  }
                  return this[propCacheKey];
                },
                set(value) {
                  this[propRealKey] = value;
                },
                configurable: true,
                enumerable: true
              });
            }
            function cacheUnderlyingData(ctor) {
              ctor.prototype._arraybuffer = function () {
                if (!this.__data) {
                  this.__data = this.underlyingData();
                }
                return this.__data;
              };
            }
            const defineAttrFloat = (kls, attr) => {
              const desc = kls.__nativeFields__[attr];
              const cacheKey = `_$_${attr}`;
              assert(desc.fieldSize === 4, `field ${attr} size ${desc.fieldSize}`);
              Object.defineProperty(kls.prototype, desc.fieldName, {
                configurable: true,
                enumerable: true,
                get() {
                  if (this[cacheKey] === undefined) {
                    this[cacheKey] = new Float32Array(this._arraybuffer(), desc.fieldOffset, 1);
                  }
                  return this[cacheKey][0];
                },
                set(v) {
                  if (this[cacheKey] === undefined) {
                    this[cacheKey] = new Float32Array(this._arraybuffer(), desc.fieldOffset, 1);
                  }
                  this[cacheKey][0] = v;
                }
              });
            };
            const defineAttrInt = (kls, attr) => {
              const desc = kls.__nativeFields__[attr];
              if (!desc) {
                console.error(`attr ${attr} not defined in class ${kls.toString()}`);
              }
              const cacheKey = `_$_${attr}`;
              assert(desc.fieldSize === 4, `field ${attr} size ${desc.fieldSize}`);
              Object.defineProperty(kls.prototype, desc.fieldName, {
                configurable: true,
                enumerable: true,
                get() {
                  if (this[cacheKey] === undefined) {
                    this[cacheKey] = new Int32Array(this._arraybuffer(), desc.fieldOffset, 1);
                  }
                  return this[cacheKey][0];
                },
                set(v) {
                  if (this[cacheKey] === undefined) {
                    this[cacheKey] = new Int32Array(this._arraybuffer(), desc.fieldOffset, 1);
                  }
                  this[cacheKey][0] = v;
                }
              });
            };
            {
              cacheProperty(ns.Line, 's');
              cacheProperty(ns.Line, 'e');
              Object.setPrototypeOf(ns.Line.prototype, Line.prototype);
              cacheUnderlyingData(ns.Plane);
              cacheProperty(ns.Plane, 'n');
              defineAttrFloat(ns.Plane, 'd');
              Object.setPrototypeOf(ns.Plane.prototype, Plane.prototype);
              cacheUnderlyingData(ns.Ray);
              cacheProperty(ns.Ray, 'o');
              cacheProperty(ns.Ray, 'd');
              Object.setPrototypeOf(ns.Ray.prototype, Ray.prototype);
              cacheUnderlyingData(ns.Triangle);
              cacheProperty(ns.Triangle, 'a');
              cacheProperty(ns.Triangle, 'b');
              cacheProperty(ns.Triangle, 'c');
              Object.setPrototypeOf(ns.Triangle.prototype, Triangle.prototype);
              cacheUnderlyingData(ns.Sphere);
              cacheProperty(ns.Sphere, '_center');
              defineAttrFloat(ns.Sphere, '_radius');
              Object.setPrototypeOf(ns.Sphere.prototype, Sphere.prototype);
              cacheUnderlyingData(ns.AABB);
              cacheProperty(ns.AABB, 'center');
              cacheProperty(ns.AABB, 'halfExtents');
              Object.setPrototypeOf(ns.AABB.prototype, AABB.prototype);
              cacheUnderlyingData(ns.Capsule);
              defineAttrFloat(ns.Capsule, 'radius');
              defineAttrFloat(ns.Capsule, 'halfHeight');
              defineAttrInt(ns.Capsule, 'axis');
              cacheProperty(ns.Capsule, 'center');
              cacheProperty(ns.Capsule, 'rotation');
              cacheProperty(ns.Capsule, 'ellipseCenter0');
              cacheProperty(ns.Capsule, 'ellipseCenter1');
              Object.setPrototypeOf(ns.Capsule.prototype, Capsule.prototype);
              cacheProperty(ns.Frustum, 'vertices');
              cacheProperty(ns.Frustum, 'planes');
              Object.setPrototypeOf(ns.Frustum.prototype, Frustum.prototype);
              const descOf_type = Object.getOwnPropertyDescriptor(ns.ShapeBase.prototype, '_type');
              for (const kls of [ns.Line, ns.Plane, ns.Ray, ns.Triangle, ns.Sphere, ns.AABB, ns.Capsule, ns.Frustum]) {
                Object.defineProperty(kls.prototype, '_type', descOf_type);
              }
            }

            const _v3_tmp = new Vec3();
            const _v3_tmp2 = new Vec3();
            const _m3_tmp = new Mat3();
            const transform_extent_m3 = (out, extent, m3) => {
              _m3_tmp.m00 = Math.abs(m3.m00);
              _m3_tmp.m01 = Math.abs(m3.m01);
              _m3_tmp.m02 = Math.abs(m3.m02);
              _m3_tmp.m03 = Math.abs(m3.m03);
              _m3_tmp.m04 = Math.abs(m3.m04);
              _m3_tmp.m05 = Math.abs(m3.m05);
              _m3_tmp.m06 = Math.abs(m3.m06);
              _m3_tmp.m07 = Math.abs(m3.m07);
              _m3_tmp.m08 = Math.abs(m3.m08);
              Vec3.transformMat3(out, extent, _m3_tmp);
            };
            class OBB {
              static create(cx, cy, cz, hw, hh, hl, ox_1, ox_2, ox_3, oy_1, oy_2, oy_3, oz_1, oz_2, oz_3) {
                return new OBB(cx, cy, cz, hw, hh, hl, ox_1, ox_2, ox_3, oy_1, oy_2, oy_3, oz_1, oz_2, oz_3);
              }
              static clone(a) {
                return new OBB(a.center.x, a.center.y, a.center.z, a.halfExtents.x, a.halfExtents.y, a.halfExtents.z, a.orientation.m00, a.orientation.m01, a.orientation.m02, a.orientation.m03, a.orientation.m04, a.orientation.m05, a.orientation.m06, a.orientation.m07, a.orientation.m08);
              }
              static copy(out, a) {
                Vec3.copy(out.center, a.center);
                Vec3.copy(out.halfExtents, a.halfExtents);
                Mat3.copy(out.orientation, a.orientation);
                return out;
              }
              static fromPoints(out, minPos, maxPos) {
                Vec3.multiplyScalar(out.center, Vec3.add(_v3_tmp, minPos, maxPos), 0.5);
                Vec3.multiplyScalar(out.halfExtents, Vec3.subtract(_v3_tmp2, maxPos, minPos), 0.5);
                Mat3.identity(out.orientation);
                return out;
              }
              static set(out, cx, cy, cz, hw, hh, hl, ox_1, ox_2, ox_3, oy_1, oy_2, oy_3, oz_1, oz_2, oz_3) {
                Vec3.set(out.center, cx, cy, cz);
                Vec3.set(out.halfExtents, hw, hh, hl);
                Mat3.set(out.orientation, ox_1, ox_2, ox_3, oy_1, oy_2, oy_3, oz_1, oz_2, oz_3);
                return out;
              }
              get type() {
                return this._type;
              }
              constructor(cx = 0, cy = 0, cz = 0, hw = 1, hh = 1, hl = 1, ox_1 = 1, ox_2 = 0, ox_3 = 0, oy_1 = 0, oy_2 = 1, oy_3 = 0, oz_1 = 0, oz_2 = 0, oz_3 = 1) {
                this.center = void 0;
                this.halfExtents = void 0;
                this.orientation = void 0;
                this._type = void 0;
                this._type = enums.SHAPE_OBB;
                this.center = new Vec3(cx, cy, cz);
                this.halfExtents = new Vec3(hw, hh, hl);
                this.orientation = new Mat3(ox_1, ox_2, ox_3, oy_1, oy_2, oy_3, oz_1, oz_2, oz_3);
              }
              getBoundary(minPos, maxPos) {
                transform_extent_m3(_v3_tmp, this.halfExtents, this.orientation);
                Vec3.subtract(minPos, this.center, _v3_tmp);
                Vec3.add(maxPos, this.center, _v3_tmp);
              }
              transform(m, pos, rot, scale, out) {
                Vec3.transformMat4(out.center, this.center, m);
                Mat3.fromQuat(out.orientation, rot);
                Vec3.multiply(out.halfExtents, this.halfExtents, scale);
              }
              translateAndRotate(m, rot, out) {
                Vec3.transformMat4(out.center, this.center, m);
                Mat3.fromQuat(out.orientation, rot);
              }
              setScale(scale, out) {
                Vec3.multiply(out.halfExtents, this.halfExtents, scale);
              }
            } exports('cO', OBB);

            function binarySearch(array, value) {
              return binarySearchEpsilon(array, value, 0);
            }
            function binarySearchEpsilon(array, value, EPSILON = 1e-6) {
              let low = 0;
              let high = array.length - 1;
              let middle = high >>> 1;
              for (; low <= high; middle = low + high >>> 1) {
                const test = array[middle];
                if (test > value + EPSILON) {
                  high = middle - 1;
                } else if (test < value - EPSILON) {
                  low = middle + 1;
                } else {
                  return middle;
                }
              }
              return ~low;
            }
            function binarySearchBy(array, value, lessThan) {
              let low = 0;
              let high = array.length - 1;
              let middle = high >>> 1;
              for (; low <= high; middle = low + high >>> 1) {
                const test = array[middle];
                if (lessThan(test, value) < 0) {
                  high = middle - 1;
                } else if (lessThan(test, value) > 0) {
                  low = middle + 1;
                } else {
                  return middle;
                }
              }
              return ~low;
            }

            let _Symbol$iterator;
            _Symbol$iterator = Symbol.iterator;
            class KeyframeCurve {
              constructor() {
                this._times = [];
                this._values = [];
              }
              get keyFramesCount() {
                return this._times.length;
              }
              get rangeMin() {
                return this._times[0];
              }
              get rangeMax() {
                return this._times[this._values.length - 1];
              }
              [_Symbol$iterator]() {
                let index = 0;
                return {
                  next: () => {
                    if (index >= this._times.length) {
                      return {
                        done: true,
                        value: undefined
                      };
                    } else {
                      const value = [this._times[index], this._values[index]];
                      ++index;
                      return {
                        done: false,
                        value
                      };
                    }
                  }
                };
              }
              keyframes() {
                return this;
              }
              times() {
                return this._times;
              }
              values() {
                return this._values;
              }
              getKeyframeTime(index) {
                return this._times[index];
              }
              getKeyframeValue(index) {
                return this._values[index];
              }
              addKeyFrame(time, keyframeValue) {
                return this._insertNewKeyframe(time, keyframeValue);
              }
              removeKeyframe(index) {
                this._times.splice(index, 1);
                this._values.splice(index, 1);
              }
              indexOfKeyframe(time) {
                return binarySearchEpsilon(this._times, time);
              }
              updateTime(index, time) {
                const value = this._values[index];
                this.removeKeyframe(index);
                this._insertNewKeyframe(time, value);
              }
              assignSorted(times, values) {
                if (values !== undefined) {
                  assertIsTrue(Array.isArray(times));
                  this.setKeyframes(times.slice(), values.slice());
                } else {
                  const keyframes = Array.from(times);
                  this.setKeyframes(keyframes.map(([time]) => time), keyframes.map(([, value]) => value));
                }
              }
              clear() {
                this._times.length = 0;
                this._values.length = 0;
              }
              searchKeyframe(time) {
                return binarySearchEpsilon(this._times, time);
              }
              setKeyframes(times, values) {
                assertIsTrue(times.length === values.length);
                assertIsTrue(isSorted(times));
                this._times = times;
                this._values = values;
              }
              _insertNewKeyframe(time, value) {
                const times = this._times;
                const values = this._values;
                const nFrames = times.length;
                const index = binarySearchEpsilon(times, time);
                if (index >= 0) {
                  return index;
                }
                const iNext = ~index;
                if (iNext === 0) {
                  times.unshift(time);
                  values.unshift(value);
                } else if (iNext === nFrames) {
                  times.push(time);
                  values.push(value);
                } else {
                  assertIsTrue(nFrames > 1);
                  times.splice(iNext - 1, 0, time);
                  values.splice(iNext - 1, 0, value);
                }
                return iNext;
              }
            }
            CCClass.fastDefine('cc.KeyframeCurve', KeyframeCurve, {
              _times: [],
              _values: []
            });
            function isSorted(values) {
              return values.every((value, index, array) => index === 0 || value > array[index - 1] || approx(value, array[index - 1], 1e-6));
            }

            let RealInterpolationMode; exports('aQ', RealInterpolationMode);
            (function (RealInterpolationMode) {
              RealInterpolationMode[RealInterpolationMode["LINEAR"] = 0] = "LINEAR";
              RealInterpolationMode[RealInterpolationMode["CONSTANT"] = 1] = "CONSTANT";
              RealInterpolationMode[RealInterpolationMode["CUBIC"] = 2] = "CUBIC";
            })(RealInterpolationMode || (exports('aQ', RealInterpolationMode = {})));
            let ExtrapolationMode; exports('aR', ExtrapolationMode);
            (function (ExtrapolationMode) {
              ExtrapolationMode[ExtrapolationMode["LINEAR"] = 0] = "LINEAR";
              ExtrapolationMode[ExtrapolationMode["CLAMP"] = 1] = "CLAMP";
              ExtrapolationMode[ExtrapolationMode["LOOP"] = 2] = "LOOP";
              ExtrapolationMode[ExtrapolationMode["PING_PONG"] = 3] = "PING_PONG";
            })(ExtrapolationMode || (exports('aR', ExtrapolationMode = {})));
            let TangentWeightMode; exports('aS', TangentWeightMode);
            (function (TangentWeightMode) {
              TangentWeightMode[TangentWeightMode["NONE"] = 0] = "NONE";
              TangentWeightMode[TangentWeightMode["LEFT"] = 1] = "LEFT";
              TangentWeightMode[TangentWeightMode["RIGHT"] = 2] = "RIGHT";
              TangentWeightMode[TangentWeightMode["BOTH"] = 3] = "BOTH";
            })(TangentWeightMode || (exports('aS', TangentWeightMode = {})));

            function solveCubic(coeff0, coeff1, coeff2, coeff3, solutions) {
              const a = coeff2 / coeff3;
              const b = coeff1 / coeff3;
              const c = coeff0 / coeff3;
              const sqrA = a * a;
              const p = 1.0 / 3.0 * (-1.0 / 3 * sqrA + b);
              const q = 1.0 / 2.0 * (2.0 / 27.0 * a * sqrA - 1.0 / 3 * a * b + c);
              const cubicP = p * p * p;
              const d = q * q + cubicP;
              let nSolutions = 0;
              if (isZero(d)) {
                if (isZero(q)) {
                  solutions[0] = 0;
                  return 1;
                } else {
                  const u = Math.cbrt(-q);
                  solutions[0] = 2 * u;
                  solutions[1] = -u;
                  return 2;
                }
              } else if (d < 0) {
                const phi = 1.0 / 3 * Math.acos(-q / Math.sqrt(-cubicP));
                const t = 2 * Math.sqrt(-p);
                solutions[0] = t * Math.cos(phi);
                solutions[1] = -t * Math.cos(phi + Math.PI / 3);
                solutions[2] = -t * Math.cos(phi - Math.PI / 3);
                nSolutions = 3;
              } else {
                const sqrtD = Math.sqrt(d);
                const u = Math.cbrt(sqrtD - q);
                const v = -Math.cbrt(sqrtD + q);
                solutions[0] = u + v;
                nSolutions = 1;
              }
              const sub = 1.0 / 3 * a;
              for (let i = 0; i < nSolutions; ++i) {
                solutions[i] -= sub;
              }
              return nSolutions;
            }
            const EQN_EPS = 1e-9;
            function isZero(x) {
              return x > -EQN_EPS && x < EQN_EPS;
            }

            function applyDecoratedInitializer(target, property, decorators, initializer) {
              return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
                return decorator(target, property, decoratedInitializer) || decoratedInitializer;
              }, initializer);
            }

            const emptyDecorator = () => {};
            function makeSmartClassDecorator(decorate) {
              return proxyFn;
              function proxyFn(target) {
                if (typeof target === 'function') {
                  return decorate(target);
                } else {
                  return function (constructor) {
                    return decorate(constructor, target);
                  };
                }
              }
            }
            function writeEditorClassProperty(constructor, propertyName, value) {
              const cache = getClassCache(constructor, propertyName);
              if (cache) {
                const proto = getSubDict(cache, 'proto');
                getSubDict(proto, 'editor')[propertyName] = value;
              }
            }
            function makeEditorClassDecoratorFn(propertyName) {
              return value => constructor => {
                writeEditorClassProperty(constructor, propertyName, value);
              };
            }
            function makeSmartEditorClassDecorator(propertyName, defaultValue) {
              return makeSmartClassDecorator((constructor, decoratedValue) => {
                writeEditorClassProperty(constructor, propertyName, defaultValue !== undefined ? defaultValue : decoratedValue);
              });
            }
            const CACHE_KEY = '__ccclassCache__';
            function getClassCache(ctor, decoratorName) {
              if (CCClass._isCCClass(ctor)) {
                error('`@%s` should be used after @ccclass for class "%s"', decoratorName, getClassName(ctor));
                return null;
              }
              return getSubDict(ctor, CACHE_KEY);
            }
            function getSubDict(obj, key) {
              return obj[key] || (obj[key] = {});
            }

            const ccclass = exports('by', makeSmartClassDecorator((constructor, name) => {
              let base = getSuper(constructor);
              if (base === Object) {
                base = null;
              }
              const proto = {
                name,
                extends: base,
                ctor: constructor
              };
              const cache = constructor[CACHE_KEY];
              if (cache) {
                const decoratedProto = cache.proto;
                if (decoratedProto) {
                  mixin(proto, decoratedProto);
                }
                constructor[CACHE_KEY] = undefined;
              }
              const res = CCClass(proto);
              {
                const propNames = Object.getOwnPropertyNames(constructor.prototype);
                for (let i = 0; i < propNames.length; ++i) {
                  const prop = propNames[i];
                  if (prop !== 'constructor') {
                    const desc = Object.getOwnPropertyDescriptor(constructor.prototype, prop);
                    const func = desc && desc.value;
                    if (typeof func === 'function') {
                      doValidateMethodWithProps_DEV(func, prop, getClassName(constructor), constructor, base);
                    }
                  }
                }
              }
              return res;
            }));

            const requireComponent = exports('cC', makeEditorClassDecoratorFn('requireComponent'));
            const executionOrder = exports('cs', makeEditorClassDecoratorFn('executionOrder'));
            const disallowMultiple = exports('ck', makeSmartEditorClassDecorator('disallowMultiple', true) );

            function property(target, propertyKey, descriptorOrInitializer) {
              let options = null;
              function normalized(target, propertyKey, descriptorOrInitializer) {
                const classStash = getOrCreateClassStash(target);
                const propertyStash = getOrCreateEmptyPropertyStash(target, propertyKey);
                const classConstructor = target.constructor;
                mergePropertyOptions(classStash, propertyStash, classConstructor, propertyKey, options, descriptorOrInitializer);
              }
              if (target === undefined) {
                return property({
                  type: undefined
                });
              } else if (typeof propertyKey === 'undefined') {
                options = target;
                return normalized;
              } else {
                normalized(target, propertyKey, descriptorOrInitializer);
                return undefined;
              }
            }
            function getDefaultFromInitializer(initializer) {
              let value;
              try {
                value = initializer();
              } catch (e) {
                return initializer;
              }
              if (typeof value !== 'object' || value === null) {
                return value;
              } else {
                return initializer;
              }
            }
            function extractActualDefaultValues(classConstructor) {
              let dummyObj;
              try {
                dummyObj = new classConstructor();
              } catch (e) {
                {
                  warnID(3652, getClassName(classConstructor), e);
                }
                return {};
              }
              return dummyObj;
            }
            function getOrCreateClassStash(target) {
              const cache = getClassCache(target.constructor);
              return cache;
            }
            function getOrCreateEmptyPropertyStash(target, propertyKey) {
              var _ref, _properties$_ref;
              const classStash = getClassCache(target.constructor);
              const ccclassProto = getSubDict(classStash, 'proto');
              const properties = getSubDict(ccclassProto, 'properties');
              const propertyStash = (_properties$_ref = properties[_ref = propertyKey]) !== null && _properties$_ref !== void 0 ? _properties$_ref : properties[_ref] = {};
              return propertyStash;
            }
            function getOrCreatePropertyStash(target, propertyKey, descriptorOrInitializer) {
              var _ref2, _properties$_ref2;
              const classStash = getClassCache(target.constructor);
              const ccclassProto = getSubDict(classStash, 'proto');
              const properties = getSubDict(ccclassProto, 'properties');
              const propertyStash = (_properties$_ref2 = properties[_ref2 = propertyKey]) !== null && _properties$_ref2 !== void 0 ? _properties$_ref2 : properties[_ref2] = {};
              propertyStash.__internalFlags |= PropertyStashInternalFlag.STANDALONE;
              if (descriptorOrInitializer && typeof descriptorOrInitializer !== 'function' && (descriptorOrInitializer.get || descriptorOrInitializer.set)) {
                if (descriptorOrInitializer.get) {
                  propertyStash.get = descriptorOrInitializer.get;
                }
                if (descriptorOrInitializer.set) {
                  propertyStash.set = descriptorOrInitializer.set;
                }
              } else {
                setDefaultValue(classStash, propertyStash, target.constructor, propertyKey, descriptorOrInitializer);
              }
              return propertyStash;
            }
            function mergePropertyOptions(cache, propertyStash, ctor, propertyKey, options, descriptorOrInitializer) {
              let fullOptions;
              const isGetset = descriptorOrInitializer && typeof descriptorOrInitializer !== 'function' && (descriptorOrInitializer.get || descriptorOrInitializer.set);
              if (options) {
                fullOptions = getFullFormOfProperty(options, isGetset);
              }
              const propertyRecord = mixin(propertyStash, fullOptions || options || {});
              if (isGetset) {
                if (options && ((fullOptions || options).get || (fullOptions || options).set)) {
                  const errorProps = getSubDict(cache, 'errorProps');
                  if (!errorProps[propertyKey]) {
                    errorProps[propertyKey] = true;
                    warnID(3655, propertyKey, getClassName(ctor), propertyKey, propertyKey);
                  }
                }
                if (descriptorOrInitializer.get) {
                  propertyRecord.get = descriptorOrInitializer.get;
                }
                if (descriptorOrInitializer.set) {
                  propertyRecord.set = descriptorOrInitializer.set;
                }
              } else {
                if ((propertyRecord.get || propertyRecord.set)) {
                  errorID(3655, propertyKey, getClassName(ctor), propertyKey, propertyKey);
                  return;
                }
                setDefaultValue(cache, propertyRecord, ctor, propertyKey, descriptorOrInitializer);
              }
            }
            function setDefaultValue(classStash, propertyStash, classConstructor, propertyKey, descriptorOrInitializer) {
              if (descriptorOrInitializer !== undefined) {
                if (typeof descriptorOrInitializer === 'function') {
                  propertyStash.default = getDefaultFromInitializer(descriptorOrInitializer);
                } else if (descriptorOrInitializer === null) ; else if (descriptorOrInitializer.initializer) {
                  propertyStash.default = getDefaultFromInitializer(descriptorOrInitializer.initializer);
                }
              } else {
                const actualDefaultValues = classStash.default || (classStash.default = extractActualDefaultValues(classConstructor));
                if (actualDefaultValues.hasOwnProperty(propertyKey)) {
                  propertyStash.default = actualDefaultValues[propertyKey];
                }
              }
            }

            const sMetadataTag = Symbol('cc:SerializationMetadata');
            function getSerializationMetadata(constructor) {
              return constructor[sMetadataTag];
            }
            function getOrCreateSerializationMetadata(constructor) {
              var _ref, _ref$sMetadataTag;
              return (_ref$sMetadataTag = (_ref = constructor)[sMetadataTag]) !== null && _ref$sMetadataTag !== void 0 ? _ref$sMetadataTag : _ref[sMetadataTag] = {};
            }

            const serializable = exports('bf', (target, propertyKey, descriptorOrInitializer) => {
              const propertyStash = getOrCreatePropertyStash(target, propertyKey, descriptorOrInitializer);
              setImplicitSerializable(propertyStash);
            });
            function formerlySerializedAs(name) {
              return (target, propertyKey, descriptorOrInitializer) => {
                const propertyStash = getOrCreatePropertyStash(target, propertyKey, descriptorOrInitializer);
                propertyStash.formerlySerializedAs = name;
                setImplicitSerializable(propertyStash);
              };
            }
            const editorOnly = exports('bK', (target, propertyKey, descriptorOrInitializer) => {
              const propertyStash = getOrCreatePropertyStash(target, propertyKey, descriptorOrInitializer);
              propertyStash.editorOnly = true;
              setImplicitSerializable(propertyStash);
            });
            function setImplicitSerializable(propertyStash) {
              propertyStash.__internalFlags |= PropertyStashInternalFlag.IMPLICIT_SERIALIZABLE;
            }
            const uniquelyReferenced = exports('cz', emptyDecorator );

            const executeInEditMode = makeSmartEditorClassDecorator('executeInEditMode', true) ;
            const menu = makeEditorClassDecoratorFn('menu') ;
            const playOnFocus = makeSmartEditorClassDecorator('playOnFocus', true) ;
            const inspector = makeEditorClassDecoratorFn('inspector') ;
            const icon = makeEditorClassDecoratorFn('icon') ;
            const help = makeEditorClassDecoratorFn('help') ;
            const editable = exports('b4', (target, propertyKey, descriptorOrInitializer) => {
              const propertyStash = getOrCreatePropertyStash(target, propertyKey, descriptorOrInitializer);
              setImplicitVisible(propertyStash);
            });
            const visible = exports('b6', setPropertyStashVar1WithImplicitVisible('visible'));
            const readOnly = exports('cq', setPropertyStashWithImplicitVisible('readonly', true));
            const displayName = exports('b7', setPropertyStashVar1WithImplicitVisible('displayName'));
            const tooltip = exports('b5', setPropertyStashWithImplicitI18n('tooltip'));
            const range = exports('b9', setPropertyStashVar1WithImplicitVisible('range'));
            const rangeMin = exports('cp', setPropertyStashVar1WithImplicitVisible('min'));
            const rangeStep = exports('ba', setPropertyStashVar1WithImplicitVisible('step'));
            const slide = exports('bb', setPropertyStashWithImplicitVisible('slide', true));
            const displayOrder = exports('b8', setPropertyStashVar1WithImplicitVisible('displayOrder'));
            const disallowAnimation = exports('bc', (target, propertyKey, descriptorOrInitializer) => {
              const propertyStash = getOrCreatePropertyStash(target, propertyKey, descriptorOrInitializer);
              propertyStash.animatable = false;
            });
            function setPropertyStashWithImplicitVisible(key, value) {
              return (target, propertyKey, descriptorOrInitializer) => {
                const propertyStash = getOrCreatePropertyStash(target, propertyKey, descriptorOrInitializer);
                propertyStash[key] = value;
                setImplicitVisible(propertyStash);
              };
            }
            function setPropertyStashVar1WithImplicitVisible(key) {
              return value => (target, propertyKey, descriptorOrInitializer) => {
                const propertyStash = getOrCreatePropertyStash(target, propertyKey, descriptorOrInitializer);
                propertyStash[key] = value;
                setImplicitVisible(propertyStash);
              };
            }
            function setImplicitVisible(propertyStash) {
              propertyStash.__internalFlags |= PropertyStashInternalFlag.IMPLICIT_VISIBLE;
            }
            function setPropertyStashWithImplicitI18n(key) {
              return value => (target, propertyKey, descriptorOrInitializer) => {
                const propertyStash = getOrCreatePropertyStash(target, propertyKey, descriptorOrInitializer);
                const prefix = 'i18n:';
                if (value.startsWith(prefix)) {
                  const extensionPrefix = 'ENGINE.';
                  propertyStash[key] = `${prefix}${extensionPrefix}${value.substring(prefix.length)}`;
                } else {
                  propertyStash[key] = value;
                }
                setImplicitVisible(propertyStash);
              };
            }

            const integer = type(CCInteger);
            const float = exports('ct', type(CCFloat));
            const boolean = type(CCBoolean);
            const string = exports('cB', type(CCString));
            function type(type) {
              return property({
                type
              });
            }

            const override = exports('bd', (target, propertyKey, descriptorOrInitializer) => {
              const propertyStash = getOrCreatePropertyStash(target, propertyKey, descriptorOrInitializer);
              propertyStash.override = true;
            });

            class Empty {}
            const EditorExtendable = exports('aC', editorExtendableInternal());
            assertIsTrue(editorExtrasTag === '__editorExtras__', 'editorExtrasTag needs to be updated.');
            function editorExtendableInternal(Base, className) {
              {
                return Base !== null && Base !== void 0 ? Base : Empty;
              }
            }

            var _decorator = /*#__PURE__*/Object.freeze({
                __proto__: null,
                uniquelyReferenced: uniquelyReferenced,
                ccclass: ccclass,
                property: property,
                requireComponent: requireComponent,
                executionOrder: executionOrder,
                disallowMultiple: disallowMultiple,
                executeInEditMode: executeInEditMode,
                menu: menu,
                playOnFocus: playOnFocus,
                inspector: inspector,
                icon: icon,
                help: help,
                type: type,
                integer: integer,
                float: float,
                boolean: boolean,
                string: string,
                editable: editable,
                tooltip: tooltip,
                visible: visible,
                displayName: displayName,
                displayOrder: displayOrder,
                range: range,
                rangeStep: rangeStep,
                slide: slide,
                disallowAnimation: disallowAnimation,
                override: override,
                formerlySerializedAs: formerlySerializedAs,
                serializable: serializable
            });
            exports('ap', _decorator);

            var _dec$2, _class$2, _class2$1, _initializer$1, _initializer2$1, _initializer3$1, _initializer4$1, _class3;
            let StorageUnit;
            (function (StorageUnit) {
              StorageUnit[StorageUnit["Uint8"] = 0] = "Uint8";
              StorageUnit[StorageUnit["Uint16"] = 1] = "Uint16";
              StorageUnit[StorageUnit["Uint32"] = 2] = "Uint32";
              StorageUnit[StorageUnit["Int8"] = 3] = "Int8";
              StorageUnit[StorageUnit["Int16"] = 4] = "Int16";
              StorageUnit[StorageUnit["Int32"] = 5] = "Int32";
              StorageUnit[StorageUnit["Float32"] = 6] = "Float32";
              StorageUnit[StorageUnit["Float64"] = 7] = "Float64";
            })(StorageUnit || (StorageUnit = {}));
            let ElementType;
            (function (ElementType) {
              ElementType[ElementType["Scalar"] = 0] = "Scalar";
              ElementType[ElementType["Vec2"] = 1] = "Vec2";
              ElementType[ElementType["Vec3"] = 2] = "Vec3";
              ElementType[ElementType["Vec4"] = 3] = "Vec4";
              ElementType[ElementType["Quat"] = 4] = "Quat";
              ElementType[ElementType["Mat4"] = 5] = "Mat4";
            })(ElementType || (ElementType = {}));
            const elementTypeBits = 3;
            function combineStorageUnitElementType(unit, elementType) {
              return (elementType << elementTypeBits) + unit;
            }
            function extractStorageUnitElementType(combined) {
              return {
                storageUnit: ~(-1 << elementTypeBits) & combined,
                elementType: combined >> elementTypeBits
              };
            }
            let CompactValueTypeArray = exports('ax', (_dec$2 = ccclass('cc.CompactValueTypeArray'), _dec$2(_class$2 = (_class2$1 = (_class3 = class CompactValueTypeArray {
              constructor() {
                this._byteOffset = _initializer$1 && _initializer$1();
                this._unitCount = _initializer2$1 && _initializer2$1();
                this._unitElement = _initializer3$1 && _initializer3$1();
                this._length = _initializer4$1 && _initializer4$1();
              }
              static lengthFor(values, elementType, unit) {
                const elementTraits = getElementTraits(elementType);
                return elementTraits.requiredUnits * values.length * getStorageConstructor(unit).BYTES_PER_ELEMENT;
              }
              static compress(values, elementType, unit, arrayBuffer, byteOffset, presumedByteOffset) {
                const elementTraits = getElementTraits(elementType);
                const storageConstructor = getStorageConstructor(unit);
                const unitCount = elementTraits.requiredUnits * values.length;
                const storage = new storageConstructor(arrayBuffer, byteOffset, unitCount);
                for (let i = 0; i < values.length; ++i) {
                  elementTraits.compress(storage, i, values[i]);
                }
                const result = new CompactValueTypeArray();
                result._unitElement = combineStorageUnitElementType(unit, elementType);
                result._byteOffset = presumedByteOffset;
                result._unitCount = unitCount;
                result._length = values.length;
                return result;
              }
              decompress(arrayBuffer) {
                const {
                  storageUnit,
                  elementType
                } = extractStorageUnitElementType(this._unitElement);
                const elementTraits = getElementTraits(elementType);
                const storageConstructor = getStorageConstructor(storageUnit);
                const storage = new storageConstructor(arrayBuffer, this._byteOffset, this._unitCount);
                const result = new Array(this._length);
                for (let i = 0; i < this._length; ++i) {
                  result[i] = elementTraits.decompress(storage, i);
                }
                return result;
              }
            }, _class3.StorageUnit = StorageUnit, _class3.ElementType = ElementType, _class3), (_initializer$1 = applyDecoratedInitializer(_class2$1.prototype, "_byteOffset", [serializable], function () {
              return 0;
            }), _initializer2$1 = applyDecoratedInitializer(_class2$1.prototype, "_unitCount", [serializable], function () {
              return 0;
            }), _initializer3$1 = applyDecoratedInitializer(_class2$1.prototype, "_unitElement", [serializable], function () {
              return combineStorageUnitElementType(StorageUnit.Uint8, ElementType.Scalar);
            }), _initializer4$1 = applyDecoratedInitializer(_class2$1.prototype, "_length", [serializable], function () {
              return 0;
            })), _class2$1)) || _class$2));
            function getElementTraits(elementType) {
              return BuiltinElementTypeTraits[elementType];
            }
            function getStorageConstructor(unit) {
              switch (unit) {
                case StorageUnit.Uint8:
                  return Uint8Array;
                case StorageUnit.Uint16:
                  return Uint16Array;
                case StorageUnit.Uint32:
                  return Uint32Array;
                case StorageUnit.Int8:
                  return Int8Array;
                case StorageUnit.Int16:
                  return Int16Array;
                case StorageUnit.Int32:
                  return Int32Array;
                case StorageUnit.Float32:
                  return Float32Array;
                case StorageUnit.Float64:
                  return Float64Array;
              }
            }
            const BuiltinElementTypeTraits = {
              [ElementType.Scalar]: {
                requiredUnits: 1,
                compress(storage, index, value) {
                  storage[index] = value;
                },
                decompress(storage, index) {
                  return storage[index];
                }
              },
              [ElementType.Vec2]: {
                requiredUnits: 2,
                compress(storage, index, value) {
                  storage[index * 2] = value.x;
                  storage[index * 2 + 1] = value.y;
                },
                decompress(storage, index) {
                  return new Vec3(storage[index * 2], storage[index * 2 + 1]);
                }
              },
              [ElementType.Vec3]: {
                requiredUnits: 3,
                compress(storage, index, value) {
                  storage[index * 3] = value.x;
                  storage[index * 3 + 1] = value.y;
                  storage[index * 3 + 2] = value.z;
                },
                decompress(storage, index) {
                  return new Vec3(storage[index * 3], storage[index * 3 + 1], storage[index * 3 + 2]);
                }
              },
              [ElementType.Vec4]: {
                requiredUnits: 4,
                compress(storage, index, value) {
                  storage[index * 4] = value.x;
                  storage[index * 4 + 1] = value.y;
                  storage[index * 4 + 2] = value.z;
                  storage[index * 4 + 3] = value.w;
                },
                decompress(storage, index) {
                  return new Vec4(storage[index * 4], storage[index * 4 + 1], storage[index * 4 + 2], storage[index * 4 + 3]);
                }
              },
              [ElementType.Quat]: {
                requiredUnits: 4,
                compress(storage, index, value) {
                  storage[index * 4] = value.x;
                  storage[index * 4 + 1] = value.y;
                  storage[index * 4 + 2] = value.z;
                  storage[index * 4 + 3] = value.w;
                },
                decompress(storage, index) {
                  return new Quat(storage[index * 4], storage[index * 4 + 1], storage[index * 4 + 2], storage[index * 4 + 3]);
                }
              },
              [ElementType.Mat4]: {
                requiredUnits: 16,
                compress(storage, index, value) {
                  Mat4.toArray(storage, value, index * 16);
                },
                decompress(storage, index) {
                  return Mat4.fromArray(new Mat4(), storage, index * 16);
                }
              }
            };

            const serializeTag = exports('aA', Symbol('[[Serialize]]'));
            const deserializeTag = exports('az', Symbol('[[Deserialize]]'));

            legacyCC._decorator = _decorator;

            function constant() {
              return 0;
            }
            function linear(k) {
              return k;
            }
            function quadIn(k) {
              return k * k;
            }
            function quadOut(k) {
              return k * (2 - k);
            }
            function quadInOut(k) {
              k *= 2;
              if (k < 1) {
                return 0.5 * k * k;
              }
              return -0.5 * (--k * (k - 2) - 1);
            }
            function cubicIn(k) {
              return k * k * k;
            }
            function cubicOut(k) {
              return --k * k * k + 1;
            }
            function cubicInOut(k) {
              k *= 2;
              if (k < 1) {
                return 0.5 * k * k * k;
              }
              return 0.5 * ((k -= 2) * k * k + 2);
            }
            function quartIn(k) {
              return k * k * k * k;
            }
            function quartOut(k) {
              return 1 - --k * k * k * k;
            }
            function quartInOut(k) {
              k *= 2;
              if (k < 1) {
                return 0.5 * k * k * k * k;
              }
              return -0.5 * ((k -= 2) * k * k * k - 2);
            }
            function quintIn(k) {
              return k * k * k * k * k;
            }
            function quintOut(k) {
              return --k * k * k * k * k + 1;
            }
            function quintInOut(k) {
              k *= 2;
              if (k < 1) {
                return 0.5 * k * k * k * k * k;
              }
              return 0.5 * ((k -= 2) * k * k * k * k + 2);
            }
            function sineIn(k) {
              if (k === 1) {
                return 1;
              }
              return 1 - Math.cos(k * Math.PI / 2);
            }
            function sineOut(k) {
              return Math.sin(k * Math.PI / 2);
            }
            function sineInOut(k) {
              return 0.5 * (1 - Math.cos(Math.PI * k));
            }
            function expoIn(k) {
              return k === 0 ? 0 : Math.pow(1024, k - 1);
            }
            function expoOut(k) {
              return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
            }
            function expoInOut(k) {
              if (k === 0) {
                return 0;
              }
              if (k === 1) {
                return 1;
              }
              k *= 2;
              if (k < 1) {
                return 0.5 * Math.pow(1024, k - 1);
              }
              return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
            }
            function circIn(k) {
              return 1 - Math.sqrt(1 - k * k);
            }
            function circOut(k) {
              return Math.sqrt(1 - --k * k);
            }
            function circInOut(k) {
              k *= 2;
              if (k < 1) {
                return -0.5 * (Math.sqrt(1 - k * k) - 1);
              }
              return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
            }
            function elasticIn(k) {
              let s;
              let a = 0.1;
              const p = 0.4;
              if (k === 0) {
                return 0;
              }
              if (k === 1) {
                return 1;
              }
              if (!a || a < 1) {
                a = 1;
                s = p / 4;
              } else {
                s = p * Math.asin(1 / a) / (2 * Math.PI);
              }
              return -(a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
            }
            function elasticOut(k) {
              let s;
              let a = 0.1;
              const p = 0.4;
              if (k === 0) {
                return 0;
              }
              if (k === 1) {
                return 1;
              }
              if (!a || a < 1) {
                a = 1;
                s = p / 4;
              } else {
                s = p * Math.asin(1 / a) / (2 * Math.PI);
              }
              return a * Math.pow(2, -10 * k) * Math.sin((k - s) * (2 * Math.PI) / p) + 1;
            }
            function elasticInOut(k) {
              let s;
              let a = 0.1;
              const p = 0.4;
              if (k === 0) {
                return 0;
              }
              if (k === 1) {
                return 1;
              }
              if (!a || a < 1) {
                a = 1;
                s = p / 4;
              } else {
                s = p * Math.asin(1 / a) / (2 * Math.PI);
              }
              k *= 2;
              if (k < 1) {
                return -0.5 * (a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
              }
              return a * Math.pow(2, -10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p) * 0.5 + 1;
            }
            function backIn(k) {
              if (k === 1) {
                return 1;
              }
              const s = 1.70158;
              return k * k * ((s + 1) * k - s);
            }
            function backOut(k) {
              if (k === 0) {
                return 0;
              }
              const s = 1.70158;
              return --k * k * ((s + 1) * k + s) + 1;
            }
            function backInOut(k) {
              const s = 1.70158 * 1.525;
              k *= 2;
              if (k < 1) {
                return 0.5 * (k * k * ((s + 1) * k - s));
              }
              return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
            }
            function bounceIn(k) {
              return 1 - bounceOut(1 - k);
            }
            function bounceOut(k) {
              if (k < 1 / 2.75) {
                return 7.5625 * k * k;
              } else if (k < 2 / 2.75) {
                return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
              } else if (k < 2.5 / 2.75) {
                return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
              } else {
                return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
              }
            }
            function bounceInOut(k) {
              if (k < 0.5) {
                return bounceIn(k * 2) * 0.5;
              }
              return bounceOut(k * 2 - 1) * 0.5 + 0.5;
            }
            function smooth(k) {
              if (k <= 0) {
                return 0;
              }
              if (k >= 1) {
                return 1;
              }
              return k * k * (3 - 2 * k);
            }
            function fade(k) {
              if (k <= 0) {
                return 0;
              }
              if (k >= 1) {
                return 1;
              }
              return k * k * k * (k * (k * 6 - 15) + 10);
            }
            const quadOutIn = _makeOutIn(quadIn, quadOut);
            const cubicOutIn = _makeOutIn(cubicIn, cubicOut);
            const quartOutIn = _makeOutIn(quartIn, quartOut);
            const quintOutIn = _makeOutIn(quintIn, quintOut);
            const sineOutIn = _makeOutIn(sineIn, sineOut);
            const expoOutIn = _makeOutIn(expoIn, expoOut);
            const circOutIn = _makeOutIn(circIn, circOut);
            const elasticOutIn = _makeOutIn(elasticIn, elasticOut);
            const backOutIn = _makeOutIn(backIn, backOut);
            const bounceOutIn = _makeOutIn(bounceIn, bounceOut);
            function _makeOutIn(fnIn, fnOut) {
              return k => {
                if (k < 0.5) {
                  return fnOut(k * 2) / 2;
                }
                return fnIn(2 * k - 1) / 2 + 0.5;
              };
            }

            var easing = /*#__PURE__*/Object.freeze({
                __proto__: null,
                constant: constant,
                linear: linear,
                quadIn: quadIn,
                quadOut: quadOut,
                quadInOut: quadInOut,
                cubicIn: cubicIn,
                cubicOut: cubicOut,
                cubicInOut: cubicInOut,
                quartIn: quartIn,
                quartOut: quartOut,
                quartInOut: quartInOut,
                quintIn: quintIn,
                quintOut: quintOut,
                quintInOut: quintInOut,
                sineIn: sineIn,
                sineOut: sineOut,
                sineInOut: sineInOut,
                expoIn: expoIn,
                expoOut: expoOut,
                expoInOut: expoInOut,
                circIn: circIn,
                circOut: circOut,
                circInOut: circInOut,
                elasticIn: elasticIn,
                elasticOut: elasticOut,
                elasticInOut: elasticInOut,
                backIn: backIn,
                backOut: backOut,
                backInOut: backInOut,
                bounceIn: bounceIn,
                bounceOut: bounceOut,
                bounceInOut: bounceInOut,
                smooth: smooth,
                fade: fade,
                quadOutIn: quadOutIn,
                cubicOutIn: cubicOutIn,
                quartOutIn: quartOutIn,
                quintOutIn: quintOutIn,
                sineOutIn: sineOutIn,
                expoOutIn: expoOutIn,
                circOutIn: circOutIn,
                elasticOutIn: elasticOutIn,
                backOutIn: backOutIn,
                bounceOutIn: bounceOutIn
            });
            exports('b0', easing);

            let EasingMethod; exports('bn', EasingMethod);
            (function (EasingMethod) {
              EasingMethod[EasingMethod["LINEAR"] = 0] = "LINEAR";
              EasingMethod[EasingMethod["CONSTANT"] = 1] = "CONSTANT";
              EasingMethod[EasingMethod["QUAD_IN"] = 2] = "QUAD_IN";
              EasingMethod[EasingMethod["QUAD_OUT"] = 3] = "QUAD_OUT";
              EasingMethod[EasingMethod["QUAD_IN_OUT"] = 4] = "QUAD_IN_OUT";
              EasingMethod[EasingMethod["QUAD_OUT_IN"] = 5] = "QUAD_OUT_IN";
              EasingMethod[EasingMethod["CUBIC_IN"] = 6] = "CUBIC_IN";
              EasingMethod[EasingMethod["CUBIC_OUT"] = 7] = "CUBIC_OUT";
              EasingMethod[EasingMethod["CUBIC_IN_OUT"] = 8] = "CUBIC_IN_OUT";
              EasingMethod[EasingMethod["CUBIC_OUT_IN"] = 9] = "CUBIC_OUT_IN";
              EasingMethod[EasingMethod["QUART_IN"] = 10] = "QUART_IN";
              EasingMethod[EasingMethod["QUART_OUT"] = 11] = "QUART_OUT";
              EasingMethod[EasingMethod["QUART_IN_OUT"] = 12] = "QUART_IN_OUT";
              EasingMethod[EasingMethod["QUART_OUT_IN"] = 13] = "QUART_OUT_IN";
              EasingMethod[EasingMethod["QUINT_IN"] = 14] = "QUINT_IN";
              EasingMethod[EasingMethod["QUINT_OUT"] = 15] = "QUINT_OUT";
              EasingMethod[EasingMethod["QUINT_IN_OUT"] = 16] = "QUINT_IN_OUT";
              EasingMethod[EasingMethod["QUINT_OUT_IN"] = 17] = "QUINT_OUT_IN";
              EasingMethod[EasingMethod["SINE_IN"] = 18] = "SINE_IN";
              EasingMethod[EasingMethod["SINE_OUT"] = 19] = "SINE_OUT";
              EasingMethod[EasingMethod["SINE_IN_OUT"] = 20] = "SINE_IN_OUT";
              EasingMethod[EasingMethod["SINE_OUT_IN"] = 21] = "SINE_OUT_IN";
              EasingMethod[EasingMethod["EXPO_IN"] = 22] = "EXPO_IN";
              EasingMethod[EasingMethod["EXPO_OUT"] = 23] = "EXPO_OUT";
              EasingMethod[EasingMethod["EXPO_IN_OUT"] = 24] = "EXPO_IN_OUT";
              EasingMethod[EasingMethod["EXPO_OUT_IN"] = 25] = "EXPO_OUT_IN";
              EasingMethod[EasingMethod["CIRC_IN"] = 26] = "CIRC_IN";
              EasingMethod[EasingMethod["CIRC_OUT"] = 27] = "CIRC_OUT";
              EasingMethod[EasingMethod["CIRC_IN_OUT"] = 28] = "CIRC_IN_OUT";
              EasingMethod[EasingMethod["CIRC_OUT_IN"] = 29] = "CIRC_OUT_IN";
              EasingMethod[EasingMethod["ELASTIC_IN"] = 30] = "ELASTIC_IN";
              EasingMethod[EasingMethod["ELASTIC_OUT"] = 31] = "ELASTIC_OUT";
              EasingMethod[EasingMethod["ELASTIC_IN_OUT"] = 32] = "ELASTIC_IN_OUT";
              EasingMethod[EasingMethod["ELASTIC_OUT_IN"] = 33] = "ELASTIC_OUT_IN";
              EasingMethod[EasingMethod["BACK_IN"] = 34] = "BACK_IN";
              EasingMethod[EasingMethod["BACK_OUT"] = 35] = "BACK_OUT";
              EasingMethod[EasingMethod["BACK_IN_OUT"] = 36] = "BACK_IN_OUT";
              EasingMethod[EasingMethod["BACK_OUT_IN"] = 37] = "BACK_OUT_IN";
              EasingMethod[EasingMethod["BOUNCE_IN"] = 38] = "BOUNCE_IN";
              EasingMethod[EasingMethod["BOUNCE_OUT"] = 39] = "BOUNCE_OUT";
              EasingMethod[EasingMethod["BOUNCE_IN_OUT"] = 40] = "BOUNCE_IN_OUT";
              EasingMethod[EasingMethod["BOUNCE_OUT_IN"] = 41] = "BOUNCE_OUT_IN";
              EasingMethod[EasingMethod["SMOOTH"] = 42] = "SMOOTH";
              EasingMethod[EasingMethod["FADE"] = 43] = "FADE";
            })(EasingMethod || (exports('bn', EasingMethod = {})));
            const easingMethodFnMap = {
              [EasingMethod.CONSTANT]: constant,
              [EasingMethod.LINEAR]: linear,
              [EasingMethod.QUAD_IN]: quadIn,
              [EasingMethod.QUAD_OUT]: quadOut,
              [EasingMethod.QUAD_IN_OUT]: quadInOut,
              [EasingMethod.QUAD_OUT_IN]: quadOutIn,
              [EasingMethod.CUBIC_IN]: cubicIn,
              [EasingMethod.CUBIC_OUT]: cubicOut,
              [EasingMethod.CUBIC_IN_OUT]: cubicInOut,
              [EasingMethod.CUBIC_OUT_IN]: cubicOutIn,
              [EasingMethod.QUART_IN]: quartIn,
              [EasingMethod.QUART_OUT]: quartOut,
              [EasingMethod.QUART_IN_OUT]: quartInOut,
              [EasingMethod.QUART_OUT_IN]: quartOutIn,
              [EasingMethod.QUINT_IN]: quintIn,
              [EasingMethod.QUINT_OUT]: quintOut,
              [EasingMethod.QUINT_IN_OUT]: quintInOut,
              [EasingMethod.QUINT_OUT_IN]: quintOutIn,
              [EasingMethod.SINE_IN]: sineIn,
              [EasingMethod.SINE_OUT]: sineOut,
              [EasingMethod.SINE_IN_OUT]: sineInOut,
              [EasingMethod.SINE_OUT_IN]: sineOutIn,
              [EasingMethod.EXPO_IN]: expoIn,
              [EasingMethod.EXPO_OUT]: expoOut,
              [EasingMethod.EXPO_IN_OUT]: expoInOut,
              [EasingMethod.EXPO_OUT_IN]: expoOutIn,
              [EasingMethod.CIRC_IN]: circIn,
              [EasingMethod.CIRC_OUT]: circOut,
              [EasingMethod.CIRC_IN_OUT]: circInOut,
              [EasingMethod.CIRC_OUT_IN]: circOutIn,
              [EasingMethod.ELASTIC_IN]: elasticIn,
              [EasingMethod.ELASTIC_OUT]: elasticOut,
              [EasingMethod.ELASTIC_IN_OUT]: elasticInOut,
              [EasingMethod.ELASTIC_OUT_IN]: elasticOutIn,
              [EasingMethod.BACK_IN]: backIn,
              [EasingMethod.BACK_OUT]: backOut,
              [EasingMethod.BACK_IN_OUT]: backInOut,
              [EasingMethod.BACK_OUT_IN]: backOutIn,
              [EasingMethod.BOUNCE_IN]: bounceIn,
              [EasingMethod.BOUNCE_OUT]: bounceOut,
              [EasingMethod.BOUNCE_IN_OUT]: bounceInOut,
              [EasingMethod.BOUNCE_OUT_IN]: bounceOutIn,
              [EasingMethod.SMOOTH]: smooth,
              [EasingMethod.FADE]: fade
            };
            function getEasingFn(easingMethod) {
              assertIsTrue(easingMethod in easingMethodFnMap);
              return easingMethodFnMap[easingMethod];
            }

            const REAL_KEYFRAME_VALUE_FLAGS_INTERPOLATION_MODE_START = 0;
            const REAL_KEYFRAME_VALUE_FLAGS_INTERPOLATION_MODE_MASK = 0xFF << REAL_KEYFRAME_VALUE_FLAGS_INTERPOLATION_MODE_START;
            const REAL_KEYFRAME_VALUE_FLAGS_TANGENT_WEIGHT_MODE_START = 8;
            const REAL_KEYFRAME_VALUE_FLAGS_TANGENT_WEIGHT_MODE_MASK = 0xFF << REAL_KEYFRAME_VALUE_FLAGS_TANGENT_WEIGHT_MODE_START;
            const REAL_KEYFRAME_VALUE_FLAGS_EASING_METHOD_START = 16;
            const REAL_KEYFRAME_VALUE_FLAGS_EASING_METHOD_MASK = 0xFF << REAL_KEYFRAME_VALUE_FLAGS_EASING_METHOD_START;
            assertIsTrue(REAL_KEYFRAME_VALUE_FLAGS_TANGENT_WEIGHT_MODE_START === REAL_KEYFRAME_VALUE_FLAGS_INTERPOLATION_MODE_START + popCount(REAL_KEYFRAME_VALUE_FLAGS_INTERPOLATION_MODE_MASK));
            assertIsTrue(REAL_KEYFRAME_VALUE_FLAGS_EASING_METHOD_START === REAL_KEYFRAME_VALUE_FLAGS_TANGENT_WEIGHT_MODE_START + popCount(REAL_KEYFRAME_VALUE_FLAGS_TANGENT_WEIGHT_MODE_MASK));
            const REAL_KEYFRAME_VALUE_DEFAULT_FLAGS = RealInterpolationMode.LINEAR << REAL_KEYFRAME_VALUE_FLAGS_INTERPOLATION_MODE_START | TangentWeightMode.NONE << REAL_KEYFRAME_VALUE_FLAGS_TANGENT_WEIGHT_MODE_START | EasingMethod.LINEAR << REAL_KEYFRAME_VALUE_FLAGS_EASING_METHOD_START;
            class RealKeyframeValue extends EditorExtendable {
              constructor(...args) {
                super(...args);
                this.value = 0.0;
                this.rightTangent = 0.0;
                this.rightTangentWeight = 0.0;
                this.leftTangent = 0.0;
                this.leftTangentWeight = 0.0;
                this._flags = REAL_KEYFRAME_VALUE_DEFAULT_FLAGS;
              }
              get interpolationMode() {
                return (this._flags & REAL_KEYFRAME_VALUE_FLAGS_INTERPOLATION_MODE_MASK) >> REAL_KEYFRAME_VALUE_FLAGS_INTERPOLATION_MODE_START;
              }
              set interpolationMode(value) {
                this._flags &= ~REAL_KEYFRAME_VALUE_FLAGS_INTERPOLATION_MODE_MASK;
                this._flags |= value << REAL_KEYFRAME_VALUE_FLAGS_INTERPOLATION_MODE_START;
              }
              get tangentWeightMode() {
                return (this._flags & REAL_KEYFRAME_VALUE_FLAGS_TANGENT_WEIGHT_MODE_MASK) >> REAL_KEYFRAME_VALUE_FLAGS_TANGENT_WEIGHT_MODE_START;
              }
              set tangentWeightMode(value) {
                this._flags &= ~REAL_KEYFRAME_VALUE_FLAGS_TANGENT_WEIGHT_MODE_MASK;
                this._flags |= value << REAL_KEYFRAME_VALUE_FLAGS_TANGENT_WEIGHT_MODE_START;
              }
              get easingMethod() {
                return (this._flags & REAL_KEYFRAME_VALUE_FLAGS_EASING_METHOD_MASK) >> REAL_KEYFRAME_VALUE_FLAGS_EASING_METHOD_START;
              }
              set easingMethod(value) {
                this._flags &= ~REAL_KEYFRAME_VALUE_FLAGS_EASING_METHOD_MASK;
                this._flags |= value << REAL_KEYFRAME_VALUE_FLAGS_EASING_METHOD_START;
              }
            }
            CCClass.fastDefine('cc.RealKeyframeValue', RealKeyframeValue, {
              interpolationMode: RealInterpolationMode.LINEAR,
              tangentWeightMode: TangentWeightMode.NONE,
              value: 0.0,
              rightTangent: 0.0,
              rightTangentWeight: 0.0,
              leftTangent: 0.0,
              leftTangentWeight: 0.0,
              easingMethod: EasingMethod.LINEAR,
              [editorExtrasTag]: undefined
            });
            CCClass.Attr.setClassAttr(RealKeyframeValue, editorExtrasTag, 'editorOnly', true);
            getOrCreateSerializationMetadata(RealKeyframeValue).uniquelyReferenced = true;
            function createRealKeyframeValue(params) {
              const realKeyframeValue = new RealKeyframeValue();
              if (typeof params === 'number') {
                realKeyframeValue.value = params;
              } else {
                const {
                  interpolationMode,
                  tangentWeightMode,
                  value,
                  rightTangent,
                  rightTangentWeight,
                  leftTangent,
                  leftTangentWeight,
                  easingMethod,
                  [editorExtrasTag]: editorExtras
                } = params;
                realKeyframeValue.value = value !== null && value !== void 0 ? value : realKeyframeValue.value;
                realKeyframeValue.rightTangent = rightTangent !== null && rightTangent !== void 0 ? rightTangent : realKeyframeValue.rightTangent;
                realKeyframeValue.rightTangentWeight = rightTangentWeight !== null && rightTangentWeight !== void 0 ? rightTangentWeight : realKeyframeValue.rightTangentWeight;
                realKeyframeValue.leftTangent = leftTangent !== null && leftTangent !== void 0 ? leftTangent : realKeyframeValue.leftTangent;
                realKeyframeValue.leftTangentWeight = leftTangentWeight !== null && leftTangentWeight !== void 0 ? leftTangentWeight : realKeyframeValue.leftTangentWeight;
                realKeyframeValue.interpolationMode = interpolationMode !== null && interpolationMode !== void 0 ? interpolationMode : realKeyframeValue.interpolationMode;
                realKeyframeValue.tangentWeightMode = tangentWeightMode !== null && tangentWeightMode !== void 0 ? tangentWeightMode : realKeyframeValue.tangentWeightMode;
                realKeyframeValue.easingMethod = easingMethod !== null && easingMethod !== void 0 ? easingMethod : realKeyframeValue.easingMethod;
                if (editorExtras) {
                  realKeyframeValue[editorExtrasTag] = editorExtras;
                }
              }
              return realKeyframeValue;
            }
            class RealCurve extends KeyframeCurve {
              constructor(...args) {
                super(...args);
                this.preExtrapolation = ExtrapolationMode.CLAMP;
                this.postExtrapolation = ExtrapolationMode.CLAMP;
              }
              evaluate(time) {
                const {
                  _times: times,
                  _values: values
                } = this;
                const nFrames = times.length;
                if (nFrames === 0) {
                  return 0.0;
                }
                const firstTime = times[0];
                const lastTime = times[nFrames - 1];
                if (time < firstTime) {
                  const {
                    preExtrapolation
                  } = this;
                  const preValue = values[0];
                  if (preExtrapolation === ExtrapolationMode.CLAMP || nFrames < 2) {
                    return preValue.value;
                  }
                  switch (preExtrapolation) {
                    case ExtrapolationMode.LINEAR:
                      return linearTrend(firstTime, values[0].value, times[1], values[1].value, time);
                    case ExtrapolationMode.LOOP:
                      time = wrapRepeat(time, firstTime, lastTime);
                      break;
                    case ExtrapolationMode.PING_PONG:
                      time = wrapPingPong(time, firstTime, lastTime);
                      break;
                    default:
                      return preValue.value;
                  }
                } else if (time > lastTime) {
                  const {
                    postExtrapolation
                  } = this;
                  const preFrame = values[nFrames - 1];
                  if (postExtrapolation === ExtrapolationMode.CLAMP || nFrames < 2) {
                    return preFrame.value;
                  }
                  switch (postExtrapolation) {
                    case ExtrapolationMode.LINEAR:
                      return linearTrend(lastTime, preFrame.value, times[nFrames - 2], values[nFrames - 2].value, time);
                    case ExtrapolationMode.LOOP:
                      time = wrapRepeat(time, firstTime, lastTime);
                      break;
                    case ExtrapolationMode.PING_PONG:
                      time = wrapPingPong(time, firstTime, lastTime);
                      break;
                    default:
                      return preFrame.value;
                  }
                }
                const index = binarySearchEpsilon(times, time);
                if (index >= 0) {
                  return values[index].value;
                }
                const iNext = ~index;
                {
                  assertIsTrue(iNext !== 0 && iNext !== nFrames && nFrames > 1);
                }
                const iPre = iNext - 1;
                const preTime = times[iPre];
                const preValue = values[iPre];
                const nextTime = times[iNext];
                const nextValue = values[iNext];
                {
                  assertIsTrue(nextTime > time && time > preTime);
                }
                const dt = nextTime - preTime;
                const ratio = (time - preTime) / dt;
                return evalBetweenTwoKeyFrames(preTime, preValue, nextTime, nextValue, ratio);
              }
              addKeyFrame(time, value) {
                return super.addKeyFrame(time, createRealKeyframeValue(value));
              }
              assignSorted(times, values) {
                if (values !== undefined) {
                  assertIsTrue(Array.isArray(times));
                  this.setKeyframes(times.slice(), values.map(value => createRealKeyframeValue(value)));
                } else {
                  const keyframes = Array.from(times);
                  this.setKeyframes(keyframes.map(([time]) => time), keyframes.map(([, value]) => createRealKeyframeValue(value)));
                }
              }
              isConstant(tolerance) {
                if (this._values.length <= 1) {
                  return true;
                }
                const firstVal = this._values[0].value;
                return this._values.every(frame => approx(frame.value, firstVal, tolerance));
              }
              [serializeTag](output, context) {
                if (!context.toCCON) {
                  output.writeThis();
                  return;
                }
                const {
                  _times: times,
                  _values: keyframeValues
                } = this;
                const nKeyframes = times.length;
                const dataSize = 0 + OVERFLOW_BYTES + OVERFLOW_BYTES + FRAME_COUNT_BYTES$1 + TIME_BYTES$1 * nKeyframes + REAL_KEY_FRAME_VALUE_MAX_SIZE * nKeyframes;
                const dataView = new DataView(new ArrayBuffer(dataSize));
                let currentOffset = 0;
                dataView.setUint8(currentOffset, this.preExtrapolation);
                currentOffset += OVERFLOW_BYTES;
                dataView.setUint8(currentOffset, this.postExtrapolation);
                currentOffset += OVERFLOW_BYTES;
                dataView.setUint32(currentOffset, nKeyframes, true);
                currentOffset += FRAME_COUNT_BYTES$1;
                times.forEach((time, index) => dataView.setFloat32(currentOffset + TIME_BYTES$1 * index, time, true));
                currentOffset += TIME_BYTES$1 * nKeyframes;
                for (const keyframeValue of keyframeValues) {
                  currentOffset = saveRealKeyFrameValue(dataView, keyframeValue, currentOffset);
                }
                const bytes = new Uint8Array(dataView.buffer, 0, currentOffset);
                output.writeProperty('bytes', bytes);
                const keyframeValueEditorExtras = keyframeValues.map(keyframeValue => keyframeValue[editorExtrasTag]);
                if (keyframeValueEditorExtras.some(extras => extras !== undefined)) {
                  output.writeProperty(`keyframeValueEditorExtras`, keyframeValueEditorExtras);
                }
              }
              [deserializeTag](input, context) {
                if (!context.fromCCON) {
                  input.readThis();
                  return;
                }
                const bytes = input.readProperty('bytes');
                const dataView = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
                let currentOffset = 0;
                this.preExtrapolation = dataView.getUint8(currentOffset);
                currentOffset += OVERFLOW_BYTES;
                this.postExtrapolation = dataView.getUint8(currentOffset);
                currentOffset += OVERFLOW_BYTES;
                const nKeyframes = dataView.getUint32(currentOffset, true);
                currentOffset += FRAME_COUNT_BYTES$1;
                const times = Array.from({
                  length: nKeyframes
                }, (_, index) => dataView.getFloat32(currentOffset + TIME_BYTES$1 * index, true));
                currentOffset += TIME_BYTES$1 * nKeyframes;
                const keyframeValues = new Array(nKeyframes);
                for (let iKeyFrame = 0; iKeyFrame < nKeyframes; ++iKeyFrame) {
                  const keyframeValue = createRealKeyframeValue({});
                  currentOffset = loadRealKeyFrameValue(dataView, keyframeValue, currentOffset);
                  keyframeValues[iKeyFrame] = keyframeValue;
                }
                assertIsTrue(currentOffset === bytes.byteLength);
                const keyframeValueEditorExtras = input.readProperty(`keyframeValueEditorExtras`);
                if (keyframeValueEditorExtras) {
                  assertIsTrue(keyframeValueEditorExtras.length === nKeyframes);
                  keyframeValueEditorExtras.forEach((extras, index) => keyframeValues[index][editorExtrasTag] = extras);
                }
                this._times = times;
                this._values = keyframeValues;
              }
            } exports('aP', RealCurve);
            CCClass.fastDefine('cc.RealCurve', RealCurve, {
              _times: [],
              _values: [],
              preExtrapolation: ExtrapolationMode.CLAMP,
              postExtrapolation: ExtrapolationMode.CLAMP
            });
            const FLAGS_EASING_METHOD_BITS_START = 8;
            const FLAG_EASING_METHOD_MASK = 0xFF << FLAGS_EASING_METHOD_BITS_START;
            var KeyframeValueFlagMask$1;
            (function (KeyframeValueFlagMask) {
              KeyframeValueFlagMask[KeyframeValueFlagMask["VALUE"] = 1] = "VALUE";
              KeyframeValueFlagMask[KeyframeValueFlagMask["INTERPOLATION_MODE"] = 2] = "INTERPOLATION_MODE";
              KeyframeValueFlagMask[KeyframeValueFlagMask["TANGENT_WEIGHT_MODE"] = 4] = "TANGENT_WEIGHT_MODE";
              KeyframeValueFlagMask[KeyframeValueFlagMask["LEFT_TANGENT"] = 8] = "LEFT_TANGENT";
              KeyframeValueFlagMask[KeyframeValueFlagMask["LEFT_TANGENT_WEIGHT"] = 16] = "LEFT_TANGENT_WEIGHT";
              KeyframeValueFlagMask[KeyframeValueFlagMask["RIGHT_TANGENT"] = 32] = "RIGHT_TANGENT";
              KeyframeValueFlagMask[KeyframeValueFlagMask["RIGHT_TANGENT_WEIGHT"] = 64] = "RIGHT_TANGENT_WEIGHT";
            })(KeyframeValueFlagMask$1 || (KeyframeValueFlagMask$1 = {}));
            const OVERFLOW_BYTES = 1;
            const FRAME_COUNT_BYTES$1 = 4;
            const TIME_BYTES$1 = 4;
            const KEY_FRAME_VALUE_FLAGS_BYTES = 4;
            const VALUE_BYTES$1 = 4;
            const INTERPOLATION_MODE_BYTES$1 = 1;
            const TANGENT_WEIGHT_MODE_BYTES = 1;
            const LEFT_TANGENT_BYTES = 4;
            const LEFT_TANGENT_WEIGHT_BYTES = 4;
            const RIGHT_TANGENT_BYTES = 4;
            const RIGHT_TANGENT_WEIGHT_BYTES = 4;
            const {
              interpolationMode: DEFAULT_INTERPOLATION_MODE,
              tangentWeightMode: DEFAULT_TANGENT_WEIGHT_MODE,
              leftTangent: DEFAULT_LEFT_TANGENT,
              leftTangentWeight: DEFAULT_LEFT_TANGENT_WEIGHT,
              rightTangent: DEFAULT_RIGHT_TANGENT,
              rightTangentWeight: DEFAULT_RIGHT_TANGENT_WEIGHT
            } = createRealKeyframeValue({});
            const REAL_KEY_FRAME_VALUE_MAX_SIZE = KEY_FRAME_VALUE_FLAGS_BYTES + VALUE_BYTES$1 + INTERPOLATION_MODE_BYTES$1 + TANGENT_WEIGHT_MODE_BYTES + LEFT_TANGENT_BYTES + LEFT_TANGENT_WEIGHT_BYTES + RIGHT_TANGENT_BYTES + RIGHT_TANGENT_WEIGHT_BYTES + 0;
            function saveRealKeyFrameValue(dataView, keyframeValue, offset) {
              let flags = 0;
              let currentOffset = offset;
              const pFlags = currentOffset;
              currentOffset += KEY_FRAME_VALUE_FLAGS_BYTES;
              const {
                value,
                interpolationMode,
                tangentWeightMode,
                rightTangent,
                rightTangentWeight,
                leftTangent,
                leftTangentWeight,
                easingMethod
              } = keyframeValue;
              dataView.setFloat32(currentOffset, value, true);
              currentOffset += VALUE_BYTES$1;
              if (interpolationMode !== DEFAULT_INTERPOLATION_MODE) {
                flags |= KeyframeValueFlagMask$1.INTERPOLATION_MODE;
                dataView.setUint8(currentOffset, interpolationMode);
                currentOffset += INTERPOLATION_MODE_BYTES$1;
              }
              if (tangentWeightMode !== DEFAULT_TANGENT_WEIGHT_MODE) {
                flags |= KeyframeValueFlagMask$1.TANGENT_WEIGHT_MODE;
                dataView.setUint8(currentOffset, tangentWeightMode);
                currentOffset += TANGENT_WEIGHT_MODE_BYTES;
              }
              if (leftTangent !== DEFAULT_LEFT_TANGENT) {
                flags |= KeyframeValueFlagMask$1.LEFT_TANGENT;
                dataView.setFloat32(currentOffset, leftTangent, true);
                currentOffset += LEFT_TANGENT_BYTES;
              }
              if (leftTangentWeight !== DEFAULT_LEFT_TANGENT_WEIGHT) {
                flags |= KeyframeValueFlagMask$1.LEFT_TANGENT_WEIGHT;
                dataView.setFloat32(currentOffset, leftTangentWeight, true);
                currentOffset += LEFT_TANGENT_WEIGHT_BYTES;
              }
              if (rightTangent !== DEFAULT_RIGHT_TANGENT) {
                flags |= KeyframeValueFlagMask$1.RIGHT_TANGENT;
                dataView.setFloat32(currentOffset, rightTangent, true);
                currentOffset += RIGHT_TANGENT_BYTES;
              }
              if (rightTangentWeight !== DEFAULT_RIGHT_TANGENT_WEIGHT) {
                flags |= KeyframeValueFlagMask$1.RIGHT_TANGENT_WEIGHT;
                dataView.setFloat32(currentOffset, rightTangentWeight, true);
                currentOffset += RIGHT_TANGENT_WEIGHT_BYTES;
              }
              flags |= easingMethod << FLAGS_EASING_METHOD_BITS_START;
              dataView.setUint32(pFlags, flags, true);
              return currentOffset;
            }
            function loadRealKeyFrameValue(dataView, keyframeValue, offset) {
              let currentOffset = offset;
              const flags = dataView.getUint32(currentOffset, true);
              currentOffset += KEY_FRAME_VALUE_FLAGS_BYTES;
              keyframeValue.value = dataView.getFloat32(currentOffset, true);
              currentOffset += VALUE_BYTES$1;
              if (flags & KeyframeValueFlagMask$1.INTERPOLATION_MODE) {
                keyframeValue.interpolationMode = dataView.getUint8(currentOffset);
                currentOffset += INTERPOLATION_MODE_BYTES$1;
              }
              if (flags & KeyframeValueFlagMask$1.TANGENT_WEIGHT_MODE) {
                keyframeValue.tangentWeightMode = dataView.getUint8(currentOffset);
                currentOffset += TANGENT_WEIGHT_MODE_BYTES;
              }
              if (flags & KeyframeValueFlagMask$1.LEFT_TANGENT) {
                keyframeValue.leftTangent = dataView.getFloat32(currentOffset, true);
                currentOffset += LEFT_TANGENT_BYTES;
              }
              if (flags & KeyframeValueFlagMask$1.LEFT_TANGENT_WEIGHT) {
                keyframeValue.leftTangentWeight = dataView.getFloat32(currentOffset, true);
                currentOffset += LEFT_TANGENT_WEIGHT_BYTES;
              }
              if (flags & KeyframeValueFlagMask$1.RIGHT_TANGENT) {
                keyframeValue.rightTangent = dataView.getFloat32(currentOffset, true);
                currentOffset += RIGHT_TANGENT_BYTES;
              }
              if (flags & KeyframeValueFlagMask$1.RIGHT_TANGENT_WEIGHT) {
                keyframeValue.rightTangentWeight = dataView.getFloat32(currentOffset, true);
                currentOffset += RIGHT_TANGENT_WEIGHT_BYTES;
              }
              const easingMethod = (flags & FLAG_EASING_METHOD_MASK) >> FLAGS_EASING_METHOD_BITS_START;
              keyframeValue.easingMethod = easingMethod;
              return currentOffset;
            }
            function wrapRepeat(time, prevTime, nextTime) {
              return prevTime + repeat(time - prevTime, nextTime - prevTime);
            }
            function wrapPingPong(time, prevTime, nextTime) {
              return prevTime + pingPong(time - prevTime, nextTime - prevTime);
            }
            function linearTrend(prevTime, prevValue, nextTime, nextValue, time) {
              const slope = (nextValue - prevValue) / (nextTime - prevTime);
              return prevValue + (time - prevTime) * slope;
            }
            function evalBetweenTwoKeyFrames(prevTime, prevValue, nextTime, nextValue, ratio) {
              const dt = nextTime - prevTime;
              switch (prevValue.interpolationMode) {
                default:
                case RealInterpolationMode.CONSTANT:
                  return prevValue.value;
                case RealInterpolationMode.LINEAR:
                  {
                    const transformedRatio = prevValue.easingMethod === EasingMethod.LINEAR ? ratio : getEasingFn(prevValue.easingMethod)(ratio);
                    return lerp(prevValue.value, nextValue.value, transformedRatio);
                  }
                case RealInterpolationMode.CUBIC:
                  {
                    const ONE_THIRD = 1.0 / 3.0;
                    const {
                      rightTangent: prevTangent,
                      rightTangentWeight: prevTangentWeightSpecified
                    } = prevValue;
                    const prevTangentWeightEnabled = isRightTangentWeightEnabled(prevValue.tangentWeightMode);
                    const {
                      leftTangent: nextTangent,
                      leftTangentWeight: nextTangentWeightSpecified
                    } = nextValue;
                    const nextTangentWeightEnabled = isLeftTangentWeightEnabled(nextValue.tangentWeightMode);
                    if (!prevTangentWeightEnabled && !nextTangentWeightEnabled) {
                      const p1 = prevValue.value + ONE_THIRD * prevTangent * dt;
                      const p2 = nextValue.value - ONE_THIRD * nextTangent * dt;
                      return bezierInterpolate(prevValue.value, p1, p2, nextValue.value, ratio);
                    } else {
                      let prevTangentWeight = 0.0;
                      if (prevTangentWeightEnabled) {
                        prevTangentWeight = prevTangentWeightSpecified;
                      } else {
                        const x = dt;
                        const y = dt * prevTangent;
                        prevTangentWeight = Math.sqrt(x * x + y * y) * ONE_THIRD;
                      }
                      const angle0 = Math.atan(prevTangent);
                      const tx0 = Math.cos(angle0) * prevTangentWeight + prevTime;
                      const ty0 = Math.sin(angle0) * prevTangentWeight + prevValue.value;
                      let nextTangentWeight = 0.0;
                      if (nextTangentWeightEnabled) {
                        nextTangentWeight = nextTangentWeightSpecified;
                      } else {
                        const x = dt;
                        const y = dt * nextTangent;
                        nextTangentWeight = Math.sqrt(x * x + y * y) * ONE_THIRD;
                      }
                      const angle1 = Math.atan(nextTangent);
                      const tx1 = -Math.cos(angle1) * nextTangentWeight + nextTime;
                      const ty1 = -Math.sin(angle1) * nextTangentWeight + nextValue.value;
                      const dx = dt;
                      const u0x = (tx0 - prevTime) / dx;
                      const u1x = (tx1 - prevTime) / dx;
                      const u0y = ty0;
                      const u1y = ty1;
                      const coeff0 = 0.0;
                      const coeff1 = 3.0 * u0x;
                      const coeff2 = 3.0 * u1x - 6.0 * u0x;
                      const coeff3 = 3.0 * (u0x - u1x) + 1.0;
                      const solutions = [0.0, 0.0, 0.0];
                      const nSolutions = solveCubic(coeff0 - ratio, coeff1, coeff2, coeff3, solutions);
                      const param = getParamFromCubicSolution(solutions, nSolutions, ratio);
                      const y = bezierInterpolate(prevValue.value, u0y, u1y, nextValue.value, param);
                      return y;
                    }
                  }
              }
            }
            function isLeftTangentWeightEnabled(tangentWeightMode) {
              return (tangentWeightMode & TangentWeightMode.LEFT) !== 0;
            }
            function isRightTangentWeightEnabled(tangentWeightMode) {
              return (tangentWeightMode & TangentWeightMode.RIGHT) !== 0;
            }
            function bezierInterpolate(p0, p1, p2, p3, t) {
              const u = 1 - t;
              const coeff0 = u * u * u;
              const coeff1 = 3 * u * u * t;
              const coeff2 = 3 * u * t * t;
              const coeff3 = t * t * t;
              return coeff0 * p0 + coeff1 * p1 + coeff2 * p2 + coeff3 * p3;
            }
            function getParamFromCubicSolution(solutions, solutionsCount, x) {
              let param = x;
              if (solutionsCount === 1) {
                param = solutions[0];
              } else {
                param = -Infinity;
                for (let iSolution = 0; iSolution < solutionsCount; ++iSolution) {
                  const solution = solutions[iSolution];
                  if (solution >= 0.0 && solution <= 1.0) {
                    if (solution > param) {
                      param = solution;
                    }
                  }
                }
                if (param === -Infinity) {
                  param = 0.0;
                }
              }
              return param;
            }

            function bezier(C1, C2, C3, C4, t) {
              const t1 = 1 - t;
              return t1 * (t1 * (C1 + (C2 * 3 - C1) * t) + C3 * 3 * t * t) + C4 * t * t * t;
            }
            legacyCC.bezier = bezier;
            const cos = Math.cos;
            const acos = Math.acos;
            const max = Math.max;
            const pi = Math.PI;
            const tau = 2 * pi;
            const sqrt = Math.sqrt;
            function crt(v) {
              if (v < 0) {
                return -Math.pow(-v, 1 / 3);
              } else {
                return Math.pow(v, 1 / 3);
              }
            }
            function cardano(curve, x) {
              const pa = x - 0;
              const pb = x - curve[0];
              const pc = x - curve[2];
              const pd = x - 1;
              const pa3 = pa * 3;
              const pb3 = pb * 3;
              const pc3 = pc * 3;
              const d = -pa + pb3 - pc3 + pd;
              const rd = 1 / d;
              const r3 = 1 / 3;
              const a = (pa3 - 6 * pb + pc3) * rd;
              const a3 = a * r3;
              const b = (-pa3 + pb3) * rd;
              const c = pa * rd;
              const p = (3 * b - a * a) * r3;
              const p3 = p * r3;
              const q = (2 * a * a * a - 9 * a * b + 27 * c) / 27;
              const q2 = q / 2;
              const discriminant = q2 * q2 + p3 * p3 * p3;
              let u1;
              let v1;
              let x1;
              let x2;
              let x3;
              if (discriminant < 0) {
                const mp3 = -p * r3;
                const mp33 = mp3 * mp3 * mp3;
                const r = sqrt(mp33);
                const t = -q / (2 * r);
                const cosphi = t < -1 ? -1 : t > 1 ? 1 : t;
                const phi = acos(cosphi);
                const crtr = crt(r);
                const t1 = 2 * crtr;
                x1 = t1 * cos(phi * r3) - a3;
                x2 = t1 * cos((phi + tau) * r3) - a3;
                x3 = t1 * cos((phi + 2 * tau) * r3) - a3;
                if (x1 >= 0 && x1 <= 1) {
                  if (x2 >= 0 && x2 <= 1) {
                    if (x3 >= 0 && x3 <= 1) {
                      return max(x1, x2, x3);
                    } else {
                      return max(x1, x2);
                    }
                  } else if (x3 >= 0 && x3 <= 1) {
                    return max(x1, x3);
                  } else {
                    return x1;
                  }
                } else if (x2 >= 0 && x2 <= 1) {
                  if (x3 >= 0 && x3 <= 1) {
                    return max(x2, x3);
                  } else {
                    return x2;
                  }
                } else {
                  return x3;
                }
              } else if (discriminant === 0) {
                u1 = q2 < 0 ? crt(-q2) : -crt(q2);
                x1 = 2 * u1 - a3;
                x2 = -u1 - a3;
                if (x1 >= 0 && x1 <= 1) {
                  if (x2 >= 0 && x2 <= 1) {
                    return max(x1, x2);
                  } else {
                    return x1;
                  }
                } else {
                  return x2;
                }
              } else {
                const sd = sqrt(discriminant);
                u1 = crt(-q2 + sd);
                v1 = crt(q2 + sd);
                x1 = u1 - v1 - a3;
                return x1;
              }
            }
            function bezierByTime(controlPoints, x) {
              const percent = cardano(controlPoints, x);
              const p1y = controlPoints[1];
              const p2y = controlPoints[3];
              return ((1 - percent) * (p1y + (p2y - p1y) * percent) * 3 + percent * percent) * percent;
            }
            legacyCC.bezierByTime = bezierByTime;

            var _dec$1, _class$1, _class2, _initializer, _initializer2, _initializer3, _dec2, _class4, _class5, _initializer4, _initializer5;
            let QuatInterpolationMode; exports('aU', QuatInterpolationMode);
            (function (QuatInterpolationMode) {
              QuatInterpolationMode[QuatInterpolationMode["SLERP"] = 0] = "SLERP";
              QuatInterpolationMode[QuatInterpolationMode["CONSTANT"] = 1] = "CONSTANT";
            })(QuatInterpolationMode || (exports('aU', QuatInterpolationMode = {})));
            let QuatKeyframeValue = (_dec$1 = ccclass('cc.QuatKeyframeValue'), _dec$1(_class$1 = uniquelyReferenced(_class$1 = (_class2 = class QuatKeyframeValue {
              constructor({
                value,
                interpolationMode,
                easingMethod
              } = {}) {
                this.interpolationMode = _initializer && _initializer();
                this.value = _initializer2 && _initializer2();
                this.easingMethod = _initializer3 && _initializer3();
                this.value = value ? Quat.clone(value) : this.value;
                this.interpolationMode = interpolationMode !== null && interpolationMode !== void 0 ? interpolationMode : this.interpolationMode;
                this.easingMethod = easingMethod !== null && easingMethod !== void 0 ? easingMethod : this.easingMethod;
              }
            }, (_initializer = applyDecoratedInitializer(_class2.prototype, "interpolationMode", [serializable], function () {
              return QuatInterpolationMode.SLERP;
            }), _initializer2 = applyDecoratedInitializer(_class2.prototype, "value", [serializable], function () {
              return Quat.clone(Quat.IDENTITY);
            }), _initializer3 = applyDecoratedInitializer(_class2.prototype, "easingMethod", [serializable], function () {
              return EasingMethod.LINEAR;
            })), _class2)) || _class$1) || _class$1);
            function createQuatKeyframeValue(params) {
              return new QuatKeyframeValue(params);
            }
            let QuatCurve = exports('aT', (_dec2 = ccclass('cc.QuatCurve'), _dec2(_class4 = (_class5 = class QuatCurve extends KeyframeCurve {
              constructor(...args) {
                super(...args);
                this.preExtrapolation = _initializer4 && _initializer4();
                this.postExtrapolation = _initializer5 && _initializer5();
              }
              evaluate(time, quat) {
                var _quat;
                (_quat = quat) !== null && _quat !== void 0 ? _quat : quat = new Quat();
                const {
                  _times: times,
                  _values: values,
                  postExtrapolation,
                  preExtrapolation
                } = this;
                const nFrames = times.length;
                if (nFrames === 0) {
                  return quat;
                }
                const firstTime = times[0];
                const lastTime = times[nFrames - 1];
                if (time < firstTime) {
                  const preValue = values[0];
                  switch (preExtrapolation) {
                    case ExtrapolationMode.LOOP:
                      time = firstTime + repeat(time - firstTime, lastTime - firstTime);
                      break;
                    case ExtrapolationMode.PING_PONG:
                      time = firstTime + pingPong(time - firstTime, lastTime - firstTime);
                      break;
                    case ExtrapolationMode.CLAMP:
                    default:
                      return Quat.copy(quat, preValue.value);
                  }
                } else if (time > lastTime) {
                  const preValue = values[nFrames - 1];
                  switch (postExtrapolation) {
                    case ExtrapolationMode.LOOP:
                      time = firstTime + repeat(time - firstTime, lastTime - firstTime);
                      break;
                    case ExtrapolationMode.PING_PONG:
                      time = firstTime + pingPong(time - firstTime, lastTime - firstTime);
                      break;
                    case ExtrapolationMode.CLAMP:
                    default:
                      return Quat.copy(quat, preValue.value);
                  }
                }
                const index = binarySearchEpsilon(times, time);
                if (index >= 0) {
                  return Quat.copy(quat, values[index].value);
                }
                const iNext = ~index;
                assertIsTrue(iNext !== 0 && iNext !== nFrames && nFrames > 1);
                const iPre = iNext - 1;
                const preTime = times[iPre];
                const preValue = values[iPre];
                const nextTime = times[iNext];
                const nextValue = values[iNext];
                assertIsTrue(nextTime > time && time > preTime);
                const dt = nextTime - preTime;
                const ratio = (time - preTime) / dt;
                switch (preValue.interpolationMode) {
                  default:
                  case QuatInterpolationMode.CONSTANT:
                    return Quat.copy(quat, preValue.value);
                  case QuatInterpolationMode.SLERP:
                    {
                      const {
                        easingMethod
                      } = preValue;
                      const transformedRatio = easingMethod === EasingMethod.LINEAR ? ratio : Array.isArray(easingMethod) ? bezierByTime(easingMethod, ratio) : getEasingFn(easingMethod)(ratio);
                      return Quat.slerp(quat, preValue.value, nextValue.value, transformedRatio);
                    }
                }
              }
              addKeyFrame(time, value) {
                const keyframeValue = new QuatKeyframeValue(value);
                return super.addKeyFrame(time, keyframeValue);
              }
              assignSorted(times, values) {
                if (values !== undefined) {
                  assertIsTrue(Array.isArray(times));
                  this.setKeyframes(times.slice(), values.map(value => createQuatKeyframeValue(value)));
                } else {
                  const keyframes = Array.from(times);
                  this.setKeyframes(keyframes.map(([time]) => time), keyframes.map(([, value]) => createQuatKeyframeValue(value)));
                }
              }
              [serializeTag](output, context) {
                if (!context.toCCON) {
                  output.writeThis();
                  return;
                }
                const {
                  _times: times,
                  _values: keyframeValues
                } = this;
                let interpolationModeRepeated = true;
                keyframeValues.forEach((keyframeValue, _index, [firstKeyframeValue]) => {
                  if (interpolationModeRepeated && keyframeValue.interpolationMode !== firstKeyframeValue.interpolationMode) {
                    interpolationModeRepeated = false;
                  }
                });
                const nKeyframes = times.length;
                const nFrames = nKeyframes;
                const interpolationModesSize = INTERPOLATION_MODE_BYTES * (interpolationModeRepeated ? 1 : nFrames);
                const easingMethodsSize = keyframeValues.reduce((result, {
                  easingMethod
                }) => result += Array.isArray(easingMethod) ? EASING_METHOD_BYTES + EASING_METHOD_BEZIER_COMPONENT_BYTES * 4 : EASING_METHOD_BYTES, 0);
                let dataSize = 0;
                dataSize += FLAGS_BYTES + FRAME_COUNT_BYTES + TIME_BYTES * nFrames + VALUE_BYTES * 4 * nFrames + easingMethodsSize + interpolationModesSize + 0;
                const dataView = new DataView(new ArrayBuffer(dataSize));
                let P = 0;
                let flags = 0;
                if (interpolationModeRepeated) {
                  flags |= KeyframeValueFlagMask.INTERPOLATION_MODE;
                }
                dataView.setUint32(P, flags, true);
                P += FLAGS_BYTES;
                dataView.setUint32(P, nFrames, true);
                P += FRAME_COUNT_BYTES;
                times.forEach((time, index) => dataView.setFloat32(P + TIME_BYTES * index, time, true));
                P += TIME_BYTES * nFrames;
                keyframeValues.forEach(({
                  value: {
                    x,
                    y,
                    z,
                    w
                  }
                }, index) => {
                  const pQuat = P + VALUE_BYTES * 4 * index;
                  dataView.setFloat32(pQuat + VALUE_BYTES * 0, x, true);
                  dataView.setFloat32(pQuat + VALUE_BYTES * 1, y, true);
                  dataView.setFloat32(pQuat + VALUE_BYTES * 2, z, true);
                  dataView.setFloat32(pQuat + VALUE_BYTES * 3, w, true);
                });
                P += VALUE_BYTES * 4 * nFrames;
                keyframeValues.forEach(({
                  easingMethod
                }, index) => {
                  if (!Array.isArray(easingMethod)) {
                    dataView.setUint8(P, easingMethod);
                    ++P;
                  } else {
                    dataView.setUint8(P, EASING_METHOD_BEZIER_TAG);
                    ++P;
                    dataView.setFloat32(P + EASING_METHOD_BEZIER_COMPONENT_BYTES * 0, easingMethod[0], true);
                    dataView.setFloat32(P + EASING_METHOD_BEZIER_COMPONENT_BYTES * 1, easingMethod[1], true);
                    dataView.setFloat32(P + EASING_METHOD_BEZIER_COMPONENT_BYTES * 2, easingMethod[2], true);
                    dataView.setFloat32(P + EASING_METHOD_BEZIER_COMPONENT_BYTES * 3, easingMethod[3], true);
                    P += EASING_METHOD_BEZIER_COMPONENT_BYTES * 4;
                  }
                });
                const INTERPOLATION_MODES_START = P;
                P += interpolationModesSize;
                let pInterpolationMode = INTERPOLATION_MODES_START;
                keyframeValues.forEach(({
                  interpolationMode
                }) => {
                  dataView.setUint8(pInterpolationMode, interpolationMode);
                  if (!interpolationModeRepeated) {
                    pInterpolationMode += INTERPOLATION_MODE_BYTES;
                  }
                });
                const bytes = new Uint8Array(dataView.buffer);
                output.writeProperty('bytes', bytes);
              }
              [deserializeTag](input, context) {
                if (!context.fromCCON) {
                  input.readThis();
                  return;
                }
                const bytes = input.readProperty('bytes');
                const dataView = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
                let P = 0;
                const flags = dataView.getUint32(P, true);
                P += FLAGS_BYTES;
                const interpolationModeRepeated = flags & KeyframeValueFlagMask.INTERPOLATION_MODE;
                const nFrames = dataView.getUint32(P, true);
                P += FRAME_COUNT_BYTES;
                const times = Array.from({
                  length: nFrames
                }, (_, index) => dataView.getFloat32(P + TIME_BYTES * index, true));
                P += TIME_BYTES * nFrames;
                const P_VALUES = P;
                P += VALUE_BYTES * 4 * nFrames;
                const keyframeValues = Array.from({
                  length: nFrames
                }, (_, index) => {
                  const pQuat = P_VALUES + VALUE_BYTES * 4 * index;
                  const x = dataView.getFloat32(pQuat + VALUE_BYTES * 0, true);
                  const y = dataView.getFloat32(pQuat + VALUE_BYTES * 1, true);
                  const z = dataView.getFloat32(pQuat + VALUE_BYTES * 2, true);
                  const w = dataView.getFloat32(pQuat + VALUE_BYTES * 3, true);
                  const easingMethod = dataView.getUint8(P);
                  ++P;
                  const keyframeValue = createQuatKeyframeValue({
                    value: {
                      x,
                      y,
                      z,
                      w
                    }
                  });
                  if (easingMethod !== EASING_METHOD_BEZIER_TAG) {
                    keyframeValue.easingMethod = easingMethod;
                  } else {
                    keyframeValue.easingMethod = [dataView.getFloat32(P + EASING_METHOD_BEZIER_COMPONENT_BYTES * 0, true), dataView.getFloat32(P + EASING_METHOD_BEZIER_COMPONENT_BYTES * 1, true), dataView.getFloat32(P + EASING_METHOD_BEZIER_COMPONENT_BYTES * 2, true), dataView.getFloat32(P + EASING_METHOD_BEZIER_COMPONENT_BYTES * 3, true)];
                    P += EASING_METHOD_BEZIER_COMPONENT_BYTES * 4;
                  }
                  return keyframeValue;
                });
                if (interpolationModeRepeated) {
                  const interpolationMode = dataView.getUint8(P);
                  ++P;
                  for (let iKeyframe = 0; iKeyframe < nFrames; ++iKeyframe) {
                    keyframeValues[iKeyframe].interpolationMode = interpolationMode;
                  }
                } else {
                  for (let iKeyframe = 0; iKeyframe < nFrames; ++iKeyframe) {
                    const interpolationMode = dataView.getUint8(P + iKeyframe);
                    keyframeValues[iKeyframe].interpolationMode = interpolationMode;
                  }
                  P += nFrames;
                }
                this._times = times;
                this._values = keyframeValues;
              }
            }, (_initializer4 = applyDecoratedInitializer(_class5.prototype, "preExtrapolation", [serializable], function () {
              return ExtrapolationMode.CLAMP;
            }), _initializer5 = applyDecoratedInitializer(_class5.prototype, "postExtrapolation", [serializable], function () {
              return ExtrapolationMode.CLAMP;
            })), _class5)) || _class4));
            var KeyframeValueFlagMask;
            (function (KeyframeValueFlagMask) {
              KeyframeValueFlagMask[KeyframeValueFlagMask["INTERPOLATION_MODE"] = 1] = "INTERPOLATION_MODE";
            })(KeyframeValueFlagMask || (KeyframeValueFlagMask = {}));
            const FLAGS_BYTES = 1;
            const FRAME_COUNT_BYTES = 4;
            const TIME_BYTES = 4;
            const VALUE_BYTES = 4;
            const INTERPOLATION_MODE_BYTES = 1;
            const EASING_METHOD_BYTES = 1;
            const EASING_METHOD_BEZIER_TAG = 255;
            const EASING_METHOD_BEZIER_COMPONENT_BYTES = 4;

            var _dec, _class;
            let ObjectCurve = exports('aV', (_dec = ccclass('cc.ObjectCurve'), _dec(_class = class ObjectCurve extends KeyframeCurve {
              evaluate(time) {
                const iSearch = this.searchKeyframe(time);
                if (iSearch >= 0) {
                  return this._values[iSearch];
                }
                const iPrev = clamp(~iSearch - 1, 0, this._values.length - 1);
                return this._values[iPrev];
              }
            }) || _class));

            const Mode = Enum({
              Blend: 0,
              Fixed: 1
            });
            class ColorKey {
              constructor() {
                this.color = Color.WHITE.clone();
                this.time = 0;
              }
            } exports('aW', ColorKey);
            CCClass.fastDefine('cc.ColorKey', ColorKey, {
              color: Color.WHITE.clone(),
              time: 0
            });
            CCClass.Attr.setClassAttr(ColorKey, 'color', 'visible', true);
            CCClass.Attr.setClassAttr(ColorKey, 'time', 'visible', true);
            class AlphaKey {
              constructor() {
                this.alpha = 1;
                this.time = 0;
              }
            } exports('aX', AlphaKey);
            CCClass.fastDefine('cc.AlphaKey', AlphaKey, {
              alpha: 1,
              time: 0
            });
            CCClass.Attr.setClassAttr(AlphaKey, 'alpha', 'visible', true);
            CCClass.Attr.setClassAttr(AlphaKey, 'time', 'visible', true);
            class Gradient {
              constructor() {
                this.colorKeys = [];
                this.alphaKeys = [];
                this.mode = Mode.Blend;
              }
              setKeys(colorKeys, alphaKeys) {
                this.colorKeys = colorKeys;
                this.alphaKeys = alphaKeys;
              }
              sortKeys() {
                if (this.colorKeys.length > 1) {
                  this.colorKeys.sort((a, b) => a.time - b.time);
                }
                if (this.alphaKeys.length > 1) {
                  this.alphaKeys.sort((a, b) => a.time - b.time);
                }
              }
              evaluate(time) {
                return this.evaluateFast(new Color(), time);
              }
              evaluateFast(out, time) {
                this.getRGB(out, time);
                out._set_a_unsafe(this.getAlpha(time));
                return out;
              }
              randomColor() {
                return this.getRandomColor(new Color());
              }
              getRandomColor(out) {
                const c = this.colorKeys[Math.trunc(random() * this.colorKeys.length)];
                const a = this.alphaKeys[Math.trunc(random() * this.alphaKeys.length)];
                out.set(c.color);
                out._set_a_unsafe(a.alpha);
                return out;
              }
              getRGB(out, time) {
                const colorKeys = this.colorKeys;
                const length = colorKeys.length;
                if (length > 1) {
                  time = repeat(time, 1.0 + EPSILON);
                  for (let i = 1; i < length; ++i) {
                    const preTime = colorKeys[i - 1].time;
                    const curTime = colorKeys[i].time;
                    if (time >= preTime && time < curTime) {
                      if (this.mode === Mode.Fixed) {
                        Color.copy(out, colorKeys[i].color);
                        return out;
                      }
                      const factor = (time - preTime) / (curTime - preTime);
                      Color.lerp(out, colorKeys[i - 1].color, colorKeys[i].color, factor);
                      return out;
                    }
                  }
                  const lastIndex = length - 1;
                  if (approx(time, colorKeys[lastIndex].time, EPSILON)) {
                    Color.copy(out, colorKeys[lastIndex].color);
                  } else if (time < colorKeys[0].time) {
                    Color.lerp(out, Color.BLACK, colorKeys[0].color, time / colorKeys[0].time);
                  } else if (time > colorKeys[lastIndex].time) {
                    Color.lerp(out, colorKeys[lastIndex].color, Color.BLACK, (time - colorKeys[lastIndex].time) / (1 - colorKeys[lastIndex].time));
                  }
                } else if (length === 1) {
                  Color.copy(out, colorKeys[0].color);
                } else {
                  Color.copy(out, Color.WHITE);
                }
                return out;
              }
              getAlpha(time) {
                const basicAlpha = 0;
                const alphaKeys = this.alphaKeys;
                const length = alphaKeys.length;
                if (length > 1) {
                  time = repeat(time, 1.0 + EPSILON);
                  for (let i = 1; i < length; ++i) {
                    const preTime = alphaKeys[i - 1].time;
                    const curTime = alphaKeys[i].time;
                    if (time >= preTime && time < curTime) {
                      if (this.mode === Mode.Fixed) {
                        return alphaKeys[i].alpha;
                      }
                      const factor = (time - preTime) / (curTime - preTime);
                      return lerp(alphaKeys[i - 1].alpha, alphaKeys[i].alpha, factor);
                    }
                  }
                  const lastIndex = length - 1;
                  if (approx(time, alphaKeys[lastIndex].time, EPSILON)) {
                    return alphaKeys[lastIndex].alpha;
                  } else if (time < alphaKeys[0].time) {
                    return lerp(basicAlpha, alphaKeys[0].alpha, time / alphaKeys[0].time);
                  } else if (time > alphaKeys[lastIndex].time) {
                    return lerp(alphaKeys[lastIndex].alpha, basicAlpha, (time - alphaKeys[lastIndex].time) / (1 - alphaKeys[lastIndex].time));
                  }
                  return 255;
                } else if (length === 1) {
                  return alphaKeys[0].alpha;
                } else {
                  return 255;
                }
              }
            } exports('aY', Gradient);
            Gradient.Mode = Mode;
            CCClass.fastDefine('cc.Gradient', Gradient, {
              colorKeys: [],
              alphaKeys: [],
              mode: Mode.Blend
            });
            CCClass.Attr.setClassAttr(Gradient, 'colorKeys', 'visible', true);
            CCClass.Attr.setClassAttr(Gradient, 'alphaKeys', 'visible', true);
            CCClass.Attr.setClassAttr(Gradient, 'mode', 'visible', true);

            const LOOK_FORWARD = 3;
            class Keyframe {
              constructor() {
                this.time = 0;
                this.value = 0;
                this.inTangent = 0;
                this.outTangent = 0;
              }
            }
            CCClass.fastDefine('cc.Keyframe', Keyframe, {
              time: 0,
              value: 0,
              inTangent: 0,
              outTangent: 0
            });
            class OptimizedKey {
              constructor() {
                this.index = void 0;
                this.time = void 0;
                this.endTime = void 0;
                this.coefficient = void 0;
                this.index = -1;
                this.time = 0;
                this.endTime = 0;
                this.coefficient = new Float32Array(4);
              }
              evaluate(T) {
                const t = T - this.time;
                return evalOptCurve(t, this.coefficient);
              }
            }
            function evalOptCurve(t, coefs) {
              return t * (t * (t * coefs[0] + coefs[1]) + coefs[2]) + coefs[3];
            }
            class AnimationCurve {
              get _internalCurve() {
                return this._curve;
              }
              get keyFrames() {
                return Array.from(this._curve.keyframes()).map(([time, value]) => {
                  const legacyKeyframe = new Keyframe();
                  legacyKeyframe.time = time;
                  legacyKeyframe.value = value.value;
                  legacyKeyframe.inTangent = value.leftTangent;
                  legacyKeyframe.outTangent = value.rightTangent;
                  return legacyKeyframe;
                });
              }
              set keyFrames(value) {
                this._curve.assignSorted(value.map(legacyCurve => [legacyCurve.time, {
                  interpolationMode: RealInterpolationMode.CUBIC,
                  value: legacyCurve.value,
                  leftTangent: legacyCurve.inTangent,
                  rightTangent: legacyCurve.outTangent
                }]));
              }
              get preWrapMode() {
                return toLegacyWrapMode(this._curve.preExtrapolation);
              }
              set preWrapMode(value) {
                this._curve.preExtrapolation = fromLegacyWrapMode(value);
              }
              get postWrapMode() {
                return toLegacyWrapMode(this._curve.postExtrapolation);
              }
              set postWrapMode(value) {
                this._curve.postExtrapolation = fromLegacyWrapMode(value);
              }
              constructor(keyFrames = null) {
                this._curve = void 0;
                this.cachedKey = void 0;
                if (keyFrames instanceof RealCurve) {
                  this._curve = keyFrames;
                } else {
                  const curve = new RealCurve();
                  this._curve = curve;
                  curve.preExtrapolation = ExtrapolationMode.LOOP;
                  curve.postExtrapolation = ExtrapolationMode.CLAMP;
                  if (!keyFrames) {
                    curve.assignSorted([[0.0, {
                      interpolationMode: RealInterpolationMode.CUBIC,
                      value: 1.0
                    }], [1.0, {
                      interpolationMode: RealInterpolationMode.CUBIC,
                      value: 1.0
                    }]]);
                  } else {
                    curve.assignSorted(keyFrames.map(legacyKeyframe => [legacyKeyframe.time, {
                      interpolationMode: RealInterpolationMode.CUBIC,
                      value: legacyKeyframe.value,
                      leftTangent: legacyKeyframe.inTangent,
                      rightTangent: legacyKeyframe.outTangent
                    }]));
                  }
                }
                this.cachedKey = new OptimizedKey();
              }
              addKey(keyFrame) {
                if (!keyFrame) {
                  this._curve.clear();
                } else {
                  this._curve.addKeyFrame(keyFrame.time, {
                    interpolationMode: RealInterpolationMode.CUBIC,
                    value: keyFrame.value,
                    leftTangent: keyFrame.inTangent,
                    rightTangent: keyFrame.outTangent
                  });
                }
              }
              evaluate_slow(time) {
                return this._curve.evaluate(time);
              }
              evaluate(time) {
                const {
                  cachedKey,
                  _curve: curve
                } = this;
                const nKeyframes = curve.keyFramesCount;
                const lastKeyframeIndex = nKeyframes - 1;
                let wrappedTime = time;
                const extrapolationMode = time < 0 ? curve.preExtrapolation : curve.postExtrapolation;
                const startTime = curve.getKeyframeTime(0);
                const endTime = curve.getKeyframeTime(lastKeyframeIndex);
                switch (extrapolationMode) {
                  case ExtrapolationMode.LOOP:
                    wrappedTime = repeat(time - startTime, endTime - startTime) + startTime;
                    break;
                  case ExtrapolationMode.PING_PONG:
                    wrappedTime = pingPong(time - startTime, endTime - startTime) + startTime;
                    break;
                  case ExtrapolationMode.CLAMP:
                  default:
                    wrappedTime = clamp(time, startTime, endTime);
                    break;
                }
                if (wrappedTime >= cachedKey.time && wrappedTime < cachedKey.endTime) {
                  return cachedKey.evaluate(wrappedTime);
                }
                const leftIndex = this.findIndex(cachedKey, wrappedTime);
                const rightIndex = Math.min(leftIndex + 1, lastKeyframeIndex);
                this.calcOptimizedKey(cachedKey, leftIndex, rightIndex);
                return cachedKey.evaluate(wrappedTime);
              }
              calcOptimizedKey(optKey, leftIndex, rightIndex) {
                const lhsTime = this._curve.getKeyframeTime(leftIndex);
                const rhsTime = this._curve.getKeyframeTime(rightIndex);
                const {
                  value: lhsValue,
                  leftTangent: lhsOutTangent
                } = this._curve.getKeyframeValue(leftIndex);
                const {
                  value: rhsValue,
                  rightTangent: rhsInTangent
                } = this._curve.getKeyframeValue(rightIndex);
                optKey.index = leftIndex;
                optKey.time = lhsTime;
                optKey.endTime = rhsTime;
                const dx = rhsTime - lhsTime;
                const dy = rhsValue - lhsValue;
                const length = 1 / (dx * dx);
                const d1 = lhsOutTangent * dx;
                const d2 = rhsInTangent * dx;
                optKey.coefficient[0] = (d1 + d2 - dy - dy) * length / dx;
                optKey.coefficient[1] = (dy + dy + dy - d1 - d1 - d2) * length;
                optKey.coefficient[2] = lhsOutTangent;
                optKey.coefficient[3] = lhsValue;
              }
              findIndex(optKey, t) {
                const {
                  _curve: curve
                } = this;
                const nKeyframes = curve.keyFramesCount;
                const cachedIndex = optKey.index;
                if (cachedIndex !== -1) {
                  const cachedTime = curve.getKeyframeTime(cachedIndex);
                  if (t > cachedTime) {
                    for (let i = 0; i < LOOK_FORWARD; i++) {
                      const currIndex = cachedIndex + i;
                      if (currIndex + 1 < nKeyframes && curve.getKeyframeTime(currIndex + 1) > t) {
                        return currIndex;
                      }
                    }
                  } else {
                    for (let i = 0; i < LOOK_FORWARD; i++) {
                      const currIndex = cachedIndex - i;
                      if (currIndex >= 0 && curve.getKeyframeTime(currIndex - 1) <= t) {
                        return currIndex - 1;
                      }
                    }
                  }
                }
                let left = 0;
                let right = nKeyframes;
                let mid;
                while (right - left > 1) {
                  mid = Math.floor((left + right) / 2);
                  if (curve.getKeyframeTime(mid) >= t) {
                    right = mid;
                  } else {
                    left = mid;
                  }
                }
                return left;
              }
            } exports('cJ', AnimationCurve);
            AnimationCurve.defaultKF = [{
              time: 0,
              value: 1,
              inTangent: 0,
              outTangent: 0
            }, {
              time: 1,
              value: 1,
              inTangent: 0,
              outTangent: 0
            }];
            CCClass.fastDefine('cc.AnimationCurve', AnimationCurve, {
              _curve: null
            });
            let WrapModeMask; exports('cy', WrapModeMask);
            (function (WrapModeMask) {
              WrapModeMask[WrapModeMask["Default"] = 0] = "Default";
              WrapModeMask[WrapModeMask["Normal"] = 1] = "Normal";
              WrapModeMask[WrapModeMask["Loop"] = 2] = "Loop";
              WrapModeMask[WrapModeMask["ShouldWrap"] = 4] = "ShouldWrap";
              WrapModeMask[WrapModeMask["Clamp"] = 8] = "Clamp";
              WrapModeMask[WrapModeMask["PingPong"] = 22] = "PingPong";
              WrapModeMask[WrapModeMask["Reverse"] = 36] = "Reverse";
            })(WrapModeMask || (exports('cy', WrapModeMask = {})));
            function fromLegacyWrapMode(legacyWrapMode) {
              switch (legacyWrapMode) {
                default:
                case WrapModeMask.Default:
                case WrapModeMask.Normal:
                case WrapModeMask.Clamp:
                  return ExtrapolationMode.CLAMP;
                case WrapModeMask.PingPong:
                  return ExtrapolationMode.PING_PONG;
                case WrapModeMask.Loop:
                  return ExtrapolationMode.LOOP;
              }
            }
            function toLegacyWrapMode(extrapolationMode) {
              switch (extrapolationMode) {
                default:
                case ExtrapolationMode.LINEAR:
                case ExtrapolationMode.CLAMP:
                  return WrapModeMask.Clamp;
                case ExtrapolationMode.PING_PONG:
                  return WrapModeMask.PingPong;
                case ExtrapolationMode.LOOP:
                  return WrapModeMask.Loop;
              }
            }
            function constructLegacyCurveAndConvert() {
              const curve = new RealCurve();
              curve.assignSorted([[0.0, {
                interpolationMode: RealInterpolationMode.CUBIC,
                value: 1.0
              }], [1.0, {
                interpolationMode: RealInterpolationMode.CUBIC,
                value: 1.0
              }]]);
              return curve;
            }

            let SplineMode;
            (function (SplineMode) {
              SplineMode[SplineMode["LINEAR"] = 0] = "LINEAR";
              SplineMode[SplineMode["BEZIER"] = 1] = "BEZIER";
              SplineMode[SplineMode["CATMULL_ROM"] = 2] = "CATMULL_ROM";
            })(SplineMode || (SplineMode = {}));
            const SPLINE_WHOLE_INDEX = 0xffffffff;
            const _v0 = new Vec3();
            const _v1 = new Vec3();
            const _v2 = new Vec3();
            const _v3 = new Vec3();
            class Spline {
              constructor(mode = SplineMode.CATMULL_ROM, knots = []) {
                this._type = void 0;
                this._mode = SplineMode.CATMULL_ROM;
                this._knots = [];
                this._type = enums.SHAPE_SPLINE;
                this._mode = mode;
                for (let i = 0; i < knots.length; i++) {
                  this._knots[i] = new Vec3(knots[i]);
                }
              }
              static create(mode, knots = []) {
                return new Spline(mode, knots);
              }
              static clone(s) {
                return new Spline(s.mode, s.knots);
              }
              static copy(out, s) {
                out._mode = s.mode;
                out._knots.length = 0;
                const knots = s.knots;
                const length = knots.length;
                for (let i = 0; i < length; i++) {
                  out._knots[i] = new Vec3(knots[i]);
                }
                return out;
              }
              get type() {
                return this._type;
              }
              get mode() {
                return this._mode;
              }
              get knots() {
                return this._knots;
              }
              setModeAndKnots(mode, knots) {
                this._mode = mode;
                this._knots.length = 0;
                for (let i = 0; i < knots.length; i++) {
                  this._knots[i] = new Vec3(knots[i]);
                }
              }
              clearKnots() {
                this._knots.length = 0;
              }
              getKnotCount() {
                return this._knots.length;
              }
              addKnot(knot) {
                this._knots.push(new Vec3(knot));
              }
              insertKnot(index, knot) {
                const item = new Vec3(knot);
                if (index >= this._knots.length) {
                  this._knots.push(item);
                  return;
                }
                this._knots.splice(index, 0, item);
              }
              removeKnot(index) {
                assertIsTrue(index >= 0 && index < this._knots.length, 'Spline: invalid index');
                this._knots.splice(index, 1);
              }
              setKnot(index, knot) {
                assertIsTrue(index >= 0 && index < this._knots.length, 'Spline: invalid index');
                this._knots[index].set(knot);
              }
              getKnot(index) {
                assertIsTrue(index >= 0 && index < this._knots.length, 'Spline: invalid index');
                return this._knots[index];
              }
              getPoint(t, index = SPLINE_WHOLE_INDEX) {
                t = clamp(t, 0.0, 1.0);
                const segments = this.getSegments();
                if (segments === 0) {
                  return new Vec3(0.0, 0.0, 0.0);
                }
                if (index === SPLINE_WHOLE_INDEX) {
                  const deltaT = 1.0 / segments;
                  index = Math.floor(t / deltaT);
                  t = t % deltaT / deltaT;
                }
                if (index >= segments) {
                  return new Vec3(this._knots[this._knots.length - 1]);
                }
                switch (this._mode) {
                  case SplineMode.LINEAR:
                    return Spline.calcLinear(this._knots[index], this._knots[index + 1], t);
                  case SplineMode.BEZIER:
                    return Spline.calcBezier(this._knots[index * 4], this._knots[index * 4 + 1], this._knots[index * 4 + 2], this._knots[index * 4 + 3], t);
                  case SplineMode.CATMULL_ROM:
                    {
                      const v0 = index > 0 ? this._knots[index - 1] : this._knots[index];
                      const v3 = index + 2 < this._knots.length ? this._knots[index + 2] : this._knots[index + 1];
                      return Spline.calcCatmullRom(v0, this._knots[index], this._knots[index + 1], v3, t);
                    }
                  default:
                    return new Vec3(0.0, 0.0, 0.0);
                }
              }
              getPoints(num, index = SPLINE_WHOLE_INDEX) {
                if (num === 0) {
                  return [];
                }
                if (num === 1) {
                  const point = this.getPoint(0.0, index);
                  return [point];
                }
                const points = [];
                const deltaT = 1.0 / (num - 1.0);
                for (let i = 0; i < num; i++) {
                  const t = i * deltaT;
                  const point = this.getPoint(t, index);
                  points.push(point);
                }
                return points;
              }
              getSegments() {
                const count = this._knots.length;
                switch (this._mode) {
                  case SplineMode.LINEAR:
                  case SplineMode.CATMULL_ROM:
                    if (count < 2) {
                      warnID(14300);
                      return 0;
                    }
                    return count - 1;
                  case SplineMode.BEZIER:
                    if (count < 4 || count % 4 != 0) {
                      warnID(14301);
                      return 0;
                    }
                    return count / 4;
                  default:
                    assertIsTrue(false, 'Spline error: invalid mode');
                }
              }
              static calcLinear(v0, v1, t) {
                const result = new Vec3();
                Vec3.multiplyScalar(_v0, v0, 1.0 - t);
                Vec3.multiplyScalar(_v1, v1, t);
                Vec3.add(result, _v0, _v1);
                return result;
              }
              static calcBezier(v0, v1, v2, v3, t) {
                const result = new Vec3();
                const s = 1.0 - t;
                Vec3.multiplyScalar(_v0, v0, s * s * s);
                Vec3.multiplyScalar(_v1, v1, 3.0 * t * s * s);
                Vec3.multiplyScalar(_v2, v2, 3.0 * t * t * s);
                Vec3.multiplyScalar(_v3, v3, t * t * t);
                Vec3.add(_v0, _v0, _v1);
                Vec3.add(_v2, _v2, _v3);
                Vec3.add(result, _v0, _v2);
                return result;
              }
              static calcCatmullRom(v0, v1, v2, v3, t) {
                const result = new Vec3();
                const t2 = t * t;
                const t3 = t2 * t;
                Vec3.multiplyScalar(_v0, v0, -0.5 * t3 + t2 - 0.5 * t);
                Vec3.multiplyScalar(_v1, v1, 1.5 * t3 - 2.5 * t2 + 1.0);
                Vec3.multiplyScalar(_v2, v2, -1.5 * t3 + 2.0 * t2 + 0.5 * t);
                Vec3.multiplyScalar(_v3, v3, 0.5 * t3 - 0.5 * t2);
                Vec3.add(_v0, _v0, _v1);
                Vec3.add(_v2, _v2, _v3);
                Vec3.add(result, _v0, _v2);
                return result;
              }
            }

            let ERaycastMode; exports('ch', ERaycastMode);
            (function (ERaycastMode) {
              ERaycastMode[ERaycastMode["ALL"] = 0] = "ALL";
              ERaycastMode[ERaycastMode["CLOSEST"] = 1] = "CLOSEST";
              ERaycastMode[ERaycastMode["ANY"] = 2] = "ANY";
            })(ERaycastMode || (exports('ch', ERaycastMode = {})));

            replaceProperty(intersect, 'intersect', [{
              name: 'ray_aabb',
              newName: 'rayAABB'
            }, {
              name: 'ray_plane',
              newName: 'rayPlane'
            }, {
              name: 'ray_triangle',
              newName: 'rayTriangle'
            }, {
              name: 'ray_sphere',
              newName: 'raySphere'
            }, {
              name: 'ray_obb',
              newName: 'rayOBB'
            }, {
              name: 'ray_capsule',
              newName: 'rayCapsule'
            }, {
              name: 'ray_subMesh',
              newName: 'raySubMesh'
            }, {
              name: 'ray_mesh',
              newName: 'rayMesh'
            }, {
              name: 'ray_model',
              newName: 'rayModel'
            }, {
              name: 'line_plane',
              newName: 'linePlane'
            }, {
              name: 'line_triangle',
              newName: 'lineTriangle'
            }, {
              name: 'line_aabb',
              newName: 'lineAABB'
            }, {
              name: 'line_obb',
              newName: 'lineOBB'
            }, {
              name: 'line_sphere',
              newName: 'lineSphere'
            }, {
              name: 'aabb_aabb',
              newName: 'aabbWithAABB'
            }, {
              name: 'aabb_obb',
              newName: 'aabbWithOBB'
            }, {
              name: 'aabb_plane',
              newName: 'aabbPlane'
            }, {
              name: 'aabb_frustum',
              newName: 'aabbFrustum'
            }, {
              name: 'aabbFrustum_accurate',
              newName: 'aabbFrustumAccurate'
            }, {
              name: 'obb_point',
              newName: 'obbPoint'
            }, {
              name: 'obb_plane',
              newName: 'obbPlane'
            }, {
              name: 'obb_frustum',
              newName: 'obbFrustum'
            }, {
              name: 'obbFrustum_accurate',
              newName: 'obbFrustumAccurate'
            }, {
              name: 'obb_obb',
              newName: 'obbWithOBB'
            }, {
              name: 'obb_capsule',
              newName: 'obbCapsule'
            }, {
              name: 'sphere_plane',
              newName: 'spherePlane'
            }, {
              name: 'sphere_frustum',
              newName: 'sphereFrustum'
            }, {
              name: 'sphereFrustum_accurate',
              newName: 'sphereFrustumAccurate'
            }, {
              name: 'sphere_sphere',
              newName: 'sphereWithSphere'
            }, {
              name: 'sphere_aabb',
              newName: 'sphereAABB'
            }, {
              name: 'sphere_obb',
              newName: 'sphereOBB'
            }, {
              name: 'sphere_capsule',
              newName: 'sphereCapsule'
            }, {
              name: 'capsule_capsule',
              newName: 'capsuleWithCapsule'
            }]);
            function deprecatedClassMessage(oldClassName, newClassName) {
              console.warn(`${oldClassName} is deprecated, please use ${newClassName} instead.`);
            }
            class line extends Line {
              constructor() {
                super();
                deprecatedClassMessage('line', 'Line');
              }
            }
            class plane extends Plane {
              constructor() {
                super();
                deprecatedClassMessage('plane', 'Plane');
              }
            }
            class ray extends Ray {
              constructor() {
                super();
                deprecatedClassMessage('ray', 'Ray');
              }
            }
            class triangle extends Triangle {
              constructor() {
                super();
                deprecatedClassMessage('triangle', 'Triangle');
              }
            }
            class sphere extends Sphere {
              constructor() {
                super();
                deprecatedClassMessage('sphere', 'Sphere');
              }
            }
            class aabb extends AABB {
              constructor() {
                super();
                deprecatedClassMessage('aabb', 'AABB');
              }
            }
            class obb extends OBB {
              constructor() {
                super();
                deprecatedClassMessage('obb', 'OBB');
              }
            }
            class capsule extends Capsule {
              constructor() {
                super();
                deprecatedClassMessage('capsule', 'Capsule');
              }
            }
            class frustum extends Frustum {
              constructor() {
                super();
                deprecatedClassMessage('frustum', 'Frustum');
              }
            }

            var geometry = /*#__PURE__*/Object.freeze({
                __proto__: null,
                distance: distance,
                enums: enums,
                intersect: intersect,
                Line: Line,
                Plane: Plane,
                Ray: Ray,
                Triangle: Triangle,
                Sphere: Sphere,
                AABB: AABB,
                OBB: OBB,
                Capsule: Capsule,
                Frustum: Frustum,
                Keyframe: Keyframe,
                AnimationCurve: AnimationCurve,
                get WrapModeMask () { return WrapModeMask; },
                get SplineMode () { return SplineMode; },
                Spline: Spline,
                constructLegacyCurveAndConvert: constructLegacyCurveAndConvert,
                OptimizedKey: OptimizedKey,
                evalOptCurve: evalOptCurve,
                get ERaycastMode () { return ERaycastMode; },
                line: line,
                plane: plane,
                ray: ray,
                triangle: triangle,
                sphere: sphere,
                aabb: aabb,
                obb: obb,
                capsule: capsule,
                frustum: frustum
            });
            exports('i', geometry);

            class System {
              constructor() {
                this._id = '';
                this._priority = 0;
                this._executeInEditMode = false;
              }
              set priority(value) {
                this._priority = value;
              }
              get priority() {
                return this._priority;
              }
              set id(id) {
                this._id = id;
              }
              get id() {
                return this._id;
              }
              static sortByPriority(a, b) {
                if (a._priority < b._priority) {
                  return 1;
                } else if (a._priority > b.priority) {
                  return -1;
                } else {
                  return 0;
                }
              }
              init() {}
              update(dt) {}
              postUpdate(dt) {}
              destroy() {}
            } exports('a$', System);
            System.Priority = Enum({
              LOW: 0,
              MEDIUM: 100,
              HIGH: 200,
              SCHEDULER: 1 << 31 >>> 0
            });

            const MAX_POOL_SIZE = 20;
            const idGenerator = new IDGenerator('Scheduler');
            class ListEntry {
              static get(target, priority, paused, markedForDeletion) {
                let result = ListEntry._listEntries.pop();
                if (result) {
                  result.target = target;
                  result.priority = priority;
                  result.paused = paused;
                  result.markedForDeletion = markedForDeletion;
                } else {
                  result = new ListEntry(target, priority, paused, markedForDeletion);
                }
                return result;
              }
              static put(entry) {
                if (ListEntry._listEntries.length < MAX_POOL_SIZE) {
                  entry.target = null;
                  ListEntry._listEntries.push(entry);
                }
              }
              constructor(target, priority, paused, markedForDeletion) {
                this.target = void 0;
                this.priority = void 0;
                this.paused = void 0;
                this.markedForDeletion = void 0;
                this.target = target;
                this.priority = priority;
                this.paused = paused;
                this.markedForDeletion = markedForDeletion;
              }
            }
            ListEntry._listEntries = [];
            class HashUpdateEntry {
              static get(list, entry, target, callback) {
                let result = HashUpdateEntry._hashUpdateEntries.pop();
                if (result) {
                  result.list = list;
                  result.entry = entry;
                  result.target = target;
                  result.callback = callback;
                } else {
                  result = new HashUpdateEntry(list, entry, target, callback);
                }
                return result;
              }
              static put(entry) {
                if (HashUpdateEntry._hashUpdateEntries.length < MAX_POOL_SIZE) {
                  entry.list = entry.entry = entry.target = entry.callback = null;
                  HashUpdateEntry._hashUpdateEntries.push(entry);
                }
              }
              constructor(list, entry, target, callback) {
                this.list = void 0;
                this.entry = void 0;
                this.target = void 0;
                this.callback = void 0;
                this.list = list;
                this.entry = entry;
                this.target = target;
                this.callback = callback;
              }
            }
            HashUpdateEntry._hashUpdateEntries = [];
            class HashTimerEntry {
              static get(timers, target, timerIndex, currentTimer, currentTimerSalvaged, paused) {
                let result = HashTimerEntry._hashTimerEntries.pop();
                if (result) {
                  result.timers = timers;
                  result.target = target;
                  result.timerIndex = timerIndex;
                  result.currentTimer = currentTimer;
                  result.currentTimerSalvaged = currentTimerSalvaged;
                  result.paused = paused;
                } else {
                  result = new HashTimerEntry(timers, target, timerIndex, currentTimer, currentTimerSalvaged, paused);
                }
                return result;
              }
              static put(entry) {
                if (HashTimerEntry._hashTimerEntries.length < MAX_POOL_SIZE) {
                  entry.timers = entry.target = entry.currentTimer = null;
                  HashTimerEntry._hashTimerEntries.push(entry);
                }
              }
              constructor(timers, target, timerIndex, currentTimer, currentTimerSalvaged, paused) {
                this.timers = void 0;
                this.target = void 0;
                this.timerIndex = void 0;
                this.currentTimer = void 0;
                this.currentTimerSalvaged = void 0;
                this.paused = void 0;
                this.timers = timers;
                this.target = target;
                this.timerIndex = timerIndex;
                this.currentTimer = currentTimer;
                this.currentTimerSalvaged = currentTimerSalvaged;
                this.paused = paused;
              }
            }
            HashTimerEntry._hashTimerEntries = [];
            class CallbackTimer {
              static get() {
                return CallbackTimer._timers.pop() || new CallbackTimer();
              }
              static put(timer) {
                if (CallbackTimer._timers.length < MAX_POOL_SIZE && !timer._lock) {
                  timer._scheduler = timer._target = timer._callback = null;
                  CallbackTimer._timers.push(timer);
                }
              }
              constructor() {
                this._lock = void 0;
                this._scheduler = void 0;
                this._elapsed = void 0;
                this._runForever = void 0;
                this._useDelay = void 0;
                this._timesExecuted = void 0;
                this._repeat = void 0;
                this._delay = void 0;
                this._interval = void 0;
                this._target = void 0;
                this._callback = void 0;
                this._lock = false;
                this._scheduler = null;
                this._elapsed = -1;
                this._runForever = false;
                this._useDelay = false;
                this._timesExecuted = 0;
                this._repeat = 0;
                this._delay = 0;
                this._interval = 0;
                this._target = null;
              }
              initWithCallback(scheduler, callback, target, seconds, repeat, delay) {
                this._lock = false;
                this._scheduler = scheduler;
                this._target = target;
                this._callback = callback;
                this._timesExecuted = 0;
                this._elapsed = -1;
                this._interval = seconds;
                this._delay = delay;
                this._useDelay = this._delay > 0;
                this._repeat = repeat;
                this._runForever = this._repeat === legacyCC.macro.REPEAT_FOREVER;
                return true;
              }
              getInterval() {
                return this._interval;
              }
              setInterval(interval) {
                this._interval = interval;
              }
              update(dt) {
                if (this._elapsed === -1) {
                  this._elapsed = 0;
                  this._timesExecuted = 0;
                } else {
                  this._elapsed += dt;
                  if (this._runForever && !this._useDelay) {
                    if (this._elapsed >= this._interval) {
                      this.trigger();
                      this._elapsed = 0;
                    }
                  } else {
                    if (this._useDelay) {
                      if (this._elapsed >= this._delay) {
                        this.trigger();
                        this._elapsed -= this._delay;
                        this._timesExecuted += 1;
                        this._useDelay = false;
                      }
                    } else if (this._elapsed >= this._interval) {
                      this.trigger();
                      this._elapsed = 0;
                      this._timesExecuted += 1;
                    }
                    if (this._callback && !this._runForever && this._timesExecuted > this._repeat) {
                      this.cancel();
                    }
                  }
                }
              }
              getCallback() {
                return this._callback;
              }
              trigger() {
                if (this._target && this._callback) {
                  this._lock = true;
                  this._callback.call(this._target, this._elapsed);
                  this._lock = false;
                }
              }
              cancel() {
                if (this._scheduler && this._callback && this._target) {
                  this._scheduler.unscheduleForTimer(this, this._target);
                }
              }
            }
            CallbackTimer._timers = [];
            class Scheduler extends System {
              static enableForTarget(target) {
                let found = false;
                if (target.uuid) {
                  found = true;
                } else if (target.id) {
                  found = true;
                }
                if (!found) {
                  target.id = idGenerator.getNewId();
                }
              }
              constructor() {
                super();
                this._timeScale = void 0;
                this._updatesNegList = void 0;
                this._updates0List = void 0;
                this._updatesPosList = void 0;
                this._hashForUpdates = void 0;
                this._hashForTimers = void 0;
                this._currentTarget = void 0;
                this._currentTargetSalvaged = void 0;
                this._updateHashLocked = void 0;
                this._arrayForTimers = void 0;
                this._timeScale = 1.0;
                this._updatesNegList = [];
                this._updates0List = [];
                this._updatesPosList = [];
                this._hashForUpdates = createMap(true);
                this._hashForTimers = createMap(true);
                this._currentTarget = null;
                this._currentTargetSalvaged = false;
                this._updateHashLocked = false;
                this._arrayForTimers = [];
              }
              setTimeScale(timeScale) {
                this._timeScale = timeScale;
              }
              getTimeScale() {
                return this._timeScale;
              }
              update(dt) {
                this._updateHashLocked = true;
                if (this._timeScale !== 1) {
                  dt *= this._timeScale;
                }
                let i;
                let list;
                let len;
                let entry;
                for (i = 0, list = this._updatesNegList, len = list.length; i < len; i++) {
                  entry = list[i];
                  if (!entry.paused && !entry.markedForDeletion && entry.target) {
                    var _entry$target$update, _entry$target;
                    (_entry$target$update = (_entry$target = entry.target).update) === null || _entry$target$update === void 0 ? void 0 : _entry$target$update.call(_entry$target, dt);
                  }
                }
                for (i = 0, list = this._updates0List, len = list.length; i < len; i++) {
                  entry = list[i];
                  if (!entry.paused && !entry.markedForDeletion && entry.target) {
                    var _entry$target$update2, _entry$target2;
                    (_entry$target$update2 = (_entry$target2 = entry.target).update) === null || _entry$target$update2 === void 0 ? void 0 : _entry$target$update2.call(_entry$target2, dt);
                  }
                }
                for (i = 0, list = this._updatesPosList, len = list.length; i < len; i++) {
                  entry = list[i];
                  if (!entry.paused && !entry.markedForDeletion && entry.target) {
                    var _entry$target$update3, _entry$target3;
                    (_entry$target$update3 = (_entry$target3 = entry.target).update) === null || _entry$target$update3 === void 0 ? void 0 : _entry$target$update3.call(_entry$target3, dt);
                  }
                }
                let elt;
                const arr = this._arrayForTimers;
                for (i = 0; i < arr.length; i++) {
                  var _this$_currentTarget$;
                  elt = arr[i];
                  this._currentTarget = elt;
                  this._currentTargetSalvaged = false;
                  if (!elt.paused && elt.timers) {
                    for (elt.timerIndex = 0; elt.timerIndex < elt.timers.length; ++elt.timerIndex) {
                      elt.currentTimer = elt.timers[elt.timerIndex];
                      elt.currentTimerSalvaged = false;
                      elt.currentTimer.update(dt);
                      elt.currentTimer = null;
                    }
                  }
                  if (this._currentTargetSalvaged && ((_this$_currentTarget$ = this._currentTarget.timers) === null || _this$_currentTarget$ === void 0 ? void 0 : _this$_currentTarget$.length) === 0) {
                    this._removeHashElement(this._currentTarget);
                    --i;
                  }
                }
                for (i = 0, list = this._updatesNegList; i < list.length;) {
                  entry = list[i];
                  if (entry.markedForDeletion) {
                    this._removeUpdateFromHash(entry);
                  } else {
                    i++;
                  }
                }
                for (i = 0, list = this._updates0List; i < list.length;) {
                  entry = list[i];
                  if (entry.markedForDeletion) {
                    this._removeUpdateFromHash(entry);
                  } else {
                    i++;
                  }
                }
                for (i = 0, list = this._updatesPosList; i < list.length;) {
                  entry = list[i];
                  if (entry.markedForDeletion) {
                    this._removeUpdateFromHash(entry);
                  } else {
                    i++;
                  }
                }
                this._updateHashLocked = false;
                this._currentTarget = null;
              }
              schedule(callbackTmp, targetTmp, interval, repeat, delay, paused) {
                var _repeat, _delay;
                let callback;
                let target;
                if (typeof callbackTmp !== 'function') {
                  warnID(1514);
                  callback = targetTmp;
                  target = callbackTmp;
                } else {
                  callback = callbackTmp;
                  target = targetTmp;
                }
                if (arguments.length === 3 || arguments.length === 4 || arguments.length === 5) {
                  paused = !!repeat;
                  repeat = legacyCC.macro.REPEAT_FOREVER;
                  delay = 0;
                }
                assertID(Boolean(target), 1502);
                const targetId = target.uuid || target.id;
                if (!targetId) {
                  errorID(1510);
                  return;
                }
                let element = this._hashForTimers[targetId];
                if (!element) {
                  element = HashTimerEntry.get(null, target, 0, null, false, Boolean(paused));
                  this._arrayForTimers.push(element);
                  this._hashForTimers[targetId] = element;
                } else if (element.paused !== paused) {
                  warnID(1511);
                }
                let timer;
                let i;
                if (element.timers == null) {
                  element.timers = [];
                } else {
                  for (i = 0; i < element.timers.length; ++i) {
                    timer = element.timers[i];
                    if (timer && callback === timer.getCallback()) {
                      logID(1507, timer.getInterval(), interval);
                      timer.setInterval(interval);
                      return;
                    }
                  }
                }
                timer = CallbackTimer.get();
                timer.initWithCallback(this, callback, target, interval, (_repeat = repeat) !== null && _repeat !== void 0 ? _repeat : 0, (_delay = delay) !== null && _delay !== void 0 ? _delay : 0);
                element.timers.push(timer);
                if (this._currentTarget === element && this._currentTargetSalvaged) {
                  this._currentTargetSalvaged = false;
                }
              }
              scheduleUpdate(target, priority, paused) {
                const targetId = target.uuid || target.id;
                if (!targetId) {
                  errorID(1510);
                  return;
                }
                const hashElement = this._hashForUpdates[targetId];
                if (hashElement && hashElement.entry) {
                  if (hashElement.entry.priority !== priority) {
                    if (this._updateHashLocked) {
                      logID(1506);
                      hashElement.entry.markedForDeletion = false;
                      hashElement.entry.paused = paused;
                      return;
                    } else {
                      this.unscheduleUpdate(target);
                    }
                  } else {
                    hashElement.entry.markedForDeletion = false;
                    hashElement.entry.paused = paused;
                    return;
                  }
                }
                const listElement = ListEntry.get(target, priority, paused, false);
                let ppList;
                if (priority === 0) {
                  ppList = this._updates0List;
                  this._appendIn(ppList, listElement);
                } else {
                  ppList = priority < 0 ? this._updatesNegList : this._updatesPosList;
                  this._priorityIn(ppList, listElement, priority);
                }
                this._hashForUpdates[targetId] = HashUpdateEntry.get(ppList, listElement, target, null);
              }
              unschedule(callback, target) {
                if (!target || !callback) {
                  return;
                }
                const targetId = target.uuid || target.id;
                if (!targetId) {
                  errorID(1510);
                  return;
                }
                const element = this._hashForTimers[targetId];
                if (element) {
                  const timers = element.timers;
                  if (!timers) {
                    return;
                  }
                  for (let i = 0, li = timers.length; i < li; i++) {
                    const timer = timers[i];
                    if (callback === timer.getCallback()) {
                      if (timer === element.currentTimer && !element.currentTimerSalvaged) {
                        element.currentTimerSalvaged = true;
                      }
                      timers.splice(i, 1);
                      CallbackTimer.put(timer);
                      if (element.timerIndex >= i) {
                        element.timerIndex--;
                      }
                      if (timers.length === 0) {
                        if (this._currentTarget === element) {
                          this._currentTargetSalvaged = true;
                        } else {
                          this._removeHashElement(element);
                        }
                      }
                      return;
                    }
                  }
                }
              }
              unscheduleForTimer(timerToUnschedule, target) {
                const targetId = target.uuid || target.id;
                const element = this._hashForTimers[targetId];
                const timers = element.timers;
                if (!timers) {
                  return;
                }
                for (let i = 0, li = timers.length; i < li; i++) {
                  const timer = timers[i];
                  if (timer === timerToUnschedule) {
                    timers.splice(i, 1);
                    if (timers.length === 0) {
                      this._currentTargetSalvaged = true;
                    }
                    return;
                  }
                }
              }
              unscheduleUpdate(target) {
                if (!target) {
                  return;
                }
                const targetId = target.uuid || target.id;
                if (!targetId) {
                  errorID(1510);
                  return;
                }
                const element = this._hashForUpdates[targetId];
                if (element !== null && element !== void 0 && element.entry) {
                  if (this._updateHashLocked) {
                    element.entry.markedForDeletion = true;
                  } else {
                    this._removeUpdateFromHash(element.entry);
                  }
                }
              }
              unscheduleAllForTarget(target) {
                if (!target) {
                  return;
                }
                const targetId = target.uuid || target.id;
                if (!targetId) {
                  errorID(1510);
                  return;
                }
                const element = this._hashForTimers[targetId];
                if (element !== null && element !== void 0 && element.timers) {
                  const timers = element.timers;
                  if (element.currentTimer && timers.indexOf(element.currentTimer) > -1 && !element.currentTimerSalvaged) {
                    element.currentTimerSalvaged = true;
                  }
                  for (let i = 0, l = timers.length; i < l; i++) {
                    CallbackTimer.put(timers[i]);
                  }
                  timers.length = 0;
                  if (this._currentTarget === element) {
                    this._currentTargetSalvaged = true;
                  } else {
                    this._removeHashElement(element);
                  }
                }
                this.unscheduleUpdate(target);
              }
              unscheduleAll() {
                this.unscheduleAllWithMinPriority(System.Priority.SCHEDULER);
              }
              unscheduleAllWithMinPriority(minPriority) {
                let i;
                let element;
                const arr = this._arrayForTimers;
                for (i = arr.length - 1; i >= 0; i--) {
                  element = arr[i];
                  if (element.target) {
                    this.unscheduleAllForTarget(element.target);
                  }
                }
                let entry;
                let temp_length = 0;
                if (minPriority < 0) {
                  for (i = 0; i < this._updatesNegList.length;) {
                    var _entry;
                    temp_length = this._updatesNegList.length;
                    entry = this._updatesNegList[i];
                    if ((_entry = entry) !== null && _entry !== void 0 && _entry.target && entry.priority >= minPriority) {
                      this.unscheduleUpdate(entry.target);
                    }
                    if (temp_length === this._updatesNegList.length) {
                      i++;
                    }
                  }
                }
                if (minPriority <= 0) {
                  for (i = 0; i < this._updates0List.length;) {
                    var _entry2;
                    temp_length = this._updates0List.length;
                    entry = this._updates0List[i];
                    if ((_entry2 = entry) !== null && _entry2 !== void 0 && _entry2.target) {
                      this.unscheduleUpdate(entry.target);
                    }
                    if (temp_length === this._updates0List.length) {
                      i++;
                    }
                  }
                }
                for (i = 0; i < this._updatesPosList.length;) {
                  var _entry3;
                  temp_length = this._updatesPosList.length;
                  entry = this._updatesPosList[i];
                  if ((_entry3 = entry) !== null && _entry3 !== void 0 && _entry3.target && entry.priority >= minPriority) {
                    this.unscheduleUpdate(entry.target);
                  }
                  if (temp_length === this._updatesPosList.length) {
                    i++;
                  }
                }
              }
              isScheduled(callback, target) {
                assertID(Boolean(callback), 1508);
                assertID(Boolean(target), 1509);
                const targetId = target.uuid || target.id;
                if (!targetId) {
                  errorID(1510);
                  return false;
                }
                const element = this._hashForTimers[targetId];
                if (!element) {
                  return false;
                }
                if (element.timers == null) {
                  return false;
                } else {
                  const timers = element.timers;
                  for (let i = 0; i < timers.length; ++i) {
                    const timer = timers[i];
                    if (callback === timer.getCallback()) {
                      return true;
                    }
                  }
                  return false;
                }
              }
              pauseAllTargets() {
                return this.pauseAllTargetsWithMinPriority(System.Priority.SCHEDULER);
              }
              pauseAllTargetsWithMinPriority(minPriority) {
                const idsWithSelectors = [];
                let element;
                const locArrayForTimers = this._arrayForTimers;
                let i;
                let li;
                for (i = 0, li = locArrayForTimers.length; i < li; i++) {
                  var _element;
                  element = locArrayForTimers[i];
                  if ((_element = element) !== null && _element !== void 0 && _element.target) {
                    element.paused = true;
                    idsWithSelectors.push(element.target);
                  }
                }
                let entry;
                if (minPriority < 0) {
                  for (i = 0; i < this._updatesNegList.length; i++) {
                    var _entry4;
                    entry = this._updatesNegList[i];
                    if ((_entry4 = entry) !== null && _entry4 !== void 0 && _entry4.target) {
                      if (entry.priority >= minPriority) {
                        entry.paused = true;
                        idsWithSelectors.push(entry.target);
                      }
                    }
                  }
                }
                if (minPriority <= 0) {
                  for (i = 0; i < this._updates0List.length; i++) {
                    var _entry5;
                    entry = this._updates0List[i];
                    if ((_entry5 = entry) !== null && _entry5 !== void 0 && _entry5.target) {
                      entry.paused = true;
                      idsWithSelectors.push(entry.target);
                    }
                  }
                }
                for (i = 0; i < this._updatesPosList.length; i++) {
                  var _entry6;
                  entry = this._updatesPosList[i];
                  if ((_entry6 = entry) !== null && _entry6 !== void 0 && _entry6.target) {
                    if (entry.priority >= minPriority) {
                      entry.paused = true;
                      idsWithSelectors.push(entry.target);
                    }
                  }
                }
                return idsWithSelectors;
              }
              resumeTargets(targetsToResume) {
                if (!targetsToResume) {
                  return;
                }
                for (let i = 0; i < targetsToResume.length; i++) {
                  this.resumeTarget(targetsToResume[i]);
                }
              }
              pauseTarget(target) {
                assertID(Boolean(target), 1503);
                const targetId = target.uuid || target.id;
                if (!targetId) {
                  errorID(1510);
                  return;
                }
                const element = this._hashForTimers[targetId];
                if (element) {
                  element.paused = true;
                }
                const elementUpdate = this._hashForUpdates[targetId];
                if (elementUpdate !== null && elementUpdate !== void 0 && elementUpdate.entry) {
                  elementUpdate.entry.paused = true;
                }
              }
              resumeTarget(target) {
                assertID(Boolean(target), 1504);
                const targetId = target.uuid || target.id;
                if (!targetId) {
                  errorID(1510);
                  return;
                }
                const element = this._hashForTimers[targetId];
                if (element) {
                  element.paused = false;
                }
                const elementUpdate = this._hashForUpdates[targetId];
                if (elementUpdate !== null && elementUpdate !== void 0 && elementUpdate.entry) {
                  elementUpdate.entry.paused = false;
                }
              }
              isTargetPaused(target) {
                assertID(Boolean(target), 1505);
                const targetId = target.uuid || target.id;
                if (!targetId) {
                  errorID(1510);
                  return false;
                }
                const element = this._hashForTimers[targetId];
                if (element) {
                  return element.paused;
                }
                const elementUpdate = this._hashForUpdates[targetId];
                if (elementUpdate !== null && elementUpdate !== void 0 && elementUpdate.entry) {
                  return elementUpdate.entry.paused;
                }
                return false;
              }
              _removeHashElement(element) {
                if (!element.target) {
                  return;
                }
                const targetId = element.target.uuid || element.target.id;
                if (typeof targetId === 'undefined') {
                  return;
                }
                delete this._hashForTimers[targetId];
                const arr = this._arrayForTimers;
                for (let i = 0, l = arr.length; i < l; i++) {
                  if (arr[i] === element) {
                    arr.splice(i, 1);
                    break;
                  }
                }
                HashTimerEntry.put(element);
              }
              _removeUpdateFromHash(entry) {
                if (!entry.target) {
                  return;
                }
                const targetId = entry.target.uuid || entry.target.id;
                if (typeof targetId === 'undefined') {
                  return;
                }
                const element = this._hashForUpdates[targetId];
                if (element) {
                  const list = element.list;
                  const listEntry = element.entry;
                  if (list) {
                    for (let i = 0, l = list.length; i < l; i++) {
                      if (list[i] === listEntry) {
                        list.splice(i, 1);
                        break;
                      }
                    }
                  }
                  delete this._hashForUpdates[targetId];
                  if (listEntry) {
                    ListEntry.put(listEntry);
                  }
                  HashUpdateEntry.put(element);
                }
              }
              _priorityIn(ppList, listElement, priority) {
                for (let i = 0; i < ppList.length; i++) {
                  if (priority < ppList[i].priority) {
                    ppList.splice(i, 0, listElement);
                    return;
                  }
                }
                ppList.push(listElement);
              }
              _appendIn(ppList, listElement) {
                ppList.push(listElement);
              }
            } exports('aO', Scheduler);
            Scheduler.ID = 'scheduler';
            legacyCC.Scheduler = Scheduler;

            const vmath = {};
            replaceProperty(vmath, 'vmath', [{
              name: 'vec2',
              newName: 'Vec2',
              target: math,
              targetName: 'math'
            }, {
              name: 'vec3',
              newName: 'Vec3',
              target: math,
              targetName: 'math'
            }, {
              name: 'vec4',
              newName: 'Vec4',
              target: math,
              targetName: 'math'
            }, {
              name: 'quat',
              newName: 'Quat',
              target: math,
              targetName: 'math'
            }, {
              name: 'mat3',
              newName: 'Mat3',
              target: math,
              targetName: 'math'
            }, {
              name: 'mat4',
              newName: 'Mat4',
              target: math,
              targetName: 'math'
            }, {
              name: 'color4',
              newName: 'Color',
              target: math,
              targetName: 'math'
            }, {
              name: 'rect',
              newName: 'Rect',
              target: math,
              targetName: 'math'
            }, {
              name: 'approx',
              newName: 'approx',
              target: math,
              targetName: 'math'
            }, {
              name: 'EPSILON',
              newName: 'EPSILON',
              target: math,
              targetName: 'math'
            }, {
              name: 'equals',
              newName: 'equals',
              target: math,
              targetName: 'math'
            }, {
              name: 'clamp',
              newName: 'clamp',
              target: math,
              targetName: 'math'
            }, {
              name: 'clamp01',
              newName: 'clamp01',
              target: math,
              targetName: 'math'
            }, {
              name: 'lerp',
              newName: 'lerp',
              target: math,
              targetName: 'math'
            }, {
              name: 'toRadian',
              newName: 'toRadian',
              target: math,
              targetName: 'math'
            }, {
              name: 'toDegree',
              newName: 'toDegree',
              target: math,
              targetName: 'math'
            }, {
              name: 'random',
              newName: 'random',
              target: math,
              targetName: 'math'
            }, {
              name: 'randomRange',
              newName: 'randomRange',
              target: math,
              targetName: 'math'
            }, {
              name: 'randomRangeInt',
              newName: 'randomRangeInt',
              target: math,
              targetName: 'math'
            }, {
              name: 'pseudoRandom',
              newName: 'pseudoRandom',
              target: math,
              targetName: 'math'
            }, {
              name: 'pseudoRandomRangeInt',
              newName: 'pseudoRandomRangeInt',
              target: math,
              targetName: 'math'
            }, {
              name: 'nextPow2',
              newName: 'nextPow2',
              target: math,
              targetName: 'math'
            }, {
              name: 'repeat',
              newName: 'repeat',
              target: math,
              targetName: 'math'
            }, {
              name: 'pingPong',
              newName: 'pingPong',
              target: math,
              targetName: 'math'
            }, {
              name: 'inverseLerp',
              newName: 'inverseLerp',
              target: math,
              targetName: 'math'
            }]);
            legacyCC.vmath = vmath;
            replaceProperty(Scheduler.prototype, 'Scheduler.prototype', [{
              name: 'enableForTarget',
              newName: 'enableForTarget',
              target: Scheduler,
              targetName: 'Scheduler'
            }]);
            replaceProperty(Scheduler, 'Scheduler', [{
              name: 'PRIORITY_SYSTEM',
              newName: 'System.Priority.SCHEDULER',
              customGetter() {
                return System.Priority.SCHEDULER;
              }
            }]);
            removeProperty(Scheduler, 'Scheduler', [{
              name: 'PRIORITY_NON_SYSTEM',
              suggest: 'Use enum` System.Priority` instead'
            }]);

            deprecateModuleExportedName({
              replaceProperty: {
                since: '3.6.0',
                removed: false
              },
              removeProperty: {
                since: '3.6.0',
                removed: false
              },
              markAsWarning: {
                since: '3.6.0',
                removed: false
              },
              setDefaultLogTimes: {
                since: '3.6.0',
                removed: false
              }
            });

            const _vec3 = new Vec3();
            function WorldNode3DToLocalNodeUI(mainCamera, wpos, uiNode, out) {
              if (!out) {
                out = new Vec3();
              }
              mainCamera.convertToUINode(wpos, uiNode, out);
              const pos = uiNode.position;
              out.add(pos);
              return out;
            }
            function WorldNode3DToWorldNodeUI(mainCamera, wpos, out) {
              if (!out) {
                out = new Vec3();
              }
              mainCamera.worldToScreen(wpos, out);
              out.x /= legacyCC.view.getScaleX();
              out.y /= legacyCC.view.getScaleY();
              return out;
            }
            const convertUtils = exports('ao', {
              WorldNode3DToLocalNodeUI,
              WorldNode3DToWorldNodeUI
            });
            legacyCC.pipelineUtils = convertUtils;
            replaceProperty(legacyCC.pipelineUtils, 'cc.pipelineUtils', [{
              name: 'WorldNode3DToLocalNodeUI',
              newName: 'convertToUINode',
              targetName: 'cc.Camera.prototype',
              customFunction(...args) {
                const camera = args[0];
                const out = args[3] || _vec3;
                camera.convertToUINode(args[1], args[2], out);
                out.add(args[2].position);
                return args[3] || out.clone();
              }
            }]);

            markAsWarning(js$1, 'js', [{
              name: 'js',
              suggest: `'js.js' is deprecated since v3.7.0, please access 'js' directly instead.`
            }]);

            const orientationMap = {
              0: Orientation.PORTRAIT,
              '-90': Orientation.LANDSCAPE_LEFT,
              90: Orientation.LANDSCAPE_RIGHT,
              180: Orientation.PORTRAIT_UPSIDE_DOWN
            };
            class ScreenAdapter extends EventTarget {
              get supportFullScreen() {
                return false;
              }
              get isFullScreen() {
                return false;
              }
              get devicePixelRatio() {
                return jsb.device.getDevicePixelRatio() || 1;
              }
              get windowSize() {
                const dpr = this.devicePixelRatio;
                const width = jsb.window.innerWidth;
                const height = jsb.window.innerHeight;
                const roundWidth = Math.round(width);
                const roundHeight = Math.round(height);
                return new Size(roundWidth * dpr, roundHeight * dpr);
              }
              set windowSize(size) {
                console.warn('Setting window size is not supported yet.');
              }
              get resolution() {
                const windowSize = this.windowSize;
                const resolutionScale = this.resolutionScale;
                return new Size(windowSize.width * resolutionScale, windowSize.height * resolutionScale);
              }
              get resolutionScale() {
                return this._resolutionScale;
              }
              set resolutionScale(v) {
                var _this$_cbToUpdateFram;
                if (v === this._resolutionScale) {
                  return;
                }
                this._resolutionScale = v;
                (_this$_cbToUpdateFram = this._cbToUpdateFrameBuffer) === null || _this$_cbToUpdateFram === void 0 ? void 0 : _this$_cbToUpdateFram.call(this);
              }
              get orientation() {
                return orientationMap[jsb.device.getDeviceOrientation()];
              }
              set orientation(value) {
                console.warn('Setting orientation is not supported yet.');
              }
              get safeAreaEdge() {
                const nativeSafeArea = jsb.device.getSafeAreaEdge();
                const dpr = this.devicePixelRatio;
                let topEdge = nativeSafeArea.x * dpr;
                let bottomEdge = nativeSafeArea.z * dpr;
                let leftEdge = nativeSafeArea.y * dpr;
                let rightEdge = nativeSafeArea.w * dpr;
                const orientation = this.orientation;
                if (orientation === Orientation.PORTRAIT) {
                  if (topEdge < bottomEdge) {
                    topEdge = bottomEdge;
                  } else {
                    bottomEdge = topEdge;
                  }
                } else if (leftEdge < rightEdge) {
                  leftEdge = rightEdge;
                } else {
                  rightEdge = leftEdge;
                }
                return {
                  top: topEdge,
                  bottom: bottomEdge,
                  left: leftEdge,
                  right: rightEdge
                };
              }
              get isProportionalToFrame() {
                return this._isProportionalToFrame;
              }
              set isProportionalToFrame(v) {}
              constructor() {
                super();
                this.isFrameRotated = false;
                this.handleResizeEvent = true;
                this._cbToUpdateFrameBuffer = void 0;
                this._resolutionScale = 1;
                this._isProportionalToFrame = false;
                this._registerEvent();
              }
              init(options, cbToRebuildFrameBuffer) {
                this._cbToUpdateFrameBuffer = cbToRebuildFrameBuffer;
                {
                  this._cbToUpdateFrameBuffer();
                }
              }
              requestFullScreen() {
                return Promise.reject(new Error('request fullscreen has not been supported yet on this platform.'));
              }
              exitFullScreen() {
                return Promise.reject(new Error('exit fullscreen has not been supported yet on this platform.'));
              }
              _registerEvent() {
                jsb.onResize = event => {
                  if (event.width === 0 || event.height === 0) return;
                  window.resize(event.width / this.devicePixelRatio, event.height / this.devicePixelRatio);
                  this.emit('window-resize', event.width, event.height, event.windowId);
                };
                jsb.onOrientationChanged = event => {
                  this.emit('orientation-change', this.orientation);
                };
              }
            }
            const screenAdapter = exports('bW', new ScreenAdapter());

            class Screen {
              init() {
                var _settings$querySettin, _settings$querySettin2;
                const exactFitScreen = (_settings$querySettin = settings.querySettings(Settings.Category.SCREEN, 'exactFitScreen')) !== null && _settings$querySettin !== void 0 ? _settings$querySettin : true;
                const orientation = (_settings$querySettin2 = settings.querySettings(Settings.Category.SCREEN, 'orientation')) !== null && _settings$querySettin2 !== void 0 ? _settings$querySettin2 : 'auto';
                const isHeadlessMode = settings.querySettings(Settings.Category.RENDERING, 'renderMode') === 3;
                screenAdapter.init({
                  exactFitScreen,
                  configOrientation: orientation,
                  isHeadlessMode
                }, () => {
                  var _director$root;
                  const director = legacyCC.director;
                  if (!((_director$root = director.root) !== null && _director$root !== void 0 && _director$root.pipeline)) {
                    warnID(1220);
                    return;
                  }
                  director.root.pipeline.shadingScale = screenAdapter.resolutionScale;
                });
              }
              get devicePixelRatio() {
                return screenAdapter.devicePixelRatio;
              }
              get windowSize() {
                return screenAdapter.windowSize;
              }
              set windowSize(size) {
                screenAdapter.windowSize = size;
              }
              get resolution() {
                return screenAdapter.resolution;
              }
              get supportsFullScreen() {
                return screenAdapter.supportFullScreen;
              }
              fullScreen() {
                return screenAdapter.isFullScreen;
              }
              requestFullScreen(element, onFullScreenChange, onFullScreenError) {
                if (arguments.length > 0) {
                  warnID(1400, 'screen.requestFullScreen(element, onFullScreenChange?, onFullScreenError?)', 'screen.requestFullScreen(): Promise');
                }
                return screenAdapter.requestFullScreen().then(() => {
                  onFullScreenChange === null || onFullScreenChange === void 0 ? void 0 : onFullScreenChange.call(document);
                }).catch(err => {
                  error(err);
                  onFullScreenError === null || onFullScreenError === void 0 ? void 0 : onFullScreenError.call(document);
                });
              }
              exitFullScreen() {
                return screenAdapter.exitFullScreen();
              }
              autoFullScreen(element, onFullScreenChange) {
                var _this$requestFullScre;
                (_this$requestFullScre = this.requestFullScreen(element, onFullScreenChange)) === null || _this$requestFullScre === void 0 ? void 0 : _this$requestFullScre.catch(e => {
                  warn(e);
                });
              }
              disableAutoFullScreen(element) {}
              on(type, callback, target) {
                screenAdapter.on(type, callback, target);
              }
              once(type, callback, target) {
                screenAdapter.once(type, callback, target);
              }
              off(type, callback, target) {
                screenAdapter.off(type, callback, target);
              }
            }
            const screen = exports('aK', new Screen());
            legacyCC.screen = screen;

            const sys = exports('aL', {
              Feature,
              hasFeature(feature) {
                return systemInfo.hasFeature(feature);
              },
              NetworkType,
              Language,
              OS,
              Platform,
              BrowserType,
              isNative: systemInfo.isNative,
              isBrowser: systemInfo.isBrowser,
              isMobile: systemInfo.isMobile,
              isLittleEndian: systemInfo.isLittleEndian,
              platform: systemInfo.platform,
              language: systemInfo.language,
              languageCode: systemInfo.nativeLanguage,
              os: systemInfo.os,
              osVersion: systemInfo.osVersion,
              osMainVersion: systemInfo.osMainVersion,
              browserType: systemInfo.browserType,
              browserVersion: systemInfo.browserVersion,
              isXR: systemInfo.isXR,
              windowPixelResolution: screen.windowSize,
              capabilities: {
                canvas: true,
                opengl: true,
                webp: systemInfo.hasFeature(Feature.WEBP),
                imageBitmap: systemInfo.hasFeature(Feature.IMAGE_BITMAP),
                touches: systemInfo.hasFeature(Feature.INPUT_TOUCH),
                mouse: systemInfo.hasFeature(Feature.EVENT_MOUSE),
                keyboard: systemInfo.hasFeature(Feature.EVENT_KEYBOARD),
                accelerometer: systemInfo.hasFeature(Feature.EVENT_ACCELEROMETER)
              },
              localStorage: {},
              getNetworkType() {
                return systemInfo.networkType;
              },
              getBatteryLevel() {
                return systemInfo.getBatteryLevel();
              },
              garbageCollect() {
                systemInfo.triggerGC();
              },
              isObjectValid(obj) {
                if (obj === null || obj === undefined) {
                  return false;
                }
                return true;
              },
              __isWebIOS14OrIPadOS14Env: false,
              dump() {
                let str = '';
                str += `isMobile : ${this.isMobile}\r\n`;
                str += `language : ${this.language}\r\n`;
                str += `browserType : ${this.browserType}\r\n`;
                str += `browserVersion : ${this.browserVersion}\r\n`;
                str += `supports webp: ${sys.hasFeature(Feature.WEBP)}\r\n`;
                str += `supports bitmap: ${sys.hasFeature(Feature.IMAGE_BITMAP)}\r\n`;
                str += `supports touches: ${sys.hasFeature(Feature.INPUT_TOUCH)}\r\n`;
                str += `supports mouse: ${sys.hasFeature(Feature.EVENT_MOUSE)}\r\n`;
                str += `supports keyboard: ${sys.hasFeature(Feature.EVENT_KEYBOARD)}\r\n`;
                str += `supports accelerometer: ${sys.hasFeature(Feature.EVENT_ACCELEROMETER)}\r\n`;
                str += `os : ${this.os}\r\n`;
                str += `osVersion : ${this.osVersion}\r\n`;
                str += `platform : ${this.platform}\r\n`;
                str += `Using ${legacyCC.game.renderType === legacyCC.game.RENDER_TYPE_WEBGL ? 'WEBGL' : 'CANVAS'} renderer.\r\n`;
                log(str);
              },
              openURL(url) {
                systemInfo.openURL(url);
              },
              init() {
                return Promise.resolve().then(() => systemInfo.init()).then(() => {
                  try {
                    let localStorage = sys.localStorage = window.localStorage;
                    localStorage.setItem('storage', '');
                    localStorage.removeItem('storage');
                    localStorage = null;
                  } catch (e) {
                    const warn = function (...args) {
                      warnID(5200);
                    };
                    this.localStorage = {
                      getItem: warn,
                      setItem: warn,
                      clear: warn,
                      removeItem: warn,
                      key: warn,
                      length: 0
                    };
                  }
                  {
                    this.__isWebIOS14OrIPadOS14Env = (sys.os === OS.IOS || sys.os === OS.OSX) && systemInfo.isBrowser && /(OS 14)|(Version\/14)/.test(window.navigator.userAgent);
                  }
                });
              },
              now() {
                return systemInfo.now();
              },
              restartVM() {
                systemInfo.restartJSVM();
              },
              getSafeAreaRect() {
                const locView = legacyCC.view;
                const edge = screenAdapter.safeAreaEdge;
                const windowSize = screenAdapter.windowSize;
                const leftBottom = new Vec2(edge.left, edge.bottom);
                const rightTop = new Vec2(windowSize.width - edge.right, windowSize.height - edge.top);
                locView._convertToUISpace(leftBottom);
                locView._convertToUISpace(rightTop);
                const x = leftBottom.x;
                const y = leftBottom.y;
                const width = rightTop.x - leftBottom.x;
                const height = rightTop.y - leftBottom.y;
                return new Rect(x, y, width, height);
              }
            });
            legacyCC.sys = sys;

            markAsWarning(legacyCC, 'cc', [{
              name: 'winSize',
              suggest: 'please use view.getVisibleSize() instead.'
            }]);
            markAsWarning(sys, 'sys', [{
              name: 'capabilities',
              suggest: 'please use sys.hasFeature() method instead.'
            }]);
            replaceProperty(sys, 'sys', ['UNKNOWN', 'ENGLISH', 'CHINESE', 'FRENCH', 'ITALIAN', 'GERMAN', 'SPANISH', 'DUTCH', 'RUSSIAN', 'KOREAN', 'JAPANESE', 'HUNGARIAN', 'PORTUGUESE', 'ARABIC', 'NORWEGIAN', 'POLISH', 'TURKISH', 'UKRAINIAN', 'ROMANIAN', 'BULGARIAN'].map(item => ({
              name: `LANGUAGE_${item}`,
              newName: item,
              target: sys.Language,
              targetName: 'sys.Language'
            })));
            replaceProperty(sys, 'sys', ['UNKNOWN', 'IOS', 'ANDROID', 'WINDOWS', 'LINUX', 'OSX'].map(item => ({
              name: `OS_${item}`,
              newName: item,
              target: sys.OS,
              targetName: 'sys.OS'
            })));
            replaceProperty(sys, 'sys', ['UNKNOWN', 'WECHAT', 'ANDROID', 'IE', 'EDGE', 'QQ', 'MOBILE_QQ', 'UC', 'UCBS', 'BAIDU_APP', 'BAIDU', 'MAXTHON', 'OPERA', 'OUPENG', 'MIUI', 'FIREFOX', 'SAFARI', 'CHROME', 'LIEBAO', 'QZONE', 'SOUGOU', 'HUAWEI'].map(item => ({
              name: `BROWSER_TYPE_${item}`,
              newName: item,
              target: sys.BrowserType,
              targetName: 'sys.BrowserType'
            })));
            replaceProperty(sys, 'sys', [{
              name: 'BROWSER_TYPE_360',
              newName: 'BROWSER_360',
              target: sys.BrowserType,
              targetName: 'sys.BrowserType'
            }]);
            replaceProperty(sys, 'sys', ['UNKNOWN', 'EDITOR_PAGE', 'EDITOR_CORE', 'MOBILE_BROWSER', 'DESKTOP_BROWSER', 'WIN32', 'MACOS', 'IOS', 'ANDROID', 'OHOS', 'WECHAT_GAME', 'BAIDU_MINI_GAME', 'XIAOMI_QUICK_GAME', 'ALIPAY_MINI_GAME', 'BYTEDANCE_MINI_GAME', 'OPPO_MINI_GAME', 'VIVO_MINI_GAME', 'HUAWEI_QUICK_GAME', 'COCOSPLAY', 'LINKSURE_MINI_GAME', 'QTT_MINI_GAME'].map(item => ({
              name: item,
              target: sys.Platform,
              targetName: 'sys.Platform'
            })));
            replaceProperty(sys, 'sys', [{
              name: 'IPHONE',
              newName: 'IOS',
              target: sys.Platform,
              targetName: 'sys.Platform'
            }, {
              name: 'IPAD',
              newName: 'IOS',
              target: sys.Platform,
              targetName: 'sys.Platform'
            }]);
            removeProperty(sys, 'sys', ['LINUX', 'BLACKBERRY', 'NACL', 'EMSCRIPTEN', 'TIZEN', 'WINRT', 'WP8', 'QQ_PLAY', 'FB_PLAYABLE_ADS'].map(item => ({
              name: item
            })));
            replaceProperty(sys, 'sys', [{
              name: 'windowPixelResolution',
              target: screen,
              targetName: 'screen',
              newName: 'windowSize'
            }]);
            markAsWarning(screen, 'screen', [{
              name: 'autoFullScreen',
              suggest: 'please use screen.requestFullScreen() instead.'
            }, {
              name: 'disableAutoFullScreen'
            }]);

            const visibleRect = exports('aN', {
              topLeft: legacyCC.v2(0, 0),
              topRight: legacyCC.v2(0, 0),
              top: legacyCC.v2(0, 0),
              bottomLeft: legacyCC.v2(0, 0),
              bottomRight: legacyCC.v2(0, 0),
              bottom: legacyCC.v2(0, 0),
              center: legacyCC.v2(0, 0),
              left: legacyCC.v2(0, 0),
              right: legacyCC.v2(0, 0),
              width: 0,
              height: 0,
              init(visibleRect_) {
                const w = this.width = visibleRect_.width;
                const h = this.height = visibleRect_.height;
                const l = visibleRect_.x;
                const b = visibleRect_.y;
                const t = b + h;
                const r = l + w;
                this.topLeft.x = l;
                this.topLeft.y = t;
                this.topRight.x = r;
                this.topRight.y = t;
                this.top.x = l + w / 2;
                this.top.y = t;
                this.bottomLeft.x = l;
                this.bottomLeft.y = b;
                this.bottomRight.x = r;
                this.bottomRight.y = b;
                this.bottom.x = l + w / 2;
                this.bottom.y = b;
                this.center.x = l + w / 2;
                this.center.y = b + h / 2;
                this.left.x = l;
                this.left.y = b + h / 2;
                this.right.x = r;
                this.right.y = b + h / 2;
              }
            });
            legacyCC.visibleRect = visibleRect;

            legacyCC.easing = easing;

            function syncNodeValues(node) {
              const lpos = node._lpos;
              node.setPositionForJS(lpos.x, lpos.y, lpos.z);
              const lscale = node._lscale;
              node.setScaleForJS(lscale.x, lscale.y, lscale.z);
              const lrot = node._lrot;
              node.setRotationForJS(lrot.x, lrot.y, lrot.z, lrot.w);
              const euler = node._euler;
              node.setRotationFromEulerForJS(euler.x, euler.y, euler.z);
            }
            function updateChildrenForDeserialize(node) {
              if (!node) {
                return;
              }
              const children = node.children;
              if (!children) {
                return;
              }
              const len = children.length;
              if (!len) {
                return;
              }
              node._setChildren(children);
              for (let i = 0; i < len; ++i) {
                const child = children[i];
                updateChildrenForDeserialize(child);
              }
            }
            function ExtraEventMethods() {}
            ExtraEventMethods.prototype.once = function once(type, callback, target) {
              return this.on(type, callback, target, true);
            };
            ExtraEventMethods.prototype.targetOff = function targetOff(typeOrTarget) {
              this.removeAll(typeOrTarget);
            };

            var jsbUtils = /*#__PURE__*/Object.freeze({
                __proto__: null,
                syncNodeValues: syncNodeValues,
                updateChildrenForDeserialize: updateChildrenForDeserialize,
                ExtraEventMethods: ExtraEventMethods
            });
            exports('b3', jsbUtils);

            class GarbageCollectionManager {
              constructor() {
                this._finalizationRegistry = null;
                this._gcObjects = new WeakMap();
              }
              registerGCObject(gcObject) {
                {
                  return gcObject;
                }
              }
              init() {}
              finalizationRegistryCallback(token) {
                const gcObject = this._gcObjects.get(token);
                if (gcObject) {
                  this._gcObjects.delete(token);
                  gcObject.destroy();
                }
                this._finalizationRegistry.unregister(token);
              }
              destroy() {}
            }
            const garbageCollectionManager = exports('bg', new GarbageCollectionManager());

            legacyCC.math = math;
            legacyCC.geometry = geometry;

        })
    };
}));

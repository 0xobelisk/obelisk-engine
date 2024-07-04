System.register(['./index-ce98320e.js', './rendering-sub-mesh.jsb-25043997.js', './node-event-18d96a1b.js', './builtin-res-mgr.jsb-c9e8e53a.js', './scene-asset.jsb-0d4c6201.js', './index-e789d6e6.js', './sprite-renderer-9a6a919d.js', './find-7a03d1cc.js', './deprecated-f8df8d32.js', './director-dc238483.js', './sprite-5c924512.js', './deprecated-cd3500e0.js', './renderer-3bf7a012.js', './deprecated-fcfb90f6.js', './device-90bc7390.js', './decorators-b63b63a2.js', './touch-af62e326.js', './deprecated-80961f27.js', './cached-array-9b18d763.js', './pipeline-sub-state.jsb-f3a5cc2c.js', './murmurhash2_gc-2108d723.js', './camera-component-b329f870.js', './create-mesh.jsb-8af9d27e.js', './buffer-9511d9f4.js', './model-renderer-f8d2f66d.js'], (function (exports) {
    'use strict';
    var Rect, _decorator, Mat4, Color, EventTarget, Vec3, Scheduler, System, applyDecoratedInitializer, legacyCC, Enum, ccenum, setClassAlias, errorID, setPropertyEnumType, CCObject, Asset, _applyDecoratedDescriptor, Node, Texture2D, Material, builtinResMgr, SpriteFrame, UIRenderer, RenderDrawInfo, RenderEntity, RenderEntityType, StaticVBAccessor, RenderData, vfmtPosUvColor, game, Game, director, Graphics, MaterialInstance, RecyclePool, BlendFactor;
    return {
        setters: [function (module) {
            Rect = module.R;
            _decorator = module.ap;
            Mat4 = module.s;
            Color = module.C;
            EventTarget = module.aD;
            Vec3 = module.n;
            Scheduler = module.aO;
            System = module.a$;
            applyDecoratedInitializer = module.bx;
            legacyCC = module.l;
            Enum = module.aa;
            ccenum = module.ab;
            setClassAlias = module.cj;
            errorID = module.f;
            setPropertyEnumType = module.bh;
            CCObject = module.as;
        }, function () {}, function (module) {
            Asset = module.A;
            _applyDecoratedDescriptor = module.H;
        }, function (module) {
            Node = module.Q;
            Texture2D = module.am;
            Material = module.ap;
            builtinResMgr = module.at;
        }, function () {}, function () {}, function (module) {
            SpriteFrame = module.a;
            UIRenderer = module.b;
            RenderDrawInfo = module.u;
            RenderEntity = module.q;
            RenderEntityType = module.r;
            StaticVBAccessor = module.k;
            RenderData = module.e;
            vfmtPosUvColor = module.i;
        }, function () {}, function (module) {
            game = module.g;
            Game = module.G;
        }, function (module) {
            director = module.n;
        }, function () {}, function (module) {
            Graphics = module.G;
        }, function (module) {
            MaterialInstance = module.M;
        }, function (module) {
            RecyclePool = module.R;
        }, function (module) {
            BlendFactor = module.n;
        }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
        execute: (function () {

            var __extends=undefined&&undefined.__extends||function(){var extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();let dragonBones$1={};(function(dragonBones){})(dragonBones$1||(dragonBones$1={}));(function(dragonBones){var DragonBones=function(){function DragonBones(eventManager){this._clock=new dragonBones.WorldClock();this._events=[];this._objects=[];this._eventManager=null;this._eventManager=eventManager;console.info("DragonBones: "+DragonBones.VERSION+"\nWebsite: http://dragonbones.com/\nSource and Demo: https://github.com/DragonBones/");}DragonBones.prototype.advanceTime=function(passedTime){if(this._objects.length>0){for(var _i=0,_a=this._objects;_i<_a.length;_i++){var object=_a[_i];object.returnToPool();}this._objects.length=0;}this._clock.advanceTime(passedTime);if(this._events.length>0){for(var i=0;i<this._events.length;++i){var eventObject=this._events[i];var armature=eventObject.armature;if(armature._armatureData!==null){armature.eventDispatcher.dispatchDBEvent(eventObject.type,eventObject);if(eventObject.type===dragonBones.EventObject.SOUND_EVENT){this._eventManager.dispatchDBEvent(eventObject.type,eventObject);}}this.bufferObject(eventObject);}this._events.length=0;}};DragonBones.prototype.bufferEvent=function(value){if(this._events.indexOf(value)<0){this._events.push(value);}};DragonBones.prototype.bufferObject=function(object){if(this._objects.indexOf(object)<0){this._objects.push(object);}};Object.defineProperty(DragonBones.prototype,"clock",{get:function(){return this._clock;},enumerable:true,configurable:true});Object.defineProperty(DragonBones.prototype,"eventManager",{get:function(){return this._eventManager;},enumerable:true,configurable:true});DragonBones.VERSION="5.6.300";DragonBones.yDown=false;DragonBones.debug=false;DragonBones.debugDraw=false;DragonBones.webAssembly=false;return DragonBones;}();dragonBones.DragonBones=DragonBones;})(dragonBones$1||(dragonBones$1={}));if(!console.warn){console.warn=function(){};}if(!console.assert){console.assert=function(){};}if(!Date.now){Date.now=function now(){return new Date().getTime();};}var __extends=function(t,e){function r(){this.constructor=t;}for(var i in e){if(e.hasOwnProperty(i)){t[i]=e[i];}}r.prototype=e.prototype,t.prototype=new r();};(function(dragonBones){var BaseObject=function(){function BaseObject(){this.hashCode=BaseObject._hashCode++;this._isInPool=false;}BaseObject._returnObject=function(object){var classType=String(object.constructor);var maxCount=classType in BaseObject._maxCountMap?BaseObject._maxCountMap[classType]:BaseObject._defaultMaxCount;var pool=BaseObject._poolsMap[classType]=BaseObject._poolsMap[classType]||[];if(pool.length<maxCount){if(!object._isInPool){object._isInPool=true;pool.push(object);}else {console.warn("The object is already in the pool.");}}};BaseObject.toString=function(){throw new Error();};BaseObject.setMaxCount=function(objectConstructor,maxCount){if(maxCount<0||maxCount!==maxCount){maxCount=0;}if(objectConstructor!==null){var classType=String(objectConstructor);var pool=classType in BaseObject._poolsMap?BaseObject._poolsMap[classType]:null;if(pool!==null&&pool.length>maxCount){pool.length=maxCount;}BaseObject._maxCountMap[classType]=maxCount;}else {BaseObject._defaultMaxCount=maxCount;for(var classType in BaseObject._poolsMap){var pool=BaseObject._poolsMap[classType];if(pool.length>maxCount){pool.length=maxCount;}if(classType in BaseObject._maxCountMap){BaseObject._maxCountMap[classType]=maxCount;}}}};BaseObject.clearPool=function(objectConstructor){if(objectConstructor===void 0){objectConstructor=null;}if(objectConstructor!==null){var classType=String(objectConstructor);var pool=classType in BaseObject._poolsMap?BaseObject._poolsMap[classType]:null;if(pool!==null&&pool.length>0){pool.length=0;}}else {for(var k in BaseObject._poolsMap){var pool=BaseObject._poolsMap[k];pool.length=0;}}};BaseObject.borrowObject=function(objectConstructor){var classType=String(objectConstructor);var pool=classType in BaseObject._poolsMap?BaseObject._poolsMap[classType]:null;if(pool!==null&&pool.length>0){var object_1=pool.pop();object_1._isInPool=false;return object_1;}var object=new objectConstructor();object._onClear();return object;};BaseObject.prototype.returnToPool=function(){this._onClear();BaseObject._returnObject(this);};BaseObject._hashCode=0;BaseObject._defaultMaxCount=3000;BaseObject._maxCountMap={};BaseObject._poolsMap={};return BaseObject;}();dragonBones.BaseObject=BaseObject;})(dragonBones$1||(dragonBones$1={}));(function(dragonBones){var Matrix=function(){function Matrix(a,b,c,d,tx,ty){if(a===void 0){a=1.0;}if(b===void 0){b=0.0;}if(c===void 0){c=0.0;}if(d===void 0){d=1.0;}if(tx===void 0){tx=0.0;}if(ty===void 0){ty=0.0;}this.a=a;this.b=b;this.c=c;this.d=d;this.tx=tx;this.ty=ty;}Matrix.prototype.toString=function(){return "[object dragonBones.Matrix] a:"+this.a+" b:"+this.b+" c:"+this.c+" d:"+this.d+" tx:"+this.tx+" ty:"+this.ty;};Matrix.prototype.copyFrom=function(value){this.a=value.a;this.b=value.b;this.c=value.c;this.d=value.d;this.tx=value.tx;this.ty=value.ty;return this;};Matrix.prototype.copyFromArray=function(value,offset){if(offset===void 0){offset=0;}this.a=value[offset];this.b=value[offset+1];this.c=value[offset+2];this.d=value[offset+3];this.tx=value[offset+4];this.ty=value[offset+5];return this;};Matrix.prototype.identity=function(){this.a=this.d=1.0;this.b=this.c=0.0;this.tx=this.ty=0.0;return this;};Matrix.prototype.concat=function(value){var aA=this.a*value.a;var bA=0.0;var cA=0.0;var dA=this.d*value.d;var txA=this.tx*value.a+value.tx;var tyA=this.ty*value.d+value.ty;if(this.b!==0.0||this.c!==0.0){aA+=this.b*value.c;bA+=this.b*value.d;cA+=this.c*value.a;dA+=this.c*value.b;}if(value.b!==0.0||value.c!==0.0){bA+=this.a*value.b;cA+=this.d*value.c;txA+=this.ty*value.c;tyA+=this.tx*value.b;}this.a=aA;this.b=bA;this.c=cA;this.d=dA;this.tx=txA;this.ty=tyA;return this;};Matrix.prototype.invert=function(){var aA=this.a;var bA=this.b;var cA=this.c;var dA=this.d;var txA=this.tx;var tyA=this.ty;if(bA===0.0&&cA===0.0){this.b=this.c=0.0;if(aA===0.0||dA===0.0){this.a=this.b=this.tx=this.ty=0.0;}else {aA=this.a=1.0/aA;dA=this.d=1.0/dA;this.tx=-aA*txA;this.ty=-dA*tyA;}return this;}var determinant=aA*dA-bA*cA;if(determinant===0.0){this.a=this.d=1.0;this.b=this.c=0.0;this.tx=this.ty=0.0;return this;}determinant=1.0/determinant;var k=this.a=dA*determinant;bA=this.b=-bA*determinant;cA=this.c=-cA*determinant;dA=this.d=aA*determinant;this.tx=-(k*txA+cA*tyA);this.ty=-(bA*txA+dA*tyA);return this;};Matrix.prototype.transformPoint=function(x,y,result,delta){if(delta===void 0){delta=false;}result.x=this.a*x+this.c*y;result.y=this.b*x+this.d*y;if(!delta){result.x+=this.tx;result.y+=this.ty;}};Matrix.prototype.transformRectangle=function(rectangle,delta){if(delta===void 0){delta=false;}var a=this.a;var b=this.b;var c=this.c;var d=this.d;var tx=delta?0.0:this.tx;var ty=delta?0.0:this.ty;var x=rectangle.x;var y=rectangle.y;var xMax=x+rectangle.width;var yMax=y+rectangle.height;var x0=a*x+c*y+tx;var y0=b*x+d*y+ty;var x1=a*xMax+c*y+tx;var y1=b*xMax+d*y+ty;var x2=a*xMax+c*yMax+tx;var y2=b*xMax+d*yMax+ty;var x3=a*x+c*yMax+tx;var y3=b*x+d*yMax+ty;var tmp=0.0;if(x0>x1){tmp=x0;x0=x1;x1=tmp;}if(x2>x3){tmp=x2;x2=x3;x3=tmp;}rectangle.x=Math.floor(x0<x2?x0:x2);rectangle.width=Math.ceil((x1>x3?x1:x3)-rectangle.x);if(y0>y1){tmp=y0;y0=y1;y1=tmp;}if(y2>y3){tmp=y2;y2=y3;y3=tmp;}rectangle.y=Math.floor(y0<y2?y0:y2);rectangle.height=Math.ceil((y1>y3?y1:y3)-rectangle.y);};return Matrix;}();dragonBones.Matrix=Matrix;})(dragonBones$1||(dragonBones$1={}));(function(dragonBones){var Transform=function(){function Transform(x,y,skew,rotation,scaleX,scaleY){if(x===void 0){x=0.0;}if(y===void 0){y=0.0;}if(skew===void 0){skew=0.0;}if(rotation===void 0){rotation=0.0;}if(scaleX===void 0){scaleX=1.0;}if(scaleY===void 0){scaleY=1.0;}this.x=x;this.y=y;this.skew=skew;this.rotation=rotation;this.scaleX=scaleX;this.scaleY=scaleY;}Transform.normalizeRadian=function(value){value=(value+Math.PI)%(Math.PI*2.0);value+=value>0.0?-Math.PI:Math.PI;return value;};Transform.prototype.toString=function(){return "[object dragonBones.Transform] x:"+this.x+" y:"+this.y+" skewX:"+this.skew*180.0/Math.PI+" skewY:"+this.rotation*180.0/Math.PI+" scaleX:"+this.scaleX+" scaleY:"+this.scaleY;};Transform.prototype.copyFrom=function(value){this.x=value.x;this.y=value.y;this.skew=value.skew;this.rotation=value.rotation;this.scaleX=value.scaleX;this.scaleY=value.scaleY;return this;};Transform.prototype.identity=function(){this.x=this.y=0.0;this.skew=this.rotation=0.0;this.scaleX=this.scaleY=1.0;return this;};Transform.prototype.add=function(value){this.x+=value.x;this.y+=value.y;this.skew+=value.skew;this.rotation+=value.rotation;this.scaleX*=value.scaleX;this.scaleY*=value.scaleY;return this;};Transform.prototype.minus=function(value){this.x-=value.x;this.y-=value.y;this.skew-=value.skew;this.rotation-=value.rotation;this.scaleX/=value.scaleX;this.scaleY/=value.scaleY;return this;};Transform.prototype.fromMatrix=function(matrix){var backupScaleX=this.scaleX,backupScaleY=this.scaleY;var PI_Q=Transform.PI_Q;this.x=matrix.tx;this.y=matrix.ty;this.rotation=Math.atan(matrix.b/matrix.a);var skewX=Math.atan(-matrix.c/matrix.d);this.scaleX=this.rotation>-PI_Q&&this.rotation<PI_Q?matrix.a/Math.cos(this.rotation):matrix.b/Math.sin(this.rotation);this.scaleY=skewX>-PI_Q&&skewX<PI_Q?matrix.d/Math.cos(skewX):-matrix.c/Math.sin(skewX);if(backupScaleX>=0.0&&this.scaleX<0.0){this.scaleX=-this.scaleX;this.rotation=this.rotation-Math.PI;}if(backupScaleY>=0.0&&this.scaleY<0.0){this.scaleY=-this.scaleY;skewX=skewX-Math.PI;}this.skew=skewX-this.rotation;return this;};Transform.prototype.toMatrix=function(matrix){if(this.rotation===0.0){matrix.a=1.0;matrix.b=0.0;}else {matrix.a=Math.cos(this.rotation);matrix.b=Math.sin(this.rotation);}if(this.skew===0.0){matrix.c=-matrix.b;matrix.d=matrix.a;}else {matrix.c=-Math.sin(this.skew+this.rotation);matrix.d=Math.cos(this.skew+this.rotation);}if(this.scaleX!==1.0){matrix.a*=this.scaleX;matrix.b*=this.scaleX;}if(this.scaleY!==1.0){matrix.c*=this.scaleY;matrix.d*=this.scaleY;}matrix.tx=this.x;matrix.ty=this.y;return this;};Transform.PI=Math.PI;Transform.PI_D=Math.PI*2.0;Transform.PI_H=Math.PI/2.0;Transform.PI_Q=Math.PI/4.0;Transform.RAD_DEG=180.0/Math.PI;Transform.DEG_RAD=Math.PI/180.0;return Transform;}();dragonBones.Transform=Transform;})(dragonBones$1||(dragonBones$1={}));(function(dragonBones){var ColorTransform=function(){function ColorTransform(alphaMultiplier,redMultiplier,greenMultiplier,blueMultiplier,alphaOffset,redOffset,greenOffset,blueOffset){if(alphaMultiplier===void 0){alphaMultiplier=1.0;}if(redMultiplier===void 0){redMultiplier=1.0;}if(greenMultiplier===void 0){greenMultiplier=1.0;}if(blueMultiplier===void 0){blueMultiplier=1.0;}if(alphaOffset===void 0){alphaOffset=0;}if(redOffset===void 0){redOffset=0;}if(greenOffset===void 0){greenOffset=0;}if(blueOffset===void 0){blueOffset=0;}this.alphaMultiplier=alphaMultiplier;this.redMultiplier=redMultiplier;this.greenMultiplier=greenMultiplier;this.blueMultiplier=blueMultiplier;this.alphaOffset=alphaOffset;this.redOffset=redOffset;this.greenOffset=greenOffset;this.blueOffset=blueOffset;}ColorTransform.prototype.copyFrom=function(value){this.alphaMultiplier=value.alphaMultiplier;this.redMultiplier=value.redMultiplier;this.greenMultiplier=value.greenMultiplier;this.blueMultiplier=value.blueMultiplier;this.alphaOffset=value.alphaOffset;this.redOffset=value.redOffset;this.greenOffset=value.greenOffset;this.blueOffset=value.blueOffset;};ColorTransform.prototype.identity=function(){this.alphaMultiplier=this.redMultiplier=this.greenMultiplier=this.blueMultiplier=1.0;this.alphaOffset=this.redOffset=this.greenOffset=this.blueOffset=0;};return ColorTransform;}();dragonBones.ColorTransform=ColorTransform;})(dragonBones$1||(dragonBones$1={}));(function(dragonBones){var Point=function(){function Point(x,y){if(x===void 0){x=0.0;}if(y===void 0){y=0.0;}this.x=x;this.y=y;}Point.prototype.copyFrom=function(value){this.x=value.x;this.y=value.y;};Point.prototype.clear=function(){this.x=this.y=0.0;};return Point;}();dragonBones.Point=Point;})(dragonBones$1||(dragonBones$1={}));(function(dragonBones){var Rectangle=function(){function Rectangle(x,y,width,height){if(x===void 0){x=0.0;}if(y===void 0){y=0.0;}if(width===void 0){width=0.0;}if(height===void 0){height=0.0;}this.x=x;this.y=y;this.width=width;this.height=height;}Rectangle.prototype.copyFrom=function(value){this.x=value.x;this.y=value.y;this.width=value.width;this.height=value.height;};Rectangle.prototype.clear=function(){this.x=this.y=0.0;this.width=this.height=0.0;};return Rectangle;}();dragonBones.Rectangle=Rectangle;})(dragonBones$1||(dragonBones$1={}));(function(dragonBones){var UserData=function(_super){__extends(UserData,_super);function UserData(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.ints=[];_this.floats=[];_this.strings=[];return _this;}UserData.toString=function(){return "[class dragonBones.UserData]";};UserData.prototype._onClear=function(){this.ints.length=0;this.floats.length=0;this.strings.length=0;};UserData.prototype.addInt=function(value){this.ints.push(value);};UserData.prototype.addFloat=function(value){this.floats.push(value);};UserData.prototype.addString=function(value){this.strings.push(value);};UserData.prototype.getInt=function(index){if(index===void 0){index=0;}return index>=0&&index<this.ints.length?this.ints[index]:0;};UserData.prototype.getFloat=function(index){if(index===void 0){index=0;}return index>=0&&index<this.floats.length?this.floats[index]:0.0;};UserData.prototype.getString=function(index){if(index===void 0){index=0;}return index>=0&&index<this.strings.length?this.strings[index]:"";};return UserData;}(dragonBones.BaseObject);dragonBones.UserData=UserData;var ActionData=function(_super){__extends(ActionData,_super);function ActionData(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.data=null;return _this;}ActionData.toString=function(){return "[class dragonBones.ActionData]";};ActionData.prototype._onClear=function(){if(this.data!==null){this.data.returnToPool();}this.type=0;this.name="";this.bone=null;this.slot=null;this.data=null;};return ActionData;}(dragonBones.BaseObject);dragonBones.ActionData=ActionData;})(dragonBones$1||(dragonBones$1={}));(function(dragonBones){var DragonBonesData=function(_super){__extends(DragonBonesData,_super);function DragonBonesData(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.frameIndices=[];_this.cachedFrames=[];_this.armatureNames=[];_this.armatures={};_this.userData=null;return _this;}DragonBonesData.toString=function(){return "[class dragonBones.DragonBonesData]";};DragonBonesData.prototype._onClear=function(){for(var k in this.armatures){this.armatures[k].returnToPool();delete this.armatures[k];}if(this.userData!==null){this.userData.returnToPool();}this.autoSearch=false;this.frameRate=0;this.version="";this.name="";this.stage=null;this.frameIndices.length=0;this.cachedFrames.length=0;this.armatureNames.length=0;this.binary=null;this.intArray=null;this.floatArray=null;this.frameIntArray=null;this.frameFloatArray=null;this.frameArray=null;this.timelineArray=null;this.userData=null;};DragonBonesData.prototype.addArmature=function(value){if(value.name in this.armatures){console.warn("Same armature: "+value.name);return;}value.parent=this;this.armatures[value.name]=value;this.armatureNames.push(value.name);};DragonBonesData.prototype.getArmature=function(armatureName){return armatureName in this.armatures?this.armatures[armatureName]:null;};DragonBonesData.prototype.dispose=function(){console.warn("已废弃");this.returnToPool();};return DragonBonesData;}(dragonBones.BaseObject);dragonBones.DragonBonesData=DragonBonesData;})(dragonBones$1||(dragonBones$1={}));(function(dragonBones){var ArmatureData=function(_super){__extends(ArmatureData,_super);function ArmatureData(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.aabb=new dragonBones.Rectangle();_this.animationNames=[];_this.sortedBones=[];_this.sortedSlots=[];_this.defaultActions=[];_this.actions=[];_this.bones={};_this.slots={};_this.constraints={};_this.skins={};_this.animations={};_this.canvas=null;_this.userData=null;return _this;}ArmatureData.toString=function(){return "[class dragonBones.ArmatureData]";};ArmatureData.prototype._onClear=function(){for(var _i=0,_a=this.defaultActions;_i<_a.length;_i++){var action=_a[_i];action.returnToPool();}for(var _b=0,_c=this.actions;_b<_c.length;_b++){var action=_c[_b];action.returnToPool();}for(var k in this.bones){this.bones[k].returnToPool();delete this.bones[k];}for(var k in this.slots){this.slots[k].returnToPool();delete this.slots[k];}for(var k in this.constraints){this.constraints[k].returnToPool();delete this.constraints[k];}for(var k in this.skins){this.skins[k].returnToPool();delete this.skins[k];}for(var k in this.animations){this.animations[k].returnToPool();delete this.animations[k];}if(this.canvas!==null){this.canvas.returnToPool();}if(this.userData!==null){this.userData.returnToPool();}this.type=0;this.frameRate=0;this.cacheFrameRate=0;this.scale=1.0;this.name="";this.aabb.clear();this.animationNames.length=0;this.sortedBones.length=0;this.sortedSlots.length=0;this.defaultActions.length=0;this.actions.length=0;this.defaultSkin=null;this.defaultAnimation=null;this.canvas=null;this.userData=null;this.parent=null;};ArmatureData.prototype.sortBones=function(){var total=this.sortedBones.length;if(total<=0){return;}var sortHelper=this.sortedBones.concat();var index=0;var count=0;this.sortedBones.length=0;while(count<total){var bone=sortHelper[index++];if(index>=total){index=0;}if(this.sortedBones.indexOf(bone)>=0){continue;}var flag=false;for(var k in this.constraints){var constraint=this.constraints[k];if(constraint.root===bone&&this.sortedBones.indexOf(constraint.target)<0){flag=true;break;}}if(flag){continue;}if(bone.parent!==null&&this.sortedBones.indexOf(bone.parent)<0){continue;}this.sortedBones.push(bone);count++;}};ArmatureData.prototype.cacheFrames=function(frameRate){if(this.cacheFrameRate>0){return;}this.cacheFrameRate=frameRate;for(var k in this.animations){this.animations[k].cacheFrames(this.cacheFrameRate);}};ArmatureData.prototype.setCacheFrame=function(globalTransformMatrix,transform){var dataArray=this.parent.cachedFrames;var arrayOffset=dataArray.length;dataArray.length+=10;dataArray[arrayOffset]=globalTransformMatrix.a;dataArray[arrayOffset+1]=globalTransformMatrix.b;dataArray[arrayOffset+2]=globalTransformMatrix.c;dataArray[arrayOffset+3]=globalTransformMatrix.d;dataArray[arrayOffset+4]=globalTransformMatrix.tx;dataArray[arrayOffset+5]=globalTransformMatrix.ty;dataArray[arrayOffset+6]=transform.rotation;dataArray[arrayOffset+7]=transform.skew;dataArray[arrayOffset+8]=transform.scaleX;dataArray[arrayOffset+9]=transform.scaleY;return arrayOffset;};ArmatureData.prototype.getCacheFrame=function(globalTransformMatrix,transform,arrayOffset){var dataArray=this.parent.cachedFrames;globalTransformMatrix.a=dataArray[arrayOffset];globalTransformMatrix.b=dataArray[arrayOffset+1];globalTransformMatrix.c=dataArray[arrayOffset+2];globalTransformMatrix.d=dataArray[arrayOffset+3];globalTransformMatrix.tx=dataArray[arrayOffset+4];globalTransformMatrix.ty=dataArray[arrayOffset+5];transform.rotation=dataArray[arrayOffset+6];transform.skew=dataArray[arrayOffset+7];transform.scaleX=dataArray[arrayOffset+8];transform.scaleY=dataArray[arrayOffset+9];transform.x=globalTransformMatrix.tx;transform.y=globalTransformMatrix.ty;};ArmatureData.prototype.addBone=function(value){if(value.name in this.bones){console.warn("Same bone: "+value.name);return;}this.bones[value.name]=value;this.sortedBones.push(value);};ArmatureData.prototype.addSlot=function(value){if(value.name in this.slots){console.warn("Same slot: "+value.name);return;}this.slots[value.name]=value;this.sortedSlots.push(value);};ArmatureData.prototype.addConstraint=function(value){if(value.name in this.constraints){console.warn("Same constraint: "+value.name);return;}this.constraints[value.name]=value;};ArmatureData.prototype.addSkin=function(value){if(value.name in this.skins){console.warn("Same skin: "+value.name);return;}value.parent=this;this.skins[value.name]=value;if(this.defaultSkin===null){this.defaultSkin=value;}if(value.name==="default"){this.defaultSkin=value;}};ArmatureData.prototype.addAnimation=function(value){if(value.name in this.animations){console.warn("Same animation: "+value.name);return;}value.parent=this;this.animations[value.name]=value;this.animationNames.push(value.name);if(this.defaultAnimation===null){this.defaultAnimation=value;}};ArmatureData.prototype.addAction=function(value,isDefault){if(isDefault){this.defaultActions.push(value);}else {this.actions.push(value);}};ArmatureData.prototype.getBone=function(boneName){return boneName in this.bones?this.bones[boneName]:null;};ArmatureData.prototype.getSlot=function(slotName){return slotName in this.slots?this.slots[slotName]:null;};ArmatureData.prototype.getConstraint=function(constraintName){return constraintName in this.constraints?this.constraints[constraintName]:null;};ArmatureData.prototype.getSkin=function(skinName){return skinName in this.skins?this.skins[skinName]:null;};ArmatureData.prototype.getMesh=function(skinName,slotName,meshName){var skin=this.getSkin(skinName);if(skin===null){return null;}return skin.getDisplay(slotName,meshName);};ArmatureData.prototype.getAnimation=function(animationName){return animationName in this.animations?this.animations[animationName]:null;};return ArmatureData;}(dragonBones.BaseObject);dragonBones.ArmatureData=ArmatureData;var BoneData=function(_super){__extends(BoneData,_super);function BoneData(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.transform=new dragonBones.Transform();_this.userData=null;return _this;}BoneData.toString=function(){return "[class dragonBones.BoneData]";};BoneData.prototype._onClear=function(){if(this.userData!==null){this.userData.returnToPool();}this.inheritTranslation=false;this.inheritRotation=false;this.inheritScale=false;this.inheritReflection=false;this.type=0;this.length=0.0;this.name="";this.transform.identity();this.userData=null;this.parent=null;};return BoneData;}(dragonBones.BaseObject);dragonBones.BoneData=BoneData;var SurfaceData=function(_super){__extends(SurfaceData,_super);function SurfaceData(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.vertices=[];return _this;}SurfaceData.toString=function(){return "[class dragonBones.SurfaceData]";};SurfaceData.prototype._onClear=function(){_super.prototype._onClear.call(this);this.type=1;this.segmentX=0;this.segmentY=0;this.vertices.length=0;};return SurfaceData;}(BoneData);dragonBones.SurfaceData=SurfaceData;var SlotData=function(_super){__extends(SlotData,_super);function SlotData(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.color=null;_this.userData=null;return _this;}SlotData.createColor=function(){return new dragonBones.ColorTransform();};SlotData.toString=function(){return "[class dragonBones.SlotData]";};SlotData.prototype._onClear=function(){if(this.userData!==null){this.userData.returnToPool();}this.blendMode=0;this.displayIndex=0;this.zOrder=0;this.name="";this.color=null;this.userData=null;this.parent=null;};SlotData.DEFAULT_COLOR=new dragonBones.ColorTransform();return SlotData;}(dragonBones.BaseObject);dragonBones.SlotData=SlotData;})(dragonBones$1||(dragonBones$1={}));(function(dragonBones){var ConstraintData=function(_super){__extends(ConstraintData,_super);function ConstraintData(){return _super!==null&&_super.apply(this,arguments)||this;}ConstraintData.prototype._onClear=function(){this.order=0;this.name="";this.type=0;this.target=null;this.root=null;this.bone=null;};return ConstraintData;}(dragonBones.BaseObject);dragonBones.ConstraintData=ConstraintData;var IKConstraintData=function(_super){__extends(IKConstraintData,_super);function IKConstraintData(){return _super!==null&&_super.apply(this,arguments)||this;}IKConstraintData.toString=function(){return "[class dragonBones.IKConstraintData]";};IKConstraintData.prototype._onClear=function(){_super.prototype._onClear.call(this);this.scaleEnabled=false;this.bendPositive=false;this.weight=1.0;};return IKConstraintData;}(ConstraintData);dragonBones.IKConstraintData=IKConstraintData;var PathConstraintData=function(_super){__extends(PathConstraintData,_super);function PathConstraintData(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.bones=[];return _this;}PathConstraintData.toString=function(){return "[class dragonBones.PathConstraintData]";};PathConstraintData.prototype._onClear=function(){_super.prototype._onClear.call(this);this.pathSlot=null;this.pathDisplayData=null;this.bones.length=0;this.positionMode=0;this.spacingMode=1;this.rotateMode=1;this.position=0.0;this.spacing=0.0;this.rotateOffset=0.0;this.rotateMix=0.0;this.translateMix=0.0;};PathConstraintData.prototype.AddBone=function(value){this.bones.push(value);};return PathConstraintData;}(ConstraintData);dragonBones.PathConstraintData=PathConstraintData;})(dragonBones$1||(dragonBones$1={}));(function(dragonBones){var CanvasData=function(_super){__extends(CanvasData,_super);function CanvasData(){return _super!==null&&_super.apply(this,arguments)||this;}CanvasData.toString=function(){return "[class dragonBones.CanvasData]";};CanvasData.prototype._onClear=function(){this.hasBackground=false;this.color=0x000000;this.x=0;this.y=0;this.width=0;this.height=0;};return CanvasData;}(dragonBones.BaseObject);dragonBones.CanvasData=CanvasData;})(dragonBones$1||(dragonBones$1={}));(function(dragonBones){var SkinData=function(_super){__extends(SkinData,_super);function SkinData(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.displays={};return _this;}SkinData.toString=function(){return "[class dragonBones.SkinData]";};SkinData.prototype._onClear=function(){for(var k in this.displays){var slotDisplays=this.displays[k];for(var _i=0,slotDisplays_1=slotDisplays;_i<slotDisplays_1.length;_i++){var display=slotDisplays_1[_i];if(display!==null){display.returnToPool();}}delete this.displays[k];}this.name="";this.parent=null;};SkinData.prototype.addDisplay=function(slotName,value){if(!(slotName in this.displays)){this.displays[slotName]=[];}if(value!==null){value.parent=this;}var slotDisplays=this.displays[slotName];slotDisplays.push(value);};SkinData.prototype.getDisplay=function(slotName,displayName){var slotDisplays=this.getDisplays(slotName);if(slotDisplays!==null){for(var _i=0,slotDisplays_2=slotDisplays;_i<slotDisplays_2.length;_i++){var display=slotDisplays_2[_i];if(display!==null&&display.name===displayName){return display;}}}return null;};SkinData.prototype.getDisplays=function(slotName){if(!(slotName in this.displays)){return null;}return this.displays[slotName];};return SkinData;}(dragonBones.BaseObject);dragonBones.SkinData=SkinData;})(dragonBones$1||(dragonBones$1={}));(function(dragonBones){var VerticesData=function(){function VerticesData(){this.weight=null;}VerticesData.prototype.clear=function(){if(!this.isShared&&this.weight!==null){this.weight.returnToPool();}this.isShared=false;this.inheritDeform=false;this.offset=0;this.data=null;this.weight=null;};VerticesData.prototype.shareFrom=function(value){this.isShared=true;this.offset=value.offset;this.weight=value.weight;};return VerticesData;}();dragonBones.VerticesData=VerticesData;var DisplayData=function(_super){__extends(DisplayData,_super);function DisplayData(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.transform=new dragonBones.Transform();return _this;}DisplayData.prototype._onClear=function(){this.name="";this.path="";this.transform.identity();this.parent=null;};return DisplayData;}(dragonBones.BaseObject);dragonBones.DisplayData=DisplayData;var ImageDisplayData=function(_super){__extends(ImageDisplayData,_super);function ImageDisplayData(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.pivot=new dragonBones.Point();return _this;}ImageDisplayData.toString=function(){return "[class dragonBones.ImageDisplayData]";};ImageDisplayData.prototype._onClear=function(){_super.prototype._onClear.call(this);this.type=0;this.pivot.clear();this.texture=null;};return ImageDisplayData;}(DisplayData);dragonBones.ImageDisplayData=ImageDisplayData;var ArmatureDisplayData=function(_super){__extends(ArmatureDisplayData,_super);function ArmatureDisplayData(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.actions=[];return _this;}ArmatureDisplayData.toString=function(){return "[class dragonBones.ArmatureDisplayData]";};ArmatureDisplayData.prototype._onClear=function(){_super.prototype._onClear.call(this);for(var _i=0,_a=this.actions;_i<_a.length;_i++){var action=_a[_i];action.returnToPool();}this.type=1;this.inheritAnimation=false;this.actions.length=0;this.armature=null;};ArmatureDisplayData.prototype.addAction=function(value){this.actions.push(value);};return ArmatureDisplayData;}(DisplayData);dragonBones.ArmatureDisplayData=ArmatureDisplayData;var MeshDisplayData=function(_super){__extends(MeshDisplayData,_super);function MeshDisplayData(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.vertices=new VerticesData();return _this;}MeshDisplayData.toString=function(){return "[class dragonBones.MeshDisplayData]";};MeshDisplayData.prototype._onClear=function(){_super.prototype._onClear.call(this);this.type=2;this.vertices.clear();this.texture=null;};return MeshDisplayData;}(DisplayData);dragonBones.MeshDisplayData=MeshDisplayData;var BoundingBoxDisplayData=function(_super){__extends(BoundingBoxDisplayData,_super);function BoundingBoxDisplayData(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.boundingBox=null;return _this;}BoundingBoxDisplayData.toString=function(){return "[class dragonBones.BoundingBoxDisplayData]";};BoundingBoxDisplayData.prototype._onClear=function(){_super.prototype._onClear.call(this);if(this.boundingBox!==null){this.boundingBox.returnToPool();}this.type=3;this.boundingBox=null;};return BoundingBoxDisplayData;}(DisplayData);dragonBones.BoundingBoxDisplayData=BoundingBoxDisplayData;var PathDisplayData=function(_super){__extends(PathDisplayData,_super);function PathDisplayData(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.vertices=new VerticesData();_this.curveLengths=[];return _this;}PathDisplayData.toString=function(){return "[class dragonBones.PathDisplayData]";};PathDisplayData.prototype._onClear=function(){_super.prototype._onClear.call(this);this.type=4;this.closed=false;this.constantSpeed=false;this.vertices.clear();this.curveLengths.length=0;};return PathDisplayData;}(DisplayData);dragonBones.PathDisplayData=PathDisplayData;var WeightData=function(_super){__extends(WeightData,_super);function WeightData(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.bones=[];return _this;}WeightData.toString=function(){return "[class dragonBones.WeightData]";};WeightData.prototype._onClear=function(){this.count=0;this.offset=0;this.bones.length=0;};WeightData.prototype.addBone=function(value){this.bones.push(value);};return WeightData;}(dragonBones.BaseObject);dragonBones.WeightData=WeightData;})(dragonBones$1||(dragonBones$1={}));(function(dragonBones){var BoundingBoxData=function(_super){__extends(BoundingBoxData,_super);function BoundingBoxData(){return _super!==null&&_super.apply(this,arguments)||this;}BoundingBoxData.prototype._onClear=function(){this.color=0x000000;this.width=0.0;this.height=0.0;};return BoundingBoxData;}(dragonBones.BaseObject);dragonBones.BoundingBoxData=BoundingBoxData;var RectangleBoundingBoxData=function(_super){__extends(RectangleBoundingBoxData,_super);function RectangleBoundingBoxData(){return _super!==null&&_super.apply(this,arguments)||this;}RectangleBoundingBoxData.toString=function(){return "[class dragonBones.RectangleBoundingBoxData]";};RectangleBoundingBoxData._computeOutCode=function(x,y,xMin,yMin,xMax,yMax){var code=0;if(x<xMin){code|=1;}else if(x>xMax){code|=2;}if(y<yMin){code|=4;}else if(y>yMax){code|=8;}return code;};RectangleBoundingBoxData.rectangleIntersectsSegment=function(xA,yA,xB,yB,xMin,yMin,xMax,yMax,intersectionPointA,intersectionPointB,normalRadians){if(intersectionPointA===void 0){intersectionPointA=null;}if(intersectionPointB===void 0){intersectionPointB=null;}if(normalRadians===void 0){normalRadians=null;}var inSideA=xA>xMin&&xA<xMax&&yA>yMin&&yA<yMax;var inSideB=xB>xMin&&xB<xMax&&yB>yMin&&yB<yMax;if(inSideA&&inSideB){return -1;}var intersectionCount=0;var outcode0=RectangleBoundingBoxData._computeOutCode(xA,yA,xMin,yMin,xMax,yMax);var outcode1=RectangleBoundingBoxData._computeOutCode(xB,yB,xMin,yMin,xMax,yMax);while(true){if((outcode0|outcode1)===0){intersectionCount=2;break;}else if((outcode0&outcode1)!==0){break;}var x=0.0;var y=0.0;var normalRadian=0.0;var outcodeOut=outcode0!==0?outcode0:outcode1;if((outcodeOut&4)!==0){x=xA+(xB-xA)*(yMin-yA)/(yB-yA);y=yMin;if(normalRadians!==null){normalRadian=-Math.PI*0.5;}}else if((outcodeOut&8)!==0){x=xA+(xB-xA)*(yMax-yA)/(yB-yA);y=yMax;if(normalRadians!==null){normalRadian=Math.PI*0.5;}}else if((outcodeOut&2)!==0){y=yA+(yB-yA)*(xMax-xA)/(xB-xA);x=xMax;if(normalRadians!==null){normalRadian=0;}}else if((outcodeOut&1)!==0){y=yA+(yB-yA)*(xMin-xA)/(xB-xA);x=xMin;if(normalRadians!==null){normalRadian=Math.PI;}}if(outcodeOut===outcode0){xA=x;yA=y;outcode0=RectangleBoundingBoxData._computeOutCode(xA,yA,xMin,yMin,xMax,yMax);if(normalRadians!==null){normalRadians.x=normalRadian;}}else {xB=x;yB=y;outcode1=RectangleBoundingBoxData._computeOutCode(xB,yB,xMin,yMin,xMax,yMax);if(normalRadians!==null){normalRadians.y=normalRadian;}}}if(intersectionCount){if(inSideA){intersectionCount=2;if(intersectionPointA!==null){intersectionPointA.x=xB;intersectionPointA.y=yB;}if(intersectionPointB!==null){intersectionPointB.x=xB;intersectionPointB.y=xB;}if(normalRadians!==null){normalRadians.x=normalRadians.y+Math.PI;}}else if(inSideB){intersectionCount=1;if(intersectionPointA!==null){intersectionPointA.x=xA;intersectionPointA.y=yA;}if(intersectionPointB!==null){intersectionPointB.x=xA;intersectionPointB.y=yA;}if(normalRadians!==null){normalRadians.y=normalRadians.x+Math.PI;}}else {intersectionCount=3;if(intersectionPointA!==null){intersectionPointA.x=xA;intersectionPointA.y=yA;}if(intersectionPointB!==null){intersectionPointB.x=xB;intersectionPointB.y=yB;}}}return intersectionCount;};RectangleBoundingBoxData.prototype._onClear=function(){_super.prototype._onClear.call(this);this.type=0;};RectangleBoundingBoxData.prototype.containsPoint=function(pX,pY){var widthH=this.width*0.5;if(pX>=-widthH&&pX<=widthH){var heightH=this.height*0.5;if(pY>=-heightH&&pY<=heightH){return true;}}return false;};RectangleBoundingBoxData.prototype.intersectsSegment=function(xA,yA,xB,yB,intersectionPointA,intersectionPointB,normalRadians){if(intersectionPointA===void 0){intersectionPointA=null;}if(intersectionPointB===void 0){intersectionPointB=null;}if(normalRadians===void 0){normalRadians=null;}var widthH=this.width*0.5;var heightH=this.height*0.5;var intersectionCount=RectangleBoundingBoxData.rectangleIntersectsSegment(xA,yA,xB,yB,-widthH,-heightH,widthH,heightH,intersectionPointA,intersectionPointB,normalRadians);return intersectionCount;};return RectangleBoundingBoxData;}(BoundingBoxData);dragonBones.RectangleBoundingBoxData=RectangleBoundingBoxData;var EllipseBoundingBoxData=function(_super){__extends(EllipseBoundingBoxData,_super);function EllipseBoundingBoxData(){return _super!==null&&_super.apply(this,arguments)||this;}EllipseBoundingBoxData.toString=function(){return "[class dragonBones.EllipseData]";};EllipseBoundingBoxData.ellipseIntersectsSegment=function(xA,yA,xB,yB,xC,yC,widthH,heightH,intersectionPointA,intersectionPointB,normalRadians){if(intersectionPointA===void 0){intersectionPointA=null;}if(intersectionPointB===void 0){intersectionPointB=null;}if(normalRadians===void 0){normalRadians=null;}var d=widthH/heightH;var dd=d*d;yA*=d;yB*=d;var dX=xB-xA;var dY=yB-yA;var lAB=Math.sqrt(dX*dX+dY*dY);var xD=dX/lAB;var yD=dY/lAB;var a=(xC-xA)*xD+(yC-yA)*yD;var aa=a*a;var ee=xA*xA+yA*yA;var rr=widthH*widthH;var dR=rr-ee+aa;var intersectionCount=0;if(dR>=0.0){var dT=Math.sqrt(dR);var sA=a-dT;var sB=a+dT;var inSideA=sA<0.0?-1:sA<=lAB?0:1;var inSideB=sB<0.0?-1:sB<=lAB?0:1;var sideAB=inSideA*inSideB;if(sideAB<0){return -1;}else if(sideAB===0){if(inSideA===-1){intersectionCount=2;xB=xA+sB*xD;yB=(yA+sB*yD)/d;if(intersectionPointA!==null){intersectionPointA.x=xB;intersectionPointA.y=yB;}if(intersectionPointB!==null){intersectionPointB.x=xB;intersectionPointB.y=yB;}if(normalRadians!==null){normalRadians.x=Math.atan2(yB/rr*dd,xB/rr);normalRadians.y=normalRadians.x+Math.PI;}}else if(inSideB===1){intersectionCount=1;xA=xA+sA*xD;yA=(yA+sA*yD)/d;if(intersectionPointA!==null){intersectionPointA.x=xA;intersectionPointA.y=yA;}if(intersectionPointB!==null){intersectionPointB.x=xA;intersectionPointB.y=yA;}if(normalRadians!==null){normalRadians.x=Math.atan2(yA/rr*dd,xA/rr);normalRadians.y=normalRadians.x+Math.PI;}}else {intersectionCount=3;if(intersectionPointA!==null){intersectionPointA.x=xA+sA*xD;intersectionPointA.y=(yA+sA*yD)/d;if(normalRadians!==null){normalRadians.x=Math.atan2(intersectionPointA.y/rr*dd,intersectionPointA.x/rr);}}if(intersectionPointB!==null){intersectionPointB.x=xA+sB*xD;intersectionPointB.y=(yA+sB*yD)/d;if(normalRadians!==null){normalRadians.y=Math.atan2(intersectionPointB.y/rr*dd,intersectionPointB.x/rr);}}}}}return intersectionCount;};EllipseBoundingBoxData.prototype._onClear=function(){_super.prototype._onClear.call(this);this.type=1;};EllipseBoundingBoxData.prototype.containsPoint=function(pX,pY){var widthH=this.width*0.5;if(pX>=-widthH&&pX<=widthH){var heightH=this.height*0.5;if(pY>=-heightH&&pY<=heightH){pY*=widthH/heightH;return Math.sqrt(pX*pX+pY*pY)<=widthH;}}return false;};EllipseBoundingBoxData.prototype.intersectsSegment=function(xA,yA,xB,yB,intersectionPointA,intersectionPointB,normalRadians){if(intersectionPointA===void 0){intersectionPointA=null;}if(intersectionPointB===void 0){intersectionPointB=null;}if(normalRadians===void 0){normalRadians=null;}var intersectionCount=EllipseBoundingBoxData.ellipseIntersectsSegment(xA,yA,xB,yB,0.0,0.0,this.width*0.5,this.height*0.5,intersectionPointA,intersectionPointB,normalRadians);return intersectionCount;};return EllipseBoundingBoxData;}(BoundingBoxData);dragonBones.EllipseBoundingBoxData=EllipseBoundingBoxData;var PolygonBoundingBoxData=function(_super){__extends(PolygonBoundingBoxData,_super);function PolygonBoundingBoxData(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.vertices=[];return _this;}PolygonBoundingBoxData.toString=function(){return "[class dragonBones.PolygonBoundingBoxData]";};PolygonBoundingBoxData.polygonIntersectsSegment=function(xA,yA,xB,yB,vertices,intersectionPointA,intersectionPointB,normalRadians){if(intersectionPointA===void 0){intersectionPointA=null;}if(intersectionPointB===void 0){intersectionPointB=null;}if(normalRadians===void 0){normalRadians=null;}if(xA===xB){xA=xB+0.000001;}if(yA===yB){yA=yB+0.000001;}var count=vertices.length;var dXAB=xA-xB;var dYAB=yA-yB;var llAB=xA*yB-yA*xB;var intersectionCount=0;var xC=vertices[count-2];var yC=vertices[count-1];var dMin=0.0;var dMax=0.0;var xMin=0.0;var yMin=0.0;var xMax=0.0;var yMax=0.0;for(var i=0;i<count;i+=2){var xD=vertices[i];var yD=vertices[i+1];if(xC===xD){xC=xD+0.0001;}if(yC===yD){yC=yD+0.0001;}var dXCD=xC-xD;var dYCD=yC-yD;var llCD=xC*yD-yC*xD;var ll=dXAB*dYCD-dYAB*dXCD;var x=(llAB*dXCD-dXAB*llCD)/ll;if((x>=xC&&x<=xD||x>=xD&&x<=xC)&&(dXAB===0.0||x>=xA&&x<=xB||x>=xB&&x<=xA)){var y=(llAB*dYCD-dYAB*llCD)/ll;if((y>=yC&&y<=yD||y>=yD&&y<=yC)&&(dYAB===0.0||y>=yA&&y<=yB||y>=yB&&y<=yA)){if(intersectionPointB!==null){var d=x-xA;if(d<0.0){d=-d;}if(intersectionCount===0){dMin=d;dMax=d;xMin=x;yMin=y;xMax=x;yMax=y;if(normalRadians!==null){normalRadians.x=Math.atan2(yD-yC,xD-xC)-Math.PI*0.5;normalRadians.y=normalRadians.x;}}else {if(d<dMin){dMin=d;xMin=x;yMin=y;if(normalRadians!==null){normalRadians.x=Math.atan2(yD-yC,xD-xC)-Math.PI*0.5;}}if(d>dMax){dMax=d;xMax=x;yMax=y;if(normalRadians!==null){normalRadians.y=Math.atan2(yD-yC,xD-xC)-Math.PI*0.5;}}}intersectionCount++;}else {xMin=x;yMin=y;xMax=x;yMax=y;intersectionCount++;if(normalRadians!==null){normalRadians.x=Math.atan2(yD-yC,xD-xC)-Math.PI*0.5;normalRadians.y=normalRadians.x;}break;}}}xC=xD;yC=yD;}if(intersectionCount===1){if(intersectionPointA!==null){intersectionPointA.x=xMin;intersectionPointA.y=yMin;}if(intersectionPointB!==null){intersectionPointB.x=xMin;intersectionPointB.y=yMin;}if(normalRadians!==null){normalRadians.y=normalRadians.x+Math.PI;}}else if(intersectionCount>1){intersectionCount++;if(intersectionPointA!==null){intersectionPointA.x=xMin;intersectionPointA.y=yMin;}if(intersectionPointB!==null){intersectionPointB.x=xMax;intersectionPointB.y=yMax;}}return intersectionCount;};PolygonBoundingBoxData.prototype._onClear=function(){_super.prototype._onClear.call(this);this.type=2;this.x=0.0;this.y=0.0;this.vertices.length=0;};PolygonBoundingBoxData.prototype.containsPoint=function(pX,pY){var isInSide=false;if(pX>=this.x&&pX<=this.width&&pY>=this.y&&pY<=this.height){for(var i=0,l=this.vertices.length,iP=l-2;i<l;i+=2){var yA=this.vertices[iP+1];var yB=this.vertices[i+1];if(yB<pY&&yA>=pY||yA<pY&&yB>=pY){var xA=this.vertices[iP];var xB=this.vertices[i];if((pY-yB)*(xA-xB)/(yA-yB)+xB<pX){isInSide=!isInSide;}}iP=i;}}return isInSide;};PolygonBoundingBoxData.prototype.intersectsSegment=function(xA,yA,xB,yB,intersectionPointA,intersectionPointB,normalRadians){if(intersectionPointA===void 0){intersectionPointA=null;}if(intersectionPointB===void 0){intersectionPointB=null;}if(normalRadians===void 0){normalRadians=null;}var intersectionCount=0;if(RectangleBoundingBoxData.rectangleIntersectsSegment(xA,yA,xB,yB,this.x,this.y,this.x+this.width,this.y+this.height,null,null,null)!==0){intersectionCount=PolygonBoundingBoxData.polygonIntersectsSegment(xA,yA,xB,yB,this.vertices,intersectionPointA,intersectionPointB,normalRadians);}return intersectionCount;};return PolygonBoundingBoxData;}(BoundingBoxData);dragonBones.PolygonBoundingBoxData=PolygonBoundingBoxData;})(dragonBones$1||(dragonBones$1={}));(function(dragonBones){var AnimationData=function(_super){__extends(AnimationData,_super);function AnimationData(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.cachedFrames=[];_this.boneTimelines={};_this.surfaceTimelines={};_this.slotTimelines={};_this.constraintTimelines={};_this.animationTimelines={};_this.boneCachedFrameIndices={};_this.slotCachedFrameIndices={};_this.actionTimeline=null;_this.zOrderTimeline=null;return _this;}AnimationData.toString=function(){return "[class dragonBones.AnimationData]";};AnimationData.prototype._onClear=function(){for(var k in this.boneTimelines){for(var _i=0,_a=this.boneTimelines[k];_i<_a.length;_i++){var timeline=_a[_i];timeline.returnToPool();}delete this.boneTimelines[k];}for(var k in this.surfaceTimelines){for(var _b=0,_c=this.surfaceTimelines[k];_b<_c.length;_b++){var timeline=_c[_b];timeline.returnToPool();}delete this.surfaceTimelines[k];}for(var k in this.slotTimelines){for(var _d=0,_e=this.slotTimelines[k];_d<_e.length;_d++){var timeline=_e[_d];timeline.returnToPool();}delete this.slotTimelines[k];}for(var k in this.constraintTimelines){for(var _f=0,_g=this.constraintTimelines[k];_f<_g.length;_f++){var timeline=_g[_f];timeline.returnToPool();}delete this.constraintTimelines[k];}for(var k in this.animationTimelines){for(var _h=0,_j=this.animationTimelines[k];_h<_j.length;_h++){var timeline=_j[_h];timeline.returnToPool();}delete this.animationTimelines[k];}for(var k in this.boneCachedFrameIndices){delete this.boneCachedFrameIndices[k];}for(var k in this.slotCachedFrameIndices){delete this.slotCachedFrameIndices[k];}if(this.actionTimeline!==null){this.actionTimeline.returnToPool();}if(this.zOrderTimeline!==null){this.zOrderTimeline.returnToPool();}this.frameIntOffset=0;this.frameFloatOffset=0;this.frameOffset=0;this.frameCount=0;this.playTimes=0;this.duration=0.0;this.scale=1.0;this.fadeInTime=0.0;this.cacheFrameRate=0.0;this.name="";this.cachedFrames.length=0;this.actionTimeline=null;this.zOrderTimeline=null;this.parent=null;};AnimationData.prototype.cacheFrames=function(frameRate){if(this.cacheFrameRate>0.0){return;}this.cacheFrameRate=Math.max(Math.ceil(frameRate*this.scale),1.0);var cacheFrameCount=Math.ceil(this.cacheFrameRate*this.duration)+1;this.cachedFrames.length=cacheFrameCount;for(var i=0,l=this.cacheFrames.length;i<l;++i){this.cachedFrames[i]=false;}for(var _i=0,_a=this.parent.sortedBones;_i<_a.length;_i++){var bone=_a[_i];var indices=new Array(cacheFrameCount);for(var i=0,l=indices.length;i<l;++i){indices[i]=-1;}this.boneCachedFrameIndices[bone.name]=indices;}for(var _b=0,_c=this.parent.sortedSlots;_b<_c.length;_b++){var slot=_c[_b];var indices=new Array(cacheFrameCount);for(var i=0,l=indices.length;i<l;++i){indices[i]=-1;}this.slotCachedFrameIndices[slot.name]=indices;}};AnimationData.prototype.addBoneTimeline=function(bone,timeline){var timelines=bone.name in this.boneTimelines?this.boneTimelines[bone.name]:this.boneTimelines[bone.name]=[];if(timelines.indexOf(timeline)<0){timelines.push(timeline);}};AnimationData.prototype.addSurfaceTimeline=function(surface,timeline){var timelines=surface.name in this.surfaceTimelines?this.surfaceTimelines[surface.name]:this.surfaceTimelines[surface.name]=[];if(timelines.indexOf(timeline)<0){timelines.push(timeline);}};AnimationData.prototype.addSlotTimeline=function(slot,timeline){var timelines=slot.name in this.slotTimelines?this.slotTimelines[slot.name]:this.slotTimelines[slot.name]=[];if(timelines.indexOf(timeline)<0){timelines.push(timeline);}};AnimationData.prototype.addConstraintTimeline=function(constraint,timeline){var timelines=constraint.name in this.constraintTimelines?this.constraintTimelines[constraint.name]:this.constraintTimelines[constraint.name]=[];if(timelines.indexOf(timeline)<0){timelines.push(timeline);}};AnimationData.prototype.addAnimationTimeline=function(timelineName,timeline){var timelines=timelineName in this.animationTimelines?this.animationTimelines[timelineName]:this.animationTimelines[timelineName]=[];if(timelines.indexOf(timeline)<0){timelines.push(timeline);}};AnimationData.prototype.getBoneTimelines=function(timelineName){return timelineName in this.boneTimelines?this.boneTimelines[timelineName]:null;};AnimationData.prototype.getSurfaceTimelines=function(timelineName){return timelineName in this.surfaceTimelines?this.surfaceTimelines[timelineName]:null;};AnimationData.prototype.getSlotTimelines=function(timelineName){return timelineName in this.slotTimelines?this.slotTimelines[timelineName]:null;};AnimationData.prototype.getConstraintTimelines=function(timelineName){return timelineName in this.constraintTimelines?this.constraintTimelines[timelineName]:null;};AnimationData.prototype.getAnimationTimelines=function(timelineName){return timelineName in this.animationTimelines?this.animationTimelines[timelineName]:null;};AnimationData.prototype.getBoneCachedFrameIndices=function(boneName){return boneName in this.boneCachedFrameIndices?this.boneCachedFrameIndices[boneName]:null;};AnimationData.prototype.getSlotCachedFrameIndices=function(slotName){return slotName in this.slotCachedFrameIndices?this.slotCachedFrameIndices[slotName]:null;};return AnimationData;}(dragonBones.BaseObject);dragonBones.AnimationData=AnimationData;var TimelineData=function(_super){__extends(TimelineData,_super);function TimelineData(){return _super!==null&&_super.apply(this,arguments)||this;}TimelineData.toString=function(){return "[class dragonBones.TimelineData]";};TimelineData.prototype._onClear=function(){this.type=10;this.offset=0;this.frameIndicesOffset=-1;};return TimelineData;}(dragonBones.BaseObject);dragonBones.TimelineData=TimelineData;})(dragonBones$1||(dragonBones$1={}));(function(dragonBones){var AnimationConfig=function(_super){__extends(AnimationConfig,_super);function AnimationConfig(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.boneMask=[];return _this;}AnimationConfig.toString=function(){return "[class dragonBones.AnimationConfig]";};AnimationConfig.prototype._onClear=function(){this.pauseFadeOut=true;this.fadeOutMode=4;this.fadeOutTweenType=1;this.fadeOutTime=-1.0;this.actionEnabled=true;this.additiveBlending=false;this.displayControl=true;this.pauseFadeIn=true;this.resetToPose=true;this.fadeInTweenType=1;this.playTimes=-1;this.layer=0;this.position=0.0;this.duration=-1.0;this.timeScale=-100.0;this.weight=1.0;this.fadeInTime=-1.0;this.autoFadeOutTime=-1.0;this.name="";this.animation="";this.group="";this.boneMask.length=0;};AnimationConfig.prototype.clear=function(){this._onClear();};AnimationConfig.prototype.copyFrom=function(value){this.pauseFadeOut=value.pauseFadeOut;this.fadeOutMode=value.fadeOutMode;this.autoFadeOutTime=value.autoFadeOutTime;this.fadeOutTweenType=value.fadeOutTweenType;this.actionEnabled=value.actionEnabled;this.additiveBlending=value.additiveBlending;this.displayControl=value.displayControl;this.pauseFadeIn=value.pauseFadeIn;this.resetToPose=value.resetToPose;this.playTimes=value.playTimes;this.layer=value.layer;this.position=value.position;this.duration=value.duration;this.timeScale=value.timeScale;this.fadeInTime=value.fadeInTime;this.fadeOutTime=value.fadeOutTime;this.fadeInTweenType=value.fadeInTweenType;this.weight=value.weight;this.name=value.name;this.animation=value.animation;this.group=value.group;this.boneMask.length=value.boneMask.length;for(var i=0,l=this.boneMask.length;i<l;++i){this.boneMask[i]=value.boneMask[i];}};AnimationConfig.prototype.containsBoneMask=function(boneName){return this.boneMask.length===0||this.boneMask.indexOf(boneName)>=0;};AnimationConfig.prototype.addBoneMask=function(armature,boneName,recursive){if(recursive===void 0){recursive=true;}var currentBone=armature.getBone(boneName);if(currentBone===null){return;}if(this.boneMask.indexOf(boneName)<0){this.boneMask.push(boneName);}if(recursive){for(var _i=0,_a=armature.getBones();_i<_a.length;_i++){var bone=_a[_i];if(this.boneMask.indexOf(bone.name)<0&&currentBone.contains(bone)){this.boneMask.push(bone.name);}}}};AnimationConfig.prototype.removeBoneMask=function(armature,boneName,recursive){if(recursive===void 0){recursive=true;}var index=this.boneMask.indexOf(boneName);if(index>=0){this.boneMask.splice(index,1);}if(recursive){var currentBone=armature.getBone(boneName);if(currentBone!==null){if(this.boneMask.length>0){for(var _i=0,_a=armature.getBones();_i<_a.length;_i++){var bone=_a[_i];var index_1=this.boneMask.indexOf(bone.name);if(index_1>=0&&currentBone.contains(bone)){this.boneMask.splice(index_1,1);}}}else {for(var _b=0,_c=armature.getBones();_b<_c.length;_b++){var bone=_c[_b];if(bone===currentBone){continue;}if(!currentBone.contains(bone)){this.boneMask.push(bone.name);}}}}}};return AnimationConfig;}(dragonBones.BaseObject);dragonBones.AnimationConfig=AnimationConfig;})(dragonBones$1||(dragonBones$1={}));(function(dragonBones){var TextureAtlasData=function(_super){__extends(TextureAtlasData,_super);function TextureAtlasData(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.textures={};return _this;}TextureAtlasData.prototype._onClear=function(){for(var k in this.textures){this.textures[k].returnToPool();delete this.textures[k];}this.autoSearch=false;this.width=0;this.height=0;this.scale=1.0;this.name="";this.imagePath="";};TextureAtlasData.prototype.copyFrom=function(value){this.autoSearch=value.autoSearch;this.scale=value.scale;this.width=value.width;this.height=value.height;this.name=value.name;this.imagePath=value.imagePath;for(var k in this.textures){this.textures[k].returnToPool();delete this.textures[k];}for(var k in value.textures){var texture=this.createTexture();texture.copyFrom(value.textures[k]);this.textures[k]=texture;}};TextureAtlasData.prototype.addTexture=function(value){if(value.name in this.textures){console.warn("Same texture: "+value.name);return;}value.parent=this;this.textures[value.name]=value;};TextureAtlasData.prototype.getTexture=function(textureName){return textureName in this.textures?this.textures[textureName]:null;};return TextureAtlasData;}(dragonBones.BaseObject);dragonBones.TextureAtlasData=TextureAtlasData;var TextureData=function(_super){__extends(TextureData,_super);function TextureData(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.region=new dragonBones.Rectangle();_this.frame=null;return _this;}TextureData.createRectangle=function(){return new dragonBones.Rectangle();};TextureData.prototype._onClear=function(){this.rotated=false;this.name="";this.region.clear();this.parent=null;this.frame=null;};TextureData.prototype.copyFrom=function(value){this.rotated=value.rotated;this.name=value.name;this.region.copyFrom(value.region);this.parent=value.parent;if(this.frame===null&&value.frame!==null){this.frame=TextureData.createRectangle();}else if(this.frame!==null&&value.frame===null){this.frame=null;}if(this.frame!==null&&value.frame!==null){this.frame.copyFrom(value.frame);}};return TextureData;}(dragonBones.BaseObject);dragonBones.TextureData=TextureData;})(dragonBones$1||(dragonBones$1={}));(function(dragonBones){var DeformVertices=function(_super){__extends(DeformVertices,_super);function DeformVertices(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.vertices=[];_this.bones=[];return _this;}DeformVertices.toString=function(){return "[class dragonBones.DeformVertices]";};DeformVertices.prototype._onClear=function(){this.verticesDirty=false;this.vertices.length=0;this.bones.length=0;this.verticesData=null;};DeformVertices.prototype.init=function(verticesDataValue,armature){this.verticesData=verticesDataValue;if(this.verticesData!==null){var vertexCount=0;if(this.verticesData.weight!==null){vertexCount=this.verticesData.weight.count*2;}else {vertexCount=this.verticesData.data.intArray[this.verticesData.offset+0]*2;}this.verticesDirty=true;this.vertices.length=vertexCount;this.bones.length=0;for(var i=0,l=this.vertices.length;i<l;++i){this.vertices[i]=0.0;}if(this.verticesData.weight!==null){for(var i=0,l=this.verticesData.weight.bones.length;i<l;++i){var bone=armature.getBone(this.verticesData.weight.bones[i].name);this.bones.push(bone);}}}else {this.verticesDirty=false;this.vertices.length=0;this.bones.length=0;this.verticesData=null;}};DeformVertices.prototype.isBonesUpdate=function(){for(var _i=0,_a=this.bones;_i<_a.length;_i++){var bone=_a[_i];if(bone!==null&&bone._childrenTransformDirty){return true;}}return false;};return DeformVertices;}(dragonBones.BaseObject);dragonBones.DeformVertices=DeformVertices;})(dragonBones$1||(dragonBones$1={}));(function(dragonBones_1){var Armature=function(_super){__extends(Armature,_super);function Armature(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this._bones=[];_this._slots=[];_this._constraints=[];_this._actions=[];_this._animation=null;_this._proxy=null;_this._replaceTextureAtlasData=null;_this._clock=null;return _this;}Armature.toString=function(){return "[class dragonBones.Armature]";};Armature._onSortSlots=function(a,b){return a._zOrder>b._zOrder?1:-1;};Armature.prototype._onClear=function(){if(this._clock!==null){this._clock.remove(this);}for(var _i=0,_a=this._bones;_i<_a.length;_i++){var bone=_a[_i];bone.returnToPool();}for(var _b=0,_c=this._slots;_b<_c.length;_b++){var slot=_c[_b];slot.returnToPool();}for(var _d=0,_e=this._constraints;_d<_e.length;_d++){var constraint=_e[_d];constraint.returnToPool();}for(var _f=0,_g=this._actions;_f<_g.length;_f++){var action=_g[_f];action.returnToPool();}if(this._animation!==null){this._animation.returnToPool();}if(this._proxy!==null){this._proxy.dbClear();}if(this._replaceTextureAtlasData!==null){this._replaceTextureAtlasData.returnToPool();}this.inheritAnimation=true;this.userData=null;this._lockUpdate=false;this._slotsDirty=true;this._zOrderDirty=false;this._flipX=false;this._flipY=false;this._cacheFrameIndex=-1;this._bones.length=0;this._slots.length=0;this._constraints.length=0;this._actions.length=0;this._armatureData=null;this._animation=null;this._proxy=null;this._display=null;this._replaceTextureAtlasData=null;this._replacedTexture=null;this._dragonBones=null;this._clock=null;this._parent=null;};Armature.prototype._sortZOrder=function(slotIndices,offset){var slotDatas=this._armatureData.sortedSlots;var isOriginal=slotIndices===null;if(this._zOrderDirty||!isOriginal){for(var i=0,l=slotDatas.length;i<l;++i){var slotIndex=isOriginal?i:slotIndices[offset+i];if(slotIndex<0||slotIndex>=l){continue;}var slotData=slotDatas[slotIndex];var slot=this.getSlot(slotData.name);if(slot!==null){slot._setZorder(i);}}this._slotsDirty=true;this._zOrderDirty=!isOriginal;}};Armature.prototype._addBone=function(value){if(this._bones.indexOf(value)<0){this._bones.push(value);}};Armature.prototype._addSlot=function(value){if(this._slots.indexOf(value)<0){this._slots.push(value);}};Armature.prototype._addConstraint=function(value){if(this._constraints.indexOf(value)<0){this._constraints.push(value);}};Armature.prototype._bufferAction=function(action,append){if(this._actions.indexOf(action)<0){if(append){this._actions.push(action);}else {this._actions.unshift(action);}}};Armature.prototype.dispose=function(){if(this._armatureData!==null){this._lockUpdate=true;this._dragonBones.bufferObject(this);}};Armature.prototype.init=function(armatureData,proxy,display,dragonBones){if(this._armatureData!==null){return;}this._armatureData=armatureData;this._animation=dragonBones_1.BaseObject.borrowObject(dragonBones_1.Animation);this._proxy=proxy;this._display=display;this._dragonBones=dragonBones;this._proxy.dbInit(this);this._animation.init(this);this._animation.animations=this._armatureData.animations;};Armature.prototype.advanceTime=function(passedTime){if(this._lockUpdate){return;}if(this._armatureData===null){console.warn("The armature has been disposed.");return;}else if(this._armatureData.parent===null){console.warn("The armature data has been disposed.\nPlease make sure dispose armature before call factory.clear().");return;}var prevCacheFrameIndex=this._cacheFrameIndex;this._animation.advanceTime(passedTime);if(this._slotsDirty){this._slotsDirty=false;this._slots.sort(Armature._onSortSlots);}if(this._cacheFrameIndex<0||this._cacheFrameIndex!==prevCacheFrameIndex){var i=0,l=0;for(i=0,l=this._bones.length;i<l;++i){this._bones[i].update(this._cacheFrameIndex);}for(i=0,l=this._slots.length;i<l;++i){this._slots[i].update(this._cacheFrameIndex);}}if(this._actions.length>0){this._lockUpdate=true;for(var _i=0,_a=this._actions;_i<_a.length;_i++){var action=_a[_i];var actionData=action.actionData;if(actionData!==null){if(actionData.type===0){if(action.slot!==null){var childArmature=action.slot.childArmature;if(childArmature!==null){childArmature.animation.fadeIn(actionData.name);}}else if(action.bone!==null){for(var _b=0,_c=this.getSlots();_b<_c.length;_b++){var slot=_c[_b];if(slot.parent===action.bone){var childArmature=slot.childArmature;if(childArmature!==null){childArmature.animation.fadeIn(actionData.name);}}}}else {this._animation.fadeIn(actionData.name);}}}action.returnToPool();}this._actions.length=0;this._lockUpdate=false;}this._proxy.dbUpdate();};Armature.prototype.invalidUpdate=function(boneName,updateSlot){if(boneName===void 0){boneName=null;}if(updateSlot===void 0){updateSlot=false;}if(boneName!==null&&boneName.length>0){var bone=this.getBone(boneName);if(bone!==null){bone.invalidUpdate();if(updateSlot){for(var _i=0,_a=this._slots;_i<_a.length;_i++){var slot=_a[_i];if(slot.parent===bone){slot.invalidUpdate();}}}}}else {for(var _b=0,_c=this._bones;_b<_c.length;_b++){var bone=_c[_b];bone.invalidUpdate();}if(updateSlot){for(var _d=0,_e=this._slots;_d<_e.length;_d++){var slot=_e[_d];slot.invalidUpdate();}}}};Armature.prototype.containsPoint=function(x,y){for(var _i=0,_a=this._slots;_i<_a.length;_i++){var slot=_a[_i];if(slot.containsPoint(x,y)){return slot;}}return null;};Armature.prototype.intersectsSegment=function(xA,yA,xB,yB,intersectionPointA,intersectionPointB,normalRadians){if(intersectionPointA===void 0){intersectionPointA=null;}if(intersectionPointB===void 0){intersectionPointB=null;}if(normalRadians===void 0){normalRadians=null;}var isV=xA===xB;var dMin=0.0;var dMax=0.0;var intXA=0.0;var intYA=0.0;var intXB=0.0;var intYB=0.0;var intAN=0.0;var intBN=0.0;var intSlotA=null;var intSlotB=null;for(var _i=0,_a=this._slots;_i<_a.length;_i++){var slot=_a[_i];var intersectionCount=slot.intersectsSegment(xA,yA,xB,yB,intersectionPointA,intersectionPointB,normalRadians);if(intersectionCount>0){if(intersectionPointA!==null||intersectionPointB!==null){if(intersectionPointA!==null){var d=isV?intersectionPointA.y-yA:intersectionPointA.x-xA;if(d<0.0){d=-d;}if(intSlotA===null||d<dMin){dMin=d;intXA=intersectionPointA.x;intYA=intersectionPointA.y;intSlotA=slot;if(normalRadians){intAN=normalRadians.x;}}}if(intersectionPointB!==null){var d=intersectionPointB.x-xA;if(d<0.0){d=-d;}if(intSlotB===null||d>dMax){dMax=d;intXB=intersectionPointB.x;intYB=intersectionPointB.y;intSlotB=slot;if(normalRadians!==null){intBN=normalRadians.y;}}}}else {intSlotA=slot;break;}}}if(intSlotA!==null&&intersectionPointA!==null){intersectionPointA.x=intXA;intersectionPointA.y=intYA;if(normalRadians!==null){normalRadians.x=intAN;}}if(intSlotB!==null&&intersectionPointB!==null){intersectionPointB.x=intXB;intersectionPointB.y=intYB;if(normalRadians!==null){normalRadians.y=intBN;}}return intSlotA;};Armature.prototype.getBone=function(name){for(var _i=0,_a=this._bones;_i<_a.length;_i++){var bone=_a[_i];if(bone.name===name){return bone;}}return null;};Armature.prototype.getBoneByDisplay=function(display){var slot=this.getSlotByDisplay(display);return slot!==null?slot.parent:null;};Armature.prototype.getSlot=function(name){for(var _i=0,_a=this._slots;_i<_a.length;_i++){var slot=_a[_i];if(slot.name===name){return slot;}}return null;};Armature.prototype.getSlotByDisplay=function(display){if(display!==null){for(var _i=0,_a=this._slots;_i<_a.length;_i++){var slot=_a[_i];if(slot.display===display){return slot;}}}return null;};Armature.prototype.getBones=function(){return this._bones;};Armature.prototype.getSlots=function(){return this._slots;};Object.defineProperty(Armature.prototype,"flipX",{get:function(){return this._flipX;},set:function(value){if(this._flipX===value){return;}this._flipX=value;this.invalidUpdate();},enumerable:true,configurable:true});Object.defineProperty(Armature.prototype,"flipY",{get:function(){return this._flipY;},set:function(value){if(this._flipY===value){return;}this._flipY=value;this.invalidUpdate();},enumerable:true,configurable:true});Object.defineProperty(Armature.prototype,"cacheFrameRate",{get:function(){return this._armatureData.cacheFrameRate;},set:function(value){if(this._armatureData.cacheFrameRate!==value){this._armatureData.cacheFrames(value);for(var _i=0,_a=this._slots;_i<_a.length;_i++){var slot=_a[_i];var childArmature=slot.childArmature;if(childArmature!==null){childArmature.cacheFrameRate=value;}}}},enumerable:true,configurable:true});Object.defineProperty(Armature.prototype,"name",{get:function(){return this._armatureData.name;},enumerable:true,configurable:true});Object.defineProperty(Armature.prototype,"armatureData",{get:function(){return this._armatureData;},enumerable:true,configurable:true});Object.defineProperty(Armature.prototype,"animation",{get:function(){return this._animation;},enumerable:true,configurable:true});Object.defineProperty(Armature.prototype,"proxy",{get:function(){return this._proxy;},enumerable:true,configurable:true});Object.defineProperty(Armature.prototype,"eventDispatcher",{get:function(){return this._proxy;},enumerable:true,configurable:true});Object.defineProperty(Armature.prototype,"display",{get:function(){return this._display;},enumerable:true,configurable:true});Object.defineProperty(Armature.prototype,"replacedTexture",{get:function(){return this._replacedTexture;},set:function(value){if(this._replacedTexture===value){return;}if(this._replaceTextureAtlasData!==null){this._replaceTextureAtlasData.returnToPool();this._replaceTextureAtlasData=null;}this._replacedTexture=value;for(var _i=0,_a=this._slots;_i<_a.length;_i++){var slot=_a[_i];slot.invalidUpdate();slot.update(-1);}},enumerable:true,configurable:true});Object.defineProperty(Armature.prototype,"clock",{get:function(){return this._clock;},set:function(value){if(this._clock===value){return;}if(this._clock!==null){this._clock.remove(this);}this._clock=value;if(this._clock){this._clock.add(this);}for(var _i=0,_a=this._slots;_i<_a.length;_i++){var slot=_a[_i];var childArmature=slot.childArmature;if(childArmature!==null){childArmature.clock=this._clock;}}},enumerable:true,configurable:true});Object.defineProperty(Armature.prototype,"parent",{get:function(){return this._parent;},enumerable:true,configurable:true});Armature.prototype.replaceTexture=function(texture){this.replacedTexture=texture;};Armature.prototype.hasEventListener=function(type){return this._proxy.hasDBEventListener(type);};Armature.prototype.addEventListener=function(type,listener,target){this._proxy.addDBEventListener(type,listener,target);};Armature.prototype.removeEventListener=function(type,listener,target){this._proxy.removeDBEventListener(type,listener,target);};Armature.prototype.enableAnimationCache=function(frameRate){console.warn("Deprecated.");this.cacheFrameRate=frameRate;};Armature.prototype.getDisplay=function(){return this._display;};return Armature;}(dragonBones_1.BaseObject);dragonBones_1.Armature=Armature;})(dragonBones$1||(dragonBones$1={}));(function(dragonBones){var TransformObject=function(_super){__extends(TransformObject,_super);function TransformObject(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.globalTransformMatrix=new dragonBones.Matrix();_this.global=new dragonBones.Transform();_this.offset=new dragonBones.Transform();return _this;}TransformObject.prototype._onClear=function(){this.globalTransformMatrix.identity();this.global.identity();this.offset.identity();this.origin=null;this.userData=null;this._globalDirty=false;this._armature=null;};TransformObject.prototype.updateGlobalTransform=function(){if(this._globalDirty){this._globalDirty=false;this.global.fromMatrix(this.globalTransformMatrix);}};Object.defineProperty(TransformObject.prototype,"armature",{get:function(){return this._armature;},enumerable:true,configurable:true});TransformObject._helpMatrix=new dragonBones.Matrix();TransformObject._helpTransform=new dragonBones.Transform();TransformObject._helpPoint=new dragonBones.Point();return TransformObject;}(dragonBones.BaseObject);dragonBones.TransformObject=TransformObject;})(dragonBones$1||(dragonBones$1={}));(function(dragonBones){var Bone=function(_super){__extends(Bone,_super);function Bone(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.animationPose=new dragonBones.Transform();_this._blendState=new dragonBones.BlendState();return _this;}Bone.toString=function(){return "[class dragonBones.Bone]";};Bone.prototype._onClear=function(){_super.prototype._onClear.call(this);this.offsetMode=1;this.animationPose.identity();this._transformDirty=false;this._childrenTransformDirty=false;this._localDirty=true;this._hasConstraint=false;this._visible=true;this._cachedFrameIndex=-1;this._blendState.clear();this._boneData=null;this._parent=null;this._cachedFrameIndices=null;};Bone.prototype._updateGlobalTransformMatrix=function(isCache){var boneData=this._boneData;var global=this.global;var globalTransformMatrix=this.globalTransformMatrix;var origin=this.origin;var offset=this.offset;var animationPose=this.animationPose;var parent=this._parent;var flipX=this._armature.flipX;var flipY=this._armature.flipY===dragonBones.DragonBones.yDown;var inherit=parent!==null;var rotation=0.0;if(this.offsetMode===1){if(origin!==null){global.x=origin.x+offset.x+animationPose.x;global.scaleX=origin.scaleX*offset.scaleX*animationPose.scaleX;global.scaleY=origin.scaleY*offset.scaleY*animationPose.scaleY;if(dragonBones.DragonBones.yDown){global.y=origin.y+offset.y+animationPose.y;global.skew=origin.skew+offset.skew+animationPose.skew;global.rotation=origin.rotation+offset.rotation+animationPose.rotation;}else {global.y=origin.y-offset.y+animationPose.y;global.skew=origin.skew-offset.skew+animationPose.skew;global.rotation=origin.rotation-offset.rotation+animationPose.rotation;}}else {global.copyFrom(offset);if(!dragonBones.DragonBones.yDown){global.y=-global.y;global.skew=-global.skew;global.rotation=-global.rotation;}global.add(animationPose);}}else if(this.offsetMode===0){if(origin!==null){global.copyFrom(origin).add(animationPose);}else {global.copyFrom(animationPose);}}else {inherit=false;global.copyFrom(offset);if(!dragonBones.DragonBones.yDown){global.y=-global.y;global.skew=-global.skew;global.rotation=-global.rotation;}}if(inherit){var parentMatrix=parent._boneData.type===0?parent.globalTransformMatrix:parent._getGlobalTransformMatrix(global.x,global.y);if(boneData.inheritScale){if(!boneData.inheritRotation){parent.updateGlobalTransform();if(flipX&&flipY){rotation=global.rotation-(parent.global.rotation+Math.PI);}else if(flipX){rotation=global.rotation+parent.global.rotation+Math.PI;}else if(flipY){rotation=global.rotation+parent.global.rotation;}else {rotation=global.rotation-parent.global.rotation;}global.rotation=rotation;}global.toMatrix(globalTransformMatrix);globalTransformMatrix.concat(parentMatrix);if(boneData.inheritTranslation){global.x=globalTransformMatrix.tx;global.y=globalTransformMatrix.ty;}else {globalTransformMatrix.tx=global.x;globalTransformMatrix.ty=global.y;}if(isCache){global.fromMatrix(globalTransformMatrix);}else {this._globalDirty=true;}}else {if(boneData.inheritTranslation){var x=global.x;var y=global.y;global.x=parentMatrix.a*x+parentMatrix.c*y+parentMatrix.tx;global.y=parentMatrix.b*x+parentMatrix.d*y+parentMatrix.ty;}else {if(flipX){global.x=-global.x;}if(flipY){global.y=-global.y;}}if(boneData.inheritRotation){parent.updateGlobalTransform();if(parent.global.scaleX<0.0){rotation=global.rotation+parent.global.rotation+Math.PI;}else {rotation=global.rotation+parent.global.rotation;}if(parentMatrix.a*parentMatrix.d-parentMatrix.b*parentMatrix.c<0.0){rotation-=global.rotation*2.0;if(flipX!==flipY||boneData.inheritReflection){global.skew+=Math.PI;}if(!dragonBones.DragonBones.yDown){global.skew=-global.skew;}}global.rotation=rotation;}else if(flipX||flipY){if(flipX&&flipY){rotation=global.rotation+Math.PI;}else {if(flipX){rotation=Math.PI-global.rotation;}else {rotation=-global.rotation;}global.skew+=Math.PI;}global.rotation=rotation;}global.toMatrix(globalTransformMatrix);}}else {if(flipX||flipY){if(flipX){global.x=-global.x;}if(flipY){global.y=-global.y;}if(flipX&&flipY){rotation=global.rotation+Math.PI;}else {if(flipX){rotation=Math.PI-global.rotation;}else {rotation=-global.rotation;}global.skew+=Math.PI;}global.rotation=rotation;}global.toMatrix(globalTransformMatrix);}};Bone.prototype.init=function(boneData,armatureValue){if(this._boneData!==null){return;}this._boneData=boneData;this._armature=armatureValue;if(this._boneData.parent!==null){this._parent=this._armature.getBone(this._boneData.parent.name);}this._armature._addBone(this);this.origin=this._boneData.transform;};Bone.prototype.update=function(cacheFrameIndex){this._blendState.dirty=false;if(cacheFrameIndex>=0&&this._cachedFrameIndices!==null){var cachedFrameIndex=this._cachedFrameIndices[cacheFrameIndex];if(cachedFrameIndex>=0&&this._cachedFrameIndex===cachedFrameIndex){this._transformDirty=false;}else if(cachedFrameIndex>=0){this._transformDirty=true;this._cachedFrameIndex=cachedFrameIndex;}else {if(this._hasConstraint){for(var _i=0,_a=this._armature._constraints;_i<_a.length;_i++){var constraint=_a[_i];if(constraint._root===this){constraint.update();}}}if(this._transformDirty||this._parent!==null&&this._parent._childrenTransformDirty){this._transformDirty=true;this._cachedFrameIndex=-1;}else if(this._cachedFrameIndex>=0){this._transformDirty=false;this._cachedFrameIndices[cacheFrameIndex]=this._cachedFrameIndex;}else {this._transformDirty=true;this._cachedFrameIndex=-1;}}}else {if(this._hasConstraint){for(var _b=0,_c=this._armature._constraints;_b<_c.length;_b++){var constraint=_c[_b];if(constraint._root===this){constraint.update();}}}if(this._transformDirty||this._parent!==null&&this._parent._childrenTransformDirty){cacheFrameIndex=-1;this._transformDirty=true;this._cachedFrameIndex=-1;}}if(this._transformDirty){this._transformDirty=false;this._childrenTransformDirty=true;if(this._cachedFrameIndex<0){var isCache=cacheFrameIndex>=0;if(this._localDirty){this._updateGlobalTransformMatrix(isCache);}if(isCache&&this._cachedFrameIndices!==null){this._cachedFrameIndex=this._cachedFrameIndices[cacheFrameIndex]=this._armature._armatureData.setCacheFrame(this.globalTransformMatrix,this.global);}}else {this._armature._armatureData.getCacheFrame(this.globalTransformMatrix,this.global,this._cachedFrameIndex);}}else if(this._childrenTransformDirty){this._childrenTransformDirty=false;}this._localDirty=true;};Bone.prototype.updateByConstraint=function(){if(this._localDirty){this._localDirty=false;if(this._transformDirty||this._parent!==null&&this._parent._childrenTransformDirty){this._updateGlobalTransformMatrix(true);}this._transformDirty=true;}};Bone.prototype.invalidUpdate=function(){this._transformDirty=true;};Bone.prototype.contains=function(value){if(value===this){return false;}var ancestor=value;while(ancestor!==this&&ancestor!==null){ancestor=ancestor.parent;}return ancestor===this;};Object.defineProperty(Bone.prototype,"boneData",{get:function(){return this._boneData;},enumerable:true,configurable:true});Object.defineProperty(Bone.prototype,"visible",{get:function(){return this._visible;},set:function(value){if(this._visible===value){return;}this._visible=value;for(var _i=0,_a=this._armature.getSlots();_i<_a.length;_i++){var slot=_a[_i];if(slot.parent===this){slot._updateVisible();}}},enumerable:true,configurable:true});Object.defineProperty(Bone.prototype,"name",{get:function(){return this._boneData.name;},enumerable:true,configurable:true});Object.defineProperty(Bone.prototype,"parent",{get:function(){return this._parent;},enumerable:true,configurable:true});Bone.prototype.getBones=function(){console.warn("Deprecated.");var bones=new Array();for(var _i=0,_a=this._armature.getBones();_i<_a.length;_i++){var bone=_a[_i];if(bone.parent===this){bones.push(bone);}}return bones;};Bone.prototype.getSlots=function(){console.warn("Deprecated.");var slots=new Array();for(var _i=0,_a=this._armature.getSlots();_i<_a.length;_i++){var slot=_a[_i];if(slot.parent===this){slots.push(slot);}}return slots;};Object.defineProperty(Bone.prototype,"slot",{get:function(){console.warn("Deprecated.");for(var _i=0,_a=this._armature.getSlots();_i<_a.length;_i++){var slot=_a[_i];if(slot.parent===this){return slot;}}return null;},enumerable:true,configurable:true});return Bone;}(dragonBones.TransformObject);dragonBones.Bone=Bone;})(dragonBones$1||(dragonBones$1={}));(function(dragonBones){var Surface=function(_super){__extends(Surface,_super);function Surface(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this._vertices=[];_this._deformVertices=[];_this._hullCache=[];_this._matrixCahce=[];return _this;}Surface.toString=function(){return "[class dragonBones.Surface]";};Surface.prototype._onClear=function(){_super.prototype._onClear.call(this);this._dX=0.0;this._dY=0.0;this._k=0.0;this._kX=0.0;this._kY=0.0;this._vertices.length=0;this._deformVertices.length=0;this._matrixCahce.length=0;this._hullCache.length=0;};Surface.prototype._getAffineTransform=function(x,y,lX,lY,aX,aY,bX,bY,cX,cY,transform,matrix,isDown){var dabX=bX-aX;var dabY=bY-aY;var dacX=cX-aX;var dacY=cY-aY;transform.rotation=Math.atan2(dabY,dabX);transform.skew=Math.atan2(dacY,dacX)-Math.PI*0.5-transform.rotation;if(isDown){transform.rotation+=Math.PI;}transform.scaleX=Math.sqrt(dabX*dabX+dabY*dabY)/lX;transform.scaleY=Math.sqrt(dacX*dacX+dacY*dacY)/lY;transform.toMatrix(matrix);transform.x=matrix.tx=aX-(matrix.a*x+matrix.c*y);transform.y=matrix.ty=aY-(matrix.b*x+matrix.d*y);};Surface.prototype._updateVertices=function(){var originalVertices=this._boneData.vertices;var vertices=this._vertices;var animationVertices=this._deformVertices;if(this._parent!==null){if(this._parent._boneData.type===1){for(var i=0,l=originalVertices.length;i<l;i+=2){var x=originalVertices[i]+animationVertices[i];var y=originalVertices[i+1]+animationVertices[i];var matrix=this._parent._getGlobalTransformMatrix(x,y);vertices[i]=matrix.a*x+matrix.c*y+matrix.tx;vertices[i+1]=matrix.b*x+matrix.d*y+matrix.ty;}}else {var parentMatrix=this._parent.globalTransformMatrix;for(var i=0,l=originalVertices.length;i<l;i+=2){var x=originalVertices[i]+animationVertices[i];var y=originalVertices[i+1]+animationVertices[i+1];vertices[i]=parentMatrix.a*x+parentMatrix.c*y+parentMatrix.tx;vertices[i+1]=parentMatrix.b*x+parentMatrix.d*y+parentMatrix.ty;}}}else {for(var i=0,l=originalVertices.length;i<l;i+=2){vertices[i]=originalVertices[i]+animationVertices[i];vertices[i+1]=originalVertices[i+1]+animationVertices[i+1];}}};Surface.prototype._updateGlobalTransformMatrix=function(isCache){var segmentXD=this._boneData.segmentX*2;var lastIndex=this._vertices.length-2;var lA=200.0;var raX=this._vertices[0];var raY=this._vertices[1];var rbX=this._vertices[segmentXD];var rbY=this._vertices[segmentXD+1];var rcX=this._vertices[lastIndex];var rcY=this._vertices[lastIndex+1];var rdX=this._vertices[lastIndex-segmentXD];var rdY=this._vertices[lastIndex-segmentXD+1];var dacX=raX+(rcX-raX)*0.5;var dacY=raY+(rcY-raY)*0.5;var dbdX=rbX+(rdX-rbX)*0.5;var dbdY=rbY+(rdY-rbY)*0.5;var aX=dacX+(dbdX-dacX)*0.5;var aY=dacY+(dbdY-dacY)*0.5;var bX=rbX+(rcX-rbX)*0.5;var bY=rbY+(rcY-rbY)*0.5;var cX=rdX+(rcX-rdX)*0.5;var cY=rdY+(rcY-rdY)*0.5;this._globalDirty=false;this._getAffineTransform(0.0,0.0,lA,lA,aX,aY,bX,bY,cX,cY,this.global,this.globalTransformMatrix,false);};Surface.prototype._getGlobalTransformMatrix=function(x,y){var lB=1000.0;if(x<-lB||lB<x||y<-lB||lB<y){return this.globalTransformMatrix;}var isDown=false;var lA=200.0;var surfaceData=this._boneData;var segmentX=surfaceData.segmentX;var segmentY=surfaceData.segmentY;var segmentXD=surfaceData.segmentX*2;var dX=this._dX;var dY=this._dY;var indexX=Math.floor((x+lA)/dX);var indexY=Math.floor((y+lA)/dY);var matrixIndex=0;var pX=indexX*dX-lA;var pY=indexY*dY-lA;var matrices=this._matrixCahce;var helpMatrix=Surface._helpMatrix;if(x<-lA){if(y<-lA||y>=lA){return this.globalTransformMatrix;}isDown=y>this._kX*(x+lA)+pY;matrixIndex=((segmentX*(segmentY+1)+segmentX*2+segmentY+indexY)*2+(isDown?1:0))*7;if(this._matrixCahce[matrixIndex]>0.0){helpMatrix.copyFromArray(matrices,matrixIndex+1);}else {var vertexIndex=indexY*(segmentXD+2);var ddX=this._hullCache[4];var ddY=this._hullCache[5];var sX=this._hullCache[2]-(segmentY-indexY)*ddX;var sY=this._hullCache[3]-(segmentY-indexY)*ddY;var vertices=this._vertices;if(isDown){this._getAffineTransform(-lA,pY+dY,lB-lA,dY,vertices[vertexIndex+segmentXD+2],vertices[vertexIndex+segmentXD+3],sX+ddX,sY+ddY,vertices[vertexIndex],vertices[vertexIndex+1],Surface._helpTransform,helpMatrix,true);}else {this._getAffineTransform(-lB,pY,lB-lA,dY,sX,sY,vertices[vertexIndex],vertices[vertexIndex+1],sX+ddX,sY+ddY,Surface._helpTransform,helpMatrix,false);}matrices[matrixIndex]=1.0;matrices[matrixIndex+1]=helpMatrix.a;matrices[matrixIndex+2]=helpMatrix.b;matrices[matrixIndex+3]=helpMatrix.c;matrices[matrixIndex+4]=helpMatrix.d;matrices[matrixIndex+5]=helpMatrix.tx;matrices[matrixIndex+6]=helpMatrix.ty;}}else if(x>=lA){if(y<-lA||y>=lA){return this.globalTransformMatrix;}isDown=y>this._kX*(x-lB)+pY;matrixIndex=((segmentX*(segmentY+1)+segmentX+indexY)*2+(isDown?1:0))*7;if(this._matrixCahce[matrixIndex]>0.0){helpMatrix.copyFromArray(matrices,matrixIndex+1);}else {var vertexIndex=(indexY+1)*(segmentXD+2)-2;var ddX=this._hullCache[4];var ddY=this._hullCache[5];var sX=this._hullCache[0]+indexY*ddX;var sY=this._hullCache[1]+indexY*ddY;var vertices=this._vertices;if(isDown){this._getAffineTransform(lB,pY+dY,lB-lA,dY,sX+ddX,sY+ddY,vertices[vertexIndex+segmentXD+2],vertices[vertexIndex+segmentXD+3],sX,sY,Surface._helpTransform,helpMatrix,true);}else {this._getAffineTransform(lA,pY,lB-lA,dY,vertices[vertexIndex],vertices[vertexIndex+1],sX,sY,vertices[vertexIndex+segmentXD+2],vertices[vertexIndex+segmentXD+3],Surface._helpTransform,helpMatrix,false);}matrices[matrixIndex]=1.0;matrices[matrixIndex+1]=helpMatrix.a;matrices[matrixIndex+2]=helpMatrix.b;matrices[matrixIndex+3]=helpMatrix.c;matrices[matrixIndex+4]=helpMatrix.d;matrices[matrixIndex+5]=helpMatrix.tx;matrices[matrixIndex+6]=helpMatrix.ty;}}else if(y<-lA){if(x<-lA||x>=lA){return this.globalTransformMatrix;}isDown=y>this._kY*(x-pX-dX)-lB;matrixIndex=(segmentX*(segmentY+1)+indexX*2+(isDown?1:0))*7;if(this._matrixCahce[matrixIndex]>0.0){helpMatrix.copyFromArray(matrices,matrixIndex+1);}else {var vertexIndex=indexX*2;var ddX=this._hullCache[10];var ddY=this._hullCache[11];var sX=this._hullCache[8]+indexX*ddX;var sY=this._hullCache[9]+indexX*ddY;var vertices=this._vertices;if(isDown){this._getAffineTransform(pX+dX,-lA,dX,lB-lA,vertices[vertexIndex+2],vertices[vertexIndex+3],vertices[vertexIndex],vertices[vertexIndex+1],sX+ddX,sY+ddY,Surface._helpTransform,helpMatrix,true);}else {this._getAffineTransform(pX,-lB,dX,lB-lA,sX,sY,sX+ddX,sY+ddY,vertices[vertexIndex],vertices[vertexIndex+1],Surface._helpTransform,helpMatrix,false);}matrices[matrixIndex]=1.0;matrices[matrixIndex+1]=helpMatrix.a;matrices[matrixIndex+2]=helpMatrix.b;matrices[matrixIndex+3]=helpMatrix.c;matrices[matrixIndex+4]=helpMatrix.d;matrices[matrixIndex+5]=helpMatrix.tx;matrices[matrixIndex+6]=helpMatrix.ty;}}else if(y>=lA){if(x<-lA||x>=lA){return this.globalTransformMatrix;}isDown=y>this._kY*(x-pX-dX)+lA;matrixIndex=((segmentX*(segmentY+1)+segmentX+segmentY+indexY)*2+(isDown?1:0))*7;if(this._matrixCahce[matrixIndex]>0.0){helpMatrix.copyFromArray(matrices,matrixIndex+1);}else {var vertexIndex=segmentY*(segmentXD+2)+indexX*2;var ddX=this._hullCache[10];var ddY=this._hullCache[11];var sX=this._hullCache[6]-(segmentX-indexX)*ddX;var sY=this._hullCache[7]-(segmentX-indexX)*ddY;var vertices=this._vertices;if(isDown){this._getAffineTransform(pX+dX,lB,dX,lB-lA,sX+ddX,sY+ddY,sX,sY,vertices[vertexIndex+2],vertices[vertexIndex+3],Surface._helpTransform,helpMatrix,true);}else {this._getAffineTransform(pX,lA,dX,lB-lA,vertices[vertexIndex],vertices[vertexIndex+1],vertices[vertexIndex+2],vertices[vertexIndex+3],sX,sY,Surface._helpTransform,helpMatrix,false);}matrices[matrixIndex]=1.0;matrices[matrixIndex+1]=helpMatrix.a;matrices[matrixIndex+2]=helpMatrix.b;matrices[matrixIndex+3]=helpMatrix.c;matrices[matrixIndex+4]=helpMatrix.d;matrices[matrixIndex+5]=helpMatrix.tx;matrices[matrixIndex+6]=helpMatrix.ty;}}else {isDown=y>this._k*(x-pX-dX)+pY;matrixIndex=((segmentX*indexY+indexX)*2+(isDown?1:0))*7;if(this._matrixCahce[matrixIndex]>0.0){helpMatrix.copyFromArray(matrices,matrixIndex+1);}else {var vertexIndex=indexX*2+indexY*(segmentXD+2);var vertices=this._vertices;if(isDown){this._getAffineTransform(pX+dX,pY+dY,dX,dY,vertices[vertexIndex+segmentXD+4],vertices[vertexIndex+segmentXD+5],vertices[vertexIndex+segmentXD+2],vertices[vertexIndex+segmentXD+3],vertices[vertexIndex+2],vertices[vertexIndex+3],Surface._helpTransform,helpMatrix,true);}else {this._getAffineTransform(pX,pY,dX,dY,vertices[vertexIndex],vertices[vertexIndex+1],vertices[vertexIndex+2],vertices[vertexIndex+3],vertices[vertexIndex+segmentXD+2],vertices[vertexIndex+segmentXD+3],Surface._helpTransform,helpMatrix,false);}matrices[matrixIndex]=1.0;matrices[matrixIndex+1]=helpMatrix.a;matrices[matrixIndex+2]=helpMatrix.b;matrices[matrixIndex+3]=helpMatrix.c;matrices[matrixIndex+4]=helpMatrix.d;matrices[matrixIndex+5]=helpMatrix.tx;matrices[matrixIndex+6]=helpMatrix.ty;}}return helpMatrix;};Surface.prototype.init=function(surfaceData,armatureValue){if(this._boneData!==null){return;}_super.prototype.init.call(this,surfaceData,armatureValue);var segmentX=surfaceData.segmentX;var segmentY=surfaceData.segmentY;var vertexCount=surfaceData.vertices.length;var lB=1000.0;var lA=200.0;this._dX=lA*2.0/segmentX;this._dY=lA*2.0/segmentY;this._k=-this._dY/this._dX;this._kX=-this._dY/(lB-lA);this._kY=-(lB-lA)/this._dX;this._vertices.length=vertexCount;this._deformVertices.length=vertexCount;this._matrixCahce.length=(segmentX*segmentY+segmentX*2+segmentY*2)*2*7;this._hullCache.length=10;for(var i=0;i<vertexCount;++i){this._deformVertices[i]=0.0;}};Surface.prototype.update=function(cacheFrameIndex){this._blendState.dirty=false;if(cacheFrameIndex>=0&&this._cachedFrameIndices!==null){var cachedFrameIndex=this._cachedFrameIndices[cacheFrameIndex];if(cachedFrameIndex>=0&&this._cachedFrameIndex===cachedFrameIndex){this._transformDirty=false;}else if(cachedFrameIndex>=0){this._transformDirty=true;this._cachedFrameIndex=cachedFrameIndex;}else {if(this._hasConstraint){for(var _i=0,_a=this._armature._constraints;_i<_a.length;_i++){var constraint=_a[_i];if(constraint._root===this){constraint.update();}}}if(this._transformDirty||this._parent!==null&&this._parent._childrenTransformDirty){this._transformDirty=true;this._cachedFrameIndex=-1;}else if(this._cachedFrameIndex>=0){this._transformDirty=false;this._cachedFrameIndices[cacheFrameIndex]=this._cachedFrameIndex;}else {this._transformDirty=true;this._cachedFrameIndex=-1;}}}else {if(this._hasConstraint){for(var _b=0,_c=this._armature._constraints;_b<_c.length;_b++){var constraint=_c[_b];if(constraint._root===this){constraint.update();}}}if(this._transformDirty||this._parent!==null&&this._parent._childrenTransformDirty){cacheFrameIndex=-1;this._transformDirty=true;this._cachedFrameIndex=-1;}}if(this._transformDirty){this._transformDirty=false;this._childrenTransformDirty=true;for(var i=0,l=this._matrixCahce.length;i<l;i+=7){this._matrixCahce[i]=-1.0;}this._updateVertices();if(this._cachedFrameIndex<0){var isCache=cacheFrameIndex>=0;if(this._localDirty){this._updateGlobalTransformMatrix(isCache);}if(isCache&&this._cachedFrameIndices!==null){this._cachedFrameIndex=this._cachedFrameIndices[cacheFrameIndex]=this._armature._armatureData.setCacheFrame(this.globalTransformMatrix,this.global);}}else {this._armature._armatureData.getCacheFrame(this.globalTransformMatrix,this.global,this._cachedFrameIndex);}var lB=1000.0;var lA=200.0;var ddX=2*this.global.x;var ddY=2*this.global.y;var helpPoint=Surface._helpPoint;this.globalTransformMatrix.transformPoint(lB,-lA,helpPoint);this._hullCache[0]=helpPoint.x;this._hullCache[1]=helpPoint.y;this._hullCache[2]=ddX-helpPoint.x;this._hullCache[3]=ddY-helpPoint.y;this.globalTransformMatrix.transformPoint(0.0,this._dY,helpPoint,true);this._hullCache[4]=helpPoint.x;this._hullCache[5]=helpPoint.y;this.globalTransformMatrix.transformPoint(lA,lB,helpPoint);this._hullCache[6]=helpPoint.x;this._hullCache[7]=helpPoint.y;this._hullCache[8]=ddX-helpPoint.x;this._hullCache[9]=ddY-helpPoint.y;this.globalTransformMatrix.transformPoint(this._dX,0.0,helpPoint,true);this._hullCache[10]=helpPoint.x;this._hullCache[11]=helpPoint.y;}else if(this._childrenTransformDirty){this._childrenTransformDirty=false;}this._localDirty=true;};return Surface;}(dragonBones.Bone);dragonBones.Surface=Surface;})(dragonBones$1||(dragonBones$1={}));(function(dragonBones){var Slot=function(_super){__extends(Slot,_super);function Slot(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this._localMatrix=new dragonBones.Matrix();_this._colorTransform=new dragonBones.ColorTransform();_this._displayDatas=[];_this._displayList=[];_this._deformVertices=null;_this._rawDisplay=null;_this._meshDisplay=null;return _this;}Slot.prototype._onClear=function(){_super.prototype._onClear.call(this);var disposeDisplayList=[];for(var _i=0,_a=this._displayList;_i<_a.length;_i++){var eachDisplay=_a[_i];if(eachDisplay!==null&&eachDisplay!==this._rawDisplay&&eachDisplay!==this._meshDisplay&&disposeDisplayList.indexOf(eachDisplay)<0){disposeDisplayList.push(eachDisplay);}}for(var _b=0,disposeDisplayList_1=disposeDisplayList;_b<disposeDisplayList_1.length;_b++){var eachDisplay=disposeDisplayList_1[_b];if(eachDisplay instanceof dragonBones.Armature){eachDisplay.dispose();}else {this._disposeDisplay(eachDisplay,true);}}if(this._deformVertices!==null){this._deformVertices.returnToPool();}if(this._meshDisplay!==null&&this._meshDisplay!==this._rawDisplay){this._disposeDisplay(this._meshDisplay,false);}if(this._rawDisplay!==null){this._disposeDisplay(this._rawDisplay,false);}this.displayController=null;this._displayDirty=false;this._zOrderDirty=false;this._blendModeDirty=false;this._colorDirty=false;this._transformDirty=false;this._visible=true;this._blendMode=0;this._displayIndex=-1;this._animationDisplayIndex=-1;this._zOrder=0;this._cachedFrameIndex=-1;this._pivotX=0.0;this._pivotY=0.0;this._localMatrix.identity();this._colorTransform.identity();this._displayList.length=0;this._displayDatas.length=0;this._slotData=null;this._rawDisplayDatas=null;this._displayData=null;this._boundingBoxData=null;this._textureData=null;this._deformVertices=null;this._rawDisplay=null;this._meshDisplay=null;this._display=null;this._childArmature=null;this._parent=null;this._cachedFrameIndices=null;};Slot.prototype._getDefaultRawDisplayData=function(displayIndex){var defaultSkin=this._armature._armatureData.defaultSkin;if(defaultSkin!==null){var defaultRawDisplayDatas=defaultSkin.getDisplays(this._slotData.name);if(defaultRawDisplayDatas!==null){return displayIndex<defaultRawDisplayDatas.length?defaultRawDisplayDatas[displayIndex]:null;}}return null;};Slot.prototype._updateDisplayData=function(){var prevDisplayData=this._displayData;var prevVerticesData=this._deformVertices!==null?this._deformVertices.verticesData:null;var prevTextureData=this._textureData;var rawDisplayData=null;var currentVerticesData=null;this._displayData=null;this._boundingBoxData=null;this._textureData=null;if(this._displayIndex>=0){if(this._rawDisplayDatas!==null){rawDisplayData=this._displayIndex<this._rawDisplayDatas.length?this._rawDisplayDatas[this._displayIndex]:null;}if(rawDisplayData===null){rawDisplayData=this._getDefaultRawDisplayData(this._displayIndex);}if(this._displayIndex<this._displayDatas.length){this._displayData=this._displayDatas[this._displayIndex];}}if(this._displayData!==null){if(this._displayData.type===2){currentVerticesData=this._displayData.vertices;}else if(this._displayData.type===4){currentVerticesData=this._displayData.vertices;}else if(rawDisplayData!==null){if(rawDisplayData.type===2){currentVerticesData=rawDisplayData.vertices;}else if(rawDisplayData.type===4){currentVerticesData=rawDisplayData.vertices;}}if(this._displayData.type===3){this._boundingBoxData=this._displayData.boundingBox;}else if(rawDisplayData!==null){if(rawDisplayData.type===3){this._boundingBoxData=rawDisplayData.boundingBox;}}if(this._displayData.type===0){this._textureData=this._displayData.texture;}else if(this._displayData.type===2){this._textureData=this._displayData.texture;}}if(this._displayData!==prevDisplayData||currentVerticesData!==prevVerticesData||this._textureData!==prevTextureData){if(currentVerticesData===null&&this._textureData!==null){var imageDisplayData=this._displayData;var scale=this._textureData.parent.scale*this._armature._armatureData.scale;var frame=this._textureData.frame;this._pivotX=imageDisplayData.pivot.x;this._pivotY=imageDisplayData.pivot.y;var rect=frame!==null?frame:this._textureData.region;var width=rect.width;var height=rect.height;if(this._textureData.rotated&&frame===null){width=rect.height;height=rect.width;}this._pivotX*=width*scale;this._pivotY*=height*scale;if(frame!==null){this._pivotX+=frame.x*scale;this._pivotY+=frame.y*scale;}if(this._displayData!==null&&rawDisplayData!==null&&this._displayData!==rawDisplayData){rawDisplayData.transform.toMatrix(Slot._helpMatrix);Slot._helpMatrix.invert();Slot._helpMatrix.transformPoint(0.0,0.0,Slot._helpPoint);this._pivotX-=Slot._helpPoint.x;this._pivotY-=Slot._helpPoint.y;this._displayData.transform.toMatrix(Slot._helpMatrix);Slot._helpMatrix.invert();Slot._helpMatrix.transformPoint(0.0,0.0,Slot._helpPoint);this._pivotX+=Slot._helpPoint.x;this._pivotY+=Slot._helpPoint.y;}if(!dragonBones.DragonBones.yDown){this._pivotY=(this._textureData.rotated?this._textureData.region.width:this._textureData.region.height)*scale-this._pivotY;}}else {this._pivotX=0.0;this._pivotY=0.0;}if(rawDisplayData!==null){this.origin=rawDisplayData.transform;}else if(this._displayData!==null){this.origin=this._displayData.transform;}else {this.origin=null;}if(currentVerticesData!==prevVerticesData){if(this._deformVertices===null){this._deformVertices=dragonBones.BaseObject.borrowObject(dragonBones.DeformVertices);}this._deformVertices.init(currentVerticesData,this._armature);}else if(this._deformVertices!==null&&this._textureData!==prevTextureData){this._deformVertices.verticesDirty=true;}this._displayDirty=true;this._transformDirty=true;}};Slot.prototype._updateDisplay=function(){var prevDisplay=this._display!==null?this._display:this._rawDisplay;var prevChildArmature=this._childArmature;if(this._displayIndex>=0&&this._displayIndex<this._displayList.length){this._display=this._displayList[this._displayIndex];if(this._display!==null&&this._display instanceof dragonBones.Armature){this._childArmature=this._display;this._display=this._childArmature.display;}else {this._childArmature=null;}}else {this._display=null;this._childArmature=null;}var currentDisplay=this._display!==null?this._display:this._rawDisplay;if(currentDisplay!==prevDisplay){this._onUpdateDisplay();this._replaceDisplay(prevDisplay);this._transformDirty=true;this._visibleDirty=true;this._blendModeDirty=true;this._colorDirty=true;}if(currentDisplay===this._rawDisplay||currentDisplay===this._meshDisplay){this._updateFrame();}if(this._childArmature!==prevChildArmature){if(prevChildArmature!==null){prevChildArmature._parent=null;prevChildArmature.clock=null;if(prevChildArmature.inheritAnimation){prevChildArmature.animation.reset();}}if(this._childArmature!==null){this._childArmature._parent=this;this._childArmature.clock=this._armature.clock;if(this._childArmature.inheritAnimation){if(this._childArmature.cacheFrameRate===0){var cacheFrameRate=this._armature.cacheFrameRate;if(cacheFrameRate!==0){this._childArmature.cacheFrameRate=cacheFrameRate;}}var actions=null;if(this._displayData!==null&&this._displayData.type===1){actions=this._displayData.actions;}else if(this._displayIndex>=0&&this._rawDisplayDatas!==null){var rawDisplayData=this._displayIndex<this._rawDisplayDatas.length?this._rawDisplayDatas[this._displayIndex]:null;if(rawDisplayData===null){rawDisplayData=this._getDefaultRawDisplayData(this._displayIndex);}if(rawDisplayData!==null&&rawDisplayData.type===1){actions=rawDisplayData.actions;}}if(actions!==null&&actions.length>0){for(var _i=0,actions_1=actions;_i<actions_1.length;_i++){var action=actions_1[_i];var eventObject=dragonBones.BaseObject.borrowObject(dragonBones.EventObject);dragonBones.EventObject.actionDataToInstance(action,eventObject,this._armature);eventObject.slot=this;this._armature._bufferAction(eventObject,false);}}else {this._childArmature.animation.play();}}}}};Slot.prototype._updateGlobalTransformMatrix=function(isCache){var parentMatrix=this._parent._boneData.type===0?this._parent.globalTransformMatrix:this._parent._getGlobalTransformMatrix(this.global.x,this.global.y);this.globalTransformMatrix.copyFrom(this._localMatrix);this.globalTransformMatrix.concat(parentMatrix);if(isCache){this.global.fromMatrix(this.globalTransformMatrix);}else {this._globalDirty=true;}};Slot.prototype._setDisplayIndex=function(value,isAnimation){if(isAnimation===void 0){isAnimation=false;}if(isAnimation){if(this._animationDisplayIndex===value){return false;}this._animationDisplayIndex=value;}if(this._displayIndex===value){return false;}this._displayIndex=value;this._displayDirty=true;this._updateDisplayData();return this._displayDirty;};Slot.prototype._setZorder=function(value){if(this._zOrder===value);this._zOrder=value;this._zOrderDirty=true;return this._zOrderDirty;};Slot.prototype._setColor=function(value){this._colorTransform.copyFrom(value);this._colorDirty=true;return this._colorDirty;};Slot.prototype._setDisplayList=function(value){if(value!==null&&value.length>0){if(this._displayList.length!==value.length){this._displayList.length=value.length;}for(var i=0,l=value.length;i<l;++i){var eachDisplay=value[i];if(eachDisplay!==null&&eachDisplay!==this._rawDisplay&&eachDisplay!==this._meshDisplay&&!(eachDisplay instanceof dragonBones.Armature)&&this._displayList.indexOf(eachDisplay)<0){this._initDisplay(eachDisplay,true);}this._displayList[i]=eachDisplay;}}else if(this._displayList.length>0){this._displayList.length=0;}if(this._displayIndex>=0&&this._displayIndex<this._displayList.length){this._displayDirty=this._display!==this._displayList[this._displayIndex];}else {this._displayDirty=this._display!==null;}this._updateDisplayData();return this._displayDirty;};Slot.prototype.init=function(slotData,armatureValue,rawDisplay,meshDisplay){if(this._slotData!==null){return;}this._slotData=slotData;this._isFromCache=false;this._visibleDirty=true;this._blendModeDirty=true;this._colorDirty=true;this._blendMode=this._slotData.blendMode;this._zOrder=this._slotData.zOrder;this._colorTransform.copyFrom(this._slotData.color);this._rawDisplay=rawDisplay;this._meshDisplay=meshDisplay;this._armature=armatureValue;var slotParent=this._armature.getBone(this._slotData.parent.name);if(slotParent!==null){this._parent=slotParent;}this._armature._addSlot(this);this._initDisplay(this._rawDisplay,false);if(this._rawDisplay!==this._meshDisplay){this._initDisplay(this._meshDisplay,false);}this._onUpdateDisplay();this._addDisplay();};Slot.prototype.update=function(cacheFrameIndex){this._isFromCache=false;if(this._displayDirty){this._displayDirty=false;this._updateDisplay();if(this._transformDirty){if(this.origin!==null){this.global.copyFrom(this.origin).add(this.offset).toMatrix(this._localMatrix);}else {this.global.copyFrom(this.offset).toMatrix(this._localMatrix);}}}if(this._zOrderDirty){this._zOrderDirty=false;this._updateZOrder();}if(cacheFrameIndex>=0&&this._cachedFrameIndices!==null){var cachedFrameIndex=this._cachedFrameIndices[cacheFrameIndex];if(cachedFrameIndex>=0&&this._cachedFrameIndex===cachedFrameIndex){this._transformDirty=false;}else if(cachedFrameIndex>=0){this._transformDirty=true;this._cachedFrameIndex=cachedFrameIndex;}else if(this._transformDirty||this._parent._childrenTransformDirty){this._transformDirty=true;this._cachedFrameIndex=-1;}else if(this._cachedFrameIndex>=0){this._transformDirty=false;this._cachedFrameIndices[cacheFrameIndex]=this._cachedFrameIndex;}else {this._transformDirty=true;this._cachedFrameIndex=-1;}}else if(this._transformDirty||this._parent._childrenTransformDirty){cacheFrameIndex=-1;this._transformDirty=true;this._cachedFrameIndex=-1;}if(this._display===null){return;}if(this._visibleDirty){this._visibleDirty=false;this._updateVisible();}if(this._blendModeDirty){this._blendModeDirty=false;this._updateBlendMode();}if(this._colorDirty){this._colorDirty=false;this._updateColor();}if(this._deformVertices!==null&&this._deformVertices.verticesData!==null&&this._display===this._meshDisplay){var isSkinned=this._deformVertices.verticesData.weight!==null;var isSurface=this._parent._boneData.type!==0;if(this._deformVertices.verticesDirty||isSkinned&&this._deformVertices.isBonesUpdate()||isSurface&&this._parent._childrenTransformDirty){this._deformVertices.verticesDirty=false;this._updateMesh();}if(isSkinned||isSurface){return;}}if(this._transformDirty){this._transformDirty=false;if(this._cachedFrameIndex<0){var isCache=cacheFrameIndex>=0;this._updateGlobalTransformMatrix(isCache);if(isCache&&this._cachedFrameIndices!==null){this._cachedFrameIndex=this._cachedFrameIndices[cacheFrameIndex]=this._armature._armatureData.setCacheFrame(this.globalTransformMatrix,this.global);}}else {this._isFromCache=true;this._armature._armatureData.getCacheFrame(this.globalTransformMatrix,this.global,this._cachedFrameIndex);}this._updateTransform();}};Slot.prototype.updateTransformAndMatrix=function(){if(this._transformDirty){this._transformDirty=false;this._updateGlobalTransformMatrix(false);}};Slot.prototype.replaceDisplayData=function(value,displayIndex){if(displayIndex===void 0){displayIndex=-1;}if(displayIndex<0){if(this._displayIndex<0){displayIndex=0;}else {displayIndex=this._displayIndex;}}if(this._displayDatas.length<=displayIndex){this._displayDatas.length=displayIndex+1;for(var i=0,l=this._displayDatas.length;i<l;++i){if(!this._displayDatas[i]){this._displayDatas[i]=null;}}}this._displayDatas[displayIndex]=value;};Slot.prototype.containsPoint=function(x,y){if(this._boundingBoxData===null){return false;}this.updateTransformAndMatrix();Slot._helpMatrix.copyFrom(this.globalTransformMatrix);Slot._helpMatrix.invert();Slot._helpMatrix.transformPoint(x,y,Slot._helpPoint);return this._boundingBoxData.containsPoint(Slot._helpPoint.x,Slot._helpPoint.y);};Slot.prototype.intersectsSegment=function(xA,yA,xB,yB,intersectionPointA,intersectionPointB,normalRadians){if(intersectionPointA===void 0){intersectionPointA=null;}if(intersectionPointB===void 0){intersectionPointB=null;}if(normalRadians===void 0){normalRadians=null;}if(this._boundingBoxData===null){return 0;}this.updateTransformAndMatrix();Slot._helpMatrix.copyFrom(this.globalTransformMatrix);Slot._helpMatrix.invert();Slot._helpMatrix.transformPoint(xA,yA,Slot._helpPoint);xA=Slot._helpPoint.x;yA=Slot._helpPoint.y;Slot._helpMatrix.transformPoint(xB,yB,Slot._helpPoint);xB=Slot._helpPoint.x;yB=Slot._helpPoint.y;var intersectionCount=this._boundingBoxData.intersectsSegment(xA,yA,xB,yB,intersectionPointA,intersectionPointB,normalRadians);if(intersectionCount>0){if(intersectionCount===1||intersectionCount===2){if(intersectionPointA!==null){this.globalTransformMatrix.transformPoint(intersectionPointA.x,intersectionPointA.y,intersectionPointA);if(intersectionPointB!==null){intersectionPointB.x=intersectionPointA.x;intersectionPointB.y=intersectionPointA.y;}}else if(intersectionPointB!==null){this.globalTransformMatrix.transformPoint(intersectionPointB.x,intersectionPointB.y,intersectionPointB);}}else {if(intersectionPointA!==null){this.globalTransformMatrix.transformPoint(intersectionPointA.x,intersectionPointA.y,intersectionPointA);}if(intersectionPointB!==null){this.globalTransformMatrix.transformPoint(intersectionPointB.x,intersectionPointB.y,intersectionPointB);}}if(normalRadians!==null){this.globalTransformMatrix.transformPoint(Math.cos(normalRadians.x),Math.sin(normalRadians.x),Slot._helpPoint,true);normalRadians.x=Math.atan2(Slot._helpPoint.y,Slot._helpPoint.x);this.globalTransformMatrix.transformPoint(Math.cos(normalRadians.y),Math.sin(normalRadians.y),Slot._helpPoint,true);normalRadians.y=Math.atan2(Slot._helpPoint.y,Slot._helpPoint.x);}}return intersectionCount;};Slot.prototype.invalidUpdate=function(){this._displayDirty=true;this._transformDirty=true;};Object.defineProperty(Slot.prototype,"visible",{get:function(){return this._visible;},set:function(value){if(this._visible===value){return;}this._visible=value;this._updateVisible();},enumerable:true,configurable:true});Object.defineProperty(Slot.prototype,"displayIndex",{get:function(){return this._displayIndex;},set:function(value){if(this._setDisplayIndex(value)){this.update(-1);}},enumerable:true,configurable:true});Object.defineProperty(Slot.prototype,"name",{get:function(){return this._slotData.name;},enumerable:true,configurable:true});Object.defineProperty(Slot.prototype,"displayList",{get:function(){return this._displayList.concat();},set:function(value){var backupDisplayList=this._displayList.concat();var disposeDisplayList=new Array();if(this._setDisplayList(value)){this.update(-1);}for(var _i=0,backupDisplayList_1=backupDisplayList;_i<backupDisplayList_1.length;_i++){var eachDisplay=backupDisplayList_1[_i];if(eachDisplay!==null&&eachDisplay!==this._rawDisplay&&eachDisplay!==this._meshDisplay&&this._displayList.indexOf(eachDisplay)<0&&disposeDisplayList.indexOf(eachDisplay)<0){disposeDisplayList.push(eachDisplay);}}for(var _a=0,disposeDisplayList_2=disposeDisplayList;_a<disposeDisplayList_2.length;_a++){var eachDisplay=disposeDisplayList_2[_a];if(eachDisplay instanceof dragonBones.Armature);else {this._disposeDisplay(eachDisplay,true);}}},enumerable:true,configurable:true});Object.defineProperty(Slot.prototype,"slotData",{get:function(){return this._slotData;},enumerable:true,configurable:true});Object.defineProperty(Slot.prototype,"rawDisplayDatas",{get:function(){return this._rawDisplayDatas;},set:function(value){if(this._rawDisplayDatas===value){return;}this._displayDirty=true;this._rawDisplayDatas=value;if(this._rawDisplayDatas!==null){this._displayDatas.length=this._rawDisplayDatas.length;for(var i=0,l=this._displayDatas.length;i<l;++i){var rawDisplayData=this._rawDisplayDatas[i];if(rawDisplayData===null){rawDisplayData=this._getDefaultRawDisplayData(i);}this._displayDatas[i]=rawDisplayData;}}else {this._displayDatas.length=0;}},enumerable:true,configurable:true});Object.defineProperty(Slot.prototype,"displayData",{get:function(){return this._displayData;},enumerable:true,configurable:true});Object.defineProperty(Slot.prototype,"boundingBoxData",{get:function(){return this._boundingBoxData;},enumerable:true,configurable:true});Object.defineProperty(Slot.prototype,"rawDisplay",{get:function(){return this._rawDisplay;},enumerable:true,configurable:true});Object.defineProperty(Slot.prototype,"meshDisplay",{get:function(){return this._meshDisplay;},enumerable:true,configurable:true});Object.defineProperty(Slot.prototype,"display",{get:function(){return this._display;},set:function(value){if(this._display===value){return;}var displayListLength=this._displayList.length;if(this._displayIndex<0&&displayListLength===0){this._displayIndex=0;}if(this._displayIndex<0){return;}else {var replaceDisplayList=this.displayList;if(displayListLength<=this._displayIndex){replaceDisplayList.length=this._displayIndex+1;}replaceDisplayList[this._displayIndex]=value;this.displayList=replaceDisplayList;}},enumerable:true,configurable:true});Object.defineProperty(Slot.prototype,"childArmature",{get:function(){return this._childArmature;},set:function(value){if(this._childArmature===value){return;}this.display=value;},enumerable:true,configurable:true});Object.defineProperty(Slot.prototype,"parent",{get:function(){return this._parent;},enumerable:true,configurable:true});Slot.prototype.getDisplay=function(){return this._display;};Slot.prototype.setDisplay=function(value){this.display=value;};return Slot;}(dragonBones.TransformObject);dragonBones.Slot=Slot;})(dragonBones$1||(dragonBones$1={}));(function(dragonBones){var Constraint=function(_super){__extends(Constraint,_super);function Constraint(){return _super!==null&&_super.apply(this,arguments)||this;}Constraint.prototype._onClear=function(){this._armature=null;this._target=null;this._root=null;this._bone=null;};Object.defineProperty(Constraint.prototype,"name",{get:function(){return this._constraintData.name;},enumerable:true,configurable:true});Constraint._helpMatrix=new dragonBones.Matrix();Constraint._helpTransform=new dragonBones.Transform();Constraint._helpPoint=new dragonBones.Point();return Constraint;}(dragonBones.BaseObject);dragonBones.Constraint=Constraint;var IKConstraint=function(_super){__extends(IKConstraint,_super);function IKConstraint(){return _super!==null&&_super.apply(this,arguments)||this;}IKConstraint.toString=function(){return "[class dragonBones.IKConstraint]";};IKConstraint.prototype._onClear=function(){_super.prototype._onClear.call(this);this._scaleEnabled=false;this._bendPositive=false;this._weight=1.0;this._constraintData=null;};IKConstraint.prototype._computeA=function(){var ikGlobal=this._target.global;var global=this._root.global;var globalTransformMatrix=this._root.globalTransformMatrix;var radian=Math.atan2(ikGlobal.y-global.y,ikGlobal.x-global.x);if(global.scaleX<0.0){radian+=Math.PI;}global.rotation+=dragonBones.Transform.normalizeRadian(radian-global.rotation)*this._weight;global.toMatrix(globalTransformMatrix);};IKConstraint.prototype._computeB=function(){var boneLength=this._bone._boneData.length;var parent=this._root;var ikGlobal=this._target.global;var parentGlobal=parent.global;var global=this._bone.global;var globalTransformMatrix=this._bone.globalTransformMatrix;var x=globalTransformMatrix.a*boneLength;var y=globalTransformMatrix.b*boneLength;var lLL=x*x+y*y;var lL=Math.sqrt(lLL);var dX=global.x-parentGlobal.x;var dY=global.y-parentGlobal.y;var lPP=dX*dX+dY*dY;var lP=Math.sqrt(lPP);var rawRadian=global.rotation;var rawParentRadian=parentGlobal.rotation;var rawRadianA=Math.atan2(dY,dX);dX=ikGlobal.x-parentGlobal.x;dY=ikGlobal.y-parentGlobal.y;var lTT=dX*dX+dY*dY;var lT=Math.sqrt(lTT);var radianA=0.0;if(lL+lP<=lT||lT+lL<=lP||lT+lP<=lL){radianA=Math.atan2(ikGlobal.y-parentGlobal.y,ikGlobal.x-parentGlobal.x);if(lL+lP<=lT);else if(lP<lL){radianA+=Math.PI;}}else {var h=(lPP-lLL+lTT)/(2.0*lTT);var r=Math.sqrt(lPP-h*h*lTT)/lT;var hX=parentGlobal.x+dX*h;var hY=parentGlobal.y+dY*h;var rX=-dY*r;var rY=dX*r;var isPPR=false;var parentParent=parent.parent;if(parentParent!==null){var parentParentMatrix=parentParent.globalTransformMatrix;isPPR=parentParentMatrix.a*parentParentMatrix.d-parentParentMatrix.b*parentParentMatrix.c<0.0;}if(isPPR!==this._bendPositive){global.x=hX-rX;global.y=hY-rY;}else {global.x=hX+rX;global.y=hY+rY;}radianA=Math.atan2(global.y-parentGlobal.y,global.x-parentGlobal.x);}var dR=dragonBones.Transform.normalizeRadian(radianA-rawRadianA);parentGlobal.rotation=rawParentRadian+dR*this._weight;parentGlobal.toMatrix(parent.globalTransformMatrix);var currentRadianA=rawRadianA+dR*this._weight;global.x=parentGlobal.x+Math.cos(currentRadianA)*lP;global.y=parentGlobal.y+Math.sin(currentRadianA)*lP;var radianB=Math.atan2(ikGlobal.y-global.y,ikGlobal.x-global.x);if(global.scaleX<0.0){radianB+=Math.PI;}global.rotation=parentGlobal.rotation+rawRadian-rawParentRadian+dragonBones.Transform.normalizeRadian(radianB-dR-rawRadian)*this._weight;global.toMatrix(globalTransformMatrix);};IKConstraint.prototype.init=function(constraintData,armature){if(this._constraintData!==null){return;}this._constraintData=constraintData;this._armature=armature;this._target=this._armature.getBone(this._constraintData.target.name);this._root=this._armature.getBone(this._constraintData.root.name);this._bone=this._constraintData.bone!==null?this._armature.getBone(this._constraintData.bone.name):null;{var ikConstraintData=this._constraintData;this._scaleEnabled=ikConstraintData.scaleEnabled;this._bendPositive=ikConstraintData.bendPositive;this._weight=ikConstraintData.weight;}this._root._hasConstraint=true;};IKConstraint.prototype.update=function(){this._root.updateByConstraint();if(this._bone!==null){this._bone.updateByConstraint();this._computeB();}else {this._computeA();}};IKConstraint.prototype.invalidUpdate=function(){this._root.invalidUpdate();if(this._bone!==null){this._bone.invalidUpdate();}};return IKConstraint;}(Constraint);dragonBones.IKConstraint=IKConstraint;var PathConstraint=function(_super){__extends(PathConstraint,_super);function PathConstraint(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this._bones=[];_this._spaces=[];_this._positions=[];_this._curves=[];_this._boneLengths=[];_this._pathGlobalVertices=[];_this._segments=[10];return _this;}PathConstraint.toString=function(){return "[class dragonBones.PathConstraint]";};PathConstraint.prototype._onClear=function(){_super.prototype._onClear.call(this);this.dirty=false;this.pathOffset=0;this.position=0.0;this.spacing=0.0;this.rotateOffset=0.0;this.rotateMix=1.0;this.translateMix=1.0;this._pathSlot=null;this._bones.length=0;this._spaces.length=0;this._positions.length=0;this._curves.length=0;this._boneLengths.length=0;this._pathGlobalVertices.length=0;};PathConstraint.prototype._updatePathVertices=function(verticesData){var armature=this._armature;var dragonBonesData=armature.armatureData.parent;var scale=armature.armatureData.scale;var intArray=dragonBonesData.intArray;var floatArray=dragonBonesData.floatArray;var pathOffset=verticesData.offset;var pathVertexCount=intArray[pathOffset+0];var pathVertexOffset=intArray[pathOffset+2];this._pathGlobalVertices.length=pathVertexCount*2;var weightData=verticesData.weight;if(weightData===null){var parentBone=this._pathSlot.parent;parentBone.updateByConstraint();var matrix=parentBone.globalTransformMatrix;for(var i=0,iV_1=pathVertexOffset;i<pathVertexCount;i+=2){var vx=floatArray[iV_1++]*scale;var vy=floatArray[iV_1++]*scale;var x=matrix.a*vx+matrix.c*vy+matrix.tx;var y=matrix.b*vx+matrix.d*vy+matrix.ty;this._pathGlobalVertices[i]=x;this._pathGlobalVertices[i+1]=y;}return;}var bones=this._pathSlot._deformVertices.bones;var weightBoneCount=weightData.bones.length;var weightOffset=weightData.offset;var floatOffset=intArray[weightOffset+1];var iV=floatOffset;var iB=weightOffset+2+weightBoneCount;for(var i=0,iW=0;i<pathVertexCount;i++){var vertexBoneCount=intArray[iB++];var xG=0.0,yG=0.0;for(var ii=0,ll=vertexBoneCount;ii<ll;ii++){var boneIndex=intArray[iB++];var bone=bones[boneIndex];if(bone===null){continue;}bone.updateByConstraint();var matrix=bone.globalTransformMatrix;var weight=floatArray[iV++];var vx=floatArray[iV++]*scale;var vy=floatArray[iV++]*scale;xG+=(matrix.a*vx+matrix.c*vy+matrix.tx)*weight;yG+=(matrix.b*vx+matrix.d*vy+matrix.ty)*weight;}this._pathGlobalVertices[iW++]=xG;this._pathGlobalVertices[iW++]=yG;}};PathConstraint.prototype._computeVertices=function(start,count,offset,out){for(var i=offset,iW=start;i<count;i+=2){out[i]=this._pathGlobalVertices[iW++];out[i+1]=this._pathGlobalVertices[iW++];}};PathConstraint.prototype._computeBezierCurve=function(pathDisplayDta,spaceCount,tangents,percentPosition,percentSpacing){var armature=this._armature;var intArray=armature.armatureData.parent.intArray;var vertexCount=intArray[pathDisplayDta.vertices.offset+0];var positions=this._positions;var spaces=this._spaces;var isClosed=pathDisplayDta.closed;var curveVertices=Array();var verticesLength=vertexCount*2;var curveCount=verticesLength/6;var preCurve=-1;var position=this.position;positions.length=spaceCount*3+2;var pathLength=0.0;if(!pathDisplayDta.constantSpeed){var lenghts=pathDisplayDta.curveLengths;curveCount-=isClosed?1:2;pathLength=lenghts[curveCount];if(percentPosition){position*=pathLength;}if(percentSpacing){for(var i=0;i<spaceCount;i++){spaces[i]*=pathLength;}}curveVertices.length=8;for(var i=0,o=0,curve=0;i<spaceCount;i++,o+=3){var space=spaces[i];position+=space;if(isClosed){position%=pathLength;if(position<0){position+=pathLength;}curve=0;}else if(position<0){continue;}else if(position>pathLength){continue;}var percent=0.0;for(;;curve++){var len=lenghts[curve];if(position>len){continue;}if(curve===0){percent=position/len;}else {var preLen=lenghts[curve-1];percent=(position-preLen)/(len-preLen);}break;}if(curve!==preCurve){preCurve=curve;if(isClosed&&curve===curveCount){this._computeVertices(verticesLength-4,4,0,curveVertices);this._computeVertices(0,4,4,curveVertices);}else {this._computeVertices(curve*6+2,8,0,curveVertices);}}this.addCurvePosition(percent,curveVertices[0],curveVertices[1],curveVertices[2],curveVertices[3],curveVertices[4],curveVertices[5],curveVertices[6],curveVertices[7],positions,o,tangents);}return;}if(isClosed){verticesLength+=2;curveVertices.length=vertexCount;this._computeVertices(2,verticesLength-4,0,curveVertices);this._computeVertices(0,2,verticesLength-4,curveVertices);curveVertices[verticesLength-2]=curveVertices[0];curveVertices[verticesLength-1]=curveVertices[1];}else {curveCount--;verticesLength-=4;curveVertices.length=verticesLength;this._computeVertices(2,verticesLength,0,curveVertices);}var curves=new Array(curveCount);pathLength=0;var x1=curveVertices[0],y1=curveVertices[1],cx1=0,cy1=0,cx2=0,cy2=0,x2=0,y2=0;var tmpx,tmpy,dddfx,dddfy,ddfx,ddfy,dfx,dfy;for(var i=0,w=2;i<curveCount;i++,w+=6){cx1=curveVertices[w];cy1=curveVertices[w+1];cx2=curveVertices[w+2];cy2=curveVertices[w+3];x2=curveVertices[w+4];y2=curveVertices[w+5];tmpx=(x1-cx1*2+cx2)*0.1875;tmpy=(y1-cy1*2+cy2)*0.1875;dddfx=((cx1-cx2)*3-x1+x2)*0.09375;dddfy=((cy1-cy2)*3-y1+y2)*0.09375;ddfx=tmpx*2+dddfx;ddfy=tmpy*2+dddfy;dfx=(cx1-x1)*0.75+tmpx+dddfx*0.16666667;dfy=(cy1-y1)*0.75+tmpy+dddfy*0.16666667;pathLength+=Math.sqrt(dfx*dfx+dfy*dfy);dfx+=ddfx;dfy+=ddfy;ddfx+=dddfx;ddfy+=dddfy;pathLength+=Math.sqrt(dfx*dfx+dfy*dfy);dfx+=ddfx;dfy+=ddfy;pathLength+=Math.sqrt(dfx*dfx+dfy*dfy);dfx+=ddfx+dddfx;dfy+=ddfy+dddfy;pathLength+=Math.sqrt(dfx*dfx+dfy*dfy);curves[i]=pathLength;x1=x2;y1=y2;}if(percentPosition){position*=pathLength;}if(percentSpacing){for(var i=0;i<spaceCount;i++){spaces[i]*=pathLength;}}var segments=this._segments;var curveLength=0;for(var i=0,o=0,curve=0,segment=0;i<spaceCount;i++,o+=3){var space=spaces[i];position+=space;var p=position;if(isClosed){p%=pathLength;if(p<0)p+=pathLength;curve=0;}else if(p<0){continue;}else if(p>pathLength){continue;}for(;;curve++){var length_1=curves[curve];if(p>length_1)continue;if(curve===0)p/=length_1;else {var prev=curves[curve-1];p=(p-prev)/(length_1-prev);}break;}if(curve!==preCurve){preCurve=curve;var ii=curve*6;x1=curveVertices[ii];y1=curveVertices[ii+1];cx1=curveVertices[ii+2];cy1=curveVertices[ii+3];cx2=curveVertices[ii+4];cy2=curveVertices[ii+5];x2=curveVertices[ii+6];y2=curveVertices[ii+7];tmpx=(x1-cx1*2+cx2)*0.03;tmpy=(y1-cy1*2+cy2)*0.03;dddfx=((cx1-cx2)*3-x1+x2)*0.006;dddfy=((cy1-cy2)*3-y1+y2)*0.006;ddfx=tmpx*2+dddfx;ddfy=tmpy*2+dddfy;dfx=(cx1-x1)*0.3+tmpx+dddfx*0.16666667;dfy=(cy1-y1)*0.3+tmpy+dddfy*0.16666667;curveLength=Math.sqrt(dfx*dfx+dfy*dfy);segments[0]=curveLength;for(ii=1;ii<8;ii++){dfx+=ddfx;dfy+=ddfy;ddfx+=dddfx;ddfy+=dddfy;curveLength+=Math.sqrt(dfx*dfx+dfy*dfy);segments[ii]=curveLength;}dfx+=ddfx;dfy+=ddfy;curveLength+=Math.sqrt(dfx*dfx+dfy*dfy);segments[8]=curveLength;dfx+=ddfx+dddfx;dfy+=ddfy+dddfy;curveLength+=Math.sqrt(dfx*dfx+dfy*dfy);segments[9]=curveLength;segment=0;}p*=curveLength;for(;;segment++){var length_2=segments[segment];if(p>length_2)continue;if(segment===0)p/=length_2;else {var prev=segments[segment-1];p=segment+(p-prev)/(length_2-prev);}break;}this.addCurvePosition(p*0.1,x1,y1,cx1,cy1,cx2,cy2,x2,y2,positions,o,tangents);}};PathConstraint.prototype.addCurvePosition=function(t,x1,y1,cx1,cy1,cx2,cy2,x2,y2,out,offset,tangents){if(t===0){out[offset]=x1;out[offset+1]=y1;out[offset+2]=0;return;}if(t===1){out[offset]=x2;out[offset+1]=y2;out[offset+2]=0;return;}var mt=1-t;var mt2=mt*mt;var t2=t*t;var a=mt2*mt;var b=mt2*t*3;var c=mt*t2*3;var d=t*t2;var x=a*x1+b*cx1+c*cx2+d*x2;var y=a*y1+b*cy1+c*cy2+d*y2;out[offset]=x;out[offset+1]=y;if(tangents){out[offset+2]=Math.atan2(y-(a*y1+b*cy1+c*cy2),x-(a*x1+b*cx1+c*cx2));}else {out[offset+2]=0;}};PathConstraint.prototype.init=function(constraintData,armature){this._constraintData=constraintData;this._armature=armature;var data=constraintData;this.pathOffset=data.pathDisplayData.vertices.offset;this.position=data.position;this.spacing=data.spacing;this.rotateOffset=data.rotateOffset;this.rotateMix=data.rotateMix;this.translateMix=data.translateMix;this._root=this._armature.getBone(data.root.name);this._target=this._armature.getBone(data.target.name);this._pathSlot=this._armature.getSlot(data.pathSlot.name);for(var i=0,l=data.bones.length;i<l;i++){var bone=this._armature.getBone(data.bones[i].name);if(bone!==null){this._bones.push(bone);}}if(data.rotateMode===2){this._boneLengths.length=this._bones.length;}this._root._hasConstraint=true;};PathConstraint.prototype.update=function(){var pathSlot=this._pathSlot;if(pathSlot._deformVertices===null||pathSlot._deformVertices.verticesData===null||pathSlot._deformVertices.verticesData.offset!==this.pathOffset){return;}var constraintData=this._constraintData;var pathDisplayData=pathSlot._displayData;var isPathVerticeDirty=false;var deformVertices=pathSlot._deformVertices;if(this._root._childrenTransformDirty){this._updatePathVertices(pathDisplayData.vertices);isPathVerticeDirty=true;}else if(deformVertices!==null&&(deformVertices.verticesDirty||deformVertices.isBonesUpdate())){this._updatePathVertices(pathDisplayData.vertices);deformVertices.verticesDirty=false;isPathVerticeDirty=true;}if(!isPathVerticeDirty&&!this.dirty){return;}var positionMode=constraintData.positionMode;var spacingMode=constraintData.spacingMode;var rotateMode=constraintData.rotateMode;var bones=this._bones;var isLengthMode=spacingMode===0;var isChainScaleMode=rotateMode===2;var isTangentMode=rotateMode===0;var boneCount=bones.length;var spacesCount=isTangentMode?boneCount:boneCount+1;var spacing=this.spacing;var spaces=this._spaces;spaces.length=spacesCount;if(isChainScaleMode||isLengthMode){spaces[0]=0;for(var i=0,l=spacesCount-1;i<l;i++){var bone=bones[i];bone.updateByConstraint();var boneLength=bone._boneData.length;var matrix=bone.globalTransformMatrix;var x=boneLength*matrix.a;var y=boneLength*matrix.b;var len=Math.sqrt(x*x+y*y);if(isChainScaleMode){this._boneLengths[i]=len;}spaces[i+1]=(boneLength+spacing)*len/boneLength;}}else {for(var i=0;i<spacesCount;i++){spaces[i]=spacing;}}this._computeBezierCurve(pathDisplayData,spacesCount,isTangentMode,positionMode===1,spacingMode===2);var positions=this._positions;var rotateOffset=this.rotateOffset;var boneX=positions[0],boneY=positions[1];var tip;if(rotateOffset===0){tip=rotateMode===1;}else {tip=false;var bone=pathSlot.parent;if(bone!==null){var matrix=bone.globalTransformMatrix;rotateOffset*=matrix.a*matrix.d-matrix.b*matrix.c>0?dragonBones.Transform.DEG_RAD:-dragonBones.Transform.DEG_RAD;}}var rotateMix=this.rotateMix;var translateMix=this.translateMix;for(var i=0,p=3;i<boneCount;i++,p+=3){var bone=bones[i];bone.updateByConstraint();var matrix=bone.globalTransformMatrix;matrix.tx+=(boneX-matrix.tx)*translateMix;matrix.ty+=(boneY-matrix.ty)*translateMix;var x=positions[p],y=positions[p+1];var dx=x-boneX,dy=y-boneY;if(isChainScaleMode){var lenght=this._boneLengths[i];var s=(Math.sqrt(dx*dx+dy*dy)/lenght-1)*rotateMix+1;matrix.a*=s;matrix.b*=s;}boneX=x;boneY=y;if(rotateMix>0){var a=matrix.a,b=matrix.b,c=matrix.c,d=matrix.d,r=void 0,cos=void 0,sin=void 0;if(isTangentMode){r=positions[p-1];}else {r=Math.atan2(dy,dx);}r-=Math.atan2(b,a);if(tip){cos=Math.cos(r);sin=Math.sin(r);var length_3=bone._boneData.length;boneX+=(length_3*(cos*a-sin*b)-dx)*rotateMix;boneY+=(length_3*(sin*a+cos*b)-dy)*rotateMix;}else {r+=rotateOffset;}if(r>dragonBones.Transform.PI){r-=dragonBones.Transform.PI_D;}else if(r<-dragonBones.Transform.PI){r+=dragonBones.Transform.PI_D;}r*=rotateMix;cos=Math.cos(r);sin=Math.sin(r);matrix.a=cos*a-sin*b;matrix.b=sin*a+cos*b;matrix.c=cos*c-sin*d;matrix.d=sin*c+cos*d;}bone.global.fromMatrix(matrix);}this.dirty=false;};PathConstraint.prototype.invalidUpdate=function(){};return PathConstraint;}(Constraint);dragonBones.PathConstraint=PathConstraint;})(dragonBones$1||(dragonBones$1={}));(function(dragonBones){var WorldClock=function(){function WorldClock(time){if(time===void 0){time=0.0;}this.time=0.0;this.timeScale=1.0;this._systemTime=0.0;this._animatebles=[];this._clock=null;this.time=time;this._systemTime=new Date().getTime()*0.001;}WorldClock.prototype.advanceTime=function(passedTime){if(passedTime!==passedTime){passedTime=0.0;}var currentTime=Date.now()*0.001;if(passedTime<0.0){passedTime=currentTime-this._systemTime;}this._systemTime=currentTime;if(this.timeScale!==1.0){passedTime*=this.timeScale;}if(passedTime===0.0){return;}if(passedTime<0.0){this.time-=passedTime;}else {this.time+=passedTime;}var i=0,r=0,l=this._animatebles.length;for(;i<l;++i){var animatable=this._animatebles[i];if(animatable!==null){if(r>0){this._animatebles[i-r]=animatable;this._animatebles[i]=null;}animatable.advanceTime(passedTime);}else {r++;}}if(r>0){l=this._animatebles.length;for(;i<l;++i){var animateble=this._animatebles[i];if(animateble!==null){this._animatebles[i-r]=animateble;}else {r++;}}this._animatebles.length-=r;}};WorldClock.prototype.contains=function(value){if(value===this){return false;}var ancestor=value;while(ancestor!==this&&ancestor!==null){ancestor=ancestor.clock;}return ancestor===this;};WorldClock.prototype.add=function(value){if(this._animatebles.indexOf(value)<0){this._animatebles.push(value);value.clock=this;}};WorldClock.prototype.remove=function(value){var index=this._animatebles.indexOf(value);if(index>=0){this._animatebles[index]=null;value.clock=null;}};WorldClock.prototype.clear=function(){for(var _i=0,_a=this._animatebles;_i<_a.length;_i++){var animatable=_a[_i];if(animatable!==null){animatable.clock=null;}}};Object.defineProperty(WorldClock.prototype,"clock",{get:function(){return this._clock;},set:function(value){if(this._clock===value){return;}if(this._clock!==null){this._clock.remove(this);}this._clock=value;if(this._clock!==null){this._clock.add(this);}},enumerable:true,configurable:true});WorldClock.clock=new WorldClock();return WorldClock;}();dragonBones.WorldClock=WorldClock;})(dragonBones$1||(dragonBones$1={}));(function(dragonBones){var Animation=function(_super){__extends(Animation,_super);function Animation(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this._animationNames=[];_this._animationStates=[];_this._animations={};_this._animationConfig=null;return _this;}Animation.toString=function(){return "[class dragonBones.Animation]";};Animation.prototype._onClear=function(){for(var _i=0,_a=this._animationStates;_i<_a.length;_i++){var animationState=_a[_i];animationState.returnToPool();}for(var k in this._animations){delete this._animations[k];}if(this._animationConfig!==null){this._animationConfig.returnToPool();}this.timeScale=1.0;this._lockUpdate=false;this._animationDirty=false;this._inheritTimeScale=1.0;this._animationNames.length=0;this._animationStates.length=0;this._armature=null;this._animationConfig=null;this._lastAnimationState=null;};Animation.prototype._fadeOut=function(animationConfig){switch(animationConfig.fadeOutMode){case 1:for(var _i=0,_a=this._animationStates;_i<_a.length;_i++){var animationState=_a[_i];if(animationState._parent!==null){continue;}if(animationState.layer===animationConfig.layer){animationState.fadeOut(animationConfig.fadeOutTime,animationConfig.pauseFadeOut);}}break;case 2:for(var _b=0,_c=this._animationStates;_b<_c.length;_b++){var animationState=_c[_b];if(animationState._parent!==null){continue;}if(animationState.group===animationConfig.group){animationState.fadeOut(animationConfig.fadeOutTime,animationConfig.pauseFadeOut);}}break;case 3:for(var _d=0,_e=this._animationStates;_d<_e.length;_d++){var animationState=_e[_d];if(animationState._parent!==null){continue;}if(animationState.layer===animationConfig.layer&&animationState.group===animationConfig.group){animationState.fadeOut(animationConfig.fadeOutTime,animationConfig.pauseFadeOut);}}break;case 4:for(var _f=0,_g=this._animationStates;_f<_g.length;_f++){var animationState=_g[_f];if(animationState._parent!==null){continue;}animationState.fadeOut(animationConfig.fadeOutTime,animationConfig.pauseFadeOut);}break;}};Animation.prototype.init=function(armature){if(this._armature!==null){return;}this._armature=armature;this._animationConfig=dragonBones.BaseObject.borrowObject(dragonBones.AnimationConfig);};Animation.prototype.advanceTime=function(passedTime){if(passedTime<0.0){passedTime=-passedTime;}if(this._armature.inheritAnimation&&this._armature._parent!==null){this._inheritTimeScale=this._armature._parent._armature.animation._inheritTimeScale*this.timeScale;}else {this._inheritTimeScale=this.timeScale;}if(this._inheritTimeScale!==1.0){passedTime*=this._inheritTimeScale;}var animationStateCount=this._animationStates.length;if(animationStateCount===1){var animationState=this._animationStates[0];if(animationState._fadeState>0&&animationState._subFadeState>0){this._armature._dragonBones.bufferObject(animationState);this._animationStates.length=0;this._lastAnimationState=null;}else {var animationData=animationState._animationData;var cacheFrameRate=animationData.cacheFrameRate;if(this._animationDirty&&cacheFrameRate>0.0){this._animationDirty=false;for(var _i=0,_a=this._armature.getBones();_i<_a.length;_i++){var bone=_a[_i];bone._cachedFrameIndices=animationData.getBoneCachedFrameIndices(bone.name);}for(var _b=0,_c=this._armature.getSlots();_b<_c.length;_b++){var slot=_c[_b];var rawDisplayDatas=slot.rawDisplayDatas;if(rawDisplayDatas!==null&&rawDisplayDatas.length>0){var rawDsplayData=rawDisplayDatas[0];if(rawDsplayData!==null){if(rawDsplayData.parent===this._armature.armatureData.defaultSkin){slot._cachedFrameIndices=animationData.getSlotCachedFrameIndices(slot.name);continue;}}}slot._cachedFrameIndices=null;}}animationState.advanceTime(passedTime,cacheFrameRate);}}else if(animationStateCount>1){for(var i=0,r=0;i<animationStateCount;++i){var animationState=this._animationStates[i];if(animationState._fadeState>0&&animationState._subFadeState>0){r++;this._armature._dragonBones.bufferObject(animationState);this._animationDirty=true;if(this._lastAnimationState===animationState){this._lastAnimationState=null;}}else {if(r>0){this._animationStates[i-r]=animationState;}animationState.advanceTime(passedTime,0.0);}if(i===animationStateCount-1&&r>0){this._animationStates.length-=r;if(this._lastAnimationState===null&&this._animationStates.length>0){this._lastAnimationState=this._animationStates[this._animationStates.length-1];}}}this._armature._cacheFrameIndex=-1;}else {this._armature._cacheFrameIndex=-1;}};Animation.prototype.reset=function(){for(var _i=0,_a=this._animationStates;_i<_a.length;_i++){var animationState=_a[_i];animationState.returnToPool();}this._animationDirty=false;this._animationConfig.clear();this._animationStates.length=0;this._lastAnimationState=null;};Animation.prototype.stop=function(animationName){if(animationName===void 0){animationName=null;}if(animationName!==null){var animationState=this.getState(animationName);if(animationState!==null){animationState.stop();}}else {for(var _i=0,_a=this._animationStates;_i<_a.length;_i++){var animationState=_a[_i];animationState.stop();}}};Animation.prototype.playConfig=function(animationConfig){var animationName=animationConfig.animation;if(!(animationName in this._animations)){console.warn("Non-existent animation.\n","DragonBones name: "+this._armature.armatureData.parent.name,"Armature name: "+this._armature.name,"Animation name: "+animationName);return null;}var animationData=this._animations[animationName];if(animationConfig.fadeOutMode===5){for(var _i=0,_a=this._animationStates;_i<_a.length;_i++){var animationState_1=_a[_i];if(animationState_1._animationData===animationData){return animationState_1;}}}if(this._animationStates.length===0){animationConfig.fadeInTime=0.0;}else if(animationConfig.fadeInTime<0.0){animationConfig.fadeInTime=animationData.fadeInTime;}if(animationConfig.fadeOutTime<0.0){animationConfig.fadeOutTime=animationConfig.fadeInTime;}if(animationConfig.timeScale<=-100.0){animationConfig.timeScale=1.0/animationData.scale;}if(animationData.frameCount>1){if(animationConfig.position<0.0){animationConfig.position%=animationData.duration;animationConfig.position=animationData.duration-animationConfig.position;}else if(animationConfig.position===animationData.duration){animationConfig.position-=0.000001;}else if(animationConfig.position>animationData.duration){animationConfig.position%=animationData.duration;}if(animationConfig.duration>0.0&&animationConfig.position+animationConfig.duration>animationData.duration){animationConfig.duration=animationData.duration-animationConfig.position;}if(animationConfig.playTimes<0){animationConfig.playTimes=animationData.playTimes;}}else {animationConfig.playTimes=1;animationConfig.position=0.0;if(animationConfig.duration>0.0){animationConfig.duration=0.0;}}if(animationConfig.duration===0.0){animationConfig.duration=-1.0;}this._fadeOut(animationConfig);var animationState=dragonBones.BaseObject.borrowObject(dragonBones.AnimationState);animationState.init(this._armature,animationData,animationConfig);this._animationDirty=true;this._armature._cacheFrameIndex=-1;if(this._animationStates.length>0){var added=false;for(var i=0,l=this._animationStates.length;i<l;++i){if(animationState.layer>this._animationStates[i].layer){added=true;this._animationStates.splice(i,0,animationState);break;}else if(i!==l-1&&animationState.layer>this._animationStates[i+1].layer){added=true;this._animationStates.splice(i+1,0,animationState);break;}}if(!added){this._animationStates.push(animationState);}}else {this._animationStates.push(animationState);}for(var _b=0,_c=this._armature.getSlots();_b<_c.length;_b++){var slot=_c[_b];var childArmature=slot.childArmature;if(childArmature!==null&&childArmature.inheritAnimation&&childArmature.animation.hasAnimation(animationName)&&childArmature.animation.getState(animationName)===null){childArmature.animation.fadeIn(animationName);}}var isLocked=false;for(var k in animationData.animationTimelines){if(!this._lockUpdate){isLocked=true;this._lockUpdate=true;}var childAnimatiionState=this.fadeIn(k,animationConfig.fadeInTime,1,animationState.layer,null,0);if(childAnimatiionState!==null){childAnimatiionState.resetToPose=false;childAnimatiionState._parent=animationState;childAnimatiionState.stop();}}if(isLocked){this._lockUpdate=false;}if(!this._lockUpdate){if(animationConfig.fadeInTime<=0.0){this._armature.advanceTime(0.0);}this._lastAnimationState=animationState;}return animationState;};Animation.prototype.play=function(animationName,playTimes){if(animationName===void 0){animationName=null;}if(playTimes===void 0){playTimes=-1;}this._animationConfig.clear();this._animationConfig.resetToPose=true;this._animationConfig.playTimes=playTimes;this._animationConfig.fadeInTime=0.0;this._animationConfig.animation=animationName!==null?animationName:"";if(animationName!==null&&animationName.length>0){this.playConfig(this._animationConfig);}else if(this._lastAnimationState===null){var defaultAnimation=this._armature.armatureData.defaultAnimation;if(defaultAnimation!==null){this._animationConfig.animation=defaultAnimation.name;this.playConfig(this._animationConfig);}}else if(!this._lastAnimationState.isPlaying&&!this._lastAnimationState.isCompleted){this._lastAnimationState.play();}else {this._animationConfig.animation=this._lastAnimationState.name;this.playConfig(this._animationConfig);}return this._lastAnimationState;};Animation.prototype.fadeIn=function(animationName,fadeInTime,playTimes,layer,group,fadeOutMode){if(fadeInTime===void 0){fadeInTime=-1.0;}if(playTimes===void 0){playTimes=-1;}if(layer===void 0){layer=0;}if(group===void 0){group=null;}if(fadeOutMode===void 0){fadeOutMode=3;}this._animationConfig.clear();this._animationConfig.fadeOutMode=fadeOutMode;this._animationConfig.playTimes=playTimes;this._animationConfig.layer=layer;this._animationConfig.fadeInTime=fadeInTime;this._animationConfig.animation=animationName;this._animationConfig.group=group!==null?group:"";return this.playConfig(this._animationConfig);};Animation.prototype.gotoAndPlayByTime=function(animationName,time,playTimes){if(time===void 0){time=0.0;}if(playTimes===void 0){playTimes=-1;}this._animationConfig.clear();this._animationConfig.resetToPose=true;this._animationConfig.playTimes=playTimes;this._animationConfig.position=time;this._animationConfig.fadeInTime=0.0;this._animationConfig.animation=animationName;return this.playConfig(this._animationConfig);};Animation.prototype.gotoAndPlayByFrame=function(animationName,frame,playTimes){if(frame===void 0){frame=0;}if(playTimes===void 0){playTimes=-1;}this._animationConfig.clear();this._animationConfig.resetToPose=true;this._animationConfig.playTimes=playTimes;this._animationConfig.fadeInTime=0.0;this._animationConfig.animation=animationName;var animationData=animationName in this._animations?this._animations[animationName]:null;if(animationData!==null){this._animationConfig.position=animationData.duration*frame/animationData.frameCount;}return this.playConfig(this._animationConfig);};Animation.prototype.gotoAndPlayByProgress=function(animationName,progress,playTimes){if(progress===void 0){progress=0.0;}if(playTimes===void 0){playTimes=-1;}this._animationConfig.clear();this._animationConfig.resetToPose=true;this._animationConfig.playTimes=playTimes;this._animationConfig.fadeInTime=0.0;this._animationConfig.animation=animationName;var animationData=animationName in this._animations?this._animations[animationName]:null;if(animationData!==null){this._animationConfig.position=animationData.duration*(progress>0.0?progress:0.0);}return this.playConfig(this._animationConfig);};Animation.prototype.gotoAndStopByTime=function(animationName,time){if(time===void 0){time=0.0;}var animationState=this.gotoAndPlayByTime(animationName,time,1);if(animationState!==null){animationState.stop();}return animationState;};Animation.prototype.gotoAndStopByFrame=function(animationName,frame){if(frame===void 0){frame=0;}var animationState=this.gotoAndPlayByFrame(animationName,frame,1);if(animationState!==null){animationState.stop();}return animationState;};Animation.prototype.gotoAndStopByProgress=function(animationName,progress){if(progress===void 0){progress=0.0;}var animationState=this.gotoAndPlayByProgress(animationName,progress,1);if(animationState!==null){animationState.stop();}return animationState;};Animation.prototype.getState=function(animationName){var i=this._animationStates.length;while(i--){var animationState=this._animationStates[i];if(animationState.name===animationName){return animationState;}}return null;};Animation.prototype.hasAnimation=function(animationName){return animationName in this._animations;};Animation.prototype.getStates=function(){return this._animationStates;};Object.defineProperty(Animation.prototype,"isPlaying",{get:function(){for(var _i=0,_a=this._animationStates;_i<_a.length;_i++){var animationState=_a[_i];if(animationState.isPlaying){return true;}}return false;},enumerable:true,configurable:true});Object.defineProperty(Animation.prototype,"isCompleted",{get:function(){for(var _i=0,_a=this._animationStates;_i<_a.length;_i++){var animationState=_a[_i];if(!animationState.isCompleted){return false;}}return this._animationStates.length>0;},enumerable:true,configurable:true});Object.defineProperty(Animation.prototype,"lastAnimationName",{get:function(){return this._lastAnimationState!==null?this._lastAnimationState.name:"";},enumerable:true,configurable:true});Object.defineProperty(Animation.prototype,"animationNames",{get:function(){return this._animationNames;},enumerable:true,configurable:true});Object.defineProperty(Animation.prototype,"animations",{get:function(){return this._animations;},set:function(value){if(this._animations===value){return;}this._animationNames.length=0;for(var k in this._animations){delete this._animations[k];}for(var k in value){this._animationNames.push(k);this._animations[k]=value[k];}},enumerable:true,configurable:true});Object.defineProperty(Animation.prototype,"animationConfig",{get:function(){this._animationConfig.clear();return this._animationConfig;},enumerable:true,configurable:true});Object.defineProperty(Animation.prototype,"lastAnimationState",{get:function(){return this._lastAnimationState;},enumerable:true,configurable:true});Animation.prototype.gotoAndPlay=function(animationName,fadeInTime,duration,playTimes,layer,group,fadeOutMode,pauseFadeOut,pauseFadeIn){if(fadeInTime===void 0){fadeInTime=-1;}if(duration===void 0){duration=-1;}if(playTimes===void 0){playTimes=-1;}if(layer===void 0){layer=0;}if(group===void 0){group=null;}if(fadeOutMode===void 0){fadeOutMode=3;}console.warn("Deprecated.");this._animationConfig.clear();this._animationConfig.resetToPose=true;this._animationConfig.fadeOutMode=fadeOutMode;this._animationConfig.playTimes=playTimes;this._animationConfig.layer=layer;this._animationConfig.fadeInTime=fadeInTime;this._animationConfig.animation=animationName;this._animationConfig.group=group!==null?group:"";var animationData=this._animations[animationName];if(animationData&&duration>0.0){this._animationConfig.timeScale=animationData.duration/duration;}return this.playConfig(this._animationConfig);};Animation.prototype.gotoAndStop=function(animationName,time){if(time===void 0){time=0;}console.warn("Deprecated.");return this.gotoAndStopByTime(animationName,time);};Object.defineProperty(Animation.prototype,"animationList",{get:function(){console.warn("Deprecated.");return this._animationNames;},enumerable:true,configurable:true});Object.defineProperty(Animation.prototype,"animationDataList",{get:function(){console.warn("Deprecated.");var list=[];for(var i=0,l=this._animationNames.length;i<l;++i){list.push(this._animations[this._animationNames[i]]);}return list;},enumerable:true,configurable:true});return Animation;}(dragonBones.BaseObject);dragonBones.Animation=Animation;})(dragonBones$1||(dragonBones$1={}));(function(dragonBones){var AnimationState=function(_super){__extends(AnimationState,_super);function AnimationState(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this._blendState=new BlendState();_this._boneMask=[];_this._boneTimelines=[];_this._surfaceTimelines=[];_this._slotTimelines=[];_this._constraintTimelines=[];_this._animationTimelines=[];_this._poseTimelines=[];_this._bonePoses={};_this._actionTimeline=null;_this._zOrderTimeline=null;_this._parent=null;return _this;}AnimationState.toString=function(){return "[class dragonBones.AnimationState]";};AnimationState.prototype._onClear=function(){for(var _i=0,_a=this._boneTimelines;_i<_a.length;_i++){var timeline=_a[_i];timeline.returnToPool();}for(var _b=0,_c=this._surfaceTimelines;_b<_c.length;_b++){var timeline=_c[_b];timeline.returnToPool();}for(var _d=0,_e=this._slotTimelines;_d<_e.length;_d++){var timeline=_e[_d];timeline.returnToPool();}for(var _f=0,_g=this._constraintTimelines;_f<_g.length;_f++){var timeline=_g[_f];timeline.returnToPool();}for(var _h=0,_j=this._animationTimelines;_h<_j.length;_h++){var timeline=_j[_h];timeline.returnToPool();}for(var k in this._bonePoses){this._bonePoses[k].returnToPool();delete this._bonePoses[k];}if(this._actionTimeline!==null){this._actionTimeline.returnToPool();}if(this._zOrderTimeline!==null){this._zOrderTimeline.returnToPool();}this.actionEnabled=false;this.additiveBlending=false;this.displayControl=false;this.resetToPose=false;this.playTimes=1;this.layer=0;this.timeScale=1.0;this.weight=1.0;this.autoFadeOutTime=0.0;this.fadeTotalTime=0.0;this.name="";this.group="";this._timelineDirty=2;this._playheadState=0;this._fadeState=-1;this._subFadeState=-1;this._position=0.0;this._duration=0.0;this._fadeTime=0.0;this._time=0.0;this._fadeProgress=0.0;this._weightResult=0.0;this._blendState.clear();this._boneMask.length=0;this._boneTimelines.length=0;this._surfaceTimelines.length=0;this._slotTimelines.length=0;this._constraintTimelines.length=0;this._animationTimelines.length=0;this._poseTimelines.length=0;this._animationData=null;this._armature=null;this._actionTimeline=null;this._zOrderTimeline=null;this._parent=null;};AnimationState.prototype._updateTimelines=function(){{for(var _i=0,_a=this._armature._constraints;_i<_a.length;_i++){var constraint=_a[_i];var timelineDatas=this._animationData.getConstraintTimelines(constraint.name);if(timelineDatas!==null){for(var _b=0,timelineDatas_1=timelineDatas;_b<timelineDatas_1.length;_b++){var timelineData=timelineDatas_1[_b];switch(timelineData.type){case 30:{var timeline=dragonBones.BaseObject.borrowObject(dragonBones.IKConstraintTimelineState);timeline.constraint=constraint;timeline.init(this._armature,this,timelineData);this._constraintTimelines.push(timeline);break;}}}}else if(this.resetToPose){var timeline=dragonBones.BaseObject.borrowObject(dragonBones.IKConstraintTimelineState);timeline.constraint=constraint;timeline.init(this._armature,this,null);this._constraintTimelines.push(timeline);this._poseTimelines.push(timeline);}}}{for(var _c=0,_d=this._armature.animation.getStates();_c<_d.length;_c++){var animationState=_d[_c];if(animationState._parent!==this){continue;}var timelineDatas=this._animationData.getAnimationTimelines(animationState.name);if(timelineDatas===null){continue;}for(var _e=0,timelineDatas_2=timelineDatas;_e<timelineDatas_2.length;_e++){var timelineData=timelineDatas_2[_e];switch(timelineData.type){case 40:{var timeline=dragonBones.BaseObject.borrowObject(dragonBones.AnimationTimelineState);timeline.animationState=animationState;timeline.init(this._armature,this,timelineData);this._animationTimelines.push(timeline);break;}}}}}};AnimationState.prototype._updateBoneAndSlotTimelines=function(){{var boneTimelines={};for(var _i=0,_a=this._boneTimelines;_i<_a.length;_i++){var timeline=_a[_i];var timelineName=timeline.bone.name;if(!(timelineName in boneTimelines)){boneTimelines[timelineName]=[];}boneTimelines[timelineName].push(timeline);}for(var _b=0,_c=this._armature.getBones();_b<_c.length;_b++){var bone=_c[_b];var timelineName=bone.name;if(!this.containsBoneMask(timelineName)){continue;}if(timelineName in boneTimelines){delete boneTimelines[timelineName];}else if(bone._boneData.type===0){var timelineDatas=this._animationData.getBoneTimelines(timelineName);var bonePose=timelineName in this._bonePoses?this._bonePoses[timelineName]:this._bonePoses[timelineName]=dragonBones.BaseObject.borrowObject(BonePose);if(timelineDatas!==null){for(var _d=0,timelineDatas_3=timelineDatas;_d<timelineDatas_3.length;_d++){var timelineData=timelineDatas_3[_d];switch(timelineData.type){case 10:{var timeline=dragonBones.BaseObject.borrowObject(dragonBones.BoneAllTimelineState);timeline.bone=bone;timeline.bonePose=bonePose;timeline.init(this._armature,this,timelineData);this._boneTimelines.push(timeline);break;}case 11:{var timeline=dragonBones.BaseObject.borrowObject(dragonBones.BoneTranslateTimelineState);timeline.bone=bone;timeline.bonePose=bonePose;timeline.init(this._armature,this,timelineData);this._boneTimelines.push(timeline);break;}case 12:{var timeline=dragonBones.BaseObject.borrowObject(dragonBones.BoneRotateTimelineState);timeline.bone=bone;timeline.bonePose=bonePose;timeline.init(this._armature,this,timelineData);this._boneTimelines.push(timeline);break;}case 13:{var timeline=dragonBones.BaseObject.borrowObject(dragonBones.BoneScaleTimelineState);timeline.bone=bone;timeline.bonePose=bonePose;timeline.init(this._armature,this,timelineData);this._boneTimelines.push(timeline);break;}}}}else if(this.resetToPose){var timeline=dragonBones.BaseObject.borrowObject(dragonBones.BoneAllTimelineState);timeline.bone=bone;timeline.bonePose=bonePose;timeline.init(this._armature,this,null);this._boneTimelines.push(timeline);this._poseTimelines.push(timeline);}}else if(bone._boneData.type===1){var timelineDatas=this._animationData.getSurfaceTimelines(timelineName);if(timelineDatas!==null){for(var _e=0,timelineDatas_4=timelineDatas;_e<timelineDatas_4.length;_e++){var timelineData=timelineDatas_4[_e];switch(timelineData.type){case 50:{var timeline=dragonBones.BaseObject.borrowObject(dragonBones.SurfaceTimelineState);timeline.surface=bone;timeline.init(this._armature,this,timelineData);this._surfaceTimelines.push(timeline);break;}}}}else if(this.resetToPose){var timeline=dragonBones.BaseObject.borrowObject(dragonBones.SurfaceTimelineState);timeline.surface=bone;timeline.init(this._armature,this,null);this._surfaceTimelines.push(timeline);this._poseTimelines.push(timeline);}}}for(var k in boneTimelines){for(var _f=0,_g=boneTimelines[k];_f<_g.length;_f++){var timeline=_g[_f];this._boneTimelines.splice(this._boneTimelines.indexOf(timeline),1);timeline.returnToPool();}}}{var slotTimelines={};var ffdFlags=[];for(var _h=0,_j=this._slotTimelines;_h<_j.length;_h++){var timeline=_j[_h];var timelineName=timeline.slot.name;if(!(timelineName in slotTimelines)){slotTimelines[timelineName]=[];}slotTimelines[timelineName].push(timeline);}for(var _k=0,_l=this._armature.getSlots();_k<_l.length;_k++){var slot=_l[_k];var boneName=slot.parent.name;if(!this.containsBoneMask(boneName)){continue;}var timelineName=slot.name;var timelineDatas=this._animationData.getSlotTimelines(timelineName);if(timelineName in slotTimelines){delete slotTimelines[timelineName];}else {var displayIndexFlag=false;var colorFlag=false;ffdFlags.length=0;if(timelineDatas!==null){for(var _m=0,timelineDatas_5=timelineDatas;_m<timelineDatas_5.length;_m++){var timelineData=timelineDatas_5[_m];switch(timelineData.type){case 20:{var timeline=dragonBones.BaseObject.borrowObject(dragonBones.SlotDislayTimelineState);timeline.slot=slot;timeline.init(this._armature,this,timelineData);this._slotTimelines.push(timeline);displayIndexFlag=true;break;}case 21:{var timeline=dragonBones.BaseObject.borrowObject(dragonBones.SlotColorTimelineState);timeline.slot=slot;timeline.init(this._armature,this,timelineData);this._slotTimelines.push(timeline);colorFlag=true;break;}case 22:{var timeline=dragonBones.BaseObject.borrowObject(dragonBones.DeformTimelineState);timeline.slot=slot;timeline.init(this._armature,this,timelineData);this._slotTimelines.push(timeline);ffdFlags.push(timeline.vertexOffset);break;}}}}if(this.resetToPose){if(!displayIndexFlag){var timeline=dragonBones.BaseObject.borrowObject(dragonBones.SlotDislayTimelineState);timeline.slot=slot;timeline.init(this._armature,this,null);this._slotTimelines.push(timeline);this._poseTimelines.push(timeline);}if(!colorFlag){var timeline=dragonBones.BaseObject.borrowObject(dragonBones.SlotColorTimelineState);timeline.slot=slot;timeline.init(this._armature,this,null);this._slotTimelines.push(timeline);this._poseTimelines.push(timeline);}if(slot.rawDisplayDatas!==null){for(var _o=0,_p=slot.rawDisplayDatas;_o<_p.length;_o++){var displayData=_p[_o];if(displayData!==null&&displayData.type===2){var meshOffset=displayData.vertices.offset;if(ffdFlags.indexOf(meshOffset)<0){var timeline=dragonBones.BaseObject.borrowObject(dragonBones.DeformTimelineState);timeline.vertexOffset=meshOffset;timeline.slot=slot;timeline.init(this._armature,this,null);this._slotTimelines.push(timeline);this._poseTimelines.push(timeline);}}}}}}}for(var k in slotTimelines){for(var _q=0,_r=slotTimelines[k];_q<_r.length;_q++){var timeline=_r[_q];this._slotTimelines.splice(this._slotTimelines.indexOf(timeline),1);timeline.returnToPool();}}}};AnimationState.prototype._advanceFadeTime=function(passedTime){var isFadeOut=this._fadeState>0;if(this._subFadeState<0){this._subFadeState=0;var eventType=isFadeOut?dragonBones.EventObject.FADE_OUT:dragonBones.EventObject.FADE_IN;if(this._armature.eventDispatcher.hasDBEventListener(eventType)){var eventObject=dragonBones.BaseObject.borrowObject(dragonBones.EventObject);eventObject.type=eventType;eventObject.armature=this._armature;eventObject.animationState=this;this._armature._dragonBones.bufferEvent(eventObject);}}if(passedTime<0.0){passedTime=-passedTime;}this._fadeTime+=passedTime;if(this._fadeTime>=this.fadeTotalTime){this._subFadeState=1;this._fadeProgress=isFadeOut?0.0:1.0;}else if(this._fadeTime>0.0){this._fadeProgress=isFadeOut?1.0-this._fadeTime/this.fadeTotalTime:this._fadeTime/this.fadeTotalTime;}else {this._fadeProgress=isFadeOut?1.0:0.0;}if(this._subFadeState>0){if(!isFadeOut){this._playheadState|=1;this._fadeState=0;}var eventType=isFadeOut?dragonBones.EventObject.FADE_OUT_COMPLETE:dragonBones.EventObject.FADE_IN_COMPLETE;if(this._armature.eventDispatcher.hasDBEventListener(eventType)){var eventObject=dragonBones.BaseObject.borrowObject(dragonBones.EventObject);eventObject.type=eventType;eventObject.armature=this._armature;eventObject.animationState=this;this._armature._dragonBones.bufferEvent(eventObject);}}};AnimationState.prototype.init=function(armature,animationData,animationConfig){if(this._armature!==null){return;}this._armature=armature;this._animationData=animationData;this.resetToPose=animationConfig.resetToPose;this.additiveBlending=animationConfig.additiveBlending;this.displayControl=animationConfig.displayControl;this.actionEnabled=animationConfig.actionEnabled;this.layer=animationConfig.layer;this.playTimes=animationConfig.playTimes;this.timeScale=animationConfig.timeScale;this.fadeTotalTime=animationConfig.fadeInTime;this.autoFadeOutTime=animationConfig.autoFadeOutTime;this.weight=animationConfig.weight;this.name=animationConfig.name.length>0?animationConfig.name:animationConfig.animation;this.group=animationConfig.group;if(animationConfig.pauseFadeIn){this._playheadState=2;}else {this._playheadState=3;}if(animationConfig.duration<0.0){this._position=0.0;this._duration=this._animationData.duration;if(animationConfig.position!==0.0){if(this.timeScale>=0.0){this._time=animationConfig.position;}else {this._time=animationConfig.position-this._duration;}}else {this._time=0.0;}}else {this._position=animationConfig.position;this._duration=animationConfig.duration;this._time=0.0;}if(this.timeScale<0.0&&this._time===0.0){this._time=-0.000001;}if(this.fadeTotalTime<=0.0){this._fadeProgress=0.999999;}if(animationConfig.boneMask.length>0){this._boneMask.length=animationConfig.boneMask.length;for(var i=0,l=this._boneMask.length;i<l;++i){this._boneMask[i]=animationConfig.boneMask[i];}}this._actionTimeline=dragonBones.BaseObject.borrowObject(dragonBones.ActionTimelineState);this._actionTimeline.init(this._armature,this,this._animationData.actionTimeline);this._actionTimeline.currentTime=this._time;if(this._actionTimeline.currentTime<0.0){this._actionTimeline.currentTime=this._duration-this._actionTimeline.currentTime;}if(this._animationData.zOrderTimeline!==null){this._zOrderTimeline=dragonBones.BaseObject.borrowObject(dragonBones.ZOrderTimelineState);this._zOrderTimeline.init(this._armature,this,this._animationData.zOrderTimeline);}};AnimationState.prototype.advanceTime=function(passedTime,cacheFrameRate){this._blendState.dirty=false;if(this._fadeState!==0||this._subFadeState!==0){this._advanceFadeTime(passedTime);}if(this._playheadState===3){if(this.timeScale!==1.0){passedTime*=this.timeScale;}this._time+=passedTime;}if(this._timelineDirty!==0){if(this._timelineDirty===2){this._updateTimelines();}this._timelineDirty=0;this._updateBoneAndSlotTimelines();}if(this.weight===0.0){return;}var isCacheEnabled=this._fadeState===0&&cacheFrameRate>0.0;var isUpdateTimeline=true;var isUpdateBoneTimeline=true;var time=this._time;this._weightResult=this.weight*this._fadeProgress;if(this._parent!==null){this._weightResult*=this._parent._weightResult/this._parent._fadeProgress;}if(this._actionTimeline.playState<=0){this._actionTimeline.update(time);}if(isCacheEnabled){var internval=cacheFrameRate*2.0;this._actionTimeline.currentTime=Math.floor(this._actionTimeline.currentTime*internval)/internval;}if(this._zOrderTimeline!==null&&this._zOrderTimeline.playState<=0){this._zOrderTimeline.update(time);}if(isCacheEnabled){var cacheFrameIndex=Math.floor(this._actionTimeline.currentTime*cacheFrameRate);if(this._armature._cacheFrameIndex===cacheFrameIndex){isUpdateTimeline=false;isUpdateBoneTimeline=false;}else {this._armature._cacheFrameIndex=cacheFrameIndex;if(this._animationData.cachedFrames[cacheFrameIndex]){isUpdateBoneTimeline=false;}else {this._animationData.cachedFrames[cacheFrameIndex]=true;}}}if(isUpdateTimeline){if(isUpdateBoneTimeline){for(var i=0,l=this._boneTimelines.length;i<l;++i){var timeline=this._boneTimelines[i];if(timeline.playState<=0){timeline.update(time);}if(i===l-1||timeline.bone!==this._boneTimelines[i+1].bone){var state=timeline.bone._blendState.update(this._weightResult,this.layer);if(state!==0){timeline.blend(state);}}}}for(var i=0,l=this._surfaceTimelines.length;i<l;++i){var timeline=this._surfaceTimelines[i];var state=timeline.surface._blendState.update(this._weightResult,this.layer);if(timeline.playState<=0){timeline.update(time);}if(state!==0){timeline.blend(state);}}if(this.displayControl){for(var i=0,l=this._slotTimelines.length;i<l;++i){var timeline=this._slotTimelines[i];var displayController=timeline.slot.displayController;if(displayController===null||displayController===this.name||displayController===this.group){if(timeline.playState<=0){timeline.update(time);}}}}for(var i=0,l=this._constraintTimelines.length;i<l;++i){var timeline=this._constraintTimelines[i];if(timeline.playState<=0){timeline.update(time);}}for(var i=0,l=this._animationTimelines.length;i<l;++i){var timeline=this._animationTimelines[i];var state=timeline.animationState._blendState.update(this._weightResult,this.layer);if(timeline.playState<=0){timeline.update(time);}if(state!==0){timeline.blend(state);}}}if(this._fadeState===0){if(this._subFadeState>0){this._subFadeState=0;if(this._poseTimelines.length>0){for(var _i=0,_a=this._poseTimelines;_i<_a.length;_i++){var timeline=_a[_i];if(timeline instanceof dragonBones.BoneTimelineState){this._boneTimelines.splice(this._boneTimelines.indexOf(timeline),1);}else if(timeline instanceof dragonBones.SurfaceTimelineState){this._surfaceTimelines.splice(this._surfaceTimelines.indexOf(timeline),1);}else if(timeline instanceof dragonBones.SlotTimelineState){this._slotTimelines.splice(this._slotTimelines.indexOf(timeline),1);}else if(timeline instanceof dragonBones.ConstraintTimelineState){this._constraintTimelines.splice(this._constraintTimelines.indexOf(timeline),1);}timeline.returnToPool();}this._poseTimelines.length=0;}}if(this._actionTimeline.playState>0){if(this.autoFadeOutTime>=0.0){this.fadeOut(this.autoFadeOutTime);}}}};AnimationState.prototype.play=function(){this._playheadState=3;};AnimationState.prototype.stop=function(){this._playheadState&=1;};AnimationState.prototype.fadeOut=function(fadeOutTime,pausePlayhead){if(pausePlayhead===void 0){pausePlayhead=true;}if(fadeOutTime<0.0){fadeOutTime=0.0;}if(pausePlayhead){this._playheadState&=2;}if(this._fadeState>0){if(fadeOutTime>this.fadeTotalTime-this._fadeTime){return;}}else {this._fadeState=1;this._subFadeState=-1;if(fadeOutTime<=0.0||this._fadeProgress<=0.0){this._fadeProgress=0.000001;}for(var _i=0,_a=this._boneTimelines;_i<_a.length;_i++){var timeline=_a[_i];timeline.fadeOut();}for(var _b=0,_c=this._surfaceTimelines;_b<_c.length;_b++){var timeline=_c[_b];timeline.fadeOut();}for(var _d=0,_e=this._slotTimelines;_d<_e.length;_d++){var timeline=_e[_d];timeline.fadeOut();}for(var _f=0,_g=this._constraintTimelines;_f<_g.length;_f++){var timeline=_g[_f];timeline.fadeOut();}for(var _h=0,_j=this._animationTimelines;_h<_j.length;_h++){var timeline=_j[_h];timeline.animationState.fadeOut(fadeOutTime,pausePlayhead);timeline.fadeOut();}}this.displayControl=false;this.fadeTotalTime=this._fadeProgress>0.000001?fadeOutTime/this._fadeProgress:0.0;this._fadeTime=this.fadeTotalTime*(1.0-this._fadeProgress);};AnimationState.prototype.containsBoneMask=function(boneName){return this._boneMask.length===0||this._boneMask.indexOf(boneName)>=0;};AnimationState.prototype.addBoneMask=function(boneName,recursive){if(recursive===void 0){recursive=true;}var currentBone=this._armature.getBone(boneName);if(currentBone===null){return;}if(this._boneMask.indexOf(boneName)<0){this._boneMask.push(boneName);}if(recursive){for(var _i=0,_a=this._armature.getBones();_i<_a.length;_i++){var bone=_a[_i];if(this._boneMask.indexOf(bone.name)<0&&currentBone.contains(bone)){this._boneMask.push(bone.name);}}}this._timelineDirty=1;};AnimationState.prototype.removeBoneMask=function(boneName,recursive){if(recursive===void 0){recursive=true;}var index=this._boneMask.indexOf(boneName);if(index>=0){this._boneMask.splice(index,1);}if(recursive){var currentBone=this._armature.getBone(boneName);if(currentBone!==null){var bones=this._armature.getBones();if(this._boneMask.length>0){for(var _i=0,bones_1=bones;_i<bones_1.length;_i++){var bone=bones_1[_i];var index_2=this._boneMask.indexOf(bone.name);if(index_2>=0&&currentBone.contains(bone)){this._boneMask.splice(index_2,1);}}}else {for(var _a=0,bones_2=bones;_a<bones_2.length;_a++){var bone=bones_2[_a];if(bone===currentBone){continue;}if(!currentBone.contains(bone)){this._boneMask.push(bone.name);}}}}}this._timelineDirty=1;};AnimationState.prototype.removeAllBoneMask=function(){this._boneMask.length=0;this._timelineDirty=1;};Object.defineProperty(AnimationState.prototype,"isFadeIn",{get:function(){return this._fadeState<0;},enumerable:true,configurable:true});Object.defineProperty(AnimationState.prototype,"isFadeOut",{get:function(){return this._fadeState>0;},enumerable:true,configurable:true});Object.defineProperty(AnimationState.prototype,"isFadeComplete",{get:function(){return this._fadeState===0;},enumerable:true,configurable:true});Object.defineProperty(AnimationState.prototype,"isPlaying",{get:function(){return (this._playheadState&2)!==0&&this._actionTimeline.playState<=0;},enumerable:true,configurable:true});Object.defineProperty(AnimationState.prototype,"isCompleted",{get:function(){return this._actionTimeline.playState>0;},enumerable:true,configurable:true});Object.defineProperty(AnimationState.prototype,"currentPlayTimes",{get:function(){return this._actionTimeline.currentPlayTimes;},enumerable:true,configurable:true});Object.defineProperty(AnimationState.prototype,"totalTime",{get:function(){return this._duration;},enumerable:true,configurable:true});Object.defineProperty(AnimationState.prototype,"currentTime",{get:function(){return this._actionTimeline.currentTime;},set:function(value){var currentPlayTimes=this._actionTimeline.currentPlayTimes-(this._actionTimeline.playState>0?1:0);if(value<0||this._duration<value){value=value%this._duration+currentPlayTimes*this._duration;if(value<0){value+=this._duration;}}if(this.playTimes>0&&currentPlayTimes===this.playTimes-1&&value===this._duration){value=this._duration-0.000001;}if(this._time===value){return;}this._time=value;this._actionTimeline.setCurrentTime(this._time);if(this._zOrderTimeline!==null){this._zOrderTimeline.playState=-1;}for(var _i=0,_a=this._boneTimelines;_i<_a.length;_i++){var timeline=_a[_i];timeline.playState=-1;}for(var _b=0,_c=this._slotTimelines;_b<_c.length;_b++){var timeline=_c[_b];timeline.playState=-1;}},enumerable:true,configurable:true});Object.defineProperty(AnimationState.prototype,"animationData",{get:function(){return this._animationData;},enumerable:true,configurable:true});return AnimationState;}(dragonBones.BaseObject);dragonBones.AnimationState=AnimationState;var BonePose=function(_super){__extends(BonePose,_super);function BonePose(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.current=new dragonBones.Transform();_this.delta=new dragonBones.Transform();_this.result=new dragonBones.Transform();return _this;}BonePose.toString=function(){return "[class dragonBones.BonePose]";};BonePose.prototype._onClear=function(){this.current.identity();this.delta.identity();this.result.identity();};return BonePose;}(dragonBones.BaseObject);dragonBones.BonePose=BonePose;var BlendState=function(){function BlendState(){}BlendState.prototype.update=function(weight,p_layer){if(this.dirty){if(this.leftWeight>0.0){if(this.layer!==p_layer){if(this.layerWeight>=this.leftWeight){this.leftWeight=0.0;return 0;}else {this.layer=p_layer;this.leftWeight-=this.layerWeight;this.layerWeight=0.0;}}}else {return 0;}weight*=this.leftWeight;this.layerWeight+=weight;this.blendWeight=weight;return 2;}this.dirty=true;this.layer=p_layer;this.layerWeight=weight;this.leftWeight=1.0;this.blendWeight=weight;return 1;};BlendState.prototype.clear=function(){this.dirty=false;this.layer=0;this.leftWeight=0.0;this.layerWeight=0.0;this.blendWeight=0.0;};return BlendState;}();dragonBones.BlendState=BlendState;})(dragonBones$1||(dragonBones$1={}));(function(dragonBones){var TimelineState=function(_super){__extends(TimelineState,_super);function TimelineState(){return _super!==null&&_super.apply(this,arguments)||this;}TimelineState.prototype._onClear=function(){this.playState=-1;this.currentPlayTimes=-1;this.currentTime=-1.0;this._tweenState=0;this._frameRate=0;this._frameValueOffset=0;this._frameCount=0;this._frameOffset=0;this._frameIndex=-1;this._frameRateR=0.0;this._position=0.0;this._duration=0.0;this._timeScale=1.0;this._timeOffset=0.0;this._dragonBonesData=null;this._animationData=null;this._timelineData=null;this._armature=null;this._animationState=null;this._actionTimeline=null;this._frameArray=null;this._frameIntArray=null;this._frameFloatArray=null;this._timelineArray=null;this._frameIndices=null;};TimelineState.prototype._setCurrentTime=function(passedTime){var prevState=this.playState;var prevPlayTimes=this.currentPlayTimes;var prevTime=this.currentTime;if(this._actionTimeline!==null&&this._frameCount<=1){this.playState=this._actionTimeline.playState>=0?1:-1;this.currentPlayTimes=1;this.currentTime=this._actionTimeline.currentTime;}else if(this._actionTimeline===null||this._timeScale!==1.0||this._timeOffset!==0.0){var playTimes=this._animationState.playTimes;var totalTime=playTimes*this._duration;passedTime*=this._timeScale;if(this._timeOffset!==0.0){passedTime+=this._timeOffset*this._animationData.duration;}if(playTimes>0&&(passedTime>=totalTime||passedTime<=-totalTime)){if(this.playState<=0&&this._animationState._playheadState===3){this.playState=1;}this.currentPlayTimes=playTimes;if(passedTime<0.0){this.currentTime=0.0;}else {this.currentTime=this._duration+0.000001;}}else {if(this.playState!==0&&this._animationState._playheadState===3){this.playState=0;}if(passedTime<0.0){passedTime=-passedTime;this.currentPlayTimes=Math.floor(passedTime/this._duration);this.currentTime=this._duration-passedTime%this._duration;}else {this.currentPlayTimes=Math.floor(passedTime/this._duration);this.currentTime=passedTime%this._duration;}}this.currentTime+=this._position;}else {this.playState=this._actionTimeline.playState;this.currentPlayTimes=this._actionTimeline.currentPlayTimes;this.currentTime=this._actionTimeline.currentTime;}if(this.currentPlayTimes===prevPlayTimes&&this.currentTime===prevTime){return false;}if(prevState<0&&this.playState!==prevState||this.playState<=0&&this.currentPlayTimes!==prevPlayTimes){this._frameIndex=-1;}return true;};TimelineState.prototype.init=function(armature,animationState,timelineData){this._armature=armature;this._animationState=animationState;this._timelineData=timelineData;this._actionTimeline=this._animationState._actionTimeline;if(this===this._actionTimeline){this._actionTimeline=null;}this._animationData=this._animationState._animationData;this._frameRate=this._animationData.parent.frameRate;this._frameRateR=1.0/this._frameRate;this._position=this._animationState._position;this._duration=this._animationState._duration;this._dragonBonesData=this._animationData.parent.parent;if(this._timelineData!==null){this._frameIntArray=this._dragonBonesData.frameIntArray;this._frameFloatArray=this._dragonBonesData.frameFloatArray;this._frameArray=this._dragonBonesData.frameArray;this._timelineArray=this._dragonBonesData.timelineArray;this._frameIndices=this._dragonBonesData.frameIndices;this._frameCount=this._timelineArray[this._timelineData.offset+2];this._frameValueOffset=this._timelineArray[this._timelineData.offset+4];this._timeScale=100.0/this._timelineArray[this._timelineData.offset+0];this._timeOffset=this._timelineArray[this._timelineData.offset+1]*0.01;}};TimelineState.prototype.fadeOut=function(){};TimelineState.prototype.update=function(passedTime){if(this._setCurrentTime(passedTime)){if(this._frameCount>1){var timelineFrameIndex=Math.floor(this.currentTime*this._frameRate);var frameIndex=this._frameIndices[this._timelineData.frameIndicesOffset+timelineFrameIndex];if(this._frameIndex!==frameIndex){this._frameIndex=frameIndex;this._frameOffset=this._animationData.frameOffset+this._timelineArray[this._timelineData.offset+5+this._frameIndex];this._onArriveAtFrame();}}else if(this._frameIndex<0){this._frameIndex=0;if(this._timelineData!==null){this._frameOffset=this._animationData.frameOffset+this._timelineArray[this._timelineData.offset+5];}this._onArriveAtFrame();}if(this._tweenState!==0){this._onUpdateFrame();}}};return TimelineState;}(dragonBones.BaseObject);dragonBones.TimelineState=TimelineState;var TweenTimelineState=function(_super){__extends(TweenTimelineState,_super);function TweenTimelineState(){return _super!==null&&_super.apply(this,arguments)||this;}TweenTimelineState._getEasingValue=function(tweenType,progress,easing){var value=progress;switch(tweenType){case 3:value=Math.pow(progress,2.0);break;case 4:value=1.0-Math.pow(1.0-progress,2.0);break;case 5:value=0.5*(1.0-Math.cos(progress*Math.PI));break;}return (value-progress)*easing+progress;};TweenTimelineState._getEasingCurveValue=function(progress,samples,count,offset){if(progress<=0.0){return 0.0;}else if(progress>=1.0){return 1.0;}var segmentCount=count+1;var valueIndex=Math.floor(progress*segmentCount);var fromValue=valueIndex===0?0.0:samples[offset+valueIndex-1];var toValue=valueIndex===segmentCount-1?10000.0:samples[offset+valueIndex];return (fromValue+(toValue-fromValue)*(progress*segmentCount-valueIndex))*0.0001;};TweenTimelineState.prototype._onClear=function(){_super.prototype._onClear.call(this);this._tweenType=0;this._curveCount=0;this._framePosition=0.0;this._frameDurationR=0.0;this._tweenProgress=0.0;this._tweenEasing=0.0;};TweenTimelineState.prototype._onArriveAtFrame=function(){if(this._frameCount>1&&(this._frameIndex!==this._frameCount-1||this._animationState.playTimes===0||this._animationState.currentPlayTimes<this._animationState.playTimes-1)){this._tweenType=this._frameArray[this._frameOffset+1];this._tweenState=this._tweenType===0?1:2;if(this._tweenType===2){this._curveCount=this._frameArray[this._frameOffset+2];}else if(this._tweenType!==0&&this._tweenType!==1){this._tweenEasing=this._frameArray[this._frameOffset+2]*0.01;}this._framePosition=this._frameArray[this._frameOffset]*this._frameRateR;if(this._frameIndex===this._frameCount-1){this._frameDurationR=1.0/(this._animationData.duration-this._framePosition);}else {var nextFrameOffset=this._animationData.frameOffset+this._timelineArray[this._timelineData.offset+5+this._frameIndex+1];var frameDuration=this._frameArray[nextFrameOffset]*this._frameRateR-this._framePosition;if(frameDuration>0){this._frameDurationR=1.0/frameDuration;}else {this._frameDurationR=0.0;}}}else {this._tweenState=1;}};TweenTimelineState.prototype._onUpdateFrame=function(){if(this._tweenState===2){this._tweenProgress=(this.currentTime-this._framePosition)*this._frameDurationR;if(this._tweenType===2){this._tweenProgress=TweenTimelineState._getEasingCurveValue(this._tweenProgress,this._frameArray,this._curveCount,this._frameOffset+3);}else if(this._tweenType!==1){this._tweenProgress=TweenTimelineState._getEasingValue(this._tweenType,this._tweenProgress,this._tweenEasing);}}else {this._tweenProgress=0.0;}};return TweenTimelineState;}(TimelineState);dragonBones.TweenTimelineState=TweenTimelineState;var BoneTimelineState=function(_super){__extends(BoneTimelineState,_super);function BoneTimelineState(){return _super!==null&&_super.apply(this,arguments)||this;}BoneTimelineState.prototype._onClear=function(){_super.prototype._onClear.call(this);this.bone=null;this.bonePose=null;};BoneTimelineState.prototype.blend=function(state){var blendWeight=this.bone._blendState.blendWeight;var animationPose=this.bone.animationPose;var result=this.bonePose.result;if(state===2){animationPose.x+=result.x*blendWeight;animationPose.y+=result.y*blendWeight;animationPose.rotation+=result.rotation*blendWeight;animationPose.skew+=result.skew*blendWeight;animationPose.scaleX+=(result.scaleX-1.0)*blendWeight;animationPose.scaleY+=(result.scaleY-1.0)*blendWeight;}else if(blendWeight!==1.0){animationPose.x=result.x*blendWeight;animationPose.y=result.y*blendWeight;animationPose.rotation=result.rotation*blendWeight;animationPose.skew=result.skew*blendWeight;animationPose.scaleX=(result.scaleX-1.0)*blendWeight+1.0;animationPose.scaleY=(result.scaleY-1.0)*blendWeight+1.0;}else {animationPose.x=result.x;animationPose.y=result.y;animationPose.rotation=result.rotation;animationPose.skew=result.skew;animationPose.scaleX=result.scaleX;animationPose.scaleY=result.scaleY;}if(this._animationState._fadeState!==0||this._animationState._subFadeState!==0){this.bone._transformDirty=true;}};return BoneTimelineState;}(TweenTimelineState);dragonBones.BoneTimelineState=BoneTimelineState;var SlotTimelineState=function(_super){__extends(SlotTimelineState,_super);function SlotTimelineState(){return _super!==null&&_super.apply(this,arguments)||this;}SlotTimelineState.prototype._onClear=function(){_super.prototype._onClear.call(this);this.slot=null;};return SlotTimelineState;}(TweenTimelineState);dragonBones.SlotTimelineState=SlotTimelineState;var ConstraintTimelineState=function(_super){__extends(ConstraintTimelineState,_super);function ConstraintTimelineState(){return _super!==null&&_super.apply(this,arguments)||this;}ConstraintTimelineState.prototype._onClear=function(){_super.prototype._onClear.call(this);this.constraint=null;};return ConstraintTimelineState;}(TweenTimelineState);dragonBones.ConstraintTimelineState=ConstraintTimelineState;})(dragonBones$1||(dragonBones$1={}));(function(dragonBones){var ActionTimelineState=function(_super){__extends(ActionTimelineState,_super);function ActionTimelineState(){return _super!==null&&_super.apply(this,arguments)||this;}ActionTimelineState.toString=function(){return "[class dragonBones.ActionTimelineState]";};ActionTimelineState.prototype._onCrossFrame=function(frameIndex){var eventDispatcher=this._armature.eventDispatcher;if(this._animationState.actionEnabled){var frameOffset=this._animationData.frameOffset+this._timelineArray[this._timelineData.offset+5+frameIndex];var actionCount=this._frameArray[frameOffset+1];var actions=this._animationData.parent.actions;for(var i=0;i<actionCount;++i){var actionIndex=this._frameArray[frameOffset+2+i];var action=actions[actionIndex];if(action.type===0){var eventObject=dragonBones.BaseObject.borrowObject(dragonBones.EventObject);eventObject.time=this._frameArray[frameOffset]/this._frameRate;eventObject.animationState=this._animationState;dragonBones.EventObject.actionDataToInstance(action,eventObject,this._armature);this._armature._bufferAction(eventObject,true);}else {var eventType=action.type===10?dragonBones.EventObject.FRAME_EVENT:dragonBones.EventObject.SOUND_EVENT;if(action.type===11||eventDispatcher.hasDBEventListener(eventType)){var eventObject=dragonBones.BaseObject.borrowObject(dragonBones.EventObject);eventObject.time=this._frameArray[frameOffset]/this._frameRate;eventObject.animationState=this._animationState;dragonBones.EventObject.actionDataToInstance(action,eventObject,this._armature);this._armature._dragonBones.bufferEvent(eventObject);}}}}};ActionTimelineState.prototype._onArriveAtFrame=function(){};ActionTimelineState.prototype._onUpdateFrame=function(){};ActionTimelineState.prototype.update=function(passedTime){var prevState=this.playState;var prevPlayTimes=this.currentPlayTimes;var prevTime=this.currentTime;if(this._setCurrentTime(passedTime)){var eventDispatcher=this._armature.eventDispatcher;if(prevState<0){if(this.playState!==prevState){if(this._animationState.displayControl&&this._animationState.resetToPose){this._armature._sortZOrder(null,0);}prevPlayTimes=this.currentPlayTimes;if(eventDispatcher.hasDBEventListener(dragonBones.EventObject.START)){var eventObject=dragonBones.BaseObject.borrowObject(dragonBones.EventObject);eventObject.type=dragonBones.EventObject.START;eventObject.armature=this._armature;eventObject.animationState=this._animationState;this._armature._dragonBones.bufferEvent(eventObject);}}else {return;}}var isReverse=this._animationState.timeScale<0.0;var loopCompleteEvent=null;var completeEvent=null;if(this.currentPlayTimes!==prevPlayTimes){if(eventDispatcher.hasDBEventListener(dragonBones.EventObject.LOOP_COMPLETE)){loopCompleteEvent=dragonBones.BaseObject.borrowObject(dragonBones.EventObject);loopCompleteEvent.type=dragonBones.EventObject.LOOP_COMPLETE;loopCompleteEvent.armature=this._armature;loopCompleteEvent.animationState=this._animationState;}if(this.playState>0){if(eventDispatcher.hasDBEventListener(dragonBones.EventObject.COMPLETE)){completeEvent=dragonBones.BaseObject.borrowObject(dragonBones.EventObject);completeEvent.type=dragonBones.EventObject.COMPLETE;completeEvent.armature=this._armature;completeEvent.animationState=this._animationState;}}}if(this._frameCount>1){var timelineData=this._timelineData;var timelineFrameIndex=Math.floor(this.currentTime*this._frameRate);var frameIndex=this._frameIndices[timelineData.frameIndicesOffset+timelineFrameIndex];if(this._frameIndex!==frameIndex){var crossedFrameIndex=this._frameIndex;this._frameIndex=frameIndex;if(this._timelineArray!==null){this._frameOffset=this._animationData.frameOffset+this._timelineArray[timelineData.offset+5+this._frameIndex];if(isReverse){if(crossedFrameIndex<0){var prevFrameIndex=Math.floor(prevTime*this._frameRate);crossedFrameIndex=this._frameIndices[timelineData.frameIndicesOffset+prevFrameIndex];if(this.currentPlayTimes===prevPlayTimes){if(crossedFrameIndex===frameIndex){crossedFrameIndex=-1;}}}while(crossedFrameIndex>=0){var frameOffset=this._animationData.frameOffset+this._timelineArray[timelineData.offset+5+crossedFrameIndex];var framePosition=this._frameArray[frameOffset]/this._frameRate;if(this._position<=framePosition&&framePosition<=this._position+this._duration){this._onCrossFrame(crossedFrameIndex);}if(loopCompleteEvent!==null&&crossedFrameIndex===0){this._armature._dragonBones.bufferEvent(loopCompleteEvent);loopCompleteEvent=null;}if(crossedFrameIndex>0){crossedFrameIndex--;}else {crossedFrameIndex=this._frameCount-1;}if(crossedFrameIndex===frameIndex){break;}}}else {if(crossedFrameIndex<0){var prevFrameIndex=Math.floor(prevTime*this._frameRate);crossedFrameIndex=this._frameIndices[timelineData.frameIndicesOffset+prevFrameIndex];var frameOffset=this._animationData.frameOffset+this._timelineArray[timelineData.offset+5+crossedFrameIndex];var framePosition=this._frameArray[frameOffset]/this._frameRate;if(this.currentPlayTimes===prevPlayTimes){if(prevTime<=framePosition){if(crossedFrameIndex>0){crossedFrameIndex--;}else {crossedFrameIndex=this._frameCount-1;}}else if(crossedFrameIndex===frameIndex){crossedFrameIndex=-1;}}}while(crossedFrameIndex>=0){if(crossedFrameIndex<this._frameCount-1){crossedFrameIndex++;}else {crossedFrameIndex=0;}var frameOffset=this._animationData.frameOffset+this._timelineArray[timelineData.offset+5+crossedFrameIndex];var framePosition=this._frameArray[frameOffset]/this._frameRate;if(this._position<=framePosition&&framePosition<=this._position+this._duration){this._onCrossFrame(crossedFrameIndex);}if(loopCompleteEvent!==null&&crossedFrameIndex===0){this._armature._dragonBones.bufferEvent(loopCompleteEvent);loopCompleteEvent=null;}if(crossedFrameIndex===frameIndex){break;}}}}}}else if(this._frameIndex<0){this._frameIndex=0;if(this._timelineData!==null){this._frameOffset=this._animationData.frameOffset+this._timelineArray[this._timelineData.offset+5];var framePosition=this._frameArray[this._frameOffset]/this._frameRate;if(this.currentPlayTimes===prevPlayTimes){if(prevTime<=framePosition){this._onCrossFrame(this._frameIndex);}}else if(this._position<=framePosition){if(!isReverse&&loopCompleteEvent!==null){this._armature._dragonBones.bufferEvent(loopCompleteEvent);loopCompleteEvent=null;}this._onCrossFrame(this._frameIndex);}}}if(loopCompleteEvent!==null){this._armature._dragonBones.bufferEvent(loopCompleteEvent);}if(completeEvent!==null){this._armature._dragonBones.bufferEvent(completeEvent);}}};ActionTimelineState.prototype.setCurrentTime=function(value){this._setCurrentTime(value);this._frameIndex=-1;};return ActionTimelineState;}(dragonBones.TimelineState);dragonBones.ActionTimelineState=ActionTimelineState;var ZOrderTimelineState=function(_super){__extends(ZOrderTimelineState,_super);function ZOrderTimelineState(){return _super!==null&&_super.apply(this,arguments)||this;}ZOrderTimelineState.toString=function(){return "[class dragonBones.ZOrderTimelineState]";};ZOrderTimelineState.prototype._onArriveAtFrame=function(){if(this.playState>=0){var count=this._frameArray[this._frameOffset+1];if(count>0){this._armature._sortZOrder(this._frameArray,this._frameOffset+2);}else {this._armature._sortZOrder(null,0);}}};ZOrderTimelineState.prototype._onUpdateFrame=function(){};return ZOrderTimelineState;}(dragonBones.TimelineState);dragonBones.ZOrderTimelineState=ZOrderTimelineState;var BoneAllTimelineState=function(_super){__extends(BoneAllTimelineState,_super);function BoneAllTimelineState(){return _super!==null&&_super.apply(this,arguments)||this;}BoneAllTimelineState.toString=function(){return "[class dragonBones.BoneAllTimelineState]";};BoneAllTimelineState.prototype._onArriveAtFrame=function(){_super.prototype._onArriveAtFrame.call(this);if(this._timelineData!==null){var valueOffset=this._animationData.frameFloatOffset+this._frameValueOffset+this._frameIndex*6;var scale=this._armature._armatureData.scale;var frameFloatArray=this._frameFloatArray;var current=this.bonePose.current;var delta=this.bonePose.delta;current.x=frameFloatArray[valueOffset++]*scale;current.y=frameFloatArray[valueOffset++]*scale;current.rotation=frameFloatArray[valueOffset++];current.skew=frameFloatArray[valueOffset++];current.scaleX=frameFloatArray[valueOffset++];current.scaleY=frameFloatArray[valueOffset++];if(this._tweenState===2){if(this._frameIndex===this._frameCount-1){valueOffset=this._animationData.frameFloatOffset+this._frameValueOffset;}delta.x=frameFloatArray[valueOffset++]*scale-current.x;delta.y=frameFloatArray[valueOffset++]*scale-current.y;delta.rotation=frameFloatArray[valueOffset++]-current.rotation;delta.skew=frameFloatArray[valueOffset++]-current.skew;delta.scaleX=frameFloatArray[valueOffset++]-current.scaleX;delta.scaleY=frameFloatArray[valueOffset++]-current.scaleY;}else {delta.x=0.0;delta.y=0.0;delta.rotation=0.0;delta.skew=0.0;delta.scaleX=0.0;delta.scaleY=0.0;}}else {var current=this.bonePose.current;var delta=this.bonePose.delta;current.x=0.0;current.y=0.0;current.rotation=0.0;current.skew=0.0;current.scaleX=1.0;current.scaleY=1.0;delta.x=0.0;delta.y=0.0;delta.rotation=0.0;delta.skew=0.0;delta.scaleX=0.0;delta.scaleY=0.0;}};BoneAllTimelineState.prototype._onUpdateFrame=function(){_super.prototype._onUpdateFrame.call(this);var current=this.bonePose.current;var delta=this.bonePose.delta;var result=this.bonePose.result;this.bone._transformDirty=true;if(this._tweenState!==2){this._tweenState=0;}result.x=current.x+delta.x*this._tweenProgress;result.y=current.y+delta.y*this._tweenProgress;result.rotation=current.rotation+delta.rotation*this._tweenProgress;result.skew=current.skew+delta.skew*this._tweenProgress;result.scaleX=current.scaleX+delta.scaleX*this._tweenProgress;result.scaleY=current.scaleY+delta.scaleY*this._tweenProgress;};BoneAllTimelineState.prototype.fadeOut=function(){var result=this.bonePose.result;result.rotation=dragonBones.Transform.normalizeRadian(result.rotation);result.skew=dragonBones.Transform.normalizeRadian(result.skew);};return BoneAllTimelineState;}(dragonBones.BoneTimelineState);dragonBones.BoneAllTimelineState=BoneAllTimelineState;var BoneTranslateTimelineState=function(_super){__extends(BoneTranslateTimelineState,_super);function BoneTranslateTimelineState(){return _super!==null&&_super.apply(this,arguments)||this;}BoneTranslateTimelineState.toString=function(){return "[class dragonBones.BoneTranslateTimelineState]";};BoneTranslateTimelineState.prototype._onArriveAtFrame=function(){_super.prototype._onArriveAtFrame.call(this);if(this._timelineData!==null){var valueOffset=this._animationData.frameFloatOffset+this._frameValueOffset+this._frameIndex*2;var scale=this._armature._armatureData.scale;var frameFloatArray=this._frameFloatArray;var current=this.bonePose.current;var delta=this.bonePose.delta;current.x=frameFloatArray[valueOffset++]*scale;current.y=frameFloatArray[valueOffset++]*scale;if(this._tweenState===2){if(this._frameIndex===this._frameCount-1){valueOffset=this._animationData.frameFloatOffset+this._frameValueOffset;}delta.x=frameFloatArray[valueOffset++]*scale-current.x;delta.y=frameFloatArray[valueOffset++]*scale-current.y;}else {delta.x=0.0;delta.y=0.0;}}else {var current=this.bonePose.current;var delta=this.bonePose.delta;current.x=0.0;current.y=0.0;delta.x=0.0;delta.y=0.0;}};BoneTranslateTimelineState.prototype._onUpdateFrame=function(){_super.prototype._onUpdateFrame.call(this);var current=this.bonePose.current;var delta=this.bonePose.delta;var result=this.bonePose.result;this.bone._transformDirty=true;if(this._tweenState!==2){this._tweenState=0;}result.x=current.x+delta.x*this._tweenProgress;result.y=current.y+delta.y*this._tweenProgress;};return BoneTranslateTimelineState;}(dragonBones.BoneTimelineState);dragonBones.BoneTranslateTimelineState=BoneTranslateTimelineState;var BoneRotateTimelineState=function(_super){__extends(BoneRotateTimelineState,_super);function BoneRotateTimelineState(){return _super!==null&&_super.apply(this,arguments)||this;}BoneRotateTimelineState.toString=function(){return "[class dragonBones.BoneRotateTimelineState]";};BoneRotateTimelineState.prototype._onArriveAtFrame=function(){_super.prototype._onArriveAtFrame.call(this);if(this._timelineData!==null){var valueOffset=this._animationData.frameFloatOffset+this._frameValueOffset+this._frameIndex*2;var frameFloatArray=this._frameFloatArray;var current=this.bonePose.current;var delta=this.bonePose.delta;current.rotation=frameFloatArray[valueOffset++];current.skew=frameFloatArray[valueOffset++];if(this._tweenState===2){if(this._frameIndex===this._frameCount-1){valueOffset=this._animationData.frameFloatOffset+this._frameValueOffset;delta.rotation=dragonBones.Transform.normalizeRadian(frameFloatArray[valueOffset++]-current.rotation);}else {delta.rotation=frameFloatArray[valueOffset++]-current.rotation;}delta.skew=frameFloatArray[valueOffset++]-current.skew;}else {delta.rotation=0.0;delta.skew=0.0;}}else {var current=this.bonePose.current;var delta=this.bonePose.delta;current.rotation=0.0;current.skew=0.0;delta.rotation=0.0;delta.skew=0.0;}};BoneRotateTimelineState.prototype._onUpdateFrame=function(){_super.prototype._onUpdateFrame.call(this);var current=this.bonePose.current;var delta=this.bonePose.delta;var result=this.bonePose.result;this.bone._transformDirty=true;if(this._tweenState!==2){this._tweenState=0;}result.rotation=current.rotation+delta.rotation*this._tweenProgress;result.skew=current.skew+delta.skew*this._tweenProgress;};BoneRotateTimelineState.prototype.fadeOut=function(){var result=this.bonePose.result;result.rotation=dragonBones.Transform.normalizeRadian(result.rotation);result.skew=dragonBones.Transform.normalizeRadian(result.skew);};return BoneRotateTimelineState;}(dragonBones.BoneTimelineState);dragonBones.BoneRotateTimelineState=BoneRotateTimelineState;var BoneScaleTimelineState=function(_super){__extends(BoneScaleTimelineState,_super);function BoneScaleTimelineState(){return _super!==null&&_super.apply(this,arguments)||this;}BoneScaleTimelineState.toString=function(){return "[class dragonBones.BoneScaleTimelineState]";};BoneScaleTimelineState.prototype._onArriveAtFrame=function(){_super.prototype._onArriveAtFrame.call(this);if(this._timelineData!==null){var valueOffset=this._animationData.frameFloatOffset+this._frameValueOffset+this._frameIndex*2;var frameFloatArray=this._frameFloatArray;var current=this.bonePose.current;var delta=this.bonePose.delta;current.scaleX=frameFloatArray[valueOffset++];current.scaleY=frameFloatArray[valueOffset++];if(this._tweenState===2){if(this._frameIndex===this._frameCount-1){valueOffset=this._animationData.frameFloatOffset+this._frameValueOffset;}delta.scaleX=frameFloatArray[valueOffset++]-current.scaleX;delta.scaleY=frameFloatArray[valueOffset++]-current.scaleY;}else {delta.scaleX=0.0;delta.scaleY=0.0;}}else {var current=this.bonePose.current;var delta=this.bonePose.delta;current.scaleX=1.0;current.scaleY=1.0;delta.scaleX=0.0;delta.scaleY=0.0;}};BoneScaleTimelineState.prototype._onUpdateFrame=function(){_super.prototype._onUpdateFrame.call(this);var current=this.bonePose.current;var delta=this.bonePose.delta;var result=this.bonePose.result;this.bone._transformDirty=true;if(this._tweenState!==2){this._tweenState=0;}result.scaleX=current.scaleX+delta.scaleX*this._tweenProgress;result.scaleY=current.scaleY+delta.scaleY*this._tweenProgress;};return BoneScaleTimelineState;}(dragonBones.BoneTimelineState);dragonBones.BoneScaleTimelineState=BoneScaleTimelineState;var SurfaceTimelineState=function(_super){__extends(SurfaceTimelineState,_super);function SurfaceTimelineState(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this._current=[];_this._delta=[];_this._result=[];return _this;}SurfaceTimelineState.toString=function(){return "[class dragonBones.SurfaceTimelineState]";};SurfaceTimelineState.prototype._onClear=function(){_super.prototype._onClear.call(this);this.surface=null;this._frameFloatOffset=0;this._valueCount=0;this._deformCount=0;this._valueOffset=0;this._current.length=0;this._delta.length=0;this._result.length=0;};SurfaceTimelineState.prototype._onArriveAtFrame=function(){_super.prototype._onArriveAtFrame.call(this);if(this._timelineData!==null){var valueOffset=this._animationData.frameFloatOffset+this._frameValueOffset+this._frameIndex*this._valueCount;var scale=this._armature._armatureData.scale;var frameFloatArray=this._frameFloatArray;if(this._tweenState===2){var nextValueOffset=valueOffset+this._valueCount;if(this._frameIndex===this._frameCount-1){nextValueOffset=this._animationData.frameFloatOffset+this._frameValueOffset;}for(var i=0;i<this._valueCount;++i){this._delta[i]=frameFloatArray[nextValueOffset+i]*scale-(this._current[i]=frameFloatArray[valueOffset+i]*scale);}}else {for(var i=0;i<this._valueCount;++i){this._current[i]=frameFloatArray[valueOffset+i]*scale;}}}else {for(var i=0;i<this._valueCount;++i){this._current[i]=0.0;}}};SurfaceTimelineState.prototype._onUpdateFrame=function(){_super.prototype._onUpdateFrame.call(this);this.surface._transformDirty=true;if(this._tweenState!==2){this._tweenState=0;}for(var i=0;i<this._valueCount;++i){this._result[i]=this._current[i]+this._delta[i]*this._tweenProgress;}};SurfaceTimelineState.prototype.init=function(armature,animationState,timelineData){_super.prototype.init.call(this,armature,animationState,timelineData);if(this._timelineData!==null){var frameIntOffset=this._animationData.frameIntOffset+this._timelineArray[this._timelineData.offset+3];this._deformCount=this._frameIntArray[frameIntOffset+1];this._valueCount=this._frameIntArray[frameIntOffset+2];this._valueOffset=this._frameIntArray[frameIntOffset+3];this._frameFloatOffset=this._frameIntArray[frameIntOffset+4]+this._animationData.frameFloatOffset;}else {this._deformCount=this.surface._deformVertices.length;this._valueCount=this._deformCount;this._valueOffset=0;this._frameFloatOffset=0;}this._current.length=this._valueCount;this._delta.length=this._valueCount;this._result.length=this._valueCount;for(var i=0;i<this._valueCount;++i){this._delta[i]=0.0;}};SurfaceTimelineState.prototype.blend=function(state){var blendWeight=this.surface._blendState.blendWeight;var result=this.surface._deformVertices;for(var i=0;i<this._deformCount;++i){var value=0.0;if(i<this._valueOffset){value=this._frameFloatArray[this._frameFloatOffset+i];}else if(i<this._valueOffset+this._valueCount){value=this._result[i-this._valueOffset];}else {value=this._frameFloatArray[this._frameFloatOffset+i-this._valueCount];}if(state===2){result[i]+=value*blendWeight;}else if(blendWeight!==1.0){result[i]=value*blendWeight;}else {result[i]=value;}}if(this._animationState._fadeState!==0||this._animationState._subFadeState!==0){this.surface._transformDirty=true;}};return SurfaceTimelineState;}(dragonBones.TweenTimelineState);dragonBones.SurfaceTimelineState=SurfaceTimelineState;var SlotDislayTimelineState=function(_super){__extends(SlotDislayTimelineState,_super);function SlotDislayTimelineState(){return _super!==null&&_super.apply(this,arguments)||this;}SlotDislayTimelineState.toString=function(){return "[class dragonBones.SlotDislayTimelineState]";};SlotDislayTimelineState.prototype._onArriveAtFrame=function(){if(this.playState>=0){var displayIndex=this._timelineData!==null?this._frameArray[this._frameOffset+1]:this.slot._slotData.displayIndex;if(this.slot.displayIndex!==displayIndex){this.slot._setDisplayIndex(displayIndex,true);}}};return SlotDislayTimelineState;}(dragonBones.SlotTimelineState);dragonBones.SlotDislayTimelineState=SlotDislayTimelineState;var SlotColorTimelineState=function(_super){__extends(SlotColorTimelineState,_super);function SlotColorTimelineState(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this._current=[0,0,0,0,0,0,0,0];_this._delta=[0,0,0,0,0,0,0,0];_this._result=[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0];return _this;}SlotColorTimelineState.toString=function(){return "[class dragonBones.SlotColorTimelineState]";};SlotColorTimelineState.prototype._onClear=function(){_super.prototype._onClear.call(this);this._dirty=false;};SlotColorTimelineState.prototype._onArriveAtFrame=function(){_super.prototype._onArriveAtFrame.call(this);if(this._timelineData!==null){var intArray=this._dragonBonesData.intArray;var frameIntArray=this._frameIntArray;var valueOffset=this._animationData.frameIntOffset+this._frameValueOffset+this._frameIndex*1;var colorOffset=frameIntArray[valueOffset];if(colorOffset<0){colorOffset+=65536;}this._current[0]=intArray[colorOffset++];this._current[1]=intArray[colorOffset++];this._current[2]=intArray[colorOffset++];this._current[3]=intArray[colorOffset++];this._current[4]=intArray[colorOffset++];this._current[5]=intArray[colorOffset++];this._current[6]=intArray[colorOffset++];this._current[7]=intArray[colorOffset++];if(this._tweenState===2){if(this._frameIndex===this._frameCount-1){colorOffset=frameIntArray[this._animationData.frameIntOffset+this._frameValueOffset];}else {colorOffset=frameIntArray[valueOffset+1*1];}if(colorOffset<0){colorOffset+=65536;}this._delta[0]=intArray[colorOffset++]-this._current[0];this._delta[1]=intArray[colorOffset++]-this._current[1];this._delta[2]=intArray[colorOffset++]-this._current[2];this._delta[3]=intArray[colorOffset++]-this._current[3];this._delta[4]=intArray[colorOffset++]-this._current[4];this._delta[5]=intArray[colorOffset++]-this._current[5];this._delta[6]=intArray[colorOffset++]-this._current[6];this._delta[7]=intArray[colorOffset++]-this._current[7];}}else {var color=this.slot._slotData.color;this._current[0]=color.alphaMultiplier*100.0;this._current[1]=color.redMultiplier*100.0;this._current[2]=color.greenMultiplier*100.0;this._current[3]=color.blueMultiplier*100.0;this._current[4]=color.alphaOffset;this._current[5]=color.redOffset;this._current[6]=color.greenOffset;this._current[7]=color.blueOffset;}};SlotColorTimelineState.prototype._onUpdateFrame=function(){_super.prototype._onUpdateFrame.call(this);this._dirty=true;if(this._tweenState!==2){this._tweenState=0;}this._result[0]=(this._current[0]+this._delta[0]*this._tweenProgress)*0.01;this._result[1]=(this._current[1]+this._delta[1]*this._tweenProgress)*0.01;this._result[2]=(this._current[2]+this._delta[2]*this._tweenProgress)*0.01;this._result[3]=(this._current[3]+this._delta[3]*this._tweenProgress)*0.01;this._result[4]=this._current[4]+this._delta[4]*this._tweenProgress;this._result[5]=this._current[5]+this._delta[5]*this._tweenProgress;this._result[6]=this._current[6]+this._delta[6]*this._tweenProgress;this._result[7]=this._current[7]+this._delta[7]*this._tweenProgress;};SlotColorTimelineState.prototype.fadeOut=function(){this._tweenState=0;this._dirty=false;};SlotColorTimelineState.prototype.update=function(passedTime){_super.prototype.update.call(this,passedTime);if(this._tweenState!==0||this._dirty){var result=this.slot._colorTransform;if(this._animationState._fadeState!==0||this._animationState._subFadeState!==0){if(result.alphaMultiplier!==this._result[0]||result.redMultiplier!==this._result[1]||result.greenMultiplier!==this._result[2]||result.blueMultiplier!==this._result[3]||result.alphaOffset!==this._result[4]||result.redOffset!==this._result[5]||result.greenOffset!==this._result[6]||result.blueOffset!==this._result[7]){var fadeProgress=Math.pow(this._animationState._fadeProgress,4);result.alphaMultiplier+=(this._result[0]-result.alphaMultiplier)*fadeProgress;result.redMultiplier+=(this._result[1]-result.redMultiplier)*fadeProgress;result.greenMultiplier+=(this._result[2]-result.greenMultiplier)*fadeProgress;result.blueMultiplier+=(this._result[3]-result.blueMultiplier)*fadeProgress;result.alphaOffset+=(this._result[4]-result.alphaOffset)*fadeProgress;result.redOffset+=(this._result[5]-result.redOffset)*fadeProgress;result.greenOffset+=(this._result[6]-result.greenOffset)*fadeProgress;result.blueOffset+=(this._result[7]-result.blueOffset)*fadeProgress;this.slot._colorDirty=true;}}else if(this._dirty){this._dirty=false;if(result.alphaMultiplier!==this._result[0]||result.redMultiplier!==this._result[1]||result.greenMultiplier!==this._result[2]||result.blueMultiplier!==this._result[3]||result.alphaOffset!==this._result[4]||result.redOffset!==this._result[5]||result.greenOffset!==this._result[6]||result.blueOffset!==this._result[7]){result.alphaMultiplier=this._result[0];result.redMultiplier=this._result[1];result.greenMultiplier=this._result[2];result.blueMultiplier=this._result[3];result.alphaOffset=this._result[4];result.redOffset=this._result[5];result.greenOffset=this._result[6];result.blueOffset=this._result[7];this.slot._colorDirty=true;}}}};return SlotColorTimelineState;}(dragonBones.SlotTimelineState);dragonBones.SlotColorTimelineState=SlotColorTimelineState;var DeformTimelineState=function(_super){__extends(DeformTimelineState,_super);function DeformTimelineState(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this._current=[];_this._delta=[];_this._result=[];return _this;}DeformTimelineState.toString=function(){return "[class dragonBones.DeformTimelineState]";};DeformTimelineState.prototype._onClear=function(){_super.prototype._onClear.call(this);this.vertexOffset=0;this._dirty=false;this._frameFloatOffset=0;this._valueCount=0;this._deformCount=0;this._valueOffset=0;this._current.length=0;this._delta.length=0;this._result.length=0;};DeformTimelineState.prototype._onArriveAtFrame=function(){_super.prototype._onArriveAtFrame.call(this);if(this._timelineData!==null){var valueOffset=this._animationData.frameFloatOffset+this._frameValueOffset+this._frameIndex*this._valueCount;var scale=this._armature._armatureData.scale;var frameFloatArray=this._frameFloatArray;if(this._tweenState===2){var nextValueOffset=valueOffset+this._valueCount;if(this._frameIndex===this._frameCount-1){nextValueOffset=this._animationData.frameFloatOffset+this._frameValueOffset;}for(var i=0;i<this._valueCount;++i){this._delta[i]=frameFloatArray[nextValueOffset+i]*scale-(this._current[i]=frameFloatArray[valueOffset+i]*scale);}}else {for(var i=0;i<this._valueCount;++i){this._current[i]=frameFloatArray[valueOffset+i]*scale;}}}else {for(var i=0;i<this._valueCount;++i){this._current[i]=0.0;}}};DeformTimelineState.prototype._onUpdateFrame=function(){_super.prototype._onUpdateFrame.call(this);this._dirty=true;if(this._tweenState!==2){this._tweenState=0;}for(var i=0;i<this._valueCount;++i){this._result[i]=this._current[i]+this._delta[i]*this._tweenProgress;}};DeformTimelineState.prototype.init=function(armature,animationState,timelineData){_super.prototype.init.call(this,armature,animationState,timelineData);if(this._timelineData!==null){var frameIntOffset=this._animationData.frameIntOffset+this._timelineArray[this._timelineData.offset+3];this.vertexOffset=this._frameIntArray[frameIntOffset+0];if(this.vertexOffset<0){this.vertexOffset+=65536;}this._deformCount=this._frameIntArray[frameIntOffset+1];this._valueCount=this._frameIntArray[frameIntOffset+2];this._valueOffset=this._frameIntArray[frameIntOffset+3];this._frameFloatOffset=this._frameIntArray[frameIntOffset+4]+this._animationData.frameFloatOffset;}else {var deformVertices=this.slot._deformVertices;this._deformCount=deformVertices!==null?deformVertices.vertices.length:0;this._valueCount=this._deformCount;this._valueOffset=0;this._frameFloatOffset=0;}this._current.length=this._valueCount;this._delta.length=this._valueCount;this._result.length=this._valueCount;for(var i=0;i<this._valueCount;++i){this._delta[i]=0.0;}};DeformTimelineState.prototype.fadeOut=function(){this._tweenState=0;this._dirty=false;};DeformTimelineState.prototype.update=function(passedTime){var deformVertices=this.slot._deformVertices;if(deformVertices===null||deformVertices.verticesData===null||deformVertices.verticesData.offset!==this.vertexOffset){return;}_super.prototype.update.call(this,passedTime);if(this._tweenState!==0||this._dirty){var result=deformVertices.vertices;if(this._animationState._fadeState!==0||this._animationState._subFadeState!==0){var fadeProgress=Math.pow(this._animationState._fadeProgress,2);for(var i=0;i<this._deformCount;++i){if(i<this._valueOffset){result[i]+=(this._frameFloatArray[this._frameFloatOffset+i]-result[i])*fadeProgress;}else if(i<this._valueOffset+this._valueCount){result[i]+=(this._result[i-this._valueOffset]-result[i])*fadeProgress;}else {result[i]+=(this._frameFloatArray[this._frameFloatOffset+i-this._valueCount]-result[i])*fadeProgress;}}deformVertices.verticesDirty=true;}else if(this._dirty){this._dirty=false;for(var i=0;i<this._deformCount;++i){if(i<this._valueOffset){result[i]=this._frameFloatArray[this._frameFloatOffset+i];}else if(i<this._valueOffset+this._valueCount){result[i]=this._result[i-this._valueOffset];}else {result[i]=this._frameFloatArray[this._frameFloatOffset+i-this._valueCount];}}deformVertices.verticesDirty=true;}}};return DeformTimelineState;}(dragonBones.SlotTimelineState);dragonBones.DeformTimelineState=DeformTimelineState;var IKConstraintTimelineState=function(_super){__extends(IKConstraintTimelineState,_super);function IKConstraintTimelineState(){return _super!==null&&_super.apply(this,arguments)||this;}IKConstraintTimelineState.toString=function(){return "[class dragonBones.IKConstraintTimelineState]";};IKConstraintTimelineState.prototype._onClear=function(){_super.prototype._onClear.call(this);this._current=0.0;this._delta=0.0;};IKConstraintTimelineState.prototype._onArriveAtFrame=function(){_super.prototype._onArriveAtFrame.call(this);var ikConstraint=this.constraint;if(this._timelineData!==null){var valueOffset=this._animationData.frameIntOffset+this._frameValueOffset+this._frameIndex*2;var frameIntArray=this._frameIntArray;var bendPositive=frameIntArray[valueOffset++]!==0;this._current=frameIntArray[valueOffset++]*0.01;if(this._tweenState===2){if(this._frameIndex===this._frameCount-1){valueOffset=this._animationData.frameIntOffset+this._frameValueOffset;}this._delta=frameIntArray[valueOffset+1]*0.01-this._current;}else {this._delta=0.0;}ikConstraint._bendPositive=bendPositive;}else {var ikConstraintData=ikConstraint._constraintData;this._current=ikConstraintData.weight;this._delta=0.0;ikConstraint._bendPositive=ikConstraintData.bendPositive;}ikConstraint.invalidUpdate();};IKConstraintTimelineState.prototype._onUpdateFrame=function(){_super.prototype._onUpdateFrame.call(this);if(this._tweenState!==2){this._tweenState=0;}var ikConstraint=this.constraint;ikConstraint._weight=this._current+this._delta*this._tweenProgress;ikConstraint.invalidUpdate();};return IKConstraintTimelineState;}(dragonBones.ConstraintTimelineState);dragonBones.IKConstraintTimelineState=IKConstraintTimelineState;var AnimationTimelineState=function(_super){__extends(AnimationTimelineState,_super);function AnimationTimelineState(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this._floats=[0.0,0.0,0.0,0.0,0.0,0.0];return _this;}AnimationTimelineState.toString=function(){return "[class dragonBones.AnimationTimelineState]";};AnimationTimelineState.prototype._onClear=function(){_super.prototype._onClear.call(this);this.animationState=null;};AnimationTimelineState.prototype._onArriveAtFrame=function(){_super.prototype._onArriveAtFrame.call(this);if(this._timelineData===null){return;}var valueOffset=this._animationData.frameIntOffset+this._frameValueOffset+this._frameIndex*2;var frameRateR=1.0/this.animationState._animationData.parent.frameRate;var frameIntArray=this._frameIntArray;this._floats[0]=frameIntArray[valueOffset++]*frameRateR;this._floats[3]=frameIntArray[valueOffset++]*0.01;if(this._tweenState===2){if(this._frameIndex===this._frameCount-1){valueOffset=this._animationData.frameIntOffset+this._frameValueOffset;}this._floats[1]=frameIntArray[valueOffset++]*frameRateR-this._floats[0];this._floats[4]=frameIntArray[valueOffset++]*0.01-this._floats[3];}else {this._floats[1]=0.0;this._floats[4]=0.0;}};AnimationTimelineState.prototype._onUpdateFrame=function(){_super.prototype._onUpdateFrame.call(this);if(this._tweenState!==2){this._tweenState=0;}if(this._floats[0]>=0.0){this._floats[2]=this._floats[0]+this._floats[1]*this._tweenProgress;}this._floats[5]=this._floats[3]+this._floats[4]*this._tweenProgress;};AnimationTimelineState.prototype.blend=function(state){var animationState=this.animationState;var blendWeight=animationState._blendState.blendWeight;if(state===2){animationState.weight+=this._floats[5]*blendWeight;animationState.currentTime+=this._floats[2]*blendWeight;}else {animationState.weight=this._floats[5]*blendWeight;animationState.currentTime=this._floats[2]*blendWeight;}};return AnimationTimelineState;}(dragonBones.TweenTimelineState);dragonBones.AnimationTimelineState=AnimationTimelineState;})(dragonBones$1||(dragonBones$1={}));(function(dragonBones){var EventObject=function(_super){__extends(EventObject,_super);function EventObject(){return _super!==null&&_super.apply(this,arguments)||this;}EventObject.actionDataToInstance=function(data,instance,armature){if(data.type===0){instance.type=EventObject.FRAME_EVENT;}else {instance.type=data.type===10?EventObject.FRAME_EVENT:EventObject.SOUND_EVENT;}instance.name=data.name;instance.armature=armature;instance.actionData=data;instance.data=data.data;if(data.bone!==null){instance.bone=armature.getBone(data.bone.name);}if(data.slot!==null){instance.slot=armature.getSlot(data.slot.name);}};EventObject.toString=function(){return "[class dragonBones.EventObject]";};EventObject.prototype._onClear=function(){this.time=0.0;this.type="";this.name="";this.armature=null;this.bone=null;this.slot=null;this.animationState=null;this.actionData=null;this.data=null;};EventObject.START="start";EventObject.LOOP_COMPLETE="loopComplete";EventObject.COMPLETE="complete";EventObject.FADE_IN="fadeIn";EventObject.FADE_IN_COMPLETE="fadeInComplete";EventObject.FADE_OUT="fadeOut";EventObject.FADE_OUT_COMPLETE="fadeOutComplete";EventObject.FRAME_EVENT="frameEvent";EventObject.SOUND_EVENT="soundEvent";return EventObject;}(dragonBones.BaseObject);dragonBones.EventObject=EventObject;})(dragonBones$1||(dragonBones$1={}));(function(dragonBones){var DataParser=function(){function DataParser(){}DataParser._getArmatureType=function(value){switch(value.toLowerCase()){case"stage":return 2;case"armature":return 0;case"movieclip":return 1;default:return 0;}};DataParser._getBoneType=function(value){switch(value.toLowerCase()){case"bone":return 0;case"surface":return 1;default:return 0;}};DataParser._getDisplayType=function(value){switch(value.toLowerCase()){case"image":return 0;case"mesh":return 2;case"armature":return 1;case"boundingbox":return 3;case"path":return 4;default:return 0;}};DataParser._getBoundingBoxType=function(value){switch(value.toLowerCase()){case"rectangle":return 0;case"ellipse":return 1;case"polygon":return 2;default:return 0;}};DataParser._getActionType=function(value){switch(value.toLowerCase()){case"play":return 0;case"frame":return 10;case"sound":return 11;default:return 0;}};DataParser._getBlendMode=function(value){switch(value.toLowerCase()){case"normal":return 0;case"add":return 1;case"alpha":return 2;case"darken":return 3;case"difference":return 4;case"erase":return 5;case"hardlight":return 6;case"invert":return 7;case"layer":return 8;case"lighten":return 9;case"multiply":return 10;case"overlay":return 11;case"screen":return 12;case"subtract":return 13;default:return 0;}};DataParser._getPositionMode=function(value){switch(value.toLocaleLowerCase()){case"percent":return 1;case"fixed":return 0;default:return 1;}};DataParser._getSpacingMode=function(value){switch(value.toLocaleLowerCase()){case"length":return 0;case"percent":return 2;case"fixed":return 1;default:return 0;}};DataParser._getRotateMode=function(value){switch(value.toLocaleLowerCase()){case"tangent":return 0;case"chain":return 1;case"chainscale":return 2;default:return 0;}};DataParser.parseDragonBonesData=function(rawData){console.warn("Deprecated.");if(rawData instanceof ArrayBuffer){return dragonBones.BinaryDataParser.getInstance().parseDragonBonesData(rawData);}else {return dragonBones.ObjectDataParser.getInstance().parseDragonBonesData(rawData);}};DataParser.parseTextureAtlasData=function(rawData,scale){if(scale===void 0){scale=1;}console.warn("已废弃");var textureAtlasData={};var subTextureList=rawData[DataParser.SUB_TEXTURE];for(var i=0,len=subTextureList.length;i<len;i++){var subTextureObject=subTextureList[i];var subTextureName=subTextureObject[DataParser.NAME];var subTextureRegion=new dragonBones.Rectangle();var subTextureFrame=null;subTextureRegion.x=subTextureObject[DataParser.X]/scale;subTextureRegion.y=subTextureObject[DataParser.Y]/scale;subTextureRegion.width=subTextureObject[DataParser.WIDTH]/scale;subTextureRegion.height=subTextureObject[DataParser.HEIGHT]/scale;if(DataParser.FRAME_WIDTH in subTextureObject){subTextureFrame=new dragonBones.Rectangle();subTextureFrame.x=subTextureObject[DataParser.FRAME_X]/scale;subTextureFrame.y=subTextureObject[DataParser.FRAME_Y]/scale;subTextureFrame.width=subTextureObject[DataParser.FRAME_WIDTH]/scale;subTextureFrame.height=subTextureObject[DataParser.FRAME_HEIGHT]/scale;}textureAtlasData[subTextureName]={region:subTextureRegion,frame:subTextureFrame,rotated:false};}return textureAtlasData;};DataParser.DATA_VERSION_2_3="2.3";DataParser.DATA_VERSION_3_0="3.0";DataParser.DATA_VERSION_4_0="4.0";DataParser.DATA_VERSION_4_5="4.5";DataParser.DATA_VERSION_5_0="5.0";DataParser.DATA_VERSION_5_5="5.5";DataParser.DATA_VERSION=DataParser.DATA_VERSION_5_5;DataParser.DATA_VERSIONS=[DataParser.DATA_VERSION_4_0,DataParser.DATA_VERSION_4_5,DataParser.DATA_VERSION_5_0,DataParser.DATA_VERSION_5_5];DataParser.TEXTURE_ATLAS="textureAtlas";DataParser.SUB_TEXTURE="SubTexture";DataParser.FORMAT="format";DataParser.IMAGE_PATH="imagePath";DataParser.WIDTH="width";DataParser.HEIGHT="height";DataParser.ROTATED="rotated";DataParser.FRAME_X="frameX";DataParser.FRAME_Y="frameY";DataParser.FRAME_WIDTH="frameWidth";DataParser.FRAME_HEIGHT="frameHeight";DataParser.DRADON_BONES="dragonBones";DataParser.USER_DATA="userData";DataParser.ARMATURE="armature";DataParser.BONE="bone";DataParser.SURFACE="surface";DataParser.SLOT="slot";DataParser.CONSTRAINT="constraint";DataParser.IK="ik";DataParser.PATH_CONSTRAINT="path";DataParser.SKIN="skin";DataParser.DISPLAY="display";DataParser.ANIMATION="animation";DataParser.Z_ORDER="zOrder";DataParser.FFD="ffd";DataParser.FRAME="frame";DataParser.TRANSLATE_FRAME="translateFrame";DataParser.ROTATE_FRAME="rotateFrame";DataParser.SCALE_FRAME="scaleFrame";DataParser.DISPLAY_FRAME="displayFrame";DataParser.COLOR_FRAME="colorFrame";DataParser.DEFAULT_ACTIONS="defaultActions";DataParser.ACTIONS="actions";DataParser.EVENTS="events";DataParser.INTS="ints";DataParser.FLOATS="floats";DataParser.STRINGS="strings";DataParser.CANVAS="canvas";DataParser.TRANSFORM="transform";DataParser.PIVOT="pivot";DataParser.AABB="aabb";DataParser.COLOR="color";DataParser.VERSION="version";DataParser.COMPATIBLE_VERSION="compatibleVersion";DataParser.FRAME_RATE="frameRate";DataParser.TYPE="type";DataParser.SUB_TYPE="subType";DataParser.NAME="name";DataParser.PARENT="parent";DataParser.TARGET="target";DataParser.STAGE="stage";DataParser.SHARE="share";DataParser.PATH="path";DataParser.LENGTH="length";DataParser.DISPLAY_INDEX="displayIndex";DataParser.BLEND_MODE="blendMode";DataParser.INHERIT_TRANSLATION="inheritTranslation";DataParser.INHERIT_ROTATION="inheritRotation";DataParser.INHERIT_SCALE="inheritScale";DataParser.INHERIT_REFLECTION="inheritReflection";DataParser.INHERIT_ANIMATION="inheritAnimation";DataParser.INHERIT_DEFORM="inheritDeform";DataParser.SEGMENT_X="segmentX";DataParser.SEGMENT_Y="segmentY";DataParser.BEND_POSITIVE="bendPositive";DataParser.CHAIN="chain";DataParser.WEIGHT="weight";DataParser.FADE_IN_TIME="fadeInTime";DataParser.PLAY_TIMES="playTimes";DataParser.SCALE="scale";DataParser.OFFSET="offset";DataParser.POSITION="position";DataParser.DURATION="duration";DataParser.TWEEN_EASING="tweenEasing";DataParser.TWEEN_ROTATE="tweenRotate";DataParser.TWEEN_SCALE="tweenScale";DataParser.CLOCK_WISE="clockwise";DataParser.CURVE="curve";DataParser.SOUND="sound";DataParser.EVENT="event";DataParser.ACTION="action";DataParser.X="x";DataParser.Y="y";DataParser.SKEW_X="skX";DataParser.SKEW_Y="skY";DataParser.SCALE_X="scX";DataParser.SCALE_Y="scY";DataParser.VALUE="value";DataParser.ROTATE="rotate";DataParser.SKEW="skew";DataParser.ALPHA_OFFSET="aO";DataParser.RED_OFFSET="rO";DataParser.GREEN_OFFSET="gO";DataParser.BLUE_OFFSET="bO";DataParser.ALPHA_MULTIPLIER="aM";DataParser.RED_MULTIPLIER="rM";DataParser.GREEN_MULTIPLIER="gM";DataParser.BLUE_MULTIPLIER="bM";DataParser.UVS="uvs";DataParser.VERTICES="vertices";DataParser.TRIANGLES="triangles";DataParser.WEIGHTS="weights";DataParser.SLOT_POSE="slotPose";DataParser.BONE_POSE="bonePose";DataParser.GLUE_WEIGHTS="glueWeights";DataParser.GLUE_MESHES="glueMeshes";DataParser.BONES="bones";DataParser.POSITION_MODE="positionMode";DataParser.SPACING_MODE="spacingMode";DataParser.ROTATE_MODE="rotateMode";DataParser.SPACING="spacing";DataParser.ROTATE_OFFSET="rotateOffset";DataParser.ROTATE_MIX="rotateMix";DataParser.TRANSLATE_MIX="translateMix";DataParser.TARGET_DISPLAY="targetDisplay";DataParser.CLOSED="closed";DataParser.CONSTANT_SPEED="constantSpeed";DataParser.VERTEX_COUNT="vertexCount";DataParser.LENGTHS="lengths";DataParser.GOTO_AND_PLAY="gotoAndPlay";DataParser.DEFAULT_NAME="default";return DataParser;}();dragonBones.DataParser=DataParser;})(dragonBones$1||(dragonBones$1={}));(function(dragonBones){var ObjectDataParser=function(_super){__extends(ObjectDataParser,_super);function ObjectDataParser(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this._rawTextureAtlasIndex=0;_this._rawBones=[];_this._data=null;_this._armature=null;_this._bone=null;_this._surface=null;_this._slot=null;_this._skin=null;_this._mesh=null;_this._animation=null;_this._timeline=null;_this._rawTextureAtlases=null;_this._defaultColorOffset=-1;_this._prevClockwise=0;_this._prevRotation=0.0;_this._helpMatrixA=new dragonBones.Matrix();_this._helpMatrixB=new dragonBones.Matrix();_this._helpTransform=new dragonBones.Transform();_this._helpColorTransform=new dragonBones.ColorTransform();_this._helpPoint=new dragonBones.Point();_this._helpArray=[];_this._intArray=[];_this._floatArray=[];_this._frameIntArray=[];_this._frameFloatArray=[];_this._frameArray=[];_this._timelineArray=[];_this._cacheRawMeshes=[];_this._cacheMeshes=[];_this._actionFrames=[];_this._weightSlotPose={};_this._weightBonePoses={};_this._cacheBones={};_this._slotChildActions={};return _this;}ObjectDataParser._getBoolean=function(rawData,key,defaultValue){if(key in rawData){var value=rawData[key];var type=typeof value;if(type==="boolean"){return value;}else if(type==="string"){switch(value){case"0":case"NaN":case"":case"false":case"null":case"undefined":return false;default:return true;}}else {return !!value;}}return defaultValue;};ObjectDataParser._getNumber=function(rawData,key,defaultValue){if(key in rawData){var value=rawData[key];if(value===null||value==="NaN"){return defaultValue;}return +value||0;}return defaultValue;};ObjectDataParser._getString=function(rawData,key,defaultValue){if(key in rawData){var value=rawData[key];var type=typeof value;if(type==="string"){if(dragonBones.DragonBones.webAssembly){for(var i=0,l=value.length;i<l;++i){if(value.charCodeAt(i)>255){return encodeURI(value);}}}return value;}return String(value);}return defaultValue;};ObjectDataParser.prototype._getCurvePoint=function(x1,y1,x2,y2,x3,y3,x4,y4,t,result){var l_t=1.0-t;var powA=l_t*l_t;var powB=t*t;var kA=l_t*powA;var kB=3.0*t*powA;var kC=3.0*l_t*powB;var kD=t*powB;result.x=kA*x1+kB*x2+kC*x3+kD*x4;result.y=kA*y1+kB*y2+kC*y3+kD*y4;};ObjectDataParser.prototype._samplingEasingCurve=function(curve,samples){var curveCount=curve.length;var stepIndex=-2;for(var i=0,l=samples.length;i<l;++i){var t=(i+1)/(l+1);while((stepIndex+6<curveCount?curve[stepIndex+6]:1)<t){stepIndex+=6;}var isInCurve=stepIndex>=0&&stepIndex+6<curveCount;var x1=isInCurve?curve[stepIndex]:0.0;var y1=isInCurve?curve[stepIndex+1]:0.0;var x2=curve[stepIndex+2];var y2=curve[stepIndex+3];var x3=curve[stepIndex+4];var y3=curve[stepIndex+5];var x4=isInCurve?curve[stepIndex+6]:1.0;var y4=isInCurve?curve[stepIndex+7]:1.0;var lower=0.0;var higher=1.0;while(higher-lower>0.0001){var percentage=(higher+lower)*0.5;this._getCurvePoint(x1,y1,x2,y2,x3,y3,x4,y4,percentage,this._helpPoint);if(t-this._helpPoint.x>0.0){lower=percentage;}else {higher=percentage;}}samples[i]=this._helpPoint.y;}};ObjectDataParser.prototype._parseActionDataInFrame=function(rawData,frameStart,bone,slot){if(dragonBones.DataParser.EVENT in rawData){this._mergeActionFrame(rawData[dragonBones.DataParser.EVENT],frameStart,10,bone,slot);}if(dragonBones.DataParser.SOUND in rawData){this._mergeActionFrame(rawData[dragonBones.DataParser.SOUND],frameStart,11,bone,slot);}if(dragonBones.DataParser.ACTION in rawData){this._mergeActionFrame(rawData[dragonBones.DataParser.ACTION],frameStart,0,bone,slot);}if(dragonBones.DataParser.EVENTS in rawData){this._mergeActionFrame(rawData[dragonBones.DataParser.EVENTS],frameStart,10,bone,slot);}if(dragonBones.DataParser.ACTIONS in rawData){this._mergeActionFrame(rawData[dragonBones.DataParser.ACTIONS],frameStart,0,bone,slot);}};ObjectDataParser.prototype._mergeActionFrame=function(rawData,frameStart,type,bone,slot){var actionOffset=dragonBones.DragonBones.webAssembly?this._armature.actions.size():this._armature.actions.length;var actions=this._parseActionData(rawData,type,bone,slot);var frameIndex=0;var frame=null;for(var _i=0,actions_2=actions;_i<actions_2.length;_i++){var action=actions_2[_i];this._armature.addAction(action,false);}if(this._actionFrames.length===0){frame=new ActionFrame();frame.frameStart=0;this._actionFrames.push(frame);frame=null;}for(var _a=0,_b=this._actionFrames;_a<_b.length;_a++){var eachFrame=_b[_a];if(eachFrame.frameStart===frameStart){frame=eachFrame;break;}else if(eachFrame.frameStart>frameStart){break;}frameIndex++;}if(frame===null){frame=new ActionFrame();frame.frameStart=frameStart;this._actionFrames.splice(frameIndex+1,0,frame);}for(var i=0;i<actions.length;++i){frame.actions.push(actionOffset+i);}};ObjectDataParser.prototype._parseArmature=function(rawData,scale){var armature=dragonBones.BaseObject.borrowObject(dragonBones.ArmatureData);armature.name=ObjectDataParser._getString(rawData,dragonBones.DataParser.NAME,"");armature.frameRate=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.FRAME_RATE,this._data.frameRate);armature.scale=scale;if(dragonBones.DataParser.TYPE in rawData&&typeof rawData[dragonBones.DataParser.TYPE]==="string"){armature.type=dragonBones.DataParser._getArmatureType(rawData[dragonBones.DataParser.TYPE]);}else {armature.type=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.TYPE,0);}if(armature.frameRate===0){armature.frameRate=24;}this._armature=armature;if(dragonBones.DataParser.CANVAS in rawData){var rawCanvas=rawData[dragonBones.DataParser.CANVAS];var canvas=dragonBones.BaseObject.borrowObject(dragonBones.CanvasData);if(dragonBones.DataParser.COLOR in rawCanvas){canvas.hasBackground=true;}else {canvas.hasBackground=false;}canvas.color=ObjectDataParser._getNumber(rawCanvas,dragonBones.DataParser.COLOR,0);canvas.x=ObjectDataParser._getNumber(rawCanvas,dragonBones.DataParser.X,0)*armature.scale;canvas.y=ObjectDataParser._getNumber(rawCanvas,dragonBones.DataParser.Y,0)*armature.scale;canvas.width=ObjectDataParser._getNumber(rawCanvas,dragonBones.DataParser.WIDTH,0)*armature.scale;canvas.height=ObjectDataParser._getNumber(rawCanvas,dragonBones.DataParser.HEIGHT,0)*armature.scale;armature.canvas=canvas;}if(dragonBones.DataParser.AABB in rawData){var rawAABB=rawData[dragonBones.DataParser.AABB];armature.aabb.x=ObjectDataParser._getNumber(rawAABB,dragonBones.DataParser.X,0.0)*armature.scale;armature.aabb.y=ObjectDataParser._getNumber(rawAABB,dragonBones.DataParser.Y,0.0)*armature.scale;armature.aabb.width=ObjectDataParser._getNumber(rawAABB,dragonBones.DataParser.WIDTH,0.0)*armature.scale;armature.aabb.height=ObjectDataParser._getNumber(rawAABB,dragonBones.DataParser.HEIGHT,0.0)*armature.scale;}if(dragonBones.DataParser.BONE in rawData){var rawBones=rawData[dragonBones.DataParser.BONE];for(var _i=0,rawBones_1=rawBones;_i<rawBones_1.length;_i++){var rawBone=rawBones_1[_i];var parentName=ObjectDataParser._getString(rawBone,dragonBones.DataParser.PARENT,"");var bone=this._parseBone(rawBone);if(parentName.length>0){var parent_1=armature.getBone(parentName);if(parent_1!==null){bone.parent=parent_1;}else {if(!(parentName in this._cacheBones)){this._cacheBones[parentName]=[];}this._cacheBones[parentName].push(bone);}}if(bone.name in this._cacheBones){for(var _a=0,_b=this._cacheBones[bone.name];_a<_b.length;_a++){var child=_b[_a];child.parent=bone;}delete this._cacheBones[bone.name];}armature.addBone(bone);this._rawBones.push(bone);}}if(dragonBones.DataParser.IK in rawData){var rawIKS=rawData[dragonBones.DataParser.IK];for(var _c=0,rawIKS_1=rawIKS;_c<rawIKS_1.length;_c++){var rawIK=rawIKS_1[_c];var constraint=this._parseIKConstraint(rawIK);if(constraint){armature.addConstraint(constraint);}}}armature.sortBones();if(dragonBones.DataParser.SLOT in rawData){var zOrder=0;var rawSlots=rawData[dragonBones.DataParser.SLOT];for(var _d=0,rawSlots_1=rawSlots;_d<rawSlots_1.length;_d++){var rawSlot=rawSlots_1[_d];armature.addSlot(this._parseSlot(rawSlot,zOrder++));}}if(dragonBones.DataParser.SKIN in rawData){var rawSkins=rawData[dragonBones.DataParser.SKIN];for(var _e=0,rawSkins_1=rawSkins;_e<rawSkins_1.length;_e++){var rawSkin=rawSkins_1[_e];armature.addSkin(this._parseSkin(rawSkin));}}if(dragonBones.DataParser.PATH_CONSTRAINT in rawData){var rawPaths=rawData[dragonBones.DataParser.PATH_CONSTRAINT];for(var _f=0,rawPaths_1=rawPaths;_f<rawPaths_1.length;_f++){var rawPath=rawPaths_1[_f];var constraint=this._parsePathConstraint(rawPath);if(constraint){armature.addConstraint(constraint);}}}for(var i=0,l=this._cacheRawMeshes.length;i<l;++i){var rawMeshData=this._cacheRawMeshes[i];if(!(dragonBones.DataParser.GLUE_WEIGHTS in rawMeshData)||!(dragonBones.DataParser.GLUE_MESHES in rawMeshData)){continue;}this._parseMeshGlue(rawMeshData,this._cacheMeshes[i]);}for(var i=0,l=this._cacheRawMeshes.length;i<l;++i){var rawData_1=this._cacheRawMeshes[i];var shareName=ObjectDataParser._getString(rawData_1,dragonBones.DataParser.SHARE,"");if(shareName.length===0){continue;}var skinName=ObjectDataParser._getString(rawData_1,dragonBones.DataParser.SKIN,dragonBones.DataParser.DEFAULT_NAME);if(skinName.length===0){skinName=dragonBones.DataParser.DEFAULT_NAME;}var shareMesh=armature.getMesh(skinName,"",shareName);if(shareMesh===null){continue;}var mesh=this._cacheMeshes[i];mesh.vertices.shareFrom(shareMesh.vertices);}if(dragonBones.DataParser.ANIMATION in rawData){var rawAnimations=rawData[dragonBones.DataParser.ANIMATION];for(var _g=0,rawAnimations_1=rawAnimations;_g<rawAnimations_1.length;_g++){var rawAnimation=rawAnimations_1[_g];var animation=this._parseAnimation(rawAnimation);armature.addAnimation(animation);}}if(dragonBones.DataParser.DEFAULT_ACTIONS in rawData){var actions=this._parseActionData(rawData[dragonBones.DataParser.DEFAULT_ACTIONS],0,null,null);for(var _h=0,actions_3=actions;_h<actions_3.length;_h++){var action=actions_3[_h];armature.addAction(action,true);if(action.type===0){var animation=armature.getAnimation(action.name);if(animation!==null){armature.defaultAnimation=animation;}}}}if(dragonBones.DataParser.ACTIONS in rawData){var actions=this._parseActionData(rawData[dragonBones.DataParser.ACTIONS],0,null,null);for(var _j=0,actions_4=actions;_j<actions_4.length;_j++){var action=actions_4[_j];armature.addAction(action,false);}}this._rawBones.length=0;this._cacheRawMeshes.length=0;this._cacheMeshes.length=0;this._armature=null;for(var k in this._weightSlotPose){delete this._weightSlotPose[k];}for(var k in this._weightBonePoses){delete this._weightBonePoses[k];}for(var k in this._cacheBones){delete this._cacheBones[k];}for(var k in this._slotChildActions){delete this._slotChildActions[k];}return armature;};ObjectDataParser.prototype._parseBone=function(rawData){var type=0;var scale=this._armature.scale;if(dragonBones.DataParser.TYPE in rawData&&typeof rawData[dragonBones.DataParser.TYPE]==="string"){type=dragonBones.DataParser._getBoneType(rawData[dragonBones.DataParser.TYPE]);}else {type=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.TYPE,0);}if(type===0){var bone=dragonBones.BaseObject.borrowObject(dragonBones.BoneData);bone.inheritTranslation=ObjectDataParser._getBoolean(rawData,dragonBones.DataParser.INHERIT_TRANSLATION,true);bone.inheritRotation=ObjectDataParser._getBoolean(rawData,dragonBones.DataParser.INHERIT_ROTATION,true);bone.inheritScale=ObjectDataParser._getBoolean(rawData,dragonBones.DataParser.INHERIT_SCALE,true);bone.inheritReflection=ObjectDataParser._getBoolean(rawData,dragonBones.DataParser.INHERIT_REFLECTION,true);bone.length=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.LENGTH,0)*scale;bone.name=ObjectDataParser._getString(rawData,dragonBones.DataParser.NAME,"");if(dragonBones.DataParser.TRANSFORM in rawData){this._parseTransform(rawData[dragonBones.DataParser.TRANSFORM],bone.transform,scale);}return bone;}var surface=dragonBones.BaseObject.borrowObject(dragonBones.SurfaceData);surface.name=ObjectDataParser._getString(rawData,dragonBones.DataParser.NAME,"");surface.segmentX=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.SEGMENT_X,0);surface.segmentY=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.SEGMENT_Y,0);surface.vertices.length=(surface.segmentX+1)*(surface.segmentY+1)*2;if(dragonBones.DataParser.VERTICES in rawData){var rawVertices=rawData[dragonBones.DataParser.VERTICES];for(var i=0,l=surface.vertices.length;i<l;++i){if(i<rawVertices.length){surface.vertices[i]=rawVertices[i]*scale;}else {surface.vertices[i]=0.0;}}}return surface;};ObjectDataParser.prototype._parseIKConstraint=function(rawData){var bone=this._armature.getBone(ObjectDataParser._getString(rawData,dragonBones.DataParser.BONE,""));if(bone===null){return null;}var target=this._armature.getBone(ObjectDataParser._getString(rawData,dragonBones.DataParser.TARGET,""));if(target===null){return null;}var constraint=dragonBones.BaseObject.borrowObject(dragonBones.IKConstraintData);constraint.scaleEnabled=ObjectDataParser._getBoolean(rawData,dragonBones.DataParser.SCALE,false);constraint.bendPositive=ObjectDataParser._getBoolean(rawData,dragonBones.DataParser.BEND_POSITIVE,true);constraint.weight=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.WEIGHT,1.0);constraint.name=ObjectDataParser._getString(rawData,dragonBones.DataParser.NAME,"");constraint.type=0;constraint.target=target;var chain=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.CHAIN,0);if(chain>0&&bone.parent!==null){constraint.root=bone.parent;constraint.bone=bone;}else {constraint.root=bone;constraint.bone=null;}return constraint;};ObjectDataParser.prototype._parsePathConstraint=function(rawData){var target=this._armature.getSlot(ObjectDataParser._getString(rawData,dragonBones.DataParser.TARGET,""));if(target===null){return null;}var defaultSkin=this._armature.defaultSkin;if(defaultSkin===null){return null;}var targetDisplay=defaultSkin.getDisplay(target.name,ObjectDataParser._getString(rawData,dragonBones.DataParser.TARGET_DISPLAY,target.name));if(targetDisplay===null||!(targetDisplay instanceof dragonBones.PathDisplayData)){return null;}var bones=rawData[dragonBones.DataParser.BONES];if(bones===null||bones.length===0){return null;}var constraint=dragonBones.BaseObject.borrowObject(dragonBones.PathConstraintData);constraint.name=ObjectDataParser._getString(rawData,dragonBones.DataParser.NAME,"");constraint.type=1;constraint.pathSlot=target;constraint.pathDisplayData=targetDisplay;constraint.target=target.parent;constraint.positionMode=dragonBones.DataParser._getPositionMode(ObjectDataParser._getString(rawData,dragonBones.DataParser.POSITION_MODE,""));constraint.spacingMode=dragonBones.DataParser._getSpacingMode(ObjectDataParser._getString(rawData,dragonBones.DataParser.SPACING_MODE,""));constraint.rotateMode=dragonBones.DataParser._getRotateMode(ObjectDataParser._getString(rawData,dragonBones.DataParser.ROTATE_MODE,""));constraint.position=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.POSITION,0);constraint.spacing=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.SPACING,0);constraint.rotateOffset=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.ROTATE_OFFSET,0);constraint.rotateMix=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.ROTATE_MIX,1);constraint.translateMix=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.TRANSLATE_MIX,1);for(var _i=0,bones_3=bones;_i<bones_3.length;_i++){var boneName=bones_3[_i];var bone=this._armature.getBone(boneName);if(bone!==null){constraint.AddBone(bone);if(constraint.root===null){constraint.root=bone;}}}return constraint;};ObjectDataParser.prototype._parseSlot=function(rawData,zOrder){var slot=dragonBones.BaseObject.borrowObject(dragonBones.SlotData);slot.displayIndex=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.DISPLAY_INDEX,0);slot.zOrder=zOrder;slot.name=ObjectDataParser._getString(rawData,dragonBones.DataParser.NAME,"");slot.parent=this._armature.getBone(ObjectDataParser._getString(rawData,dragonBones.DataParser.PARENT,""));if(dragonBones.DataParser.BLEND_MODE in rawData&&typeof rawData[dragonBones.DataParser.BLEND_MODE]==="string"){slot.blendMode=dragonBones.DataParser._getBlendMode(rawData[dragonBones.DataParser.BLEND_MODE]);}else {slot.blendMode=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.BLEND_MODE,0);}if(dragonBones.DataParser.COLOR in rawData){slot.color=dragonBones.SlotData.createColor();this._parseColorTransform(rawData[dragonBones.DataParser.COLOR],slot.color);}else {slot.color=dragonBones.SlotData.DEFAULT_COLOR;}if(dragonBones.DataParser.ACTIONS in rawData){this._slotChildActions[slot.name]=this._parseActionData(rawData[dragonBones.DataParser.ACTIONS],0,null,null);}return slot;};ObjectDataParser.prototype._parseSkin=function(rawData){var skin=dragonBones.BaseObject.borrowObject(dragonBones.SkinData);skin.name=ObjectDataParser._getString(rawData,dragonBones.DataParser.NAME,dragonBones.DataParser.DEFAULT_NAME);if(skin.name.length===0){skin.name=dragonBones.DataParser.DEFAULT_NAME;}if(dragonBones.DataParser.SLOT in rawData){var rawSlots=rawData[dragonBones.DataParser.SLOT];this._skin=skin;for(var _i=0,rawSlots_2=rawSlots;_i<rawSlots_2.length;_i++){var rawSlot=rawSlots_2[_i];var slotName=ObjectDataParser._getString(rawSlot,dragonBones.DataParser.NAME,"");var slot=this._armature.getSlot(slotName);if(slot!==null){this._slot=slot;if(dragonBones.DataParser.DISPLAY in rawSlot){var rawDisplays=rawSlot[dragonBones.DataParser.DISPLAY];for(var _a=0,rawDisplays_1=rawDisplays;_a<rawDisplays_1.length;_a++){var rawDisplay=rawDisplays_1[_a];if(rawDisplay){skin.addDisplay(slotName,this._parseDisplay(rawDisplay));}else {skin.addDisplay(slotName,null);}}}this._slot=null;}}this._skin=null;}return skin;};ObjectDataParser.prototype._parseDisplay=function(rawData){var name=ObjectDataParser._getString(rawData,dragonBones.DataParser.NAME,"");var path=ObjectDataParser._getString(rawData,dragonBones.DataParser.PATH,"");var type=0;var display=null;if(dragonBones.DataParser.TYPE in rawData&&typeof rawData[dragonBones.DataParser.TYPE]==="string"){type=dragonBones.DataParser._getDisplayType(rawData[dragonBones.DataParser.TYPE]);}else {type=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.TYPE,type);}switch(type){case 0:var imageDisplay=display=dragonBones.BaseObject.borrowObject(dragonBones.ImageDisplayData);imageDisplay.name=name;imageDisplay.path=path.length>0?path:name;this._parsePivot(rawData,imageDisplay);break;case 1:var armatureDisplay=display=dragonBones.BaseObject.borrowObject(dragonBones.ArmatureDisplayData);armatureDisplay.name=name;armatureDisplay.path=path.length>0?path:name;armatureDisplay.inheritAnimation=true;if(dragonBones.DataParser.ACTIONS in rawData){var actions=this._parseActionData(rawData[dragonBones.DataParser.ACTIONS],0,null,null);for(var _i=0,actions_5=actions;_i<actions_5.length;_i++){var action=actions_5[_i];armatureDisplay.addAction(action);}}else if(this._slot.name in this._slotChildActions){var displays=this._skin.getDisplays(this._slot.name);if(displays===null?this._slot.displayIndex===0:this._slot.displayIndex===displays.length){for(var _a=0,_b=this._slotChildActions[this._slot.name];_a<_b.length;_a++){var action=_b[_a];armatureDisplay.addAction(action);}delete this._slotChildActions[this._slot.name];}}break;case 2:var meshDisplay=display=dragonBones.BaseObject.borrowObject(dragonBones.MeshDisplayData);meshDisplay.vertices.inheritDeform=ObjectDataParser._getBoolean(rawData,dragonBones.DataParser.INHERIT_DEFORM,true);meshDisplay.name=name;meshDisplay.path=path.length>0?path:name;meshDisplay.vertices.data=this._data;if(dragonBones.DataParser.SHARE in rawData){this._cacheRawMeshes.push(rawData);this._cacheMeshes.push(meshDisplay);}else {this._parseMesh(rawData,meshDisplay);}if(dragonBones.DataParser.GLUE_WEIGHTS in rawData&&dragonBones.DataParser.GLUE_MESHES in rawData){this._cacheRawMeshes.push(rawData);this._cacheMeshes.push(meshDisplay);}break;case 3:var boundingBox=this._parseBoundingBox(rawData);if(boundingBox!==null){var boundingBoxDisplay=display=dragonBones.BaseObject.borrowObject(dragonBones.BoundingBoxDisplayData);boundingBoxDisplay.name=name;boundingBoxDisplay.path=path.length>0?path:name;boundingBoxDisplay.boundingBox=boundingBox;}break;case 4:var rawCurveLengths=rawData[dragonBones.DataParser.LENGTHS];var pathDisplay=display=dragonBones.BaseObject.borrowObject(dragonBones.PathDisplayData);pathDisplay.closed=ObjectDataParser._getBoolean(rawData,dragonBones.DataParser.CLOSED,false);pathDisplay.constantSpeed=ObjectDataParser._getBoolean(rawData,dragonBones.DataParser.CONSTANT_SPEED,false);pathDisplay.name=name;pathDisplay.path=path.length>0?path:name;pathDisplay.vertices.data=this._data;pathDisplay.curveLengths.length=rawCurveLengths.length;for(var i=0,l=rawCurveLengths.length;i<l;++i){pathDisplay.curveLengths[i]=rawCurveLengths[i];}this._parsePath(rawData,pathDisplay);break;}if(display!==null&&dragonBones.DataParser.TRANSFORM in rawData){this._parseTransform(rawData[dragonBones.DataParser.TRANSFORM],display.transform,this._armature.scale);}return display;};ObjectDataParser.prototype._parsePath=function(rawData,display){var rawVertices=rawData[dragonBones.DataParser.VERTICES];var vertexCount=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.VERTEX_COUNT,0);var vertexOffset=this._floatArray.length;var pathOffset=this._intArray.length;display.vertices.offset=pathOffset;this._intArray.length+=1+1;this._intArray[pathOffset+0]=vertexCount;this._intArray[pathOffset+2]=vertexOffset;if(!(dragonBones.DataParser.WEIGHTS in rawData)){this._floatArray.length+=rawVertices.length;for(var i=0,l=rawVertices.length;i<l;++i){this._floatArray[vertexOffset+i]=rawVertices[i];}}else {var rawWeights=rawData[dragonBones.DataParser.WEIGHTS];var rawBones=rawData[dragonBones.DataParser.BONES];var weightBoneCount=rawBones.length;var weightCount=Math.floor(rawWeights.length-vertexCount)/2;var weightOffset=this._intArray.length;var floatOffset=this._floatArray.length;var sortedBones=this._armature.sortedBones;var weight=dragonBones.BaseObject.borrowObject(dragonBones.WeightData);weight.count=weightCount;weight.offset=weightOffset;this._intArray.length+=1+1+weightBoneCount+vertexCount+weightCount;this._intArray[weightOffset+0]=weightBoneCount;this._intArray[weightOffset+1]=floatOffset;for(var i=0;i<weightBoneCount;i++){var rawBoneIndex=rawBones[i];var bone=this._rawBones[rawBoneIndex];weight.addBone(bone);this._intArray[weightOffset+2+i]=sortedBones.indexOf(bone);}this._floatArray.length+=weightCount*3;for(var i=0,iW=0,iV=0,iB=weightOffset+2+weightBoneCount,iF=floatOffset;i<weightCount;i++){var boneCount=rawWeights[iW++];this._intArray[iB++]=boneCount;for(var j=0;j<boneCount;j++){var boneIndex=rawWeights[iW++];var boneWeight=rawWeights[iW++];var x=rawVertices[iV++];var y=rawVertices[iV++];this._intArray[iB++]=rawBones.indexOf(boneIndex);this._floatArray[iF++]=boneWeight;this._floatArray[iF++]=x;this._floatArray[iF++]=y;}}display.vertices.weight=weight;}};ObjectDataParser.prototype._parsePivot=function(rawData,display){if(dragonBones.DataParser.PIVOT in rawData){var rawPivot=rawData[dragonBones.DataParser.PIVOT];display.pivot.x=ObjectDataParser._getNumber(rawPivot,dragonBones.DataParser.X,0.0);display.pivot.y=ObjectDataParser._getNumber(rawPivot,dragonBones.DataParser.Y,0.0);}else {display.pivot.x=0.5;display.pivot.y=0.5;}};ObjectDataParser.prototype._parseMesh=function(rawData,mesh){var rawVertices=rawData[dragonBones.DataParser.VERTICES];var rawUVs=rawData[dragonBones.DataParser.UVS];var rawTriangles=rawData[dragonBones.DataParser.TRIANGLES];var vertexCount=Math.floor(rawVertices.length/2);var triangleCount=Math.floor(rawTriangles.length/3);var vertexOffset=this._floatArray.length;var uvOffset=vertexOffset+vertexCount*2;var meshOffset=this._intArray.length;var meshName=this._skin.name+"_"+this._slot.name+"_"+mesh.name;mesh.vertices.offset=meshOffset;this._intArray.length+=1+1+1+1+triangleCount*3;this._intArray[meshOffset+0]=vertexCount;this._intArray[meshOffset+1]=triangleCount;this._intArray[meshOffset+2]=vertexOffset;for(var i=0,l=triangleCount*3;i<l;++i){this._intArray[meshOffset+4+i]=rawTriangles[i];}this._floatArray.length+=vertexCount*2+vertexCount*2;for(var i=0,l=vertexCount*2;i<l;++i){this._floatArray[vertexOffset+i]=rawVertices[i];this._floatArray[uvOffset+i]=rawUVs[i];}if(dragonBones.DataParser.WEIGHTS in rawData){var rawWeights=rawData[dragonBones.DataParser.WEIGHTS];var rawSlotPose=rawData[dragonBones.DataParser.SLOT_POSE];var rawBonePoses=rawData[dragonBones.DataParser.BONE_POSE];var sortedBones=this._armature.sortedBones;var weightBoneIndices=new Array();var weightBoneCount=Math.floor(rawBonePoses.length/7);var floatOffset=this._floatArray.length;var weightCount=Math.floor(rawWeights.length-vertexCount)/2;var weightOffset=this._intArray.length;var weight=dragonBones.BaseObject.borrowObject(dragonBones.WeightData);weight.count=weightCount;weight.offset=weightOffset;weightBoneIndices.length=weightBoneCount;this._intArray.length+=1+1+weightBoneCount+vertexCount+weightCount;this._intArray[weightOffset+1]=floatOffset;for(var i=0;i<weightBoneCount;++i){var rawBoneIndex=rawBonePoses[i*7];var bone=this._rawBones[rawBoneIndex];weight.addBone(bone);weightBoneIndices[i]=rawBoneIndex;this._intArray[weightOffset+2+i]=sortedBones.indexOf(bone);}this._floatArray.length+=weightCount*3;this._helpMatrixA.copyFromArray(rawSlotPose,0);for(var i=0,iW=0,iB=weightOffset+2+weightBoneCount,iV=floatOffset;i<vertexCount;++i){var iD=i*2;var vertexBoneCount=this._intArray[iB++]=rawWeights[iW++];var x=this._floatArray[vertexOffset+iD];var y=this._floatArray[vertexOffset+iD+1];this._helpMatrixA.transformPoint(x,y,this._helpPoint);x=this._helpPoint.x;y=this._helpPoint.y;for(var j=0;j<vertexBoneCount;++j){var rawBoneIndex=rawWeights[iW++];var boneIndex=weightBoneIndices.indexOf(rawBoneIndex);this._helpMatrixB.copyFromArray(rawBonePoses,boneIndex*7+1);this._helpMatrixB.invert();this._helpMatrixB.transformPoint(x,y,this._helpPoint);this._intArray[iB++]=boneIndex;this._floatArray[iV++]=rawWeights[iW++];this._floatArray[iV++]=this._helpPoint.x;this._floatArray[iV++]=this._helpPoint.y;}}mesh.vertices.weight=weight;this._weightSlotPose[meshName]=rawSlotPose;this._weightBonePoses[meshName]=rawBonePoses;}};ObjectDataParser.prototype._parseMeshGlue=function(rawData,mesh){};ObjectDataParser.prototype._parseBoundingBox=function(rawData){var boundingBox=null;var type=0;if(dragonBones.DataParser.SUB_TYPE in rawData&&typeof rawData[dragonBones.DataParser.SUB_TYPE]==="string"){type=dragonBones.DataParser._getBoundingBoxType(rawData[dragonBones.DataParser.SUB_TYPE]);}else {type=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.SUB_TYPE,type);}switch(type){case 0:boundingBox=dragonBones.BaseObject.borrowObject(dragonBones.RectangleBoundingBoxData);break;case 1:boundingBox=dragonBones.BaseObject.borrowObject(dragonBones.EllipseBoundingBoxData);break;case 2:boundingBox=this._parsePolygonBoundingBox(rawData);break;}if(boundingBox!==null){boundingBox.color=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.COLOR,0x000000);if(boundingBox.type===0||boundingBox.type===1){boundingBox.width=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.WIDTH,0.0);boundingBox.height=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.HEIGHT,0.0);}}return boundingBox;};ObjectDataParser.prototype._parsePolygonBoundingBox=function(rawData){var polygonBoundingBox=dragonBones.BaseObject.borrowObject(dragonBones.PolygonBoundingBoxData);if(dragonBones.DataParser.VERTICES in rawData){var scale=this._armature.scale;var rawVertices=rawData[dragonBones.DataParser.VERTICES];var vertices=polygonBoundingBox.vertices;if(dragonBones.DragonBones.webAssembly){vertices.resize(rawVertices.length,0.0);}else {vertices.length=rawVertices.length;}for(var i=0,l=rawVertices.length;i<l;i+=2){var x=rawVertices[i]*scale;var y=rawVertices[i+1]*scale;if(dragonBones.DragonBones.webAssembly){vertices.set(i,x);vertices.set(i+1,y);}else {vertices[i]=x;vertices[i+1]=y;}if(i===0){polygonBoundingBox.x=x;polygonBoundingBox.y=y;polygonBoundingBox.width=x;polygonBoundingBox.height=y;}else {if(x<polygonBoundingBox.x){polygonBoundingBox.x=x;}else if(x>polygonBoundingBox.width){polygonBoundingBox.width=x;}if(y<polygonBoundingBox.y){polygonBoundingBox.y=y;}else if(y>polygonBoundingBox.height){polygonBoundingBox.height=y;}}}polygonBoundingBox.width-=polygonBoundingBox.x;polygonBoundingBox.height-=polygonBoundingBox.y;}else {console.warn("Data error.\n Please reexport DragonBones Data to fixed the bug.");}return polygonBoundingBox;};ObjectDataParser.prototype._parseAnimation=function(rawData){var animation=dragonBones.BaseObject.borrowObject(dragonBones.AnimationData);animation.frameCount=Math.max(ObjectDataParser._getNumber(rawData,dragonBones.DataParser.DURATION,1),1);animation.playTimes=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.PLAY_TIMES,1);animation.duration=animation.frameCount/this._armature.frameRate;animation.fadeInTime=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.FADE_IN_TIME,0.0);animation.scale=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.SCALE,1.0);animation.name=ObjectDataParser._getString(rawData,dragonBones.DataParser.NAME,dragonBones.DataParser.DEFAULT_NAME);if(animation.name.length===0){animation.name=dragonBones.DataParser.DEFAULT_NAME;}animation.frameIntOffset=this._frameIntArray.length;animation.frameFloatOffset=this._frameFloatArray.length;animation.frameOffset=this._frameArray.length;this._animation=animation;if(dragonBones.DataParser.FRAME in rawData){var rawFrames=rawData[dragonBones.DataParser.FRAME];var keyFrameCount=rawFrames.length;if(keyFrameCount>0){for(var i=0,frameStart=0;i<keyFrameCount;++i){var rawFrame=rawFrames[i];this._parseActionDataInFrame(rawFrame,frameStart,null,null);frameStart+=ObjectDataParser._getNumber(rawFrame,dragonBones.DataParser.DURATION,1);}}}if(dragonBones.DataParser.Z_ORDER in rawData){this._animation.zOrderTimeline=this._parseTimeline(rawData[dragonBones.DataParser.Z_ORDER],null,dragonBones.DataParser.FRAME,1,false,false,0,this._parseZOrderFrame);}if(dragonBones.DataParser.BONE in rawData){var rawTimelines=rawData[dragonBones.DataParser.BONE];for(var _i=0,rawTimelines_1=rawTimelines;_i<rawTimelines_1.length;_i++){var rawTimeline=rawTimelines_1[_i];this._parseBoneTimeline(rawTimeline);}}if(dragonBones.DataParser.SURFACE in rawData){var rawTimelines=rawData[dragonBones.DataParser.SURFACE];for(var _a=0,rawTimelines_2=rawTimelines;_a<rawTimelines_2.length;_a++){var rawTimeline=rawTimelines_2[_a];var surfaceName=ObjectDataParser._getString(rawTimeline,dragonBones.DataParser.NAME,"");this._surface=this._armature.getBone(surfaceName);if(this._surface===null){continue;}var timeline=this._parseTimeline(rawTimeline,null,dragonBones.DataParser.FRAME,50,false,true,0,this._parseSurfaceFrame);if(timeline!==null){this._animation.addSurfaceTimeline(this._surface,timeline);}this._surface=null;}}if(dragonBones.DataParser.SLOT in rawData){var rawTimelines=rawData[dragonBones.DataParser.SLOT];for(var _b=0,rawTimelines_3=rawTimelines;_b<rawTimelines_3.length;_b++){var rawTimeline=rawTimelines_3[_b];this._parseSlotTimeline(rawTimeline);}}if(dragonBones.DataParser.FFD in rawData){var rawTimelines=rawData[dragonBones.DataParser.FFD];for(var _c=0,rawTimelines_4=rawTimelines;_c<rawTimelines_4.length;_c++){var rawTimeline=rawTimelines_4[_c];var skinName=ObjectDataParser._getString(rawTimeline,dragonBones.DataParser.SKIN,dragonBones.DataParser.DEFAULT_NAME);var slotName=ObjectDataParser._getString(rawTimeline,dragonBones.DataParser.SLOT,"");var displayName=ObjectDataParser._getString(rawTimeline,dragonBones.DataParser.NAME,"");if(skinName.length===0){skinName=dragonBones.DataParser.DEFAULT_NAME;}this._slot=this._armature.getSlot(slotName);this._mesh=this._armature.getMesh(skinName,slotName,displayName);if(this._slot===null||this._mesh===null){continue;}var timeline=this._parseTimeline(rawTimeline,null,dragonBones.DataParser.FRAME,22,false,true,0,this._parseSlotFFDFrame);if(timeline!==null){this._animation.addSlotTimeline(this._slot,timeline);}this._slot=null;this._mesh=null;}}if(dragonBones.DataParser.IK in rawData){var rawTimelines=rawData[dragonBones.DataParser.IK];for(var _d=0,rawTimelines_5=rawTimelines;_d<rawTimelines_5.length;_d++){var rawTimeline=rawTimelines_5[_d];var constraintName=ObjectDataParser._getString(rawTimeline,dragonBones.DataParser.NAME,"");var constraint=this._armature.getConstraint(constraintName);if(constraint===null){continue;}var timeline=this._parseTimeline(rawTimeline,null,dragonBones.DataParser.FRAME,30,true,false,2,this._parseIKConstraintFrame);if(timeline!==null){this._animation.addConstraintTimeline(constraint,timeline);}}}if(dragonBones.DataParser.ANIMATION in rawData){var rawTimelines=rawData[dragonBones.DataParser.ANIMATION];for(var _e=0,rawTimelines_6=rawTimelines;_e<rawTimelines_6.length;_e++){var rawTimeline=rawTimelines_6[_e];var animationName=ObjectDataParser._getString(rawTimeline,dragonBones.DataParser.NAME,"");var timeline=this._parseTimeline(rawTimeline,null,dragonBones.DataParser.FRAME,40,true,false,2,this._parseAnimationFrame);if(timeline!==null){this._animation.addAnimationTimeline(animationName,timeline);}}}if(this._actionFrames.length>0){this._animation.actionTimeline=this._parseTimeline(null,this._actionFrames,"",0,false,false,0,this._parseActionFrame);this._actionFrames.length=0;}this._animation=null;return animation;};ObjectDataParser.prototype._parseTimeline=function(rawData,rawFrames,framesKey,type,addIntOffset,addFloatOffset,frameValueCount,frameParser){if(rawData!==null&&framesKey.length>0&&framesKey in rawData){rawFrames=rawData[framesKey];}if(rawFrames===null){return null;}var keyFrameCount=rawFrames.length;if(keyFrameCount===0){return null;}var frameIntArrayLength=this._frameIntArray.length;var frameFloatArrayLength=this._frameFloatArray.length;var timeline=dragonBones.BaseObject.borrowObject(dragonBones.TimelineData);var timelineOffset=this._timelineArray.length;this._timelineArray.length+=1+1+1+1+1+keyFrameCount;if(rawData!==null){this._timelineArray[timelineOffset+0]=Math.round(ObjectDataParser._getNumber(rawData,dragonBones.DataParser.SCALE,1.0)*100);this._timelineArray[timelineOffset+1]=Math.round(ObjectDataParser._getNumber(rawData,dragonBones.DataParser.OFFSET,0.0)*100);}else {this._timelineArray[timelineOffset+0]=100;this._timelineArray[timelineOffset+1]=0;}this._timelineArray[timelineOffset+2]=keyFrameCount;this._timelineArray[timelineOffset+3]=frameValueCount;if(addIntOffset){this._timelineArray[timelineOffset+4]=frameIntArrayLength-this._animation.frameIntOffset;}else if(addFloatOffset){this._timelineArray[timelineOffset+4]=frameFloatArrayLength-this._animation.frameFloatOffset;}else {this._timelineArray[timelineOffset+4]=0;}this._timeline=timeline;timeline.type=type;timeline.offset=timelineOffset;if(keyFrameCount===1){timeline.frameIndicesOffset=-1;this._timelineArray[timelineOffset+5+0]=frameParser.call(this,rawFrames[0],0,0)-this._animation.frameOffset;}else {var totalFrameCount=this._animation.frameCount+1;var frameIndices=this._data.frameIndices;var frameIndicesOffset=0;if(dragonBones.DragonBones.webAssembly){frameIndicesOffset=frameIndices.size();frameIndices.resize(frameIndicesOffset+totalFrameCount,0);}else {frameIndicesOffset=frameIndices.length;frameIndices.length+=totalFrameCount;}timeline.frameIndicesOffset=frameIndicesOffset;for(var i=0,iK=0,frameStart=0,frameCount=0;i<totalFrameCount;++i){if(frameStart+frameCount<=i&&iK<keyFrameCount){var rawFrame=rawFrames[iK];frameStart=i;if(iK===keyFrameCount-1){frameCount=this._animation.frameCount-frameStart;}else {if(rawFrame instanceof ActionFrame){frameCount=this._actionFrames[iK+1].frameStart-frameStart;}else {frameCount=ObjectDataParser._getNumber(rawFrame,dragonBones.DataParser.DURATION,1);}}this._timelineArray[timelineOffset+5+iK]=frameParser.call(this,rawFrame,frameStart,frameCount)-this._animation.frameOffset;iK++;}if(dragonBones.DragonBones.webAssembly){frameIndices.set(frameIndicesOffset+i,iK-1);}else {frameIndices[frameIndicesOffset+i]=iK-1;}}}this._timeline=null;return timeline;};ObjectDataParser.prototype._parseBoneTimeline=function(rawData){var bone=this._armature.getBone(ObjectDataParser._getString(rawData,dragonBones.DataParser.NAME,""));if(bone===null){return;}this._bone=bone;this._slot=this._armature.getSlot(this._bone.name);if(dragonBones.DataParser.TRANSLATE_FRAME in rawData){var timeline=this._parseTimeline(rawData,null,dragonBones.DataParser.TRANSLATE_FRAME,11,false,true,2,this._parseBoneTranslateFrame);if(timeline!==null){this._animation.addBoneTimeline(bone,timeline);}}if(dragonBones.DataParser.ROTATE_FRAME in rawData){var timeline=this._parseTimeline(rawData,null,dragonBones.DataParser.ROTATE_FRAME,12,false,true,2,this._parseBoneRotateFrame);if(timeline!==null){this._animation.addBoneTimeline(bone,timeline);}}if(dragonBones.DataParser.SCALE_FRAME in rawData){var timeline=this._parseTimeline(rawData,null,dragonBones.DataParser.SCALE_FRAME,13,false,true,2,this._parseBoneScaleFrame);if(timeline!==null){this._animation.addBoneTimeline(bone,timeline);}}if(dragonBones.DataParser.FRAME in rawData){var timeline=this._parseTimeline(rawData,null,dragonBones.DataParser.FRAME,10,false,true,6,this._parseBoneAllFrame);if(timeline!==null){this._animation.addBoneTimeline(bone,timeline);}}this._bone=null;this._slot=null;};ObjectDataParser.prototype._parseSlotTimeline=function(rawData){var slot=this._armature.getSlot(ObjectDataParser._getString(rawData,dragonBones.DataParser.NAME,""));if(slot===null){return;}this._slot=slot;var displayTimeline=null;if(dragonBones.DataParser.DISPLAY_FRAME in rawData){displayTimeline=this._parseTimeline(rawData,null,dragonBones.DataParser.DISPLAY_FRAME,20,false,false,0,this._parseSlotDisplayFrame);}else {displayTimeline=this._parseTimeline(rawData,null,dragonBones.DataParser.FRAME,20,false,false,0,this._parseSlotDisplayFrame);}if(displayTimeline!==null){this._animation.addSlotTimeline(slot,displayTimeline);}var colorTimeline=null;if(dragonBones.DataParser.COLOR_FRAME in rawData){colorTimeline=this._parseTimeline(rawData,null,dragonBones.DataParser.COLOR_FRAME,21,true,false,1,this._parseSlotColorFrame);}else {colorTimeline=this._parseTimeline(rawData,null,dragonBones.DataParser.FRAME,21,true,false,1,this._parseSlotColorFrame);}if(colorTimeline!==null){this._animation.addSlotTimeline(slot,colorTimeline);}this._slot=null;};ObjectDataParser.prototype._parseFrame=function(rawData,frameStart,frameCount){var frameOffset=this._frameArray.length;this._frameArray.length+=1;this._frameArray[frameOffset+0]=frameStart;return frameOffset;};ObjectDataParser.prototype._parseTweenFrame=function(rawData,frameStart,frameCount){var frameOffset=this._parseFrame(rawData,frameStart,frameCount);if(frameCount>0){if(dragonBones.DataParser.CURVE in rawData){var sampleCount=frameCount+1;this._helpArray.length=sampleCount;this._samplingEasingCurve(rawData[dragonBones.DataParser.CURVE],this._helpArray);this._frameArray.length+=1+1+this._helpArray.length;this._frameArray[frameOffset+1]=2;this._frameArray[frameOffset+2]=sampleCount;for(var i=0;i<sampleCount;++i){this._frameArray[frameOffset+3+i]=Math.round(this._helpArray[i]*10000.0);}}else {var noTween=-2.0;var tweenEasing=noTween;if(dragonBones.DataParser.TWEEN_EASING in rawData){tweenEasing=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.TWEEN_EASING,noTween);}if(tweenEasing===noTween){this._frameArray.length+=1;this._frameArray[frameOffset+1]=0;}else if(tweenEasing===0.0){this._frameArray.length+=1;this._frameArray[frameOffset+1]=1;}else if(tweenEasing<0.0){this._frameArray.length+=1+1;this._frameArray[frameOffset+1]=3;this._frameArray[frameOffset+2]=Math.round(-tweenEasing*100.0);}else if(tweenEasing<=1.0){this._frameArray.length+=1+1;this._frameArray[frameOffset+1]=4;this._frameArray[frameOffset+2]=Math.round(tweenEasing*100.0);}else {this._frameArray.length+=1+1;this._frameArray[frameOffset+1]=5;this._frameArray[frameOffset+2]=Math.round(tweenEasing*100.0-100.0);}}}else {this._frameArray.length+=1;this._frameArray[frameOffset+1]=0;}return frameOffset;};ObjectDataParser.prototype._parseActionFrame=function(frame,frameStart,frameCount){var frameOffset=this._frameArray.length;var actionCount=frame.actions.length;this._frameArray.length+=1+1+actionCount;this._frameArray[frameOffset+0]=frameStart;this._frameArray[frameOffset+0+1]=actionCount;for(var i=0;i<actionCount;++i){this._frameArray[frameOffset+0+2+i]=frame.actions[i];}return frameOffset;};ObjectDataParser.prototype._parseZOrderFrame=function(rawData,frameStart,frameCount){var frameOffset=this._parseFrame(rawData,frameStart,frameCount);if(dragonBones.DataParser.Z_ORDER in rawData){var rawZOrder=rawData[dragonBones.DataParser.Z_ORDER];if(rawZOrder.length>0){var slotCount=this._armature.sortedSlots.length;var unchanged=new Array(slotCount-rawZOrder.length/2);var zOrders=new Array(slotCount);for(var i_1=0;i_1<unchanged.length;++i_1){unchanged[i_1]=0;}for(var i_2=0;i_2<slotCount;++i_2){zOrders[i_2]=-1;}var originalIndex=0;var unchangedIndex=0;for(var i_3=0,l=rawZOrder.length;i_3<l;i_3+=2){var slotIndex=rawZOrder[i_3];var zOrderOffset=rawZOrder[i_3+1];while(originalIndex!==slotIndex){unchanged[unchangedIndex++]=originalIndex++;}var index=originalIndex+zOrderOffset;zOrders[index]=originalIndex++;}while(originalIndex<slotCount){unchanged[unchangedIndex++]=originalIndex++;}this._frameArray.length+=1+slotCount;this._frameArray[frameOffset+1]=slotCount;var i=slotCount;while(i--){if(zOrders[i]===-1){this._frameArray[frameOffset+2+i]=unchanged[--unchangedIndex]||0;}else {this._frameArray[frameOffset+2+i]=zOrders[i]||0;}}return frameOffset;}}this._frameArray.length+=1;this._frameArray[frameOffset+1]=0;return frameOffset;};ObjectDataParser.prototype._parseBoneAllFrame=function(rawData,frameStart,frameCount){this._helpTransform.identity();if(dragonBones.DataParser.TRANSFORM in rawData){this._parseTransform(rawData[dragonBones.DataParser.TRANSFORM],this._helpTransform,1.0);}var rotation=this._helpTransform.rotation;if(frameStart!==0){if(this._prevClockwise===0){rotation=this._prevRotation+dragonBones.Transform.normalizeRadian(rotation-this._prevRotation);}else {if(this._prevClockwise>0?rotation>=this._prevRotation:rotation<=this._prevRotation){this._prevClockwise=this._prevClockwise>0?this._prevClockwise-1:this._prevClockwise+1;}rotation=this._prevRotation+rotation-this._prevRotation+dragonBones.Transform.PI_D*this._prevClockwise;}}this._prevClockwise=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.TWEEN_ROTATE,0.0);this._prevRotation=rotation;var frameOffset=this._parseTweenFrame(rawData,frameStart,frameCount);var frameFloatOffset=this._frameFloatArray.length;this._frameFloatArray.length+=6;this._frameFloatArray[frameFloatOffset++]=this._helpTransform.x;this._frameFloatArray[frameFloatOffset++]=this._helpTransform.y;this._frameFloatArray[frameFloatOffset++]=rotation;this._frameFloatArray[frameFloatOffset++]=this._helpTransform.skew;this._frameFloatArray[frameFloatOffset++]=this._helpTransform.scaleX;this._frameFloatArray[frameFloatOffset++]=this._helpTransform.scaleY;this._parseActionDataInFrame(rawData,frameStart,this._bone,this._slot);return frameOffset;};ObjectDataParser.prototype._parseBoneTranslateFrame=function(rawData,frameStart,frameCount){var frameOffset=this._parseTweenFrame(rawData,frameStart,frameCount);var frameFloatOffset=this._frameFloatArray.length;this._frameFloatArray.length+=2;this._frameFloatArray[frameFloatOffset++]=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.X,0.0);this._frameFloatArray[frameFloatOffset++]=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.Y,0.0);return frameOffset;};ObjectDataParser.prototype._parseBoneRotateFrame=function(rawData,frameStart,frameCount){var rotation=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.ROTATE,0.0)*dragonBones.Transform.DEG_RAD;if(frameStart!==0){if(this._prevClockwise===0){rotation=this._prevRotation+dragonBones.Transform.normalizeRadian(rotation-this._prevRotation);}else {if(this._prevClockwise>0?rotation>=this._prevRotation:rotation<=this._prevRotation){this._prevClockwise=this._prevClockwise>0?this._prevClockwise-1:this._prevClockwise+1;}rotation=this._prevRotation+rotation-this._prevRotation+dragonBones.Transform.PI_D*this._prevClockwise;}}this._prevClockwise=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.CLOCK_WISE,0);this._prevRotation=rotation;var frameOffset=this._parseTweenFrame(rawData,frameStart,frameCount);var frameFloatOffset=this._frameFloatArray.length;this._frameFloatArray.length+=2;this._frameFloatArray[frameFloatOffset++]=rotation;this._frameFloatArray[frameFloatOffset++]=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.SKEW,0.0)*dragonBones.Transform.DEG_RAD;return frameOffset;};ObjectDataParser.prototype._parseBoneScaleFrame=function(rawData,frameStart,frameCount){var frameOffset=this._parseTweenFrame(rawData,frameStart,frameCount);var frameFloatOffset=this._frameFloatArray.length;this._frameFloatArray.length+=2;this._frameFloatArray[frameFloatOffset++]=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.X,1.0);this._frameFloatArray[frameFloatOffset++]=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.Y,1.0);return frameOffset;};ObjectDataParser.prototype._parseSurfaceFrame=function(rawData,frameStart,frameCount){var frameFloatOffset=this._frameFloatArray.length;var frameOffset=this._parseTweenFrame(rawData,frameStart,frameCount);var rawVertices=rawData[dragonBones.DataParser.VERTICES];var offset=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.OFFSET,0);var vertexCount=this._surface.vertices.length/2;var x=0.0;var y=0.0;this._frameFloatArray.length+=vertexCount*2;for(var i=0;i<vertexCount*2;i+=2){if(i<offset||i-offset>=rawVertices.length){x=0.0;}else {x=rawVertices[i-offset];}if(i+1<offset||i+1-offset>=rawVertices.length){y=0.0;}else {y=rawVertices[i+1-offset];}this._frameFloatArray[frameFloatOffset+i]=x;this._frameFloatArray[frameFloatOffset+i+1]=y;}if(frameStart===0){var frameIntOffset=this._frameIntArray.length;this._frameIntArray.length+=1+1+1+1+1;this._frameIntArray[frameIntOffset+0]=0;this._frameIntArray[frameIntOffset+1]=this._frameFloatArray.length-frameFloatOffset;this._frameIntArray[frameIntOffset+2]=this._frameFloatArray.length-frameFloatOffset;this._frameIntArray[frameIntOffset+3]=0;this._frameIntArray[frameIntOffset+4]=frameFloatOffset-this._animation.frameFloatOffset;this._timelineArray[this._timeline.offset+3]=frameIntOffset-this._animation.frameIntOffset;}return frameOffset;};ObjectDataParser.prototype._parseSlotDisplayFrame=function(rawData,frameStart,frameCount){var frameOffset=this._parseFrame(rawData,frameStart,frameCount);this._frameArray.length+=1;if(dragonBones.DataParser.VALUE in rawData){this._frameArray[frameOffset+1]=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.VALUE,0);}else {this._frameArray[frameOffset+1]=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.DISPLAY_INDEX,0);}this._parseActionDataInFrame(rawData,frameStart,this._slot.parent,this._slot);return frameOffset;};ObjectDataParser.prototype._parseSlotColorFrame=function(rawData,frameStart,frameCount){var frameOffset=this._parseTweenFrame(rawData,frameStart,frameCount);var colorOffset=-1;if(dragonBones.DataParser.VALUE in rawData||dragonBones.DataParser.COLOR in rawData){var rawColor=dragonBones.DataParser.VALUE in rawData?rawData[dragonBones.DataParser.VALUE]:rawData[dragonBones.DataParser.COLOR];for(var k in rawColor){this._parseColorTransform(rawColor,this._helpColorTransform);colorOffset=this._intArray.length;this._intArray.length+=8;this._intArray[colorOffset++]=Math.round(this._helpColorTransform.alphaMultiplier*100);this._intArray[colorOffset++]=Math.round(this._helpColorTransform.redMultiplier*100);this._intArray[colorOffset++]=Math.round(this._helpColorTransform.greenMultiplier*100);this._intArray[colorOffset++]=Math.round(this._helpColorTransform.blueMultiplier*100);this._intArray[colorOffset++]=Math.round(this._helpColorTransform.alphaOffset);this._intArray[colorOffset++]=Math.round(this._helpColorTransform.redOffset);this._intArray[colorOffset++]=Math.round(this._helpColorTransform.greenOffset);this._intArray[colorOffset++]=Math.round(this._helpColorTransform.blueOffset);colorOffset-=8;break;}}if(colorOffset<0){if(this._defaultColorOffset<0){this._defaultColorOffset=colorOffset=this._intArray.length;this._intArray.length+=8;this._intArray[colorOffset++]=100;this._intArray[colorOffset++]=100;this._intArray[colorOffset++]=100;this._intArray[colorOffset++]=100;this._intArray[colorOffset++]=0;this._intArray[colorOffset++]=0;this._intArray[colorOffset++]=0;this._intArray[colorOffset++]=0;}colorOffset=this._defaultColorOffset;}var frameIntOffset=this._frameIntArray.length;this._frameIntArray.length+=1;this._frameIntArray[frameIntOffset]=colorOffset;return frameOffset;};ObjectDataParser.prototype._parseSlotFFDFrame=function(rawData,frameStart,frameCount){var frameFloatOffset=this._frameFloatArray.length;var frameOffset=this._parseTweenFrame(rawData,frameStart,frameCount);var rawVertices=dragonBones.DataParser.VERTICES in rawData?rawData[dragonBones.DataParser.VERTICES]:null;var offset=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.OFFSET,0);var vertexCount=this._intArray[this._mesh.vertices.offset+0];var meshName=this._mesh.parent.name+"_"+this._slot.name+"_"+this._mesh.name;var weight=this._mesh.vertices.weight;var x=0.0;var y=0.0;var iB=0;var iV=0;if(weight!==null){var rawSlotPose=this._weightSlotPose[meshName];this._helpMatrixA.copyFromArray(rawSlotPose,0);this._frameFloatArray.length+=weight.count*2;iB=weight.offset+2+weight.bones.length;}else {this._frameFloatArray.length+=vertexCount*2;}for(var i=0;i<vertexCount*2;i+=2){if(rawVertices===null){x=0.0;y=0.0;}else {if(i<offset||i-offset>=rawVertices.length){x=0.0;}else {x=rawVertices[i-offset];}if(i+1<offset||i+1-offset>=rawVertices.length){y=0.0;}else {y=rawVertices[i+1-offset];}}if(weight!==null){var rawBonePoses=this._weightBonePoses[meshName];var vertexBoneCount=this._intArray[iB++];this._helpMatrixA.transformPoint(x,y,this._helpPoint,true);x=this._helpPoint.x;y=this._helpPoint.y;for(var j=0;j<vertexBoneCount;++j){var boneIndex=this._intArray[iB++];this._helpMatrixB.copyFromArray(rawBonePoses,boneIndex*7+1);this._helpMatrixB.invert();this._helpMatrixB.transformPoint(x,y,this._helpPoint,true);this._frameFloatArray[frameFloatOffset+iV++]=this._helpPoint.x;this._frameFloatArray[frameFloatOffset+iV++]=this._helpPoint.y;}}else {this._frameFloatArray[frameFloatOffset+i]=x;this._frameFloatArray[frameFloatOffset+i+1]=y;}}if(frameStart===0){var frameIntOffset=this._frameIntArray.length;this._frameIntArray.length+=1+1+1+1+1;this._frameIntArray[frameIntOffset+0]=this._mesh.vertices.offset;this._frameIntArray[frameIntOffset+1]=this._frameFloatArray.length-frameFloatOffset;this._frameIntArray[frameIntOffset+2]=this._frameFloatArray.length-frameFloatOffset;this._frameIntArray[frameIntOffset+3]=0;this._frameIntArray[frameIntOffset+4]=frameFloatOffset-this._animation.frameFloatOffset;this._timelineArray[this._timeline.offset+3]=frameIntOffset-this._animation.frameIntOffset;}return frameOffset;};ObjectDataParser.prototype._parseIKConstraintFrame=function(rawData,frameStart,frameCount){var frameOffset=this._parseTweenFrame(rawData,frameStart,frameCount);var frameIntOffset=this._frameIntArray.length;this._frameIntArray.length+=2;this._frameIntArray[frameIntOffset++]=ObjectDataParser._getBoolean(rawData,dragonBones.DataParser.BEND_POSITIVE,true)?1:0;this._frameIntArray[frameIntOffset++]=Math.round(ObjectDataParser._getNumber(rawData,dragonBones.DataParser.WEIGHT,1.0)*100.0);return frameOffset;};ObjectDataParser.prototype._parseAnimationFrame=function(rawData,frameStart,frameCount){var frameOffset=this._parseTweenFrame(rawData,frameStart,frameCount);var frameIntOffset=this._frameIntArray.length;this._frameIntArray.length+=2;this._frameIntArray[frameIntOffset++]=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.VALUE,0);this._frameIntArray[frameIntOffset++]=Math.round(ObjectDataParser._getNumber(rawData,dragonBones.DataParser.WEIGHT,1.0)*100.0);return frameOffset;};ObjectDataParser.prototype._parseActionData=function(rawData,type,bone,slot){var actions=new Array();if(typeof rawData==="string"){var action=dragonBones.BaseObject.borrowObject(dragonBones.ActionData);action.type=type;action.name=rawData;action.bone=bone;action.slot=slot;actions.push(action);}else if(rawData instanceof Array){for(var _i=0,rawData_2=rawData;_i<rawData_2.length;_i++){var rawAction=rawData_2[_i];var action=dragonBones.BaseObject.borrowObject(dragonBones.ActionData);if(dragonBones.DataParser.GOTO_AND_PLAY in rawAction){action.type=0;action.name=ObjectDataParser._getString(rawAction,dragonBones.DataParser.GOTO_AND_PLAY,"");}else {if(dragonBones.DataParser.TYPE in rawAction&&typeof rawAction[dragonBones.DataParser.TYPE]==="string"){action.type=dragonBones.DataParser._getActionType(rawAction[dragonBones.DataParser.TYPE]);}else {action.type=ObjectDataParser._getNumber(rawAction,dragonBones.DataParser.TYPE,type);}action.name=ObjectDataParser._getString(rawAction,dragonBones.DataParser.NAME,"");}if(dragonBones.DataParser.BONE in rawAction){var boneName=ObjectDataParser._getString(rawAction,dragonBones.DataParser.BONE,"");action.bone=this._armature.getBone(boneName);}else {action.bone=bone;}if(dragonBones.DataParser.SLOT in rawAction){var slotName=ObjectDataParser._getString(rawAction,dragonBones.DataParser.SLOT,"");action.slot=this._armature.getSlot(slotName);}else {action.slot=slot;}var userData=null;if(dragonBones.DataParser.INTS in rawAction){if(userData===null){userData=dragonBones.BaseObject.borrowObject(dragonBones.UserData);}var rawInts=rawAction[dragonBones.DataParser.INTS];for(var _a=0,rawInts_1=rawInts;_a<rawInts_1.length;_a++){var rawValue=rawInts_1[_a];userData.addInt(rawValue);}}if(dragonBones.DataParser.FLOATS in rawAction){if(userData===null){userData=dragonBones.BaseObject.borrowObject(dragonBones.UserData);}var rawFloats=rawAction[dragonBones.DataParser.FLOATS];for(var _b=0,rawFloats_1=rawFloats;_b<rawFloats_1.length;_b++){var rawValue=rawFloats_1[_b];userData.addFloat(rawValue);}}if(dragonBones.DataParser.STRINGS in rawAction){if(userData===null){userData=dragonBones.BaseObject.borrowObject(dragonBones.UserData);}var rawStrings=rawAction[dragonBones.DataParser.STRINGS];for(var _c=0,rawStrings_1=rawStrings;_c<rawStrings_1.length;_c++){var rawValue=rawStrings_1[_c];userData.addString(rawValue);}}action.data=userData;actions.push(action);}}return actions;};ObjectDataParser.prototype._parseTransform=function(rawData,transform,scale){transform.x=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.X,0.0)*scale;transform.y=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.Y,0.0)*scale;if(dragonBones.DataParser.ROTATE in rawData||dragonBones.DataParser.SKEW in rawData){transform.rotation=dragonBones.Transform.normalizeRadian(ObjectDataParser._getNumber(rawData,dragonBones.DataParser.ROTATE,0.0)*dragonBones.Transform.DEG_RAD);transform.skew=dragonBones.Transform.normalizeRadian(ObjectDataParser._getNumber(rawData,dragonBones.DataParser.SKEW,0.0)*dragonBones.Transform.DEG_RAD);}else if(dragonBones.DataParser.SKEW_X in rawData||dragonBones.DataParser.SKEW_Y in rawData){transform.rotation=dragonBones.Transform.normalizeRadian(ObjectDataParser._getNumber(rawData,dragonBones.DataParser.SKEW_Y,0.0)*dragonBones.Transform.DEG_RAD);transform.skew=dragonBones.Transform.normalizeRadian(ObjectDataParser._getNumber(rawData,dragonBones.DataParser.SKEW_X,0.0)*dragonBones.Transform.DEG_RAD)-transform.rotation;}transform.scaleX=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.SCALE_X,1.0);transform.scaleY=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.SCALE_Y,1.0);};ObjectDataParser.prototype._parseColorTransform=function(rawData,color){color.alphaMultiplier=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.ALPHA_MULTIPLIER,100)*0.01;color.redMultiplier=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.RED_MULTIPLIER,100)*0.01;color.greenMultiplier=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.GREEN_MULTIPLIER,100)*0.01;color.blueMultiplier=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.BLUE_MULTIPLIER,100)*0.01;color.alphaOffset=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.ALPHA_OFFSET,0);color.redOffset=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.RED_OFFSET,0);color.greenOffset=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.GREEN_OFFSET,0);color.blueOffset=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.BLUE_OFFSET,0);};ObjectDataParser.prototype._parseArray=function(rawData){this._intArray.length=0;this._floatArray.length=0;this._frameIntArray.length=0;this._frameFloatArray.length=0;this._frameArray.length=0;this._timelineArray.length=0;};ObjectDataParser.prototype._modifyArray=function(){if(this._intArray.length%Int16Array.BYTES_PER_ELEMENT!==0){this._intArray.push(0);}if(this._frameIntArray.length%Int16Array.BYTES_PER_ELEMENT!==0){this._frameIntArray.push(0);}if(this._frameArray.length%Int16Array.BYTES_PER_ELEMENT!==0){this._frameArray.push(0);}if(this._timelineArray.length%Uint16Array.BYTES_PER_ELEMENT!==0){this._timelineArray.push(0);}var l1=this._intArray.length*Int16Array.BYTES_PER_ELEMENT;var l2=this._floatArray.length*Float32Array.BYTES_PER_ELEMENT;var l3=this._frameIntArray.length*Int16Array.BYTES_PER_ELEMENT;var l4=this._frameFloatArray.length*Float32Array.BYTES_PER_ELEMENT;var l5=this._frameArray.length*Int16Array.BYTES_PER_ELEMENT;var l6=this._timelineArray.length*Uint16Array.BYTES_PER_ELEMENT;var lTotal=l1+l2+l3+l4+l5+l6;if(dragonBones.DragonBones.webAssembly){var shareBuffer=dragonBones.webAssemblyModule.HEAP16.buffer;var bufferPointer=dragonBones.webAssemblyModule._malloc(lTotal);var intArray=new Int16Array(shareBuffer,bufferPointer,this._intArray.length);var floatArray=new Float32Array(shareBuffer,bufferPointer+l1,this._floatArray.length);var frameIntArray=new Int16Array(shareBuffer,bufferPointer+l1+l2,this._frameIntArray.length);var frameFloatArray=new Float32Array(shareBuffer,bufferPointer+l1+l2+l3,this._frameFloatArray.length);var frameArray=new Int16Array(shareBuffer,bufferPointer+l1+l2+l3+l4,this._frameArray.length);var timelineArray=new Uint16Array(shareBuffer,bufferPointer+l1+l2+l3+l4+l5,this._timelineArray.length);for(var i=0,l=this._intArray.length;i<l;++i){intArray[i]=this._intArray[i];}for(var i=0,l=this._floatArray.length;i<l;++i){floatArray[i]=this._floatArray[i];}for(var i=0,l=this._frameIntArray.length;i<l;++i){frameIntArray[i]=this._frameIntArray[i];}for(var i=0,l=this._frameFloatArray.length;i<l;++i){frameFloatArray[i]=this._frameFloatArray[i];}for(var i=0,l=this._frameArray.length;i<l;++i){frameArray[i]=this._frameArray[i];}for(var i=0,l=this._timelineArray.length;i<l;++i){timelineArray[i]=this._timelineArray[i];}dragonBones.webAssemblyModule.setDataBinary(this._data,bufferPointer,l1,l2,l3,l4,l5,l6);}else {var binary=new ArrayBuffer(lTotal);var intArray=new Int16Array(binary,0,this._intArray.length);var floatArray=new Float32Array(binary,l1,this._floatArray.length);var frameIntArray=new Int16Array(binary,l1+l2,this._frameIntArray.length);var frameFloatArray=new Float32Array(binary,l1+l2+l3,this._frameFloatArray.length);var frameArray=new Int16Array(binary,l1+l2+l3+l4,this._frameArray.length);var timelineArray=new Uint16Array(binary,l1+l2+l3+l4+l5,this._timelineArray.length);for(var i=0,l=this._intArray.length;i<l;++i){intArray[i]=this._intArray[i];}for(var i=0,l=this._floatArray.length;i<l;++i){floatArray[i]=this._floatArray[i];}for(var i=0,l=this._frameIntArray.length;i<l;++i){frameIntArray[i]=this._frameIntArray[i];}for(var i=0,l=this._frameFloatArray.length;i<l;++i){frameFloatArray[i]=this._frameFloatArray[i];}for(var i=0,l=this._frameArray.length;i<l;++i){frameArray[i]=this._frameArray[i];}for(var i=0,l=this._timelineArray.length;i<l;++i){timelineArray[i]=this._timelineArray[i];}this._data.binary=binary;this._data.intArray=intArray;this._data.floatArray=floatArray;this._data.frameIntArray=frameIntArray;this._data.frameFloatArray=frameFloatArray;this._data.frameArray=frameArray;this._data.timelineArray=timelineArray;}this._defaultColorOffset=-1;};ObjectDataParser.prototype.parseDragonBonesData=function(rawData,scale){if(scale===void 0){scale=1;}console.assert(rawData!==null&&rawData!==undefined,"Data error.");var version=ObjectDataParser._getString(rawData,dragonBones.DataParser.VERSION,"");var compatibleVersion=ObjectDataParser._getString(rawData,dragonBones.DataParser.COMPATIBLE_VERSION,"");if(dragonBones.DataParser.DATA_VERSIONS.indexOf(version)>=0||dragonBones.DataParser.DATA_VERSIONS.indexOf(compatibleVersion)>=0){var data=dragonBones.BaseObject.borrowObject(dragonBones.DragonBonesData);data.version=version;data.name=ObjectDataParser._getString(rawData,dragonBones.DataParser.NAME,"");data.frameRate=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.FRAME_RATE,24);if(data.frameRate===0){data.frameRate=24;}if(dragonBones.DataParser.ARMATURE in rawData){this._data=data;this._parseArray(rawData);var rawArmatures=rawData[dragonBones.DataParser.ARMATURE];for(var _i=0,rawArmatures_1=rawArmatures;_i<rawArmatures_1.length;_i++){var rawArmature=rawArmatures_1[_i];data.addArmature(this._parseArmature(rawArmature,scale));}if(!this._data.binary){this._modifyArray();}if(dragonBones.DataParser.STAGE in rawData){data.stage=data.getArmature(ObjectDataParser._getString(rawData,dragonBones.DataParser.STAGE,""));}else if(data.armatureNames.length>0){data.stage=data.getArmature(data.armatureNames[0]);}this._data=null;}if(dragonBones.DataParser.TEXTURE_ATLAS in rawData){this._rawTextureAtlases=rawData[dragonBones.DataParser.TEXTURE_ATLAS];}return data;}else {console.assert(false,"Nonsupport data version: "+version+"\n"+"Please convert DragonBones data to support version.\n"+"Read more: https://github.com/DragonBones/Tools/");}return null;};ObjectDataParser.prototype.parseTextureAtlasData=function(rawData,textureAtlasData,scale){if(scale===void 0){scale=1.0;}console.assert(rawData!==undefined);if(rawData===null){if(this._rawTextureAtlases===null||this._rawTextureAtlases.length===0){return false;}var rawTextureAtlas=this._rawTextureAtlases[this._rawTextureAtlasIndex++];this.parseTextureAtlasData(rawTextureAtlas,textureAtlasData,scale);if(this._rawTextureAtlasIndex>=this._rawTextureAtlases.length){this._rawTextureAtlasIndex=0;this._rawTextureAtlases=null;}return true;}textureAtlasData.width=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.WIDTH,0);textureAtlasData.height=ObjectDataParser._getNumber(rawData,dragonBones.DataParser.HEIGHT,0);textureAtlasData.scale=scale===1.0?1.0/ObjectDataParser._getNumber(rawData,dragonBones.DataParser.SCALE,1.0):scale;textureAtlasData.name=ObjectDataParser._getString(rawData,dragonBones.DataParser.NAME,"");textureAtlasData.imagePath=ObjectDataParser._getString(rawData,dragonBones.DataParser.IMAGE_PATH,"");if(dragonBones.DataParser.SUB_TEXTURE in rawData){var rawTextures=rawData[dragonBones.DataParser.SUB_TEXTURE];for(var i=0,l=rawTextures.length;i<l;++i){var rawTexture=rawTextures[i];var textureData=textureAtlasData.createTexture();textureData.rotated=ObjectDataParser._getBoolean(rawTexture,dragonBones.DataParser.ROTATED,false);textureData.name=ObjectDataParser._getString(rawTexture,dragonBones.DataParser.NAME,"");textureData.region.x=ObjectDataParser._getNumber(rawTexture,dragonBones.DataParser.X,0.0);textureData.region.y=ObjectDataParser._getNumber(rawTexture,dragonBones.DataParser.Y,0.0);textureData.region.width=ObjectDataParser._getNumber(rawTexture,dragonBones.DataParser.WIDTH,0.0);textureData.region.height=ObjectDataParser._getNumber(rawTexture,dragonBones.DataParser.HEIGHT,0.0);var frameWidth=ObjectDataParser._getNumber(rawTexture,dragonBones.DataParser.FRAME_WIDTH,-1.0);var frameHeight=ObjectDataParser._getNumber(rawTexture,dragonBones.DataParser.FRAME_HEIGHT,-1.0);if(frameWidth>0.0&&frameHeight>0.0){textureData.frame=dragonBones.TextureData.createRectangle();textureData.frame.x=ObjectDataParser._getNumber(rawTexture,dragonBones.DataParser.FRAME_X,0.0);textureData.frame.y=ObjectDataParser._getNumber(rawTexture,dragonBones.DataParser.FRAME_Y,0.0);textureData.frame.width=frameWidth;textureData.frame.height=frameHeight;}textureAtlasData.addTexture(textureData);}}return true;};ObjectDataParser.getInstance=function(){if(ObjectDataParser._objectDataParserInstance===null){ObjectDataParser._objectDataParserInstance=new ObjectDataParser();}return ObjectDataParser._objectDataParserInstance;};ObjectDataParser._objectDataParserInstance=null;return ObjectDataParser;}(dragonBones.DataParser);dragonBones.ObjectDataParser=ObjectDataParser;var ActionFrame=function(){function ActionFrame(){this.frameStart=0;this.actions=[];}return ActionFrame;}();dragonBones.ActionFrame=ActionFrame;})(dragonBones$1||(dragonBones$1={}));(function(dragonBones){var BinaryDataParser=function(_super){__extends(BinaryDataParser,_super);function BinaryDataParser(){return _super!==null&&_super.apply(this,arguments)||this;}BinaryDataParser.prototype._inRange=function(a,min,max){return min<=a&&a<=max;};BinaryDataParser.prototype._decodeUTF8=function(data){var EOF_byte=-1;var EOF_code_point=-1;var FATAL_POINT=0xFFFD;var pos=0;var result="";var code_point;var utf8_code_point=0;var utf8_bytes_needed=0;var utf8_bytes_seen=0;var utf8_lower_boundary=0;while(data.length>pos){var _byte=data[pos++];if(_byte===EOF_byte){if(utf8_bytes_needed!==0){code_point=FATAL_POINT;}else {code_point=EOF_code_point;}}else {if(utf8_bytes_needed===0){if(this._inRange(_byte,0x00,0x7F)){code_point=_byte;}else {if(this._inRange(_byte,0xC2,0xDF)){utf8_bytes_needed=1;utf8_lower_boundary=0x80;utf8_code_point=_byte-0xC0;}else if(this._inRange(_byte,0xE0,0xEF)){utf8_bytes_needed=2;utf8_lower_boundary=0x800;utf8_code_point=_byte-0xE0;}else if(this._inRange(_byte,0xF0,0xF4)){utf8_bytes_needed=3;utf8_lower_boundary=0x10000;utf8_code_point=_byte-0xF0;}else;utf8_code_point=utf8_code_point*Math.pow(64,utf8_bytes_needed);code_point=null;}}else if(!this._inRange(_byte,0x80,0xBF)){utf8_code_point=0;utf8_bytes_needed=0;utf8_bytes_seen=0;utf8_lower_boundary=0;pos--;code_point=_byte;}else {utf8_bytes_seen+=1;utf8_code_point=utf8_code_point+(_byte-0x80)*Math.pow(64,utf8_bytes_needed-utf8_bytes_seen);if(utf8_bytes_seen!==utf8_bytes_needed){code_point=null;}else {var cp=utf8_code_point;var lower_boundary=utf8_lower_boundary;utf8_code_point=0;utf8_bytes_needed=0;utf8_bytes_seen=0;utf8_lower_boundary=0;if(this._inRange(cp,lower_boundary,0x10FFFF)&&!this._inRange(cp,0xD800,0xDFFF)){code_point=cp;}else {code_point=_byte;}}}}if(code_point!==null&&code_point!==EOF_code_point){if(code_point<=0xFFFF){if(code_point>0)result+=String.fromCharCode(code_point);}else {code_point-=0x10000;result+=String.fromCharCode(0xD800+(code_point>>10&0x3ff));result+=String.fromCharCode(0xDC00+(code_point&0x3ff));}}}return result;};BinaryDataParser.prototype._getUTF16Key=function(value){for(var i=0,l=value.length;i<l;++i){if(value.charCodeAt(i)>255){return encodeURI(value);}}return value;};BinaryDataParser.prototype._parseBinaryTimeline=function(type,offset,timelineData){if(timelineData===void 0){timelineData=null;}var timeline=timelineData!==null?timelineData:dragonBones.BaseObject.borrowObject(dragonBones.TimelineData);timeline.type=type;timeline.offset=offset;this._timeline=timeline;var keyFrameCount=this._timelineArrayBuffer[timeline.offset+2];if(keyFrameCount===1){timeline.frameIndicesOffset=-1;}else {var frameIndicesOffset=0;var totalFrameCount=this._animation.frameCount+1;var frameIndices=this._data.frameIndices;if(dragonBones.DragonBones.webAssembly){frameIndicesOffset=frameIndices.size();frameIndices.resize(frameIndicesOffset+totalFrameCount,0);}else {frameIndicesOffset=frameIndices.length;frameIndices.length+=totalFrameCount;}timeline.frameIndicesOffset=frameIndicesOffset;for(var i=0,iK=0,frameStart=0,frameCount=0;i<totalFrameCount;++i){if(frameStart+frameCount<=i&&iK<keyFrameCount){frameStart=this._frameArrayBuffer[this._animation.frameOffset+this._timelineArrayBuffer[timeline.offset+5+iK]];if(iK===keyFrameCount-1){frameCount=this._animation.frameCount-frameStart;}else {frameCount=this._frameArrayBuffer[this._animation.frameOffset+this._timelineArrayBuffer[timeline.offset+5+iK+1]]-frameStart;}iK++;}if(dragonBones.DragonBones.webAssembly){frameIndices.set(frameIndicesOffset+i,iK-1);}else {frameIndices[frameIndicesOffset+i]=iK-1;}}}this._timeline=null;return timeline;};BinaryDataParser.prototype._parseVertices=function(rawData,vertices){vertices.offset=rawData[dragonBones.DataParser.OFFSET];var weightOffset=this._intArrayBuffer[vertices.offset+3];if(weightOffset>=0){var weight=dragonBones.BaseObject.borrowObject(dragonBones.WeightData);var vertexCount=this._intArrayBuffer[vertices.offset+0];var boneCount=this._intArrayBuffer[weightOffset+0];weight.offset=weightOffset;for(var i=0;i<boneCount;++i){var boneIndex=this._intArrayBuffer[weightOffset+2+i];weight.addBone(this._rawBones[boneIndex]);}var boneIndicesOffset=weightOffset+2+boneCount;var weightCount=0;for(var i=0,l=vertexCount;i<l;++i){var vertexBoneCount=this._intArrayBuffer[boneIndicesOffset++];weightCount+=vertexBoneCount;boneIndicesOffset+=vertexBoneCount;}weight.count=weightCount;vertices.weight=weight;}};BinaryDataParser.prototype._parseMesh=function(rawData,mesh){this._parseVertices(rawData,mesh.vertices);};BinaryDataParser.prototype._parsePath=function(rawData,path){this._parseVertices(rawData,path.vertices);};BinaryDataParser.prototype._parseAnimation=function(rawData){var animation=dragonBones.BaseObject.borrowObject(dragonBones.AnimationData);animation.frameCount=Math.max(dragonBones.ObjectDataParser._getNumber(rawData,dragonBones.DataParser.DURATION,1),1);animation.playTimes=dragonBones.ObjectDataParser._getNumber(rawData,dragonBones.DataParser.PLAY_TIMES,1);animation.duration=animation.frameCount/this._armature.frameRate;animation.fadeInTime=dragonBones.ObjectDataParser._getNumber(rawData,dragonBones.DataParser.FADE_IN_TIME,0.0);animation.scale=dragonBones.ObjectDataParser._getNumber(rawData,dragonBones.DataParser.SCALE,1.0);animation.name=dragonBones.ObjectDataParser._getString(rawData,dragonBones.DataParser.NAME,dragonBones.DataParser.DEFAULT_NAME);if(animation.name.length===0){animation.name=dragonBones.DataParser.DEFAULT_NAME;}var offsets=rawData[dragonBones.DataParser.OFFSET];animation.frameIntOffset=offsets[0];animation.frameFloatOffset=offsets[1];animation.frameOffset=offsets[2];this._animation=animation;if(dragonBones.DataParser.ACTION in rawData){animation.actionTimeline=this._parseBinaryTimeline(0,rawData[dragonBones.DataParser.ACTION]);}if(dragonBones.DataParser.Z_ORDER in rawData){animation.zOrderTimeline=this._parseBinaryTimeline(1,rawData[dragonBones.DataParser.Z_ORDER]);}if(dragonBones.DataParser.BONE in rawData){var rawTimeliness=rawData[dragonBones.DataParser.BONE];for(var k in rawTimeliness){var rawTimelines=rawTimeliness[k];if(dragonBones.DragonBones.webAssembly){k=this._getUTF16Key(k);}var bone=this._armature.getBone(k);if(bone===null){continue;}for(var i=0,l=rawTimelines.length;i<l;i+=2){var timelineType=rawTimelines[i];var timelineOffset=rawTimelines[i+1];var timeline=this._parseBinaryTimeline(timelineType,timelineOffset);this._animation.addBoneTimeline(bone,timeline);}}}if(dragonBones.DataParser.SURFACE in rawData){var rawTimeliness=rawData[dragonBones.DataParser.SURFACE];for(var k in rawTimeliness){var rawTimelines=rawTimeliness[k];if(dragonBones.DragonBones.webAssembly){k=this._getUTF16Key(k);}var surface=this._armature.getBone(k);if(surface===null){continue;}for(var i=0,l=rawTimelines.length;i<l;i+=2){var timelineType=rawTimelines[i];var timelineOffset=rawTimelines[i+1];var timeline=this._parseBinaryTimeline(timelineType,timelineOffset);this._animation.addSurfaceTimeline(surface,timeline);}}}if(dragonBones.DataParser.SLOT in rawData){var rawTimeliness=rawData[dragonBones.DataParser.SLOT];for(var k in rawTimeliness){var rawTimelines=rawTimeliness[k];if(dragonBones.DragonBones.webAssembly){k=this._getUTF16Key(k);}var slot=this._armature.getSlot(k);if(slot===null){continue;}for(var i=0,l=rawTimelines.length;i<l;i+=2){var timelineType=rawTimelines[i];var timelineOffset=rawTimelines[i+1];var timeline=this._parseBinaryTimeline(timelineType,timelineOffset);this._animation.addSlotTimeline(slot,timeline);}}}if(dragonBones.DataParser.CONSTRAINT in rawData){var rawTimeliness=rawData[dragonBones.DataParser.CONSTRAINT];for(var k in rawTimeliness){var rawTimelines=rawTimeliness[k];if(dragonBones.DragonBones.webAssembly){k=this._getUTF16Key(k);}var constraint=this._armature.getConstraint(k);if(constraint===null){continue;}for(var i=0,l=rawTimelines.length;i<l;i+=2){var timelineType=rawTimelines[i];var timelineOffset=rawTimelines[i+1];var timeline=this._parseBinaryTimeline(timelineType,timelineOffset);this._animation.addConstraintTimeline(constraint,timeline);}}}if(dragonBones.DataParser.ANIMATION in rawData){var rawTimeliness=rawData[dragonBones.DataParser.ANIMATION];for(var k in rawTimeliness){var rawTimelines=rawTimeliness[k];if(dragonBones.DragonBones.webAssembly){k=this._getUTF16Key(k);}for(var i=0,l=rawTimelines.length;i<l;i+=2){var timelineType=rawTimelines[i];var timelineOffset=rawTimelines[i+1];var timeline=this._parseBinaryTimeline(timelineType,timelineOffset);this._animation.addAnimationTimeline(k,timeline);}}}this._animation=null;return animation;};BinaryDataParser.prototype._parseArray=function(rawData){var offsets=rawData[dragonBones.DataParser.OFFSET];var l1=offsets[1];var l2=offsets[3];var l3=offsets[5];var l4=offsets[7];var l5=offsets[9];var l6=offsets[11];var intArray=new Int16Array(this._binary,this._binaryOffset+offsets[0],l1/Int16Array.BYTES_PER_ELEMENT);var floatArray=new Float32Array(this._binary,this._binaryOffset+offsets[2],l2/Float32Array.BYTES_PER_ELEMENT);var frameIntArray=new Int16Array(this._binary,this._binaryOffset+offsets[4],l3/Int16Array.BYTES_PER_ELEMENT);var frameFloatArray=new Float32Array(this._binary,this._binaryOffset+offsets[6],l4/Float32Array.BYTES_PER_ELEMENT);var frameArray=new Int16Array(this._binary,this._binaryOffset+offsets[8],l5/Int16Array.BYTES_PER_ELEMENT);var timelineArray=new Uint16Array(this._binary,this._binaryOffset+offsets[10],l6/Uint16Array.BYTES_PER_ELEMENT);if(dragonBones.DragonBones.webAssembly){var lTotal=l1+l2+l3+l4+l5+l6;var bufferPointer=dragonBones.webAssemblyModule._malloc(lTotal);var rawArray=new Uint8Array(this._binary,this._binaryOffset,lTotal/Uint8Array.BYTES_PER_ELEMENT);var copyArray=new Uint8Array(dragonBones.webAssemblyModule.HEAP16.buffer,bufferPointer,rawArray.length);for(var i=0,l=rawArray.length;i<l;++i){copyArray[i]=rawArray[i];}dragonBones.webAssemblyModule.setDataBinary(this._data,bufferPointer,l1,l2,l3,l4,l5,l6);this._intArrayBuffer=intArray;this._floatArrayBuffer=floatArray;this._frameIntArrayBuffer=frameIntArray;this._frameFloatArrayBuffer=frameFloatArray;this._frameArrayBuffer=frameArray;this._timelineArrayBuffer=timelineArray;}else {this._data.binary=this._binary;this._data.intArray=this._intArrayBuffer=intArray;this._data.floatArray=this._floatArrayBuffer=floatArray;this._data.frameIntArray=this._frameIntArrayBuffer=frameIntArray;this._data.frameFloatArray=this._frameFloatArrayBuffer=frameFloatArray;this._data.frameArray=this._frameArrayBuffer=frameArray;this._data.timelineArray=this._timelineArrayBuffer=timelineArray;}};BinaryDataParser.prototype.parseDragonBonesData=function(rawData,scale){if(scale===void 0){scale=1;}console.assert(rawData!==null&&rawData!==undefined&&rawData instanceof ArrayBuffer,"Data error.");var tag=new Uint8Array(rawData,0,8);if(tag[0]!=="D".charCodeAt(0)||tag[1]!=="B".charCodeAt(0)||tag[2]!=="D".charCodeAt(0)||tag[3]!=="T".charCodeAt(0)){console.assert(false,"Nonsupport data.");return null;}var headerLength=new Uint32Array(rawData,8,1)[0];var headerBytes=new Uint8Array(rawData,8+4,headerLength);var headerString=this._decodeUTF8(headerBytes);var header=JSON.parse(headerString);this._binaryOffset=8+4+headerLength;this._binary=rawData;return _super.prototype.parseDragonBonesData.call(this,header,scale);};BinaryDataParser.getInstance=function(){if(BinaryDataParser._binaryDataParserInstance===null){BinaryDataParser._binaryDataParserInstance=new BinaryDataParser();}return BinaryDataParser._binaryDataParserInstance;};BinaryDataParser._binaryDataParserInstance=null;return BinaryDataParser;}(dragonBones.ObjectDataParser);dragonBones.BinaryDataParser=BinaryDataParser;})(dragonBones$1||(dragonBones$1={}));(function(dragonBones){var BaseFactory=function(){function BaseFactory(dataParser){if(dataParser===void 0){dataParser=null;}this.autoSearch=false;this._dragonBonesDataMap={};this._textureAtlasDataMap={};this._dragonBones=null;this._dataParser=null;if(BaseFactory._objectParser===null){BaseFactory._objectParser=new dragonBones.ObjectDataParser();}if(BaseFactory._binaryParser===null){BaseFactory._binaryParser=new dragonBones.BinaryDataParser();}this._dataParser=dataParser!==null?dataParser:BaseFactory._objectParser;}BaseFactory.prototype._isSupportMesh=function(){return true;};BaseFactory.prototype._getTextureData=function(textureAtlasName,textureName){if(textureAtlasName in this._textureAtlasDataMap){for(var _i=0,_a=this._textureAtlasDataMap[textureAtlasName];_i<_a.length;_i++){var textureAtlasData=_a[_i];var textureData=textureAtlasData.getTexture(textureName);if(textureData!==null){return textureData;}}}if(this.autoSearch){for(var k in this._textureAtlasDataMap){for(var _b=0,_c=this._textureAtlasDataMap[k];_b<_c.length;_b++){var textureAtlasData=_c[_b];if(textureAtlasData.autoSearch){var textureData=textureAtlasData.getTexture(textureName);if(textureData!==null){return textureData;}}}}}return null;};BaseFactory.prototype._fillBuildArmaturePackage=function(dataPackage,dragonBonesName,armatureName,skinName,textureAtlasName){var dragonBonesData=null;var armatureData=null;if(dragonBonesName.length>0){if(dragonBonesName in this._dragonBonesDataMap){dragonBonesData=this._dragonBonesDataMap[dragonBonesName];armatureData=dragonBonesData.getArmature(armatureName);}}if(armatureData===null&&(dragonBonesName.length===0||this.autoSearch)){for(var k in this._dragonBonesDataMap){dragonBonesData=this._dragonBonesDataMap[k];if(dragonBonesName.length===0||dragonBonesData.autoSearch){armatureData=dragonBonesData.getArmature(armatureName);if(armatureData!==null){dragonBonesName=k;break;}}}}if(armatureData!==null){dataPackage.dataName=dragonBonesName;dataPackage.textureAtlasName=textureAtlasName;dataPackage.data=dragonBonesData;dataPackage.armature=armatureData;dataPackage.skin=null;if(skinName.length>0){dataPackage.skin=armatureData.getSkin(skinName);if(dataPackage.skin===null&&this.autoSearch){for(var k in this._dragonBonesDataMap){var skinDragonBonesData=this._dragonBonesDataMap[k];var skinArmatureData=skinDragonBonesData.getArmature(skinName);if(skinArmatureData!==null){dataPackage.skin=skinArmatureData.defaultSkin;break;}}}}if(dataPackage.skin===null){dataPackage.skin=armatureData.defaultSkin;}return true;}return false;};BaseFactory.prototype._buildBones=function(dataPackage,armature){for(var _i=0,_a=dataPackage.armature.sortedBones;_i<_a.length;_i++){var boneData=_a[_i];var bone=dragonBones.BaseObject.borrowObject(boneData.type===0?dragonBones.Bone:dragonBones.Surface);bone.init(boneData,armature);}};BaseFactory.prototype._buildSlots=function(dataPackage,armature){var currentSkin=dataPackage.skin;var defaultSkin=dataPackage.armature.defaultSkin;if(currentSkin===null||defaultSkin===null){return;}var skinSlots={};for(var k in defaultSkin.displays){var displays=defaultSkin.getDisplays(k);skinSlots[k]=displays;}if(currentSkin!==defaultSkin){for(var k in currentSkin.displays){var displays=currentSkin.getDisplays(k);skinSlots[k]=displays;}}for(var _i=0,_a=dataPackage.armature.sortedSlots;_i<_a.length;_i++){var slotData=_a[_i];var displayDatas=slotData.name in skinSlots?skinSlots[slotData.name]:null;var slot=this._buildSlot(dataPackage,slotData,armature);slot.rawDisplayDatas=displayDatas;if(displayDatas!==null){var displayList=new Array();for(var i=0,l=dragonBones.DragonBones.webAssembly?displayDatas.size():displayDatas.length;i<l;++i){var displayData=dragonBones.DragonBones.webAssembly?displayDatas.get(i):displayDatas[i];if(displayData!==null){displayList.push(this._getSlotDisplay(dataPackage,displayData,null,slot));}else {displayList.push(null);}}slot._setDisplayList(displayList);}slot._setDisplayIndex(slotData.displayIndex,true);}};BaseFactory.prototype._buildConstraints=function(dataPackage,armature){var constraints=dataPackage.armature.constraints;for(var k in constraints){var constraintData=constraints[k];switch(constraintData.type){case 0:var ikConstraint=dragonBones.BaseObject.borrowObject(dragonBones.IKConstraint);ikConstraint.init(constraintData,armature);armature._addConstraint(ikConstraint);break;case 1:var pathConstraint=dragonBones.BaseObject.borrowObject(dragonBones.PathConstraint);pathConstraint.init(constraintData,armature);armature._addConstraint(pathConstraint);break;default:var constraint=dragonBones.BaseObject.borrowObject(dragonBones.IKConstraint);constraint.init(constraintData,armature);armature._addConstraint(constraint);break;}}};BaseFactory.prototype._buildChildArmature=function(dataPackage,slot,displayData){return this.buildArmature(displayData.path,dataPackage!==null?dataPackage.dataName:"","",dataPackage!==null?dataPackage.textureAtlasName:"");};BaseFactory.prototype._getSlotDisplay=function(dataPackage,displayData,rawDisplayData,slot){var dataName=dataPackage!==null?dataPackage.dataName:displayData.parent.parent.parent.name;var display=null;switch(displayData.type){case 0:{var imageDisplayData=displayData;if(dataPackage!==null&&dataPackage.textureAtlasName.length>0){imageDisplayData.texture=this._getTextureData(dataPackage.textureAtlasName,displayData.path);}if(imageDisplayData.texture===null){imageDisplayData.texture=this._getTextureData(dataName,displayData.path);}if(rawDisplayData!==null&&rawDisplayData.type===2&&this._isSupportMesh()){display=slot.meshDisplay;}else {display=slot.rawDisplay;}break;}case 2:{var meshDisplayData=displayData;if(dataPackage!==null&&dataPackage.textureAtlasName.length>0){meshDisplayData.texture=this._getTextureData(dataPackage.textureAtlasName,meshDisplayData.path);}if(meshDisplayData.texture===null){meshDisplayData.texture=this._getTextureData(dataName,meshDisplayData.path);}if(this._isSupportMesh()){display=slot.meshDisplay;}else {display=slot.rawDisplay;}break;}case 1:{var armatureDisplayData=displayData;var childArmature=this._buildChildArmature(dataPackage,slot,displayData);if(childArmature!==null){childArmature.inheritAnimation=armatureDisplayData.inheritAnimation;if(!childArmature.inheritAnimation){var actions=armatureDisplayData.actions.length>0?armatureDisplayData.actions:childArmature.armatureData.defaultActions;if(actions.length>0){for(var _i=0,actions_6=actions;_i<actions_6.length;_i++){var action=actions_6[_i];var eventObject=dragonBones.BaseObject.borrowObject(dragonBones.EventObject);dragonBones.EventObject.actionDataToInstance(action,eventObject,slot.armature);eventObject.slot=slot;slot.armature._bufferAction(eventObject,false);}}else {childArmature.animation.play();}}armatureDisplayData.armature=childArmature.armatureData;}display=childArmature;break;}}return display;};BaseFactory.prototype.parseDragonBonesData=function(rawData,name,scale){if(name===void 0){name=null;}if(scale===void 0){scale=1.0;}var dataParser=rawData instanceof ArrayBuffer?BaseFactory._binaryParser:this._dataParser;var dragonBonesData=dataParser.parseDragonBonesData(rawData,scale);while(true){var textureAtlasData=this._buildTextureAtlasData(null,null);if(dataParser.parseTextureAtlasData(null,textureAtlasData,scale)){this.addTextureAtlasData(textureAtlasData,name);}else {textureAtlasData.returnToPool();break;}}if(dragonBonesData!==null){this.addDragonBonesData(dragonBonesData,name);}return dragonBonesData;};BaseFactory.prototype.parseTextureAtlasData=function(rawData,textureAtlas,name,scale){if(name===void 0){name=null;}if(scale===void 0){scale=1.0;}var textureAtlasData=this._buildTextureAtlasData(null,null);this._dataParser.parseTextureAtlasData(rawData,textureAtlasData,scale);this._buildTextureAtlasData(textureAtlasData,textureAtlas||null);this.addTextureAtlasData(textureAtlasData,name);return textureAtlasData;};BaseFactory.prototype.updateTextureAtlasData=function(name,textureAtlases){var textureAtlasDatas=this.getTextureAtlasData(name);if(textureAtlasDatas!==null){for(var i=0,l=textureAtlasDatas.length;i<l;++i){if(i<textureAtlases.length){this._buildTextureAtlasData(textureAtlasDatas[i],textureAtlases[i]);}}}};BaseFactory.prototype.getDragonBonesData=function(name){return name in this._dragonBonesDataMap?this._dragonBonesDataMap[name]:null;};BaseFactory.prototype.addDragonBonesData=function(data,name){if(name===void 0){name=null;}name=name!==null?name:data.name;if(name in this._dragonBonesDataMap){if(this._dragonBonesDataMap[name]===data){return;}console.warn("Can not add same name data: "+name);return;}this._dragonBonesDataMap[name]=data;};BaseFactory.prototype.removeDragonBonesData=function(name,disposeData){if(disposeData===void 0){disposeData=true;}if(name in this._dragonBonesDataMap){if(disposeData){this._dragonBones.bufferObject(this._dragonBonesDataMap[name]);}delete this._dragonBonesDataMap[name];}};BaseFactory.prototype.getTextureAtlasData=function(name){return name in this._textureAtlasDataMap?this._textureAtlasDataMap[name]:null;};BaseFactory.prototype.addTextureAtlasData=function(data,name){if(name===void 0){name=null;}name=name!==null?name:data.name;var textureAtlasList=name in this._textureAtlasDataMap?this._textureAtlasDataMap[name]:this._textureAtlasDataMap[name]=[];if(textureAtlasList.indexOf(data)<0){textureAtlasList.push(data);}};BaseFactory.prototype.removeTextureAtlasData=function(name,disposeData){if(disposeData===void 0){disposeData=true;}if(name in this._textureAtlasDataMap){var textureAtlasDataList=this._textureAtlasDataMap[name];if(disposeData){for(var _i=0,textureAtlasDataList_1=textureAtlasDataList;_i<textureAtlasDataList_1.length;_i++){var textureAtlasData=textureAtlasDataList_1[_i];this._dragonBones.bufferObject(textureAtlasData);}}delete this._textureAtlasDataMap[name];}};BaseFactory.prototype.getArmatureData=function(name,dragonBonesName){if(dragonBonesName===void 0){dragonBonesName="";}var dataPackage=new BuildArmaturePackage();if(!this._fillBuildArmaturePackage(dataPackage,dragonBonesName,name,"","")){return null;}return dataPackage.armature;};BaseFactory.prototype.clear=function(disposeData){if(disposeData===void 0){disposeData=true;}for(var k in this._dragonBonesDataMap){if(disposeData){this._dragonBones.bufferObject(this._dragonBonesDataMap[k]);}delete this._dragonBonesDataMap[k];}for(var k in this._textureAtlasDataMap){if(disposeData){var textureAtlasDataList=this._textureAtlasDataMap[k];for(var _i=0,textureAtlasDataList_2=textureAtlasDataList;_i<textureAtlasDataList_2.length;_i++){var textureAtlasData=textureAtlasDataList_2[_i];this._dragonBones.bufferObject(textureAtlasData);}}delete this._textureAtlasDataMap[k];}};BaseFactory.prototype.buildArmature=function(armatureName,dragonBonesName,skinName,textureAtlasName){if(dragonBonesName===void 0){dragonBonesName="";}if(skinName===void 0){skinName="";}if(textureAtlasName===void 0){textureAtlasName="";}var dataPackage=new BuildArmaturePackage();if(!this._fillBuildArmaturePackage(dataPackage,dragonBonesName||"",armatureName,skinName||"",textureAtlasName||"")){console.warn("No armature data: "+armatureName+", "+(dragonBonesName!==null?dragonBonesName:""));return null;}var armature=this._buildArmature(dataPackage);this._buildBones(dataPackage,armature);this._buildSlots(dataPackage,armature);this._buildConstraints(dataPackage,armature);armature.invalidUpdate(null,true);armature.advanceTime(0.0);return armature;};BaseFactory.prototype.replaceDisplay=function(slot,displayData,displayIndex){if(displayIndex===void 0){displayIndex=-1;}if(displayIndex<0){displayIndex=slot.displayIndex;}if(displayIndex<0){displayIndex=0;}slot.replaceDisplayData(displayData,displayIndex);var displayList=slot.displayList;if(displayList.length<=displayIndex){displayList.length=displayIndex+1;for(var i=0,l=displayList.length;i<l;++i){if(!displayList[i]){displayList[i]=null;}}}if(displayData!==null){var rawDisplayDatas=slot.rawDisplayDatas;var rawDisplayData=null;if(rawDisplayDatas){if(dragonBones.DragonBones.webAssembly){if(displayIndex<rawDisplayDatas.size()){rawDisplayData=rawDisplayDatas.get(displayIndex);}}else {if(displayIndex<rawDisplayDatas.length){rawDisplayData=rawDisplayDatas[displayIndex];}}}displayList[displayIndex]=this._getSlotDisplay(null,displayData,rawDisplayData,slot);}else {displayList[displayIndex]=null;}slot.displayList=displayList;};BaseFactory.prototype.replaceSlotDisplay=function(dragonBonesName,armatureName,slotName,displayName,slot,displayIndex){if(displayIndex===void 0){displayIndex=-1;}var armatureData=this.getArmatureData(armatureName,dragonBonesName||"");if(!armatureData||!armatureData.defaultSkin){return false;}var displayData=armatureData.defaultSkin.getDisplay(slotName,displayName);if(!displayData){return false;}this.replaceDisplay(slot,displayData,displayIndex);return true;};BaseFactory.prototype.replaceSlotDisplayList=function(dragonBonesName,armatureName,slotName,slot){var armatureData=this.getArmatureData(armatureName,dragonBonesName||"");if(!armatureData||!armatureData.defaultSkin){return false;}var displays=armatureData.defaultSkin.getDisplays(slotName);if(!displays){return false;}var displayIndex=0;for(var i=0,l=dragonBones.DragonBones.webAssembly?displays.size():displays.length;i<l;++i){var displayData=dragonBones.DragonBones.webAssembly?displays.get(i):displays[i];this.replaceDisplay(slot,displayData,displayIndex++);}return true;};BaseFactory.prototype.replaceSkin=function(armature,skin,isOverride,exclude){if(isOverride===void 0){isOverride=false;}if(exclude===void 0){exclude=null;}var success=false;var defaultSkin=skin.parent.defaultSkin;for(var _i=0,_a=armature.getSlots();_i<_a.length;_i++){var slot=_a[_i];if(exclude!==null&&exclude.indexOf(slot.name)>=0){continue;}var displays=skin.getDisplays(slot.name);if(!displays){if(defaultSkin!==null&&skin!==defaultSkin){displays=defaultSkin.getDisplays(slot.name);}if(!displays){if(isOverride){slot.rawDisplayDatas=null;slot.displayList=[];}continue;}}var displayCount=dragonBones.DragonBones.webAssembly?displays.size():displays.length;var displayList=slot.displayList;displayList.length=displayCount;for(var i=0,l=displayCount;i<l;++i){var displayData=dragonBones.DragonBones.webAssembly?displays.get(i):displays[i];if(displayData!==null){displayList[i]=this._getSlotDisplay(null,displayData,null,slot);}else {displayList[i]=null;}}success=true;slot.rawDisplayDatas=displays;slot.displayList=displayList;}return success;};BaseFactory.prototype.replaceAnimation=function(armature,armatureData,isOverride){if(isOverride===void 0){isOverride=true;}var skinData=armatureData.defaultSkin;if(skinData===null){return false;}if(isOverride){armature.animation.animations=armatureData.animations;}else {var rawAnimations=armature.animation.animations;var animations={};for(var k in rawAnimations){animations[k]=rawAnimations[k];}for(var k in armatureData.animations){animations[k]=armatureData.animations[k];}armature.animation.animations=animations;}for(var _i=0,_a=armature.getSlots();_i<_a.length;_i++){var slot=_a[_i];var index=0;for(var _b=0,_c=slot.displayList;_b<_c.length;_b++){var display=_c[_b];if(display instanceof dragonBones.Armature){var displayDatas=skinData.getDisplays(slot.name);if(displayDatas!==null&&index<(dragonBones.DragonBones.webAssembly?displayDatas.size():displayDatas.length)){var displayData=dragonBones.DragonBones.webAssembly?displayDatas.get(index):displayDatas[index];if(displayData!==null&&displayData.type===1){var childArmatureData=this.getArmatureData(displayData.path,displayData.parent.parent.parent.name);if(childArmatureData){this.replaceAnimation(display,childArmatureData,isOverride);}}}}index++;}}return true;};BaseFactory.prototype.getAllDragonBonesData=function(){return this._dragonBonesDataMap;};BaseFactory.prototype.getAllTextureAtlasData=function(){return this._textureAtlasDataMap;};Object.defineProperty(BaseFactory.prototype,"clock",{get:function(){return this._dragonBones.clock;},enumerable:true,configurable:true});Object.defineProperty(BaseFactory.prototype,"dragonBones",{get:function(){return this._dragonBones;},enumerable:true,configurable:true});BaseFactory.prototype.changeSkin=function(armature,skin,exclude){if(exclude===void 0){exclude=null;}return this.replaceSkin(armature,skin,false,exclude);};BaseFactory.prototype.copyAnimationsToArmature=function(toArmature,fromArmatreName,fromSkinName,fromDragonBonesDataName,replaceOriginalAnimation){if(fromDragonBonesDataName===void 0){fromDragonBonesDataName="";}if(replaceOriginalAnimation===void 0){replaceOriginalAnimation=true;}var armatureData=this.getArmatureData(fromArmatreName,fromDragonBonesDataName);if(!armatureData){return false;}return this.replaceAnimation(toArmature,armatureData,replaceOriginalAnimation);};BaseFactory._objectParser=null;BaseFactory._binaryParser=null;return BaseFactory;}();dragonBones.BaseFactory=BaseFactory;var BuildArmaturePackage=function(){function BuildArmaturePackage(){this.dataName="";this.textureAtlasName="";this.skin=null;}return BuildArmaturePackage;}();dragonBones.BuildArmaturePackage=BuildArmaturePackage;})(dragonBones$1||(dragonBones$1={}));(function(dragonBones){dragonBones.BinaryOffset={WeigthBoneCount:0,WeigthFloatOffset:1,WeigthBoneIndices:2,MeshVertexCount:0,MeshTriangleCount:1,MeshFloatOffset:2,MeshWeightOffset:3,MeshVertexIndices:4,TimelineScale:0,TimelineOffset:1,TimelineKeyFrameCount:2,TimelineFrameValueCount:3,TimelineFrameValueOffset:4,TimelineFrameOffset:5,FramePosition:0,FrameTweenType:1,FrameTweenEasingOrCurveSampleCount:2,FrameCurveSamples:3,DeformMeshOffset:0,DeformCount:1,DeformValueCount:2,DeformValueOffset:3,DeformFloatOffset:4};dragonBones.ArmatureType={Armature:0,MovieClip:1,Stage:2};dragonBones.BoneType={Bone:0,Surface:1};dragonBones.DisplayType={Image:0,Armature:1,Mesh:2,BoundingBox:3};dragonBones.BoundingBoxType={Rectangle:0,Ellipse:1,Polygon:2};dragonBones.ActionType={Play:0,Stop:1,GotoAndPlay:2,GotoAndStop:3,FadeIn:4,FadeOut:5,Frame:10,Sound:11};dragonBones.BlendMode={Normal:0,Add:1,Alpha:2,Darken:3,Difference:4,Erase:5,HardLight:6,Invert:7,Layer:8,Lighten:9,Multiply:10,Overlay:11,Screen:12,Subtract:13};dragonBones.TweenType={None:0,Line:1,Curve:2,QuadIn:3,QuadOut:4,QuadInOut:5};dragonBones.TimelineType={Action:0,ZOrder:1,BoneAll:10,BoneTranslate:11,BoneRotate:12,BoneScale:13,Surface:50,SlotDisplay:20,SlotColor:21,SlotFFD:22,IKConstraint:30,AnimationTime:40,AnimationWeight:41};})(dragonBones$1||(dragonBones$1={}));const DragonBones=dragonBones$1.DragonBones;const BaseObject$1=dragonBones$1.BaseObject;const Matrix$1=dragonBones$1.Matrix;dragonBones$1.Transform;dragonBones$1.ColorTransform;dragonBones$1.Point;dragonBones$1.Rectangle;dragonBones$1.UserData;dragonBones$1.ActionData;dragonBones$1.DragonBonesData;dragonBones$1.ArmatureData;dragonBones$1.BoneData;dragonBones$1.SurfaceData;dragonBones$1.SlotData;dragonBones$1.ConstraintData;dragonBones$1.IKConstraintData;dragonBones$1.PathConstraintData;dragonBones$1.CanvasData;dragonBones$1.SkinData;dragonBones$1.VerticesData;const DisplayData=dragonBones$1.DisplayData;dragonBones$1.ImageDisplayData;dragonBones$1.ArmatureDisplayData;dragonBones$1.MeshDisplayData;dragonBones$1.BoundingBoxDisplayData;dragonBones$1.PathDisplayData;dragonBones$1.WeightData;dragonBones$1.BoundingBoxData;dragonBones$1.RectangleBoundingBoxData;dragonBones$1.EllipseBoundingBoxData;dragonBones$1.PolygonBoundingBoxData;dragonBones$1.AnimationData;dragonBones$1.TimelineData;dragonBones$1.AnimationConfig;const TextureAtlasData$1=dragonBones$1.TextureAtlasData;const TextureData$1=dragonBones$1.TextureData;dragonBones$1.DeformVertices;const Armature$1=dragonBones$1.Armature;dragonBones$1.TransformObject;dragonBones$1.Bone;dragonBones$1.Surface;const Slot$1=dragonBones$1.Slot;dragonBones$1.Constraint;dragonBones$1.IKConstraint;dragonBones$1.PathConstraint;dragonBones$1.WorldClock;const Animation$1=dragonBones$1.Animation;dragonBones$1.AnimationState;dragonBones$1.BonePose;dragonBones$1.BlendState;dragonBones$1.TimelineState;dragonBones$1.TweenTimelineState;dragonBones$1.BoneTimelineState;dragonBones$1.SlotTimelineState;dragonBones$1.ConstraintTimelineState;dragonBones$1.ActionTimelineState;dragonBones$1.ZOrderTimelineState;dragonBones$1.BoneAllTimelineState;dragonBones$1.BoneTranslateTimelineState;dragonBones$1.BoneRotateTimelineState;dragonBones$1.BoneScaleTimelineState;dragonBones$1.SurfaceTimelineState;dragonBones$1.SlotDislayTimelineState;dragonBones$1.SlotColorTimelineState;dragonBones$1.DeformTimelineState;dragonBones$1.IKConstraintTimelineState;dragonBones$1.AnimationTimelineState;const EventObject$1=dragonBones$1.EventObject;dragonBones$1.DataParser;dragonBones$1.ObjectDataParser;dragonBones$1.ActionFrame;dragonBones$1.BinaryDataParser;const BaseFactory$1=dragonBones$1.BaseFactory;dragonBones$1.BuildArmaturePackage;const BinaryOffset=dragonBones$1.BinaryOffset;dragonBones$1.ArmatureType;const BoneType=dragonBones$1.BoneType;dragonBones$1.DisplayType;dragonBones$1.BoundingBoxType;dragonBones$1.ActionType;dragonBones$1.BlendMode;dragonBones$1.TweenType;dragonBones$1.TimelineType;

            var _dec$7, _class$7, _dec2$2, _class3;
            const {
              ccclass: ccclass$7
            } = _decorator;
            let CCTextureAtlasData$1 = (_dec$7 = ccclass$7('dragonBones.CCTextureAtlasData'), _dec$7(_class$7 = class CCTextureAtlasData extends TextureAtlasData$1 {
              constructor(...args) {
                super(...args);
                this._renderTexture = null;
              }
              get renderTexture() {
                return this._renderTexture;
              }
              set renderTexture(value) {
                this._renderTexture = value;
                if (value) {
                  for (const k in this.textures) {
                    const textureData = this.textures[k];
                    if (!textureData.spriteFrame) {
                      let rect = null;
                      if (textureData.rotated) {
                        rect = new Rect(textureData.region.x, textureData.region.y, textureData.region.height, textureData.region.width);
                      } else {
                        rect = new Rect(textureData.region.x, textureData.region.y, textureData.region.width, textureData.region.height);
                        textureData.spriteFrame = new SpriteFrame();
                        textureData.spriteFrame.texture = value;
                        textureData.spriteFrame.rect = rect;
                      }
                    }
                  }
                } else {
                  for (const k in this.textures) {
                    const textureData = this.textures[k];
                    textureData.spriteFrame = null;
                  }
                }
              }
              static toString() {
                return '[class dragonBones.CCTextureAtlasData]';
              }
              createTexture() {
                return BaseObject$1.borrowObject(CCTextureData$1);
              }
              _onClear() {
                super._onClear();
                this.renderTexture = null;
              }
            }) || _class$7);
            let CCTextureData$1 = (_dec2$2 = ccclass$7('dragonBones.CCTextureData'), _dec2$2(_class3 = class CCTextureData extends TextureData$1 {
              constructor(...args) {
                super(...args);
                this.spriteFrame = null;
              }
              static toString() {
                return '[class dragonBones.CCTextureData]';
              }
              _onClear() {
                super._onClear();
                this.spriteFrame = null;
              }
            }) || _class3);

            var _dec$6, _class$6;
            const {
              ccclass: ccclass$6
            } = _decorator;
            let CCSlot$1 = (_dec$6 = ccclass$6('dragonBones.CCSlot'), _dec$6(_class$6 = class CCSlot extends Slot$1 {
              static toString() {
                return '[class dragonBones.CCSlot]';
              }
              constructor() {
                super();
                this._localVertices = void 0;
                this._indices = void 0;
                this._matrix = void 0;
                this._worldMatrix = void 0;
                this._worldMatrixDirty = void 0;
                this._color = void 0;
                this._localVertices = [];
                this._indices = [];
                this._matrix = new Mat4();
                this._worldMatrix = new Mat4();
                this._worldMatrixDirty = true;
                this._visible = false;
                this._color = new Color();
              }
              getTexture() {
                if (this._textureData) {
                  const sp = this._textureData.spriteFrame;
                  const tex = sp.texture;
                  return tex;
                }
                return null;
              }
              calculWorldMatrix() {
                const parent = this._armature._parent;
                if (parent) {
                  this._mulMat(this._worldMatrix, parent._worldMatrix, this._matrix);
                } else {
                  Mat4.copy(this._worldMatrix, this._matrix);
                }
                this._worldMatrixDirty = false;
              }
              _onClear() {
                super._onClear();
                this._localVertices.length = 0;
                this._indices.length = 0;
                Mat4.identity(this._matrix);
                Mat4.identity(this._worldMatrix);
                this._worldMatrixDirty = true;
                this._color = new Color();
                this._visible = false;
              }
              _onUpdateDisplay() {}
              _initDisplay(value) {}
              _addDisplay() {
                this._visible = true;
              }
              _replaceDisplay(value) {}
              _removeDisplay() {
                this._visible = false;
              }
              _disposeDisplay(object) {}
              _updateVisible() {
                this._visible = this.parent.visible;
              }
              _updateGlueMesh() {}
              _updateZOrder() {}
              _updateBlendMode() {
                if (this._childArmature) {
                  const childSlots = this._childArmature.getSlots();
                  for (let i = 0, l = childSlots.length; i < l; i++) {
                    const slot = childSlots[i];
                    slot._blendMode = this._blendMode;
                    slot._updateBlendMode();
                  }
                }
              }
              _updateColor() {
                const c = this._color;
                c.r = this._colorTransform.redMultiplier * 255;
                c.g = this._colorTransform.greenMultiplier * 255;
                c.b = this._colorTransform.blueMultiplier * 255;
                c.a = this._colorTransform.alphaMultiplier * 255;
              }
              _updateFrame() {
                this._indices.length = 0;
                const indices = this._indices;
                const localVertices = this._localVertices;
                let indexOffset = 0;
                let vfOffset = 0;
                const currentTextureData = this._textureData;
                if (!this._display || this._displayIndex < 0 || !currentTextureData || !currentTextureData.spriteFrame) return;
                const texture = currentTextureData.spriteFrame.texture;
                const textureAtlasWidth = texture.width;
                const textureAtlasHeight = texture.height;
                const region = currentTextureData.region;
                if (textureAtlasWidth === 0 || textureAtlasHeight === 0) {
                  console.error(`SpriteFrame ${currentTextureData.spriteFrame.name} incorrect size ${textureAtlasWidth} x ${textureAtlasHeight}`);
                  return;
                }
                const currentVerticesData = this._deformVertices !== null && this._display === this._meshDisplay ? this._deformVertices.verticesData : null;
                if (currentVerticesData) {
                  const data = currentVerticesData.data;
                  const intArray = data.intArray;
                  const floatArray = data.floatArray;
                  const vertexCount = intArray[currentVerticesData.offset + BinaryOffset.MeshVertexCount];
                  const triangleCount = intArray[currentVerticesData.offset + BinaryOffset.MeshTriangleCount];
                  let vertexOffset = intArray[currentVerticesData.offset + BinaryOffset.MeshFloatOffset];
                  if (vertexOffset < 0) {
                    vertexOffset += 65536;
                  }
                  const uvOffset = vertexOffset + vertexCount * 2;
                  const scale = this._armature._armatureData.scale;
                  for (let i = 0, l = vertexCount * 2; i < l; i += 2) {
                    localVertices[vfOffset++] = floatArray[vertexOffset + i] * scale;
                    localVertices[vfOffset++] = -floatArray[vertexOffset + i + 1] * scale;
                    if (currentVerticesData.rotated) {
                      localVertices[vfOffset++] = (region.x + (1.0 - floatArray[uvOffset + i]) * region.width) / textureAtlasWidth;
                      localVertices[vfOffset++] = (region.y + floatArray[uvOffset + i + 1] * region.height) / textureAtlasHeight;
                    } else {
                      localVertices[vfOffset++] = (region.x + floatArray[uvOffset + i] * region.width) / textureAtlasWidth;
                      localVertices[vfOffset++] = (region.y + floatArray[uvOffset + i + 1] * region.height) / textureAtlasHeight;
                    }
                  }
                  for (let i = 0; i < triangleCount * 3; ++i) {
                    indices[indexOffset++] = intArray[currentVerticesData.offset + BinaryOffset.MeshVertexIndices + i];
                  }
                  localVertices.length = vfOffset;
                  indices.length = indexOffset;
                  const isSkinned = !!currentVerticesData.weight;
                  if (isSkinned) {
                    this._identityTransform();
                  }
                } else {
                  const l = region.x / textureAtlasWidth;
                  const b = (region.y + region.height) / textureAtlasHeight;
                  const r = (region.x + region.width) / textureAtlasWidth;
                  const t = region.y / textureAtlasHeight;
                  localVertices[vfOffset++] = 0;
                  localVertices[vfOffset++] = 0;
                  localVertices[vfOffset++] = l;
                  localVertices[vfOffset++] = b;
                  localVertices[vfOffset++] = region.width;
                  localVertices[vfOffset++] = 0;
                  localVertices[vfOffset++] = r;
                  localVertices[vfOffset++] = b;
                  localVertices[vfOffset++] = 0;
                  localVertices[vfOffset++] = region.height;
                  localVertices[vfOffset++] = l;
                  localVertices[vfOffset++] = t;
                  localVertices[vfOffset++] = region.width;
                  localVertices[vfOffset++] = region.height;
                  localVertices[vfOffset++] = r;
                  localVertices[vfOffset++] = t;
                  indices[0] = 0;
                  indices[1] = 1;
                  indices[2] = 2;
                  indices[3] = 1;
                  indices[4] = 3;
                  indices[5] = 2;
                  localVertices.length = vfOffset;
                  indices.length = 6;
                }
                this._visibleDirty = true;
                this._blendModeDirty = true;
                this._colorDirty = true;
              }
              _updateMesh() {
                const scale = this._armature._armatureData.scale;
                const deformVertices = this._deformVertices.vertices;
                const bones = this._deformVertices.bones;
                const verticesData = this._deformVertices.verticesData;
                const weightData = verticesData.weight;
                const hasDeform = deformVertices.length > 0 && verticesData.inheritDeform;
                const localVertices = this._localVertices;
                if (weightData) {
                  const data = verticesData.data;
                  const intArray = data.intArray;
                  const floatArray = data.floatArray;
                  const vertexCount = intArray[verticesData.offset + BinaryOffset.MeshVertexCount];
                  let weightFloatOffset = intArray[weightData.offset + BinaryOffset.WeigthFloatOffset];
                  if (weightFloatOffset < 0) {
                    weightFloatOffset += 65536;
                  }
                  for (let i = 0, iB = weightData.offset + BinaryOffset.WeigthBoneIndices + bones.length, iV = weightFloatOffset, iF = 0, lvi = 0; i < vertexCount; i++, lvi += 4) {
                    const boneCount = intArray[iB++];
                    let xG = 0.0;
                    let yG = 0.0;
                    for (let j = 0; j < boneCount; ++j) {
                      const boneIndex = intArray[iB++];
                      const bone = bones[boneIndex];
                      if (bone !== null) {
                        const matrix = bone.globalTransformMatrix;
                        const weight = floatArray[iV++];
                        let xL = floatArray[iV++] * scale;
                        let yL = floatArray[iV++] * scale;
                        if (hasDeform) {
                          xL += deformVertices[iF++];
                          yL += deformVertices[iF++];
                        }
                        xG += (matrix.a * xL + matrix.c * yL + matrix.tx) * weight;
                        yG += (matrix.b * xL + matrix.d * yL + matrix.ty) * weight;
                      }
                    }
                    localVertices[lvi] = xG;
                    localVertices[lvi + 1] = -yG;
                  }
                } else if (hasDeform) {
                  const isSurface = this._parent._boneData.type !== BoneType.Bone;
                  const data = verticesData.data;
                  const intArray = data.intArray;
                  const floatArray = data.floatArray;
                  const vertexCount = intArray[verticesData.offset + BinaryOffset.MeshVertexCount];
                  let vertexOffset = intArray[verticesData.offset + BinaryOffset.MeshFloatOffset];
                  if (vertexOffset < 0) {
                    vertexOffset += 65536;
                  }
                  for (let i = 0, l = vertexCount, lvi = 0; i < l; i++, lvi += 4) {
                    const x = floatArray[vertexOffset + i * 2] * scale + deformVertices[i * 2];
                    const y = floatArray[vertexOffset + i * 2 + 1] * scale + deformVertices[i * 2 + 1];
                    if (isSurface) {
                      const matrix = this._parent._getGlobalTransformMatrix(x, y);
                      localVertices[lvi] = matrix.a * x + matrix.c * y + matrix.tx;
                      localVertices[lvi + 1] = -matrix.b * x + matrix.d * y + matrix.ty;
                    } else {
                      localVertices[lvi] = x;
                      localVertices[lvi + 1] = -y;
                    }
                  }
                }
                if (weightData) {
                  this._identityTransform();
                }
              }
              _identityTransform() {
                const m = this._matrix;
                m.m00 = 1.0;
                m.m01 = 0.0;
                m.m04 = -0.0;
                m.m05 = -1.0;
                m.m12 = 0.0;
                m.m13 = 0.0;
                this._worldMatrixDirty = true;
              }
              _updateTransform() {
                const m = this._matrix;
                m.m00 = this.globalTransformMatrix.a;
                m.m01 = this.globalTransformMatrix.b;
                m.m04 = -this.globalTransformMatrix.c;
                m.m05 = -this.globalTransformMatrix.d;
                if (this._childArmature) {
                  m.m12 = this.globalTransformMatrix.tx;
                  m.m13 = this.globalTransformMatrix.ty;
                } else {
                  m.m12 = this.globalTransformMatrix.tx - (this.globalTransformMatrix.a * this._pivotX - this.globalTransformMatrix.c * this._pivotY);
                  m.m13 = this.globalTransformMatrix.ty - (this.globalTransformMatrix.b * this._pivotX - this.globalTransformMatrix.d * this._pivotY);
                }
                this._worldMatrixDirty = true;
              }
              updateWorldMatrix() {
                if (!this._armature) return;
                const parentSlot = this._armature._parent;
                if (parentSlot) {
                  parentSlot.updateWorldMatrix();
                }
                if (this._worldMatrixDirty) {
                  this.calculWorldMatrix();
                  const childArmature = this.childArmature;
                  if (!childArmature) return;
                  const slots = childArmature.getSlots();
                  for (let i = 0, n = slots.length; i < n; i++) {
                    const slot = slots[i];
                    if (slot) {
                      slot._worldMatrixDirty = true;
                    }
                  }
                }
              }
              _mulMat(out, a, b) {
                const aa = a.m00;
                const ab = a.m01;
                const ac = a.m04;
                const ad = a.m05;
                const atx = a.m12;
                const aty = a.m13;
                const ba = b.m00;
                const bb = b.m01;
                const bc = b.m04;
                const bd = b.m05;
                const btx = b.m12;
                const bty = b.m13;
                if (ab !== 0 || ac !== 0) {
                  out.m00 = ba * aa + bb * ac;
                  out.m01 = ba * ab + bb * ad;
                  out.m04 = bc * aa + bd * ac;
                  out.m05 = bc * ab + bd * ad;
                  out.m12 = aa * btx + ac * bty + atx;
                  out.m13 = ab * btx + ad * bty + aty;
                } else {
                  out.m00 = ba * aa;
                  out.m01 = bb * ad;
                  out.m04 = bc * aa;
                  out.m05 = bd * ad;
                  out.m12 = aa * btx + atx;
                  out.m13 = ad * bty + aty;
                }
              }
            }) || _class$6);

            var _dec$5, _class$5;
            const {
              ccclass: ccclass$5
            } = _decorator;
            let CCArmatureDisplay$1 = (_dec$5 = ccclass$5('dragonBones.CCArmatureDisplay'), _dec$5(_class$5 = class CCArmatureDisplay extends DisplayData {
              get node() {
                return this;
              }
              constructor() {
                super();
                this.shouldAdvanced = false;
                this._ccNode = null;
                this._ccComponent = null;
                this._eventTarget = void 0;
                this._armature = null;
                this._eventTarget = new EventTarget();
              }
              hasEvent(type) {
                console.warn('Method not implemented.');
                return false;
              }
              addEvent(type, listener, thisObject) {
                console.warn('Method not implemented.');
              }
              removeEvent(type, listener, thisObject) {
                console.warn('Method not implemented.');
              }
              setEventTarget(eventTarget) {
                this._eventTarget = eventTarget;
              }
              getRootDisplay() {
                let parentSlot = this._armature._parent;
                if (!parentSlot) {
                  return this;
                }
                let slot;
                while (parentSlot) {
                  slot = parentSlot;
                  parentSlot = parentSlot._armature._parent;
                }
                return slot._armature.display;
              }
              convertToRootSpace(pos) {
                const slot = this._armature._parent;
                if (!slot) {
                  return pos;
                }
                slot.updateWorldMatrix();
                const worldMatrix = slot._worldMatrix;
                const newPos = new Vec3(0, 0);
                newPos.x = pos.x * worldMatrix.m00 + pos.y * worldMatrix.m04 + worldMatrix.m12;
                newPos.y = pos.x * worldMatrix.m01 + pos.y * worldMatrix.m05 + worldMatrix.m13;
                return newPos;
              }
              convertToWorldSpace(point) {
                var _ccNode$_uiProps$uiTr;
                const newPos = this.convertToRootSpace(point);
                const ccNode = this.getRootNode();
                return ccNode === null || ccNode === void 0 ? void 0 : (_ccNode$_uiProps$uiTr = ccNode._uiProps.uiTransformComp) === null || _ccNode$_uiProps$uiTr === void 0 ? void 0 : _ccNode$_uiProps$uiTr.convertToWorldSpaceAR(newPos);
              }
              getRootNode() {
                const rootDisplay = this.getRootDisplay();
                return rootDisplay && rootDisplay._ccNode;
              }
              dbInit(armature) {
                this._armature = armature;
              }
              dbClear() {
                this._armature = null;
              }
              dbUpdate() {
                if (this._ccComponent) {
                  this._ccComponent.markForUpdateRenderData();
                }
              }
              advanceTimeBySelf(on) {
                this.shouldAdvanced = !!on;
              }
              hasDBEventListener(type) {
                return this._eventTarget.hasEventListener(type);
              }
              addDBEventListener(type, listener, target) {
                this._eventTarget.on(type, listener, target);
              }
              removeDBEventListener(type, listener, target) {
                this._eventTarget.off(type, listener, target);
              }
              dispatchDBEvent(type, eventObject) {
                this._eventTarget.emit(type, eventObject);
              }
            }) || _class$5);

            var _dec$4, _class$4, _class2$4;
            const {
              ccclass: ccclass$4
            } = _decorator;
            let CCFactory$1 = (_dec$4 = ccclass$4('CCFactory'), _dec$4(_class$4 = (_class2$4 = class CCFactory extends BaseFactory$1 {
              static getInstance() {
                if (!CCFactory._factory) {
                  CCFactory._factory = new CCFactory();
                }
                return CCFactory._factory;
              }
              constructor() {
                super();
                this.id = void 0;
                this.uuid = void 0;
                this._slots = void 0;
                const eventManager = new CCArmatureDisplay$1();
                this._dragonBones = new DragonBones(eventManager);
                if (director.getScheduler()) {
                  game.on(Game.EVENT_RESTART, this.onRestart, this);
                  this.initUpdate();
                }
                this.id = this.uuid = 'CCFactory';
              }
              onRestart() {
                CCFactory._factory = null;
              }
              initUpdate(dt) {
                Scheduler.enableForTarget(this);
                director.getScheduler().scheduleUpdate(this, System.Priority.HIGH, false);
              }
              update(dt) {
                this._dragonBones.advanceTime(dt);
              }
              getDragonBonesDataByRawData(rawData) {
                const dataParser = rawData instanceof ArrayBuffer ? BaseFactory$1._binaryParser : this._dataParser;
                return dataParser.parseDragonBonesData(rawData, 1.0);
              }
              buildArmatureDisplay(armatureName, dragonBonesName, skinName, textureAtlasName) {
                const armature = this.buildArmature(armatureName, dragonBonesName, skinName, textureAtlasName);
                return armature ? armature._display : null;
              }
              createArmatureNode(comp, armatureName, node) {
                node = node || new Node();
                let display = node.getComponent('dragonBones.ArmatureDisplay');
                if (!display) {
                  display = node.addComponent('dragonBones.ArmatureDisplay');
                }
                node.name = armatureName;
                display._armatureName = armatureName;
                display._dragonAsset = comp.dragonAsset;
                display._dragonAtlasAsset = comp.dragonAtlasAsset;
                display._init();
                return display;
              }
              _buildTextureAtlasData(textureAtlasData, textureAtlas) {
                if (textureAtlasData) {
                  textureAtlasData.renderTexture = textureAtlas;
                } else {
                  textureAtlasData = BaseObject$1.borrowObject(CCTextureAtlasData$1);
                }
                return textureAtlasData;
              }
              _sortSlots() {
                const slots = this._slots;
                const sortedSlots = [];
                for (let i = 0, l = slots.length; i < l; i++) {
                  const slot = slots[i];
                  const zOrder = slot._zOrder;
                  let inserted = false;
                  for (let j = sortedSlots.length - 1; j >= 0; j--) {
                    if (zOrder >= sortedSlots[j]._zOrder) {
                      sortedSlots.splice(j + 1, 0, slot);
                      inserted = true;
                      break;
                    }
                  }
                  if (!inserted) {
                    sortedSlots.unshift(slot);
                  }
                }
                this._slots = sortedSlots;
              }
              _buildArmature(dataPackage) {
                const armature = BaseObject$1.borrowObject(Armature$1);
                armature._skinData = dataPackage.skin;
                armature._animation = BaseObject$1.borrowObject(Animation$1);
                armature._animation._armature = armature;
                armature._animation.animations = dataPackage.armature.animations;
                armature._isChildArmature = false;
                const display = new CCArmatureDisplay$1();
                armature.init(dataPackage.armature, display, display, this._dragonBones);
                return armature;
              }
              _buildSlot(dataPackage, slotData, displays) {
                const slot = BaseObject$1.borrowObject(CCSlot$1);
                const display = slot;
                slot.init(slotData, displays, display, display);
                return slot;
              }
              getDragonBonesDataByUUID(uuid) {
                for (const name in this._dragonBonesDataMap) {
                  if (name.indexOf(uuid) !== -1) {
                    return this._dragonBonesDataMap[name];
                  }
                }
                return null;
              }
              removeDragonBonesDataByUUID(uuid, disposeData) {
                if (disposeData === undefined) {
                  disposeData = true;
                }
                for (const name in this._dragonBonesDataMap) {
                  if (name.indexOf(uuid) === -1) continue;
                  if (disposeData) {
                    this._dragonBones.bufferObject(this._dragonBonesDataMap[name]);
                  }
                  delete this._dragonBonesDataMap[name];
                }
              }
            }, _class2$4._factory = null, _class2$4)) || _class$4);

            var _class2$3;
            const MaxCacheTime = 30;
            const FrameTime = 1 / 60;
            const _vertices = [];
            const _indices = [];
            let _boneInfoOffset = 0;
            let _indexOffset$1 = 0;
            let _vfOffset = 0;
            let _preTexUrl = null;
            let _preBlendMode = null;
            let _segVCount = 0;
            let _segICount = 0;
            let _segOffset = 0;
            let _colorOffset = 0;
            let _preColor = 0;
            let _x;
            let _y;
            const PER_VERTEX_SIZE$1 = 5;
            const EXPORT_VERTEX_SIZE = 9;
            class AnimationCache {
              constructor() {
                this.maxVertexCount = 0;
                this.maxIndexCount = 0;
                this._privateMode = false;
                this._inited = false;
                this._invalid = true;
                this._enableCacheAttachedInfo = false;
                this.frames = [];
                this.totalTime = 0;
                this.isCompleted = false;
                this._frameIdx = -1;
                this._armatureInfo = null;
                this._animationName = null;
                this._tempSegments = null;
                this._tempColors = null;
                this._tempBoneInfos = null;
              }
              init(armatureInfo, animationName) {
                this._inited = true;
                this._armatureInfo = armatureInfo;
                this._animationName = animationName;
              }
              clear() {
                this._inited = false;
                for (let i = 0, n = this.frames.length; i < n; i++) {
                  const frame = this.frames[i];
                  frame.segments.length = 0;
                }
                this.invalidAllFrame();
              }
              begin() {
                if (!this._invalid) return;
                const armatureInfo = this._armatureInfo;
                const curAnimationCache = armatureInfo.curAnimationCache;
                if (curAnimationCache && curAnimationCache !== this) {
                  if (this._privateMode) {
                    curAnimationCache.invalidAllFrame();
                  } else {
                    curAnimationCache.updateToFrame();
                  }
                }
                const armature = armatureInfo.armature;
                const animation = armature.animation;
                animation.play(this._animationName, 1);
                armatureInfo.curAnimationCache = this;
                this._invalid = false;
                this._frameIdx = -1;
                this.totalTime = 0;
                this.isCompleted = false;
              }
              end() {
                if (!this._needToUpdate()) {
                  this._armatureInfo.curAnimationCache = null;
                  this.frames.length = this._frameIdx + 1;
                  this.isCompleted = true;
                }
              }
              _needToUpdate(toFrameIdx) {
                const armatureInfo = this._armatureInfo;
                const armature = armatureInfo.armature;
                const animation = armature.animation;
                return !animation.isCompleted && this.totalTime < MaxCacheTime && (toFrameIdx === undefined || this._frameIdx < toFrameIdx);
              }
              updateToFrame(toFrameIdx) {
                if (!this._inited) return;
                this.begin();
                if (!this._needToUpdate(toFrameIdx)) return;
                const armatureInfo = this._armatureInfo;
                const armature = armatureInfo.armature;
                do {
                  armature.advanceTime(FrameTime);
                  this._frameIdx++;
                  this.updateFrame(armature, this._frameIdx);
                  this.totalTime += FrameTime;
                } while (this._needToUpdate(toFrameIdx));
                this.end();
              }
              isInited() {
                return this._inited;
              }
              isInvalid() {
                return this._invalid;
              }
              invalidAllFrame() {
                this.isCompleted = false;
                this._invalid = true;
              }
              updateAllFrame() {
                this.invalidAllFrame();
                this.updateToFrame();
              }
              enableCacheAttachedInfo() {
                if (!this._enableCacheAttachedInfo) {
                  this._enableCacheAttachedInfo = true;
                  this.invalidAllFrame();
                }
              }
              updateFrame(armature, index) {
                _vfOffset = 0;
                _boneInfoOffset = 0;
                _indexOffset$1 = 0;
                _preTexUrl = null;
                _preBlendMode = null;
                _segVCount = 0;
                _segICount = 0;
                _segOffset = 0;
                _colorOffset = 0;
                _preColor = 0;
                this.frames[index] = this.frames[index] || {
                  segments: [],
                  colors: [],
                  boneInfos: [],
                  vertices: new Float32Array(),
                  uintVert: new Uint32Array(),
                  indices: new Uint16Array()
                };
                const frame = this.frames[index];
                const segments = this._tempSegments = frame.segments;
                const colors = this._tempColors = frame.colors;
                const boneInfos = this._tempBoneInfos = frame.boneInfos;
                this._traverseArmature(armature, 1.0);
                if (_colorOffset > 0) {
                  colors[_colorOffset - 1].vfOffset = _vfOffset;
                }
                colors.length = _colorOffset;
                boneInfos.length = _boneInfoOffset;
                const preSegOffset = _segOffset - 1;
                if (preSegOffset >= 0) {
                  if (_segICount > 0) {
                    const preSegInfo = segments[preSegOffset];
                    preSegInfo.indexCount = _segICount;
                    preSegInfo.vfCount = _segVCount * EXPORT_VERTEX_SIZE;
                    preSegInfo.vertexCount = _segVCount;
                    segments.length = _segOffset;
                  } else {
                    segments.length = _segOffset - 1;
                  }
                }
                if (segments.length === 0) return;
                let vertices = frame.vertices;
                const vertexCount = _vfOffset / PER_VERTEX_SIZE$1;
                const copyOutVerticeSize = vertexCount * EXPORT_VERTEX_SIZE;
                if (!vertices || vertices.length < _vfOffset) {
                  vertices = frame.vertices = new Float32Array(copyOutVerticeSize);
                }
                let colorI32;
                for (let i = 0, j = 0; i < copyOutVerticeSize;) {
                  vertices[i] = _vertices[j++];
                  vertices[i + 1] = _vertices[j++];
                  vertices[i + 3] = _vertices[j++];
                  vertices[i + 4] = _vertices[j++];
                  colorI32 = _vertices[j++];
                  vertices[i + 5] = (colorI32 & 0xff) / 255.0;
                  vertices[i + 6] = (colorI32 >> 8 & 0xff) / 255.0;
                  vertices[i + 7] = (colorI32 >> 16 & 0xff) / 255.0;
                  vertices[i + 8] = (colorI32 >> 24 & 0xff) / 255.0;
                  i += EXPORT_VERTEX_SIZE;
                }
                let indices = frame.indices;
                if (!indices || indices.length < _indexOffset$1) {
                  indices = frame.indices = new Uint16Array(_indexOffset$1);
                }
                for (let i = 0; i < _indexOffset$1; i++) {
                  indices[i] = _indices[i];
                }
                frame.vertices = vertices;
                frame.indices = indices;
                this.maxVertexCount = vertexCount > this.maxVertexCount ? vertexCount : this.maxVertexCount;
                this.maxIndexCount = indices.length > this.maxIndexCount ? indices.length : this.maxIndexCount;
              }
              _traverseArmature(armature, parentOpacity) {
                const colors = this._tempColors;
                const segments = this._tempSegments;
                const boneInfos = this._tempBoneInfos;
                const slots = armature._slots;
                let slotVertices;
                let slotIndices;
                let slot;
                let slotMatrix;
                let slotColor;
                let colorVal;
                let texture;
                let preSegOffset;
                let preSegInfo;
                const bones = armature._bones;
                if (this._enableCacheAttachedInfo) {
                  for (let i = 0, l = bones.length; i < l; i++, _boneInfoOffset++) {
                    const bone = bones[i];
                    let boneInfo = boneInfos[_boneInfoOffset];
                    if (!boneInfo) {
                      boneInfo = boneInfos[_boneInfoOffset] = {
                        globalTransformMatrix: new Matrix$1()
                      };
                    }
                    const boneMat = bone.globalTransformMatrix;
                    const cacheBoneMat = boneInfo.globalTransformMatrix;
                    cacheBoneMat.copyFrom(boneMat);
                  }
                }
                for (let i = 0, l = slots.length; i < l; i++) {
                  slot = slots[i];
                  if (!slot._visible || !slot._displayData) continue;
                  slot.updateWorldMatrix();
                  slotColor = slot._color;
                  if (slot.childArmature) {
                    this._traverseArmature(slot.childArmature, parentOpacity * slotColor.a / 255);
                    continue;
                  }
                  texture = slot.getTexture();
                  if (!texture) continue;
                  if (_preTexUrl !== texture.nativeUrl || _preBlendMode !== slot._blendMode) {
                    _preTexUrl = texture.nativeUrl;
                    _preBlendMode = slot._blendMode;
                    preSegOffset = _segOffset - 1;
                    if (preSegOffset >= 0) {
                      if (_segICount > 0) {
                        preSegInfo = segments[preSegOffset];
                        preSegInfo.indexCount = _segICount;
                        preSegInfo.vertexCount = _segVCount;
                        preSegInfo.vfCount = _segVCount * EXPORT_VERTEX_SIZE;
                      } else {
                        _segOffset--;
                      }
                    }
                    segments[_segOffset] = {
                      tex: texture,
                      blendMode: slot._blendMode,
                      indexCount: 0,
                      vertexCount: 0,
                      vfCount: 0
                    };
                    _segOffset++;
                    _segICount = 0;
                    _segVCount = 0;
                  }
                  colorVal = (slotColor.a * parentOpacity << 24 >>> 0) + (slotColor.b << 16) + (slotColor.g << 8) + slotColor.r;
                  if (_preColor !== colorVal) {
                    _preColor = colorVal;
                    if (_colorOffset > 0) {
                      colors[_colorOffset - 1].vfOffset = _vfOffset;
                    }
                    colors[_colorOffset++] = {
                      r: slotColor.r,
                      g: slotColor.g,
                      b: slotColor.b,
                      a: slotColor.a * parentOpacity,
                      vfOffset: 0
                    };
                  }
                  slotVertices = slot._localVertices;
                  slotIndices = slot._indices;
                  slotMatrix = slot._worldMatrix;
                  for (let j = 0, vl = slotVertices.length; j < vl;) {
                    _x = slotVertices[j++];
                    _y = slotVertices[j++];
                    _vertices[_vfOffset++] = _x * slotMatrix.m00 + _y * slotMatrix.m04 + slotMatrix.m12;
                    _vertices[_vfOffset++] = _x * slotMatrix.m01 + _y * slotMatrix.m05 + slotMatrix.m13;
                    _vertices[_vfOffset++] = slotVertices[j++];
                    _vertices[_vfOffset++] = slotVertices[j++];
                    _vertices[_vfOffset++] = colorVal;
                  }
                  for (let ii = 0, il = slotIndices.length; ii < il; ii++) {
                    _indices[_indexOffset$1++] = _segVCount + slotIndices[ii];
                  }
                  _segICount += slotIndices.length;
                  _segVCount += slotVertices.length / 4;
                }
              }
            }
            class ArmatureCache {
              constructor() {
                this._privateMode = false;
                this._animationPool = {};
                this._armatureCache = {};
              }
              enablePrivateMode() {
                this._privateMode = true;
              }
              dispose() {
                for (const key in this._armatureCache) {
                  const armatureInfo = this._armatureCache[key];
                  if (armatureInfo) {
                    const armature = armatureInfo.armature;
                    if (armature) armature.dispose();
                  }
                }
                this._armatureCache = {};
                this._animationPool = {};
              }
              _removeArmature(armatureKey) {
                const armatureInfo = this._armatureCache[armatureKey];
                const animationsCache = armatureInfo.animationsCache;
                for (const aniKey in animationsCache) {
                  const animationCache = animationsCache[aniKey];
                  if (!animationCache) continue;
                  this._animationPool[`${armatureKey}#${aniKey}`] = animationCache;
                  animationCache.clear();
                }
                const armature = armatureInfo.armature;
                if (armature) armature.dispose();
                delete this._armatureCache[armatureKey];
              }
              resetArmature(uuid) {
                for (const armatureKey in this._armatureCache) {
                  if (armatureKey.indexOf(uuid) === -1) continue;
                  this._removeArmature(armatureKey);
                }
              }
              getArmatureCache(armatureName, armatureKey, atlasUUID) {
                const armatureInfo = this._armatureCache[armatureKey];
                let armature;
                if (!armatureInfo) {
                  const factory = CCFactory$1.getInstance();
                  const proxy = factory.buildArmatureDisplay(armatureName, armatureKey, '', atlasUUID);
                  if (!proxy || !proxy._armature) return null;
                  armature = proxy._armature;
                  if (!ArmatureCache.canCache(armature)) {
                    armature.dispose();
                    return null;
                  }
                  this._armatureCache[armatureKey] = {
                    armature,
                    animationsCache: {},
                    curAnimationCache: null
                  };
                } else {
                  armature = armatureInfo.armature;
                }
                return armature;
              }
              getAnimationCache(armatureKey, animationName) {
                const armatureInfo = this._armatureCache[armatureKey];
                if (!armatureInfo) return null;
                const animationsCache = armatureInfo.animationsCache;
                return animationsCache[animationName];
              }
              initAnimationCache(armatureKey, animationName) {
                if (!animationName) return null;
                const armatureInfo = this._armatureCache[armatureKey];
                const armature = armatureInfo && armatureInfo.armature;
                if (!armature) return null;
                const animation = armature.animation;
                const hasAni = animation.hasAnimation(animationName);
                if (!hasAni) return null;
                const animationsCache = armatureInfo.animationsCache;
                let animationCache = animationsCache[animationName];
                if (!animationCache) {
                  const poolKey = `${armatureKey}#${animationName}`;
                  animationCache = this._animationPool[poolKey];
                  if (animationCache) {
                    delete this._animationPool[poolKey];
                  } else {
                    animationCache = new AnimationCache();
                    animationCache._privateMode = this._privateMode;
                  }
                  animationCache.init(armatureInfo, animationName);
                  animationsCache[animationName] = animationCache;
                }
                return animationCache;
              }
              invalidAnimationCache(armatureKey) {
                const armatureInfo = this._armatureCache[armatureKey];
                const armature = armatureInfo && armatureInfo.armature;
                if (!armature) return;
                const animationsCache = armatureInfo.animationsCache;
                for (const aniKey in animationsCache) {
                  const animationCache = animationsCache[aniKey];
                  animationCache.invalidAllFrame();
                }
              }
              updateAnimationCache(armatureKey, animationName) {
                if (animationName) {
                  const animationCache = this.initAnimationCache(armatureKey, animationName);
                  if (!animationCache) return;
                  animationCache.updateAllFrame();
                } else {
                  const armatureInfo = this._armatureCache[armatureKey];
                  const armature = armatureInfo && armatureInfo.armature;
                  if (!armature) return;
                  const animationsCache = armatureInfo.animationsCache;
                  for (const aniKey in animationsCache) {
                    const animationCache = animationsCache[aniKey];
                    animationCache.updateAllFrame();
                  }
                }
              }
              static canCache(armature) {
                const slots = armature._slots;
                for (let i = 0, l = slots.length; i < l; i++) {
                  const slot = slots[i];
                  if (slot.childArmature) {
                    return false;
                  }
                }
                return true;
              }
            }
            _class2$3 = ArmatureCache;
            ArmatureCache.FrameTime = FrameTime;
            ArmatureCache.sharedCache = new _class2$3();

            var _dec$3, _class$3, _class2$2, _initializer$2;
            const {
              ccclass: ccclass$3,
              serializable: serializable$2
            } = _decorator;
            let DragonBonesAsset = (_dec$3 = ccclass$3('dragonBones.DragonBonesAsset'), _dec$3(_class$3 = (_class2$2 = class DragonBonesAsset extends Asset {
              constructor(...args) {
                super(...args);
                this._dragonBonesJson = _initializer$2 && _initializer$2();
                this._factory = null;
                this._dragonBonesJsonData = void 0;
                this._armaturesEnum = null;
              }
              get dragonBonesJson() {
                return this._dragonBonesJson;
              }
              set dragonBonesJson(value) {
                this._dragonBonesJson = value;
                this._dragonBonesJsonData = JSON.parse(value);
                this.reset();
              }
              constructctor() {
                this.reset();
              }
              createNode(callback) {
                const node = new Node(this.name);
                const armatureDisplay = node.addComponent('dragonBones.ArmatureDisplay');
                armatureDisplay.dragonAsset = this;
                return callback(null, node);
              }
              reset() {
                this._clear();
              }
              init(factory, atlasUUID) {
                this._factory = factory || CCFactory$1.getInstance();
                if (!this._dragonBonesJsonData && this.dragonBonesJson) {
                  this._dragonBonesJsonData = JSON.parse(this.dragonBonesJson);
                }
                let rawData = null;
                if (this._dragonBonesJsonData) {
                  rawData = this._dragonBonesJsonData;
                } else {
                  rawData = this._nativeAsset;
                }
                if (!this._uuid) {
                  const dbData = this._factory.getDragonBonesDataByRawData(rawData);
                  if (dbData) {
                    this._uuid = dbData.name;
                  } else {
                    console.warn('dragonbones name is empty');
                  }
                }
                const armatureKey = `${this._uuid}#${atlasUUID}`;
                const dragonBonesData = this._factory.getDragonBonesData(armatureKey);
                if (dragonBonesData) return armatureKey;
                this._factory.parseDragonBonesData(rawData instanceof ArrayBuffer ? rawData : rawData.buffer instanceof ArrayBuffer ? rawData.buffer : rawData, armatureKey);
                return armatureKey;
              }
              getArmatureEnum() {
                if (this._armaturesEnum) {
                  return this._armaturesEnum;
                }
                this.init();
                const dragonBonesData = this._factory.getDragonBonesDataByUUID(this._uuid);
                if (dragonBonesData) {
                  const armatureNames = dragonBonesData.armatureNames;
                  const enumDef = {};
                  for (let i = 0; i < armatureNames.length; i++) {
                    const name = armatureNames[i];
                    enumDef[name] = i;
                  }
                  return this._armaturesEnum = Enum(enumDef);
                }
                return null;
              }
              getAnimsEnum(armatureName) {
                this.init();
                const dragonBonesData = this._factory.getDragonBonesDataByUUID(this._uuid);
                if (dragonBonesData) {
                  const armature = dragonBonesData.getArmature(armatureName);
                  if (!armature) {
                    return null;
                  }
                  const enumDef = {
                    '<None>': 0
                  };
                  const anims = armature.animations;
                  let i = 0;
                  for (const animName in anims) {
                    if (anims.hasOwnProperty(animName)) {
                      enumDef[animName] = i + 1;
                      i++;
                    }
                  }
                  return Enum(enumDef);
                }
                return null;
              }
              destroy() {
                this._clear();
                return super.destroy();
              }
              _clear() {
                if (this._factory) {
                  ArmatureCache.sharedCache.resetArmature(this._uuid);
                  this._factory.removeDragonBonesDataByUUID(this._uuid, true);
                }
              }
            }, (_initializer$2 = applyDecoratedInitializer(_class2$2.prototype, "_dragonBonesJson", [serializable$2], function () {
              return '';
            })), _class2$2)) || _class$3);
            legacyCC.internal.DragonBonesAsset = DragonBonesAsset;

            var _dec$2, _dec2$1, _class$2, _class2$1, _initializer$1, _initializer2$1, _initializer3$1, _initializer4$1;
            const {
              ccclass: ccclass$2,
              serializable: serializable$1,
              type: type$1
            } = _decorator;
            let DragonBonesAtlasAsset = (_dec$2 = ccclass$2('dragonBones.DragonBonesAtlasAsset'), _dec2$1 = type$1(Texture2D), _dec$2(_class$2 = (_class2$1 = class DragonBonesAtlasAsset extends Asset {
              constructor() {
                super();
                this._atlasJson = _initializer$1 && _initializer$1();
                this._texture = _initializer2$1 && _initializer2$1();
                this._atlasJsonData = _initializer3$1 && _initializer3$1();
                this._factory = null;
                this._textureAtlasData = _initializer4$1 && _initializer4$1();
                this._clear();
              }
              get atlasJson() {
                return this._atlasJson;
              }
              set atlasJson(value) {
                this._atlasJson = value;
                this._atlasJsonData = JSON.parse(this.atlasJson);
                this._clear();
              }
              get texture() {
                return this._texture;
              }
              set texture(value) {
                this._texture = value;
                this._clear();
              }
              createNode(callback) {
                const node = new Node(this.name);
                const armatureDisplay = node.addComponent('dragonBones.ArmatureDisplay');
                armatureDisplay.dragonAtlasAsset = this;
                return callback(null, node);
              }
              init(factory) {
                this._factory = factory;
                if (!this._atlasJsonData) {
                  this._atlasJsonData = JSON.parse(this.atlasJson);
                }
                const atlasJsonObj = this._atlasJsonData;
                this._uuid = this._uuid || atlasJsonObj.name;
                if (this._textureAtlasData) {
                  factory.addTextureAtlasData(this._textureAtlasData, this._uuid);
                } else {
                  this._textureAtlasData = factory.parseTextureAtlasData(atlasJsonObj, this.texture, this._uuid);
                }
              }
              destroy() {
                this._clear();
                return super.destroy();
              }
              _clear() {
                return;
              }
            }, (_initializer$1 = applyDecoratedInitializer(_class2$1.prototype, "_atlasJson", [serializable$1], function () {
              return '';
            }), _initializer2$1 = applyDecoratedInitializer(_class2$1.prototype, "_texture", [serializable$1, _dec2$1], function () {
              return null;
            }), _initializer3$1 = applyDecoratedInitializer(_class2$1.prototype, "_atlasJsonData", [serializable$1], function () {
              return {};
            }), _initializer4$1 = applyDecoratedInitializer(_class2$1.prototype, "_textureAtlasData", [serializable$1], function () {
              return null;
            })), _class2$1)) || _class$2);
            legacyCC.internal.DragonBonesAtlasAsset = DragonBonesAtlasAsset;

            var _dec$1, _class$1;
            const _tempMat4 = new Mat4();
            const {
              ccclass: ccclass$1
            } = _decorator;
            let AttachUtil = (_dec$1 = ccclass$1('dragonBones.AttachUtil'), _dec$1(_class$1 = class AttachUtil {
              constructor() {
                this._inited = false;
                this._armature = null;
                this._armatureNode = null;
                this._armatureDisplay = null;
              }
              init(armatureDisplay) {
                this._inited = true;
                this._armature = armatureDisplay._armature;
                this._armatureNode = armatureDisplay.node;
                this._armatureDisplay = armatureDisplay;
              }
              reset() {
                this._inited = false;
                this._armature = null;
                this._armatureNode = null;
                this._armatureDisplay = null;
              }
              _syncAttachedNode() {
                if (!this._inited) return;
                this._armatureNode.worldMatrix;
                let boneInfos = null;
                const isCached = this._armatureDisplay.isAnimationCached();
                if (isCached && this._armatureDisplay) {
                  boneInfos = this._armatureDisplay._curFrame && this._armatureDisplay._curFrame.boneInfos;
                  if (!boneInfos) return;
                }
                const sockets = this._armatureDisplay.sockets;
                const socketNodes = this._armatureDisplay.socketNodes;
                const matrixHandle = (node, boneMat) => {
                  const tm = _tempMat4;
                  tm.m00 = boneMat.a;
                  tm.m01 = boneMat.b;
                  tm.m04 = -boneMat.c;
                  tm.m05 = -boneMat.d;
                  tm.m12 = boneMat.tx;
                  tm.m13 = boneMat.ty;
                  node.matrix = _tempMat4;
                };
                const bones = this._armature.getBones();
                for (let l = sockets.length - 1; l >= 0; l--) {
                  const sock = sockets[l];
                  const boneNode = sock.target;
                  if (!boneNode) continue;
                  if (!boneNode.isValid) {
                    socketNodes.delete(sock.path);
                    sockets.splice(l, 1);
                    continue;
                  }
                  const bone = isCached ? boneInfos[sock.boneIndex] : bones[sock.boneIndex];
                  if (!bone) continue;
                  matrixHandle(boneNode, bone.globalTransformMatrix);
                }
              }
            }) || _class$1);

            class ArmatureSystem extends System {
              constructor() {
                super();
                this._armatures = new Set();
              }
              static getInstance() {
                if (!ArmatureSystem._instance) {
                  ArmatureSystem._instance = new ArmatureSystem();
                  director.registerSystem(ArmatureSystem.ID, ArmatureSystem._instance, System.Priority.HIGH);
                }
                return ArmatureSystem._instance;
              }
              add(armature) {
                if (!armature) return;
                if (!this._armatures.has(armature)) {
                  this._armatures.add(armature);
                }
              }
              remove(armature) {
                if (!armature) return;
                if (this._armatures.has(armature)) {
                  this._armatures.delete(armature);
                }
              }
              postUpdate(dt) {
                if (!this._armatures) {
                  return;
                }
                this._armatures.forEach(armature => {
                  armature.updateAnimation(dt);
                  armature.syncAttachedNode();
                });
              }
              prepareRenderData() {
                if (!this._armatures) {
                  return;
                }
                this._armatures.forEach(armature => {
                  armature.markForUpdateRenderData();
                });
              }
            }
            ArmatureSystem.ID = 'ARMATURE';
            ArmatureSystem._instance = void 0;
            legacyCC.internal.ArmatureSystem = ArmatureSystem;

            var _dec, _dec2, _class, _class2, _initializer, _initializer2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class4, _class5, _initializer3, _initializer4, _initializer5, _initializer6, _initializer7, _initializer8, _initializer9, _initializer10, _initializer11, _initializer12, _initializer13, _initializer14, _initializer15, _initializer16, _class6;
            var DefaultArmaturesEnum;
            (function (DefaultArmaturesEnum) {
              DefaultArmaturesEnum[DefaultArmaturesEnum["default"] = -1] = "default";
            })(DefaultArmaturesEnum || (DefaultArmaturesEnum = {}));
            ccenum(DefaultArmaturesEnum);
            var DefaultAnimsEnum;
            (function (DefaultAnimsEnum) {
              DefaultAnimsEnum[DefaultAnimsEnum["<None>"] = 0] = "<None>";
            })(DefaultAnimsEnum || (DefaultAnimsEnum = {}));
            ccenum(DefaultAnimsEnum);
            var DefaultCacheMode;
            (function (DefaultCacheMode) {
              DefaultCacheMode[DefaultCacheMode["REALTIME"] = 0] = "REALTIME";
            })(DefaultCacheMode || (DefaultCacheMode = {}));
            ccenum(DefaultAnimsEnum);
            let timeScale = 1;
            let AnimationCacheMode;
            (function (AnimationCacheMode) {
              AnimationCacheMode[AnimationCacheMode["REALTIME"] = 0] = "REALTIME";
              AnimationCacheMode[AnimationCacheMode["SHARED_CACHE"] = 1] = "SHARED_CACHE";
              AnimationCacheMode[AnimationCacheMode["PRIVATE_CACHE"] = 2] = "PRIVATE_CACHE";
            })(AnimationCacheMode || (AnimationCacheMode = {}));
            ccenum(AnimationCacheMode);
            const {
              ccclass,
              serializable,
              editable,
              type,
              help,
              menu,
              tooltip,
              visible,
              displayName,
              override,
              displayOrder,
              executeInEditMode
            } = _decorator;
            let DragonBoneSocket = (_dec = ccclass('dragonBones.ArmatureDisplay.DragonBoneSocket'), _dec2 = type(Node), _dec(_class = (_class2 = class DragonBoneSocket {
              constructor(path = '', target = null) {
                this.path = _initializer && _initializer();
                this.target = _initializer2 && _initializer2();
                this.boneIndex = null;
                this.path = path;
                this.target = target;
              }
            }, (_initializer = applyDecoratedInitializer(_class2.prototype, "path", [serializable], function () {
              return '';
            }), _initializer2 = applyDecoratedInitializer(_class2.prototype, "target", [_dec2, serializable], function () {
              return null;
            })), _class2)) || _class);
            setClassAlias(DragonBoneSocket, 'dragonBones.ArmatureDisplay.DragonBoneSocket');
            let ArmatureDisplay = (_dec3 = ccclass('dragonBones.ArmatureDisplay'), _dec4 = type(DragonBonesAsset), _dec5 = type(DragonBonesAtlasAsset), _dec6 = type(DefaultArmaturesEnum), _dec7 = type(DefaultAnimsEnum), _dec8 = type([DragonBoneSocket]), _dec9 = type(Material), _dec3(_class4 = (_class5 = (_class6 = class ArmatureDisplay extends UIRenderer {
              get dragonAsset() {
                return this._dragonAsset;
              }
              set dragonAsset(value) {
                this._dragonAsset = value;
                this.destroyRenderData();
                this._refresh();
              }
              get dragonAtlasAsset() {
                return this._dragonAtlasAsset;
              }
              set dragonAtlasAsset(value) {
                this._dragonAtlasAsset = value;
                this._parseDragonAtlasAsset();
                this._refresh();
              }
              get armatureName() {
                return this._armatureName;
              }
              set armatureName(name) {
                this._armatureName = name;
                const animNames = this.getAnimationNames(this._armatureName);
                if (!this.animationName || animNames.indexOf(this.animationName) < 0) {
                  {
                    this.animationName = '';
                  }
                }
                if (this._armature && !this.isAnimationCached()) {
                  this._factory._dragonBones.clock.remove(this._armature);
                }
                this._refresh();
                if (this._armature && !this.isAnimationCached()) {
                  this._factory._dragonBones.clock.add(this._armature);
                }
              }
              get animationName() {
                return this._animationName;
              }
              set animationName(value) {
                this._animationName = value;
              }
              get _defaultArmatureIndex() {
                return this._defaultArmatureIndexValue;
              }
              set _defaultArmatureIndex(value) {
                this._defaultArmatureIndexValue = value;
                let armatureName = '';
                if (this.dragonAsset) {
                  let armaturesEnum;
                  if (this.dragonAsset) {
                    armaturesEnum = this.dragonAsset.getArmatureEnum();
                  }
                  if (!armaturesEnum) {
                    errorID(7400, this.name);
                    return;
                  }
                  armatureName = armaturesEnum[this._defaultArmatureIndex];
                }
                if (armatureName !== undefined) {
                  this.armatureName = armatureName;
                } else {
                  errorID(7401, this.name);
                }
                this.markForUpdateRenderData();
              }
              get _animationIndex() {
                return this._animationIndexValue;
              }
              set _animationIndex(value) {
                this._animationIndexValue = value;
                if (this._animationIndex === 0) {
                  this.animationName = '';
                  return;
                }
                let animsEnum;
                if (this.dragonAsset) {
                  animsEnum = this.dragonAsset.getAnimsEnum(this.armatureName);
                }
                if (!animsEnum) {
                  return;
                }
                const animName = animsEnum[this._animationIndex];
                if (animName !== undefined) {
                  this.playAnimation(animName, this.playTimes);
                } else {
                  errorID(7402, this.name);
                }
              }
              get _defaultCacheMode() {
                return this._defaultCacheModeValue;
              }
              set _defaultCacheMode(value) {
                this._defaultCacheModeValue = value;
                if (this._defaultCacheMode !== AnimationCacheMode.REALTIME) {
                  if (this._armature && !ArmatureCache.canCache(this._armature)) {
                    this._defaultCacheMode = AnimationCacheMode.REALTIME;
                    console.warn('Animation cache mode doesn\'t support skeletal nesting');
                    return;
                  }
                }
                this.setAnimationCacheMode(this._defaultCacheMode);
              }
              get timeScale() {
                return this._timeScale;
              }
              set timeScale(value) {
                this._timeScale = value;
                if (this._armature && !this.isAnimationCached()) {
                  this._armature.animation.timeScale = this.timeScale;
                }
              }
              get debugBones() {
                return this._debugBones;
              }
              set debugBones(value) {
                this._debugBones = value;
                this._updateDebugDraw();
              }
              get enableBatch() {
                return this._enableBatch;
              }
              set enableBatch(value) {
                if (value !== this._enableBatch) {
                  this._enableBatch = value;
                  this._updateBatch();
                }
              }
              get sockets() {
                return this._sockets;
              }
              set sockets(val) {
                this._verifySockets(val);
                this._sockets = val;
                this._updateSocketBindings();
                if (val.length > 0 && this._frameCache) {
                  this._frameCache.enableCacheAttachedInfo();
                }
              }
              get socketNodes() {
                return this._socketNodes;
              }
              get drawList() {
                return this._drawList;
              }
              requestDrawInfo(idx) {
                if (!this._drawInfoList[idx]) {
                  this._drawInfoList[idx] = new RenderDrawInfo();
                }
                return this._drawInfoList[idx];
              }
              constructor() {
                super();
                this.playTimes = _initializer3 && _initializer3();
                this.premultipliedAlpha = _initializer4 && _initializer4();
                this._armature = null;
                this.attachUtil = void 0;
                this._defaultArmatureIndexValue = _initializer5 && _initializer5();
                this._dragonAsset = _initializer6 && _initializer6();
                this._dragonAtlasAsset = _initializer7 && _initializer7();
                this._armatureName = _initializer8 && _initializer8();
                this._animationName = _initializer9 && _initializer9();
                this._animationIndexValue = _initializer10 && _initializer10();
                this._preCacheMode = -1;
                this._cacheMode = AnimationCacheMode.REALTIME;
                this._defaultCacheModeValue = _initializer11 && _initializer11();
                this._timeScale = _initializer12 && _initializer12();
                this._playTimes = _initializer13 && _initializer13();
                this._debugBones = _initializer14 && _initializer14();
                this._enableBatch = _initializer15 && _initializer15();
                this._debugDraw = null;
                this._armatureKey = '';
                this._accTime = 0;
                this._playCount = 0;
                this._frameCache = null;
                this._curFrame = null;
                this._playing = false;
                this._armatureCache = null;
                this._eventTarget = void 0;
                this._factory = null;
                this._displayProxy = null;
                this._drawIdx = 0;
                this._drawList = new RecyclePool(() => ({
                  material: null,
                  texture: null,
                  indexOffset: 0,
                  indexCount: 0
                }), 1);
                this.maxVertexCount = 0;
                this.maxIndexCount = 0;
                this._materialCache = {};
                this._enumArmatures = Enum({});
                this._enumAnimations = Enum({});
                this._socketNodes = new Map();
                this._cachedSockets = new Map();
                this._sockets = _initializer16 && _initializer16();
                this._inited = void 0;
                this._drawInfoList = [];
                this._cacheModeEnum = void 0;
                this._eventTarget = new EventTarget();
                this._inited = false;
                this.attachUtil = new AttachUtil();
                this.initFactory();
                setPropertyEnumType(this, '_animationIndex', this._enumAnimations);
                setPropertyEnumType(this, '_defaultArmatureIndex', this._enumArmatures);
                this._useVertexOpacity = true;
              }
              initFactory() {
                this._factory = CCFactory$1.getInstance();
              }
              onLoad() {
                super.onLoad();
              }
              _requestDrawData(material, texture, indexOffset, indexCount) {
                const draw = this._drawList.add();
                draw.material = material;
                draw.texture = texture;
                draw.indexOffset = indexOffset;
                draw.indexCount = indexCount;
                return draw;
              }
              destroyRenderData() {
                this._drawList.reset();
                super.destroyRenderData();
              }
              getMaterialTemplate() {
                if (this.customMaterial !== null) return this.customMaterial;
                if (this.material) return this.material;
                this.updateMaterial();
                return this.material;
              }
              getMaterialForBlend(src, dst) {
                const key = `${src}/${dst}`;
                let inst = this._materialCache[key];
                if (inst) {
                  return inst;
                }
                const material = this.getMaterialTemplate();
                const matInfo = {
                  parent: material,
                  subModelIdx: 0,
                  owner: this
                };
                inst = new MaterialInstance(matInfo);
                inst.recompileShaders({
                  TWO_COLORED: false,
                  USE_LOCAL: false
                });
                this._materialCache[key] = inst;
                inst.overridePipelineStates({
                  blendState: {
                    targets: [{
                      blendSrc: src,
                      blendDst: dst
                    }]
                  }
                });
                return inst;
              }
              _updateBuiltinMaterial() {
                const material = builtinResMgr.get('default-spine-material');
                return material;
              }
              get customMaterial() {
                return this._customMaterial;
              }
              set customMaterial(val) {
                this._customMaterial = val;
                this.updateMaterial();
                this.markForUpdateRenderData();
              }
              updateMaterial() {
                let mat;
                if (this._customMaterial) mat = this._customMaterial;else mat = this._updateBuiltinMaterial();
                this.setSharedMaterial(mat, 0);
                this._cleanMaterialCache();
              }
              _render(batcher) {
                let indicesCount = 0;
                if (this.renderData && this._drawList) {
                  const rd = this.renderData;
                  const chunk = rd.chunk;
                  const accessor = chunk.vertexAccessor;
                  const meshBuffer = rd.getMeshBuffer();
                  const origin = meshBuffer.indexOffset;
                  for (let i = 0; i < this._drawList.length; i++) {
                    this._drawIdx = i;
                    const dc = this._drawList.data[i];
                    if (dc.texture) {
                      batcher.commitMiddleware(this, meshBuffer, origin + dc.indexOffset, dc.indexCount, dc.texture, dc.material, this._enableBatch);
                    }
                    indicesCount += dc.indexCount;
                  }
                  const subIndices = rd.indices.subarray(0, indicesCount);
                  accessor.appendIndices(chunk.bufferId, subIndices);
                }
              }
              __preload() {
                super.__preload();
                this._init();
              }
              _init() {
                this._cacheMode = this._defaultCacheMode;
                if (this._inited) return;
                this._inited = true;
                this._parseDragonAtlasAsset();
                this._refresh();
                const children = this.node.children;
                for (let i = 0, n = children.length; i < n; i++) {
                  const child = children[i];
                  if (child && child.name === 'DEBUG_DRAW_NODE') {
                    child.destroy();
                  }
                }
                this._updateDebugDraw();
                this._indexBoneSockets();
                this._updateSocketBindings();
              }
              getArmatureKey() {
                return this._armatureKey;
              }
              setAnimationCacheMode(cacheMode) {
                if (this._preCacheMode !== cacheMode) {
                  this._cacheMode = cacheMode;
                  this._buildArmature();
                  if (this._armature && !this.isAnimationCached()) {
                    this._factory._dragonBones.clock.add(this._armature);
                  }
                  this._updateSocketBindings();
                  this.markForUpdateRenderData();
                }
              }
              isAnimationCached() {
                return this._cacheMode !== AnimationCacheMode.REALTIME;
              }
              onEnable() {
                super.onEnable();
                if (this._armature && !this.isAnimationCached()) {
                  this._factory._dragonBones.clock.add(this._armature);
                }
                this._flushAssembler();
                ArmatureSystem.getInstance().add(this);
              }
              onDisable() {
                super.onDisable();
                if (this._armature && !this.isAnimationCached()) {
                  this._factory._dragonBones.clock.remove(this._armature);
                }
                ArmatureSystem.getInstance().remove(this);
              }
              _emitCacheCompleteEvent() {
                this._eventTarget.emit(EventObject$1.LOOP_COMPLETE);
                this._eventTarget.emit(EventObject$1.COMPLETE);
              }
              updateAnimation(dt) {
                this.markForUpdateRenderData();
                if (!this.isAnimationCached()) return;
                if (!this._frameCache) return;
                const frameCache = this._frameCache;
                if (!frameCache.isInited()) {
                  return;
                }
                const frames = frameCache.frames;
                if (!this._playing) {
                  if (frameCache.isInvalid()) {
                    frameCache.updateToFrame();
                    this._curFrame = frames[frames.length - 1];
                    if (this.renderData && (this.renderData.vertexCount < frameCache.maxVertexCount || this.renderData.indexCount < frameCache.maxIndexCount)) {
                      this.maxVertexCount = frameCache.maxVertexCount > this.maxVertexCount ? frameCache.maxVertexCount : this.maxVertexCount;
                      this.maxIndexCount = frameCache.maxIndexCount > this.maxIndexCount ? frameCache.maxIndexCount : this.maxIndexCount;
                      this.renderData.resize(this.maxVertexCount, this.maxIndexCount);
                      if (!this.renderData.indices || this.maxIndexCount > this.renderData.indices.length) {
                        this.renderData.indices = new Uint16Array(this.maxIndexCount);
                      }
                    }
                  }
                  return;
                }
                const frameTime = ArmatureCache.FrameTime;
                if (this._accTime === 0 && this._playCount === 0) {
                  this._eventTarget.emit(EventObject$1.START);
                }
                const globalTimeScale = timeScale;
                this._accTime += dt * this.timeScale * globalTimeScale;
                let frameIdx = Math.floor(this._accTime / frameTime);
                if (!frameCache.isCompleted) {
                  frameCache.updateToFrame(frameIdx);
                  if (this.renderData && (this.renderData.vertexCount < frameCache.maxVertexCount || this.renderData.indexCount < frameCache.maxIndexCount)) {
                    this.maxVertexCount = frameCache.maxVertexCount > this.maxVertexCount ? frameCache.maxVertexCount : this.maxVertexCount;
                    this.maxIndexCount = frameCache.maxIndexCount > this.maxIndexCount ? frameCache.maxIndexCount : this.maxIndexCount;
                    this.renderData.resize(this.maxVertexCount, this.maxIndexCount);
                    if (!this.renderData.indices || this.maxIndexCount > this.renderData.indices.length) {
                      this.renderData.indices = new Uint16Array(this.maxIndexCount);
                    }
                  }
                }
                if (frameCache.isCompleted && frameIdx >= frames.length) {
                  this._playCount++;
                  if (this.playTimes > 0 && this._playCount >= this.playTimes) {
                    this._curFrame = frames[frames.length - 1];
                    this._accTime = 0;
                    this._playing = false;
                    this._playCount = 0;
                    this._emitCacheCompleteEvent();
                    this.attachUtil._syncAttachedNode();
                    return;
                  }
                  this._accTime = 0;
                  frameIdx = 0;
                  this._emitCacheCompleteEvent();
                }
                this._curFrame = frames[frameIdx];
                this.attachUtil._syncAttachedNode();
              }
              onDestroy() {
                this._materialInstances = this._materialInstances.filter(instance => !!instance);
                this._inited = false;
                {
                  if (this._cacheMode === AnimationCacheMode.PRIVATE_CACHE) {
                    this._armatureCache.dispose();
                    this._armatureCache = null;
                    this._armature = null;
                  } else if (this._cacheMode === AnimationCacheMode.SHARED_CACHE) {
                    this._armatureCache = null;
                    this._armature = null;
                  } else if (this._armature) {
                    this._armature.dispose();
                    this._armature = null;
                  }
                }
                this._drawList.destroy();
                super.onDestroy();
              }
              _updateDebugDraw() {
                if (this.debugBones) {
                  if (!this._debugDraw) {
                    const debugDrawNode = new Node('DEBUG_DRAW_NODE');
                    debugDrawNode.hideFlags |= CCObject.Flags.DontSave | CCObject.Flags.HideInHierarchy;
                    const debugDraw = debugDrawNode.addComponent(Graphics);
                    debugDraw.lineWidth = 1;
                    debugDraw.strokeColor = new Color(255, 0, 0, 255);
                    this._debugDraw = debugDraw;
                  }
                  this._debugDraw.node.parent = this.node;
                } else if (this._debugDraw) {
                  this._debugDraw.node.parent = null;
                }
                this.markForUpdateRenderData();
              }
              _updateBatch() {
                this._cleanMaterialCache();
                this.markForUpdateRenderData();
              }
              _buildArmature() {
                if (!this.dragonAsset || !this.dragonAtlasAsset || !this.armatureName) return;
                if (this._armature) {
                  {
                    if (this._preCacheMode === AnimationCacheMode.PRIVATE_CACHE) {
                      this._armatureCache.dispose();
                    } else if (this._preCacheMode === AnimationCacheMode.REALTIME) {
                      this._armature.dispose();
                    }
                  }
                  this._armatureCache = null;
                  this._armature = null;
                  this._displayProxy = null;
                  this._frameCache = null;
                  this._curFrame = null;
                  this._playing = false;
                  this._preCacheMode = -1;
                }
                {
                  if (this._cacheMode === AnimationCacheMode.SHARED_CACHE) {
                    this._armatureCache = ArmatureCache.sharedCache;
                  } else if (this._cacheMode === AnimationCacheMode.PRIVATE_CACHE) {
                    this._armatureCache = new ArmatureCache();
                    this._armatureCache.enablePrivateMode();
                  }
                }
                const atlasUUID = this.dragonAtlasAsset._uuid;
                this._armatureKey = this.dragonAsset.init(this._factory, atlasUUID);
                if (this.isAnimationCached()) {
                  this._armature = this._armatureCache.getArmatureCache(this.armatureName, this._armatureKey, atlasUUID);
                  if (!this._armature) {
                    this._cacheMode = AnimationCacheMode.REALTIME;
                  }
                }
                this._preCacheMode = this._cacheMode;
                if (this._cacheMode === AnimationCacheMode.REALTIME) {
                  this._displayProxy = this._factory.buildArmatureDisplay(this.armatureName, this._armatureKey, '', atlasUUID);
                  if (!this._displayProxy) return;
                  this._displayProxy._ccNode = this.node;
                  this._displayProxy._ccComponent = this;
                  this._displayProxy.setEventTarget(this._eventTarget);
                  this._armature = this._displayProxy._armature;
                  this._armature.animation.timeScale = this.timeScale;
                }
                if (this._cacheMode !== AnimationCacheMode.REALTIME && this.debugBones) {
                  console.warn('Debug bones is invalid in cached mode');
                }
                if (this._armature) {
                  const armatureData = this._armature.armatureData;
                  const aabb = armatureData.aabb;
                  this.node._uiProps.uiTransformComp.setContentSize(aabb.width, aabb.height);
                }
                this.attachUtil.init(this);
                if (this.animationName) {
                  this.playAnimation(this.animationName, this.playTimes);
                }
                this._flushAssembler();
              }
              querySockets() {
                if (!this._armature) {
                  return [];
                }
                if (this._cachedSockets.size === 0) {
                  this._indexBoneSockets();
                }
                return Array.from(this._cachedSockets.keys()).sort();
              }
              querySocketPathByName(name) {
                const ret = [];
                for (const key of this._cachedSockets.keys()) {
                  if (key.endsWith(name)) {
                    ret.push(key);
                  }
                }
                return ret;
              }
              _parseDragonAtlasAsset() {
                if (this.dragonAtlasAsset) {
                  this.dragonAtlasAsset.init(this._factory);
                }
              }
              _refresh() {
                this._buildArmature();
                this._indexBoneSockets();
                this.markForUpdateRenderData();
              }
              _updateCacheModeEnum() {
                this._cacheModeEnum = Enum({});
                if (this._armature) {
                  Object.assign(this._cacheModeEnum, AnimationCacheMode);
                } else {
                  Object.assign(this._cacheModeEnum, DefaultCacheMode);
                }
                setPropertyEnumType(this, '_defaultCacheMode', this._cacheModeEnum);
              }
              _updateAnimEnum() {
                let animEnum;
                if (this.dragonAsset) {
                  animEnum = this.dragonAsset.getAnimsEnum(this.armatureName);
                } else {
                  animEnum = DefaultAnimsEnum;
                }
                this._enumAnimations = Enum({});
                Object.assign(this._enumAnimations, animEnum || DefaultAnimsEnum);
                Enum.update(this._enumAnimations);
                setPropertyEnumType(this, '_animationIndex', this._enumAnimations);
              }
              _updateArmatureEnum() {
                let armatureEnum;
                if (this.dragonAsset) {
                  armatureEnum = this.dragonAsset.getArmatureEnum();
                } else {
                  armatureEnum = DefaultArmaturesEnum;
                }
                this._enumArmatures = Enum({});
                Object.assign(this._enumArmatures, armatureEnum || DefaultArmaturesEnum);
                Enum.update(this._enumArmatures);
                setPropertyEnumType(this, '_defaultArmatureIndex', this._enumArmatures);
              }
              _indexBoneSockets() {
                if (!this._armature) {
                  return;
                }
                this._cachedSockets.clear();
                const nameToBone = this._cachedSockets;
                const cacheBoneName = (bi, bones, cache) => {
                  if (cache.has(bi)) {
                    return cache.get(bi);
                  }
                  const bone = bones[bi];
                  if (!bone.parent) {
                    cache.set(bi, bone.name);
                    bone.path = bone.name;
                    return bone.name;
                  }
                  const name = `${cacheBoneName(bone.parent._boneIndex, bones, cache)}/${bone.name}`;
                  cache.set(bi, name);
                  bone.path = name;
                  return name;
                };
                const walkArmature = (prefix, armature) => {
                  const bones = armature.getBones();
                  const boneToName = new Map();
                  for (let i = 0; i < bones.length; i++) {
                    bones[i]._boneIndex = i;
                  }
                  for (let i = 0; i < bones.length; i++) {
                    cacheBoneName(i, bones, boneToName);
                  }
                  for (const bone of boneToName.keys()) {
                    nameToBone.set(`${prefix}${boneToName.get(bone)}`, bone);
                  }
                  const slots = armature.getSlots();
                  for (let i = 0; i < slots.length; i++) {
                    if (slots[i].childArmature) {
                      walkArmature(slots[i].name, slots[i].childArmature);
                    }
                  }
                };
                walkArmature('', this._armature);
              }
              playAnimation(animName, playTimes) {
                this.playTimes = playTimes === undefined ? -1 : playTimes;
                this.animationName = animName;
                if (this.isAnimationCached()) {
                  let cache = this._armatureCache.getAnimationCache(this._armatureKey, animName);
                  if (!cache) {
                    cache = this._armatureCache.initAnimationCache(this._armatureKey, animName);
                  }
                  if (cache) {
                    this._accTime = 0;
                    this._playCount = 0;
                    this._frameCache = cache;
                    if (this._sockets.length > 0) {
                      this._frameCache.enableCacheAttachedInfo();
                    }
                    this._frameCache.updateToFrame(0);
                    this._playing = true;
                    this._curFrame = this._frameCache.frames[0];
                  }
                } else if (this._armature) {
                  return this._armature.animation.play(animName, this.playTimes);
                }
                this.markForUpdateRenderData();
                return null;
              }
              updateAnimationCache(animName) {
                if (!this.isAnimationCached()) return;
                this._armatureCache.updateAnimationCache(this._armatureKey, animName);
              }
              invalidAnimationCache() {
                if (!this.isAnimationCached()) return;
                this._armatureCache.invalidAnimationCache(this._armatureKey);
              }
              getArmatureNames() {
                const dragonBonesData = this._factory.getDragonBonesData(this._armatureKey);
                return dragonBonesData && dragonBonesData.armatureNames || [];
              }
              getAnimationNames(armatureName) {
                const ret = [];
                const dragonBonesData = this._factory.getDragonBonesData(this._armatureKey);
                if (dragonBonesData) {
                  const armatureData = dragonBonesData.getArmature(armatureName);
                  if (armatureData) {
                    for (const animName in armatureData.animations) {
                      if (armatureData.animations.hasOwnProperty(animName)) {
                        ret.push(animName);
                      }
                    }
                  }
                }
                return ret;
              }
              on(eventType, listener, target) {
                this.addEventListener(eventType, listener, target);
              }
              off(eventType, listener, target) {
                this.removeEventListener(eventType, listener, target);
              }
              once(eventType, listener, target) {
                this._eventTarget.once(eventType, listener, target);
              }
              addEventListener(eventType, listener, target) {
                this._eventTarget.on(eventType, listener, target);
              }
              removeEventListener(eventType, listener, target) {
                this._eventTarget.off(eventType, listener, target);
              }
              buildArmature(armatureName, node) {
                return this._factory.createArmatureNode(this, armatureName, node);
              }
              armature() {
                return this._armature;
              }
              _flushAssembler() {
                const assembler = ArmatureDisplay.Assembler.getAssembler(this);
                if (this._assembler !== assembler) {
                  this._assembler = assembler;
                }
                if (this._armature && this._assembler) {
                  this._renderData = this._assembler.createData(this);
                  if (this._renderData) {
                    this.maxVertexCount = this._renderData.vertexCount;
                    this.maxIndexCount = this._renderData.indexCount;
                  }
                  this.markForUpdateRenderData();
                  this._updateColor();
                }
              }
              _updateSocketBindings() {
                if (!this._armature) return;
                this._socketNodes.clear();
                for (let i = 0, l = this._sockets.length; i < l; i++) {
                  const socket = this._sockets[i];
                  if (socket.path && socket.target) {
                    const bone = this._cachedSockets.get(socket.path);
                    if (!bone) {
                      console.error(`Skeleton data does not contain path ${socket.path}`);
                      continue;
                    }
                    socket.boneIndex = bone;
                    this._socketNodes.set(socket.path, socket.target);
                  }
                }
              }
              _verifySockets(sockets) {
                for (let i = 0, l = sockets.length; i < l; i++) {
                  const target = sockets[i].target;
                  if (target) {
                    if (!target.parent || target.parent !== this.node) {
                      console.error(`Target node ${target.name} is expected to be a direct child of ${this.node.name}`);
                      continue;
                    }
                  }
                }
              }
              _cleanMaterialCache() {
                for (const val in this._materialCache) {
                  this._materialCache[val].destroy();
                }
                this._materialCache = {};
              }
              createRenderEntity() {
                const renderEntity = new RenderEntity(RenderEntityType.DYNAMIC);
                renderEntity.setUseLocal(false);
                return renderEntity;
              }
              markForUpdateRenderData(enable = true) {
                super.markForUpdateRenderData(enable);
                if (this._debugDraw) {
                  this._debugDraw.markForUpdateRenderData(enable);
                }
              }
              syncAttachedNode() {
                this.attachUtil._syncAttachedNode();
              }
            }, _class6.AnimationCacheMode = AnimationCacheMode, _class6), (_applyDecoratedDescriptor(_class5.prototype, "dragonAsset", [_dec4], Object.getOwnPropertyDescriptor(_class5.prototype, "dragonAsset"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "dragonAtlasAsset", [_dec5], Object.getOwnPropertyDescriptor(_class5.prototype, "dragonAtlasAsset"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "_defaultArmatureIndex", [_dec6], Object.getOwnPropertyDescriptor(_class5.prototype, "_defaultArmatureIndex"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "_animationIndex", [_dec7], Object.getOwnPropertyDescriptor(_class5.prototype, "_animationIndex"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "timeScale", [serializable], Object.getOwnPropertyDescriptor(_class5.prototype, "timeScale"), _class5.prototype), _initializer3 = applyDecoratedInitializer(_class5.prototype, "playTimes", [serializable], function () {
              return -1;
            }), _initializer4 = applyDecoratedInitializer(_class5.prototype, "premultipliedAlpha", [serializable], function () {
              return false;
            }), _applyDecoratedDescriptor(_class5.prototype, "sockets", [_dec8], Object.getOwnPropertyDescriptor(_class5.prototype, "sockets"), _class5.prototype), _initializer5 = applyDecoratedInitializer(_class5.prototype, "_defaultArmatureIndexValue", [serializable], function () {
              return DefaultArmaturesEnum.default;
            }), _initializer6 = applyDecoratedInitializer(_class5.prototype, "_dragonAsset", [serializable], function () {
              return null;
            }), _initializer7 = applyDecoratedInitializer(_class5.prototype, "_dragonAtlasAsset", [serializable], function () {
              return null;
            }), _initializer8 = applyDecoratedInitializer(_class5.prototype, "_armatureName", [serializable], function () {
              return '';
            }), _initializer9 = applyDecoratedInitializer(_class5.prototype, "_animationName", [serializable], function () {
              return '';
            }), _initializer10 = applyDecoratedInitializer(_class5.prototype, "_animationIndexValue", [serializable], function () {
              return 0;
            }), _initializer11 = applyDecoratedInitializer(_class5.prototype, "_defaultCacheModeValue", [serializable], function () {
              return AnimationCacheMode.REALTIME;
            }), _initializer12 = applyDecoratedInitializer(_class5.prototype, "_timeScale", [serializable], function () {
              return 1;
            }), _initializer13 = applyDecoratedInitializer(_class5.prototype, "_playTimes", [serializable], function () {
              return -1;
            }), _initializer14 = applyDecoratedInitializer(_class5.prototype, "_debugBones", [serializable], function () {
              return false;
            }), _initializer15 = applyDecoratedInitializer(_class5.prototype, "_enableBatch", [serializable], function () {
              return false;
            }), _initializer16 = applyDecoratedInitializer(_class5.prototype, "_sockets", [serializable], function () {
              return [];
            }), _applyDecoratedDescriptor(_class5.prototype, "customMaterial", [override, _dec9], Object.getOwnPropertyDescriptor(_class5.prototype, "customMaterial"), _class5.prototype)), _class5)) || _class4);
            legacyCC.internal.ArmatureDisplay = ArmatureDisplay;

            const NEED_COLOR = 0x01;
            const _boneColor = new Color(255, 0, 0, 255);
            const _slotColor = new Color(0, 0, 255, 255);
            const _originColor = new Color(0, 255, 0, 255);
            let _nodeR;
            let _nodeG;
            let _nodeB;
            let _nodeA;
            let _premultipliedAlpha;
            let _mustFlush;
            let _renderData;
            let _ibuf;
            let _vbuf;
            let _comp;
            let _vertexFloatCount = 0;
            let _vertexCount = 0;
            let _vertexOffset = 0;
            let _vertexFloatOffset = 0;
            let _indexCount = 0;
            let _indexOffset = 0;
            let _actualVCount = 0;
            let _actualICount = 0;
            let _prevDrawIndexOffset = 0;
            const LOCAL_FLOAT_PER_VERTEX = 4;
            const PER_VERTEX_SIZE = 3 + 2 + 4;
            const _c = new Float32Array(4);
            let _handleVal;
            const _tempVecPos = new Vec3(0, 0, 0);
            const _slotMat = new Mat4();
            let _currentMaterial = null;
            let _currentTexture = null;
            function _getSlotMaterial(tex, blendMode) {
              if (!tex) return null;
              let src;
              let dst;
              switch (blendMode) {
                case 1:
                  src = _premultipliedAlpha ? BlendFactor.ONE : BlendFactor.SRC_ALPHA;
                  dst = BlendFactor.ONE;
                  break;
                case 10:
                  src = BlendFactor.DST_COLOR;
                  dst = BlendFactor.ONE_MINUS_SRC_ALPHA;
                  break;
                case 12:
                  src = BlendFactor.ONE;
                  dst = BlendFactor.ONE_MINUS_SRC_COLOR;
                  break;
                case 0:
                default:
                  src = _premultipliedAlpha ? BlendFactor.ONE : BlendFactor.SRC_ALPHA;
                  dst = BlendFactor.ONE_MINUS_SRC_ALPHA;
                  break;
              }
              return _comp.getMaterialForBlend(src, dst);
            }
            function _handleColor(color, parentOpacity) {
              const _a = color.a * parentOpacity * _nodeA;
              const _multiply = _premultipliedAlpha ? _a / 255.0 : 1.0;
              const _r = color.r * _nodeR * _multiply / 255.0;
              const _g = color.g * _nodeG * _multiply / 255.0;
              const _b = color.b * _nodeB * _multiply / 255.0;
              _c[0] = _r;
              _c[1] = _g;
              _c[2] = _b;
              _c[3] = _premultipliedAlpha ? 1.0 : _a / 255.0;
            }
            let _accessor = null;
            const simple = {
              accessor: _accessor,
              vCount: 32767,
              ensureAccessor() {
                if (!_accessor) {
                  const device = director.root.device;
                  const batcher = director.root.batcher2D;
                  const attributes = vfmtPosUvColor;
                  this.accessor = _accessor = new StaticVBAccessor(device, attributes, this.vCount);
                  batcher.registerBufferAccessor(Number.parseInt('DRAGONBONES', 36), _accessor);
                }
                return this.accessor;
              },
              createData(comp) {
                let rd = comp.renderData;
                if (!rd) {
                  this.ensureAccessor();
                  const slots = comp._armature._slots;
                  let vCount = 0;
                  let iCount = 0;
                  for (let i = 0; i < slots.length; ++i) {
                    const slot = slots[i];
                    const remainder = slot._localVertices.length % 4;
                    if (remainder === 0) {
                      vCount += slot._localVertices.length / LOCAL_FLOAT_PER_VERTEX;
                    } else {
                      vCount += (slot._localVertices.length - remainder) / LOCAL_FLOAT_PER_VERTEX + 1;
                    }
                    iCount += slot._indices.length;
                  }
                  rd = RenderData.add(vfmtPosUvColor, this.accessor);
                  rd.resize(vCount, iCount);
                  if (!rd.indices || iCount !== rd.indices.length) {
                    rd.indices = new Uint16Array(iCount);
                  }
                }
                return rd;
              },
              updateRenderData(comp, batcher) {
                _comp = comp;
                const armature = comp._armature;
                if (armature) {
                  updateComponentRenderData(comp);
                }
              },
              updateColor(comp) {
                if (!comp) return;
                _comp = comp;
                _comp.markForUpdateRenderData();
              }
            };
            function realTimeTraverse(armature, parentOpacity, worldMat) {
              const rd = _renderData;
              _vbuf = rd.chunk.vb;
              _ibuf = rd.indices;
              const slots = armature._slots;
              let material;
              let vertices;
              let indices;
              let slotColor;
              let slot;
              let cumulatedCount = 0;
              for (let i = 0, l = slots.length; i < l; i++) {
                slot = slots[i];
                slotColor = slot._color;
                if (!slot._visible || !slot._displayData) continue;
                if (worldMat) {
                  Mat4.multiply(slot._worldMatrix, worldMat, slot._matrix);
                } else {
                  Mat4.copy(slot._worldMatrix, slot._matrix);
                }
                if (slot.childArmature) {
                  realTimeTraverse(slot.childArmature, slotColor.a / 255, slot._worldMatrix);
                  continue;
                }
                material = _getSlotMaterial(slot.getTexture(), slot._blendMode);
                if (!material) {
                  continue;
                }
                if (!_currentMaterial) _currentMaterial = material;
                const texture = slot.getTexture();
                if (_mustFlush || material.hash !== _currentMaterial.hash || texture && _currentTexture !== texture) {
                  _mustFlush = false;
                  const cumulatedCount = _indexOffset - _prevDrawIndexOffset;
                  if (cumulatedCount > 0) {
                    _comp._requestDrawData(_currentMaterial, _currentTexture, _prevDrawIndexOffset, cumulatedCount);
                    _prevDrawIndexOffset = _indexOffset;
                  }
                  _currentTexture = texture;
                  _currentMaterial = material;
                }
                _handleColor(slotColor, parentOpacity);
                _slotMat.set(slot._worldMatrix);
                vertices = slot._localVertices;
                _vertexCount = vertices.length / LOCAL_FLOAT_PER_VERTEX;
                _vertexFloatCount = _vertexCount * PER_VERTEX_SIZE;
                indices = slot._indices;
                _indexCount = indices.length;
                let isResize = false;
                if (_vertexOffset + _vertexCount > _actualVCount) {
                  _actualVCount = _vertexOffset + _vertexCount;
                  isResize = true;
                }
                if (_indexOffset + _indexCount > _actualICount) {
                  _actualICount = _indexOffset + _indexCount;
                  isResize = true;
                }
                if (isResize) {
                  const oldIndices = _ibuf;
                  const oldChunkOffset = rd.chunk.vertexOffset;
                  rd.resizeAndCopy(_actualVCount, _actualICount > rd.indexCount ? _actualICount : rd.indexCount);
                  _vbuf = rd.chunk.vb;
                  if (_actualICount > _ibuf.length) {
                    _ibuf = rd.indices = new Uint16Array(_actualICount);
                  }
                  const correction = rd.chunk.vertexOffset - oldChunkOffset;
                  for (let i = 0; i < _indexOffset; ++i) {
                    _ibuf[i] = oldIndices[i] + correction;
                  }
                }
                for (let vi = 0, vl = vertices.length, v = _vertexFloatOffset; vi < vl; v += PER_VERTEX_SIZE) {
                  _tempVecPos.x = vertices[vi++];
                  _tempVecPos.y = vertices[vi++];
                  _tempVecPos.z = 0;
                  _tempVecPos.transformMat4(_slotMat);
                  _vbuf[v] = _tempVecPos.x;
                  _vbuf[v + 1] = _tempVecPos.y;
                  _vbuf[v + 2] = _tempVecPos.z;
                  _vbuf[v + 3] = vertices[vi++];
                  _vbuf[v + 4] = vertices[vi++];
                  _vbuf.set(_c, v + 5);
                }
                const chunkOffset = rd.chunk.vertexOffset;
                for (let i = 0, il = indices.length, ii = _indexOffset; i < il; i++, ii++) {
                  _ibuf[ii] = _vertexOffset + indices[i] + chunkOffset;
                }
                _vertexFloatOffset += _vertexFloatCount;
                _vertexOffset += _vertexCount;
                _indexOffset += _indexCount;
                _vertexCount = 0;
                _indexCount = 0;
              }
              cumulatedCount = _indexOffset - _prevDrawIndexOffset;
              if (_currentTexture && cumulatedCount > 0) {
                _comp._requestDrawData(_currentMaterial, _currentTexture, _prevDrawIndexOffset, cumulatedCount);
                _prevDrawIndexOffset = _indexOffset;
              }
              if (_comp.maxIndexCount < _actualICount) {
                _comp.maxIndexCount = _actualICount;
              }
              if (_comp.maxVertexCount < _actualVCount) {
                _comp.maxVertexCount = _actualVCount;
              }
            }
            function cacheTraverse(frame, parentMat) {
              if (!frame) return;
              const segments = frame.segments;
              if (segments.length === 0) return;
              let material = null;
              const vertices = frame.vertices;
              const indices = frame.indices;
              let chunkOffset = 0;
              let frameVFOffset = 0;
              let frameIndexOffset = 0;
              let segVFCount = 0;
              let colorOffset = 0;
              const colors = frame.colors;
              let nowColor = colors[colorOffset++];
              let maxVFOffset = nowColor.vfOffset;
              _handleColor(nowColor, 1.0);
              const rd = _renderData;
              const vbuf = rd.chunk.vb;
              const ibuf = rd.indices;
              for (let i = 0, n = segments.length; i < n; i++) {
                const segInfo = segments[i];
                material = _getSlotMaterial(segInfo.tex, segInfo.blendMode);
                if (!material) continue;
                if (!_currentMaterial) _currentMaterial = material;
                if (_mustFlush || material.hash !== _currentMaterial.hash || segInfo.tex && segInfo.tex !== _currentTexture) {
                  _mustFlush = false;
                  const cumulatedCount = _indexOffset - _prevDrawIndexOffset;
                  if (cumulatedCount > 0) {
                    _comp._requestDrawData(_currentMaterial, _currentTexture, _prevDrawIndexOffset, cumulatedCount);
                    _prevDrawIndexOffset = _indexOffset;
                  }
                  _currentMaterial = material;
                  _currentTexture = segInfo.tex;
                }
                _vertexCount = segInfo.vertexCount;
                _indexCount = segInfo.indexCount;
                chunkOffset = rd.chunk.vertexOffset;
                for (let ii = _indexOffset, il = _indexOffset + _indexCount; ii < il; ii++) {
                  ibuf[ii] = chunkOffset + _vertexOffset + indices[frameIndexOffset++];
                }
                segVFCount = segInfo.vfCount;
                const subArray = vertices.subarray(frameVFOffset, segVFCount);
                vbuf.set(subArray, frameVFOffset);
                let offset = 0;
                if (parentMat) {
                  for (let ii = 0, il = _vertexCount; ii < il; ii++) {
                    _tempVecPos.x = vbuf[offset];
                    _tempVecPos.y = vbuf[offset + 1];
                    _tempVecPos.z = 0;
                    _tempVecPos.transformMat4(parentMat);
                    vbuf[offset] = _tempVecPos.x;
                    vbuf[offset + 1] = _tempVecPos.y;
                    vbuf[offset + 2] = _tempVecPos.z;
                    offset += PER_VERTEX_SIZE;
                  }
                }
                if (_handleVal & NEED_COLOR) {
                  let frameColorOffset = frameVFOffset / 9 * 5;
                  for (let ii = frameVFOffset, iEnd = frameVFOffset + segVFCount; ii < iEnd; ii += PER_VERTEX_SIZE, frameColorOffset += 5) {
                    if (frameColorOffset >= maxVFOffset) {
                      nowColor = colors[colorOffset++];
                      _handleColor(nowColor, 1.0);
                      maxVFOffset = nowColor.vfOffset;
                    }
                    vbuf.set(_c, ii + 5);
                  }
                }
                frameVFOffset += segVFCount;
                _vertexOffset += _vertexCount;
                _indexOffset += _indexCount;
                _vertexCount = 0;
                _indexCount = 0;
              }
              const cumulatedCount = _indexOffset - _prevDrawIndexOffset;
              if (_currentTexture && cumulatedCount > 0) {
                _comp._requestDrawData(_currentMaterial, _currentTexture, _prevDrawIndexOffset, cumulatedCount);
              }
            }
            function updateComponentRenderData(comp, batcher) {
              const armature = comp._armature;
              if (!armature || comp.renderData === null) return;
              _mustFlush = true;
              _premultipliedAlpha = comp.premultipliedAlpha;
              comp.drawList.reset();
              _comp = comp;
              comp.node;
              _renderData = comp.renderData;
              _comp = comp;
              _handleVal = 0;
              _currentMaterial = null;
              const nodeColor = comp.color;
              _nodeR = nodeColor.r / 255;
              _nodeG = nodeColor.g / 255;
              _nodeB = nodeColor.b / 255;
              _nodeA = comp.node._uiProps.opacity;
              if (nodeColor._val !== 0xffffffff) {
                _handleVal |= NEED_COLOR;
              }
              const worldMat = comp.node.getWorldMatrix();
              _vertexFloatCount = 0;
              _vertexOffset = 0;
              _vertexFloatOffset = 0;
              _indexCount = 0;
              _indexOffset = 0;
              _prevDrawIndexOffset = 0;
              _actualVCount = _comp.maxVertexCount;
              _actualICount = _comp.maxIndexCount;
              if (comp.isAnimationCached()) {
                cacheTraverse(comp._curFrame, worldMat);
              } else {
                realTimeTraverse(armature, 1.0, worldMat);
                const graphics = comp._debugDraw;
                if (comp.debugBones && graphics) {
                  graphics.clear();
                  graphics.lineWidth = 5;
                  graphics.strokeColor = _boneColor;
                  graphics.fillColor = _slotColor;
                  const bones = armature.getBones();
                  for (let i = 0, l = bones.length; i < l; i++) {
                    const bone = bones[i];
                    const boneLength = Math.max(bone.boneData.length, 5);
                    const startX = bone.globalTransformMatrix.tx;
                    const startY = bone.globalTransformMatrix.ty;
                    const endX = startX + bone.globalTransformMatrix.a * boneLength;
                    const endY = startY + bone.globalTransformMatrix.b * boneLength;
                    graphics.moveTo(startX, startY);
                    graphics.lineTo(endX, endY);
                    graphics.stroke();
                    graphics.circle(startX, startY, Math.PI * 2);
                    graphics.fill();
                    if (i === 0) {
                      graphics.fillColor = _originColor;
                    }
                  }
                }
              }
              _accessor.getMeshBuffer(_renderData.chunk.bufferId).setDirty();
              _comp = undefined;
            }
            legacyCC.internal.DragonBonesAssembler = simple;

            const simpleDragonBoneAssembler = {
              getAssembler() {
                return simple;
              }
            };
            ArmatureDisplay.Assembler = simpleDragonBoneAssembler;

            let ExtensionType;
            (function (ExtensionType) {
              ExtensionType[ExtensionType["FFD"] = 0] = "FFD";
              ExtensionType[ExtensionType["AdjustColor"] = 10] = "AdjustColor";
              ExtensionType[ExtensionType["BevelFilter"] = 11] = "BevelFilter";
              ExtensionType[ExtensionType["BlurFilter"] = 12] = "BlurFilter";
              ExtensionType[ExtensionType["DropShadowFilter"] = 13] = "DropShadowFilter";
              ExtensionType[ExtensionType["GlowFilter"] = 14] = "GlowFilter";
              ExtensionType[ExtensionType["GradientBevelFilter"] = 15] = "GradientBevelFilter";
              ExtensionType[ExtensionType["GradientGlowFilter"] = 16] = "GradientGlowFilter";
            })(ExtensionType || (ExtensionType = {}));
            let EventType;
            (function (EventType) {
              EventType[EventType["Frame"] = 0] = "Frame";
              EventType[EventType["Sound"] = 1] = "Sound";
            })(EventType || (EventType = {}));
            let AnimationFadeOutMode;
            (function (AnimationFadeOutMode) {
              AnimationFadeOutMode[AnimationFadeOutMode["None"] = 0] = "None";
              AnimationFadeOutMode[AnimationFadeOutMode["SameLayer"] = 1] = "SameLayer";
              AnimationFadeOutMode[AnimationFadeOutMode["SameGroup"] = 2] = "SameGroup";
              AnimationFadeOutMode[AnimationFadeOutMode["SameLayerAndGroup"] = 3] = "SameLayerAndGroup";
              AnimationFadeOutMode[AnimationFadeOutMode["All"] = 4] = "All";
            })(AnimationFadeOutMode || (AnimationFadeOutMode = {}));
            const dragonBones = globalThis.dragonBones;
            const Slot = dragonBones.Slot;
            const Matrix = dragonBones.Matrix;
            const BaseObject = dragonBones.BaseObject;
            const BoundingBoxData = dragonBones.BoundingBoxData;
            const PolygonBoundingBoxData = dragonBones.PolygonBoundingBoxData;
            const Transform = dragonBones.Transform;
            const Animation = dragonBones.Animation;
            const TextureData = dragonBones.TextureData;
            const CCTextureData = dragonBones.CCTextureData;
            const BaseFactory = dragonBones.BaseFactory;
            const CCFactory = dragonBones.CCFactory;
            const WorldClock = dragonBones.WorldClock;
            const TextureAtlasData = dragonBones.TextureAtlasData;
            const CCArmatureDisplay = dragonBones.CCArmatureDisplay;
            const AnimationState = dragonBones.AnimationState;
            const BoneData = dragonBones.BoneData;
            const EllipseBoundingBoxData = dragonBones.EllipseBoundingBoxData;
            const ArmatureData = dragonBones.ArmatureData;
            const CCTextureAtlasData = dragonBones.CCTextureAtlasData;
            const TransformObject = dragonBones.TransformObject;
            const CCSlot = dragonBones.CCSlot;
            const Armature = dragonBones.Armature;
            const Bone = dragonBones.Bone;
            const RectangleBoundingBoxData = dragonBones.RectangleBoundingBoxData;
            const ArmatureCacheMgr = dragonBones.ArmatureCacheMgr;
            const SkinData = dragonBones.SkinData;
            const EventObject = dragonBones.EventObject;
            const SlotData = dragonBones.SlotData;
            const DragonBonesData = dragonBones.DragonBonesData;
            const AnimationData = dragonBones.AnimationData;
            const CCArmatureCacheDisplay = dragonBones.CCArmatureCacheDisplay;

            var index = /*#__PURE__*/Object.freeze({
                __proto__: null,
                DragonBonesAsset: DragonBonesAsset,
                DragonBonesAtlasAsset: DragonBonesAtlasAsset,
                timeScale: timeScale,
                get AnimationCacheMode () { return AnimationCacheMode; },
                DragonBoneSocket: DragonBoneSocket,
                ArmatureDisplay: ArmatureDisplay,
                AttachUtil: AttachUtil,
                simpleDragonBoneAssembler: simpleDragonBoneAssembler,
                get ExtensionType () { return ExtensionType; },
                get EventType () { return EventType; },
                get AnimationFadeOutMode () { return AnimationFadeOutMode; },
                Slot: Slot,
                Matrix: Matrix,
                BaseObject: BaseObject,
                BoundingBoxData: BoundingBoxData,
                PolygonBoundingBoxData: PolygonBoundingBoxData,
                Transform: Transform,
                Animation: Animation,
                TextureData: TextureData,
                CCTextureData: CCTextureData,
                BaseFactory: BaseFactory,
                CCFactory: CCFactory,
                WorldClock: WorldClock,
                TextureAtlasData: TextureAtlasData,
                CCArmatureDisplay: CCArmatureDisplay,
                AnimationState: AnimationState,
                BoneData: BoneData,
                EllipseBoundingBoxData: EllipseBoundingBoxData,
                ArmatureData: ArmatureData,
                CCTextureAtlasData: CCTextureAtlasData,
                TransformObject: TransformObject,
                CCSlot: CCSlot,
                Armature: Armature,
                Bone: Bone,
                RectangleBoundingBoxData: RectangleBoundingBoxData,
                ArmatureCacheMgr: ArmatureCacheMgr,
                SkinData: SkinData,
                EventObject: EventObject,
                SlotData: SlotData,
                DragonBonesData: DragonBonesData,
                AnimationData: AnimationData,
                CCArmatureCacheDisplay: CCArmatureCacheDisplay
            });
            exports('dragonBones', index);

        })
    };
}));

System.register("q-bundled:///fs/cocos/physics/physx/physx-world.js", ["../framework/index.js", "../../core/index.js", "./physx-adapter.js", "./physx-shared-body.js", "../utils/tuple-dictionary.js", "./physx-contact-equation.js", "../utils/util.js", "./shapes/physx-shape.js", "./physx-enum.js", "./physx-instance.js", "./character-controllers/physx-character-controller.js", "../../game/index.js"], function (_export, _context) {
  "use strict";

  var CharacterControllerContact, EPhysicsDrawFlags, error, js, Vec3, Quat, Color, addActorToScene, raycastAll, simulateScene, initializeWorld, _raycastClosest, sweepClosest, gatherEvents, getWrapShape, PX, getContactDataOrByteOffset, sweepAll, getColorPXColor, PhysXSharedBody, TupleDictionary, PhysXContactEquation, CollisionEventObject, TriggerEventObject, CharacterTriggerEventObject, PhysXShape, EFilterDataWord3, PhysXInstance, PhysXCharacterController, director, CC_QUAT_0, CC_V3_0, CC_V3_1, CC_V3_2, CC_COLOR_0, PhysXWorld, triggerEventBeginDic, triggerEventEndDic, triggerEventsPool, contactEventDic, contactEventsPool, contactsPool, cctShapeEventDic, emitHit, cctTriggerEventBeginDic, cctTriggerEventEndDic, cctTriggerEventsPool, PhysXCallback;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /*
                                                                                                                                                                                                            Copyright (c) 2020-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                           
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
                                                                                                                                                                                                           */ /* eslint-disable @typescript-eslint/no-unsafe-return */
  return {
    setters: [function (_frameworkIndexJs) {
      CharacterControllerContact = _frameworkIndexJs.CharacterControllerContact;
      EPhysicsDrawFlags = _frameworkIndexJs.EPhysicsDrawFlags;
    }, function (_coreIndexJs) {
      error = _coreIndexJs.error;
      js = _coreIndexJs.js;
      Vec3 = _coreIndexJs.Vec3;
      Quat = _coreIndexJs.Quat;
      Color = _coreIndexJs.Color;
    }, function (_physxAdapterJs) {
      addActorToScene = _physxAdapterJs.addActorToScene;
      raycastAll = _physxAdapterJs.raycastAll;
      simulateScene = _physxAdapterJs.simulateScene;
      initializeWorld = _physxAdapterJs.initializeWorld;
      _raycastClosest = _physxAdapterJs.raycastClosest;
      sweepClosest = _physxAdapterJs.sweepClosest;
      gatherEvents = _physxAdapterJs.gatherEvents;
      getWrapShape = _physxAdapterJs.getWrapShape;
      PX = _physxAdapterJs.PX;
      getContactDataOrByteOffset = _physxAdapterJs.getContactDataOrByteOffset;
      sweepAll = _physxAdapterJs.sweepAll;
      getColorPXColor = _physxAdapterJs.getColorPXColor;
    }, function (_physxSharedBodyJs) {
      PhysXSharedBody = _physxSharedBodyJs.PhysXSharedBody;
    }, function (_utilsTupleDictionaryJs) {
      TupleDictionary = _utilsTupleDictionaryJs.TupleDictionary;
    }, function (_physxContactEquationJs) {
      PhysXContactEquation = _physxContactEquationJs.PhysXContactEquation;
    }, function (_utilsUtilJs) {
      CollisionEventObject = _utilsUtilJs.CollisionEventObject;
      TriggerEventObject = _utilsUtilJs.TriggerEventObject;
      CharacterTriggerEventObject = _utilsUtilJs.CharacterTriggerEventObject;
    }, function (_shapesPhysxShapeJs) {
      PhysXShape = _shapesPhysxShapeJs.PhysXShape;
    }, function (_physxEnumJs) {
      EFilterDataWord3 = _physxEnumJs.EFilterDataWord3;
    }, function (_physxInstanceJs) {
      PhysXInstance = _physxInstanceJs.PhysXInstance;
    }, function (_characterControllersPhysxCharacterControllerJs) {
      PhysXCharacterController = _characterControllersPhysxCharacterControllerJs.PhysXCharacterController;
    }, function (_gameIndexJs) {
      director = _gameIndexJs.director;
    }],
    execute: function () {
      CC_QUAT_0 = new Quat();
      CC_V3_0 = new Vec3();
      CC_V3_1 = new Vec3();
      CC_V3_2 = new Vec3();
      CC_COLOR_0 = new Color(0, 0, 0, 0);
      _export("PhysXWorld", PhysXWorld = /*#__PURE__*/function (_PhysXInstance) {
        _inheritsLoose(PhysXWorld, _PhysXInstance);
        var _proto = PhysXWorld.prototype;
        _proto.setAllowSleep = function setAllowSleep(_v) {};
        _proto.setDefaultMaterial = function setDefaultMaterial(_v) {};
        _proto.setGravity = function setGravity(gravity) {
          this.scene.setGravity(gravity);
        };
        function PhysXWorld() {
          var _this;
          _this = _PhysXInstance.call(this) || this;
          _this.scene = void 0;
          _this.callback = PhysXCallback;
          _this.wrappedBodies = [];
          _this.ccts = [];
          _this.controllerManager = void 0;
          _this._isNeedFetch = false;
          _this._debugLineCount = 0;
          _this._MAX_DEBUG_LINE_COUNT = 16384;
          _this._debugDrawFlags = EPhysicsDrawFlags.NONE;
          _this._debugConstraintSize = 0.3;
          initializeWorld(_assertThisInitialized(_this));
          return _this;
        }
        _proto.destroy = function destroy() {
          if (this.wrappedBodies.length) error('You should destroy all physics component first.');
          this.scene.release();
        };
        _proto.step = function step(deltaTime, _timeSinceLastCalled, _maxSubStep) {
          if (_maxSubStep === void 0) {
            _maxSubStep = 0;
          }
          if (this.wrappedBodies.length === 0) return;
          this._simulate(deltaTime);
          if (!PX.MULTI_THREAD) {
            this._fetchResults();
            for (var i = 0; i < this.wrappedBodies.length; i++) {
              var body = this.wrappedBodies[i];
              body.syncPhysicsToScene();
            }
          }
          this._debugDraw();
        };
        _proto._simulate = function _simulate(dt) {
          if (!this._isNeedFetch) {
            simulateScene(this.scene, dt);
            this._isNeedFetch = true;
          }
        };
        _proto._fetchResults = function _fetchResults() {
          if (this._isNeedFetch) {
            this.scene.fetchResults(true);
            this._isNeedFetch = false;
          }
        };
        _proto.syncSceneToPhysics = function syncSceneToPhysics() {
          for (var i = 0; i < this.wrappedBodies.length; i++) {
            var body = this.wrappedBodies[i];
            body.syncSceneToPhysics();
          }
          var ccts = this.ccts;
          var length = ccts.length;
          for (var _i = 0; _i < length; _i++) {
            var cct = ccts[_i];
            cct.syncSceneToPhysics();
          }
        }

        // only used in muti-thread for now
        ;
        _proto.syncPhysicsToScene = function syncPhysicsToScene() {
          this._fetchResults();
          for (var i = 0; i < this.wrappedBodies.length; i++) {
            var body = this.wrappedBodies[i];
            body.syncPhysicsToScene();
          }
        };
        _proto.syncAfterEvents = function syncAfterEvents() {
          for (var i = 0; i < this.wrappedBodies.length; i++) {
            var body = this.wrappedBodies[i];
            body.syncSceneWithCheck();
          }
        };
        _proto._setDebugDrawMode = function _setDebugDrawMode() {
          if (this._debugDrawFlags & EPhysicsDrawFlags.WIRE_FRAME) {
            this.scene.setVisualizationParameter(PX.PxVisualizationParameter.eCOLLISION_SHAPES, 1);
          } else {
            this.scene.setVisualizationParameter(PX.PxVisualizationParameter.eCOLLISION_SHAPES, 0);
          }
          var drawConstraint = Boolean(this._debugDrawFlags & EPhysicsDrawFlags.CONSTRAINT);
          var internalConstraintSize = drawConstraint ? this._debugConstraintSize : 0;
          this.scene.setVisualizationParameter(PX.PxVisualizationParameter.eJOINT_LOCAL_FRAMES, internalConstraintSize);
          this.scene.setVisualizationParameter(PX.PxVisualizationParameter.eJOINT_LIMITS, internalConstraintSize);
          if (this._debugDrawFlags & EPhysicsDrawFlags.AABB) {
            this.scene.setVisualizationParameter(PX.PxVisualizationParameter.eCOLLISION_AABBS, 1);
          } else {
            this.scene.setVisualizationParameter(PX.PxVisualizationParameter.eCOLLISION_AABBS, 0);
          }
        };
        _proto._getDebugRenderer = function _getDebugRenderer() {
          var _mainWindow;
          var cameras = (_mainWindow = director.root.mainWindow) === null || _mainWindow === void 0 ? void 0 : _mainWindow.cameras;
          if (!cameras) return null;
          if (cameras.length === 0) return null;
          if (!cameras[0]) return null;
          cameras[0].initGeometryRenderer();
          return cameras[0].geometryRenderer;
        };
        _proto._debugDraw = function _debugDraw() {
          var debugRenderer = this._getDebugRenderer();
          if (!debugRenderer) return;
          this._debugLineCount = 0;
          var rbPtr = this.scene.getRenderBufferPtr(); //PxRenderBuffer
          var nbLine = PX.PxRenderBuffer_GetNbLines(rbPtr);
          for (var i = 0; i < nbLine; i++) {
            var linePtr = PX.PxRenderBuffer_GetLineAt(rbPtr, i); //PxDebugLine
            this._onDebugDrawLine(linePtr);
          }
          var nbTriangle = PX.PxRenderBuffer_GetNbTriangles(rbPtr);
          for (var _i2 = 0; _i2 < nbTriangle; _i2++) {
            var trianglePtr = PX.PxRenderBuffer_GetTriangleAt(rbPtr, _i2); //PxDebugTriangle
            this._onDebugDrawTriangle(trianglePtr);
          }
        };
        _proto._onDebugDrawLine = function _onDebugDrawLine(linePtr) {
          var debugRenderer = this._getDebugRenderer();
          if (debugRenderer && this._debugLineCount < this._MAX_DEBUG_LINE_COUNT) {
            this._debugLineCount++;
            var f32RawPtr = PX.HEAPF32.subarray(linePtr / 4, linePtr / 4 + 3 * 8);
            var u32RawPtr = PX.HEAPU32.subarray(linePtr / 4, linePtr / 4 + 3 * 8);
            CC_V3_0.x = f32RawPtr[0];
            CC_V3_0.y = f32RawPtr[1];
            CC_V3_0.z = f32RawPtr[2];
            var color0 = u32RawPtr[3];
            CC_V3_1.x = f32RawPtr[4];
            CC_V3_1.y = f32RawPtr[5];
            CC_V3_1.z = f32RawPtr[6];
            getColorPXColor(CC_COLOR_0, color0);
            debugRenderer.addLine(CC_V3_0, CC_V3_1, CC_COLOR_0);
          }
        };
        _proto._onDebugDrawTriangle = function _onDebugDrawTriangle(trianglePtr) {
          var debugRenderer = this._getDebugRenderer();
          if (debugRenderer && this._MAX_DEBUG_LINE_COUNT - this._debugLineCount >= 3) {
            this._debugLineCount += 3;
            var f32RawPtr = PX.HEAPF32.subarray(trianglePtr / 4, trianglePtr / 4 + 3 * 12);
            var u32RawPtr = PX.HEAPU32.subarray(trianglePtr / 4, trianglePtr / 4 + 3 * 12);
            CC_V3_0.x = f32RawPtr[0];
            CC_V3_0.y = f32RawPtr[1];
            CC_V3_0.z = f32RawPtr[2];
            var color0 = u32RawPtr[3];
            CC_V3_1.x = f32RawPtr[4];
            CC_V3_1.y = f32RawPtr[5];
            CC_V3_1.z = f32RawPtr[6];
            // const color1 = u32RawPtr[7] as number;
            CC_V3_2.x = f32RawPtr[8];
            CC_V3_2.y = f32RawPtr[9];
            CC_V3_2.z = f32RawPtr[10];
            // const color2 = u32RawPtr[11] as number;
            getColorPXColor(CC_COLOR_0, color0);
            debugRenderer.addLine(CC_V3_0, CC_V3_1, CC_COLOR_0);
            // getColorPXColor(CC_COLOR_0, color1);
            debugRenderer.addLine(CC_V3_1, CC_V3_2, CC_COLOR_0);
            // getColorPXColor(CC_COLOR_0, color2);
            debugRenderer.addLine(CC_V3_2, CC_V3_0, CC_COLOR_0);
          }
        };
        _proto.getSharedBody = function getSharedBody(node, wrappedBody) {
          return PhysXSharedBody.getSharedBody(node, this, wrappedBody);
        };
        _proto.addActor = function addActor(body) {
          var index = this.wrappedBodies.indexOf(body);
          if (index < 0) {
            addActorToScene(this.scene, body.impl);
            this.wrappedBodies.push(body);
          }
        };
        _proto.removeActor = function removeActor(body) {
          var index = this.wrappedBodies.indexOf(body);
          if (index >= 0) {
            this.scene.removeActor(body.impl, true);
            js.array.fastRemoveAt(this.wrappedBodies, index);
          }
        };
        _proto.addCCT = function addCCT(cct) {
          var index = this.ccts.indexOf(cct);
          if (index < 0) {
            this.ccts.push(cct);
          }
        };
        _proto.removeCCT = function removeCCT(cct) {
          var index = this.ccts.indexOf(cct);
          if (index >= 0) {
            js.array.fastRemoveAt(this.ccts, index);
          }
        };
        _proto.addConstraint = function addConstraint(_constraint) {};
        _proto.removeConstraint = function removeConstraint(_constraint) {};
        _proto.raycast = function raycast(worldRay, options, pool, results) {
          return raycastAll(this, worldRay, options, pool, results);
        };
        _proto.raycastClosest = function raycastClosest(worldRay, options, result) {
          return _raycastClosest(this, worldRay, options, result);
        };
        _proto.sweepBox = function sweepBox(worldRay, halfExtent, orientation, options, pool, results) {
          if (!PhysXWorld._sweepBoxGeometry) {
            PhysXWorld._sweepBoxGeometry = new PX.BoxGeometry(halfExtent);
          }
          PhysXWorld._sweepBoxGeometry.setHalfExtents(halfExtent);
          return sweepAll(this, worldRay, PhysXWorld._sweepBoxGeometry, orientation, options, pool, results);
        };
        _proto.sweepBoxClosest = function sweepBoxClosest(worldRay, halfExtent, orientation, options, result) {
          if (!PhysXWorld._sweepBoxGeometry) {
            PhysXWorld._sweepBoxGeometry = new PX.BoxGeometry(halfExtent);
          }
          PhysXWorld._sweepBoxGeometry.setHalfExtents(halfExtent);
          return sweepClosest(this, worldRay, PhysXWorld._sweepBoxGeometry, orientation, options, result);
        };
        _proto.sweepSphere = function sweepSphere(worldRay, radius, options, pool, results) {
          if (!PhysXWorld._sweepSphereGeometry) {
            PhysXWorld._sweepSphereGeometry = new PX.SphereGeometry(radius);
          }
          PhysXWorld._sweepSphereGeometry.setRadius(radius);
          return sweepAll(this, worldRay, PhysXWorld._sweepSphereGeometry, Quat.IDENTITY, options, pool, results);
        };
        _proto.sweepSphereClosest = function sweepSphereClosest(worldRay, radius, options, result) {
          if (!PhysXWorld._sweepSphereGeometry) {
            PhysXWorld._sweepSphereGeometry = new PX.SphereGeometry(radius);
          }
          PhysXWorld._sweepSphereGeometry.setRadius(radius);
          return sweepClosest(this, worldRay, PhysXWorld._sweepSphereGeometry, Quat.IDENTITY, options, result);
        };
        _proto.sweepCapsule = function sweepCapsule(worldRay, radius, height, orientation, options, pool, results) {
          if (!PhysXWorld._sweepCapsuleGeometry) {
            PhysXWorld._sweepCapsuleGeometry = new PX.CapsuleGeometry(radius, height / 2);
          }
          PhysXWorld._sweepCapsuleGeometry.setRadius(radius);
          PhysXWorld._sweepCapsuleGeometry.setHalfHeight(height / 2);
          //add an extra 90 degree rotation to PxCapsuleGeometry whose axis is originally along the X axis
          var finalOrientation = CC_QUAT_0;
          Quat.fromEuler(finalOrientation, 0, 0, 90);
          Quat.multiply(finalOrientation, orientation, finalOrientation);
          return sweepAll(this, worldRay, PhysXWorld._sweepCapsuleGeometry, finalOrientation, options, pool, results);
        };
        _proto.sweepCapsuleClosest = function sweepCapsuleClosest(worldRay, radius, height, orientation, options, result) {
          if (!PhysXWorld._sweepCapsuleGeometry) {
            PhysXWorld._sweepCapsuleGeometry = new PX.CapsuleGeometry(radius, height / 2);
          }
          PhysXWorld._sweepCapsuleGeometry.setRadius(radius);
          PhysXWorld._sweepCapsuleGeometry.setHalfHeight(height / 2);
          //add an extra 90 degree rotation to PxCapsuleGeometry whose axis is originally along the X axis
          var finalOrientation = CC_QUAT_0;
          Quat.fromEuler(finalOrientation, 0, 0, 90);
          Quat.multiply(finalOrientation, orientation, finalOrientation);
          return sweepClosest(this, worldRay, PhysXWorld._sweepCapsuleGeometry, finalOrientation, options, result);
        };
        _proto.emitEvents = function emitEvents() {
          gatherEvents(this);
          PhysXCallback.emitTriggerEvent();
          PhysXCallback.emitCollisionEvent();
          PhysXCallback.emitCCTCollisionEvent();
          PhysXCallback.emitCCTTriggerEvent();
        };
        _createClass(PhysXWorld, [{
          key: "impl",
          get: function get() {
            return this.scene;
          }
        }, {
          key: "debugDrawFlags",
          get: function get() {
            return this._debugDrawFlags;
          },
          set: function set(v) {
            this._debugDrawFlags = v;
            this._setDebugDrawMode();
          }
        }, {
          key: "debugDrawConstraintSize",
          get: function get() {
            return this._debugConstraintSize;
          },
          set: function set(v) {
            this._debugConstraintSize = v;
            this._setDebugDrawMode();
          }
        }]);
        return PhysXWorld;
      }(PhysXInstance)); ///
      /// Event Callback
      ///
      PhysXWorld._sweepBoxGeometry = void 0;
      PhysXWorld._sweepSphereGeometry = void 0;
      PhysXWorld._sweepCapsuleGeometry = void 0;
      triggerEventBeginDic = new TupleDictionary();
      triggerEventEndDic = new TupleDictionary();
      triggerEventsPool = [];
      contactEventDic = new TupleDictionary();
      contactEventsPool = [];
      contactsPool = [];
      cctShapeEventDic = new TupleDictionary();
      emitHit = new CharacterControllerContact();
      cctTriggerEventBeginDic = new TupleDictionary();
      cctTriggerEventEndDic = new TupleDictionary();
      cctTriggerEventsPool = [];
      PhysXCallback = {
        eventCallback: {
          onContactBegin: function onContactBegin(a, b, c, d, o) {
            var wpa = getWrapShape(a);
            var wpb = getWrapShape(b);
            PhysXCallback.onCollision('onCollisionEnter', wpa, wpb, c, d, o);
          },
          onContactEnd: function onContactEnd(a, b, c, d, o) {
            var wpa = getWrapShape(a);
            var wpb = getWrapShape(b);
            PhysXCallback.onCollision('onCollisionExit', wpa, wpb, c, d, o);
          },
          onContactPersist: function onContactPersist(a, b, c, d, o) {
            var wpa = getWrapShape(a);
            var wpb = getWrapShape(b);
            PhysXCallback.onCollision('onCollisionStay', wpa, wpb, c, d, o);
          },
          onTriggerBegin: function onTriggerBegin(a, b) {
            var wpa = getWrapShape(a);
            var wpb = getWrapShape(b);
            if (wpa instanceof PhysXShape && wpb instanceof PhysXShape) {
              PhysXCallback.onTrigger('onTriggerEnter', wpa, wpb, true);
            } else if (wpa instanceof PhysXShape && wpb instanceof PhysXCharacterController) {
              PhysXCallback.onTriggerCCT('onControllerTriggerEnter', wpa, wpb, true);
            } else if (wpa instanceof PhysXCharacterController && wpb instanceof PhysXShape) {
              PhysXCallback.onTriggerCCT('onControllerTriggerEnter', wpb, wpa, true);
            }
          },
          onTriggerEnd: function onTriggerEnd(a, b) {
            var wpa = getWrapShape(a);
            var wpb = getWrapShape(b);
            if (wpa instanceof PhysXShape && wpb instanceof PhysXShape) {
              PhysXCallback.onTrigger('onTriggerExit', wpa, wpb, false);
            } else if (wpa instanceof PhysXShape && wpb instanceof PhysXCharacterController) {
              PhysXCallback.onTriggerCCT('onControllerTriggerExit', wpa, wpb, false);
            } else if (wpa instanceof PhysXCharacterController && wpb instanceof PhysXShape) {
              PhysXCallback.onTriggerCCT('onControllerTriggerExit', wpb, wpa, false);
            }
          }
        },
        // eNONE = 0,   //!< the query should ignore this shape
        // eTOUCH = 1,  //!< a hit on the shape touches the intersection geometry of the query but does not block it
        // eBLOCK = 2   //!< a hit on the shape blocks the query (does not block overlap queries)
        queryCallback: {
          preFilter: function preFilter(filterData, shape, _actor, _out) {
            var word3 = filterData.word3;
            var shapeFlags = shape.getFlags();
            if (word3 & EFilterDataWord3.QUERY_CHECK_TRIGGER && shapeFlags.isSet(PX.ShapeFlag.eTRIGGER_SHAPE)) {
              return PX.QueryHitType.eNONE;
            }
            return word3 & EFilterDataWord3.QUERY_SINGLE_HIT ? PX.QueryHitType.eBLOCK : PX.QueryHitType.eTOUCH;
          },
          preFilterForByteDance: function preFilterForByteDance(filterData, shapeFlags, hitFlags) {
            var word3 = filterData.word3;
            if (word3 & EFilterDataWord3.QUERY_CHECK_TRIGGER && shapeFlags & PX.ShapeFlag.eTRIGGER_SHAPE) {
              return PX.QueryHitType.eNONE;
            }
            return word3 & EFilterDataWord3.QUERY_SINGLE_HIT ? PX.QueryHitType.eBLOCK : PX.QueryHitType.eTOUCH;
          }
        },
        onTrigger: function onTrigger(type, wpa, wpb, isEnter) {
          if (wpa && wpb) {
            if (wpa.collider.needTriggerEvent || wpb.collider.needTriggerEvent) {
              var tE;
              if (triggerEventsPool.length > 0) {
                tE = triggerEventsPool.pop();
                tE.a = wpa;
                tE.b = wpb;
                tE.times = 0;
              } else {
                tE = {
                  a: wpa,
                  b: wpb,
                  times: 0
                };
              }
              if (isEnter) {
                triggerEventBeginDic.set(wpa.id, wpb.id, tE);
              } else {
                triggerEventEndDic.set(wpa.id, wpb.id, tE);
              }
            }
          }
        },
        onTriggerCCT: function onTriggerCCT(type, wpa, cct, isEnter) {
          if (wpa && cct) {
            if (wpa.collider.needTriggerEvent) {
              var tE;
              if (cctTriggerEventsPool.length > 0) {
                tE = cctTriggerEventsPool.pop();
                tE.a = wpa;
                tE.b = cct;
                tE.times = 0;
              } else {
                tE = {
                  a: wpa,
                  b: cct,
                  times: 0
                };
              }
              if (isEnter) {
                cctTriggerEventBeginDic.set(wpa.id, cct.id, tE);
              } else {
                cctTriggerEventEndDic.set(wpa.id, cct.id, tE);
              }
            }
          }
        },
        emitTriggerEvent: function emitTriggerEvent() {
          var len = triggerEventEndDic.getLength();
          while (len--) {
            var key = triggerEventEndDic.getKeyByIndex(len);
            var data = triggerEventEndDic.getDataByKey(key);
            triggerEventsPool.push(data);
            var dataBeg = triggerEventBeginDic.getDataByKey(key);
            if (dataBeg) {
              triggerEventsPool.push(dataBeg);
              triggerEventBeginDic.set(data.a.id, data.b.id, null);
            }
            var colliderA = data.a.collider;
            var colliderB = data.b.collider;
            if (colliderA && colliderB) {
              var type = 'onTriggerExit';
              TriggerEventObject.type = type;
              if (colliderA.needTriggerEvent) {
                TriggerEventObject.selfCollider = colliderA;
                TriggerEventObject.otherCollider = colliderB;
                colliderA.emit(type, TriggerEventObject);
              }
              if (colliderB.needTriggerEvent) {
                TriggerEventObject.selfCollider = colliderB;
                TriggerEventObject.otherCollider = colliderA;
                colliderB.emit(type, TriggerEventObject);
              }
            }
          }
          triggerEventEndDic.reset();
          len = triggerEventBeginDic.getLength();
          while (len--) {
            var _key = triggerEventBeginDic.getKeyByIndex(len);
            var _data = triggerEventBeginDic.getDataByKey(_key);
            var _colliderA = _data.a.collider;
            var _colliderB = _data.b.collider;
            if (!_colliderA || !_colliderA.isValid || !_colliderB || !_colliderB.isValid) {
              triggerEventsPool.push(_data);
              triggerEventBeginDic.set(_data.a.id, _data.b.id, null);
            } else {
              var _type = _data.times++ ? 'onTriggerStay' : 'onTriggerEnter';
              TriggerEventObject.type = _type;
              if (_colliderA.needTriggerEvent) {
                TriggerEventObject.selfCollider = _colliderA;
                TriggerEventObject.otherCollider = _colliderB;
                _colliderA.emit(_type, TriggerEventObject);
              }
              if (_colliderB.needTriggerEvent) {
                TriggerEventObject.selfCollider = _colliderB;
                TriggerEventObject.otherCollider = _colliderA;
                _colliderB.emit(_type, TriggerEventObject);
              }
            }
          }
        },
        /**
         * @param c the contact count, how many the contacts in this pair
         * @param d the contact buffer, the buffer stores all contacts
         * @param o the data offset, the first contact offset in the contact buffer
         */
        onCollision: function onCollision(type, wpa, wpb, c, d, o) {
          if (wpa && wpb) {
            if (wpa.collider.needCollisionEvent || wpb.collider.needCollisionEvent) {
              if (contactEventsPool.length > 0) {
                var cE = contactEventsPool.pop();
                cE.type = type;
                cE.a = wpa;
                cE.b = wpb;
                cE.contactCount = c;
                cE.buffer = d;
                cE.offset = o;
                contactEventDic.set(wpa.id, wpb.id, cE);
              } else {
                var _cE = {
                  type: type,
                  a: wpa,
                  b: wpb,
                  contactCount: c,
                  buffer: d,
                  offset: o
                };
                contactEventDic.set(wpa.id, wpb.id, _cE);
              }
            }
          }
        },
        emitCollisionEvent: function emitCollisionEvent() {
          var len = contactEventDic.getLength();
          while (len--) {
            var key = contactEventDic.getKeyByIndex(len);
            var data = contactEventDic.getDataByKey(key);
            contactEventsPool.push(data);
            var colliderA = data.a.collider;
            var colliderB = data.b.collider;
            if (colliderA && colliderA.isValid && colliderB && colliderB.isValid) {
              CollisionEventObject.type = data.type;
              CollisionEventObject.impl = data.buffer;
              var c = data.contactCount;
              var d = data.buffer;
              var o = data.offset;
              var contacts = CollisionEventObject.contacts;
              contactsPool.push.apply(contactsPool, contacts);
              contacts.length = 0;
              for (var i = 0; i < c; i++) {
                if (contactsPool.length > 0) {
                  var _c = contactsPool.pop();
                  _c.colliderA = colliderA;
                  _c.colliderB = colliderB;
                  _c.impl = getContactDataOrByteOffset(i, o);
                  contacts.push(_c);
                } else {
                  var _c2 = new PhysXContactEquation(CollisionEventObject);
                  _c2.colliderA = colliderA;
                  _c2.colliderB = colliderB;
                  _c2.impl = getContactDataOrByteOffset(i, o);
                  contacts.push(_c2);
                }
              }
              if (colliderA.needCollisionEvent) {
                CollisionEventObject.selfCollider = colliderA;
                CollisionEventObject.otherCollider = colliderB;
                colliderA.emit(CollisionEventObject.type, CollisionEventObject);
              }
              if (colliderB.needCollisionEvent) {
                CollisionEventObject.selfCollider = colliderB;
                CollisionEventObject.otherCollider = colliderA;
                colliderB.emit(CollisionEventObject.type, CollisionEventObject);
              }
            }
          }
          contactEventDic.reset();
        },
        controllerHitReportCB: {
          onShapeHit: function onShapeHit(hit) {
            //PX.ControllerShapeHit
            var cct = getWrapShape(hit.getCurrentController());
            var s = getWrapShape(hit.getTouchedShape());
            var item = cctShapeEventDic.get(hit.getCurrentController(), hit.getTouchedShape());
            if (!item) {
              var worldPos = new Vec3();
              worldPos.set(hit.worldPos.x, hit.worldPos.y, hit.worldPos.z);
              var worldNormal = new Vec3();
              worldNormal.set(hit.worldNormal.x, hit.worldNormal.y, hit.worldNormal.z);
              var motionDir = new Vec3();
              motionDir.set(hit.dir.x, hit.dir.y, hit.dir.z);
              var motionLength = hit.length;
              item = cctShapeEventDic.set(hit.getCurrentController(), hit.getTouchedShape(), {
                PhysXCharacterController: cct,
                PhysXShape: s,
                worldPos: worldPos,
                worldNormal: worldNormal,
                motionDir: motionDir,
                motionLength: motionLength
              });
            }
          },
          onControllerHit: function onControllerHit(hit) {//PX.ControllersHit
          }
        },
        emitCCTCollisionEvent: function emitCCTCollisionEvent() {
          var dicL = cctShapeEventDic.getLength();
          while (dicL--) {
            var key = cctShapeEventDic.getKeyByIndex(dicL);
            var data = cctShapeEventDic.getDataByKey(key);
            var cct = data.PhysXCharacterController.characterController;
            var collider = data.PhysXShape.collider;
            if (cct && cct.isValid && collider && collider.isValid) {
              emitHit.controller = cct;
              emitHit.collider = collider;
              emitHit.worldPosition.set(data.worldPos);
              emitHit.worldNormal.set(data.worldNormal);
              emitHit.motionDirection.set(data.motionDir);
              emitHit.motionLength = data.motionLength;
              cct.emit('onControllerColliderHit', emitHit);
            }
          }
          cctShapeEventDic.reset();
        },
        emitCCTTriggerEvent: function emitCCTTriggerEvent() {
          var len = cctTriggerEventEndDic.getLength();
          while (len--) {
            var key = cctTriggerEventEndDic.getKeyByIndex(len);
            var data = cctTriggerEventEndDic.getDataByKey(key);
            cctTriggerEventsPool.push(data);
            var dataBeg = cctTriggerEventBeginDic.getDataByKey(key);
            if (dataBeg) {
              cctTriggerEventsPool.push(dataBeg);
              cctTriggerEventBeginDic.set(data.a.id, data.b.id, null);
            }
            var collider = data.a.collider;
            var characterController = data.b.characterController;
            if (collider && characterController) {
              var type = 'onControllerTriggerExit';
              CharacterTriggerEventObject.type = type;
              if (collider.needTriggerEvent) {
                CharacterTriggerEventObject.collider = collider;
                CharacterTriggerEventObject.characterController = characterController;
                collider.emit(type, CharacterTriggerEventObject);
              }
              if (characterController.needTriggerEvent) {
                CharacterTriggerEventObject.collider = collider;
                CharacterTriggerEventObject.characterController = characterController;
                characterController.emit(type, CharacterTriggerEventObject);
              }
            }
          }
          cctTriggerEventEndDic.reset();
          len = cctTriggerEventBeginDic.getLength();
          while (len--) {
            var _key2 = cctTriggerEventBeginDic.getKeyByIndex(len);
            var _data2 = cctTriggerEventBeginDic.getDataByKey(_key2);
            var _collider = _data2.a.collider;
            var _characterController = _data2.b.characterController;
            if (!_collider || !_collider.isValid || !_characterController || !_characterController.isValid) {
              cctTriggerEventsPool.push(_data2);
              cctTriggerEventBeginDic.set(_data2.a.id, _data2.b.id, null);
            } else {
              var _type2 = _data2.times++ ? 'onControllerTriggerStay' : 'onControllerTriggerEnter';
              CharacterTriggerEventObject.type = _type2;
              if (_collider.needTriggerEvent) {
                CharacterTriggerEventObject.collider = _collider;
                CharacterTriggerEventObject.characterController = _characterController;
                _collider.emit(_type2, CharacterTriggerEventObject);
              }
              if (_characterController.needTriggerEvent) {
                CharacterTriggerEventObject.collider = _collider;
                CharacterTriggerEventObject.characterController = _characterController;
                _characterController.emit(_type2, CharacterTriggerEventObject);
              }
            }
          }
        }
      };
    }
  };
});
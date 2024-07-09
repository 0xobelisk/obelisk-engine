System.register("q-bundled:///fs/cocos/particle/emitter/shape-module.js", ["../../core/data/decorators/index.js", "../../core/index.js", "../animator/curve-range.js", "../enum.js", "../particle-general-function.js"], function (_export, _context) {
  "use strict";

  var ccclass, tooltip, displayOrder, type, formerlySerializedAs, serializable, visible, range, Mat4, Quat, Vec2, Vec3, clamp, pingPong, random, randomRange, repeat, toDegree, toRadian, CurveRange, ArcMode, EmitLocation, ShapeType, fixedAngleUnitVector2, particleEmitZAxis, randomPointBetweenCircleAtFixedAngle, randomPointBetweenSphere, randomPointInCube, randomSign, randomSortArray, randomUnitVector, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _dec49, _dec50, _dec51, _dec52, _dec53, _dec54, _dec55, _dec56, _dec57, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6, _initializer7, _initializer8, _initializer9, _initializer10, _initializer11, _initializer12, _initializer13, _initializer14, _initializer15, _initializer16, _initializer17, _initializer18, _initializer19, _intermediVec, _intermediArr, _unitBoxExtent, ShapeModule;
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
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
                                                                                                                                                                                                                                                                                                                                                                                            */
  function getShapeTypeEnumName(enumValue) {
    let enumName = '';
    for (const key in ShapeType) {
      if (ShapeType[key] === enumValue) {
        enumName = key;
        break;
      }
    }
    return enumName;
  }

  /**
   * @en
   * This module defines the the volume or surface from which particles can be emitted, and the direction of the start velocity.
   * The Shape property defines the shape of the emission volume, and the rest of the module properties vary depending on the Shape you choose.
   * All shapes have properties that define their dimensions, such as the Radius property.
   * To edit these, drag the handles on the wireframe emitter shape in the Scene view.
   * The choice of shape affects the region from which particles can be emitted, but also the initial direction of the particles.
   * @zh
   * 本模块定义一个发射体或发射面，粒子将会从它进行发射，并且定义了粒子发射的初始方向和初始速度。
   * 形状属性定义粒子系统的发射体，剩下的属性依赖于选择的形状。
   * 所有形状都具有定义其大小的属性，例如 Radius 属性。要编辑这些属性，请在视图中拖动线框发射器形状上的控制柄。
   * 形状的选择会影响可发射粒子的区域，但也会影响粒子的初始方向。
   */

  function sphereEmit(emitFrom, radius, radiusThickness, pos, dir) {
    switch (emitFrom) {
      case EmitLocation.Volume:
        randomPointBetweenSphere(pos, radius * (1 - radiusThickness), radius);
        Vec3.normalize(dir, pos);
        break;
      case EmitLocation.Shell:
        randomUnitVector(pos);
        Vec3.multiplyScalar(pos, pos, radius);
        Vec3.normalize(dir, pos);
        break;
      default:
        console.warn(`${emitFrom} is not supported for sphere emitter.`);
    }
  }
  function hemisphereEmit(emitFrom, radius, radiusThickness, pos, dir) {
    switch (emitFrom) {
      case EmitLocation.Volume:
        randomPointBetweenSphere(pos, radius * (1 - radiusThickness), radius);
        if (pos.z > 0) {
          pos.z *= -1;
        }
        Vec3.normalize(dir, pos);
        break;
      case EmitLocation.Shell:
        randomUnitVector(pos);
        Vec3.multiplyScalar(pos, pos, radius);
        if (pos.z > 0) {
          pos.z *= -1;
        }
        Vec3.normalize(dir, pos);
        break;
      default:
        console.warn(`${emitFrom} is not supported for hemisphere emitter.`);
    }
  }
  function coneEmit(emitFrom, radius, radiusThickness, theta, angle, length, pos, dir) {
    switch (emitFrom) {
      case EmitLocation.Base:
        randomPointBetweenCircleAtFixedAngle(pos, radius * (1 - radiusThickness), radius, theta);
        Vec2.multiplyScalar(dir, pos, Math.sin(angle));
        dir.z = -Math.cos(angle) * radius;
        Vec3.normalize(dir, dir);
        pos.z = 0;
        break;
      case EmitLocation.Shell:
        fixedAngleUnitVector2(pos, theta);
        Vec2.multiplyScalar(dir, pos, Math.sin(angle));
        dir.z = -Math.cos(angle);
        Vec3.normalize(dir, dir);
        Vec2.multiplyScalar(pos, pos, radius);
        pos.z = 0;
        break;
      case EmitLocation.Volume:
        randomPointBetweenCircleAtFixedAngle(pos, radius * (1 - radiusThickness), radius, theta);
        Vec2.multiplyScalar(dir, pos, Math.sin(angle));
        dir.z = -Math.cos(angle) * radius;
        Vec3.normalize(dir, dir);
        pos.z = 0;
        Vec3.add(pos, pos, Vec3.multiplyScalar(_intermediVec, dir, length * random() / -dir.z));
        break;
      default:
        console.warn(`${emitFrom} is not supported for cone emitter.`);
    }
  }
  function boxEmit(emitFrom, boxThickness, pos, dir) {
    switch (emitFrom) {
      case EmitLocation.Volume:
        randomPointInCube(pos, _unitBoxExtent);
        // randomPointBetweenCube(pos, vec3.multiply(_intermediVec, _unitBoxExtent, boxThickness), _unitBoxExtent);
        break;
      case EmitLocation.Shell:
        _intermediArr.splice(0, _intermediArr.length);
        _intermediArr.push(randomRange(-0.5, 0.5));
        _intermediArr.push(randomRange(-0.5, 0.5));
        _intermediArr.push(randomSign() * 0.5);
        randomSortArray(_intermediArr);
        applyBoxThickness(_intermediArr, boxThickness);
        Vec3.set(pos, _intermediArr[0], _intermediArr[1], _intermediArr[2]);
        break;
      case EmitLocation.Edge:
        _intermediArr.splice(0, _intermediArr.length);
        _intermediArr.push(randomRange(-0.5, 0.5));
        _intermediArr.push(randomSign() * 0.5);
        _intermediArr.push(randomSign() * 0.5);
        randomSortArray(_intermediArr);
        applyBoxThickness(_intermediArr, boxThickness);
        Vec3.set(pos, _intermediArr[0], _intermediArr[1], _intermediArr[2]);
        break;
      default:
        console.warn(`${emitFrom} is not supported for box emitter.`);
    }
    Vec3.copy(dir, particleEmitZAxis);
  }
  function circleEmit(radius, radiusThickness, theta, pos, dir) {
    randomPointBetweenCircleAtFixedAngle(pos, radius * (1 - radiusThickness), radius, theta);
    Vec3.normalize(dir, pos);
  }
  function applyBoxThickness(pos, thickness) {
    if (thickness.x > 0) {
      pos[0] += 0.5 * randomRange(-thickness.x, thickness.x);
      pos[0] = clamp(pos[0], -0.5, 0.5);
    }
    if (thickness.y > 0) {
      pos[1] += 0.5 * randomRange(-thickness.y, thickness.y);
      pos[1] = clamp(pos[1], -0.5, 0.5);
    }
    if (thickness.z > 0) {
      pos[2] += 0.5 * randomRange(-thickness.z, thickness.z);
      pos[2] = clamp(pos[2], -0.5, 0.5);
    }
  }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
      displayOrder = _coreDataDecoratorsIndexJs.displayOrder;
      type = _coreDataDecoratorsIndexJs.type;
      formerlySerializedAs = _coreDataDecoratorsIndexJs.formerlySerializedAs;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      visible = _coreDataDecoratorsIndexJs.visible;
      range = _coreDataDecoratorsIndexJs.range;
    }, function (_coreIndexJs) {
      Mat4 = _coreIndexJs.Mat4;
      Quat = _coreIndexJs.Quat;
      Vec2 = _coreIndexJs.Vec2;
      Vec3 = _coreIndexJs.Vec3;
      clamp = _coreIndexJs.clamp;
      pingPong = _coreIndexJs.pingPong;
      random = _coreIndexJs.random;
      randomRange = _coreIndexJs.randomRange;
      repeat = _coreIndexJs.repeat;
      toDegree = _coreIndexJs.toDegree;
      toRadian = _coreIndexJs.toRadian;
    }, function (_animatorCurveRangeJs) {
      CurveRange = _animatorCurveRangeJs.default;
    }, function (_enumJs) {
      ArcMode = _enumJs.ArcMode;
      EmitLocation = _enumJs.EmitLocation;
      ShapeType = _enumJs.ShapeType;
    }, function (_particleGeneralFunctionJs) {
      fixedAngleUnitVector2 = _particleGeneralFunctionJs.fixedAngleUnitVector2;
      particleEmitZAxis = _particleGeneralFunctionJs.particleEmitZAxis;
      randomPointBetweenCircleAtFixedAngle = _particleGeneralFunctionJs.randomPointBetweenCircleAtFixedAngle;
      randomPointBetweenSphere = _particleGeneralFunctionJs.randomPointBetweenSphere;
      randomPointInCube = _particleGeneralFunctionJs.randomPointInCube;
      randomSign = _particleGeneralFunctionJs.randomSign;
      randomSortArray = _particleGeneralFunctionJs.randomSortArray;
      randomUnitVector = _particleGeneralFunctionJs.randomUnitVector;
    }],
    execute: function () {
      _intermediVec = new Vec3(0, 0, 0);
      _intermediArr = [];
      _unitBoxExtent = new Vec3(0.5, 0.5, 0.5);
      _export("default", ShapeModule = (_dec = ccclass('cc.ShapeModule'), _dec2 = displayOrder(13), _dec3 = tooltip('i18n:shapeModule.position'), _dec4 = displayOrder(14), _dec5 = tooltip('i18n:shapeModule.rotation'), _dec6 = displayOrder(15), _dec7 = tooltip('i18n:shapeModule.scale'), _dec8 = displayOrder(6), _dec9 = tooltip('i18n:shapeModule.arc'), _dec10 = visible(function () {
        const subset = ['Cone', 'Circle'];
        const enumName = getShapeTypeEnumName(this.shapeType);
        return subset.includes(enumName);
      }), _dec11 = displayOrder(5), _dec12 = tooltip('i18n:shapeModule.angle'), _dec13 = visible(function () {
        const subset = ['Cone'];
        const enumName = getShapeTypeEnumName(this.shapeType);
        return subset.includes(enumName);
      }), _dec14 = displayOrder(0), _dec15 = type(ShapeType), _dec16 = formerlySerializedAs('shapeType'), _dec17 = displayOrder(1), _dec18 = type(ShapeType), _dec19 = tooltip('i18n:shapeModule.shapeType'), _dec20 = type(EmitLocation), _dec21 = displayOrder(2), _dec22 = tooltip('i18n:shapeModule.emitFrom'), _dec23 = visible(function () {
        const subset = ['Box', 'Cone', 'Sphere', 'Hemisphere'];
        const enumName = getShapeTypeEnumName(this.shapeType);
        return subset.includes(enumName);
      }), _dec24 = displayOrder(16), _dec25 = tooltip('i18n:shapeModule.alignToDirection'), _dec26 = displayOrder(17), _dec27 = tooltip('i18n:shapeModule.randomDirectionAmount'), _dec28 = displayOrder(18), _dec29 = tooltip('i18n:shapeModule.sphericalDirectionAmount'), _dec30 = displayOrder(19), _dec31 = tooltip('i18n:shapeModule.randomPositionAmount'), _dec32 = displayOrder(3), _dec33 = tooltip('i18n:shapeModule.radius'), _dec34 = visible(function () {
        const subset = ['Circle', 'Cone', 'Sphere', 'Hemisphere'];
        const enumName = getShapeTypeEnumName(this.shapeType);
        return subset.includes(enumName);
      }), _dec35 = displayOrder(4), _dec36 = tooltip('i18n:shapeModule.radiusThickness'), _dec37 = visible(function () {
        const subset = ['Circle', 'Cone', 'Sphere', 'Hemisphere'];
        const enumName = getShapeTypeEnumName(this.shapeType);
        return subset.includes(enumName);
      }), _dec38 = type(ArcMode), _dec39 = displayOrder(7), _dec40 = tooltip('i18n:shapeModule.arcMode'), _dec41 = visible(function () {
        const subset = ['Cone', 'Circle'];
        const enumName = getShapeTypeEnumName(this.shapeType);
        return subset.includes(enumName);
      }), _dec42 = visible(function noArc() {
        return this.arcMode !== ArcMode.Random;
      }), _dec43 = displayOrder(9), _dec44 = tooltip('i18n:shapeModule.arcSpread'), _dec45 = visible(function () {
        const subset = ['Cone', 'Circle'];
        const enumName = getShapeTypeEnumName(this.shapeType);
        return subset.includes(enumName);
      }), _dec46 = type(CurveRange), _dec47 = visible(function noArc() {
        return this.arcMode !== ArcMode.Random;
      }), _dec48 = range([0, 1]), _dec49 = displayOrder(10), _dec50 = tooltip('i18n:shapeModule.arcSpeed'), _dec51 = visible(function () {
        const subset = ['Cone', 'Circle'];
        const enumName = getShapeTypeEnumName(this.shapeType);
        return subset.includes(enumName);
      }), _dec52 = displayOrder(11), _dec53 = tooltip('i18n:shapeModule.length'), _dec54 = visible(function () {
        const subset = ['Cone'];
        const enumName = getShapeTypeEnumName(this.shapeType);
        return subset.includes(enumName);
      }), _dec55 = displayOrder(12), _dec56 = tooltip('i18n:shapeModule.boxThickness'), _dec57 = visible(function () {
        const subset = ['Box'];
        const enumName = getShapeTypeEnumName(this.shapeType);
        return subset.includes(enumName);
      }), _dec(_class = (_class2 = class ShapeModule {
        /**
         * @en Emitter position.
         * @zh 粒子发射器位置。
         */
        get position() {
          return this._position;
        }
        set position(val) {
          this._position = val;
          this.constructMat();
        }

        /**
         * @en Emitter rotation.
         * @zh 粒子发射器旋转角度。
         */
        get rotation() {
          return this._rotation;
        }
        set rotation(val) {
          this._rotation = val;
          this.constructMat();
        }

        /**
         * @en Emitter size scale.
         * @zh 粒子发射器缩放比例。
         */
        get scale() {
          return this._scale;
        }
        set scale(val) {
          this._scale = val;
          this.constructMat();
        }

        /**
         * @en Particles will be emitted in an arc if shape is Cone or Circle.
         * @zh 粒子发射器在一个扇形范围内发射。
         */
        get arc() {
          return toDegree(this._arc);
        }
        set arc(val) {
          this._arc = toRadian(val);
        }

        /**
         * @en The angle of the Cone.<bg>
         * Define how the cone opening and closing.
         * @zh 圆锥的轴与母线的夹角<bg>。
         * 决定圆锥发射器的开合程度。
         */
        get angle() {
          return Math.round(toDegree(this._angle) * 100) / 100;
        }
        set angle(val) {
          this._angle = toRadian(val);
        }
        /**
         * @en Enable this module or not.
         * @zh 是否启用。
         */
        get enable() {
          return this._enable;
        }
        set enable(val) {
          this._enable = val;
        }

        /**
         * @en Emitter [[ShapeType]].
         * @zh 粒子发射器类型 [[ShapeType]]。
         *
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */

        get shapeType() {
          return this._shapeType;
        }
        set shapeType(val) {
          this._shapeType = val;
          switch (this._shapeType) {
            case ShapeType.Box:
              if (this.emitFrom === EmitLocation.Base) {
                this.emitFrom = EmitLocation.Volume;
              }
              break;
            case ShapeType.Cone:
              if (this.emitFrom === EmitLocation.Edge) {
                this.emitFrom = EmitLocation.Base;
              }
              break;
            case ShapeType.Sphere:
            case ShapeType.Hemisphere:
              if (this.emitFrom === EmitLocation.Base || this.emitFrom === EmitLocation.Edge) {
                this.emitFrom = EmitLocation.Volume;
              }
              break;
            default:
              break;
          }
        }

        /**
         * @en Particles emitted from which part of the shape [[EmitLocation]] (Box Cone Sphere Hemisphere).
         * @zh 粒子从发射器哪个部位发射 [[EmitLocation]]。
         */

        constructor() {
          this._enable = _initializer && _initializer();
          this._shapeType = _initializer2 && _initializer2();
          this.emitFrom = _initializer3 && _initializer3();
          /**
           * @en Align particle with particle direction.
           * @zh 根据粒子的初始方向决定粒子的移动方向。
           */
          this.alignToDirection = _initializer4 && _initializer4();
          /**
           * @en Particle direction random amount.
           * @zh 粒子生成方向随机设定。
           */
          this.randomDirectionAmount = _initializer5 && _initializer5();
          /**
           * @en Blend particle directions towards a spherical direction, where they travel outwards from the center of their transform.
           * @zh 表示当前发射方向与当前位置到结点中心连线方向的插值。
           */
          this.sphericalDirectionAmount = _initializer6 && _initializer6();
          /**
           * @en Particle position random amount.
           * @zh 粒子生成位置随机设定（设定此值为非 0 会使粒子生成位置超出生成器大小范围）。
           */
          this.randomPositionAmount = _initializer7 && _initializer7();
          /**
           * @en Emition radius (available for Circle Cone Sphere Hemisphere).
           * @zh 粒子发射器半径。
           */
          this.radius = _initializer8 && _initializer8();
          /**
           * @en Emit position in shape (available for Circle Cone Sphere Hemisphere): <bg>
           * - 0 Emit from surface;
           * - 1 Emit from volume center;
           * - 0 to 1 Emit within surface and volume center.
           * @zh 粒子发射器发射位置（对 Box 类型的发射器无效）：<bg>
           * - 0 表示从表面发射；
           * - 1 表示从中心发射；
           * - 0 ~ 1 之间表示在中心到表面之间发射。
           */
          this.radiusThickness = _initializer9 && _initializer9();
          /**
           * @en Arc mode for Cone and Circle shape.
           * @zh 粒子在扇形范围内的发射方式 [[ArcMode]]。
           */
          this.arcMode = _initializer10 && _initializer10();
          /**
           * @en Control arc spread for Cone and circle shape.
           * @zh 控制可能产生粒子的弧周围的离散间隔。
           */
          this.arcSpread = _initializer11 && _initializer11();
          /**
           * @en Emit speed around arc (available for Cone and Circle).
           * @zh 粒子沿圆周发射的速度。
           */
          this.arcSpeed = _initializer12 && _initializer12();
          /**
           * @en The length from Cone bottom to top.
           * @zh 圆锥顶部截面距离底部的轴长<bg>。
           * 决定圆锥发射器的高度。
           */
          this.length = _initializer13 && _initializer13();
          /**
           * @en Shape thickness for box shape.
           * @zh 粒子发射器发射位置（针对 Box 类型的粒子发射器）。
           */
          this.boxThickness = _initializer14 && _initializer14();
          this._position = _initializer15 && _initializer15();
          this._rotation = _initializer16 && _initializer16();
          this._scale = _initializer17 && _initializer17();
          this._arc = _initializer18 && _initializer18();
          this._angle = _initializer19 && _initializer19();
          this.mat = void 0;
          this.quat = void 0;
          this.particleSystem = void 0;
          this.lastTime = void 0;
          this.totalAngle = void 0;
          this.mat = new Mat4();
          this.quat = new Quat();
          this.particleSystem = null;
          this.lastTime = 0;
          this.totalAngle = 0;
        }

        /**
         * @en Apply particle system to this shape and create shape transform matrix.
         * @zh 把发射形状应用到粒子系统，并且创建发射形状变换矩阵。
         * @param ps @en Emit shape applied to which Particle system. @zh 使用发射形状的粒子系统。
         * @internal
         */
        onInit(ps) {
          this.particleSystem = ps;
          this.constructMat();
          this.lastTime = this.particleSystem._time;
        }

        /**
         * @en Emit particle by this shape.
         * @zh 通过这个形状发射粒子。
         * @param p @en Particle emitted. @zh 发射出来的粒子。
         * @internal
         */
        emit(p) {
          switch (this.shapeType) {
            case ShapeType.Box:
              boxEmit(this.emitFrom, this.boxThickness, p.position, p.velocity);
              break;
            case ShapeType.Circle:
              circleEmit(this.radius, this.radiusThickness, this.generateArcAngle(), p.position, p.velocity);
              break;
            case ShapeType.Cone:
              coneEmit(this.emitFrom, this.radius, this.radiusThickness, this.generateArcAngle(), this._angle, this.length, p.position, p.velocity);
              break;
            case ShapeType.Sphere:
              sphereEmit(this.emitFrom, this.radius, this.radiusThickness, p.position, p.velocity);
              break;
            case ShapeType.Hemisphere:
              hemisphereEmit(this.emitFrom, this.radius, this.radiusThickness, p.position, p.velocity);
              break;
            default:
              console.warn(`${this.shapeType} shapeType is not supported by ShapeModule.`);
          }
          if (this.randomPositionAmount > 0) {
            p.position.x += randomRange(-this.randomPositionAmount, this.randomPositionAmount);
            p.position.y += randomRange(-this.randomPositionAmount, this.randomPositionAmount);
            p.position.z += randomRange(-this.randomPositionAmount, this.randomPositionAmount);
          }
          Vec3.transformQuat(p.velocity, p.velocity, this.quat);
          Vec3.transformMat4(p.position, p.position, this.mat);
          if (this.sphericalDirectionAmount > 0) {
            const sphericalVel = Vec3.normalize(_intermediVec, p.position);
            Vec3.lerp(p.velocity, p.velocity, sphericalVel, this.sphericalDirectionAmount);
          }
          this.lastTime = this.particleSystem._time;
        }
        constructMat() {
          Quat.fromEuler(this.quat, this._rotation.x, this._rotation.y, this._rotation.z);
          Mat4.fromRTS(this.mat, this.quat, this._position, this._scale);
        }
        generateArcAngle() {
          if (this.arcMode === ArcMode.Random) {
            return randomRange(0, this._arc);
          }
          let angle = this.totalAngle + 2 * Math.PI * this.arcSpeed.evaluate(this.particleSystem._time, 1) * (this.particleSystem._time - this.lastTime);
          this.totalAngle = angle;
          if (this.arcSpread !== 0) {
            angle = Math.floor(angle / (this._arc * this.arcSpread)) * this._arc * this.arcSpread;
          }
          switch (this.arcMode) {
            case ArcMode.Loop:
              return repeat(angle, this._arc);
            case ArcMode.PingPong:
              return pingPong(angle, this._arc);
            default:
              return repeat(angle, this._arc);
          }
        }
      }, (_applyDecoratedDescriptor(_class2.prototype, "position", [_dec2, _dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "position"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "rotation", [_dec4, _dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "rotation"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "scale", [_dec6, _dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "scale"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "arc", [_dec8, _dec9, _dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "arc"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "angle", [_dec11, _dec12, _dec13], Object.getOwnPropertyDescriptor(_class2.prototype, "angle"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "_enable", [serializable], function () {
        return false;
      }), _applyDecoratedDescriptor(_class2.prototype, "enable", [_dec14], Object.getOwnPropertyDescriptor(_class2.prototype, "enable"), _class2.prototype), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_shapeType", [_dec15, _dec16, _dec17], function () {
        return ShapeType.Cone;
      }), _applyDecoratedDescriptor(_class2.prototype, "shapeType", [_dec18, _dec19], Object.getOwnPropertyDescriptor(_class2.prototype, "shapeType"), _class2.prototype), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "emitFrom", [_dec20, serializable, _dec21, _dec22, _dec23], function () {
        return EmitLocation.Volume;
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "alignToDirection", [serializable, _dec24, _dec25], function () {
        return false;
      }), _initializer5 = _applyDecoratedInitializer(_class2.prototype, "randomDirectionAmount", [serializable, _dec26, _dec27], function () {
        return 0;
      }), _initializer6 = _applyDecoratedInitializer(_class2.prototype, "sphericalDirectionAmount", [serializable, _dec28, _dec29], function () {
        return 0;
      }), _initializer7 = _applyDecoratedInitializer(_class2.prototype, "randomPositionAmount", [serializable, _dec30, _dec31], function () {
        return 0;
      }), _initializer8 = _applyDecoratedInitializer(_class2.prototype, "radius", [serializable, _dec32, _dec33, _dec34], function () {
        return 1;
      }), _initializer9 = _applyDecoratedInitializer(_class2.prototype, "radiusThickness", [serializable, _dec35, _dec36, _dec37], function () {
        return 1;
      }), _initializer10 = _applyDecoratedInitializer(_class2.prototype, "arcMode", [_dec38, serializable, _dec39, _dec40, _dec41], function () {
        return ArcMode.Random;
      }), _initializer11 = _applyDecoratedInitializer(_class2.prototype, "arcSpread", [_dec42, serializable, _dec43, _dec44, _dec45], function () {
        return 0;
      }), _initializer12 = _applyDecoratedInitializer(_class2.prototype, "arcSpeed", [_dec46, _dec47, _dec48, serializable, _dec49, _dec50, _dec51], function () {
        return new CurveRange();
      }), _initializer13 = _applyDecoratedInitializer(_class2.prototype, "length", [serializable, _dec52, _dec53, _dec54], function () {
        return 5;
      }), _initializer14 = _applyDecoratedInitializer(_class2.prototype, "boxThickness", [serializable, _dec55, _dec56, _dec57], function () {
        return new Vec3(0, 0, 0);
      }), _initializer15 = _applyDecoratedInitializer(_class2.prototype, "_position", [serializable], function () {
        return new Vec3(0, 0, 0);
      }), _initializer16 = _applyDecoratedInitializer(_class2.prototype, "_rotation", [serializable], function () {
        return new Vec3(0, 0, 0);
      }), _initializer17 = _applyDecoratedInitializer(_class2.prototype, "_scale", [serializable], function () {
        return new Vec3(1, 1, 1);
      }), _initializer18 = _applyDecoratedInitializer(_class2.prototype, "_arc", [serializable], function () {
        return toRadian(360);
      }), _initializer19 = _applyDecoratedInitializer(_class2.prototype, "_angle", [serializable], function () {
        return toRadian(25);
      })), _class2)) || _class));
    }
  };
});
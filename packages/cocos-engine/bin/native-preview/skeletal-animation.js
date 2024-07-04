System.register(['./index-ce98320e.js', './animation-component-f18b860a.js', './deprecated-15f68f3e.js', './find-7a03d1cc.js', './builtin-res-mgr.jsb-c9e8e53a.js', './texture-buffer-pool-005a6472.js', './device-90bc7390.js', './node-event-18d96a1b.js', './murmurhash2_gc-2108d723.js', './skeleton.jsb-04631524.js', './decorators-b63b63a2.js', './mesh-renderer-ea94cc01.js', './mesh.jsb-cea8fe4b.js', './deprecated-80961f27.js', './renderer-3bf7a012.js', './model-renderer-f8d2f66d.js', './buffer-9511d9f4.js', './pipeline-sub-state.jsb-f3a5cc2c.js', './touch-af62e326.js'], (function (exports) {
    'use strict';
    var Quat, Vec3, Mat4, AABB, legacyCC, ccclass, type, applyDecoratedInitializer, setClassAlias, serializable, executionOrder, warn, assertIsTrue, SkelAnimDataHub, AnimationState, Animation, getGlobalAnimationManager, getWorldTransformUntilRoot, SkinnedMeshRenderer, UBOSkinningAnimation, Node, TextureBufferPool, SamplerInfo, Filter, Address, FormatInfos, Format, FormatFeatureBit, BufferInfo, BufferUsageBit, MemoryUsageBit, _applyDecoratedDescriptor;
    return {
        setters: [function (module) {
            Quat = module.Q;
            Vec3 = module.n;
            Mat4 = module.s;
            AABB = module.bE;
            legacyCC = module.l;
            ccclass = module.by;
            type = module.bw;
            applyDecoratedInitializer = module.bx;
            setClassAlias = module.cj;
            serializable = module.bf;
            executionOrder = module.cs;
            warn = module.w;
            assertIsTrue = module.bu;
        }, function (module) {
            SkelAnimDataHub = module.y;
            AnimationState = module.A;
            Animation = module.s;
            getGlobalAnimationManager = module.z;
            exports('SkelAnimDataHub', module.y);
        }, function (module) {
            getWorldTransformUntilRoot = module.c;
            SkinnedMeshRenderer = module.S;
        }, function () {}, function (module) {
            UBOSkinningAnimation = module.aV;
            Node = module.Q;
        }, function (module) {
            TextureBufferPool = module.T;
        }, function (module) {
            SamplerInfo = module.ae;
            Filter = module.k;
            Address = module.l;
            FormatInfos = module.aO;
            Format = module.b;
            FormatFeatureBit = module.i;
            BufferInfo = module.a7;
            BufferUsageBit = module.B;
            MemoryUsageBit = module.e;
        }, function (module) {
            _applyDecoratedDescriptor = module.H;
        }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
        execute: (function () {

            new SamplerInfo(Filter.POINT, Filter.POINT, Filter.NONE, Address.CLAMP, Address.CLAMP, Address.CLAMP);

            const uploadJointData = uploadJointDataLBS;
            const MINIMUM_JOINT_TEXTURE_SIZE = 480;
            function selectJointsMediumFormat(device) {
              if (device.getFormatFeatures(Format.RGBA32F) & FormatFeatureBit.SAMPLED_TEXTURE) {
                return Format.RGBA32F;
              }
              return Format.RGBA8;
            }
            function uploadJointDataLBS(out, base, mat, firstBone) {
              out[base + 0] = mat.m00;
              out[base + 1] = mat.m01;
              out[base + 2] = mat.m02;
              out[base + 3] = mat.m12;
              out[base + 4] = mat.m04;
              out[base + 5] = mat.m05;
              out[base + 6] = mat.m06;
              out[base + 7] = mat.m13;
              out[base + 8] = mat.m08;
              out[base + 9] = mat.m09;
              out[base + 10] = mat.m10;
              out[base + 11] = mat.m14;
            }
            new Quat();
            new Quat();
            new Vec3();
            new Quat();
            new Vec3();
            function roundUpTextureSize(targetLength, formatSize) {
              const formatScale = 4 / Math.sqrt(formatSize);
              return Math.ceil(Math.max(MINIMUM_JOINT_TEXTURE_SIZE * formatScale, targetLength) / 12) * 12;
            }
            const v3_3 = new Vec3();
            const v3_4 = new Vec3();
            const v3_min = new Vec3();
            const v3_max = new Vec3();
            const m4_1$2 = new Mat4();
            const m4_2$2 = new Mat4();
            const ab_1 = new AABB();
            const Inf = Number.MAX_SAFE_INTEGER;
            class JointTexturePool {
              get pixelsPerJoint() {
                return this._pixelsPerJoint;
              }
              constructor(device) {
                this._device = void 0;
                this._pool = void 0;
                this._textureBuffers = new Map();
                this._formatSize = void 0;
                this._pixelsPerJoint = void 0;
                this._customPool = void 0;
                this._chunkIdxMap = new Map();
                this._device = device;
                const format = selectJointsMediumFormat(this._device);
                this._formatSize = FormatInfos[format].size;
                this._pixelsPerJoint = 48 / this._formatSize;
                this._pool = new TextureBufferPool(device);
                this._pool.initialize({
                  format,
                  roundUpFn: roundUpTextureSize
                });
                this._customPool = new TextureBufferPool(device);
                this._customPool.initialize({
                  format,
                  roundUpFn: roundUpTextureSize
                });
              }
              clear() {
                this._pool.destroy();
                this._textureBuffers.clear();
              }
              registerCustomTextureLayouts(layouts) {
                for (let i = 0; i < layouts.length; i++) {
                  const layout = layouts[i];
                  let textureLength = layout.textureLength;
                  if (!(this._device.getFormatFeatures(Format.RGBA32F) & FormatFeatureBit.SAMPLED_TEXTURE)) {
                    textureLength *= 2;
                  }
                  const chunkIdx = this._customPool.createChunk(textureLength);
                  for (let j = 0; j < layout.contents.length; j++) {
                    const content = layout.contents[j];
                    const {
                      skeleton
                    } = content;
                    this._chunkIdxMap.set(skeleton, chunkIdx);
                    for (let k = 0; k < content.clips.length; k++) {
                      const clip = content.clips[k];
                      this._chunkIdxMap.set(skeleton ^ clip, chunkIdx);
                    }
                  }
                }
              }
              getDefaultPoseTexture(skeleton, mesh, skinningRoot) {
                const hash = skeleton.hash ^ 0;
                let texture = this._textureBuffers.get(hash) || null;
                if (texture && texture.bounds.has(mesh.hash)) {
                  texture.refCount++;
                  return texture;
                }
                const {
                  joints,
                  bindposes
                } = skeleton;
                let textureBuffer = null;
                let buildTexture = false;
                const jointCount = joints.length;
                if (!texture) {
                  const bufSize = jointCount * 12;
                  const customChunkIdx = this._chunkIdxMap.get(hash);
                  const handle = customChunkIdx !== undefined ? this._customPool.alloc(bufSize * Float32Array.BYTES_PER_ELEMENT, customChunkIdx) : this._pool.alloc(bufSize * Float32Array.BYTES_PER_ELEMENT);
                  if (!handle) {
                    return texture;
                  }
                  texture = {
                    pixelOffset: handle.start / this._formatSize,
                    refCount: 1,
                    bounds: new Map(),
                    skeletonHash: skeleton.hash,
                    clipHash: 0,
                    readyToBeDeleted: false,
                    handle
                  };
                  textureBuffer = new Float32Array(bufSize);
                  buildTexture = true;
                } else {
                  texture.refCount++;
                }
                Vec3.set(v3_min, Inf, Inf, Inf);
                Vec3.set(v3_max, -Inf, -Inf, -Inf);
                const boneSpaceBounds = mesh.getBoneSpaceBounds(skeleton);
                for (let j = 0, offset = 0; j < jointCount; j++, offset += 12) {
                  const node = skinningRoot.getChildByPath(joints[j]);
                  const mat = node ? getWorldTransformUntilRoot(node, skinningRoot, m4_1$2) : skeleton.inverseBindposes[j];
                  const bound = boneSpaceBounds[j];
                  if (bound) {
                    AABB.transform(ab_1, bound, mat);
                    ab_1.getBoundary(v3_3, v3_4);
                    Vec3.min(v3_min, v3_min, v3_3);
                    Vec3.max(v3_max, v3_max, v3_4);
                  }
                  if (buildTexture) {
                    if (node) {
                      Mat4.multiply(mat, mat, bindposes[j]);
                    }
                    uploadJointData(textureBuffer, offset, node ? mat : Mat4.IDENTITY);
                  }
                }
                const bounds = [new AABB()];
                texture.bounds.set(mesh.hash, bounds);
                AABB.fromPoints(bounds[0], v3_min, v3_max);
                if (buildTexture) {
                  this._pool.update(texture.handle, textureBuffer.buffer);
                  this._textureBuffers.set(hash, texture);
                }
                return texture;
              }
              getSequencePoseTexture(skeleton, clip, mesh, skinningRoot) {
                const hash = skeleton.hash ^ clip.hash;
                let texture = this._textureBuffers.get(hash) || null;
                if (texture && texture.bounds.has(mesh.hash)) {
                  texture.refCount++;
                  return texture;
                }
                const {
                  joints,
                  bindposes
                } = skeleton;
                const clipData = SkelAnimDataHub.getOrExtract(clip);
                const {
                  frames
                } = clipData;
                let textureBuffer = null;
                let buildTexture = false;
                const jointCount = joints.length;
                if (!texture) {
                  const bufSize = jointCount * 12 * frames;
                  const customChunkIdx = this._chunkIdxMap.get(hash);
                  const handle = customChunkIdx !== undefined ? this._customPool.alloc(bufSize * Float32Array.BYTES_PER_ELEMENT, customChunkIdx) : this._pool.alloc(bufSize * Float32Array.BYTES_PER_ELEMENT);
                  if (!handle) {
                    return null;
                  }
                  const animInfos = this._createAnimInfos(skeleton, clip, skinningRoot);
                  texture = {
                    pixelOffset: handle.start / this._formatSize,
                    refCount: 1,
                    bounds: new Map(),
                    skeletonHash: skeleton.hash,
                    clipHash: clip.hash,
                    readyToBeDeleted: false,
                    handle,
                    animInfos
                  };
                  textureBuffer = new Float32Array(bufSize);
                  buildTexture = true;
                } else {
                  texture.refCount++;
                }
                const boneSpaceBounds = mesh.getBoneSpaceBounds(skeleton);
                const bounds = [];
                texture.bounds.set(mesh.hash, bounds);
                for (let f = 0; f < frames; f++) {
                  bounds.push(new AABB(Inf, Inf, Inf, -Inf, -Inf, -Inf));
                }
                for (let f = 0, offset = 0; f < frames; f++) {
                  const bound = bounds[f];
                  for (let j = 0; j < jointCount; j++, offset += 12) {
                    const {
                      curveData,
                      downstream,
                      bindposeIdx,
                      bindposeCorrection
                    } = texture.animInfos[j];
                    let mat;
                    let transformValid = true;
                    if (curveData && downstream) {
                      mat = Mat4.multiply(m4_1$2, curveData[f], downstream);
                    } else if (curveData) {
                      mat = curveData[f];
                    } else if (downstream) {
                      mat = downstream;
                    } else {
                      mat = skeleton.inverseBindposes[bindposeIdx];
                      transformValid = false;
                    }
                    const boneSpaceBound = boneSpaceBounds[j];
                    if (boneSpaceBound) {
                      const transform = bindposeCorrection ? Mat4.multiply(m4_2$2, mat, bindposeCorrection) : mat;
                      AABB.transform(ab_1, boneSpaceBound, transform);
                      ab_1.getBoundary(v3_3, v3_4);
                      Vec3.min(bound.center, bound.center, v3_3);
                      Vec3.max(bound.halfExtents, bound.halfExtents, v3_4);
                    }
                    if (buildTexture) {
                      if (transformValid) {
                        Mat4.multiply(m4_1$2, mat, bindposes[bindposeIdx]);
                      }
                      uploadJointData(textureBuffer, offset, transformValid ? m4_1$2 : Mat4.IDENTITY);
                    }
                  }
                  AABB.fromPoints(bound, bound.center, bound.halfExtents);
                }
                if (buildTexture) {
                  this._pool.update(texture.handle, textureBuffer.buffer);
                  this._textureBuffers.set(hash, texture);
                }
                return texture;
              }
              releaseHandle(handle) {
                if (handle.refCount > 0) {
                  handle.refCount--;
                }
                if (!handle.refCount && handle.readyToBeDeleted) {
                  const hash = handle.skeletonHash ^ handle.clipHash;
                  const customChunkIdx = this._chunkIdxMap.get(hash);
                  (customChunkIdx !== undefined ? this._customPool : this._pool).free(handle.handle);
                  if (this._textureBuffers.get(hash) === handle) {
                    this._textureBuffers.delete(hash);
                  }
                }
              }
              releaseSkeleton(skeleton) {
                const it = this._textureBuffers.values();
                let res = it.next();
                while (!res.done) {
                  const handle = res.value;
                  if (handle.skeletonHash === skeleton.hash) {
                    handle.readyToBeDeleted = true;
                    if (handle.refCount) {
                      this._textureBuffers.delete(handle.skeletonHash ^ handle.clipHash);
                    } else {
                      this.releaseHandle(handle);
                    }
                  }
                  res = it.next();
                }
              }
              releaseAnimationClip(clip) {
                const it = this._textureBuffers.values();
                let res = it.next();
                while (!res.done) {
                  const handle = res.value;
                  if (handle.clipHash === clip.hash) {
                    handle.readyToBeDeleted = true;
                    if (handle.refCount) {
                      this._textureBuffers.delete(handle.skeletonHash ^ handle.clipHash);
                    } else {
                      this.releaseHandle(handle);
                    }
                  }
                  res = it.next();
                }
              }
              _createAnimInfos(skeleton, clip, skinningRoot) {
                const animInfos = [];
                const {
                  joints,
                  bindposes
                } = skeleton;
                const jointCount = joints.length;
                const clipData = SkelAnimDataHub.getOrExtract(clip);
                for (let j = 0; j < jointCount; j++) {
                  let animPath = joints[j];
                  let source = clipData.joints[animPath];
                  let animNode = skinningRoot.getChildByPath(animPath);
                  let downstream;
                  let correctionPath;
                  while (!source) {
                    const idx = animPath.lastIndexOf('/');
                    animPath = animPath.substring(0, idx);
                    source = clipData.joints[animPath];
                    if (animNode) {
                      if (!downstream) {
                        downstream = new Mat4();
                      }
                      Mat4.fromRTS(m4_1$2, animNode.rotation, animNode.position, animNode.scale);
                      Mat4.multiply(downstream, m4_1$2, downstream);
                      animNode = animNode.parent;
                    } else {
                      correctionPath = animPath;
                    }
                    if (idx < 0) {
                      break;
                    }
                  }
                  let bindposeIdx = j;
                  let bindposeCorrection;
                  if (correctionPath !== undefined && source) {
                    bindposeIdx = j - 1;
                    for (let t = 0; t < jointCount; t++) {
                      if (joints[t] === correctionPath) {
                        bindposeIdx = t;
                        bindposeCorrection = new Mat4();
                        Mat4.multiply(bindposeCorrection, bindposes[t], skeleton.inverseBindposes[j]);
                        break;
                      }
                    }
                  }
                  animInfos.push({
                    curveData: source && source.transforms,
                    downstream,
                    bindposeIdx,
                    bindposeCorrection
                  });
                }
                return animInfos;
              }
            }
            class JointAnimationInfo {
              constructor(device) {
                this._pool = new Map();
                this._device = void 0;
                this._device = device;
              }
              getData(nodeID = '-1') {
                const res = this._pool.get(nodeID);
                if (res) {
                  return res;
                }
                const buffer = this._device.createBuffer(new BufferInfo(BufferUsageBit.UNIFORM | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.HOST | MemoryUsageBit.DEVICE, UBOSkinningAnimation.SIZE, UBOSkinningAnimation.SIZE));
                const data = new Float32Array([0, 0, 0, 0]);
                buffer.update(data);
                const info = {
                  buffer,
                  data,
                  dirty: false,
                  dirtyForJSB: new Uint8Array([0]),
                  currentClip: null
                };
                this._pool.set(nodeID, info);
                return info;
              }
              destroy(nodeID) {
                const info = this._pool.get(nodeID);
                if (!info) {
                  return;
                }
                info.buffer.destroy();
                this._pool.delete(nodeID);
              }
              switchClip(info, clip) {
                info.currentClip = clip;
                info.data[0] = 0;
                info.buffer.update(info.data);
                info.dirty = false;
                {
                  info.dirtyForJSB[0] = 0;
                }
                return info;
              }
              clear() {
                for (const info of this._pool.values()) {
                  info.buffer.destroy();
                }
                this._pool.clear();
              }
            }

            class DataPoolManager {
              constructor(device) {
                this.jointTexturePool = void 0;
                this.jointAnimationInfo = void 0;
                this.jointTexturePool = new JointTexturePool(device);
                this.jointAnimationInfo = new JointAnimationInfo(device);
              }
              releaseSkeleton(skeleton) {
                this.jointTexturePool.releaseSkeleton(skeleton);
              }
              releaseAnimationClip(clip) {
                this.jointTexturePool.releaseAnimationClip(clip);
              }
              clear() {
                this.jointTexturePool.clear();
                this.jointAnimationInfo.clear();
              }
            }
            legacyCC.internal.DataPoolManager = DataPoolManager;

            const m4_1$1 = new Mat4();
            const m4_2$1 = new Mat4();
            class SkeletalAnimationState extends AnimationState {
              constructor(clip, name = '') {
                super(clip, name);
                this._frames = 1;
                this._bakedDuration = 0;
                this._animInfo = null;
                this._sockets = [];
                this._animInfoMgr = void 0;
                this._parent = null;
                this._curvesInited = false;
                this._animInfoMgr = legacyCC.director.root.dataPoolManager.jointAnimationInfo;
              }
              initialize(root) {
                if (this._curveLoaded) {
                  return;
                }
                this._parent = root.getComponent('cc.SkeletalAnimation');
                const baked = this._parent.useBakedAnimation;
                this._doNotCreateEval = baked;
                super.initialize(root);
                this._curvesInited = !baked;
                const {
                  frames,
                  samples
                } = SkelAnimDataHub.getOrExtract(this.clip);
                this._frames = frames - 1;
                this._animInfo = this._animInfoMgr.getData(root.uuid);
                this._bakedDuration = this._frames / samples;
                this.setUseBaked(baked);
              }
              onPlay() {
                super.onPlay();
                const baked = this._parent.useBakedAnimation;
                if (baked) {
                  this._animInfoMgr.switchClip(this._animInfo, this.clip);
                  const users = this._parent.getUsers();
                  users.forEach(user => {
                    user.uploadAnimation(this.clip);
                  });
                }
              }
              setUseBaked(useBaked) {
                if (useBaked) {
                  this._sampleCurves = this._sampleCurvesBaked;
                  this.duration = this._bakedDuration;
                } else {
                  this._sampleCurves = super._sampleCurves;
                  this.duration = this.clip.duration;
                  if (!this._curvesInited) {
                    this._curveLoaded = false;
                    super.initialize(this._targetNode);
                    this._curvesInited = true;
                  }
                }
              }
              rebuildSocketCurves(sockets) {
                this._sockets.length = 0;
                if (!this._targetNode) {
                  return;
                }
                const root = this._targetNode;
                for (let i = 0; i < sockets.length; ++i) {
                  const socket = sockets[i];
                  const targetNode = root.getChildByPath(socket.path);
                  if (!socket.target) {
                    continue;
                  }
                  const clipData = SkelAnimDataHub.getOrExtract(this.clip);
                  let animPath = socket.path;
                  let source = clipData.joints[animPath];
                  let animNode = targetNode;
                  let downstream;
                  while (!source) {
                    const idx = animPath.lastIndexOf('/');
                    animPath = animPath.substring(0, idx);
                    source = clipData.joints[animPath];
                    if (animNode) {
                      if (!downstream) {
                        downstream = Mat4.identity(m4_2$1);
                      }
                      Mat4.fromRTS(m4_1$1, animNode.rotation, animNode.position, animNode.scale);
                      Mat4.multiply(downstream, m4_1$1, downstream);
                      animNode = animNode.parent;
                    }
                    if (idx < 0) {
                      break;
                    }
                  }
                  const curveData = source && source.transforms;
                  const {
                    frames
                  } = clipData;
                  const transforms = [];
                  for (let f = 0; f < frames; f++) {
                    let mat;
                    if (curveData && downstream) {
                      mat = Mat4.multiply(m4_1$1, curveData[f], downstream);
                    } else if (curveData) {
                      mat = curveData[f];
                    } else if (downstream) {
                      mat = downstream;
                    } else {
                      mat = new Mat4();
                    }
                    const tfm = {
                      pos: new Vec3(),
                      rot: new Quat(),
                      scale: new Vec3()
                    };
                    Mat4.toRTS(mat, tfm.rot, tfm.pos, tfm.scale);
                    transforms.push(tfm);
                  }
                  this._sockets.push({
                    target: socket.target,
                    frames: transforms
                  });
                }
              }
              _sampleCurvesBaked(time) {
                const ratio = time / this.duration;
                const info = this._animInfo;
                const clip = this.clip;
                if (info.currentClip !== clip) {
                  this._animInfoMgr.switchClip(this._animInfo, clip);
                  const users = this._parent.getUsers();
                  users.forEach(user => {
                    user.uploadAnimation(clip);
                  });
                  info.data[0] = -1;
                }
                const curFrame = ratio * this._frames + 0.5 | 0;
                if (curFrame === info.data[0]) {
                  return;
                }
                info.data[0] = curFrame;
                info.dirty = true;
                {
                  info.dirtyForJSB[0] = 1;
                }
                for (let i = 0; i < this._sockets.length; ++i) {
                  const {
                    target,
                    frames
                  } = this._sockets[i];
                  const {
                    pos,
                    rot,
                    scale
                  } = frames[curFrame];
                  target.setRTS(rot, pos, scale);
                }
              }
            } exports('SkeletalAnimationState', SkeletalAnimationState);

            var _dec, _dec2, _class, _class2, _initializer, _initializer2, _dec3, _dec4, _dec5, _dec6, _class4, _class5, _initializer3, _initializer4, _class6;
            let Socket = exports('Socket', (_dec = ccclass('cc.SkeletalAnimation.Socket'), _dec2 = type(Node), _dec(_class = (_class2 = class Socket {
              constructor(path = '', target = null) {
                this.path = _initializer && _initializer();
                this.target = _initializer2 && _initializer2();
                this.path = path;
                this.target = target;
              }
            }, (_initializer = applyDecoratedInitializer(_class2.prototype, "path", [serializable], function () {
              return '';
            }), _initializer2 = applyDecoratedInitializer(_class2.prototype, "target", [_dec2], function () {
              return null;
            })), _class2)) || _class));
            setClassAlias(Socket, 'cc.SkeletalAnimationComponent.Socket');
            const m4_1 = new Mat4();
            const m4_2 = new Mat4();
            function collectRecursively(node, prefix = '', out = []) {
              for (let i = 0; i < node.children.length; i++) {
                const child = node.children[i];
                if (!child) {
                  continue;
                }
                const path = prefix ? `${prefix}/${child.name}` : child.name;
                out.push(path);
                collectRecursively(child, path, out);
              }
              return out;
            }
            let SkeletalAnimation = (_dec3 = ccclass('cc.SkeletalAnimation'), _dec4 = executionOrder(99), _dec5 = type([Socket]), _dec6 = type([Socket]), _dec3(_class4 = _dec4(_class4 = (_class5 = (_class6 = class SkeletalAnimation extends Animation {
              constructor(...args) {
                super(...args);
                this._useBakedAnimation = _initializer3 && _initializer3();
                this._sockets = _initializer4 && _initializer4();
                this._users = new Set();
                this._currentBakedState = null;
              }
              get sockets() {
                return this._sockets;
              }
              set sockets(val) {
                if (!this._useBakedEffectively) {
                  const animMgr = getGlobalAnimationManager();
                  animMgr.removeSockets(this.node, this._sockets);
                  animMgr.addSockets(this.node, val);
                }
                this._sockets = val;
                this.rebuildSocketAnimations();
              }
              get useBakedAnimation() {
                return this._useBakedAnimation;
              }
              set useBakedAnimation(value) {
                this._useBakedAnimation = value;
                this._applyBakeFlagChange();
              }
              onLoad() {
                super.onLoad();
                const comps = this.node.getComponentsInChildren(SkinnedMeshRenderer);
                for (let i = 0; i < comps.length; ++i) {
                  const comp = comps[i];
                  if (comp.skinningRoot === this.node) {
                    this.notifySkinnedMeshAdded(comp);
                  }
                }
              }
              onDestroy() {
                super.onDestroy();
                legacyCC.director.root.dataPoolManager.jointAnimationInfo.destroy(this.node.uuid);
                getGlobalAnimationManager().removeSockets(this.node, this._sockets);
                this._removeAllUsers();
              }
              onEnable() {
                var _this$_currentBakedSt;
                super.onEnable();
                (_this$_currentBakedSt = this._currentBakedState) === null || _this$_currentBakedSt === void 0 ? void 0 : _this$_currentBakedSt.resume();
              }
              onDisable() {
                var _this$_currentBakedSt2;
                super.onDisable();
                (_this$_currentBakedSt2 = this._currentBakedState) === null || _this$_currentBakedSt2 === void 0 ? void 0 : _this$_currentBakedSt2.pause();
              }
              start() {
                this.sockets = this._sockets;
                this._applyBakeFlagChange();
                super.start();
              }
              pause() {
                if (!this._useBakedEffectively) {
                  super.pause();
                } else {
                  var _this$_currentBakedSt3;
                  (_this$_currentBakedSt3 = this._currentBakedState) === null || _this$_currentBakedSt3 === void 0 ? void 0 : _this$_currentBakedSt3.pause();
                }
              }
              resume() {
                if (!this._useBakedEffectively) {
                  super.resume();
                } else {
                  var _this$_currentBakedSt4;
                  (_this$_currentBakedSt4 = this._currentBakedState) === null || _this$_currentBakedSt4 === void 0 ? void 0 : _this$_currentBakedSt4.resume();
                }
              }
              stop() {
                if (!this._useBakedEffectively) {
                  super.stop();
                } else if (this._currentBakedState) {
                  this._currentBakedState.stop();
                  this._currentBakedState = null;
                }
              }
              querySockets() {
                const animPaths = this._defaultClip && Object.keys(SkelAnimDataHub.getOrExtract(this._defaultClip).joints).sort().reduce((acc, cur) => cur.startsWith(`${acc[acc.length - 1]}/`) ? acc : (acc.push(cur), acc), []) || [];
                if (!animPaths.length) {
                  return ['please specify a valid default animation clip first'];
                }
                const out = [];
                for (let i = 0; i < animPaths.length; i++) {
                  const path = animPaths[i];
                  const node = this.node.getChildByPath(path);
                  if (!node) {
                    continue;
                  }
                  out.push(path);
                  collectRecursively(node, path, out);
                }
                return out;
              }
              rebuildSocketAnimations() {
                for (const socket of this._sockets) {
                  const joint = this.node.getChildByPath(socket.path);
                  const {
                    target
                  } = socket;
                  if (joint && target) {
                    target.name = `${socket.path.substring(socket.path.lastIndexOf('/') + 1)} Socket`;
                    target.parent = this.node;
                    getWorldTransformUntilRoot(joint, this.node, m4_1);
                    Mat4.fromRTS(m4_2, target.rotation, target.position, target.scale);
                    if (!Mat4.equals(m4_2, m4_1)) {
                      target.matrix = m4_1;
                    }
                  }
                }
                for (const stateName of Object.keys(this._nameToState)) {
                  const state = this._nameToState[stateName];
                  state.rebuildSocketCurves(this._sockets);
                }
              }
              createSocket(path) {
                const socket = this._sockets.find(s => s.path === path);
                if (socket) {
                  return socket.target;
                }
                const joint = this.node.getChildByPath(path);
                if (!joint) {
                  warn('illegal socket path');
                  return null;
                }
                const target = new Node();
                target.parent = this.node;
                this._sockets.push(new Socket(path, target));
                this.rebuildSocketAnimations();
                return target;
              }
              notifySkinnedMeshAdded(skinnedMeshRenderer) {
                const {
                  _useBakedEffectively
                } = this;
                const formerBound = skinnedMeshRenderer.associatedAnimation;
                if (formerBound) {
                  formerBound._users.delete(skinnedMeshRenderer);
                }
                skinnedMeshRenderer.associatedAnimation = this;
                skinnedMeshRenderer.setUseBakedAnimation(_useBakedEffectively, true);
                if (_useBakedEffectively) {
                  const {
                    _currentBakedState: playingState
                  } = this;
                  if (playingState) {
                    skinnedMeshRenderer.uploadAnimation(playingState.clip);
                  }
                }
                this._users.add(skinnedMeshRenderer);
              }
              notifySkinnedMeshRemoved(skinnedMeshRenderer) {
                assertIsTrue(skinnedMeshRenderer.associatedAnimation === this || skinnedMeshRenderer.associatedAnimation === null);
                skinnedMeshRenderer.setUseBakedAnimation(false);
                skinnedMeshRenderer.associatedAnimation = null;
                this._users.delete(skinnedMeshRenderer);
              }
              getUsers() {
                return this._users;
              }
              _createState(clip, name) {
                return new SkeletalAnimationState(clip, name);
              }
              _doCreateState(clip, name) {
                const state = super._doCreateState(clip, name);
                state.rebuildSocketCurves(this._sockets);
                return state;
              }
              doPlayOrCrossFade(state, duration) {
                if (this._useBakedEffectively) {
                  if (this._currentBakedState) {
                    this._currentBakedState.stop();
                  }
                  const skeletalAnimationState = state;
                  this._currentBakedState = skeletalAnimationState;
                  skeletalAnimationState.play();
                } else {
                  super.doPlayOrCrossFade(state, duration);
                }
              }
              _removeAllUsers() {
                Array.from(this._users).forEach(user => {
                  this.notifySkinnedMeshRemoved(user);
                });
              }
              get _useBakedEffectively() {
                {
                  return this._useBakedAnimation;
                }
              }
              _applyBakeFlagChange() {
                const useBakedEffectively = this._useBakedEffectively;
                for (const stateName in this._nameToState) {
                  const state = this._nameToState[stateName];
                  state.setUseBaked(useBakedEffectively);
                }
                this._users.forEach(user => {
                  user.setUseBakedAnimation(useBakedEffectively);
                });
                if (useBakedEffectively) {
                  getGlobalAnimationManager().removeSockets(this.node, this._sockets);
                } else {
                  getGlobalAnimationManager().addSockets(this.node, this._sockets);
                  this._currentBakedState = null;
                }
              }
            }, _class6.Socket = Socket, _class6), (_applyDecoratedDescriptor(_class5.prototype, "sockets", [_dec5], Object.getOwnPropertyDescriptor(_class5.prototype, "sockets"), _class5.prototype), _initializer3 = applyDecoratedInitializer(_class5.prototype, "_useBakedAnimation", [serializable], function () {
              return true;
            }), _initializer4 = applyDecoratedInitializer(_class5.prototype, "_sockets", [_dec6], function () {
              return [];
            })), _class5)) || _class4) || _class4); exports({ SkeletalAnimation: SkeletalAnimation, SkeletalAnimationComponent: SkeletalAnimation });

            legacyCC.SkeletalAnimationComponent = SkeletalAnimation;
            setClassAlias(SkeletalAnimation, 'cc.SkeletalAnimationComponent');

        })
    };
}));

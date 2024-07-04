System.register(['./index-ce98320e.js', './builtin-res-mgr.jsb-c9e8e53a.js', './scene-asset.jsb-0d4c6201.js'], (function (exports) {
    'use strict';
    var removeProperty, replaceProperty, TextureBase, RenderTexture;
    return {
        setters: [function (module) {
            removeProperty = module.ah;
            replaceProperty = module.ag;
        }, function (module) {
            TextureBase = module.aQ;
        }, function (module) {
            RenderTexture = module.R;
        }],
        execute: (function () {

            removeProperty(TextureBase.prototype, 'TextureBase.prototype', [{
              name: 'hasPremultipliedAlpha'
            }, {
              name: 'setPremultiplyAlpha'
            }, {
              name: 'setFlipY'
            }]);
            replaceProperty(RenderTexture.prototype, 'RenderTexture.prototype', [{
              name: 'getGFXWindow',
              customFunction() {
                return this.window;
              }
            }]);

            const RenderingSubMesh = exports('R', jsb.RenderingSubMesh);
            const renderingSubMeshProto = RenderingSubMesh.prototype;
            renderingSubMeshProto._ctor = function (vertexBuffers, attributes, primitiveMode, indexBuffer = null, indirectBuffer = null) {
              jsb.Asset.prototype._ctor.apply(this, arguments);
              this._attributes = attributes;
              this._vertexBuffers = vertexBuffers;
              this._indexBuffer = indexBuffer;
              this._indirectBuffer = indirectBuffer;
            };
            Object.defineProperty(renderingSubMeshProto, 'geometricInfo', {
              configurable: true,
              enumerable: true,
              get() {
                let r = this.getGeometricInfo();
                if (!r.positions && !r.indices) {
                  r.positions = new Float32Array();
                  r.indices = new Uint8Array();
                }
                return r;
              }
            });
            Object.defineProperty(renderingSubMeshProto, 'attributes', {
              configurable: true,
              enumerable: true,
              get() {
                if (!this._attributes) {
                  this._attributes = this.getAttributes();
                }
                return this._attributes;
              }
            });
            Object.defineProperty(renderingSubMeshProto, 'vertexBuffers', {
              configurable: true,
              enumerable: true,
              get() {
                if (!this._vertexBuffers) {
                  this._vertexBuffers = this.getVertexBuffers();
                }
                return this._vertexBuffers;
              }
            });
            Object.defineProperty(renderingSubMeshProto, 'indexBuffer', {
              configurable: true,
              enumerable: true,
              get() {
                if (!this._indexBuffer) {
                  this._indexBuffer = this.getIndexBuffer();
                }
                return this._indexBuffer;
              }
            });
            Object.defineProperty(renderingSubMeshProto, 'indirectBuffer', {
              configurable: true,
              enumerable: true,
              get() {
                if (!this._indirectBuffer) {
                  this._indirectBuffer = this.getIndexBuffer();
                }
                return this._indirectBuffer;
              }
            });

        })
    };
}));

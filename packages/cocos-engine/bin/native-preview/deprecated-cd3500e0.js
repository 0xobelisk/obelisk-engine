System.register(['./node-event-18d96a1b.js', './index-ce98320e.js', './builtin-res-mgr.jsb-c9e8e53a.js', './director-dc238483.js', './sprite-renderer-9a6a919d.js', './find-7a03d1cc.js', './deprecated-80961f27.js', './renderer-3bf7a012.js', './rendering-sub-mesh.jsb-25043997.js', './scene-asset.jsb-0d4c6201.js', './device-90bc7390.js', './sprite-5c924512.js', './deprecated-f8df8d32.js'], (function (exports) {
    'use strict';
    var _applyDecoratedDescriptor, Component, NodeEventType, ccenum, Color, Vec2, ccclass, type, override, applyDecoratedInitializer, legacyCC, executionOrder, warnID, serializable, Mat4, clamp, error, Vec3, assertIsTrue, requireComponent, Pool, assert, CCObject, warn, disallowMultiple, clampf, setClassAlias, replaceProperty, markAsWarning, builtinResMgr, NodeEventProcessor, Node, RenderPriority, Layers, uiRendererManager, director, MeshRenderData, RenderDrawInfoType, vfmtPosColor, getComponentPerVertex, getAttributeStride, UIRenderer, InstanceMaterialType, NativeUIModelProxy, RenderEntity, RenderEntityType, Stage, MaskMode, UITransform, deviceManager, Pass, RenderingSubMesh, Attribute, Format, BufferInfo, BufferUsageBit, MemoryUsageBit, PrimitiveMode, Sprite, Label, HorizontalTextAlignment, VerticalTextAlignment, Font, CacheMode, SpriteAtlas, TTFFont, getEnglishWordPartAtFirst, getEnglishWordPartAtLast, fragmentText, BASELINE_RATIO, getSymbolAt, isUnicodeCJK, isUnicodeSpace;
    return {
        setters: [function (module) {
            _applyDecoratedDescriptor = module.H;
            Component = module.C;
            NodeEventType = module.N;
        }, function (module) {
            ccenum = module.ab;
            Color = module.C;
            Vec2 = module.V;
            ccclass = module.by;
            type = module.bw;
            override = module.bd;
            applyDecoratedInitializer = module.bx;
            legacyCC = module.l;
            executionOrder = module.cs;
            warnID = module.d;
            serializable = module.bf;
            Mat4 = module.s;
            clamp = module.F;
            error = module.e;
            Vec3 = module.n;
            assertIsTrue = module.bu;
            requireComponent = module.cC;
            Pool = module.bP;
            assert = module.b;
            CCObject = module.as;
            warn = module.w;
            disallowMultiple = module.ck;
            clampf = module.cD;
            setClassAlias = module.cj;
            replaceProperty = module.ag;
            markAsWarning = module.ai;
        }, function (module) {
            builtinResMgr = module.at;
            NodeEventProcessor = module.aX;
            Node = module.Q;
            RenderPriority = module.a$;
            Layers = module.V;
        }, function (module) {
            uiRendererManager = module.p;
            director = module.n;
        }, function (module) {
            MeshRenderData = module.f;
            RenderDrawInfoType = module.n;
            vfmtPosColor = module.o;
            getComponentPerVertex = module.p;
            getAttributeStride = module.j;
            UIRenderer = module.b;
            InstanceMaterialType = module.I;
            NativeUIModelProxy = module.N;
            RenderEntity = module.q;
            RenderEntityType = module.r;
            Stage = module.l;
            MaskMode = module.s;
            UITransform = module.c;
        }, function (module) {
            deviceManager = module.d;
        }, function (module) {
            Pass = module.P;
        }, function () {}, function (module) {
            RenderingSubMesh = module.R;
        }, function () {}, function (module) {
            Attribute = module.ao;
            Format = module.b;
            BufferInfo = module.a7;
            BufferUsageBit = module.B;
            MemoryUsageBit = module.e;
            PrimitiveMode = module.u;
        }, function (module) {
            Sprite = module.a;
            Label = module.b;
            HorizontalTextAlignment = module.H;
            VerticalTextAlignment = module.V;
            Font = module.F;
            CacheMode = module.C;
            SpriteAtlas = module.S;
            TTFFont = module.T;
            getEnglishWordPartAtFirst = module.m;
            getEnglishWordPartAtLast = module.n;
            fragmentText = module.o;
            BASELINE_RATIO = module.c;
            getSymbolAt = module.h;
            isUnicodeCJK = module.i;
            isUnicodeSpace = module.e;
        }, function () {}],
        execute: (function () {

            const eventRegx = /^(click)(\s)*=|(param)(\s)*=/;
            const imageAttrReg = /(\s)*src(\s)*=|(\s)*height(\s)*=|(\s)*width(\s)*=|(\s)*align(\s)*=|(\s)*offset(\s)*=|(\s)*click(\s)*=|(\s)*param(\s)*=/;
            class HtmlTextParser {
              constructor() {
                this._specialSymbolArray = [];
                this._stack = [];
                this._resultObjectArray = [];
                this._specialSymbolArray.push([/&lt;/g, '<']);
                this._specialSymbolArray.push([/&gt;/g, '>']);
                this._specialSymbolArray.push([/&amp;/g, '&']);
                this._specialSymbolArray.push([/&quot;/g, '"']);
                this._specialSymbolArray.push([/&apos;/g, '\'']);
              }
              parse(htmlString) {
                this._resultObjectArray.length = 0;
                this._stack.length = 0;
                let startIndex = 0;
                const length = htmlString.length;
                while (startIndex < length) {
                  let tagEndIndex = htmlString.indexOf('>', startIndex);
                  let tagBeginIndex = -1;
                  if (tagEndIndex >= 0) {
                    tagBeginIndex = htmlString.lastIndexOf('<', tagEndIndex);
                    const noTagBegin = tagBeginIndex < startIndex - 1;
                    if (noTagBegin) {
                      tagBeginIndex = htmlString.indexOf('<', tagEndIndex + 1);
                      tagEndIndex = htmlString.indexOf('>', tagBeginIndex + 1);
                    }
                  }
                  if (tagBeginIndex < 0) {
                    this._stack.pop();
                    this._processResult(htmlString.substring(startIndex));
                    startIndex = length;
                  } else {
                    let newStr = htmlString.substring(startIndex, tagBeginIndex);
                    const tagStr = htmlString.substring(tagBeginIndex + 1, tagEndIndex);
                    if (tagStr === '') newStr = htmlString.substring(startIndex, tagEndIndex + 1);
                    this._processResult(newStr);
                    if (tagEndIndex === -1) {
                      tagEndIndex = tagBeginIndex;
                    } else if (htmlString.charAt(tagBeginIndex + 1) === '/') {
                      this._stack.pop();
                    } else {
                      this._addToStack(tagStr);
                    }
                    startIndex = tagEndIndex + 1;
                  }
                }
                return this._resultObjectArray;
              }
              _attributeToObject(attribute) {
                attribute = attribute.trim();
                const obj = {};
                let header = /^(color|size)(\s)*=/.exec(attribute);
                let tagName = '';
                let nextSpace = 0;
                let eventHandlerString = '';
                if (header) {
                  tagName = header[0];
                  attribute = attribute.substring(tagName.length).trim();
                  if (attribute === '') {
                    return obj;
                  }
                  nextSpace = attribute.indexOf(' ');
                  switch (tagName[0]) {
                    case 'c':
                      if (nextSpace > -1) {
                        obj.color = attribute.substring(0, nextSpace).trim();
                      } else {
                        obj.color = attribute;
                      }
                      break;
                    case 's':
                      obj.size = parseInt(attribute);
                      break;
                  }
                  if (nextSpace > -1) {
                    eventHandlerString = attribute.substring(nextSpace + 1).trim();
                    obj.event = this._processEventHandler(eventHandlerString);
                  }
                  return obj;
                }
                header = /^(br(\s)*\/)/.exec(attribute);
                if (header && header[0].length > 0) {
                  tagName = header[0].trim();
                  if (tagName.startsWith('br') && tagName[tagName.length - 1] === '/') {
                    obj.isNewLine = true;
                    this._resultObjectArray.push({
                      text: '',
                      style: {
                        isNewLine: true
                      }
                    });
                    return obj;
                  }
                }
                header = /^(img(\s)*src(\s)*=[^>]+\/)/.exec(attribute);
                let remainingArgument = '';
                let rightQuot = -1;
                if (header && header[0].length > 0) {
                  tagName = header[0].trim();
                  if (tagName.startsWith('img') && tagName[tagName.length - 1] === '/') {
                    header = imageAttrReg.exec(attribute);
                    let tagValue;
                    let isValidImageTag = false;
                    while (header) {
                      attribute = attribute.substring(attribute.indexOf(header[0]));
                      tagName = attribute.substr(0, header[0].length);
                      const originTagNameLength = tagName.length;
                      tagName = tagName.replace(/[^a-zA-Z]/g, '').trim();
                      tagName = tagName.toLowerCase();
                      remainingArgument = attribute.substring(originTagNameLength).trim();
                      if (tagName === 'src') {
                        rightQuot = this.getRightQuotationIndex(remainingArgument);
                      } else {
                        rightQuot = -1;
                      }
                      nextSpace = remainingArgument.indexOf(' ', rightQuot + 1 >= remainingArgument.length ? -1 : rightQuot + 1);
                      tagValue = nextSpace > -1 ? remainingArgument.substr(0, nextSpace) : remainingArgument;
                      attribute = remainingArgument.substring(nextSpace).trim();
                      if (tagValue.endsWith('/')) {
                        tagValue = tagValue.slice(0, -1);
                      }
                      if (tagName === 'src') {
                        switch (tagValue.charCodeAt(0)) {
                          case 34:
                          case 39:
                            isValidImageTag = true;
                            tagValue = tagValue.slice(1, -1);
                            break;
                        }
                        obj.isImage = true;
                        obj.src = tagValue;
                      } else if (tagName === 'height') {
                        obj.imageHeight = parseInt(tagValue);
                      } else if (tagName === 'width') {
                        obj.imageWidth = parseInt(tagValue);
                      } else if (tagName === 'align') {
                        switch (tagValue.charCodeAt(0)) {
                          case 34:
                          case 39:
                            tagValue = tagValue.slice(1, -1);
                            break;
                        }
                        obj.imageAlign = tagValue.toLowerCase();
                      } else if (tagName === 'offset') {
                        obj.imageOffset = tagValue;
                      } else if (tagName === 'click') {
                        obj.event = this._processEventHandler(`${tagName}=${tagValue}`);
                      }
                      if (obj.event && tagName === 'param') {
                        obj.event[tagName] = tagValue.replace(/^"|"$/g, '');
                      }
                      header = imageAttrReg.exec(attribute);
                    }
                    if (isValidImageTag && obj.isImage) {
                      this._resultObjectArray.push({
                        text: '',
                        style: obj
                      });
                    }
                    return {};
                  }
                }
                header = /^(outline(\s)*[^>]*)/.exec(attribute);
                if (header) {
                  attribute = header[0].substring('outline'.length).trim();
                  const defaultOutlineObject = {
                    color: '#ffffff',
                    width: 1
                  };
                  if (attribute) {
                    const outlineAttrReg = /(\s)*color(\s)*=|(\s)*width(\s)*=|(\s)*click(\s)*=|(\s)*param(\s)*=/;
                    header = outlineAttrReg.exec(attribute);
                    let tagValue;
                    while (header) {
                      attribute = attribute.substring(attribute.indexOf(header[0]));
                      tagName = attribute.substr(0, header[0].length);
                      remainingArgument = attribute.substring(tagName.length).trim();
                      nextSpace = remainingArgument.indexOf(' ');
                      if (nextSpace > -1) {
                        tagValue = remainingArgument.substr(0, nextSpace);
                      } else {
                        tagValue = remainingArgument;
                      }
                      tagName = tagName.replace(/[^a-zA-Z]/g, '').trim();
                      tagName = tagName.toLowerCase();
                      attribute = remainingArgument.substring(nextSpace).trim();
                      if (tagName === 'click') {
                        obj.event = this._processEventHandler(`${tagName}=${tagValue}`);
                      } else if (tagName === 'color') {
                        defaultOutlineObject.color = tagValue;
                      } else if (tagName === 'width') {
                        defaultOutlineObject.width = parseInt(tagValue);
                      }
                      if (obj.event && tagName === 'param') {
                        obj.event[tagName] = tagValue.replace(/^"|"$/g, '');
                      }
                      header = outlineAttrReg.exec(attribute);
                    }
                  }
                  obj.outline = defaultOutlineObject;
                }
                header = /^(on|u|b|i)(\s)*/.exec(attribute);
                if (header && header[0].length > 0) {
                  tagName = header[0];
                  attribute = attribute.substring(tagName.length).trim();
                  switch (tagName[0]) {
                    case 'u':
                      obj.underline = true;
                      break;
                    case 'i':
                      obj.italic = true;
                      break;
                    case 'b':
                      obj.bold = true;
                      break;
                  }
                  if (attribute === '') {
                    return obj;
                  }
                  obj.event = this._processEventHandler(attribute);
                }
                return obj;
              }
              getRightQuotationIndex(remainingArgument) {
                let leftQuot = -1;
                let rightQuot = -1;
                const leftSingleQuot = remainingArgument.indexOf('\'');
                const leftDoubleQuot = remainingArgument.indexOf('"');
                const useSingleQuot = leftSingleQuot > -1 && (leftSingleQuot < leftDoubleQuot || leftDoubleQuot === -1);
                const useDoubleQuot = leftDoubleQuot > -1 && (leftDoubleQuot < leftSingleQuot || leftSingleQuot === -1);
                if (useSingleQuot) {
                  leftQuot = leftSingleQuot;
                  rightQuot = remainingArgument.indexOf('\'', leftQuot + 1 >= remainingArgument.length ? -1 : leftQuot + 1);
                } else if (useDoubleQuot) {
                  leftQuot = leftDoubleQuot;
                  rightQuot = remainingArgument.indexOf('"', leftQuot + 1 >= remainingArgument.length ? -1 : leftQuot + 1);
                }
                return rightQuot;
              }
              _processEventHandler(eventString) {
                const obj = {};
                let index = 0;
                let isValidTag = false;
                let eventNames = eventRegx.exec(eventString);
                while (eventNames) {
                  let eventName = eventNames[0];
                  let eventValue = '';
                  isValidTag = false;
                  eventString = eventString.substring(eventName.length).trim();
                  if (eventString.charAt(0) === '"') {
                    index = eventString.indexOf('"', 1);
                    if (index > -1) {
                      eventValue = eventString.substring(1, index).trim();
                      isValidTag = true;
                    }
                    index++;
                  } else if (eventString.charAt(0) === '\'') {
                    index = eventString.indexOf('\'', 1);
                    if (index > -1) {
                      eventValue = eventString.substring(1, index).trim();
                      isValidTag = true;
                    }
                    index++;
                  } else {
                    const match = /(\S)+/.exec(eventString);
                    if (match) {
                      eventValue = match[0];
                    } else {
                      eventValue = '';
                    }
                    index = eventValue.length;
                  }
                  if (isValidTag) {
                    eventName = eventName.substring(0, eventName.length - 1).trim();
                    obj[eventName] = eventValue;
                  }
                  eventString = eventString.substring(index).trim();
                  eventNames = eventRegx.exec(eventString);
                }
                return obj;
              }
              _addToStack(attribute) {
                const obj = this._attributeToObject(attribute);
                if (this._stack.length === 0) {
                  this._stack.push(obj);
                } else {
                  if (obj.isNewLine || obj.isImage) {
                    return;
                  }
                  const previousTagObj = this._stack[this._stack.length - 1];
                  for (const key in previousTagObj) {
                    if (!obj[key]) {
                      obj[key] = previousTagObj[key];
                    }
                  }
                  this._stack.push(obj);
                }
              }
              _processResult(value) {
                if (value.length === 0) {
                  return;
                }
                value = this._escapeSpecialSymbol(value);
                if (this._stack.length > 0) {
                  this._resultObjectArray.push({
                    text: value,
                    style: this._stack[this._stack.length - 1]
                  });
                } else {
                  this._resultObjectArray.push({
                    text: value
                  });
                }
              }
              _escapeSpecialSymbol(str) {
                for (const symbolArr of this._specialSymbolArray) {
                  const key = symbolArr[0];
                  const value = symbolArr[1];
                  str = str.replace(key, value);
                }
                return str;
              }
            } exports('H', HtmlTextParser);

            let LineCap; exports('e', LineCap);
            (function (LineCap) {
              LineCap[LineCap["BUTT"] = 0] = "BUTT";
              LineCap[LineCap["ROUND"] = 1] = "ROUND";
              LineCap[LineCap["SQUARE"] = 2] = "SQUARE";
            })(LineCap || (exports('e', LineCap = {})));
            ccenum(LineCap);
            let LineJoin; exports('d', LineJoin);
            (function (LineJoin) {
              LineJoin[LineJoin["BEVEL"] = 0] = "BEVEL";
              LineJoin[LineJoin["ROUND"] = 1] = "ROUND";
              LineJoin[LineJoin["MITER"] = 2] = "MITER";
            })(LineJoin || (exports('d', LineJoin = {})));
            ccenum(LineJoin);
            let PointFlags; exports('f', PointFlags);
            (function (PointFlags) {
              PointFlags[PointFlags["PT_CORNER"] = 1] = "PT_CORNER";
              PointFlags[PointFlags["PT_LEFT"] = 2] = "PT_LEFT";
              PointFlags[PointFlags["PT_BEVEL"] = 4] = "PT_BEVEL";
              PointFlags[PointFlags["PT_INNERBEVEL"] = 8] = "PT_INNERBEVEL";
            })(PointFlags || (exports('f', PointFlags = {})));
            ccenum(PointFlags);

            const PI = Math.PI;
            const min = Math.min;
            const max = Math.max;
            const cos = Math.cos;
            const sin = Math.sin;
            const abs = Math.abs;
            const sign = Math.sign;
            const KAPPA90 = 0.5522847493;
            function arc(ctx, cx, cy, r, startAngle, endAngle, counterclockwise) {
              counterclockwise = counterclockwise || false;
              let a = 0;
              let da = 0;
              let hda = 0;
              let kappa = 0;
              let dx = 0;
              let dy = 0;
              let x = 0;
              let y = 0;
              let tanx = 0;
              let tany = 0;
              let px = 0;
              let py = 0;
              let ptanx = 0;
              let ptany = 0;
              let i = 0;
              let ndivs = 0;
              da = endAngle - startAngle;
              if (counterclockwise) {
                if (abs(da) >= PI * 2) {
                  da = PI * 2;
                } else {
                  while (da < 0) {
                    da += PI * 2;
                  }
                }
              } else if (abs(da) >= PI * 2) {
                da = -PI * 2;
              } else {
                while (da > 0) {
                  da -= PI * 2;
                }
              }
              ndivs = max(1, min(abs(da) / (PI * 0.5) + 0.5, 5)) | 0;
              hda = da / ndivs / 2.0;
              kappa = abs(4.0 / 3.0 * (1 - cos(hda)) / sin(hda));
              if (!counterclockwise) {
                kappa = -kappa;
              }
              for (i = 0; i <= ndivs; i++) {
                a = startAngle + da * (i / ndivs);
                dx = cos(a);
                dy = sin(a);
                x = cx + dx * r;
                y = cy + dy * r;
                tanx = -dy * r * kappa;
                tany = dx * r * kappa;
                if (i === 0) {
                  ctx.moveTo(x, y);
                } else {
                  ctx.bezierCurveTo(px + ptanx, py + ptany, x - tanx, y - tany, x, y);
                }
                px = x;
                py = y;
                ptanx = tanx;
                ptany = tany;
              }
            }
            function ellipse(ctx, cx, cy, rx, ry) {
              ctx.moveTo(cx - rx, cy);
              ctx.bezierCurveTo(cx - rx, cy + ry * KAPPA90, cx - rx * KAPPA90, cy + ry, cx, cy + ry);
              ctx.bezierCurveTo(cx + rx * KAPPA90, cy + ry, cx + rx, cy + ry * KAPPA90, cx + rx, cy);
              ctx.bezierCurveTo(cx + rx, cy - ry * KAPPA90, cx + rx * KAPPA90, cy - ry, cx, cy - ry);
              ctx.bezierCurveTo(cx - rx * KAPPA90, cy - ry, cx - rx, cy - ry * KAPPA90, cx - rx, cy);
              ctx.close();
            }
            function roundRect(ctx, x, y, w, h, r) {
              if (r < 0.1) {
                ctx.rect(x, y, w, h);
              } else {
                const rx = min(r, abs(w) * 0.5) * sign(w);
                const ry = min(r, abs(h) * 0.5) * sign(h);
                ctx.moveTo(x, y + ry);
                ctx.lineTo(x, y + h - ry);
                ctx.bezierCurveTo(x, y + h - ry * (1 - KAPPA90), x + rx * (1 - KAPPA90), y + h, x + rx, y + h);
                ctx.lineTo(x + w - rx, y + h);
                ctx.bezierCurveTo(x + w - rx * (1 - KAPPA90), y + h, x + w, y + h - ry * (1 - KAPPA90), x + w, y + h - ry);
                ctx.lineTo(x + w, y + ry);
                ctx.bezierCurveTo(x + w, y + ry * (1 - KAPPA90), x + w - rx * (1 - KAPPA90), y, x + w - rx, y);
                ctx.lineTo(x + rx, y);
                ctx.bezierCurveTo(x + rx * (1 - KAPPA90), y, x, y + ry * (1 - KAPPA90), x, y + ry);
                ctx.close();
              }
            }
            function tesselateBezier(ctx, x1, y1, x2, y2, x3, y3, x4, y4, level, type) {
              let x12 = 0;
              let y12 = 0;
              let x23 = 0;
              let y23 = 0;
              let x34 = 0;
              let y34 = 0;
              let x123 = 0;
              let y123 = 0;
              let x234 = 0;
              let y234 = 0;
              let x1234 = 0;
              let y1234 = 0;
              let dx = 0;
              let dy = 0;
              let d2 = 0;
              let d3 = 0;
              if (level > 10) {
                return;
              }
              x12 = (x1 + x2) * 0.5;
              y12 = (y1 + y2) * 0.5;
              x23 = (x2 + x3) * 0.5;
              y23 = (y2 + y3) * 0.5;
              x34 = (x3 + x4) * 0.5;
              y34 = (y3 + y4) * 0.5;
              x123 = (x12 + x23) * 0.5;
              y123 = (y12 + y23) * 0.5;
              dx = x4 - x1;
              dy = y4 - y1;
              d2 = abs((x2 - x4) * dy - (y2 - y4) * dx);
              d3 = abs((x3 - x4) * dy - (y3 - y4) * dx);
              if ((d2 + d3) * (d2 + d3) < ctx.tessTol * (dx * dx + dy * dy)) {
                ctx.addPoint(x4, y4, type === 0 ? type | PointFlags.PT_BEVEL : type);
                return;
              }
              x234 = (x23 + x34) * 0.5;
              y234 = (y23 + y34) * 0.5;
              x1234 = (x123 + x234) * 0.5;
              y1234 = (y123 + y234) * 0.5;
              tesselateBezier(ctx, x1, y1, x12, y12, x123, y123, x1234, y1234, level + 1, 0);
              tesselateBezier(ctx, x1234, y1234, x234, y234, x34, y34, x4, y4, level + 1, type);
            }

            class Point extends Vec2 {
              constructor(...args) {
                super(...args);
                this.dx = 0;
                this.dy = 0;
                this.dmx = 0;
                this.dmy = 0;
                this.flags = 0;
                this.len = 0;
              }
              reset() {
                this.dx = 0;
                this.dy = 0;
                this.dmx = 0;
                this.dmy = 0;
                this.flags = 0;
                this.len = 0;
              }
            } exports('P', Point);
            class Path {
              constructor() {
                this.closed = false;
                this.bevel = 0;
                this.complex = true;
                this.points = [];
              }
              reset() {
                this.closed = false;
                this.bevel = 0;
                this.complex = true;
                this.points.length = 0;
              }
            }
            class Impl {
              constructor(comp) {
                this.dataOffset = 0;
                this.updatePathOffset = false;
                this.pathLength = 0;
                this.pathOffset = 0;
                this.paths = [];
                this.tessTol = 0.25;
                this.distTol = 0.01;
                this.fillColor = Color.WHITE.clone();
                this.lineCap = LineCap.BUTT;
                this.strokeColor = Color.BLACK.clone();
                this.lineJoin = LineJoin.MITER;
                this.lineWidth = 0;
                this.pointsOffset = 0;
                this._commandX = 0;
                this._commandY = 0;
                this._points = [];
                this._renderDataList = [];
                this._curPath = null;
                this._comp = void 0;
                this._comp = comp;
              }
              moveTo(x, y) {
                if (this.updatePathOffset) {
                  this.pathOffset = this.pathLength;
                  this.updatePathOffset = false;
                }
                this._addPath();
                this.addPoint(x, y, PointFlags.PT_CORNER);
                this._commandX = x;
                this._commandY = y;
              }
              lineTo(x, y) {
                this.addPoint(x, y, PointFlags.PT_CORNER);
                this._commandX = x;
                this._commandY = y;
              }
              bezierCurveTo(c1x, c1y, c2x, c2y, x, y) {
                const path = this._curPath;
                const last = path.points[path.points.length - 1];
                if (!last) {
                  return;
                }
                if (last.x === c1x && last.y === c1y && c2x === x && c2y === y) {
                  this.lineTo(x, y);
                  return;
                }
                tesselateBezier(this, last.x, last.y, c1x, c1y, c2x, c2y, x, y, 0, PointFlags.PT_CORNER);
                this._commandX = x;
                this._commandY = y;
              }
              quadraticCurveTo(cx, cy, x, y) {
                const x0 = this._commandX;
                const y0 = this._commandY;
                this.bezierCurveTo(x0 + 2.0 / 3.0 * (cx - x0), y0 + 2.0 / 3.0 * (cy - y0), x + 2.0 / 3.0 * (cx - x), y + 2.0 / 3.0 * (cy - y), x, y);
              }
              arc(cx, cy, r, startAngle, endAngle, counterclockwise) {
                arc(this, cx, cy, r, startAngle, endAngle, counterclockwise);
              }
              ellipse(cx, cy, rx, ry) {
                ellipse(this, cx, cy, rx, ry);
                this._curPath.complex = false;
              }
              circle(cx, cy, r) {
                ellipse(this, cx, cy, r, r);
                this._curPath.complex = false;
              }
              rect(x, y, w, h) {
                this.moveTo(x, y);
                this.lineTo(x + w, y);
                this.lineTo(x + w, y + h);
                this.lineTo(x, y + h);
                this.close();
                this._curPath.complex = false;
              }
              roundRect(x, y, w, h, r) {
                roundRect(this, x, y, w, h, r);
                this._curPath.complex = false;
              }
              clear() {
                this.pathLength = 0;
                this.pathOffset = 0;
                this.pointsOffset = 0;
                this.dataOffset = 0;
                this._curPath = null;
                this.paths.length = 0;
                this._points.length = 0;
                const dataList = this._renderDataList;
                for (let i = 0, l = dataList.length; i < l; i++) {
                  const data = dataList[i];
                  if (!data) {
                    continue;
                  }
                  MeshRenderData.remove(data);
                  data.removeRenderDrawInfo(this._comp);
                }
                this._renderDataList.length = 0;
              }
              close() {
                this._curPath.closed = true;
              }
              requestRenderData() {
                const renderData = MeshRenderData.add();
                this._renderDataList.push(renderData);
                {
                  renderData.initRenderDrawInfo(this._comp, RenderDrawInfoType.MODEL);
                  renderData.material = this._comp.getMaterialInstance(0);
                  this._comp.setRenderData(renderData);
                }
                return renderData;
              }
              getRenderDataList() {
                if (this._renderDataList.length === 0) {
                  this.requestRenderData();
                }
                return this._renderDataList;
              }
              addPoint(x, y, flags) {
                const path = this._curPath;
                if (!path) {
                  return;
                }
                const points = this._points;
                const pathPoints = path.points;
                const offset = this.pointsOffset++;
                let pt = points[offset];
                if (!pt) {
                  pt = new Point(x, y);
                  points.push(pt);
                } else {
                  pt.x = x;
                  pt.y = y;
                }
                pt.flags = flags;
                pathPoints.push(pt);
              }
              _addPath() {
                const offset = this.pathLength;
                let path = this.paths[offset];
                if (!path) {
                  path = new Path();
                  this.paths.push(path);
                } else {
                  path.reset();
                }
                this.pathLength++;
                this._curPath = path;
                return path;
              }
            }

            var _dec$7, _dec2$7, _dec3$4, _dec4$1, _class$7, _class2$4, _initializer$3, _initializer2$2, _initializer3$2, _initializer4$2, _initializer5$1, _initializer6$1, _class3$2;
            const attributes = vfmtPosColor.concat([new Attribute('a_dist', Format.R32F)]);
            const componentPerVertex = getComponentPerVertex(attributes);
            const stride = getAttributeStride(attributes);
            let Graphics = exports('G', (_dec$7 = ccclass('cc.Graphics'), _dec2$7 = executionOrder(110), _dec3$4 = type(LineJoin), _dec4$1 = type(LineCap), _dec$7(_class$7 = _dec2$7(_class$7 = (_class2$4 = (_class3$2 = class Graphics extends UIRenderer {
              get lineWidth() {
                return this._lineWidth;
              }
              set lineWidth(value) {
                this._lineWidth = value;
                if (!this.impl) {
                  return;
                }
                this.impl.lineWidth = value;
              }
              get lineJoin() {
                return this._lineJoin;
              }
              set lineJoin(value) {
                this._lineJoin = value;
                if (!this.impl) {
                  return;
                }
                this.impl.lineJoin = value;
              }
              get lineCap() {
                return this._lineCap;
              }
              set lineCap(value) {
                this._lineCap = value;
                if (!this.impl) {
                  return;
                }
                this.impl.lineCap = value;
              }
              get strokeColor() {
                return this._strokeColor;
              }
              set strokeColor(value) {
                if (!this.impl) {
                  return;
                }
                this._strokeColor.set(value);
                this.impl.strokeColor = this._strokeColor;
              }
              get fillColor() {
                return this._fillColor;
              }
              set fillColor(value) {
                if (!this.impl) {
                  return;
                }
                this._fillColor.set(value);
                this.impl.fillColor = this._fillColor;
              }
              get miterLimit() {
                return this._miterLimit;
              }
              set miterLimit(value) {
                this._miterLimit = value;
              }
              get color() {
                return this._color;
              }
              set color(value) {
                if (this._color === value) {
                  return;
                }
                this._color.set(value);
              }
              get graphicsNativeProxy() {
                return this._graphicsNativeProxy;
              }
              constructor() {
                super();
                this.impl = null;
                this.model = null;
                this._lineWidth = _initializer$3 && _initializer$3();
                this._strokeColor = _initializer2$2 && _initializer2$2();
                this._lineJoin = _initializer3$2 && _initializer3$2();
                this._lineCap = _initializer4$2 && _initializer4$2();
                this._fillColor = _initializer5$1 && _initializer5$1();
                this._miterLimit = _initializer6$1 && _initializer6$1();
                this._isDrawing = false;
                this._isNeedUploadData = true;
                this._graphicsUseSubMeshes = [];
                this._instanceMaterialType = InstanceMaterialType.ADD_COLOR;
                this.impl = new Impl(this);
                {
                  this._graphicsNativeProxy = new NativeUIModelProxy();
                }
              }
              onRestore() {
                if (!this.impl) {
                  this._flushAssembler();
                }
              }
              onLoad() {
                super.onLoad();
                {
                  this._graphicsNativeProxy.initModel(this.node);
                  this.model = this._graphicsNativeProxy.getModel();
                }
                this._flushAssembler();
              }
              onEnable() {
                super.onEnable();
                this._updateMtlForGraphics();
              }
              onDestroy() {
                this._sceneGetter = null;
                {
                  this._graphicsNativeProxy.destroy();
                  this.model = null;
                }
                if (this.impl) {
                  this._isDrawing = false;
                  this.impl.clear();
                  this.impl = null;
                }
                super.onDestroy();
              }
              moveTo(x, y) {
                if (!this.impl) {
                  return;
                }
                this.impl.moveTo(x, y);
              }
              lineTo(x, y) {
                if (!this.impl) {
                  return;
                }
                this.impl.lineTo(x, y);
              }
              bezierCurveTo(c1x, c1y, c2x, c2y, x, y) {
                if (!this.impl) {
                  return;
                }
                this.impl.bezierCurveTo(c1x, c1y, c2x, c2y, x, y);
              }
              quadraticCurveTo(cx, cy, x, y) {
                if (!this.impl) {
                  return;
                }
                this.impl.quadraticCurveTo(cx, cy, x, y);
              }
              arc(cx, cy, r, startAngle, endAngle, counterclockwise) {
                if (!this.impl) {
                  return;
                }
                this.impl.arc(cx, cy, r, startAngle, endAngle, counterclockwise);
              }
              ellipse(cx, cy, rx, ry) {
                if (!this.impl) {
                  return;
                }
                this.impl.ellipse(cx, cy, rx, ry);
              }
              circle(cx, cy, r) {
                if (!this.impl) {
                  return;
                }
                this.impl.circle(cx, cy, r);
              }
              rect(x, y, w, h) {
                if (!this.impl) {
                  return;
                }
                this.impl.rect(x, y, w, h);
              }
              roundRect(x, y, w, h, r) {
                if (!this.impl) {
                  return;
                }
                this.impl.roundRect(x, y, w, h, r);
              }
              fillRect(x, y, w, h) {
                this.rect(x, y, w, h);
                this.fill();
              }
              clear() {
                if (!this.impl) {
                  return;
                }
                this.impl.clear();
                this._isDrawing = false;
                {
                  this._graphicsNativeProxy.clear();
                }
                this.markForUpdateRenderData();
              }
              close() {
                if (!this.impl) {
                  return;
                }
                this.impl.close();
              }
              stroke() {
                if (!this._assembler) {
                  this._flushAssembler();
                }
                this._isDrawing = true;
                this._isNeedUploadData = true;
                this._assembler.stroke(this);
              }
              fill() {
                if (!this._assembler) {
                  this._flushAssembler();
                }
                this._isDrawing = true;
                this._isNeedUploadData = true;
                this._assembler.fill(this);
              }
              _updateMtlForGraphics() {
                let mat;
                if (this._customMaterial) {
                  mat = this.getMaterialInstance(0);
                } else {
                  mat = builtinResMgr.get('ui-graphics-material');
                  this.setSharedMaterial(mat, 0);
                  mat = this.getMaterialInstance(0);
                  mat.recompileShaders({
                    USE_LOCAL: true
                  });
                }
              }
              activeSubModel(idx) {
                if (!this.model) {
                  warnID(4500, this.node.name);
                  return;
                }
                if (this.model.subModels.length <= idx) {
                  const gfxDevice = deviceManager.gfxDevice;
                  const vertexBuffer = gfxDevice.createBuffer(new BufferInfo(BufferUsageBit.VERTEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.DEVICE, 65535 * stride, stride));
                  const indexBuffer = gfxDevice.createBuffer(new BufferInfo(BufferUsageBit.INDEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.DEVICE, 65535 * Uint16Array.BYTES_PER_ELEMENT * 2, Uint16Array.BYTES_PER_ELEMENT));
                  const renderMesh = new RenderingSubMesh([vertexBuffer], attributes, PrimitiveMode.TRIANGLE_LIST, indexBuffer);
                  renderMesh.subMeshIdx = 0;
                  this.model.initSubModel(idx, renderMesh, this.getMaterialInstance(0));
                  this._graphicsUseSubMeshes.push(renderMesh);
                }
              }
              _uploadData() {
                const impl = this.impl;
                if (!impl) {
                  return;
                }
                const renderDataList = impl && impl.getRenderDataList();
                if (renderDataList.length <= 0 || !this.model) {
                  return;
                }
                const subModelList = this.model.subModels;
                for (let i = 0; i < renderDataList.length; i++) {
                  const renderData = renderDataList[i];
                  const ia = subModelList[i].inputAssembler;
                  if (renderData.lastFilledVertex === renderData.vertexStart) {
                    continue;
                  }
                  const vb = new Float32Array(renderData.vData.buffer, 0, renderData.vertexStart * componentPerVertex);
                  ia.vertexBuffers[0].update(vb);
                  ia.vertexCount = renderData.vertexStart;
                  const ib = new Uint16Array(renderData.iData.buffer, 0, renderData.indexStart);
                  ia.indexBuffer.update(ib);
                  ia.indexCount = renderData.indexStart;
                  renderData.lastFilledVertex = renderData.vertexStart;
                  renderData.lastFilledIndex = renderData.indexStart;
                }
                this._isNeedUploadData = false;
              }
              _render(render) {
                if (this._isNeedUploadData) {
                  if (this.impl) {
                    const renderDataList = this.impl.getRenderDataList();
                    const len = this.model.subModels.length;
                    if (renderDataList.length > len) {
                      for (let i = len; i < renderDataList.length; i++) {
                        this.activeSubModel(i);
                      }
                    }
                  }
                  this._uploadData();
                }
                render.commitModel(this, this.model, this.getMaterialInstance(0));
              }
              _flushAssembler() {
                const assembler = Graphics.Assembler.getAssembler(this);
                if (this._assembler !== assembler) {
                  this._assembler = assembler;
                }
              }
              _canRender() {
                if (!super._canRender()) {
                  return false;
                }
                {
                  return this._isDrawing;
                }
              }
              updateRenderer() {
                super.updateRenderer();
                {
                  if (this._isNeedUploadData) {
                    if (this.impl) {
                      const renderDataList = this.impl.getRenderDataList();
                      for (let i = 0; i < renderDataList.length; i++) {
                        renderDataList[i].setRenderDrawInfoAttributes();
                      }
                      this._graphicsNativeProxy.activeSubModels();
                    }
                    this._graphicsNativeProxy.uploadData();
                    this._isNeedUploadData = false;
                  }
                }
              }
              createRenderEntity() {
                return new RenderEntity(RenderEntityType.DYNAMIC);
              }
            }, _class3$2.LineJoin = LineJoin, _class3$2.LineCap = LineCap, _class3$2), (_applyDecoratedDescriptor(_class2$4.prototype, "lineJoin", [_dec3$4], Object.getOwnPropertyDescriptor(_class2$4.prototype, "lineJoin"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "lineCap", [_dec4$1], Object.getOwnPropertyDescriptor(_class2$4.prototype, "lineCap"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "color", [override], Object.getOwnPropertyDescriptor(_class2$4.prototype, "color"), _class2$4.prototype), _initializer$3 = applyDecoratedInitializer(_class2$4.prototype, "_lineWidth", [serializable], function () {
              return 1;
            }), _initializer2$2 = applyDecoratedInitializer(_class2$4.prototype, "_strokeColor", [serializable], function () {
              return Color.BLACK.clone();
            }), _initializer3$2 = applyDecoratedInitializer(_class2$4.prototype, "_lineJoin", [serializable], function () {
              return LineJoin.MITER;
            }), _initializer4$2 = applyDecoratedInitializer(_class2$4.prototype, "_lineCap", [serializable], function () {
              return LineCap.BUTT;
            }), _initializer5$1 = applyDecoratedInitializer(_class2$4.prototype, "_fillColor", [serializable], function () {
              return Color.WHITE.clone();
            }), _initializer6$1 = applyDecoratedInitializer(_class2$4.prototype, "_miterLimit", [serializable], function () {
              return 10;
            })), _class2$4)) || _class$7) || _class$7));
            legacyCC.Graphics = Graphics;

            var _dec$6, _dec2$6, _dec3$3, _class$6, _class2$3, _initializer$2, _initializer2$1, _initializer3$1, _initializer4$1, _class3$1;
            const _worldMatrix = new Mat4();
            const _vec2_temp = new Vec2();
            const _mat4_temp = new Mat4();
            const _circlePoints = [];
            function _calculateCircle(center, radius, segments) {
              _circlePoints.length = 0;
              const anglePerStep = Math.PI * 2 / segments;
              for (let step = 0; step < segments; ++step) {
                _circlePoints.push(new Vec3(radius.x * Math.cos(anglePerStep * step) + center.x, radius.y * Math.sin(anglePerStep * step) + center.y, 0));
              }
              return _circlePoints;
            }
            let MaskType;
            (function (MaskType) {
              MaskType[MaskType["GRAPHICS_RECT"] = 0] = "GRAPHICS_RECT";
              MaskType[MaskType["GRAPHICS_ELLIPSE"] = 1] = "GRAPHICS_ELLIPSE";
              MaskType[MaskType["GRAPHICS_STENCIL"] = 2] = "GRAPHICS_STENCIL";
              MaskType[MaskType["SPRITE_STENCIL"] = 3] = "SPRITE_STENCIL";
            })(MaskType || (MaskType = {}));
            ccenum(MaskType);
            const SEGMENTS_MIN = 3;
            const SEGMENTS_MAX = 10000;
            let Mask = exports('M', (_dec$6 = ccclass('cc.Mask'), _dec2$6 = executionOrder(110), _dec3$3 = type(MaskType), _dec$6(_class$6 = _dec2$6(_class$6 = (_class2$3 = (_class3$1 = class Mask extends Component {
              constructor(...args) {
                super(...args);
                this._type = _initializer$2 && _initializer$2();
                this._inverted = _initializer2$1 && _initializer2$1();
                this._segments = _initializer3$1 && _initializer3$1();
                this._alphaThreshold = _initializer4$1 && _initializer4$1();
                this._sprite = null;
                this._graphics = null;
                this._stencilStage = Stage.DISABLED;
              }
              get type() {
                return this._type;
              }
              set type(value) {
                if (this._type === value) {
                  return;
                }
                this._type = value;
                if (this._type !== MaskType.SPRITE_STENCIL) {
                  if (this._sprite) {
                    this.node.removeComponent(Sprite);
                    this._sprite._destroyImmediate();
                    this._sprite = null;
                  }
                  this._changeRenderType();
                  this._updateGraphics();
                  {
                    this.subComp.renderEntity.setMaskMode(this._inverted ? MaskMode.MASK_INVERTED : MaskMode.MASK);
                  }
                } else {
                  if (this._graphics) {
                    this._graphics.clear();
                    this.node.removeComponent(Graphics);
                    this._graphics._destroyImmediate();
                    this._graphics = null;
                  }
                  this._changeRenderType();
                  {
                    this.subComp.renderEntity.setMaskMode(this._inverted ? MaskMode.MASK_INVERTED : MaskMode.MASK);
                  }
                }
              }
              get inverted() {
                return this._inverted;
              }
              set inverted(value) {
                this._inverted = value;
                this.subComp.stencilStage = this.inverted ? Stage.ENTER_LEVEL_INVERTED : Stage.ENTER_LEVEL;
                {
                  this.subComp.renderEntity.setMaskMode(this._inverted ? MaskMode.MASK_INVERTED : MaskMode.MASK);
                }
              }
              get segments() {
                return this._segments;
              }
              set segments(value) {
                if (this._segments === value) {
                  return;
                }
                this._segments = clamp(value, SEGMENTS_MIN, SEGMENTS_MAX);
                this._updateGraphics();
              }
              get spriteFrame() {
                if (this._sprite) {
                  return this._sprite.spriteFrame;
                }
                return null;
              }
              set spriteFrame(value) {
                if (this._sprite) {
                  this._sprite.spriteFrame = value;
                } else {
                  error('please change type to sprite_stencil first');
                }
              }
              get alphaThreshold() {
                return this._alphaThreshold;
              }
              set alphaThreshold(value) {
                if (this._alphaThreshold === value) {
                  return;
                }
                this._alphaThreshold = value;
                if (this.type === MaskType.SPRITE_STENCIL && this._sprite) {
                  const mat = this._sprite.getMaterialInstance(0);
                  mat.setProperty('alphaThreshold', this._alphaThreshold);
                }
              }
              get subComp() {
                return this._graphics || this._sprite;
              }
              onLoad() {
                this._changeRenderType();
                {
                  if (this.subComp) {
                    this.subComp.renderEntity.setMaskMode(this._inverted ? MaskMode.MASK_INVERTED : MaskMode.MASK);
                  }
                }
              }
              onEnable() {
                this._changeRenderType();
                this._updateGraphics();
                this._enableRender();
                this.node.on(NodeEventType.ANCHOR_CHANGED, this._nodeStateChange, this);
                this.node.on(NodeEventType.SIZE_CHANGED, this._nodeStateChange, this);
              }
              onRestore() {
                this._changeRenderType();
                this._updateGraphics();
              }
              onDisable() {
                this._disableRender();
                this.node.off(NodeEventType.ANCHOR_CHANGED, this._nodeStateChange, this);
                this.node.off(NodeEventType.SIZE_CHANGED, this._nodeStateChange, this);
              }
              onDestroy() {
                this._removeMaskNode();
              }
              isHit(worldPt) {
                const uiTrans = this.node._uiProps.uiTransformComp;
                const size = uiTrans.contentSize;
                const w = size.width;
                const h = size.height;
                const testPt = _vec2_temp;
                this.node.getWorldMatrix(_worldMatrix);
                Mat4.invert(_mat4_temp, _worldMatrix);
                Vec2.transformMat4(testPt, worldPt, _mat4_temp);
                const ap = uiTrans.anchorPoint;
                testPt.x += ap.x * w;
                testPt.y += ap.y * h;
                let result = false;
                if (this.type === MaskType.GRAPHICS_RECT || this.type === MaskType.GRAPHICS_STENCIL || this.type === MaskType.SPRITE_STENCIL) {
                  result = testPt.x >= 0 && testPt.y >= 0 && testPt.x <= w && testPt.y <= h;
                } else if (this.type === MaskType.GRAPHICS_ELLIPSE) {
                  const rx = w / 2;
                  const ry = h / 2;
                  const px = testPt.x - 0.5 * w;
                  const py = testPt.y - 0.5 * h;
                  result = px * px / (rx * rx) + py * py / (ry * ry) < 1;
                }
                if (this._inverted) {
                  result = !result;
                }
                return result;
              }
              _nodeStateChange(type) {
                this._updateGraphics();
              }
              _changeRenderType() {
                const isGraphics = this._type !== MaskType.SPRITE_STENCIL;
                if (isGraphics) {
                  this._createGraphics();
                } else {
                  this._createSprite();
                }
              }
              _createSprite() {
                if (!this._sprite) {
                  let sprite = this._sprite = this.node.getComponent(Sprite);
                  if (!sprite) {
                    const node = this.node;
                    sprite = this._sprite = node.addComponent(Sprite);
                  }
                }
                this._sprite.stencilStage = this.inverted ? Stage.ENTER_LEVEL_INVERTED : Stage.ENTER_LEVEL;
                this._sprite.updateMaterial();
              }
              _createGraphics() {
                if (!this._graphics) {
                  let graphics = this._graphics = this.node.getComponent(Graphics);
                  if (!graphics) {
                    const node = this.node;
                    graphics = this._graphics = node.addComponent(Graphics);
                  }
                  graphics.lineWidth = 1;
                  const color = Color.WHITE.clone();
                  color.a = 0;
                  graphics.fillColor = color;
                }
                this._graphics.stencilStage = this.inverted ? Stage.ENTER_LEVEL_INVERTED : Stage.ENTER_LEVEL;
              }
              _updateGraphics() {
                if (!this._graphics || this._type !== MaskType.GRAPHICS_RECT && this._type !== MaskType.GRAPHICS_ELLIPSE) {
                  return;
                }
                const uiTrans = this.node._uiProps.uiTransformComp;
                const graphics = this._graphics;
                graphics.clear();
                const size = uiTrans.contentSize;
                const width = size.width;
                const height = size.height;
                const ap = uiTrans.anchorPoint;
                const x = -width * ap.x;
                const y = -height * ap.y;
                if (this._type === MaskType.GRAPHICS_RECT) {
                  graphics.rect(x, y, width, height);
                } else if (this._type === MaskType.GRAPHICS_ELLIPSE) {
                  const center = new Vec3(x + width / 2, y + height / 2, 0);
                  const radius = new Vec3(width / 2, height / 2, 0);
                  const points = _calculateCircle(center, radius, this._segments);
                  for (let i = 0; i < points.length; ++i) {
                    const point = points[i];
                    if (i === 0) {
                      graphics.moveTo(point.x, point.y);
                    } else {
                      graphics.lineTo(point.x, point.y);
                    }
                  }
                  graphics.close();
                }
                graphics.fill();
              }
              _enableRender() {
                if (this.subComp) {
                  this.subComp.enabled = true;
                }
              }
              _disableRender() {
                if (this.subComp) {
                  this.subComp.stencilStage = Stage.DISABLED;
                  this.subComp.updateMaterial();
                  if (this.node.activeInHierarchy) {
                    this.subComp.enabled = false;
                  }
                }
              }
              _removeMaskNode() {
                if (this._sprite) {
                  this._sprite = null;
                }
                if (this._graphics) {
                  this._graphics = null;
                }
              }
              get customMaterial() {
                warnID(9007);
                if (this.subComp) {
                  return this.subComp.customMaterial;
                }
                return null;
              }
              set customMaterial(val) {
                warnID(9007);
                if (this.subComp) {
                  this.subComp.customMaterial = val;
                }
              }
              get color() {
                warnID(9007);
                if (this.subComp) {
                  return this.subComp.color;
                }
                return null;
              }
              set color(value) {
                warnID(9007);
                if (this.subComp && value) {
                  this.subComp.color = value;
                }
              }
              markForUpdateRenderData(enable = true) {
                warnID(9007);
                if (this.subComp) {
                  this.subComp.markForUpdateRenderData(enable);
                }
              }
              requestRenderData(any) {
                warnID(9007);
              }
              destroyRenderData() {
                warnID(9007);
              }
              updateRenderer() {
                warnID(9007);
                if (this.subComp) {
                  this.subComp.updateRenderer();
                }
              }
              fillBuffers(render) {
                warnID(9007);
              }
              postUpdateAssembler(render) {
                warnID(9007);
              }
              setNodeDirty() {
                warnID(9007);
                if (this.subComp) {
                  this.subComp.setNodeDirty();
                }
              }
              setTextureDirty() {
                warnID(9007);
                if (this.subComp) {
                  this.subComp.setTextureDirty();
                }
              }
              get sharedMaterial() {
                warnID(9007);
                if (this.subComp) {
                  return this.subComp.sharedMaterial;
                }
                return null;
              }
              get sharedMaterials() {
                warnID(9007);
                if (this.subComp) {
                  return this.subComp.sharedMaterials;
                }
                return null;
              }
              set sharedMaterials(val) {
                warnID(9007);
                if (this.subComp && val) {
                  this.subComp.sharedMaterials = val;
                }
              }
              get material() {
                warnID(9007);
                if (this.subComp) {
                  return this.subComp.material;
                }
                return null;
              }
              set material(val) {
                warnID(9007);
                if (this.subComp) {
                  this.subComp.material = val;
                }
              }
              get materials() {
                warnID(9007);
                if (this.subComp) {
                  return this.subComp.materials;
                }
                return [null];
              }
              set materials(val) {
                warnID(9007);
                if (this.subComp) {
                  this.subComp.materials = val;
                }
              }
              getMaterial(idx) {
                warnID(9007);
                if (this.subComp) {
                  return this.subComp.getSharedMaterial(idx);
                }
                return null;
              }
              setMaterial(material, index) {
                warnID(9007);
                if (this.subComp) {
                  this.subComp.setMaterial(material, index);
                }
              }
              getMaterialInstance(idx) {
                warnID(9007);
                if (this.subComp) {
                  return this.subComp.getMaterialInstance(idx);
                }
                return null;
              }
              setMaterialInstance(matInst, index) {
                warnID(9007);
                if (this.subComp) {
                  this.subComp.setMaterialInstance(matInst, index);
                }
              }
              getRenderMaterial(index) {
                warnID(9007);
                if (this.subComp) {
                  return this.subComp.getRenderMaterial(index);
                }
                return null;
              }
            }, _class3$1.Type = MaskType, _class3$1), (_applyDecoratedDescriptor(_class2$3.prototype, "type", [_dec3$3], Object.getOwnPropertyDescriptor(_class2$3.prototype, "type"), _class2$3.prototype), _initializer$2 = applyDecoratedInitializer(_class2$3.prototype, "_type", [serializable], function () {
              return MaskType.GRAPHICS_RECT;
            }), _initializer2$1 = applyDecoratedInitializer(_class2$3.prototype, "_inverted", [serializable], function () {
              return false;
            }), _initializer3$1 = applyDecoratedInitializer(_class2$3.prototype, "_segments", [serializable], function () {
              return 64;
            }), _initializer4$1 = applyDecoratedInitializer(_class2$3.prototype, "_alphaThreshold", [serializable], function () {
              return 0.1;
            })), _class2$3)) || _class$6) || _class$6));
            NodeEventProcessor._maskComp = Mask;
            legacyCC.Mask = Mask;

            var _dec$5, _dec2$5, _dec3$2, _class$5;
            let LabelOutline = exports('L', (_dec$5 = ccclass('cc.LabelOutline'), _dec2$5 = executionOrder(110), _dec3$2 = requireComponent(Label), _dec$5(_class$5 = _dec2$5(_class$5 = _dec3$2(_class$5 = class LabelOutline extends Component {
              get color() {
                const label = this.node.getComponent(Label);
                assertIsTrue(label);
                return label.outlineColor;
              }
              set color(value) {
                const label = this.node.getComponent(Label);
                assertIsTrue(label);
                label.outlineColor = value;
              }
              get width() {
                const label = this.node.getComponent(Label);
                assertIsTrue(label);
                return label.outlineWidth;
              }
              set width(value) {
                const label = this.node.getComponent(Label);
                assertIsTrue(label);
                label.outlineWidth = value;
              }
              onEnable() {
                const label = this.node.getComponent(Label);
                assertIsTrue(label);
                label.enableOutline = true;
              }
              onDisable() {
                const label = this.node.getComponent(Label);
                assertIsTrue(label);
                label.enableOutline = false;
              }
            }) || _class$5) || _class$5) || _class$5));
            legacyCC.LabelOutline = LabelOutline;

            var _dec$4, _dec2$4, _dec3$1, _dec4, _dec5, _dec6, _dec7, _dec8, _class$4, _class2$2, _initializer$1, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6, _initializer7, _initializer8, _initializer9, _initializer10, _initializer11, _initializer12, _initializer13, _initializer14, _class3;
            const _htmlTextParser = new HtmlTextParser();
            const RichTextChildName = 'RICHTEXT_CHILD';
            const RichTextChildImageName = 'RICHTEXT_Image_CHILD';
            const _tempSize = new Vec2();
            const _tempSizeLeft = new Vec2();
            const labelPool = new Pool(seg => {
              {
                assert(!seg.node.parent, 'Recycling node\'s parent should be null!');
              }
              if (!legacyCC.isValid(seg.node)) {
                return false;
              } else {
                const outline = seg.node.getComponent(LabelOutline);
                if (outline) {
                  outline.width = 0;
                }
              }
              return true;
            }, 20);
            const imagePool = new Pool(seg => {
              {
                assert(!seg.node.parent, 'Recycling node\'s parent should be null!');
              }
              return legacyCC.isValid(seg.node);
            }, 10);
            function createSegment(type) {
              return {
                node: new Node(type),
                comp: null,
                lineCount: 0,
                styleIndex: 0,
                imageOffset: '',
                clickParam: '',
                clickHandler: '',
                type
              };
            }
            function getSegmentByPool(type, content) {
              let seg;
              if (type === RichTextChildName) {
                seg = labelPool._get();
              } else if (type === RichTextChildImageName) {
                seg = imagePool._get();
              }
              seg = seg || createSegment(type);
              let node = seg.node;
              if (!node) {
                node = new Node(type);
              }
              node.hideFlags |= CCObject.Flags.DontSave | CCObject.Flags.HideInHierarchy;
              node.active = true;
              if (type === RichTextChildImageName) {
                seg.comp = node.getComponent(Sprite) || node.addComponent(Sprite);
                seg.comp.spriteFrame = content;
                seg.comp.type = Sprite.Type.SLICED;
                seg.comp.sizeMode = Sprite.SizeMode.CUSTOM;
              } else {
                seg.comp = node.getComponent(Label) || node.addComponent(Label);
                seg.comp.string = content;
                seg.comp.horizontalAlign = HorizontalTextAlignment.LEFT;
                seg.comp.verticalAlign = VerticalTextAlignment.TOP;
                seg.comp.underlineHeight = 2;
              }
              node.setPosition(0, 0, 0);
              const trans = node._uiProps.uiTransformComp;
              trans.setAnchorPoint(0.5, 0.5);
              seg.node = node;
              seg.lineCount = 0;
              seg.styleIndex = 0;
              seg.imageOffset = '';
              seg.clickParam = '';
              seg.clickHandler = '';
              return seg;
            }
            let RichText = exports('R', (_dec$4 = ccclass('cc.RichText'), _dec2$4 = executionOrder(110), _dec3$1 = type(HorizontalTextAlignment), _dec4 = type(VerticalTextAlignment), _dec5 = type(Color), _dec6 = type(Font), _dec7 = type(CacheMode), _dec8 = type(SpriteAtlas), _dec$4(_class$4 = _dec2$4(_class$4 = (_class2$2 = (_class3 = class RichText extends Component {
              get string() {
                return this._string;
              }
              set string(value) {
                if (this._string === value) {
                  return;
                }
                this._string = value;
                this._updateRichTextStatus();
              }
              get horizontalAlign() {
                return this._horizontalAlign;
              }
              set horizontalAlign(value) {
                if (this.horizontalAlign === value) {
                  return;
                }
                this._horizontalAlign = value;
                this._layoutDirty = true;
                this._updateRichTextStatus();
              }
              get verticalAlign() {
                return this._verticalAlign;
              }
              set verticalAlign(value) {
                if (this._verticalAlign === value) {
                  return;
                }
                this._verticalAlign = value;
                this._layoutDirty = true;
                this._updateRichTextStatus();
              }
              get fontSize() {
                return this._fontSize;
              }
              set fontSize(value) {
                if (this._fontSize === value) {
                  return;
                }
                this._fontSize = value;
                this._layoutDirty = true;
                this._updateRichTextStatus();
              }
              get fontColor() {
                return this._fontColor;
              }
              set fontColor(value) {
                if (this._fontColor === value) {
                  return;
                }
                this._fontColor = value;
                this._updateTextDefaultColor();
              }
              get fontFamily() {
                return this._fontFamily;
              }
              set fontFamily(value) {
                if (this._fontFamily === value) return;
                this._fontFamily = value;
                this._layoutDirty = true;
                this._updateRichTextStatus();
              }
              get font() {
                return this._font;
              }
              set font(value) {
                if (this._font === value) {
                  return;
                }
                this._font = value;
                this._layoutDirty = true;
                if (this._font) {
                  this.useSystemFont = false;
                  this._onTTFLoaded();
                } else {
                  this.useSystemFont = true;
                }
                this._updateRichTextStatus();
              }
              get useSystemFont() {
                return this._isSystemFontUsed;
              }
              set useSystemFont(value) {
                if (this._isSystemFontUsed === value) {
                  return;
                }
                this._isSystemFontUsed = value;
                this._layoutDirty = true;
                this._updateRichTextStatus();
              }
              get cacheMode() {
                return this._cacheMode;
              }
              set cacheMode(value) {
                if (this._cacheMode === value) {
                  return;
                }
                this._cacheMode = value;
                this._updateRichTextStatus();
              }
              get maxWidth() {
                return this._maxWidth;
              }
              set maxWidth(value) {
                if (this._maxWidth === value) {
                  return;
                }
                this._maxWidth = value;
                this._layoutDirty = true;
                this._updateRichTextStatus();
              }
              get lineHeight() {
                return this._lineHeight;
              }
              set lineHeight(value) {
                if (this._lineHeight === value) {
                  return;
                }
                this._lineHeight = value;
                this._layoutDirty = true;
                this._updateRichTextStatus();
              }
              get imageAtlas() {
                return this._imageAtlas;
              }
              set imageAtlas(value) {
                if (this._imageAtlas === value) {
                  return;
                }
                this._imageAtlas = value;
                this._layoutDirty = true;
                this._updateRichTextStatus();
              }
              get handleTouchEvent() {
                return this._handleTouchEvent;
              }
              set handleTouchEvent(value) {
                if (this._handleTouchEvent === value) {
                  return;
                }
                this._handleTouchEvent = value;
                if (this.enabledInHierarchy) {
                  if (this.handleTouchEvent) {
                    this._addEventListeners();
                  } else {
                    this._removeEventListeners();
                  }
                }
              }
              constructor() {
                super();
                this._lineHeight = _initializer$1 && _initializer$1();
                this._string = _initializer2 && _initializer2();
                this._horizontalAlign = _initializer3 && _initializer3();
                this._verticalAlign = _initializer4 && _initializer4();
                this._fontSize = _initializer5 && _initializer5();
                this._fontColor = _initializer6 && _initializer6();
                this._maxWidth = _initializer7 && _initializer7();
                this._fontFamily = _initializer8 && _initializer8();
                this._font = _initializer9 && _initializer9();
                this._isSystemFontUsed = _initializer10 && _initializer10();
                this._userDefinedFont = _initializer11 && _initializer11();
                this._cacheMode = _initializer12 && _initializer12();
                this._imageAtlas = _initializer13 && _initializer13();
                this._handleTouchEvent = _initializer14 && _initializer14();
                this._textArray = [];
                this._segments = [];
                this._labelSegmentsCache = [];
                this._linesWidth = [];
                this._lineCount = 1;
                this._labelWidth = 0;
                this._labelHeight = 0;
                this._layoutDirty = true;
                this._lineOffsetX = 0;
                this._updateRichTextStatus = void 0;
                this._labelChildrenNum = 0;
                this._updateRichTextStatus = this._updateRichText;
              }
              onLoad() {
                this.node.on(NodeEventType.LAYER_CHANGED, this._applyLayer, this);
                this.node.on(NodeEventType.ANCHOR_CHANGED, this._updateRichTextPosition, this);
              }
              onEnable() {
                if (this.handleTouchEvent) {
                  this._addEventListeners();
                }
                this._updateRichText();
                this._activateChildren(true);
              }
              onDisable() {
                if (this.handleTouchEvent) {
                  this._removeEventListeners();
                }
                this._activateChildren(false);
              }
              onRestore() {
                {
                  return;
                }
              }
              onDestroy() {
                for (const seg of this._segments) {
                  seg.node.removeFromParent();
                  if (seg.type === RichTextChildName) {
                    labelPool.put(seg);
                  } else if (seg.type === RichTextChildImageName) {
                    imagePool.put(seg);
                  }
                }
                this.node.off(NodeEventType.ANCHOR_CHANGED, this._updateRichTextPosition, this);
                this.node.off(NodeEventType.LAYER_CHANGED, this._applyLayer, this);
              }
              _addEventListeners() {
                this.node.on(NodeEventType.TOUCH_END, this._onTouchEnded, this);
              }
              _removeEventListeners() {
                this.node.off(NodeEventType.TOUCH_END, this._onTouchEnded, this);
              }
              _updateLabelSegmentTextAttributes() {
                this._segments.forEach(item => {
                  this._applyTextAttribute(item);
                });
              }
              _createFontLabel(str) {
                return getSegmentByPool(RichTextChildName, str);
              }
              _createImage(spriteFrame) {
                return getSegmentByPool(RichTextChildImageName, spriteFrame);
              }
              _onTTFLoaded() {
                if (this._font instanceof TTFFont) {
                  this._layoutDirty = true;
                  this._updateRichText();
                } else {
                  this._layoutDirty = true;
                  this._updateRichText();
                }
              }
              splitLongStringApproximatelyIn2048(text, styleIndex) {
                const approxSize = text.length * this.fontSize;
                const partStringArr = [];
                if (approxSize <= 2048 * 0.8) {
                  partStringArr.push(text);
                  return partStringArr;
                }
                this._calculateSize(_tempSize, styleIndex, text);
                if (_tempSize.x < 2048) {
                  partStringArr.push(text);
                } else {
                  const multilineTexts = text.split('\n');
                  for (let i = 0; i < multilineTexts.length; i++) {
                    this._calculateSize(_tempSize, styleIndex, multilineTexts[i]);
                    if (_tempSize.x < 2048) {
                      partStringArr.push(multilineTexts[i]);
                    } else {
                      const thisPartSplitResultArr = this.splitLongStringOver2048(multilineTexts[i], styleIndex);
                      partStringArr.push(...thisPartSplitResultArr);
                    }
                  }
                }
                return partStringArr;
              }
              splitLongStringOver2048(text, styleIndex) {
                const partStringArr = [];
                const longStr = text;
                let curStart = 0;
                let curEnd = longStr.length / 2;
                let curString = longStr.substring(curStart, curEnd);
                let leftString = longStr.substring(curEnd);
                const curStringSize = this._calculateSize(_tempSize, styleIndex, curString);
                const leftStringSize = this._calculateSize(_tempSizeLeft, styleIndex, leftString);
                let maxWidth = this._maxWidth;
                if (this._maxWidth === 0) {
                  maxWidth = 2047.9;
                }
                const lineCountForOnePart = 1;
                const sizeForOnePart = lineCountForOnePart * maxWidth;
                while (curStringSize.x > sizeForOnePart) {
                  curEnd /= 2;
                  if (curEnd < 1) {
                    curEnd *= 2;
                    break;
                  }
                  curString = curString.substring(curStart, curEnd);
                  leftString = longStr.substring(curEnd);
                  this._calculateSize(curStringSize, styleIndex, curString);
                }
                let leftTryTimes = 1000;
                let curWordStep = 1;
                while (leftTryTimes && curStart < text.length) {
                  while (leftTryTimes && curStringSize.x < sizeForOnePart) {
                    const nextPartExec = getEnglishWordPartAtFirst(leftString);
                    if (nextPartExec && nextPartExec.length > 0) {
                      curWordStep = nextPartExec[0].length;
                    }
                    curEnd += curWordStep;
                    curString = longStr.substring(curStart, curEnd);
                    leftString = longStr.substring(curEnd);
                    this._calculateSize(curStringSize, styleIndex, curString);
                    leftTryTimes--;
                  }
                  while (leftTryTimes && curString.length >= 2 && curStringSize.x > sizeForOnePart) {
                    curEnd -= curWordStep;
                    curString = longStr.substring(curStart, curEnd);
                    this._calculateSize(curStringSize, styleIndex, curString);
                    curWordStep = 1;
                    leftTryTimes--;
                  }
                  if (curString.length >= 2) {
                    const lastWordExec = getEnglishWordPartAtLast(curString);
                    if (lastWordExec && lastWordExec.length > 0 && curString !== lastWordExec[0]) {
                      curEnd -= lastWordExec[0].length;
                      curString = longStr.substring(curStart, curEnd);
                    }
                  }
                  partStringArr.push(curString);
                  const partStep = curString.length;
                  curStart = curEnd;
                  curEnd += partStep;
                  curString = longStr.substring(curStart, curEnd);
                  leftString = longStr.substring(curEnd);
                  this._calculateSize(leftStringSize, styleIndex, leftString);
                  this._calculateSize(curStringSize, styleIndex, curString);
                  leftTryTimes--;
                  if (leftStringSize.x < 2048 && curStringSize.x < sizeForOnePart) {
                    partStringArr.push(curString);
                    curStart = text.length;
                    curEnd = text.length;
                    curString = leftString;
                    if (leftString !== '') {
                      partStringArr.push(curString);
                    }
                    break;
                  }
                }
                return partStringArr;
              }
              _measureText(styleIndex, string) {
                const func = s => {
                  const width = this._calculateSize(_tempSize, styleIndex, s).x;
                  return width;
                };
                if (string) {
                  return func(string);
                } else {
                  return func;
                }
              }
              _calculateSize(out, styleIndex, s) {
                let label;
                if (this._labelSegmentsCache.length === 0) {
                  label = this._createFontLabel(s);
                  this._labelSegmentsCache.push(label);
                } else {
                  label = this._labelSegmentsCache[0];
                  label.node.getComponent(Label).string = s;
                }
                label.styleIndex = styleIndex;
                this._applyTextAttribute(label);
                const size = label.node._uiProps.uiTransformComp.contentSize;
                Vec2.set(out, size.x, size.y);
                return out;
              }
              _onTouchEnded(event) {
                const components = this.node.getComponents(Component);
                for (const seg of this._segments) {
                  const clickHandler = seg.clickHandler;
                  const clickParam = seg.clickParam;
                  if (clickHandler && this._containsTouchLocation(seg, event.touch.getUILocation())) {
                    components.forEach(component => {
                      const func = component[clickHandler];
                      if (component.enabledInHierarchy && func) {
                        func.call(component, event, clickParam);
                      }
                    });
                    event.propagationStopped = true;
                  }
                }
              }
              _containsTouchLocation(label, point) {
                const comp = label.node.getComponent(UITransform);
                if (!comp) {
                  return false;
                }
                const myRect = comp.getBoundingBoxToWorld();
                return myRect.contains(point);
              }
              _resetState() {
                const children = this.node.children;
                for (let i = children.length - 1; i >= 0; i--) {
                  const child = children[i];
                  if (child.name === RichTextChildName || child.name === RichTextChildImageName) {
                    {
                      assert(child.parent === this.node);
                    }
                    child.parent = null;
                    const segment = createSegment(child.name);
                    segment.node = child;
                    if (child.name === RichTextChildName) {
                      segment.comp = child.getComponent(Label);
                      labelPool.put(segment);
                    } else {
                      segment.comp = child.getComponent(Sprite);
                      imagePool.put(segment);
                    }
                    this._labelChildrenNum--;
                  }
                }
                this._segments.length = 0;
                this._labelSegmentsCache.length = 0;
                this._linesWidth.length = 0;
                this._lineOffsetX = 0;
                this._lineCount = 1;
                this._labelWidth = 0;
                this._labelHeight = 0;
                this._layoutDirty = true;
              }
              _activateChildren(active) {
                for (let i = this.node.children.length - 1; i >= 0; i--) {
                  const child = this.node.children[i];
                  if (child.name === RichTextChildName || child.name === RichTextChildImageName) {
                    child.active = active;
                  }
                }
              }
              _addLabelSegment(stringToken, styleIndex) {
                let labelSegment;
                if (this._labelSegmentsCache.length === 0) {
                  labelSegment = this._createFontLabel(stringToken);
                } else {
                  labelSegment = this._labelSegmentsCache.pop();
                  const label = labelSegment.node.getComponent(Label);
                  if (label) {
                    label.string = stringToken;
                  }
                }
                const labelComp = labelSegment.comp;
                if (labelComp.verticalAlign !== this._verticalAlign) {
                  labelComp.verticalAlign = this._verticalAlign;
                }
                labelSegment.styleIndex = styleIndex;
                labelSegment.lineCount = this._lineCount;
                labelSegment.node._uiProps.uiTransformComp.setAnchorPoint(0, 0);
                labelSegment.node.layer = this.node.layer;
                this.node.insertChild(labelSegment.node, this._labelChildrenNum++);
                this._applyTextAttribute(labelSegment);
                this._segments.push(labelSegment);
                return labelSegment;
              }
              _updateRichTextWithMaxWidth(labelString, labelWidth, styleIndex) {
                let fragmentWidth = labelWidth;
                let labelSegment;
                if (this._lineOffsetX > 0 && fragmentWidth + this._lineOffsetX > this._maxWidth) {
                  let checkStartIndex = 0;
                  while (this._lineOffsetX <= this._maxWidth) {
                    const checkEndIndex = this._getFirstWordLen(labelString, checkStartIndex, labelString.length);
                    const checkString = labelString.substr(checkStartIndex, checkEndIndex);
                    const checkStringWidth = this._measureText(styleIndex, checkString);
                    if (this._lineOffsetX + checkStringWidth <= this._maxWidth) {
                      this._lineOffsetX += checkStringWidth;
                      checkStartIndex += checkEndIndex;
                    } else {
                      if (checkStartIndex > 0) {
                        const remainingString = labelString.substr(0, checkStartIndex);
                        this._addLabelSegment(remainingString, styleIndex);
                        labelString = labelString.substr(checkStartIndex, labelString.length);
                        fragmentWidth = this._measureText(styleIndex, labelString);
                      }
                      this._updateLineInfo();
                      break;
                    }
                  }
                }
                if (fragmentWidth > this._maxWidth) {
                  const fragments = fragmentText(labelString, fragmentWidth, this._maxWidth, this._measureText(styleIndex));
                  for (let k = 0; k < fragments.length; ++k) {
                    const splitString = fragments[k];
                    labelSegment = this._addLabelSegment(splitString, styleIndex);
                    const labelSize = labelSegment.node._uiProps.uiTransformComp.contentSize;
                    this._lineOffsetX += labelSize.width;
                    if (fragments.length > 1 && k < fragments.length - 1) {
                      this._updateLineInfo();
                    }
                  }
                } else {
                  this._lineOffsetX += fragmentWidth;
                  this._addLabelSegment(labelString, styleIndex);
                }
              }
              _isLastComponentCR(stringToken) {
                return stringToken.length - 1 === stringToken.lastIndexOf('\n');
              }
              _updateLineInfo() {
                this._linesWidth.push(this._lineOffsetX);
                this._lineOffsetX = 0;
                this._lineCount++;
              }
              _needsUpdateTextLayout(newTextArray) {
                if (this._layoutDirty || !this._textArray || !newTextArray) {
                  return true;
                }
                if (this._textArray.length !== newTextArray.length) {
                  return true;
                }
                for (let i = 0; i < this._textArray.length; i++) {
                  const oldItem = this._textArray[i];
                  const newItem = newTextArray[i];
                  if (oldItem.text !== newItem.text) {
                    return true;
                  } else {
                    const oldStyle = oldItem.style;
                    const newStyle = newItem.style;
                    if (oldStyle) {
                      if (newStyle) {
                        if (!!newStyle.outline !== !!oldStyle.outline) {
                          return true;
                        }
                        if (oldStyle.size !== newStyle.size || oldStyle.italic !== newStyle.italic || oldStyle.isImage !== newStyle.isImage) {
                          return true;
                        }
                        if (oldStyle.src !== newStyle.src || oldStyle.imageAlign !== newStyle.imageAlign || oldStyle.imageHeight !== newStyle.imageHeight || oldStyle.imageWidth !== newStyle.imageWidth || oldStyle.imageOffset !== newStyle.imageOffset) {
                          return true;
                        }
                      } else if (oldStyle.size || oldStyle.italic || oldStyle.isImage || oldStyle.outline) {
                        return true;
                      }
                    } else if (newStyle) {
                      if (newStyle.size || newStyle.italic || newStyle.isImage || newStyle.outline) {
                        return true;
                      }
                    }
                  }
                }
                return false;
              }
              _addRichTextImageElement(richTextElement) {
                if (!richTextElement.style) {
                  return;
                }
                const style = richTextElement.style;
                const spriteFrameName = style.src;
                const spriteFrame = this._imageAtlas && spriteFrameName && this._imageAtlas.getSpriteFrame(spriteFrameName);
                if (!spriteFrame) {
                  warnID(4400);
                } else {
                  const segment = this._createImage(spriteFrame);
                  segment.comp;
                  switch (style.imageAlign) {
                    case 'top':
                      segment.node._uiProps.uiTransformComp.setAnchorPoint(0, 1);
                      break;
                    case 'center':
                      segment.node._uiProps.uiTransformComp.setAnchorPoint(0, 0.5);
                      break;
                    default:
                      segment.node._uiProps.uiTransformComp.setAnchorPoint(0, 0);
                      break;
                  }
                  if (style.imageOffset) {
                    segment.imageOffset = style.imageOffset;
                  }
                  segment.node.layer = this.node.layer;
                  this.node.insertChild(segment.node, this._labelChildrenNum++);
                  this._segments.push(segment);
                  const spriteRect = spriteFrame.rect.clone();
                  let scaleFactor = 1;
                  let spriteWidth = spriteRect.width;
                  let spriteHeight = spriteRect.height;
                  const expectWidth = style.imageWidth || 0;
                  const expectHeight = style.imageHeight || 0;
                  if (expectHeight > 0) {
                    scaleFactor = expectHeight / spriteHeight;
                    spriteWidth *= scaleFactor;
                    spriteHeight *= scaleFactor;
                  } else {
                    scaleFactor = this._lineHeight / spriteHeight;
                    spriteWidth *= scaleFactor;
                    spriteHeight *= scaleFactor;
                  }
                  if (expectWidth > 0) {
                    spriteWidth = expectWidth;
                  }
                  if (this._maxWidth > 0) {
                    if (this._lineOffsetX + spriteWidth > this._maxWidth) {
                      this._updateLineInfo();
                    }
                    this._lineOffsetX += spriteWidth;
                  } else {
                    this._lineOffsetX += spriteWidth;
                    if (this._lineOffsetX > this._labelWidth) {
                      this._labelWidth = this._lineOffsetX;
                    }
                  }
                  segment.node._uiProps.uiTransformComp.setContentSize(spriteWidth, spriteHeight);
                  segment.lineCount = this._lineCount;
                  segment.clickHandler = '';
                  segment.clickParam = '';
                  const event = style.event;
                  if (event) {
                    segment.clickHandler = event.click;
                    segment.clickParam = event.param;
                  }
                }
              }
              _updateTextDefaultColor() {
                for (let i = 0; i < this._segments.length; ++i) {
                  var _this$_textArray$segm, _this$_textArray$segm2;
                  const segment = this._segments[i];
                  const label = segment.node.getComponent(Label);
                  if (!label) {
                    continue;
                  }
                  if ((_this$_textArray$segm = this._textArray[segment.styleIndex]) !== null && _this$_textArray$segm !== void 0 && (_this$_textArray$segm2 = _this$_textArray$segm.style) !== null && _this$_textArray$segm2 !== void 0 && _this$_textArray$segm2.color) {
                    continue;
                  }
                  label.color = this._fontColor;
                }
              }
              _updateRichText() {
                if (!this.enabledInHierarchy) {
                  return;
                }
                const newTextArray = _htmlTextParser.parse(this._string);
                if (!this._needsUpdateTextLayout(newTextArray)) {
                  this._textArray = newTextArray.slice();
                  this._updateLabelSegmentTextAttributes();
                  return;
                }
                this._textArray = newTextArray.slice();
                this._resetState();
                let lastEmptyLine = false;
                let label;
                for (let i = 0; i < this._textArray.length; ++i) {
                  const richTextElement = this._textArray[i];
                  let text = richTextElement.text;
                  if (text === undefined) {
                    continue;
                  }
                  if (text === '') {
                    if (richTextElement.style && richTextElement.style.isNewLine) {
                      this._updateLineInfo();
                      continue;
                    }
                    if (richTextElement.style && richTextElement.style.isImage && this._imageAtlas) {
                      this._addRichTextImageElement(richTextElement);
                      continue;
                    }
                  }
                  const splitArr = this.splitLongStringApproximatelyIn2048(text, i);
                  text = splitArr.join('\n');
                  const multilineTexts = text.split('\n');
                  for (let j = 0; j < multilineTexts.length; ++j) {
                    const labelString = multilineTexts[j];
                    if (labelString === '') {
                      if (this._isLastComponentCR(text) && j === multilineTexts.length - 1) {
                        continue;
                      }
                      this._updateLineInfo();
                      lastEmptyLine = true;
                      continue;
                    }
                    lastEmptyLine = false;
                    if (this._maxWidth > 0) {
                      const labelWidth = this._measureText(i, labelString);
                      this._updateRichTextWithMaxWidth(labelString, labelWidth, i);
                      if (multilineTexts.length > 1 && j < multilineTexts.length - 1) {
                        this._updateLineInfo();
                      }
                    } else {
                      label = this._addLabelSegment(labelString, i);
                      this._lineOffsetX += label.node._uiProps.uiTransformComp.width;
                      if (this._lineOffsetX > this._labelWidth) {
                        this._labelWidth = this._lineOffsetX;
                      }
                      if (multilineTexts.length > 1 && j < multilineTexts.length - 1) {
                        this._updateLineInfo();
                      }
                    }
                  }
                }
                if (!lastEmptyLine) {
                  this._linesWidth.push(this._lineOffsetX);
                }
                if (this._maxWidth > 0) {
                  this._labelWidth = this._maxWidth;
                }
                this._labelHeight = (this._lineCount + BASELINE_RATIO) * this._lineHeight;
                this.node._uiProps.uiTransformComp.setContentSize(this._labelWidth, this._labelHeight);
                this._updateRichTextPosition();
                this._layoutDirty = false;
              }
              _getFirstWordLen(text, startIndex, textLen) {
                let character = getSymbolAt(text, startIndex);
                if (isUnicodeCJK(character) || isUnicodeSpace(character)) {
                  return 1;
                }
                let len = 1;
                for (let index = startIndex + 1; index < textLen; ++index) {
                  character = getSymbolAt(text, index);
                  if (isUnicodeSpace(character) || isUnicodeCJK(character)) {
                    break;
                  }
                  len++;
                }
                return len;
              }
              _updateRichTextPosition() {
                let nextTokenX = 0;
                let nextLineIndex = 1;
                const totalLineCount = this._lineCount;
                const trans = this.node._uiProps.uiTransformComp;
                const anchorX = trans.anchorX;
                const anchorY = trans.anchorY;
                for (let i = 0; i < this._segments.length; ++i) {
                  const segment = this._segments[i];
                  const lineCount = segment.lineCount;
                  if (lineCount > nextLineIndex) {
                    nextTokenX = 0;
                    nextLineIndex = lineCount;
                  }
                  let lineOffsetX = this._labelWidth * (this._horizontalAlign * 0.5 - anchorX);
                  switch (this._horizontalAlign) {
                    case HorizontalTextAlignment.LEFT:
                      break;
                    case HorizontalTextAlignment.CENTER:
                      lineOffsetX -= this._linesWidth[lineCount - 1] / 2;
                      break;
                    case HorizontalTextAlignment.RIGHT:
                      lineOffsetX -= this._linesWidth[lineCount - 1];
                      break;
                  }
                  const pos = segment.node.position;
                  segment.node.setPosition(nextTokenX + lineOffsetX, this._lineHeight * (totalLineCount - lineCount) - this._labelHeight * anchorY, pos.z);
                  if (lineCount === nextLineIndex) {
                    nextTokenX += segment.node._uiProps.uiTransformComp.width;
                  }
                  const sprite = segment.node.getComponent(Sprite);
                  if (sprite) {
                    const position = segment.node.position.clone();
                    const lineHeightSet = this._lineHeight;
                    const lineHeightReal = this._lineHeight * (1 + BASELINE_RATIO);
                    switch (segment.node._uiProps.uiTransformComp.anchorY) {
                      case 1:
                        position.y += lineHeightSet + (lineHeightReal - lineHeightSet) / 2;
                        break;
                      case 0.5:
                        position.y += lineHeightReal / 2;
                        break;
                      default:
                        position.y += (lineHeightReal - lineHeightSet) / 2;
                        break;
                    }
                    if (segment.imageOffset) {
                      const offsets = segment.imageOffset.split(',');
                      if (offsets.length === 1 && offsets[0]) {
                        const offsetY = parseFloat(offsets[0]);
                        if (Number.isInteger(offsetY)) position.y += offsetY;
                      } else if (offsets.length === 2) {
                        const offsetX = parseFloat(offsets[0]);
                        const offsetY = parseFloat(offsets[1]);
                        if (Number.isInteger(offsetX)) position.x += offsetX;
                        if (Number.isInteger(offsetY)) position.y += offsetY;
                      }
                    }
                    segment.node.position = position;
                  }
                  const outline = segment.node.getComponent(LabelOutline);
                  if (outline) {
                    const position = segment.node.position.clone();
                    position.y -= outline.width;
                    segment.node.position = position;
                  }
                }
              }
              _convertLiteralColorValue(color) {
                const colorValue = color.toUpperCase();
                if (Color[colorValue]) {
                  const colorUse = Color[colorValue];
                  return colorUse;
                } else {
                  const out = new Color();
                  return out.fromHEX(color);
                }
              }
              _applyTextAttribute(labelSeg) {
                const label = labelSeg.node.getComponent(Label);
                if (!label) {
                  return;
                }
                this._resetLabelState(label);
                const index = labelSeg.styleIndex;
                let textStyle;
                if (this._textArray[index]) {
                  textStyle = this._textArray[index].style;
                }
                if (textStyle) {
                  if (textStyle.color) {
                    label.color = this._convertLiteralColorValue(textStyle.color);
                  } else {
                    label.color = this._fontColor;
                  }
                  label.isBold = !!textStyle.bold;
                  label.isItalic = !!textStyle.italic;
                  label.isUnderline = !!textStyle.underline;
                  if (textStyle.outline) {
                    let labelOutline = labelSeg.node.getComponent(LabelOutline);
                    if (!labelOutline) {
                      labelOutline = labelSeg.node.addComponent(LabelOutline);
                    }
                    labelOutline.color = this._convertLiteralColorValue(textStyle.outline.color);
                    labelOutline.width = textStyle.outline.width;
                  }
                  label.fontSize = textStyle.size || this._fontSize;
                  labelSeg.clickHandler = '';
                  labelSeg.clickParam = '';
                  const event = textStyle.event;
                  if (event) {
                    labelSeg.clickHandler = event.click || '';
                    labelSeg.clickParam = event.param || '';
                  }
                }
                label.cacheMode = this._cacheMode;
                const isAsset = this._font instanceof Font;
                if (isAsset && !this._isSystemFontUsed) {
                  label.font = this._font;
                } else {
                  label.fontFamily = this._fontFamily;
                }
                label.useSystemFont = this._isSystemFontUsed;
                label.lineHeight = this._lineHeight;
                label.updateRenderData(true);
              }
              _applyLayer() {
                for (const seg of this._segments) {
                  seg.node.layer = this.node.layer;
                }
              }
              _resetLabelState(label) {
                label.fontSize = this._fontSize;
                label.color = this._fontColor;
                label.isBold = false;
                label.isItalic = false;
                label.isUnderline = false;
              }
            }, _class3.HorizontalAlign = HorizontalTextAlignment, _class3.VerticalAlign = VerticalTextAlignment, _class3), (_applyDecoratedDescriptor(_class2$2.prototype, "horizontalAlign", [_dec3$1], Object.getOwnPropertyDescriptor(_class2$2.prototype, "horizontalAlign"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "verticalAlign", [_dec4], Object.getOwnPropertyDescriptor(_class2$2.prototype, "verticalAlign"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "fontColor", [_dec5], Object.getOwnPropertyDescriptor(_class2$2.prototype, "fontColor"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "font", [_dec6], Object.getOwnPropertyDescriptor(_class2$2.prototype, "font"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "cacheMode", [_dec7], Object.getOwnPropertyDescriptor(_class2$2.prototype, "cacheMode"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "imageAtlas", [_dec8], Object.getOwnPropertyDescriptor(_class2$2.prototype, "imageAtlas"), _class2$2.prototype), _initializer$1 = applyDecoratedInitializer(_class2$2.prototype, "_lineHeight", [serializable], function () {
              return 40;
            }), _initializer2 = applyDecoratedInitializer(_class2$2.prototype, "_string", [serializable], function () {
              return '<color=#00ff00>Rich</color><color=#0fffff>Text</color>';
            }), _initializer3 = applyDecoratedInitializer(_class2$2.prototype, "_horizontalAlign", [serializable], function () {
              return HorizontalTextAlignment.LEFT;
            }), _initializer4 = applyDecoratedInitializer(_class2$2.prototype, "_verticalAlign", [serializable], function () {
              return VerticalTextAlignment.TOP;
            }), _initializer5 = applyDecoratedInitializer(_class2$2.prototype, "_fontSize", [serializable], function () {
              return 40;
            }), _initializer6 = applyDecoratedInitializer(_class2$2.prototype, "_fontColor", [serializable], function () {
              return Color.WHITE.clone();
            }), _initializer7 = applyDecoratedInitializer(_class2$2.prototype, "_maxWidth", [serializable], function () {
              return 0;
            }), _initializer8 = applyDecoratedInitializer(_class2$2.prototype, "_fontFamily", [serializable], function () {
              return 'Arial';
            }), _initializer9 = applyDecoratedInitializer(_class2$2.prototype, "_font", [serializable], function () {
              return null;
            }), _initializer10 = applyDecoratedInitializer(_class2$2.prototype, "_isSystemFontUsed", [serializable], function () {
              return true;
            }), _initializer11 = applyDecoratedInitializer(_class2$2.prototype, "_userDefinedFont", [serializable], function () {
              return null;
            }), _initializer12 = applyDecoratedInitializer(_class2$2.prototype, "_cacheMode", [serializable], function () {
              return CacheMode.NONE;
            }), _initializer13 = applyDecoratedInitializer(_class2$2.prototype, "_imageAtlas", [serializable], function () {
              return null;
            }), _initializer14 = applyDecoratedInitializer(_class2$2.prototype, "_handleTouchEvent", [serializable], function () {
              return true;
            })), _class2$2)) || _class$4) || _class$4));
            legacyCC.RichText = RichText;

            var _dec$3, _dec2$3, _class$3;
            let UIMeshRenderer = exports('U', (_dec$3 = ccclass('cc.UIMeshRenderer'), _dec2$3 = executionOrder(110), _dec$3(_class$3 = _dec2$3(_class$3 = class UIMeshRenderer extends Component {
              constructor() {
                super();
                this._modelComponent = null;
                this._dirtyVersion = -1;
                this._internalId = -1;
                this.stencilStage = Stage.DISABLED;
                this._renderData = null;
                this._renderEntity = new RenderEntity(RenderEntityType.DYNAMIC);
                {
                  this._UIModelNativeProxy = new NativeUIModelProxy();
                }
              }
              get modelComponent() {
                return this._modelComponent;
              }
              __preload() {
                this.node._uiProps.uiComp = this;
              }
              onEnable() {
                uiRendererManager.addRenderer(this);
                this.markForUpdateRenderData();
              }
              onDisable() {
                uiRendererManager.removeRenderer(this);
                this.renderEntity.enabled = this._canRender();
              }
              onLoad() {
                if (!this.node._uiProps.uiTransformComp) {
                  this.node.addComponent('cc.UITransform');
                }
                this._modelComponent = this.getComponent('cc.ModelRenderer');
                if (!this._modelComponent) {
                  warn(`node '${this.node && this.node.name}' doesn't have any renderable component`);
                  return;
                }
                {
                  this._UIModelNativeProxy.attachNode(this.node);
                }
                this.renderEntity.setNode(this.node);
              }
              onDestroy() {
                this.renderEntity.setNode(null);
                if (this.node._uiProps.uiComp === this) {
                  this.node._uiProps.uiComp = null;
                }
                this._modelComponent = this.getComponent('cc.ModelRenderer');
                if (!this._modelComponent) {
                  return;
                }
                this._modelComponent._sceneGetter = null;
              }
              _render(render) {
                if (this._modelComponent) {
                  const models = this._modelComponent._collectModels();
                  this._modelComponent._detachFromScene();
                  for (let i = 0; i < models.length; i++) {
                    if (models[i].enabled) {
                      render.commitModel(this, models[i], this._modelComponent.material);
                    }
                  }
                  return true;
                }
                return false;
              }
              fillBuffers(render) {
                if (this.enabled) {
                  this._render(render);
                }
              }
              updateRenderer() {
                {
                  this.renderEntity.enabled = this._canRender();
                  if (this._modelComponent) {
                    const models = this._modelComponent._collectModels();
                    this._modelComponent._detachFromScene();
                    this._UIModelNativeProxy.clearModels();
                    this._renderEntity.clearDynamicRenderDrawInfos();
                    for (let i = 0; i < models.length; i++) {
                      if (models[i].enabled) {
                        this._uploadRenderData(i);
                        this._UIModelNativeProxy.updateModels(models[i]);
                      }
                    }
                    this._UIModelNativeProxy.attachDrawInfo();
                  }
                }
              }
              _uploadRenderData(index) {
                {
                  const renderData = MeshRenderData.add();
                  renderData.initRenderDrawInfo(this, RenderDrawInfoType.MODEL);
                  this._renderData = renderData;
                  this._renderData.material = this._modelComponent.getMaterialInstance(index);
                }
              }
              postUpdateAssembler(render) {}
              update() {
                {
                  if (this._modelComponent) {
                    this.markForUpdateRenderData();
                  }
                }
                this._fitUIRenderQueue();
              }
              _fitUIRenderQueue() {
                if (!this._modelComponent) {
                  return;
                }
                const matNum = this._modelComponent.sharedMaterials.length;
                for (let i = 0; i < matNum; i++) {
                  const material = this._modelComponent.getMaterialInstance(i);
                  if (material == null) {
                    continue;
                  }
                  const passes = material.passes;
                  const passNum = passes.length;
                  for (let j = 0; j < passNum; j++) {
                    const pass = passes[j];
                    pass.setPriority(RenderPriority.MAX - 11);
                    material.recompileShaders({
                      CC_FORCE_FORWARD_SHADING: true
                    }, j);
                  }
                }
              }
              markForUpdateRenderData(enable = true) {
                uiRendererManager.markDirtyRenderer(this);
              }
              setNodeDirty() {}
              setTextureDirty() {}
              _canRender() {
                return this.enabled && this._modelComponent !== null;
              }
              get renderEntity() {
                {
                  assert(Boolean(this._renderEntity), 'this._renderEntity should not be invalid');
                }
                return this._renderEntity;
              }
              get renderData() {
                return this._renderData;
              }
            }) || _class$3) || _class$3));
            legacyCC.UIMeshRenderer = UIMeshRenderer;

            const UI_VIS_FLAG = Layers.Enum.NONE | Layers.Enum.UI_3D;
            class DrawBatch2D {
              constructor() {
                this.model = null;
                this.texture = null;
                this.sampler = null;
                this.useLocalData = null;
                this.isStatic = false;
                this.textureHash = 0;
                this.samplerHash = 0;
                this._passes = [];
                this._shaders = [];
                this._visFlags = UI_VIS_FLAG;
                this._inputAssembler = null;
                this._descriptorSet = null;
              }
              get inputAssembler() {
                return this._inputAssembler;
              }
              set inputAssembler(ia) {
                this._inputAssembler = ia;
              }
              get descriptorSet() {
                return this._descriptorSet;
              }
              set descriptorSet(ds) {
                this._descriptorSet = ds;
              }
              get visFlags() {
                return this._visFlags;
              }
              set visFlags(vis) {
                this._visFlags = vis;
              }
              get passes() {
                return this._passes;
              }
              get shaders() {
                return this._shaders;
              }
              destroy(ui) {
                this._passes = [];
              }
              clear() {
                this._inputAssembler = null;
                this._descriptorSet = null;
                this.texture = null;
                this.sampler = null;
                this.textureHash = 0;
                this.samplerHash = 0;
                this.model = null;
                this.isStatic = false;
                this.useLocalData = null;
                this.visFlags = UI_VIS_FLAG;
              }
              fillPasses(mat, dss, dssHash, patches) {
                if (mat) {
                  const passes = mat.passes;
                  if (!passes) {
                    return;
                  }
                  this._shaders.length = passes.length;
                  for (let i = 0; i < passes.length; i++) {
                    if (!this._passes[i]) {
                      this._passes[i] = new Pass(legacyCC.director.root);
                    }
                    const mtlPass = passes[i];
                    const passInUse = this._passes[i];
                    mtlPass.update();
                    if (!dss) {
                      dss = mtlPass.depthStencilState;
                      dssHash = 0;
                    }
                    passInUse._initPassFromTarget(mtlPass, dss, dssHash);
                    this._shaders[i] = passInUse.getShaderVariant(patches);
                  }
                }
              }
            } exports('D', DrawBatch2D);

            var _dec$2, _dec2$2, _class$2, _class2$1;
            let UIStaticBatch = exports('a', (_dec$2 = ccclass('cc.UIStaticBatch'), _dec2$2 = executionOrder(110), _dec$2(_class$2 = _dec2$2(_class$2 = (_class2$1 = class UIStaticBatch extends UIRenderer {
              constructor(...args) {
                super(...args);
                this._init = false;
                this._bufferAccessor = null;
                this._dirty = true;
                this._uiDrawBatchList = [];
              }
              get color() {
                return this._color;
              }
              set color(value) {
                if (this._color === value) {
                  return;
                }
                this._color.set(value);
              }
              get drawBatchList() {
                return this._uiDrawBatchList;
              }
              postUpdateAssembler(render) {}
              markAsDirty() {}
              _requireDrawBatch() {
                const batch = new DrawBatch2D();
                batch.isStatic = true;
                this._uiDrawBatchList.push(batch);
                return batch;
              }
              _clearData() {
                if (this._bufferAccessor) {
                  this._bufferAccessor.reset();
                  const ui = this._getBatcher();
                  for (let i = 0; i < this._uiDrawBatchList.length; i++) {
                    const element = this._uiDrawBatchList[i];
                    element.destroy(ui);
                  }
                }
                this._uiDrawBatchList.length = 0;
                this._init = false;
              }
              _getBatcher() {
                if (director.root && director.root.batcher2D) {
                  return director.root.batcher2D;
                }
                warnID(9301);
                return null;
              }
            }, (_applyDecoratedDescriptor(_class2$1.prototype, "color", [override], Object.getOwnPropertyDescriptor(_class2$1.prototype, "color"), _class2$1.prototype)), _class2$1)) || _class$2) || _class$2));

            var _dec$1, _dec2$1, _dec3, _class$1;
            let LabelShadow = exports('b', (_dec$1 = ccclass('cc.LabelShadow'), _dec2$1 = executionOrder(110), _dec3 = requireComponent(Label), _dec$1(_class$1 = _dec2$1(_class$1 = _dec3(_class$1 = class LabelShadow extends Component {
              get color() {
                const label = this.node.getComponent(Label);
                assertIsTrue(label);
                return label.shadowColor;
              }
              set color(value) {
                const label = this.node.getComponent(Label);
                assertIsTrue(label);
                label.shadowColor = value;
              }
              get offset() {
                const label = this.node.getComponent(Label);
                assertIsTrue(label);
                return label.shadowOffset;
              }
              set offset(value) {
                const label = this.node.getComponent(Label);
                assertIsTrue(label);
                label.shadowOffset = value;
              }
              get blur() {
                const label = this.node.getComponent(Label);
                assertIsTrue(label);
                return label.shadowBlur;
              }
              set blur(value) {
                const label = this.node.getComponent(Label);
                assertIsTrue(label);
                label.shadowBlur = value;
              }
              onEnable() {
                const label = this.node.getComponent(Label);
                assertIsTrue(label);
                label.enableShadow = true;
              }
              onDisable() {
                const label = this.node.getComponent(Label);
                assertIsTrue(label);
                label.enableShadow = false;
              }
            }) || _class$1) || _class$1) || _class$1));

            var _dec, _dec2, _class, _class2, _initializer;
            let UIOpacity = exports('c', (_dec = ccclass('cc.UIOpacity'), _dec2 = executionOrder(110), _dec(_class = _dec2(_class = disallowMultiple(_class = (_class2 = class UIOpacity extends Component {
              constructor(...args) {
                super(...args);
                this._setByParent = false;
                this._opacity = _initializer && _initializer();
              }
              get opacity() {
                return this._opacity;
              }
              set opacity(value) {
                if (this._opacity === value) {
                  return;
                }
                value = clampf(value, 0, 255);
                this._opacity = value;
                this.node._uiProps.localOpacity = value / 255;
                this.setEntityLocalOpacityDirtyRecursively(true);
              }
              setEntityLocalOpacityDirtyRecursively(dirty) {
                {
                  UIOpacity.setEntityLocalOpacityDirtyRecursively(this.node, dirty, 1, false);
                }
              }
              static setEntityLocalOpacityDirtyRecursively(node, dirty, interruptParentOpacity, setByParent) {
                if (!node.isValid) {
                  return;
                }
                const render = node._uiProps.uiComp;
                const uiOp = node.getComponent(UIOpacity);
                let interruptOpacity = interruptParentOpacity;
                if (render && render.color) {
                  render.renderEntity.colorDirty = dirty;
                  if (uiOp) {
                    render.renderEntity.localOpacity = interruptOpacity * uiOp.opacity / 255;
                    uiOp._setByParent = setByParent;
                  } else {
                    render.renderEntity.localOpacity = interruptOpacity;
                  }
                  render.node._uiProps.localOpacity = render.renderEntity.localOpacity;
                  interruptOpacity = 1;
                } else if (uiOp) {
                  interruptOpacity = interruptOpacity * uiOp.opacity / 255;
                  uiOp._setByParent = setByParent;
                }
                for (let i = 0; i < node.children.length; i++) {
                  UIOpacity.setEntityLocalOpacityDirtyRecursively(node.children[i], dirty || interruptOpacity < 1, interruptOpacity, true);
                }
              }
              onEnable() {
                if (this._setByParent) {
                  return;
                }
                this.node._uiProps.localOpacity = this._opacity / 255;
                this.setEntityLocalOpacityDirtyRecursively(true);
              }
              onDisable() {
                if (this._setByParent) {
                  return;
                }
                this.node._uiProps.localOpacity = 1;
                this.setEntityLocalOpacityDirtyRecursively(true);
              }
            }, (_initializer = applyDecoratedInitializer(_class2.prototype, "_opacity", [serializable], function () {
              return 255;
            })), _class2)) || _class) || _class) || _class));

            legacyCC.MaskComponent = Mask;
            setClassAlias(Mask, 'cc.MaskComponent');
            legacyCC.LabelComponent = Label;
            setClassAlias(Label, 'cc.LabelComponent');
            legacyCC.LabelOutlineComponent = LabelOutline;
            setClassAlias(LabelOutline, 'cc.LabelOutlineComponent');
            legacyCC.RichTextComponent = RichText;
            setClassAlias(RichText, 'cc.RichTextComponent');
            legacyCC.SpriteComponent = Sprite;
            setClassAlias(Sprite, 'cc.SpriteComponent');
            legacyCC.UIModelComponent = UIMeshRenderer;
            setClassAlias(UIMeshRenderer, 'cc.UIModelComponent');
            legacyCC.GraphicsComponent = Graphics;
            setClassAlias(Graphics, 'cc.GraphicsComponent');
            setClassAlias(UIStaticBatch, 'cc.UIStaticBatchComponent');
            setClassAlias(UIOpacity, 'cc.UIOpacityComponent');
            replaceProperty(Mask.prototype, 'Mask', [{
              name: 'graphics',
              newName: 'subComp',
              target: Mask.prototype,
              targetName: 'Mask'
            }]);
            replaceProperty(MaskType, 'MaskType', [{
              name: 'RECT',
              newName: 'GRAPHICS_RECT',
              target: MaskType,
              targetName: 'MaskType'
            }, {
              name: 'ELLIPSE',
              newName: 'GRAPHICS_ELLIPSE',
              target: MaskType,
              targetName: 'MaskType'
            }, {
              name: 'IMAGE_STENCIL',
              newName: 'SPRITE_STENCIL',
              target: MaskType,
              targetName: 'MaskType'
            }]);
            markAsWarning(LabelOutline.prototype, 'LabelOutline', [{
              name: 'width',
              suggest: 'Please use Label.outlineWidth instead.'
            }, {
              name: 'color',
              suggest: 'Please use Label.outlineColor instead.'
            }]);
            markAsWarning(LabelShadow.prototype, 'LabelShadow', [{
              name: 'color',
              suggest: 'Please use Label.shadowColor instead.'
            }, {
              name: 'offset',
              suggest: 'Please use Label.shadowOffset instead.'
            }, {
              name: 'blur',
              suggest: 'Please use Label.shadowBlur instead.'
            }]);

        })
    };
}));

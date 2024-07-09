System.register(['./index-ce98320e.js', './node-event-18d96a1b.js', './sprite-renderer-9a6a919d.js', './rendering-sub-mesh.jsb-25043997.js', './builtin-res-mgr.jsb-c9e8e53a.js', './scene-asset.jsb-0d4c6201.js', './find-7a03d1cc.js', './director-dc238483.js', './device-90bc7390.js'], (function (exports) {
    'use strict';
    var ccclass, applyDecoratedInitializer, legacyCC, createMap, getClassId, serializable, override, string, Pool, ccwindow, warnID, type, warn, mixin, Color, macro, log, Size, Rect, Vec2, ccenum, executionOrder, clamp, Asset, _applyDecoratedDescriptor, extname, SpriteFrame, UIRenderer, InstanceMaterialType, downloader, factory, ImageAsset, Texture2D, PixelFormat, TextureBase, Material, RenderTexture, director, Director, BufferTextureCopy;
    return {
        setters: [function (module) {
            ccclass = module.by;
            applyDecoratedInitializer = module.bx;
            legacyCC = module.l;
            createMap = module.c2;
            getClassId = module.bO;
            serializable = module.bf;
            override = module.bd;
            string = module.cB;
            Pool = module.bP;
            ccwindow = module.c6;
            warnID = module.d;
            type = module.bw;
            warn = module.w;
            mixin = module.bT;
            Color = module.C;
            macro = module.aM;
            log = module.a;
            Size = module.S;
            Rect = module.R;
            Vec2 = module.V;
            ccenum = module.ab;
            executionOrder = module.cs;
            clamp = module.F;
        }, function (module) {
            Asset = module.A;
            _applyDecoratedDescriptor = module.H;
            extname = module.e;
        }, function (module) {
            SpriteFrame = module.a;
            UIRenderer = module.b;
            InstanceMaterialType = module.I;
        }, function () {}, function (module) {
            downloader = module.aD;
            factory = module.aG;
            ImageAsset = module.al;
            Texture2D = module.am;
            PixelFormat = module.aS;
            TextureBase = module.aQ;
            Material = module.ap;
        }, function (module) {
            RenderTexture = module.R;
        }, function () {}, function (module) {
            director = module.n;
            Director = module.m;
        }, function (module) {
            BufferTextureCopy = module.a1;
        }],
        execute: (function () {

            exports({
                e: isUnicodeSpace,
                f: getSymbolLength,
                g: getBaselineOffset,
                h: getSymbolAt,
                i: isUnicodeCJK,
                j: getSymbolCodeAt,
                k: isEnglishWordPartAtFirst,
                l: isEnglishWordPartAtLast,
                m: getEnglishWordPartAtFirst,
                n: getEnglishWordPartAtLast,
                o: fragmentText,
                s: safeMeasureText,
                u: computeHash
            });

            var _dec$6, _class$5, _class2$4, _initializer$4;
            let SpriteAtlas = exports('S', (_dec$6 = ccclass('cc.SpriteAtlas'), _dec$6(_class$5 = (_class2$4 = class SpriteAtlas extends Asset {
              constructor(...args) {
                super(...args);
                this.spriteFrames = _initializer$4 && _initializer$4();
              }
              getTexture() {
                const keys = Object.keys(this.spriteFrames);
                if (keys.length > 0) {
                  const spriteFrame = this.spriteFrames[keys[0]];
                  return spriteFrame && spriteFrame.texture;
                } else {
                  return null;
                }
              }
              getSpriteFrame(key) {
                const sf = this.spriteFrames[key];
                if (!sf) {
                  return null;
                }
                if (!sf.name) {
                  sf.name = key;
                }
                return sf;
              }
              getSpriteFrames() {
                const frames = [];
                const spriteFrames = this.spriteFrames;
                for (const key of Object.keys(spriteFrames)) {
                  frames.push(spriteFrames[key]);
                }
                return frames;
              }
              _serialize(ctxForExporting) {
              }
              _deserialize(serializeData, handle) {
                const data = serializeData;
                this._name = data.name;
                const frames = data.spriteFrames;
                this.spriteFrames = createMap();
                for (let i = 0; i < frames.length; i += 2) {
                  handle.result.push(this.spriteFrames, frames[i], frames[i + 1], getClassId(SpriteFrame));
                }
              }
            }, (_initializer$4 = applyDecoratedInitializer(_class2$4.prototype, "spriteFrames", [serializable], function () {
              return createMap();
            })), _class2$4)) || _class$5));
            legacyCC.SpriteAtlas = SpriteAtlas;

            var _dec$5, _class$4;
            let Font = exports('F', (_dec$5 = ccclass('cc.Font'), _dec$5(_class$4 = class Font extends Asset {}) || _class$4));
            legacyCC.Font = Font;

            var _dec$4, _class$3, _class2$3, _initializer$3;
            let TTFFont = exports('T', (_dec$4 = ccclass('cc.TTFFont'), _dec$4(_class$3 = (_class2$3 = class TTFFont extends Font {
              constructor(...args) {
                super(...args);
                this._fontFamily = _initializer$3 && _initializer$3();
              }
              get _nativeAsset() {
                return this._fontFamily;
              }
              set _nativeAsset(value) {
                this._fontFamily = value || 'Arial';
              }
              get _nativeDep() {
                return {
                  uuid: this._uuid,
                  __nativeName__: this._native,
                  ext: extname(this._native),
                  __isNative__: true
                };
              }
              initDefault(uuid) {
                this._fontFamily = 'Arial';
                super.initDefault(uuid);
              }
            }, (_initializer$3 = applyDecoratedInitializer(_class2$3.prototype, "_fontFamily", [serializable], function () {
              return null;
            }), _applyDecoratedDescriptor(_class2$3.prototype, "_nativeAsset", [override, string], Object.getOwnPropertyDescriptor(_class2$3.prototype, "_nativeAsset"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "_nativeDep", [override], Object.getOwnPropertyDescriptor(_class2$3.prototype, "_nativeDep"), _class2$3.prototype)), _class2$3)) || _class$3));
            legacyCC.TTFFont = TTFFont;

            const BASELINE_RATIO = exports('c', 0.26);
            let _BASELINE_OFFSET = 0;
            const MIDDLE_RATIO = exports('M', (BASELINE_RATIO + 1) / 2 - BASELINE_RATIO);
            function getBaselineOffset() {
              return _BASELINE_OFFSET;
            }
            const MAX_CACHE_SIZE = 100;
            const pool = new Pool(2);
            pool.get = function () {
              return this._get() || {
                key: '',
                value: 0,
                prev: null,
                next: null
              };
            };
            class LRUCache {
              constructor(size) {
                this.count = 0;
                this.limit = 0;
                this.datas = {};
                this.limit = size;
              }
              moveToHead(node) {
                node.next = this.head;
                node.prev = null;
                if (this.head) this.head.prev = node;
                this.head = node;
                if (!this.tail) this.tail = node;
                this.count++;
                this.datas[node.key] = node;
              }
              put(key, value) {
                const node = pool.get();
                node.key = key;
                node.value = value;
                if (this.count >= this.limit) {
                  const discard = this.tail;
                  delete this.datas[discard.key];
                  this.count--;
                  this.tail = discard.prev;
                  this.tail.next = null;
                  discard.prev = null;
                  discard.next = null;
                  pool.put(discard);
                }
                this.moveToHead(node);
              }
              remove(node) {
                if (node.prev) {
                  node.prev.next = node.next;
                } else {
                  this.head = node.next;
                }
                if (node.next) {
                  node.next.prev = node.prev;
                } else {
                  this.tail = node.prev;
                }
                delete this.datas[node.key];
                this.count--;
              }
              get(key) {
                const node = this.datas[key];
                if (node) {
                  this.remove(node);
                  this.moveToHead(node);
                  return node.value;
                }
                return null;
              }
              clear() {
                this.count = 0;
                this.datas = {};
                this.head = null;
                this.tail = null;
              }
              has(key) {
                return !!this.datas[key];
              }
              delete(key) {
                const node = this.datas[key];
                this.remove(node);
              }
            } exports('d', LRUCache);
            const measureCache = new LRUCache(MAX_CACHE_SIZE);
            const WORD_REG = /([a-zA-Z0-9ÄÖÜäöüßéèçàùêâîôûа-яА-ЯЁё]+|\S)/;
            const SYMBOL_REG = /^[!,.:;'}\]%\?>、‘“》？。，！]/;
            const LAST_WORD_REG = /([a-zA-Z0-9ÄÖÜäöüßéèçàùêâîôûаíìÍÌïÁÀáàÉÈÒÓòóŐőÙÚŰúűñÑæÆœŒÃÂãÔõěščřžýáíéóúůťďňĚŠČŘŽÁÍÉÓÚŤżźśóńłęćąŻŹŚÓŃŁĘĆĄ-яА-ЯЁёáàảạãăắằẳẵặâấầẩẫậéèẻẽẹêếềểễệiíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵđÁÀẢẠÃĂẮẰẲẴẶÂẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆIÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ]+|\S)$/;
            const LAST_ENGLISH_REG = /[a-zA-Z0-9ÄÖÜäöüßéèçàùêâîôûаíìÍÌïÁÀáàÉÈÒÓòóŐőÙÚŰúűñÑæÆœŒÃÂãÔõěščřžýáíéóúůťďňĚŠČŘŽÁÍÉÓÚŤżźśóńłęćąŻŹŚÓŃŁĘĆĄ-яА-ЯЁёáàảạãăắằẳẵặâấầẩẫậéèẻẽẹêếềểễệiíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵđÁÀẢẠÃĂẮẰẲẴẶÂẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆIÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ]+$/;
            const FIRST_ENGLISH_REG = /^[a-zA-Z0-9ÄÖÜäöüßéèçàùêâîôûаíìÍÌïÁÀáàÉÈÒÓòóŐőÙÚŰúűñÑæÆœŒÃÂãÔõěščřžýáíéóúůťďňĚŠČŘŽÁÍÉÓÚŤżźśóńłęćąŻŹŚÓŃŁĘĆĄ-яА-ЯЁёáàảạãăắằẳẵặâấầẩẫậéèẻẽẹêếềểễệiíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵđÁÀẢẠÃĂẮẰẲẴẶÂẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆIÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ]/;
            function isUnicodeCJK(ch) {
              const __CHINESE_REG = /^[\u4E00-\u9FFF\u3400-\u4DFF]+$/;
              const __JAPANESE_REG = /[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\uFF00-\uFFEF]|[\u4E00-\u9FAF]|[\u2605-\u2606]|[\u2190-\u2195]|\u203B/g;
              const __KOREAN_REG = /^[\u1100-\u11FF]|[\u3130-\u318F]|[\uA960-\uA97F]|[\uAC00-\uD7AF]|[\uD7B0-\uD7FF]+$/;
              return __CHINESE_REG.test(ch) || __JAPANESE_REG.test(ch) || __KOREAN_REG.test(ch);
            }
            function isUnicodeSpace(ch) {
              const chCode = ch.charCodeAt(0);
              return chCode >= 9 && chCode <= 13 || chCode === 32 || chCode === 133 || chCode === 160 || chCode === 5760 || chCode >= 8192 && chCode <= 8202 || chCode === 8232 || chCode === 8233 || chCode === 8239 || chCode === 8287 || chCode === 12288;
            }
            function safeMeasureText(ctx, string, desc) {
              const font = desc || ctx.font;
              const key = `${font}\uD83C\uDFAE${string}`;
              const cache = measureCache.get(key);
              if (cache !== null) {
                return cache;
              }
              const metric = ctx.measureText(string);
              const width = metric && metric.width || 0;
              measureCache.put(key, width);
              return width;
            }
            function getSymbolLength(str) {
              const length = str.length;
              let count = 0;
              let charCode = 0;
              for (let i = 0; i < length; i++) {
                charCode = str.charCodeAt(i);
                if (charCode === 0x200d) {
                  continue;
                }
                if (charCode >= 0xd800 && charCode <= 0xdbff) {
                  charCode = str.charCodeAt(i + 1);
                  if (charCode >= 0xdc00 && charCode <= 0xdfff) {
                    if (i + 2 >= length || str.charCodeAt(i + 2) !== 0x200d) {
                      count++;
                    }
                    i++;
                    continue;
                  }
                }
                count++;
              }
              return count;
            }
            function getSymbolAt(str, index) {
              const length = str.length;
              let len = 0;
              let count = 0;
              let start = 0;
              let charCode = 0;
              for (let i = 0; i < length; i++) {
                charCode = str.charCodeAt(i);
                if (charCode === 0x200d) {
                  len++;
                  continue;
                }
                if (charCode >= 0xd800 && charCode <= 0xdbff) {
                  len++;
                  charCode = str.charCodeAt(i + 1);
                  if (charCode >= 0xdc00 && charCode <= 0xdfff) {
                    len++;
                    if (i + 2 >= length || str.charCodeAt(i + 2) !== 0x200d) {
                      if (index === count) {
                        return str.slice(start, start + len);
                      }
                      start += len;
                      count++;
                      len = 0;
                    }
                    i++;
                    continue;
                  }
                }
                if (index === count) {
                  return str.charAt(i);
                }
                start = i + 1;
                count++;
                len = 0;
              }
              return '';
            }
            function getSymbolCodeAt(str, index) {
              const char = getSymbolAt(str, index);
              if (char.length === 1) {
                return `${char.charCodeAt(0)}`;
              }
              let charCodes = '';
              for (let j = 0; j < char.length; j++) {
                charCodes += `${char.charCodeAt(j)}`;
              }
              return `${charCodes}`;
            }
            function getSymbolStartIndex(targetString, index) {
              if (index >= targetString.length) {
                return targetString.length;
              }
              let startCheckIndex = index;
              let startChar = targetString[startCheckIndex];
              while (startCheckIndex >= 0) {
                if (startChar === '\u200d') {
                  startCheckIndex--;
                  startChar = targetString[startCheckIndex];
                }
                if (startChar >= '\uDC00' && startChar <= '\uDFFF') {
                  if (startCheckIndex - 1 >= 0) {
                    startCheckIndex--;
                    startChar = targetString[startCheckIndex];
                  }
                }
                if (startChar >= '\uD800' && startChar <= '\uDBFF') {
                  if (startCheckIndex - 1 >= 0 && targetString[startCheckIndex - 1] === '\u200d') {
                    startCheckIndex--;
                    startChar = targetString[startCheckIndex];
                  } else {
                    break;
                  }
                } else {
                  break;
                }
              }
              return startCheckIndex;
            }
            function getSymbolEndIndex(targetString, index) {
              let newEndIndex = index;
              let endCheckIndex = index;
              let endChar = targetString[endCheckIndex];
              while (endCheckIndex < targetString.length) {
                if (endChar === '\u200d') {
                  endCheckIndex++;
                  newEndIndex++;
                  endChar = targetString[endCheckIndex];
                  if (endChar >= '\uD800' && endChar <= '\uDBFF') {
                    endCheckIndex++;
                    newEndIndex++;
                    endChar = targetString[endCheckIndex];
                  }
                }
                if (endChar >= '\uD800' && endChar <= '\uDBFF') {
                  endCheckIndex++;
                  newEndIndex++;
                  endChar = targetString[endCheckIndex];
                } else if (endChar >= '\uDC00' && endChar <= '\uDFFF') {
                  endCheckIndex++;
                  endChar = targetString[endCheckIndex];
                  if (endCheckIndex < targetString.length && targetString[endCheckIndex] === '\u200d') {
                    newEndIndex++;
                    endChar = targetString[endCheckIndex];
                  } else {
                    break;
                  }
                } else {
                  break;
                }
              }
              return newEndIndex;
            }
            function _safeSubstring(targetString, startIndex, endIndex) {
              let newStartIndex = getSymbolStartIndex(targetString, startIndex);
              if (newStartIndex < startIndex) {
                newStartIndex = getSymbolEndIndex(targetString, startIndex) + 1;
              }
              let newEndIndex = endIndex;
              if (endIndex !== undefined) {
                endIndex = Math.max(0, endIndex - 1);
                newEndIndex = getSymbolEndIndex(targetString, endIndex);
                const newStartEndIndex = getSymbolStartIndex(targetString, endIndex);
                if (newStartEndIndex < newStartIndex || newStartEndIndex === newStartIndex && startIndex > newStartIndex) {
                  newEndIndex = newStartIndex;
                } else {
                  newEndIndex += 1;
                }
              }
              return targetString.substring(newStartIndex, newEndIndex);
            }
            function isEnglishWordPartAtFirst(stringToken) {
              return FIRST_ENGLISH_REG.test(stringToken);
            }
            function isEnglishWordPartAtLast(stringToken) {
              return LAST_ENGLISH_REG.test(stringToken);
            }
            function getEnglishWordPartAtFirst(stringToken) {
              const result = FIRST_ENGLISH_REG.exec(stringToken);
              return result;
            }
            function getEnglishWordPartAtLast(stringToken) {
              const result = LAST_ENGLISH_REG.exec(stringToken);
              return result;
            }
            function fragmentText(stringToken, allWidth, maxWidth, measureText) {
              const wrappedWords = [];
              if (stringToken.length === 0 || maxWidth < 0) {
                wrappedWords.push('');
                return wrappedWords;
              }
              let text = stringToken;
              while (allWidth > maxWidth && text.length > 1) {
                let fuzzyLen = text.length * (maxWidth / allWidth) | 0;
                let tmpText = _safeSubstring(text, fuzzyLen);
                let width = allWidth - measureText(tmpText);
                let sLine = tmpText;
                let pushNum = 0;
                let checkWhile = 0;
                const checkCount = 100;
                while (width > maxWidth && checkWhile++ < checkCount) {
                  fuzzyLen *= maxWidth / width;
                  fuzzyLen |= 0;
                  tmpText = _safeSubstring(text, fuzzyLen);
                  width = allWidth - measureText(tmpText);
                }
                checkWhile = 0;
                while (tmpText && width <= maxWidth && checkWhile++ < checkCount) {
                  const exec = WORD_REG.exec(tmpText);
                  pushNum = exec ? exec[0].length : 1;
                  sLine = tmpText;
                  fuzzyLen += pushNum;
                  tmpText = _safeSubstring(text, fuzzyLen);
                  width = allWidth - measureText(tmpText);
                }
                fuzzyLen -= pushNum;
                if (fuzzyLen === 0) {
                  fuzzyLen = 1;
                  sLine = _safeSubstring(text, 1);
                } else if (fuzzyLen === 1 && text[0] >= '\uD800' && text[0] <= '\uDBFF') {
                  fuzzyLen = 2;
                  sLine = _safeSubstring(text, 2);
                }
                let sText = _safeSubstring(text, 0, fuzzyLen);
                let result;
                {
                  if (SYMBOL_REG.test(sLine || tmpText)) {
                    result = LAST_WORD_REG.exec(sText);
                    fuzzyLen -= result ? result[0].length : 0;
                    if (fuzzyLen === 0) {
                      fuzzyLen = 1;
                    }
                    sLine = _safeSubstring(text, fuzzyLen);
                    sText = _safeSubstring(text, 0, fuzzyLen);
                  }
                }
                if (FIRST_ENGLISH_REG.test(sLine)) {
                  result = LAST_ENGLISH_REG.exec(sText);
                  if (result && sText !== result[0]) {
                    fuzzyLen -= result[0].length;
                    sLine = _safeSubstring(text, fuzzyLen);
                    sText = _safeSubstring(text, 0, fuzzyLen);
                  }
                }
                if (wrappedWords.length === 0) {
                  wrappedWords.push(sText);
                } else {
                  sText = sText.trim();
                  if (sText.length > 0) {
                    wrappedWords.push(sText);
                  }
                }
                text = sLine || tmpText;
                allWidth = measureText(text);
              }
              if (wrappedWords.length === 0) {
                wrappedWords.push(text);
              } else {
                text = text.trim();
                if (text.length > 0) {
                  wrappedWords.push(text);
                }
              }
              return wrappedWords;
            }

            const ccdocument = ccwindow.document;
            let _canvasContext = null;
            let _intervalId = -1;
            const _testString = 'BES bswy:->@123\u4E01\u3041\u1101';
            const _fontFaces = Object.create(null);
            const _loadingFonts = [];
            const _timeout = 3000;
            const useNativeCheck = (() => {
              let nativeCheck;
              return () => {
                if (nativeCheck === undefined) {
                  if ('FontFace' in ccwindow) {
                    const match = /Gecko.*Firefox\/(\d+)/.exec(ccwindow.navigator.userAgent);
                    const safari10Match = /OS X.*Version\/10\..*Safari/.exec(ccwindow.navigator.userAgent) && /Apple/.exec(ccwindow.navigator.vendor);
                    if (match) {
                      nativeCheck = parseInt(match[1], 10) > 42;
                    } else if (safari10Match) {
                      nativeCheck = false;
                    } else {
                      nativeCheck = true;
                    }
                  } else {
                    nativeCheck = false;
                  }
                }
                return nativeCheck;
              };
            })();
            function checkFontLoaded() {
              let allFontsLoaded = true;
              const now = Date.now();
              for (let i = _loadingFonts.length - 1; i >= 0; i--) {
                const fontLoadHandle = _loadingFonts[i];
                const fontFamily = fontLoadHandle.fontFamilyName;
                if (now - fontLoadHandle.startTime > _timeout) {
                  warnID(4933, fontFamily);
                  fontLoadHandle.onComplete(null, fontFamily);
                  _loadingFonts.splice(i, 1);
                  continue;
                }
                const oldWidth = fontLoadHandle.refWidth;
                const fontDesc = `40px ${fontFamily}`;
                _canvasContext.font = fontDesc;
                const newWidth = safeMeasureText(_canvasContext, _testString, fontDesc);
                if (oldWidth !== newWidth) {
                  _loadingFonts.splice(i, 1);
                  fontLoadHandle.onComplete(null, fontFamily);
                } else {
                  allFontsLoaded = false;
                }
              }
              if (allFontsLoaded) {
                clearInterval(_intervalId);
                _intervalId = -1;
              }
            }
            function nativeCheckFontLoaded(start, font, callback) {
              const loader = new Promise((resolve, reject) => {
                const check = () => {
                  const now = Date.now();
                  if (now - start >= _timeout) {
                    reject();
                  } else {
                    ccdocument.fonts.load(`40px ${font}`).then(fonts => {
                      if (fonts.length >= 1) {
                        resolve();
                      } else {
                        setTimeout(check, 100);
                      }
                    }, () => {
                      reject();
                    });
                  }
                };
                check();
              });
              let timeoutId = null;
              const timer = new Promise((resolve, reject) => {
                timeoutId = setTimeout(reject, _timeout);
              });
              Promise.race([timer, loader]).then(() => {
                if (timeoutId) {
                  clearTimeout(timeoutId);
                  timeoutId = null;
                }
                callback(null, font);
              }, () => {
                warnID(4933, font);
                callback(null, font);
              });
            }
            function loadFont(url, options, onComplete) {
              const fontFamilyName = getFontFamily(url);
              if (_fontFaces[fontFamilyName]) {
                onComplete(null, fontFamilyName);
                return;
              }
              if (!_canvasContext) {
                const labelCanvas = ccdocument.createElement('canvas');
                labelCanvas.width = 100;
                labelCanvas.height = 100;
                _canvasContext = labelCanvas.getContext('2d');
              }
              const fontDesc = `40px ${fontFamilyName}`;
              const fontStyle = ccdocument.createElement('style');
              fontStyle.type = 'text/css';
              let fontStr = '';
              if (Number.isNaN(fontFamilyName)) {
                fontStr += `@font-face { font-family:${fontFamilyName}; src:`;
              } else {
                fontStr += `@font-face { font-family:"${fontFamilyName}"; src:`;
              }
              fontStr += `url("${url}");`;
              fontStyle.textContent = `${fontStr}}`;
              ccdocument.body.appendChild(fontStyle);
              const preloadDiv = ccdocument.createElement('div');
              const divStyle = preloadDiv.style;
              divStyle.fontFamily = fontFamilyName;
              preloadDiv.innerHTML = '.';
              divStyle.position = 'absolute';
              divStyle.left = '-100px';
              divStyle.top = '-100px';
              ccdocument.body.appendChild(preloadDiv);
              if (useNativeCheck()) {
                nativeCheckFontLoaded(Date.now(), fontFamilyName, onComplete);
              } else {
                const refWidth = safeMeasureText(_canvasContext, _testString, fontDesc);
                const fontLoadHandle = {
                  fontFamilyName,
                  refWidth,
                  onComplete,
                  startTime: Date.now()
                };
                _loadingFonts.push(fontLoadHandle);
                if (_intervalId === -1) {
                  _intervalId = setInterval(checkFontLoaded, 100);
                }
              }
              _fontFaces[fontFamilyName] = fontStyle;
            }
            function getFontFamily(fontHandle) {
              const ttfIndex = fontHandle.lastIndexOf('.ttf');
              if (ttfIndex === -1) {
                return fontHandle;
              }
              const slashPos = fontHandle.lastIndexOf('/');
              let fontFamilyName;
              if (slashPos === -1) {
                fontFamilyName = `${fontHandle.substring(0, ttfIndex)}_LABEL`;
              } else {
                fontFamilyName = `${fontHandle.substring(slashPos + 1, ttfIndex)}_LABEL`;
              }
              if (fontFamilyName.indexOf(' ') !== -1) {
                fontFamilyName = `"${fontFamilyName}"`;
              }
              return fontFamilyName;
            }
            function createFont(id, data, options, onComplete) {
              const out = new TTFFont();
              out._nativeUrl = id;
              out._nativeAsset = data;
              onComplete(null, out);
            }
            downloader.register({
              '.font': loadFont,
              '.eot': loadFont,
              '.ttf': loadFont,
              '.woff': loadFont,
              '.svg': loadFont,
              '.ttc': loadFont
            });
            factory.register({
              '.font': createFont,
              '.eot': createFont,
              '.ttf': createFont,
              '.woff': createFont,
              '.svg': createFont,
              '.ttc': createFont
            });

            var _dec$3, _dec2$2, _class2$2, _class3$2, _initializer$2, _initializer2$2, _initializer3$2, _initializer4$2;
            class FontLetterDefinition$1 {
              constructor() {
                this.u = 0;
                this.v = 0;
                this.w = 0;
                this.h = 0;
                this.offsetX = 0;
                this.offsetY = 0;
                this.textureID = 0;
                this.valid = false;
                this.xAdvance = 0;
              }
            }
            class FontAtlas {
              constructor(texture) {
                this.letterDefinitions = {};
                this.texture = texture;
              }
              addLetterDefinitions(letter, letterDefinition) {
                this.letterDefinitions[letter] = letterDefinition;
              }
              cloneLetterDefinition() {
                const copyLetterDefinitions = {};
                for (const key of Object.keys(this.letterDefinitions)) {
                  const value = new FontLetterDefinition$1();
                  mixin(value, this.letterDefinitions[key]);
                  copyLetterDefinitions[key] = value;
                }
                return copyLetterDefinitions;
              }
              getTexture() {
                return this.texture;
              }
              getLetter(key) {
                return this.letterDefinitions[key];
              }
              getLetterDefinitionForChar(char, labelInfo) {
                const key = getSymbolCodeAt(char, 0);
                const hasKey = this.letterDefinitions.hasOwnProperty(key);
                let letter;
                if (hasKey) {
                  letter = this.letterDefinitions[key];
                } else {
                  letter = null;
                }
                return letter;
              }
              clear() {
                this.letterDefinitions = {};
              }
            } exports('t', FontAtlas);
            let BitmapFont = exports('B', (_dec$3 = ccclass('cc.BitmapFont'), _dec2$2 = type(SpriteFrame), _dec$3(_class2$2 = (_class3$2 = class BitmapFont extends Font {
              constructor(...args) {
                super(...args);
                this.fntDataStr = _initializer$2 && _initializer$2();
                this.spriteFrame = _initializer2$2 && _initializer2$2();
                this.fontSize = _initializer3$2 && _initializer3$2();
                this.fntConfig = _initializer4$2 && _initializer4$2();
              }
              onLoaded() {
                const spriteFrame = this.spriteFrame;
                if (!this.fontDefDictionary && spriteFrame) {
                  this.fontDefDictionary = new FontAtlas(spriteFrame.texture);
                }
                const fntConfig = this.fntConfig;
                if (!fntConfig) {
                  warn('The fnt config is not exists!');
                  return;
                }
                const fontDict = fntConfig.fontDefDictionary;
                for (const fontDef in fontDict) {
                  const letter = new FontLetterDefinition$1();
                  const rect = fontDict[fontDef].rect;
                  letter.offsetX = fontDict[fontDef].xOffset;
                  letter.offsetY = fontDict[fontDef].yOffset;
                  letter.w = rect.width;
                  letter.h = rect.height;
                  letter.u = rect.x;
                  letter.v = rect.y;
                  letter.textureID = 0;
                  letter.valid = true;
                  letter.xAdvance = fontDict[fontDef].xAdvance;
                  this.fontDefDictionary.addLetterDefinitions(fontDef, letter);
                }
              }
            }, (_initializer$2 = applyDecoratedInitializer(_class3$2.prototype, "fntDataStr", [serializable], function () {
              return '';
            }), _initializer2$2 = applyDecoratedInitializer(_class3$2.prototype, "spriteFrame", [_dec2$2], function () {
              return null;
            }), _initializer3$2 = applyDecoratedInitializer(_class3$2.prototype, "fontSize", [serializable], function () {
              return -1;
            }), _initializer4$2 = applyDecoratedInitializer(_class3$2.prototype, "fntConfig", [serializable], function () {
              return null;
            })), _class3$2)) || _class2$2));
            legacyCC.BitmapFont = BitmapFont;

            var _dec$2, _class$2;
            let LabelAtlas = exports('L', (_dec$2 = ccclass('cc.LabelAtlas'), _dec$2(_class$2 = class LabelAtlas extends BitmapFont {}) || _class$2));
            legacyCC.LabelAtlas = LabelAtlas;

            let _canvasPool;
            class CanvasPool {
              constructor() {
                this.pool = [];
              }
              static getInstance() {
                if (!_canvasPool) {
                  _canvasPool = new CanvasPool();
                }
                return _canvasPool;
              }
              get() {
                let data = this.pool.pop();
                if (!data) {
                  const canvas = ccwindow.document.createElement('canvas');
                  const context = canvas.getContext('2d');
                  data = {
                    canvas,
                    context
                  };
                }
                return data;
              }
              put(canvas) {
                if (this.pool.length >= macro.MAX_LABEL_CANVAS_POOL_SIZE) {
                  return;
                }
                this.pool.push(canvas);
              }
            } exports('p', CanvasPool);
            const WHITE = Color.WHITE.clone();
            const space = 0;
            const bleed = 2;
            class FontLetterDefinition {
              constructor() {
                this.u = 0;
                this.v = 0;
                this.w = 0;
                this.h = 0;
                this.texture = null;
                this.offsetX = 0;
                this.offsetY = 0;
                this.valid = false;
                this.xAdvance = 0;
              }
            }
            const _backgroundStyle = `rgba(255, 255, 255, ${(1 / 255).toFixed(3)})`;
            const BASELINE_OFFSET = getBaselineOffset();
            class LetterTexture {
              constructor(char, labelInfo) {
                this.image = null;
                this.labelInfo = void 0;
                this.char = void 0;
                this.data = null;
                this.canvas = null;
                this.context = null;
                this.width = 0;
                this.height = 0;
                this.offsetY = 0;
                this.hash = void 0;
                this.char = char;
                this.labelInfo = labelInfo;
                this.hash = `${getSymbolCodeAt(char, 0)}${labelInfo.hash}`;
              }
              updateRenderData() {
                this._updateProperties();
                this._updateTexture();
              }
              destroy() {
                this.image = null;
                CanvasPool.getInstance().put(this.data);
              }
              _updateProperties() {
                this.data = CanvasPool.getInstance().get();
                this.canvas = this.data.canvas;
                this.context = this.data.context;
                if (this.context) {
                  const fontScale = this.labelInfo.fontScale;
                  this.context.font = this.labelInfo.fontDesc;
                  const width = safeMeasureText(this.context, this.char, this.labelInfo.fontDesc);
                  const blank = this.labelInfo.margin * 2 + bleed;
                  this.width = parseFloat(width.toFixed(2)) * fontScale + blank;
                  this.height = (1 + BASELINE_RATIO) * this.labelInfo.fontSize * fontScale + blank;
                  this.offsetY = -(this.labelInfo.fontSize * BASELINE_RATIO) * fontScale / 2;
                }
                if (this.canvas.width !== this.width) {
                  this.canvas.width = this.width;
                }
                if (this.canvas.height !== this.height) {
                  this.canvas.height = this.height;
                }
                if (!this.image) {
                  this.image = new ImageAsset();
                }
                this.image.reset(this.canvas);
              }
              _updateTexture() {
                if (!this.context || !this.canvas) {
                  return;
                }
                const context = this.context;
                const labelInfo = this.labelInfo;
                const width = this.canvas.width;
                const height = this.canvas.height;
                const fontScale = labelInfo.fontScale;
                context.textAlign = 'center';
                context.textBaseline = 'alphabetic';
                context.clearRect(0, 0, width, height);
                context.fillStyle = _backgroundStyle;
                context.fillRect(0, 0, width, height);
                context.font = labelInfo.fontDesc.replace(/(\d+)(\.\d+)?(px|em|rem|pt)/g, (w, m, n, u) => (+m * fontScale + (+n || 0) * fontScale).toString() + u);
                const fontSize = labelInfo.fontSize * fontScale;
                const startX = width / 2;
                const startY = height / 2 + fontSize * MIDDLE_RATIO + fontSize * BASELINE_OFFSET;
                const color = labelInfo.color;
                context.lineJoin = 'round';
                context.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${1})`;
                if (labelInfo.isOutlined) {
                  const strokeColor = labelInfo.out || WHITE;
                  context.strokeStyle = `rgba(${strokeColor.r}, ${strokeColor.g}, ${strokeColor.b}, ${strokeColor.a / 255})`;
                  context.lineWidth = labelInfo.margin * 2 * fontScale;
                  context.strokeText(this.char, startX, startY);
                }
                context.fillText(this.char, startX, startY);
              }
            }
            class LetterRenderTexture extends Texture2D {
              initWithSize(width, height, format = PixelFormat.RGBA8888) {
                this.reset({
                  width,
                  height,
                  format
                });
              }
              drawTextureAt(image, x, y) {
                const gfxTexture = this.getGFXTexture();
                if (!image || !gfxTexture) {
                  return;
                }
                const gfxDevice = this._getGFXDevice();
                if (!gfxDevice) {
                  log('Unable to get device');
                  return;
                }
                const region = new BufferTextureCopy();
                region.texOffset.x = x;
                region.texOffset.y = y;
                region.texExtent.width = image.width;
                region.texExtent.height = image.height;
                gfxDevice.copyTexImagesToTexture([image.data], gfxTexture, [region]);
              }
            }
            class LetterAtlas {
              get width() {
                return this._width;
              }
              get height() {
                return this._height;
              }
              constructor(width, height) {
                this._x = space;
                this._y = space;
                this._nextY = space;
                this._width = 0;
                this._height = 0;
                this._halfBleed = 0;
                this._dirty = false;
                const texture = new LetterRenderTexture();
                texture.initWithSize(width, height);
                this.fontDefDictionary = new FontAtlas(texture);
                this._halfBleed = bleed / 2;
                this._width = width;
                this._height = height;
                director.on(Director.EVENT_BEFORE_SCENE_LAUNCH, this.beforeSceneLoad, this);
              }
              insertLetterTexture(letterTexture) {
                const texture = letterTexture.image;
                const device = director.root.device;
                if (!texture || !this.fontDefDictionary || !device) {
                  return null;
                }
                const width = texture.width;
                const height = texture.height;
                if (this._x + width + space > this._width) {
                  this._x = space;
                  this._y = this._nextY;
                }
                if (this._y + height > this._nextY) {
                  this._nextY = this._y + height + space;
                }
                if (this._nextY > this._height) {
                  warnID(12100);
                  return null;
                }
                this.fontDefDictionary.texture.drawTextureAt(texture, this._x, this._y);
                this._dirty = true;
                const letterDefinition = new FontLetterDefinition();
                letterDefinition.u = this._x + this._halfBleed;
                letterDefinition.v = this._y + this._halfBleed;
                letterDefinition.texture = this.fontDefDictionary.texture;
                letterDefinition.valid = true;
                letterDefinition.w = letterTexture.width - bleed;
                letterDefinition.h = letterTexture.height - bleed;
                letterDefinition.xAdvance = letterDefinition.w;
                letterDefinition.offsetY = letterTexture.offsetY;
                this._x += width + space;
                this.fontDefDictionary.addLetterDefinitions(letterTexture.hash, letterDefinition);
                return letterDefinition;
              }
              update() {
                if (!this._dirty) {
                  return;
                }
                this._dirty = false;
              }
              reset() {
                this._x = space;
                this._y = space;
                this._nextY = space;
                this.fontDefDictionary.clear();
              }
              destroy() {
                this.reset();
                if (this.fontDefDictionary) {
                  this.fontDefDictionary.texture.destroy();
                  this.fontDefDictionary.texture = null;
                }
              }
              getTexture() {
                return this.fontDefDictionary.getTexture();
              }
              beforeSceneLoad() {
                this.clearAllCache();
              }
              clearAllCache() {
                this.destroy();
                const texture = new LetterRenderTexture();
                texture.initWithSize(this._width, this._height);
                this.fontDefDictionary.texture = texture;
              }
              getLetter(key) {
                return this.fontDefDictionary.letterDefinitions[key];
              }
              getLetterDefinitionForChar(char, labelInfo) {
                const hash = getSymbolCodeAt(char, 0) + labelInfo.hash;
                let letter = this.fontDefDictionary.letterDefinitions[hash];
                if (!letter) {
                  const temp = new LetterTexture(char, labelInfo);
                  temp.updateRenderData();
                  letter = this.insertLetterTexture(temp);
                  temp.destroy();
                }
                return letter;
              }
            } exports('r', LetterAtlas);
            const shareLabelInfo = exports('q', {
              fontAtlas: null,
              fontSize: 0,
              lineHeight: 0,
              hAlign: 0,
              vAlign: 0,
              hash: '',
              fontFamily: '',
              fontDesc: 'Arial',
              color: Color.WHITE.clone(),
              isOutlined: false,
              out: Color.WHITE.clone(),
              margin: 0,
              fontScale: 1
            });
            function computeHash(labelInfo) {
              const hashData = '';
              const color = labelInfo.color.toHEX();
              let out = '';
              if (labelInfo.isOutlined && labelInfo.margin > 0) {
                out = out + labelInfo.margin + labelInfo.out.toHEX();
              }
              return hashData + labelInfo.fontSize + labelInfo.fontFamily + color + out;
            }

            class TextStyle {
              constructor() {
                this.isBold = false;
                this.isItalic = false;
                this.isUnderline = false;
                this.underlineHeight = 1;
                this.isOutlined = false;
                this.outlineColor = Color.WHITE.clone();
                this.outlineWidth = 1;
                this.hasShadow = false;
                this.shadowColor = Color.BLACK.clone();
                this.shadowBlur = 2;
                this.shadowOffsetX = 0;
                this.shadowOffsetY = 0;
                this.color = Color.WHITE.clone();
                this.fontSize = 40;
                this.actualFontSize = 0;
                this.isSystemFontUsed = false;
                this.originFontSize = 0;
                this.bmfontScale = 1.0;
                this.fontFamily = 'Arial';
                this.fontDesc = '';
                this.fntConfig = null;
                this.spriteFrame = null;
                this.fontScale = 1;
              }
              reset() {
                this.isBold = false;
                this.isItalic = false;
                this.isUnderline = false;
                this.underlineHeight = 1;
                this.isOutlined = false;
                this.outlineColor.set();
                this.outlineWidth = 1;
                this.hasShadow = false;
                this.shadowColor.set();
                this.shadowBlur = 2;
                this.shadowOffsetX = 0;
                this.shadowOffsetY = 0;
              }
            }

            class TextLayout {
              constructor() {
                this.horizontalAlign = 0;
                this.verticalAlign = 0;
                this.wrapping = true;
                this.overFlow = 0;
                this.lineHeight = 10;
                this.maxLineWidth = 0;
                this.spacingX = 0;
                this.textWidthTemp = 0;
                this.textHeightTemp = 0;
                this.textDimensions = new Size();
                this.horizontalKerning = [];
                this.numberOfLines = 1;
                this.linesOffsetX = [];
                this.letterOffsetY = 0;
                this.tailoredTopY = 0;
                this.tailoredBottomY = 0;
                this.textDesiredHeight = 0;
                this.linesWidth = [];
              }
              reset() {
                this.horizontalAlign = 0;
                this.verticalAlign = 0;
                this.wrapping = true;
                this.overFlow = 0;
                this.lineHeight = 10;
                this.maxLineWidth = 0;
                this.spacingX = 0;
                this.textWidthTemp = 0;
                this.textHeightTemp = 0;
                this.textDimensions.set();
                this.horizontalKerning.length = 0;
                this.numberOfLines = 1;
                this.linesOffsetX.length = 0;
                this.letterOffsetY = 0;
                this.tailoredTopY = 0;
                this.tailoredBottomY = 0;
                this.textDesiredHeight = 0;
                this.linesWidth.length = 0;
              }
            }

            class TextOutputLayoutData {
              constructor() {
                this.parsedString = [];
                this.nodeContentSize = Size.ZERO.clone();
                this.canvasSize = new Size();
                this.canvasPadding = new Rect();
                this.contentSizeExtend = Size.ZERO.clone();
                this.startPosition = Vec2.ZERO.clone();
              }
              reset() {
                this.parsedString.length = 0;
                this.nodeContentSize.set(0, 0);
                this.canvasSize.set();
                this.canvasPadding.set();
                this.contentSizeExtend.set();
                this.startPosition.set();
              }
            }
            class TextOutputRenderData {
              constructor() {
                this.quadCount = 0;
                this.vertexBuffer = [];
                this.texture = null;
                this.uiTransAnchorX = 0.5;
                this.uiTransAnchorY = 0.5;
              }
              reset() {
                this.quadCount = 0;
                this.vertexBuffer.length = 0;
                this.texture = null;
                this.uiTransAnchorX = 0.5;
                this.uiTransAnchorY = 0.5;
              }
            }

            var _dec$1, _dec2$1, _dec3$1, _dec4$1, _dec5$1, _dec6$1, _dec7$1, _class$1, _class2$1, _initializer$1, _initializer2$1, _initializer3$1, _initializer4$1, _initializer5$1, _initializer6$1, _initializer7$1, _initializer8$1, _initializer9$1, _initializer10$1, _initializer11, _initializer12, _initializer13, _initializer14, _initializer15, _initializer16, _initializer17, _initializer18, _initializer19, _initializer20, _initializer21, _initializer22, _initializer23, _initializer24, _class3$1;
            const tempColor = Color.WHITE.clone();
            let HorizontalTextAlignment; exports('H', HorizontalTextAlignment);
            (function (HorizontalTextAlignment) {
              HorizontalTextAlignment[HorizontalTextAlignment["LEFT"] = 0] = "LEFT";
              HorizontalTextAlignment[HorizontalTextAlignment["CENTER"] = 1] = "CENTER";
              HorizontalTextAlignment[HorizontalTextAlignment["RIGHT"] = 2] = "RIGHT";
            })(HorizontalTextAlignment || (exports('H', HorizontalTextAlignment = {})));
            ccenum(HorizontalTextAlignment);
            let VerticalTextAlignment; exports('V', VerticalTextAlignment);
            (function (VerticalTextAlignment) {
              VerticalTextAlignment[VerticalTextAlignment["TOP"] = 0] = "TOP";
              VerticalTextAlignment[VerticalTextAlignment["CENTER"] = 1] = "CENTER";
              VerticalTextAlignment[VerticalTextAlignment["BOTTOM"] = 2] = "BOTTOM";
            })(VerticalTextAlignment || (exports('V', VerticalTextAlignment = {})));
            ccenum(VerticalTextAlignment);
            let Overflow; exports('O', Overflow);
            (function (Overflow) {
              Overflow[Overflow["NONE"] = 0] = "NONE";
              Overflow[Overflow["CLAMP"] = 1] = "CLAMP";
              Overflow[Overflow["SHRINK"] = 2] = "SHRINK";
              Overflow[Overflow["RESIZE_HEIGHT"] = 3] = "RESIZE_HEIGHT";
            })(Overflow || (exports('O', Overflow = {})));
            ccenum(Overflow);
            let CacheMode; exports('C', CacheMode);
            (function (CacheMode) {
              CacheMode[CacheMode["NONE"] = 0] = "NONE";
              CacheMode[CacheMode["BITMAP"] = 1] = "BITMAP";
              CacheMode[CacheMode["CHAR"] = 2] = "CHAR";
            })(CacheMode || (exports('C', CacheMode = {})));
            ccenum(CacheMode);
            let Label = exports('b', (_dec$1 = ccclass('cc.Label'), _dec2$1 = executionOrder(110), _dec3$1 = type(HorizontalTextAlignment), _dec4$1 = type(VerticalTextAlignment), _dec5$1 = type(Overflow), _dec6$1 = type(Font), _dec7$1 = type(CacheMode), _dec$1(_class$1 = _dec2$1(_class$1 = (_class2$1 = (_class3$1 = class Label extends UIRenderer {
              get string() {
                return this._string;
              }
              set string(value) {
                if (value === null || value === undefined) {
                  value = '';
                } else {
                  value = value.toString();
                }
                if (this._string === value) {
                  return;
                }
                this._string = value;
                this.markForUpdateRenderData();
              }
              get horizontalAlign() {
                return this._horizontalAlign;
              }
              set horizontalAlign(value) {
                if (this._horizontalAlign === value) {
                  return;
                }
                this._horizontalAlign = value;
                this.markForUpdateRenderData();
              }
              get verticalAlign() {
                return this._verticalAlign;
              }
              set verticalAlign(value) {
                if (this._verticalAlign === value) {
                  return;
                }
                this._verticalAlign = value;
                this.markForUpdateRenderData();
              }
              get actualFontSize() {
                return this._actualFontSize;
              }
              set actualFontSize(value) {
                this._actualFontSize = value;
              }
              get fontSize() {
                return this._fontSize;
              }
              set fontSize(value) {
                if (this._fontSize === value) {
                  return;
                }
                this._fontSize = value;
                this.markForUpdateRenderData();
              }
              get lineHeight() {
                return this._lineHeight;
              }
              set lineHeight(value) {
                if (this._lineHeight === value) {
                  return;
                }
                this._lineHeight = value;
                this.markForUpdateRenderData();
              }
              get spacingX() {
                return this._spacingX;
              }
              set spacingX(value) {
                if (this._spacingX === value) {
                  return;
                }
                this._spacingX = value;
                this.markForUpdateRenderData();
              }
              get overflow() {
                return this._overflow;
              }
              set overflow(value) {
                if (this._overflow === value) {
                  return;
                }
                this._overflow = value;
                this.markForUpdateRenderData();
              }
              get enableWrapText() {
                return this._enableWrapText;
              }
              set enableWrapText(value) {
                if (this._enableWrapText === value) {
                  return;
                }
                this._enableWrapText = value;
                this.markForUpdateRenderData();
              }
              get useSystemFont() {
                return this._isSystemFontUsed;
              }
              set useSystemFont(value) {
                if (this._isSystemFontUsed === value) {
                  return;
                }
                this.destroyRenderData();
                this._isSystemFontUsed = !!value;
                if (value) {
                  this.font = null;
                }
                this._flushAssembler();
                this.markForUpdateRenderData();
              }
              get fontFamily() {
                return this._fontFamily;
              }
              set fontFamily(value) {
                if (this._fontFamily === value) {
                  return;
                }
                this._fontFamily = value;
                this.markForUpdateRenderData();
              }
              get font() {
                return this._font;
              }
              set font(value) {
                if (this._font === value) {
                  return;
                }
                this._isSystemFontUsed = !value;
                this._font = value;
                this.destroyRenderData();
                this._fontAtlas = null;
                this.updateRenderData(true);
              }
              get cacheMode() {
                return this._cacheMode;
              }
              set cacheMode(value) {
                if (this._cacheMode === value) {
                  return;
                }
                if (this._cacheMode === CacheMode.BITMAP && !(this._font instanceof BitmapFont) && this._ttfSpriteFrame) {
                  this._ttfSpriteFrame._resetDynamicAtlasFrame();
                }
                if (this._cacheMode === CacheMode.CHAR) {
                  this._ttfSpriteFrame = null;
                }
                this._cacheMode = value;
                this.updateRenderData(true);
              }
              get isBold() {
                return this._isBold;
              }
              set isBold(value) {
                if (this._isBold === value) {
                  return;
                }
                this._isBold = value;
                this.markForUpdateRenderData();
              }
              get isItalic() {
                return this._isItalic;
              }
              set isItalic(value) {
                if (this._isItalic === value) {
                  return;
                }
                this._isItalic = value;
                this.markForUpdateRenderData();
              }
              get isUnderline() {
                return this._isUnderline;
              }
              set isUnderline(value) {
                if (this._isUnderline === value) {
                  return;
                }
                this._isUnderline = value;
                this.markForUpdateRenderData();
              }
              get underlineHeight() {
                return this._underlineHeight;
              }
              set underlineHeight(value) {
                if (this._underlineHeight === value) return;
                this._underlineHeight = value;
                this.markForUpdateRenderData();
              }
              get enableOutline() {
                return this._enableOutline;
              }
              set enableOutline(value) {
                if (this._enableOutline === value) return;
                this._enableOutline = value;
                this.markForUpdateRenderData();
              }
              get outlineColor() {
                return this._outlineColor;
              }
              set outlineColor(value) {
                if (this._outlineColor === value) return;
                this._outlineColor.set(value);
                this.markForUpdateRenderData();
              }
              get outlineWidth() {
                return this._outlineWidth;
              }
              set outlineWidth(value) {
                if (this._outlineWidth === value) return;
                this._outlineWidth = value;
                this.markForUpdateRenderData();
              }
              get enableShadow() {
                return this._enableShadow;
              }
              set enableShadow(value) {
                if (this._enableShadow === value) return;
                this._enableShadow = value;
                this.markForUpdateRenderData();
              }
              get shadowColor() {
                return this._shadowColor;
              }
              set shadowColor(value) {
                if (this._shadowColor === value) return;
                this._shadowColor.set(value);
                this.markForUpdateRenderData();
              }
              get shadowOffset() {
                return this._shadowOffset;
              }
              set shadowOffset(value) {
                if (this._shadowOffset === value) return;
                this._shadowOffset.set(value);
                this.markForUpdateRenderData();
              }
              get shadowBlur() {
                return this._shadowBlur;
              }
              set shadowBlur(value) {
                if (this._shadowBlur === value) return;
                this._shadowBlur = value;
                this.markForUpdateRenderData();
              }
              get spriteFrame() {
                return this._texture;
              }
              get ttfSpriteFrame() {
                return this._ttfSpriteFrame;
              }
              get assemblerData() {
                return this._assemblerData;
              }
              get fontAtlas() {
                return this._fontAtlas;
              }
              set fontAtlas(value) {
                this._fontAtlas = value;
              }
              get _bmFontOriginalSize() {
                if (this._font instanceof BitmapFont) {
                  return this._font.fontSize;
                } else {
                  return -1;
                }
              }
              get textStyle() {
                return this._textStyle;
              }
              get textLayout() {
                return this._textLayout;
              }
              get textRenderData() {
                return this._textRenderData;
              }
              get textLayoutData() {
                return this._textLayoutData;
              }
              get contentWidth() {
                return this._contentWidth;
              }
              set contentWidth(val) {
                this._contentWidth = val;
              }
              constructor() {
                super();
                this._string = _initializer$1 && _initializer$1();
                this._horizontalAlign = _initializer2$1 && _initializer2$1();
                this._verticalAlign = _initializer3$1 && _initializer3$1();
                this._actualFontSize = _initializer4$1 && _initializer4$1();
                this._fontSize = _initializer5$1 && _initializer5$1();
                this._fontFamily = _initializer6$1 && _initializer6$1();
                this._lineHeight = _initializer7$1 && _initializer7$1();
                this._overflow = _initializer8$1 && _initializer8$1();
                this._enableWrapText = _initializer9$1 && _initializer9$1();
                this._font = _initializer10$1 && _initializer10$1();
                this._isSystemFontUsed = _initializer11 && _initializer11();
                this._spacingX = _initializer12 && _initializer12();
                this._isItalic = _initializer13 && _initializer13();
                this._isBold = _initializer14 && _initializer14();
                this._isUnderline = _initializer15 && _initializer15();
                this._underlineHeight = _initializer16 && _initializer16();
                this._cacheMode = _initializer17 && _initializer17();
                this._enableOutline = _initializer18 && _initializer18();
                this._outlineColor = _initializer19 && _initializer19();
                this._outlineWidth = _initializer20 && _initializer20();
                this._enableShadow = _initializer21 && _initializer21();
                this._shadowColor = _initializer22 && _initializer22();
                this._shadowOffset = _initializer23 && _initializer23();
                this._shadowBlur = _initializer24 && _initializer24();
                this._N$file = null;
                this._texture = null;
                this._ttfSpriteFrame = null;
                this._userDefinedFont = null;
                this._assemblerData = null;
                this._fontAtlas = null;
                this._letterTexture = null;
                this._contentWidth = 0;
                this._textStyle = null;
                this._textLayout = null;
                this._textRenderData = null;
                this._textLayoutData = null;
                this._ttfSpriteFrame = null;
                this._textStyle = new TextStyle();
                this._textLayout = new TextLayout();
                this._textLayoutData = new TextOutputLayoutData();
                this._textRenderData = new TextOutputRenderData();
              }
              onEnable() {
                super.onEnable();
                if (!this._font && !this._isSystemFontUsed) {
                  this.useSystemFont = true;
                }
                if (this._isSystemFontUsed && !this._fontFamily) {
                  this.fontFamily = 'Arial';
                }
                this._applyFontTexture();
              }
              destroyTtfSpriteFrame() {
                if (!this._ttfSpriteFrame) {
                  return;
                }
                this._ttfSpriteFrame._resetDynamicAtlasFrame();
                const tex = this._ttfSpriteFrame.texture;
                this._ttfSpriteFrame.destroy();
                if (tex) {
                  const tex2d = tex;
                  if (tex2d.image) {
                    tex2d.image.destroy();
                  }
                  tex.destroy();
                }
                this._ttfSpriteFrame = null;
              }
              _onPreDestroy() {
                super._onPreDestroy();
                if (!this._isOnLoadCalled) {
                  this.destroyTtfSpriteFrame();
                }
              }
              onDestroy() {
                if (this._assembler && this._assembler.resetAssemblerData) {
                  this._assembler.resetAssemblerData(this._assemblerData);
                }
                this._assemblerData = null;
                this.destroyTtfSpriteFrame();
                this._letterTexture = null;
                super.onDestroy();
              }
              updateRenderData(force = false) {
                if (force) {
                  this._flushAssembler();
                  if (this.renderData) this.renderData.vertDirty = true;
                  this._applyFontTexture();
                }
                if (this._assembler) {
                  this._assembler.updateRenderData(this);
                }
              }
              _render(render) {
                render.commitComp(this, this.renderData, this._texture, this._assembler, null);
              }
              _updateColor() {
                super._updateColor();
                this.markForUpdateRenderData();
              }
              setEntityColor(color) {
                {
                  if (this._font instanceof BitmapFont) {
                    this._renderEntity.color = color;
                  } else {
                    tempColor.set(255, 255, 255, color.a);
                    this._renderEntity.color = tempColor;
                  }
                }
              }
              _canRender() {
                if (!super._canRender() || !this._string) {
                  return false;
                }
                const font = this._font;
                if (font && font instanceof BitmapFont) {
                  const spriteFrame = font.spriteFrame;
                  if (!spriteFrame || !spriteFrame.texture) {
                    return false;
                  }
                }
                return true;
              }
              _flushAssembler() {
                const assembler = Label.Assembler.getAssembler(this);
                if (this._assembler !== assembler) {
                  this.destroyRenderData();
                  this._assembler = assembler;
                  this.textStyle.reset();
                  this.textLayout.reset();
                  this.textLayoutData.reset();
                  this.textRenderData.reset();
                }
                if (!this.renderData) {
                  if (this._assembler && this._assembler.createData) {
                    this._renderData = this._assembler.createData(this);
                    this.renderData.material = this.material;
                    this._updateColor();
                  }
                }
              }
              _applyFontTexture() {
                this.markForUpdateRenderData();
                const font = this._font;
                if (font instanceof BitmapFont) {
                  const spriteFrame = font.spriteFrame;
                  if (spriteFrame && spriteFrame.texture) {
                    this._texture = spriteFrame;
                    if (this.renderData) {
                      this.renderData.textureDirty = true;
                    }
                    this.changeMaterialForDefine();
                    if (this._assembler) {
                      this._assembler.updateRenderData(this);
                    }
                  }
                } else {
                  if (this.cacheMode === CacheMode.CHAR) {
                    this._letterTexture = this._assembler.getAssemblerData();
                    this._texture = this._letterTexture;
                  } else if (!this._ttfSpriteFrame) {
                    this._ttfSpriteFrame = new SpriteFrame();
                    this._assemblerData = this._assembler.getAssemblerData();
                    const image = new ImageAsset(this._assemblerData.canvas);
                    const texture = new Texture2D();
                    texture.image = image;
                    this._ttfSpriteFrame.texture = texture;
                  }
                  if (this.cacheMode !== CacheMode.CHAR) {
                    this._texture = this._ttfSpriteFrame;
                  }
                  this.changeMaterialForDefine();
                }
              }
              changeMaterialForDefine() {
                if (!this._texture) {
                  return;
                }
                let value = false;
                if (this.cacheMode !== CacheMode.CHAR) {
                  const spriteFrame = this._texture;
                  const texture = spriteFrame.texture;
                  if (texture instanceof TextureBase) {
                    const format = texture.getPixelFormat();
                    value = format === PixelFormat.RGBA_ETC1 || format === PixelFormat.RGB_A_PVRTC_4BPPV1 || format === PixelFormat.RGB_A_PVRTC_2BPPV1;
                  }
                }
                if (value) {
                  this._instanceMaterialType = InstanceMaterialType.USE_ALPHA_SEPARATED;
                } else {
                  this._instanceMaterialType = InstanceMaterialType.ADD_COLOR_AND_TEXTURE;
                }
                this.updateMaterial();
              }
              _updateBlendFunc() {
                super._updateBlendFunc();
              }
            }, _class3$1.HorizontalAlign = HorizontalTextAlignment, _class3$1.VerticalAlign = VerticalTextAlignment, _class3$1.Overflow = Overflow, _class3$1.CacheMode = CacheMode, _class3$1._canvasPool = CanvasPool.getInstance(), _class3$1), (_applyDecoratedDescriptor(_class2$1.prototype, "horizontalAlign", [_dec3$1], Object.getOwnPropertyDescriptor(_class2$1.prototype, "horizontalAlign"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "verticalAlign", [_dec4$1], Object.getOwnPropertyDescriptor(_class2$1.prototype, "verticalAlign"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "overflow", [_dec5$1], Object.getOwnPropertyDescriptor(_class2$1.prototype, "overflow"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "font", [_dec6$1], Object.getOwnPropertyDescriptor(_class2$1.prototype, "font"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "cacheMode", [_dec7$1], Object.getOwnPropertyDescriptor(_class2$1.prototype, "cacheMode"), _class2$1.prototype), _initializer$1 = applyDecoratedInitializer(_class2$1.prototype, "_string", [serializable], function () {
              return 'label';
            }), _initializer2$1 = applyDecoratedInitializer(_class2$1.prototype, "_horizontalAlign", [serializable], function () {
              return HorizontalTextAlignment.CENTER;
            }), _initializer3$1 = applyDecoratedInitializer(_class2$1.prototype, "_verticalAlign", [serializable], function () {
              return VerticalTextAlignment.CENTER;
            }), _initializer4$1 = applyDecoratedInitializer(_class2$1.prototype, "_actualFontSize", [serializable], function () {
              return 0;
            }), _initializer5$1 = applyDecoratedInitializer(_class2$1.prototype, "_fontSize", [serializable], function () {
              return 40;
            }), _initializer6$1 = applyDecoratedInitializer(_class2$1.prototype, "_fontFamily", [serializable], function () {
              return 'Arial';
            }), _initializer7$1 = applyDecoratedInitializer(_class2$1.prototype, "_lineHeight", [serializable], function () {
              return 40;
            }), _initializer8$1 = applyDecoratedInitializer(_class2$1.prototype, "_overflow", [serializable], function () {
              return Overflow.NONE;
            }), _initializer9$1 = applyDecoratedInitializer(_class2$1.prototype, "_enableWrapText", [serializable], function () {
              return true;
            }), _initializer10$1 = applyDecoratedInitializer(_class2$1.prototype, "_font", [serializable], function () {
              return null;
            }), _initializer11 = applyDecoratedInitializer(_class2$1.prototype, "_isSystemFontUsed", [serializable], function () {
              return true;
            }), _initializer12 = applyDecoratedInitializer(_class2$1.prototype, "_spacingX", [serializable], function () {
              return 0;
            }), _initializer13 = applyDecoratedInitializer(_class2$1.prototype, "_isItalic", [serializable], function () {
              return false;
            }), _initializer14 = applyDecoratedInitializer(_class2$1.prototype, "_isBold", [serializable], function () {
              return false;
            }), _initializer15 = applyDecoratedInitializer(_class2$1.prototype, "_isUnderline", [serializable], function () {
              return false;
            }), _initializer16 = applyDecoratedInitializer(_class2$1.prototype, "_underlineHeight", [serializable], function () {
              return 2;
            }), _initializer17 = applyDecoratedInitializer(_class2$1.prototype, "_cacheMode", [serializable], function () {
              return CacheMode.NONE;
            }), _initializer18 = applyDecoratedInitializer(_class2$1.prototype, "_enableOutline", [serializable], function () {
              return false;
            }), _initializer19 = applyDecoratedInitializer(_class2$1.prototype, "_outlineColor", [serializable], function () {
              return new Color(0, 0, 0, 255);
            }), _initializer20 = applyDecoratedInitializer(_class2$1.prototype, "_outlineWidth", [serializable], function () {
              return 2;
            }), _initializer21 = applyDecoratedInitializer(_class2$1.prototype, "_enableShadow", [serializable], function () {
              return false;
            }), _initializer22 = applyDecoratedInitializer(_class2$1.prototype, "_shadowColor", [serializable], function () {
              return new Color(0, 0, 0, 255);
            }), _initializer23 = applyDecoratedInitializer(_class2$1.prototype, "_shadowOffset", [serializable], function () {
              return new Vec2(2, 2);
            }), _initializer24 = applyDecoratedInitializer(_class2$1.prototype, "_shadowBlur", [serializable], function () {
              return 2;
            })), _class2$1)) || _class$1) || _class$1));
            legacyCC.Label = Label;

            var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6, _initializer7, _initializer8, _initializer9, _initializer10, _class3;
            let SpriteType;
            (function (SpriteType) {
              SpriteType[SpriteType["SIMPLE"] = 0] = "SIMPLE";
              SpriteType[SpriteType["SLICED"] = 1] = "SLICED";
              SpriteType[SpriteType["TILED"] = 2] = "TILED";
              SpriteType[SpriteType["FILLED"] = 3] = "FILLED";
            })(SpriteType || (SpriteType = {}));
            ccenum(SpriteType);
            var FillType;
            (function (FillType) {
              FillType[FillType["HORIZONTAL"] = 0] = "HORIZONTAL";
              FillType[FillType["VERTICAL"] = 1] = "VERTICAL";
              FillType[FillType["RADIAL"] = 2] = "RADIAL";
            })(FillType || (FillType = {}));
            ccenum(FillType);
            var SizeMode;
            (function (SizeMode) {
              SizeMode[SizeMode["CUSTOM"] = 0] = "CUSTOM";
              SizeMode[SizeMode["TRIMMED"] = 1] = "TRIMMED";
              SizeMode[SizeMode["RAW"] = 2] = "RAW";
            })(SizeMode || (SizeMode = {}));
            ccenum(SizeMode);
            var EventType;
            (function (EventType) {
              EventType["SPRITE_FRAME_CHANGED"] = "spriteframe-changed";
            })(EventType || (EventType = {}));
            let Sprite = exports('a', (_dec = ccclass('cc.Sprite'), _dec2 = executionOrder(110), _dec3 = type(SpriteAtlas), _dec4 = type(SpriteFrame), _dec5 = type(SpriteType), _dec6 = type(FillType), _dec7 = type(SizeMode), _dec(_class = _dec2(_class = (_class2 = (_class3 = class Sprite extends UIRenderer {
              constructor(...args) {
                super(...args);
                this._spriteFrame = _initializer && _initializer();
                this._type = _initializer2 && _initializer2();
                this._fillType = _initializer3 && _initializer3();
                this._sizeMode = _initializer4 && _initializer4();
                this._fillCenter = _initializer5 && _initializer5();
                this._fillStart = _initializer6 && _initializer6();
                this._fillRange = _initializer7 && _initializer7();
                this._isTrimmedMode = _initializer8 && _initializer8();
                this._useGrayscale = _initializer9 && _initializer9();
                this._atlas = _initializer10 && _initializer10();
              }
              get spriteAtlas() {
                return this._atlas;
              }
              set spriteAtlas(value) {
                if (this._atlas === value) {
                  return;
                }
                this._atlas = value;
              }
              get spriteFrame() {
                return this._spriteFrame;
              }
              set spriteFrame(value) {
                if (this._spriteFrame === value) {
                  return;
                }
                const lastSprite = this._spriteFrame;
                this._spriteFrame = value;
                this.markForUpdateRenderData();
                this._applySpriteFrame(lastSprite);
              }
              get type() {
                return this._type;
              }
              set type(value) {
                if (this._type !== value) {
                  this._type = value;
                  this._flushAssembler();
                }
              }
              get fillType() {
                return this._fillType;
              }
              set fillType(value) {
                if (this._fillType !== value) {
                  if (value === FillType.RADIAL || this._fillType === FillType.RADIAL) {
                    this.destroyRenderData();
                  } else if (this.renderData) {
                    this.markForUpdateRenderData(true);
                  }
                }
                this._fillType = value;
                this._flushAssembler();
              }
              get fillCenter() {
                return this._fillCenter;
              }
              set fillCenter(value) {
                this._fillCenter.x = value.x;
                this._fillCenter.y = value.y;
                if (this._type === SpriteType.FILLED && this.renderData) {
                  this.markForUpdateRenderData();
                }
              }
              get fillStart() {
                return this._fillStart;
              }
              set fillStart(value) {
                this._fillStart = clamp(value, 0, 1);
                if (this._type === SpriteType.FILLED && this.renderData) {
                  this.markForUpdateRenderData();
                  this._updateUVs();
                }
              }
              get fillRange() {
                return this._fillRange;
              }
              set fillRange(value) {
                this._fillRange = clamp(value, -1, 1);
                if (this._type === SpriteType.FILLED && this.renderData) {
                  this.markForUpdateRenderData();
                  this._updateUVs();
                }
              }
              get trim() {
                return this._isTrimmedMode;
              }
              set trim(value) {
                if (this._isTrimmedMode === value) {
                  return;
                }
                this._isTrimmedMode = value;
                if (this._type === SpriteType.SIMPLE && this.renderData) {
                  this.markForUpdateRenderData(true);
                }
              }
              get grayscale() {
                return this._useGrayscale;
              }
              set grayscale(value) {
                if (this._useGrayscale === value) {
                  return;
                }
                this._useGrayscale = value;
                this.changeMaterialForDefine();
                this.updateMaterial();
              }
              get sizeMode() {
                return this._sizeMode;
              }
              set sizeMode(value) {
                if (this._sizeMode === value) {
                  return;
                }
                this._sizeMode = value;
                if (value !== SizeMode.CUSTOM) {
                  this._applySpriteSize();
                }
              }
              __preload() {
                this.changeMaterialForDefine();
                super.__preload();
              }
              onEnable() {
                super.onEnable();
                this._activateMaterial();
                const spriteFrame = this._spriteFrame;
                if (spriteFrame) {
                  this._updateUVs();
                  if (this._type === SpriteType.SLICED) {
                    spriteFrame.on(SpriteFrame.EVENT_UV_UPDATED, this._updateUVs, this);
                  }
                }
              }
              onDisable() {
                super.onDisable();
                if (this._spriteFrame && this._type === SpriteType.SLICED) {
                  this._spriteFrame.off(SpriteFrame.EVENT_UV_UPDATED, this._updateUVs, this);
                }
              }
              onDestroy() {
                super.onDestroy();
              }
              changeSpriteFrameFromAtlas(name) {
                if (!this._atlas) {
                  console.warn('SpriteAtlas is null.');
                  return;
                }
                const sprite = this._atlas.getSpriteFrame(name);
                this.spriteFrame = sprite;
              }
              changeMaterialForDefine() {
                let texture;
                const lastInstanceMaterialType = this._instanceMaterialType;
                if (this._spriteFrame) {
                  texture = this._spriteFrame.texture;
                }
                let value = false;
                if (texture instanceof TextureBase) {
                  const format = texture.getPixelFormat();
                  value = format === PixelFormat.RGBA_ETC1 || format === PixelFormat.RGB_A_PVRTC_4BPPV1 || format === PixelFormat.RGB_A_PVRTC_2BPPV1;
                }
                if (value && this.grayscale) {
                  this._instanceMaterialType = InstanceMaterialType.USE_ALPHA_SEPARATED_AND_GRAY;
                } else if (value) {
                  this._instanceMaterialType = InstanceMaterialType.USE_ALPHA_SEPARATED;
                } else if (this.grayscale) {
                  this._instanceMaterialType = InstanceMaterialType.GRAYSCALE;
                } else {
                  this._instanceMaterialType = InstanceMaterialType.ADD_COLOR_AND_TEXTURE;
                }
                if (lastInstanceMaterialType !== this._instanceMaterialType) {
                  this.updateMaterial();
                }
              }
              _updateBuiltinMaterial() {
                let mat = super._updateBuiltinMaterial();
                if (this.spriteFrame && this.spriteFrame.texture instanceof RenderTexture) {
                  const defines = {
                    SAMPLE_FROM_RT: true,
                    ...mat.passes[0].defines
                  };
                  const renderMat = new Material();
                  renderMat.initialize({
                    effectAsset: mat.effectAsset,
                    defines
                  });
                  mat = renderMat;
                }
                return mat;
              }
              _render(render) {
                render.commitComp(this, this.renderData, this._spriteFrame, this._assembler, null);
              }
              _canRender() {
                if (!super._canRender()) {
                  return false;
                }
                const spriteFrame = this._spriteFrame;
                if (!spriteFrame || !spriteFrame.texture) {
                  return false;
                }
                return true;
              }
              _flushAssembler() {
                const assembler = Sprite.Assembler.getAssembler(this);
                if (this._assembler !== assembler) {
                  this.destroyRenderData();
                  this._assembler = assembler;
                }
                if (!this._renderData) {
                  if (this._assembler && this._assembler.createData) {
                    this._renderData = this._assembler.createData(this);
                    this._renderData.material = this.getRenderMaterial(0);
                    this.markForUpdateRenderData();
                    if (this.spriteFrame) {
                      this._assembler.updateUVs(this);
                    }
                    this._updateColor();
                  }
                }
                if (this._spriteFrame) {
                  if (this._type === SpriteType.SLICED) {
                    this._spriteFrame.on(SpriteFrame.EVENT_UV_UPDATED, this._updateUVs, this);
                  } else {
                    this._spriteFrame.off(SpriteFrame.EVENT_UV_UPDATED, this._updateUVs, this);
                  }
                }
              }
              _applySpriteSize() {
                if (this._spriteFrame) {
                  if (!this._spriteFrame.isDefault) {
                    if (SizeMode.RAW === this._sizeMode) {
                      const size = this._spriteFrame.originalSize;
                      this.node._uiProps.uiTransformComp.setContentSize(size);
                    } else if (SizeMode.TRIMMED === this._sizeMode) {
                      const rect = this._spriteFrame.rect;
                      this.node._uiProps.uiTransformComp.setContentSize(rect.width, rect.height);
                    }
                  }
                }
              }
              _resized() {
                {
                  return;
                }
              }
              _activateMaterial() {
                const spriteFrame = this._spriteFrame;
                const material = this.getRenderMaterial(0);
                if (spriteFrame) {
                  if (material) {
                    this.markForUpdateRenderData();
                  }
                }
                if (this.renderData) {
                  this.renderData.material = material;
                }
              }
              _updateUVs() {
                if (this._assembler) {
                  this._assembler.updateUVs(this);
                }
              }
              _applySpriteFrame(oldFrame) {
                const spriteFrame = this._spriteFrame;
                if (oldFrame && this._type === SpriteType.SLICED) {
                  oldFrame.off(SpriteFrame.EVENT_UV_UPDATED, this._updateUVs, this);
                }
                let textureChanged = false;
                if (spriteFrame) {
                  if (!oldFrame || oldFrame.texture !== spriteFrame.texture) {
                    textureChanged = true;
                  }
                  if (textureChanged) {
                    if (this.renderData) this.renderData.textureDirty = true;
                    this.changeMaterialForDefine();
                  }
                  this._applySpriteSize();
                  if (this._type === SpriteType.SLICED) {
                    spriteFrame.on(SpriteFrame.EVENT_UV_UPDATED, this._updateUVs, this);
                  }
                }
              }
            }, _class3.FillType = FillType, _class3.Type = SpriteType, _class3.SizeMode = SizeMode, _class3.EventType = EventType, _class3), (_applyDecoratedDescriptor(_class2.prototype, "spriteAtlas", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "spriteAtlas"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "spriteFrame", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "spriteFrame"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "type", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "type"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "fillType", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "fillType"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "sizeMode", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "sizeMode"), _class2.prototype), _initializer = applyDecoratedInitializer(_class2.prototype, "_spriteFrame", [serializable], function () {
              return null;
            }), _initializer2 = applyDecoratedInitializer(_class2.prototype, "_type", [serializable], function () {
              return SpriteType.SIMPLE;
            }), _initializer3 = applyDecoratedInitializer(_class2.prototype, "_fillType", [serializable], function () {
              return FillType.HORIZONTAL;
            }), _initializer4 = applyDecoratedInitializer(_class2.prototype, "_sizeMode", [serializable], function () {
              return SizeMode.TRIMMED;
            }), _initializer5 = applyDecoratedInitializer(_class2.prototype, "_fillCenter", [serializable], function () {
              return new Vec2(0, 0);
            }), _initializer6 = applyDecoratedInitializer(_class2.prototype, "_fillStart", [serializable], function () {
              return 0;
            }), _initializer7 = applyDecoratedInitializer(_class2.prototype, "_fillRange", [serializable], function () {
              return 0;
            }), _initializer8 = applyDecoratedInitializer(_class2.prototype, "_isTrimmedMode", [serializable], function () {
              return true;
            }), _initializer9 = applyDecoratedInitializer(_class2.prototype, "_useGrayscale", [serializable], function () {
              return false;
            }), _initializer10 = applyDecoratedInitializer(_class2.prototype, "_atlas", [serializable], function () {
              return null;
            })), _class2)) || _class) || _class));
            legacyCC.Sprite = Sprite;

        })
    };
}));

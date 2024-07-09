System.register("q-bundled:///fs/cocos/asset/asset-manager/plist-parser.js", ["../../core/index.js"], function (_export, _context) {
  "use strict";

  var warnID, SAXParser, PlistParser, plistParser;
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /*
                                                                                                                                                                                                            Copyright (c) 2008-2010 Ricardo Quesada
                                                                                                                                                                                                            Copyright (c) 2011-2012 cocos2d-x.org
                                                                                                                                                                                                            Copyright (c) 2013-2016 Chukong Technologies Inc.
                                                                                                                                                                                                            Copyright (c) 2017-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                           
                                                                                                                                                                                                            http://www.cocos2d-x.org
                                                                                                                                                                                                           
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
  return {
    setters: [function (_coreIndexJs) {
      warnID = _coreIndexJs.warnID;
    }],
    execute: function () {
      /**
       * A SAX Parser
       * @class saxParser
       */
      _export("SAXParser", SAXParser = /*#__PURE__*/function () {
        function SAXParser() {
          this._parser = null;
          if (globalThis.DOMParser) {
            this._parser = new DOMParser();
          }
        }

        /**
         * @method parse
         * @param {String} xmlTxt
         * @return {Document}
         */
        var _proto = SAXParser.prototype;
        _proto.parse = function parse(xmlTxt) {
          return this._parseXML(xmlTxt);
        };
        _proto._parseXML = function _parseXML(textxml) {
          // get a reference to the requested corresponding xml file
          if (this._parser) {
            return this._parser.parseFromString(textxml, 'text/xml');
          }
          throw new Error('Dom parser is not supported in this platform!');
        };
        return SAXParser;
      }());
      /**
       *
       * plistParser is a singleton object for parsing plist files
       * @class plistParser
       * @extends SAXParser
       */
      PlistParser = /*#__PURE__*/function (_SAXParser) {
        _inheritsLoose(PlistParser, _SAXParser);
        function PlistParser() {
          return _SAXParser.apply(this, arguments) || this;
        }
        var _proto2 = PlistParser.prototype;
        /**
         * @en parse a xml string as plist object.
         * @zh 将xml字符串解析为plist对象。
         * @param {String} xmlTxt - plist xml contents
         * @return {*} plist object
         */
        _proto2.parse = function parse(xmlTxt) {
          var xmlDoc = this._parseXML(xmlTxt);
          var plist = xmlDoc.documentElement;
          if (plist.tagName !== 'plist') {
            warnID(5100);
            return {};
          }

          // Get first real node
          var node = null;
          for (var i = 0, len = plist.childNodes.length; i < len; i++) {
            node = plist.childNodes[i];
            if (node.nodeType === 1) {
              break;
            }
          }
          return this._parseNode(node);
        };
        _proto2._parseNode = function _parseNode(node) {
          var data = null;
          var tagName = node.tagName;
          if (tagName === 'dict') {
            data = this._parseDict(node);
          } else if (tagName === 'array') {
            data = this._parseArray(node);
          } else if (tagName === 'string') {
            if (node.childNodes.length === 1) {
              data = node.firstChild.nodeValue;
            } else {
              // handle Firefox's 4KB nodeValue limit
              data = '';
              for (var i = 0; i < node.childNodes.length; i++) {
                data += node.childNodes[i].nodeValue;
              }
            }
          } else if (tagName === 'false') {
            data = false;
          } else if (tagName === 'true') {
            data = true;
          } else if (tagName === 'real') {
            data = parseFloat(node.firstChild.nodeValue);
          } else if (tagName === 'integer') {
            data = parseInt(node.firstChild.nodeValue, 10);
          }
          return data;
        };
        _proto2._parseArray = function _parseArray(node) {
          var data = [];
          for (var i = 0, len = node.childNodes.length; i < len; i++) {
            var child = node.childNodes[i];
            if (child.nodeType !== 1) {
              continue;
            }
            data.push(this._parseNode(child));
          }
          return data;
        };
        _proto2._parseDict = function _parseDict(node) {
          var data = {};
          var key = '';
          for (var i = 0, len = node.childNodes.length; i < len; i++) {
            var child = node.childNodes[i];
            if (child.nodeType !== 1) {
              continue;
            }

            // Grab the key, next noe should be the value
            if (child.tagName === 'key') {
              key = child.firstChild.nodeValue;
            } else {
              data[key] = this._parseNode(child);
            } // Parse the value node
          }

          return data;
        };
        return PlistParser;
      }(SAXParser);
      /**
       * @type {PlistParser}
       * @name plistParser
       * A Plist Parser
       */
      plistParser = new PlistParser();
      _export("default", plistParser);
    }
  };
});
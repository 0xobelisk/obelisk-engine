(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function DOMParser(options) {
  this.options = options || {
    locator: {}
  };
}
DOMParser.prototype.parseFromString = function (source, mimeType) {
  var options = this.options;
  var sax = new XMLReader();
  var domBuilder = options.domBuilder || new DOMHandler(); //contentHandler and LexicalHandler
  var errorHandler = options.errorHandler;
  var locator = options.locator;
  var defaultNSMap = options.xmlns || {};
  var isHTML = /\/x?html?$/.test(mimeType); //mimeType.toLowerCase().indexOf('html') > -1;
  var entityMap = isHTML ? htmlEntity.entityMap : {
    'lt': '<',
    'gt': '>',
    'amp': '&',
    'quot': '"',
    'apos': "'"
  };
  if (locator) {
    domBuilder.setDocumentLocator(locator);
  }
  sax.errorHandler = buildErrorHandler(errorHandler, domBuilder, locator);
  sax.domBuilder = options.domBuilder || domBuilder;
  if (isHTML) {
    defaultNSMap[''] = 'http://www.w3.org/1999/xhtml';
  }
  defaultNSMap.xml = defaultNSMap.xml || 'http://www.w3.org/XML/1998/namespace';
  if (source) {
    sax.parse(source, defaultNSMap, entityMap);
  } else {
    sax.errorHandler.error("invalid doc source");
  }
  return domBuilder.doc;
};
function buildErrorHandler(errorImpl, domBuilder, locator) {
  if (!errorImpl) {
    if (domBuilder instanceof DOMHandler) {
      return domBuilder;
    }
    errorImpl = domBuilder;
  }
  var errorHandler = {};
  var isCallback = errorImpl instanceof Function;
  locator = locator || {};
  function build(key) {
    var fn = errorImpl[key];
    if (!fn && isCallback) {
      fn = errorImpl.length == 2 ? function (msg) {
        errorImpl(key, msg);
      } : errorImpl;
    }
    errorHandler[key] = fn && function (msg) {
      fn('[xmldom ' + key + ']\t' + msg + _locator(locator));
    } || function () {};
  }
  build('warning');
  build('error');
  build('fatalError');
  return errorHandler;
}

//console.log('#\n\n\n\n\n\n\n####')
/**
 * +ContentHandler+ErrorHandler
 * +LexicalHandler+EntityResolver2
 * -DeclHandler-DTDHandler 
 * 
 * DefaultHandler:EntityResolver, DTDHandler, ContentHandler, ErrorHandler
 * DefaultHandler2:DefaultHandler,LexicalHandler, DeclHandler, EntityResolver2
 * @link http://www.saxproject.org/apidoc/org/xml/sax/helpers/DefaultHandler.html
 */
function DOMHandler() {
  this.cdata = false;
}
function position(locator, node) {
  node.lineNumber = locator.lineNumber;
  node.columnNumber = locator.columnNumber;
}
/**
 * @see org.xml.sax.ContentHandler#startDocument
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ContentHandler.html
 */
DOMHandler.prototype = {
  startDocument: function startDocument() {
    this.doc = new DOMImplementation().createDocument(null, null, null);
    if (this.locator) {
      this.doc.documentURI = this.locator.systemId;
    }
  },
  startElement: function startElement(namespaceURI, localName, qName, attrs) {
    var doc = this.doc;
    var el = doc.createElementNS(namespaceURI, qName || localName);
    var len = attrs.length;
    appendElement(this, el);
    this.currentElement = el;
    this.locator && position(this.locator, el);
    for (var i = 0; i < len; i++) {
      var namespaceURI = attrs.getURI(i);
      var value = attrs.getValue(i);
      var qName = attrs.getQName(i);
      var attr = doc.createAttributeNS(namespaceURI, qName);
      this.locator && position(attrs.getLocator(i), attr);
      attr.value = attr.nodeValue = value;
      el.setAttributeNode(attr);
    }
  },
  endElement: function endElement(namespaceURI, localName, qName) {
    var current = this.currentElement;
    var tagName = current.tagName;
    this.currentElement = current.parentNode;
  },
  startPrefixMapping: function startPrefixMapping(prefix, uri) {},
  endPrefixMapping: function endPrefixMapping(prefix) {},
  processingInstruction: function processingInstruction(target, data) {
    var ins = this.doc.createProcessingInstruction(target, data);
    this.locator && position(this.locator, ins);
    appendElement(this, ins);
  },
  ignorableWhitespace: function ignorableWhitespace(ch, start, length) {},
  characters: function characters(chars, start, length) {
    chars = _toString.apply(this, arguments);
    //console.log(chars)
    if (chars) {
      if (this.cdata) {
        var charNode = this.doc.createCDATASection(chars);
      } else {
        var charNode = this.doc.createTextNode(chars);
      }
      if (this.currentElement) {
        this.currentElement.appendChild(charNode);
      } else if (/^\s*$/.test(chars)) {
        this.doc.appendChild(charNode);
        //process xml
      }
      this.locator && position(this.locator, charNode);
    }
  },
  skippedEntity: function skippedEntity(name) {},
  endDocument: function endDocument() {
    this.doc.normalize();
  },
  setDocumentLocator: function setDocumentLocator(locator) {
    if (this.locator = locator) {
      // && !('lineNumber' in locator)){
      locator.lineNumber = 0;
    }
  },
  //LexicalHandler
  comment: function comment(chars, start, length) {
    chars = _toString.apply(this, arguments);
    var comm = this.doc.createComment(chars);
    this.locator && position(this.locator, comm);
    appendElement(this, comm);
  },
  startCDATA: function startCDATA() {
    //used in characters() methods
    this.cdata = true;
  },
  endCDATA: function endCDATA() {
    this.cdata = false;
  },
  startDTD: function startDTD(name, publicId, systemId) {
    var impl = this.doc.implementation;
    if (impl && impl.createDocumentType) {
      var dt = impl.createDocumentType(name, publicId, systemId);
      this.locator && position(this.locator, dt);
      appendElement(this, dt);
    }
  },
  /**
   * @see org.xml.sax.ErrorHandler
   * @link http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
   */
  warning: function warning(error) {
    console.warn('[xmldom warning]\t' + error, _locator(this.locator));
  },
  error: function error(_error) {
    console.error('[xmldom error]\t' + _error, _locator(this.locator));
  },
  fatalError: function fatalError(error) {
    console.error('[xmldom fatalError]\t' + error, _locator(this.locator));
    throw error;
  }
};
function _locator(l) {
  if (l) {
    return '\n@' + (l.systemId || '') + '#[line:' + l.lineNumber + ',col:' + l.columnNumber + ']';
  }
}
function _toString(chars, start, length) {
  if (typeof chars == 'string') {
    return chars.substr(start, length);
  } else {
    //java sax connect width xmldom on rhino(what about: "? && !(chars instanceof String)")
    if (chars.length >= start + length || start) {
      return new java.lang.String(chars, start, length) + '';
    }
    return chars;
  }
}

/*
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/LexicalHandler.html
 * used method of org.xml.sax.ext.LexicalHandler:
 *  #comment(chars, start, length)
 *  #startCDATA()
 *  #endCDATA()
 *  #startDTD(name, publicId, systemId)
 *
 *
 * IGNORED method of org.xml.sax.ext.LexicalHandler:
 *  #endDTD()
 *  #startEntity(name)
 *  #endEntity(name)
 *
 *
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/DeclHandler.html
 * IGNORED method of org.xml.sax.ext.DeclHandler
 * 	#attributeDecl(eName, aName, type, mode, value)
 *  #elementDecl(name, model)
 *  #externalEntityDecl(name, publicId, systemId)
 *  #internalEntityDecl(name, value)
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/EntityResolver2.html
 * IGNORED method of org.xml.sax.EntityResolver2
 *  #resolveEntity(String name,String publicId,String baseURI,String systemId)
 *  #resolveEntity(publicId, systemId)
 *  #getExternalSubset(name, baseURI)
 * @link http://www.saxproject.org/apidoc/org/xml/sax/DTDHandler.html
 * IGNORED method of org.xml.sax.DTDHandler
 *  #notationDecl(name, publicId, systemId) {};
 *  #unparsedEntityDecl(name, publicId, systemId, notationName) {};
 */
"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function (key) {
  DOMHandler.prototype[key] = function () {
    return null;
  };
});

/* Private static helpers treated below as private instance methods, so don't need to add these to the public API; we might use a Relator to also get rid of non-standard public properties */
function appendElement(hander, node) {
  if (!hander.currentElement) {
    hander.doc.appendChild(node);
  } else {
    hander.currentElement.appendChild(node);
  }
} //appendChild and setAttributeNS are preformance key

//if(typeof require == 'function'){
var htmlEntity = require('./entities');
var XMLReader = require('./sax').XMLReader;
var DOMImplementation = exports.DOMImplementation = require('./dom').DOMImplementation;
exports.XMLSerializer = require('./dom').XMLSerializer;
exports.DOMParser = DOMParser;
window.DOMParser = DOMParser;
//}

},{"./dom":2,"./entities":3,"./sax":4}],2:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*
 * DOM Level 2
 * Object DOMException
 * @see http://www.w3.org/TR/REC-DOM-Level-1/ecma-script-language-binding.html
 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 */

function copy(src, dest) {
  for (var p in src) {
    dest[p] = src[p];
  }
}
/**
^\w+\.prototype\.([_\w]+)\s*=\s*((?:.*\{\s*?[\r\n][\s\S]*?^})|\S.*?(?=[;\r\n]));?
^\w+\.prototype\.([_\w]+)\s*=\s*(\S.*?(?=[;\r\n]));?
 */
function _extends(Class, Super) {
  var pt = Class.prototype;
  if (!(pt instanceof Super)) {
    var t = function t() {};
    ;
    t.prototype = Super.prototype;
    t = new t();
    // copy(pt,t);
    for (var p in pt) {
      t[p] = pt[p];
    }
    Class.prototype = pt = t;
  }
  if (pt.constructor != Class) {
    if (typeof Class != 'function') {
      console.error("unknow Class:" + Class);
    }
    pt.constructor = Class;
  }
}
var htmlns = 'http://www.w3.org/1999/xhtml';
// Node Types
var NodeType = {};
var ELEMENT_NODE = NodeType.ELEMENT_NODE = 1;
var ATTRIBUTE_NODE = NodeType.ATTRIBUTE_NODE = 2;
var TEXT_NODE = NodeType.TEXT_NODE = 3;
var CDATA_SECTION_NODE = NodeType.CDATA_SECTION_NODE = 4;
var ENTITY_REFERENCE_NODE = NodeType.ENTITY_REFERENCE_NODE = 5;
var ENTITY_NODE = NodeType.ENTITY_NODE = 6;
var PROCESSING_INSTRUCTION_NODE = NodeType.PROCESSING_INSTRUCTION_NODE = 7;
var COMMENT_NODE = NodeType.COMMENT_NODE = 8;
var DOCUMENT_NODE = NodeType.DOCUMENT_NODE = 9;
var DOCUMENT_TYPE_NODE = NodeType.DOCUMENT_TYPE_NODE = 10;
var DOCUMENT_FRAGMENT_NODE = NodeType.DOCUMENT_FRAGMENT_NODE = 11;
var NOTATION_NODE = NodeType.NOTATION_NODE = 12;

// ExceptionCode
var ExceptionCode = {};
var ExceptionMessage = {};
var INDEX_SIZE_ERR = ExceptionCode.INDEX_SIZE_ERR = (ExceptionMessage[1] = "Index size error", 1);
var DOMSTRING_SIZE_ERR = ExceptionCode.DOMSTRING_SIZE_ERR = (ExceptionMessage[2] = "DOMString size error", 2);
var HIERARCHY_REQUEST_ERR = ExceptionCode.HIERARCHY_REQUEST_ERR = (ExceptionMessage[3] = "Hierarchy request error", 3);
var WRONG_DOCUMENT_ERR = ExceptionCode.WRONG_DOCUMENT_ERR = (ExceptionMessage[4] = "Wrong document", 4);
var INVALID_CHARACTER_ERR = ExceptionCode.INVALID_CHARACTER_ERR = (ExceptionMessage[5] = "Invalid character", 5);
var NO_DATA_ALLOWED_ERR = ExceptionCode.NO_DATA_ALLOWED_ERR = (ExceptionMessage[6] = "No data allowed", 6);
var NO_MODIFICATION_ALLOWED_ERR = ExceptionCode.NO_MODIFICATION_ALLOWED_ERR = (ExceptionMessage[7] = "No modification allowed", 7);
var NOT_FOUND_ERR = ExceptionCode.NOT_FOUND_ERR = (ExceptionMessage[8] = "Not found", 8);
var NOT_SUPPORTED_ERR = ExceptionCode.NOT_SUPPORTED_ERR = (ExceptionMessage[9] = "Not supported", 9);
var INUSE_ATTRIBUTE_ERR = ExceptionCode.INUSE_ATTRIBUTE_ERR = (ExceptionMessage[10] = "Attribute in use", 10);
//level2
var INVALID_STATE_ERR = ExceptionCode.INVALID_STATE_ERR = (ExceptionMessage[11] = "Invalid state", 11);
var SYNTAX_ERR = ExceptionCode.SYNTAX_ERR = (ExceptionMessage[12] = "Syntax error", 12);
var INVALID_MODIFICATION_ERR = ExceptionCode.INVALID_MODIFICATION_ERR = (ExceptionMessage[13] = "Invalid modification", 13);
var NAMESPACE_ERR = ExceptionCode.NAMESPACE_ERR = (ExceptionMessage[14] = "Invalid namespace", 14);
var INVALID_ACCESS_ERR = ExceptionCode.INVALID_ACCESS_ERR = (ExceptionMessage[15] = "Invalid access", 15);
function DOMException(code, message) {
  if (message instanceof Error) {
    var error = message;
  } else {
    error = this;
    Error.call(this, ExceptionMessage[code]);
    this.message = ExceptionMessage[code];
    if (Error.captureStackTrace) Error.captureStackTrace(this, DOMException);
  }
  error.code = code;
  if (message) this.message = this.message + ": " + message;
  return error;
}
;
DOMException.prototype = Error.prototype;
copy(ExceptionCode, DOMException);
/**
 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-536297177
 * The NodeList interface provides the abstraction of an ordered collection of nodes, without defining or constraining how this collection is implemented. NodeList objects in the DOM are live.
 * The items in the NodeList are accessible via an integral index, starting from 0.
 */
function NodeList() {}
;
NodeList.prototype = {
  /**
   * The number of nodes in the list. The range of valid child node indices is 0 to length-1 inclusive.
   * @standard level1
   */
  length: 0,
  /**
   * Returns the indexth item in the collection. If index is greater than or equal to the number of nodes in the list, this returns null.
   * @standard level1
   * @param index  unsigned long 
   *   Index into the collection.
   * @return Node
   * 	The node at the indexth position in the NodeList, or null if that is not a valid index. 
   */
  item: function item(index) {
    return this[index] || null;
  },
  toString: function toString(isHTML, nodeFilter) {
    for (var buf = [], i = 0; i < this.length; i++) {
      serializeToString(this[i], buf, isHTML, nodeFilter);
    }
    return buf.join('');
  }
};
function LiveNodeList(node, refresh) {
  this._node = node;
  this._refresh = refresh;
  _updateLiveList(this);
}
function _updateLiveList(list) {
  var inc = list._node._inc || list._node.ownerDocument._inc;
  if (list._inc != inc) {
    var ls = list._refresh(list._node);
    //console.log(ls.length)
    __set__(list, 'length', ls.length);
    //copy(ls,list);
    for (var p in ls) {
      list[p] = ls[p];
    }
    list._inc = inc;
  }
}
LiveNodeList.prototype.item = function (i) {
  _updateLiveList(this);
  return this[i];
};
_extends(LiveNodeList, NodeList);
/**
 * 
 * Objects implementing the NamedNodeMap interface are used to represent collections of nodes that can be accessed by name. Note that NamedNodeMap does not inherit from NodeList; NamedNodeMaps are not maintained in any particular order. Objects contained in an object implementing NamedNodeMap may also be accessed by an ordinal index, but this is simply to allow convenient enumeration of the contents of a NamedNodeMap, and does not imply that the DOM specifies an order to these Nodes.
 * NamedNodeMap objects in the DOM are live.
 * used for attributes or DocumentType entities 
 */
function NamedNodeMap() {}
;
function _findNodeIndex(list, node) {
  var i = list.length;
  while (i--) {
    if (list[i] === node) {
      return i;
    }
  }
}
function _addNamedNode(el, list, newAttr, oldAttr) {
  if (oldAttr) {
    list[_findNodeIndex(list, oldAttr)] = newAttr;
  } else {
    list[list.length++] = newAttr;
  }
  if (el) {
    newAttr.ownerElement = el;
    var doc = el.ownerDocument;
    if (doc) {
      oldAttr && _onRemoveAttribute(doc, el, oldAttr);
      _onAddAttribute(doc, el, newAttr);
    }
  }
}
function _removeNamedNode(el, list, attr) {
  //console.log('remove attr:'+attr)
  var i = _findNodeIndex(list, attr);
  if (i >= 0) {
    var lastIndex = list.length - 1;
    while (i < lastIndex) {
      list[i] = list[++i];
    }
    list.length = lastIndex;
    if (el) {
      var doc = el.ownerDocument;
      if (doc) {
        _onRemoveAttribute(doc, el, attr);
        attr.ownerElement = null;
      }
    }
  } else {
    throw DOMException(NOT_FOUND_ERR, new Error(el.tagName + '@' + attr));
  }
}
NamedNodeMap.prototype = {
  length: 0,
  item: NodeList.prototype.item,
  getNamedItem: function getNamedItem(key) {
    //		if(key.indexOf(':')>0 || key == 'xmlns'){
    //			return null;
    //		}
    //console.log()
    var i = this.length;
    while (i--) {
      var attr = this[i];
      //console.log(attr.nodeName,key)
      if (attr.nodeName == key) {
        return attr;
      }
    }
  },
  setNamedItem: function setNamedItem(attr) {
    var el = attr.ownerElement;
    if (el && el != this._ownerElement) {
      throw new DOMException(INUSE_ATTRIBUTE_ERR);
    }
    var oldAttr = this.getNamedItem(attr.nodeName);
    _addNamedNode(this._ownerElement, this, attr, oldAttr);
    return oldAttr;
  },
  /* returns Node */
  setNamedItemNS: function setNamedItemNS(attr) {
    // raises: WRONG_DOCUMENT_ERR,NO_MODIFICATION_ALLOWED_ERR,INUSE_ATTRIBUTE_ERR
    var el = attr.ownerElement,
      oldAttr;
    if (el && el != this._ownerElement) {
      throw new DOMException(INUSE_ATTRIBUTE_ERR);
    }
    oldAttr = this.getNamedItemNS(attr.namespaceURI, attr.localName);
    _addNamedNode(this._ownerElement, this, attr, oldAttr);
    return oldAttr;
  },
  /* returns Node */
  removeNamedItem: function removeNamedItem(key) {
    var attr = this.getNamedItem(key);
    _removeNamedNode(this._ownerElement, this, attr);
    return attr;
  },
  // raises: NOT_FOUND_ERR,NO_MODIFICATION_ALLOWED_ERR

  //for level2
  removeNamedItemNS: function removeNamedItemNS(namespaceURI, localName) {
    var attr = this.getNamedItemNS(namespaceURI, localName);
    _removeNamedNode(this._ownerElement, this, attr);
    return attr;
  },
  getNamedItemNS: function getNamedItemNS(namespaceURI, localName) {
    var i = this.length;
    while (i--) {
      var node = this[i];
      if (node.localName == localName && node.namespaceURI == namespaceURI) {
        return node;
      }
    }
    return null;
  }
};
/**
 * @see http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-102161490
 */
function DOMImplementation( /* Object */features) {
  this._features = {};
  if (features) {
    for (var feature in features) {
      this._features = features[feature];
    }
  }
}
;
DOMImplementation.prototype = {
  hasFeature: function hasFeature( /* string */feature, /* string */version) {
    var versions = this._features[feature.toLowerCase()];
    if (versions && (!version || version in versions)) {
      return true;
    } else {
      return false;
    }
  },
  // Introduced in DOM Level 2:
  createDocument: function createDocument(namespaceURI, qualifiedName, doctype) {
    // raises:INVALID_CHARACTER_ERR,NAMESPACE_ERR,WRONG_DOCUMENT_ERR
    var doc = new Document();
    doc.implementation = this;
    doc.childNodes = new NodeList();
    doc.doctype = doctype;
    if (doctype) {
      doc.appendChild(doctype);
    }
    if (qualifiedName) {
      var root = doc.createElementNS(namespaceURI, qualifiedName);
      doc.appendChild(root);
    }
    return doc;
  },
  // Introduced in DOM Level 2:
  createDocumentType: function createDocumentType(qualifiedName, publicId, systemId) {
    // raises:INVALID_CHARACTER_ERR,NAMESPACE_ERR
    var node = new DocumentType();
    node.name = qualifiedName;
    node.nodeName = qualifiedName;
    node.publicId = publicId;
    node.systemId = systemId;
    // Introduced in DOM Level 2:
    //readonly attribute DOMString        internalSubset;

    //TODO:..
    //  readonly attribute NamedNodeMap     entities;
    //  readonly attribute NamedNodeMap     notations;
    return node;
  }
};

/**
 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-1950641247
 */

function Node() {}
;
Node.prototype = {
  firstChild: null,
  lastChild: null,
  previousSibling: null,
  nextSibling: null,
  attributes: null,
  parentNode: null,
  childNodes: null,
  ownerDocument: null,
  nodeValue: null,
  namespaceURI: null,
  prefix: null,
  localName: null,
  // Modified in DOM Level 2:
  insertBefore: function insertBefore(newChild, refChild) {
    //raises 
    return _insertBefore(this, newChild, refChild);
  },
  replaceChild: function replaceChild(newChild, oldChild) {
    //raises 
    this.insertBefore(newChild, oldChild);
    if (oldChild) {
      this.removeChild(oldChild);
    }
  },
  removeChild: function removeChild(oldChild) {
    return _removeChild(this, oldChild);
  },
  appendChild: function appendChild(newChild) {
    return this.insertBefore(newChild, null);
  },
  hasChildNodes: function hasChildNodes() {
    return this.firstChild != null;
  },
  cloneNode: function cloneNode(deep) {
    return _cloneNode(this.ownerDocument || this, this, deep);
  },
  // Modified in DOM Level 2:
  normalize: function normalize() {
    var child = this.firstChild;
    while (child) {
      var next = child.nextSibling;
      if (next && next.nodeType == TEXT_NODE && child.nodeType == TEXT_NODE) {
        this.removeChild(next);
        child.appendData(next.data);
      } else {
        child.normalize();
        child = next;
      }
    }
  },
  // Introduced in DOM Level 2:
  isSupported: function isSupported(feature, version) {
    return this.ownerDocument.implementation.hasFeature(feature, version);
  },
  // Introduced in DOM Level 2:
  hasAttributes: function hasAttributes() {
    return this.attributes.length > 0;
  },
  lookupPrefix: function lookupPrefix(namespaceURI) {
    var el = this;
    while (el) {
      var map = el._nsMap;
      //console.dir(map)
      if (map) {
        for (var n in map) {
          if (map[n] == namespaceURI) {
            return n;
          }
        }
      }
      el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
    }
    return null;
  },
  // Introduced in DOM Level 3:
  lookupNamespaceURI: function lookupNamespaceURI(prefix) {
    var el = this;
    while (el) {
      var map = el._nsMap;
      //console.dir(map)
      if (map) {
        if (prefix in map) {
          return map[prefix];
        }
      }
      el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
    }
    return null;
  },
  // Introduced in DOM Level 3:
  isDefaultNamespace: function isDefaultNamespace(namespaceURI) {
    var prefix = this.lookupPrefix(namespaceURI);
    return prefix == null;
  }
};
function _xmlEncoder(c) {
  return c == '<' && '&lt;' || c == '>' && '&gt;' || c == '&' && '&amp;' || c == '"' && '&quot;' || '&#' + c.charCodeAt() + ';';
}
copy(NodeType, Node);
copy(NodeType, Node.prototype);

/**
 * @param callback return true for continue,false for break
 * @return boolean true: break visit;
 */
function _visitNode(node, callback) {
  if (callback(node)) {
    return true;
  }
  if (node = node.firstChild) {
    do {
      if (_visitNode(node, callback)) {
        return true;
      }
    } while (node = node.nextSibling);
  }
}
function Document() {}
function _onAddAttribute(doc, el, newAttr) {
  doc && doc._inc++;
  var ns = newAttr.namespaceURI;
  if (ns == 'http://www.w3.org/2000/xmlns/') {
    //update namespace
    el._nsMap[newAttr.prefix ? newAttr.localName : ''] = newAttr.value;
  }
}
function _onRemoveAttribute(doc, el, newAttr, remove) {
  doc && doc._inc++;
  var ns = newAttr.namespaceURI;
  if (ns == 'http://www.w3.org/2000/xmlns/') {
    //update namespace
    delete el._nsMap[newAttr.prefix ? newAttr.localName : ''];
  }
}
function _onUpdateChild(doc, el, newChild) {
  if (doc && doc._inc) {
    doc._inc++;
    //update childNodes
    var cs = el.childNodes;
    if (newChild) {
      cs[cs.length++] = newChild;
    } else {
      //console.log(1)
      var child = el.firstChild;
      var i = 0;
      while (child) {
        cs[i++] = child;
        child = child.nextSibling;
      }
      cs.length = i;
    }
  }
}

/**
 * attributes;
 * children;
 * 
 * writeable properties:
 * nodeValue,Attr:value,CharacterData:data
 * prefix
 */
function _removeChild(parentNode, child) {
  var previous = child.previousSibling;
  var next = child.nextSibling;
  if (previous) {
    previous.nextSibling = next;
  } else {
    parentNode.firstChild = next;
  }
  if (next) {
    next.previousSibling = previous;
  } else {
    parentNode.lastChild = previous;
  }
  _onUpdateChild(parentNode.ownerDocument, parentNode);
  return child;
}
/**
 * preformance key(refChild == null)
 */
function _insertBefore(parentNode, newChild, nextChild) {
  var cp = newChild.parentNode;
  if (cp) {
    cp.removeChild(newChild); //remove and update
  }
  if (newChild.nodeType === DOCUMENT_FRAGMENT_NODE) {
    var newFirst = newChild.firstChild;
    if (newFirst == null) {
      return newChild;
    }
    var newLast = newChild.lastChild;
  } else {
    newFirst = newLast = newChild;
  }
  var pre = nextChild ? nextChild.previousSibling : parentNode.lastChild;
  newFirst.previousSibling = pre;
  newLast.nextSibling = nextChild;
  if (pre) {
    pre.nextSibling = newFirst;
  } else {
    parentNode.firstChild = newFirst;
  }
  if (nextChild == null) {
    parentNode.lastChild = newLast;
  } else {
    nextChild.previousSibling = newLast;
  }
  do {
    newFirst.parentNode = parentNode;
  } while (newFirst !== newLast && (newFirst = newFirst.nextSibling));
  _onUpdateChild(parentNode.ownerDocument || parentNode, parentNode);
  //console.log(parentNode.lastChild.nextSibling == null)
  if (newChild.nodeType == DOCUMENT_FRAGMENT_NODE) {
    newChild.firstChild = newChild.lastChild = null;
  }
  return newChild;
}
function _appendSingleChild(parentNode, newChild) {
  var cp = newChild.parentNode;
  if (cp) {
    var pre = parentNode.lastChild;
    cp.removeChild(newChild); //remove and update
    var pre = parentNode.lastChild;
  }
  var pre = parentNode.lastChild;
  newChild.parentNode = parentNode;
  newChild.previousSibling = pre;
  newChild.nextSibling = null;
  if (pre) {
    pre.nextSibling = newChild;
  } else {
    parentNode.firstChild = newChild;
  }
  parentNode.lastChild = newChild;
  _onUpdateChild(parentNode.ownerDocument, parentNode, newChild);
  return newChild;
  //console.log("__aa",parentNode.lastChild.nextSibling == null)
}
Document.prototype = {
  //implementation : null,
  nodeName: '#document',
  nodeType: DOCUMENT_NODE,
  doctype: null,
  documentElement: null,
  _inc: 1,
  insertBefore: function insertBefore(newChild, refChild) {
    //raises 
    if (newChild.nodeType == DOCUMENT_FRAGMENT_NODE) {
      var child = newChild.firstChild;
      while (child) {
        var next = child.nextSibling;
        this.insertBefore(child, refChild);
        child = next;
      }
      return newChild;
    }
    if (this.documentElement == null && newChild.nodeType == ELEMENT_NODE) {
      this.documentElement = newChild;
    }
    return _insertBefore(this, newChild, refChild), newChild.ownerDocument = this, newChild;
  },
  removeChild: function removeChild(oldChild) {
    if (this.documentElement == oldChild) {
      this.documentElement = null;
    }
    return _removeChild(this, oldChild);
  },
  // Introduced in DOM Level 2:
  importNode: function importNode(importedNode, deep) {
    return _importNode(this, importedNode, deep);
  },
  // Introduced in DOM Level 2:
  getElementById: function getElementById(id) {
    var rtv = null;
    _visitNode(this.documentElement, function (node) {
      if (node.nodeType == ELEMENT_NODE) {
        if (node.getAttribute('id') == id) {
          rtv = node;
          return true;
        }
      }
    });
    return rtv;
  },
  //document factory method:
  createElement: function createElement(tagName) {
    var node = new Element();
    node.ownerDocument = this;
    node.nodeName = tagName;
    node.tagName = tagName;
    node.childNodes = new NodeList();
    var attrs = node.attributes = new NamedNodeMap();
    attrs._ownerElement = node;
    return node;
  },
  createDocumentFragment: function createDocumentFragment() {
    var node = new DocumentFragment();
    node.ownerDocument = this;
    node.childNodes = new NodeList();
    return node;
  },
  createTextNode: function createTextNode(data) {
    var node = new Text();
    node.ownerDocument = this;
    node.appendData(data);
    return node;
  },
  createComment: function createComment(data) {
    var node = new Comment();
    node.ownerDocument = this;
    node.appendData(data);
    return node;
  },
  createCDATASection: function createCDATASection(data) {
    var node = new CDATASection();
    node.ownerDocument = this;
    node.appendData(data);
    return node;
  },
  createProcessingInstruction: function createProcessingInstruction(target, data) {
    var node = new ProcessingInstruction();
    node.ownerDocument = this;
    node.tagName = node.target = target;
    node.nodeValue = node.data = data;
    return node;
  },
  createAttribute: function createAttribute(name) {
    var node = new Attr();
    node.ownerDocument = this;
    node.name = name;
    node.nodeName = name;
    node.localName = name;
    node.specified = true;
    return node;
  },
  createEntityReference: function createEntityReference(name) {
    var node = new EntityReference();
    node.ownerDocument = this;
    node.nodeName = name;
    return node;
  },
  // Introduced in DOM Level 2:
  createElementNS: function createElementNS(namespaceURI, qualifiedName) {
    var node = new Element();
    var pl = qualifiedName.split(':');
    var attrs = node.attributes = new NamedNodeMap();
    node.childNodes = new NodeList();
    node.ownerDocument = this;
    node.nodeName = qualifiedName;
    node.tagName = qualifiedName;
    node.namespaceURI = namespaceURI;
    if (pl.length == 2) {
      node.prefix = pl[0];
      node.localName = pl[1];
    } else {
      //el.prefix = null;
      node.localName = qualifiedName;
    }
    attrs._ownerElement = node;
    return node;
  },
  // Introduced in DOM Level 2:
  createAttributeNS: function createAttributeNS(namespaceURI, qualifiedName) {
    var node = new Attr();
    var pl = qualifiedName.split(':');
    node.ownerDocument = this;
    node.nodeName = qualifiedName;
    node.name = qualifiedName;
    node.namespaceURI = namespaceURI;
    node.specified = true;
    if (pl.length == 2) {
      node.prefix = pl[0];
      node.localName = pl[1];
    } else {
      //el.prefix = null;
      node.localName = qualifiedName;
    }
    return node;
  }
};
_extends(Document, Node);
function Element() {
  this._nsMap = {};
}
;
Element.prototype = {
  nodeType: ELEMENT_NODE,
  hasAttribute: function hasAttribute(name) {
    return this.getAttributeNode(name) != null;
  },
  getAttribute: function getAttribute(name) {
    var attr = this.getAttributeNode(name);
    return attr && attr.value || '';
  },
  getAttributeNode: function getAttributeNode(name) {
    return this.attributes.getNamedItem(name);
  },
  setAttribute: function setAttribute(name, value) {
    var attr = this.ownerDocument.createAttribute(name);
    attr.value = attr.nodeValue = "" + value;
    this.setAttributeNode(attr);
  },
  removeAttribute: function removeAttribute(name) {
    var attr = this.getAttributeNode(name);
    attr && this.removeAttributeNode(attr);
  },
  //four real opeartion method
  appendChild: function appendChild(newChild) {
    if (newChild.nodeType === DOCUMENT_FRAGMENT_NODE) {
      return this.insertBefore(newChild, null);
    } else {
      return _appendSingleChild(this, newChild);
    }
  },
  setAttributeNode: function setAttributeNode(newAttr) {
    return this.attributes.setNamedItem(newAttr);
  },
  setAttributeNodeNS: function setAttributeNodeNS(newAttr) {
    return this.attributes.setNamedItemNS(newAttr);
  },
  removeAttributeNode: function removeAttributeNode(oldAttr) {
    //console.log(this == oldAttr.ownerElement)
    return this.attributes.removeNamedItem(oldAttr.nodeName);
  },
  //get real attribute name,and remove it by removeAttributeNode
  removeAttributeNS: function removeAttributeNS(namespaceURI, localName) {
    var old = this.getAttributeNodeNS(namespaceURI, localName);
    old && this.removeAttributeNode(old);
  },
  hasAttributeNS: function hasAttributeNS(namespaceURI, localName) {
    return this.getAttributeNodeNS(namespaceURI, localName) != null;
  },
  getAttributeNS: function getAttributeNS(namespaceURI, localName) {
    var attr = this.getAttributeNodeNS(namespaceURI, localName);
    return attr && attr.value || '';
  },
  setAttributeNS: function setAttributeNS(namespaceURI, qualifiedName, value) {
    var attr = this.ownerDocument.createAttributeNS(namespaceURI, qualifiedName);
    attr.value = attr.nodeValue = "" + value;
    this.setAttributeNode(attr);
  },
  getAttributeNodeNS: function getAttributeNodeNS(namespaceURI, localName) {
    return this.attributes.getNamedItemNS(namespaceURI, localName);
  },
  getElementsByTagName: function getElementsByTagName(tagName) {
    return new LiveNodeList(this, function (base) {
      var ls = [];
      _visitNode(base, function (node) {
        if (node !== base && node.nodeType == ELEMENT_NODE && (tagName === '*' || node.tagName == tagName)) {
          ls.push(node);
        }
      });
      return ls;
    });
  },
  getElementsByTagNameNS: function getElementsByTagNameNS(namespaceURI, localName) {
    return new LiveNodeList(this, function (base) {
      var ls = [];
      _visitNode(base, function (node) {
        if (node !== base && node.nodeType === ELEMENT_NODE && (namespaceURI === '*' || node.namespaceURI === namespaceURI) && (localName === '*' || node.localName == localName)) {
          ls.push(node);
        }
      });
      return ls;
    });
  }
};
Document.prototype.getElementsByTagName = Element.prototype.getElementsByTagName;
Document.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS;
_extends(Element, Node);
function Attr() {}
;
Attr.prototype.nodeType = ATTRIBUTE_NODE;
_extends(Attr, Node);
function CharacterData() {}
;
CharacterData.prototype = {
  data: '',
  substringData: function substringData(offset, count) {
    return this.data.substring(offset, offset + count);
  },
  appendData: function appendData(text) {
    text = this.data + text;
    this.nodeValue = this.data = text;
    this.length = text.length;
  },
  insertData: function insertData(offset, text) {
    this.replaceData(offset, 0, text);
  },
  appendChild: function appendChild(newChild) {
    throw new Error(ExceptionMessage[HIERARCHY_REQUEST_ERR]);
  },
  deleteData: function deleteData(offset, count) {
    this.replaceData(offset, count, "");
  },
  replaceData: function replaceData(offset, count, text) {
    var start = this.data.substring(0, offset);
    var end = this.data.substring(offset + count);
    text = start + text + end;
    this.nodeValue = this.data = text;
    this.length = text.length;
  }
};
_extends(CharacterData, Node);
function Text() {}
;
Text.prototype = {
  nodeName: "#text",
  nodeType: TEXT_NODE,
  splitText: function splitText(offset) {
    var text = this.data;
    var newText = text.substring(offset);
    text = text.substring(0, offset);
    this.data = this.nodeValue = text;
    this.length = text.length;
    var newNode = this.ownerDocument.createTextNode(newText);
    if (this.parentNode) {
      this.parentNode.insertBefore(newNode, this.nextSibling);
    }
    return newNode;
  }
};
_extends(Text, CharacterData);
function Comment() {}
;
Comment.prototype = {
  nodeName: "#comment",
  nodeType: COMMENT_NODE
};
_extends(Comment, CharacterData);
function CDATASection() {}
;
CDATASection.prototype = {
  nodeName: "#cdata-section",
  nodeType: CDATA_SECTION_NODE
};
_extends(CDATASection, CharacterData);
function DocumentType() {}
;
DocumentType.prototype.nodeType = DOCUMENT_TYPE_NODE;
_extends(DocumentType, Node);
function Notation() {}
;
Notation.prototype.nodeType = NOTATION_NODE;
_extends(Notation, Node);
function Entity() {}
;
Entity.prototype.nodeType = ENTITY_NODE;
_extends(Entity, Node);
function EntityReference() {}
;
EntityReference.prototype.nodeType = ENTITY_REFERENCE_NODE;
_extends(EntityReference, Node);
function DocumentFragment() {}
;
DocumentFragment.prototype.nodeName = "#document-fragment";
DocumentFragment.prototype.nodeType = DOCUMENT_FRAGMENT_NODE;
_extends(DocumentFragment, Node);
function ProcessingInstruction() {}
ProcessingInstruction.prototype.nodeType = PROCESSING_INSTRUCTION_NODE;
_extends(ProcessingInstruction, Node);
function XMLSerializer() {}
XMLSerializer.prototype.serializeToString = function (node, isHtml, nodeFilter) {
  return nodeSerializeToString.call(node, isHtml, nodeFilter);
};
Node.prototype.toString = nodeSerializeToString;
function nodeSerializeToString(isHtml, nodeFilter) {
  var buf = [];
  var refNode = this.nodeType == 9 && this.documentElement || this;
  var prefix = refNode.prefix;
  var uri = refNode.namespaceURI;
  if (uri && prefix == null) {
    //console.log(prefix)
    var prefix = refNode.lookupPrefix(uri);
    if (prefix == null) {
      //isHTML = true;
      var visibleNamespaces = [{
        namespace: uri,
        prefix: null
      }
      //{namespace:uri,prefix:''}
      ];
    }
  }
  serializeToString(this, buf, isHtml, nodeFilter, visibleNamespaces);
  //console.log('###',this.nodeType,uri,prefix,buf.join(''))
  return buf.join('');
}
function needNamespaceDefine(node, isHTML, visibleNamespaces) {
  var prefix = node.prefix || '';
  var uri = node.namespaceURI;
  if (!prefix && !uri) {
    return false;
  }
  if (prefix === "xml" && uri === "http://www.w3.org/XML/1998/namespace" || uri == 'http://www.w3.org/2000/xmlns/') {
    return false;
  }
  var i = visibleNamespaces.length;
  //console.log('@@@@',node.tagName,prefix,uri,visibleNamespaces)
  while (i--) {
    var ns = visibleNamespaces[i];
    // get namespace prefix
    //console.log(node.nodeType,node.tagName,ns.prefix,prefix)
    if (ns.prefix == prefix) {
      return ns.namespace != uri;
    }
  }
  //console.log(isHTML,uri,prefix=='')
  //if(isHTML && prefix ==null && uri == 'http://www.w3.org/1999/xhtml'){
  //	return false;
  //}
  //node.flag = '11111'
  //console.error(3,true,node.flag,node.prefix,node.namespaceURI)
  return true;
}
function serializeToString(node, buf, isHTML, nodeFilter, visibleNamespaces) {
  if (nodeFilter) {
    node = nodeFilter(node);
    if (node) {
      if (typeof node == 'string') {
        buf.push(node);
        return;
      }
    } else {
      return;
    }
    //buf.sort.apply(attrs, attributeSorter);
  }
  switch (node.nodeType) {
    case ELEMENT_NODE:
      if (!visibleNamespaces) visibleNamespaces = [];
      var startVisibleNamespaces = visibleNamespaces.length;
      var attrs = node.attributes;
      var len = attrs.length;
      var child = node.firstChild;
      var nodeName = node.tagName;
      isHTML = htmlns === node.namespaceURI || isHTML;
      buf.push('<', nodeName);
      for (var i = 0; i < len; i++) {
        // add namespaces for attributes
        var attr = attrs.item(i);
        if (attr.prefix == 'xmlns') {
          visibleNamespaces.push({
            prefix: attr.localName,
            namespace: attr.value
          });
        } else if (attr.nodeName == 'xmlns') {
          visibleNamespaces.push({
            prefix: '',
            namespace: attr.value
          });
        }
      }
      for (var i = 0; i < len; i++) {
        var attr = attrs.item(i);
        if (needNamespaceDefine(attr, isHTML, visibleNamespaces)) {
          var prefix = attr.prefix || '';
          var uri = attr.namespaceURI;
          var ns = prefix ? ' xmlns:' + prefix : " xmlns";
          buf.push(ns, '="', uri, '"');
          visibleNamespaces.push({
            prefix: prefix,
            namespace: uri
          });
        }
        serializeToString(attr, buf, isHTML, nodeFilter, visibleNamespaces);
      }
      // add namespace for current node		
      if (needNamespaceDefine(node, isHTML, visibleNamespaces)) {
        var prefix = node.prefix || '';
        var uri = node.namespaceURI;
        var ns = prefix ? ' xmlns:' + prefix : " xmlns";
        buf.push(ns, '="', uri, '"');
        visibleNamespaces.push({
          prefix: prefix,
          namespace: uri
        });
      }
      if (child || isHTML && !/^(?:meta|link|img|br|hr|input)$/i.test(nodeName)) {
        buf.push('>');
        //if is cdata child node
        if (isHTML && /^script$/i.test(nodeName)) {
          while (child) {
            if (child.data) {
              buf.push(child.data);
            } else {
              serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces);
            }
            child = child.nextSibling;
          }
        } else {
          while (child) {
            serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces);
            child = child.nextSibling;
          }
        }
        buf.push('</', nodeName, '>');
      } else {
        buf.push('/>');
      }
      // remove added visible namespaces
      //visibleNamespaces.length = startVisibleNamespaces;
      return;
    case DOCUMENT_NODE:
    case DOCUMENT_FRAGMENT_NODE:
      var child = node.firstChild;
      while (child) {
        serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces);
        child = child.nextSibling;
      }
      return;
    case ATTRIBUTE_NODE:
      return buf.push(' ', node.name, '="', node.value.replace(/[<&"]/g, _xmlEncoder), '"');
    case TEXT_NODE:
      return buf.push(node.data.replace(/[<&]/g, _xmlEncoder));
    case CDATA_SECTION_NODE:
      return buf.push('<![CDATA[', node.data, ']]>');
    case COMMENT_NODE:
      return buf.push("<!--", node.data, "-->");
    case DOCUMENT_TYPE_NODE:
      var pubid = node.publicId;
      var sysid = node.systemId;
      buf.push('<!DOCTYPE ', node.name);
      if (pubid) {
        buf.push(' PUBLIC "', pubid);
        if (sysid && sysid != '.') {
          buf.push('" "', sysid);
        }
        buf.push('">');
      } else if (sysid && sysid != '.') {
        buf.push(' SYSTEM "', sysid, '">');
      } else {
        var sub = node.internalSubset;
        if (sub) {
          buf.push(" [", sub, "]");
        }
        buf.push(">");
      }
      return;
    case PROCESSING_INSTRUCTION_NODE:
      return buf.push("<?", node.target, " ", node.data, "?>");
    case ENTITY_REFERENCE_NODE:
      return buf.push('&', node.nodeName, ';');
    //case ENTITY_NODE:
    //case NOTATION_NODE:
    default:
      buf.push('??', node.nodeName);
  }
}
function _importNode(doc, node, deep) {
  var node2;
  switch (node.nodeType) {
    case ELEMENT_NODE:
      node2 = node.cloneNode(false);
      node2.ownerDocument = doc;
    //var attrs = node2.attributes;
    //var len = attrs.length;
    //for(var i=0;i<len;i++){
    //node2.setAttributeNodeNS(importNode(doc,attrs.item(i),deep));
    //}
    case DOCUMENT_FRAGMENT_NODE:
      break;
    case ATTRIBUTE_NODE:
      deep = true;
      break;
    //case ENTITY_REFERENCE_NODE:
    //case PROCESSING_INSTRUCTION_NODE:
    ////case TEXT_NODE:
    //case CDATA_SECTION_NODE:
    //case COMMENT_NODE:
    //	deep = false;
    //	break;
    //case DOCUMENT_NODE:
    //case DOCUMENT_TYPE_NODE:
    //cannot be imported.
    //case ENTITY_NODE:
    //case NOTATION_NODE：
    //can not hit in level3
    //default:throw e;
  }
  if (!node2) {
    node2 = node.cloneNode(false); //false
  }
  node2.ownerDocument = doc;
  node2.parentNode = null;
  if (deep) {
    var child = node.firstChild;
    while (child) {
      node2.appendChild(_importNode(doc, child, deep));
      child = child.nextSibling;
    }
  }
  return node2;
}
//
//var _relationMap = {firstChild:1,lastChild:1,previousSibling:1,nextSibling:1,
//					attributes:1,childNodes:1,parentNode:1,documentElement:1,doctype,};
function _cloneNode(doc, node, deep) {
  var node2 = new node.constructor();
  for (var n in node) {
    var v = node[n];
    if (_typeof(v) != 'object') {
      if (v != node2[n]) {
        node2[n] = v;
      }
    }
  }
  if (node.childNodes) {
    node2.childNodes = new NodeList();
  }
  node2.ownerDocument = doc;
  switch (node2.nodeType) {
    case ELEMENT_NODE:
      var attrs = node.attributes;
      var attrs2 = node2.attributes = new NamedNodeMap();
      var len = attrs.length;
      attrs2._ownerElement = node2;
      for (var i = 0; i < len; i++) {
        node2.setAttributeNode(_cloneNode(doc, attrs.item(i), true));
      }
      break;
      ;
    case ATTRIBUTE_NODE:
      deep = true;
  }
  if (deep) {
    var child = node.firstChild;
    while (child) {
      node2.appendChild(_cloneNode(doc, child, deep));
      child = child.nextSibling;
    }
  }
  return node2;
}
function __set__(object, key, value) {
  object[key] = value;
}
//do dynamic
try {
  if (Object.defineProperty) {
    var getTextContent = function getTextContent(node) {
      switch (node.nodeType) {
        case ELEMENT_NODE:
        case DOCUMENT_FRAGMENT_NODE:
          var buf = [];
          node = node.firstChild;
          while (node) {
            if (node.nodeType !== 7 && node.nodeType !== 8) {
              buf.push(getTextContent(node));
            }
            node = node.nextSibling;
          }
          return buf.join('');
        default:
          return node.nodeValue;
      }
    };
    Object.defineProperty(LiveNodeList.prototype, 'length', {
      get: function get() {
        _updateLiveList(this);
        return this.$$length;
      }
    });
    Object.defineProperty(Node.prototype, 'textContent', {
      get: function get() {
        return getTextContent(this);
      },
      set: function set(data) {
        switch (this.nodeType) {
          case ELEMENT_NODE:
          case DOCUMENT_FRAGMENT_NODE:
            while (this.firstChild) {
              this.removeChild(this.firstChild);
            }
            if (data || String(data)) {
              this.appendChild(this.ownerDocument.createTextNode(data));
            }
            break;
          default:
            //TODO:
            this.data = data;
            this.value = data;
            this.nodeValue = data;
        }
      }
    });
    __set__ = function __set__(object, key, value) {
      //console.log(value)
      object['$$' + key] = value;
    };
  }
} catch (e) {//ie8
}

//if(typeof require == 'function'){
exports.DOMImplementation = DOMImplementation;
exports.XMLSerializer = XMLSerializer;
//}

},{}],3:[function(require,module,exports){
"use strict";

exports.entityMap = {
  lt: '<',
  gt: '>',
  amp: '&',
  quot: '"',
  apos: "'",
  Agrave: "À",
  Aacute: "Á",
  Acirc: "Â",
  Atilde: "Ã",
  Auml: "Ä",
  Aring: "Å",
  AElig: "Æ",
  Ccedil: "Ç",
  Egrave: "È",
  Eacute: "É",
  Ecirc: "Ê",
  Euml: "Ë",
  Igrave: "Ì",
  Iacute: "Í",
  Icirc: "Î",
  Iuml: "Ï",
  ETH: "Ð",
  Ntilde: "Ñ",
  Ograve: "Ò",
  Oacute: "Ó",
  Ocirc: "Ô",
  Otilde: "Õ",
  Ouml: "Ö",
  Oslash: "Ø",
  Ugrave: "Ù",
  Uacute: "Ú",
  Ucirc: "Û",
  Uuml: "Ü",
  Yacute: "Ý",
  THORN: "Þ",
  szlig: "ß",
  agrave: "à",
  aacute: "á",
  acirc: "â",
  atilde: "ã",
  auml: "ä",
  aring: "å",
  aelig: "æ",
  ccedil: "ç",
  egrave: "è",
  eacute: "é",
  ecirc: "ê",
  euml: "ë",
  igrave: "ì",
  iacute: "í",
  icirc: "î",
  iuml: "ï",
  eth: "ð",
  ntilde: "ñ",
  ograve: "ò",
  oacute: "ó",
  ocirc: "ô",
  otilde: "õ",
  ouml: "ö",
  oslash: "ø",
  ugrave: "ù",
  uacute: "ú",
  ucirc: "û",
  uuml: "ü",
  yacute: "ý",
  thorn: "þ",
  yuml: "ÿ",
  nbsp: " ",
  iexcl: "¡",
  cent: "¢",
  pound: "£",
  curren: "¤",
  yen: "¥",
  brvbar: "¦",
  sect: "§",
  uml: "¨",
  copy: "©",
  ordf: "ª",
  laquo: "«",
  not: "¬",
  shy: "­­",
  reg: "®",
  macr: "¯",
  deg: "°",
  plusmn: "±",
  sup2: "²",
  sup3: "³",
  acute: "´",
  micro: "µ",
  para: "¶",
  middot: "·",
  cedil: "¸",
  sup1: "¹",
  ordm: "º",
  raquo: "»",
  frac14: "¼",
  frac12: "½",
  frac34: "¾",
  iquest: "¿",
  times: "×",
  divide: "÷",
  forall: "∀",
  part: "∂",
  exist: "∃",
  empty: "∅",
  nabla: "∇",
  isin: "∈",
  notin: "∉",
  ni: "∋",
  prod: "∏",
  sum: "∑",
  minus: "−",
  lowast: "∗",
  radic: "√",
  prop: "∝",
  infin: "∞",
  ang: "∠",
  and: "∧",
  or: "∨",
  cap: "∩",
  cup: "∪",
  'int': "∫",
  there4: "∴",
  sim: "∼",
  cong: "≅",
  asymp: "≈",
  ne: "≠",
  equiv: "≡",
  le: "≤",
  ge: "≥",
  sub: "⊂",
  sup: "⊃",
  nsub: "⊄",
  sube: "⊆",
  supe: "⊇",
  oplus: "⊕",
  otimes: "⊗",
  perp: "⊥",
  sdot: "⋅",
  Alpha: "Α",
  Beta: "Β",
  Gamma: "Γ",
  Delta: "Δ",
  Epsilon: "Ε",
  Zeta: "Ζ",
  Eta: "Η",
  Theta: "Θ",
  Iota: "Ι",
  Kappa: "Κ",
  Lambda: "Λ",
  Mu: "Μ",
  Nu: "Ν",
  Xi: "Ξ",
  Omicron: "Ο",
  Pi: "Π",
  Rho: "Ρ",
  Sigma: "Σ",
  Tau: "Τ",
  Upsilon: "Υ",
  Phi: "Φ",
  Chi: "Χ",
  Psi: "Ψ",
  Omega: "Ω",
  alpha: "α",
  beta: "β",
  gamma: "γ",
  delta: "δ",
  epsilon: "ε",
  zeta: "ζ",
  eta: "η",
  theta: "θ",
  iota: "ι",
  kappa: "κ",
  lambda: "λ",
  mu: "μ",
  nu: "ν",
  xi: "ξ",
  omicron: "ο",
  pi: "π",
  rho: "ρ",
  sigmaf: "ς",
  sigma: "σ",
  tau: "τ",
  upsilon: "υ",
  phi: "φ",
  chi: "χ",
  psi: "ψ",
  omega: "ω",
  thetasym: "ϑ",
  upsih: "ϒ",
  piv: "ϖ",
  OElig: "Œ",
  oelig: "œ",
  Scaron: "Š",
  scaron: "š",
  Yuml: "Ÿ",
  fnof: "ƒ",
  circ: "ˆ",
  tilde: "˜",
  ensp: " ",
  emsp: " ",
  thinsp: " ",
  zwnj: "‌",
  zwj: "‍",
  lrm: "‎",
  rlm: "‏",
  ndash: "–",
  mdash: "—",
  lsquo: "‘",
  rsquo: "’",
  sbquo: "‚",
  ldquo: "“",
  rdquo: "”",
  bdquo: "„",
  dagger: "†",
  Dagger: "‡",
  bull: "•",
  hellip: "…",
  permil: "‰",
  prime: "′",
  Prime: "″",
  lsaquo: "‹",
  rsaquo: "›",
  oline: "‾",
  euro: "€",
  trade: "™",
  larr: "←",
  uarr: "↑",
  rarr: "→",
  darr: "↓",
  harr: "↔",
  crarr: "↵",
  lceil: "⌈",
  rceil: "⌉",
  lfloor: "⌊",
  rfloor: "⌋",
  loz: "◊",
  spades: "♠",
  clubs: "♣",
  hearts: "♥",
  diams: "♦"
};
//for(var  n in exports.entityMap){console.log(exports.entityMap[n].charCodeAt())}

},{}],4:[function(require,module,exports){
"use strict";

//[4]   	NameStartChar	   ::=   	":" | [A-Z] | "_" | [a-z] | [#xC0-#xD6] | [#xD8-#xF6] | [#xF8-#x2FF] | [#x370-#x37D] | [#x37F-#x1FFF] | [#x200C-#x200D] | [#x2070-#x218F] | [#x2C00-#x2FEF] | [#x3001-#xD7FF] | [#xF900-#xFDCF] | [#xFDF0-#xFFFD] | [#x10000-#xEFFFF]
//[4a]   	NameChar	   ::=   	NameStartChar | "-" | "." | [0-9] | #xB7 | [#x0300-#x036F] | [#x203F-#x2040]
//[5]   	Name	   ::=   	NameStartChar (NameChar)*
var nameStartChar = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/; //\u10000-\uEFFFF
var nameChar = new RegExp("[\\-\\.0-9" + nameStartChar.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]");
var tagNamePattern = new RegExp('^' + nameStartChar.source + nameChar.source + '*(?:\:' + nameStartChar.source + nameChar.source + '*)?$');
//var tagNamePattern = /^[a-zA-Z_][\w\-\.]*(?:\:[a-zA-Z_][\w\-\.]*)?$/
//var handlers = 'resolveEntity,getExternalSubset,characters,endDocument,endElement,endPrefixMapping,ignorableWhitespace,processingInstruction,setDocumentLocator,skippedEntity,startDocument,startElement,startPrefixMapping,notationDecl,unparsedEntityDecl,error,fatalError,warning,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,comment,endCDATA,endDTD,endEntity,startCDATA,startDTD,startEntity'.split(',')

//S_TAG,	S_ATTR,	S_EQ,	S_ATTR_NOQUOT_VALUE
//S_ATTR_SPACE,	S_ATTR_END,	S_TAG_SPACE, S_TAG_CLOSE
var S_TAG = 0; //tag name offerring
var S_ATTR = 1; //attr name offerring 
var S_ATTR_SPACE = 2; //attr name end and space offer
var S_EQ = 3; //=space?
var S_ATTR_NOQUOT_VALUE = 4; //attr value(no quot value only)
var S_ATTR_END = 5; //attr value end and no space(quot end)
var S_TAG_SPACE = 6; //(attr value end || tag end ) && (space offer)
var S_TAG_CLOSE = 7; //closed el<el />

function XMLReader() {}
XMLReader.prototype = {
  parse: function parse(source, defaultNSMap, entityMap) {
    var domBuilder = this.domBuilder;
    domBuilder.startDocument();
    _copy(defaultNSMap, defaultNSMap = {});
    _parse(source, defaultNSMap, entityMap, domBuilder, this.errorHandler);
    domBuilder.endDocument();
  }
};
function _parse(source, defaultNSMapCopy, entityMap, domBuilder, errorHandler) {
  function fixedFromCharCode(code) {
    // String.prototype.fromCharCode does not supports
    // > 2 bytes unicode chars directly
    if (code > 0xffff) {
      code -= 0x10000;
      var surrogate1 = 0xd800 + (code >> 10),
        surrogate2 = 0xdc00 + (code & 0x3ff);
      return String.fromCharCode(surrogate1, surrogate2);
    } else {
      return String.fromCharCode(code);
    }
  }
  function entityReplacer(a) {
    var k = a.slice(1, -1);
    if (k in entityMap) {
      return entityMap[k];
    } else if (k.charAt(0) === '#') {
      return fixedFromCharCode(parseInt(k.substr(1).replace('x', '0x')));
    } else {
      errorHandler.error('entity not found:' + a);
      return a;
    }
  }
  function appendText(end) {
    //has some bugs
    if (end > start) {
      var xt = source.substring(start, end).replace(/&#?\w+;/g, entityReplacer);
      locator && position(start);
      domBuilder.characters(xt, 0, end - start);
      start = end;
    }
  }
  function position(p, m) {
    while (p >= lineEnd && (m = linePattern.exec(source))) {
      lineStart = m.index;
      lineEnd = lineStart + m[0].length;
      locator.lineNumber++;
      //console.log('line++:',locator,startPos,endPos)
    }
    locator.columnNumber = p - lineStart + 1;
  }
  var lineStart = 0;
  var lineEnd = 0;
  var linePattern = /.*(?:\r\n?|\n)|.*$/g;
  var locator = domBuilder.locator;
  var parseStack = [{
    currentNSMap: defaultNSMapCopy
  }];
  var closeMap = {};
  var start = 0;
  while (true) {
    try {
      var tagStart = source.indexOf('<', start);
      if (tagStart < 0) {
        if (!source.substr(start).match(/^\s*$/)) {
          var doc = domBuilder.doc;
          var text = doc.createTextNode(source.substr(start));
          doc.appendChild(text);
          domBuilder.currentElement = text;
        }
        return;
      }
      if (tagStart > start) {
        appendText(tagStart);
      }
      switch (source.charAt(tagStart + 1)) {
        case '/':
          var end = source.indexOf('>', tagStart + 3);
          var tagName = source.substring(tagStart + 2, end);
          var config = parseStack.pop();
          if (end < 0) {
            tagName = source.substring(tagStart + 2).replace(/[\s<].*/, '');
            //console.error('#@@@@@@'+tagName)
            errorHandler.error("end tag name: " + tagName + ' is not complete:' + config.tagName);
            end = tagStart + 1 + tagName.length;
          } else if (tagName.match(/\s</)) {
            tagName = tagName.replace(/[\s<].*/, '');
            errorHandler.error("end tag name: " + tagName + ' maybe not complete');
            end = tagStart + 1 + tagName.length;
          }
          //console.error(parseStack.length,parseStack)
          //console.error(config);
          var localNSMap = config.localNSMap;
          var endMatch = config.tagName == tagName;
          var endIgnoreCaseMach = endMatch || config.tagName && config.tagName.toLowerCase() == tagName.toLowerCase();
          if (endIgnoreCaseMach) {
            domBuilder.endElement(config.uri, config.localName, tagName);
            if (localNSMap) {
              for (var prefix in localNSMap) {
                domBuilder.endPrefixMapping(prefix);
              }
            }
            if (!endMatch) {
              errorHandler.fatalError("end tag name: " + tagName + ' is not match the current start tagName:' + config.tagName);
            }
          } else {
            parseStack.push(config);
          }
          end++;
          break;
        // end elment
        case '?':
          // <?...?>
          locator && position(tagStart);
          end = parseInstruction(source, tagStart, domBuilder);
          break;
        case '!':
          // <!doctype,<![CDATA,<!--
          locator && position(tagStart);
          end = parseDCC(source, tagStart, domBuilder, errorHandler);
          break;
        default:
          locator && position(tagStart);
          var el = new ElementAttributes();
          var currentNSMap = parseStack[parseStack.length - 1].currentNSMap;
          //elStartEnd
          var end = parseElementStartPart(source, tagStart, el, currentNSMap, entityReplacer, errorHandler);
          var len = el.length;
          if (!el.closed && fixSelfClosed(source, end, el.tagName, closeMap)) {
            el.closed = true;
            if (!entityMap.nbsp) {
              errorHandler.warning('unclosed xml attribute');
            }
          }
          if (locator && len) {
            var locator2 = copyLocator(locator, {});
            //try{//attribute position fixed
            for (var i = 0; i < len; i++) {
              var a = el[i];
              position(a.offset);
              a.locator = copyLocator(locator, {});
            }
            //}catch(e){console.error('@@@@@'+e)}
            domBuilder.locator = locator2;
            if (appendElement(el, domBuilder, currentNSMap)) {
              parseStack.push(el);
            }
            domBuilder.locator = locator;
          } else {
            if (appendElement(el, domBuilder, currentNSMap)) {
              parseStack.push(el);
            }
          }
          if (el.uri === 'http://www.w3.org/1999/xhtml' && !el.closed) {
            end = parseHtmlSpecialContent(source, end, el.tagName, entityReplacer, domBuilder);
          } else {
            end++;
          }
      }
    } catch (e) {
      errorHandler.error('element parse error: ' + e);
      //errorHandler.error('element parse error: '+e);
      end = -1;
      //throw e;
    }
    if (end > start) {
      start = end;
    } else {
      //TODO: 这里有可能sax回退，有位置错误风险
      appendText(Math.max(tagStart, start) + 1);
    }
  }
}
function copyLocator(f, t) {
  t.lineNumber = f.lineNumber;
  t.columnNumber = f.columnNumber;
  return t;
}

/**
 * @see #appendElement(source,elStartEnd,el,selfClosed,entityReplacer,domBuilder,parseStack);
 * @return end of the elementStartPart(end of elementEndPart for selfClosed el)
 */
function parseElementStartPart(source, start, el, currentNSMap, entityReplacer, errorHandler) {
  var attrName;
  var value;
  var p = ++start;
  var s = S_TAG; //status
  while (true) {
    var c = source.charAt(p);
    switch (c) {
      case '=':
        if (s === S_ATTR) {
          //attrName
          attrName = source.slice(start, p);
          s = S_EQ;
        } else if (s === S_ATTR_SPACE) {
          s = S_EQ;
        } else {
          //fatalError: equal must after attrName or space after attrName
          throw new Error('attribute equal must after attrName');
        }
        break;
      case '\'':
      case '"':
        if (s === S_EQ || s === S_ATTR //|| s == S_ATTR_SPACE
        ) {
          //equal
          if (s === S_ATTR) {
            errorHandler.warning('attribute value must after "="');
            attrName = source.slice(start, p);
          }
          start = p + 1;
          p = source.indexOf(c, start);
          if (p > 0) {
            value = source.slice(start, p).replace(/&#?\w+;/g, entityReplacer);
            el.add(attrName, value, start - 1);
            s = S_ATTR_END;
          } else {
            //fatalError: no end quot match
            throw new Error('attribute value no end \'' + c + '\' match');
          }
        } else if (s == S_ATTR_NOQUOT_VALUE) {
          value = source.slice(start, p).replace(/&#?\w+;/g, entityReplacer);
          //console.log(attrName,value,start,p)
          el.add(attrName, value, start);
          //console.dir(el)
          errorHandler.warning('attribute "' + attrName + '" missed start quot(' + c + ')!!');
          start = p + 1;
          s = S_ATTR_END;
        } else {
          //fatalError: no equal before
          throw new Error('attribute value must after "="');
        }
        break;
      case '/':
        switch (s) {
          case S_TAG:
            el.setTagName(source.slice(start, p));
          case S_ATTR_END:
          case S_TAG_SPACE:
          case S_TAG_CLOSE:
            s = S_TAG_CLOSE;
            el.closed = true;
          case S_ATTR_NOQUOT_VALUE:
          case S_ATTR:
          case S_ATTR_SPACE:
            break;
          //case S_EQ:
          default:
            throw new Error("attribute invalid close char('/')");
        }
        break;
      case '':
        //end document
        //throw new Error('unexpected end of input')
        errorHandler.error('unexpected end of input');
        if (s == S_TAG) {
          el.setTagName(source.slice(start, p));
        }
        return p;
      case '>':
        switch (s) {
          case S_TAG:
            el.setTagName(source.slice(start, p));
          case S_ATTR_END:
          case S_TAG_SPACE:
          case S_TAG_CLOSE:
            break;
          //normal
          case S_ATTR_NOQUOT_VALUE: //Compatible state
          case S_ATTR:
            value = source.slice(start, p);
            if (value.slice(-1) === '/') {
              el.closed = true;
              value = value.slice(0, -1);
            }
          case S_ATTR_SPACE:
            if (s === S_ATTR_SPACE) {
              value = attrName;
            }
            if (s == S_ATTR_NOQUOT_VALUE) {
              errorHandler.warning('attribute "' + value + '" missed quot(")!!');
              el.add(attrName, value.replace(/&#?\w+;/g, entityReplacer), start);
            } else {
              if (currentNSMap[''] !== 'http://www.w3.org/1999/xhtml' || !value.match(/^(?:disabled|checked|selected)$/i)) {
                errorHandler.warning('attribute "' + value + '" missed value!! "' + value + '" instead!!');
              }
              el.add(value, value, start);
            }
            break;
          case S_EQ:
            throw new Error('attribute value missed!!');
        }
        //			console.log(tagName,tagNamePattern,tagNamePattern.test(tagName))
        return p;
      /*xml space '\x20' | #x9 | #xD | #xA; */
      case "\x80":
        c = ' ';
      default:
        if (c <= ' ') {
          //space
          switch (s) {
            case S_TAG:
              el.setTagName(source.slice(start, p)); //tagName
              s = S_TAG_SPACE;
              break;
            case S_ATTR:
              attrName = source.slice(start, p);
              s = S_ATTR_SPACE;
              break;
            case S_ATTR_NOQUOT_VALUE:
              var value = source.slice(start, p).replace(/&#?\w+;/g, entityReplacer);
              errorHandler.warning('attribute "' + value + '" missed quot(")!!');
              el.add(attrName, value, start);
            case S_ATTR_END:
              s = S_TAG_SPACE;
              break;
            //case S_TAG_SPACE:
            //case S_EQ:
            //case S_ATTR_SPACE:
            //	void();break;
            //case S_TAG_CLOSE:
            //ignore warning
          }
        } else {
          //not space
          //S_TAG,	S_ATTR,	S_EQ,	S_ATTR_NOQUOT_VALUE
          //S_ATTR_SPACE,	S_ATTR_END,	S_TAG_SPACE, S_TAG_CLOSE
          switch (s) {
            //case S_TAG:void();break;
            //case S_ATTR:void();break;
            //case S_ATTR_NOQUOT_VALUE:void();break;
            case S_ATTR_SPACE:
              var tagName = el.tagName;
              if (currentNSMap[''] !== 'http://www.w3.org/1999/xhtml' || !attrName.match(/^(?:disabled|checked|selected)$/i)) {
                errorHandler.warning('attribute "' + attrName + '" missed value!! "' + attrName + '" instead2!!');
              }
              el.add(attrName, attrName, start);
              start = p;
              s = S_ATTR;
              break;
            case S_ATTR_END:
              errorHandler.warning('attribute space is required"' + attrName + '"!!');
            case S_TAG_SPACE:
              s = S_ATTR;
              start = p;
              break;
            case S_EQ:
              s = S_ATTR_NOQUOT_VALUE;
              start = p;
              break;
            case S_TAG_CLOSE:
              throw new Error("elements closed character '/' and '>' must be connected to");
          }
        }
    } //end outer switch
    //console.log('p++',p)
    p++;
  }
}
/**
 * @return true if has new namespace define
 */
function appendElement(el, domBuilder, currentNSMap) {
  var tagName = el.tagName;
  var localNSMap = null;
  //var currentNSMap = parseStack[parseStack.length-1].currentNSMap;
  var i = el.length;
  while (i--) {
    var a = el[i];
    var qName = a.qName;
    var value = a.value;
    var nsp = qName.indexOf(':');
    if (nsp > 0) {
      var prefix = a.prefix = qName.slice(0, nsp);
      var localName = qName.slice(nsp + 1);
      var nsPrefix = prefix === 'xmlns' && localName;
    } else {
      localName = qName;
      prefix = null;
      nsPrefix = qName === 'xmlns' && '';
    }
    //can not set prefix,because prefix !== ''
    a.localName = localName;
    //prefix == null for no ns prefix attribute 
    if (nsPrefix !== false) {
      //hack!!
      if (localNSMap == null) {
        localNSMap = {};
        //console.log(currentNSMap,0)
        _copy(currentNSMap, currentNSMap = {});
        //console.log(currentNSMap,1)
      }
      currentNSMap[nsPrefix] = localNSMap[nsPrefix] = value;
      a.uri = 'http://www.w3.org/2000/xmlns/';
      domBuilder.startPrefixMapping(nsPrefix, value);
    }
  }
  var i = el.length;
  while (i--) {
    a = el[i];
    var prefix = a.prefix;
    if (prefix) {
      //no prefix attribute has no namespace
      if (prefix === 'xml') {
        a.uri = 'http://www.w3.org/XML/1998/namespace';
      }
      if (prefix !== 'xmlns') {
        a.uri = currentNSMap[prefix || ''];

        //{console.log('###'+a.qName,domBuilder.locator.systemId+'',currentNSMap,a.uri)}
      }
    }
  }
  var nsp = tagName.indexOf(':');
  if (nsp > 0) {
    prefix = el.prefix = tagName.slice(0, nsp);
    localName = el.localName = tagName.slice(nsp + 1);
  } else {
    prefix = null; //important!!
    localName = el.localName = tagName;
  }
  //no prefix element has default namespace
  var ns = el.uri = currentNSMap[prefix || ''];
  domBuilder.startElement(ns, localName, tagName, el);
  //endPrefixMapping and startPrefixMapping have not any help for dom builder
  //localNSMap = null
  if (el.closed) {
    domBuilder.endElement(ns, localName, tagName);
    if (localNSMap) {
      for (prefix in localNSMap) {
        domBuilder.endPrefixMapping(prefix);
      }
    }
  } else {
    el.currentNSMap = currentNSMap;
    el.localNSMap = localNSMap;
    //parseStack.push(el);
    return true;
  }
}
function parseHtmlSpecialContent(source, elStartEnd, tagName, entityReplacer, domBuilder) {
  if (/^(?:script|textarea)$/i.test(tagName)) {
    var elEndStart = source.indexOf('</' + tagName + '>', elStartEnd);
    var text = source.substring(elStartEnd + 1, elEndStart);
    if (/[&<]/.test(text)) {
      if (/^script$/i.test(tagName)) {
        //if(!/\]\]>/.test(text)){
        //lexHandler.startCDATA();
        domBuilder.characters(text, 0, text.length);
        //lexHandler.endCDATA();
        return elEndStart;
        //}
      } //}else{//text area
      text = text.replace(/&#?\w+;/g, entityReplacer);
      domBuilder.characters(text, 0, text.length);
      return elEndStart;
      //}
    }
  }
  return elStartEnd + 1;
}
function fixSelfClosed(source, elStartEnd, tagName, closeMap) {
  //if(tagName in closeMap){
  var pos = closeMap[tagName];
  if (pos == null) {
    //console.log(tagName)
    pos = source.lastIndexOf('</' + tagName + '>');
    if (pos < elStartEnd) {
      //忘记闭合
      pos = source.lastIndexOf('</' + tagName);
    }
    closeMap[tagName] = pos;
  }
  return pos < elStartEnd;
  //} 
}
function _copy(source, target) {
  for (var n in source) {
    target[n] = source[n];
  }
}
function parseDCC(source, start, domBuilder, errorHandler) {
  //sure start with '<!'
  var next = source.charAt(start + 2);
  switch (next) {
    case '-':
      if (source.charAt(start + 3) === '-') {
        var end = source.indexOf('-->', start + 4);
        //append comment source.substring(4,end)//<!--
        if (end > start) {
          domBuilder.comment(source, start + 4, end - start - 4);
          return end + 3;
        } else {
          errorHandler.error("Unclosed comment");
          return -1;
        }
      } else {
        //error
        return -1;
      }
    default:
      if (source.substr(start + 3, 6) == 'CDATA[') {
        var end = source.indexOf(']]>', start + 9);
        domBuilder.startCDATA();
        domBuilder.characters(source, start + 9, end - start - 9);
        domBuilder.endCDATA();
        return end + 3;
      }
      //<!DOCTYPE
      //startDTD(java.lang.String name, java.lang.String publicId, java.lang.String systemId) 
      var matchs = split(source, start);
      var len = matchs.length;
      if (len > 1 && /!doctype/i.test(matchs[0][0])) {
        var name = matchs[1][0];
        var pubid = len > 3 && /^public$/i.test(matchs[2][0]) && matchs[3][0];
        var sysid = len > 4 && matchs[4][0];
        var lastMatch = matchs[len - 1];
        domBuilder.startDTD(name, pubid && pubid.replace(/^(['"])(.*?)\1$/, '$2'), sysid && sysid.replace(/^(['"])(.*?)\1$/, '$2'));
        domBuilder.endDTD();
        return lastMatch.index + lastMatch[0].length;
      }
  }
  return -1;
}
function parseInstruction(source, start, domBuilder) {
  var end = source.indexOf('?>', start);
  if (end) {
    var match = source.substring(start, end).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
    if (match) {
      var len = match[0].length;
      domBuilder.processingInstruction(match[1], match[2]);
      return end + 2;
    } else {
      //error
      return -1;
    }
  }
  return -1;
}

/**
 * @param source
 */
function ElementAttributes(source) {}
ElementAttributes.prototype = {
  setTagName: function setTagName(tagName) {
    if (!tagNamePattern.test(tagName)) {
      throw new Error('invalid tagName:' + tagName);
    }
    this.tagName = tagName;
  },
  add: function add(qName, value, offset) {
    if (!tagNamePattern.test(qName)) {
      throw new Error('invalid attribute:' + qName);
    }
    this[this.length++] = {
      qName: qName,
      value: value,
      offset: offset
    };
  },
  length: 0,
  getLocalName: function getLocalName(i) {
    return this[i].localName;
  },
  getLocator: function getLocator(i) {
    return this[i].locator;
  },
  getQName: function getQName(i) {
    return this[i].qName;
  },
  getURI: function getURI(i) {
    return this[i].uri;
  },
  getValue: function getValue(i) {
    return this[i].value;
  }
  //	,getIndex:function(uri, localName)){
  //		if(localName){
  //			
  //		}else{
  //			var qName = uri
  //		}
  //	},
  //	getValue:function(){return this.getValue(this.getIndex.apply(this,arguments))},
  //	getType:function(uri,localName){}
  //	getType:function(i){},
};
function split(source, start) {
  var match;
  var buf = [];
  var reg = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
  reg.lastIndex = start;
  reg.exec(source); //skip <
  while (match = reg.exec(source)) {
    buf.push(match);
    if (match[1]) return buf;
  }
}
exports.XMLReader = XMLReader;

},{}],5:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _HTMLAudioElement2 = _interopRequireDefault(require("./HTMLAudioElement"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var HAVE_NOTHING = 0;
var HAVE_METADATA = 1;
var HAVE_CURRENT_DATA = 2;
var HAVE_FUTURE_DATA = 3;
var HAVE_ENOUGH_DATA = 4;
var SN_SEED = 1;
var _innerAudioContextMap = {};
var Audio = exports["default"] = /*#__PURE__*/function (_HTMLAudioElement) {
  function Audio(url) {
    var _this;
    _classCallCheck(this, Audio);
    _this = _callSuper(this, Audio);
    _this._$sn = SN_SEED++;
    _this.HAVE_NOTHING = HAVE_NOTHING;
    _this.HAVE_METADATA = HAVE_METADATA;
    _this.HAVE_CURRENT_DATA = HAVE_CURRENT_DATA;
    _this.HAVE_FUTURE_DATA = HAVE_FUTURE_DATA;
    _this.HAVE_ENOUGH_DATA = HAVE_ENOUGH_DATA;
    _this.readyState = HAVE_NOTHING;
    var innerAudioContext = my.createInnerAudioContext();
    _innerAudioContextMap[_this._$sn] = innerAudioContext;
    _this._canplayEvents = ['load', 'loadend', 'canplay', 'canplaythrough', 'loadedmetadata'];
    innerAudioContext.onCanplay(function () {
      _this._loaded = true;
      _this.readyState = _this.HAVE_CURRENT_DATA;
      _this._canplayEvents.forEach(function (type) {
        _this.dispatchEvent({
          type: type
        });
      });
    });
    innerAudioContext.onPlay(function () {
      _this._paused = _innerAudioContextMap[_this._$sn].paused;
      _this.dispatchEvent({
        type: 'play'
      });
    });
    innerAudioContext.onPause(function () {
      _this._paused = _innerAudioContextMap[_this._$sn].paused;
      _this.dispatchEvent({
        type: 'pause'
      });
    });
    innerAudioContext.onEnded(function () {
      _this._paused = _innerAudioContextMap[_this._$sn].paused;
      if (_innerAudioContextMap[_this._$sn].loop === false) {
        _this.dispatchEvent({
          type: 'ended'
        });
      }
      _this.readyState = HAVE_ENOUGH_DATA;
    });
    innerAudioContext.onError(function () {
      _this._paused = _innerAudioContextMap[_this._$sn].paused;
      _this.dispatchEvent({
        type: 'error'
      });
    });
    if (url) {
      _this.src = url;
    } else {
      _this._src = '';
    }
    _this._loop = innerAudioContext.loop;
    _this._autoplay = innerAudioContext.autoplay;
    _this._paused = innerAudioContext.paused;
    _this._volume = innerAudioContext.volume;
    _this._muted = false;
    return _this;
  }
  _inherits(Audio, _HTMLAudioElement);
  return _createClass(Audio, [{
    key: "addEventListener",
    value: function addEventListener(type, listener) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      _get(_getPrototypeOf(Audio.prototype), "addEventListener", this).call(this, type, listener, options);
      type = String(type).toLowerCase();
      if (this._loaded && this._canplayEvents.indexOf(type) !== -1) {
        this.dispatchEvent({
          type: type
        });
      }
    }
  }, {
    key: "load",
    value: function load() {
      // console.warn('HTMLAudioElement.load() is not implemented.')
      // weixin doesn't need call load() manually
    }
  }, {
    key: "play",
    value: function play() {
      _innerAudioContextMap[this._$sn].play();
    }
  }, {
    key: "resume",
    value: function resume() {
      _innerAudioContextMap[this._$sn].resume();
    }
  }, {
    key: "pause",
    value: function pause() {
      _innerAudioContextMap[this._$sn].pause();
    }
  }, {
    key: "stop",
    value: function stop() {
      _innerAudioContextMap[this._$sn].stop();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      _innerAudioContextMap[this._$sn].destroy();
    }
  }, {
    key: "canPlayType",
    value: function canPlayType() {
      var mediaType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      if (typeof mediaType !== 'string') {
        return '';
      }
      if (mediaType.indexOf('audio/mpeg') > -1 || mediaType.indexOf('audio/mp4')) {
        return 'probably';
      }
      return '';
    }
  }, {
    key: "currentTime",
    get: function get() {
      return _innerAudioContextMap[this._$sn].currentTime;
    },
    set: function set(value) {
      _innerAudioContextMap[this._$sn].seek(value);
    }
  }, {
    key: "duration",
    get: function get() {
      return _innerAudioContextMap[this._$sn].duration;
    }
  }, {
    key: "src",
    get: function get() {
      return this._src;
    },
    set: function set(value) {
      this._src = value;
      this._loaded = false;
      this.readyState = this.HAVE_NOTHING;
      var innerAudioContext = _innerAudioContextMap[this._$sn];
      innerAudioContext.src = value;
    }
  }, {
    key: "loop",
    get: function get() {
      return this._loop;
    },
    set: function set(value) {
      this._loop = value;
      _innerAudioContextMap[this._$sn].loop = value;
    }
  }, {
    key: "autoplay",
    get: function get() {
      return this.autoplay;
    },
    set: function set(value) {
      this._autoplay = value;
      _innerAudioContextMap[this._$sn].autoplay = value;
    }
  }, {
    key: "paused",
    get: function get() {
      return this._paused;
    }
  }, {
    key: "volume",
    get: function get() {
      return this._volume;
    },
    set: function set(value) {
      this._volume = value;
      if (!this._muted) {
        _innerAudioContextMap[this._$sn].volume = value;
      }
    }
  }, {
    key: "muted",
    get: function get() {
      return this._muted;
    },
    set: function set(value) {
      this._muted = value;
      if (value) {
        _innerAudioContextMap[this._$sn].volume = 0;
      } else {
        _innerAudioContextMap[this._$sn].volume = this._volume;
      }
    }
  }, {
    key: "cloneNode",
    value: function cloneNode() {
      var newAudio = new Audio();
      newAudio.loop = this.loop;
      newAudio.autoplay = this.autoplay;
      newAudio.src = this.src;
      return newAudio;
    }
  }]);
}(_HTMLAudioElement2["default"]);

},{"./HTMLAudioElement":9}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _WindowProperties = require("./WindowProperties");
function Canvas() {}
var CanvasProxy = new Proxy(Canvas, {
  construct: function construct() {
    var canvas = my.createOffscreenCanvas();
    canvas.type = 'canvas';

    // canvas.__proto__.__proto__.__proto__ = new HTMLCanvasElement()

    var _getContext = canvas.getContext;
    canvas.getBoundingClientRect = function () {
      var ret = {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
      return ret;
    };
    canvas.style = {
      top: '0px',
      left: '0px',
      width: _WindowProperties.innerWidth + 'px',
      height: _WindowProperties.innerHeight + 'px'
    };
    canvas.addEventListener = function (type, listener) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      // console.log('canvas.addEventListener', type);
      document.addEventListener(type, listener, options);
    };
    canvas.removeEventListener = function (type, listener) {
      // console.log('canvas.removeEventListener', type);
      document.removeEventListener(type, listener);
    };
    canvas.dispatchEvent = function () {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      console.log('canvas.dispatchEvent', event.type, event);
      // nothing to do
    };
    Object.defineProperty(canvas, 'clientWidth', {
      enumerable: true,
      get: function get() {
        return _WindowProperties.innerWidth;
      }
    });
    Object.defineProperty(canvas, 'clientHeight', {
      enumerable: true,
      get: function get() {
        return _WindowProperties.innerHeight;
      }
    });
    return canvas;
  }
});

// NOTE: this is a hack operation
// let canvas = new window.Canvas()
// console.error(canvas instanceof window.Canvas)  => false
var _default = exports["default"] = CanvasProxy;

},{"./WindowProperties":18}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Node2 = _interopRequireDefault(require("./Node"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Element = exports["default"] = /*#__PURE__*/function (_Node) {
  function Element() {
    var _this;
    _classCallCheck(this, Element);
    _this = _callSuper(this, Element);
    _defineProperty(_this, "className", '');
    _defineProperty(_this, "children", []);
    return _this;
  }
  _inherits(Element, _Node);
  return _createClass(Element);
}(_Node2["default"]);

},{"./Node":15}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var _events = new WeakMap();
var EventTarget = exports["default"] = /*#__PURE__*/function () {
  function EventTarget() {
    _classCallCheck(this, EventTarget);
    _events.set(this, {});
  }
  return _createClass(EventTarget, [{
    key: "addEventListener",
    value: function addEventListener(type, listener) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var events = _events.get(this);
      if (!events) {
        events = {};
        _events.set(this, events);
      }
      if (!events[type]) {
        events[type] = [];
      }
      events[type].push(listener);
      if (options.capture) {
        // console.warn('EventTarget.addEventListener: options.capture is not implemented.')
      }
      if (options.once) {
        // console.warn('EventTarget.addEventListener: options.once is not implemented.')
      }
      if (options.passive) {
        // console.warn('EventTarget.addEventListener: options.passive is not implemented.')
      }
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(type, listener) {
      var events = _events.get(this);
      if (events) {
        var listeners = events[type];
        if (listeners && listeners.length > 0) {
          for (var i = listeners.length; i--; i > 0) {
            if (listeners[i] === listener) {
              listeners.splice(i, 1);
              break;
            }
          }
        }
      }
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent() {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var listeners = _events.get(this)[event.type];
      if (listeners) {
        for (var i = 0; i < listeners.length; i++) {
          listeners[i](event);
        }
      }
    }
  }]);
}();

},{}],9:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _HTMLElement2 = _interopRequireDefault(require("./HTMLElement"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var HTMLAudioElement = exports["default"] = /*#__PURE__*/function (_HTMLElement) {
  function HTMLAudioElement() {
    _classCallCheck(this, HTMLAudioElement);
    return _callSuper(this, HTMLAudioElement, ['audio']);
  }
  _inherits(HTMLAudioElement, _HTMLElement);
  return _createClass(HTMLAudioElement);
}(_HTMLElement2["default"]);

},{"./HTMLElement":11}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var HTMLCanvasElement = my.createOffscreenCanvas().constructor;
var _default = exports["default"] = HTMLCanvasElement;

},{}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Element2 = _interopRequireDefault(require("./Element"));
var _index = require("./util/index.js");
var _WindowProperties = require("./WindowProperties");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var HTMLElement = exports["default"] = /*#__PURE__*/function (_Element) {
  function HTMLElement() {
    var _this;
    var tagName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    _classCallCheck(this, HTMLElement);
    _this = _callSuper(this, HTMLElement);
    _defineProperty(_this, "className", '');
    _defineProperty(_this, "childern", []);
    _defineProperty(_this, "style", {
      width: "".concat(_WindowProperties.innerWidth, "px"),
      height: "".concat(_WindowProperties.innerHeight, "px")
    });
    _defineProperty(_this, "insertBefore", _index.noop);
    _defineProperty(_this, "innerHTML", '');
    _this.tagName = tagName.toUpperCase();
    return _this;
  }
  _inherits(HTMLElement, _Element);
  return _createClass(HTMLElement, [{
    key: "setAttribute",
    value: function setAttribute(name, value) {
      this[name] = value;
    }
  }, {
    key: "getAttribute",
    value: function getAttribute(name) {
      return this[name];
    }
  }, {
    key: "clientWidth",
    get: function get() {
      var ret = parseInt(this.style.fontSize, 10) * this.innerHTML.length;
      return Number.isNaN(ret) ? 0 : ret;
    }
  }, {
    key: "clientHeight",
    get: function get() {
      var ret = parseInt(this.style.fontSize, 10);
      return Number.isNaN(ret) ? 0 : ret;
    }
  }, {
    key: "getBoundingClientRect",
    value: function getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: _WindowProperties.innerWidth,
        height: _WindowProperties.innerHeight
      };
    }
  }, {
    key: "focus",
    value: function focus() {}
  }]);
}(_Element2["default"]);

},{"./Element":7,"./WindowProperties":18,"./util/index.js":27}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var screencanvas = $global.screencanvas;
var HTMLImageElement = screencanvas.createImage().constructor;
var _default = exports["default"] = HTMLImageElement;

},{}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
// var screencanvas = $global.screencanvas;

function Image() {
  return $global.screencanvas.createImage();
}
var _default = exports["default"] = Image;

},{}],14:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
var ImageBitmap = exports["default"] = /*#__PURE__*/_createClass(function ImageBitmap() {
  _classCallCheck(this, ImageBitmap);
});

},{}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _EventTarget2 = _interopRequireDefault(require("./EventTarget.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Node = exports["default"] = /*#__PURE__*/function (_EventTarget) {
  function Node() {
    var _this;
    _classCallCheck(this, Node);
    _this = _callSuper(this, Node);
    _defineProperty(_this, "childNodes", []);
    return _this;
  }
  _inherits(Node, _EventTarget);
  return _createClass(Node, [{
    key: "appendChild",
    value: function appendChild(node) {
      this.childNodes.push(node);
      // if (node instanceof Node) {
      //   this.childNodes.push(node)
      // } else {
      //   throw new TypeError('Failed to executed \'appendChild\' on \'Node\': parameter 1 is not of type \'Node\'.')
      // }
    }
  }, {
    key: "cloneNode",
    value: function cloneNode() {
      var copyNode = Object.create(this);
      Object.assign(copyNode, this);
      return copyNode;
    }
  }, {
    key: "removeChild",
    value: function removeChild(node) {
      var index = this.childNodes.findIndex(function (child) {
        return child === node;
      });
      if (index > -1) {
        return this.childNodes.splice(index, 1);
      }
      return null;
    }
  }]);
}(_EventTarget2["default"]);

},{"./EventTarget.js":8}],16:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
var WebGLRenderingContext = exports["default"] = /*#__PURE__*/_createClass(function WebGLRenderingContext() {
  _classCallCheck(this, WebGLRenderingContext);
});

},{}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var _utils = require('../utils');
var MAX_AMOUNT_WEBSOCKET = 1; // The maximum number of WEBSOCKET
var CURR_AMOUNT_WEBSOCKET = 0; // The current number of WEBSOCKET
var WebSocket = exports["default"] = /*#__PURE__*/function () {
  function WebSocket(url) {
    var _this = this;
    var protocols = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    _classCallCheck(this, WebSocket);
    // The connection is closed or couldn't be opened.
    _defineProperty(this, "binaryType", '');
    // TODO: update binaryType
    _defineProperty(this, "bufferedAmount", 0);
    // TODO: update bufferedAmount
    _defineProperty(this, "extensions", '');
    _defineProperty(this, "onopen", null);
    _defineProperty(this, "onmessage", null);
    _defineProperty(this, "onerror", null);
    _defineProperty(this, "onclose", null);
    _defineProperty(this, "_onMessage", null);
    _defineProperty(this, "_onOpen", null);
    _defineProperty(this, "_onError", null);
    _defineProperty(this, "_onClose", null);
    _defineProperty(this, "_isReduced", false);
    _defineProperty(this, "protocol", '');
    // TODO: It is not currently available within the applet, but actually needs to be returned according to the sub-protocol selected by the server
    _defineProperty(this, "readyState", 3);
    if (this._isMaxCount()) {
      console.warn("Failed to construct 'WebSocket': Only ".concat(CURR_AMOUNT_WEBSOCKET, " WebSocket can be created at the same time on TaoBao."));
      return this;
    }
    if (typeof url !== 'string' || !/(^ws:\/\/)|(^wss:\/\/)/.test(url)) {
      throw new TypeError("Failed to construct 'WebSocket': The URL '".concat(url, "' is invalid"));
    }
    this.url = url;
    this.readyState = WebSocket.CONNECTING;
    this._increaseCount();
    my.connectSocket({
      url: url,
      fail: function fail(res) {
        this._triggerEvent('error', res);
      }
    });
    this._onOpen = function (res) {
      _this.readyState = WebSocket.OPEN;
      _this._triggerEvent('open');
    };
    my.onSocketOpen(this._onOpen);
    this._onMessage = function (res) {
      if (res && res.data && res.isBuffer) {
        res.data = _utils.base64ToArrayBuffer(res.data);
      }
      _this._triggerEvent('message', res);
    };
    my.onSocketMessage(this._onMessage);
    this._onError = function (res) {
      _this._triggerEvent('error', res);
      _this._decreaseCount();
    };
    my.onSocketError(this._onError);
    this._onClose = function (res) {
      _this.readyState = WebSocket.CLOSED;
      _this._triggerEvent('close');
      _this._removeAllSocketListenr();
      _this._decreaseCount();
    };
    my.onSocketClose(this._onClose);
    return this;
  }
  return _createClass(WebSocket, [{
    key: "close",
    value: function close() {
      this.readyState = WebSocket.CLOSING;
      my.closeSocket();
    }
  }, {
    key: "send",
    value: function send(data) {
      if (typeof data !== 'string' && !(data instanceof ArrayBuffer) && !ArrayBuffer.isView(data)) {
        throw new TypeError("Failed to send message: The data ".concat(data, " is invalid"));
      } else {
        var isBuffer = false;
        if (data instanceof ArrayBuffer) {
          data = _utils.arrayBufferToBase64(data);
          isBuffer = true;
        }
        my.sendSocketMessage({
          data: data,
          isBuffer: isBuffer,
          fail: function fail(res) {
            this._triggerEvent('error', res);
          }
        });
      }
    }
  }, {
    key: "_triggerEvent",
    value: function _triggerEvent(type) {
      if (typeof this["on".concat(type)] === 'function') {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        this["on".concat(type)].apply(this, args);
      }
    }
  }, {
    key: "_removeAllSocketListenr",
    value: function _removeAllSocketListenr() {
      my.offSocketOpen(this._onOpen);
      my.offSocketMessage(this._onMessage);
      my.offSocketError(this._onError);
      my.offSocketClose(this._onClose);
      this._onOpen = null;
      this._onMessage = null;
      this._onError = null;
      this._onClose = null;
    }
  }, {
    key: "_increaseCount",
    value: function _increaseCount() {
      CURR_AMOUNT_WEBSOCKET += 1;
    }
  }, {
    key: "_decreaseCount",
    value: function _decreaseCount() {
      if (!this._isReduced) {
        CURR_AMOUNT_WEBSOCKET -= 1;
        this._isReduced = true;
      }
    }
  }, {
    key: "_isMaxCount",
    value: function _isMaxCount() {
      return CURR_AMOUNT_WEBSOCKET >= MAX_AMOUNT_WEBSOCKET;
    }
  }]);
}();
_defineProperty(WebSocket, "CONNECTING", 0);
// The connection is not yet open.
_defineProperty(WebSocket, "OPEN", 1);
// The connection is open and ready to communicate.
_defineProperty(WebSocket, "CLOSING", 2);
// The connection is in the process of closing.
_defineProperty(WebSocket, "CLOSED", 3);

},{"../utils":30}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.screen = exports.performance = exports.ontouchstart = exports.ontouchmove = exports.ontouchend = exports.innerWidth = exports.innerHeight = exports.devicePixelRatio = void 0;
var _my$getSystemInfoSync = my.getSystemInfoSync(),
  pixelRatio = _my$getSystemInfoSync.pixelRatio,
  windowWidth = _my$getSystemInfoSync.windowWidth,
  windowHeight = _my$getSystemInfoSync.windowHeight;
var devicePixelRatio = exports.devicePixelRatio = pixelRatio;
var width, height;
if ($global.screencanvas.getBoundingClientRect) {
  var rect = $global.screencanvas.getBoundingClientRect();
  width = rect.width;
  height = rect.height;
} else {
  width = windowWidth;
  height = windowHeight;
}
var innerWidth = exports.innerWidth = width;
var innerHeight = exports.innerHeight = height;
var screen = exports.screen = {
  width: width,
  height: height,
  availWidth: innerWidth,
  availHeight: innerHeight,
  availLeft: 0,
  availTop: 0
};
var performance = exports.performance = {
  now: Date.now
};
var ontouchstart = exports.ontouchstart = null;
var ontouchmove = exports.ontouchmove = null;
var ontouchend = exports.ontouchend = null;

},{}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _EventTarget2 = _interopRequireDefault(require("./EventTarget.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var _url = new WeakMap();
var _method = new WeakMap();
var _requestHeader = new WeakMap();
var _responseHeader = new WeakMap();
var _requestTask = new WeakMap();
function _triggerEvent(type) {
  if (typeof this["on".concat(type)] === 'function') {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    this["on".concat(type)].apply(this, args);
  }
}
function _changeReadyState(readyState) {
  this.readyState = readyState;
  _triggerEvent.call(this, 'readystatechange');
}
var XMLHttpRequest = exports["default"] = /*#__PURE__*/function (_EventTarget) {
  function XMLHttpRequest() {
    var _this2;
    _classCallCheck(this, XMLHttpRequest);
    _this2 = _callSuper(this, XMLHttpRequest);
    _defineProperty(_this2, "timeout", 0);
    /*
     * TODO: This batch of events should be on top of the XMLHttpRequestEventTarget.prototype
     */
    _defineProperty(_this2, "onabort", null);
    _defineProperty(_this2, "onerror", null);
    _defineProperty(_this2, "onload", null);
    _defineProperty(_this2, "onloadstart", null);
    _defineProperty(_this2, "onprogress", null);
    _defineProperty(_this2, "ontimeout", null);
    _defineProperty(_this2, "onloadend", null);
    _defineProperty(_this2, "onreadystatechange", null);
    _defineProperty(_this2, "readyState", 0);
    _defineProperty(_this2, "response", null);
    _defineProperty(_this2, "responseText", null);
    _defineProperty(_this2, "responseType", '');
    _defineProperty(_this2, "responseXML", null);
    _defineProperty(_this2, "status", 0);
    _defineProperty(_this2, "statusText", '');
    _defineProperty(_this2, "upload", {});
    _defineProperty(_this2, "withCredentials", false);
    _requestHeader.set(_this2, {
      'content-type': 'application/json'
    });
    _responseHeader.set(_this2, {});
    return _this2;
  }
  _inherits(XMLHttpRequest, _EventTarget);
  return _createClass(XMLHttpRequest, [{
    key: "abort",
    value: function abort() {
      var myRequestTask = _requestTask.get(this);
      if (myRequestTask) {
        myRequestTask.abort();
      }
    }
  }, {
    key: "getAllResponseHeaders",
    value: function getAllResponseHeaders() {
      var responseHeader = _responseHeader.get(this);
      return Object.keys(responseHeader).map(function (header) {
        return "".concat(header, ": ").concat(responseHeader[header]);
      }).join('\n');
    }
  }, {
    key: "getResponseHeader",
    value: function getResponseHeader(header) {
      return _responseHeader.get(this)[header];
    }
  }, {
    key: "open",
    value: function open(method, url /* async, user, password. These parameters are not supported within the applet*/) {
      _method.set(this, method);
      _url.set(this, url);
      _changeReadyState.call(this, XMLHttpRequest.OPENED);
    }
  }, {
    key: "overrideMimeType",
    value: function overrideMimeType() {}
  }, {
    key: "send",
    value: function send() {
      var _this3 = this;
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      if (this.readyState !== XMLHttpRequest.OPENED) {
        throw new Error("Failed to execute 'send' on 'XMLHttpRequest': The object's state must be OPENED.");
      } else {
        var myRequestTask = my.request({
          data: data,
          url: _url.get(this),
          method: _method.get(this),
          headers: _requestHeader.get(this),
          dataType: 'other',
          responseType: this.responseType === 'arraybuffer' ? 'arraybuffer' : 'text',
          timeout: this.timeout || undefined,
          success: function success(_ref) {
            var data = _ref.data,
              status = _ref.status,
              headers = _ref.headers;
            _this3.status = status;
            _responseHeader.set(_this3, headers);
            _triggerEvent.call(_this3, 'loadstart');
            _changeReadyState.call(_this3, XMLHttpRequest.HEADERS_RECEIVED);
            _changeReadyState.call(_this3, XMLHttpRequest.LOADING);
            switch (_this3.responseType) {
              case 'json':
                _this3.responseText = data;
                try {
                  _this3.response = JSON.parse(data);
                } catch (e) {
                  _this3.response = null;
                }
                break;
              case '':
              case 'text':
                _this3.responseText = _this3.response = data;
                break;
              case 'arraybuffer':
                _this3.response = data;
                _this3.responseText = '';
                var bytes = new Uint8Array(data);
                var len = bytes.byteLength;
                for (var i = 0; i < len; i++) {
                  _this3.responseText += String.fromCharCode(bytes[i]);
                }
                break;
              default:
                _this3.response = null;
            }
            _changeReadyState.call(_this3, XMLHttpRequest.DONE);
            _triggerEvent.call(_this3, 'load');
            _triggerEvent.call(_this3, 'loadend');
          },
          fail: function fail(_ref2) {
            var error = _ref2.error,
              errorMessage = _ref2.errorMessage;
            // TODO 规范错误
            if (9 === error || errorMessage.indexOf('abort') !== -1) {
              _triggerEvent.call(_this3, 'abort');
            } else if (13 === error || errorMessage.indexOf('超时') !== -1) {
              _triggerEvent.call(_this3, 'timeout');
            } else {
              _triggerEvent.call(_this3, 'error', errorMessage);
            }
            _triggerEvent.call(_this3, 'loadend');
          }
        });
        _requestTask.set(this, myRequestTask);
      }
    }
  }, {
    key: "setRequestHeader",
    value: function setRequestHeader(header, value) {
      var myHeader = _requestHeader.get(this);
      myHeader[header] = value;
      _requestHeader.set(this, myHeader);
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(type, listener) {
      if (typeof listener === 'function') {
        var _this = this;
        var event = {
          target: _this
        };
        this['on' + type] = function (event) {
          listener.call(_this, event);
        };
      }
    }
  }]);
}(_EventTarget2["default"]);
// TODO: No way to simulate HEADERS_RECEIVED and LOADING states
_defineProperty(XMLHttpRequest, "UNSEND", 0);
_defineProperty(XMLHttpRequest, "OPENED", 1);
_defineProperty(XMLHttpRequest, "HEADERS_RECEIVED", 2);
_defineProperty(XMLHttpRequest, "LOADING", 3);
_defineProperty(XMLHttpRequest, "DONE", 4);

},{"./EventTarget.js":8}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var screencanvas = $global.screencanvas;
var cancelAnimationFrame = screencanvas.cancelAnimationFrame.bind(screencanvas);
var _default = exports["default"] = cancelAnimationFrame;

},{}],21:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.document = void 0;
var _window = _interopRequireWildcard(require("./window"));
var _HTMLElement = _interopRequireDefault(require("./HTMLElement"));
var _Image = _interopRequireDefault(require("./Image"));
var _Canvas = _interopRequireDefault(require("./Canvas"));
var _Audio = _interopRequireDefault(require("./Audio"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var events = {};
var document = exports.document = {
  readyState: 'complete',
  visibilityState: 'visible',
  documentElement: _window,
  hidden: false,
  style: {},
  location: _window.location,
  ontouchstart: null,
  ontouchmove: null,
  ontouchend: null,
  head: new _HTMLElement["default"]('head'),
  body: new _HTMLElement["default"]('body'),
  createElement: function createElement(tagName) {
    tagName = tagName.toLowerCase();
    if (tagName === 'canvas') {
      return new _Canvas["default"]();
    } else if (tagName === 'audio') {
      return new _Audio["default"]();
    } else if (tagName === 'img') {
      return new _Image["default"]();
    }
    return new _HTMLElement["default"](tagName);
  },
  createElementNS: function createElementNS(nameSpace, tagName) {
    return this.createElement(tagName);
  },
  getElementById: function getElementById(id) {
    if (id === _window.canvas.id) {
      return _window.canvas;
    }
    return null;
  },
  getElementsByTagName: function getElementsByTagName(tagName) {
    if (tagName === 'head') {
      return [document.head];
    } else if (tagName === 'body') {
      return [document.body];
    } else if (tagName === 'canvas') {
      return [_window.canvas];
    }
    return [];
  },
  getElementsByName: function getElementsByName(tagName) {
    if (tagName === 'head') {
      return [document.head];
    } else if (tagName === 'body') {
      return [document.body];
    } else if (tagName === 'canvas') {
      return [_window.canvas];
    }
    return [];
  },
  querySelector: function querySelector(query) {
    if (query === 'head') {
      return document.head;
    } else if (query === 'body') {
      return document.body;
    } else if (query === 'canvas') {
      return _window.canvas;
    } else if (query === "#".concat(_window.canvas.id)) {
      return _window.canvas;
    }
    return null;
  },
  querySelectorAll: function querySelectorAll(query) {
    if (query === 'head') {
      return [document.head];
    } else if (query === 'body') {
      return [document.body];
    } else if (query === 'canvas') {
      return [_window.canvas];
    }
    return [];
  },
  addEventListener: function addEventListener(type, listener) {
    if (!events[type]) {
      events[type] = [];
    }
    events[type].push(listener);
  },
  removeEventListener: function removeEventListener(type, listener) {
    var listeners = events[type];
    if (listeners && listeners.length > 0) {
      for (var i = listeners.length; i--; i > 0) {
        if (listeners[i] === listener) {
          listeners.splice(i, 1);
          break;
        }
      }
    }
  },
  dispatchEvent: function dispatchEvent(event) {
    var listeners = events[event.type];
    if (listeners) {
      for (var i = 0; i < listeners.length; i++) {
        listeners[i](event);
      }
    }
  }
};

},{"./Audio":5,"./Canvas":6,"./HTMLElement":11,"./Image":13,"./window":28}],22:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _window = _interopRequireWildcard(require("./window"));
var _document = require("./document");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var global = $global;
function inject() {
  // Expose the global canvas
  _window.canvas = $global.screencanvas;
  _window.document = _document.document;
  _window.addEventListener = function (type, listener) {
    _window.document.addEventListener(type, listener);
  };
  _window.removeEventListener = function (type, listener) {
    _window.document.removeEventListener(type, listener);
  };
  _window.dispatchEvent = _window.document.dispatchEvent;
  var _my$getSystemInfoSync = my.getSystemInfoSync(),
    platform = _my$getSystemInfoSync.platform;

  // Developer tools cannot redefine window
  if (typeof __devtoolssubcontext === 'undefined' && platform === 'devtools') {
    for (var key in _window) {
      var descriptor = Object.getOwnPropertyDescriptor(global, key);
      if (!descriptor || descriptor.configurable === true) {
        Object.defineProperty(window, key, {
          value: _window[key]
        });
      }
    }
    for (var _key in _window.document) {
      var _descriptor = Object.getOwnPropertyDescriptor(global.document, _key);
      if (!_descriptor || _descriptor.configurable === true) {
        Object.defineProperty(global.document, _key, {
          value: _window.document[_key]
        });
      }
    }
    window.parent = window;
  } else {
    for (var _key2 in _window) {
      global[_key2] = _window[_key2];
    }
    // global.window = _window
    // window = global
    // window.top = window.parent = window
  }
  global.setTimeout = setTimeout;
  global.clearTimeout = clearTimeout;
  global.setInterval = setInterval;
  global.clearInterval = clearInterval;
}
if (!global.__isAdapterInjected) {
  global.__isAdapterInjected = true;
  inject();
}
require('../../../../common/xmldom/dom-parser');
require('../unify');

},{"../../../../common/xmldom/dom-parser":1,"../unify":29,"./document":21,"./window":28}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var localStorage = {
  get length() {
    var _my$getStorageInfoSyn = my.getStorageInfoSync(),
      keys = _my$getStorageInfoSyn.keys;
    return keys.length;
  },
  key: function key(n) {
    var _my$getStorageInfoSyn2 = my.getStorageInfoSync(),
      keys = _my$getStorageInfoSyn2.keys;
    return keys[n];
  },
  getItem: function getItem(key) {
    var ret = my.getStorageSync({
      key: key
    });
    return ret && ret.data;
  },
  setItem: function setItem(key, data) {
    return my.setStorageSync({
      key: key,
      data: data
    });
  },
  removeItem: function removeItem(key) {
    my.removeStorageSync(key);
  },
  clear: function clear() {
    my.clearStorageSync();
  }
};
var _default = exports["default"] = localStorage;

},{}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var location = {
  href: 'game.js',
  protocol: '',
  reload: function reload() {}
};
var _default = exports["default"] = location;

},{}],25:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _index = require("./util/index.js");
// TODO: Need my.getSystemInfo for more details
var systemInfo = my.getSystemInfoSync();
console.log(systemInfo);
var system = systemInfo.system;
var platform = systemInfo.platform;
var language = systemInfo.language;
var version = systemInfo.version;
var android = system ? system.toLowerCase().indexOf('android') !== -1 : false;
var uaDesc = android ? "Android; CPU ".concat(system) : "iPhone; CPU iPhone OS ".concat(system, " like Mac OS X");
var ua = "Mozilla/5.0 (".concat(uaDesc, ") AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 MicroMessenger/").concat(version, " MiniGame NetType/WIFI Language/").concat(language);
var navigator = {
  platform: platform,
  language: language,
  appVersion: "5.0 (".concat(uaDesc, ") AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1"),
  userAgent: ua,
  onLine: true,
  // TODO: Use my.getNetworkStateChange and my.onNetworkStateChange to return the real state

  // TODO: Wrap the geolocation with my.getLocation
  geolocation: {
    getCurrentPosition: _index.noop,
    watchPosition: _index.noop,
    clearWatch: _index.noop
  }
};
if (my.onNetworkStatusChange) {
  my.onNetworkStatusChange(function (event) {
    navigator.onLine = event.isConnected;
  });
}
var _default = exports["default"] = navigator;

},{"./util/index.js":27}],26:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var screencanvas = $global.screencanvas;
var requestAnimationFrame = screencanvas.requestAnimationFrame.bind(screencanvas);
var _default = exports["default"] = requestAnimationFrame;

},{}],27:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.noop = noop;
function noop() {}

},{}],28:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  navigator: true,
  XMLHttpRequest: true,
  WebSocket: true,
  Image: true,
  ImageBitmap: true,
  HTMLElement: true,
  HTMLImageElement: true,
  HTMLCanvasElement: true,
  WebGLRenderingContext: true,
  localStorage: true,
  location: true,
  requestAnimationFrame: true,
  cancelAnimationFrame: true
};
Object.defineProperty(exports, "HTMLCanvasElement", {
  enumerable: true,
  get: function get() {
    return _HTMLCanvasElement["default"];
  }
});
Object.defineProperty(exports, "HTMLElement", {
  enumerable: true,
  get: function get() {
    return _HTMLElement["default"];
  }
});
Object.defineProperty(exports, "HTMLImageElement", {
  enumerable: true,
  get: function get() {
    return _HTMLImageElement["default"];
  }
});
Object.defineProperty(exports, "Image", {
  enumerable: true,
  get: function get() {
    return _Image["default"];
  }
});
Object.defineProperty(exports, "ImageBitmap", {
  enumerable: true,
  get: function get() {
    return _ImageBitmap["default"];
  }
});
Object.defineProperty(exports, "WebGLRenderingContext", {
  enumerable: true,
  get: function get() {
    return _WebGLRenderingContext["default"];
  }
});
Object.defineProperty(exports, "WebSocket", {
  enumerable: true,
  get: function get() {
    return _WebSocket["default"];
  }
});
Object.defineProperty(exports, "XMLHttpRequest", {
  enumerable: true,
  get: function get() {
    return _XMLHttpRequest["default"];
  }
});
Object.defineProperty(exports, "cancelAnimationFrame", {
  enumerable: true,
  get: function get() {
    return _cancelAnimationFrame["default"];
  }
});
Object.defineProperty(exports, "localStorage", {
  enumerable: true,
  get: function get() {
    return _localStorage["default"];
  }
});
Object.defineProperty(exports, "location", {
  enumerable: true,
  get: function get() {
    return _location["default"];
  }
});
Object.defineProperty(exports, "navigator", {
  enumerable: true,
  get: function get() {
    return _navigator["default"];
  }
});
Object.defineProperty(exports, "requestAnimationFrame", {
  enumerable: true,
  get: function get() {
    return _requestAnimationFrame["default"];
  }
});
var _navigator = _interopRequireDefault(require("./navigator"));
var _XMLHttpRequest = _interopRequireDefault(require("./XMLHttpRequest"));
var _WebSocket = _interopRequireDefault(require("./WebSocket"));
var _Image = _interopRequireDefault(require("./Image"));
var _ImageBitmap = _interopRequireDefault(require("./ImageBitmap"));
var _HTMLElement = _interopRequireDefault(require("./HTMLElement"));
var _HTMLImageElement = _interopRequireDefault(require("./HTMLImageElement"));
var _HTMLCanvasElement = _interopRequireDefault(require("./HTMLCanvasElement"));
var _WebGLRenderingContext = _interopRequireDefault(require("./WebGLRenderingContext"));
var _localStorage = _interopRequireDefault(require("./localStorage"));
var _location = _interopRequireDefault(require("./location"));
var _requestAnimationFrame = _interopRequireDefault(require("./requestAnimationFrame"));
var _cancelAnimationFrame = _interopRequireDefault(require("./cancelAnimationFrame"));
var _WindowProperties = require("./WindowProperties");
Object.keys(_WindowProperties).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _WindowProperties[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _WindowProperties[key];
    }
  });
});
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }

},{"./HTMLCanvasElement":10,"./HTMLElement":11,"./HTMLImageElement":12,"./Image":13,"./ImageBitmap":14,"./WebGLRenderingContext":16,"./WebSocket":17,"./WindowProperties":18,"./XMLHttpRequest":19,"./cancelAnimationFrame":20,"./localStorage":23,"./location":24,"./navigator":25,"./requestAnimationFrame":26}],29:[function(require,module,exports){
"use strict";

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var utils = require('./utils');
function handleTouchEvent(event) {
  var changedTouches = event.changedTouches;
  if (changedTouches) {
    var _iterator = _createForOfIteratorHelper(changedTouches),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var touch = _step.value;
        touch.clientX = touch.x;
        touch.clientY = touch.y;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
}
my.onTouchStart = function (cb) {
  $global._touchstartCB = function (event) {
    handleTouchEvent(event);
    cb(event);
  };
};
my.onTouchCancel = function (cb) {
  $global._touchcancelCB = function (event) {
    handleTouchEvent(event);
    cb(event);
  };
};
my.onTouchEnd = function (cb) {
  $global._touchendCB = function (event) {
    handleTouchEvent(event);
    cb(event);
  };
};
my.onTouchMove = function (cb) {
  $global._touchmoveCB = function (event) {
    handleTouchEvent(event);
    cb(event);
  };
};
my.onShow = function (cb) {
  $global._onShowCB = cb;
};
my.onHide = function (cb) {
  $global._onHideCB = cb;
};
window.__globalAdapter = window.__globalAdapter || {};
if (window.__globalAdapter) {
  var accelerometerChangeCallback = function accelerometerChangeCallback(res, cb) {
    var resClone = {};
    var x = res.x;
    var y = res.y;
    if (isLandscape) {
      var tmp = x;
      x = -y;
      y = tmp;
    }
    resClone.x = x;
    resClone.y = y;
    resClone.z = res.z;
    accelerometerCallback && accelerometerCallback(resClone);
  };
  var globalAdapter = window.__globalAdapter;
  // SystemInfo
  globalAdapter.isSubContext = false; // sub context not supported
  globalAdapter.isDevTool = my.isIDE;
  utils.cloneMethod(globalAdapter, my, 'getSystemInfoSync');

  // Audio
  globalAdapter.createInnerAudioContext = function () {
    var audio = my.createInnerAudioContext();
    if (my.getSystemInfoSync().platform === 'iOS') {
      var currentTime = 0;
      var originalSeek = audio.seek;
      audio.seek = function (time) {
        // need to access audio.paused in the next tick
        setTimeout(function () {
          if (audio.paused) {
            currentTime = time;
          } else {
            originalSeek.call(audio, time);
          }
        }, 50);
      };
      var originalPlay = audio.play;
      audio.play = function () {
        if (currentTime !== 0) {
          audio.seek(currentTime);
          currentTime = 0; // clear cached currentTime
        }
        originalPlay.call(audio);
      };
    }
    return audio;
  };

  // FrameRate
  // utils.cloneMethod(globalAdapter, my, 'setPreferredFramesPerSecond');

  // Keyboard
  globalAdapter.showKeyboard = function () {
    return console.warn('showKeyboard not supported.');
  };
  globalAdapter.hideKeyboard = function () {
    return console.warn('hideKeyboard not supported.');
  };
  globalAdapter.updateKeyboard = function () {
    return console.warn('updateKeyboard not supported.');
  };
  globalAdapter.onKeyboardInput = function () {
    return console.warn('onKeyboardInput not supported.');
  };
  globalAdapter.onKeyboardConfirm = function () {
    return console.warn('onKeyboardConfirm not supported.');
  };
  globalAdapter.onKeyboardComplete = function () {
    return console.warn('onKeyboardComplete not supported.');
  };
  globalAdapter.offKeyboardInput = function () {
    return console.warn('offKeyboardInput not supported.');
  };
  globalAdapter.offKeyboardConfirm = function () {
    return console.warn('offKeyboardConfirm not supported.');
  };
  globalAdapter.offKeyboardComplete = function () {
    return console.warn('offKeyboardComplete not supported.');
  };

  // Message
  utils.cloneMethod(globalAdapter, my, 'getOpenDataContext');
  utils.cloneMethod(globalAdapter, my, 'onMessage');

  // Subpackage not supported
  // utils.cloneMethod(globalAdapter, my, 'loadSubpackage');

  // SharedCanvas
  utils.cloneMethod(globalAdapter, my, 'getSharedCanvas');

  // Font
  globalAdapter.loadFont = function (url) {
    // my.loadFont crash when url is not in user data path
    return "Arial";
  };

  // hide show Event
  utils.cloneMethod(globalAdapter, my, 'onShow');
  utils.cloneMethod(globalAdapter, my, 'onHide');

  // Accelerometer
  var accelerometerCallback = null;
  var systemInfo = my.getSystemInfoSync();
  var windowWidth = systemInfo.windowWidth;
  var windowHeight = systemInfo.windowHeight;
  var isLandscape = windowWidth > windowHeight;
  Object.assign(globalAdapter, {
    startAccelerometer: function startAccelerometer(cb) {
      accelerometerCallback = cb;
      my.onAccelerometerChange && my.onAccelerometerChange(accelerometerChangeCallback);
    },
    stopAccelerometer: function stopAccelerometer() {
      my.offAccelerometerChange && my.offAccelerometerChange(accelerometerChangeCallback);
    }
  });
}

},{"./utils":30}],30:[function(require,module,exports){
"use strict";

var utils = {
  /**
   * @param {Object} target
   * @param {Object} origin
   * @param {String} methodName
   * @param {String} targetMethodName
   */
  cloneMethod: function cloneMethod(target, origin, methodName, targetMethodName) {
    if (origin[methodName]) {
      targetMethodName = targetMethodName || methodName;
      target[targetMethodName] = origin[methodName].bind(origin);
    }
  },
  /**
   *
   * @param {String} str
   * @returns
   */
  encode: function encode(str) {
    var encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    var string = String(str);
    var result = '';
    var currentIndex = 0;
    var sum = void 0;
    while (string.charAt(0 | currentIndex) || (encodings = '=', currentIndex % 1)) {
      currentIndex += 0.75;
      var currentCode = string.charCodeAt(currentIndex);
      if (currentCode > 255) {
        // Cannot handle when it is greater than 255
        throw new Error('"btoa" failed');
      }
      sum = sum << 8 | currentCode;
      var encodeIndex = 63 & sum >> 8 - currentIndex % 1 * 8;
      result += encodings.charAt(encodeIndex);
    }
    return result;
  },
  /**
   *
   * @param {String} str
   */
  decode: function decode(str) {
    var encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    var res = '';
    var string = String(str).replace(/[=]+$/, '');
    var o;
    var r;
    var i = 0;
    var currentIndex = 0;
    while (r = string.charAt(currentIndex)) {
      currentIndex += 1;
      r = encodings.indexOf(r);
      if (~r) {
        o = i % 4 ? 64 * o + r : r;
        if (i++ % 4) {
          res += String.fromCharCode(255 & o >> (-2 * i & 6));
        }
      }
    }
    return res;
  },
  /**
   *
   * @param {ArrayBuffer} buffer
   */
  arrayBufferToBase64: function arrayBufferToBase64(buffer) {
    return utils.encode(utils.arrayBufferToString(buffer));
  },
  /**
   *
   * @param {String} base64
   */
  base64ToArrayBuffer: function base64ToArrayBuffer(base64) {
    return utils.stringToArrayBuffer(utils.decode(base64));
  },
  /**
   *
   * @param {ArrayBuffer} buffer
   */
  arrayBufferToString: function arrayBufferToString(buffer) {
    var result = '';
    var uintArray = new Uint8Array(buffer);
    var byteLength = uintArray.byteLength;
    for (var i = 0; i < byteLength; i++) {
      result += String.fromCharCode(uintArray[i]);
    }
    return result;
  },
  /**
   *
   * @param {String} string
   */
  stringToArrayBuffer: function stringToArrayBuffer(string) {
    var length = string.length;
    var uintArray = new Uint8Array(length);
    for (var i = 0; i < length; i++) {
      uintArray[i] = string.charCodeAt(i);
    }
    return uintArray.buffer;
  }
};
module.exports = utils;

},{}]},{},[22]);

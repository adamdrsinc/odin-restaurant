/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/main.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\n\nbody{\n    --background-color-all: beige;\n    --section-margin: 2vh 0;\n    --section-height: 30vh;\n\n    background-color: var(--background-color-all);\n    min-height: 100vh;\n\n    display: grid;\n    grid-template-columns: 1fr;\n\n    justify-items: center;\n}\n\nheader,\n#content{\n    width: min(90%, 1280px);\n}\n\nheader{\n    background-color: var(--background-color-all);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    max-height: 10vh;\n}\n\n#header-logo-container{\n    display: flex;\n    align-items: center;\n    max-height: 10vh;\n    padding: 1vh;\n    gap: 8px;\n}\n\n#header-logo-container img{\n    filter: invert(1);\n    max-height: 9vh;\n}\n\nnav{\n    display: flex;\n    flex-direction: row;\n    gap: 32px;\n}\n\nnav button{\n    padding: 12px 42px;\n    font-size: 1.5rem;\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    color: black;\n    transition: color 0.3s ease;\n}\n\nnav button:hover{\n    color: gray;\n}\n\n#content{\n    background-color: var(--background-color-all);\n}\n\n.section{\n    margin: var(--section-margin);\n    min-height: var(--section-height);\n    padding: 1vh;\n\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    gap: 32px;\n}\n\n\n.left-column,\n.centre-column,\n.right-column{\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    min-width: 0;\n    min-height: var(--section-height);\n}\n\n.section.first > .right-column{\n    align-items: center;\n}\n\n#intro-image{\n    max-height: var(--section-height);\n    height: 100%;\n    width: auto;\n    border-radius: 12px;\n}\n\nh1{\n    font-size: 2.9rem;\n}\n\np{\n    font-size: 1.2rem;\n}\n\nh1 + p{\n    margin-top: 1.5vh;\n}\n\np + p{\n    margin-top: 1vh;\n}\n\n#hero{\n    position: relative;\n    max-height: 40vh;\n    min-width: 100vw;\n}\n\n#hero img{\n    max-height: 100%;\n    width: 100%;\n}\n\n#hero-overlay{\n    position: absolute;\n    background-color: rgba(0, 0, 0, 0.808);\n    height: 40%;\n    top: 40%;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 2;\n}\n\n#hero-overlay > h1{\n    color: white;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    -ms-transform: translate(-50%, -50%);\n}\n\n#hero + #content{\n    padding-top: 2vh;\n}\n\n.triple-column-grid{\n    margin: var(--section-margin);\n    min-height: var(--section-height);\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n    grid-template-rows: 1fr;\n    grid-auto-rows: 1fr;\n\n    gap: 20px;\n}\n\n.food-card{\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n\n        background-color: white;\n    border: 1px solid black;\n    border-radius: 12px;\n    padding: 1vh;\n}\n\n.food-card h2{\n    font-size: 2rem;\n}\n\n.food-card img{\n    max-width: 100%;\n    height: auto;\n    border-radius: 12px;\n}\n\n.food-card button{\n    align-self: center;\n    justify-self: center;\n\n    padding: 6px 18px;\n    font-size: 1.2rem;\n    margin-top: 12px;\n    border-radius: 12px;\n\n    cursor: pointer;\n}\n\n.food-card button:hover{\n    opacity: 0.8;\n}\n\n.food-card .price{\n    margin-top: 16px;\n    align-self: center;\n    font-size: 1.5rem;\n}\n\nform{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-restaurant/./src/css/main.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-restaurant/./src/css/main.css?\n}");

/***/ }),

/***/ "./src/img/pizza.jpg":
/*!***************************!*\
  !*** ./src/img/pizza.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"2292ad3e6cbba187e9e0.jpg\";\n\n//# sourceURL=webpack://odin-restaurant/./src/img/pizza.jpg?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _loadHomePage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadHomePage.js */ \"./src/loadHomePage.js\");\n/* harmony import */ var _loadMenuPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadMenuPage.js */ \"./src/loadMenuPage.js\");\n/* harmony import */ var _loadAboutPage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadAboutPage.js */ \"./src/loadAboutPage.js\");\n\n\n\n\n\n(()=> {\n\n    function resetContentDiv(){\n        document.getElementById('content').innerHTML = ``;\n    }\n\n    const homeButton = document.getElementById('home-button');\n    const menuButton = document.getElementById('menu-button');\n    const aboutButton = document.getElementById('about-button');\n\n    homeButton.addEventListener('click', () => {\n        resetContentDiv();\n        (0,_loadHomePage_js__WEBPACK_IMPORTED_MODULE_1__.loadHomePage)();\n    });\n\n    menuButton.addEventListener('click', () => {\n        resetContentDiv();\n        (0,_loadMenuPage_js__WEBPACK_IMPORTED_MODULE_2__.loadMenuPage)();\n    });\n\n    aboutButton.addEventListener('click', () => {\n        resetContentDiv();\n        (0,_loadAboutPage_js__WEBPACK_IMPORTED_MODULE_3__.loadAboutPage)();\n    });\n\n})();\n\n\nhomePageLoad();\n\n//# sourceURL=webpack://odin-restaurant/./src/index.js?\n}");

/***/ }),

/***/ "./src/loadAboutPage.js":
/*!******************************!*\
  !*** ./src/loadAboutPage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadAboutPage: () => (/* binding */ loadAboutPage)\n/* harmony export */ });\nconst loadAboutPage = () => {\n    const divContent = document.getElementById(\"content\");\n\n    const firstSection = document.createElement(\"div\");\n    firstSection.classList.add(\"section\", \"first\");\n\n    const fsLeftColumn = document.createElement(\"div\");\n    fsLeftColumn.classList.add(\"left-column\");\n\n    const fsLeftColumnH1 = document.createElement(\"h1\");\n    fsLeftColumnH1.innerText = \"About\";\n    const fsLeftColumnP1 = document.createElement(\"p\");\n    fsLeftColumnP1.innerText = `Contact us regarding any queries!`;\n\n    fsLeftColumn.appendChild(fsLeftColumnH1);\n    fsLeftColumn.appendChild(fsLeftColumnP1);\n    //Left Column Complete\n\n    const fsRightColumn = document.createElement(\"div\");\n    fsRightColumn.classList.add(\"right-column\");\n    fsRightColumn.innerHTML = `<form action=\"\">\n            <label for=\"contact-name\">Name*</label>\n            <input type=\"text\" name=\"contact-name\" id=\"contact-name\" required>\n            <label for=\"contact-email\">Email*</label>\n            <input type=\"email\" name=\"contact-email\" id=\"contact-email\">\n            <label for=\"contact-message\">Message*</label>\n            <textarea name=\"contact-message\" id=\"contace-message\"></textarea>\n            <button type=\"submit\">Send</button>\n        </form>`;\n    \n    firstSection.appendChild(fsLeftColumn);\n    firstSection.appendChild(fsRightColumn);\n\n    divContent.appendChild(firstSection);\n};\n\n\n\n//# sourceURL=webpack://odin-restaurant/./src/loadAboutPage.js?\n}");

/***/ }),

/***/ "./src/loadHomePage.js":
/*!*****************************!*\
  !*** ./src/loadHomePage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHomePage: () => (/* binding */ loadHomePage)\n/* harmony export */ });\n/* harmony import */ var _img_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/pizza.jpg */ \"./src/img/pizza.jpg\");\n\n\n\nconst loadHomePage = () => {\n    const divContent = document.getElementById(\"content\");\n\n    const firstSection = document.createElement(\"div\");\n    firstSection.classList.add(\"section\", \"first\");\n\n    const fsLeftColumn = document.createElement(\"div\");\n    fsLeftColumn.classList.add(\"left-column\");\n\n    const fsLeftColumnH1 = document.createElement(\"h1\");\n    fsLeftColumnH1.innerText = \"Welcome to Pizza Restaurant!\";\n    const fsLeftColumnP1 = document.createElement(\"p\");\n    fsLeftColumnP1.innerText = `Located under the famous Chester Rows on Watergate Street, Stile Napoletano at 49 Watergate Street is the second venue of award-winning pizza chef Giacomo Guido.\n    Giacomo left his home on the island of Ischia, near Naples and moved to London where he was nominated for the best pizza in London in 2015 (youngandfoodish.com) and his pizza was included in Daniel Young’s ‘Where to Eat Pizza’ in 2016. 2017 brought more success when Giacomo won the London Pizza Festival.\n    After visiting Chester, Giacomo fell in love with the city and decided to leave his successful career in London behind. Stile Napoletano was opened in March 2018 where he serves tasty and light Neapolitan style pizzas using pure, organic ingredients from Italy alongside quality local produce.`;\n    const fsLeftColumnP2 = document.createElement(\"p\");\n    fsLeftColumnP2.innerText = `After visiting Chester, Giacomo fell in love with the city and decided to leave his successful career in London behind. Stile Napoletano was opened in March 2018 where he serves tasty and light Neapolitan style pizzas using pure, organic ingredients from Italy alongside quality local produce.`;\n    const fsLeftColumnP3 = document.createElement(\"p\");\n    fsLeftColumnP3.innerText = `After visiting Chester, Giacomo fell in love with the city and decided to leave his successful career in London behind. Stile Napoletano was opened in March 2018 where he serves tasty and light Neapolitan style pizzas using pure, organic ingredients from Italy alongside quality local produce.`;\n\n    fsLeftColumn.appendChild(fsLeftColumnH1);\n    fsLeftColumn.appendChild(fsLeftColumnP1);\n    fsLeftColumn.appendChild(fsLeftColumnP2);\n    fsLeftColumn.appendChild(fsLeftColumnP3);\n    //Left Column Complete\n\n    const fsRightColumn = document.createElement(\"div\");\n    fsRightColumn.classList.add(\"right-column\");\n    fsRightColumn.innerHTML = `<img id=\"intro-image\" src=\"${_img_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"A picture of a margherita pizza with a sourdough crust on top of a wooden board.\">`;\n    \n    firstSection.appendChild(fsLeftColumn);\n    firstSection.appendChild(fsRightColumn);\n\n    divContent.appendChild(firstSection);\n\n\n    const tripleColumnGrid = document.createElement(\"div\");\n    tripleColumnGrid.classList.add(\"triple-column-grid\");\n\n    for (let i = 0; i < 3; i++) {\n        const foodCard = document.createElement(\"div\");\n        foodCard.classList.add(\"food-card\");\n\n        const fcH2 = document.createElement(\"h2\");\n        fcH2.innerText = \"Margeherita\";\n        foodCard.appendChild(fcH2);\n\n        const fcImage = document.createElement(\"img\");\n        fcImage.src = _img_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__;\n        foodCard.appendChild(fcImage);\n\n        const fcPrice = document.createElement(\"p\");\n        fcPrice.classList.add(\"price\");\n        fcPrice.innerText = \"£12.99\";\n        foodCard.appendChild(fcPrice);\n\n        const fcDescription = document.createElement(\"p\");\n        fcDescription.classList.add(\"description\");\n        fcDescription.innerText = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis ea dolores saepe non autem dolorem mollitia possimus vero, voluptatibus consectetur hic. Facere, qui quasi nemo provident eveniet obcaecati nihil soluta!`;\n        foodCard.appendChild(fcDescription);\n\n        const fcButton = document.createElement(\"button\");\n        fcButton.innerText = \"Add to Cart\";\n        foodCard.appendChild(fcButton);\n\n        tripleColumnGrid.appendChild(foodCard);\n    }\n\n    divContent.appendChild(tripleColumnGrid);\n};\n\n\n\n\n//# sourceURL=webpack://odin-restaurant/./src/loadHomePage.js?\n}");

/***/ }),

/***/ "./src/loadMenuPage.js":
/*!*****************************!*\
  !*** ./src/loadMenuPage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenuPage: () => (/* binding */ loadMenuPage)\n/* harmony export */ });\n/* harmony import */ var _img_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/pizza.jpg */ \"./src/img/pizza.jpg\");\n\n\nconst loadMenuPage = () => {\n    const divContent = document.getElementById(\"content\");\n\n    const titleH1 = document.createElement(\"h1\");\n    titleH1.innerText = \"Our Pizzas\";\n    divContent.appendChild(titleH1);\n\n\n    const tripleColumnGrid = document.createElement(\"div\");\n    tripleColumnGrid.classList.add(\"triple-column-grid\");\n\n    for (let i = 0; i < 9; i++) {\n        const foodCard = document.createElement(\"div\");\n        foodCard.classList.add(\"food-card\");\n\n        const fcH2 = document.createElement(\"h2\");\n        fcH2.innerText = \"Margeherita\";\n        foodCard.appendChild(fcH2);\n\n        const fcImage = document.createElement(\"img\");\n        fcImage.src = _img_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__;\n        foodCard.appendChild(fcImage);\n\n        const fcPrice = document.createElement(\"p\");\n        fcPrice.classList.add(\"price\");\n        fcPrice.innerText = \"£12.99\";\n        foodCard.appendChild(fcPrice);\n\n        const fcDescription = document.createElement(\"p\");\n        fcDescription.classList.add(\"description\");\n        fcDescription.innerText = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis ea dolores saepe non autem dolorem mollitia possimus vero, voluptatibus consectetur hic. Facere, qui quasi nemo provident eveniet obcaecati nihil soluta!`;\n        foodCard.appendChild(fcDescription);\n\n        const fcButton = document.createElement(\"button\");\n        fcButton.innerText = \"Add to Cart\";\n        foodCard.appendChild(fcButton);\n\n        tripleColumnGrid.appendChild(foodCard);\n    }\n\n    divContent.appendChild(tripleColumnGrid);\n};\n\n\n\n//# sourceURL=webpack://odin-restaurant/./src/loadMenuPage.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
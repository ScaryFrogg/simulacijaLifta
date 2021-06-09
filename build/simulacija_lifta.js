/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["LS"] = factory();
	else
		root["LS"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/model/Queue.js":
/*!****************************!*\
  !*** ./src/model/Queue.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Queue)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Queue = /*#__PURE__*/function () {\n  function Queue(capacity) {\n    _classCallCheck(this, Queue);\n\n    this.capacity = capacity;\n    this.items = [];\n  }\n\n  _createClass(Queue, [{\n    key: \"offer\",\n    value: function offer(obj) {\n      if (obj === null || obj === undefined) return false;\n\n      if (this.items.length < this.capacity) {\n        this.items.push(obj);\n        return true;\n      }\n\n      return false;\n    }\n  }, {\n    key: \"poll\",\n    value: function poll() {\n      if (this.isEmpty()) return null;\n      return this.items.shift();\n    }\n  }, {\n    key: \"front\",\n    value: function front() {\n      if (this.isEmpty()) return null;\n      return this.items[0];\n    }\n  }, {\n    key: \"isEmpty\",\n    value: function isEmpty() {\n      return this.items.length == 0;\n    }\n  }, {\n    key: \"extract\",\n    value: function extract(obj) {\n      while (this.items.indexOf(obj) != -1) {\n        this.items.splice(this.items.indexOf(obj), 1);\n      }\n    }\n  }, {\n    key: \"isNotFull\",\n    value: function isNotFull() {\n      return this.capacity != this.items.length;\n    }\n  }]);\n\n  return Queue;\n}();\n\n\n\n//# sourceURL=webpack://LS/./src/model/Queue.js?");

/***/ }),

/***/ "./src/simulacijaLifta.js":
/*!********************************!*\
  !*** ./src/simulacijaLifta.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calculateStops\": () => (/* binding */ calculateStops)\n/* harmony export */ });\n/* harmony import */ var _model_Queue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/Queue.js */ \"./src/model/Queue.js\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n //directioin 0 moze da gleda i gore i dole\n//1 samo gore\n//-1 samo dole\n\nfunction findClosest(stops, floor) {\n  var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n  var i = 1;\n  var canGoUp = direction >= 0;\n  var canGoDown = direction <= 0;\n\n  while (canGoDown || canGoUp) {\n    canGoUp = stops.length > floor + i;\n\n    if (canGoUp) {\n      if (stops[floor + i].length > 0) return floor + i;\n    }\n\n    canGoDown = floor - i >= 0;\n\n    if (canGoDown) {\n      if (stops[floor - i].length > 0) return floor - i;\n    }\n\n    i++;\n  }\n}\n\nfunction goToStops(stops, q, floor, visited) {\n  if (stops.every(function (x) {\n    return x.length == 0;\n  }) && q.isEmpty() || visited.length > 200) return visited;\n  visited.push(floor); //ako je neko stigao na zeljeni sprat izlazi\n\n  q.extract(floor);\n  console.log(\"stopped at \", floor, \" to pick up: \", stops[floor]);\n  var fromQ = q.front();\n  var nextFloor;\n\n  if (fromQ) {\n    if (stops.every(function (x) {\n      return x.length == 0;\n    })) {\n      nextFloor = fromQ; //ako su spratovi prazni sigurno ide na sprat iz queue\n    } else {\n      if (Math.abs(fromQ - floor) == 1) {\n        //spratovi su jedan do drugog\n        nextFloor = fromQ;\n      } else {\n        //spratovi nisu jedan do drugog proveri da li treba stati izmedju\n        var direction = fromQ - floor > 0 ? 1 : -1;\n        nextFloor = findClosest(stops, floor, direction);\n      }\n    }\n  } else {\n    nextFloor = findClosest(stops, floor);\n  }\n\n  console.log(\"putnici\", stops[floor]);\n\n  var copy = _toConsumableArray(stops[floor]);\n\n  var _iterator = _createForOfIteratorHelper(stops[floor]),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var i = _step.value;\n      console.log(\"putnik\", i);\n\n      if (q.isNotFull()) {\n        if (typeof nextFloor == \"undefined\") {\n          nextFloor = copy.splice(0, 1)[0];\n          q.offer(nextFloor);\n          continue;\n        } //da li putnik i lift idu u istom smeru\n\n\n        if (floor - nextFloor > 0) {\n          //lift ide na dole\n          if (floor > i) {\n            //i putnik ide na dole\n            q.offer(copy.splice(copy.indexOf(i), 1)[0]);\n          }\n        } else {\n          //lift ide na gore\n          if (floor < i) {\n            //i putnik ide na gore\n            q.offer(copy.splice(copy.indexOf(i), 1)[0]);\n          }\n        }\n      } else {\n        //lift je pun\n        break;\n      }\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  stops[floor] = copy;\n  console.log(\"next floor\", nextFloor, \" \", visited);\n  console.log(\"items\", q.items);\n  return goToStops(stops, q, nextFloor, visited);\n}\n\nfunction calculateStops(stops, capacity) {\n  return goToStops(stops, new _model_Queue_js__WEBPACK_IMPORTED_MODULE_0__.default(capacity), 0, []);\n} // let x = calculateStops([[],[3],[4],[],[5,6,2,6,1],[],[]],4)\n// console.log(x)\n\n//# sourceURL=webpack://LS/./src/simulacijaLifta.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/simulacijaLifta.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
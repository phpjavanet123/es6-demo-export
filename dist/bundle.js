/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/module.js ***!
  \***********************/
/*! exports provided: default, Foo, url, bar */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony export (immutable) */ __webpack_exports__[\"bar\"] = bar;\n//module.js\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (class {\r\n  constructor() {\r\n    console.log(\"GOOD\");\r\n  }\r\n});\r\n\r\nclass Foo {\r\n  constructor() {\r\n    console.log(\"FOO\");\r\n  }\r\n}\n/* harmony export (immutable) */ __webpack_exports__[\"Foo\"] = Foo;\n\r\n\r\nconst url = \"http://www.kaplankomputing.com\";\n/* harmony export (immutable) */ __webpack_exports__[\"url\"] = url;\n\r\n\r\nfunction bar() {\r\n  console.log(\"bar\");\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGUuanM/NmY1OCJdLCJzb3VyY2VzQ29udGVudCI6WyIvL21vZHVsZS5qc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkdPT0RcIik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRm9vIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiRk9PXCIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVybCA9IFwiaHR0cDovL3d3dy5rYXBsYW5rb21wdXRpbmcuY29tXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYmFyKCkge1xyXG4gIGNvbnNvbGUubG9nKFwiYmFyXCIpO1xyXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__module__ = __webpack_require__(/*! ./module */ 0);\n\r\n\r\n\r\n\r\nconst custom = new __WEBPACK_IMPORTED_MODULE_0__module__[\"default\"]();\r\nconst foo = new __WEBPACK_IMPORTED_MODULE_0__module__[\"Foo\"]();\r\nObject(__WEBPACK_IMPORTED_MODULE_0__module__[\"bar\"])();\r\nconsole.log(__WEBPACK_IMPORTED_MODULE_0__module__[\"url\"]);\r\n\r\n\r\n\r\n\r\nconsole.log(__WEBPACK_IMPORTED_MODULE_0__module__);\r\nconsole.log(__WEBPACK_IMPORTED_MODULE_0__module__[\"default\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAuanM/N2FjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ3VzdG9tLCB7Rm9vLCB1cmwsIGJhcn0gZnJvbSAnLi9tb2R1bGUnO1xyXG5cclxuaW1wb3J0ICogYXMgdGVzdCBmcm9tICcuL21vZHVsZSc7XHJcblxyXG5jb25zdCBjdXN0b20gPSBuZXcgQ3VzdG9tKCk7XHJcbmNvbnN0IGZvbyA9IG5ldyBGb28oKTtcclxuYmFyKCk7XHJcbmNvbnNvbGUubG9nKHVybCk7XHJcblxyXG5cclxuXHJcblxyXG5jb25zb2xlLmxvZyh0ZXN0KTtcclxuY29uc29sZS5sb2codGVzdC5kZWZhdWx0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);
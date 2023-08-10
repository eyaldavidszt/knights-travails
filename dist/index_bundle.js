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

/***/ "./src/chessboard.js":
/*!***************************!*\
  !*** ./src/chessboard.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Chessboard)\n/* harmony export */ });\nclass Chessboard {\n  static squares = [];\n\n  static append(square) {\n    this.squares.push(square);\n  }\n\n  static find(coordinates) {\n    for (let i = 0; i < this.squares.length; i += 1) {\n      if (this.squares[i].coordinates === coordinates) {\n        return this.squares[i];\n      }\n    }\n    return false;\n  }\n}\n\n\n//# sourceURL=webpack://knights-travails/./src/chessboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chessboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chessboard */ \"./src/chessboard.js\");\n\n\nclass Square {\n  constructor(coordinates) {\n    this.coordinates = coordinates;\n    this.knightMove1 = null;\n    this.knightMove2 = null;\n    this.knightMove3 = null;\n    this.knightMove4 = null;\n    this.knightMove5 = null;\n    this.knightMove6 = null;\n    this.knightMove7 = null;\n    this.knightMove8 = null;\n  }\n}\n\nfunction knightMoves(square, targetSquare, pastSquares = []) {\n  // pastmoves.push current square coordinates\n  if (square === targetSquare) {\n    return square;\n  }\n  return pastSquares;\n}\n// square, a bunch of different pointers to squares that are knight moves away. ok ok ok ok\n\n// class Square {\n//   max = 64;\n\n//   min = 1;\n\n//   constructor([rank, file]) {\n//     // add base case\n//     if (Chessboard.find([rank, file])) return;\n//     this.coordinates = [rank, file];\n//     if (rank + 2 <= this.max) {\n//       if (file + 1 <= this.max) {\n//         this.knightMove1 = new Square([rank + 2, file + 1]);\n//       }\n//       if (file - 1 >= this.min) {\n//         this.knightMove2 = new Square([rank + 2, file - 1]);\n//       }\n//     }\n//   }\n// }\n// const squares = new Square([1, 1]);\n// Chessboard.append(squares);\n\n\n//# sourceURL=webpack://knights-travails/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
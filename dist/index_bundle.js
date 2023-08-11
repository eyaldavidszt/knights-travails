/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function Square(coordinates, parent = null) {\n  const max = 8;\n  const min = 1;\n  const square = { coordinates, parent };\n  square.movesArr = [];\n  // write the code for this:\n  // coordinates is an array, 0 is rank and 1 is file\n\n  function makeKnightMove(x, y) {\n    if (coordinates[0] + x <= max && coordinates[0] + x >= min) {\n      if (coordinates[1] + y <= max && coordinates[1] + y >= min) {\n        return [coordinates[0] + x, coordinates[1] + y];\n      }\n    }\n    return null;\n  }\n  if (makeKnightMove(2, 1)) {\n    square.movesArr.push(makeKnightMove(2, 1));\n  }\n  if (makeKnightMove(2, -1)) {\n    square.movesArr.push(makeKnightMove(2, -1));\n  }\n  if (makeKnightMove(-2, -1)) {\n    square.movesArr.push(makeKnightMove(-2, -1));\n  }\n  if (makeKnightMove(-2, 1)) {\n    square.movesArr.push(makeKnightMove(-2, 1));\n  }\n  if (makeKnightMove(1, 2)) {\n    square.movesArr.push(makeKnightMove(1, 2));\n  }\n  if (makeKnightMove(1, -2)) {\n    square.movesArr.push(makeKnightMove(1, -2));\n  }\n  if (makeKnightMove(-1, 2)) {\n    square.movesArr.push(makeKnightMove(-1, 2));\n  }\n  if (makeKnightMove(-1, -2)) {\n    square.movesArr.push(makeKnightMove(-1, -2));\n  }\n  return square;\n}\n\n// util function:\nfunction makeArray(item) {\n  let arr = [];\n  if (item.parent === null) {\n    return [item.coordinates];\n  }\n  // arr.unshift(makeArray(item.parent));\n  arr = [...makeArray(item.parent)];\n  arr.push(item.coordinates);\n  return arr;\n}\nfunction knightMoves(squareCoordinates, targetSquare, queue = []) {\n  const square = Square(squareCoordinates);\n  queue.push(square);\n  // eslint-disable-next-line no-restricted-syntax\n  for (const item of queue) {\n    if (`${item.coordinates}` === `${targetSquare}`) {\n      // construct array recursively with parents\n      return makeArray(item);\n    }\n    const movesies = item.movesArr;\n    // eslint-disable-next-line no-restricted-syntax\n    for (const move of movesies) {\n      const child = Square(move, item);\n      queue.push(child);\n    }\n  }\n}\n\nconst moves = knightMoves([2, 6], [5, 3]);\nconsole.log(\n  `You made it in ${moves.length - 1} moves! Your path was: ${moves.join(\n    \" - \"\n  )}`\n);\n\n\n//# sourceURL=webpack://knights-travails/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;
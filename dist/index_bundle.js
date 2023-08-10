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

eval("function Square(coordinates) {\n  const max = 8;\n  const min = 1;\n  const square = { coordinates };\n  // write the code for this:\n  // coordinates is an array, 0 is rank and 1 is file\n\n  function makeKnightMove(x, y) {\n    if (coordinates[0] + x <= max && coordinates[0] + x >= min) {\n      if (coordinates[1] + y <= max && coordinates[1] + y >= min) {\n        return [coordinates[0] + x, coordinates[1] + y];\n      }\n    }\n    return null;\n  }\n  if (makeKnightMove(2, 1)) {\n    square.knightMove1 = makeKnightMove(2, 1);\n  }\n  if (makeKnightMove(2, -1)) {\n    square.knightMove2 = makeKnightMove(2, -1);\n  }\n  if (makeKnightMove(-2, -1)) {\n    square.knightMove3 = makeKnightMove(-2, -1);\n  }\n  if (makeKnightMove(-2, 1)) {\n    square.knightMove4 = makeKnightMove(-2, 1);\n  }\n  if (makeKnightMove(1, 2)) {\n    square.knightMove5 = makeKnightMove(1, 2);\n  }\n  if (makeKnightMove(1, -2)) {\n    square.knightMove6 = makeKnightMove(1, -2);\n  }\n  if (makeKnightMove(-1, 2)) {\n    square.knightMove7 = makeKnightMove(-1, 2);\n  }\n  if (makeKnightMove(-1, -2)) {\n    square.knightMove8 = makeKnightMove(-1, -2);\n  }\n\n  return square;\n}\nfunction knightMoves(squareCoordinates, targetSquare, pastSquares = []) {\n  let shortest = [];\n  if (pastSquares.length > 5) return pastSquares;\n  pastSquares.push(squareCoordinates);\n  const square = Square(squareCoordinates);\n  if (`${square.coordinates}` === `${targetSquare}`) {\n    return pastSquares;\n  }\n  const properties = Object.values(square);\n  for (let i = 1; i < properties.length; i += 1) {\n    if (`${properties[i]}` === `${targetSquare}`) {\n      pastSquares.push(properties[i]);\n      return pastSquares;\n    }\n    const pastSquaresCopy = [...pastSquares];\n    const current = [...knightMoves(properties[i], targetSquare, pastSquares)];\n    pastSquares = pastSquaresCopy;\n    if (shortest.length === 0 && current.length !== 0) {\n      shortest = [...current];\n    } else if (current.length < shortest.length && current.length !== 0) {\n      shortest = [...current];\n    }\n  }\n  return shortest;\n}\n\nconst moves = knightMoves([8, 1], [6, 4]);\n\nconsole.log(\n  `You made it in ${moves.length - 1} moves! Your path was: ${moves.join(\n    \" - \"\n  )}`\n);\n\n\n//# sourceURL=webpack://knights-travails/./src/index.js?");

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
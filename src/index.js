function Square(coordinates, parent = null) {
  const max = 8;
  const min = 1;
  const square = { coordinates, parent };
  square.movesArr = [];
  // write the code for this:
  // coordinates is an array, 0 is rank and 1 is file

  function makeKnightMove(x, y) {
    if (coordinates[0] + x <= max && coordinates[0] + x >= min) {
      if (coordinates[1] + y <= max && coordinates[1] + y >= min) {
        return [coordinates[0] + x, coordinates[1] + y];
      }
    }
    return null;
  }
  if (makeKnightMove(2, 1)) {
    square.movesArr.push(makeKnightMove(2, 1));
  }
  if (makeKnightMove(2, -1)) {
    square.movesArr.push(makeKnightMove(2, -1));
  }
  if (makeKnightMove(-2, -1)) {
    square.movesArr.push(makeKnightMove(-2, -1));
  }
  if (makeKnightMove(-2, 1)) {
    square.movesArr.push(makeKnightMove(-2, 1));
  }
  if (makeKnightMove(1, 2)) {
    square.movesArr.push(makeKnightMove(1, 2));
  }
  if (makeKnightMove(1, -2)) {
    square.movesArr.push(makeKnightMove(1, -2));
  }
  if (makeKnightMove(-1, 2)) {
    square.movesArr.push(makeKnightMove(-1, 2));
  }
  if (makeKnightMove(-1, -2)) {
    square.movesArr.push(makeKnightMove(-1, -2));
  }
  return square;
}

// util function:
function makeArray(item) {
  let arr = [];
  if (item.parent === null) {
    return [item.coordinates];
  }
  // arr.unshift(makeArray(item.parent));
  arr = [...makeArray(item.parent)];
  arr.push(item.coordinates);
  return arr;
}
function knightMoves(squareCoordinates, targetSquare, queue = []) {
  const square = Square(squareCoordinates);
  queue.push(square);
  // eslint-disable-next-line no-restricted-syntax
  for (const item of queue) {
    if (`${item.coordinates}` === `${targetSquare}`) {
      // construct array recursively with parents
      console.log({ item });
      return makeArray(item);
    }
    const movesies = item.movesArr;
    // eslint-disable-next-line no-restricted-syntax
    for (const move of movesies) {
      const child = Square(move, item);
      queue.push(child);
    }
  }
}

const moves = knightMoves([8, 1], [1, 8]);
console.log(moves);
console.log(
  `You made it in ${moves.length - 1} moves! Your path was: ${moves.join(
    " - "
  )}`
);

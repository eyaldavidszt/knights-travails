function Square(coordinates) {
  const max = 8;
  const min = 1;
  const square = { coordinates };
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
    square.knightMove1 = makeKnightMove(2, 1);
  }
  if (makeKnightMove(2, -1)) {
    square.knightMove2 = makeKnightMove(2, -1);
  }
  if (makeKnightMove(-2, -1)) {
    square.knightMove3 = makeKnightMove(-2, -1);
  }
  if (makeKnightMove(-2, 1)) {
    square.knightMove4 = makeKnightMove(-2, 1);
  }
  if (makeKnightMove(1, 2)) {
    square.knightMove5 = makeKnightMove(1, 2);
  }
  if (makeKnightMove(1, -2)) {
    square.knightMove6 = makeKnightMove(1, -2);
  }
  if (makeKnightMove(-1, 2)) {
    square.knightMove7 = makeKnightMove(-1, 2);
  }
  if (makeKnightMove(-1, -2)) {
    square.knightMove8 = makeKnightMove(-1, -2);
  }

  return square;
}
function knightMoves(squareCoordinates, targetSquare, pastSquares = []) {
  let shortest = [];
  if (pastSquares.length > 5) return pastSquares;
  pastSquares.push(squareCoordinates);
  const square = Square(squareCoordinates);
  if (`${square.coordinates}` === `${targetSquare}`) {
    return pastSquares;
  }
  const properties = Object.values(square);
  for (let i = 1; i < properties.length; i += 1) {
    if (`${properties[i]}` === `${targetSquare}`) {
      pastSquares.push(properties[i]);
      return pastSquares;
    }
    const pastSquaresCopy = [...pastSquares];
    const current = [...knightMoves(properties[i], targetSquare, pastSquares)];
    pastSquares = pastSquaresCopy;
    if (shortest.length === 0 && current.length !== 0) {
      shortest = [...current];
    } else if (current.length < shortest.length && current.length !== 0) {
      shortest = [...current];
    }
  }
  return shortest;
}

const moves = knightMoves([6, 3], [5, 6]);

console.log(
  `You made it in ${moves.length - 1} moves! Your path was: ${moves.join(
    " - "
  )}`
);

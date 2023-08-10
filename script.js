import Chessboard from "./chessboard";

function knightMoves(square, targetSquare) {
  if (square === targetSquare) {
    return square;
  }
  return array;
}

// square, a bunch of different pointers to squares that are knight moves away. ok ok ok ok

class Square {
  max = 64;

  constructor([rank, file]) {
    // if square with coordinates exist, return....
    this.coordinates = [rank, file];
    Chessboard.append(this);
    // links to squares which are knight moves away
    if (rank + 2 <= this.max && file + 1 <= this.max) {
      this.knightMove1 = [rank + 2, file + 1];
      this.knightMove1 = new Square([rank + 2, file + 1]);
    }
  }
}

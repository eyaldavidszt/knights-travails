import Chessboard from "./chessboard";

class Square {
  constructor(coordinates) {
    this.coordinates = coordinates;
    this.knightMove1 = null;
    this.knightMove2 = null;
    this.knightMove3 = null;
    this.knightMove4 = null;
    this.knightMove5 = null;
    this.knightMove6 = null;
    this.knightMove7 = null;
    this.knightMove8 = null;
  }
}

function knightMoves(square, targetSquare, pastSquares = []) {
  // pastmoves.push current square coordinates
  if (square === targetSquare) {
    return square;
  }
  return pastSquares;
}
// square, a bunch of different pointers to squares that are knight moves away. ok ok ok ok

// class Square {
//   max = 64;

//   min = 1;

//   constructor([rank, file]) {
//     // add base case
//     if (Chessboard.find([rank, file])) return;
//     this.coordinates = [rank, file];
//     if (rank + 2 <= this.max) {
//       if (file + 1 <= this.max) {
//         this.knightMove1 = new Square([rank + 2, file + 1]);
//       }
//       if (file - 1 >= this.min) {
//         this.knightMove2 = new Square([rank + 2, file - 1]);
//       }
//     }
//   }
// }
// const squares = new Square([1, 1]);
// Chessboard.append(squares);

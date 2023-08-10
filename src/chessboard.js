export default class Chessboard {
  static squares = [];

  static append(square) {
    this.squares.push(square);
  }

  static find(coordinates) {
    for (let i = 0; i < this.squares.length; i += 1) {
      if (this.squares[i].coordinates === coordinates) {
        return this.squares[i];
      }
    }
    return false;
  }
}

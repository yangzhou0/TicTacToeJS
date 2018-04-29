class Board {
  constructor() {
    this.grid = Board.makeGrid();
  }


  static makeGrid() {
    return [[[], [], []], [[], [], []], [[], [], []]];
  }
}

class Board {
  constructor() {
    this.grid = Board.makeGrid();
    this.turn = "b";
  }

  isEmpty(pos) {
    if (this.getPos(pos)) {
      return false;
    }
    return true;
  }

  insert(pos, currentPlayer) {
    if (isEmpty(pos)) {
      console.log("pos is taken");
    } else {
      this.getPos(pos) = currentPlayer.mark;
    }
  }

  getPos(pos) {
    return this.grid[[pos[0], pos[1]]];
  }

  print() {
    console.log(this.grid[0]);
    console.log(this.grid[1]);
    console.log(this.grid[2]);
  }

  isWon(currentPlayer) {
    let mark = currentPlayer.mark;
    let horizontals = Board.DIREC.horizontal;
    let verticals = Board.DIREC.vertical;
    let diagonals = Board.DIREC.diagonal;
    let allPossiblePaths = Array.prototype.concat(
      horizontals,
      verticals,
      diagonals
    );
  }

  static get DIREC() {
    return {
      horizontal: [
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]]
      ],
      vertical: [
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[2, 0], [2, 1], [2, 2]]
      ],
      diagonal: [[[0, 0], [1, 1], [2, 2]], [[2, 0], [1, 1], [0, 2]]]
    };
  }

  static makeGrid() {
    return [[[], [], []], [[], [], []], [[], [], []]];
  }
}

module.exports = Board;

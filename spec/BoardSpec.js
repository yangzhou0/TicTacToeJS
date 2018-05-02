describe("Board", function() {
  var board;
  beforeEach(function() {
    board = new Board();
  });
  describe("constructor function", function() {
    it("should have a board of 3X3", function() {
      expect(board.grid.length).toEqual(3);
      board.grid.forEach(row => {
        expect(row.length).toEqual(3);
      });
      expect(_.flatten(board.grid, true).length).toEqual(9);
    });
  });

  describe("Empty method", function() {
    it("All spots are blank to begin with", function() {
      let allPos = _.flatten(board.grid, true);
      allPos.forEach(pos => {
        expect(board.isEmpty(pos)).toBe(true);
      });
    });
  });

  describe("Make sure of constant", function() {
    it("Should grab horizontal key", function() {
      let horizontalDirs = Board.DIREC.horizontal;
      expect(horizontalDirs.length).toEqual(3);
    });
    it("Should flatten all possible ways to win when concat", function() {
      let horizontals = Board.DIREC.horizontal;
      let verticals = Board.DIREC.vertical;
      let diagonals = Board.DIREC.diagonal;
      let allPossiblePaths = Array.prototype.concat(
        horizontals,
        verticals,
        diagonals
      );
      expect(allPossiblePaths).toEqual([
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[2, 0], [2, 1], [2, 2]],
        [[0, 0], [1, 1], [2, 2]],
        [[2, 0], [1, 1], [0, 2]]
      ]);
    });
  });
});

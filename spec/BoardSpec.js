describe("Board", function() {
  const winningPaths = [
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[2, 0], [2, 1], [2, 2]],
    [[0, 0], [1, 1], [2, 2]],
    [[2, 0], [1, 1], [0, 2]]
  ];
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


  describe("isEmpty", function() {
    it("initial board is all empty", function() {
      let flattens = _.flatten(board.grid);
      flattens.forEach(function(spot) {
        expect(spot).toBeUndefined();
      });
    });
    it('a spot in initial board is empty',function(){
      expect(board.isEmpty([0,0])).toBe(true);
    })
  });

  describe('placeMark',function(){
    it('should place a mark',function(){
      board.placeMark([0,0],{mark:'b'});
      expect(board.getPos([0,0])).toEqual('b');
    })
  })

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
      expect(allPossiblePaths).toEqual(winningPaths);
    });
  });


  describe("isWon method", function() {
    it("should call getPos", function() {
      spyOn(board, "getPos");
      board.isWon({ mark: "b" });
      expect(board.getPos).toHaveBeenCalled();
    });
    it("should return false when no Mark is placed", function() {
      expect(board.isWon({ mark: "b" })).toBe(false);
    });
    it("should return true when three marks are aligned", function() {
      board.placeMark([0, 0], { mark: "b" });
      board.placeMark([1, 1], { mark: "b" });
      board.placeMark([2, 2], { mark: "b" });
      expect(board.isWon({ mark: "b" })).toBe(true);
    });
  });
});

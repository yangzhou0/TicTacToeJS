describe("Board", function() {
  var board;
  beforeEach(function() {
    board = new Board();
  });
  describe("Initiate a new grid for board", function() {
    it("should have a board of 3X3", function() {
      expect(board.grid.length).toEqual(3);
      board.grid.forEach(row => {
        expect(row.length).toEqual(3);
      });
      expect(_.flatten(board.grid, true).length).toEqual(9);
    });
  });

  describe()
});

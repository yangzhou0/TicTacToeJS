describe('Initiate a new grid for board',function(){
  var board;
  beforeEach(function(){
    board = new Board();
  })
  it('should have a board of 3X3', function(){
    expect(board.grid.length).toEqual(3);
    board.grid.forEach((row)=>{
      expect(row.length).toEqual(3);
    })
  })

})

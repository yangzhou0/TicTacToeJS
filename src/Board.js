class Board {
  constructor() {
    this.grid = Board.makeGrid();
  }

  isEmpty(pos){
    if (this.getPos(pos)) {return false;}
    return true;
  }

  insert(pos,color){
    if (isEmpty(pos)) {
      console.log('pos is taken');
    }
    else{
      this.getPos(pos) = color;
    }
  }

  getPos(pos){
    return this.grid[[pos[0],pos[1]]];
  }

  print(){
    console.log(this.grid[0]);
    console.log(this.grid[1]);
    console.log(this.grid[2]);
  }

  static makeGrid() {
    return [[[], [], []], [[], [], []], [[], [], []]];
  }
}

class Board {
  constructor() {
    this.grid = Board.makeGrid();
  }

  isEmpty(pos){
    if (this.getPos(pos)) {return false;}
    return true;
  }

  insert(pos,color){
    if (isEmpty) {
      console.log('pos is taken');
    }
    else{
      this.getPos = color;
    }
  }

  getPos(pos){
    return this.grid[[pos[0],pos[1]]];
  }

  static makeGrid() {
    return [[[], [], []], [[], [], []], [[], [], []]];
  }
}

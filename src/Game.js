const Board = require("./board");
const Player = require("./player");

class Game {
  constructor() {
    this.board = new Board();
    this.black;
    this.white;
    this.currentPlayer;
  }

  switchPlayer() {
    this.currentPlayer =
      this.currentPlayer === this.white ? this.black : this.white;
  }

  buildPlayers(reader, callback) {
    let game = this;
    reader.question("Enter name of black mark: ", function(name) {
      game.black = new Player(name, "b");
      reader.question("Enter name of white mark: ", function(name) {
        game.white = new Player(name, "w");
        callback();
      });
    });
  }

  promptMove(reader, callback) {
    let board = this.board;
    let currentPlayer = this.currentPlayer;
    board.print();
    reader.question(`whats your move ${currentPlayer.name}?`, function(pos) {
      callback(JSON.parse(pos));
    });
  }

  play(reader, completionCallback) {
    let board = this.board;
    let currentPlayer = this.currentPlayer;
    let game = this;
    if (!this.black || !this.white) {
      this.buildPlayers(reader, function() {
        game.currentPlayer = game.black;
        game.play(reader, completionCallback);
      });
    } else {
      this.promptMove(reader, function(pos) {
        board.placeMark(pos, currentPlayer, function() {
          if (board.isWon(currentPlayer)) {
            console.log(`${currentPlayer.name} won`);
            completionCallback();
          } else {
            game.switchPlayer();
          }
        });
        game.play(reader, completionCallback);
      });
    }
  }
}

module.exports = Game;

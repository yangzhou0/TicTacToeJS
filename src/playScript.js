const Game = require("./game.js");

const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function completion (){
  reader.question('Play again? y or n: ', function(answer){
    if(answer === 'y'){
      g = new Game();
      g.play(reader,completion);
    }
    else  {
      console.log('Bye');
      reader.close()
    }
  })
}

let g = new Game();
g.play(reader,completion);

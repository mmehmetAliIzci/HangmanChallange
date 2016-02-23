import {Component, View} from 'angular2/core';
import {AlphabetRenderer} from './alphabet-renderer';

@Component({
    selector: 'app',
    templateUrl: 'src/templates/app.html',
    directives: [AlphabetRenderer]
})
export class App {

  public courses : Array<string> = ['3dhubs', 'marvin', 'print', 'filament', 'order', 'layer'];
  public alphabet : Array<string> = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  public numbers : Array<string> = ["0","1","2","3","4","5","6","7","8","9"];
  public allGuessChars = this.alphabet.concat(this.numbers)
  public health = 5;
  public isWin = false;

  hangmanWord = "";
  codedHangmanWord = "";

  constructor(){

  }

  checkLetter(item){
    if (this.health > 0 && !this.isWin) {
      var index = getAllIndexes(this.hangmanWord,item);
      if(!(index.length > 0) ){
          console.log("you lost one health mate..");
          this.health--;
      }
      else{
        for(var i = 0 ; i< index.length; i++){
          this.codedHangmanWord = this.codedHangmanWord.substr(0, index[i]) + item + this.codedHangmanWord.substr(index[i] + 1);
        }
      }
      this.checkIfWinOrLose();
    }
  }

  onNewGameBtn(){
    this.health = 5;
    this.isWin = false;
    var randomIndex = Math.floor(Math.random() * (5));;
    this.hangmanWord=this.courses[randomIndex];
    console.log(this.hangmanWord);
    this.codedHangmanWord = Array(this.hangmanWord.length+1).join("_");
  }

  checkIfWinOrLose(){
    if(!(this.codedHangmanWord.indexOf("_") > -1)){
      this.isWin = true;
      alert("You win Bastard !");
    }
    else if (this.health == 0){
      alert("You lose");
    }
  }
}



function getAllIndexes (str,thing){
  var indexes = [];
  str = str.toLowerCase();
  thing = thing.toLowerCase();

  var index = str.indexOf(thing);
  var temp_index = 0;
  while (index > -1 ){
    indexes.push(index + temp_index);
    temp_index = index + 1;
    str = str.substr(temp_index)
    index = str.indexOf(thing);
    console.log(str);
  }

  return indexes;
}

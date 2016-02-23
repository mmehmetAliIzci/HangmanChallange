System.register(['angular2/core', './alphabet-renderer'], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, alphabet_renderer_1;
    var App;
    function getAllIndexes(str, thing) {
        var indexes = [];
        str = str.toLowerCase();
        thing = thing.toLowerCase();
        var index = str.indexOf(thing);
        var temp_index = 0;
        while (index > -1) {
            indexes.push(index + temp_index);
            temp_index = index + 1;
            str = str.substr(temp_index);
            index = str.indexOf(thing);
            console.log(str);
        }
        return indexes;
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (alphabet_renderer_1_1) {
                alphabet_renderer_1 = alphabet_renderer_1_1;
            }],
        execute: function() {
            App = (function () {
                function App() {
                    this.courses = ['3dhubs', 'marvin', 'print', 'filament', 'order', 'layer'];
                    this.alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
                    this.numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
                    this.allGuessChars = this.alphabet.concat(this.numbers);
                    this.health = 5;
                    this.isWin = false;
                    this.hangmanWord = "";
                    this.codedHangmanWord = "";
                }
                App.prototype.checkLetter = function (item) {
                    if (this.health > 0 && !this.isWin) {
                        var index = getAllIndexes(this.hangmanWord, item);
                        if (!(index.length > 0)) {
                            console.log("you lost one health mate..");
                            this.health--;
                        }
                        else {
                            for (var i = 0; i < index.length; i++) {
                                this.codedHangmanWord = this.codedHangmanWord.substr(0, index[i]) + item + this.codedHangmanWord.substr(index[i] + 1);
                            }
                        }
                        this.checkIfWinOrLose();
                    }
                };
                App.prototype.onNewGameBtn = function () {
                    this.health = 5;
                    this.isWin = false;
                    var randomIndex = Math.floor(Math.random() * (5));
                    ;
                    this.hangmanWord = this.courses[randomIndex];
                    console.log(this.hangmanWord);
                    this.codedHangmanWord = Array(this.hangmanWord.length + 1).join("_");
                };
                App.prototype.checkIfWinOrLose = function () {
                    if (!(this.codedHangmanWord.indexOf("_") > -1)) {
                        this.isWin = true;
                        alert("You win Bastard !");
                    }
                    else if (this.health == 0) {
                        alert("You lose");
                    }
                };
                App = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: 'src/templates/app.html',
                        directives: [alphabet_renderer_1.AlphabetRenderer]
                    }), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            }());
            exports_1("App", App);
        }
    }
});

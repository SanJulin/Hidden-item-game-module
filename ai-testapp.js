"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var computer_1 = require("./computer");
var theme_1 = require("./theme");
var themes = ['flags', 'animals', 'colors', 'professions', 'movies'];
var themeIndex = Math.floor(Math.random() * themes.length);
var thisTheme = themes[themeIndex];
var theme = new theme_1.default(thisTheme);
var itemArray = theme.getItemArray();
console.log("Item options: ".concat(itemArray));
var numberOfItems = Math.ceil(Math.random() * 8);
var computer = new computer_1.default(numberOfItems, itemArray);
console.log(computer);
var gameContinues = true;
while (gameContinues === true) {
    var answer = [];
    for (var i = 0; i < numberOfItems; i++) {
        var guessIndex = Math.floor(Math.random() * itemArray.length);
        var guess = itemArray[guessIndex];
        answer.push(guess);
    }
    console.log("Answer from user: ".concat(answer));
    var result = computer.checkAnswer(answer);
    var parsedResult = JSON.parse(result);
    var numberOfGuesses = computer.getNumberOfGuesses();
    var correct = 0;
    for (var i = 0; i < parsedResult.length; i++) {
        if (parsedResult[i].color === 'green') {
            correct++;
        }
    }
    if (parsedResult === 'Congratulations! You made it!') {
        console.log("".concat(parsedResult, " Total number of guesses: ").concat(numberOfGuesses));
        gameContinues = false;
    }
    else {
        for (var i = 0; i < parsedResult.length; i++) {
            console.log(parsedResult[i]);
        }
    }
    if (numberOfGuesses >= 40) {
        console.log("You have unfortunately reached the maximum number of guesses. (".concat(numberOfGuesses, " guesses)"));
        gameContinues = false;
    }
}

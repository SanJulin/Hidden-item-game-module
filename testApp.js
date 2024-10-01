"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var computer_1 = require("./computer");
var theme_1 = require("./theme");
var themes = ['letters', 'animals', 'flags', 'colors'];
var themeIndex = Math.floor(Math.random() * themes.length);
var thisTheme = themes[themeIndex];
var theme = new theme_1.default(thisTheme);
var itemArray = theme.getItemArray();
var numberOfItems = Math.ceil(Math.random() * 8);
var computer = new computer_1.default(numberOfItems, itemArray);
console.log(computer);
var answer = [];
for (var i = 0; i < numberOfItems; i++) {
    var guessIndex = Math.floor(Math.random() * itemArray.length);
    var guess = itemArray[guessIndex];
    answer.push(guess);
}
var resultFeedback = computer.checkAnswer(answer);
console.log("Result: ".concat(resultFeedback));
var result = JSON.parse(resultFeedback);
console.log("Result2: ".concat(result));
if (result === 'Congratulations! You made it!') {
    console.log('Congrats');
}
else {
    var signsInWrongPlace = [];
    for (var i = 0; i < result.length; i++) {
        if (result[i].color === 'yellow') {
            signsInWrongPlace.push(result[i]);
        }
    }
    console.log("signs in wrong place ".concat(signsInWrongPlace));
}
var newGuess = [];
for (var i = 0; i < result.length; i++) {
    if (result[i].color === 'green') {
        newGuess.push(result[i].sign);
    }
    else if (result[i].color !== 'green') {
        newGuess.push(result[i].sign);
    }
    else {
        var guessIndex = Math.floor(Math.random() * itemArray.length);
        var guess = itemArray[guessIndex];
        newGuess.push(guess);
    }
}
result = computer.checkAnswer(newGuess);
console.log("2nd result: ".concat(result));

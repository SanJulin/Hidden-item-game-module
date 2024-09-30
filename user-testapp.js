"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var theme_1 = require("./theme");
var computer_1 = require("./computer");
var themeFromUser = readlineSync.question('Pls enter the theme you would like to play with? \n1. animals \n2. flags \n3. colors \n4. letters) \n');
var theme;
if (themeFromUser === '1') {
    theme = 'animals';
}
if (themeFromUser === '2') {
    theme = 'flags';
}
if (themeFromUser === '3') {
    theme = 'colors';
}
if (themeFromUser === '4') {
    theme = 'letters';
}
var numberOfItems = readlineSync.question('How many items would you like to play with? (1-8) ');
var gameTheme = new theme_1.Theme(theme);
var itemOptions = gameTheme.getItemArray();
console.log(itemOptions);
var computer = new computer_1.Computer(numberOfItems, itemOptions);
console.log(computer);
var gameContinues = true;
while (gameContinues === true) {
    console.log('Your options:');
    for (var i = 1; i <= itemOptions.length; i++) {
        var option = "".concat(i, ". ").concat(itemOptions[i - 1]);
        console.log(option);
    }
    var answerInNumbers = readlineSync.question("Pls guess the content in the computer row. choose ".concat(numberOfItems, " numbers to represent your row. "));
    var answer = [];
    for (var i = 0; i < answerInNumbers.length; i++) {
        if (answerInNumbers[i] === '1') {
            answer.push(itemOptions[0]);
        }
        else if (answerInNumbers[i] === '2') {
            answer.push(itemOptions[1]);
        }
        else if (answerInNumbers[i] === '3') {
            answer.push(itemOptions[2]);
        }
        else if (answerInNumbers[i] === '4') {
            answer.push(itemOptions[3]);
        }
        else if (answerInNumbers[i] === '5') {
            answer.push(itemOptions[4]);
        }
        else if (answerInNumbers[i] === '6') {
            answer.push(itemOptions[5]);
        }
        else if (answerInNumbers[i] === '7') {
            answer.push(itemOptions[6]);
        }
        else if (answerInNumbers[i] === '8') {
            answer.push(itemOptions[7]);
        }
    }
    var result = computer.checkAnswer(answer);
    var parsedResult = JSON.parse(result);
    var correct = 0;
    for (var i = 0; i < parsedResult.length; i++) {
        if (parsedResult[i].color === 'green') {
            correct++;
        }
    }
    if (parsedResult === 'Congratulations! You made it!') {
        console.log(parsedResult);
        gameContinues = false;
    }
    else {
        for (var i = 0; i < parsedResult.length; i++) {
            console.log(parsedResult[i]);
        }
    }
}
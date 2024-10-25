"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var theme_1 = require("../src/theme");
var computer_1 = require("../src/computer");
/**
 * Testing app for playing against the computer.
 */
// Takes the input from the user.
var themeFromUser = readlineSync.question('Pls enter the theme you would like to play with? \n1. flags \n2. animals \n3. colors \n4. professions \n5. movies \n');
var theme;
// Checks which theme the input represents
if (themeFromUser === '1') {
    theme = 'flags';
}
else if (themeFromUser === '2') {
    theme = 'animals';
}
else if (themeFromUser === '3') {
    theme = 'colors';
}
else if (themeFromUser === '4') {
    theme = 'professions';
}
else if (themeFromUser === '5') {
    theme = 'movies';
}
else {
    console.log('Not a valid number');
}
// Creates a new Theme that sets the theme chosen by the user.
var gameTheme = new theme_1.default(theme);
// Takes the input from the user
var numberOfItems = readlineSync.question('How many items would you like to play with? (1-8) ');
// Creates an array with options with the theme set for the game.
var itemOptions = gameTheme.getItemArray();
//Creates a new computer opponent. 
var computer = new computer_1.default(numberOfItems, theme);
//Prints the computer object to make it easier to check if the test result is correct. 
console.log(computer);
var gameContinues = true;
while (gameContinues === true) {
    // Writes out the options that the user can choose between
    console.log('\nYour options:');
    for (var i = 0; i < itemOptions.length; i++) {
        console.log(itemOptions[i].getId(), itemOptions[i].getName());
    }
    // Takes the input guessed by the user
    var answerInNumbers = readlineSync.question("Pls guess the content in the computer row. choose ".concat(numberOfItems, " numbers to represent your row. "));
    // Creates an array with the items that the user has choosen.
    var answer = [];
    for (var i = 0; i < answerInNumbers.length; i++) {
        var answeredItem = itemOptions[(answerInNumbers[i] - 1)];
        answer.push(answeredItem);
    }
    //Checks with the computer if the answer is correct.
    var resultArray = computer.checkAnswer((answer));
    // Checks how many guesses the AI has used. 
    var numberOfGuesses = computer.getNumberOfGuesses();
    var correctGuesses = 0;
    for (var i = 0; i < resultArray.length; i++) {
        var color = resultArray[i].getColor();
        if (color === 'green') {
            correctGuesses++;
        }
    }
    // Checks if the user has won and prints the resulttext and number of guesses needed if the user won. 
    // Prints the item + color. Green = correct place. Yellow = wrong place. Red = does not occur in the row.
    console.log('\nResult from Computer:');
    for (var i = 0; i < numberOfItems; i++) {
        console.log("Result".concat(i + 1, ": ").concat(resultArray[i].getName(), ", color: ").concat(resultArray[i].getColor()));
    }
    if (correctGuesses === parseInt(numberOfItems)) {
        console.log("Congratulations! You made it! Total number of guesses: ".concat(numberOfGuesses));
        gameContinues = false;
    }
}

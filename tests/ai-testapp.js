"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var computer_1 = require("../src/computer");
var theme_1 = require("../src/theme");
/**
 * Automatic test program that shows how it could look like when the AI player plays against the computer.
 */
// Creates a new Theme
var theme = new theme_1.default();
// Gets the available themes
var themes = theme.getAvailableThemes();
// Generates a random theme based on the available themes.
var themeIndex = Math.floor(Math.random() * themes.length);
var randomTheme = themes[themeIndex];
// Sets a theme based on the random generated theme.
theme.setTheme(randomTheme);
// Gets the array with items that belongs to the theme.
var itemArray = theme.getItemArray();
// Generates a random number
var numberOfItems = Math.ceil(Math.random() * 8);
// Creates a computer opponent
var computer = new computer_1.default(numberOfItems, randomTheme);
console.log('Computer Row:');
console.log(computer);
var gameContinues = true;
while (gameContinues) {
    for (var i = 0; i < itemArray.length; i++) {
        console.log("Option: ".concat(i + 1, ". ").concat(itemArray[i].getName()));
    }
    // Creates an array with the items that the AI has choosen.
    var answer = [];
    for (var i = 0; i < numberOfItems; i++) {
        var guessIndex = Math.floor(Math.random() * itemArray.length);
        var guess = itemArray[guessIndex];
        answer.push(guess);
    }
    console.log("Answer from player: ".concat(JSON.stringify(answer)));
    var resultArray = [];
    //Checks with the computer if the answer is correct.
    resultArray = computer.getFeedBackFromComputer(answer);
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
    if (correctGuesses === numberOfItems) {
        for (var i = 0; i < numberOfItems; i++) {
            console.log("Result".concat(i + 1, ": ").concat(resultArray[i].getName(), ", color: ").concat(resultArray[i].getColor()));
        }
        console.log("Congratulations! You made it! Total number of guesses: ".concat(numberOfGuesses));
        gameContinues = false;
    }
    else {
        for (var i = 0; i < numberOfItems; i++) {
            console.log("Result".concat(i + 1, ": ").concat(resultArray[i].getName(), ", color: ").concat(resultArray[i].getColor()));
        }
    }
    // Ends the game if the AI has used 40 guesses.
    if (numberOfGuesses === 40 || numberOfGuesses > 40) {
        console.log("You have unfortunately reached the maximum number of guesses. (".concat(numberOfGuesses, " guesses)"));
        gameContinues = false;
    }
}

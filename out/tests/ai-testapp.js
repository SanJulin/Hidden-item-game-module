"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const computer_1 = __importDefault(require("../src/computer"));
const theme_1 = __importDefault(require("../src/theme"));
/**
 * Automatic test program that shows how it could look like when the AI player plays against the computer.
 */
// Creates a new Theme
const theme = new theme_1.default();
// Gets the available themes
const themes = theme.getAvailableThemes();
// Generates a random theme based on the available themes.
const themeIndex = Math.floor(Math.random() * themes.length);
const randomTheme = themes[themeIndex];
// Sets a theme based on the random generated theme.
theme.setTheme(randomTheme);
// Gets the array with items that belongs to the theme.
const itemArray = theme.getItemArray();
// Generates a random number
const numberOfItems = Math.ceil(Math.random() * 8);
// Creates a computer opponent
const computer = new computer_1.default(numberOfItems, randomTheme);
console.log('Computer Row:');
console.log(computer);
let gameContinues = true;
while (gameContinues) {
    for (let i = 0; i < itemArray.length; i++) {
        console.log(`Option: ${i + 1}. ${itemArray[i].getName()}`);
    }
    // Creates an array with the items that the AI has choosen.
    let answer = [];
    for (let i = 0; i < numberOfItems; i++) {
        const guessIndex = Math.floor(Math.random() * itemArray.length);
        const guess = itemArray[guessIndex];
        answer.push(guess);
    }
    console.log(`Answer from user: ${JSON.stringify(answer)}`);
    let resultArray = [];
    //Checks with the computer if the answer is correct.
    resultArray = computer.checkAnswer(answer);
    // Checks how many guesses the AI has used. 
    const numberOfGuesses = computer.getNumberOfGuesses();
    let correctGuesses = 0;
    for (let i = 0; i < resultArray.length; i++) {
        const color = resultArray[i].getColor();
        if (color === 'green') {
            correctGuesses++;
        }
        // Checks if the user has won and prints the resulttext and number of guesses needed if the user won. 
        // Prints the item + color. Green = correct place. Yellow = wrong place. Red = does not occur in the row.
        if (correctGuesses === numberOfItems) {
            console.log(`Congratulations! You made it! Total number of guesses: ${numberOfGuesses}`);
            gameContinues = false;
        }
        else {
            for (let i = 0; i < resultArray.length; i++) {
                console.log(`Result: ${resultArray[i].getName()}, color: ${resultArray[i].getColor()}`);
            }
        }
        // Ends the game if the AI has used 40 guesses.
        if (numberOfGuesses === 40 || numberOfGuesses > 40) {
            console.log(`You have unfortunately reached the maximum number of guesses. (${numberOfGuesses} guesses)`);
            gameContinues = false;
        }
    }
}
//# sourceMappingURL=ai-testapp.js.map
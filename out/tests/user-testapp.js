"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
const theme_1 = __importDefault(require("../src/theme"));
const computer_1 = __importDefault(require("../src/computer"));
/**
 * Testing app for playing against the computer.
 */
// Takes the input from the user.
const themeFromUser = readlineSync.question('Pls enter the theme you would like to play with? \n1. flags \n2. animals \n3. colors \n4. professions \n5. movies \n');
let theme;
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
const gameTheme = new theme_1.default(theme);
// Takes the input from the user
const numberOfItems = readlineSync.question('How many items would you like to play with? (1-8) ');
// Creates an array with options with the theme set for the game.
const itemOptions = gameTheme.getItemArray();
//Creates a new computer opponent. 
const computer = new computer_1.default(numberOfItems, theme);
//Prints the computer object to make it easier to check if the test result is correct. 
console.log(computer);
let gameContinues = true;
while (gameContinues === true) {
    // Writes out the options that the user can choose between
    console.log('\nYour options:');
    for (let i = 0; i < itemOptions.length; i++) {
        console.log(itemOptions[i].getId(), itemOptions[i].getName());
    }
    // Takes the input guessed by the user
    const answerInNumbers = readlineSync.question(`Pls guess the content in the computer row. choose ${numberOfItems} numbers to represent your row. `);
    // Creates an array with the items that the user has choosen.
    let answer = [];
    for (let i = 0; i < answerInNumbers.length; i++) {
        const ans = answerInNumbers[i];
        console.log(ans);
        const answeredItem = itemOptions[(ans - 1)];
        console.log(answeredItem);
        answer.push(answeredItem);
    }
    //Checks with the computer if the answer is correct.
    let resultArray = computer.getFeedBackFromComputer((answer));
    // Checks how many guesses the AI has used. 
    const numberOfGuesses = computer.getNumberOfGuesses();
    let correctGuesses = 0;
    for (let i = 0; i < resultArray.length; i++) {
        const color = resultArray[i].getColor();
        if (color === 'green') {
            correctGuesses++;
        }
    }
    // Checks if the user has won and prints the resulttext and number of guesses needed if the user won. 
    // Prints the item + color. Green = correct place. Yellow = wrong place. Red = does not occur in the row.
    console.log('\nResult from Computer:');
    for (let i = 0; i < numberOfItems; i++) {
        console.log(`Result${i + 1}: ${resultArray[i].getName()}, color: ${resultArray[i].getColor()}`);
    }
    if (correctGuesses === parseInt(numberOfItems)) {
        console.log(`Congratulations! You made it! Total number of guesses: ${numberOfGuesses}`);
        gameContinues = false;
    }
}
//# sourceMappingURL=user-testapp.js.map
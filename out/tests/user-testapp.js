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
const computer = new computer_1.default(numberOfItems, itemOptions);
//Prints the computer object to make it easier to check if the test result is correct. 
console.log(computer);
let gameContinues = true;
while (gameContinues === true) {
    // Writes out the options that the user can choose between
    console.log('Your options:');
    console.log(itemOptions);
    // Takes the input guessed by the user
    const answerInNumbers = readlineSync.question(`Pls guess the content in the computer row. choose ${numberOfItems} (id) numbers to represent your row. `);
    let answer = [];
    // Creates an array with the items that the user has choosen.
    for (let i = 0; i < answerInNumbers.length; i++) {
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
    console.log(`Answer from player: ${JSON.stringify(answer)}`);
    //Checks with the computer if the answer is correct.
    let result = computer.checkAnswer((answer));
    let parsedResult = JSON.parse(result);
    // Checks if the user has won and prints the resulttext and number of guesses needed if the user won. 
    // Prints the item + color. Green = correct place. Yellow = wrong place. Red = does not occur in the row.
    if (parsedResult === 'Congratulations! You made it!') {
        console.log(parsedResult);
        console.log(`Total number of guesses: ${computer.getNumberOfGuesses()}`);
        gameContinues = false;
    }
    else {
        for (let i = 0; i < parsedResult.length; i++) {
            console.log(parsedResult[i]);
        }
    }
}
//# sourceMappingURL=user-testapp.js.map
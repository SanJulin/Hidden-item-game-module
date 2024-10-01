"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const computer_1 = __importDefault(require("./computer"));
const theme_1 = __importDefault(require("./theme"));
const themes = ['letters', 'animals', 'flags', 'colors'];
const themeIndex = Math.floor(Math.random() * themes.length);
const thisTheme = themes[themeIndex];
const theme = new theme_1.default(thisTheme);
const itemArray = theme.getItemArray();
const numberOfItems = Math.ceil(Math.random() * 8);
const computer = new computer_1.default(numberOfItems, itemArray);
console.log(computer);
let gameContinues = true;
while (gameContinues === true) {
    let answer = [];
    for (let i = 0; i < numberOfItems; i++) {
        const guessIndex = Math.floor(Math.random() * itemArray.length);
        const guess = itemArray[guessIndex];
        answer.push(guess);
    }
    let result = computer.checkAnswer(answer);
    let parsedResult = JSON.parse(result);
    let correct = 0;
    for (let i = 0; i < parsedResult.length; i++) {
        if (parsedResult[i].color === 'green') {
            correct++;
        }
    }
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
//# sourceMappingURL=automatic-testapp.js.map
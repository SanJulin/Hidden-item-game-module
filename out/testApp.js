"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const computer_1 = require("./computer");
const theme_1 = require("./theme");
const themes = ['letters', 'animals', 'flags', 'colors'];
const themeIndex = Math.floor(Math.random() * themes.length);
const thisTheme = themes[themeIndex];
const theme = new theme_1.Theme(thisTheme);
const itemArray = theme.getItemArray();
const numberOfItems = Math.ceil(Math.random() * 8);
const computer = new computer_1.Computer(numberOfItems, itemArray);
console.log(computer);
let answer = [];
for (let i = 0; i < numberOfItems; i++) {
    const guessIndex = Math.floor(Math.random() * itemArray.length);
    const guess = itemArray[guessIndex];
    answer.push(guess);
}
let resultFeedback = computer.checkAnswer(answer);
console.log(`Result: ${resultFeedback}`);
let result = JSON.parse(resultFeedback);
console.log(`Result2: ${result}`);
if (result === 'Congratulations! You made it!') {
    console.log('Congrats');
}
else {
    const signsInWrongPlace = [];
    for (let i = 0; i < result.length; i++) {
        if (result[i].color === 'yellow') {
            signsInWrongPlace.push(result[i]);
        }
    }
    console.log(`signs in wrong place ${signsInWrongPlace}`);
}
const newGuess = [];
for (let i = 0; i < result.length; i++) {
    if (result[i].color === 'green') {
        newGuess.push(result[i].sign);
    }
    else if (result[i].color !== 'green') {
        newGuess.push(result[i].sign);
    }
    else {
        const guessIndex = Math.floor(Math.random() * itemArray.length);
        const guess = itemArray[guessIndex];
        newGuess.push(guess);
    }
}
result = computer.checkAnswer(newGuess);
console.log(`2nd result: ${result}`);
//# sourceMappingURL=testapp.js.map
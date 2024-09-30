"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Computer = void 0;
const computer_row_1 = require("./computer-row");
class Computer {
    constructor(numberOfItems = 5, themeArr) {
        this.computerRow = [];
        this.numberOfGuesses = 0;
        this.numberOfItems = numberOfItems;
        this.computerRow = this.createComputerRow(themeArr);
    }
    createComputerRow(themeArr) {
        const computerRow = new computer_row_1.ComputerRow(this.numberOfItems, themeArr);
        return computerRow.generateRow();
    }
    checkAnswer(answer) {
        const answerFromPlayer = answer;
        console.log(`Answer from player: ${answerFromPlayer}`);
        let answerWithFeedback = [];
        let numberOfCorrectItems = 0;
        for (let i = 0; i < answerFromPlayer.length; i++) {
            let itemObject = { item: String, color: String };
            if (answerFromPlayer[i] === this.computerRow[i]) {
                numberOfCorrectItems++;
                itemObject = { item: answerFromPlayer[i], color: 'green' };
            }
            else if (this.computerRow.includes(answerFromPlayer[i])) {
                itemObject = { item: answerFromPlayer[i], color: 'yellow' };
            }
            else {
                itemObject = { item: answerFromPlayer[i], color: 'red' };
            }
            answerWithFeedback.push(itemObject);
        }
        if (numberOfCorrectItems > this.numberOfItems) {
            return JSON.stringify('Congratulations! You made it!');
        }
        else {
            return JSON.stringify(answerWithFeedback);
        }
    }
}
exports.Computer = Computer;
//# sourceMappingURL=computer.js.map
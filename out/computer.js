"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Computer = void 0;
const computer_row_1 = require("./computer-row");
class Computer {
    constructor(numberOfCharacters = 5, themeArr) {
        this.computerRow = [];
        this.numberOfGuesses = 0;
        this.numberOfCharacters = numberOfCharacters;
        this.computerRow = this.createComputerRow(themeArr);
    }
    createComputerRow(themeArr) {
        const computerRow = new computer_row_1.ComputerRow(this.numberOfCharacters, themeArr);
        return computerRow.generateRow();
    }
    checkAnswer(answer) {
        const answerFromPlayer = answer;
        console.log(`Answer from player: ${answerFromPlayer}`);
        let correctCharacters = 0;
        let result = [];
        let answerWithFeedback = [];
        for (let i = 0; i < answerFromPlayer.length; i++) {
            let signObject = { sign: String, color: String };
            if (answerFromPlayer[i] === this.computerRow[i]) {
                correctCharacters++;
                signObject = { sign: answerFromPlayer[i], color: 'green' };
            }
            else if (this.computerRow.includes(answerFromPlayer[i])) {
                signObject = { sign: answerFromPlayer[i], color: 'yellow' };
            }
            else {
                signObject = { sign: answerFromPlayer[i], color: 'red' };
            }
            answerWithFeedback.push(signObject);
        }
        console.log(`AnswerWithFeedback: ${JSON.stringify(answerWithFeedback)}`);
        if (correctCharacters === this.numberOfCharacters) {
            result = 'Congratulations! You made it!';
        }
        else {
            result = answerWithFeedback;
        }
        this.numberOfGuesses++;
        return JSON.stringify(result);
    }
}
exports.Computer = Computer;
//# sourceMappingURL=computer.js.map
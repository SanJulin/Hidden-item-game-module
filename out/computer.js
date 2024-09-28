"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Computer = void 0;
const computer_row_1 = require("./computer-row");
class Computer {
    constructor(numberOfCharacters = 5, themeArr) {
        this.computerRow = [];
        this.answerWithFeedback = [];
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
        let result;
        let signObject = { sign: String, comment: String };
        for (let i = 0; i < answerFromPlayer.length; i++) {
            if (answerFromPlayer[i] === this.computerRow[i]) {
                correctCharacters++;
                signObject = { sign: answerFromPlayer[i], comment: 'correct place' };
            }
            else if (answerFromPlayer[i] !== this.computerRow[i] && this.computerRow.includes(answerFromPlayer[i])) {
                signObject = { sign: answerFromPlayer[i], comment: 'available, but in the wrong place' };
            }
            else {
                signObject = { sign: answerFromPlayer[i], comment: 'not available in the row' };
            }
            this.answerWithFeedback.push(signObject);
        }
        if (correctCharacters === this.numberOfCharacters) {
            result = 'Congratulations! You won! All the signs are in the correct place';
        }
        else {
            result = this.answerWithFeedback;
        }
        return result;
    }
}
exports.Computer = Computer;
//# sourceMappingURL=computer.js.map
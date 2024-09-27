"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Computer = void 0;
const computer_row_1 = require("./computer-row");
class Computer {
    constructor(numberOfCharacters = 5, themeArr) {
        this.computerRow = [];
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
        let correctSigns = [];
        for (let i = 0; i < answerFromPlayer.length; i++) {
            if (answerFromPlayer[i] === this.computerRow[i]) {
                correctCharacters++;
                correctSigns.push(answerFromPlayer[i]);
            }
        }
        if (correctCharacters === this.numberOfCharacters) {
            result = 'Congratulations! You won! All the signs are in the correct place';
        }
        else {
            result = this.calculateResult(answerFromPlayer);
        }
        return result;
    }
    calculateResult(answerFromPlayer) {
        let answerWithFeedback = [];
        let checkedSigns = [];
        for (let i = 0; i < answerFromPlayer.length; i++) {
            let signObject = { sign: String, comment: String };
            if (answerFromPlayer[i] === this.computerRow[i]) {
                const signObject = { sign: answerFromPlayer[i], comment: 'correct place' };
                answerWithFeedback.push(signObject);
                checkedSigns.push[i];
            }
            else {
                for (let j = 0; j < this.computerRow.length; j++) {
                    if (answerFromPlayer[i] !== this.computerRow[i] && answerFromPlayer[i] === this.computerRow[j] && !checkedSigns.includes(answerFromPlayer[i])) {
                        const signObject = { sign: answerFromPlayer[i], comment: 'available, but in the wrong place' };
                        answerWithFeedback.push(signObject);
                        checkedSigns.push[i];
                    }
                    if (answerFromPlayer[i] !== this.computerRow[i] && answerFromPlayer[i] !== this.computerRow[j] && !checkedSigns.includes(answerFromPlayer[i])) {
                        const signObject = { sign: answerFromPlayer[i], comment: 'not available in the row' };
                        answerWithFeedback.push(signObject);
                        checkedSigns.push[i];
                    }
                }
            }
        }
        return answerWithFeedback;
    }
}
exports.Computer = Computer;
//# sourceMappingURL=computer.js.map
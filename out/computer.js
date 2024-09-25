"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Computer = void 0;
const computer_row_1 = require("./computer-row");
class Computer {
    constructor(numberOfColors) {
        this.computerRow = [];
        this.numberOfColors = 5;
        this.numberOfColors = numberOfColors;
        this.computerRow = this.createComputerRow();
    }
    createComputerRow() {
        const computerRow = new computer_row_1.ComputerRow(this.numberOfColors);
        return computerRow.generateRow();
    }
    checkAnswer(answer) {
        const answerFromPlayer = answer;
        console.log(answerFromPlayer);
        let correctCharacters = 0;
        for (let i = 0; i < answerFromPlayer.length; i++) {
            if (answerFromPlayer[i] === this.computerRow[i])
                correctCharacters++;
        }
        if (correctCharacters === this.numberOfColors) {
            return 'You won';
        }
        else {
            return `You had ${correctCharacters}.`;
        }
    }
}
exports.Computer = Computer;
//# sourceMappingURL=computer.js.map
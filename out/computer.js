"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Computer = void 0;
const computer_row_1 = require("./computer-row");
class Computer {
    constructor(numberOfCharacters = 5, theme = 'colors') {
        this.computerRow = [];
        this.numberOfCharacters = numberOfCharacters;
        this.theme = theme;
        this.computerRow = this.createComputerRow();
    }
    createComputerRow() {
        const computerRow = new computer_row_1.ComputerRow(this.numberOfCharacters, this.theme);
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
        if (correctCharacters === this.numberOfCharacters) {
            return 'Congratulations! You won';
        }
        else {
            return `You had ${correctCharacters} correct answers.`;
        }
    }
}
exports.Computer = Computer;
//# sourceMappingURL=computer.js.map
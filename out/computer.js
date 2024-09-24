"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Computer = void 0;
const computer_row_1 = require("./computer-row");
class Computer {
    constructor() {
        this.gameRow = [];
        this.createComputerRow();
    }
    createComputerRow() {
        const newComputerRow = new computer_row_1.ComputerRow();
        this.gameRow = newComputerRow.generateRow();
    }
    checkAnswer(answer) {
        const answered = answer;
        console.log(answered);
        if (answered === this.gameRow) {
            return 'You won';
        }
        else {
            return 'Wrong answer';
        }
    }
}
exports.Computer = Computer;
//# sourceMappingURL=computer.js.map
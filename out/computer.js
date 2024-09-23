"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Computer = void 0;
const computer_row_1 = require("./computer-row");
class Computer {
    constructor() {
    }
    createComputerRow() {
        const newComputerRow = new computer_row_1.ComputerRow();
        const row = newComputerRow.generateRow();
        console.log(row);
        return row;
    }
}
exports.Computer = Computer;
//# sourceMappingURL=computer.js.map
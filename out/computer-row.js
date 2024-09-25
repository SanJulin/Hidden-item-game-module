"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerRow = void 0;
class ComputerRow {
    constructor(numberOfColors) {
        this.numberOfColors = numberOfColors;
    }
    generateRow() {
        const rowLength = this.numberOfColors;
        const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'black', 'white', 'purple'];
        const newRow = [];
        for (let i = 0; i < rowLength; i++) {
            const nextColorIndex = Math.floor(Math.random() * colors.length);
            const nextColor = colors[nextColorIndex];
            newRow.push(nextColor);
        }
        return newRow;
    }
}
exports.ComputerRow = ComputerRow;
//# sourceMappingURL=computer-row.js.map
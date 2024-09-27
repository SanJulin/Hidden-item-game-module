"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerRow = void 0;
class ComputerRow {
    constructor(numberOfCharacters, themeArr) {
        this.numberOfCharacters = numberOfCharacters;
        this.themeArr = themeArr;
    }
    generateRow() {
        const rowLength = this.numberOfCharacters;
        const newRow = [];
        for (let i = 0; i < rowLength; i++) {
            const nextColorIndex = Math.floor(Math.random() * this.themeArr.length);
            const nextColor = this.themeArr[nextColorIndex];
            newRow.push(nextColor);
        }
        return newRow;
    }
}
exports.ComputerRow = ComputerRow;
//# sourceMappingURL=computer-row.js.map
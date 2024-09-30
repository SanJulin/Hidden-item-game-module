"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerRow = void 0;
class ComputerRow {
    constructor(numberOfItems = 5, itemArray) {
        this.computerRow = [];
        this.numberOfItems = numberOfItems;
        this.itemArray = itemArray;
    }
    generateRow() {
        const rowLength = this.numberOfItems;
        for (let i = 0; i < rowLength; i++) {
            const nextItemIndex = Math.floor(Math.random() * this.itemArray.length);
            const nextItem = this.itemArray[nextItemIndex];
            this.computerRow.push(nextItem);
        }
        return this.computerRow;
    }
}
exports.ComputerRow = ComputerRow;
//# sourceMappingURL=computer-row.js.map
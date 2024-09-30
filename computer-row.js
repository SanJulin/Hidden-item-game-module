"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerRow = void 0;
var ComputerRow = /** @class */ (function () {
    function ComputerRow(numberOfItems, itemArray) {
        if (numberOfItems === void 0) { numberOfItems = 5; }
        this.computerRow = [];
        this.numberOfItems = numberOfItems;
        this.itemArray = itemArray;
    }
    ComputerRow.prototype.generateRow = function () {
        var rowLength = this.numberOfItems;
        for (var i = 0; i < rowLength; i++) {
            var nextItemIndex = Math.floor(Math.random() * this.itemArray.length);
            var nextItem = this.itemArray[nextItemIndex];
            this.computerRow.push(nextItem);
        }
        return this.computerRow;
    };
    return ComputerRow;
}());
exports.ComputerRow = ComputerRow;

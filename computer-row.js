"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerRow = void 0;
/**
 * Class that represents the computer row with items that the Computer is creating.
 */
var ComputerRow = /** @class */ (function () {
    function ComputerRow(numberOfItems, itemArray) {
        this.computerRow = [];
        this.setNumberOfItems(numberOfItems);
        this.setItemArray(itemArray);
    }
    /**
     * Gets the number of items that is included in the computer row.
     *
     * @returns { number } - number of items included in the computer row.
     */
    ComputerRow.prototype.getNumberOfItem = function () {
        return this.numberOfItems;
    };
    /**
     * Sets the number of items that should be included in the computer row.
     *
     * @param numberOfItems { number } - number of items that should be included in the computer row.
     */
    ComputerRow.prototype.setNumberOfItems = function (numberOfItems) {
        if (numberOfItems === null) {
            throw new Error('Pls provide a valid number');
        }
        else {
            this.numberOfItems = numberOfItems;
        }
    };
    /**
     *
     * @param itemArray string [] - the array with themed items chosen for the game.
     */
    ComputerRow.prototype.setItemArray = function (itemArray) {
        this.itemArray = itemArray;
    };
    /**
     * Creates a random row based on the itemArray and returns it to the computer.
     *
     * @returns {string [] } - A row with items.
     */
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

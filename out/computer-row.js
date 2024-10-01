"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Class that represents the computer row with items that the Computer is creating.
 */
class ComputerRow {
    constructor(numberOfItems, itemArray) {
        this.computerRow = [];
        this.setNumberOfItems(numberOfItems);
        this.setItemArray(itemArray);
    }
    /**
     * Gets the number of items that is included in the computer row.
     *
     * @returns { number } - number of items included in the computer row.
     */
    getNumberOfItem() {
        return this.numberOfItems;
    }
    /**
     * Sets the number of items that should be included in the computer row.
     *
     * @param numberOfItems { number } - number of items that should be included in the computer row.
     */
    setNumberOfItems(numberOfItems) {
        if (numberOfItems === null) {
            throw new Error('Pls provide a valid number');
        }
        else {
            this.numberOfItems = numberOfItems;
        }
    }
    /**
     *
     * @param itemArray string [] - the array with themed items chosen for the game.
     */
    setItemArray(itemArray) {
        this.itemArray = itemArray;
    }
    /**
     * Creates a random row based on the itemArray and returns it to the computer.
     *
     * @returns {string [] } - A row with items.
     */
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
exports.default = ComputerRow;
//# sourceMappingURL=computer-row.js.map
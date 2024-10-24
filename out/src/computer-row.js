"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const theme_1 = __importDefault(require("./theme"));
/**
 * Class that represents the computer row with items that the Computer is creating.
 */
class ComputerRow {
    constructor(numberOfItems, themeDecription) {
        this.numberOfItems = 0;
        this.computerRow = [];
        this.themeArray = [];
        this.setNumberOfItems(numberOfItems);
        this.setThemeArray(themeDecription);
    }
    /**
     * Gets the number of items that is included in the computer row.
     *
     * @returns { number } - number of items included in the computer row.
     */
    getNumberOfItems() {
        if (this.numberOfItems === null) {
            throw new Error('Number of items has not been set for the game');
        }
        return this.numberOfItems;
    }
    /**
     * Sets the number of items that should be included in the computer row.
     *
     * @param numberOfItems { number } - number of items that should be included in the computer row.
     */
    setNumberOfItems(numberOfItems) {
        if (numberOfItems < 1 || numberOfItems > 8) {
            throw new Error('Pls provide a number between 2 - 8');
        }
        else {
            this.numberOfItems = numberOfItems;
        }
    }
    /**
     * Sets the itemArray if there are 8 items in the provided array.
     *
     * @param themeArray object [] - the array with themed items chosen for the game.
     */
    setThemeArray(themeDecription) {
        const theme = new theme_1.default(themeDecription);
        this.themeArray = theme.getThemeArray();
    }
    /**
     * Creates a random row based on the itemArray and returns it to the computer.
     *
     * @returns {string [] } - A row with items.
     */
    generateRow() {
        const rowLength = this.numberOfItems;
        for (let i = 0; i < rowLength; i++) {
            const nextItemIndex = Math.floor(Math.random() * this.themeArray.length);
            const themeItem = this.themeArray[nextItemIndex];
            this.computerRow.push(themeItem);
        }
        return this.computerRow;
    }
}
exports.default = ComputerRow;
//# sourceMappingURL=computer-row.js.map
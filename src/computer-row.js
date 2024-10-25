"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var theme_1 = require("./theme");
/**
 * Class that represents the computer row with items that the Computer is creating.
 */
var ComputerRow = /** @class */ (function () {
    function ComputerRow(numberOfItems, themeDecription) {
        this.numberOfItems = 0;
        this.computerRow = [];
        this.themeArray = [];
        this.setNumberOfItems(numberOfItems);
        this.setThemeArray(themeDecription);
        this.generateComputerRow();
    }
    /**
     * Gets the number of items that is included in the computer row.
     *
     * @returns { number } - number of items included in the computer row.
     */
    ComputerRow.prototype.getNumberOfItems = function () {
        if (!this.numberOfItems) {
            throw new Error('Number of items has not been set for the game');
        }
        return this.numberOfItems;
    };
    /**
     * Sets the number of items that should be included in the computer row.
     *
     * @param numberOfItems { number } - number of items that should be included in the computer row.
     */
    ComputerRow.prototype.setNumberOfItems = function (numberOfItems) {
        if (numberOfItems < 1 || numberOfItems > 8) {
            throw new Error('Pls provide a number between 2 - 8');
        }
        else {
            this.numberOfItems = numberOfItems;
        }
    };
    /**
     * Sets the itemArray if there are 8 items in the provided array.
     *
     * @param themeDecription - the chosen theme
     */
    ComputerRow.prototype.setThemeArray = function (themeDecription) {
        var theme = new theme_1.default(themeDecription);
        this.themeArray = theme.getThemeArray();
    };
    /**
    * Gets the computer row.
    *
    * @returns { string [] } - the computer row.
    */
    ComputerRow.prototype.getComputerRow = function () {
        if (this.computerRow === undefined) {
            throw new Error('No computer row has been set for the game');
        }
        return this.computerRow;
    };
    /**
     * Creates a random row with names from the chosen theme that has been set in themeArray.
     * The computer will use the secret row in the game.
     * The number of items will decide how many names that should be included.
     */
    ComputerRow.prototype.generateComputerRow = function () {
        try {
            var rowLength = this.numberOfItems;
            for (var i = 0; i < rowLength; i++) {
                var nextItemIndex = Math.floor(Math.random() * this.themeArray.length);
                var themeItem = this.themeArray[nextItemIndex];
                this.computerRow.push(themeItem);
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log(error);
            }
        }
    };
    return ComputerRow;
}());
exports.default = ComputerRow;

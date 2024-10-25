"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var computer_row_1 = require("./computer-row");
/**
 * Class that represents the computer in the game.
 */
var Computer = /** @class */ (function () {
    function Computer(numberOfItems, themeDescription) {
        this.computerRow = [];
        this.numberOfGuesses = 0;
        this.createComputerRow(numberOfItems, themeDescription);
    }
    /**
     * Creates a new instance of the ComputerRow class and calls the generateRow method in the ComputerRow class in order to generate a new row that will represent the computer´s row of items.
     *
     * @param numberOfItems - the number of items that should be used in the computer row.
     * @param themeDescription - the chosen theme
     */
    Computer.prototype.createComputerRow = function (numberOfItems, themeDescription) {
        var computerRow = new computer_row_1.default(numberOfItems, themeDescription);
        this.computerRow = computerRow.getComputerRow();
    };
    /**
     * Gets the number of guesses used in a playround.
     *
     * @returns { number } - number of guesses.
    */
    Computer.prototype.getNumberOfGuesses = function () {
        return this.numberOfGuesses;
    };
    /**
     * Public method that calls other private methods in the same class to give the player feedback on the result and update the number of guesses used.
     *
     * @param answerFromPlayer { Item [] } - array with items from the user
     * @returns { Item [] } - An array with objects if the user´s guess wasn´t correct.
     */
    Computer.prototype.getFeedBackFromComputer = function (answerFromPlayer) {
        if (answerFromPlayer.length !== this.computerRow.length) {
            throw new Error("The guess must contain ".concat(this.computerRow.length, " items."));
        }
        var feedbackFromComputer = this.addColorsToItems(answerFromPlayer);
        this.updateNumberOfGuesses();
        return feedbackFromComputer;
    };
    /**
     * Checks with the computer if the answer is correct. If the item is in the correct place - the item will get the color green. If the item is present in the row, but in the wrong place - the item will get the color yellow and the color red will be used for items that are not present in the computer´s row.
     * @param answerFromPlayer - the array with items in the players answer.
     * @returns answerFromPlayer - the same array, but with feedback in form of colors.
     */
    Computer.prototype.addColorsToItems = function (answerFromPlayer) {
        for (var i = 0; i < answerFromPlayer.length; i++) {
            if (answerFromPlayer[i].getName() === this.computerRow[i]) {
                answerFromPlayer[i].setColor('green');
            }
            else if (this.computerRow.includes(answerFromPlayer[i].getName())) {
                answerFromPlayer[i].setColor('yellow');
            }
            else {
                answerFromPlayer[i].setColor('red');
            }
        }
        return answerFromPlayer;
    };
    /**
     * Updates the number of guesses the player has used with 1 for each round.
     */
    Computer.prototype.updateNumberOfGuesses = function () {
        this.numberOfGuesses++;
    };
    return Computer;
}());
exports.default = Computer;

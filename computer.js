"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Computer = void 0;
var computer_row_1 = require("./computer-row");
var Computer = /** @class */ (function () {
    function Computer(numberOfItems, themeArr) {
        if (numberOfItems === void 0) { numberOfItems = 5; }
        this.computerRow = [];
        this.numberOfGuesses = 0;
        this.numberOfItems = numberOfItems;
        this.computerRow = this.createComputerRow(themeArr);
    }
    Computer.prototype.createComputerRow = function (themeArr) {
        var computerRow = new computer_row_1.ComputerRow(this.numberOfItems, themeArr);
        return computerRow.generateRow();
    };
    Computer.prototype.checkAnswer = function (answer) {
        var answerFromPlayer = answer;
        console.log("Answer from player: ".concat(answerFromPlayer));
        var answerWithFeedback = [];
        var numberOfCorrectItems = 0;
        for (var i = 0; i < answerFromPlayer.length; i++) {
            var itemObject = { item: String, color: String };
            if (answerFromPlayer[i] === this.computerRow[i]) {
                numberOfCorrectItems++;
                itemObject = { item: answerFromPlayer[i], color: 'green' };
            }
            else if (this.computerRow.includes(answerFromPlayer[i])) {
                itemObject = { item: answerFromPlayer[i], color: 'yellow' };
            }
            else {
                itemObject = { item: answerFromPlayer[i], color: 'red' };
            }
            answerWithFeedback.push(itemObject);
        }
        if (numberOfCorrectItems >= this.numberOfItems) {
            return JSON.stringify('Congratulations! You made it!');
        }
        else {
            return JSON.stringify(answerWithFeedback);
        }
    };
    return Computer;
}());
exports.Computer = Computer;

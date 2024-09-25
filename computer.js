"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Computer = void 0;
var computer_row_1 = require("./computer-row");
var Computer = /** @class */ (function () {
    function Computer(numberOfColors) {
        this.computerRow = [];
        this.numberOfColors = 5;
        this.numberOfColors = numberOfColors;
        this.computerRow = this.createComputerRow();
    }
    Computer.prototype.createComputerRow = function () {
        var computerRow = new computer_row_1.ComputerRow(this.numberOfColors);
        return computerRow.generateRow();
    };
    Computer.prototype.checkAnswer = function (answer) {
        var answerFromPlayer = answer;
        console.log(answerFromPlayer);
        var correctCharacters = 0;
        for (var i = 0; i < answerFromPlayer.length; i++) {
            if (answerFromPlayer[i] === this.computerRow[i])
                correctCharacters++;
        }
        if (correctCharacters === this.numberOfColors) {
            return 'You won';
        }
        else {
            return "You had ".concat(correctCharacters, ".");
        }
    };
    return Computer;
}());
exports.Computer = Computer;

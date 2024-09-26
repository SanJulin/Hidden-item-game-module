"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Computer = void 0;
var computer_row_1 = require("./computer-row");
var Computer = /** @class */ (function () {
    function Computer(numberOfCharacters, theme) {
        if (numberOfCharacters === void 0) { numberOfCharacters = 5; }
        if (theme === void 0) { theme = 'colors'; }
        this.computerRow = [];
        this.numberOfCharacters = numberOfCharacters;
        this.theme = theme;
        this.computerRow = this.createComputerRow();
    }
    Computer.prototype.createComputerRow = function () {
        var computerRow = new computer_row_1.ComputerRow(this.numberOfCharacters, this.theme);
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
        if (correctCharacters === this.numberOfCharacters) {
            return 'Congratulations! You won';
        }
        else {
            return "You had ".concat(correctCharacters, " correct answers.");
        }
    };
    return Computer;
}());
exports.Computer = Computer;

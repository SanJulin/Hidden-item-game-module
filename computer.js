"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Computer = void 0;
var computer_row_1 = require("./computer-row");
var Computer = /** @class */ (function () {
    function Computer(numberOfCharacters, themeArr) {
        if (numberOfCharacters === void 0) { numberOfCharacters = 5; }
        this.computerRow = [];
        this.numberOfGuesses = 0;
        this.numberOfCharacters = numberOfCharacters;
        this.computerRow = this.createComputerRow(themeArr);
    }
    Computer.prototype.createComputerRow = function (themeArr) {
        var computerRow = new computer_row_1.ComputerRow(this.numberOfCharacters, themeArr);
        return computerRow.generateRow();
    };
    Computer.prototype.checkAnswer = function (answer) {
        var answerFromPlayer = answer;
        console.log("Answer from player: ".concat(answerFromPlayer));
        var correctCharacters = 0;
        var result = [];
        var answerWithFeedback = [];
        for (var i = 0; i < answerFromPlayer.length; i++) {
            var signObject = { sign: String, color: String };
            if (answerFromPlayer[i] === this.computerRow[i]) {
                correctCharacters++;
                signObject = { sign: answerFromPlayer[i], color: 'green' };
            }
            else if (this.computerRow.includes(answerFromPlayer[i])) {
                signObject = { sign: answerFromPlayer[i], color: 'yellow' };
            }
            else {
                signObject = { sign: answerFromPlayer[i], color: 'red' };
            }
            answerWithFeedback.push(signObject);
        }
        console.log("AnswerWithFeedback: ".concat(JSON.stringify(answerWithFeedback)));
        if (correctCharacters === this.numberOfCharacters) {
            result = 'Congratulations! You made it!';
        }
        else {
            result = answerWithFeedback;
        }
        this.numberOfGuesses++;
        return JSON.stringify(result);
    };
    return Computer;
}());
exports.Computer = Computer;

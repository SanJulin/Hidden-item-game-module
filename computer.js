"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Computer = void 0;
var computer_row_1 = require("./computer-row");
var Computer = /** @class */ (function () {
    function Computer(numberOfCharacters, themeArr) {
        if (numberOfCharacters === void 0) { numberOfCharacters = 5; }
        this.computerRow = [];
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
        var result;
        var correctSigns = [];
        for (var i = 0; i < answerFromPlayer.length; i++) {
            if (answerFromPlayer[i] === this.computerRow[i]) {
                correctCharacters++;
                correctSigns.push(answerFromPlayer[i]);
            }
        }
        if (correctCharacters === this.numberOfCharacters) {
            result = 'Congratulations! You won! All the signs are in the correct place';
        }
        else {
            result = this.calculateResult(answerFromPlayer);
        }
        return result;
    };
    Computer.prototype.calculateResult = function (answerFromPlayer) {
        var answerWithFeedback = [];
        var checkedSigns = [];
        for (var i = 0; i < answerFromPlayer.length; i++) {
            var signObject = { sign: String, comment: String };
            if (answerFromPlayer[i] === this.computerRow[i]) {
                var signObject_1 = { sign: answerFromPlayer[i], comment: 'correct place' };
                answerWithFeedback.push(signObject_1);
                checkedSigns.push[i];
            }
            else {
                for (var j = 0; j < this.computerRow.length; j++) {
                    if (answerFromPlayer[i] !== this.computerRow[i] && answerFromPlayer[i] === this.computerRow[j] && !checkedSigns.includes(answerFromPlayer[i])) {
                        var signObject_2 = { sign: answerFromPlayer[i], comment: 'available, but in the wrong place' };
                        answerWithFeedback.push(signObject_2);
                        checkedSigns.push[i];
                    }
                    if (answerFromPlayer[i] !== this.computerRow[i] && answerFromPlayer[i] !== this.computerRow[j] && !checkedSigns.includes(answerFromPlayer[i])) {
                        var signObject_3 = { sign: answerFromPlayer[i], comment: 'not available in the row' };
                        answerWithFeedback.push(signObject_3);
                        checkedSigns.push[i];
                    }
                }
            }
        }
        return answerWithFeedback;
    };
    return Computer;
}());
exports.Computer = Computer;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Computer = void 0;
var computer_row_1 = require("./computer-row");
var Computer = /** @class */ (function () {
    function Computer() {
        this.gameRow = [];
        this.createComputerRow();
    }
    Computer.prototype.createComputerRow = function () {
        var newComputerRow = new computer_row_1.ComputerRow();
        this.gameRow = newComputerRow.generateRow();
    };
    Computer.prototype.checkAnswer = function (answer) {
        var answered = answer;
        console.log(answered);
        if (answered === this.gameRow) {
            return 'You won';
        }
        else {
            return 'Wrong answer';
        }
    };
    return Computer;
}());
exports.Computer = Computer;

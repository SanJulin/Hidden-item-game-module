"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Computer = void 0;
var computer_row_1 = require("./computer-row");
var Computer = /** @class */ (function () {
    function Computer() {
    }
    Computer.prototype.createComputerRow = function () {
        var newComputerRow = new computer_row_1.ComputerRow();
        var row = newComputerRow.generateRow();
        return row;
    };
    return Computer;
}());
exports.Computer = Computer;

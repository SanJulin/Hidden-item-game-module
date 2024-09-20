"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameRow = void 0;
var GameRow = /** @class */ (function () {
    function GameRow() {
    }
    GameRow.prototype.generateRow = function () {
        var rowLength = 5;
        var colors = ['red', 'blue', 'green', 'yellow', 'pink', 'black', 'white', 'purple'];
        var newRow = [];
        for (var i = 0; i < rowLength; i++) {
            var nextColorIndex = Math.floor(Math.random() * colors.length);
            var nextColor = colors[nextColorIndex];
            newRow.push(nextColor);
            console.log(nextColor);
        }
        console.log(newRow);
        return newRow;
    };
    return GameRow;
}());
exports.GameRow = GameRow;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var game_row_1 = require("./game-row");
var Game = /** @class */ (function () {
    function Game() {
    }
    Game.prototype.createGameRow = function () {
        var newGameRow = new game_row_1.GameRow();
        var row = newGameRow.generateRow();
        console.log(row);
        return row;
    };
    return Game;
}());
exports.Game = Game;

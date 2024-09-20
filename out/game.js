"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const game_row_1 = require("./game-row");
class Game {
    constructor() {
    }
    createGameRow() {
        const newGameRow = new game_row_1.GameRow();
        const row = newGameRow.generateRow();
        console.log(row);
        return row;
    }
}
exports.Game = Game;
//# sourceMappingURL=game.js.map
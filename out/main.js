"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("./test");
const game_1 = require("./game");
let message = "Hello Worlds";
console.log(message);
const newTest = new test_1.Test();
const result = newTest.test();
console.log(result);
const gameRound = new game_1.Game();
const newGameRow = gameRound.createGameRow();
console.log(newGameRow);
//# sourceMappingURL=main.js.map
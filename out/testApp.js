"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const computer_1 = require("./computer");
const theme_1 = require("./theme");
const theme = new theme_1.Theme('letters');
const gameArr = theme.getArr();
const computer = new computer_1.Computer(5, gameArr);
console.log(computer);
console.log(computer.checkAnswer(['f', 'c', 'a', 'a', 'b']));
//# sourceMappingURL=testApp.js.map
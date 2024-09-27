"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var computer_1 = require("./computer");
var theme_1 = require("./theme");
var theme = new theme_1.Theme('letters');
var gameArr = theme.getArr();
var computer = new computer_1.Computer(5, gameArr);
console.log(computer);
console.log(computer.checkAnswer(['f', 'c', 'a', 'a', 'b']));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var computer_1 = require("./computer");
var computer = new computer_1.Computer(6, 'flags');
console.log(computer);
console.log(computer.checkAnswer(['sweden', 'japan', 'italy', 'norway', 'germany', 'china']));

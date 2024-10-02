"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var computer_1 = require("../src/computer");
var computer_row_1 = require("../src/computer-row");
var item_1 = require("../src/item");
var theme_1 = require("../src/theme");
/**
 * Automatic testing of separate methods in the classes.
 * Pls enter node method-testapp.js to run the below tests. More test documentation is available in the tests folder.
 */
// Testing of the Computer class
console.log('\n\nTests for the Computer class:');
var computer = new computer_1.default(3, ['police', 'doctor', 'pilot', 'developer', 'teacher', 'administrator', 'actor', 'chef']);
console.log('\nconst Computer = new Computer(3, [police', 'doctor', 'pilot', 'developer', 'teacher', 'administrator', 'actor', 'chef])');
computer.setNumberOfItems(4);
console.log('\ncomputer.setNumberOfItems(4)');
console.log("\ncomputer.getNumberOfItems()  -    result: ".concat(computer.getNumberOfItems()));
console.log("\ncomputer.getComputerRow()  -    \nresult: ".concat(computer.getComputerRow()));
var result = computer.checkAnswer(['police', 'pilot', 'developer']);
console.log("\ncomputer.checkAnswer(['police', 'pilot', 'developer'])  -    \nresult: ".concat(result));
var guesses = computer.getNumberOfGuesses();
console.log("\ncomputer.getNumberOfGuesses()  -    \nresult: ".concat(guesses, "\n"));
// Testing of the ComputerRow class
console.log('\n\nTests for the ComputerRow class:');
var computerRow = new computer_row_1.default(5, ['police', 'doctor', 'pilot', 'developer', 'teacher', 'administrator', 'actor', 'chef']);
console.log('\nconst ComputerRow = new ComputerRow(5, [police', 'doctor', 'pilot', 'developer', 'teacher', 'administrator', 'actor', 'chef])');
console.log("\ncomputerRow.getNumberOfItems()  -    result: ".concat(computerRow.getNumberOfItems()));
console.log("\ncomputerRow.generateRow()  -    result: ".concat(computerRow.generateRow(), "n"));
//Testing of the Theme class:
console.log('\n\nTests for the Theme class:');
console.log('\nconst theme = new Theme()');
var theme = new theme_1.default();
console.log("\ntheme.getAvailableThemes() -    result: ".concat(theme.getAvailableThemes()));
theme.setTheme('animals');
console.log('\ntheme.setTheme(animals)');
console.log("\ntheme.getTheme() -      result: ".concat(theme.getTheme()));
console.log("\ntheme.getItemArray() -      result: ".concat(theme.getItemArray()));
theme.setOtherTheme('sports', ['diving', 'running', 'tennis playing', 'skiing', 'sailing', 'skating', 'fitness', 'dancing']);
console.log('\ntheme.setOtherTheme([diving', 'running', 'tennis playing', 'skiing', 'sailing', 'skating', 'fitness', 'dancing])');
console.log("\ntheme.getItemArray() -      result: ".concat(theme.getItemArray(), "\n"));
//Testing of the Item class:
console.log('\n\nTests for the Item class:');
console.log('\nconst item = new Item(gorilla, 3)');
var item = new item_1.default('gorilla', 3);
var itemName = item.getName();
console.log("\nitem.getname -    result: ".concat(itemName));
var itemId = item.getId();
console.log("\nitem.getId -      result: ".concat(itemId));
item.setColor('yellow');
console.log('\nitem.setColor(yellow)');
var itemColor = item.getColor();
console.log("\nitem.getColor() -  result: ".concat(itemColor, "\n"));

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
/**
 * Testing of the Computer class
 */
console.log('\n\nTests for the Computer class:');
// Creates an instance of the computer class with 3 as numberOfItems and an array with items belonging to the chosen theme
var computer = new computer_1.default(4, 'professions');
console.log('\nconst Computer = new Computer(4, professions');
console.log('Computer object:');
console.log(computer);
// Send the players guess to the computer. The computer compares the row of items to the computerRow and sends back a result/feedback
var answerArray = [new item_1.default(1, 'Actor'), new item_1.default(2, 'Chef'), new item_1.default(3, 'Developer'), new item_1.default(4, 'Doctor')];
var result = computer.checkAnswer(answerArray);
console.log("\ncomputer.checkAnswer(answerArray)  -    \nresult: ".concat(JSON.stringify(result)));
// Gets the number of guesses used so far in the game
var guesses = computer.getNumberOfGuesses();
console.log("\ncomputer.getNumberOfGuesses()  -    \nresult: ".concat(guesses, "\n"));
/**
 * Testing of the ComputerRow class
 */
console.log('\n\nTests for the ComputerRow class:');
// Creates an instance of the ComputerRow class with 5 as numberOfItems and an array with items belonging to the chosen theme
var computerRow = new computer_row_1.default(4, 'professions');
console.log('\nconst ComputerRow = new ComputerRow(5, professions)');
// Shows the created computerRow object
console.log('computerRow object:');
console.log(computerRow);
// Gets the number of items used in the computerRow
console.log("\ncomputerRow.getNumberOfItems()  -    result: ".concat(computerRow.getNumberOfItems()));
// Gets the computer row with item names
console.log("\ncomputerRow.getComputerRow()  -    result: ".concat(JSON.stringify(computerRow.getComputerRow())));
/**
 * Testing of the Theme class:
 */
console.log('\n\nTests for the Theme class:');
// Creates an instance of the Theme class with no parameter since the user would like to se the available themes first
console.log('\nconst theme = new Theme()');
var theme = new theme_1.default();
theme.getItemArray();
// Gets the available themes included in the model
console.log("\ntheme.getAvailableThemes() -    result: ".concat(theme.getAvailableThemes()));
// Sets the theme to animals
theme.setTheme('animals');
console.log('\ntheme.setTheme(animals)');
// Gets the chosen theme
console.log("\ntheme.getTheme() -      result: ".concat(theme.getTheme()));
// Gets an array with names within the choosen theme
console.log("\ntheme.getThemeArray() -      result: ".concat(theme.getThemeArray()));
// Gets and array with 8 items belonging to the chosen array
var itemArray = theme.getItemArray();
console.log('\ntheme.getItemArray() -      result:');
for (var i = 0; i < itemArray.length; i++) {
    console.log(JSON.stringify(itemArray[i]));
}
/**
 * Testing of the Item class
 */
console.log('\n\nTests for the Item class:');
// Creates an instance of the Item class with 3 as id and gorilla as name
console.log('\nconst item = new Item(gorilla, 3)');
var item = new item_1.default(3, 'gorilla');
// Gets the item name
var itemName = item.getName();
console.log("\nitem.getname -    result: ".concat(itemName));
// Gets the item id
var itemId = item.getId();
console.log("\nitem.getId -      result: ".concat(itemId));
// Sets the color of the item to yellow
item.setColor('yellow');
console.log('\nitem.setColor(yellow)');
// Gets the item color
var itemColor = item.getColor();
console.log("\nitem.getColor() -  result: ".concat(itemColor, "\n"));

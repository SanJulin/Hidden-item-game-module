"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var theme_1 = require("./theme");
var computer_1 = require("./computer");
var themeFromUser = readlineSync.question('Pls enter the theme you would like to play with? \n1. animals \n2. flags \n3. colors \n4. letters) \n');
var theme;
if (themeFromUser === '1') {
    theme = 'animals';
}
if (themeFromUser === '2') {
    theme = 'flags';
}
if (themeFromUser === '3') {
    theme = 'colors';
}
if (themeFromUser === '4') {
    theme = 'letters';
}
var numberOfItems = readlineSync.question('How many items would you like to play with? (1-8) ');
var gameTheme = new theme_1.Theme(theme);
console.log(gameTheme);
var itemOptions = gameTheme.getItemArray();
console.log(itemOptions);
var computer = new computer_1.Computer(numberOfItems, itemOptions);
console.log(computer);

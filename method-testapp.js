"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var item_1 = require("./item");
// Computer
// ComputerRow
//Theme
console.log('');
//Testing of the Item class:
console.log('\n\nTests for the Item class:');
console.log('New item created with sweden as name and 1 as id:');
var item = new item_1.default('sweden', 1);
var itemName = item.getName();
console.log("item.getname - result: ".concat(itemName));
var itemId = item.getId();
console.log("item.getId - result: ".concat(itemId));
item.setColor('yellow');
console.log('item.setColor(yellow)');
var itemColor = item.getColor();
console.log("item.getColor() - result: ".concat(itemColor));

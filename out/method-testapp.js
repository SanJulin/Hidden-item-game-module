"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const item_1 = __importDefault(require("./item"));
// Computer
// ComputerRow
//Theme
console.log('');
//Testing of the Item class:
console.log('\n\nTests for the Item class:');
console.log('New item created with sweden as name and 1 as id:');
const item = new item_1.default('sweden', 1);
const itemName = item.getName();
console.log(`item.getname - result: ${itemName}`);
const itemId = item.getId();
console.log(`item.getId - result: ${itemId}`);
item.setColor('yellow');
console.log('item.setColor(yellow)');
const itemColor = item.getColor();
console.log(`item.getColor() - result: ${itemColor}`);
//# sourceMappingURL=method-testapp.js.map
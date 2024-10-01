"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
var Item = /** @class */ (function () {
    function Item(name, id) {
        this.color = '';
        this.setName(name);
        this.setId(id);
    }
    Item.prototype.getName = function () {
        return this.name;
    };
    Item.prototype.setName = function (name) {
        if (name === '') {
            throw new Error('The item must have a name');
        }
        else {
            this.name = name;
        }
    };
    Item.prototype.getId = function () {
        return this.id;
    };
    Item.prototype.setId = function (id) {
        if (id === null) {
            throw new Error('The item must have an id');
        }
        else {
            this.id = id;
        }
    };
    Item.prototype.getColor = function () {
        return this.color;
    };
    Item.prototype.setColor = function (color) {
        if (color === 'green' || color === 'yellow' || color === 'red') {
        }
        else {
            throw new Error('Only green, yellow and red are valid colors');
        }
    };
    return Item;
}());
exports.Item = Item;

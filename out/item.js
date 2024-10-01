"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
class Item {
    constructor(name, id) {
        this.color = '';
        this.setName(name);
        this.setId(id);
    }
    getName() {
        return this.name;
    }
    setName(name) {
        if (name === '') {
            throw new Error('The item must have a name');
        }
        else {
            this.name = name;
        }
    }
    getId() {
        return this.id;
    }
    setId(id) {
        if (id === null) {
            throw new Error('The item must have an id');
        }
        else {
            this.id = id;
        }
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        if (color === 'green' || color === 'yellow' || color === 'red') {
        }
        else {
            throw new Error('Only green, yellow and red are valid colors');
        }
    }
}
exports.Item = Item;
//# sourceMappingURL=item.js.map
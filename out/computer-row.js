"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerRow = void 0;
class ComputerRow {
    constructor(numberOfCharacters, theme) {
        this.colors = ['red', 'blue', 'green', 'yellow', 'pink', 'black', 'white', 'purple'];
        this.animals = ['tiger', 'elefant', 'gorilla', 'whale', 'giraff', 'zebra', 'bear', 'crocodile'];
        this.flags = ['sweden', 'japan', 'italy', 'norway', 'germany', 'china', 'usa', 'uk'];
        this.numberOfCharacters = numberOfCharacters;
        this.theme = theme;
    }
    generateRow() {
        const rowLength = this.numberOfCharacters;
        const newRow = [];
        if (this.theme === 'colors') {
            for (let i = 0; i < rowLength; i++) {
                const nextColorIndex = Math.floor(Math.random() * this.colors.length);
                const nextColor = this.colors[nextColorIndex];
                newRow.push(nextColor);
            }
        }
        if (this.theme === 'animals') {
            for (let i = 0; i < rowLength; i++) {
                const nextAnimalIndex = Math.floor(Math.random() * this.animals.length);
                const nextAnimal = this.animals[nextAnimalIndex];
                newRow.push(nextAnimal);
            }
        }
        else {
            for (let i = 0; i < rowLength; i++) {
                const nextFlagIndex = Math.floor(Math.random() * this.flags.length);
                const nextflag = this.flags[nextFlagIndex];
                newRow.push(nextflag);
            }
        }
        return newRow;
    }
}
exports.ComputerRow = ComputerRow;
//# sourceMappingURL=computer-row.js.map
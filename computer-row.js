"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerRow = void 0;
var ComputerRow = /** @class */ (function () {
    function ComputerRow(numberOfCharacters, theme) {
        this.colors = ['red', 'blue', 'green', 'yellow', 'pink', 'black', 'white', 'purple'];
        this.animals = ['tiger', 'elefant', 'gorilla', 'whale', 'giraff', 'zebra', 'bear', 'crocodile'];
        this.flags = ['sweden', 'japan', 'italy', 'norway', 'germany', 'china', 'usa', 'uk'];
        this.numberOfCharacters = numberOfCharacters;
        this.theme = theme;
    }
    ComputerRow.prototype.generateRow = function () {
        var rowLength = this.numberOfCharacters;
        var newRow = [];
        if (this.theme === 'colors') {
            for (var i = 0; i < rowLength; i++) {
                var nextColorIndex = Math.floor(Math.random() * this.colors.length);
                var nextColor = this.colors[nextColorIndex];
                newRow.push(nextColor);
            }
        }
        else if (this.theme === 'animals') {
            for (var i = 0; i < rowLength; i++) {
                var nextAnimalIndex = Math.floor(Math.random() * this.animals.length);
                var nextAnimal = this.animals[nextAnimalIndex];
                newRow.push(nextAnimal);
            }
        }
        else {
            for (var i = 0; i < rowLength; i++) {
                var nextFlagIndex = Math.floor(Math.random() * this.flags.length);
                var nextflag = this.flags[nextFlagIndex];
                newRow.push(nextflag);
            }
        }
        return newRow;
    };
    return ComputerRow;
}());
exports.ComputerRow = ComputerRow;

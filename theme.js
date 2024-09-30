"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Theme = void 0;
var Theme = /** @class */ (function () {
    function Theme(theme) {
        this.itemArray = [];
        this.setTheme(theme);
    }
    Theme.prototype.getTheme = function () {
        return this.theme;
    };
    Theme.prototype.setTheme = function (theme) {
        this.theme = theme;
        if (this.theme !== '') {
            this.setItemArray();
        }
    };
    Theme.prototype.getItemArray = function () {
        return this.itemArray;
    };
    Theme.prototype.setItemArray = function () {
        if (this.theme !== undefined) {
            if (this.theme === 'animals') {
                this.itemArray = ['tiger', 'elefant', 'gorilla', 'whale', 'giraff', 'zebra', 'bear', 'crocodile'];
            }
            if (this.theme === 'colors') {
                this.itemArray = ['red', 'blue', 'green', 'yellow', 'pink', 'black', 'white', 'purple'];
            }
            if (this.theme === 'flags') {
                this.itemArray = ['sweden', 'japan', 'italy', 'norway', 'kenya', 'china', 'brazil', 'uk'];
            }
            if (this.theme === 'letters') {
                this.itemArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
            }
        }
    };
    return Theme;
}());
exports.Theme = Theme;

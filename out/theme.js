"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Theme = void 0;
class Theme {
    constructor(theme) {
        this.itemArray = [];
        this.setTheme(theme);
    }
    getTheme() {
        return this.theme;
    }
    setTheme(theme) {
        this.theme = theme;
        if (this.theme !== '') {
            this.setItemArray();
        }
    }
    getItemArray() {
        return this.itemArray;
    }
    setItemArray() {
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
    }
}
exports.Theme = Theme;
//# sourceMappingURL=theme.js.map
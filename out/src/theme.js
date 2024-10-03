"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const item_1 = __importDefault(require("./item"));
/**
 * Class that represents the theme of the game.
 */
class Theme {
    constructor(theme) {
        this.theme = '';
        this.itemArray = [];
        this.availableThemes = ['flags', 'animals', 'colors', 'professions', 'movies'];
        this.setTheme(theme);
    }
    /**
    * Gets the current theme of the game which will be used when the items are created.
    *
    * @returns { string } - the theme of the items used in the game.
    */
    getTheme() {
        if (this.theme === undefined) {
            throw new Error('No theme has been set for the game');
        }
        return this.theme;
    }
    /**
     * Sets the theme for the game if the theme string is not empty and calls the setItemArray method.
     *
     * @param theme { string } - the theme of the items used in the game.
     */
    setTheme(theme) {
        this.theme = theme;
        if (this.theme !== undefined) {
            this.setThemeArray();
        }
        else {
            this.theme === '';
        }
    }
    /**
     * Gets all the themes available in the current version of the module.
     *
     * @returns { string [] } available themes - the themes available in the current version of the module.
     */
    getAvailableThemes() {
        return this.availableThemes;
    }
    /**
     * Gets the current array with items.
     *
     * @returns { object [] } - an array with items.
     */
    getItemArray() {
        try {
            return this.itemArray;
        }
        catch (error) {
            console.log(error);
        }
    }
    /**
     * Sets the theme and itemArray for other themes than the available themes included in the module. The user of the module must provide a theme name and an array that includes 8 items in order to create a themes of their choice.
     *
     * @param theme { string } - the name of the theme
     * @param themeArray { object [] } - the array with 8 items that should be included in the itemArray.
     */
    setOtherTheme(theme, themeArray) {
        if (themeArray.length !== 8) {
            throw Error('The themeArray must contain 8 items.');
        }
        if (theme === '') {
            throw Error('Pls provide a theme "name" for the game');
        }
        else {
            this.theme = theme;
            this.itemArray = themeArray;
        }
    }
    /**
     * Checks if this.theme is undefined and throws an error if it is. Sets the array with items that should be used in the game by checking what the current theme is.
     */
    setThemeArray() {
        if (this.theme !== undefined) {
            if (this.theme === 'flags') {
                this.themeArray = ['sweden', 'japan', 'italy', 'norway', 'kenya', 'china', 'brazil', 'uk'];
            }
            if (this.theme === 'animals') {
                this.themeArray = ['tiger', 'elefant', 'gorilla', 'whale', 'giraff', 'zebra', 'bear', 'crocodile'];
            }
            if (this.theme === 'colors') {
                this.themeArray = ['red', 'blue', 'green', 'yellow', 'pink', 'black', 'white', 'purple'];
            }
            if (this.theme === 'professions') {
                this.themeArray = ['police', 'doctor', 'pilot', 'developer', 'teacher', 'administrator', 'actor', 'chef'];
            }
            if (this.theme === 'movies') {
                this.themeArray = ['titanic', 'leon', 'matrix', 'pulp fiction', 'casablanca', 'lord of the rings', 'alive', 'the shawshank redemption'];
            }
        }
        else {
            throw new Error('There is no theme set for the game');
        }
        this.createItemArray();
    }
    /**
     * Creates an array with items based on the provided theme array.
     */
    createItemArray() {
        if (this.themeArray !== undefined) {
            for (let i = 0; i < this.themeArray.length; i++) {
                const item = new item_1.default(i + 1, this.themeArray[i]);
                this.itemArray.push(item);
            }
        }
        else {
            throw Error('There is no themeArray set for the game');
        }
    }
}
exports.default = Theme;
//# sourceMappingURL=theme.js.map
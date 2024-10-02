/**
 * Class that represents the theme of the game. 
 */
class Theme {
    private theme: string = ''
    private itemArray: string[] = []
    private availableThemes: string[] = ['flags', 'animals', 'colors', 'professions', 'movies']

    constructor(theme?: string) {
        this.setTheme(theme)
    }

    /**
    * Gets the current theme of the game which will be used when the items are created.
    * 
    * @returns { string } - the theme of the items used in the game.
    */
    public getTheme(): string {
        if (this.theme === '') {
            throw new Error('No theme has been set for the game')
        }
        return this.theme
    }

    /**
     * Sets the theme for the game if the theme string is not empty and calls the setItemArray method.
     * 
     * @param theme { string } - the theme of the items used in the game.
     */
    private setTheme(theme: string) : void {
        this.theme = theme
        if (this.theme !== '') {
            this.setItemArray()
        } else {
            this.theme === ''
        }
    }

    /**
     * Gets all the themes available in the current version of the module. 
     * 
     * @returns { string [] } available themes - the themes available in the current version of the module.
     */
    public getAvailableThemes(): string[] {
        return this.availableThemes
    }

    /**
     * Gets the current array with items.
     * 
     * @returns { string [] } - an array with items.
     */
    public getItemArray(): string[] {
        return this.itemArray
    }

    /**
     * Sets the theme and itemArray for other themes than the available themes included in the module. The user of the module must provide a theme name and an array that includes 8 items in order to create a themes of their choice.
     * 
     * @param theme { string } - the name of the theme
     * @param themeArray { string [] } - the array with 8 items that should be included in the itemArray.
     */
    public setOtherTheme(theme: string, themeArray: string[]) : void {
        if (themeArray.length !== 8) {
            throw Error('The themeArray must contain 8 items.')
        } 
        if (theme === undefined) {
            throw Error('Pls provide a theme for the game')
        } else {
            this.theme = theme
            this.itemArray = themeArray
        }
    }

    /**
     * Checks if this.theme is undefined and throws an error if it is. Sets the array with items that should be used in the game by checking what the current theme is.  
     */
    private setItemArray() : void {
        if (this.theme !== undefined) {
            if (this.theme === 'flags') {
                this.itemArray = ['sweden', 'japan', 'italy', 'norway', 'kenya', 'china', 'brazil', 'uk']
            }
            if (this.theme === 'animals') {
                this.itemArray = ['tiger', 'elefant', 'gorilla', 'whale', 'giraff', 'zebra', 'bear', 'crocodile']
            }
            if (this.theme === 'colors') {
                this.itemArray = ['red', 'blue', 'green', 'yellow', 'pink', 'black', 'white', 'purple']
            }
            if (this.theme === 'professions') {
                this.itemArray = ['police', 'doctor', 'pilot', 'developer', 'teacher', 'administrator', 'actor', 'chef']
            }
            if (this.theme === 'movies') {
                this.itemArray = ['titanic', 'leon', 'matrix', 'pulp fiction', 'casablanca', 'lord of the rings', 'alive', 'the shawshank redemption']
            }
        } else {
            throw new Error('There is no theme set for the game')
        }
    }
}

export default Theme
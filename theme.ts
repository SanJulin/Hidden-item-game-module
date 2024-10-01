/**
 * Class that represents the theme of the game. 
 */
class Theme {
    private theme: string
    private itemArray: string[] = []

    constructor(theme: string) {
        this.setTheme(theme)
    }

    /**
    * Gets the current theme of the game which will be used when the items are created.
    * 
    * @returns { string } - the theme of the items used in the game.
    */
    public getTheme(): string {
        return this.theme
    }

    /**
     * Sets the theme for the game if the theme string is not empty and calls the setItemArray method.
     * 
     * @param theme { string } - the theme of the items used in the game.
     */
    private setTheme(theme: string) {
        this.theme = theme
        if (this.theme !== '') {
            this.setItemArray()
        }
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
     * Checks if this.theme is undefined and throws an error if it is. Sets the array with items that should be used in the game by checking what the current theme is.  
     */
    private setItemArray() {
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
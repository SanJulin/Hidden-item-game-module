export class Theme {
    private theme : string 

    private itemArray : string[] = []

    constructor(theme : string) {
        this.setTheme(theme)
    }

    public getTheme(): string {
        return this.theme
    }

    private setTheme(theme: string) {
        this.theme = theme
        if (this.theme !== '') {
            this.setItemArray()
        }
    }

    public getItemArray() : string[] {
        return this.itemArray
    }

    private setItemArray(){
        if (this.theme !== undefined) {
            if (this.theme === 'animals') {
                this.itemArray = ['tiger', 'elefant', 'gorilla', 'whale', 'giraff', 'zebra', 'bear', 'crocodile']
            } 
            if (this.theme === 'colors') {
                this.itemArray = ['red', 'blue', 'green', 'yellow', 'pink', 'black', 'white', 'purple']
            }
            if (this.theme === 'flags') {
                this.itemArray = ['sweden', 'japan', 'italy', 'norway', 'kenya', 'china', 'brazil', 'uk']
            } 
            if (this.theme === 'letters') {
                this.itemArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
            }
        }
    }
}

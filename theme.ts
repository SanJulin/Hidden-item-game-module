export class Theme {
    private theme : string

    private colors = ['red', 'blue', 'green', 'yellow', 'pink', 'black', 'white', 'purple']

    private animals = ['tiger', 'elefant', 'gorilla', 'whale', 'giraff', 'zebra', 'bear', 'crocodile']

    private flags = ['sweden', 'japan', 'italy', 'norway', 'germany', 'china', 'usa', 'uk']

    private letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

    private arr : string[]

    constructor(theme : string) {
        this.setTheme(theme)
    }

    public getTheme(): string {
        return this.theme
    }

    private setTheme(theme: string) {
        this.theme = theme
        this.setArr()
    }

    public getArr() : string[] {
        return this.arr
    }

    private setArr(){
        if (this.theme === 'colors') {
            this.arr = this.colors
        }
        if (this.theme === 'animals') {
            this.arr = this.animals
        } 
        if (this.theme === 'flags') {
            this.arr = this.flags
        } 
        if (this.theme === 'letters') {
            this.arr = this.letters
        } else {
            console.log('no theme set')
        }
    }
}

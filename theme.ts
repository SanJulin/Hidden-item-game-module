export class Theme {
    private theme : string

    private colors = ['red', 'blue', 'green', 'yellow', 'pink', 'black', 'white', 'purple']

    private animals = ['tiger', 'elefant', 'gorilla', 'whale', 'giraff', 'zebra', 'bear', 'crocodile']

    private flags = ['sweden', 'japan', 'italy', 'norway', 'germany', 'china', 'usa', 'uk']

    private arr : string[]

    constructor(theme : string) {
        console.log(theme)
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
        } else {
            console.log('no theme set')
        }
    }
}

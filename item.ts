export class Item {
    private name : string 
    private id : number
    private color: string = ''

    constructor(name : string, id: number) {
        this.setName(name)
        this.setId(id)
    }

    public getName(): string {
        return this.name
    }

    private setName(name: string) {
        if (name === '') {
            throw new Error('The item must have a name') 
        } else {
            this.name = name
        }
    }

    public getId()  {
        return this.id
    }

    private setId(id : number){
        if (id === null) {
            throw new Error('The item must have an id') 
        } else {
            this.id = id
        }
    }

    public getColor()  {
        return this.color
    }

    public setColor(color: string){
        if (color === 'green' || color === 'yellow' || color === 'red' ) {

        } else {
            throw new Error('Only green, yellow and red are valid colors') 
        }
    }
    
}

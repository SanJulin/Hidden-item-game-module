/**
 * Class that represents one item in the game. This class is not yet connected to the other classes, but it will be used in the updated version of the module. The ComputerRow and Theme classes will use the Item class to create new Items and the Computer class will use the Item class to change the color of the item. 
 */
class Item {
    private name : string 
    private id : number
    private color: string = ''

    constructor(name : string, id: number) {
        this.setName(name)
        this.setId(id)
    }

    /**
     * Gets the name of the current item used in the game. 
     * 
     * @returns { string } - the name of the current item.
     */
    public getName(): string {
        return this.name
    }

    /**
     * Sets the name for the current item that will be used in the game.  
     * 
     * @param theme { string } - the name of the item.
     */
    private setName(name: string) : void {
        if (name === '') {
            throw new Error('The item must have a name') 
        } else {
            this.name = name
        }
    }

    /**
     * Gets the id of the current item used in the game. 
     * 
     * @returns { number } - the id of the current item.
     */
    public getId(): number  {
        return this.id
    }

    /**
     * Sets the id for the current item that will be used in the game.  
     * 
     * @param id { number } - the id of the item.
     */
    private setId(id : number) : void {
        if (id === null) {
            throw new Error('The item must have an id') 
        } else {
            this.id = id
        }
    }

    /**
     * Gets the color of the current item used in the game. 
     * 
     * @returns { string } - the color of the current item.
     */
    public getColor(): string {
        return this.color
    }

    /**
     * Sets the color for the current item that is used in the game, depending on if the player has put the item in the correct place (green), the wrong place (yellow) or if the item is not present in the row (red).
     * 
     * @param theme { string } - the name of the item.
     */
    public setColor(color: string) : void {
        if (color === 'green' || color === 'yellow' || color === 'red' ) {
            this.color = color
        } else {
            throw new Error('Only green, yellow and red are valid colors') 
        }
    }
}

export default Item
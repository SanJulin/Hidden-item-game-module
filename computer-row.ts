import { Theme } from "./theme"

export class ComputerRow {
    private numberOfItems: number
    private itemArray: string[]
    private computerRow: string [] = []

    constructor(numberOfItems: number = 5, itemArray: string []) {
        this.numberOfItems = numberOfItems
        this.itemArray = itemArray
    }

    public generateRow() {
        const rowLength = this.numberOfItems
        for (let i = 0; i < rowLength; i++) {
                const nextItemIndex = Math.floor(Math.random() * this.itemArray.length)
                const nextItem = this.itemArray[nextItemIndex]
                this.computerRow.push(nextItem)
            }
        return this.computerRow
    }

}
export class ComputerRow {


    public generateRow() {
        const rowLength = 5

        const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'black', 'white', 'purple']

        const newRow = []

        for (let i = 0; i < rowLength; i++) {
           const nextColorIndex = Math.floor(Math.random() * colors.length)
           const nextColor = colors[nextColorIndex]
           newRow.push(nextColor)
        }
        return newRow
    }

}
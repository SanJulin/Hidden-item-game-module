import { ComputerRow } from './computer-row';

export class Computer {
    private computerRow: string[] = []
    private numberOfItems: number
    private numberOfGuesses : number = 0
    private result : any

    constructor(numberOfItems = 5, themeArr: string[]) {
        this.numberOfItems = numberOfItems

        this.computerRow = this.createComputerRow(themeArr)
    }

    private createComputerRow(themeArr: string[]) {
        const computerRow = new ComputerRow(this.numberOfItems, themeArr)

        return computerRow.generateRow()
    }

    public checkAnswer(answer: string[]) {
        const answerFromPlayer = answer
        console.log(`Answer from player: ${answerFromPlayer}`)
        let answerWithFeedback = []
        let numberOfCorrectItems : number = 0

        for (let i = 0; i < answerFromPlayer.length; i++) {
            let itemObject: object = { item: String, color: String }
            if (answerFromPlayer[i] === this.computerRow[i]) {
                numberOfCorrectItems++
                itemObject = { item: answerFromPlayer[i], color: 'green' }
            } else if (this.computerRow.includes(answerFromPlayer[i])) {
                itemObject = { item: answerFromPlayer[i], color: 'yellow' }
            } else {
                itemObject = { item: answerFromPlayer[i], color: 'red' }
            }
            answerWithFeedback.push(itemObject)
        }
        if (numberOfCorrectItems >= this.numberOfItems) {
            return JSON.stringify('Congratulations! You made it!')
        } else {
            return JSON.stringify(answerWithFeedback)
        }
    }
}

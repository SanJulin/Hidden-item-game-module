import { ComputerRow } from './computer-row';

export class Computer {
    private computerRow: string[] = []
    private numberOfCharacters: number
    private theme: string

    constructor(numberOfCharacters = 5, theme = 'colors') {
        this.numberOfCharacters = numberOfCharacters
        this.theme = theme

        this.computerRow = this.createComputerRow()
    }

    private createComputerRow() {
        const computerRow = new ComputerRow(this.numberOfCharacters, this.theme)

            return computerRow.generateRow()
    }

    public checkAnswer(answer: string[]) {
        const answerFromPlayer = answer
        console.log(answerFromPlayer)
        let correctCharacters = 0

        for (let i = 0; i < answerFromPlayer.length; i++) {
            if (answerFromPlayer[i] === this.computerRow[i])
                correctCharacters ++
        }

        if (correctCharacters === this.numberOfCharacters) {
            return 'Congratulations! You won'
        }
        else {
            return `You had ${correctCharacters} correct answers.`
        }
    }

}
import { ComputerRow } from './computer-row';

export class Computer {
    private computerRow: string[] = []
    private numberOfColors: number = 5

    constructor(numberOfColors: number) {
        this.numberOfColors = numberOfColors

        this.computerRow = this.createComputerRow()
    }

    private createComputerRow() {
        const computerRow = new ComputerRow(this.numberOfColors)

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

        if (correctCharacters === this.numberOfColors) {
            return 'Congratulations! You won'
        }
        else {
            return `You had ${correctCharacters}.`
        }
    }

}
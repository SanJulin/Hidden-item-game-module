import { ComputerRow } from './computer-row';

export class Computer {
    private computerRow: string[] = []
    private numberOfCharacters: number
    private numberOfGuesses : number = 0

    constructor(numberOfCharacters = 5, themeArr: string[]) {
        this.numberOfCharacters = numberOfCharacters

        this.computerRow = this.createComputerRow(themeArr)
    }

    private createComputerRow(themeArr: string[]) {
        const computerRow = new ComputerRow(this.numberOfCharacters, themeArr)

        return computerRow.generateRow()
    }

    public checkAnswer(answer: string[]) {
        const answerFromPlayer = answer
        console.log(`Answer from player: ${answerFromPlayer}`)
        let correctCharacters = 0
        let result: any = []
        let answerWithFeedback = []

        for (let i = 0; i < answerFromPlayer.length; i++) {
            let signObject: object = { sign: String, color: String }
            if (answerFromPlayer[i] === this.computerRow[i]) {
                correctCharacters++
                signObject = { sign: answerFromPlayer[i], color: 'green' }
            } else if (this.computerRow.includes(answerFromPlayer[i])) {
                signObject = { sign: answerFromPlayer[i], color: 'yellow' }
            } else {
                signObject = { sign: answerFromPlayer[i], color: 'red' }
            }
            answerWithFeedback.push(signObject)
        }
        console.log(`AnswerWithFeedback: ${JSON.stringify(answerWithFeedback)}`)
        if (correctCharacters === this.numberOfCharacters) {
            result = 'Congratulations! You made it!'
        }
        else {
            result = answerWithFeedback
        }
        this.numberOfGuesses ++
        return JSON.stringify(result)
    }
}

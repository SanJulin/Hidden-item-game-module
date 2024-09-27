import { ComputerRow } from './computer-row';

export class Computer {
    private computerRow: string[] = []
    private numberOfCharacters: number

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
        let result: any
        let correctSigns = []
        for (let i = 0; i < answerFromPlayer.length; i++) {
            if (answerFromPlayer[i] === this.computerRow[i]) {
                correctCharacters++
                correctSigns.push(answerFromPlayer[i])
            }
        }

        if (correctCharacters === this.numberOfCharacters) {
            result = 'Congratulations! You won! All the signs are in the correct place'
        }
        else {
            result = this.calculateResult(answerFromPlayer)
        }
        return result

    }

    private calculateResult(answerFromPlayer: string[]) {
        let answerWithFeedback = []
        let checkedSigns = []
        for (let i = 0; i < answerFromPlayer.length; i++) {
            let signObject: object = { sign: String, comment: String }
            if (answerFromPlayer[i] === this.computerRow[i]) {
                const signObject = { sign: answerFromPlayer[i], comment: 'correct place' }
                answerWithFeedback.push(signObject)
                checkedSigns.push[i]
            } else {
                for (let j = 0; j < this.computerRow.length; j++) {
                    if (answerFromPlayer[i] !== this.computerRow[i] && answerFromPlayer[i] === this.computerRow[j] && !checkedSigns.includes(answerFromPlayer[i])) {
                        const signObject = { sign: answerFromPlayer[i], comment: 'available, but in the wrong place' }
                        answerWithFeedback.push(signObject)
                        checkedSigns.push[i]
                    } 
                    if (answerFromPlayer[i] !== this.computerRow[i] && answerFromPlayer[i] !== this.computerRow[j] && !checkedSigns.includes(answerFromPlayer[i])) {
                        const signObject = { sign: answerFromPlayer[i], comment: 'not available in the row' }
                        answerWithFeedback.push(signObject)
                        checkedSigns.push[i]
                    }
                }
            }
        }
        return answerWithFeedback
    }
}    

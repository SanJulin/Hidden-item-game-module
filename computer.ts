import { ComputerRow } from './computer-row';

export class Computer {
    private gameRow: string[] = []

    constructor() {

        this.createComputerRow()
    }

    createComputerRow() {
        const newComputerRow = new ComputerRow()
        this.gameRow = newComputerRow.generateRow()
    }

    checkAnswer(answer: string[]) {
        const answered = answer
        console.log(answered)

        if (answered === this.gameRow) {
            return 'You won'
        }
        else {
            return 'Wrong answer'
        }
    }

}
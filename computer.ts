import { ComputerRow } from "./computer-row";

export class Computer {

    constructor() {

    }

    public createComputerRow() {
        const newComputerRow = new ComputerRow()
        const row = newComputerRow.generateRow()
        return row
    }

}
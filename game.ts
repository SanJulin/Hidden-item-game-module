import { GameRow } from "./game-row";

export class Game {

    constructor() {

    }

    public createGameRow() {
        const newGameRow = new GameRow()
        const row = newGameRow.generateRow()
        console.log(row)
        return row
    }

}
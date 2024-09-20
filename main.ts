import { Test } from './test'
import { Game } from './game'

let message : string = "Hello Worlds"
console.log(message)

const newTest = new Test()
const result = newTest.test();
console.log(result);

const gameRound = new Game()
const newGameRow = gameRound.createGameRow()
console.log(newGameRow)


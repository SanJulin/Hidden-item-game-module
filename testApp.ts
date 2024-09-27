import { Computer } from './computer'
import { Theme } from './theme'

const theme = new Theme('letters')
const gameArr = theme.getArr()

const computer = new Computer(5, gameArr)

console.log(computer)


console.log(computer.checkAnswer(['f', 'c', 'a', 'a', 'b']))
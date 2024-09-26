import { Computer } from './computer'

const computer = new Computer(6, 'flags')

console.log(computer)


console.log(computer.checkAnswer(['sweden', 'japan', 'italy', 'norway', 'germany', 'china']))
import { Computer } from './computer'
import { Theme } from './theme'

const theme = new Theme('flags')
console.log(theme)

const computer = new Computer(6, theme.getTheme)

console.log(computer)


console.log(computer.checkAnswer(['sweden', 'japan', 'italy', 'norway', 'germany', 'china']))
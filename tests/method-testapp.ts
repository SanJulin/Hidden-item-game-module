import Computer from '../src/computer'
import ComputerRow from '../src/computer-row'
import Item from '../src/item'
import Theme from '../src/theme'

/**
 * Automatic testing of separate methods in the classes. 
 * Pls enter node method-testapp.js to run the below tests. More test documentation is available in the tests folder. 
 */

// Testing of the Computer class

console.log('\n\nTests for the Computer class:')

const computer = new Computer(3, ['police', 'doctor', 'pilot', 'developer', 'teacher', 'administrator', 'actor', 'chef'])
console.log('\nconst Computer = new Computer(3, [police', 'doctor', 'pilot', 'developer', 'teacher', 'administrator', 'actor', 'chef])')

computer.setNumberOfItems(4)
console.log('\ncomputer.setNumberOfItems(4)')

console.log(`\ncomputer.getNumberOfItems()  -    result: ${computer.getNumberOfItems()}`)

console.log(`\ncomputer.getComputerRow()  -    \nresult: ${computer.getComputerRow()}`)

const result = computer.checkAnswer(['police', 'pilot', 'developer'])

console.log(`\ncomputer.checkAnswer(['police', 'pilot', 'developer'])  -    \nresult: ${result}`)

const guesses = computer.getNumberOfGuesses()

console.log(`\ncomputer.getNumberOfGuesses()  -    \nresult: ${guesses}\n`)


// Testing of the ComputerRow class
console.log('\n\nTests for the ComputerRow class:')

const computerRow = new ComputerRow(5, ['police', 'doctor', 'pilot', 'developer', 'teacher', 'administrator', 'actor', 'chef'])
console.log('\nconst ComputerRow = new ComputerRow(5, [police', 'doctor', 'pilot', 'developer', 'teacher', 'administrator', 'actor', 'chef])')

console.log(`\ncomputerRow.getNumberOfItems()  -    result: ${computerRow.getNumberOfItems()}`)

console.log(`\ncomputerRow.generateRow()  -    result: ${computerRow.generateRow()}n`)


//Testing of the Theme class:

console.log('\n\nTests for the Theme class:')
console.log('\nconst theme = new Theme()')
const theme = new Theme()

console.log(`\ntheme.getAvailableThemes() -    result: ${theme.getAvailableThemes()}`)

theme.setTheme('animals')
console.log('\ntheme.setTheme(animals)')

console.log(`\ntheme.getTheme() -      result: ${theme.getTheme()}`)

console.log(`\ntheme.getItemArray() -      result: ${theme.getItemArray()}`)

theme.setOtherTheme('sports', ['diving', 'running', 'tennis playing', 'skiing', 'sailing', 'skating', 'fitness', 'dancing'])
console.log('\ntheme.setOtherTheme([diving', 'running', 'tennis playing', 'skiing', 'sailing', 'skating', 'fitness', 'dancing])')

console.log(`\ntheme.getItemArray() -      result: ${theme.getItemArray()}\n`)


//Testing of the Item class:
console.log('\n\nTests for the Item class:')
console.log('\nconst item = new Item(gorilla, 3)')
const item = new Item('gorilla', 3)

const itemName = item.getName()
console.log(`\nitem.getname -    result: ${itemName}`)

const itemId = item.getId()
console.log(`\nitem.getId -      result: ${itemId}`)

item.setColor('yellow')
console.log('\nitem.setColor(yellow)')

const itemColor = item.getColor()
console.log(`\nitem.getColor() -  result: ${itemColor}\n`)


import Computer from '../src/computer'
import ComputerRow from '../src/computer-row'
import Item from '../src/item'
import Theme from '../src/theme'

/**
 * Automatic testing of separate methods in the classes. 
 * Pls enter node method-testapp.js to run the below tests. More test documentation is available in the tests folder. 
 */


/**
 * Testing of the Computer class
 */
console.log('\n\nTests for the Computer class:')

// Creates an instance of the computer class with 3 as numberOfItems and an array with items belonging to the chosen theme
const computer = new Computer(4, 'professions')
console.log('\nconst Computer = new Computer(4, professions')

console.log('Computer object:')
console.log(computer)

// Send the players guess to the computer. The computer compares the row of items to the computerRow and sends back a result/feedback
const answerArray = [ new Item(1,'Actor'),new Item(2,'Chef'),new Item(3,'Developer'),new Item(4,'Doctor')]
const result = computer.getFeedBackFromComputer(answerArray)
console.log(`\ncomputer.getFeedBackFromComputer(answerArray)  -    \nresult: ${JSON.stringify(result)}`)

// Gets the number of guesses used so far in the game
const guesses = computer.getNumberOfGuesses()
console.log(`\ncomputer.getNumberOfGuesses()  -    \nresult: ${guesses}\n`)


/**
 * Testing of the ComputerRow class
 */
console.log('\n\nTests for the ComputerRow class:')

// Creates an instance of the ComputerRow class with 5 as numberOfItems and an array with items belonging to the chosen theme
const computerRow = new ComputerRow(4, 'professions')
console.log('\nconst ComputerRow = new ComputerRow(5, professions)')

// Shows the created computerRow object
console.log('computerRow object:')
console.log(computerRow)

// Gets the number of items used in the computerRow
console.log(`\ncomputerRow.getNumberOfItems()  -    result: ${computerRow.getNumberOfItems()}`)

// Gets the computer row with item names
console.log(`\ncomputerRow.getComputerRow()  -    result: ${JSON.stringify(computerRow.getComputerRow())}`)


/**
 * Testing of the Theme class:
 */
console.log('\n\nTests for the Theme class:')

// Creates an instance of the Theme class with no parameter since the user would like to se the available themes first
console.log('\nconst theme = new Theme()')
const theme = new Theme()

theme.getItemArray()

// Gets the available themes included in the model
console.log(`\ntheme.getAvailableThemes() -    result: ${theme.getAvailableThemes()}`)

// Sets the theme to animals
theme.setTheme('animals')
console.log('\ntheme.setTheme(animals)')

// Gets an array with names within the choosen theme
console.log(`\ntheme.getThemeArray() -      result: ${theme.getThemeArray()}`)

// Gets and array with 8 items belonging to the chosen array
const itemArray = theme.getItemArray()
console.log('\ntheme.getItemArray() -      result:') 
    for (let i = 0; i < itemArray.length; i++) {
        console.log(JSON.stringify(itemArray[i]))
    }

/**
 * Testing of the Item class
 */
console.log('\n\nTests for the Item class:')

// Creates an instance of the Item class with 3 as id and gorilla as name
console.log('\nconst item = new Item(gorilla, 3)')
const item = new Item(3, 'gorilla')

// Gets the item name
const itemName = item.getName()
console.log(`\nitem.getname -    result: ${itemName}`)

// Gets the item id
const itemId = item.getId()
console.log(`\nitem.getId -      result: ${itemId}`)

// Sets the color of the item to yellow
item.setColor('yellow')
console.log('\nitem.setColor(yellow)')

// Gets the item color
const itemColor = item.getColor()
console.log(`\nitem.getColor() -  result: ${itemColor}\n`)

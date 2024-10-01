import Computer from './computer'
import Theme from './theme'

const themes = ['flags', 'animals', 'colors', 'professions', 'movies']
const themeIndex = Math.floor(Math.random() * themes.length)
const newTheme = themes[themeIndex]
const theme = new Theme(newTheme)

const itemArray = theme.getItemArray()

console.log(`Item options: ${itemArray}`)

const numberOfItems = Math.ceil(Math.random() * 8)
const computer = new Computer(numberOfItems, itemArray)

console.log(computer)

let gameContinues: boolean = true

while (gameContinues === true) {
    let answer : string [] = []

    for (let i = 0; i < numberOfItems; i++) {
        const guessIndex = Math.floor(Math.random() * itemArray.length)
        const guess = itemArray[guessIndex]
        answer.push(guess)
    }
    
    console.log(`Answer from user: ${answer}`)
    let result = computer.checkAnswer(answer)
    let parsedResult = JSON.parse(result)

    const numberOfGuesses = computer.getNumberOfGuesses()
    let correct: number = 0
    for (let i = 0; i < parsedResult.length; i++) {
        if (parsedResult[i].color === 'green') {
            correct++
        }
    }

    if (parsedResult === 'Congratulations! You made it!') {
        console.log(`${parsedResult} Total number of guesses: ${numberOfGuesses}`)
        gameContinues = false
    } else {
        for (let i = 0; i < parsedResult.length; i++) {
            console.log(parsedResult[i])
        }
    }

    if (numberOfGuesses >= 40) {
        console.log(`You have unfortunately reached the maximum number of guesses. (${numberOfGuesses} guesses)`)
        gameContinues = false
    }
}
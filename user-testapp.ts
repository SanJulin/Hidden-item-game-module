import * as readlineSync from 'readline-sync';
import { Theme } from './theme';
import { Computer } from './computer';

const themeFromUser = readlineSync.question('Pls enter the theme you would like to play with? \n1. animals \n2. flags \n3. colors \n4. letters) \n')

let theme: string
if (themeFromUser === '1') {
    theme = 'animals'
}
if (themeFromUser === '2') {
    theme = 'flags'
}
if (themeFromUser === '3') {
    theme = 'colors'
}
if (themeFromUser === '4') {
    theme = 'letters'
}

const numberOfItems = readlineSync.question('How many items would you like to play with? (1-8) ');

const gameTheme = new Theme(theme)

const itemOptions = gameTheme.getItemArray()
console.log(itemOptions)

const computer = new Computer(numberOfItems, itemOptions)

console.log(computer);

let gameContinues: boolean = true

while (gameContinues === true) {
    console.log('Your options:')
    for (let i = 1; i <= itemOptions.length; i++) {
        const option = `${i}. ${itemOptions[i - 1]}`
        console.log(option)
    }

    const answerInNumbers = readlineSync.question(`Pls guess the content in the computer row. choose ${numberOfItems} numbers to represent your row. `)

    let answer: string[] = []

    for (let i = 0; i < answerInNumbers.length; i++) {
        if (answerInNumbers[i] === '1') {
            answer.push(itemOptions[0])
        } else if (answerInNumbers[i] === '2') {
            answer.push(itemOptions[1])
        } else if (answerInNumbers[i] === '3') {
            answer.push(itemOptions[2])
        } else if (answerInNumbers[i] === '4') {
            answer.push(itemOptions[3])
        } else if (answerInNumbers[i] === '5') {
            answer.push(itemOptions[4])
        } else if (answerInNumbers[i] === '6') {
            answer.push(itemOptions[5])
        } else if (answerInNumbers[i] === '7') {
            answer.push(itemOptions[6])
        } else if (answerInNumbers[i] === '8') {
            answer.push(itemOptions[7])
        }
    }
    console.log(`Answer from player: ${answer}`)
    let result = computer.checkAnswer(answer)
    let parsedResult = JSON.parse(result)

    let correct : number = 0
    for (let i = 0; i < parsedResult.length; i++) {
        if (parsedResult[i].color === 'green') {
            correct++
        } 
    }
    if (parsedResult === 'Congratulations! You made it!') {
        console.log(parsedResult)
        const numberOfGuesses = computer.getNumberOfGuesses
        console.log(numberOfGuesses)
        gameContinues = false
    } else {
        for (let i = 0; i < parsedResult.length; i++) {
            console.log(parsedResult[i])
    }        
    }
}
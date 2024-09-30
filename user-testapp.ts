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
console.log(gameTheme)

const itemOptions = gameTheme.getItemArray()
console.log(itemOptions)

const computer = new Computer(numberOfItems, itemOptions)


console.log(computer);
# L2 - school project in the course 1dv610

## Overview
This module can be used as part of a game that is similar to Mastermind, but in this game it will be possible to choose between different themes (flags, animals, colors, professions and movies). It is also possible to create a different theme by sending in a theme description together with an array of items. The developer using this module can choose between creating a user interface for a game played in the console or to create a web application.

## Game idea
The idea of the game is that the user should choose a theme that contains 8 items/bricks and decide how many items the computer should use in the row. The computer uses the 8 items to create a random row with as many items as the user wanted. It is then up to the user to guess the secret row, by entering a combination of items. If the item is in the correct place it will receive color green. If it is in the wrong place it will receive color yellow and color red will let the user know the the item is not represented in the row. When all items are in the correct place, the game will end and it will be possible to get info regarding how many guesses that the user used. 

## Console application

 The current version of the module can be used for a console application if the user of this module develops an user interface. It is enough to use the Computer, ComputerRow and the Theme classes, to develop a console application, but with some modifications of the module it would be possible to also include the Item class for a more flexible application.

## Web application
In order to build a web application it is recommended to add the Item class to be able to handle the items in an easier way. One solution would be to use the Item class to create bricks with images of the items. Images of flags are included in the package, but future versions will also includes images of other themes. It is also possible to add other images and themes to create an application with the theme that you prefer. One suggestion is to use the color of the item to create a border around the item/brick/image to show the play if the item is in the correct place.   

## Installation

## Programming language 
The module has been written in Typescript

## License
MIT License Copyright (c) 2024 SanJulin

## Public Methods


## Dependencies

## Version
1.0.0

## Releases
A new release is expected in October, 2024

## User contribution
A newer version of the module will soon be released. Pls contribute by letting me know if you discover any bugs or have ideas on how I can improve the module´s functionality. 

## Examples

## Testing

## Manual testing of the game
Enter node user-testapp.js to manually test the module by playing the game.

## Computer testing of the game
Enter node ai-testapp.js to see the computer AI playing the game.

## Testing of methods
Enter node method-testapp.js to see the test result of Class methods. 


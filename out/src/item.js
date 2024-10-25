"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Class that represents one item in the game.
 */
class Item {
    //private image: HTMLImageElement | undefined
    constructor(id, name /*, url?: string*/) {
        this.id = 0;
        this.name = '';
        this.color = '';
        this.id = id;
        this.name = name;
        //if (url) {
        //    this.setImage(url)
        //}
    }
    /**
     * Gets the name of the current item used in the game.
     *
     * @returns { string } - the name of the current item.
     */
    getName() {
        return this.name;
    }
    /**
     * Gets the id of the current item used in the game.
     *
     * @returns { number } - the id of the current item.
     */
    getId() {
        return this.id;
    }
    /**
     * Gets the color of the current item used in the game.
     *
     * @returns { string } - the color of the current item.
     */
    getColor() {
        return this.color;
    }
    /**
     * Sets the color for the current item that is used in the game, depending on if the player has put the item in the correct place (green), the wrong place (yellow) or if the item is not present in the row (red).
     *
     * @param theme { string } - the name of the item.
     */
    setColor(color) {
        if (color === 'green' || color === 'yellow' || color === 'red') {
            this.color = color;
        }
        else {
            throw new Error('Only green, yellow and red are valid colors');
        }
    }
}
exports.default = Item;
//# sourceMappingURL=item.js.map
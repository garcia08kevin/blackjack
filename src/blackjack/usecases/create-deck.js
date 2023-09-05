import _ from 'underscore';

/**
 * 
 * @returns {Array<String>}
 */

export const crearDeck = () => {
    let deck = [];
    const numbers = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'A', 'J', 'K', 'Q']
    const letters = ['C', 'D', 'H', 'S'];
    for (let number of numbers) {
        for (let letter of letters) {
            deck.push(`${number}${letter}`);
        }
    }
    return _.shuffle(deck)
};
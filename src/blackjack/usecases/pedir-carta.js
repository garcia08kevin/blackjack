/**
 * Devuelve la ultima carta de un arreglo de cartas
 * @param {Array<String>} deck  Ejemplo: ['JH,1H,2S,3F']
 * @returns {String} Ejemplo: 3F
 */

export const pedirCarta = (deck) => {
    if (deck.length === 0) throw ('Ya no hay cartas en la baraja');
    return deck.pop();
};
/**
 * Crea y anexa al html del jugador la carta resultante
 * @param {String} carta es la carta recorgida del deck ejemplo: 'AH'
 * @param {number} turno es la identificacion del jugador ejemplo: 1
 * @param {Array<number>} cartasJugadores arreglo que contiene los puntos de todos los jugadores ejemplo: [12 , 0]
 */

export const crearCarta = (carta, turno, cartasJugadores) => {
    const cartaImg = document.createElement('img');
    cartaImg.classList.add('carta');
    cartaImg.src = `assets/cartas/${carta}.png`;
    cartasJugadores[turno].append(cartaImg);
}
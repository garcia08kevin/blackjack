import { valorCarta } from "./index";

/**
 * Acumula los puntos de acuerdo jugador y los muestra en pantalla
 * @param {number} turno es la identificacion del jugador ejemplo: 1
 * @param {String} carta es la carta recorgida del deck ejemplo: 'AH'
 * @param {Array<number>} puntosJugadores arreglo que contiene los puntos de todos los jugadores ejemplo: [12 , 0]
 * @param {Array<number>} puntos elemento html para mostrar los puntos del jugador
 * @returns {number} regresa el puntaje actual del jugador
 */
export const acumularPuntos = (turno, carta, puntosJugadores, puntos) => {
    puntosJugadores[turno] += valorCarta(carta);;
    puntos[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}
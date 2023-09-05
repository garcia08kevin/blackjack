import {acumularPuntos, crearCarta, pedirCarta} from './index'

/**
 * Inteligencia artificial para crear jugada de acuerdo con los resultados del jugador
 * @param {number} puntosMinimos los puntos obtenidos por el usuario
 * @param {Array<number>} puntosJugadores arreglo que contiene los puntos de todos los jugadores ejemplo: [12 , 0]
 * @param {Array<number>} puntos elemento html para mostrar los puntos del jugador
 * @param {*} cartasJugadores html que contiene los cartas sacadas por todos los jugadores
 */

export const jugarComputadora = (puntosMinimos, puntosJugadores, puntos, cartasJugadores, deck) => {
    let puntosComputadora = 0
    do {
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos(puntosJugadores.length - 1, carta, puntosJugadores, puntos)
        crearCarta(carta, puntosJugadores.length - 1, cartasJugadores);
        if (puntosMinimos > 21) {
            break;
        }
    } while ((puntosJugadores[puntosJugadores.length - 1] < puntosMinimos) && (puntosMinimos <= 21))
    ganador(puntosMinimos, puntosComputadora, puntosJugadores);
}

const ganador = (puntosMinimos, puntosComputadora, puntosJugadores) => {
    setTimeout(() => {
        (puntosJugadores[puntosComputadora - 1] === puntosMinimos ? alert('Nadie gana') : puntosMinimos > 21 ? alert('Computadora gana') : alert('Jugador Gana'));
    }, 100);
}
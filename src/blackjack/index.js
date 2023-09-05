import {crearDeck, pedirCarta, crearCarta, jugarComputadora, acumularPuntos} from './usecases'

let deck = [], puntosJugadores = [];

const botonNuevo = document.querySelector('#btnNuevo'),
    botonPedir = document.querySelector('#btnPedir'),
    botonDetener = document.querySelector('#btnDetener'),
    puntos = document.querySelectorAll('small'),
    cartasJugadores = document.querySelectorAll('.divCartas');

const inicializarJuego = (numeroJugadores = 2) => {
    const cartas = document.querySelectorAll('.carta');
    botonPedir.disabled = false;
    botonDetener.disabled = false;
    for (let carta of cartas) {
        carta.remove();
    }
    puntosJugadores = [];
    for (let punto of puntos) {
        punto.innerText = 0;
    }
    deck = crearDeck();
    for (let i = 0; i < numeroJugadores; i++) {
        puntosJugadores.push(0);
    }
}

const detener = () => {
    botonPedir.disabled = true;
    botonDetener.disabled = true;
    jugarComputadora(puntosJugadores[0],puntosJugadores,puntos, cartasJugadores, deck);
}

//Eventos
botonPedir.addEventListener('click', () => {
    const carta = pedirCarta(deck);
    acumularPuntos(0, carta,puntosJugadores,puntos);
    crearCarta(carta, 0,cartasJugadores);
    if (puntosJugadores[0] >= 21) detener();

});

botonDetener.addEventListener('click', () => detener());
botonNuevo.addEventListener('click', () => inicializarJuego());
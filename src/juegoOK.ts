import {generarNumeroAleatorio, generarCarta, obtenerUrlCarta, sumarANuevaPuntuacion, puntuacionObtenida} from './motor';

import {mostrarImagen, mostrarPuntuacion, nosPlantamos, mostrarMensaje, apareceBoton, vamosAPorOtraPartida, gestionarPartida, resetPartida} from './ui';

const botonEmpezarPartida = document.getElementById("carta");

const empezarPartida = () => {
const numeroAleatorio = generarNumeroAleatorio();
const carta = generarCarta(numeroAleatorio);
const urlCarta = obtenerUrlCarta (carta);
mostrarImagen(urlCarta);
sumarANuevaPuntuacion(carta);
mostrarPuntuacion();
gestionarPartida();
apareceBoton();
};




if(
botonEmpezarPartida !== null &&
botonEmpezarPartida !== undefined &&
botonEmpezarPartida instanceof HTMLButtonElement
) {
botonEmpezarPartida.addEventListener("click",empezarPartida)
};

const botonMePlanto = document.getElementById("meplanto");
 
const seAcabaPartida = () => {
    nosPlantamos();
    const mensajeMeRindo = puntuacionObtenida();
    mostrarMensaje(mensajeMeRindo);
    apareceBoton();
  };


  

if(
    botonMePlanto !== null &&
    botonMePlanto !== undefined &&
    botonMePlanto instanceof HTMLButtonElement
    ) {
    botonMePlanto.addEventListener("click",seAcabaPartida);
    };


    const botonReiniciar = document.getElementById("reiniciar");

    const seReiniciaPartida = () => {
        vamosAPorOtraPartida();
        resetPartida();
    };

    


    if (
        botonReiniciar !== null &&
        botonReiniciar !== undefined &&
        botonReiniciar instanceof HTMLButtonElement
      ) {
        botonReiniciar.addEventListener("click", seReiniciaPartida);
      };
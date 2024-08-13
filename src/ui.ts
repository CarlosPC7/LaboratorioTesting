import {partida, totalPuntuacion} from './modelo';


export const mostrarImagen = (urlCarta: string) => {
    const elementoImagen = document.getElementById("imagenCarta");
            if (
                elementoImagen !== null &&
                elementoImagen !== undefined &&
                elementoImagen instanceof HTMLImageElement
            ) {
                elementoImagen.src = urlCarta;
            } else {
                console.error("Elemento img no encontrado en el DOM");
            }
};

export const mostrarPuntuacion = () => {
    const elementoPuntuacion = document.getElementById("puntuacion");
    if(elementoPuntuacion) {
        elementoPuntuacion.innerHTML = `${partida.guardarPuntuacion}`;
    }
};

export const deshabilitarBoton = () => {
    if (partida.guardarPuntuacion > totalPuntuacion) {
        const elementoButton = document.getElementById("carta");
        if (
            elementoButton!== null &&
            elementoButton!== undefined &&
            elementoButton &&
            elementoButton instanceof HTMLButtonElement
        ) {
            elementoButton.disabled = true;
        } else {
            console.error ("gestionarGameOver: No se ha encontrado el elemendo id con Button"
            );
        }
    }
};

export const nosPlantamos =() => {
    const elementoButton = document.getElementById("carta");
    if (
        elementoButton!== null &&
        elementoButton !== undefined &&
        elementoButton &&
        elementoButton instanceof HTMLButtonElement
    ) {
        elementoButton.disabled = true;
    } else {
        console.error (
        "gestionarGameOver: No se ha encontrado el elemendo id con Button"
    );
    }
};

export const mostrarMensaje = (mensaje: string) => {
    const elementoMensaje2 = document.getElementById("mensaje");
    if (
      elementoMensaje2 !== null &&
      elementoMensaje2 !== undefined &&
      elementoMensaje2 instanceof HTMLDivElement
    ) {
      elementoMensaje2.innerText = mensaje;
    }
  };

  export const apareceBoton = () => {
    const elementoButton3 = document.getElementById("reiniciar");
    if (
      elementoButton3 !== null &&
      elementoButton3 !== undefined &&
      elementoButton3 instanceof HTMLButtonElement
    ) {
      elementoButton3.disabled = false;
    } else {
      console.error("Error not found 404");
    }
  };

export const vamosAPorOtraPartida = () => {
    const elementoButton2 = document.getElementById("carta");
    if (
      elementoButton2 !== null &&
      elementoButton2 !== undefined &&
      elementoButton2 instanceof HTMLButtonElement
    ) {
      elementoButton2.disabled = false;
    } else {
      console.error("Error not found 404");
    }
  };

  export const gestionarPartida = () => {
    if (partida.guardarPuntuacion === 7.5) {
      mostrarMensaje("He ganado");
    }
  
    if (partida.guardarPuntuacion > totalPuntuacion) {
      mostrarMensaje("GAME OVER. HAS SUPERADO EL MÁXIMO DE PUNTUACIÓN!!");
      deshabilitarBoton();
    }
  };

export const resetPartida = () => {
    partida.guardarPuntuacion = 0;
    mostrarPuntuacion();
    mostrarImagen("");
    mostrarMensaje("");
  };
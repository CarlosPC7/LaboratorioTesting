import {partida, numeroCuatro, numeroCinco, numeroSeis, numeroSiete, numeroSieteYMedio} from './modelo';

export const generarNumeroAleatorio = () => Math.floor (Math.random()*10);

export const generarCarta = (numeroAleatorio: number) => {
    if (numeroAleatorio > 7) {
        return numeroAleatorio + 2;
    } else {
        return numeroAleatorio;
    }
};

export const obtenerUrlCarta = (carta: number) => {
    switch (carta) {
        case 1:
        return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg`;
        case 2:
        return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg`;
        case 3:
        return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg`;
        case 4:
        return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg`;
        case 5:
        return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg`;
        case 6:
        return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg`;
        case 7:
        return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg`;
        case 10:
        return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg`;
        case 11:
        return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg`;
        case 12:
        return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg`;
        default:
        return `https://github.com/Lemoncode/fotos-ejemplos/blob/main/cartas/back.jpg`;
        }
};

export const obtenerPuntosCartas = (carta: number) => {
  if (carta > 7) {
    return 0.5;
  }
  return carta;
};
export const sumarPuntacion = (puntos: number) => {
  return partida.guardarPuntuacion + puntos;
};
export const actualizarPuntos = (puntosActualizados: number) => {
  partida.guardarPuntuacion = puntosActualizados;
};
/*// las tres funciones de arriba, son equivalentes (pero separadas) a la función de sumarANuevaPuntuacion
export const sumarANuevaPuntuacion = (carta: number) => {
  if (carta > 7) {
    partida.guardarPuntuacion += 0.5;
  } else {
    partida.guardarPuntuacion += carta;
  }
};*/



export const puntuacionObtenida = (): string => {
    if (partida.guardarPuntuacion <= numeroCuatro) {
      return `Has sido muy conservador`;
    }
    if (partida.guardarPuntuacion === numeroCinco) {
      return `Te ha entrado el canguelo eh?`;
    }
    if (partida.guardarPuntuacion === numeroSeis) {
      return `Casi casi...`;
    }
    if (partida.guardarPuntuacion <= numeroSiete) {
      return `Casi casi...`;
    }
    if (partida.guardarPuntuacion === numeroSieteYMedio) {
      return `¡Lo has clavado! ¡Enhorabuena!`;
    }
  
    if (partida.guardarPuntuacion > 7.5) {
      return "Game over";
    }
  
    return "No deberías de llegar aquí";
  };
import {puntuacionObtenida, generarCarta, obtenerPuntosCartas} from './motor';
import { partida } from './modelo';
import {vi} from "vitest";

// APARTADO OBLIGATORIO

describe('puntuacionObtenida', () => {
    it("Debería de devolver Has sido muy conservador si el número es menor que 4", () =>{
        // Arrange
        const texto : string = "Has sido muy conservador";
        vi.spyOn(partida, "guardarPuntuacion", "get").mockReturnValue(4);

        // Act
        const resultado  = puntuacionObtenida();

        // Assert
        expect(resultado).toBe(texto);
    });

    it("Debería de devolver Te ha entrado el canguelo eh? si el número es igual a 5", () =>{
        // Arrange
        const texto : string = "Te ha entrado el canguelo eh?";
        vi.spyOn(partida, "guardarPuntuacion", "get").mockReturnValue(5);
        
        // Act
        const resultado2  = puntuacionObtenida();

        // Assert
        expect(resultado2).toBe(texto);
    });

    it("Debería de devolver casi casi... si el número es igual a 6", () =>{
        // Arrange
        const texto3 : string = "Casi casi...";
        vi.spyOn(partida, "guardarPuntuacion", "get").mockReturnValue(6);

        // Act
        const resultado3  = puntuacionObtenida();

        // Assert
        expect(resultado3).toBe(texto3);
    });

    it("Debería de devolver casi casi... si el número es igual o menor a 7", () =>{
        // Arrange
        const texto4 : string = "Casi casi...";
        vi.spyOn(partida, "guardarPuntuacion", "get").mockReturnValue(7);

        // Act
        const resultado4  = puntuacionObtenida();

        // Assert
        expect(resultado4).toBe(texto4);
    });

    it("Debería de devolver Lo has clavado, enhorabuena, si el número es igual 7,5", () =>{
        // Arrange
        const texto5 : string = "¡Lo has clavado! ¡Enhorabuena!";
        vi.spyOn(partida, "guardarPuntuacion", "get").mockReturnValue(7.5);

        // Act
        const resultado5  = puntuacionObtenida();

        // Assert
        expect(resultado5).toBe(texto5);
    });

    it("Debería de devolver Game over, si el número es mayor a 7,5", () =>{
        // Arrange
        const texto5 : string = "Game over";
        vi.spyOn(partida, "guardarPuntuacion", "get").mockReturnValue(8);

        // Act
        const resultado5  = puntuacionObtenida();

        // Assert
        expect(resultado5).toBe(texto5);
    });
});


// APARTADO OPCIONAL 1

describe('generarCarta', () => {
    it("Debería de devolver un número mayor que 7 si el número aleatorio es mayor que 7", () => {
        // Arrange
        const resultadoEsperado: number = 11;
        const numeroAleatorio: number = 9;

        // Act
        const resultado = generarCarta(numeroAleatorio);

        // Assert
        expect(resultado).toBe(resultadoEsperado);
    });

    it("Debería de devolver el mismo número si es menor o igual a 7", () => {
        // Arrange
        const numeroAleatorio: number = 6;
        const resultadoEsperado: number = 6;

        // Act
        const resultado = generarCarta(numeroAleatorio);

        // Assert
        expect(resultado).toBe(resultadoEsperado);
    });
});

// APARTADO OPCIONAL 2

describe('obtenerPuntosCartas', () => {
    it("Debería de devolver un 0.5 si el número carta es mayor que 7", () => {
        // Arrange
        const resultadoEsperado: number = 0.5;
        const carta: number = 9;

        // Act
        const resultado = obtenerPuntosCartas(carta);

        // Assert
        expect(resultado).toBe(resultadoEsperado);
    });

    it("Debería de devolver el mismo valor que la carta si su valor es menor que 7", () => {
        // Arrange
        const carta: number = 6;
        const resultadoEsperado: number = 6;

        // Act
        const resultado = obtenerPuntosCartas(carta);

        // Assert
        expect(resultado).toBe(resultadoEsperado);
    });
});
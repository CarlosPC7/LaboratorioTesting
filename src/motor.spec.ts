import {puntuacionObtenida} from './motor';
import { numeroCinco, partida } from './modelo';
import {vi} from "vitest";


describe('puntuacionObtenida', () => {
    it("Debería de devolver Has sido muy conservador si el número es menor que 4", () =>{
        // Arrange
        const texto : string = "Has sido muy conservador";
        const numeroPrueba: string = "3"
        const numeroEsteCaso: number = 4;

        // Act
        const resultado  = puntuacionObtenida(numeroPrueba, numeroEsteCaso);

        // Assert
        expect(resultado).toBe(texto);
    });

    it("Debería de devolver Te ha entrado el canguelo eh? si el número es igual a 5", () =>{
        // Arrange
        const texto : string = "Te ha entrado el canguelo eh?";
        const numeroPrueba: string = "5";
        vi.spyOn(partida, "numeroCinco", "get").mockReturnValue(5);
        
        // Act
        const resultado2  = puntuacionObtenida(numeroPrueba);

        // Assert
        expect(resultado2).toBe(texto);
    });

    it("Debería de devolver casi casi... si el número es igual a 6", () =>{
        // Arrange
        const texto3 : string = "Casi casi...";

        // Act
        const resultado3  = puntuacionObtenida(texto3);

        // Assert
        expect(resultado3).toBe("Casi casi...");
    });

    it("Debería de devolver casi casi... si el número es igual o menor a 7", () =>{
        // Arrange
        const texto4 : string = "Casi casi...";

        // Act
        const resultado4  = puntuacionObtenida(texto4);

        // Assert
        expect(resultado4).toBe("Casi casi...");
    });

    it("Debería de devolver Lo has clavado, enhorabuena, si el número es igual 7,5", () =>{
        // Arrange
        const texto5 : string = "¡Lo has clavado! ¡Enhorabuena!";

        // Act
        const resultado5  = puntuacionObtenida(texto5);

        // Assert
        expect(resultado5).toBe("¡Lo has clavado! ¡Enhorabuena!");
    });

    it("Debería de devolver Game over, si el número es mayor a 7,5", () =>{
        // Arrange
        const texto5 : string = "Game over";

        // Act
        const resultado5  = puntuacionObtenida(texto5);

        // Assert
        expect(resultado5).toBe("Game over");
    });
});


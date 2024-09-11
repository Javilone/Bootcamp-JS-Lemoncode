import { gameState, game } from "./_model";
import { getCard, getCardValue, obtenerEstadoPartida } from "./_motor";
import { vi } from "vitest";

describe("Pruebas laboratorio", () => {
  // 1 - Identifica las funciones y componentes que determinan si un jugador ha ganado la partida o no.
  it("Compruebo que se gana la partida cuando es 7.5", () => {
    // Arrange
    const expectedResult: gameState = "JUSTO_MAXIMA";
    vi.spyOn(game, "totalPoints", "get").mockReturnValue(7.5);

    // Act
    const result: gameState = obtenerEstadoPartida();

    // Assert
    expect(result).toBe(expectedResult);
  });

  /* 2 - Habrás tenido que generar una función que genere un número aleatorio entre 0 y 10 y en el caso de 
    que este número sea mayor que 7, sume 2 al resultado final. Se van a realizar sus pruebas unitarias correspondientes. */
  it("Pruebo que 'getCard', función que suma 2 si es > 7, actúa correctamente", () => {
    // Arrange
    const higherThanSeven: number = 8;

    // Act
    const testA: number = getCard(higherThanSeven);

    // Assert
    expect(testA).toBe(higherThanSeven + 2);
  });

  it("Pruebo que 'getCard' devuelva el mismo valor si el número es inferior a 7", () => {
    // Arrange
    const lowerThanSeven: number = 5;

    // Act
    const testB: number = getCard(lowerThanSeven);

    // Assert
    expect(testB).toBe(lowerThanSeven);
  });

  /* En el caso de que el jugador haya obtenido una carta, debemos de haber creado una función que devuelva 
  el valor de esa carta. Al igual que en el caso anterior, se van a realizar pruebas unitarias para comprobar que 
  la función se comporta como se espera en diferentes situaciones. */
  it("Pruebo 'getCardValue' con un valor de 7 o inferior. Debe devolver el mismo valor", () => {
    // Arrange
    const mockNumber: number = 7;

    // Act
    const test = getCardValue(mockNumber);

    // Assert
    expect(test).toBe(mockNumber);
  });

  it("Pruebo 'getCardValue' con un valor superior a 7. El valor devuelto debe ser 0.5", () => {
    // Arrange
    const mockNumber: number = 9;

    // Act
    const test = getCardValue(mockNumber);

    // Assert
    expect(test).toBe(0.5);
  });
});

import { points } from "./_model";
import { setPoints, getCard, getCardValue } from "./_motor";

describe("setPoints", () => {
  // 1 - Identifica las funciones y componentes que determinan si un jugador ha ganado la partida o no.
  it("Pruebo que setPoints funciona como es debido cuando es 7.5", () => {
    // Arrange
    const mockPoints: number = 7.5;
    const pointsToWin: number = 7.5;

    // Act
    setPoints(mockPoints);

    // Assert
    expect(points.totalPoints).toBe(pointsToWin);
  });

  /* 2 - Habrás tenido que generar una función que genere un número aleatorio entre 0 y 10 y en el caso de 
    que este número sea mayor que 7, sume 2 al resultado final. Se van a realizar sus pruebas unitarias correspondientes. */
  it("Pruebo que 'getCard', función que suma 2 si es > 7, actúa correctamente", () => {
    // Arrange
    const higherThanSeven: number = 8;

    // Act
    const test: number = getCard(higherThanSeven);

    // Assert
    expect(test).toBe(higherThanSeven + 2);
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

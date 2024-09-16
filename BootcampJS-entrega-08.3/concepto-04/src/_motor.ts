import { paintMainDiv, paintChildDiv } from "./_ui";

// Inicio del juego.
export const mainGame = () => {
  const mainDiv = paintMainDiv();
  const setGameGrid = 2;

  if (mainDiv instanceof HTMLDivElement && mainDiv !== null && mainDiv !== undefined) {
    paintChildDiv(mainDiv, setGameGrid);
  }
};

// export function shuffle<T>(arrayCards: T[]): T[] {
//   let index = arrayCards.length;

//   while (index != 0) {
//     let randomIndex = Math.floor(Math.random() * index);
//     index--;
//     [arrayCards[index], arrayCards[randomIndex]] = [arrayCards[randomIndex], arrayCards[index]];
//   }
//   return arrayCards;
// }

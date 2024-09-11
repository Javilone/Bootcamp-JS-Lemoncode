import "./style.css";

// Prueba de concepto 1 - barajar las cartas.

function shuffle<T>(arrayCards: T[]): T[] {
  let index = arrayCards.length;

  while (index != 0) {
    let randomIndex = Math.floor(Math.random() * index);
    index--;
    [arrayCards[index], arrayCards[randomIndex]] = [arrayCards[randomIndex], arrayCards[index]];
  }
  return arrayCards;
}

let arrayCards: number[] = [1, 2, 3, 4, 5, 6];
let arrayBooleans: boolean[] = [false, false, false, true, true, true];

shuffle(arrayCards);
console.log(arrayCards);

shuffle(arrayBooleans);
console.log(arrayBooleans);

export function shuffle<T>(arrayCards: T[]): T[] {
  let index = arrayCards.length;

  while (index != 0) {
    let randomIndex = Math.floor(Math.random() * index);
    index--;
    [arrayCards[index], arrayCards[randomIndex]] = [arrayCards[randomIndex], arrayCards[index]];
  }
  return arrayCards;
}

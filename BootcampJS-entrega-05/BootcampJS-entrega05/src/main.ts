import "./style.css";

// VARIABLES DE ALMACENAMIENTO Y AUDIO
// const soundShuffling: HTMLAudioElement = new Audio("/src/sounds/shuffling.mp3");
const flipCard: HTMLAudioElement = new Audio("/src/sounds/flipcard.mp3");
// const gameOff = new Audio("/src/sounds/gameoff.mp3");
// const music = new Audio("/src/sounds/gameMusic.mp3");
// const positiveA = new Audio("/src/sounds/positiveA.mp3");
// const positiveB = new Audio("/src/sounds/positiveB.mp3");
// const positiveC = new Audio("/src/sounds/positiveC.mp3");

// ELEMENTOS DEL DOM
const giveMeButton = document.getElementById("giveMe-button");
const playBoard = document.getElementById("play-board");

// FUNCIONES

// playACard inicia la partida jugando una carta.
function playACard() {
  const randomNumber = getRandomNumber();
  const card: number = getCardNumber(randomNumber);
  const urlCard = getUrlCard(card);
  printUrlCard(urlCard);

  console.log(randomNumber);
  console.log(card);
}

// getRandomNumber genera un número aleatorio entre 1 y 10
// (la cantidad de cartas en la baraja).
const getRandomNumber = () => {
  return Math.floor(Math.random() * 10 + 1);
};

// getCardNumber actúa sobre las cartas > 7 para obtener
// de este modo la sota, el caballo y el rey.
const getCardNumber = (randomNumber: number) => {
  if (randomNumber > 7) {
    return randomNumber + 2;
  }

  return randomNumber;
};

const getUrlCard = (cardNumber: number) => {
  switch (cardNumber) {
    case 1:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
    case 2:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
    case 3:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
    case 4:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
    case 5:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
    case 6:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
    case 7:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
    case 10:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
    case 11:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
    case 12:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
    default:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  }
};

const printUrlCard = (urlCard: string) => {
  const imageElement = document.getElementById("card");

  if (
    imageElement !== null &&
    imageElement !== undefined &&
    imageElement instanceof HTMLImageElement
  ) {
    imageElement.src = urlCard;
    imageElement.classList.add("played-card");
    if (playBoard instanceof HTMLDivElement) {
      playBoard.appendChild(imageElement);
      flipCard.play();
    }
  }
};

// ASIGNACIÓN DE FUNCIONES A LOS ELEMENTOS
if (
  giveMeButton !== null &&
  giveMeButton !== undefined &&
  giveMeButton instanceof HTMLButtonElement
) {
  giveMeButton.addEventListener("click", playACard);
}

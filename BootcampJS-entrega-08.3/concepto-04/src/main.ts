import "./style.css";

const animalDiv = document.getElementById("animalDiv");
const crocodileCard: HTMLImageElement = document.getElementById("crocodile") as HTMLImageElement;

function flipCard(card: HTMLImageElement, animalId: string) {
  card.src = `./src/${animalId}.svg`;
  card.classList.add("cardStyle");
}

animalDiv?.addEventListener("click", () => flipCard(crocodileCard, "crocodile"));

import "./style.css";

// Prueba de concepto 2 - Mostrar imagen y volver la carta.
const crocodileCard: HTMLImageElement = document.getElementById("crocodile") as HTMLImageElement;
const animalDiv = document.getElementById("animalDiv");

function flipCard(card: HTMLImageElement, animalId: string) {
  card.src = `./src/${animalId}.svg`;
  card.classList.add("cardStyle");
}

// Preguntar a Antonio si podría usar el optional chaining que vi en el máster. Si no, cambiarlo de vuelta al !== undefinided, etc.
animalDiv?.addEventListener("click", () => flipCard(crocodileCard, "crocodile"));

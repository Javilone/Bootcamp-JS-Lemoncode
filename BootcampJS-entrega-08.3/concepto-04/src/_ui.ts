// Inicio del juego.
export const mainGame = () => {
  const mainDiv = document.getElementById("mainDiv") as HTMLDivElement;

  if (mainDiv && mainDiv instanceof HTMLDivElement) {
    paintMainDiv(mainDiv);
    setGameGrid(mainDiv);
  }
};

// Pinto el contenedor principal.
const paintMainDiv = (mainDiv: HTMLDivElement) => {
  mainDiv.classList.add("mainDiv");
};

// Establezco la cuadrícula.
const setGameGrid = (mainDiv: HTMLDivElement) => {
  for (let i = 0; i < 2; i++) {
    paintChildDiv(mainDiv);
  }
};

// Pinta los contenedores hijos.
const paintChildDiv = (mainDiv: HTMLDivElement) => {
  const childDiv = document.createElement("div");
  childDiv.classList.add("childDiv");
  mainDiv?.appendChild(childDiv);
  childDiv.addEventListener("click", () => appendImmage(childDiv));
};

// Agrego una imagen de animal si no la tiene.
const appendImmage = (childDiv: HTMLDivElement) => {
  if (childDiv.querySelector("img")) {
    return;
  }

  const image = document.createElement("img");
  image.classList.add("cardStyle");
  image.src = getRandomAnimal();

  childDiv.appendChild(image);
};

// Obtengo cual será la imagen aleatoria.
const getRandomAnimal = () => {
  // código provisional para este concepto
  const animalArray: string[] = ["1", "2"];
  let randomIndex = Math.floor(Math.random() * animalArray.length);
  const randomAnimal = `src/images/${animalArray[randomIndex]}.svg`;
  return randomAnimal;
};

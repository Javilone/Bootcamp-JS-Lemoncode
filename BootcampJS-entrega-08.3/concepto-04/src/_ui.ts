// Pinto el contenedor principal.
export const paintMainDiv = () => {
  const mainDiv = document.getElementById("mainDiv");

  if (mainDiv !== null && mainDiv !== undefined) {
    mainDiv.classList.add("mainDiv");
  }
  return mainDiv;
};

// Pinta los contenedores hijos con escuchador.
export const paintChildDiv = (mainDiv: HTMLDivElement, value: number) => {
  for (let i = 0; i < value; i++) {
    const childDiv = document.createElement("div");

    childDiv.classList.add("childDiv");
    childDiv.addEventListener("click", () => appendImage(childDiv));
    mainDiv.appendChild(childDiv);
  }
};

// Agrego una imagen de animal si no la tiene.
const appendImage = (childDiv: HTMLDivElement) => {
  const image: HTMLImageElement = document.createElement("img");
  const randomAnimal = getRandomAnimal();

  if (childDiv.querySelector("img")) {
    return console.log("Ya tiene imagen");
  }

  image.classList.add("cardStyle");
  image.src = randomAnimal;
  childDiv.appendChild(image);
};

// Obtengo cual será la imagen aleatoria. ::: CÓDIGO PROVISIONAL PARA ESTE CONCEPTO :::
export const getRandomAnimal = () => {
  const animalArray: string[] = ["1", "2"];
  let randomIndex = Math.floor(Math.random() * animalArray.length);
  const randomAnimal = `src/images/${animalArray[randomIndex]}.svg`;

  return randomAnimal;
};

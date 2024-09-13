export const paintMainDiv = () => {
  const mainDiv = document.getElementById("mainDiv");

  if (mainDiv && mainDiv instanceof HTMLDivElement) {
    paintChildDiv(mainDiv);
    // paintChildDiv(mainDiv);
  }
};

const paintChildDiv = (mainDiv: HTMLDivElement) => {
  const childDiv = document.createElement("div");
  childDiv.classList.add("childDiv");
  mainDiv?.appendChild(childDiv);
  childDiv.addEventListener("click", () => childImage(childDiv));
};

const childImage = (childDiv: HTMLDivElement) => {
  if (childDiv.querySelector("img")) {
    return;
  }

  const image = document.createElement("img");
  image.classList.add("cardStyle");
  image.src = "/src/crocodile.svg";

  childDiv.appendChild(image);
};

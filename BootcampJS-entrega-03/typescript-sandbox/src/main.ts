import "./style.css";

interface GrupoMusical {
  nombreGrupo: string;
  cantante: string;
  compositor: string;
  añoFundacion: number;
  activo: boolean;
  genero: string;
}

const genero = {
  popRock: "🎶 Pop Rock",
  rock: "🎸 Rock",
  hardRock: "🤘 Hard Rock",
  clasica: "🎼 Clásica",
};

let grupoBeatles: GrupoMusical = {
  nombreGrupo: "The Beatles",
  cantante: "John Lennon, Paul McCartney",
  compositor: "John Lennon, Paul McCartney",
  añoFundacion: 1960,
  activo: true,
  genero: genero.popRock,
};

let grupoQueen: GrupoMusical = {
  nombreGrupo: "Queen",
  cantante: "Freddie Mercury",
  compositor: "Freddie Mercury",
  añoFundacion: 1970,
  activo: false,
  genero: genero.rock,
};

let grupoACDC: GrupoMusical = {
  nombreGrupo: "AC DC",
  cantante: "Malcolm y Angus Young",
  compositor: "Brian Johnson",
  añoFundacion: 1973,
  activo: true,
  genero: genero.hardRock,
};

let grupoBeethoven: GrupoMusical = {
  nombreGrupo: "Ludwig van Beethoven",
  cantante: "--",
  compositor: "Ludwig van Beethoven",
  añoFundacion: 1770,
  activo: false,
  genero: genero.clasica,
};

let grupoRolling: GrupoMusical = {
  nombreGrupo: "The Rolling Stones",
  cantante: "Mick Jagger",
  compositor: "Mick Jagger, Keith Richards",
  añoFundacion: 1962,
  activo: true,
  genero: genero.rock,
};

// The Beatles
console.log(
  `%cGrupo: ${grupoBeatles.nombreGrupo}`,
  "font-size: 18px; font-weight: bold; color: white; background-color: green;"
);
console.log(
  `Año: ${grupoBeatles.añoFundacion}. Activo: ${grupoBeatles.activo}. Género: ${genero.popRock}.`
);

// Queen
console.log(
  `%cGrupo: ${grupoQueen.nombreGrupo}.`,
  "font-size: 18px; font-weight: bold; color: white; background-color: green;"
);
console.log(
  `Año: ${grupoQueen.añoFundacion}.Activo: ${grupoQueen.activo}.Género: ${genero.rock}.`
);

// AC DC
console.log(
  `%cGrupo: ${grupoACDC.nombreGrupo}.`,
  "font-size: 18px; font-weight: bold; color: white; background-color: green;"
);
console.log(
  `Año: ${grupoACDC.añoFundacion}. Activo: ${grupoACDC.activo}. Género: ${genero.hardRock}.`
);

// Beethoven
console.log(
  `%cGrupo: ${grupoBeethoven.nombreGrupo}.`,
  "font-size: 18px; font-weight: bold; color: white; background-color: green;"
);
console.log(
  `Año: ${grupoBeethoven.añoFundacion}. Activo: ${grupoBeethoven.activo}. Género: ${genero.clasica}.`
);

// Rolling Stones
console.log(
  `%cGrupo: ${grupoRolling.nombreGrupo}.`,
  "font-size: 18px; font-weight: bold; color: white; background-color: green;"
);
console.log(
  `Año: ${grupoRolling.añoFundacion}. Activo: ${grupoRolling.activo}. Género: ${genero.rock}.`
);

/* 
Queremos mostrar información acerca de grupos musicales.

Si estás trabajando con TypeScript habría que crear un interfaz para representar a un grupo musical.

La información de los grupos que queremos mostrar:

Nombre del grupo / cantante / compositor (string).
Año de fundación: cuando se formó el grupo (numero).
Si está en activo (booleano).
Género musical (string).
Cada género queremos tenerlo en una variable.

Los grupos que vamos a mostrar:

The Beatles / 1960 / Activo: true / 🎵 Pop Rock
Queen / 1970 / Activo: false / 🎸 Rock
AC DC / 1973 / Activo: true / 🤘 Hard Rock
Ludwig van Beethoven / 1770 / Activo: false / 🎼 Clásica
The Rolling Stones / 1962 / Activo: true / 🎸 Rock
Queremos mostrar cada grupo por consola, el nombre del grupo de música queremos ponerlo en negrita, con fuente más grande y color de fondo verde.
*/

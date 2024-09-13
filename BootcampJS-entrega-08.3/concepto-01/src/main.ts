import "./style.css";
import { arrayCards } from "./_model";
import { shuffle } from "./_motor";

// Prueba de concepto 1 - barajar las cartas.
shuffle(arrayCards);
console.log(arrayCards);

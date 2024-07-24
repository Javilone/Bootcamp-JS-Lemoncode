import "./style.css";

const bebidas = 18;
const ticket = 120;
const comensales = 6;

const totalCuenta = ticket - bebidas;

console.log("Total de la cuenta invitando a las bebidas: " + totalCuenta + "€");
console.log(
  "Entre los 6 amigos nos sale a pagar: " + totalCuenta / comensales + "€"
);

/* Mostras resultados en HTML */

/* Cena de cumpleaños entre amigos

Tienes un grupo de 6 amigos y quieres invitarlos a cenar por tu cumpleaños.

Solo puedes permitirte invitar a las bebidas, ya que estás un poco ajustado de dinero.
Tienes un ticket de cena que cuesta 120 € y en el que ya se incluyen las bebidas por un valor de 18 €.
Calcula cuánto tendría que pagar cada comensal para dividir los costos de manera equitativa.
Utiliza JavaScript para hacer el cálculo y mostrar el resultado por consola. */

// Definiciones de datos y estructuras que hacen falta para almacenar el estado de la partida

// VARIABLES DE ALMACENAMIENTO
export const game: Game = {
  totalPoints: 0,
  state: "TE_HAS_PASADO",
};

export type gameState = "POR_DEBAJO_MAXIMO" | "JUSTO_MAXIMA" | "TE_HAS_PASADO";

interface Game {
  totalPoints: number;
  state: gameState;
}

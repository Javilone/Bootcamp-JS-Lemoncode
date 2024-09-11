// Definiciones de datos y estructuras que hacen falta para almacenar el estado de la partida

// VARIABLES DE ALMACENAMIENTO
export const partida: Partida = {
  totalPoints: 0,
  estado: "TE_HAS_PASADO",
};

export type EstadoPartida =
  | "POR_DEBAJO_MAXIMO"
  | "JUSTO_MAXIMA"
  | "TE_HAS_PASADO";

interface Partida {
  totalPoints: number;
  estado: EstadoPartida;
}

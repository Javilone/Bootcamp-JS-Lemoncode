import { Pacientes } from "./model";

// a) Queremos extraer la lista de paciente que están asignados a la especialidad de Pediatría

export const asignadosPediatria = (pacientes: Pacientes[]): Pacientes[] => {
  let pacientesAsignados: Pacientes[] = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      pacientesAsignados = [...pacientesAsignados, pacientes[i]];
    }
  }
  return pacientesAsignados;
};

// b) Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.
export const asignadosPediatriaMenorDiezAños = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let pediatriaMenorDiezAños: Pacientes[] = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad <= 10) {
      pediatriaMenorDiezAños = [...pediatriaMenorDiezAños, pacientes[i]];
    }
  }
  return pediatriaMenorDiezAños;
};

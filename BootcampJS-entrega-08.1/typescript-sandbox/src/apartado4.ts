/* Queremos saber si podemos mandar al Pediatra a casa (si no tiene pacientes asignados), 
comprobar si en la lista hay algún paciente asignado a pediatría */

import { Pacientes } from "./model";

export const hayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  let hayPaciente: boolean = false;
  let totalPacientes: Pacientes[] = [];

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      totalPacientes = [...totalPacientes, pacientes[i]];
      hayPaciente = true;
      break;
    }
  }

  return hayPaciente;
};

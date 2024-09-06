// Queremos saber si podemos mandar al Pediatra a casa (si no tiene pacientes asignados), comprobar si en la lista hay algún paciente asignado a pediatría

import { Pacientes } from "./model";

export const hayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  const hayPacientes: boolean = pacientes.some((paciente) => {
    return paciente.especialidad === "Pediatra";
  });
  return hayPacientes;
};

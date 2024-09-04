/* Queremos calcular el número total de pacientes que están asignados a la especialidad de Medico de familia, 
y los que están asignados a Pediatría y a Cardiología*/

import { Pacientes } from "./model";

export interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

export const pacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  let totalPacientes: NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: 0,
    pediatria: 0,
    cardiologia: 0,
  };

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Cardiólogo") {
      totalPacientes.cardiologia++;
    } else if (pacientes[i].especialidad === "Pediatra") {
      totalPacientes.pediatria++;
    } else totalPacientes.medicoDeFamilia++;
  }

  return totalPacientes;
};

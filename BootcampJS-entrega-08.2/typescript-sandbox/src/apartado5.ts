/* Queremos calcular el número total de pacientes que están asignados a la especialidad de Medico de familia, 
y lo que están asignados a Pediatría y a Cardiología. */

import { Pacientes } from "./model";

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

export const pacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad =>
  pacientes.reduce(
    (totalPacientes, paciente) => {
      if (paciente.especialidad === "Pediatra") {
        totalPacientes.pediatria++;
      } else if (paciente.especialidad === "Medico de familia") {
        totalPacientes.medicoDeFamilia++;
      } else if (paciente.especialidad === "Cardiólogo") {
        totalPacientes.cardiologia++;
      }
      return totalPacientes;
    },
    { medicoDeFamilia: 0, pediatria: 0, cardiologia: 0 }
  );

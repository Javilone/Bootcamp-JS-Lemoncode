/* El pediatra no puede atender hoy a los pacientes, queremos reasignar los pacientes asignados 
a la especialidad de pediatría a la de medico de familia.*/

import { Pacientes } from "./model";

export const reasignarAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let reasignados: Pacientes[] = [];

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      const pacienteCopia = { ...pacientes[i] };
      pacienteCopia.especialidad = "Medico de familia";
      reasignados = [...reasignados, pacienteCopia];
    }
  }
  return reasignados;
};

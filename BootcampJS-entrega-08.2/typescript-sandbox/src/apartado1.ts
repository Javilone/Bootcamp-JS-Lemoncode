import { Pacientes } from "./model";

// a) Queremos extraer la lista de paciente que están asignados a la especialidad de Pediatría.
export const pacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  return pacientes.filter((paciente) => {
    return paciente.especialidad === "Pediatra";
  });
};

// b) Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.
export const asignadosPediatriaMenorDiezAños = (
  pacientes: Pacientes[]
): Pacientes[] => {
  return pacientes.filter((paciente) => {
    return paciente.especialidad === "Pediatra" && paciente.edad < 10;
  });
};

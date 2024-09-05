import { Pacientes } from "./model";

// El pediatra no puede atender hoy a los pacientes, queremos reasignar los pacientes asignados a la especialidad de pediatría a la de medico de familia.
export const reasignarMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] => {
  return pacientes
    .filter((paciente) => paciente.especialidad === "Pediatra")
    .map((paciente) => ({
      ...paciente,
      especialidad: "Medico de familia",
    }));
};

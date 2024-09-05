import { Pacientes } from "./model";

/* Queremos activar el protocolo de urgencia si cualquier de los pacientes tiene un ritmo cardíaco superior 
a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados.
Es decir, crear una función que devuelve true/false dependiendo si se da la condición */

export const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  const activarProtocolo: boolean = pacientes.some((paciente) => {
    return paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39;
  });

  return activarProtocolo;
};

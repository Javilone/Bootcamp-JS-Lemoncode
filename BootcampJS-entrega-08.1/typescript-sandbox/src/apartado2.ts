/* Queremos activar el protocolo de urgencia si cualquiera de los pacientes tiene un ritmo cardíaco 
superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados.
Es decir, crear una función que devuelve true/false dependiendo si se da la condición*/

import { Pacientes } from "./model";

export const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo: boolean = false;

  for (let i = 0; i < pacientes.length; i++) {
    if (
      pacientes[i].frecuenciaCardiaca > 100 &&
      pacientes[i].temperatura > 39
    ) {
      activarProctolo = true;
    }
  }

  return activarProctolo;
};

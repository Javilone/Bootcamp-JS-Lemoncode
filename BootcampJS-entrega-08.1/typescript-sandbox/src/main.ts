import "./style.css";

import { pacientes } from "./model";
import {
  asignadosPediatria,
  asignadosPediatriaMenorDiezAños,
} from "./apartado1";
import { activarProtocoloUrgencia } from "./apartado2";
import { reasignarAMedicoFamilia } from "./apartado3";
import { hayPacientesDePediatria } from "./apartado4";
import { pacientesPorEspecialidad } from "./apartado5";

const apartado1A = asignadosPediatria(pacientes);
const apartado1B = asignadosPediatriaMenorDiezAños(pacientes);
const apartado2 = activarProtocoloUrgencia(pacientes);
const apartado3 = reasignarAMedicoFamilia(pacientes);
const apartado4 = hayPacientesDePediatria(pacientes);
const apartado5 = pacientesPorEspecialidad(pacientes);

console.log("APARTADO 1A: Pacientes de pediatría:", apartado1A);
console.log(
  "APARTADO 1B: Pacientes de pediatría menores de 10 años:",
  apartado1B
);
console.log("APARTADO 2: ¿Activar protocolo de urgencia?", apartado2);
console.log("APARTADO 3: Pacientes reasignados", apartado3);
console.log("APARTADO 4: ¿Hay pacientes de pediatría?", apartado4);
console.log("APARTADO 5: Pacientes por especialidad:", apartado5);

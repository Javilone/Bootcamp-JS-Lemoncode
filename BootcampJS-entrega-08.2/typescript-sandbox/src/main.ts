import "./style.css";
import { pacientes } from "./model";
import {
  asignadosPediatriaMenorDiezAños,
  pacientesAsignadosAPediatria,
} from "./apartado1";
import { activarProtocoloUrgencia } from "./apartado2";
import { reasignarMedicoFamilia } from "./apartado3";
import { hayPacientesDePediatria } from "./apartado4";
import { pacientesPorEspecialidad } from "./apartado5";

const apartado1A = pacientesAsignadosAPediatria(pacientes);
const apartado1B = asignadosPediatriaMenorDiezAños(pacientes);
const apartado2 = activarProtocoloUrgencia(pacientes);
const apartado3 = reasignarMedicoFamilia(pacientes);
const apartado4 = hayPacientesDePediatria(pacientes);
const apartado5 = pacientesPorEspecialidad(pacientes);

console.log("APARTADO 1A: Pacientes asignados a pediatría.", apartado1A);
console.log(
  "APARTADO 1B: Pacientes asignados a pediatría con menos de 10 años.",
  apartado1B
);
console.log("APARTADO 2: ¿Activar protocolo de urgencia?", apartado2);
console.log("APARTADO 3: Reasignados a médico de familia.", apartado3);
console.log("APARTADO 4: ¿Hay pacientes asignados a pediatría?", apartado4);
console.log("APARTADO 5: Pacientes por especialidad:", apartado5);

import { pacientes } from "../model";
import {
  pacientesPorEspecialidad,
  NumeroPacientesPorEspecialidad,
} from "../apartado5";

describe("Pruebas del apartado 5", () => {
  it(`Queremos calcular el número total de pacientes que están asignados 
        a la especialidad de Medico de familia, y lo que están asignados a
        Pediatría y a cardiología`, () => {
    // Arrange
    const shouldBe: NumeroPacientesPorEspecialidad = {
      medicoDeFamilia: 3,
      pediatria: 2,
      cardiologia: 1,
    };
    // Act
    const test: NumeroPacientesPorEspecialidad =
      pacientesPorEspecialidad(pacientes);
    // Assert
    expect(test).toStrictEqual(shouldBe);
  });
});

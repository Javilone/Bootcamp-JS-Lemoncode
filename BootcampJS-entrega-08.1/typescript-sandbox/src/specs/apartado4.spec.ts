import { pacientes } from "../model";
import { hayPacientesDePediatria } from "../apartado4";

describe("Pruebas del apartado 4", () => {
  it(`Queremos saber si podemos mandar al Pediatra a casa (si no tiene pacientes asignados), 
        comprobar si en la lista hay algún paciente asignado a pediatría`),
    () => {
      // Arrange
      const shouldBe = true;
      // Act
      const test = hayPacientesDePediatria(pacientes);
      // Assert
      expect(test).toBe(shouldBe);
    };
});

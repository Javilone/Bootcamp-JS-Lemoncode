import { pacientes } from "../model";
import {
  asignadosPediatria,
  asignadosPediatriaMenorDiezAños,
} from "../apartado1";

describe("Pruebas de los distintos apartados", () => {
  it("1A)Queremos extraer la lista de paciente que están asignados a la especialidad de Pediatría", () => {
    // Arrange
    const shouldBe = [
      {
        id: 3,
        nombre: "Junior",
        apellidos: "Doe",
        sexo: "Male",
        temperatura: 36.8,
        frecuenciaCardiaca: 90,
        especialidad: "Pediatra",
        edad: 8,
      },
      {
        id: 6,
        nombre: "Brian",
        apellidos: "Kid",
        sexo: "Male",
        temperatura: 39.8,
        frecuenciaCardiaca: 80,
        especialidad: "Pediatra",
        edad: 11,
      },
    ];
    // Act
    const test = asignadosPediatria(pacientes);
    // Assert
    expect(test).toStrictEqual(shouldBe);
  });

  it("Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.", () => {
    // Arrange
    const shouldBe = [
      {
        id: 3,
        nombre: "Junior",
        apellidos: "Doe",
        sexo: "Male",
        temperatura: 36.8,
        frecuenciaCardiaca: 90,
        especialidad: "Pediatra",
        edad: 8,
      },
    ];
    // Act
    const test = asignadosPediatriaMenorDiezAños(pacientes);
    // Assert
    expect(test).toStrictEqual(shouldBe);
  });
});

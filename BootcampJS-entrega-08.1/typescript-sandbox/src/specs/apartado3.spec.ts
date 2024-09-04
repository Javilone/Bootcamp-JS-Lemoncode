import { pacientes, Pacientes } from "../model";
import { reasignarAMedicoFamilia } from "../apartado3";

describe("Pruebas del apartado 3", () => {
  it(`El pediatra no puede atender hoy a los pacientes, queremos reasignar los pacientes 
        asignados a la especialidad de pediatría a la de medico de familia.`, () => {
    // Arrange
    const shouldBe: Pacientes[] = [
      {
        apellidos: "Doe",
        edad: 8,
        especialidad: "Medico de familia",
        frecuenciaCardiaca: 90,
        id: 3,
        nombre: "Junior",
        sexo: "Male",
        temperatura: 36.8,
      },
      {
        id: 6,
        nombre: "Brian",
        apellidos: "Kid",
        sexo: "Male",
        temperatura: 39.8,
        frecuenciaCardiaca: 80,
        especialidad: "Medico de familia",
        edad: 11,
      },
    ];
    // Act
    const test = reasignarAMedicoFamilia(pacientes);
    // Assert
    expect(test).toStrictEqual(shouldBe);
  });
});

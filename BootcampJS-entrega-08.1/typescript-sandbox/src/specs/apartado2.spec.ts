import { pacientes } from "../model";
import { activarProtocoloUrgencia } from "../apartado2";

describe("Pruebas del apartado 2", () => {
  it(`Queremos activar el protocolo de urgencia si cualquier de los pacientes tiene un ritmo 
        cardíaco superior a 100 pulsaciones por minuto y una
        temperatura corporal superior a 39 grados.`, () => {
    // Arrange
    const shouldBe = false;
    /* == LAS PRUEBAS CON MOCK DATAS ARROJARON EL VALOR CORRECTO ESPERADO == */
    //const mockBoolean = true;
    /*const mockData: Pacientes[] = [
      {
        id: 2,
        nombre: "Jane",
        apellidos: "Doe",
        sexo: "Female",
        temperatura: 39.8,
        frecuenciaCardiaca: 120,
        especialidad: "Medico de familia",
        edad: 43,
      },
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
    ]; */
    // Act
    const test = activarProtocoloUrgencia(pacientes);
    //const mockTest = activarProtocoloUrgencia(pacientes);
    // Assert
    expect(test).toBe(shouldBe);
    //expect(mockTest).toBe(mockData);
  });
});

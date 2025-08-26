import { 
    saludar, 
    saludarNombre

 } from "./saludador.js";

describe("Funciones de Saludador", () => {
  it("deberia saludar con 'Hola Ok' ", () => {
    expect(saludar()).toEqual("Hola Ok");
  }); 
  const nombre = "Nicole" 
  it("deberia saludar con 'Hola Nicole'" , () => {
    expect(saludarNombre(nombre)).toEqual("Hola Nicole");
  });
});

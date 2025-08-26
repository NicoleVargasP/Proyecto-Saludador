import {
  saludar,
  saludarNombre,
  SaludarPorGenEdad,
  saludarPorHora
} from "./saludador.js";

document.addEventListener("DOMContentLoaded", () => {
const form = document.querySelector("#saludador-form");
const inputNombre = document.querySelector("#nombre-input");
const inputEdad=document.querySelector("#edad-input");   
const selectGenero= document.querySelector("#genero-select"); 
const saludardiv = document.querySelector("#saludar-div");

saludardiv.innerHTML = `
  <p>${saludar()}</p>
  <p>${saludarPorHora()}</p>
`;
  
form.addEventListener("submit", (event) => {
  event.preventDefault(); 

  const nombre = inputNombre.value; 
  const edad = Number.parseInt(inputEdad.value);
const genero = selectGenero.value;
    saludardiv.innerHTML += `
      <p>${saludarNombre(nombre)}</p> 
      <p>${SaludarPorGenEdad(genero, edad)} ${nombre}</p>
    `;
  });
});
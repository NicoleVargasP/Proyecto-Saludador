import saludar from "./saludador";


const form = document.querySelector("#saludar-form");
const saludardiv = document.querySelector("#saludar-div");

  saludardiv.innerHTML = "<p>" + saludar() + "</p>";
;

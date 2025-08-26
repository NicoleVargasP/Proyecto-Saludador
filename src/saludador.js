function saludar () {
    return "Hola Ok"
} 

function saludarNombre (nombre) {
    return "Hola " + nombre
} 
function saludarPorHora() {
  let fechaActual = new Date();
  let horaActual = fechaActual.getHours();
  let res = "";  

  if (horaActual >= 6 && horaActual < 12) {
    res =  "Buenos días";
  } else if (horaActual >= 12 && horaActual < 19) {
    res =  "Buenas tardes";
  } else {
    res = "Buenas noches";
  }
  return res
}

export { 
    saludar, 
    saludarNombre,
    saludarPorHora
};
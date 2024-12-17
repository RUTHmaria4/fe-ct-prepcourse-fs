function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
 return array.map(elemento => {
  if (typeof elemento === "string") {
    return elemento.toUpperCase();
  }
  return elemento; 
 })

}

module.exports = convertirStringAMayusculas;


/// EJEMPLO
 console.log(convertirStringAMayusculas(["hola", 10, "¿como estas?", 5, "respuesta", 7, "mente subconsciente"]))
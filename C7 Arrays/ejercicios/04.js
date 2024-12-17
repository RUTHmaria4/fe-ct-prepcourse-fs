function agregarItemAlFinalDelArray(array, elemento) {
  // Agrega el "elemento" al final del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:

  array.push(elemento);
  return array; 

  
}

module.exports = agregarItemAlFinalDelArray;

//EJEMPLO
let vocales = ["a", "e", "i", "o", "u"];
let resultados = agregarItemAlFinalDelArray(vocales, "u")
console.log(resultados)

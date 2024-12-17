function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:

   return array.map((elemento, indice) => elemento * indice);
}

module.exports = multiplicarElementosPorIndice;


//EJEMPLO
console.log(multiplicarElementosPorIndice([1, 9, 9, 3]));
console.log(multiplicarElementosPorIndice([1, 9, 7, 2]));
console.log (multiplicarElementosPorIndice([1, 9, 7, 3])); 
